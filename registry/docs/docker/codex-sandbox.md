When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Codex sandbox

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

Requires: Docker Desktop [4.58](https://docs.docker.com/desktop/release-notes/#4580) or later

This guide covers authentication, configuration, and usage of Codex in a sandboxed environment.

Official documentation: [Codex CLI](https://developers.openai.com/codex/cli)

## [Quick start](#quick-start)

Create a sandbox and run Codex for a project directory:

```console
$ docker sandbox run codex ~/my-project
```

The workspace parameter is optional and defaults to the current directory:

```console
$ cd ~/my-project
$ docker sandbox run codex
```

## [Authentication](#authentication)

Codex requires an OpenAI API key. Credentials are scoped per sandbox.

Set the `OPENAI_API_KEY` environment variable in your shell configuration file.

Docker Sandboxes use a daemon process that doesn't inherit environment variables from your current shell session. To make your API key available to sandboxes, set it globally in your shell configuration file.

Add the API key to your shell configuration file:

\~/.bashrc or ~/.zshrc

```plaintext
export OPENAI_API_KEY=sk-xxxxx
```

Apply the changes:

1. Source your shell configuration: `source ~/.bashrc` (or `~/.zshrc`)
2. Restart Docker Desktop so the daemon picks up the new environment variable
3. Create and run your sandbox:

```console
$ docker sandbox create codex ~/project
$ docker sandbox run <sandbox-name>
```

The sandbox detects the environment variable and uses it automatically.

## [Configuration](#configuration)

Codex supports a YOLO mode that disables safety checks and approval prompts. This mode grants the agent full access to your sandbox environment without interactive confirmation.

Configure YOLO mode in `~/.codex/config.toml`:

```toml
approval_policy = "never"
sandbox_mode = "danger-full-access"
```

With these settings, Codex runs without approval prompts.

### [Pass options at runtime](#pass-options-at-runtime)

Pass Codex CLI options after the sandbox name and a `--` separator:

```console
$ docker sandbox run <sandbox-name> -- --dangerously-bypass-approvals-and-sandbox
```

This flag enables YOLO mode for a single session without modifying the configuration file.

## [Base image](#base-image)

Template: `docker/sandbox-templates:codex`

Codex launches with `--dangerously-bypass-approvals-and-sandbox` by default when YOLO mode is configured.

See [Custom templates](https://docs.docker.com/ai/sandboxes/templates/) to build your own agent images.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/sandboxes/agents/codex.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fsandboxes%2fagents%2fcodex%2f\&labels=status%2Ftriage)

Table of contents
