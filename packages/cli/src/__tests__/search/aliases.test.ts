import { describe, it, expect } from "vitest";
import { expandQuery } from "../../search/aliases.js";

describe("expandQuery", () => {
  it("returns empty array for empty input", () => {
    expect(expandQuery([])).toEqual([]);
  });

  it("returns token unchanged when no alias matches", () => {
    expect(expandQuery(["react"])).toEqual(["react"]);
  });

  describe("library aliases", () => {
    it("next → nextjs", () => {
      const result = expandQuery(["next"]);
      expect(result).toContain("next");
      expect(result).toContain("nextjs");
    });

    it("next.js → nextjs", () => {
      expect(expandQuery(["next.js"])).toContain("nextjs");
    });

    it("tailwind → tailwindcss", () => {
      expect(expandQuery(["tailwind"])).toContain("tailwindcss");
    });

    it("tw → tailwindcss", () => {
      expect(expandQuery(["tw"])).toContain("tailwindcss");
    });

    it("tailwind-css → tailwindcss", () => {
      expect(expandQuery(["tailwind-css"])).toContain("tailwindcss");
    });

    it("drizzle-orm → drizzle", () => {
      expect(expandQuery(["drizzle-orm"])).toContain("drizzle");
    });

    it("ai → ai-sdk", () => {
      expect(expandQuery(["ai"])).toContain("ai-sdk");
    });

    it("vercel-ai → ai-sdk", () => {
      expect(expandQuery(["vercel-ai"])).toContain("ai-sdk");
    });

    it("vercel-ai-sdk → ai-sdk", () => {
      expect(expandQuery(["vercel-ai-sdk"])).toContain("ai-sdk");
    });

    it("t3 → trpc", () => {
      expect(expandQuery(["t3"])).toContain("trpc");
    });
  });

  describe("concept aliases", () => {
    it("auth → authentication, authorization", () => {
      const result = expandQuery(["auth"]);
      expect(result).toContain("authentication");
      expect(result).toContain("authorization");
    });

    it("ssr → server-side-rendering, server-rendering", () => {
      const result = expandQuery(["ssr"]);
      expect(result).toContain("server-side-rendering");
      expect(result).toContain("server-rendering");
    });

    it("csr → client-side-rendering, client-rendering", () => {
      const result = expandQuery(["csr"]);
      expect(result).toContain("client-side-rendering");
      expect(result).toContain("client-rendering");
    });

    it("rsc → server-components, react-server-components", () => {
      const result = expandQuery(["rsc"]);
      expect(result).toContain("server-components");
      expect(result).toContain("react-server-components");
    });

    it("isr → incremental-static-regeneration", () => {
      expect(expandQuery(["isr"])).toContain("incremental-static-regeneration");
    });

    it("mw → middleware", () => {
      expect(expandQuery(["mw"])).toContain("middleware");
    });

    it("db → database", () => {
      expect(expandQuery(["db"])).toContain("database");
    });

    it("env → environment-variables", () => {
      expect(expandQuery(["env"])).toContain("environment-variables");
    });
  });

  it("deduplicates input tokens", () => {
    const result = expandQuery(["react", "react"]);
    expect(result).toEqual(["react"]);
  });

  it("does not re-add alias if already present", () => {
    const result = expandQuery(["nextjs", "next"]);
    // "nextjs" already seen, so "next" alias won't add it again
    expect(result.filter((t) => t === "nextjs")).toHaveLength(1);
  });

  it("does not re-add concept expansion if already seen", () => {
    // "authentication" is in the input, and "auth" expands to ["authentication", "authorization"]
    // "authentication" should not be added again
    const result = expandQuery(["authentication", "auth"]);
    expect(result.filter((t) => t === "authentication")).toHaveLength(1);
    expect(result).toContain("authorization");
  });
});
