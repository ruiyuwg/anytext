import type { Library, Manifest, Topic } from "../types.js";
import { tokenize } from "./tokenizer.js";
import { expandQuery } from "./aliases.js";
import { stem } from "./stemmer.js";
import { fuzzyMatch } from "./fuzzy.js";

export interface SearchResult {
  library: Library;
  topic: Topic;
  score: number;
}

interface Field {
  text: string;
  weight: number;
  words: string[];
  stemmedWords: string[];
}

function splitWords(text: string): string[] {
  return text.split(/[^a-z0-9]+/).filter(Boolean);
}

function buildFields(library: Library, topic: Topic): Field[] {
  const raw = [
    { text: library.id, weight: 3 },
    { text: library.name.toLowerCase(), weight: 3 },
    { text: topic.id, weight: 4 },
    { text: topic.title.toLowerCase(), weight: 3 },
    { text: topic.description.toLowerCase(), weight: 2 },
    ...topic.tags.map((tag) => ({
      text: tag.toLowerCase(),
      weight: 2,
    })),
  ];

  return raw.map(({ text, weight }) => {
    const words = splitWords(text);
    return {
      text,
      weight,
      words,
      stemmedWords: words.map(stem),
    };
  });
}

function scoreOne(
  fields: Field[],
  tokens: string[],
  stemmedTokens: string[],
): number {
  let score = 0;

  for (let t = 0; t < tokens.length; t++) {
    const token = tokens[t]!;
    const stemmedToken = stemmedTokens[t]!;

    for (const field of fields) {
      // 1. Exact match on whole field
      if (field.text === token) {
        score += field.weight * 3;
        continue;
      }

      // 2. Substring match
      if (field.text.includes(token)) {
        score += field.weight * 1.5;
        continue;
      }

      // 3. Stem match against individual words
      let matched = false;
      for (let w = 0; w < field.stemmedWords.length; w++) {
        if (stemmedToken === field.stemmedWords[w] && stemmedToken !== token) {
          score += field.weight * 1;
          matched = true;
          break;
        }
      }
      if (matched) continue;

      // 4. Fuzzy match against individual words
      if (fuzzyMatch(token, field.text)) {
        score += field.weight * 0.5;
      }
    }
  }

  return score;
}

export function scoreTopics(manifest: Manifest, query: string): SearchResult[] {
  const rawTokens = tokenize(query);
  const tokens = expandQuery(rawTokens);
  const stemmedTokens = tokens.map(stem);

  const results: SearchResult[] = [];

  for (const library of manifest.libraries) {
    for (const topic of library.topics) {
      const fields = buildFields(library, topic);
      const score = scoreOne(fields, tokens, stemmedTokens);
      if (score > 0) {
        results.push({ library, topic, score });
      }
    }
  }

  results.sort((a, b) => b.score - a.score);
  return results.slice(0, 10);
}
