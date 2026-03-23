# vercel microfrontends

The `vercel microfrontends` command (alias: `vercel mf`) provides utilities for working with Vercel Microfrontends from the CLI.

Currently, it supports pulling the remote configuration to your local repository for development.

> **💡 Note:** To learn more about the architecture and config format, see
> .
> For a polyrepo setup walkthrough, see
> .
> This command requires Vercel CLI 44.2.2 or newer.

## Usage

```bash filename="terminal"
vercel microfrontends pull [options]
```

*Using the \`vercel microfrontends pull\` command to
download the project's \`microfrontends.json\` (or
\`microfrontends.jsonc\`) file for local development.*

## Unique options

These are options that only apply to the `vercel microfrontends` command.

### Deployment

Use the `--dpl` option to specify a deployment ID or URL
to pull configuration from. If omitted, the CLI uses your project's default
application/deployment.

```bash filename="terminal"
vercel microfrontends pull --dpl https://my-app-abc123.vercel.app
```

*Pull configuration from a specific deployment.*

## Examples

### Pull configuration for the linked project

```bash filename="terminal"
vercel microfrontends pull
```

### Pull configuration for a specific deployment

```bash filename="terminal"
vercel mf pull --dpl dpl_123xyz
```

## Global Options

The following [global options](/docs/cli/global-options) can be passed when using the  command:

- [`--cwd`](/docs/cli/global-options#current-working-directory)
- [`--debug`](/docs/cli/global-options#debug)
- [`--global-config`](/docs/cli/global-options#global-config)
- [`--help`](/docs/cli/global-options#help)
- [`--local-config`](/docs/cli/global-options#local-config)
- [`--no-color`](/docs/cli/global-options#no-color)
- [`--scope`](/docs/cli/global-options#scope)
- [`--token`](/docs/cli/global-options#token)

For more information on global options and their usage, refer to the [options section](/docs/cli/global-options).

title: "vercel open"
description: "Learn how to open your current project in the Vercel Dashboard using the vercel open CLI command."
last\_updated: "2026-03-23T09:40:06.935Z"
source: "https://vercel.com/docs/cli/open"
