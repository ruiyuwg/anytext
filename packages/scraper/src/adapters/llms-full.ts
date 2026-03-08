import type { Adapter, SourceConfig, ProcessedTopic, RateLimiterLike } from "../types.js";
import { fetchContent } from "../pipeline/fetch.js";
import { cleanMarkdown } from "../pipeline/clean.js";
import { splitIntoTopics } from "../pipeline/split.js";
import { validateCompleteness } from "../pipeline/validate-completeness.js";

export const llmsFullAdapter: Adapter = {
  async process(
    source: SourceConfig,
    prefetchedContent?: string,
    rateLimiter?: RateLimiterLike,
  ): Promise<ProcessedTopic[]> {
    if (!source.url) {
      throw new Error(`Source ${source.id} has no URL configured`);
    }

    if (!prefetchedContent) {
      await rateLimiter?.acquire();
    }
    const raw = prefetchedContent ?? (await fetchContent(source.url));
    console.log(`  Fetched ${raw.length} chars`);

    const cleaned = await cleanMarkdown(raw, source.preprocess);
    console.log(`  Cleaned to ${cleaned.length} chars`);

    let topics = splitIntoTopics(cleaned, source.splitConfig);
    console.log(`  Split into ${topics.length} topics`);

    // Validate content completeness (advisory)
    const validation = validateCompleteness(cleaned, topics);
    if (!validation.valid) {
      console.warn(
        `  Warning: ${validation.lostChars} chars lost during splitting`,
      );
    }

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

    return topics;
  },
};
