Context

When enabled, Gordon considers the current page you're viewing to provide more relevant answers.

[Share feedback](https://github.com/docker/docs/issues/23966)

Answers are generated based on the documentation.

Back

[Manuals](https://docs.docker.com/manuals/)

- [Get started](/get-started/)
- [Guides](/guides/)
- [Reference](/reference/)

# Kiro sandbox

Copy as Markdown

Open Markdown Ask Docs AI Claude Open in Claude

Table of contents

***

Availability: Experimental

Requires: Docker Desktop [4.58](https://docs.docker.com/desktop/release-notes/#4580) or later

This guide covers authentication, configuration, and usage of Kiro in a sandboxed environment.

Official documentation: [Kiro CLI](https://kiro.dev/docs/cli/)

## [Quick start](#quick-start)

Create a sandbox and run Kiro for a project directory:

```console
$ docker sandbox run kiro ~/my-project
```

The workspace parameter is optional and defaults to the current directory:

```console
$ cd ~/my-project
$ docker sandbox run kiro
```

On first run, Kiro prompts you to authenticate using device flow.

## [Authentication](#authentication)

Kiro uses device flow authentication, which requires interactive login through a web browser. This method provides secure authentication without storing API keys directly.

### [Device flow login](#device-flow-login)

When you first run Kiro, it prompts you to authenticate:

1. Kiro displays a URL and a verification code
2. Open the URL in your web browser
3. Enter the verification code
4. Complete the authentication flow in your browser
5. Return to the terminal - Kiro proceeds automatically

The authentication session is persisted in the sandbox and doesn't require repeated login unless you destroy and recreate the sandbox.

### [Manual login](#manual-login)

You can trigger the login flow manually:

```console
$ docker sandbox run <sandbox-name> -- login --use-device-flow
```

This command initiates device flow authentication without starting a coding session.

### [Authentication persistence](#authentication-persistence)

Kiro stores authentication state in `~/.local/share/kiro-cli/data.sqlite3` inside the sandbox. This database persists as long as the sandbox exists. If you destroy the sandbox, you'll need to authenticate again when you recreate it.

## [Configuration](#configuration)

Kiro requires minimal configuration. The agent runs with trust-all-tools mode by default, which allows it to execute commands without repeated approval prompts.

### [Pass options at runtime](#pass-options-at-runtime)

Pass Kiro CLI options after the sandbox name and a `--` separator:

```console
$ docker sandbox run <sandbox-name> -- chat --trust-all-tools
```

The `chat --trust-all-tools` command starts Kiro with approval prompts disabled.

## [Base image](#base-image)

Template: `docker/sandbox-templates:kiro`

Kiro manages authentication through an interactive device flow. The authentication database is persisted across sandbox restarts. Launches with `chat --trust-all-tools` by default.

See [Custom templates](https://docs.docker.com/ai/sandboxes/templates/) to build your own agent images.

[Edit this page](https://github.com/docker/docs/edit/main/content/manuals/ai/sandboxes/agents/kiro.md)

[Request changes](https://github.com/docker/docs/issues/new?template=doc_issue.yml\&location=https%3a%2f%2fdocs.docker.com%2fai%2fsandboxes%2fagents%2fkiro%2f\&labels=status%2Ftriage)

Table of contents
