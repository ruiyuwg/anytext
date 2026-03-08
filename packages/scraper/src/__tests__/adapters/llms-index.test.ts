import { describe, it, expect, vi, beforeEach } from "vitest";
import type { SourceConfig, ProcessedTopic } from "../../types.js";

vi.mock("../../pipeline/fetch.js", () => ({
  fetchContent: vi.fn(),
}));
vi.mock("../../pipeline/clean.js", () => ({
  cleanMarkdown: vi.fn(),
}));
vi.mock("../../pipeline/split.js", () => ({
  splitIntoTopics: vi.fn(),
}));

const baseSource: SourceConfig = {
  id: "cloudflare",
  name: "Cloudflare",
  description: "Cloud platform",
  version: "2026",
  adapter: "llms-index",
  url: "https://developers.cloudflare.com/llms.txt",
  llmsIndex: {
    servicePattern: "(https://[^\\s]+/llms-full\\.txt)",
    contentType: "llms-full",
  },
};

const makeTopic = (id: string, title: string): ProcessedTopic => ({
  id,
  title,
  description: "desc",
  tags: [],
  tokens: 500,
  content: `# ${title}\nSome content here.`,
});

describe("llmsIndexAdapter", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("throws when no llmsIndex config provided", async () => {
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");
    const source = { ...baseSource, llmsIndex: undefined };
    await expect(llmsIndexAdapter.process(source)).rejects.toThrow(
      "requires llmsIndex config",
    );
  });

  it("throws when no URL configured", async () => {
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");
    const source = { ...baseSource, url: undefined };
    await expect(llmsIndexAdapter.process(source)).rejects.toThrow(
      "no URL configured",
    );
  });

  it("fetches root URL and discovers service URLs via servicePattern", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const rootContent = [
      "# Cloudflare Docs",
      "https://developers.cloudflare.com/workers/llms-full.txt",
      "https://developers.cloudflare.com/pages/llms-full.txt",
    ].join("\n");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(rootContent) // root index
      .mockResolvedValueOnce("# Workers\n## Routing\nContent\n## API\nMore") // workers
      .mockResolvedValueOnce("# Pages\n## Deploy\nContent\n## Config\nMore"); // pages

    vi.mocked(cleanMod.cleanMarkdown).mockImplementation(async (raw) => raw);
    vi.mocked(splitMod.splitIntoTopics).mockImplementation((content) => {
      if (content.includes("Workers")) {
        return [makeTopic("routing", "Routing"), makeTopic("api", "API")];
      }
      return [makeTopic("deploy", "Deploy"), makeTopic("config", "Config")];
    });

    const result = await llmsIndexAdapter.process(baseSource);

    expect(fetchMod.fetchContent).toHaveBeenCalledWith(baseSource.url);
    expect(result).toHaveLength(4);
    expect(result[0]!.id).toBe("workers-routing");
    expect(result[0]!.title).toBe("Workers: Routing");
    expect(result[2]!.id).toBe("pages-deploy");
    expect(result[2]!.title).toBe("Pages: Deploy");
  });

  it("llms-full content type — fetches, cleans, splits, prefixes topic IDs", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(
        "https://example.com/workers/llms-full.txt",
      )
      .mockResolvedValueOnce("raw workers content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned content");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("routing", "Routing"),
      makeTopic("api", "API"),
    ]);

    const result = await llmsIndexAdapter.process(baseSource);

    expect(cleanMod.cleanMarkdown).toHaveBeenCalledWith(
      "raw workers content",
      undefined,
    );
    expect(splitMod.splitIntoTopics).toHaveBeenCalledWith(
      "cleaned content",
      undefined,
    );
    expect(result).toHaveLength(2);
    expect(result[0]!.id).toBe("workers-routing");
    expect(result[1]!.id).toBe("workers-api");
  });

  it("llms-txt content type — fetches, follows .md links, cleans, prefixes IDs", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "(https://[^\\s]+/llms\\.txt)",
        contentType: "llms-txt",
      },
    };

    const rootContent =
      "https://docs.example.com/lambda/llms.txt some other text";
    const serviceIndex =
      "# Lambda\n- [Creating Functions](./creating-functions.md)\n- [Handlers](./handlers.md)";

    const longContent =
      "This is a detailed paragraph about the topic with `someFunction()` and `anotherMethod` inline code. " +
      "x".repeat(400);
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(rootContent) // root
      .mockResolvedValueOnce(serviceIndex) // service llms.txt
      .mockResolvedValueOnce(
        `# Creating Functions\n${longContent}`,
      ) // page 1
      .mockResolvedValueOnce(
        `# Handlers\n${longContent}`,
      ); // page 2

    vi.mocked(cleanMod.cleanMarkdown).mockImplementation(async (raw) => raw);

    const result = await llmsIndexAdapter.process(source);

    expect(result).toHaveLength(2);
    expect(result[0]!.id).toBe("lambda-creating-functions");
    expect(result[0]!.title).toBe("Lambda: Creating Functions");
    expect(result[1]!.id).toBe("lambda-handlers");
    expect(result[1]!.title).toBe("Lambda: Handlers");
  });

  it("include patterns filter services correctly", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const rootContent = [
      "https://example.com/workers/llms-full.txt",
      "https://example.com/pages/llms-full.txt",
      "https://example.com/r2/llms-full.txt",
    ].join("\n");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(rootContent)
      .mockResolvedValueOnce("workers content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        ...baseSource.llmsIndex!,
        include: ["workers"],
      },
    };

    const result = await llmsIndexAdapter.process(source);

    // Only workers should be processed (1 service × 2 topics)
    expect(fetchMod.fetchContent).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(2);
  });

  it("exclude patterns filter services correctly", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const rootContent = [
      "https://example.com/workers/llms-full.txt",
      "https://example.com/pages/llms-full.txt",
    ].join("\n");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(rootContent)
      .mockResolvedValueOnce("pages content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        ...baseSource.llmsIndex!,
        exclude: ["workers"],
      },
    };

    const result = await llmsIndexAdapter.process(source);

    // workers excluded, only pages processed
    expect(fetchMod.fetchContent).toHaveBeenCalledTimes(2); // root + pages
    expect(result).toHaveLength(2);
  });

  it("maxServices limits number of services processed", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const rootContent = [
      "https://example.com/workers/llms-full.txt",
      "https://example.com/pages/llms-full.txt",
      "https://example.com/r2/llms-full.txt",
    ].join("\n");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(rootContent)
      .mockResolvedValue("service content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        ...baseSource.llmsIndex!,
        maxServices: 1,
      },
    };

    const result = await llmsIndexAdapter.process(source);

    // Only 1 service should be processed (+ root fetch)
    expect(fetchMod.fetchContent).toHaveBeenCalledTimes(2);
    expect(result).toHaveLength(2);
  });

  it("individual service fetch failure is skipped gracefully", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const rootContent = [
      "https://example.com/workers/llms-full.txt",
      "https://example.com/pages/llms-full.txt",
    ].join("\n");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(rootContent)
      .mockRejectedValueOnce(new Error("network error")) // workers fails
      .mockResolvedValueOnce("pages content"); // pages succeeds
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    const warnSpy = vi.spyOn(console, "warn");
    const result = await llmsIndexAdapter.process(baseSource);

    expect(warnSpy).toHaveBeenCalledWith(
      expect.stringContaining("Service failed"),
    );
    // Only pages topics should be in results
    expect(result).toHaveLength(2);
  });

  it("services with fewer than 2 topics are skipped", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://example.com/workers/llms-full.txt")
      .mockResolvedValueOnce("workers content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("only-one", "Only One"),
    ]);

    const logSpy = vi.spyOn(console, "log");
    const result = await llmsIndexAdapter.process(baseSource);

    expect(result).toHaveLength(0);
    expect(logSpy).toHaveBeenCalledWith(
      expect.stringContaining("Skipping"),
    );
  });

  it("progress logging output", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://example.com/workers/llms-full.txt")
      .mockResolvedValueOnce("workers content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    const logSpy = vi.spyOn(console, "log");
    await llmsIndexAdapter.process(baseSource);

    const messages = logSpy.mock.calls.map((c) => c[0]);
    expect(messages).toEqual(
      expect.arrayContaining([
        expect.stringContaining("Fetched root index"),
        expect.stringContaining("Discovered"),
        expect.stringContaining("Processing service 1/1"),
        expect.stringContaining("Completed"),
      ]),
    );
  });

  it("empty root index returns empty topics array", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    vi.mocked(fetchMod.fetchContent).mockResolvedValueOnce(
      "No service links here",
    );

    const result = await llmsIndexAdapter.process(baseSource);

    expect(result).toEqual([]);
  });

  it("llms-txt content type skips pages with too few tokens", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "(https://[^\\s]+/llms\\.txt)",
        contentType: "llms-txt",
      },
    };

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://docs.example.com/svc/llms.txt")
      .mockResolvedValueOnce(
        "# Svc\n- [PageA](./a.md)\n- [PageB](./b.md)\n- [PageC](./c.md)",
      )
      .mockResolvedValueOnce("short") // < 100 tokens
      .mockResolvedValueOnce(`# PageB\n${"x".repeat(500)}`)
      .mockResolvedValueOnce(`# PageC\n${"x".repeat(500)}`);
    vi.mocked(cleanMod.cleanMarkdown).mockImplementation(async (raw) => raw);

    const result = await llmsIndexAdapter.process(source);

    // PageA skipped (too small), PageB and PageC pass
    expect(result).toHaveLength(2);
  });

  it("llms-txt content type handles page fetch failure gracefully", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "(https://[^\\s]+/llms\\.txt)",
        contentType: "llms-txt",
      },
    };

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://docs.example.com/svc/llms.txt")
      .mockResolvedValueOnce(
        "# Svc\n- [PageA](./a.md)\n- [PageB](./b.md)\n- [PageC](./c.md)",
      )
      .mockRejectedValueOnce(new Error("404")) // PageA fails
      .mockResolvedValueOnce(`# PageB\n${"x".repeat(500)}`)
      .mockResolvedValueOnce(`# PageC\n${"x".repeat(500)}`);
    vi.mocked(cleanMod.cleanMarkdown).mockImplementation(async (raw) => raw);

    const warnSpy = vi.spyOn(console, "warn");
    const result = await llmsIndexAdapter.process(source);

    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("Failed to fetch"));
    // PageA failed, PageB + PageC succeed = 2 topics
    expect(result).toHaveLength(2);
  });

  it("llms-txt service with fewer than 2 topics is skipped", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "(https://[^\\s]+/llms\\.txt)",
        contentType: "llms-txt",
      },
    };

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://docs.example.com/svc/llms.txt")
      .mockResolvedValueOnce("# Svc\n- [OnlyPage](./only.md)")
      .mockResolvedValueOnce(`# Only\n${"x".repeat(500)}`);
    vi.mocked(cleanMod.cleanMarkdown).mockImplementation(async (raw) => raw);

    const result = await llmsIndexAdapter.process(source);
    expect(result).toHaveLength(0);
  });

  it("services with zero topics after split are skipped", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://example.com/workers/llms-full.txt")
      .mockResolvedValueOnce("empty content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([]);

    const result = await llmsIndexAdapter.process(baseSource);
    expect(result).toHaveLength(0);
  });

  it("topic titles include service context for llms-full", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(
        "https://example.com/my-service/llms-full.txt",
      )
      .mockResolvedValueOnce("content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("overview", "Overview"),
      makeTopic("api", "API"),
    ]);

    const result = await llmsIndexAdapter.process(baseSource);

    expect(result[0]!.title).toBe("My Service: Overview");
    expect(result[0]!.id).toBe("my-service-overview");
  });

  it("resolves relative service URLs against root URL", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      url: "https://example.com/docs/llms.txt",
      llmsIndex: {
        servicePattern: "(workers/llms-full\\.txt)",
        contentType: "llms-full",
      },
    };

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("workers/llms-full.txt")
      .mockResolvedValueOnce("content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    await llmsIndexAdapter.process(source);

    expect(fetchMod.fetchContent).toHaveBeenCalledWith(
      "https://example.com/docs/workers/llms-full.txt",
    );
  });

  it("uses capture group 1 from servicePattern when available", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "Link: (https://[^\\s]+/llms-full\\.txt)",
        contentType: "llms-full",
      },
    };

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce(
        "Link: https://example.com/workers/llms-full.txt",
      )
      .mockResolvedValueOnce("content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    await llmsIndexAdapter.process(source);

    expect(fetchMod.fetchContent).toHaveBeenCalledWith(
      "https://example.com/workers/llms-full.txt",
    );
  });

  it("llms-txt handles content with no paragraphs and no inline code", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "(https://[^\\s]+/llms\\.txt)",
        contentType: "llms-txt",
      },
    };

    // Content with only headings and list items (no valid paragraph)
    const noParaContent = "# Title\n## Sub\n" + "- item line\n".repeat(100);

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://docs.example.com/svc/llms.txt")
      .mockResolvedValueOnce(
        "# Svc\n- [PageA](./a.md)\n- [PageB](./b.md)",
      )
      .mockResolvedValueOnce(noParaContent)
      .mockResolvedValueOnce(noParaContent);
    vi.mocked(cleanMod.cleanMarkdown).mockImplementation(async (raw) => raw);

    const result = await llmsIndexAdapter.process(source);

    expect(result).toHaveLength(2);
    // Description should be empty string truncated
    expect(result[0]!.description).toBe("");
  });

  it("uses match[0] when servicePattern has no capture group", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "https://[^\\s]+/llms-full\\.txt",
        contentType: "llms-full",
      },
    };

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://example.com/workers/llms-full.txt")
      .mockResolvedValueOnce("content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    const result = await llmsIndexAdapter.process(source);
    expect(result).toHaveLength(2);
  });

  it("falls back to hostname when URL has no path segments", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "(https://[^\\s]+/llms-full\\.txt)",
        contentType: "llms-full",
      },
    };

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://example.com/llms-full.txt")
      .mockResolvedValueOnce("content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    const result = await llmsIndexAdapter.process(source);
    expect(result).toHaveLength(2);
    // slug derived from hostname since no path segments after filtering
    expect(result[0]!.id).toBe("example-com-a");
  });

  it("llms-txt skips links without text title", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "(https://[^\\s]+/llms\\.txt)",
        contentType: "llms-txt",
      },
    };

    // Link with image child (no text) + two normal links
    const longContent =
      "This is a long paragraph for token threshold. " + "x".repeat(400);
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://docs.example.com/svc/llms.txt")
      .mockResolvedValueOnce(
        "# Svc\n- [](./empty-title.md)\n- [Page1](./page1.md?v=2)\n- [Page2](./page2.md)\n- [External](https://example.com/)",
      )
      .mockResolvedValueOnce(longContent)
      .mockResolvedValueOnce(longContent);
    vi.mocked(cleanMod.cleanMarkdown).mockImplementation(async (raw) => raw);

    const result = await llmsIndexAdapter.process(source);
    // empty title link is skipped, Page1 + Page2 processed
    expect(result).toHaveLength(2);
  });

  it("llms-txt handles links with /docs/ path", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      llmsIndex: {
        servicePattern: "(https://[^\\s]+/llms\\.txt)",
        contentType: "llms-txt",
      },
    };

    const longContent =
      "This is detailed documentation. " + "x".repeat(400);
    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://docs.example.com/svc/llms.txt")
      .mockResolvedValueOnce(
        "# Svc\n- [Overview](/docs/overview)\n- [Guide](/docs/guide)",
      )
      .mockResolvedValueOnce(longContent)
      .mockResolvedValueOnce(longContent);
    vi.mocked(cleanMod.cleanMarkdown).mockImplementation(async (raw) => raw);

    const result = await llmsIndexAdapter.process(source);
    expect(result).toHaveLength(2);
  });

  it("passes preprocess and splitConfig through to pipeline functions", async () => {
    const fetchMod = await import("../../pipeline/fetch.js");
    const cleanMod = await import("../../pipeline/clean.js");
    const splitMod = await import("../../pipeline/split.js");
    const { llmsIndexAdapter } = await import("../../adapters/llms-index.js");

    const source: SourceConfig = {
      ...baseSource,
      preprocess: { stripHtml: true },
      splitConfig: { minTokens: 50 },
    };

    vi.mocked(fetchMod.fetchContent)
      .mockResolvedValueOnce("https://example.com/workers/llms-full.txt")
      .mockResolvedValueOnce("raw content");
    vi.mocked(cleanMod.cleanMarkdown).mockResolvedValue("cleaned");
    vi.mocked(splitMod.splitIntoTopics).mockReturnValue([
      makeTopic("a", "A"),
      makeTopic("b", "B"),
    ]);

    await llmsIndexAdapter.process(source);

    expect(cleanMod.cleanMarkdown).toHaveBeenCalledWith("raw content", {
      stripHtml: true,
    });
    expect(splitMod.splitIntoTopics).toHaveBeenCalledWith("cleaned", {
      minTokens: 50,
    });
  });
});
