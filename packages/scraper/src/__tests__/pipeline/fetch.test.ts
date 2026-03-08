import { describe, it, expect, vi } from "vitest";
import { fetchContent } from "../../pipeline/fetch.js";

describe("fetchContent", () => {
  it("returns text on OK response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("hello content", { status: 200 }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/doc.txt", {
      retries: 0,
    });
    expect(result).toBe("hello content");
  });

  it("throws on non-OK response", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 404, statusText: "Not Found" }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(
      fetchContent("https://example.com/missing", { retries: 0 }),
    ).rejects.toThrow("404");
  });

  it("propagates network errors", async () => {
    vi.spyOn(globalThis, "fetch").mockRejectedValue(
      new Error("Network error"),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(
      fetchContent("https://example.com/fail", { retries: 0 }),
    ).rejects.toThrow("Network error");
  });

  it("retries on 500 then succeeds", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response("", { status: 500, statusText: "Server Error" }),
      )
      .mockResolvedValueOnce(new Response("success", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/retry", {
      retries: 1,
      retryDelayMs: 1,
    });
    expect(result).toBe("success");
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it("exhausts retries then throws", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("", { status: 500, statusText: "Server Error" }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    await expect(
      fetchContent("https://example.com/always-fail", {
        retries: 1,
        retryDelayMs: 1,
      }),
    ).rejects.toThrow("500");
  });

  it("passes AbortSignal.timeout to fetch", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response("ok", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});

    await fetchContent("https://example.com/timeout", {
      retries: 0,
      timeoutMs: 5000,
    });

    const callArgs = fetchSpy.mock.calls[0]!;
    expect(callArgs[1]).toHaveProperty("signal");
  });

  it("uses default options when none provided", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue(
      new Response("ok", { status: 200 }),
    );
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/defaults");
    expect(result).toBe("ok");
  });

  it("retries on network error then succeeds", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockRejectedValueOnce(new Error("Network error"))
      .mockResolvedValueOnce(new Response("recovered", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});

    const result = await fetchContent("https://example.com/net-retry", {
      retries: 1,
      retryDelayMs: 1,
    });
    expect(result).toBe("recovered");
    expect(fetchSpy).toHaveBeenCalledTimes(2);
  });

  it("uses exponential backoff for retry delays", async () => {
    const delays: number[] = [];
    const originalSetTimeout = globalThis.setTimeout;
    vi.spyOn(globalThis, "setTimeout").mockImplementation(
      ((fn: () => void, ms: number) => {
        delays.push(ms);
        return originalSetTimeout(fn, 0);
      }) as typeof setTimeout,
    );
    vi.spyOn(globalThis, "fetch")
      .mockResolvedValueOnce(
        new Response("", { status: 500, statusText: "Error" }),
      )
      .mockResolvedValueOnce(
        new Response("", { status: 500, statusText: "Error" }),
      )
      .mockResolvedValueOnce(new Response("ok", { status: 200 }));
    vi.spyOn(console, "log").mockImplementation(() => {});

    await fetchContent("https://example.com/backoff", {
      retries: 2,
      retryDelayMs: 100,
    });

    // First retry: 100 * 2^0 = 100, Second retry: 100 * 2^1 = 200
    expect(delays).toEqual([100, 200]);
  });
});
