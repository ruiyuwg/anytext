import type { Adapter, SourceConfig, ProcessedTopic } from "../types.js";
import { fetchContent } from "../pipeline/fetch.js";
import { extractContent, extractLinks } from "../pipeline/extract.js";
import { slugify, estimateTokens, truncate } from "../utils.js";

export const htmlAdapter: Adapter = {
  async process(
    source: SourceConfig,
    _prefetchedContent?: string,
  ): Promise<ProcessedTopic[]> {
    if (!source.url) {
      throw new Error(`Source ${source.id} has no URL configured`);
    }

    const crawlConfig = source.crawl ?? {};
    const startUrls = crawlConfig.startPaths?.map(
      (p) => new URL(p, source.url).href,
    ) ?? [source.url];

    const visited = new Set<string>();
    const toVisit = [...startUrls];
    const topics: ProcessedTopic[] = [];
    const batchSize = 8;

    while (toVisit.length > 0) {
      const batch = toVisit.splice(0, batchSize);

      const results = await Promise.allSettled(
        batch
          .filter((url) => !visited.has(url))
          .map(async (url) => {
            visited.add(url);
            const html = await fetchContent(url);
            return { url, html };
          }),
      );

      for (const result of results) {
        if (result.status === "rejected") {
          console.warn(
            `  Failed to fetch page: ${(result.reason as Error).message}`,
          );
          continue;
        }

        const { url, html } = result.value;

        // Extract and enqueue new links
        const newLinks = extractLinks(html, url, {
          include: crawlConfig.include,
          exclude: crawlConfig.exclude,
        });
        for (const link of newLinks) {
          if (!visited.has(link)) {
            toVisit.push(link);
          }
        }

        // Extract markdown content
        const markdown = extractContent(html, {
          contentSelector: crawlConfig.contentSelector,
          removeSelectors: crawlConfig.removeSelectors,
        });

        const tokens = estimateTokens(markdown);
        if (tokens < 100) {
          console.log(`  Skipping ${url} (too small: ${tokens} tokens)`);
          continue;
        }

        // Derive title from first H1
        const titleMatch = markdown.match(/^#\s+(.+)/m);
        const title = titleMatch?.[1]?.trim() ?? deriveTitle(url);
        const id = slugify(title);

        const firstParagraph = extractFirstParagraph(markdown);

        topics.push({
          id,
          title,
          description: truncate(firstParagraph, 120),
          tags: extractInlineCode(markdown).slice(0, 10),
          tokens,
          content: markdown,
        });

        console.log(`  Processed ${id} (${tokens} tokens)`);
      }
    }

    console.log(
      `  Crawled ${visited.size} pages, generated ${topics.length} topics`,
    );

    return topics;
  },
};

function deriveTitle(url: string): string {
  const pathname = new URL(url).pathname;
  const segments = pathname.split("/").filter(Boolean);
  return segments[segments.length - 1] ?? "index";
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
