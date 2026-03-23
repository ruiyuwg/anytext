## Setup Supabase and Drizzle ORM

<Steps>
#### Create a new Supabase project

You can create new Supabase project in the [dashboard](https://supabase.com/dashboard) or by following this [link](https://database.new/).

#### Setup connection string variable

Navigate to [Database Settings](https://supabase.com/dashboard/project/_/settings/database) and copy the URI from the `Connection String` section. Make sure to use `connection pooling`. Remember to replace the password placeholder with your actual database password.

Add `DATABASE_URL` variable to your `.env` or `.env.local` file.

```plaintext copy
DATABASE_URL=<YOUR_DATABASE_URL>
```

Read more about Connection Pooler and pooling modes in the [documentation](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler).

#### Connect Drizzle ORM to your database

Create a `index.ts` file in the `src/db` directory and set up your database configuration:

```typescript copy filename="src/db/index.ts"
import { config } from 'dotenv';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

config({ path: '.env' }); // or .env.local

const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle({ client });
```

#### Create tables

Create a `schema.ts` file in the `src/db` directory and declare your tables:

```typescript copy filename="src/db/schema.ts"
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  age: integer('age').notNull(),
  email: text('email').notNull().unique(),
});

export const postsTable = pgTable('posts_table', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  content: text('content').notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => usersTable.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertUser = typeof usersTable.$inferInsert;
export type SelectUser = typeof usersTable.$inferSelect;

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;
```

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './supabase/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### Applying changes to the database

You can generate migrations using `drizzle-kit generate` command and then run them using the `drizzle-kit migrate` command.

Generate migrations:

```bash copy
npx drizzle-kit generate
```

These migrations are stored in the `supabase/migrations`  directory, as specified in your `drizzle.config.ts`. This directory will contain the SQL files necessary to update your database schema and a `meta` folder for storing snapshots of the schema at different migration stages.

Example of a generated migration:

```sql
CREATE TABLE IF NOT EXISTS "posts_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"content" text NOT NULL,
	"user_id" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "posts_table" ADD CONSTRAINT "posts_table_user_id_users_table_id_fk" FOREIGN KEY ("user_id") REFERENCES "users_table"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
```

Run migrations:

```bash copy
npx drizzle-kit migrate
```

Learn more about [migration process](/docs/migrations). You can also apply migrations using [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started):

- For tables that already exist, manually review the generated migration files from `npx drizzle-kit generate` and comment out or adjust any unsafe pure create statements (e.g., `CREATE SCHEMA "auth";`) while ensuring safe conditional creates (e.g., `CREATE TABLE IF NOT EXISTS "auth"."users"`) are properly handled.

Alternatively, you can push changes directly to the database using [Drizzle kit push command](/docs/kit-overview#prototyping-with-db-push):

```bash copy
npx drizzle-kit push
```

<Callout type="warning">Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files.</Callout>

To apply migrations using the Supabase CLI you should follow these steps:

Generate migrations using Drizzle Kit:

```bash copy
npx drizzle-kit generate
```

Initialize the local Supabase project:

```bash copy
supabase init
```

Link it to your remote project:

```bash copy
supabase link
```

Push changes to the database:

```bash copy
supabase db push
```

</Steps>

## Basic file structure

This is the basic file structure of the project. In the `src/db` directory, we have database-related files including connection in `index.ts` and schema definitions in `schema.ts`.

```plaintext
📦 
 ├ 📂 src
 │   ├ 📂 db
 │   │  ├ 📜 index.ts
 │   │  └ 📜 schema.ts
 ├ 📂 supabase
 │   ├ 📂 migrations
 │   │  ├ 📂 meta
 │   │  │  ├ 📜 _journal.json
 │   │  │  └ 📜 0000_snapshot.json
 │   │  └ 📜 0000_watery_spencer_smythe.sql
 │   └ 📜 config.toml
 ├ 📜 .env
 ├ 📜 drizzle.config.ts
 ├ 📜 package.json
 └ 📜 tsconfig.json
```
