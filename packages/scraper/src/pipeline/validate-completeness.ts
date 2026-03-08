import type { ProcessedTopic } from "../types.js";

function normalizeWhitespace(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

export function validateCompleteness(
  original: string,
  topics: ProcessedTopic[],
): { valid: boolean; lostChars: number } {
  const normalizedOriginal = normalizeWhitespace(original);
  const concatenated = topics.map((t) => t.content).join("\n\n");
  const normalizedConcatenated = normalizeWhitespace(concatenated);

  const lostChars = Math.max(
    0,
    normalizedOriginal.length - normalizedConcatenated.length,
  );
  const valid = lostChars === 0;

  return { valid, lostChars };
}
