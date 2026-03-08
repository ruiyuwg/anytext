# dev (/docs/cli/migrate/dev)

The `prisma migrate dev` command creates and applies migrations during development. It requires a [shadow database](/orm/prisma-migrate/understanding-prisma-migrate/shadow-database).

**For use in development environments only.**

```
This command is not supported on [MongoDB](/orm/core-concepts/supported-databases/mongodb). Use [`db push`](/cli/db/push) instead.
```

Usage \[#usage]

```bash
prisma migrate dev [options]
```

The datasource URL configuration is read from the Prisma config file (e.g., `prisma.config.ts`).

How it works \[#how-it-works]

1. Reruns the existing migration history in the shadow database to detect schema drift
2. Applies pending migrations to the shadow database
3. Generates a new migration from any changes you made to the Prisma schema
4. Applies all unapplied migrations to the development database and updates the `_prisma_migrations` table

   **Prisma v7**: `migrate dev` no longer automatically triggers `prisma generate` or seed scripts. Run them explicitly if needed.

Options \[#options]

| Option          | Description                                             |
| --------------- | ------------------------------------------------------- |
| `-h`, `--help`  | Display help message                                    |
| `--config`      | Custom path to your Prisma config file                  |
| `--schema`      | Custom path to your Prisma schema                       |
| `--url`         | Override the datasource URL from the Prisma config file |
| `-n`, `--name`  | Name the migration                                      |
| `--create-only` | Create a new migration but do not apply it              |

```
If a [schema drift](/orm/prisma-migrate/understanding-prisma-migrate/shadow-database#detecting-schema-drift) is detected while running with `--create-only`, you will be prompted to reset your database.
```

Examples \[#examples]

Create and apply migrations \[#create-and-apply-migrations]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev
```



```bash
pnpm dlx prisma migrate dev
```



```bash
yarn dlx prisma migrate dev
```



```bash
bunx --bun prisma migrate dev
```
````

Name the migration \[#name-the-migration]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --name added_job_title
```



```bash
pnpm dlx prisma migrate dev --name added_job_title
```



```bash
yarn dlx prisma migrate dev --name added_job_title
```



```bash
bunx --bun prisma migrate dev --name added_job_title
```
````

Create migration without applying \[#create-migration-without-applying]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --create-only
```



```bash
pnpm dlx prisma migrate dev --create-only
```



```bash
yarn dlx prisma migrate dev --create-only
```



```bash
bunx --bun prisma migrate dev --create-only
```
````

This creates the migration file but doesn't apply it. Run `prisma migrate dev` again to apply.

Specify a schema path \[#specify-a-schema-path]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --schema=./alternative/schema.prisma
```



```bash
pnpm dlx prisma migrate dev --schema=./alternative/schema.prisma
```



```bash
yarn dlx prisma migrate dev --schema=./alternative/schema.prisma
```



```bash
bunx --bun prisma migrate dev --schema=./alternative/schema.prisma
```
````

See also \[#see-also]

- [Conceptual overview of Prisma Migrate](/orm/prisma-migrate)
- [Developing with Prisma Migrate](/orm/prisma-migrate)
