import { describe, it, expect } from "vitest";
import { extractContent, extractLinks } from "../../pipeline/extract.js";

describe("extractContent", () => {
  it("converts HTML to markdown", () => {
    const html = "<html><body><h1>Title</h1><p>Hello world</p></body></html>";
    const result = extractContent(html);
    expect(result).toContain("# Title");
    expect(result).toContain("Hello world");
  });

  it("removes nav, header, footer elements by default", () => {
    const html =
      "<html><body><nav>Nav</nav><main><h1>Content</h1></main><footer>Foot</footer></body></html>";
    const result = extractContent(html);
    expect(result).toContain("Content");
    expect(result).not.toContain("Nav");
    expect(result).not.toContain("Foot");
  });

  it("uses contentSelector when provided", () => {
    const html =
      '<html><body><div class="sidebar">Side</div><article>Main content</article></body></html>';
    const result = extractContent(html, { contentSelector: "article" });
    expect(result).toContain("Main content");
  });

  it("applies custom removeSelectors", () => {
    const html =
      '<html><body><main><div class="ad">Ad</div><p>Content</p></main></body></html>';
    const result = extractContent(html, { removeSelectors: [".ad"] });
    expect(result).not.toContain("Ad");
    expect(result).toContain("Content");
  });

  it("returns empty string when no content found", () => {
    const html = "<html><body></body></html>";
    const result = extractContent(html, { contentSelector: ".nonexistent" });
    expect(result).toBe("");
  });

  it("removes script and style tags", () => {
    const html =
      "<html><body><script>alert(1)</script><style>.x{}</style><p>Text</p></body></html>";
    const result = extractContent(html);
    expect(result).not.toContain("alert");
    expect(result).not.toContain(".x{}");
    expect(result).toContain("Text");
  });
});

describe("extractLinks", () => {
  it("extracts same-origin links", () => {
    const html =
      '<html><body><a href="/docs/intro">Intro</a><a href="https://other.com">Other</a></body></html>';
    const links = extractLinks(html, "https://example.com/");
    expect(links).toContain("https://example.com/docs/intro");
    expect(links).not.toContain("https://other.com");
  });

  it("resolves relative URLs", () => {
    const html = '<html><body><a href="guide.html">Guide</a></body></html>';
    const links = extractLinks(html, "https://example.com/docs/");
    expect(links).toContain("https://example.com/docs/guide.html");
  });

  it("applies include patterns", () => {
    const html =
      '<html><body><a href="/docs/a">A</a><a href="/blog/b">B</a></body></html>';
    const links = extractLinks(html, "https://example.com/", {
      include: ["/docs/"],
    });
    expect(links).toContain("https://example.com/docs/a");
    expect(links).not.toContain("https://example.com/blog/b");
  });

  it("applies exclude patterns", () => {
    const html =
      '<html><body><a href="/docs/a">A</a><a href="/docs/changelog">B</a></body></html>';
    const links = extractLinks(html, "https://example.com/", {
      exclude: ["changelog"],
    });
    expect(links).toContain("https://example.com/docs/a");
    expect(links).not.toContain("https://example.com/docs/changelog");
  });

  it("deduplicates links", () => {
    const html =
      '<html><body><a href="/a">A</a><a href="/a">A again</a></body></html>';
    const links = extractLinks(html, "https://example.com/");
    expect(links.length).toBe(1);
  });

  it("strips hash fragments", () => {
    const html =
      '<html><body><a href="/docs/page#section">Link</a></body></html>';
    const links = extractLinks(html, "https://example.com/");
    expect(links[0]).toBe("https://example.com/docs/page");
  });

  it("skips mailto and anchor-only links", () => {
    const html =
      '<html><body><a href="mailto:test@example.com">Email</a><a href="#top">Top</a></body></html>';
    const links = extractLinks(html, "https://example.com/");
    expect(links).toEqual([]);
  });
});
