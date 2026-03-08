# vercel open

The `vercel open` command opens your current project in the Vercel Dashboard. It automatically opens your default browser to the project's dashboard page, making it easy to access project settings, deployments, and other configuration options.

> **💡 Note:** This command is available in Vercel CLI v48.10.0 and later. If you're using an older version, see [Updating Vercel CLI](/docs/cli#updating-vercel-cli).

This command requires your directory to be [linked to a Vercel project](/docs/cli/project-linking). If you haven't linked your project yet, run [`vercel link`](/docs/cli/link) first.

## Usage

```bash filename="terminal"
vercel open
```

*Using the vercel open command to open the current
project in the Vercel Dashboard.*

## How it works

When you run `vercel open`:

1. The CLI checks if your current directory is linked to a Vercel project
2. It retrieves the project information, including the team slug and project name
3. It constructs the dashboard URL for your project
4. It opens the URL in your default browser

The command opens the project's main dashboard page at `https://vercel.com/{team-slug}/{project-name}`, where you can view deployments, configure settings, and manage your project.

## Examples

### Open the current project

From a linked project directory:

```bash filename="terminal"
vercel open
```

*Opening the current project in the Vercel Dashboard.*

This opens your browser to the project's dashboard page.

## Troubleshooting

### Project not linked

If you see an error that the command requires a linked project:

```bash filename="terminal"
# Link your project first
vercel link

# Then open it
vercel open
```

*Linking your project before opening it in the dashboard.*

Make sure you're in the correct directory where your project files are located.

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

## Related

- [vercel link](/docs/cli/link)
- [vercel project](/docs/cli/project)
- [Project Linking](/docs/cli/project-linking)

title: "Vercel CLI Overview"
description: "Learn how to use the Vercel command-line interface (CLI) to manage and configure your Vercel Projects from the command line."
last\_updated: "2026-03-08T05:03:12.335Z"
source: "https://vercel.com/docs/cli"
