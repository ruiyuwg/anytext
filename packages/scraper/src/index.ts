import { loadSources, processSource, processAll } from "./scrape.js";

function parseArgs(args: string[]): { library?: string; dryRun: boolean } {
  let library: string | undefined;
  let dryRun = false;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--library" && i + 1 < args.length) {
      library = args[++i];
    } else if (arg === "--dry-run") {
      dryRun = true;
    }
  }

  return { library, dryRun };
}

async function main(): Promise<void> {
  const { library, dryRun } = parseArgs(process.argv.slice(2));
  const sources = loadSources();

  if (dryRun) {
    console.log("[dry-run mode]");
  }

  if (library) {
    const source = sources.find((s) => s.id === library);
    if (!source) {
      console.error(`Unknown library: ${library}`);
      console.error(`Available: ${sources.map((s) => s.id).join(", ")}`);
      process.exit(1);
    }
    await processSource(source, dryRun);
  } else {
    const result = await processAll(sources, dryRun);
    if (result.failed > 0) {
      process.exit(1);
    }
  }

  console.log("\nDone!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
