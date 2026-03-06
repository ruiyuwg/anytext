import { getManifest } from "../registry.js";
import type { Library, Topic } from "../types.js";

interface SearchResult {
  library: Library;
  topic: Topic;
  score: number;
}

function tokenize(text: string): string[] {
  return text.toLowerCase().split(/\s+/).filter(Boolean);
}

function scoreTopic(
  library: Library,
  topic: Topic,
  queryTokens: string[]
): number {
  let score = 0;
  const fields = [
    { text: library.id, weight: 3 },
    { text: library.name.toLowerCase(), weight: 3 },
    { text: topic.id, weight: 4 },
    { text: topic.title.toLowerCase(), weight: 3 },
    { text: topic.description.toLowerCase(), weight: 2 },
    { text: topic.tags.join(" ").toLowerCase(), weight: 2 },
  ];

  for (const token of queryTokens) {
    for (const field of fields) {
      if (field.text === token) {
        score += field.weight * 2; // exact match
      } else if (field.text.includes(token)) {
        score += field.weight; // partial match
      }
    }
  }

  return score;
}

export async function search(args: string[]): Promise<void> {
  const query = args.join(" ").trim();
  if (!query) {
    console.error("Usage: anytext search <query>");
    process.exit(1);
  }

  const manifest = await getManifest();
  const queryTokens = tokenize(query);
  const results: SearchResult[] = [];

  for (const library of manifest.libraries) {
    for (const topic of library.topics) {
      const score = scoreTopic(library, topic, queryTokens);
      if (score > 0) {
        results.push({ library, topic, score });
      }
    }
  }

  results.sort((a, b) => b.score - a.score);
  const top = results.slice(0, 10);

  if (top.length === 0) {
    console.log(`No results found for "${query}".`);
    return;
  }

  const lines = [`# Search results for "${query}"`, ""];
  for (let i = 0; i < top.length; i++) {
    const r = top[i]!;
    lines.push(
      `${i + 1}. **${r.library.id}/${r.topic.id}** — ${r.topic.title} (~${r.topic.tokens.toLocaleString()} tokens)`
    );
  }
  lines.push("", `Use 'anytext read <library> <topic>' to read a result.`);
  console.log(lines.join("\n"));
}
