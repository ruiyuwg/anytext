# environment (/docs/cli/console/environment)

The `prisma platform environment` command manages environments within Prisma Console projects.

Usage \[#usage]

```bash
prisma platform environment [action] [options] --early-access
```

Actions \[#actions]

| Action   | Description              |
| -------- | ------------------------ |
| `show`   | List all environments    |
| `create` | Create a new environment |
| `delete` | Delete an environment    |

Options \[#options]

| Option                | Description                                                      |
| --------------------- | ---------------------------------------------------------------- |
| `-h`, `--help`        | Display help message                                             |
| `-p`, `--project`     | The project ID (required for `show` and `create` commands)       |
| `-e`, `--environment` | The environment ID (required for `delete` command)               |
| `-n`, `--name`        | Display name for the environment (optional for `create` command) |

Examples \[#examples]

List environments \[#list-environments]

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

Create an environment \[#create-an-environment]

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

Delete an environment \[#delete-an-environment]

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
