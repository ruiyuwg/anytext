import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import type { Adapter, SourceConfig, ProcessedTopic } from "../types.js";
import { fetchContent } from "../pipeline/fetch.js";
import { cleanMarkdown } from "../pipeline/clean.js";
import { splitIntoTopics } from "../pipeline/split.js";
import { getRegistryDir } from "../pipeline/manifest.js";

export const llmsFullAdapter: Adapter = {
  async process(source: SourceConfig): Promise<ProcessedTopic[]> {
    if (!source.url) {
      throw new Error(`Source ${source.id} has no URL configured`);
    }

    const raw = await fetchContent(source.url);
    console.log(`  Fetched ${raw.length} chars`);

    const cleaned = await cleanMarkdown(raw);
    console.log(`  Cleaned to ${cleaned.length} chars`);

    let topics = splitIntoTopics(cleaned, source.splitConfig);
    console.log(`  Split into ${topics.length} topics`);

    // Apply overrides
    if (source.topicOverrides) {
      topics = topics.map((topic) => {
        const override = source.topicOverrides?.[topic.id];
        if (override) {
          return { ...topic, ...override, content: topic.content };
        }
        return topic;
      });
    }

    // Write doc files
    const docsDir = path.join(getRegistryDir(), "docs", source.id);
    mkdirSync(docsDir, { recursive: true });

    for (const topic of topics) {
      const filePath = path.join(docsDir, `${topic.id}.md`);
      writeFileSync(filePath, topic.content + "\n", "utf-8");
      console.log(`  Wrote ${topic.id}.md (${topic.tokens} tokens)`);
    }

    return topics;
  },
};
