import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import { visit } from "unist-util-visit";
import type { Root, RootContent, Heading, InlineCode, Text } from "mdast";
import type { ProcessedTopic, SplitConfig } from "../types.js";
import { slugify, estimateTokens, truncate } from "../utils.js";

const DEFAULT_MIN_TOKENS = 500;
const DEFAULT_MAX_TOKENS = 10000;

interface Section {
  heading: string;
  parentHeading: string;
  depth: number;
  nodes: RootContent[];
}

function stringifyNodes(nodes: RootContent[]): string {
  const tree: Root = { type: "root", children: nodes };
  const result = unified()
    .use(remarkParse)
    .use(remarkStringify, {
      bullet: "-",
      emphasis: "*",
      strong: "*",
      listItemIndent: "one",
    })
    .stringify(tree);
  return String(result).trim();
}

export function splitIntoTopics(
  markdown: string,
  config?: SplitConfig
): ProcessedTopic[] {
  const minTokens = config?.minTokens ?? DEFAULT_MIN_TOKENS;
  const maxTokens = config?.maxTokens ?? DEFAULT_MAX_TOKENS;

  const tree = unified().use(remarkParse).parse(markdown) as Root;

  // Determine primary heading depth: use H1 if multiple H1s exist, else H2
  const h1Count = tree.children.filter(
    (n) => n.type === "heading" && (n as Heading).depth === 1
  ).length;
  const primaryDepth = h1Count > 1 ? 1 : 2;
  const subDepth = primaryDepth === 1 ? 2 : 3;

  // Group nodes into sections by primary headings
  const sections = groupByHeading(tree.children, primaryDepth);

  // Sub-split oversized sections, trying progressively deeper heading levels
  let processed: Section[] = [];
  for (const section of sections) {
    const content = stringifyNodes(section.nodes);
    const tokens = estimateTokens(content);
    if (tokens > maxTokens) {
      let split = false;
      for (let depth = subDepth; depth <= 4; depth++) {
        const subSections = groupByHeading(section.nodes, depth, section.heading);
        if (subSections.length > 1) {
          // Recursively sub-split any still-oversized sub-sections
          for (const sub of subSections) {
            const subContent = stringifyNodes(sub.nodes);
            if (estimateTokens(subContent) > maxTokens && depth < 4) {
              const deeperSections = groupByHeading(sub.nodes, depth + 1, sub.heading);
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
  processed = mergeSmallSections(processed, minTokens);

  // Drop preamble sections (e.g. "Start of Hono documentation")
  if (processed.length > 1) {
    const firstHeading = processed[0]!.heading.toLowerCase();
    if (firstHeading.startsWith("start of")) {
      processed = processed.slice(1);
    }
  }

  // Convert to ProcessedTopic[], deduplicating IDs
  const seenIds = new Set<string>();
  return processed.map((section) => {
    const content = stringifyNodes(section.nodes);
    const description = extractFirstParagraph(section.nodes);
    const tags = extractCodeSpans(section.nodes);

    let id = slugify(section.heading);
    if (seenIds.has(id)) {
      if (section.parentHeading) {
        const prefixed = slugify(section.parentHeading + " " + section.heading);
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

function groupByHeading(
  nodes: RootContent[],
  depth: number,
  parentHeading: string = ""
): Section[] {
  const sections: Section[] = [];
  let currentParent = parentHeading;
  let current: Section = { heading: "Introduction", parentHeading: currentParent, depth: 0, nodes: [] };

  for (const node of nodes) {
    if (node.type === "heading" && (node as Heading).depth === depth) {
      if (current.nodes.length > 0) {
        sections.push(current);
      }
      const heading = extractHeadingText(node as Heading);
      current = { heading, parentHeading: currentParent, depth, nodes: [node] };
    } else if (
      node.type === "heading" &&
      (node as Heading).depth < depth &&
      current.nodes.length > 0
    ) {
      sections.push(current);
      const heading = extractHeadingText(node as Heading);
      currentParent = heading;
      current = { heading, parentHeading, depth: (node as Heading).depth, nodes: [node] };
    } else {
      current.nodes.push(node);
    }
  }

  if (current.nodes.length > 0) {
    sections.push(current);
  }

  return sections;
}

function mergeSmallSections(
  sections: Section[],
  minTokens: number
): Section[] {
  if (sections.length <= 1) return sections;

  const result: Section[] = [sections[0]!];

  for (let i = 1; i < sections.length; i++) {
    const prev = result[result.length - 1]!;
    const current = sections[i]!;

    const prevContent = stringifyNodes(prev.nodes);
    const currentContent = stringifyNodes(current.nodes);

    if (estimateTokens(currentContent) < minTokens) {
      prev.nodes.push(...current.nodes);
    } else if (estimateTokens(prevContent) < minTokens) {
      prev.nodes.push(...current.nodes);
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

function extractFirstParagraph(nodes: RootContent[]): string {
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

function extractCodeSpans(nodes: RootContent[]): string[] {
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
