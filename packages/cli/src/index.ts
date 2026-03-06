#!/usr/bin/env node

import { list } from "./commands/list.js";
import { search } from "./commands/search.js";
import { read } from "./commands/read.js";
import { cacheCommand } from "./commands/cache.js";

const HELP = `anytext — Instant documentation for coding agents

Usage:
  anytext list [library]          List libraries or topics
  anytext search <query>          Search across all docs
  anytext read <library> <topic>  Read a specific topic
  anytext cache <clear|status>    Manage local cache

Examples:
  anytext list                    Show all available libraries
  anytext list react              Show topics for React
  anytext search "server components"
  anytext read react hooks`;

async function main(): Promise<void> {
  const [command, ...args] = process.argv.slice(2);

  switch (command) {
    case "list":
      await list(args);
      break;
    case "search":
      await search(args);
      break;
    case "read":
      await read(args);
      break;
    case "cache":
      cacheCommand(args);
      break;
    case "--help":
    case "-h":
    case undefined:
      console.log(HELP);
      break;
    default:
      console.error(`Unknown command: ${command}`);
      console.log(HELP);
      process.exit(1);
  }
}

main().catch((err: Error) => {
  console.error(`Error: ${err.message}`);
  process.exit(1);
});
