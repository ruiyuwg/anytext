import { readFileSync } from "node:fs";
import path from "node:path";
import type { SourceConfig, SourcesFile, ManifestLibrary, ProcessedTopic } from "./types.js";
import { llmsFullAdapter } from "./adapters/llms-full.js";
import { llmsTxtAdapter } from "./adapters/llms-txt.js";
import { manualAdapter } from "./adapters/manual.js";
import { readManifest, writeManifest, mergeLibrary } from "./pipeline/manifest.js";

const adapters = {
  "llms-full": llmsFullAdapter,
  "llms-txt": llmsTxtAdapter,
  manual: manualAdapter,
};

export function loadSources(): SourceConfig[] {
  const sourcesPath = path.resolve(import.meta.dirname, "..", "sources.json");
  const raw = readFileSync(sourcesPath, "utf-8");
  const parsed = JSON.parse(raw) as SourcesFile;
  return parsed.sources;
}

export async function processSource(source: SourceConfig, dryRun: boolean): Promise<ProcessedTopic[]> {
  console.log(`\nProcessing ${source.name} (${source.adapter})...`);

  const adapter = adapters[source.adapter];
  if (!adapter) {
    throw new Error(`Unknown adapter: ${source.adapter}`);
  }

  const topics = await adapter.process(source);

  if (topics.length === 0) {
    console.log(`  No topics generated for ${source.id}`);
    return topics;
  }

  if (!dryRun) {
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
  dryRun: boolean
): Promise<void> {
  for (const source of sources) {
    try {
      await processSource(source, dryRun);
    } catch (err) {
      console.error(`  ERROR processing ${source.id}: ${(err as Error).message}`);
    }
  }
}
