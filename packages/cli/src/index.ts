#!/usr/bin/env node

import { list } from "./commands/list.js";
import { search } from "./commands/search.js";
import { read } from "./commands/read.js";
import { cacheCommand } from "./commands/cache.js";
import { bold, dim, heading, printError } from "./format.js";

function buildHelp(): string {
  return [
    `${bold("anytext")} — Instant documentation for coding agents`,
    "",
    heading("Usage:"),
    `  ${bold("anytext list")} [library]          ${dim("List libraries or topics")}`,
    `  ${bold("anytext search")} <query>          ${dim("Search across all docs")}`,
    `  ${bold("anytext read")} <library> <topic>  ${dim("Read a specific topic")}`,
    `  ${bold("anytext cache")} <clear|status>    ${dim("Manage local cache")}`,
    "",
    heading("Examples:"),
    `  ${bold("anytext list")}                    ${dim("Show all available libraries")}`,
    `  ${bold("anytext list react")}              ${dim("Show topics for React")}`,
    `  ${bold('anytext search "server components"')}`,
    `  ${bold("anytext read react hooks")}`,
  ].join("\n");
}

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
      console.log(buildHelp());
      break;
    default:
      printError(`Unknown command: ${command}`);
      console.log(buildHelp());
      process.exit(1);
  }
}

main().catch((err: Error) => {
  printError(err.message);
  process.exit(1);
});
