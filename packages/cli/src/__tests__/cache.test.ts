import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Manifest } from "../types.js";

vi.mock("node:fs");
vi.mock("node:os", () => ({
  homedir: () => "/mock/home",
}));
vi.mock("../validate.js", () => ({
  validateManifest: vi.fn(() => true),
}));

const CACHE_DIR = "/mock/home/.anytext";
const MANIFEST_PATH = `${CACHE_DIR}/manifest.json`;
const META_PATH = `${CACHE_DIR}/manifest.meta.json`;
const DOCS_DIR = `${CACHE_DIR}/docs`;

const testManifest: Manifest = {
  version: 1,
  updatedAt: "2025-01-01",
  libraries: [],
};

let fs: typeof import("node:fs");
let cache: typeof import("../cache.js");

let validate: typeof import("../validate.js");

beforeEach(async () => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2025-06-01T12:00:00Z"));
  fs = await import("node:fs");
  cache = await import("../cache.js");
  validate = await import("../validate.js");
  vi.mocked(fs.existsSync).mockReset();
  vi.mocked(fs.readFileSync).mockReset();
  vi.mocked(fs.writeFileSync).mockReset();
  vi.mocked(fs.mkdirSync).mockReset();
  vi.mocked(fs.rmSync).mockReset();
  vi.mocked(validate.validateManifest).mockReturnValue(true);
});

describe("getCachedManifest", () => {
  it("returns null when manifest file missing", () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    expect(cache.getCachedManifest()).toBeNull();
  });

  it("returns null when meta file missing", () => {
    vi.mocked(fs.existsSync).mockImplementation((p) => String(p) === MANIFEST_PATH);
    expect(cache.getCachedManifest()).toBeNull();
  });

  it("returns null when cache expired (>24h)", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    const oldTime = Date.now() - 25 * 60 * 60 * 1000;
    vi.mocked(fs.readFileSync).mockImplementation((p) => {
      if (String(p) === META_PATH) {
        return JSON.stringify({ fetchedAt: oldTime, registryVersion: 1 });
      }
      return JSON.stringify(testManifest);
    });
    expect(cache.getCachedManifest()).toBeNull();
  });

  it("returns manifest when cache is fresh", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    const freshTime = Date.now() - 1000;
    vi.mocked(fs.readFileSync).mockImplementation((p) => {
      if (String(p) === META_PATH) {
        return JSON.stringify({ fetchedAt: freshTime, registryVersion: 1 });
      }
      return JSON.stringify(testManifest);
    });
    expect(cache.getCachedManifest()).toEqual(testManifest);
  });

  it("returns null when meta file is corrupted JSON", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue("not json");
    expect(cache.getCachedManifest()).toBeNull();
  });

  it("returns null when manifest fails validation", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    const freshTime = Date.now() - 1000;
    vi.mocked(fs.readFileSync).mockImplementation((p) => {
      if (String(p) === META_PATH) {
        return JSON.stringify({ fetchedAt: freshTime, registryVersion: 1 });
      }
      return JSON.stringify({ bad: "data" });
    });
    vi.mocked(validate.validateManifest).mockReturnValue(false);
    expect(cache.getCachedManifest()).toBeNull();
  });

  it("returns null when manifest file is corrupted JSON", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    const freshTime = Date.now() - 1000;
    vi.mocked(fs.readFileSync).mockImplementation((p) => {
      if (String(p) === META_PATH) {
        return JSON.stringify({ fetchedAt: freshTime, registryVersion: 1 });
      }
      return "not json";
    });
    expect(cache.getCachedManifest()).toBeNull();
  });

  it("returns manifest at exactly 24h boundary (uses >, not >=)", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    const exactly24h = Date.now() - 24 * 60 * 60 * 1000;
    vi.mocked(fs.readFileSync).mockImplementation((p) => {
      if (String(p) === META_PATH) {
        return JSON.stringify({ fetchedAt: exactly24h, registryVersion: 1 });
      }
      return JSON.stringify(testManifest);
    });
    expect(cache.getCachedManifest()).toEqual(testManifest);
  });
});

describe("cacheManifest", () => {
  it("creates dir and writes manifest + meta", () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    cache.cacheManifest(testManifest);

    expect(fs.mkdirSync).toHaveBeenCalledWith(CACHE_DIR, { recursive: true });
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      MANIFEST_PATH,
      JSON.stringify(testManifest, null, 2)
    );
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      META_PATH,
      JSON.stringify({ fetchedAt: Date.now(), registryVersion: 1 })
    );
  });

  it("skips mkdir when dir already exists", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    cache.cacheManifest(testManifest);
    expect(fs.mkdirSync).not.toHaveBeenCalled();
  });
});

describe("getCachedDoc", () => {
  it("returns null when file missing", () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    expect(cache.getCachedDoc("react/hooks.md")).toBeNull();
  });

  it("returns content when file exists", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue("# Hooks");
    expect(cache.getCachedDoc("react/hooks.md")).toBe("# Hooks");
  });
});

describe("cacheDoc", () => {
  it("creates parent dir and writes file", () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    cache.cacheDoc("react/hooks.md", "# Hooks");

    expect(fs.mkdirSync).toHaveBeenCalledWith(`${DOCS_DIR}/react`, { recursive: true });
    expect(fs.writeFileSync).toHaveBeenCalledWith(`${DOCS_DIR}/react/hooks.md`, "# Hooks");
  });
});

describe("clearCache", () => {
  it("removes cache dir when it exists", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    cache.clearCache();
    expect(fs.rmSync).toHaveBeenCalledWith(CACHE_DIR, { recursive: true, force: true });
  });

  it("does nothing when cache dir missing", () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    cache.clearCache();
    expect(fs.rmSync).not.toHaveBeenCalled();
  });
});

describe("getCacheStatus", () => {
  it("returns exists: false when meta missing", () => {
    vi.mocked(fs.existsSync).mockReturnValue(false);
    const status = cache.getCacheStatus();
    expect(status.exists).toBe(false);
    expect(status.dir).toBe(CACHE_DIR);
    expect(status.manifestAge).toBeNull();
  });

  it("returns age in minutes when < 60min", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    const age30min = Date.now() - 30 * 60 * 1000;
    vi.mocked(fs.readFileSync).mockReturnValue(
      JSON.stringify({ fetchedAt: age30min, registryVersion: 1 })
    );
    const status = cache.getCacheStatus();
    expect(status.exists).toBe(true);
    expect(status.manifestAge).toBe("30m ago");
  });

  it("returns exists: false when meta is corrupted JSON", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    vi.mocked(fs.readFileSync).mockReturnValue("not json");
    const status = cache.getCacheStatus();
    expect(status.exists).toBe(false);
    expect(status.manifestAge).toBeNull();
  });

  it("returns age in hours when >= 60min", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);
    const age120min = Date.now() - 120 * 60 * 1000;
    vi.mocked(fs.readFileSync).mockReturnValue(
      JSON.stringify({ fetchedAt: age120min, registryVersion: 1 })
    );
    const status = cache.getCacheStatus();
    expect(status.exists).toBe(true);
    expect(status.manifestAge).toBe("2h ago");
  });
});
