# Customizing migrations (/docs/v6/orm/prisma-migrate/workflows/customizing-migrations)

<CalloutContainer type="warning">
  <CalloutDescription>
    This guide **does not apply for MongoDB**.<br />
    Instead of `migrate dev`, [`db push`](/v6/orm/prisma-migrate/workflows/prototyping-your-schema) is used for [MongoDB](/v6/orm/overview/databases/mongodb).
  </CalloutDescription>
</CalloutContainer>

In some scenarios, you need to edit a migration file before you apply it. For example, to [change the direction of a 1-1 relation](#example-change-the-direction-of-a-1-1-relation) (moving the foreign key from one side to another) without data loss, you need to move data as part of the migration - this SQL is not part of the default migration, and must be written by hand.

This guide explains how to edit migration files and gives some examples of use cases where you may want to do this.

How to edit a migration file \[#how-to-edit-a-migration-file]

To edit a migration file before applying it, the general procedure is the following:

1. Make a schema change that requires custom SQL (for example, to preserve existing data)

2. Create a draft migration using:

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
       npx prisma migrate dev --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate dev --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate dev --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate dev --create-only
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

3. Modify the generated SQL file.

4. Apply the modified SQL by running:

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
       npx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate dev
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

Example: Rename a field \[#example-rename-a-field]

By default, renaming a field in the schema results in a migration that will:

- `CREATE` a new column (for example, `fullname`)
- `DROP` the existing column (for example, `name`) and the data in that column

To actually **rename** a field and avoid data loss when you run the migration in production, you need to modify the generated migration SQL before applying it to the database. Consider the following schema fragment - the `biograpy` field is spelled wrong.

```prisma highlight=3;normal;
model Profile {
  id       Int    @id @default(autoincrement())
  biograpy String // [!code highlight]
  userId   Int    @unique
  user     User   @relation(fields: [userId], references: [id])
}
```

To rename the `biograpy` field to `biography`:

1. Rename the field in the schema:

   ```prisma highlight=3;delete|4;add;
   model Profile {
     id        Int    @id @default(autoincrement())
     biograpy  String // [!code --]
     biography String // [!code ++]
     userId    Int    @unique
     user      User   @relation(fields: [userId], references: [id])
   }
   ```

2. Run the following command to create a **draft migration** that you can edit before applying to the database:

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
       npx prisma migrate dev --name rename-migration --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate dev --name rename-migration --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate dev --name rename-migration --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate dev --name rename-migration --create-only
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

3. Edit the draft migration as shown, changing `DROP` / `DELETE` to a single `RENAME COLUMN`:

   <CodeBlockTabs defaultValue="Before">
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="Before">
         Before
       </CodeBlockTabsTrigger>

   ```
   <CodeBlockTabsTrigger value="After">
     After
   </CodeBlockTabsTrigger>
   ```

     </CodeBlockTabsList>

     <CodeBlockTab value="Before">
       ```sql title="./prisma/migrations/20210308092620_rename_migration/migration.sql" 
       ALTER TABLE "Profile" DROP COLUMN "biograpy",
       ADD COLUMN  "biography" TEXT NOT NULL;
       ```
     </CodeBlockTab>

     <CodeBlockTab value="After">
       ```sql title="./prisma/migrations/20210308092620_rename_migration/migration.sql" 
       ALTER TABLE "Profile"
       RENAME COLUMN "biograpy" TO "biography"
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

   For SQL Server, you should use the stored procedure `sp_rename` instead of `ALTER TABLE RENAME COLUMN`.

   <CodeBlockTabs defaultValue="After">
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="After">
         After
       </CodeBlockTabsTrigger>
     </CodeBlockTabsList>

     <CodeBlockTab value="After">
       ```sql title="./prisma/migrations/20210308092620_rename_migration/migration.sql" 
        EXEC sp_rename 'dbo.Profile.biograpy', 'biography', 'COLUMN';
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

4. Save and apply the migration:

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
       npx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate dev
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

You can use the same technique to rename a `model` - edit the generated SQL to *rename* the table rather than drop and re-create it.

Example: Use the expand and contract pattern to evolve the schema without downtime \[#example-use-the-expand-and-contract-pattern-to-evolve-the-schema-without-downtime]

Making schema changes to existing fields, e.g., renaming a field can lead to downtime. It happens in the time frame between applying a migration that modifies an existing field, and deploying a new version of the application code which uses the modified field.

You can prevent downtime by breaking down the steps required to alter a field into a series of discrete steps designed to introduce the change gradually. This pattern is known as the *expand and contract pattern*.

The pattern involves two components: your application code accessing the database and the database schema you intend to alter.

With the *expand and contract* pattern, renaming the field `bio` to `biography` would look as follows with Prisma:

1. Add the new `biography` field to your Prisma schema and create a migration

   ```prisma highlight=4;add;
   model Profile {
     id        Int    @id @default(autoincrement())
     bio       String
     biography String // [!code ++]
     userId    Int    @unique
     user      User   @relation(fields: [userId], references: [id])
   }
   ```

2. *Expand*: update the application code and write to both the `bio` and `biography` fields, but continue reading from the `bio` field, and deploy the code

3. Create an empty migration and copy existing data from the `bio` to the `biography` field

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
       npx prisma migrate dev --name copy_biography --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate dev --name copy_biography --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate dev --name copy_biography --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate dev --name copy_biography --create-only
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

   ```sql title="prisma/migrations/20210420000000_copy_biography/migration.sql"
   UPDATE "Profile" SET biography = bio;
   ```

4. Verify the integrity of the `biography` field in the database

5. Update application code to **read** from the new `biography` field

6. Update application code to **stop writing** to the `bio` field

7. *Contract*: remove the `bio` from the Prisma schema, and create a migration to remove the `bio` field

   ```prisma highlight=3;delete;
   model Profile {
     id        Int    @id @default(autoincrement())
     bio       String // [!code --]
     biography String
     userId    Int    @unique
     user      User   @relation(fields: [userId], references: [id])
   }
   ```

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
       npx prisma migrate dev --name remove_bio
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate dev --name remove_bio
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate dev --name remove_bio
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate dev --name remove_bio
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

By using this approach, you avoid potential downtime that altering existing fields that are used in the application code are prone to, and reduce the amount of coordination required between applying the migration and deploying the updated application code.

Note that this pattern is applicable in any situation involving a change to a column that has data and is in use by the application code. Examples include combining two fields into one, or transforming a `1:n` relation to a `m:n` relation.

To learn more, check out the Data Guide article on [the expand and contract pattern](https://www.prisma.io/dataguide/types/relational/expand-and-contract-pattern)

Example: Change the direction of a 1-1 relation \[#example-change-the-direction-of-a-1-1-relation]

To change the direction of a 1-1 relation:

1. Make the change in the schema:

   ```prisma
   model User {
     id        Int      @id @default(autoincrement())
     name      String
     posts     Post[]
     profile   Profile? @relation(fields: [profileId], references: [id])
     profileId Int      @unique
   }

   model Profile {
     id        Int    @id @default(autoincrement())
     biography String
     user      User
   }
   ```

2. Run the following command to create a **draft migration** that you can edit before applying to the database:

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
       npx prisma migrate dev --name rename-migration --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate dev --name rename-migration --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate dev --name rename-migration --create-only
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate dev --name rename-migration --create-only
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

   ```text no-copy
   ⚠️  There will be data loss when applying the migration:

   • The migration will add a unique constraint covering the columns `[profileId]` on the table `User`. If there are existing duplicate values, the migration will fail.
   ```

3. Edit the draft migration as shown:

   <CodeBlockTabs defaultValue="Before">
     <CodeBlockTabsList>
       <CodeBlockTabsTrigger value="Before">
         Before
       </CodeBlockTabsTrigger>

   ```
   <CodeBlockTabsTrigger value="After">
     After
   </CodeBlockTabsTrigger>
   ```

     </CodeBlockTabsList>

     <CodeBlockTab value="Before">
       ```sql

   ````
   -- DropForeignKey
   ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

   -- DropIndex
   DROP INDEX "Profile_userId_unique";

   -- AlterTable
   ALTER TABLE "Profile" DROP COLUMN "userId";

   -- AlterTable
   ALTER TABLE "User" ADD COLUMN     "profileId" INTEGER NOT NULL;

   -- CreateIndex
   CREATE UNIQUE INDEX "User_profileId_unique" ON "User"("profileId");

   -- AddForeignKey
   ALTER TABLE "User" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
   ```
   ````

     </CodeBlockTab>

     <CodeBlockTab value="After">
       ```sql

   ````
   -- DropForeignKey
   ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

   -- DropIndex
   DROP INDEX "Profile_userId_unique";

   -- AlterTable
   ALTER TABLE "User" ADD COLUMN "profileId" INTEGER;

   UPDATE "User"
   SET "profileId" = "Profile".id
   FROM "Profile"
   WHERE "User".id = "Profile"."userId";

   ALTER TABLE "User" ALTER COLUMN "profileId" SET NOT NULL;

   -- AlterTable
   ALTER TABLE "Profile" DROP COLUMN "userId";

   -- CreateIndex
   CREATE UNIQUE INDEX "User_profileId_unique" ON "User"("profileId");

   -- AddForeignKey
   ALTER TABLE "User" ADD FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
   ```
   ````

     </CodeBlockTab>
   </CodeBlockTabs>

4. Save and apply the migration:

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
       npx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="pnpm">
       ```bash
       pnpm dlx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="yarn">
       ```bash
       yarn dlx prisma migrate dev
       ```
     </CodeBlockTab>

     <CodeBlockTab value="bun">
       ```bash
       bunx --bun prisma migrate dev
       ```
     </CodeBlockTab>
   </CodeBlockTabs>

# Data migrations (/docs/v6/orm/prisma-migrate/workflows/data-migration)

This guide has been moved to our new [guides section](/v6/guides/data-migration). You can find the guide there.
