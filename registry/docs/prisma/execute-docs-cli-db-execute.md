# execute (/docs/cli/db/execute)

The `prisma db execute` command applies a SQL script to the database without interacting with the Prisma migrations table.

```
This command is currently not supported on [MongoDB](/orm/core-concepts/supported-databases/mongodb).
```

Usage \[#usage]

```bash
prisma db execute [options]
```

The datasource URL configuration is read from the Prisma config file (e.g., `prisma.config.ts`).

The script input must be provided using either `--file` or `--stdin`. The whole script is sent as a single command to the database.

The output is connector-specific and reports success or failure only—it's not meant for returning data.

Prerequisites \[#prerequisites]

Configure your database connection in `prisma.config.ts`:

```prisma file=schema.prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "sqlite"
}
```

```typescript file=prisma.config.ts
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

Options \[#options]

| Option         | Description                                     |
| -------------- | ----------------------------------------------- |
| `-h`, `--help` | Display help message                            |
| `--config`     | Custom path to your Prisma config file          |
| `--file`       | Path to a file containing the script to execute |

Flags \[#flags]

| Flag      | Description                                          |
| --------- | ---------------------------------------------------- |
| `--stdin` | Use terminal standard input as the script to execute |

Either `--file` or `--stdin` is required.

```
**Prisma v7 breaking change**: The `--schema` and `--url` options have been removed. Configure your database connection in `prisma.config.ts` instead.
```

Examples \[#examples]

Execute a SQL file \[#execute-a-sql-file]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db execute --file ./script.sql
```



```bash
pnpm dlx prisma db execute --file ./script.sql
```



```bash
yarn dlx prisma db execute --file ./script.sql
```



```bash
bunx --bun prisma db execute --file ./script.sql
```
````

Execute SQL from stdin \[#execute-sql-from-stdin]

```bash
echo 'TRUNCATE TABLE dev;' | prisma db execute --stdin
```

See also \[#see-also]

- [Migration troubleshooting in production](/orm/prisma-migrate/workflows/patching-and-hotfixing#fixing-failed-migrations-with-migrate-diff-and-db-execute)

# db (/docs/cli/db)

The `prisma db` command group provides tools to manage your database schema and lifecycle during development.

Usage \[#usage]

```bash
prisma db [command] [options]
```

Global options \[#global-options]

| Option         | Description                            |
| -------------- | -------------------------------------- |
| `-h`, `--help` | Display help message                   |
| `--config`     | Custom path to your Prisma config file |
| `--schema`     | Custom path to your Prisma schema      |

Subcommands \[#subcommands]

| Command                                | Description                                                               |
| -------------------------------------- | ------------------------------------------------------------------------- |
| [`prisma db pull`](/cli/db/pull)       | Pull the state from the database to the Prisma schema using introspection |
| [`prisma db push`](/cli/db/push)       | Push the state from Prisma schema to the database during prototyping      |
| [`prisma db seed`](/cli/db/seed)       | Seed your database                                                        |
| [`prisma db execute`](/cli/db/execute) | Execute native commands to your database                                  |

Examples \[#examples]

```bash
# Pull schema from database
prisma db pull

# Push schema to database
prisma db push

# Seed the database
prisma db seed

# Execute a SQL script
prisma db execute --file ./script.sql
```
