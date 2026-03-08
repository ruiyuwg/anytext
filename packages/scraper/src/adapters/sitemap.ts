import type { Adapter, SourceConfig, ProcessedTopic } from "../types.js";
import { fetchContent } from "../pipeline/fetch.js";
import { extractContent } from "../pipeline/extract.js";
import { slugify, estimateTokens, truncate } from "../utils.js";

export const sitemapAdapter: Adapter = {
  async process(
    source: SourceConfig,
    _prefetchedContent?: string,
  ): Promise<ProcessedTopic[]> {
    if (!source.url) {
      throw new Error(`Source ${source.id} has no URL configured`);
    }

    const crawlConfig = source.crawl ?? {};

    // Fetch and parse sitemap.xml
    const sitemapXml = await fetchContent(source.url);
    const urls = parseSitemapUrls(sitemapXml);

    // Apply include/exclude patterns
    let filtered = urls;
    if (crawlConfig.include?.length) {
      filtered = filtered.filter((url) =>
        crawlConfig.include!.some((pattern) => new RegExp(pattern).test(url)),
      );
    }
    if (crawlConfig.exclude?.length) {
      filtered = filtered.filter(
        (url) =>
          !crawlConfig.exclude!.some((pattern) =>
            new RegExp(pattern).test(url),
          ),
      );
    }

    console.log(
      `  Found ${urls.length} URLs in sitemap, ${filtered.length} after filtering`,
    );

    const topics: ProcessedTopic[] = [];
    const batchSize = 8;

    for (let i = 0; i < filtered.length; i += batchSize) {
      const batch = filtered.slice(i, i + batchSize);
      const results = await Promise.allSettled(
        batch.map(async (url) => {
          const html = await fetchContent(url);
          return { url, html };
        }),
      );

      for (const result of results) {
        if (result.status === "rejected") {
          console.warn(
            `  Failed: ${(result.reason as Error).message}`,
          );
          continue;
        }

        const { url, html } = result.value;
        const markdown = extractContent(html, {
          contentSelector: crawlConfig.contentSelector,
          removeSelectors: crawlConfig.removeSelectors,
        });

        const tokens = estimateTokens(markdown);
        if (tokens < 100) {
          console.log(`  Skipping ${url} (too small: ${tokens} tokens)`);
          continue;
        }

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

    console.log(`  Generated ${topics.length} topics from sitemap`);
    return topics;
  },
};

function parseSitemapUrls(xml: string): string[] {
  const urls: string[] = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]!);
  }
  return urls;
}

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
