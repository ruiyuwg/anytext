import { describe, it, expect, vi, beforeEach } from "vitest";
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

const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>https://example.com/sitemap-docs.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-api.xml</loc></sitemap>
</sitemapindex>`;

const subSitemap1 = `<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url><loc>https://example.com/docs/intro</loc></url>
  <url><loc>https://example.com/docs/guide</loc></url>
</urlset>`;

const subSitemap2 = `<?xml version="1.0" encoding="UTF-8"?>
<urlset>
  <url><loc>https://example.com/api/overview</loc></url>
  <url><loc>https://example.com/api/reference</loc></url>
</urlset>`;

describe("sitemapAdapter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

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

  it("detects sitemap index and fetches sub-sitemaps", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapIndexXml) // root sitemap index
      .mockResolvedValueOnce(subSitemap1) // first sub-sitemap
      .mockResolvedValueOnce(subSitemap2) // second sub-sitemap
      .mockResolvedValue("<html>page</html>"); // all page fetches
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const result = await sitemapAdapter.process(baseSource);
    // 2 sub-sitemaps, 2 URLs each = 4 pages
    expect(result.length).toBe(4);
    // 1 root + 2 sub-sitemaps + 4 pages = 7 fetch calls
    expect(fetchMod.fetchContent).toHaveBeenCalledTimes(7);
  });

  it("combines URLs from multiple sub-sitemaps", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapIndexXml)
      .mockResolvedValueOnce(subSitemap1)
      .mockResolvedValueOnce(subSitemap2)
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const source: SourceConfig = {
      ...baseSource,
      crawl: { include: ["/api/"] },
    };
    const result = await sitemapAdapter.process(source);
    // Only /api/ URLs should match (2 from subSitemap2)
    expect(result.length).toBe(2);
  });

  it("maxPages limit stops URL collection from sub-sitemaps", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapIndexXml)
      .mockResolvedValueOnce(subSitemap1) // 2 URLs
      .mockResolvedValueOnce(subSitemap2) // 2 URLs
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const source: SourceConfig = {
      ...baseSource,
      crawl: { maxPages: 3 },
    };
    const result = await sitemapAdapter.process(source);
    // maxPages=3: 2 from first sub-sitemap + 1 from second = 3
    expect(result.length).toBe(3);
  });

  it("maxPages stops fetching more sub-sitemaps when limit reached", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapIndexXml)
      .mockResolvedValueOnce(subSitemap1) // 2 URLs — fills limit
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const source: SourceConfig = {
      ...baseSource,
      crawl: { maxPages: 2 },
    };
    const result = await sitemapAdapter.process(source);
    expect(result.length).toBe(2);
    // Should NOT fetch second sub-sitemap since limit already reached
    // 1 root + 1 sub-sitemap + 2 pages = 4
    expect(fetchMod.fetchContent).toHaveBeenCalledTimes(4);
  });

  it("backwards compatible with regular sitemaps (no sitemapindex)", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapXml)
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const result = await sitemapAdapter.process(baseSource);
    expect(result.length).toBe(3);
    // 1 sitemap + 3 pages = 4 (no sub-sitemap fetches)
    expect(fetchMod.fetchContent).toHaveBeenCalledTimes(4);
  });

  it("sub-sitemap fetch failure is skipped gracefully", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapIndexXml) // root index
      .mockRejectedValueOnce(new Error("sub-sitemap 1 failed")) // first sub-sitemap fails
      .mockResolvedValueOnce(subSitemap2) // second sub-sitemap succeeds
      .mockResolvedValue("<html>page</html>"); // page fetches
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const result = await sitemapAdapter.process(baseSource);
    // Only 2 URLs from second sub-sitemap should be processed
    expect(result.length).toBe(2);
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining("Failed to fetch sub-sitemap"),
    );
  });

  it("maxPages limits regular sitemap URLs", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(sitemapXml) // regular sitemap with 3 URLs
      .mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);

    const source: SourceConfig = {
      ...baseSource,
      crawl: { maxPages: 2 },
    };
    const result = await sitemapAdapter.process(source);
    // maxPages=2 should limit to 2 even for regular sitemaps
    expect(result.length).toBe(2);
    expect(console.warn).toHaveBeenCalledWith(
      expect.stringContaining("maxPages limit reached"),
    );
  });
});
