When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Claude Code sandbox

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

Requires: Docker Desktop [4.58](https://docs.docker.com/desktop/release-notes/#4580) or later

This guide covers authentication, configuration files, and common options for running Claude Code in a sandboxed environment.

Official documentation: [Claude Code](https://code.claude.com/docs)

## [Quick start](#quick-start)

To create a sandbox and run Claude Code for a project directory:

```console
$ docker sandbox run claude ~/my-project
```

The workspace parameter is optional and defaults to the current directory:

```console
$ cd ~/my-project
$ docker sandbox run claude
```

### [Pass a prompt directly](#pass-a-prompt-directly)

Start Claude with a specific prompt:

```console
$ docker sandbox run <sandbox-name> -- "Add error handling to the login function"
```

Or:

```console
$ docker sandbox run <sandbox-name> -- "$(cat prompt.txt)"
```

This starts Claude and immediately processes the prompt.

## [Authentication](#authentication)

Claude Code requires an Anthropic API key. Credentials are scoped per sandbox.

### [Environment variable (recommended)](#environment-variable-recommended)

The recommended approach is to set the `ANTHROPIC_API_KEY` environment variable in your shell configuration file.

Docker Sandboxes use a daemon process that doesn't inherit environment variables from your current shell session. To make your API key available to sandboxes, set it globally in your shell configuration file.

Add the API key to your shell configuration file:

\~/.bashrc or ~/.zshrc

```plaintext
export ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
```

Apply the changes:

1. Source your shell configuration: `source ~/.bashrc` (or `~/.zshrc`)
2. Restart Docker Desktop so the daemon picks up the new environment variable
3. Create and run your sandbox:

```console
$ docker sandbox create claude ~/project
$ docker sandbox run <sandbox-name>
```

The sandbox detects the environment variable and uses it automatically.

### [Interactive authentication](#interactive-authentication)

If the `ANTHROPIC_API_KEY` environment variable is not set, Claude Code prompts you to authenticate interactively when it starts. You can also trigger the login flow manually using the `/login` command within Claude Code.

When using interactive authentication:

- You must authenticate each sandbox separately
- If the sandbox is removed or destroyed, you'll need to authenticate again when you recreate it
- Authentication sessions aren't persisted outside the sandbox
- No fallback authentication methods are used

To avoid repeated authentication, set the `ANTHROPIC_API_KEY` environment variable.

## [Configuration](#configuration)

Claude Code can be configured through CLI options. Any arguments you pass after the sandbox name and a `--` separator are passed directly to Claude Code.

Pass options after the sandbox name:

```console
$ docker sandbox run <sandbox-name> -- [claude-options]
```

For example:

```console
$ docker sandbox run <sandbox-name> -- --continue
```

See the [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference) for available options.

## [Base image](#base-image)

Template: `docker/sandbox-templates:claude-code`

Claude Code launches with `--dangerously-skip-permissions` by default in sandboxes.

See [Custom templates](https://docs.docker.com/ai/sandboxes/templates/) to build your own agent images.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/sandboxes/agents/claude-code.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fsandboxes%2fagents%2fclaude-code%2f\&labels=status%2Ftriage)

Table of contents
