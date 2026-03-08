Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Docker Agent sandbox

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

Requires: Docker Desktop [4.58](https://docs.docker.com/desktop/release-notes/#4580) or later

This page covers running [Docker Agent](/ai/docker-agent/) inside Docker Sandboxes. Docker Agent is also available as a standalone CLI tool. See the full documentation for standalone usage, configuration reference, and building agent teams.

## [Quick start](#quick-start)

Create a sandbox and run Docker Agent for a project directory:

```console
$ docker sandbox run cagent ~/my-project
```

The workspace parameter is optional and defaults to the current directory:

```console
$ cd ~/my-project
$ docker sandbox run cagent
```

## [Authentication](#authentication)

Docker Agent uses proxy-managed authentication for all supported providers. Docker Sandboxes intercepts API requests and injects credentials transparently. You provide your API keys through environment variables, and the sandbox handles credential management.

### [Supported providers](#supported-providers)

Configure one or more providers by setting environment variables:

\~/.bashrc or ~/.zshrc

```plaintext
export OPENAI_API_KEY=sk-xxxxx
export ANTHROPIC_API_KEY=sk-ant-xxxxx
export GOOGLE_API_KEY=AIzaSyxxxxx
export XAI_API_KEY=xai-xxxxx
export NEBIUS_API_KEY=xxxxx
export MISTRAL_API_KEY=xxxxx
```

You only need to configure the providers you want to use. Docker Agent detects available credentials and routes requests to the appropriate provider.

### [Environment variable setup](#environment-variable-setup)

Docker Sandboxes use a daemon process that doesn't inherit environment variables from your current shell session. To make your API keys available to sandboxes, set them globally in your shell configuration file.

Apply the changes:

1. Source your shell configuration: `source ~/.bashrc` (or `~/.zshrc`)
2. Restart Docker Desktop so the daemon picks up the new environment variables
3. Create and run your sandbox:

```console
$ docker sandbox create cagent ~/project
$ docker sandbox run <sandbox-name>
```

The sandbox detects the environment variables and uses them automatically.

## [Configuration](#configuration)

Docker Agent supports YOLO mode that disables safety checks and approval prompts. This mode grants the agent full access to your sandbox environment without interactive confirmation.

### [Pass options at runtime](#pass-options-at-runtime)

Pass Docker Agent CLI options after the sandbox name and a `--` separator:

```console
$ docker sandbox run <sandbox-name> -- run --yolo
```

The `run --yolo` command starts Docker Agent with approval prompts disabled.

## [Base image](#base-image)

Template: `docker/sandbox-templates:cagent`

Docker Agent supports multiple LLM providers with automatic credential injection through the sandbox proxy. Launches with `run --yolo` by default.

See [Custom templates](https://docs.docker.com/ai/sandboxes/templates/) to build your own agent images.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/sandboxes/agents/docker-agent.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fsandboxes%2fagents%2fdocker-agent%2f\&labels=status%2Ftriage)

Table of contents
