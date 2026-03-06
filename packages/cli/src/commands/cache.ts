import { clearCache, getCacheStatus } from "../cache.js";
import { bold, dim, green, printError } from "../format.js";

export function cacheCommand(args: string[]): void {
  const subcommand = args[0];

  switch (subcommand) {
    case "clear":
      clearCache();
      console.log(green("Cache cleared."));
      break;
    case "status": {
      const status = getCacheStatus();
      if (!status.exists) {
        console.log(dim("No cache found."));
      } else {
        console.log(`${bold("Cache directory")}   ${status.dir}`);
        console.log(`${bold("Last fetched")}      ${status.manifestAge}`);
      }
      break;
    }
    default:
      printError("Usage: anytext cache <clear|status>");
      process.exit(1);
  }
}
