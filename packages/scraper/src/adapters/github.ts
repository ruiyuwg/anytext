import type { Adapter, SourceConfig, ProcessedTopic } from "../types.js";
import { slugify, estimateTokens, truncate } from "../utils.js";

export const githubAdapter: Adapter = {
  async process(
    source: SourceConfig,
    _prefetchedContent?: string,
  ): Promise<ProcessedTopic[]> {
    const config = source.github;
    if (!config) {
      throw new Error(`Source ${source.id} has no github config`);
    }

    const branch = config.branch ?? "main";
    const docsPath = config.docsPath ?? "docs";

    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "anytext-scraper",
    };
    if (process.env["GITHUB_TOKEN"]) {
      headers["Authorization"] = `Bearer ${process.env["GITHUB_TOKEN"]}`;
    }

    // Fetch tree listing
    const treeUrl = `https://api.github.com/repos/${config.repo}/git/trees/${branch}?recursive=1`;
    console.log(`  Fetching tree from ${config.repo}`);

    const treeResponse = await fetch(treeUrl, { headers });
    if (!treeResponse.ok) {
      throw new Error(
        `Failed to fetch tree: ${treeResponse.status} ${treeResponse.statusText}`,
      );
    }

    const treeData = (await treeResponse.json()) as {
      tree: Array<{ path: string; type: string }>;
    };

    // Filter for .md files in docs path
    let mdFiles = treeData.tree.filter(
      (item) =>
        item.type === "blob" &&
        item.path.startsWith(docsPath + "/") &&
        (item.path.endsWith(".md") || item.path.endsWith(".mdx")),
    );

    // Apply include/exclude patterns
    if (config.include?.length) {
      mdFiles = mdFiles.filter((f) =>
        config.include!.some((pattern) => new RegExp(pattern).test(f.path)),
      );
    }
    if (config.exclude?.length) {
      mdFiles = mdFiles.filter(
        (f) =>
          !config.exclude!.some((pattern) => new RegExp(pattern).test(f.path)),
      );
    }

    console.log(`  Found ${mdFiles.length} markdown files`);

    const topics: ProcessedTopic[] = [];
    const batchSize = 8;

    for (let i = 0; i < mdFiles.length; i += batchSize) {
      const batch = mdFiles.slice(i, i + batchSize);
      const results = await Promise.allSettled(
        batch.map(async (file) => {
          const rawUrl = `https://raw.githubusercontent.com/${config.repo}/${branch}/${file.path}`;
          const response = await fetch(rawUrl, {
            headers: { "User-Agent": "anytext-scraper" },
          });
          if (!response.ok) {
            throw new Error(`Failed to fetch ${file.path}: ${response.status}`);
          }
          return { path: file.path, content: await response.text() };
        }),
      );

      for (const result of results) {
        if (result.status === "rejected") {
          console.warn(
            `  Failed: ${(result.reason as Error).message}`,
          );
          continue;
        }

        const { path, content } = result.value;
        const tokens = estimateTokens(content);

        if (tokens < 100) {
          console.log(`  Skipping ${path} (too small: ${tokens} tokens)`);
          continue;
        }

        // Derive title from first H1, or from filename
        const titleMatch = content.match(/^#\s+(.+)/m);
        const filename = path.split("/").pop()!.replace(/\.mdx?$/, "");
        const title = titleMatch?.[1]?.trim() ?? filename;
        const id = slugify(filename);

        const firstParagraph = extractFirstParagraph(content);

        topics.push({
          id,
          title,
          description: truncate(firstParagraph, 120),
          tags: extractInlineCode(content).slice(0, 10),
          tokens,
          content,
        });

        console.log(`  Processed ${id} (${tokens} tokens)`);
      }
    }

    console.log(`  Generated ${topics.length} topics from ${config.repo}`);
    return topics;
  },
};

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
