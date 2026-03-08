import { unified } from "unified";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";
import type { Root, Heading, InlineCode, Text } from "mdast";
import type { ProcessedTopic, SplitConfig } from "../types.js";
import { slugify, estimateTokens, truncate } from "../utils.js";

const DEFAULT_MIN_TOKENS = 500;
const DEFAULT_MAX_TOKENS = 10000;

interface HeadingInfo {
  depth: number;
  text: string;
  offset: number;
}

interface Section {
  heading: string;
  parentHeading: string;
  depth: number;
  startOffset: number;
  endOffset: number;
}

function collectHeadings(tree: Root): HeadingInfo[] {
  const headings: HeadingInfo[] = [];
  visit(tree, "heading", (node: Heading) => {
    const text = extractHeadingText(node);
    const offset = node.position!.start.offset as number;
    headings.push({ depth: node.depth, text, offset });
  });
  return headings;
}

function buildSections(
  headings: HeadingInfo[],
  textLength: number,
  primaryDepth: number,
  parentHeading: string = "",
  rangeStart: number = 0,
  rangeEnd: number = textLength,
): Section[] {
  const sections: Section[] = [];
  let currentParent = parentHeading;

  // Filter headings within range
  const inRange = headings.filter(
    (h) => h.offset >= rangeStart && h.offset < rangeEnd,
  );

  // Find primary-depth headings (and higher-level headings that break sections)
  const sectionBreaks: {
    heading: HeadingInfo;
    isHigher: boolean;
  }[] = [];
  for (const h of inRange) {
    if (h.depth === primaryDepth) {
      sectionBreaks.push({ heading: h, isHigher: false });
    } else if (h.depth < primaryDepth) {
      sectionBreaks.push({ heading: h, isHigher: true });
    }
  }

  // If there's content before the first heading, create an Introduction section
  const firstBreakOffset =
    sectionBreaks.length > 0 ? sectionBreaks[0]!.heading.offset : rangeEnd;
  if (firstBreakOffset > rangeStart) {
    sections.push({
      heading: "Introduction",
      parentHeading: currentParent,
      depth: 0,
      startOffset: rangeStart,
      endOffset: firstBreakOffset,
    });
  }

  // Build sections from breaks
  for (let i = 0; i < sectionBreaks.length; i++) {
    const { heading, isHigher } = sectionBreaks[i]!;
    const nextOffset =
      i + 1 < sectionBreaks.length
        ? sectionBreaks[i + 1]!.heading.offset
        : rangeEnd;

    if (isHigher) {
      currentParent = heading.text;
    }

    sections.push({
      heading: heading.text,
      parentHeading: isHigher ? parentHeading : currentParent,
      depth: heading.depth,
      startOffset: heading.offset,
      endOffset: nextOffset,
    });
  }

  return sections;
}

function getContentForSection(markdown: string, section: Section): string {
  return markdown.slice(section.startOffset, section.endOffset).trim();
}

