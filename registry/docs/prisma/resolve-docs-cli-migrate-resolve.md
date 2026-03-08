# resolve (/docs/cli/migrate/resolve)

The `prisma migrate resolve` command allows you to solve migration history issues in production by marking a failed migration as already applied (supports baselining) or rolled back.

```
This command is not supported on [MongoDB](/orm/core-concepts/supported-databases/mongodb). Use [`db push`](/cli/db/push) instead.
```

Usage \[#usage]

```bash
prisma migrate resolve [options]
```

The datasource URL configuration is read from the Prisma config file (e.g., `prisma.config.ts`).

```
This command can only be used with a failed migration. Using it with a successful migration results in an error.
```

Use cases \[#use-cases]

- Recover from failed migrations
- Baseline databases when starting to use Prisma Migrate on existing databases
- Reconcile hotfixes done manually on databases with your migration history

Run `prisma migrate status` to identify if you need to use `resolve`.

Options \[#options]

| Option          | Description                                |
| --------------- | ------------------------------------------ |
| `-h`, `--help`  | Display help message                       |
| `--config`      | Custom path to your Prisma config file     |
| `--schema`      | Custom path to your Prisma schema          |
| `--applied`     | Record a specific migration as applied     |
| `--rolled-back` | Record a specific migration as rolled back |

You must specify either `--applied` or `--rolled-back`.

Examples \[#examples]

Mark a migration as applied \[#mark-a-migration-as-applied]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate resolve --applied 20201231000000_add_users_table
```



```bash
pnpm dlx prisma migrate resolve --applied 20201231000000_add_users_table
```



```bash
yarn dlx prisma migrate resolve --applied 20201231000000_add_users_table
```



```bash
bunx --bun prisma migrate resolve --applied 20201231000000_add_users_table
```
````

Mark a migration as rolled back \[#mark-a-migration-as-rolled-back]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate resolve --rolled-back 20201231000000_add_users_table
```



```bash
pnpm dlx prisma migrate resolve --rolled-back 20201231000000_add_users_table
```



```bash
yarn dlx prisma migrate resolve --rolled-back 20201231000000_add_users_table
```



```bash
bunx --bun prisma migrate resolve --rolled-back 20201231000000_add_users_table
```
````

Specify a schema path \[#specify-a-schema-path]

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate resolve --rolled-back 20201231000000_add_users_table --schema=./schema.prisma
```



```bash
pnpm dlx prisma migrate resolve --rolled-back 20201231000000_add_users_table --schema=./schema.prisma
```



```bash
yarn dlx prisma migrate resolve --rolled-back 20201231000000_add_users_table --schema=./schema.prisma
```



```bash
bunx --bun prisma migrate resolve --rolled-back 20201231000000_add_users_table --schema=./schema.prisma
```
````

See also \[#see-also]

- [Resolving migration history issues](https://pris.ly/d/migrate-resolve)
