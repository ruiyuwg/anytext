# vercel link

The `vercel link` command links your local directory to a [Vercel Project](/docs/projects/overview).

## Usage

```bash filename="terminal"
vercel link
```

*Using the \`vercel link\` command to link the current
directory to a Vercel Project.*

## Extended Usage

```bash filename="terminal"
vercel link [path-to-directory]
```

*Using the \`vercel link\` command and supplying a path to
the local directory of the Vercel Project.*

## Unique Options

These are options that only apply to the `vercel link` command.

### Repo&#x20;

The `--repo` option can be used to link all projects in your repository to their respective Vercel projects in one command. This command requires that your Vercel projects are using the [Git integration](/docs/git).

```bash filename="terminal"
vercel link --repo
```

*Using the \`vercel link\` command with the \`--repo\` option.*

### Yes

The `--yes` option can be used to skip questions you are asked when setting up a new Vercel Project.
The questions will be answered with the default scope and current directory for the Vercel Project name and location.

```bash filename="terminal"
vercel link --yes
```

*Using the \`vercel link\` command with the
\`--yes\` option.*

### Project

The `--project` option specifies a project name or ID. In non-interactive usage, `--project` allows you to set a project that does not match the name of the current working directory.

```bash filename="terminal"
vercel link --yes --project foo
```

*Using the \`vercel link\` command with the
\`--project\` option.*

You can also set the `VERCEL_PROJECT_ID` environment variable instead of using the `--project` flag. If both are provided, the `--project` flag takes precedence. See [CLI Global Options](/docs/cli/global-options#project) for the full precedence order when specifying a project.

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

title: "vercel list"
description: "Learn how to list out all recent deployments for the current Vercel Project using the vercel list CLI command."
last\_updated: "2026-03-23T09:40:06.863Z"
source: "https://vercel.com/docs/cli/list"
