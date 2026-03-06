import { describe, it, expect, vi } from "vitest";
import { fetchContent } from "../../pipeline/fetch.js";

describe("fetchContent", () => {
  it("returns text on OK response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("hello content", { status: 200 })
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/doc.txt");
    expect(result).toBe("hello content");
  });

  it("throws on non-OK response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 404, statusText: "Not Found" })
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(fetchContent("https://example.com/missing")).rejects.toThrow("404");
  });

  it("propagates network errors", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("Network error"));
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(fetchContent("https://example.com/fail")).rejects.toThrow("Network error");
  });
});
