import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  getCachedManifest,
  cacheManifest,
  getCachedDoc,
  cacheDoc,
} from "./cache.js";
import type { Manifest } from "./types.js";
import { validateManifest } from "./validate.js";

const REGISTRY_BASE_URL =
  process.env["ANYTEXT_REGISTRY_URL"] ??
  "https://raw.githubusercontent.com/ruiyuwg/anytext/main/registry";

function isFileURL(url: string): boolean {
  return url.startsWith("file://");
}

const FETCH_TIMEOUT_MS = 30_000;

function readLocal(url: string): string {
  return readFileSync(fileURLToPath(url), "utf-8");
}

async function fetchJSON<T>(url: string): Promise<T> {
  if (isFileURL(url)) {
    return JSON.parse(readLocal(url)) as T;
  }
  const res = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

async function fetchText(url: string): Promise<string> {
  if (isFileURL(url)) {
    return readLocal(url);
  }
  const res = await fetch(url, {
    signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.text();
}

export async function getManifest(): Promise<Manifest> {
  const cached = getCachedManifest();
  if (cached) {
    return cached;
  }

  const data = await fetchJSON<unknown>(`${REGISTRY_BASE_URL}/manifest.json`);
  if (!validateManifest(data)) {
    throw new Error("Invalid manifest format");
  }
  cacheManifest(data);
  return data;
}

export async function getDoc(path: string): Promise<string> {
  const cached = getCachedDoc(path);
  if (cached) {
    return cached;
  }

  const content = await fetchText(`${REGISTRY_BASE_URL}/docs/${path}`);
  cacheDoc(path, content);
  return content;
}
