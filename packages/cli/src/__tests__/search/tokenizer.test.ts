import { describe, it, expect } from "vitest";
import { tokenize } from "../../search/tokenizer.js";

describe("tokenize", () => {
  it("returns empty array for empty string", () => {
    expect(tokenize("")).toEqual([]);
  });

  it("returns empty array for whitespace-only string", () => {
    expect(tokenize("   ")).toEqual([]);
  });

  it("lowercases and returns single word", () => {
    expect(tokenize("React")).toEqual(["react"]);
  });

  it("splits multiple words on varied whitespace", () => {
    expect(tokenize("hello\tworld\nnow")).toEqual(["hello", "world", "now"]);
  });

  it("deduplicates tokens", () => {
    expect(tokenize("react react hooks")).toEqual(["react", "hooks"]);
  });

  it("splits hyphenated words into original + parts", () => {
    expect(tokenize("server-side")).toEqual(["server-side", "server", "side"]);
  });

  it("deduplicates hyphen parts against existing tokens", () => {
    expect(tokenize("server server-side")).toEqual([
      "server",
      "server-side",
      "side",
    ]);
  });

  it("filters empty parts from leading/trailing hyphens", () => {
    expect(tokenize("-foo-")).toEqual(["-foo-", "foo"]);
  });

  it("handles pure hyphen", () => {
    expect(tokenize("-")).toEqual(["-"]);
  });
});
