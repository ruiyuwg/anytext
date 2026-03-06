import { getManifest } from "../registry.js";
import { scoreTopics } from "../search/scorer.js";
import { bold, dim, heading, hint, padEnd, printError } from "../format.js";

export async function search(args: string[]): Promise<void> {
  const query = args.join(" ").trim();
  if (!query) {
    printError("Usage: anytext search <query>");
    process.exit(1);
  }

  const manifest = await getManifest();
  const results = scoreTopics(manifest, query);

  if (results.length === 0) {
    console.log(`No results found for "${query}".`);
    return;
  }

  const maxPath = Math.max(
    ...results.map((r) => `${r.library.id}/${r.topic.id}`.length)
  );
  const maxNum = String(results.length).length;

  const lines = [heading(`Search results for "${query}"`), ""];
  for (let i = 0; i < results.length; i++) {
    const r = results[i]!;
    const num = padEnd(dim(String(i + 1)), maxNum + 1);
    const path = padEnd(bold(`${r.library.id}/${r.topic.id}`), maxPath + 2);
    const tokens = dim(`~${r.topic.tokens.toLocaleString()} tokens`);
    lines.push(`  ${num} ${path} ${r.topic.title}  ${tokens}`);
  }
  lines.push("", `  ${hint("anytext read <library> <topic>")}`);
  console.log(lines.join("\n"));
}
