import { readFileSync } from "node:fs";
import path from "node:path";
import type {
  SourceConfig,
  SourcesFile,
  ManifestLibrary,
  ProcessedTopic,
} from "./types.js";
import { llmsFullAdapter } from "./adapters/llms-full.js";
import { llmsTxtAdapter } from "./adapters/llms-txt.js";
import { htmlAdapter } from "./adapters/html.js";
import { githubAdapter } from "./adapters/github.js";
import { sitemapAdapter } from "./adapters/sitemap.js";
import {
  readManifest,
  writeManifest,
  mergeLibrary,
} from "./pipeline/manifest.js";
import {
  writeTopics,
  commitStaged,
  cleanupStaging,
} from "./pipeline/write.js";
import { fetchContent } from "./pipeline/fetch.js";
import { readHashes, writeHashes, hasChanged } from "./pipeline/hashes.js";
import { hashContent } from "./utils.js";

const adapters: Record<string, import("./types.js").Adapter> = {
  "llms-full": llmsFullAdapter,
  "llms-txt": llmsTxtAdapter,
  html: htmlAdapter,
  github: githubAdapter,
  sitemap: sitemapAdapter,
};

export function loadSources(): SourceConfig[] {
  const sourcesPath = path.resolve(import.meta.dirname, "..", "sources.json");
  const raw = readFileSync(sourcesPath, "utf-8");
  const parsed = JSON.parse(raw) as SourcesFile;
  return parsed.sources;
}

export async function processSource(
  source: SourceConfig,
  dryRun: boolean,
  options?: { force?: boolean; hashes?: Record<string, string> },
): Promise<ProcessedTopic[]> {
  console.log(`\nProcessing ${source.name} (${source.adapter})...`);

  const adapter = adapters[source.adapter];
  if (!adapter) {
    throw new Error(`Unknown adapter: ${source.adapter}`);
  }

  // Incremental update check: fetch content and compare hash
  let prefetchedContent: string | undefined;
  if (source.url && options?.hashes && !options.force) {
    prefetchedContent = await fetchContent(source.url);
    if (!hasChanged(source.id, prefetchedContent, options.hashes)) {
      console.log(`  Skipping ${source.id} (unchanged)`);
      return [];
    }
  }

  const topics = await adapter.process(source, prefetchedContent);

  if (topics.length === 0) {
    console.log(`  No topics generated for ${source.id}`);
    return topics;
  }

  if (!dryRun) {
    writeTopics(source.id, topics);
    commitStaged(source.id);

    const library: ManifestLibrary = {
      id: source.id,
      name: source.name,
      description: source.description,
      version: source.version,
      topics: topics.map((t) => ({
        id: t.id,
        title: t.title,
        description: t.description,
        tags: t.tags,
        path: `${source.id}/${t.id}.md`,
        tokens: t.tokens,
      })),
    };

    const manifest = readManifest();
    const updated = mergeLibrary(manifest, library);
    writeManifest(updated);
    console.log(`  Updated manifest (v${updated.version})`);

    // Update hash for this source
    if (prefetchedContent && options?.hashes) {
      options.hashes[source.id] = hashContent(prefetchedContent);
    }
  } else {
    console.log(`  [dry-run] Would write ${topics.length} topics to manifest`);
    for (const t of topics) {
      console.log(`    - ${t.id}: ${t.title} (${t.tokens} tokens)`);
    }
  }

  return topics;
}

export async function processAll(
  sources: SourceConfig[],
  dryRun: boolean,
  options?: { force?: boolean; concurrency?: number },
): Promise<{ total: number; failed: number }> {
  const hashes = dryRun ? {} : readHashes();
  const concurrency = options?.concurrency ?? 4;
  let failed = 0;
  try {
    // Process sources in batches for concurrency
    for (let i = 0; i < sources.length; i += concurrency) {
      const batch = sources.slice(i, i + concurrency);
      const results = await Promise.allSettled(
        batch.map((source) =>
          processSource(source, dryRun, {
            force: options?.force,
            hashes,
          }),
        ),
      );
      for (let j = 0; j < results.length; j++) {
        const result = results[j]!;
        if (result.status === "rejected") {
          failed++;
          console.error(
            `  ERROR processing ${batch[j]!.id}: ${(result.reason as Error).message}`,
          );
        }
      }
    }
    console.log(
      `\nSummary: ${sources.length - failed}/${sources.length} sources processed successfully`,
    );

    if (!dryRun) {
      writeHashes(hashes);
    }

    return { total: sources.length, failed };
  } finally {
    if (!dryRun) {
      cleanupStaging();
    }
  }
}
