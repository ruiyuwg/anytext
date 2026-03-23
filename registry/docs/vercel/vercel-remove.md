# vercel remove

The `vercel remove` command, which can be shortened to `vercel rm`, is used to remove deployments either by ID or for a specific Vercel Project.

> **💡 Note:** You can also remove deployments from the Project Overview page on the Vercel
> Dashboard.

## Usage

```bash filename="terminal"
vercel remove [deployment-url]
```

*Using the \`vercel remove\` command to remove a
deployment from the Vercel platform.*

## Extended Usage

```bash filename="terminal"
vercel remove [deployment-url-1 deployment-url-2]
```

*Using the \`vercel remove\` command to remove multiple
deployments from the Vercel platform.*

```bash filename="terminal"
vercel remove [project-name]
```

*Using the \`vercel remove\` command to remove all
deployments for a Vercel Project from the Vercel platform.*

> **💡 Note:** By using the [project name](/docs/projects/overview/), the entire Vercel
> Project will be removed from the current scope unless the
> `--safe` is used.

## Unique Options

These are options that only apply to the `vercel remove` command.

### Safe

The `--safe` option, shorthand `-s`, can be used to skip the removal of deployments with an active preview URL or production domain when a Vercel Project is provided as the parameter.

```bash filename="terminal"
vercel remove my-project --safe
```

*Using the \`vercel remove\` command with the
\`--safe\` option.*

### Yes

The `--yes` option, shorthand `-y`, can be used to skip the confirmation step for a deployment or Vercel Project removal.

```bash filename="terminal"
vercel remove my-deployment.com --yes
```

*Using the \`vercel remove\` command with the
\`--yes\` option.*

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

title: "vercel rollback"
description: "Learn how to roll back your production deployments to previous deployments using the vercel rollback CLI command."
last\_updated: "2026-03-23T09:40:07.037Z"
source: "https://vercel.com/docs/cli/rollback"
