import { clearCache, getCacheStatus } from "../cache.js";

export function cacheCommand(args: string[]): void {
  const subcommand = args[0];

  switch (subcommand) {
    case "clear":
      clearCache();
      console.log("Cache cleared.");
      break;
    case "status": {
      const status = getCacheStatus();
      if (!status.exists) {
        console.log("No cache found.");
      } else {
        console.log(`Cache directory: ${status.dir}`);
        console.log(`Manifest last fetched: ${status.manifestAge}`);
      }
      break;
    }
    default:
      console.error("Usage: anytext cache <clear|status>");
      process.exit(1);
  }
}
