# push (/docs/cli/db/push)

The `prisma db push` command pushes the state of your Prisma schema to the database without using migrations. It creates the database if it does not exist.

This command is a good choice when you don't need to version schema changes, such as during prototyping and local development.

Usage \[#usage]

```bash
prisma db push [options]
```

The datasource URL configuration is read from the Prisma config file (e.g., `prisma.config.ts`).

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

| Option               | Description                                             |
| -------------------- | ------------------------------------------------------- |
| `-h`, `--help`       | Display help message                                    |
| `--config`           | Custom path to your Prisma config file                  |
| `--schema`           | Custom path to your Prisma schema                       |
| `--url`              | Override the datasource URL from the Prisma config file |
| `--accept-data-loss` | Ignore data loss warnings                               |
| `--force-reset`      | Force a reset of the database before push               |

```
In Prisma v7, `db push` no longer runs `prisma generate` automatically. Run it explicitly if needed.
```

Examples \[#examples]

Push the schema to the database \[#push-the-schema-to-the-database]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db push
```



```bash
pnpm dlx prisma db push
```



```bash
yarn dlx prisma db push
```



```bash
bunx --bun prisma db push
```
````

Accept data loss \[#accept-data-loss]

Proceed even if the changes might result in data loss:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db push --accept-data-loss
```



```bash
pnpm dlx prisma db push --accept-data-loss
```



```bash
yarn dlx prisma db push --accept-data-loss
```



```bash
bunx --bun prisma db push --accept-data-loss
```
````

Specify a schema path \[#specify-a-schema-path]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db push --schema=/tmp/schema.prisma
```



```bash
pnpm dlx prisma db push --schema=/tmp/schema.prisma
```



```bash
yarn dlx prisma db push --schema=/tmp/schema.prisma
```



```bash
bunx --bun prisma db push --schema=/tmp/schema.prisma
```
````

Force reset before push \[#force-reset-before-push]

Reset the database before applying changes:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db push --force-reset
```



```bash
pnpm dlx prisma db push --force-reset
```



```bash
yarn dlx prisma db push --force-reset
```



```bash
bunx --bun prisma db push --force-reset
```
````

See also \[#see-also]

- [Conceptual overview of `db push` and when to use it over Prisma Migrate](/orm/prisma-migrate/workflows/prototyping-your-schema)
- [Schema prototyping with `db push`](/orm/prisma-migrate/workflows/prototyping-your-schema)

# seed (/docs/cli/db/seed)

The `prisma db seed` command seeds your database with initial data.

Usage \[#usage]

```bash
prisma db seed [options]
```

Options \[#options]

| Option         | Description                            |
| -------------- | -------------------------------------- |
| `-h`, `--help` | Display help message                   |
| `--config`     | Custom path to your Prisma config file |
| `--`           | Pass custom arguments to the seed file |

The `--` delimiter allows you to pass custom arguments to your seed script (available in version 4.15.0+).

Examples \[#examples]

Run the seed script \[#run-the-seed-script]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db seed
```



```bash
pnpm dlx prisma db seed
```



```bash
yarn dlx prisma db seed
```



```bash
bunx --bun prisma db seed
```
````

Pass custom arguments \[#pass-custom-arguments]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db seed -- --arg1 value1 --arg2 value2
```



```bash
pnpm dlx prisma db seed -- --arg1 value1 --arg2 value2
```



```bash
yarn dlx prisma db seed -- --arg1 value1 --arg2 value2
```



```bash
bunx --bun prisma db seed -- --arg1 value1 --arg2 value2
```
````

See also \[#see-also]

- [Seeding your database](/orm/prisma-migrate/workflows/seeding)
