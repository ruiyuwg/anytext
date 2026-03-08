# Deep Agents CLI

Source: https://docs.langchain.com/oss/javascript/deepagents/cli/overview

Terminal coding agent built on the Deep Agents SDK

The Deep Agents CLI is an open source terminal coding agent built on the [Deep Agents SDK](/oss/javascript/deepagents/quickstart).
It retains persistent memory, maintains context across sessions, learns project conventions, uses customizable skills, and executes code with approval controls.

The Deep Agents CLI has the following built-in capabilities:

- **File operations** - read, write, and edit files in your project with tools that enable agents to manage and modify code and documentation.
- **Shell command execution** - execute shell commands to run tests, build projects, manage dependencies, and interact with version control systems.
- **Web search** - search the web for up-to-date information and documentation (requires Tavily API key).
- **HTTP requests** - make HTTP requests to APIs and external services for data fetching and integration tasks.
- **Task planning and tracking** - break down complex tasks into discrete steps and track progress through the built-in todo system.
- **Memory storage and retrieval** - store and retrieve information across sessions, enabling agents to remember project conventions and learned patterns.
- **Human-in-the-loop** - require human approval for sensitive tool operations.
- **Skills** - extend agent capabilities with custom expertise and instructions stored in skill directories.
- **[MCP tools](/oss/javascript/deepagents/cli/mcp-tools)** - load external tools from [Model Context Protocol](https://modelcontextprotocol.io/) servers via auto-discovered or explicit config files.

## Built-in tools

The agent comes with the following built-in tools which are available without configuration:

| Tool          | Description                                                                                               | Human-in-the-Loop    |
| ------------- | --------------------------------------------------------------------------------------------------------- | -------------------- |
| `ls`          | List files and directories                                                                                | -                    |
| `read_file`   | Read contents of a file; supports images (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`) as multimodal content | -                    |
| `write_file`  | Create or overwrite a file                                                                                | Required1 |
| `edit_file`   | Make targeted edits to existing files                                                                     | Required1 |
| `glob`        | Find files matching a pattern (e.g., `**/*.py`)                                                           | -                    |
| `grep`        | Search for text patterns across files                                                                     | -                    |
| `shell`       | Execute shell commands (local mode)                                                                       | Required1 |
| `execute`     | Execute commands in remote sandbox (sandbox mode)                                                         | Required1 |
| `web_search`  | Search the web using Tavily API                                                                           | Required1 |
| `fetch_url`   | Fetch and convert web pages to markdown                                                                   | Required1 |
| `task`        | Delegate work to subagents for parallel execution                                                         | Required1 |
| `write_todos` | Create and manage task lists for complex work                                                             | -                    |

1: Potentially destructive operations require user approval before execution.
To bypass human approval, you can toggle auto-approve or start the deep agent with the `auto-approve` option:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents --auto-approve
```

[Watch the demo video](https://youtu.be/IrnacLa9PJc?si=3yUnPbxnm2yaqVQb) to see how the Deep Agents CLI works.

## Quickstart

````
Select the model provider(s) you want to use and set credentials as environment variables.


  
    Export as an environment variable:

    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    export OPENAI_API_KEY="your-api-key"
    ```
  

  
    Export as an environment variable:

    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    export ANTHROPIC_API_KEY="your-api-key"
    ```
  

  
    Export as an environment variable:

    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    export GOOGLE_API_KEY="your-api-key"
    ```
  

  
    Export your Google Cloud project:

    ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
    export GOOGLE_CLOUD_PROJECT="your-gcp-project-id"
    ```

    Vertex AI uses Application Default Credentials (ADC) for authentication.
  





  ```bash Quick install (recommended) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  curl -LsSf https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/libs/cli/scripts/install.sh | bash
  ```

  ```bash Quick install with extra model providers theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  # (OpenAI is included by default)
  DEEPAGENTS_EXTRAS="anthropic,groq" curl -LsSf https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/libs/cli/scripts/install.sh | bash
  ```

  ```bash Install globally with uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  # Install with chosen model providers (OpenAI is included by default)
  uv tool install 'deepagents-cli[anthropic,groq]'
  deepagents
  ```

  ```bash Run (without global install) theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uvx deepagents-cli
  ```


```bash Run the CLI theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents
```



```txt theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Create a Python script that prints "Hello, World!"
```

The agent proposes changes with diffs for your approval before modifying files.
````

Each model provider requires installing its corresponding LangChain integration package. These are available as optional extras when installing the CLI:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Install with one provider
uv tool install 'deepagents-cli[anthropic]'

# Install with multiple providers at once
uv tool install 'deepagents-cli[ollama,groq]'

# Add additional packages at a later date
uv tool upgrade deepagents-cli --with langchain-xai
```

For the full list of supported providers and configuration options, see [Custom model providers](/oss/javascript/deepagents/cli/providers).

On first launch (when no `[models].default` or `[models].recent` is set), the CLI auto-selects the first available startup credential in this order: `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY`, then `GOOGLE_CLOUD_PROJECT` (Vertex AI). This startup fallback is intentionally narrow; other supported providers (for example, Groq) are still available via `--model`, `/model`, or a saved default model.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents --model anthropic:claude-opus-4-5
```

Enable web search (optional):

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export TAVILY_API_KEY="your-key"
```

API keys can be set as environment variables or in a `.env` file.

## Tracing with LangSmith

Enable LangSmith tracing to see agent operations in a LangSmith project:

1. Enable LangSmith tracing:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   export LANGCHAIN_TRACING=true
   export LANGCHAIN_API_KEY="your-api-key"
   ```

2. Configure agent tracing for deep agent operations such as tool calls and agent decisions:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   export DEEPAGENTS_LANGSMITH_PROJECT="my-deep-agent-execution"
   ```

3. If you are building a LangChain app with deep agents, and want to separate agent traces from your app's traces, also configure `LANGSMITH_PROJECT`:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   export LANGSMITH_PROJECT="my-app-calls-to-langchain"
   ```

When configured, the CLI displays:

```sh theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
✓ LangSmith tracing: 'my-project'
```

## Configuration

Each agent has its own configuration directory at `~/.deepagents/<agent_name>/`. The default agent name is `agent`.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# List all configured agents
deepagents list

# Use a specific agent configuration
deepagents --agent mybot

# Use a specific model (provider:model format or auto-detect)
deepagents --model anthropic:claude-sonnet-4-5
deepagents --model gpt-4o

# Auto-approve tool usage (skip human-in-the-loop prompts)
deepagents --auto-approve

# Execute code in a remote sandbox
deepagents --sandbox modal        # or runloop, daytona
deepagents --sandbox-id dbx_123   # reuse existing sandbox
```

```
| Option                         | Description                                                                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-a`, `--agent NAME`           | Use named agent with separate memory (default: `agent`)                                                                                                        |
| `-M`, `--model MODEL`          | Use a specific model (`provider:model`)                                                                                                                        |
| `--model-params JSON`          | Extra kwargs to pass to the model as a JSON string (e.g., `'{"temperature": 0.7}'`)                                                                            |
| `--default-model [MODEL]`      | Set the default model                                                                                                                                          |
| `--clear-default-model`        | Clear the default model                                                                                                                                        |
| `-r`, `--resume [ID]`          | Resume a session: `-r` for most recent, `-r <ID>` for a specific thread                                                                                        |
| `-m`, `--message TEXT`         | Initial prompt to auto-submit when the session starts (interactive mode)                                                                                       |
| `-n`, `--non-interactive TEXT` | Run a single task non-interactively and exit. Shell is disabled unless `--shell-allow-list` is set                                                             |
| `-q`, `--quiet`                | Clean output for piping — only the agent's response goes to stdout. Requires `-n` or piped stdin                                                               |
| `--no-stream`                  | Buffer the full response and write to stdout at once instead of streaming. Requires `-n` or piped stdin                                                        |
| `--auto-approve`               | Auto-approve all tool calls without prompting (disables human-in-the-loop). Toggle with `Shift+Tab` during an interactive session                              |
| `--shell-allow-list LIST`      | Comma-separated shell commands to auto-approve, `'recommended'` for safe defaults, or `'all'` to allow any command. Applies to both `-n` and interactive modes |
| `--sandbox TYPE`               | Remote sandbox for code execution: `none` (default), `modal`, `daytona`, `runloop`, `langsmith`                                                                |
| `--sandbox-id ID`              | Reuse an existing sandbox (skips creation and cleanup)                                                                                                         |
| `--sandbox-setup PATH`         | Path to setup script to run in sandbox after creation                                                                                                          |
| `--mcp-config PATH`            | Add an explicit MCP config as the highest-precedence source (merged with auto-discovered configs)                                                              |
| `--no-mcp`                     | Disable all MCP tool loading                                                                                                                                   |
| `--trust-project-mcp`          | Trust project-level MCP configs with stdio servers (skip approval prompt)                                                                                      |
| `-v`, `--version`              | Display version                                                                                                                                                |
| `-h`, `--help`                 | Show help                                                                                                                                                      |



| Command                                              | Description                                    |
| ---------------------------------------------------- | ---------------------------------------------- |
| `deepagents help`                                    | Show help                                      |
| `deepagents list`                                    | List all agents                                |
| `deepagents reset --agent NAME`                      | Clear agent memory and reset to default        |
| `deepagents reset --agent NAME --target SOURCE`      | Copy memory from another agent                 |
| `deepagents skills list [--project]`                 | List all skills (alias: `ls`)                  |
| `deepagents skills create NAME [--project]`          | Create a new skill with template `SKILL.md`    |
| `deepagents skills info NAME [--project]`            | Show detailed information about a skill        |
| `deepagents skills delete NAME [--project] [-f]`     | Delete a skill and its contents                |
| `deepagents threads list [--agent NAME] [--limit N]` | List sessions (alias: `ls`). Default limit: 20 |
| `deepagents threads delete ID`                       | Delete a session                               |
```

## Interactive mode

Type naturally as you would in a chat interface.
The agent will use its built-in tools, skills, and memory to help you with tasks.

````
Use these commands within the CLI session:

* `/model` - Open the interactive model selector
* `/model <provider:model>` - Switch directly to a specific model (e.g., `/model anthropic:claude-sonnet-4-5`)
* `/model --model-params JSON [provider:model]` - Switch with extra model constructor params (e.g., `/model --model-params '{"temperature": 0.7}' anthropic:claude-sonnet-4-5`)
* `/model --default <provider:model>` - Set a persistent default model
* `/model --default --clear` - Clear the saved default model
* `/remember [context]` - Review conversation and update memory and skills. Optionally pass additional context
* `/tokens` - Display current context window token usage
* `/clear` - Clear conversation history and start a new thread
* `/threads` - Browse and resume previous conversation threads
* `/trace` - Open the current thread in LangSmith (requires `LANGSMITH_API_KEY`)
* `/changelog` - Open the CLI changelog in your browser
* `/docs` - Open the documentation in your browser
* `/feedback` - Open the GitHub issues page to file a bug report or feature request
* `/version` - Show installed `deepagents-cli` and SDK versions
* `/help` - Show help and available commands
* `/quit` - Exit the CLI



Type `!` to enter shell mode, then type your command:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
git status
npm test
ls -la
```



**General**

| Shortcut                                              | Action                                      |
| ----------------------------------------------------- | ------------------------------------------- |
| `Enter`                                               | Submit prompt                               |
| `Shift+Enter`, `Ctrl+J`, `Alt+Enter`, or `Ctrl+Enter` | Insert newline                              |
| `Ctrl+A`                                              | Select all text in input                    |
| `@filename`                                           | Auto-complete files and inject content      |
| `Shift+Tab` or `Ctrl+T`                               | Toggle auto-approve                         |
| `Ctrl+E`                                              | Expand/collapse the most recent tool output |
| `Escape`                                              | Interrupt current operation                 |
| `Ctrl+C`                                              | Interrupt or quit                           |
| `Ctrl+D`                                              | Exit                                        |
````

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

Use `-q` for clean output suitable for piping into other commands, and `--no-stream` to buffer the full response (instead of streaming) before writing to stdout:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents -n "Generate a .gitignore for Python" -q > .gitignore
deepagents -n "List dependencies" -q --no-stream | sort
```

By default, shell execution is disabled in non-interactive mode. Use `--shell-allow-list` to enable it:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Allow specific commands (validated against the list)
deepagents -n "Run the tests and fix failures" --shell-allow-list "pytest,git,make"

# Use the curated safe-command list
deepagents -n "Build the project" --shell-allow-list recommended

# Allow any shell command
deepagents -n "Fix the build" --shell-allow-list all
```

`--shell-allow-list all` lets the agent execute arbitrary shell commands with no human confirmation. Use with caution.

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

You can also pass extra model constructor parameters when switching mid-session using `--model-params`:

```txt theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
> /model --model-params '{"temperature": 0.7}' anthropic:claude-sonnet-4-5
> /model --model-params '{"temperature": 0.7}'  # opens selector, applies params to chosen model
```

These are session-only overrides and take the highest priority, overriding values from config file `params`. `--model-params` cannot be combined with `--default`.

For full details on switching models, setting a default, and configuring custom providers, see [Model providers](/oss/javascript/deepagents/cli/providers). For `config.toml` reference and lifecycle hooks, see [Configuration](/oss/javascript/deepagents/cli/configuration).

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

## Customize your deep agent

There are two primary ways to customize any agent:

- **Memory**: Global and project-specific `AGENTS.md` files which are loaded in full at session start.
  Use memory for general coding style and preferences.

- **Skills**: Global and project-specific context, conventions, guidelines, or instructions.
  Use skills for context that is only required when performing specific tasks.

### Provide project or user context

[`AGENTS.md` files](https://agents.md/) files provide persistent memory that is always loaded at session start.

You can provide global user memory for the agent in `~/.deepagents/<agent_name>/AGENTS.md`.
This file is always loaded when you start a new deep agent session.
The agent may also read its memory files when answering project-specific questions or when you reference past work or patterns.

For project-specific memory, you can add context to `.deepagents/AGENTS.md` in any project's root folder as long as the project uses git.
When you start the CLI from anywhere within the project's folder, the CLI will find the project's root folder by checking for a containing `.git` folder.

Both global and project-level `AGENTS.md` files are loaded together and appended to the system prompt at startup.
The agent will update them as you use the agent and provide it with additional information on how it should behave, feedback on its work, or instructions to remember something.
The agent will also update its memory if it identifies patterns or preferences from your interactions.

If you would like to explicitly prompt your deep agent to update skills and memory based on the current context from the thread use the `/remember` command which loads a custom instruction to review the context and perform updates.

To add more structured project knowledge in additional memory files, you can add them in `.deepagents/` and reference them in the `AGENTS.md` file.
You must reference additional files in the `AGENTS.md` file for the agent to be aware of these files.
The additional files will not be read on startup but the agent can reference and update them when needed.

**Global `AGENTS.md`** (`~/.deepagents/agent/AGENTS.md`)

- Your personality, style, and universal coding preferences
- General tone and communication style
- Universal coding preferences (formatting, type hints, etc.)
- Tool usage patterns that apply everywhere
- Workflows and methodologies that don't change per-project

**Project `AGENTS.md`** (`.deepagents/AGENTS.md` in project root)

- Project-specific context and conventions
- Project architecture and design patterns
- Coding conventions specific to this codebase
- Testing strategies and deployment processes
- Team guidelines and project structure

## Use remote sandboxes

Execute code in isolated remote environments for safety and flexibility. Remote sandboxes provide the following benefits:

- **Safety**: Protect your local machine from potentially harmful code execution
- **Clean environments**: Use specific dependencies or OS configurations without local setup
- **Parallel execution**: Run multiple agents simultaneously in isolated environments
- **Long-running tasks**: Execute time-intensive operations without blocking your machine
- **Reproducibility**: Ensure consistent execution environments across teams

To use a remote sandbox, follow these steps:

1. Configure your sandbox provider ([Runloop](https://www.runloop.ai/), [Daytona](https://www.daytona.io/), or [Modal](https://modal.com/)):

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   # Runloop
   export RUNLOOP_API_KEY="your-key"

   # Daytona
   export DAYTONA_API_KEY="your-key"

   # Modal
   modal setup
   ```

2. Run the CLI with a sandbox:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   uvx deepagents-cli --sandbox runloop --sandbox-setup ./setup.sh
   ```

   The agent runs locally but executes all code operations in the remote sandbox. Optional setup scripts can configure environment variables, clone repositories, and prepare dependencies.

3. (Optional) Create a `setup.sh` file to configure your sandbox environment:

   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   #!/bin/bash
   set -e

   # Clone repository using GitHub token
   git clone https://x-access-token:${GITHUB_TOKEN}@github.com/username/repo.git $HOME/workspace
   cd $HOME/workspace

   # Make environment variables persistent
   cat >> ~/.bashrc <<'EOF'
   export GITHUB_TOKEN="${GITHUB_TOKEN}"
   export OPENAI_API_KEY="${OPENAI_API_KEY}"
   cd $HOME/workspace
   EOF

   source ~/.bashrc
   ```

   Store secrets in a local `.env` file for the setup script to access.

Sandboxes isolate code execution, but agents remain vulnerable to prompt injection with untrusted inputs. Use human-in-the-loop approval, short-lived secrets, and trusted setup scripts only.

Note that sandbox APIs are evolving rapidly, and we expect more providers to support proxies that help mitigate prompt injection and secrets management concerns.

## Use MCP tools

Extend the CLI with tools from external [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) servers. Place a `.mcp.json` at your project root and the CLI discovers it automatically. See the [MCP tools guide](/oss/javascript/deepagents/cli/mcp-tools) for configuration format, auto-discovery, and troubleshooting.

## Use skills

Skills are reusable agent capabilities that provide specialized workflows and domain knowledge.
You can use [skills](/oss/javascript/deepagents/skills) to provide your deep agent with new capabilities and expertise.
Deep agent skills follow the [Agent Skills standard](https://agentskills.io/).
Once you have added skills your deep agent will automatically make use of them and update them as you use the agent and provide it with additional information.

If you would like to explicitly prompt your deep agent to update skills and memory based on the current context from the thread use the `/remember` command which loads a custom instruction to review the context and perform updates.

### Add skills

1. Start by creating a skill:

   ````
   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   deepagents skills create test-skill
   ```

   This will generate the correct the following files in your `~/.deepagents/<agent_name>` folder:



   ```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   deepagents skills create test-skill --project
   ```

   This will generate the correct the following files in your `~/{project}/.deepagents/skills` folder:
   ````

   ```plaintext theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
   skills/
   └── test-skill
       └── SKILL.md
   ```

2. Open the generated `SKILL.md` and edit the file to include your instructions.

3. Optionally add additional scripts or other resources to the `test-skill` folder.
   For more information, see [Examples](/oss/javascript/deepagents/skills#examples).

If you already have a skills folder with containing skills files, you can also copy them directly to the agent's folder:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
mkdir -p ~/.deepagents/<agent_name>/skills
cp -r examples/skills/web-research ~/.deepagents/<agent_name>/skills/
```

At startup, the CLI discovers skills from both Deep Agents and shared alias directories:

```text theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
`~/.deepagents/<agent_name>/skills/`
`~/.agents/skills/`
`.deepagents/skills/`
`.agents/skills/`.
```

When duplicate skill names exist, later-precedence directories override earlier ones (see [App data](/oss/javascript/deepagents/data-locations#skills)).

For project-specific skills, the project's root folder must have a `.git` folder.
When you start the CLI from anywhere within the project's folder, the CLI will find the project's root folder by checking for a containing `.git` folder.

For each skill, the CLI reads the name and the description from the `SKILL.md` file's frontmatter.
As you use the CLI, if a task matches the skill's description, the agent will read the skill file and follow its instructions.

### List skills

To see the lists you have installed, run:

````
```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents skills list
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents skills list --project
```
````

To get more information for a specific skill, run:

````
```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents skills info test-skill
```



```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents skills info test-skill --project
```
````

***

```
[Edit this page on GitHub](https://github.com/langchain-ai/docs/edit/main/src/oss/deepagents/cli/overview.mdx) or [file an issue](https://github.com/langchain-ai/docs/issues/new/choose).



[Connect these docs](/use-these-docs) to Claude, VSCode, and more via MCP for real-time answers.
```
