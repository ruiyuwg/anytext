import type { Adapter, SourceConfig, ProcessedTopic } from "../types.js";
import { fetchContent } from "../pipeline/fetch.js";
import { cleanMarkdown } from "../pipeline/clean.js";
import { splitIntoTopics } from "../pipeline/split.js";
import { slugify, estimateTokens, truncate } from "../utils.js";
import { visit } from "unist-util-visit";
import { unified } from "unified";
import remarkParse from "remark-parse";
import type { Link, Text } from "mdast";

export const llmsIndexAdapter: Adapter = {
  async process(source: SourceConfig): Promise<ProcessedTopic[]> {
    const config = source.llmsIndex;
    if (!config) {
      throw new Error(
        `Source ${source.id} requires llmsIndex config for llms-index adapter`,
      );
    }
    if (!source.url) {
      throw new Error(`Source ${source.id} has no URL configured`);
    }

    const rootContent = await fetchContent(source.url);
    console.log(`  Fetched root index (${rootContent.length} chars)`);

    // Extract service URLs using the configured regex pattern
    const servicePattern = new RegExp(config.servicePattern, "g");
    let serviceUrls: string[] = [];
    let match: RegExpExecArray | null;
    while ((match = servicePattern.exec(rootContent)) !== null) {
      const url = match[1] ?? match[0];
      const resolvedUrl = new URL(url, source.url).href;
      serviceUrls.push(resolvedUrl);
    }
    console.log(`  Discovered ${serviceUrls.length} service URLs`);

    // Apply include/exclude filters
    if (config.include && config.include.length > 0) {
      serviceUrls = serviceUrls.filter((url) =>
        config.include!.some((pattern) => url.includes(pattern)),
      );
    }
    if (config.exclude && config.exclude.length > 0) {
      serviceUrls = serviceUrls.filter(
        (url) => !config.exclude!.some((pattern) => url.includes(pattern)),
      );
    }

    // Apply maxServices limit
    const maxServices = config.maxServices ?? 1000;
    if (serviceUrls.length > maxServices) {
      console.log(
        `  Limiting to ${maxServices} services (found ${serviceUrls.length})`,
      );
      serviceUrls = serviceUrls.slice(0, maxServices);
    }

    const allTopics: ProcessedTopic[] = [];
    const batchSize = 4;

    for (let i = 0; i < serviceUrls.length; i += batchSize) {
      const batch = serviceUrls.slice(i, i + batchSize);
      const results = await Promise.allSettled(
        batch.map((url, j) => {
          const serviceIndex = i + j + 1;
          return processService(
            url,
            serviceIndex,
            serviceUrls.length,
            config.contentType,
            source,
          );
        }),
      );

      for (const result of results) {
        if (result.status === "fulfilled") {
          allTopics.push(...result.value);
        } else {
          console.warn(
            `  Service failed: ${(result.reason as Error).message}`,
          );
        }
      }
    }

    console.log(`  Completed: ${allTopics.length} total topics`);
    return allTopics;
  },
};

function extractServiceSlug(serviceUrl: string): string {
  const url = new URL(serviceUrl);
  // Extract service name from URL path segments
  const segments = url.pathname
    .split("/")
    .filter((s) => s.length > 0 && s !== "llms.txt" && s !== "llms-full.txt");
  const lastSegment = segments[segments.length - 1] ?? url.hostname;
  return slugify(lastSegment);
}

function formatServiceName(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function processService(
  serviceUrl: string,
  index: number,
  total: number,
  contentType: "llms-txt" | "llms-full",
  source: SourceConfig,
): Promise<ProcessedTopic[]> {
  const serviceSlug = extractServiceSlug(serviceUrl);
  const serviceName = formatServiceName(serviceSlug);
  console.log(`  Processing service ${index}/${total}: ${serviceName}`);

  const raw = await fetchContent(serviceUrl);

  if (contentType === "llms-full") {
    return processLlmsFull(raw, serviceSlug, serviceName, source);
  } else {
    return processLlmsTxt(raw, serviceUrl, serviceSlug, serviceName, source);
  }
}

async function processLlmsFull(
  raw: string,
  serviceSlug: string,
  serviceName: string,
  source: SourceConfig,
): Promise<ProcessedTopic[]> {
  const cleaned = await cleanMarkdown(raw, source.preprocess);
  const topics = splitIntoTopics(cleaned, source.splitConfig);

  // Prefix topic IDs and titles with service context
  const prefixedTopics = topics.map((topic) => ({
    ...topic,
    id: `${serviceSlug}-${topic.id}`,
    title: `${serviceName}: ${topic.title}`,
  }));

  if (prefixedTopics.length < 2) {
    console.log(
      `  Skipping ${serviceName}: only ${prefixedTopics.length} topics`,
    );
    return [];
  }

  return prefixedTopics;
}

async function processLlmsTxt(
  indexContent: string,
  serviceUrl: string,
  serviceSlug: string,
  serviceName: string,
  source: SourceConfig,
): Promise<ProcessedTopic[]> {
  const links = extractMarkdownLinks(indexContent, serviceUrl);

  const topics: ProcessedTopic[] = [];

  for (const link of links) {
    try {
      const raw = await fetchContent(link.url);
      const cleaned = await cleanMarkdown(raw, source.preprocess);
      const tokens = estimateTokens(cleaned);

      if (tokens < 100) {
        continue;
      }

      const id = `${serviceSlug}-${slugify(link.title)}`;
      const firstLine = extractFirstParagraph(cleaned);

      topics.push({
        id,
        title: `${serviceName}: ${link.title}`,
        description: truncate(firstLine, 120),
        tags: extractInlineCode(cleaned).slice(0, 10),
        tokens,
        content: cleaned,
      });
    } catch (err) {
      console.warn(
        `  Failed to fetch ${link.url}: ${(err as Error).message}`,
      );
    }
  }

  if (topics.length < 2) {
    console.log(`  Skipping ${serviceName}: only ${topics.length} topics`);
    return [];
  }

  return topics;
}

function extractMarkdownLinks(
  indexContent: string,
  baseUrl: string,
): Array<{ title: string; url: string }> {
  const tree = unified().use(remarkParse).parse(indexContent);
  const links: Array<{ title: string; url: string }> = [];

  visit(tree, "link", (node: Link) => {
    const url = node.url;
    if (
      url.endsWith(".md") ||
      url.includes(".md?") ||
      url.includes("/docs/")
    ) {
      const title = extractTextContent(node);
      if (title) {
        const resolvedUrl = new URL(url, baseUrl).href;
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
