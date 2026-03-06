import { describe, it, expect } from "vitest";
import { slugify, estimateTokens, hashContent, truncate } from "../utils.js";

describe("slugify", () => {
  it("lowercases and replaces spaces with hyphens", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("replaces special chars with hyphens", () => {
    expect(slugify("React & Next.js")).toBe("react-next-js");
  });

  it("strips leading/trailing hyphens", () => {
    expect(slugify("  Hello  ")).toBe("hello");
  });

  it("returns empty for empty string", () => {
    expect(slugify("")).toBe("");
  });

  it("returns empty for all-special chars", () => {
    expect(slugify("@#$%")).toBe("");
  });

  it("collapses consecutive hyphens", () => {
    expect(slugify("a   b")).toBe("a-b");
  });
});

describe("estimateTokens", () => {
  it("returns 0 for empty string", () => {
    expect(estimateTokens("")).toBe(0);
  });

  it("returns ceil(length/4)", () => {
    expect(estimateTokens("abcde")).toBe(2);
  });

  it("returns exact division for multiple of 4", () => {
    expect(estimateTokens("abcd")).toBe(1);
  });
});

describe("hashContent", () => {
  it("returns consistent SHA256 hex", () => {
    const hash = hashContent("hello");
    expect(hash).toHaveLength(64);
    expect(hash).toBe(hashContent("hello"));
  });

  it("handles empty string", () => {
    const hash = hashContent("");
    expect(hash).toHaveLength(64);
  });

  it("returns different hashes for different inputs", () => {
    expect(hashContent("a")).not.toBe(hashContent("b"));
  });
});

describe("truncate", () => {
  it("returns unchanged when within limit", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });

  it("truncates with ellipsis when over limit", () => {
    expect(truncate("hello world foo", 10)).toBe("hello w...");
  });

  it("returns unchanged at exactly the limit", () => {
    expect(truncate("hello", 5)).toBe("hello");
  });
});
