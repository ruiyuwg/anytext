# vercel list

The `vercel list` command, which can be shortened to `vercel ls`, provides a list of recent deployments for the currently-linked Vercel Project.

## Usage

```bash filename="terminal"
vercel list
```

*Using the vercel list command to retrieve information
about multiple deployments for the currently-linked Vercel Project.*

## Extended Usage

```bash filename="terminal"
vercel list [project-name]
```

*Using the vercel list command to retrieve information
about deployments for a specific Vercel Project.*

```bash filename="terminal"
vercel list [project-name] [--status READY,BUILDING]
```

*Using the vercel list command to retrieve information
about deployments filtered by status.*

```bash filename="terminal"
vercel list [project-name] [--meta foo=bar]
```

*Using the vercel list command to retrieve information
about deployments filtered by metadata.*

```bash filename="terminal"
vercel list [project-name] [--policy errored=6m]
```

*Using the vercel list command to retrieve information
about deployments including retention policy.*

## Unique Options

These are options that only apply to the `vercel list` command.

### Meta

The `--meta` option, shorthand `-m`, can be used to filter results based on Vercel deployment metadata.

```bash filename="terminal"
vercel list --meta key1=value1 key2=value2
```

*Using the vercel list command with the
\--meta option.*

A common use case is filtering by the Git commit SHA that created a deployment:

```bash filename="terminal"
vercel ls -m githubCommitSha=de8b89f13b2bc164cf07e735921bf5513e17951d
```

*Find deployments by Git commit SHA using the
githubCommitSha metadata key.*

> **💡 Note:** To see the meta values for a deployment, use [GET /deployments/{idOrUrl}
> ](https://vercel.com/docs/rest-api/reference/endpoints/deployments/get-a-deployment-by-id-or-url).

### Policy

The `--policy` option, shorthand `-p`, can be used to display expiration based on [Vercel project deployment retention policy](/docs/security/deployment-retention).

```bash filename="terminal"
vercel list --policy canceled=6m -p errored=6m -p preview=6m -p production=6m
```

*Using the vercel list command with the
\--policy option.*

### Yes

The `--yes` option can be used to skip questions you are asked when setting up a new Vercel Project.
The questions will be answered with the default scope and current directory for the Vercel Project name and location.

```bash filename="terminal"
vercel list --yes
```

*Using the vercel list command with the
\--yes option.*

### Status

The `--status` option, shorthand `-s`, can be used to filter deployments by their status.

```bash filename="terminal"
vercel list --status READY
```

*Using the vercel list command with the
\--status option to filter by a single status.*

You can filter by multiple status values using comma-separated values:

```bash filename="terminal"
vercel list --status READY,BUILDING
```

*Using the vercel list command to filter by multiple
status values.*

The supported status values are:

- `BUILDING` - Deployments currently being built
- `ERROR` - Deployments that failed during build or runtime
- `INITIALIZING` - Deployments in the initialization phase
- `QUEUED` - Deployments waiting to be built
- `READY` - Successfully deployed and available
- `CANCELED` - Deployments that were canceled before completion

### environment

Use the `--environment` option to list the deployments for a specific environment. This could be production, preview, or a [custom environment](/docs/deployments/environments#custom-environments).

```bash filename="terminal"
vercel list my-app --environment=staging
```

### Next

The `--next` option enables pagination when listing deployments. Pass the timestamp (in milliseconds since the UNIX epoch) from a previous response to get the next page of results.

```bash filename="terminal"
vercel list --next 1584722256178
```

*Using the vercel list command with the
\--next option for pagination.*

### Prod

The `--prod` option filters the list to show only production deployments.

```bash filename="terminal"
vercel list --prod
```

*Using the vercel list command with the
\--prod option to show only production deployments.*

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

title: "vercel login"
description: "Learn how to login into your Vercel account using the vercel login CLI command."
last\_updated: "2026-03-08T05:03:12.251Z"
source: "https://vercel.com/docs/cli/login"

# vercel login

The `vercel login` command allows you to login to your Vercel account through Vercel CLI.

## Usage

```bash filename="terminal"
vercel login
```

*Using the vercel login command to login to a Vercel
account.*

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

## Related guides

- [Why is Vercel CLI asking me to log in?](/kb/guide/why-is-vercel-cli-asking-me-to-log-in)

title: "vercel logout"
description: "Learn how to logout from your Vercel account using the vercel logout CLI command."
last\_updated: "2026-03-08T05:03:12.255Z"
source: "https://vercel.com/docs/cli/logout"

# vercel logout

The `vercel logout` command allows you to logout of your Vercel account through Vercel CLI.

## Usage

```bash filename="terminal"
vercel logout
```

*Using the vercel logout command to logout of a Vercel
account.*

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

title: "vercel logs"
description: "View and filter request logs for your Vercel project, or stream live runtime logs from a deployment."
last\_updated: "2026-03-08T05:03:12.268Z"
source: "https://vercel.com/docs/cli/logs"
