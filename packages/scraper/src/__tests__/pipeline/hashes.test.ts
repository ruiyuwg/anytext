import { describe, it, expect, vi } from "vitest";
import { readHashes, writeHashes, hasChanged } from "../../pipeline/hashes.js";

vi.mock("node:fs");
vi.mock("../../pipeline/manifest.js", () => ({
  getRegistryDir: vi.fn(() => "/mock/registry"),
}));

describe("readHashes", () => {
  it("returns parsed hashes from file", async () => {
    const fs = await import("node:fs");
    vi.mocked(fs.readFileSync).mockReturnValue(
      JSON.stringify({ react: "abc123" }),
    );

    const hashes = readHashes();
    expect(hashes).toEqual({ react: "abc123" });
    expect(fs.readFileSync).toHaveBeenCalledWith(
      "/mock/registry/.hashes.json",
      "utf-8",
    );
  });

  it("returns empty object when file is missing", async () => {
    const fs = await import("node:fs");
    vi.mocked(fs.readFileSync).mockImplementation(() => {
      throw new Error("ENOENT");
    });

    const hashes = readHashes();
    expect(hashes).toEqual({});
  });
});

describe("writeHashes", () => {
  it("writes atomically via tmp file + rename", async () => {
    const fs = await import("node:fs");
    const hashes = { react: "abc123", hono: "def456" };

    writeHashes(hashes);

    expect(fs.writeFileSync).toHaveBeenCalledWith(
      "/mock/registry/.hashes.json.tmp",
      JSON.stringify(hashes, null, 2) + "\n",
      "utf-8",
    );
    expect(fs.renameSync).toHaveBeenCalledWith(
      "/mock/registry/.hashes.json.tmp",
      "/mock/registry/.hashes.json",
    );
  });
});

describe("hasChanged", () => {
  it("returns true when hash differs", () => {
    const hashes = { react: "oldhash" };
    expect(hasChanged("react", "new content", hashes)).toBe(true);
  });

  it("returns true when source not in hashes", () => {
    const hashes = {};
    expect(hasChanged("react", "any content", hashes)).toBe(true);
  });

  it("returns false when hash matches", async () => {
    // Compute hash of "test content" to match
    const { hashContent } = await import("../../utils.js");
    const hash = hashContent("test content");
    const hashes = { react: hash };
    expect(hasChanged("react", "test content", hashes)).toBe(false);
  });
});
