import { getManifest } from "../registry.js";
import { bold, dim, heading, padEnd, printError } from "../format.js";
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
    printError(
      `Unknown library: ${libraryId}`,
      `Run 'anytext list' to see available libraries.`
    );
    process.exit(1);
  }

  listTopics(library);
}

function listLibraries(libraries: Library[]): void {
  const maxId = Math.max(...libraries.map((l) => l.id.length));
  const maxVer = Math.max(...libraries.map((l) => l.version.length));

  const lines = [heading("Available Libraries"), ""];
  for (const lib of libraries) {
    const id = padEnd(bold(lib.id), maxId + 2);
    const ver = padEnd(dim(`v${lib.version}`), maxVer + 3);
    const count = dim(`${lib.topics.length} topics`);
    lines.push(`  ${id} ${ver} ${lib.description}  ${count}`);
  }
  console.log(lines.join("\n"));
}

function listTopics(library: Library): void {
  const maxId = Math.max(...library.topics.map((t) => t.id.length));

  const lines = [
    `${heading(library.name)} ${dim(`v${library.version}`)} ${dim("—")} ${dim(`${library.topics.length} topics`)}`,
    "",
  ];
  for (const topic of library.topics) {
    const id = padEnd(bold(topic.id), maxId + 2);
    const tokens = dim(`~${topic.tokens.toLocaleString()} tokens`);
    lines.push(`  ${id} ${topic.title}  ${tokens}`);
    if (topic.tags.length > 0) {
      const indent = " ".repeat(maxId + 4);
      lines.push(`${indent}${dim(topic.tags.join(", "))}`);
    }
  }
  console.log(lines.join("\n"));
}
