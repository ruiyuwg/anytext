# platform (/docs/cli/console)

The `prisma platform` command group provides tools to manage Prisma Console workspaces, projects, environments, and connection strings.

```
Legacy GraphQL API



These commands currently rely on a deprecated GraphQL API. They are being modernized to use the [Management API](/management-api) with improved authentication. Until the migration is complete, these commands remain in early access.
```

Usage \[#usage]

```bash
prisma platform [command] [options] --early-access
```

Global options \[#global-options]

| Option           | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `-h`, `--help`   | Display help message                                             |
| `--early-access` | Enable early access Console features (required for all commands) |

Subcommands \[#subcommands]

| Command                                                   | Description                   |
| --------------------------------------------------------- | ----------------------------- |
| [`prisma platform auth`](/cli/console/auth)               | Manage Console authentication |
| [`prisma platform workspace`](/cli/console/workspace)     | Manage workspaces             |
| [`prisma platform project`](/cli/console/project)         | Manage projects               |
| [`prisma platform environment`](/cli/console/environment) | Manage environments           |
| [`prisma platform apikey`](/cli/console/apikey)           | Manage connection strings     |

Examples \[#examples]

```bash
# Authenticate with Console
prisma platform auth login --early-access

# List workspaces
prisma platform workspace show --early-access

# Create a project
prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access

# Create an environment
prisma platform environment create --project $PROJECT_ID --name "production" --early-access

# Create a connection string
prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```

See also \[#see-also]

- [Console overview](/console)
- [Getting started with Console](/console/getting-started)
- [Management API](/management-api)
