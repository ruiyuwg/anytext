When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# OpenCode sandbox

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

Requires: Docker Desktop [4.61](https://docs.docker.com/desktop/release-notes/#4610) or later

This guide covers authentication, configuration, and usage of OpenCode in a sandboxed environment.

Official documentation: [OpenCode](https://opencode.ai/docs)

## [Quick start](#quick-start)

Create a sandbox and run OpenCode for a project directory:

```console
$ docker sandbox run opencode ~/my-project
```

The workspace parameter is optional and defaults to the current directory:

```console
$ cd ~/my-project
$ docker sandbox run opencode
```

OpenCode launches a TUI (text user interface) where you can select your preferred LLM provider and interact with the agent.

## [Authentication](#authentication)

OpenCode uses proxy-managed authentication for all supported providers. Docker Sandboxes intercepts API requests and injects credentials transparently. You provide your API keys through environment variables on the host, and the sandbox handles credential management.

### [Supported providers](#supported-providers)

Configure one or more providers by setting environment variables:

\~/.bashrc or ~/.zshrc

```plaintext
export OPENAI_API_KEY=sk-xxxxx
export ANTHROPIC_API_KEY=sk-ant-xxxxx
export GOOGLE_API_KEY=AIzaSyxxxxx
export XAI_API_KEY=xai-xxxxx
export GROQ_API_KEY=gsk_xxxxx
export AWS_ACCESS_KEY_ID=AKIA_xxxxx
export AWS_SECRET_ACCESS_KEY=xxxxx
export AWS_REGION=us-west-2
```

You only need to configure the providers you want to use. OpenCode detects available credentials and offers those providers in the TUI.

### [Environment variable setup](#environment-variable-setup)

Docker Sandboxes use a daemon process that doesn't inherit environment variables from your current shell session. To make your API keys available to sandboxes, set them globally in your shell configuration file.

Apply the changes:

1. Source your shell configuration: `source ~/.bashrc` (or `~/.zshrc`)
2. Restart Docker Desktop so the daemon picks up the new environment variables
3. Create and run your sandbox:

```console
$ docker sandbox create opencode ~/project
$ docker sandbox run <sandbox-name>
```

The sandbox detects the environment variables and uses them automatically.

## [Configuration](#configuration)

OpenCode uses a TUI interface and doesn't require extensive configuration files. The agent prompts you to select a provider when it starts, and you can switch providers during a session.

### [TUI mode](#tui-mode)

OpenCode launches in TUI mode by default. The interface shows:

- Available LLM providers (based on configured credentials)
- Current conversation history
- File operations and tool usage
- Real-time agent responses

Use keyboard shortcuts to navigate the interface and interact with the agent.

## [Base image](#base-image)

Template: `docker/sandbox-templates:opencode`

OpenCode supports multiple LLM providers with automatic credential injection through the sandbox proxy.

See [Custom templates](https://docs.docker.com/ai/sandboxes/templates/) to build your own agent images.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/sandboxes/agents/opencode.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fsandboxes%2fagents%2fopencode%2f\&labels=status%2Ftriage)

Table of contents
