import { describe, it, expect, vi, beforeEach } from "vitest";
import type { SourceConfig } from "../../types.js";
import { githubAdapter } from "../../adapters/github.js";

const baseSource: SourceConfig = {
  id: "mylib",
  name: "My Library",
  description: "A library",
  version: "1.0",
  adapter: "github",
  github: {
    repo: "owner/repo",
  },
};

const longContent =
  "# Getting Started\n\nThis guide covers everything you need to know about installation and setup. ".repeat(
    8,
  );

const treeResponse = {
  tree: [
    { path: "docs/intro.md", type: "blob" },
    { path: "docs/guide.md", type: "blob" },
    { path: "docs/setup.mdx", type: "blob" },
    { path: "docs/images/logo.png", type: "blob" },
    { path: "src/index.ts", type: "blob" },
    { path: "docs/nested", type: "tree" },
  ],
};

const treeWithSubDirs = {
  tree: [
    { path: "articles/azure-functions/overview.md", type: "blob" },
    { path: "articles/azure-functions/triggers.md", type: "blob" },
    { path: "articles/cosmos-db/intro.md", type: "blob" },
    { path: "articles/app-service/deploy.md", type: "blob" },
    { path: "articles/top-level.md", type: "blob" },
  ],
};

beforeEach(() => {
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
  vi.restoreAllMocks();
  vi.spyOn(console, "log").mockImplementation(() => {});
  vi.spyOn(console, "warn").mockImplementation(() => {});
});

