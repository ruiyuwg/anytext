# Getting started with Prisma Migrate (/docs/orm/prisma-migrate/getting-started)

Adding to a new project \[#adding-to-a-new-project]

To get started with Prisma Migrate, start by adding some models to your `schema.prisma`

```prisma title="schema.prisma"
datasource db {
  provider = "postgresql"
}

model User { // [!code ++]
  id    Int    @id @default(autoincrement()) // [!code ++]
  name  String // [!code ++]
  posts Post[] // [!code ++]
}

model Post { // [!code ++]
  id        Int     @id @default(autoincrement()) // [!code ++]
  title     String // [!code ++]
  published Boolean @default(true) // [!code ++]
  authorId  Int // [!code ++]
  author    User    @relation(fields: [authorId], references: [id]) // [!code ++]
} // [!code ++]
```

```
You can use [native type mapping attributes](/orm/prisma-migrate/workflows/native-database-types) in your schema to decide which exact database type to create (for example, `String` can map to `varchar(100)` or `text`).
```

Create an initial migration \[#create-an-initial-migration]

Create an initial migration using the `prisma migrate` command:

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma migrate dev --name init
```



```bash
pnpm dlx prisma migrate dev --name init
```



```bash
yarn dlx prisma migrate dev --name init
```



```bash
bunx --bun prisma migrate dev --name init
```
````

This will generate a migration with the appropriate commands for your database.

```sql no-copy title="migration.sql"
CREATE TABLE "User" (
  "id" SERIAL,
  "name" TEXT NOT NULL,
  PRIMARY KEY ("id")
);
-- CreateTable
CREATE TABLE "Post" (
  "id" SERIAL,
  "title" TEXT NOT NULL,
  "published" BOOLEAN NOT NULL DEFAULT true,
  "authorId" INTEGER NOT NULL,
  PRIMARY KEY ("id")
);
-- AddForeignKey
ALTER TABLE
  "Post"
ADD
  FOREIGN KEY("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
```

Your Prisma schema is now in sync with your database schema and you have initialized a migration history:

```text
migrations/
  └─ 20210313140442_init/
    └─ migration.sql
```

> **Note**: The folder name will be different for you. Folder naming is in the format of YYYYMMDDHHMMSS\_your\_text\_from\_name\_flag.

Additional migrations \[#additional-migrations]

Now say you add additional fields to your model

```prisma title="schema.prisma"
model User {
  id       Int    @id @default(autoincrement())
  jobTitle String // [!code ++]
  name     String
  posts    Post[]
}
```

You can run `prisma migrate` again to update your migrations

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

```sql no-copy title="migration.sql"
  -- AlterTable
ALTER TABLE
  "User"
ADD
  COLUMN "jobTitle" TEXT NOT NULL;
```

Your Prisma schema is once again in sync with your database schema, and your migration history contains two migrations:

```
migrations/
  └─ 20210313140442_init/
    └─ migration.sql
  └─ 20210313140442_added_job_title/
    └─ migration.sql
```

Committing to versions control \[#committing-to-versions-control]

Your migration history can be [committed to version control](/orm/prisma-migrate/understanding-prisma-migrate/migration-histories#committing-the-migration-history-to-source-control) and use to [deploy changes to test environments and production](/orm/prisma-migrate/workflows/development-and-production#production-and-testing-environments).

Adding to an existing project \[#adding-to-an-existing-project]

It's possible to integrate Prisma migrations to an existing project.

Introspect to create or update your Prisma schema \[#introspect-to-create-or-update-your-prisma-schema]

Make sure your Prisma schema is in sync with your database schema. This should already be true if you are using a previous version of Prisma Migrate.

````
  npm



  pnpm



  yarn



  bun




```bash
npx prisma db pull
```



```bash
pnpm dlx prisma db pull
```



```bash
yarn dlx prisma db pull
```



```bash
bunx --bun prisma db pull
```
````

Create a baseline migration \[#create-a-baseline-migration]

Create a baseline migration that creates an initial history of the database before using Prisma migrate. This migrations contains the data the must be maintained, which means the database cannot be reset. This tells Prisma migrate to assume that one or more migrations have **already been applied**. This prevents generated migrations from failing when they try to create tables and fields that already exist.

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

- Review the generated migration.

Work around features not supported by Prisma Schema Language \[#work-around-features-not-supported-by-prisma-schema-language]

To include [unsupported database features](/orm/prisma-migrate/workflows/unsupported-database-features) that already exist in the database, you must replace or modify the initial migration SQL:

- Open the `migration.sql` file generated in the [Create a baseline migration](#create-a-baseline-migration) section.
- Modify the generated SQL. For example:

  - If the changes are minor, you can append additional custom SQL to the generated migration. The following example creates a trigger function:

```sql title="migration.sql"
/* Generated migration SQL */

CREATE OR REPLACE FUNCTION notify_on_insert() -- [!code ++]
RETURNS TRIGGER AS $$ -- [!code ++]
BEGIN -- [!code ++]
  PERFORM pg_notify('new_record', NEW.id::text); -- [!code ++]
  RETURN NEW; -- [!code ++]
END; -- [!code ++]
$$ LANGUAGE plpgsql; -- [!code ++]
```

- If the changes are significant, it can be easier to replace the entire migration file with the result of a database dump:

  - [`mysqldump`](https://dev.mysql.com/doc/refman/8.0/en/mysqldump.html)
  - [`pg_dump`](https://www.postgresql.org/docs/12/app-pgdump.html).

  When using `pg_dump` for this, you'll need to update the `search_path` as follows with this command: `SELECT pg_catalog.set_config('search_path', '', false);`, otherwise you'll run into the following error: `The underlying table for model '_prisma_migrations' does not exist.`

  Note that the order of the tables matters when creating all of them at once, since foreign keys are created at the same step. Therefore, either re-order them or move constraint creation to the last step after all tables are created, so you won't face `can't create constraint` errors

Apply the initial migrations \[#apply-the-initial-migrations]

To apply your initial migration(s):

- Run the following command against your database:

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

- Review the database schema to ensure the migration leads to the desired end-state (for example, by comparing the schema to the production database).

The new migration history and the database schema should now be in sync with your Prisma schema.

Commit the migration history and Prisma schema \[#commit-the-migration-history-and-prisma-schema]

Commit the following to source control:

- The entire migration history folder
- The `schema.prisma` file

Going further \[#going-further]

- Refer to the [Deploying database changes with Prisma Migrate](/orm/prisma-client/deployment/deploy-database-changes-with-prisma-migrate) guide for more on deploying migrations to production.
- Refer to the [Production Troubleshooting](/orm/prisma-migrate/workflows/patching-and-hotfixing#fixing-failed-migrations-with-migrate-diff-and-db-execute) guide to learn how to debug and resolve failed migrations in production using `prisma migrate diff`, `prisma db execute` and/ or `prisma migrate resolve`.

# Overview of Prisma Migrate (/docs/orm/prisma-migrate)

Prisma Migrate enables you to:

- Keep your database schema in sync with your [Prisma schema](/orm/prisma-schema/overview) as it evolves
- Maintain existing data in your database

Prisma Migrate generates [a history of `.sql` migration files](/orm/prisma-migrate/understanding-prisma-migrate/migration-histories), and plays a role in both [development and production](/orm/prisma-migrate/workflows/development-and-production).

Prisma Migrate can be considered a *hybrid* database schema migration tool, meaning it has both of *declarative* and *imperative* elements:

- Declarative: The data model is described in a declarative way in the [Prisma schema](/orm/prisma-schema/overview). Prisma Migrate generates SQL migration files from that data model.
- Imperative: All generated SQL migration files are fully customizable. Prisma Migrate hence provides the flexibility of an imperative migration tool by enabling you to modify what and how migrations are executed (and allows you to run custom SQL to e.g. make use of native database feature, perform data migrations, ...).

If you are prototyping, consider using the [`db push`](/orm/reference/prisma-cli-reference#db-push) command - see [Schema prototyping with `db push`](/orm/prisma-migrate/workflows/prototyping-your-schema) for examples.

See the [Prisma Migrate reference](/orm/reference/prisma-cli-reference#prisma-migrate) for detailed information about the Prisma Migrate CLI commands.

```
Does not apply for MongoDB



Instead of `migrate dev` and related commands, use [`db push`](/orm/prisma-migrate/workflows/prototyping-your-schema) for [MongoDB](/orm/core-concepts/supported-databases/mongodb).
```
