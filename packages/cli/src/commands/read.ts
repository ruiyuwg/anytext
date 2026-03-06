import { getManifest, getDoc } from "../registry.js";
import { printError } from "../format.js";

export async function read(args: string[]): Promise<void> {
  const [libraryId, topicId] = args;

  if (!libraryId || !topicId) {
    printError("Usage: anytext read <library> <topic>");
    process.exit(1);
  }

  const manifest = await getManifest();
  const library = manifest.libraries.find((l) => l.id === libraryId);
  if (!library) {
    printError(
      `Unknown library: ${libraryId}`,
      `Run 'anytext list' to see available libraries.`
    );
    process.exit(1);
  }

  const topic = library.topics.find((t) => t.id === topicId);
  if (!topic) {
    printError(
      `Unknown topic: ${topicId}`,
      `Run 'anytext list ${libraryId}' to see available topics.`
    );
    process.exit(1);
  }

  const content = await getDoc(topic.path);
  console.log(content);
}
