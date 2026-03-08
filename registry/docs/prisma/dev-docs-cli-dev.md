# dev (/docs/cli/dev)

The `prisma dev` command starts a [local Prisma Postgres](/postgres/database/local-development) database that you can run Prisma ORM commands against. It's useful for development and testing and allows easy migration to [Prisma Postgres](/postgres) in production.

Usage \[#usage]

```bash
prisma dev [options]
```

Options \[#options]

| Option             | Description                                               | Default   |
| ------------------ | --------------------------------------------------------- | --------- |
| `-n`, `--name`     | Name of the server (helps isolate state between projects) | `default` |
| `-p`, `--port`     | Main port number the Prisma Dev server will listen on     | `51213`   |
| `-P`, `--db-port`  | Port number the database server will listen on            | `51214`   |
| `--shadow-db-port` | Port number the shadow database server will listen on     | `51215`   |
| `-d`, `--detach`   | Run the server in the background                          | `false`   |
| `--debug`          | Enable debug logging                                      | `false`   |

Subcommands \[#subcommands]

| Command                              | Description                       |
| ------------------------------------ | --------------------------------- |
| [`prisma dev ls`](/cli/dev/ls)       | List available servers            |
| [`prisma dev rm`](/cli/dev/rm)       | Remove servers                    |
| [`prisma dev start`](/cli/dev/start) | Start one or more stopped servers |
| [`prisma dev stop`](/cli/dev/stop)   | Stop servers                      |

Examples \[#examples]

Start a local Prisma Postgres server \[#start-a-local-prisma-postgres-server]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev
```



```bash
pnpm dlx prisma dev
```



```bash
yarn dlx prisma dev
```



```bash
bunx --bun prisma dev
```
````

Output:

```text
✔  Great Success!

   Your  prisma dev  server default is ready and listening on ports 63567-63569.

╭──────────────────────────────────╮
│[q]uit  [h]ttp url  [t]cp urls    │
╰──────────────────────────────────╯
```

Start with a specific name \[#start-with-a-specific-name]

Create a named instance for project isolation:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev --name="mydbname"
```



```bash
pnpm dlx prisma dev --name="mydbname"
```



```bash
yarn dlx prisma dev --name="mydbname"
```



```bash
bunx --bun prisma dev --name="mydbname"
```
````

Run in detached mode \[#run-in-detached-mode]

Run the server in the background:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev --detach
```



```bash
pnpm dlx prisma dev --detach
```



```bash
yarn dlx prisma dev --detach
```



```bash
bunx --bun prisma dev --detach
```
````

This frees up your terminal. Use `prisma dev ls` to see running servers and `prisma dev stop` to stop them.

Specify custom ports \[#specify-custom-ports]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev --port 5000 --db-port 5001 --shadow-db-port 5002
```



```bash
pnpm dlx prisma dev --port 5000 --db-port 5001 --shadow-db-port 5002
```



```bash
yarn dlx prisma dev --port 5000 --db-port 5001 --shadow-db-port 5002
```



```bash
bunx --bun prisma dev --port 5000 --db-port 5001 --shadow-db-port 5002
```
````

# ls (/docs/cli/dev/ls)

The `prisma dev ls` command lists all available [local Prisma Postgres](/postgres/database/local-development) instances on your system.

Usage \[#usage]

```bash
prisma dev ls [options]
```

Options \[#options]

| Option    | Description          | Default |
| --------- | -------------------- | ------- |
| `--debug` | Enable debug logging | `false` |

Examples \[#examples]

List all servers \[#list-all-servers]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev ls
```



```bash
pnpm dlx prisma dev ls
```



```bash
yarn dlx prisma dev ls
```



```bash
bunx --bun prisma dev ls
```
````

This shows all instances on your system with their current status and configuration.

# rm (/docs/cli/dev/rm)

The `prisma dev rm` command removes the data of one or more [local Prisma Postgres](/postgres/database/local-development) databases from your file system.

Usage \[#usage]

```bash
prisma dev rm [options] <name>
```

Arguments \[#arguments]

| Argument | Description                                           |
| -------- | ----------------------------------------------------- |
| `<name>` | Name(s) or glob pattern(s) of the server(s) to remove |

Options \[#options]

| Option    | Description                                   | Default |
| --------- | --------------------------------------------- | ------- |
| `--debug` | Enable debug logging                          | `false` |
| `--force` | Stop any running servers before removing them | `false` |

Without `--force`, the command fails if any server is running.

Examples \[#examples]

Remove a specific database \[#remove-a-specific-database]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm mydb
```



```bash
pnpm dlx prisma dev rm mydb
```



```bash
yarn dlx prisma dev rm mydb
```



```bash
bunx --bun prisma dev rm mydb
```
````

Remove multiple databases with a pattern \[#remove-multiple-databases-with-a-pattern]

Remove all databases starting with `mydb`:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm mydb*
```



```bash
pnpm dlx prisma dev rm mydb*
```



```bash
yarn dlx prisma dev rm mydb*
```



```bash
bunx --bun prisma dev rm mydb*
```
````

Force remove a running database \[#force-remove-a-running-database]

Stop and remove a database in one command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev rm --force mydb
```



```bash
pnpm dlx prisma dev rm --force mydb
```



```bash
yarn dlx prisma dev rm --force mydb
```



```bash
bunx --bun prisma dev rm --force mydb
```





The `rm` command is interactive and includes safety prompts to prevent accidental data loss.
````

# start (/docs/cli/dev/start)

The `prisma dev start` command starts existing [local Prisma Postgres](/postgres/database/local-development) instances in the background.

Usage \[#usage]

```bash
prisma dev start [options] <name>
```

Arguments \[#arguments]

| Argument | Description                                          |
| -------- | ---------------------------------------------------- |
| `<name>` | Name(s) or glob pattern(s) of the server(s) to start |

Options \[#options]

| Option    | Description          | Default |
| --------- | -------------------- | ------- |
| `--debug` | Enable debug logging | `false` |

```
This command only works with instances that already exist. Use `prisma dev` to create a new instance.
```

Examples \[#examples]

Start a specific database \[#start-a-specific-database]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev start mydb
```



```bash
pnpm dlx prisma dev start mydb
```



```bash
yarn dlx prisma dev start mydb
```



```bash
bunx --bun prisma dev start mydb
```
````

Start multiple databases with a pattern \[#start-multiple-databases-with-a-pattern]

Start all databases starting with `mydb`:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev start mydb*
```



```bash
pnpm dlx prisma dev start mydb*
```



```bash
yarn dlx prisma dev start mydb*
```



```bash
bunx --bun prisma dev start mydb*
```
````

# stop (/docs/cli/dev/stop)

The `prisma dev stop` command stops one or more [local Prisma Postgres](/postgres/database/local-development) databases.

Usage \[#usage]

```bash
prisma dev stop [options] <name>
```

Arguments \[#arguments]

| Argument | Description                                         |
| -------- | --------------------------------------------------- |
| `<name>` | Name(s) or glob pattern(s) of the server(s) to stop |

Options \[#options]

| Option    | Description          | Default |
| --------- | -------------------- | ------- |
| `--debug` | Enable debug logging | `false` |

Examples \[#examples]

Stop a specific database \[#stop-a-specific-database]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev stop mydb
```



```bash
pnpm dlx prisma dev stop mydb
```



```bash
yarn dlx prisma dev stop mydb
```



```bash
bunx --bun prisma dev stop mydb
```
````

Stop multiple databases with a pattern \[#stop-multiple-databases-with-a-pattern]

Stop all databases starting with `mydb`:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma dev stop mydb*
```



```bash
pnpm dlx prisma dev stop mydb*
```



```bash
yarn dlx prisma dev stop mydb*
```



```bash
bunx --bun prisma dev stop mydb*
```





The `stop` command is interactive and includes safety prompts to prevent accidental operations.
````

# deploy (/docs/cli/migrate/deploy)

The `prisma migrate deploy` command applies all pending migrations and creates the database if it doesn't exist. Primarily used in non-development environments.

```
This command is not supported on [MongoDB](/orm/core-concepts/supported-databases/mongodb). Use [`db push`](/cli/db/push) instead.
```

Usage \[#usage]

```bash
prisma migrate deploy [options]
```

The datasource URL configuration is read from the Prisma config file (e.g., `prisma.config.ts`).

Characteristics \[#characteristics]

- Does **not** look for drift in the database or changes in the Prisma schema
- Does **not** reset the database or generate artifacts
- Does **not** rely on a shadow database

Options \[#options]

| Option         | Description                            |
| -------------- | -------------------------------------- |
| `-h`, `--help` | Display help message                   |
| `--config`     | Custom path to your Prisma config file |
| `--schema`     | Custom path to your Prisma schema      |

Examples \[#examples]

Deploy pending migrations \[#deploy-pending-migrations]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate deploy
```



```bash
pnpm dlx prisma migrate deploy
```



```bash
yarn dlx prisma migrate deploy
```



```bash
bunx --bun prisma migrate deploy
```
````

Specify a schema path \[#specify-a-schema-path]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate deploy --schema=./alternative/schema.prisma
```



```bash
pnpm dlx prisma migrate deploy --schema=./alternative/schema.prisma
```



```bash
yarn dlx prisma migrate deploy --schema=./alternative/schema.prisma
```



```bash
bunx --bun prisma migrate deploy --schema=./alternative/schema.prisma
```
````
