import { describe, it, expect, vi } from "vitest";
import type { SourceConfig } from "../../types.js";
import { htmlAdapter } from "../../adapters/html.js";

vi.mock("../../pipeline/fetch.js", () => ({
  fetchContent: vi.fn(),
}));
vi.mock("../../pipeline/extract.js", () => ({
  extractContent: vi.fn(),
  extractLinks: vi.fn(),
}));

const baseSource: SourceConfig = {
  id: "tailwindcss",
  name: "Tailwind CSS",
  description: "CSS framework",
  version: "4.0",
  adapter: "html",
  url: "https://tailwindcss.com/docs",
};

const longContent = "# Installation\n\n" +
  "This guide covers everything you need to know about installing the framework. ".repeat(
    8,
  );

describe("htmlAdapter", () => {
  it("throws when no source.url", async () => {
    const source = { ...baseSource, url: undefined };
    await expect(htmlAdapter.process(source)).rejects.toThrow("no URL");
  });

  it("crawls pages and generates topics", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);
    vi.mocked(extractMod.extractLinks).mockReturnValue([]);

    const result = await htmlAdapter.process(baseSource);
    expect(result.length).toBe(1);
    expect(result[0]!.title).toBe("Installation");
  });

  it("skips pages with too few tokens", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue("Short");
    vi.mocked(extractMod.extractLinks).mockReturnValue([]);

    const result = await htmlAdapter.process(baseSource);
    expect(result).toEqual([]);
  });

  it("follows discovered links", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent).mockClear();
    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);
    vi.mocked(extractMod.extractLinks)
      .mockReturnValueOnce(["https://tailwindcss.com/docs/utility"])
      .mockReturnValue([]);

    const result = await htmlAdapter.process(baseSource);
    expect(result.length).toBe(2);
    expect(fetchMod.fetchContent).toHaveBeenCalledTimes(2);
  });

  it("does not revisit already visited URLs", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);
    // Return the same URL as a link
    vi.mocked(extractMod.extractLinks).mockReturnValue([
      "https://tailwindcss.com/docs",
    ]);

    const result = await htmlAdapter.process(baseSource);
    expect(result.length).toBe(1);
  });

  it("handles fetch errors gracefully", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent).mockRejectedValue(
      new Error("fetch failed"),
    );
    vi.mocked(extractMod.extractLinks).mockReturnValue([]);

    const result = await htmlAdapter.process(baseSource);
    expect(result).toEqual([]);
  });

  it("uses startPaths from crawl config", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(longContent);
    vi.mocked(extractMod.extractLinks).mockReturnValue([]);

    const source: SourceConfig = {
      ...baseSource,
      crawl: { startPaths: ["/docs/install", "/docs/config"] },
    };
    await htmlAdapter.process(source);

    expect(fetchMod.fetchContent).toHaveBeenCalledWith(
      "https://tailwindcss.com/docs/install",
    );
    expect(fetchMod.fetchContent).toHaveBeenCalledWith(
      "https://tailwindcss.com/docs/config",
    );
  });

  it("derives title from URL when no H1", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    const noH1Content =
      "This is content without any heading but long enough to pass. ".repeat(8);
    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(noH1Content);
    vi.mocked(extractMod.extractLinks).mockReturnValue([]);

    const result = await htmlAdapter.process(baseSource);
    expect(result[0]!.title).toBe("docs");
  });

  it("extracts inline code as tags", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    const contentWithCode =
      "# Guide\n\nUse `useState` and `useEffect` hooks for state management in your app. ".repeat(
        8,
      );
    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(contentWithCode);
    vi.mocked(extractMod.extractLinks).mockReturnValue([]);

    const result = await htmlAdapter.process(baseSource);
    expect(result[0]!.tags).toContain("useState");
    expect(result[0]!.tags).toContain("useEffect");
  });

  it("handles content with no paragraph lines", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    const headingsOnly =
      "# Title\n## Section\n- list item\n| table |\n```code```\n".repeat(20);
    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(headingsOnly);
    vi.mocked(extractMod.extractLinks).mockReturnValue([]);

    const result = await htmlAdapter.process(baseSource);
    expect(result[0]!.description).toBe("");
  });

  it("derives title as 'index' for root URL path", async () => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    const fetchMod = await import("../../pipeline/fetch.js");
    const extractMod = await import("../../pipeline/extract.js");

    const noH1Content =
      "This is content without any heading but long enough to pass. ".repeat(8);
    vi.mocked(fetchMod.fetchContent).mockResolvedValue("<html>page</html>");
    vi.mocked(extractMod.extractContent).mockReturnValue(noH1Content);
    vi.mocked(extractMod.extractLinks).mockReturnValue([]);

    const source: SourceConfig = {
      ...baseSource,
      url: "https://example.com/",
    };
    const result = await htmlAdapter.process(source);
    expect(result[0]!.title).toBe("index");
  });
});
