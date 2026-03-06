import { describe, it, expect, vi } from "vitest";
import type { SourceConfig } from "../../types.js";
import { manualAdapter } from "../../adapters/manual.js";

vi.mock("node:fs");
vi.mock("../../pipeline/manifest.js", () => ({
  getRegistryDir: vi.fn(() => "/mock/registry"),
}));

const baseSource: SourceConfig = {
  id: "tailwindcss",
  name: "Tailwind CSS",
  description: "Utility-first CSS",
  version: "4.0",
  adapter: "manual",
};

describe("manualAdapter", () => {
  it("reads .md files and skips non-.md", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    vi.mocked(fs.readdirSync).mockReturnValue(
      ["setup.md", "README.txt", "theme.md"] as unknown as ReturnType<typeof fs.readdirSync>
    );
    vi.mocked(fs.readFileSync).mockImplementation((p) => {
      if (String(p).endsWith("setup.md")) return "# Setup\n\nThis is setup content with enough length.";
      if (String(p).endsWith("theme.md")) return "# Theme\n\nThis is theme content with enough length.";
      return "";
    });

    const result = await manualAdapter.process(baseSource);
    expect(result).toHaveLength(2);
    expect(result.map((t) => t.id)).toEqual(["setup", "theme"]);
  });

  it("returns empty when directory missing", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    vi.mocked(fs.readdirSync).mockImplementation(() => {
      throw new Error("ENOENT");
    });

    const result = await manualAdapter.process(baseSource);
    expect(result).toEqual([]);
  });

  it("extracts title from H1", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    vi.mocked(fs.readdirSync).mockReturnValue(
      ["doc.md"] as unknown as ReturnType<typeof fs.readdirSync>
    );
    vi.mocked(fs.readFileSync).mockReturnValue("# My Custom Title\n\nContent here that is long enough.");

    const result = await manualAdapter.process(baseSource);
    expect(result[0]!.title).toBe("My Custom Title");
  });

  it("falls back to filename when no H1", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    vi.mocked(fs.readdirSync).mockReturnValue(
      ["doc.md"] as unknown as ReturnType<typeof fs.readdirSync>
    );
    vi.mocked(fs.readFileSync).mockReturnValue("No heading here\n\nJust a paragraph of content that is long enough.");

    const result = await manualAdapter.process(baseSource);
    expect(result[0]!.title).toBe("doc");
  });

  it("extracts description from first long paragraph", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    vi.mocked(fs.readdirSync).mockReturnValue(
      ["doc.md"] as unknown as ReturnType<typeof fs.readdirSync>
    );
    vi.mocked(fs.readFileSync).mockReturnValue("# Title\n\nShort\n\nThis is a longer description paragraph.");

    const result = await manualAdapter.process(baseSource);
    expect(result[0]!.description).toContain("longer description");
  });

  it("extracts inline code tags", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    vi.mocked(fs.readdirSync).mockReturnValue(
      ["doc.md"] as unknown as ReturnType<typeof fs.readdirSync>
    );
    vi.mocked(fs.readFileSync).mockReturnValue("# Title\n\nUse `useState` and `useEffect` hooks.");

    const result = await manualAdapter.process(baseSource);
    expect(result[0]!.tags).toContain("useState");
    expect(result[0]!.tags).toContain("useEffect");
  });

  it("returns empty description when all lines are short or headings", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fs = await import("node:fs");
    vi.mocked(fs.readdirSync).mockReturnValue(
      ["doc.md"] as unknown as ReturnType<typeof fs.readdirSync>
    );
    vi.mocked(fs.readFileSync).mockReturnValue("# Title\n\nHi\n\n```code```");

    const result = await manualAdapter.process(baseSource);
    expect(result[0]!.description).toBe("");
  });
});
