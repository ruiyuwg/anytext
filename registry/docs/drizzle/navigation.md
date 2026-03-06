## Navigation

- Navigate directly to the [Neon Postgres](/docs/tutorials/drizzle-with-vercel-edge-functions#neon-postgres) section.
- Navigate directly to the [Vercel Postgres](/docs/tutorials/drizzle-with-vercel-edge-functions#vercel-postgres) section.
- Navigate directly to the [PlanetScale](/docs/tutorials/drizzle-with-vercel-edge-functions#planetscale) section.
- Navigate directly to the [Turso](/docs/tutorials/drizzle-with-vercel-edge-functions#turso) section.

### Neon Postgres

<Steps>
#### Install the `@neondatabase/serverless` driver

Install the `@neondatabase/serverless` driver:

<Npm>
@neondatabase/serverless
</Npm>

#### Create a table

Create a `schema.ts` file in the `src/db` directory and declare a table schema:

```typescript copy filename="src/db/schema.ts"
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: text("age").notNull(),
  email: text("email").notNull().unique(),
});
```

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
```

Configure your database connection string in the `.env` file:

```plaintext filename=".env"
POSTGRES_URL="postgres://[user]:[password]@[host]-[region].aws.neon.tech:5432/[db-name]?sslmode=[ssl-mode]"
```

#### Applying changes to the database

You can generate migrations using `drizzle-kit generate` command and then run them using the `drizzle-kit migrate` command.

Generate migrations:

```bash copy
npx drizzle-kit generate
```

These migrations are stored in the `drizzle` directory, as specified in your `drizzle.config.ts`. This directory will contain the SQL files necessary to update your database schema and a `meta` folder for storing snapshots of the schema at different migration stages.

Example of a generated migration:

```sql
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
```

Run migrations:

```bash copy
npx drizzle-kit migrate
```

Alternatively, you can push changes directly to the database using [Drizzle kit push command](/docs/kit-overview#prototyping-with-db-push):

```bash copy
npx drizzle-kit push
```

<Callout type="warning">Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files.</Callout>

#### Connect Drizzle ORM to your database

Create a `index.ts` file in the `src/db` directory and set up your database configuration:

```typescript copy filename="src/db/index.ts"
import { drizzle } from "drizzle-orm/neon-serverless";

export const db = drizzle(process.env.POSTGRES_URL!);
```

#### Create an API route

Create `route.ts` file in `src/app/api/hello` directory. To learn more about how to write a function, see the [Functions API Reference](https://vercel.com/docs/functions/functions-api-reference) and [Vercel Functions Quickstart](https://vercel.com/docs/functions/quickstart).

```ts copy filename="src/app/api/hello/route.ts"
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge"; // specify the runtime to be edge

export async function GET(request: Request) {
  const users = await db.select().from(usersTable);

  return NextResponse.json({ users, message: "success" });
}
```

#### Test your code locally

Run the `next dev` command to start your local development server:

```bash copy
npx next dev
```

Navigate to the route you created `(e.g. /api/hello)` in your browser:

```plaintext
{
  "users": [],
  "message": "success"
}
```

#### Deploy your project

Create a new project in the [dashboard](https://vercel.com/new) or run the `vercel` command to deploy your project:

```bash copy
vercel
```

Add `POSTGRES_URL` environment variable:

```bash copy
vercel env add POSTGRES_URL
```

Redeploy your project to update your environment variables:

```bash copy
vercel
```

</Steps>

Finally, you can use URL of the deployed project and navigate to the route you created `(e.g. /api/hello)` to access your edge function.

### Vercel Postgres

You can check quickstart guide for Drizzle with Vercel Postgres client in the [documentation](/docs/get-started-postgresql#vercel-postgres).

<Steps>
#### Install the `@vercel/postgres` driver

Install the `@vercel/postgres` driver:

<Npm>
@vercel/postgres
</Npm>

#### Create a table

Create a `schema.ts` file in the `src/db` directory and declare a table schema:

```typescript copy filename="src/db/schema.ts"
import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: text("age").notNull(),
  email: text("email").notNull().unique(),
});
```

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
});
```

Configure your database connection string in the `.env` file:

```plaintext filename=".env"
POSTGRES_URL="postgres://[user]:[password]@[host]-[region].aws.neon.tech:5432/[db-name]?sslmode=[ssl-mode]"
```

#### Applying changes to the database

You can generate migrations using `drizzle-kit generate` command and then run them using the `drizzle-kit migrate` command.

Generate migrations:

```bash copy
npx drizzle-kit generate
```

These migrations are stored in the `drizzle` directory, as specified in your `drizzle.config.ts`. This directory will contain the SQL files necessary to update your database schema and a `meta` folder for storing snapshots of the schema at different migration stages.

Example of a generated migration:

```sql
CREATE TABLE IF NOT EXISTS "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" text NOT NULL,
	"email" text NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
```

Run migrations:

```bash copy
npx drizzle-kit migrate
```

Alternatively, you can push changes directly to the database using [Drizzle kit push command](/docs/kit-overview#prototyping-with-db-push):

```bash copy
npx drizzle-kit push
```

<Callout type="warning">Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files.</Callout>

#### Connect Drizzle ORM to your database

Create a `index.ts` file in the `src/db` directory and set up your database configuration:

```typescript copy filename="src/db/index.ts"
import { drizzle } from "drizzle-orm/vercel-postgres";

export const db = drizzle();
```

#### Create an API route

Create `route.ts` in `src/app/api/hello` directory. To learn more about how to write a function, see the [Functions API Reference](https://vercel.com/docs/functions/functions-api-reference) and [Vercel Functions Quickstart](https://vercel.com/docs/functions/quickstart).

```ts copy filename="src/app/api/hello/route.ts"
import { db } from "@/db";
import { usersTable } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge"; // specify the runtime to be edge

export async function GET(request: Request) {
  const users = await db.select().from(usersTable);

  return NextResponse.json({ users, message: "success" });
}
```

#### Test your code locally

Run the `next dev` command to start your local development server:

```bash copy
npx next dev
```

Navigate to the route you created `(e.g. /api/hello)` in your browser:

```plaintext
{
  "users": [],
  "message": "success"
}
```

#### Deploy your project

Create a new project in the [dashboard](https://vercel.com/new) or run the `vercel` command to deploy your project:

```bash copy
vercel
```

Add `POSTGRES_URL` environment variable:

```bash copy
vercel env add POSTGRES_URL
```

Redeploy your project to update your environment variables:

```bash copy
vercel
```

</Steps>

Finally, you can use URL of the deployed project and navigate to the route you created `(e.g. /api/hello)` to access your edge function.

### PlanetScale

In this tutorial we use [PlanetScale MySQL](https://planetscale.com).

<Steps>
#### Install the `@planetscale/database` driver

Install the `@planetscale/database` driver:

<Npm>
@planetscale/database
</Npm>

#### Create a table

Create a `schema.ts` file in the `src/db` directory and declare a table schema:

```typescript copy filename="src/db/schema.ts"
import { mysqlTable, serial, text } from "drizzle-orm/mysql-core";

export const usersTable = mysqlTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: text("age").notNull(),
  email: text("email").notNull().unique(),
});
```

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.MYSQL_URL!,
  },
});
```

Configure your database connection string in the `.env` file:

```plaintext filename=".env"
MYSQL_URL="mysql://[user]:[password]@[host].[region].psdb.cloud/[db-name]?ssl={'rejectUnauthorized':[ssl-rejectUnauthorized]}"
```

#### Applying changes to the database

You can generate migrations using `drizzle-kit generate` command and then run them using the `drizzle-kit migrate` command.

Generate migrations:

```bash copy
npx drizzle-kit generate
```

These migrations are stored in the `drizzle` directory, as specified in your `drizzle.config.ts`. This directory will contain the SQL files necessary to update your database schema and a `meta` folder for storing snapshots of the schema at different migration stages.

Example of a generated migration:

```sql
CREATE TABLE `users_table` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` text NOT NULL,
	`age` text NOT NULL,
	`email` text NOT NULL,
	CONSTRAINT `users_table_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_table_email_unique` UNIQUE(`email`)
);
```

Run migrations:

```bash copy
npx drizzle-kit migrate
```

Alternatively, you can push changes directly to the database using [Drizzle kit push command](/docs/kit-overview#prototyping-with-db-push):

```bash copy
npx drizzle-kit push
```

<Callout type="warning">Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files.</Callout>

#### Connect Drizzle ORM to your database

Create a `index.ts` file in the `src/db` directory and set up your database configuration:

```typescript copy filename="src/db/index.ts"
import { drizzle } from "drizzle-orm/planetscale-serverless";

export const db = drizzle(process.env.MYSQL_URL!);
```

#### Create an API route

Create `route.ts` in `src/app/api/hello` directory. To learn more about how to write a function, see the [Functions API Reference](https://vercel.com/docs/functions/functions-api-reference) and [Vercel Functions Quickstart](https://vercel.com/docs/functions/quickstart).

```ts copy filename="src/app/api/hello/route.ts"
import { db } from "@/app/db/db";
import { usersTable } from "@/app/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge"; // specify the runtime to be edge

export async function GET(request: Request) {
  const users = await db.select().from(usersTable);

  return NextResponse.json({ users, message: "success" });
}
```

#### Test your code locally

Run the `next dev` command to start your local development server:

```bash copy
npx next dev
```

Navigate to the route you created `(e.g. /api/hello)` in your browser:

```plaintext
{
  "users": [],
  "message": "success"
}
```

#### Deploy your project

Create a new project in the [dashboard](https://vercel.com/new) or run the `vercel` command to deploy your project:

```bash copy
vercel
```

Add `MYSQL_URL` environment variable:

```bash copy
vercel env add MYSQL_URL
```

Redeploy your project to update your environment variables:

```bash copy
vercel
```

</Steps>

Finally, you can use URL of the deployed project and navigate to the route you created `(e.g. /api/hello)` to access your edge function.

### Turso

You can check [quickstart guide](/docs/get-started-sqlite#turso) or [tutorial](/docs/tutorials/drizzle-with-turso) for Drizzle with Turso in the documentation.

<Steps>
#### Install the `@libsql/client` driver

Install the `@libsql/client` driver:

<Npm>
@libsql/client
</Npm>

#### Create a table

Create a `schema.ts` file in the `src/db` directory and declare a table schema:

```typescript copy filename="src/db/schema.ts"
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  age: text("age").notNull(),
  email: text("email").notNull().unique(),
});
```

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
```

Configure your database connection string and auth token in the `.env` file:

```plaintext filename=".env"
TURSO_CONNECTION_URL="libsql://[db-name].turso.io"
TURSO_AUTH_TOKEN="[auth-token]"
```

#### Applying changes to the database

You can generate migrations using `drizzle-kit generate` command and then run them using the `drizzle-kit migrate` command.

Generate migrations:

```bash copy
npx drizzle-kit generate
```

These migrations are stored in the `drizzle` directory, as specified in your `drizzle.config.ts`. This directory will contain the SQL files necessary to update your database schema and a `meta` folder for storing snapshots of the schema at different migration stages.

Example of a generated migration:

```sql
CREATE TABLE `users_table` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`age` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_table_email_unique` ON `users_table` (`email`);
```

Run migrations:

```bash copy
npx drizzle-kit migrate
```

Alternatively, you can push changes directly to the database using [Drizzle kit push command](/docs/kit-overview#prototyping-with-db-push):

```bash copy
npx drizzle-kit push
```

<Callout type="warning">Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files.</Callout>

#### Connect Drizzle ORM to your database

Create a `index.ts` file in the `src/db` directory and set up your database configuration:

```typescript copy filename="src/db/index.ts"
import { drizzle } from "drizzle-orm/libsql";

export const db = drizzle({
  connection: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  },
});
```

#### Create an API route

Create `route.ts` in `src/app/api/hello` directory. To learn more about how to write a function, see the [Functions API Reference](https://vercel.com/docs/functions/functions-api-reference) and [Vercel Functions Quickstart](https://vercel.com/docs/functions/quickstart).

```ts copy filename="src/app/api/hello/route.ts"
import { db } from "@/app/db/db";
import { usersTable } from "@/app/db/schema";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // static by default, unless reading the request
export const runtime = "edge"; // specify the runtime to be edge

export async function GET(request: Request) {
  const users = await db.select().from(usersTable);

  return NextResponse.json({ users, message: "success" });
}
```

#### Test your code locally

Run the `next dev` command to start your local development server:

```bash copy
npx next dev
```

Navigate to the route you created `(e.g. /api/hello)` in your browser:

```plaintext
{
  "users": [],
  "message": "success"
}
```

#### Deploy your project

Create a new project in the [dashboard](https://vercel.com/new) or run the `vercel` command to deploy your project:

```bash copy
vercel
```

Add `TURSO_CONNECTION_URL` environment variable:

```bash copy
vercel env add TURSO_CONNECTION_URL
```

Add `TURSO_AUTH_TOKEN` environment variable:

```bash copy
vercel env add TURSO_AUTH_TOKEN
```

Redeploy your project to update your environment variables:

```bash copy
vercel
```

</Steps>

Finally, you can use URL of the deployed project and navigate to the route you created `(e.g. /api/hello)` to access your edge function.

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-neon

import Prerequisites from "@mdx/Prerequisites.astro";
import Npm from "@mdx/Npm.astro";
import Steps from "@mdx/Steps.astro";
import Section from "@mdx/Section.astro";
import Callout from "@mdx/Callout.astro";

This tutorial demonstrates how to use Drizzle ORM with [Neon Postgres](https://neon.tech/) database. If you do not have an existing Neon account, sign up [here](https://neon.tech).

<Prerequisites>  
  - You should have installed Drizzle ORM and [Drizzle kit](/docs/kit-overview). You can do this by running the following command:
  <Npm>
    drizzle-orm 
    -D drizzle-kit
  </Npm>

- You should also install the [Neon serverless driver](https://neon.tech/docs/serverless/serverless-driver). <Npm>
  @neondatabase/serverless

  </Npm>

- You should have installed the `dotenv` package for managing environment variables. <Npm>
  dotenv

  </Npm>

</Prerequisites>
