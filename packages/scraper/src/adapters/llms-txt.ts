import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { Adapter, SourceConfig, ProcessedTopic } from "../types.js";
import { fetchContent } from "../pipeline/fetch.js";
import { cleanMarkdown } from "../pipeline/clean.js";
import { slugify, estimateTokens, truncate } from "../utils.js";
import { getRegistryDir } from "../pipeline/manifest.js";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkParse from "remark-parse";
import type { Link, Text } from "mdast";

export const llmsTxtAdapter: Adapter = {
  async process(source: SourceConfig): Promise<ProcessedTopic[]> {
    if (!source.url) {
      throw new Error(`Source ${source.id} has no URL configured`);
    }

    const index = await fetchContent(source.url);
    console.log(`  Fetched index (${index.length} chars)`);

    // Parse out .md links from the index
    const links = extractMarkdownLinks(index);
    console.log(`  Found ${links.length} doc links`);

    const topics: ProcessedTopic[] = [];
    let failedCount = 0;

    for (const link of links) {
      try {
        const raw = await fetchContent(link.url);
        const cleaned = await cleanMarkdown(raw);
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
        console.warn(`  Failed to fetch ${link.url}: ${(err as Error).message}`);
      }
    }

    if (links.length > 0 && failedCount / links.length > 0.5) {
      throw new Error(`Too many failures: ${failedCount}/${links.length} links failed for ${source.id}`);
    }
    console.log(`  Completed: ${topics.length} processed, ${failedCount} failed out of ${links.length} links`);

    // Apply overrides
    const finalTopics = topics.map((topic) => {
      const override = source.topicOverrides?.[topic.id];
      if (override) {
        return { ...topic, ...override, content: topic.content };
      }
      return topic;
    });

    // Write doc files
    const docsDir = path.join(getRegistryDir(), "docs", source.id);
    rmSync(docsDir, { recursive: true, force: true });
    mkdirSync(docsDir, { recursive: true });

    for (const topic of finalTopics) {
      const filePath = path.join(docsDir, `${topic.id}.md`);
      writeFileSync(filePath, topic.content + "\n", "utf-8");
      console.log(`  Wrote ${topic.id}.md (${topic.tokens} tokens)`);
    }

    return finalTopics;
  },
};

interface DocLink {
  title: string;
  url: string;
}

function extractMarkdownLinks(indexContent: string): DocLink[] {
  const tree = unified().use(remarkParse).parse(indexContent);
  const links: DocLink[] = [];

  visit(tree, "link", (node: Link) => {
    const url = node.url;
    if (url.endsWith(".md") || url.includes(".md?") || url.includes("/docs/")) {
      const title = extractTextContent(node);
      if (title) {
        // Resolve relative URLs
        const resolvedUrl = url.startsWith("http") ? url : url;
        links.push({ title, url: resolvedUrl });
      }
    }
  });

  return links;
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
      .filter((s) => s.length > 0 && s.length < 40)
  );
  return [...unique];
}
