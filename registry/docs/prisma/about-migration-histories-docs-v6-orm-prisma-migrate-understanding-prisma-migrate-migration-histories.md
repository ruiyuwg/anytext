# About migration histories (/docs/v6/orm/prisma-migrate/understanding-prisma-migrate/migration-histories)

This page explains how Prisma ORM uses migration histories to track changes to your schema.

Migration history \[#migration-history]

Your migration history is the story of the changes to your data model, and is represented by:

- A `prisma/migrations` folder with a sub-folder and `migration.sql` file for each migration:

  ```
  migrations/
    └─ 20210313140442_init/
      └─ migration.sql
    └─ 20210313140442_added_job_title/
      └─ migration.sql
  ```

  The `migrations` folder is the **source of truth** for the history of your data model.

- A `_prisma_migrations` table in the database, which is used to check:

  - If a migration was run against the database
  - If an applied migration was deleted
  - If an applied migration was changed

  If you change or delete a migration (**not** recommended), the next steps depend on whether you are in a [development environment](/v6/orm/prisma-migrate/workflows/development-and-production#development-environments) (and therefore using `migrate dev`) or a [production / testing environment](/v6/orm/prisma-migrate/workflows/development-and-production#production-and-testing-environments) (and therefore using `migrate deploy`).

Do not edit or delete migrations that have been applied \[#do-not-edit-or-delete-migrations-that-have-been-applied]

In general, you **should not edit or delete** a migration that has already been applied. Doing so can lead to inconsistencies between development and production environment migration histories, which may have unforeseen consequences — even if the change does not *appear* to break anything at first.

The following scenario simulates a change that creates a seemingly harmless inconsistency:

1. Modify an **existing migration** that has **already been applied** in a development environment by changing the value of `VARCHAR(550)` to `VARCHAR(560)`:
   ```sql title="./prisma/migrations/20210310143435_default_value/migrations.sql"
     -- AlterTable
    ALTER TABLE "Post" ALTER COLUMN "content" SET DATA TYPE VARCHAR(560);
   ```
   After making this change, the end state of the migration history no longer matches the Prisma schema, which still has `@db.VarChar(550)`.
2. Running `prisma migrate dev` results in an error because a migration has been changed and suggests resetting the database.
3. Run `prisma migrate reset` - Prisma Migrate resets the database and replays all migrations, including the migration you edited.
4. After applying all existing migrations, Prisma Migrate compares the end state of the migration history to the Prisma schema and detects a discrepancy:
   - Prisma schema has `@db.VarChar(550)`
   - Database schema has `VARCHAR(560)`
5. Prisma Migrate generates a new migration to change the value back to `550`, because the end state of the migration history should match the Prisma schema.
6. From now on, when you use `prisma migrate deploy` to deploy migrations to production and test environments, Prisma Migrate will always **warn you** that migration histories do not match (and continue to warn you each time you run the command ) - even though the schema end states match:
   ```
   6 migrations found in prisma/migrations
   WARNING The following migrations have been modified since they were applied:
   20210310143435_change_type
   ```

A change that does not appear to break anything after a `migrate reset` can hide problems - you may end up with a bug in production that you cannot replicate in development, or the other way around - particularly if the change concerns a highly customized migration.

If Prisma Migrate reports a missing or edited migration that has already been applied, we recommend fixing the **root cause** (restoring the file or reverting the change) rather than resetting.

Committing the migration history to source control \[#committing-the-migration-history-to-source-control]

You must commit the entire `prisma/migrations` folder to source control. This includes the `prisma/migrations/migration_lock.toml` file, which is used to detect if you have [attempted to change providers](/v6/orm/prisma-migrate/understanding-prisma-migrate/limitations-and-known-issues#you-cannot-automatically-switch-database-providers).

Source-controlling the `schema.prisma` file is not enough - you must include your migration history. This is because:

- As you start to [customize migrations](/v6/orm/prisma-migrate/workflows/development-and-production#customizing-migrations), your migration history contains **information that cannot be represented in the Prisma schema**. For example, you can customize a migration to mitigate data loss that would be caused by a breaking change.
- The `prisma migrate deploy` command, which is used to deploy changes to staging, testing, and production environments, *only* runs migration files. It does not use the Prisma schema to fetch the models.

# Overview on Prisma Migrate (/docs/v6/orm/prisma-migrate/understanding-prisma-migrate/overview)

<br />

<CalloutContainer type="info">
  <CalloutDescription>
    **Does not apply for MongoDB**<br />Instead of `migrate dev` and related commands, use [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) for [MongoDB](/v6/orm/overview/databases/mongodb).
  </CalloutDescription>
</CalloutContainer>

Prisma Migrate enables you to:

- Keep your database schema in sync with your [Prisma schema](/v6/orm/prisma-schema/overview) as it evolves *and*
- Maintain existing data in your database

Prisma Migrate generates [a history of `.sql` migration files](/v6/orm/prisma-migrate/understanding-prisma-migrate/migration-histories), and plays a role in both [development and production](/v6/orm/prisma-migrate/workflows/development-and-production).

Prisma Migrate can be considered a *hybrid* database schema migration tool, meaning it has both of *declarative* and *imperative* elements:

- Declarative: The data model is described in a declarative way in the [Prisma schema](/v6/orm/prisma-schema/overview). Prisma Migrate generates SQL migration files from that data model.
- Imperative: All generated SQL migration files are fully customizable. Prisma Migrate hence provides the flexibility of an imperative migration tool by enabling you to modify what and how migrations are executed (and allows you to run custom SQL to e.g. make use of native database feature, perform data migrations, ...).

<CalloutContainer type="info">
  <CalloutDescription>
    If you are prototyping, consider using the [`db push`](/v6/orm/reference/prisma-cli-reference#db-push) command - see [Schema prototyping with `db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) for examples.
  </CalloutDescription>
</CalloutContainer>

See the [Prisma Migrate reference](/v6/orm/reference/prisma-cli-reference#prisma-migrate) for detailed information about the Prisma Migrate CLI commands.
