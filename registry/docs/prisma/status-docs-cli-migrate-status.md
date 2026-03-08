# status (/docs/cli/migrate/status)

The `prisma migrate status` command checks the migrations in `./prisma/migrations/*` and the entries in the `_prisma_migrations` table to report the state of your migrations.

```
This command is not supported on [MongoDB](/orm/core-concepts/supported-databases/mongodb). Use [`db push`](/cli/db/push) instead.
```

Usage \[#usage]

```bash
prisma migrate status [options]
```

The datasource URL configuration is read from the Prisma config file (e.g., `prisma.config.ts`).

Options \[#options]

| Option         | Description                            |
| -------------- | -------------------------------------- |
| `-h`, `--help` | Display help message                   |
| `--config`     | Custom path to your Prisma config file |
| `--schema`     | Custom path to your Prisma schema      |

Exit codes \[#exit-codes]

In versions 4.3.0 and later, `prisma migrate status` exits with code 1 when:

- A database connection error occurs
- Migration files haven't been applied to the database
- Migration history has diverged from the database state
- No migration table is found
- Failed migrations are found

Example output \[#example-output]

```text
Status
3 migrations found in prisma/migrations

Your local migration history and the migrations table from your database are different:

The last common migration is: 20201127134938_new_migration

The migration have not yet been applied:
20201208100950_test_migration

The migrations from the database are not found locally in prisma/migrations:
20201208100950_new_migration
```

Examples \[#examples]

Check migration status \[#check-migration-status]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate status
```



```bash
pnpm dlx prisma migrate status
```



```bash
yarn dlx prisma migrate status
```



```bash
bunx --bun prisma migrate status
```
````

Specify a schema path \[#specify-a-schema-path]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate status --schema=./alternative/schema.prisma
```



```bash
pnpm dlx prisma migrate status --schema=./alternative/schema.prisma
```



```bash
yarn dlx prisma migrate status --schema=./alternative/schema.prisma
```



```bash
bunx --bun prisma migrate status --schema=./alternative/schema.prisma
```
````
