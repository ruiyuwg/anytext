import { getManifest } from "../registry.js";
import type { Library } from "../types.js";

export async function list(args: string[]): Promise<void> {
  const manifest = await getManifest();
  const libraryId = args[0];

  if (!libraryId) {
    listLibraries(manifest.libraries);
    return;
  }

  const library = manifest.libraries.find((l) => l.id === libraryId);
  if (!library) {
    console.error(`Unknown library: ${libraryId}`);
    console.error(`Run 'anytext list' to see available libraries.`);
    process.exit(1);
  }

  listTopics(library);
}

function listLibraries(libraries: Library[]): void {
  const lines = ["# Available Libraries", ""];
  for (const lib of libraries) {
    lines.push(
      `- **${lib.id}** (v${lib.version}) — ${lib.description} [${lib.topics.length} topics]`
    );
  }
  console.log(lines.join("\n"));
}

function listTopics(library: Library): void {
  const lines = [
    `# ${library.name} (v${library.version}) — ${library.topics.length} topics`,
    "",
  ];
  for (const topic of library.topics) {
    lines.push(
      `- **${topic.id}** — ${topic.title} (~${topic.tokens.toLocaleString()} tokens)`
    );
    if (topic.tags.length > 0) {
      lines.push(`  ${topic.tags.join(", ")}`);
    }
  }
  console.log(lines.join("\n"));
}
