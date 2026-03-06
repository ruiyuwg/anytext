import { readFileSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { Manifest, ManifestLibrary } from "../types.js";
import { validateManifest } from "../validate.js";

const REGISTRY_DIR = path.resolve(
  import.meta.dirname,
  "..",
  "..",
  "..",
  "..",
  "registry",
);

export function getRegistryDir(): string {
  return REGISTRY_DIR;
}

export function readManifest(): Manifest {
  const manifestPath = path.join(REGISTRY_DIR, "manifest.json");
  const raw = readFileSync(manifestPath, "utf-8");
  const data: unknown = JSON.parse(raw);
  if (!validateManifest(data)) {
    throw new Error("Invalid manifest.json format");
  }
  return data;
}

export function writeManifest(manifest: Manifest): void {
  const manifestPath = path.join(REGISTRY_DIR, "manifest.json");
  const tmpPath = manifestPath + ".tmp";
  writeFileSync(tmpPath, JSON.stringify(manifest, null, 2) + "\n", "utf-8");
  renameSync(tmpPath, manifestPath);
}

export function mergeLibrary(
  manifest: Manifest,
  library: ManifestLibrary,
): Manifest {
  const existing = manifest.libraries.findIndex((l) => l.id === library.id);
  const libraries = [...manifest.libraries];

  if (existing >= 0) {
    libraries[existing] = library;
  } else {
    libraries.push(library);
  }

  // Sort alphabetically by id
  libraries.sort((a, b) => a.id.localeCompare(b.id));

  return {
    version: manifest.version + 1,
    updatedAt: new Date().toISOString().split("T")[0]!,
    libraries,
  };
}
