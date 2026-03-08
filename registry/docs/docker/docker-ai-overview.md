Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Docker AI overview

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Docker provides tools for working with AI across your development workflow. Each tool serves a different purpose.

## [Which tool do I need?](#which-tool-do-i-need)

I want to...

Use

CLI command

Get AI help with Docker tasks (containers, images, Dockerfiles)

[Gordon](https://docs.docker.com/ai/gordon/)

`docker ai`

Run AI models locally with an OpenAI-compatible API

[Model Runner](https://docs.docker.com/ai/model-runner/)

`docker model`

Connect AI tools to external services via MCP

[MCP Catalog and Toolkit](https://docs.docker.com/ai/mcp-catalog-and-toolkit/)

`docker mcp`

Build and orchestrate custom multi-agent teams

[Docker Agent](https://docs.docker.com/ai/docker-agent/)

`docker agent`

Run coding agents in isolated environments

[Docker Sandboxes](https://docs.docker.com/ai/sandboxes/)

`docker sandbox`

## [How these tools relate](#how-these-tools-relate)

**Gordon** is Docker's built-in AI assistant. It helps with Docker-specific tasks like debugging containers, writing Dockerfiles, and managing images. You interact with it through Docker Desktop or the `docker ai` command.

**Docker Agent** is an open-source framework for defining teams of AI agents in YAML. You configure agents with specific roles, models, and tools, then run them from your terminal. Docker Agent is a general-purpose agent runtime, not specific to Docker tasks.

**Docker Sandboxes** provides isolated microVM environments for running coding agents. It supports multiple agents including Claude Code, Codex, Copilot, Gemini, and Docker Agent. Sandboxes is the isolation layer — the agents themselves are separate tools.

**Model Runner** lets you run LLMs locally. Other tools like Docker Agent can use Model Runner as a model provider.

**MCP Catalog and Toolkit** manages connections between AI tools and external services using the Model Context Protocol. Gordon, Docker Agent, and third-party tools can all use MCP servers configured through the Toolkit.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai-overview.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai-overview%2f\&labels=status%2Ftriage)

Table of contents
