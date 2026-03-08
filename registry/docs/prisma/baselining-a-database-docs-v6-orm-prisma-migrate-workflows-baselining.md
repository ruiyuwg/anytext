# Baselining a database (/docs/v6/orm/prisma-migrate/workflows/baselining)

Baselining is the process of initializing a migration history for a database that:

- ✔ Existed before you started using Prisma Migrate
- ✔ Contains data that must be maintained (like production), which means that the database cannot be reset

Baselining tells Prisma Migrate to assume that one or more migrations have **already been applied**. This prevents generated migrations from failing when they try to create tables and fields that already exist.

> **Note**: We assume it is acceptable to reset and seed development databases.

Baselining is part of [adding Prisma Migrate to a project with an existing database](/v6/orm/prisma-migrate/getting-started#adding-prisma-migrate-to-an-existing-project).

<CalloutContainer type="warning">
  <CalloutDescription>
    This guide **does not apply for MongoDB**.<br />
    Instead of `migrate deploy`, [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) is used for [MongoDB](/v6/orm/overview/databases/mongodb).
  </CalloutDescription>
</CalloutContainer>

Why you need to baseline \[#why-you-need-to-baseline]

When you add Prisma Migrate to an existing project, your initial migration contains all the SQL required to recreate the state of the database **before you started using Prisma Migrate**:

<img alt="The image shows a database labelled 'Existing database', and a list of existing database features next to it - 24 tables, 13 relationships, 92 fields, 3 indexes. An arrow labelled 'represented by' connects the database features list to a box that represents a migration. The existing databases's features are represented by a single migration." src="/img/v6/orm/prisma-migrate/workflows/existing-database.png" width="916" height="644" />

<CalloutContainer type="info">
  <CalloutDescription>
    You can edit the initial migration to include schema elements that cannot be represented in the Prisma schema - such as stored procedures or triggers.
  </CalloutDescription>
</CalloutContainer>

You need this initial migration to create and reset **development environments**:

<img alt="The image shows a migration history with three migrations. Each migration is represented by a file icon and a name, and all migrations are surrounded by a box labelled 'migration history'. The first migration has an additional label: &#x22;State of database before Prisma Migrate&#x22;, and the two remaining migrations are labelled &#x22;Generated as part of the Prisma Migrate workflow&#x22;. An arrow labelled &#x22;prisma migrate dev&#x22; connects the migration history box to a database labelled &#x22;new development database&#x22;, signifying that all three migrations are applied to the development database - none are skipped." src="/img/v6/orm/prisma-migrate/workflows/new-dev-db.png" width="1320" height="1072" />

However, when you `prisma migrate deploy` your migrations to databases that already exist and *cannot* be reset - such as production - you **do not want to include the initial migrations**.

The target database already contains the tables and columns created by the initial migration, and attempting to create these elements again will most likely result in an error.

<img alt="A migration history represented by three migration files (file icon and name), surrounded by a a box labelled 'migration history'. The first migration is marked 'do not apply', and the second two migrations are marked 'apply'. An arrow labelled with the command 'prisma migrate deploy' points from the migration history to a database labelled 'production'." src="/img/v6/orm/prisma-migrate/workflows/deploy-db.png" width="1320" height="1072" />

Baselining solves this problem by telling Prisma Migrate to pretend that the initial migration(s) **have already been applied**.

Baselining a database \[#baselining-a-database]

To create a baseline migration:

1. If you have a `prisma/migrations` folder, delete, move, rename, or archive this folder.

2. Run the following command to create a `migrations` directory inside with your preferred name. This example will use `0_init` for the migration name:

   ```bash
   mkdir -p prisma/migrations/0_init
   ```

   <CalloutContainer type="info">
     <CalloutDescription>
       Then `0_` is important because Prisma Migrate applies migrations in a [lexicographic order](https://en.wikipedia.org/wiki/Lexicographic_order). You can use a different value such as the current timestamp.
     </CalloutDescription>
   </CalloutContainer>

3. Generate a migration and save it to a file using `prisma migrate diff`

   ```bash no-lines
   npx prisma migrate diff \
   --from-empty \
   --to-schema prisma/schema.prisma \
   --script > prisma/migrations/0_init/migration.sql
   ```

4. Run the `prisma migrate resolve` command for each migration that should be ignored:

   <CodeBlockTabs defaultValue="npm" groupId="package-manager" persist>
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="npm">
         npm
       </CodeBlockTabsTrigger>

   ```
   <CodeBlockTabsTrigger value="pnpm">
     pnpm
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="yarn">
     yarn
   </CodeBlockTabsTrigger>

   <CodeBlockTabsTrigger value="bun">
     bun
   </CodeBlockTabsTrigger>
   ```

     </CodeBlockTabsList>

     <CodeBlockTab value="npm">
       ```bash
       npx prisma migrate resolve --applied 0_init
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate resolve --applied 0_init
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate resolve --applied 0_init
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate resolve --applied 0_init
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

This command adds the target migration to the `_prisma_migrations` table and marks it as applied. When you run `prisma migrate deploy` to apply new migrations, Prisma Migrate:

1. Skips all migrations marked as 'applied', including the baseline migration
2. Applies any new migrations that come *after* the baseline migration
