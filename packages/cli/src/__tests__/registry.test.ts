import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Manifest } from "../types.js";

const testManifest: Manifest = {
  version: 1,
  updatedAt: "2025-01-01",
  libraries: [],
};

const mockGetCachedManifest = vi.fn();
const mockCacheManifest = vi.fn();
const mockGetCachedDoc = vi.fn();
const mockCacheDoc = vi.fn();
const mockReadFileSync = vi.fn();
const mockFileURLToPath = vi.fn((url: string) => url.replace("file://", ""));
const mockValidateManifest = vi.fn(() => true);

vi.mock("../cache.js", () => ({
  getCachedManifest: (...args: unknown[]) => mockGetCachedManifest(...args),
  cacheManifest: (...args: unknown[]) => mockCacheManifest(...args),
  getCachedDoc: (...args: unknown[]) => mockGetCachedDoc(...args),
  cacheDoc: (...args: unknown[]) => mockCacheDoc(...args),
}));

vi.mock("node:fs", () => ({
  readFileSync: (...args: unknown[]) => mockReadFileSync(...args),
}));

vi.mock("node:url", () => ({
  fileURLToPath: (...args: [string]) => mockFileURLToPath(...args),
}));

vi.mock("../validate.js", () => ({
  validateManifest: (...args: unknown[]) => mockValidateManifest(...args),
}));

beforeEach(() => {
  vi.resetModules();
  mockGetCachedManifest.mockReset();
  mockCacheManifest.mockReset();
  mockGetCachedDoc.mockReset();
  mockCacheDoc.mockReset();
  mockReadFileSync.mockReset();
  mockValidateManifest.mockReset().mockReturnValue(true);
});

async function importRegistry(envUrl?: string) {
  if (envUrl) {
    vi.stubEnv("ANYTEXT_REGISTRY_URL", envUrl);
  } else {
    vi.unstubAllEnvs();
  }
  return import("../registry.js");
}

describe("getManifest", () => {
  it("returns cached manifest without fetching", async () => {
    mockGetCachedManifest.mockReturnValue(testManifest);

    const { getManifest } = await importRegistry();
    const result = await getManifest();

    expect(result).toEqual(testManifest);
    expect(mockCacheManifest).not.toHaveBeenCalled();
  });

  it("fetches and caches manifest when not cached", async () => {
    mockGetCachedManifest.mockReturnValue(null);

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify(testManifest), { status: 200 })
    );

    const { getManifest } = await importRegistry();
    const result = await getManifest();

    expect(result).toEqual(testManifest);
    expect(mockCacheManifest).toHaveBeenCalledWith(testManifest);
    expect(fetchSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    );
  });

  it("propagates timeout error", async () => {
    mockGetCachedManifest.mockReturnValue(null);

    vi.spyOn(globalThis, "fetch").mockRejectedValue(new DOMException("The operation was aborted", "TimeoutError"));

    const { getManifest } = await importRegistry();
    await expect(getManifest()).rejects.toThrow("aborted");
  });

  it("throws on HTTP error", async () => {
    mockGetCachedManifest.mockReturnValue(null);

    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 404, statusText: "Not Found" })
    );

    const { getManifest } = await importRegistry();
    await expect(getManifest()).rejects.toThrow("404");
  });

  it("reads from file:// URL", async () => {
    mockGetCachedManifest.mockReturnValue(null);
    mockReadFileSync.mockReturnValue(JSON.stringify(testManifest));

    const { getManifest } = await importRegistry("file:///tmp/registry");
    const result = await getManifest();

    expect(result).toEqual(testManifest);
    expect(mockReadFileSync).toHaveBeenCalled();
  });

  it("throws on invalid manifest format", async () => {
    mockGetCachedManifest.mockReturnValue(null);
    mockValidateManifest.mockReturnValue(false);

    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify({ bad: "data" }), { status: 200 })
    );

    const { getManifest } = await importRegistry();
    await expect(getManifest()).rejects.toThrow("Invalid manifest format");
  });

  it("uses custom ANYTEXT_REGISTRY_URL", async () => {
    mockGetCachedManifest.mockReturnValue(null);

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response(JSON.stringify(testManifest), { status: 200 })
    );

    const { getManifest } = await importRegistry("https://custom.example.com/registry");
    await getManifest();

    expect(fetchSpy).toHaveBeenCalledWith(
      "https://custom.example.com/registry/manifest.json",
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    );
  });
});

describe("getDoc", () => {
  it("returns cached doc", async () => {
    mockGetCachedDoc.mockReturnValue("# Hooks");

    const { getDoc } = await importRegistry();
    const result = await getDoc("react/hooks.md");

    expect(result).toBe("# Hooks");
    expect(mockCacheDoc).not.toHaveBeenCalled();
  });

  it("fetches and caches doc when not cached", async () => {
    mockGetCachedDoc.mockReturnValue(null);

    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("# Hooks content", { status: 200 })
    );

    const { getDoc } = await importRegistry();
    const result = await getDoc("react/hooks.md");

    expect(result).toBe("# Hooks content");
    expect(mockCacheDoc).toHaveBeenCalledWith("react/hooks.md", "# Hooks content");
    expect(fetchSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    );
  });

  it("throws on fetch error", async () => {
    mockGetCachedDoc.mockReturnValue(null);

    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 500, statusText: "Server Error" })
    );

    const { getDoc } = await importRegistry();
    await expect(getDoc("react/hooks.md")).rejects.toThrow("500");
  });

  it("reads doc from file:// URL", async () => {
    mockGetCachedDoc.mockReturnValue(null);
    mockReadFileSync.mockReturnValue("# File doc");

    const { getDoc } = await importRegistry("file:///tmp/registry");
    const result = await getDoc("react/hooks.md");

    expect(result).toBe("# File doc");
  });
});
