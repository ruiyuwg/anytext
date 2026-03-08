Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Copilot sandbox

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

Requires: Docker Desktop [4.58](https://docs.docker.com/desktop/release-notes/#4580) or later

This guide covers authentication, configuration, and usage of GitHub Copilot in a sandboxed environment.

Official documentation: [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli)

## [Quick start](#quick-start)

Create a sandbox and run Copilot for a project directory:

```console
$ docker sandbox run copilot ~/my-project
```

The workspace parameter is optional and defaults to the current directory:

```console
$ cd ~/my-project
$ docker sandbox run copilot
```

## [Authentication](#authentication)

Copilot requires a GitHub token with Copilot access. Credentials are scoped per sandbox and must be provided through environment variables on the host.

### [Environment variable (recommended)](#environment-variable-recommended)

Set the `GH_TOKEN` or `GITHUB_TOKEN` environment variable in your shell configuration file.

Docker Sandboxes use a daemon process that doesn't inherit environment variables from your current shell session. To make your token available to sandboxes, set it globally in your shell configuration file.

Add the token to your shell configuration file:

\~/.bashrc or ~/.zshrc

```plaintext
export GH_TOKEN=ghp_xxxxx
```

Or use `GITHUB_TOKEN`:

\~/.bashrc or ~/.zshrc

```plaintext
export GITHUB_TOKEN=ghp_xxxxx
```

Apply the changes:

1. Source your shell configuration: `source ~/.bashrc` (or `~/.zshrc`)
2. Restart Docker Desktop so the daemon picks up the new environment variable
3. Create and run your sandbox:

```console
$ docker sandbox create copilot ~/project
$ docker sandbox run <sandbox-name>
```

The sandbox detects the environment variable and uses it automatically.

## [Configuration](#configuration)

Copilot can be configured to trust specific folders, disabling safety prompts for those locations. Configure trusted folders in `~/.copilot/config.json`:

```json
{
  "trusted_folders": ["/workspace", "/home/agent/projects"]
}
```

Workspaces are mounted at `/workspace` by default, so trusting this path allows Copilot to operate without repeated confirmations.

### [Pass options at runtime](#pass-options-at-runtime)

Pass Copilot CLI options after the sandbox name and a `--` separator:

```console
$ docker sandbox run <sandbox-name> -- --yolo
```

The `--yolo` flag disables approval prompts for a single session without modifying the configuration file.

## [Base image](#base-image)

Template: `docker/sandbox-templates:copilot`

Copilot launches with `--yolo` by default when trusted folders are configured.

See [Custom templates](https://docs.docker.com/ai/sandboxes/templates/) to build your own agent images.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/sandboxes/agents/copilot.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fsandboxes%2fagents%2fcopilot%2f\&labels=status%2Ftriage)

Table of contents
