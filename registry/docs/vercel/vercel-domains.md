# vercel domains

The `vercel domains` command is used to manage domains under the current scope, providing functionality to list, inspect, add, remove, purchase, move, transfer-in, and verify domains.

> **💡 Note:** You can manage domains with further options and greater control under a Vercel
> Project's Domains section in the sidebar from the Vercel Dashboard.

## Usage

```bash filename="terminal"
vercel domains ls
```

*Using the vercel domains command to list all domains
under the current scope.*

## Extended Usage

```bash filename="terminal"
vercel domains inspect [domain]
```

*Using the vercel domains command to retrieve
information about a specific domain.*

```bash filename="terminal"
vercel domains add [domain] [project]
```

*Using the vercel domains command to add a domain to
the current scope or a Vercel Project.*

```bash filename="terminal"
vercel domains rm [domain]
```

*Using the vercel domains command to remove a domain
from the current scope.*

```bash filename="terminal"
vercel domains buy [domain]
```

*Using the vercel domains command to buy a domain for
the current scope.*

```bash filename="terminal"
vercel domains move [domain] [scope-name]
```

*Using the vercel domains command to move a domain to
another scope.*

```bash filename="terminal"
vercel domains transfer-in [domain]
```

*Using the vercel domains command to transfer in a
domain to the current scope.*

## Unique Options

These are options that only apply to the `vercel domains` command.

### Yes

The `--yes` option can be used to bypass the confirmation prompt when removing a domain.

```bash filename="terminal"
vercel domains rm [domain] --yes
```

*Using the vercel domains rm command with the
\--yes option.*

### Limit

The `--limit` option can be used to specify the maximum number of domains returned when using `ls`. The default value is `20` and the maximum is `100`.

```bash filename="terminal"
vercel domains ls --limit 100
```

*Using the vercel domains ls command with the
\--limit option.*

### Next

The `--next` option enables pagination when listing domains. Pass the timestamp (in milliseconds since the UNIX epoch) from a previous response to get the next page of results.

```bash filename="terminal"
vercel domains ls --next 1584722256178
```

*Using the vercel domains ls command with the
\--next option for pagination.*

### Force

The `--force` option forces a domain on a project, removing it from an existing one.

```bash filename="terminal"
vercel domains add my-domain.com my-project --force
```

*Using the vercel domains add command with the
\--force option.*

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

title: "vercel env"
description: "Learn how to manage your environment variables in your Vercel Projects using the vercel env CLI command."
last\_updated: "2026-03-08T05:03:12.146Z"
source: "https://vercel.com/docs/cli/env"
