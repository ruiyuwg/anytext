# platform (/docs/cli/console/platform)

The `prisma platform` command provides access to Prisma Console functionality for managing workspaces, projects, environments, and connection strings.

Usage \[#usage]

```bash
prisma platform [subcommand] [options] --early-access
```

Subcommands \[#subcommands]

| Subcommand    | Description                   |
| ------------- | ----------------------------- |
| `auth`        | Manage Console authentication |
| `workspace`   | Manage workspaces             |
| `project`     | Manage projects               |
| `environment` | Manage environments           |
| `apikey`      | Manage connection strings     |

Examples \[#examples]

Authenticate with Console \[#authenticate-with-console]

Log in to your Console account (opens a browser window for GitHub authentication):

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform auth login --early-access
```



```bash
pnpm dlx prisma platform auth login --early-access
```



```bash
yarn dlx prisma platform auth login --early-access
```



```bash
bunx --bun prisma platform auth login --early-access
```
````

Display information about the currently authenticated user:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform auth show --early-access
```



```bash
pnpm dlx prisma platform auth show --early-access
```



```bash
yarn dlx prisma platform auth show --early-access
```



```bash
bunx --bun prisma platform auth show --early-access
```
````

Log out of your Console account:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform auth logout --early-access
```



```bash
pnpm dlx prisma platform auth logout --early-access
```



```bash
yarn dlx prisma platform auth logout --early-access
```



```bash
bunx --bun prisma platform auth logout --early-access
```
````

Manage workspaces \[#manage-workspaces]

List all workspaces available to your account:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform workspace show --early-access
```



```bash
pnpm dlx prisma platform workspace show --early-access
```



```bash
yarn dlx prisma platform workspace show --early-access
```



```bash
bunx --bun prisma platform workspace show --early-access
```
````

Manage projects \[#manage-projects]

List all projects within a workspace:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform project show --workspace $WORKSPACE_ID --early-access
```



```bash
pnpm dlx prisma platform project show --workspace $WORKSPACE_ID --early-access
```



```bash
yarn dlx prisma platform project show --workspace $WORKSPACE_ID --early-access
```



```bash
bunx --bun prisma platform project show --workspace $WORKSPACE_ID --early-access
```
````

Create a new project within a workspace:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access
```



```bash
pnpm dlx prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access
```



```bash
yarn dlx prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access
```



```bash
bunx --bun prisma platform project create --workspace $WORKSPACE_ID --name "My Project" --early-access
```
````

Delete a project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform project delete --project $PROJECT_ID --early-access
```



```bash
pnpm dlx prisma platform project delete --project $PROJECT_ID --early-access
```



```bash
yarn dlx prisma platform project delete --project $PROJECT_ID --early-access
```



```bash
bunx --bun prisma platform project delete --project $PROJECT_ID --early-access
```
````

Manage environments \[#manage-environments]

List all environments within a project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform environment show --project $PROJECT_ID --early-access
```



```bash
pnpm dlx prisma platform environment show --project $PROJECT_ID --early-access
```



```bash
yarn dlx prisma platform environment show --project $PROJECT_ID --early-access
```



```bash
bunx --bun prisma platform environment show --project $PROJECT_ID --early-access
```
````

Create a new environment within a project:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform environment create --project $PROJECT_ID --name "production" --early-access
```



```bash
pnpm dlx prisma platform environment create --project $PROJECT_ID --name "production" --early-access
```



```bash
yarn dlx prisma platform environment create --project $PROJECT_ID --name "production" --early-access
```



```bash
bunx --bun prisma platform environment create --project $PROJECT_ID --name "production" --early-access
```
````

Delete an environment:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform environment delete --environment $ENVIRONMENT_ID --early-access
```



```bash
pnpm dlx prisma platform environment delete --environment $ENVIRONMENT_ID --early-access
```



```bash
yarn dlx prisma platform environment delete --environment $ENVIRONMENT_ID --early-access
```



```bash
bunx --bun prisma platform environment delete --environment $ENVIRONMENT_ID --early-access
```
````

Manage connection strings \[#manage-connection-strings]

List all connection strings for an environment:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform apikey show --environment $ENVIRONMENT_ID --early-access
```



```bash
pnpm dlx prisma platform apikey show --environment $ENVIRONMENT_ID --early-access
```



```bash
yarn dlx prisma platform apikey show --environment $ENVIRONMENT_ID --early-access
```



```bash
bunx --bun prisma platform apikey show --environment $ENVIRONMENT_ID --early-access
```
````

Create a new connection string for an environment:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```



```bash
pnpm dlx prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```



```bash
yarn dlx prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```



```bash
bunx --bun prisma platform apikey create --environment $ENVIRONMENT_ID --name "production-key" --early-access
```
````

Delete a connection string:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma platform apikey delete --apikey $API_KEY_ID --early-access
```



```bash
pnpm dlx prisma platform apikey delete --apikey $API_KEY_ID --early-access
```



```bash
yarn dlx prisma platform apikey delete --apikey $API_KEY_ID --early-access
```



```bash
bunx --bun prisma platform apikey delete --apikey $API_KEY_ID --early-access
```
````

Options \[#options]

Authentication commands \[#authentication-commands]

| Option         | Description          |
| -------------- | -------------------- |
| `-h`, `--help` | Display help message |

Workspace commands \[#workspace-commands]

| Option         | Description          |
| -------------- | -------------------- |
| `-h`, `--help` | Display help message |

Project commands \[#project-commands]

| Option              | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `-h`, `--help`      | Display help message                                         |
| `-w`, `--workspace` | The workspace ID (required for `show` and `create` commands) |
| `-p`, `--project`   | The project ID (required for `delete` command)               |
| `-n`, `--name`      | Display name for the project (optional for `create` command) |

Environment commands \[#environment-commands]

| Option                | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| `-h`, `--help`        | Display help message                                             |
| `-p`, `--project`     | The project ID (required for `show` and `create` commands)       |
| `-e`, `--environment` | The environment ID (required for `delete` command)               |
| `-n`, `--name`        | Display name for the environment (optional for `create` command) |

Connection string commands \[#connection-string-commands]

| Option                | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| `-h`, `--help`        | Display help message                                                   |
| `-e`, `--environment` | The environment ID (required for `show` and `create` commands)         |
| `-a`, `--apikey`      | The connection string ID (required for `delete` command)               |
| `-n`, `--name`        | Display name for the connection string (optional for `create` command) |

Global options \[#global-options]

| Option           | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `--early-access` | Enable early access Console features (required for all commands) |
