import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  getCachedManifest,
  cacheManifest,
  getCachedDoc,
  cacheDoc,
} from "./cache.js";
import type { Manifest } from "./types.js";

const REGISTRY_BASE_URL =
  process.env["ANYTEXT_REGISTRY_URL"] ??
  "https://raw.githubusercontent.com/ruiyuwg/anytext/main/registry";

function isFileURL(url: string): boolean {
  return url.startsWith("file://");
}

function readLocal(url: string): string {
  return readFileSync(fileURLToPath(url), "utf-8");
}

async function fetchJSON<T>(url: string): Promise<T> {
  if (isFileURL(url)) {
    return JSON.parse(readLocal(url)) as T;
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url}: ${res.status} ${res.statusText}`);
  }
  return res.json() as Promise<T>;
}

async function fetchText(url: string): Promise<string> {
  if (isFileURL(url)) {
    return readLocal(url);
  }
  const res = await fetch(url);
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

  const manifest = await fetchJSON<Manifest>(
    `${REGISTRY_BASE_URL}/manifest.json`
  );
  cacheManifest(manifest);
  return manifest;
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
