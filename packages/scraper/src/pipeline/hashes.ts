import { readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import { hashContent } from "../utils.js";
import { getRegistryDir } from "./manifest.js";

function getHashesPath(): string {
  return path.join(getRegistryDir(), ".hashes.json");
}

export function readHashes(): Record<string, string> {
  try {
    const raw = readFileSync(getHashesPath(), "utf-8");
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return {};
  }
}

export function writeHashes(hashes: Record<string, string>): void {
  const hashesPath = getHashesPath();
  const tmpPath = hashesPath + ".tmp";
  writeFileSync(tmpPath, JSON.stringify(hashes, null, 2) + "\n", "utf-8");
  renameSync(tmpPath, hashesPath);
}

export function hasChanged(
  sourceId: string,
  content: string,
  hashes: Record<string, string>,
): boolean {
  const currentHash = hashContent(content);
  return hashes[sourceId] !== currentHash;
}
