import type { Adapter, SourceConfig, ProcessedTopic, RateLimiterLike } from "../types.js";
import { fetchContent } from "../pipeline/fetch.js";
import { extractContent } from "../pipeline/extract.js";
import { slugify, estimateTokens, truncate } from "../utils.js";

export const sitemapAdapter: Adapter = {
  async process(
    source: SourceConfig,
    _prefetchedContent?: string,
    rateLimiter?: RateLimiterLike,
  ): Promise<ProcessedTopic[]> {
    if (!source.url) {
      throw new Error(`Source ${source.id} has no URL configured`);
    }

    const crawlConfig = source.crawl ?? {};

    // Fetch and parse sitemap.xml (or sitemap index)
    await rateLimiter?.acquire();
    const sitemapXml = await fetchContent(source.url);
    const urls = await resolveUrls(sitemapXml, crawlConfig.maxPages, rateLimiter);

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
          await rateLimiter?.acquire();
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
        const baseTitle = titleMatch?.[1]?.trim() ?? deriveTitle(url);
        const baseId = slugify(baseTitle);

        // Apply topic prefix based on URL path
        const prefixMode = source.topicPrefix ?? "none";
        let id = baseId;
        let title = baseTitle;
        if (prefixMode === "directory" || prefixMode === "auto") {
          const prefix = deriveUrlPrefix(url);
          if (prefix) {
            id = `${prefix}-${baseId}`;
            const displayPrefix = prefix
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");
            title = `${displayPrefix}: ${baseTitle}`;
          }
        }

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

async function resolveUrls(
  xml: string,
  maxPages?: number,
  rateLimiter?: RateLimiterLike,
): Promise<string[]> {
  if (!isSitemapIndex(xml)) {
    const urls = parseSitemapUrls(xml);
    if (maxPages && urls.length > maxPages) {
      console.warn(
        `  maxPages limit reached: ${urls.length} URLs found, limiting to ${maxPages}`,
      );
      return urls.slice(0, maxPages);
    }
    return urls;
  }

  // Sitemap index: extract sub-sitemap URLs and fetch each
  const subSitemapUrls = parseSitemapUrls(xml);
  console.log(
    `  Detected sitemap index with ${subSitemapUrls.length} sub-sitemaps`,
  );

  const allUrls: string[] = [];
  for (const subUrl of subSitemapUrls) {
    if (maxPages && allUrls.length >= maxPages) {
      console.warn(
        `  maxPages limit reached (${maxPages}), stopping sub-sitemap fetching`,
      );
      break;
    }

    try {
      await rateLimiter?.acquire();
      const subXml = await fetchContent(subUrl);
      const pageUrls = parseSitemapUrls(subXml);

      if (maxPages) {
        const remaining = maxPages - allUrls.length;
        allUrls.push(...pageUrls.slice(0, remaining));
      } else {
        allUrls.push(...pageUrls);
      }
    } catch (error) {
      console.warn(
        `  Failed to fetch sub-sitemap ${subUrl}: ${(error as Error).message}`,
      );
    }
  }

  return allUrls;
}

function isSitemapIndex(xml: string): boolean {
  return xml.includes("<sitemapindex");
}

function parseSitemapUrls(xml: string): string[] {
  const urls: string[] = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]!);
  }
  return urls;
}

const DOC_PATH_PREFIXES = ["/docs/", "/documentation/", "/guide/"];

function deriveUrlPrefix(url: string): string | undefined {
  const pathname = new URL(url).pathname;
  for (const docPrefix of DOC_PATH_PREFIXES) {
    const idx = pathname.indexOf(docPrefix);
    if (idx !== -1) {
      const after = pathname.slice(idx + docPrefix.length);
      const segments = after.split("/").filter(Boolean);
      if (segments.length > 1) {
        return slugify(segments[0]!);
      }
      return undefined;
    }
  }
  // No known doc prefix — use first significant path segment if there are enough segments
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 1) {
    return slugify(segments[0]!);
  }
  return undefined;
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
