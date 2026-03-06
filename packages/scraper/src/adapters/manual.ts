import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import type { Adapter, SourceConfig, ProcessedTopic } from "../types.js";
import { estimateTokens } from "../utils.js";
import { getRegistryDir } from "../pipeline/manifest.js";

export const manualAdapter: Adapter = {
  async process(source: SourceConfig): Promise<ProcessedTopic[]> {
    // Read existing docs from registry — no fetching or processing
    const docsDir = path.join(getRegistryDir(), "docs", source.id);

    let files: string[];
    try {
      files = readdirSync(docsDir).filter((f) => f.endsWith(".md"));
    } catch {
      console.log(`  No existing docs found for ${source.id}, skipping`);
      return [];
    }

    const topics: ProcessedTopic[] = [];

    for (const file of files) {
      const content = readFileSync(path.join(docsDir, file), "utf-8");
      const id = file.replace(/\.md$/, "");
      const title = extractTitle(content) ?? id;

      topics.push({
        id,
        title,
        description: extractDescription(content),
        tags: extractInlineCode(content).slice(0, 10),
        tokens: estimateTokens(content),
        content,
      });

      console.log(`  Read ${file} (${estimateTokens(content)} tokens)`);
    }

    return topics;
  },
};

function extractTitle(markdown: string): string | undefined {
  const match = markdown.match(/^#\s+(.+)/m);
  return match?.[1]?.trim();
}

function extractDescription(markdown: string): string {
  const lines = markdown.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed.length > 10 &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("```")
    ) {
      return trimmed.slice(0, 120);
    }
  }
  return "";
}

function extractInlineCode(markdown: string): string[] {
  const matches = markdown.match(/`([^`]+)`/g);
  if (!matches) return [];
  const unique = new Set(
    matches
      .map((m) => m.slice(1, -1).trim())
      .filter((s) => s.length > 0 && s.length < 40)
  );
  return [...unique];
}
