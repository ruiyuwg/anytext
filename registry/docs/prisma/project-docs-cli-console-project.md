# project (/docs/cli/console/project)

The `prisma platform project` command manages projects within Prisma Console workspaces.

Usage \[#usage]

```bash
prisma platform project [action] [options] --early-access
```

Actions \[#actions]

| Action   | Description          |
| -------- | -------------------- |
| `show`   | List all projects    |
| `create` | Create a new project |
| `delete` | Delete a project     |

Options \[#options]

| Option              | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `-h`, `--help`      | Display help message                                         |
| `-w`, `--workspace` | The workspace ID (required for `show` and `create` commands) |
| `-p`, `--project`   | The project ID (required for `delete` command)               |
| `-n`, `--name`      | Display name for the project (optional for `create` command) |

Examples \[#examples]

List projects \[#list-projects]

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

Create a project \[#create-a-project]

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

Delete a project \[#delete-a-project]

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

# workspace (/docs/cli/console/workspace)

The `prisma platform workspace` command manages workspaces in Prisma Console.

Usage \[#usage]

```bash
prisma platform workspace [action] [options] --early-access
```

Actions \[#actions]

| Action | Description         |
| ------ | ------------------- |
| `show` | List all workspaces |

Options \[#options]

| Option         | Description          |
| -------------- | -------------------- |
| `-h`, `--help` | Display help message |

Examples \[#examples]

List workspaces \[#list-workspaces]

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
