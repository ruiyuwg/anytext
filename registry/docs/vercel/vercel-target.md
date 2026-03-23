# vercel target

The `vercel target` command (alias: `vercel targets`) manages your Vercel project's targets (custom environments). Targets are custom deployment environments beyond the standard production, preview, and development environments.

## Usage

```bash filename="terminal"
vercel target list
```

*Using \`vercel target list\` to list all targets for your project.*

## Commands

### list (ls)

List all targets defined for the current project.

```bash filename="terminal"
vercel target list
vercel target ls
vercel targets ls
```

*List all custom environments configured for your project.*

## Using the --target flag

The `--target` flag is available on several commands to specify which environment to target:

```bash filename="terminal"
# Deploy to a custom environment named "staging"
vercel deploy --target=staging
```

*Deploy your project to a custom environment by specifying
\`--target=\&lt;environment-name\&gt;\`.*

## Examples

### List all targets

```bash filename="terminal"
vercel target list
```

### Deploy to a custom environment

```bash filename="terminal"
vercel deploy --target=staging
```

### Pull environment variables for a custom environment

```bash filename="terminal"
vercel pull --environment=staging
```

### Set and use environment variables for a custom environment

```bash filename="terminal"
vercel env add MY_KEY staging
vercel env ls staging
```

## Related

-
-
-

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

title: "vercel teams"
description: "Learn how to list, add, remove, and manage your teams using the vercel teams CLI command."
last\_updated: "2026-03-23T09:40:07.137Z"
source: "https://vercel.com/docs/cli/teams"

# vercel teams

The `vercel teams` command is used to manage [Teams](/docs/accounts/create-a-team), providing functionality to list, add, and invite new [Team Members](/docs/rbac/managing-team-members).

> **💡 Note:** You can manage Teams with further options and greater control from the Vercel
> Dashboard.

## Usage

```bash filename="terminal"
vercel teams list
```

*Using the \`vercel teams\` command to list all teams
you’re a member of.*

## Extended Usage

```bash filename="terminal"
vercel teams add
```

*Using the \`vercel teams\` command to create a new team.*

```bash filename="terminal"
vercel teams invite [email]
```

*Using the \`vercel teams\` command to invite a new Team
Member.*

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

title: "vercel telemetry"
description: "Learn how to manage telemetry collection."
last\_updated: "2026-03-23T09:40:07.150Z"
source: "https://vercel.com/docs/cli/telemetry"
