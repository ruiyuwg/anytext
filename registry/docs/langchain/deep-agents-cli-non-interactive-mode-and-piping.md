## Non-interactive mode and piping

Use `-n` to run a single task without launching the interactive UI:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents -n "Write a Python script that prints hello world"
```

You can also pipe input via stdin. When input is piped, the CLI automatically runs non-interactively:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
echo "Explain this code" | deepagents
cat error.log | deepagents -n "What's causing this error?"
git diff | deepagents -n "Review these changes"
```

When piped input is combined with `-n` or `-m`, the piped content is prepended to the flag's value.

The maximum piped input size is 10 MiB.

Shell execution is disabled by default in non-interactive mode. Use `-S`/`--shell-allow-list` to enable specific commands (e.g., `-S "pytest,git,make"`), `recommended` for safe defaults, or `all` to permit any command.

````
Use `-q` for clean output suitable for piping into other commands, and `--no-stream` to buffer the full response (instead of streaming) before writing to stdout:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents -n "Generate a .gitignore for Python" -q > .gitignore
deepagents -n "List dependencies" -q --no-stream | sort
```

In non-interactive mode, the agent is instructed to make reasonable assumptions and proceed autonomously rather than ask clarifying questions. It also favors non-interactive command variants (e.g., `npm init -y`, `apt-get install -y`).



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Allow specific commands (validated against the list)
deepagents -n "Run the tests and fix failures" -S "pytest,git,make"

# Use the curated safe-command list
deepagents -n "Build the project" -S recommended

# Allow any shell command
deepagents -n "Fix the build" -S all
```
````

`-S all` / `--shell-allow-list all` lets the agent execute arbitrary shell commands with no human confirmation. Use with caution.

## Switch models

You can switch models during a session without restarting the CLI using the `/model` command, or at launch with the `--model` flag:

```txt theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
> /model anthropic:claude-opus-4-5
> /model openai:gpt-4o
```

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents --model openai:gpt-4o
```

Run `/model` with no arguments to open an interactive model selector that displays available models grouped by provider.

For full details on switching models, setting a default, and configuring custom providers, see [Model providers](/oss/python/deepagents/cli/providers). For `config.toml` reference and lifecycle hooks, see [Configuration](/oss/python/deepagents/cli/configuration).

````
The selector shows a detail footer for the highlighted model with context window size, input modalities (text, image, audio, PDF, video), and capabilities (reasoning, tool calling, structured output). Values overridden by `--profile-override` or `config.toml` are marked with a yellow `*` prefix.



Pass extra model constructor parameters when switching mid-session using `--model-params`:

```txt theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
> /model --model-params '{"temperature": 0.7}' anthropic:claude-sonnet-4-5
> /model --model-params '{"temperature": 0.7}'  # opens selector, applies params to chosen model
```

These are session-only overrides and take the highest priority, overriding values from config file `params`. `--model-params` cannot be combined with `--default`.
````

## Configuration

The CLI stores all configuration under `~/.deepagents/`. Within that directory, each agent gets its own subdirectory (default: `agent`):

| Path                          | Purpose                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------- |
| `~/.deepagents/config.toml`   | Model defaults, provider settings, constructor params, profile overrides, MCP trust store |
| `~/.deepagents/hooks.json`    | Lifecycle event hooks (session start/end, task complete, etc.)                            |
| `~/.deepagents/<agent_name>/` | Per-agent memory, skills, and conversation threads                                        |
| `.deepagents/` (project root) | Project-specific memory and skills, loaded when running inside a git repo                 |

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# List all configured agents
deepagents list
```

For the full reference — including `config.toml` schema, provider parameters, profile overrides, and hook configuration — see [Configuration](/oss/python/deepagents/cli/configuration).

## Teach your agent project conventions

As you use the agent, it automatically stores information in `~/.deepagents/<agent_name>/memories/` as markdown files using a memory-first protocol:

1. **Research**: Searches memory for relevant context before starting tasks
2. **Response**: Checks memory when uncertain during execution
3. **Learning**: Automatically saves new information for future sessions

The agent organizes its memories by topic with descriptive filenames:

```
~/.deepagents/backend-dev/memories/
├── api-conventions.md
├── database-schema.md
└── deployment-process.md
```

When you teach the agent conventions:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
uvx deepagents-cli --agent backend-dev
> Our API uses snake_case and includes created_at/updated_at timestamps
```

It remembers for future sessions:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
> Create a /users endpoint
# Applies conventions without prompting
```
