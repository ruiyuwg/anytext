import { mkdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { ProcessedTopic } from "../types.js";
import { getRegistryDir } from "./manifest.js";

const STAGING_DIR = ".staging";

function getStagingDir(sourceId: string): string {
  return path.join(getRegistryDir(), "docs", STAGING_DIR, sourceId);
}

function getLiveDir(sourceId: string): string {
  return path.join(getRegistryDir(), "docs", sourceId);
}

export function writeTopics(sourceId: string, topics: ProcessedTopic[]): void {
  if (topics.length === 0) return;

  const stagingDir = getStagingDir(sourceId);
  mkdirSync(stagingDir, { recursive: true });

  for (const topic of topics) {
    const filePath = path.join(stagingDir, `${topic.id}.md`);
    writeFileSync(filePath, topic.content + "\n", "utf-8");
    console.log(`  Wrote ${topic.id}.md (${topic.tokens} tokens)`);
  }
}

export function commitStaged(sourceId: string): void {
  const stagingDir = getStagingDir(sourceId);
  const liveDir = getLiveDir(sourceId);

  rmSync(liveDir, { recursive: true, force: true });
  renameSync(stagingDir, liveDir);
}

export function cleanupStaging(): void {
  const stagingBase = path.join(getRegistryDir(), "docs", STAGING_DIR);
  rmSync(stagingBase, { recursive: true, force: true });
}
