import { getManifest } from "../registry.js";
import { scoreTopics } from "../search/scorer.js";

export async function search(args: string[]): Promise<void> {
  const query = args.join(" ").trim();
  if (!query) {
    console.error("Usage: anytext search <query>");
    process.exit(1);
  }

  const manifest = await getManifest();
  const results = scoreTopics(manifest, query);

  if (results.length === 0) {
    console.log(`No results found for "${query}".`);
    return;
  }

  const lines = [`# Search results for "${query}"`, ""];
  for (let i = 0; i < results.length; i++) {
    const r = results[i]!;
    lines.push(
      `${i + 1}. **${r.library.id}/${r.topic.id}** — ${r.topic.title} (~${r.topic.tokens.toLocaleString()} tokens)`
    );
  }
  lines.push("", `Use 'anytext read <library> <topic>' to read a result.`);
  console.log(lines.join("\n"));
}
