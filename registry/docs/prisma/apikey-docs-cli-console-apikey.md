# apikey (/docs/cli/console/apikey)

The `prisma platform apikey` command manages connection strings for Prisma Console environments.

Usage \[#usage]

```bash
prisma platform apikey [action] [options] --early-access
```

Actions \[#actions]

| Action   | Description                    |
| -------- | ------------------------------ |
| `show`   | List all connection strings    |
| `create` | Create a new connection string |
| `delete` | Delete a connection string     |

Options \[#options]

| Option                | Description                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| `-h`, `--help`        | Display help message                                                   |
| `-e`, `--environment` | The environment ID (required for `show` and `create` commands)         |
| `-a`, `--apikey`      | The connection string ID (required for `delete` command)               |
| `-n`, `--name`        | Display name for the connection string (optional for `create` command) |

Examples \[#examples]

List connection strings \[#list-connection-strings]

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

Create a connection string \[#create-a-connection-string]

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

Delete a connection string \[#delete-a-connection-string]

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

# auth (/docs/cli/console/auth)

The `prisma platform auth` command manages authentication with Prisma Console.

Usage \[#usage]

```bash
prisma platform auth [action] [options] --early-access
```

Actions \[#actions]

| Action   | Description                     |
| -------- | ------------------------------- |
| `login`  | Log in to Console               |
| `show`   | Display authenticated user info |
| `logout` | Log out of Console              |

Options \[#options]

| Option         | Description          |
| -------------- | -------------------- |
| `-h`, `--help` | Display help message |

Examples \[#examples]

Log in to Console \[#log-in-to-console]

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

Display authenticated user \[#display-authenticated-user]

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

Log out \[#log-out]

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
