import { createHash } from "node:crypto";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

export function hashContent(text: string): string {
  return createHash("sha256").update(text).digest("hex");
}

export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + "...";
}
