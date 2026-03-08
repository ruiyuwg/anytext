import { describe, it, expect, vi } from "vitest";
import type { SourceConfig } from "../../types.js";
import { sitemapAdapter } from "../../adapters/sitemap.js";

vi.mock("../../pipeline/fetch.js", () => ({
  fetchContent: vi.fn(),
}));
vi.mock("../../pipeline/extract.js", () => ({
  extractContent: vi.fn(),
}));

const baseSource: SourceConfig = {
  id: "mylib",
  name: "My Library",
  description: "A library",
  version: "1.0",
  adapter: "sitemap",
  url: "https://example.com/sitemap.xml",
};

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url><loc>https://example.com/docs/intro</loc></url>
  <url><loc>https://example.com/docs/guide</loc></url>
  <url><loc>https://example.com/blog/post</loc></url>
</urlset>`;

const longContent =
  "# Installation\n\nThis guide covers everything you need to know about installing the framework. ".repeat(
    8,
  );

describe("sitemapAdapter", () => {
  it("throws when no source.url", async () => {
    const source = { ...baseSource, url: undefined };
    await expect(sitemapAdapter.process(source)).rejects.toThrow(
      "no URL configured",
    );
  });

  it("fetches sitemap and processes pages", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapXml)
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const result = await sitemapAdapter.process(baseSource);
    // 3 URLs in sitemap, all have enough tokens
    expect(result.length).toBe(3);
    expect(result[0]!.title).toBe("Installation");
    // First call fetches sitemap, then 3 pages
    expect(fetchMod.fetchContent).toHaveBeenCalledTimes(4);
  });

  it("applies include patterns from crawl config", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapXml)
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const source: SourceConfig = {
      ...baseSource,
      crawl: { include: ["/docs/"] },
    };
    const result = await sitemapAdapter.process(source);
    // Only 2 URLs match /docs/ pattern
    expect(result.length).toBe(2);
  });

  it("applies exclude patterns from crawl config", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapXml)
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const source: SourceConfig = {
      ...baseSource,
      crawl: { exclude: ["blog"] },
    };
    const result = await sitemapAdapter.process(source);
    expect(result.length).toBe(2);
  });

  it("skips pages with too few tokens", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapXml)
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue("Short");

    const result = await sitemapAdapter.process(baseSource);
    expect(result).toEqual([]);
  });

  it("handles fetch errors for individual pages gracefully", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapXml)
      .mockRejectedValue(new Error("fetch failed"));

    const result = await sitemapAdapter.process(baseSource);
    expect(result).toEqual([]);
  });

  it("derives title from URL when no H1", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    const noH1Content =
      "This is content without any heading but long enough to pass the token threshold. ".repeat(
        8,
      );

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(
        '<urlset><url><loc>https://example.com/docs/my-page</loc></url></urlset>',
      )
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(noH1Content);

    const result = await sitemapAdapter.process(baseSource);
    expect(result[0]!.title).toBe("my-page");
  });

  it("passes crawl config selectors to extractContent", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(
        '<urlset><url><loc>https://example.com/docs/a</loc></url></urlset>',
      )
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const source: SourceConfig = {
      ...baseSource,
      crawl: {
        contentSelector: "article",
        removeSelectors: [".ad"],
      },
    };
    await sitemapAdapter.process(source);

    expect(extractMod.extractContent).toHaveBeenCalledWith("<html>page</html>", {
      contentSelector: "article",
      removeSelectors: [".ad"],
    });
  });

  it("extracts inline code as tags", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    const contentWithCode =
      "# Guide\n\nUse `useState` and `useEffect` hooks for state management in your app. ".repeat(
        8,
      );
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(
        '<urlset><url><loc>https://example.com/docs/a</loc></url></urlset>',
      )
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(contentWithCode);

    const result = await sitemapAdapter.process(baseSource);
    expect(result[0]!.tags).toContain("useState");
    expect(result[0]!.tags).toContain("useEffect");
  });

  it("handles content with no paragraph lines", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    const headingsOnly =
      "# Title\n## Section\n- list item\n| table |\n```code```\n".repeat(20);
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(
        '<urlset><url><loc>https://example.com/docs/a</loc></url></urlset>',
      )
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(headingsOnly);

    const result = await sitemapAdapter.process(baseSource);
    expect(result[0]!.description).toBe("");
  });

  it("derives title as 'index' for root URL path", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    const noH1Content =
      "This is content without any heading but long enough to pass. ".repeat(8);
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(
        '<urlset><url><loc>https://example.com/</loc></url></urlset>',
      )
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(noH1Content);

    const result = await sitemapAdapter.process(baseSource);
    expect(result[0]!.title).toBe("index");
  });
});
