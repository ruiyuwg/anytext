## Built-in tools

The agent comes with the following built-in tools which are available without configuration:

| Tool                   | Description                                                                                                  | Human-in-the-Loop    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------- |
| `ls`                   | List files and directories                                                                                   | -                    |
| `read_file`            | Read contents of a file; supports images (`.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`) as multimodal content    | -                    |
| `write_file`           | Create or overwrite a file                                                                                   | Required1 |
| `edit_file`            | Make targeted edits to existing files                                                                        | Required1 |
| `glob`                 | Find files matching a pattern (e.g., `**/*.py`)                                                              | -                    |
| `grep`                 | Search for text patterns across files                                                                        | -                    |
| `execute`              | Execute shell commands locally or in a remote sandbox                                                        | Required1 |
| `http_request`         | Make HTTP requests to APIs and web services (`GET`, `POST`, `PUT`, `DELETE`, etc.)                           | -                    |
| `web_search`           | Search the web using Tavily API                                                                              | Required1 |
| `fetch_url`            | Fetch and convert web pages to markdown                                                                      | Required1 |
| `task`                 | Delegate work to subagents for parallel execution                                                            | Required1 |
| `ask_user`             | Ask the user free-form or multiple-choice questions when clarification is needed                             | -                    |
| `compact_conversation` | Summarize older messages, offload originals to backend storage, and replace them in context with the summary | Mixed2    |
| `write_todos`          | Create and manage task lists for complex work                                                                | -                    |

1: Potentially destructive operations require user approval before execution. To bypass human approval, you can toggle auto-approve or start the deep agent with the `auto-approve` option:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents -y
```

```
When running the CLI non-interactively (via `-n` or piped stdin), shell execution is disabled by default even with `-y`/`--auto-approve`. Use `-S`/`--shell-allow-list` to allowlist specific commands (e.g., `-S "pytest,git,make"`), `recommended` for safe defaults, or `all` to permit any command. The `DEEPAGENTS_SHELL_ALLOW_LIST` environment variable is also supported. See [Non-interactive mode and piping](#non-interactive-mode-and-piping) for more details.
```

2: The CLI automatically offloads the conversation in the background when token usage exceeds a model-aware threshold. Offloading summarizes older messages via the LLM, and ejects originals to backend storage (`/conversation_history/{thread_id}.md`), replacing them in context with the summary. The agent can still retrieve the full history from the offloaded file if needed. The `compact_conversation` tool lets the agent (or you) trigger offloading on demand. When called as a tool, it requires user approval by default.

[Watch the demo video](https://youtu.be/IrnacLa9PJc?si=3yUnPbxnm2yaqVQb) to see how the Deep Agents CLI works.

## Quickstart

````
Export your provider's API key as an environment variable. For example:

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export OPENAI_API_KEY="your-api-key"
```

The CLI works with [any LLM that supports tool calling](/oss/python/deepagents/cli/providers) — OpenAI, Anthropic, Google, Ollama, and many more. See [Providers](#providers) for setup details.



The CLI ships with OpenAI, Anthropic, and Google support by default. Other providers (Ollama, Groq, xAI, etc.) are installed as optional extras — see [Providers](#providers) for details.


  ```bash Script theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  curl -LsSf https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/libs/cli/scripts/install.sh | bash
  ```

  ```bash Script with extras theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  DEEPAGENTS_EXTRAS="ollama,groq" curl -LsSf https://raw.githubusercontent.com/langchain-ai/deepagents/refs/heads/main/libs/cli/scripts/install.sh | bash
  ```

  ```bash uv theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
  uv tool install 'deepagents-cli[ollama,groq]'
  ```


```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents
```



```txt theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
Create a Python script that prints "Hello, World!"
```

The agent proposes changes with diffs for your approval before modifying files.



See agent operations, tool calls, and decisions in [LangSmith](#tracing-with-langsmith):

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
export LANGCHAIN_TRACING=true
export LANGCHAIN_API_KEY="your-api-key"
```
````

## Providers

The CLI is intentionally lightweight—it ships with OpenAI, Anthropic, and Google support out of the box. Each additional model provider is a separate dependency, so you only pull in what you need.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
# Add extra providers to an existing install
uv tool upgrade deepagents-cli --with langchain-xai
```

To use a specific provider, pass `--model` at launch or switch mid-session with `/model`.

```bash theme={"theme":{"light":"catppuccin-latte","dark":"catppuccin-mocha"}}
deepagents --model anthropic:claude-opus-4-5
```

For the full list of supported providers, see [Model providers](/oss/python/deepagents/cli/providers).
