import * as cheerio from "cheerio";
import TurndownService from "turndown";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

export function extractContent(
  html: string,
  options?: {
    contentSelector?: string;
    removeSelectors?: string[];
  },
): string {
  const $ = cheerio.load(html);

  // Remove noise elements
  const defaultRemove = [
    "nav",
    "header",
    "footer",
    "script",
    "style",
    "noscript",
    ".sidebar",
    ".nav",
    ".menu",
    ".breadcrumb",
    ".pagination",
    ".toc",
  ];
  const removeSelectors = [
    ...defaultRemove,
    ...(options?.removeSelectors ?? []),
  ];
  for (const selector of removeSelectors) {
    $(selector).remove();
  }

  // Select content area
  const contentArea = options?.contentSelector
    ? $(options.contentSelector)
    : $("main, article, .content, .docs-content, body");

  const contentHtml = contentArea.first().html();
  if (!contentHtml) return "";

  return turndown.turndown(contentHtml).trim();
}

export function extractLinks(
  html: string,
  baseUrl: string,
  options?: {
    include?: string[];
    exclude?: string[];
  },
): string[] {
  const $ = cheerio.load(html);
  const links = new Set<string>();

  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:")) return;

    try {
      const resolved = new URL(href, baseUrl).href;
      // Must be same origin
      const base = new URL(baseUrl);
      const target = new URL(resolved);
      if (target.origin !== base.origin) return;

      // Strip hash
      target.hash = "";
      const clean = target.href;

      // Apply include/exclude patterns
      if (options?.include?.length) {
        const matches = options.include.some((pattern) =>
          new RegExp(pattern).test(clean),
        );
        if (!matches) return;
      }
      if (options?.exclude?.length) {
        const excluded = options.exclude.some((pattern) =>
          new RegExp(pattern).test(clean),
        );
        if (excluded) return;
      }

      links.add(clean);
    } catch {
      // Invalid URL, skip
    }
  });

  return [...links];
}
