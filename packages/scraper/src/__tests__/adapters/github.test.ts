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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => "Short",
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValueOnce({
        ok: false,
        status: 500,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        text: async () => noH1Content,
      headers: new Headers(),
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
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        text: async () => contentWithCode,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        text: async () => headingsOnly,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      // Contents API for articles/azure-functions
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          { path: "articles/azure-functions/overview.md", type: "file", name: "overview.md" },
          { path: "articles/azure-functions/triggers.mdx", type: "file", name: "triggers.mdx" },
          { path: "articles/azure-functions/logo.png", type: "file", name: "logo.png" },
        ],
      headers: new Headers(),
      } as Response)
      // Raw content fetches
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
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
      headers: new Headers(),
      } as Response)
      // Contents API for good-dir
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          { path: "articles/good-dir/doc.md", type: "file", name: "doc.md" },
        ],
      headers: new Headers(),
      } as Response)
      // Contents API for bad-dir (fails)
      .mockResolvedValueOnce({
        ok: false,
        status: 404,
      headers: new Headers(),
      } as Response)
      // Raw content fetch for the one good file
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
      } as Response);

    const warnSpy = vi.spyOn(console, "warn");
    const result = await githubAdapter.process(source);

    expect(result.length).toBe(1);
    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to fetch contents for articles/bad-dir"),
    );
  });

  it("directory prefix mode prefixes IDs and titles correctly", async () => {
    const source: SourceConfig = {
      ...baseSource,
      topicPrefix: "directory",
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
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
      } as Response);

    const result = await githubAdapter.process(source);
    // Only azure-functions and cosmos-db files (3 total)
    expect(result.length).toBe(3);
    const ids = result.map((t) => t.id);
    expect(ids).toContain("azure-functions-overview");
    expect(ids).toContain("azure-functions-triggers");
    expect(ids).toContain("cosmos-db-intro");
    // Title should include service context
    const overview = result.find((t) => t.id === "azure-functions-overview");
    expect(overview!.title).toBe("Azure Functions: Getting Started");
  });

  it("none prefix mode has no prefix (backwards compat)", async () => {
    const source: SourceConfig = {
      ...baseSource,
      topicPrefix: "none",
      github: {
        repo: "owner/repo",
        docsPath: "articles",
        subDirs: ["azure-functions"],
      },
    };

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => treeWithSubDirs,
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
      } as Response);

    const result = await githubAdapter.process(source);
    expect(result.length).toBe(2);
    const ids = result.map((t) => t.id);
    expect(ids).toContain("overview");
    expect(ids).toContain("triggers");
  });

  it("pauses when GitHub rate limit is low", async () => {
    vi.useFakeTimers();

    const lowRateLimitHeaders = new Headers({
      "X-RateLimit-Remaining": "50",
    });

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [{ path: "docs/intro.md", type: "blob" }],
        }),
        headers: lowRateLimitHeaders,
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
        headers: new Headers(),
      } as Response);

    const warnSpy = vi.spyOn(console, "warn");
    const resultPromise = githubAdapter.process(baseSource);
    await vi.advanceTimersByTimeAsync(5000);
    const result = await resultPromise;

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("rate limit low (50 remaining)"),
    );
    expect(result.length).toBe(1);

    vi.useRealTimers();
  });

  it("calls rateLimiter.acquire before each fetch", async () => {
    const rateLimiter = { acquire: vi.fn().mockResolvedValue(undefined) };

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [{ path: "docs/intro.md", type: "blob" }],
        }),
        headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
        headers: new Headers(),
      } as Response);

    await githubAdapter.process(baseSource, undefined, rateLimiter);

    // Once for tree fetch, once for the file fetch
    expect(rateLimiter.acquire).toHaveBeenCalledTimes(2);
  });

  it("calls rateLimiter.acquire in Contents API fallback", async () => {
    const rateLimiter = { acquire: vi.fn().mockResolvedValue(undefined) };

    const source: SourceConfig = {
      ...baseSource,
      github: {
        repo: "owner/repo",
        docsPath: "articles",
        subDirs: ["azure-functions"],
      },
    };

    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [],
          truncated: true,
        }),
        headers: new Headers(),
      } as Response)
      .mockResolvedValueOnce({
        ok: true,
        json: async () => [
          { path: "articles/azure-functions/overview.md", type: "file", name: "overview.md" },
        ],
        headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
        headers: new Headers(),
      } as Response);

    await githubAdapter.process(source, undefined, rateLimiter);

    // tree fetch + contents API fetch + raw file fetch = 3
    expect(rateLimiter.acquire).toHaveBeenCalledTimes(3);
  });

  it("files at docsPath root get no prefix even with directory mode", async () => {
    const source: SourceConfig = {
      ...baseSource,
      topicPrefix: "auto",
      github: {
        repo: "owner/repo",
        docsPath: "articles",
      },
    };

    // Include a file directly at docsPath root (articles/top-level.md)
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          tree: [
            { path: "articles/top-level.md", type: "blob" },
            { path: "articles/azure-functions/overview.md", type: "blob" },
          ],
        }),
      headers: new Headers(),
      } as Response)
      .mockResolvedValue({
        ok: true,
        text: async () => longContent,
      headers: new Headers(),
      } as Response);

    const result = await githubAdapter.process(source);
    expect(result.length).toBe(2);
    // Root file has no prefix
    const topLevel = result.find((t) => t.id === "top-level");
    expect(topLevel).toBeDefined();
    expect(topLevel!.title).toBe("Getting Started");
    // Nested file has prefix
    const overview = result.find((t) => t.id === "azure-functions-overview");
    expect(overview).toBeDefined();
    expect(overview!.title).toBe("Azure Functions: Getting Started");
  });
});
