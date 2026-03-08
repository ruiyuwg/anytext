import { describe, it, expect } from "vitest";
import { validateCompleteness } from "../../pipeline/validate-completeness.js";
import type { ProcessedTopic } from "../../types.js";

function makeTopic(content: string): ProcessedTopic {
  return {
    id: "test",
    title: "Test",
    description: "",
    tags: [],
    tokens: 100,
    content,
  };
}

describe("validateCompleteness", () => {
  it("returns valid when all content is preserved", () => {
    const original = "Section A content\n\nSection B content";
    const topics = [
      makeTopic("Section A content"),
      makeTopic("Section B content"),
    ];
    const result = validateCompleteness(original, topics);
    expect(result.valid).toBe(true);
    expect(result.lostChars).toBe(0);
  });

  it("returns invalid when content is lost", () => {
    const original = "Section A content\n\nSection B content\n\nSection C extra";
    const topics = [makeTopic("Section A content")];
    const result = validateCompleteness(original, topics);
    expect(result.valid).toBe(false);
    expect(result.lostChars).toBeGreaterThan(0);
  });

  it("normalizes whitespace when comparing", () => {
    const original = "Section A  content\n\n\n\nSection B   content";
    const topics = [
      makeTopic("Section A content"),
      makeTopic("Section B content"),
    ];
    const result = validateCompleteness(original, topics);
    expect(result.valid).toBe(true);
  });

  it("handles empty topics array", () => {
    const original = "Some content";
    const result = validateCompleteness(original, []);
    expect(result.valid).toBe(false);
    expect(result.lostChars).toBeGreaterThan(0);
  });

  it("handles empty original", () => {
    const result = validateCompleteness("", []);
    expect(result.valid).toBe(true);
    expect(result.lostChars).toBe(0);
  });
});
