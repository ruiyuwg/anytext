import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Manifest, ManifestLibrary } from "../../types.js";

vi.mock("node:fs");

beforeEach(() => {
  vi.useFakeTimers();
  vi.setSystemTime(new Date("2025-06-01T12:00:00Z"));
});

describe("getRegistryDir", () => {
  it("returns registry directory path", async () => {
    const { getRegistryDir } = await import("../../pipeline/manifest.js");
    const dir = getRegistryDir();
    expect(dir).toContain("registry");
  });
});

describe("readManifest", () => {
  it("reads and parses manifest.json", async () => {
    const fs = await import("node:fs");
    const manifest: Manifest = { version: 1, updatedAt: "2025-01-01", libraries: [] };
    vi.mocked(fs.readFileSync).mockReturnValue(JSON.stringify(manifest));

    const { readManifest } = await import("../../pipeline/manifest.js");
    expect(readManifest()).toEqual(manifest);
  });
});

describe("writeManifest", () => {
  it("writes formatted JSON with trailing newline", async () => {
    const fs = await import("node:fs");
    const manifest: Manifest = { version: 1, updatedAt: "2025-01-01", libraries: [] };

    const { writeManifest } = await import("../../pipeline/manifest.js");
    writeManifest(manifest);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      expect.stringContaining("manifest.json"),
      JSON.stringify(manifest, null, 2) + "\n",
      "utf-8"
    );
  });
});

describe("mergeLibrary", () => {
  const baseManifest: Manifest = {
    version: 1,
    updatedAt: "2025-01-01",
    libraries: [
      {
        id: "react",
        name: "React",
        description: "UI library",
        version: "19.0",
        topics: [],
      },
    ],
  };

  const newLib: ManifestLibrary = {
    id: "nextjs",
    name: "Next.js",
    description: "React framework",
    version: "15.0",
    topics: [],
  };

  it("replaces existing library", async () => {
    const { mergeLibrary } = await import("../../pipeline/manifest.js");
    const updated: ManifestLibrary = { ...baseManifest.libraries[0]!, version: "20.0" };
    const result = mergeLibrary(baseManifest, updated);
    expect(result.libraries.find((l) => l.id === "react")!.version).toBe("20.0");
  });

  it("appends new library", async () => {
    const { mergeLibrary } = await import("../../pipeline/manifest.js");
    const result = mergeLibrary(baseManifest, newLib);
    expect(result.libraries).toHaveLength(2);
    expect(result.libraries.some((l) => l.id === "nextjs")).toBe(true);
  });

  it("sorts alphabetically by id", async () => {
    const { mergeLibrary } = await import("../../pipeline/manifest.js");
    const result = mergeLibrary(baseManifest, newLib);
    expect(result.libraries[0]!.id).toBe("nextjs");
    expect(result.libraries[1]!.id).toBe("react");
  });

  it("increments version", async () => {
    const { mergeLibrary } = await import("../../pipeline/manifest.js");
    const result = mergeLibrary(baseManifest, newLib);
    expect(result.version).toBe(2);
  });

  it("updates date to today", async () => {
    const { mergeLibrary } = await import("../../pipeline/manifest.js");
    const result = mergeLibrary(baseManifest, newLib);
    expect(result.updatedAt).toBe("2025-06-01");
  });
});
