# vercel integration

The `vercel integration` command manages [marketplace integrations](/docs/integrations). Use it to provision resources, browse available integrations, view setup guides, check billing balances, and more.

It supports the following subcommands:

- [`add`](#vercel-integration-add): Provision a new resource from a marketplace integration
- [`list`](#vercel-integration-list): List installed resources
- [`discover`](#vercel-integration-discover): Browse available marketplace integrations
- [`guide`](#vercel-integration-guide): View getting started guides and code snippets
- [`balance`](#vercel-integration-balance): Check balances and thresholds
- [`open`](#vercel-integration-open): Open a provider's dashboard via SSO
- [`remove`](#vercel-integration-remove): Uninstall an integration

For the `<integration-name>` in commands below, use the integration's [URL slug](/docs/integrations/create-integration/submit-integration#url-slug). You can find the slug in the Marketplace URL. For example, for `https://vercel.com/marketplace/neon`, the slug is `neon`. You can also browse available integrations with the [`integration discover`](/docs/cli/integration#vercel-integration-discover) command.

## vercel integration add

This command provisions a new resource from a marketplace integration. If the integration isn't installed on your team yet, it installs it first.

Also available as `vercel install` (alias: `vercel i`).

In a terminal, this command prompts for choices like billing plan and metadata. You can provide options as flags to reduce prompts. In non-interactive environments (CI pipelines, scripted usage), provide required options via flags. The command detects non-interactive terminals and skips interactive prompts.

```bash filename="terminal"
vercel integration add <integration-name>
```

*Provision a new resource from a marketplace integration.*

You can target a specific product from a multi-product integration using the slash syntax:

```bash filename="terminal"
vercel integration add <integration>/<product>
```

*Provision a specific product from a multi-product integration.*

> **💡 Note:** Run `vercel integration add <integration-name> --help` to see available
> products, metadata options, and billing plans an integration offers.

### Options

| Option              | Shorthand | Description                                                                                                                                                                                                                                                   |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--name`            | `-n`      | Custom name for the resource. Auto-generated if not provided.                                                                                                                                                                                                 |
| `--metadata`        | `-m`      | Metadata as `KEY=VALUE`. Can be repeated for multiple keys.                                                                                                                                                                                                   |
| `--plan`            | `-p`      | Billing plan ID to use for the resource.                                                                                                                                                                                                                      |
| `--environment`     | `-e`      | Environments to connect: `production`, `preview`, `development`. Can be repeated. Defaults to all three.                                                                                                                                                      |
| `--prefix`          |           | Prefix for environment variable names. The prefix is used as-is, so include a trailing underscore if you want a separator (e.g., `--prefix NEON2_` creates `NEON2_DATABASE_URL`). Must start with a letter and contain only letters, digits, and underscores. |
| `--format`          | `-F`      | Output format. Use `json` for machine-readable output.                                                                                                                                                                                                        |
| `--no-connect`      |           | Skip connecting the resource to the current project. Also skips env pull.                                                                                                                                                                                     |
| `--no-env-pull`     |           | Skip running `vercel env pull` after provisioning.                                                                                                                                                                                                            |
| `--installation-id` |           | Installation ID to use when multiple installations exist for the same integration.                                                                                                                                                                            |

### Post-provisioning behavior

After provisioning a resource, the command:

1. Prints a link to the resource in the Vercel dashboard
2. Connects the resource to the currently linked project (unless `--no-connect` is set)
3. Runs `vercel env pull` to sync environment variables (unless `--no-env-pull` or `--no-connect` is set)

### Examples

```bash filename="terminal"
# Provision a resource interactively
vercel integration add neon

# Target a specific product from a multi-product integration
vercel integration add acme/acme-redis

# Provision with a custom resource name
vercel integration add neon --name my-database

# Provision with metadata options
vercel integration add neon --metadata region=us-east-1
vercel integration add neon -m region=us-east-1 -m version=16

# Provision with a specific billing plan
vercel integration add neon --plan pro

# Connect to specific environments only
vercel integration add neon --environment production
vercel integration add neon -e production -e preview

# Provision without connecting to the current project
vercel integration add neon --no-connect

# Provision without pulling environment variables
vercel integration add neon --no-env-pull

# Use a prefix for environment variable names
vercel integration add neon --prefix NEON2_

# Show available products and metadata keys
vercel integration add neon --help
```

## vercel integration list

This command lists installed resources with their associated integrations. By default, shows resources for the currently linked project.

Alias: `vercel integration ls`

```bash filename="terminal"
vercel integration list [project-name]
```

*List integration resources for the current project.*

The output includes the name, status, product, integration, and connected projects for each resource.

### Arguments

| Argument       | Required | Description                                                                 |
| -------------- | -------- | --------------------------------------------------------------------------- |
| `project-name` | No       | Filter resources to a specific project. Uses the linked project if omitted. |

### Options

| Option          | Shorthand | Description                                                                     |
| --------------- | --------- | ------------------------------------------------------------------------------- |
| `--integration` | `-i`      | Filter resources to a specific integration.                                     |
| `--all`         | `-a`      | List all resources regardless of project. Cannot be used with `[project-name]`. |
| `--format`      | `-F`      | Output format. Use `json` for machine-readable output.                          |

### Examples

```bash filename="terminal"
# List resources for the current project
vercel integration list

# Filter to a specific integration
vercel integration list --integration neon
vercel integration list -i upstash

# List all resources across the team
vercel integration list --all

# Output as JSON
vercel integration list --format=json
```

## vercel integration discover

This command lists available marketplace integrations and their products. Use this to find integrations you can install.

```bash filename="terminal"
vercel integration discover
```

*Browse available marketplace integrations.*

For multi-product integrations, each product appears separately with a compound slug (e.g., `aws/aws-dynamodb`). Single-product integrations where the product slug matches the integration slug show only the integration slug.

### Options

| Option     | Shorthand | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `--format` | `-F`      | Output format. Use `json` for machine-readable output. |

### Examples

```bash filename="terminal"
# Browse available integrations
vercel integration discover

# Output as JSON
vercel integration discover --format=json
```

## vercel integration guide

This command shows getting started guides and code snippets for using a marketplace integration in your project.

```bash filename="terminal"
vercel integration guide <integration-name>
```

*View setup guides for a marketplace integration.*

You can also target a specific product from a multi-product integration:

```bash filename="terminal"
vercel integration guide <integration>/<product>
```

### Options

| Option        | Shorthand | Description                                                                                         |
| ------------- | --------- | --------------------------------------------------------------------------------------------------- |
| `--framework` | `-f`      | Select a framework guide without prompts (e.g., `nextjs`, `remix`, `astro`, `nuxtjs`, `sveltekit`). |

### Examples

```bash filename="terminal"
# View guides for an integration
vercel integration guide neon

# View guides for a specific product
vercel integration guide aws/aws-dynamodb

# View the Next.js guide without prompts
vercel integration guide neon --framework nextjs
```

## vercel integration balance

This command shows the balances and thresholds for a marketplace integration, including prepayment details.

```bash filename="terminal"
vercel integration balance <integration-name>
```

*View billing balances and auto-recharge thresholds for a marketplace
integration.*

> **💡 Note:** This command only applies to integrations that support prepayment billing
> plans.

### Options

| Option     | Shorthand | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `--format` | `-F`      | Output format. Use `json` for machine-readable output. |

### Examples

```bash filename="terminal"
# View balances for an integration
vercel integration balance neon

# Output as JSON
vercel integration balance neon --format=json
```

## vercel integration open

This command opens the provider's dashboard for an integration or a specific resource via SSO.

```bash filename="terminal"
vercel integration open <integration-name> [resource-name]
```

*Open the provider's dashboard via single sign-on.*

When called without a resource name, it opens the integration's dashboard. When called with a resource name, it opens the dashboard for that specific resource.

### Options

| Option     | Shorthand | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `--format` | `-F`      | Output format. Use `json` to get the SSO link as JSON. |

### Examples

```bash filename="terminal"
# Open the integration's dashboard
vercel integration open neon

# Open a specific resource's dashboard
vercel integration open neon my-neon-database

# Get the SSO link as JSON (useful in scripts)
vercel integration open neon --format=json
```

## vercel integration remove

Uninstalls a marketplace integration from your team. You must [remove all resources](/docs/cli/integration-resource#vercel-integration-resource-remove) from the integration before running this command.

```bash filename="terminal"
vercel integration remove <integration-name>
```

*Uninstall a marketplace integration.*

### Options

| Option     | Shorthand | Description                                            |
| ---------- | --------- | ------------------------------------------------------ |
| `--yes`    | `-y`      | Skip the confirmation prompt.                          |
| `--format` | `-F`      | Output format. Use `json` for machine-readable output. |

> **💡 Note:** Non-interactive environments and JSON output mode require the `--yes` flag.

### Examples

```bash filename="terminal"
# Uninstall an integration
vercel integration remove neon

# Uninstall without confirmation
vercel integration remove neon --yes

# Output as JSON
vercel integration remove neon --format=json --yes
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

title: "vercel integration-resource"
description: "Learn how to manage marketplace native integration resources using the vercel integration-resource CLI command."
last\_updated: "2026-03-08T05:03:12.249Z"
source: "https://vercel.com/docs/cli/integration-resource"
