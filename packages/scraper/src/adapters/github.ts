import type { Adapter, SourceConfig, ProcessedTopic } from "../types.js";
import { slugify, estimateTokens, truncate } from "../utils.js";

interface FileEntry {
  path: string;
  type: string;
}

function buildHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "anytext-scraper",
  };
  if (process.env["GITHUB_TOKEN"]) {
    headers["Authorization"] = `Bearer ${process.env["GITHUB_TOKEN"]}`;
  }
  return headers;
}

async function fetchContentsApi(
  repo: string,
  dirPath: string,
  branch: string,
  headers: Record<string, string>,
): Promise<FileEntry[]> {
  const url = `https://api.github.com/repos/${repo}/contents/${dirPath}?ref=${branch}`;
  console.log(`  Fetching contents for ${dirPath} via Contents API`);
  const response = await fetch(url, { headers });
  if (!response.ok) {
    console.warn(`  Failed to fetch contents for ${dirPath}: ${response.status}`);
    return [];
  }
  const items = (await response.json()) as Array<{ path: string; type: string; name: string }>;
  return items
    .filter((item) => item.type === "file" && (item.name.endsWith(".md") || item.name.endsWith(".mdx")))
    .map((item) => ({ path: item.path, type: "blob" }));
}

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
    const maxFiles = config.maxFiles ?? 10000;
    const headers = buildHeaders();

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
      truncated?: boolean;
    };

    let mdFiles: FileEntry[];

    if (treeData.truncated && config.subDirs?.length) {
      // Tree is truncated — fall back to Contents API per subDir
      console.warn(`  Tree response truncated, falling back to Contents API`);
      mdFiles = [];
      for (const subDir of config.subDirs) {
        const dirPath = `${docsPath}/${subDir}`;
        const files = await fetchContentsApi(config.repo, dirPath, branch, headers);
        mdFiles.push(...files);
      }
    } else {
      // Filter for .md files in docs path
      mdFiles = treeData.tree.filter(
        (item) =>
          item.type === "blob" &&
          item.path.startsWith(docsPath + "/") &&
          (item.path.endsWith(".md") || item.path.endsWith(".mdx")),
      );

      // Apply subDirs filter
      if (config.subDirs?.length) {
        const prefixes = config.subDirs.map((sub) => `${docsPath}/${sub}/`);
        mdFiles = mdFiles.filter((f) =>
          prefixes.some((prefix) => f.path.startsWith(prefix)),
        );
      }
    }

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

    // Apply maxFiles limit
    if (mdFiles.length > maxFiles) {
      console.warn(`  maxFiles limit reached: ${mdFiles.length} files found, processing only ${maxFiles}`);
      mdFiles = mdFiles.slice(0, maxFiles);
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
        const baseTitle = titleMatch?.[1]?.trim() ?? filename;
        const baseId = slugify(filename);

        // Apply topic prefix based on subdirectory
        const prefixMode = source.topicPrefix ?? "none";
        let id = baseId;
        let title = baseTitle;
        if (prefixMode === "directory" || prefixMode === "auto") {
          const relativePath = path.slice(docsPath.length + 1); // strip "docsPath/"
          const segments = relativePath.split("/");
          if (segments.length > 1) {
            const subDir = segments[0]!;
            const prefix = slugify(subDir);
            id = `${prefix}-${baseId}`;
            // Capitalize subdirectory for display title
            const displayPrefix = subDir
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");
            title = `${displayPrefix}: ${baseTitle}`;
          }
        }

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
