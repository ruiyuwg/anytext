# vercel integration-resource

The `vercel integration-resource` command (alias: `vercel ir`) manages individual resources provisioned from [marketplace integrations](/docs/integrations). Use it to remove resources, disconnect them from projects, and configure auto-recharge thresholds.

It supports the following subcommands:

- [`remove`](#vercel-integration-resource-remove): Delete a resource
- [`disconnect`](#vercel-integration-resource-disconnect): Disconnect a resource from a project
- [`create-threshold`](#vercel-integration-resource-create-threshold): Set up auto-recharge for prepaid resources

## vercel integration-resource remove

This command deletes an integration resource permanently.

Alias: `vercel ir rm`

```bash filename="terminal"
vercel integration-resource remove <resource-name>
```

*Delete an integration resource.*

If the resource has connected projects, you must disconnect them first or use the `--disconnect-all` flag.

### Options

| Option             | Shorthand | Description                                                |
| ------------------ | --------- | ---------------------------------------------------------- |
| `--disconnect-all` | `-a`      | Disconnect all projects from the resource before deletion. |
| `--yes`            | `-y`      | Skip the confirmation prompt.                              |
| `--format`         | `-F`      | Output format. Use `json` for machine-readable output.     |

> **💡 Note:** Non-interactive environments and JSON output mode require the `--yes` flag.

### Examples

```bash filename="terminal"
# Remove a resource
vercel integration-resource remove my-database

# Remove with the short alias
vercel ir rm my-cache

# Disconnect all projects and remove in one step
vercel ir remove my-database --disconnect-all

# Remove without confirmation
vercel ir rm my-cache --disconnect-all --yes

# Output as JSON
vercel ir rm my-cache -a -y --format=json
```

## vercel integration-resource disconnect

This command disconnects a resource from a project. If you don't specify a project, the command disconnects from the currently linked project.

```bash filename="terminal"
vercel integration-resource disconnect <resource-name> [project-name]
```

*Disconnect a resource from a project.*

### Arguments

| Argument        | Required | Description                                                     |
| --------------- | -------- | --------------------------------------------------------------- |
| `resource-name` | Yes      | Name of the resource to disconnect.                             |
| `project-name`  | No       | Project to disconnect from. Uses the linked project if omitted. |

### Options

| Option     | Shorthand | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `--all`    | `-a`      | Disconnect all projects from the resource.             |
| `--yes`    | `-y`      | Skip the confirmation prompt.                          |
| `--format` | `-F`      | Output format. Use `json` for machine-readable output. |

> **💡 Note:** Non-interactive environments and JSON output mode require the `--yes` flag.

### Examples

```bash filename="terminal"
# Disconnect from the currently linked project
vercel integration-resource disconnect my-database

# Using the short alias
vercel ir disconnect my-redis-cache

# Disconnect from a specific project
vercel ir disconnect my-database my-project

# Disconnect all projects from the resource
vercel ir disconnect my-database --all

# Disconnect all without confirmation
vercel ir disconnect my-database -a -y

# Output as JSON
vercel ir disconnect my-database -a -y --format=json
```

## vercel integration-resource create-threshold

Sets up an auto-recharge threshold for a prepaid resource. When the resource's balance drops below the minimum, it automatically purchases additional credit.

If the resource uses installation-level billing, the threshold applies to all resources under that installation.

```bash filename="terminal"
vercel integration-resource create-threshold <resource-name> <minimum> <spend> <limit>
```

*Configure auto-recharge for a prepaid resource.*

### Arguments

| Argument        | Required | Description                                                                                              |
| --------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `resource-name` | Yes      | Name of the resource to configure.                                                                       |
| `minimum`       | Yes      | Dollar amount that triggers a recharge (e.g., `50` for $50.00). Decimals supported (e.g., `5.75`).       |
| `spend`         | Yes      | Dollar amount to purchase when the threshold is triggered (e.g., `100` for $100.00). Decimals supported. |
| `limit`         | Yes      | Maximum spend per billing period in dollars (e.g., `2000` for $2,000.00). Decimals supported.            |

### Options

| Option  | Shorthand | Description                   |
| ------- | --------- | ----------------------------- |
| `--yes` | `-y`      | Skip the confirmation prompt. |

> **💡 Note:** Non-interactive environments require the `--yes` flag.

### Validation rules

- All amounts must be non-negative numbers.
- `minimum` must be less than or equal to `spend`.
- `minimum` must be less than or equal to `limit`.
- `limit` must be greater than or equal to `spend`.
- The `spend` amount must fall within the billing plan's allowed range.

### Examples

```bash filename="terminal"
# Set up auto-recharge: top up $100 when balance drops below $50, max $2000/period
vercel ir create-threshold my-database 50 100 2000

# Skip confirmation
vercel ir create-threshold my-database 50 100 2000 --yes
```

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

title: "vercel link"
description: "Learn how to link a local directory to a Vercel Project using the vercel link CLI command."
last\_updated: "2026-03-08T05:03:12.229Z"
source: "https://vercel.com/docs/cli/link"
