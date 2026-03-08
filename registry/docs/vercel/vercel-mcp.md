# vercel mcp

The `vercel mcp` command helps you set up an MCP client to talk to MCP servers you deploy on Vercel. It links your local MCP client configuration to a Vercel Project and generates the connection details so agents and tools can call your MCP endpoints securely.

## Usage

```bash filename="terminal"
vercel mcp [options]
```

*Using the vercel mcp command to initialize local MCP
configuration for the currently linked Project.*

## Examples

### Initialize global MCP configuration

```bash filename="terminal"
vercel mcp
```

*Initializes global MCP client configuration for your Vercel account.*

### Initialize project-specific MCP access

```bash filename="terminal"
vercel mcp --project
```

*Sets up project-specific MCP access for the currently linked Vercel Project.*

## Unique options

These are options that only apply to the `vercel mcp` command.

### Project

The `--project` option sets up project-specific MCP access for the currently linked project instead of global configuration.

```bash filename="terminal"
vercel mcp --project
```

*Use the --project flag to configure MCP access scoped to your linked project.*

## Global Options

The following [global options](/docs/cli/global-options) can be passed when using the \`\` command:

- [`--cwd`](/docs/cli/global-options#current-working-directory)
- [`--debug`](/docs/cli/global-options#debug)
- [`--global-config`](/docs/cli/global-options#global-config)
- [`--help`](/docs/cli/global-options#help)
- [`--local-config`](/docs/cli/global-options#local-config)
- [`--no-color`](/docs/cli/global-options#no-color)
- [`--scope`](/docs/cli/global-options#scope)
- [`--token`](/docs/cli/global-options#token)

For more information on global options and their usage, refer to the [options section](/docs/cli/global-options).

title: "vercel microfrontends"
description: "Manage microfrontends configuration from the CLI. Learn how to pull configuration for local development."
last\_updated: "2026-03-08T05:03:12.274Z"
source: "https://vercel.com/docs/cli/microfrontends"
