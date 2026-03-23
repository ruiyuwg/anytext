## Command reference

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Use a specific agent configuration
deepagents --agent mybot

# Use a specific model (provider:model format or auto-detect)
deepagents --model anthropic:claude-sonnet-4-5
deepagents --model gpt-4o

# Auto-approve tool usage (skip human-in-the-loop prompts)
deepagents -y
```

```
| Option                          | Description                                                                                                                                                            |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-a`, `--agent NAME`            | Use named agent with separate memory (default: `agent`)                                                                                                                |
| `-M`, `--model MODEL`           | Use a specific model (`provider:model`)                                                                                                                                |
| `--model-params JSON`           | Extra kwargs to pass to the model as a JSON string (e.g., `'{"temperature": 0.7}'`)                                                                                    |
| `--default-model [MODEL]`       | Set the default model                                                                                                                                                  |
| `--clear-default-model`         | Clear the default model                                                                                                                                                |
| `-r`, `--resume [ID]`           | Resume a session: `-r` for most recent, `-r <ID>` for a specific thread                                                                                                |
| `-m`, `--message TEXT`          | Initial prompt to auto-submit when the session starts (interactive mode)                                                                                               |
| `-n`, `--non-interactive TEXT`  | Run a single task non-interactively and exit. Shell is disabled unless `--shell-allow-list` is set                                                                     |
| `-q`, `--quiet`                 | Clean output for piping—only the agent's response goes to stdout. Requires `-n` or piped stdin                                                                         |
| `--no-stream`                   | Buffer the full response and write to stdout at once instead of streaming. Requires `-n` or piped stdin                                                                |
| `-y`, `--auto-approve`          | Auto-approve all tool calls without prompting (disables human-in-the-loop). Toggle with `Shift+Tab` during an interactive session                                      |
| `-S`, `--shell-allow-list LIST` | Comma-separated shell commands to auto-approve, `'recommended'` for safe defaults, or `'all'` to allow any command. Applies to both `-n` and interactive modes         |
| `--json`                        | Emit machine-readable JSON from management subcommands (`list`, `reset`, `threads`, `skills`). Output envelope: `{"schema_version": 1, "command": "...", "data": ...}` |
| `--sandbox TYPE`                | Remote sandbox for code execution: `none` (default), `langsmith`, `modal`, `daytona`, `runloop`. LangSmith is included; Modal/Daytona/Runloop require extras           |
| `--sandbox-id ID`               | Reuse an existing sandbox (skips creation and cleanup)                                                                                                                 |
| `--sandbox-setup PATH`          | Path to setup script to run in sandbox after creation                                                                                                                  |
| `--mcp-config PATH`             | Add an explicit MCP config as the highest-precedence source (merged with auto-discovered configs)                                                                      |
| `--no-mcp`                      | Disable all MCP tool loading                                                                                                                                           |
| `--trust-project-mcp`           | Trust project-level MCP configs with stdio servers (skip approval prompt)                                                                                              |
| `-v`, `--version`               | Display version                                                                                                                                                        |
| `-h`, `--help`                  | Show help                                                                                                                                                              |



| Command                                              | Description                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deepagents help`                                    | Show help                                                                                                                                                                                                                                                                                                 |
| `deepagents list`                                    | List all agents                                                                                                                                                                                                                                                                                           |
| `deepagents reset --agent NAME`                      | Clear agent memory and reset to default                                                                                                                                                                                                                                                                   |
| `deepagents reset --agent NAME --target SOURCE`      | Copy memory from another agent                                                                                                                                                                                                                                                                            |
| `deepagents skills list [--project]`                 | List all skills (alias: `ls`)                                                                                                                                                                                                                                                                             |
| `deepagents skills create NAME [--project]`          | Create a new skill with template `SKILL.md`                                                                                                                                                                                                                                                               |
| `deepagents skills info NAME [--project]`            | Show detailed information about a skill                                                                                                                                                                                                                                                                   |
| `deepagents skills delete NAME [--project] [-f]`     | Delete a skill and its contents                                                                                                                                                                                                                                                                           |
| `deepagents threads list [--agent NAME] [--limit N]` | List sessions (alias: `ls`). Default limit: 20. `-n` is a short flag for `--limit`. Additional flags: `--sort {created,updated}`, `--branch TEXT` (filter by git branch), `-v`/`--verbose` (show all columns including branch, created time, and initial prompt), `-r`/`--relative` (relative timestamps) |
| `deepagents threads delete ID`                       | Delete a session                                                                                                                                                                                                                                                                                          |

All management subcommands support `--json` for machine-readable output. See [command-line options](#command-line-options) for details.
```

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/cli/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