export function splitIntoTopics(
  markdown: string,
  config?: SplitConfig,
): ProcessedTopic[] {
  const minTokens = config?.minTokens ?? DEFAULT_MIN_TOKENS;
  const maxTokens = config?.maxTokens ?? DEFAULT_MAX_TOKENS;

  const tree = unified().use(remarkParse).parse(markdown) as Root;
  const allHeadings = collectHeadings(tree);

  // Determine primary heading depth
  let primaryDepth: number;
  if (config?.splitDepth) {
    primaryDepth = config.splitDepth;
  } else {
    // Auto-detect: use H1 if multiple H1s exist, else H2
    const h1Count = allHeadings.filter((h) => h.depth === 1).length;
    primaryDepth = h1Count > 1 ? 1 : 2;
  }
  const subDepth = primaryDepth === 1 ? 2 : 3;

  // Build initial sections
  let sections = buildSections(
    allHeadings,
    markdown.length,
    primaryDepth,
  );

  // Sub-split oversized sections
  let processed: Section[] = [];
  for (const section of sections) {
    const content = getContentForSection(markdown, section);
    const tokens = estimateTokens(content);
    if (tokens > maxTokens) {
      let split = false;
      for (let depth = subDepth; depth <= 4; depth++) {
        const subSections = buildSections(
          allHeadings,
          markdown.length,
          depth,
          section.heading,
          section.startOffset,
          section.endOffset,
        );
        if (subSections.length > 1) {
          // Recursively sub-split any still-oversized sub-sections
          for (const sub of subSections) {
            const subContent = getContentForSection(markdown, sub);
            if (estimateTokens(subContent) > maxTokens && depth < 4) {
              const deeperSections = buildSections(
                allHeadings,
                markdown.length,
                depth + 1,
                sub.heading,
                sub.startOffset,
                sub.endOffset,
              );
              if (deeperSections.length > 1) {
                processed.push(...deeperSections);
              } else {
                processed.push(sub);
              }
            } else {
              processed.push(sub);
            }
          }
          split = true;
          break;
        }
      }
      if (!split) {
        processed.push(section);
      }
    } else {
      processed.push(section);
    }
  }

  // Merge undersized sections with adjacent
  processed = mergeSmallSections(processed, minTokens, markdown);

  // Drop preamble sections (e.g. "Start of Hono documentation")
  if (processed.length > 1) {
    const firstHeading = processed[0]!.heading.toLowerCase();
    if (firstHeading.startsWith("start of")) {
      processed = processed.slice(1);
    }
  }

  // Convert to ProcessedTopic[], deduplicating IDs
  const seenIds = new Set<string>();
  return processed
    .filter((section) => getContentForSection(markdown, section).length > 0)
    .map((section) => {
      const content = getContentForSection(markdown, section);

      // Re-parse section content for metadata extraction
      const sectionTree = unified()
        .use(remarkParse)
        .parse(content) as Root;
      const description = extractFirstParagraph(sectionTree.children);
      const tags = extractCodeSpans(sectionTree.children);

      let id = slugify(section.heading);
      if (seenIds.has(id)) {
        if (section.parentHeading) {
          const prefixed = slugify(
            section.parentHeading + " " + section.heading,
          );
          if (!seenIds.has(prefixed)) {
            id = prefixed;
          } else {
            let suffix = 2;
            while (seenIds.has(`${id}-${suffix}`)) suffix++;
            id = `${id}-${suffix}`;
          }
        } else {
          let suffix = 2;
          while (seenIds.has(`${id}-${suffix}`)) suffix++;
          id = `${id}-${suffix}`;
        }
      }
      seenIds.add(id);

      return {
        id,
        title: section.heading,
        description: truncate(description, 120),
        tags: tags.slice(0, 10),
        tokens: estimateTokens(content),
        content,
      };
    });
}

function mergeSmallSections(
  sections: Section[],
  minTokens: number,
  markdown: string,
): Section[] {
  if (sections.length <= 1) return sections;

  const result: Section[] = [sections[0]!];

  for (let i = 1; i < sections.length; i++) {
    const prev = result[result.length - 1]!;
    const current = sections[i]!;

    const prevContent = getContentForSection(markdown, prev);
    const currentContent = getContentForSection(markdown, current);

    if (estimateTokens(currentContent) < minTokens) {
      prev.endOffset = current.endOffset;
    } else if (estimateTokens(prevContent) < minTokens) {
      prev.endOffset = current.endOffset;
    } else {
      result.push(current);
    }
  }

  return result;
}

function extractHeadingText(heading: Heading): string {
  const parts: string[] = [];
  visit(heading, (node) => {
    if (node.type === "text") {
      parts.push((node as Text).value);
    } else if (node.type === "inlineCode") {
      parts.push((node as InlineCode).value);
    }
  });
  return parts.join("");
}

function extractFirstParagraph(
  nodes: Root["children"],
): string {
  for (const node of nodes) {
    if (node.type === "paragraph") {
      const parts: string[] = [];
      visit(node, (child) => {
        if (child.type === "text") {
          parts.push((child as Text).value);
        } else if (child.type === "inlineCode") {
          parts.push((child as InlineCode).value);
        }
      });
      const text = parts.join("");
      if (text.length > 10) return text;
    }
  }
  return "";
}

function extractCodeSpans(nodes: Root["children"]): string[] {
  const tags = new Set<string>();
  for (const node of nodes) {
    visit(node, "inlineCode", (codeNode) => {
      const value = (codeNode as InlineCode).value.trim();
      if (value.length > 0 && value.length < 40) {
        tags.add(value);
      }
    });
  }
  return [...tags];
}