describe("githubAdapter", () => {
  it("throws when no github config", async () => {
    const source = { ...baseSource, github: undefined };
    await expect(githubAdapter.process(source)).rejects.toThrow(
      "no github config",
    );
  });

  it("throws on tree fetch failure", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
    } as Response);

    await expect(githubAdapter.process(baseSource)).rejects.toThrow(
      "Failed to fetch tree: 404 Not Found",
    );
  });

  it("fetches tree and processes markdown files", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => treeResponse,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    const result = await githubAdapter.process(baseSource);

    // Should have fetched tree + 3 markdown files (not .png or .ts)
    expect(fetchSpy).toHaveBeenCalledTimes(4);
    expect(result.length).toBe(3);
    expect(result[0]!.title).toBe("Getting Started");
  });

  it("uses custom branch and docsPath", async () => {
    const source: SourceConfig = {
      ...baseSource,
      github: { repo: "owner/repo", branch: "dev", docsPath: "documentation" },
    };

    const customTree = {
      tree: [{ path: "documentation/setup.md", type: "blob" }],
    };

    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => customTree,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    await githubAdapter.process(source);

    expect(fetchSpy).toHaveBeenCalledWith(
      expect.stringContaining("/git/trees/dev?recursive=1"),
      expect.any(Object),
    );
  });

  it("applies include patterns", async () => {
    const source: SourceConfig = {
      ...baseSource,
      github: { repo: "owner/repo", include: ["intro"] },
    };

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => treeResponse,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    const result = await githubAdapter.process(source);
    // Only intro.md matches the include pattern
    expect(result.length).toBe(1);
    expect(result[0]!.id).toBe("intro");
  });

  it("applies exclude patterns", async () => {
    const source: SourceConfig = {
      ...baseSource,
      github: { repo: "owner/repo", exclude: ["guide|setup"] },
    };

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => treeResponse,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    const result = await githubAdapter.process(source);
    expect(result.length).toBe(1);
    expect(result[0]!.id).toBe("intro");
  });

  it("skips files with too few tokens", async () => {
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => treeResponse,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => "Short",
      } as Response);

    const result = await githubAdapter.process(baseSource);
    expect(result).toEqual([]);
  });

  it("handles fetch errors for individual files gracefully", async () => {
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [{ path: "docs/fail.md", type: "blob" }],
        }),
      } as Response)
      .mockResolvedValueOnce({
        ok: false,
        status: 500,
      } as Response);

    const result = await githubAdapter.process(baseSource);
    expect(result).toEqual([]);
  });

  it("derives title from filename when no H1", async () => {
    const noH1Content =
      "This is content without any heading but long enough to pass the token threshold. ".repeat(
        8,
      );

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [{ path: "docs/my-guide.md", type: "blob" }],
        }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        text: async () => noH1Content,
      } as Response);

    const result = await githubAdapter.process(baseSource);
    expect(result[0]!.title).toBe("my-guide");
  });

  it("uses GITHUB_TOKEN when available", async () => {
    const original = process.env["GITHUB_TOKEN"];
    process.env["GITHUB_TOKEN"] = "test-token";

    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({ tree: [] }),
      } as Response);

    await githubAdapter.process(baseSource);

    expect(fetchSpy).toHaveBeenCalledWith(
      expect.any(String),
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "Bearer test-token",
        }),
      }),
    );

    if (original === undefined) {
      delete process.env["GITHUB_TOKEN"];
    } else {
      process.env["GITHUB_TOKEN"] = original;
    }
  });

  it("extracts inline code as tags", async () => {
    const contentWithCode =
      "# Guide\n\nUse `useState` and `useEffect` hooks for state management in your application. ".repeat(
        8,
      );

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [{ path: "docs/hooks.md", type: "blob" }],
        }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        text: async () => contentWithCode,
      } as Response);

    const result = await githubAdapter.process(baseSource);
    expect(result[0]!.tags).toContain("useState");
    expect(result[0]!.tags).toContain("useEffect");
  });

  it("strips .mdx extension from filename for id", async () => {
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [{ path: "docs/setup.mdx", type: "blob" }],
        }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        text: async () => longContent,
      } as Response);

    const result = await githubAdapter.process(baseSource);
    expect(result[0]!.id).toBe("setup");
  });

  it("handles content with no paragraph lines", async () => {
    const headingsOnly =
      "# Title\n## Section\n- list item\n| table |\n```code```\n".repeat(20);

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [{ path: "docs/ref.md", type: "blob" }],
        }),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        text: async () => headingsOnly,
      } as Response);

    const result = await githubAdapter.process(baseSource);
    expect(result[0]!.description).toBe("");
  });

  it("filters to specified subDirs only", async () => {
    const source: SourceConfig = {
      ...baseSource,
      github: {
        repo: "owner/repo",
        docsPath: "articles",
        subDirs: ["azure-functions", "cosmos-db"],
      },
    };

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => treeWithSubDirs,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    const result = await githubAdapter.process(source);
    // Only azure-functions/overview.md, azure-functions/triggers.md, cosmos-db/intro.md
    // Not app-service/deploy.md or top-level.md
    expect(result.length).toBe(3);
    const ids = result.map((t) => t.id);
    expect(ids).toContain("overview");
    expect(ids).toContain("triggers");
    expect(ids).toContain("intro");
  });

  it("without subDirs, all files under docsPath are included", async () => {
    const source: SourceConfig = {
      ...baseSource,
      github: {
        repo: "owner/repo",
        docsPath: "articles",
      },
    };

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => treeWithSubDirs,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    const result = await githubAdapter.process(source);
    // All 5 md files under articles/
    expect(result.length).toBe(5);
  });

  it("maxFiles limits file count", async () => {
    const source: SourceConfig = {
      ...baseSource,
      github: {
        repo: "owner/repo",
        maxFiles: 2,
      },
    };

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => treeResponse,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    const warnSpy = vi.spyOn(console, "warn");
    const result = await githubAdapter.process(source);

    expect(result.length).toBe(2);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("maxFiles limit reached"),
    );
  });

  it("truncated tree triggers Contents API fallback", async () => {
    const source: SourceConfig = {
      ...baseSource,
      github: {
        repo: "owner/repo",
        docsPath: "articles",
        subDirs: ["azure-functions"],
      },
    };

    const fetchSpy = vi.spyOn(globalThis, "fetch")
      // Tree response (truncated)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [],
          truncated: true,
        }),
      } as Response)
      // Contents API for articles/azure-functions
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          { path: "articles/azure-functions/overview.md", type: "file", name: "overview.md" },
          { path: "articles/azure-functions/triggers.mdx", type: "file", name: "triggers.mdx" },
          { path: "articles/azure-functions/logo.png", type: "file", name: "logo.png" },
        ],
      } as Response)
      // Raw content fetches
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    const warnSpy = vi.spyOn(console, "warn");
    const result = await githubAdapter.process(source);

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("truncated, falling back"),
    );
    // Contents API returns 2 md files (not the .png)
    expect(result.length).toBe(2);
    // Should have called: tree + contents API + 2 raw fetches = 4
    expect(fetchSpy).toHaveBeenCalledTimes(4);
    expect(fetchSpy).toHaveBeenCalledWith(
      expect.stringContaining("/contents/articles/azure-functions?ref=main"),
      expect.any(Object),
    );
  });

  it("Contents API fallback handles fetch failure per subDir", async () => {
    const source: SourceConfig = {
      ...baseSource,
      github: {
        repo: "owner/repo",
        docsPath: "articles",
        subDirs: ["good-dir", "bad-dir"],
      },
    };

    vi.spyOn(globalThis, "fetch")
      // Tree (truncated)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [],
          truncated: true,
        }),
      } as Response)
      // Contents API for good-dir
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          { path: "articles/good-dir/doc.md", type: "file", name: "doc.md" },
        ],
      } as Response)
      // Contents API for bad-dir (fails)
      .mockResolvedValueOnce({
        ok: false,
        status: 404,
      } as Response)
      // Raw content fetch for the one good file
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      } as Response);

    const warnSpy = vi.spyOn(console, "warn");
    const result = await githubAdapter.process(source);

    expect(result.length).toBe(1);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to fetch contents for articles/bad-dir"),
    );
  });
});
