import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { homedir } from "node:os";
import type { Manifest } from "./types.js";
import { validateManifest } from "./validate.js";

const CACHE_DIR = join(homedir(), ".anytext");
const MANIFEST_PATH = join(CACHE_DIR, "manifest.json");
const META_PATH = join(CACHE_DIR, "manifest.meta.json");
const DOCS_DIR = join(CACHE_DIR, "docs");
const MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours

interface CacheMeta {
  fetchedAt: number;
  registryVersion: number;
}

function ensureDir(dir: string): void {
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

export function getCachedManifest(): Manifest | null {
  if (!existsSync(MANIFEST_PATH) || !existsSync(META_PATH)) {
    return null;
  }

  try {
    const meta: CacheMeta = JSON.parse(readFileSync(META_PATH, "utf-8"));
    if (Date.now() - meta.fetchedAt > MAX_AGE_MS) {
      return null;
    }

    const manifest: unknown = JSON.parse(readFileSync(MANIFEST_PATH, "utf-8"));
    if (!validateManifest(manifest)) return null;
    return manifest;
  } catch {
    return null;
  }
}

export function cacheManifest(manifest: Manifest): void {
  ensureDir(CACHE_DIR);
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  const meta: CacheMeta = {
    fetchedAt: Date.now(),
    registryVersion: manifest.version,
  };
  writeFileSync(META_PATH, JSON.stringify(meta));
}

export function getCachedDoc(path: string): string | null {
  const filePath = join(DOCS_DIR, path);
  if (!existsSync(filePath)) {
    return null;
  }
  return readFileSync(filePath, "utf-8");
}

export function cacheDoc(path: string, content: string): void {
  const filePath = join(DOCS_DIR, path);
  ensureDir(dirname(filePath));
  writeFileSync(filePath, content);
}

export function clearCache(): void {
  if (existsSync(CACHE_DIR)) {
    rmSync(CACHE_DIR, { recursive: true, force: true });
  }
}

export function getCacheStatus(): {
  exists: boolean;
  dir: string;
  manifestAge: string | null;
} {
  if (!existsSync(META_PATH)) {
    return { exists: false, dir: CACHE_DIR, manifestAge: null };
  }
  try {
    const meta: CacheMeta = JSON.parse(readFileSync(META_PATH, "utf-8"));
    const ageMs = Date.now() - meta.fetchedAt;
    const ageMin = Math.floor(ageMs / 60000);
    const ageStr =
      ageMin < 60 ? `${ageMin}m ago` : `${Math.floor(ageMin / 60)}h ago`;
    return { exists: true, dir: CACHE_DIR, manifestAge: ageStr };
  } catch {
    return { exists: false, dir: CACHE_DIR, manifestAge: null };
  }
}
