import type { Adapter, SourceConfig, ProcessedTopic, RateLimiterLike } from "../types.js";
import { fetchContent } from "../pipeline/fetch.js";
import { cleanMarkdown } from "../pipeline/clean.js";
import { extractContent } from "../pipeline/extract.js";
import { slugify, estimateTokens, truncate } from "../utils.js";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkParse from "remark-parse";
import type { Link, Text } from "mdast";

export const llmsTxtAdapter: Adapter = {
  async process(
    source: SourceConfig,
    prefetchedContent?: string,
    rateLimiter?: RateLimiterLike,
  ): Promise<ProcessedTopic[]> {
    if (!source.url) {
      throw new Error(`Source ${source.id} has no URL configured`);
    }

    if (!prefetchedContent) {
      await rateLimiter?.acquire();
    }
    const index = prefetchedContent ?? (await fetchContent(source.url));
    console.log(`  Fetched index (${index.length} chars)`);

    // Parse out .md links from the index
    const links = extractMarkdownLinks(index, source.url);
    console.log(`  Found ${links.length} doc links`);

    const topics: ProcessedTopic[] = [];
    let failedCount = 0;

    for (const link of links) {
      try {
        await rateLimiter?.acquire();
        const raw = await fetchContent(link.url);

        // Detect HTML content and extract markdown using cheerio/turndown
        const isHtml = raw.trimStart().startsWith("<!") || raw.trimStart().toLowerCase().startsWith("<html");
        let cleaned: string;
        if (isHtml) {
          const extracted = extractContent(raw, {
            contentSelector: source.crawl?.contentSelector,
            removeSelectors: source.crawl?.removeSelectors,
          });
          cleaned = await cleanMarkdown(extracted, source.preprocess);
        } else {
          cleaned = await cleanMarkdown(raw, source.preprocess);
        }
        const tokens = estimateTokens(cleaned);

        if (tokens < 100) {
          console.log(`  Skipping ${link.title} (too small: ${tokens} tokens)`);
          continue;
        }

        const id = slugify(link.title);
        const firstParagraph = extractFirstParagraph(cleaned);

        const topic: ProcessedTopic = {
          id,
          title: link.title,
          description: truncate(firstParagraph, 120),
          tags: extractInlineCode(cleaned).slice(0, 10),
          tokens,
          content: cleaned,
        };

        topics.push(topic);
        console.log(`  Processed ${id} (${tokens} tokens)`);
      } catch (err) {
        failedCount++;
        console.warn(
          `  Failed to fetch ${link.url}: ${(err as Error).message}`,
        );
      }
    }

    if (links.length > 0 && failedCount / links.length > 0.5) {
      throw new Error(
        `Too many failures: ${failedCount}/${links.length} links failed for ${source.id}`,
      );
    }
    console.log(
      `  Completed: ${topics.length} processed, ${failedCount} failed out of ${links.length} links`,
    );

    // Apply overrides
    const finalTopics = topics.map((topic) => {
      const override = source.topicOverrides?.[topic.id];
      if (override) {
        return { ...topic, ...override, content: topic.content };
      }
      return topic;
    });

    return finalTopics;
  },
};

interface DocLink {
  title: string;
  url: string;
}

function extractMarkdownLinks(
  indexContent: string,
  baseUrl: string,
): DocLink[] {
  const tree = unified().use(remarkParse).parse(indexContent);
  const filteredLinks: DocLink[] = [];
  const allLinks: DocLink[] = [];

  visit(tree, "link", (node: Link) => {
    const url = node.url;
    const title = extractTextContent(node);
    if (!title) return;

    const resolvedUrl = new URL(url, baseUrl).href;
    allLinks.push({ title, url: resolvedUrl });

    if (url.endsWith(".md") || url.includes(".md?") || url.includes("/docs/")) {
      filteredLinks.push({ title, url: resolvedUrl });
    }
  });

  // Fall back to all links when filtered links are absent or a tiny outlier
  // fraction of total (e.g., 1 .md link among 85 HTML doc pages like Angular)
  const useFiltered =
    filteredLinks.length > 0 &&
    (allLinks.length < 5 || filteredLinks.length / allLinks.length >= 0.2);
  return useFiltered ? filteredLinks : allLinks;
}

function extractTextContent(node: Link): string {
  const parts: string[] = [];
  visit(node, "text", (textNode: Text) => {
    parts.push(textNode.value);
  });
  return parts.join("");
}

function extractFirstParagraph(markdown: string): string {
  const lines = markdown.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed.length > 10 &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("```") &&
      !trimmed.startsWith("-") &&
      !trimmed.startsWith("|")
    ) {
      return trimmed;
    }
  }
  return "";
}

function extractInlineCode(markdown: string): string[] {
  // Strip code fences first to avoid matching fence backticks as inline code
  const withoutFences = markdown.replace(/```[\s\S]*?```/g, "");
  const matches = withoutFences.match(/`([^`\n]+)`/g);
  if (!matches) return [];
  const unique = new Set(
    matches
      .map((m) => m.slice(1, -1).trim())
      .filter((s) => s.length > 0 && s.length < 40),
  );
  return [...unique];
}
