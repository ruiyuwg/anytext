# Baselining a database (/docs/orm/prisma-migrate/workflows/baselining)

Baselining is the process of initializing a migration history for a database that:

- ✔ Existed before you started using Prisma Migrate
- ✔ Contains data that must be maintained (like production), which means that the database cannot be reset

Baselining tells Prisma Migrate to assume that one or more migrations have **already been applied**. This prevents generated migrations from failing when they try to create tables and fields that already exist.

Since this is working with development database, the assumption is that the database can be reset and reseeded.

Baselining is part of [adding Prisma Migrate to a project with an existing database](/orm/prisma-migrate/getting-started#adding-to-an-existing-project).

```
This guide **does not apply for MongoDB**.
Instead of `migrate deploy`, [`db push`](/orm/prisma-migrate/workflows/prototyping-your-schema) is used for [MongoDB](/orm/core-concepts/supported-databases/mongodb).
```

Why you need to baseline \[#why-you-need-to-baseline]

When you add Prisma Migrate to an existing project, your initial migration contains all the SQL required to recreate the state of the database **before you started using Prisma Migrate**:

```
You can edit the initial migration to include schema elements that cannot be represented in the Prisma schema - such as stored procedures or triggers.
```

You need this initial migration to create and reset **development environments**:

However, when you `prisma migrate deploy` your migrations to databases that already exist and *cannot* be reset - such as production - you **do not want to include the initial migrations**.

The target database already contains the tables and columns created by the initial migration, and attempting to create these elements again will most likely result in an error.

Baselining solves this problem by telling Prisma Migrate to pretend that the initial migration(s) **have already been applied**.

Baselining a database \[#baselining-a-database]

To create a baseline migration:

- If you already have a `prisma/migrations` folder, delete, move, rename, or archive this folder.

- Create a new `prisma/migrations` directory.

- Then create another new directory with your preferred name. What's important is to use a prefix of `0_` so that Prisma migrate applies migrations in a [lexicographic order](https://en.wikipedia.org/wiki/Lexicographic_order). You can use a different value such as the current timestamp.

- Generate a migration and save it to a file using `prisma migrate diff`:

  ```
  npm



  pnpm



  yarn



  bun
  ```

  ```bash
  npx prisma migrate diff \
    --from-empty \
    --to-schema prisma/schema.prisma \
    --script > prisma/migrations/0_init/migration.sql
  ```

  ```bash
  pnpm dlx prisma migrate diff \
    --from-empty \
    --to-schema prisma/schema.prisma \
    --script > prisma/migrations/0_init/migration.sql
  ```

  ```bash
  yarn dlx prisma migrate diff \
    --from-empty \
    --to-schema prisma/schema.prisma \
    --script > prisma/migrations/0_init/migration.sql
  ```

  ```bash
  bunx --bun prisma migrate diff \
    --from-empty \
    --to-schema prisma/schema.prisma \
    --script > prisma/migrations/0_init/migration.sql
  ```

- Run the `prisma migrate resolve` command for each migration that should be ignored:

  ```
  npm



  pnpm



  yarn



  bun
  ```

  ```bash
  npx prisma migrate resolve --applied 0_init
  ```

  ```bash
  pnpm dlx prisma migrate resolve --applied 0_init
  ```

  ```bash
  yarn dlx prisma migrate resolve --applied 0_init
  ```

  ```bash
  bunx --bun prisma migrate resolve --applied 0_init
  ```

This command adds the target migration to the `_prisma_migrations` table and marks it as applied. When you run `prisma migrate deploy` to apply new migrations, Prisma Migrate:

1. Skips all migrations marked as 'applied', including the baseline migration
2. Applies any new migrations that come *after* the baseline migration
