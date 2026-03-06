# Transactions

SQL transaction is a grouping of one or more SQL statements that interact with a database.
A transaction in its entirety can commit to a database as a single logical unit
or rollback (become undone) as a single logical unit.

Drizzle ORM provides APIs to run SQL statements in transactions:

```ts copy
const db = drizzle(...)

await db.transaction(async (tx) => {
  await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
  await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));
});
```

Drizzle ORM supports `savepoints` with nested transactions API:

```ts copy {7-9}
const db = drizzle(...)

await db.transaction(async (tx) => {
  await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
  await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));

  await tx.transaction(async (tx2) => {
    await tx2.update(users).set({ name: "Mr. Dan" }).where(eq(users.name, "Dan"));
  });
});
```

You can embed business logic to the transaction and rollback whenever needed:

```ts copy {7}
const db = drizzle(...)

await db.transaction(async (tx) => {
  const [account] = await tx.select({ balance: accounts.balance }).from(accounts).where(eq(users.name, 'Dan'));
  if (account.balance < 100) {
    // This throws an exception that rollbacks the transaction.
    tx.rollback()
  }

  await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
  await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));
});
```

You can return values from the transaction:

```ts copy {8}
const db = drizzle(...)

const newBalance: number = await db.transaction(async (tx) => {
  await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, 'Dan'));
  await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, 'Andrew'));

  const [account] = await tx.select({ balance: accounts.balance }).from(accounts).where(eq(users.name, 'Dan'));
  return account.balance;
});
```

You can use transactions with **[relational queries](/docs/rqb)**:

```ts
const db = drizzle({ schema });

await db.transaction(async (tx) => {
  await tx.query.users.findMany({
    with: {
      accounts: true,
    },
  });
});
```

We provide dialect-specific transaction configuration APIs:

\<Tabs items={\["PostgreSQL", "MySQL", "SQLite", "SingleStore", "MSSQL", "CockroachDB"]}> <Tab>

```ts copy {6-8}
await db.transaction(
  async (tx) => {
    await tx
      .update(accounts)
      .set({ balance: sql`${accounts.balance} - 100.00` })
      .where(eq(users.name, "Dan"));
    await tx
      .update(accounts)
      .set({ balance: sql`${accounts.balance} + 100.00` })
      .where(eq(users.name, "Andrew"));
  },
  {
    isolationLevel: "read committed",
    accessMode: "read write",
    deferrable: true,
  },
);

interface PgTransactionConfig {
  isolationLevel?:
    | "read uncommitted"
    | "read committed"
    | "repeatable read"
    | "serializable";
  accessMode?: "read only" | "read write";
  deferrable?: boolean;
}
```

</Tab>
<Tab>
```ts {6-8}
await db.transaction(
  async (tx) => {
    await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
    await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
  }, {
    isolationLevel: "read committed",
    accessMode: "read write",
    withConsistentSnapshot: true,
  }
);

interface MySqlTransactionConfig {
isolationLevel?:
| "read uncommitted"
| "read committed"
| "repeatable read"
| "serializable";
accessMode?: "read only" | "read write";
withConsistentSnapshot?: boolean;
}

````
</Tab>
<Tab>
```ts {6}
await db.transaction(
  async (tx) => {
    await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
    await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
  }, {
    behavior: "deferred",
  }
);

interface SQLiteTransactionConfig {
    behavior?: 'deferred' | 'immediate' | 'exclusive';
}
````

</Tab>
<Tab>
```ts {6-8}
await db.transaction(
  async (tx) => {
    await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
    await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
  }, {
    isolationLevel: "read committed",
    accessMode: "read write",
    withConsistentSnapshot: true,
  }
);

interface SingleStoreTransactionConfig {
isolationLevel?:
| "read uncommitted"
| "read committed"
| "repeatable read"
| "serializable";
accessMode?: "read only" | "read write";
withConsistentSnapshot?: boolean;
}

````
</Tab>
<Tab>
```ts copy {6-8}
await db.transaction(
  async (tx) => {
    await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
    await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
  }, {
    isolationLevel: "read committed",
  }
);

interface MsSqlTransactionConfig {
  isolationLevel?: 'read uncommitted' | 'read committed' | 'repeatable read' | 'serializable' | 'snapshot';
}
````

</Tab>
<Tab>
```ts copy {6-8}
await db.transaction(
  async (tx) => {
    await tx.update(accounts).set({ balance: sql`${accounts.balance} - 100.00` }).where(eq(users.name, "Dan"));
    await tx.update(accounts).set({ balance: sql`${accounts.balance} + 100.00` }).where(eq(users.name, "Andrew"));
  }, {
    isolationLevel: "read committed",
    accessMode: "read write",
    deferrable: true,
  }
);

interface CockroachTransactionConfig {
isolationLevel?:
| "read uncommitted"
| "read committed"
| "repeatable read"
| "serializable";
accessMode?: "read only" | "read write";
deferrable?: boolean;
}

````
</Tab>
</Tabs>



Source: https://orm.drizzle.team/docs/tutorials

import Tutorials from "@components/Tutorials.astro";

<Tutorials/>

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-neon


import Prerequisites from "@mdx/Prerequisites.astro";
import Npm from '@mdx/Npm.astro';
import Steps from '@mdx/Steps.astro';
import Section from "@mdx/Section.astro";
import Callout from "@mdx/Callout.astro";

This tutorial demonstrates how to use Drizzle ORM with [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/) and [Neon Postgres](https://neon.tech/) database.

<Prerequisites>
- You should have the latest version of [Netlify CLI](https://docs.netlify.com/cli/get-started/#installation) installed.
- You should have installed Drizzle ORM and [Drizzle kit](/docs/kit-overview). You can do this by running the following command:
<Npm>
drizzle-orm
-D drizzle-kit
</Npm>

- You should have installed the `dotenv` package for managing environment variables. If you use Node.js `v20.6.0` or later, there is no need to install it because Node.js natively supports `.env` files. Read more about it [here](https://nodejs.org/en/blog/release/v20.6.0#built-in-env-file-support).
<Npm>
  dotenv
</Npm>

- Optionally, you can install the `@netlify/edge-functions` package to import the types for the `Context` object which will be used later.
<Npm>
  @netlify/edge-functions
</Npm>
</Prerequisites>

<Callout type="warning">
These installed packages are used only to create table in the database in [Create a table](#create-a-table), [Setup Drizzle config file](#setup-drizzle-config-file) and [Apply changes to the database](#apply-changes-to-the-database) steps. These packages do not affect the code running inside Netlify Edge Functions. We will use `import_map.json` to import the necessary packages for the Edge Functions.
</Callout>

<Steps>
#### Setup Neon Postgres

Log in to the [Neon Console](https://console.neon.tech/app/projects) and navigate to the Projects section. Select a project or click the `New Project` button to create a new one.

Your Neon projects come with a ready-to-use Postgres database named `neondb`. We'll use it in this tutorial.

#### Setup connection string variable

In **Project Dashboard** section click the `Connect` button and copy your database connection string. It should look similar to this:

```bash
postgres://username:password@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb?sslmode=require
````

Add the `DATABASE_URL` environment variable to your `.env` file, which you'll use to connect to the Neon database.

```text copy
DATABASE_URL=NEON_DATABASE_CONNECTION_STRING
```

#### Setup Netlify Edge Functions

Create `netlify/edge-functions` directory in the root of your project. This is where you'll store your Edge Functions.

Create a function `user.ts` in the `netlify/edge-functions` directory.

```typescript copy filename="netlify/edge-functions/user.ts"
import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new Response("User data");
};
```

<Callout type="warning">
The types for the `Request` and `Response` objects are in the global scope.
</Callout>

#### Setup imports

Create a `import_map.json` file in the root of your project and add the following content:

```json copy filename="import_map.json"
{
  "imports": {
    "drizzle-orm/": "https://esm.sh/drizzle-orm/",
    "@neondatabase/serverless": "https://esm.sh/@neondatabase/serverless"
  }
}
```

Read more about `import_map.json` in Netlify Edge Functions [here](https://docs.netlify.com/edge-functions/api/#import-maps).

#### Create a Netlify configuration file

Create a `netlify.toml` file in the root of your project and add the following content:

```toml copy filename="netlify.toml"
[functions]
  deno_import_map = "./import_map.json"

[[edge_functions]]
  path = "/user"
  function = "user"
```

This configuration tells Netlify to use the `import_map.json` file for Deno imports and to route requests to the `/user` path to the `user.ts` function.
Read more about `netlify.toml` [here](https://docs.netlify.com/configure-builds/file-based-configuration/).

#### Create a table

Create a `schema.ts` file in the `netlify/edge-functions/common` directory and declare a table schema:

```typescript copy filename="netlify/edge-functions/common/schema.ts"
import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  email: text("email").notNull().unique(),
});
```

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import "dotenv/config"; // remove this line if you use Node.js v20.6.0 or later
import type { Config } from "drizzle-kit";

export default {
  schema: "./netlify/edge-functions/common/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

In this tutorial we will use Drizzle kit to push changes to the Neon database.

#### Apply changes to the database

```bash copy
npx drizzle-kit push
```

<Callout type="warning">Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files.</Callout>

Alternatively, you can use migrations workflow. Read about it here: [Migrations](/docs/migrations).

#### Connect Drizzle ORM to your database

Update your `netlify/edge-functions/user.ts` file and set up your database configuration:

```typescript copy filename="netlify/edge-functions/user.ts"
import type { Context } from "@netlify/edge-functions";
import { usersTable } from "./common/schema.ts";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

export default async (request: Request, context: Context) => {
  const sql = neon(Netlify.env.get("DATABASE_URL")!);
  const db = drizzle({ client: sql });

  const users = await db.select().from(usersTable);

  return new Response(JSON.stringify(users));
};
```

<Callout type="warning">
You might see a red underline under the imports if you're using VS Code. The Edge Function will still execute. To get rid of the red underline, you can configure VS Code to use Edge Functions in the next step.
</Callout>

#### Test your code locally

Run the following command to start the Netlify dev server:

```bash copy
netlify dev
```

When you first run the command it will suggest to configure VS Code to use Edge Functions. Click `Yes` to configure it. `settings.json` file will be created in the `.vscode` directory.
If you still see red underlines, you can restart the Deno Language Server.

Open your browser and navigate to the route `/user`. You should see the user data returned from the Neon database:

```plaintext
[]
```

It could be an empty array if you haven't added any data to the `users_table` table.

#### Initialize a new Netlify project

Run the following command to initialize a new Netlify project:

```bash copy
netlify init
```

Answer the questions in the CLI to create a new Netlify project. In this tutorial, we will choose `Yes, create and deploy site manually` -> `<YOUR_TEAM>` -> `<SITE_NAME>`.

#### Setup Netlify environment variables

Run the following command to import your environment variables into Netlify:

```bash copy
netlify env:import .env
```

Read more about Netlify environment variables [here](https://docs.netlify.com/environment-variables/get-started/).

#### Deploy your project

Run the following command to deploy your project:

```bash copy
netlify deploy
```

Follow the instructions in the CLI to deploy your project to Netlify. In this tutorial our publish directory is `'.'`.

It is a [draft deployment](https://docs.netlify.com/cli/get-started/#draft-deploys) by default.
To do a production deployment, run the following command:

```bash copy
netlify deploy --prod
```

</Steps>

Finally, you can use URL of the deployed website and navigate to the route you created `(e.g. /user)` to access your edge function.

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-netlify-edge-functions-supabase

import Prerequisites from "@mdx/Prerequisites.astro";
import Npm from '@mdx/Npm.astro';
import Steps from '@mdx/Steps.astro';
import Section from "@mdx/Section.astro";
import Callout from "@mdx/Callout.astro";

This tutorial demonstrates how to use Drizzle ORM with [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/) and [Supabase Database](https://supabase.com/docs/guides/database/overview) database.

<Prerequisites>
- You should have the latest version of [Netlify CLI](https://docs.netlify.com/cli/get-started/#installation) installed.
- You should have installed Drizzle ORM and [Drizzle kit](/docs/kit-overview). You can do this by running the following command:
<Npm>
drizzle-orm
-D drizzle-kit
</Npm>

- You should have installed the `dotenv` package for managing environment variables. If you use Node.js `v20.6.0` or later, there is no need to install it because Node.js natively supports `.env` files. Read more about it [here](https://nodejs.org/en/blog/release/v20.6.0#built-in-env-file-support). <Npm>
  dotenv

</Npm>

- Optionally, you can install the `@netlify/edge-functions` package to import the types for the `Context` object which will be used later. <Npm>
  @netlify/edge-functions

</Npm>
</Prerequisites>

<Callout type="warning">
These installed packages are used only to create table in the database in [Create a table](#create-a-table), [Setup Drizzle config file](#setup-drizzle-config-file) and [Apply changes to the database](#apply-changes-to-the-database) steps. These packages do not affect the code running inside Netlify Edge Functions. We will use `import_map.json` to import the necessary packages for the Edge Functions.
</Callout>

<Steps>
#### Create a new Supabase project

You can create new Supabase project in the [dashboard](https://supabase.com/dashboard) or by following this [link](https://database.new/).

#### Setup connection string variable

You can find `Project connect details` by clicking **Connect** in the top bar of the dashboard and copy the URI from the `Transaction pooler` section. Remember to replace the password placeholder with your actual database password.

Add `DATABASE_URL` variable to your `.env` file.

```plaintext copy
DATABASE_URL=<YOUR_DATABASE_URL>
```

Read more about connecting to Supabase Database in the [documentation](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler).

#### Setup Netlify Edge Functions

Create `netlify/edge-functions` directory in the root of your project. This is where you'll store your Edge Functions.

Create a function `user.ts` in the `netlify/edge-functions` directory.

```typescript copy filename="netlify/edge-functions/user.ts"
import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  return new Response("User data");
};
```

<Callout type="warning">
The types for the `Request` and `Response` objects are in the global scope.
</Callout>

#### Setup imports

Create a `import_map.json` file in the root of your project and add the following content:

```json copy filename="import_map.json"
{
  "imports": {
    "drizzle-orm/": "https://esm.sh/drizzle-orm/",
    "postgres": "https://esm.sh/postgres"
  }
}
```

Read more about `import_map.json` in Netlify Edge Functions [here](https://docs.netlify.com/edge-functions/api/#import-maps).

#### Create a Netlify configuration file

Create a `netlify.toml` file in the root of your project and add the following content:

```toml copy filename="netlify.toml"
[functions]
  deno_import_map = "./import_map.json"

[[edge_functions]]
  path = "/user"
  function = "user"
```

This configuration tells Netlify to use the `import_map.json` file for Deno imports and to route requests to the `/user` path to the `user.ts` function.
Read more about `netlify.toml` [here](https://docs.netlify.com/configure-builds/file-based-configuration/).

#### Create a table

Create a `schema.ts` file in the `netlify/edge-functions/common` directory and declare a table schema:

```typescript copy filename="netlify/edge-functions/common/schema.ts"
import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
  email: text("email").notNull().unique(),
});
```

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import "dotenv/config"; // remove this line if you use Node.js v20.6.0 or later
import type { Config } from "drizzle-kit";

export default {
  schema: "./netlify/edge-functions/common/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

In this tutorial we will use Drizzle kit to push changes to the Neon database.

#### Apply changes to the database

```bash copy
npx drizzle-kit push
```

<Callout type="warning">Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files.</Callout>

Alternatively, you can use migrations workflow. Read about it here: [Migrations](/docs/migrations).

#### Connect Drizzle ORM to your database

Update your `netlify/edge-functions/user.ts` file and set up your database configuration:

```typescript copy filename="netlify/edge-functions/user.ts"
import type { Context } from "@netlify/edge-functions";
import { usersTable } from "./common/schema.ts";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export default async (request: Request, context: Context) => {
  const queryClient = postgres(Netlify.env.get("DATABASE_URL")!);
  const db = drizzle({ client: queryClient });

  const users = await db.select().from(usersTable);

  return new Response(JSON.stringify(users));
};
```

<Callout type="warning">
You might see a red underline under the imports if you're using VS Code. The Edge Function will still execute. To get rid of the red underline, you can configure VS Code to use Edge Functions in the next step.
</Callout>

#### Test your code locally

Run the following command to start the Netlify dev server:

```bash copy
netlify dev
```

When you first run the command it will suggest to configure VS Code to use Edge Functions. Click `Yes` to configure it. `settings.json` file will be created in the `.vscode` directory.
If you still see red underlines, you can restart the Deno Language Server.

Open your browser and navigate to the route `/user`. You should see the user data returned from the Neon database:

```plaintext
[]
```

It could be an empty array if you haven't added any data to the `users_table` table.

#### Initialize a new Netlify project

Run the following command to initialize a new Netlify project:

```bash copy
netlify init
```

Answer the questions in the CLI to create a new Netlify project. In this tutorial, we will choose `Yes, create and deploy site manually` -> `<YOUR_TEAM>` -> `<SITE_NAME>`.

#### Setup Netlify environment variables

Run the following command to import your environment variables into Netlify:

```bash copy
netlify env:import .env
```

Read more about Netlify environment variables [here](https://docs.netlify.com/environment-variables/get-started/).

#### Deploy your project

Run the following command to deploy your project:

```bash copy
netlify deploy
```

Follow the instructions in the CLI to deploy your project to Netlify. In this tutorial our publish directory is `'.'`.

It is a [draft deployment](https://docs.netlify.com/cli/get-started/#draft-deploys) by default.
To do a production deployment, run the following command:

```bash copy
netlify deploy --prod
```

</Steps>

Finally, you can use URL of the deployed website and navigate to the route you created `(e.g. /user)` to access your edge function.

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-supabase-edge-functions

import Prerequisites from "@mdx/Prerequisites.astro";
import Npm from '@mdx/Npm.astro';
import Steps from '@mdx/Steps.astro';
import Section from "@mdx/Section.astro";
import Callout from '@mdx/Callout.astro';

This tutorial demonstrates how to use Drizzle ORM with [Supabase Edge Functions](https://supabase.com/docs/guides/functions).

<Prerequisites>
- You should have the latest version of [Supabase CLI](https://supabase.com/docs/guides/cli/getting-started#installing-the-supabase-cli) installed.
- You should have installed Drizzle ORM and [Drizzle kit](https://orm.drizzle.team/kit-docs/overview). You can do this by running the following command:
<Npm>
drizzle-orm
-D drizzle-kit
</Npm>
- You should have installed Docker Desktop. It is a prerequisite for local development. Follow the official [docs](https://docs.docker.com/desktop) to install.
</Prerequisites>

To learn how to create a basic Edge Function on your local machine and then deploy it, see the [Edge Functions Quickstart](https://supabase.com/docs/guides/functions/quickstart).

<Steps>
#### Create a table

Create a `schema.ts` file in your `src` directory and declare a table schema:

```typescript copy filename="src/schema.ts"
import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
});
```

This file will be used to generate migrations for your database.

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](https://orm.drizzle.team/kit-docs/overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./supabase/migrations",
  dialect: "postgresql",
});
```

In this tutorial we will use Drizzle kit to generate migrations for our schema.

#### Initialize a new Supabase project

Create a new Supabase project in a folder on your local machine:

```bash copy
supabase init
```

It will create `supabase` folder with `config.toml` file:

```text
└── supabase
    └── config.toml
```

If you are using Visual Studio Code, follow the [Supabase documentation](https://supabase.com/docs/guides/functions/local-development#deno-with-visual-studio-code) to setup settings for Deno.

#### Generate migrations

Run the `drizzle-kit generate` command to generate migrations:

```bash copy
npx drizzle-kit generate
```

It will create a new migration file in the `supabase/migrations` directory:

#### Apply migrations

To start the Supabase local development stack, run the following command:

```bash copy
supabase start
```

To apply migrations, run the following command:

```bash copy
supabase migration up
```

You can read more about Supabase migrations in the [documentation](https://supabase.com/docs/guides/deployment/database-migrations).

<Callout type="warning">Don't forget to run Docker</Callout>

Alternatively, you can apply migrations using the `drizzle-kit migrate` command. Learn more about this migration process in the [documentation](https://orm.drizzle.team/docs/migrations).

#### Create a new Edge Function

Run the `supabase functions new [FUNCTION_NAME]` command to create a new Edge Function:

```bash copy
supabase functions new drizzle-tutorial
```

It will create a new folder with the function name in the `supabase/functions` directory:

```text
└── supabase
    └── functions
    │   └── drizzle-tutorial
    │   │   ├── .npmrc ## Function-specific npm configuration (if needed)
    │   │   ├── deno.json ## Function-specific Deno configuration
    │   │   └── index.ts ## Your function code
```

When you create a new Edge Function, it will use TypeScript by default. However, it is possible write Edge Function in JavaScript. Learn more about it in the [documentation](https://supabase.com/docs/guides/functions/quickstart#not-using-typescript).

#### Setup imports

Add the following imports to the `deno.json` file in the `supabase/functions/drizzle-tutorial` directory:

```json copy filename="supabase/functions/drizzle-tutorial/deno.json"
{
  "imports": {
    "drizzle-orm/": "npm:/drizzle-orm/",
    "postgres": "npm:postgres"
  }
}
```

You can read more about managing dependencies [here](https://supabase.com/docs/guides/functions/dependencies#managing-dependencies).

#### Copy your schema to the functions directory

Copy the code that you will use in your edge function from `src/schema.ts` file to the `supabase/functions/drizzle-tutorial/index.ts` file:

```typescript copy filename="supabase/functions/drizzle-tutorial/index.ts"
// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
});

Deno.serve(async (req) => {
  const { name } = await req.json();
  const data = {
    message: `Hello ${name}!`,
  };

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
});
```

<Callout type="warning">
In the Deno ecosystem, each function should be treated as an independent project with its own set of dependencies and configurations.
For these reasons, Supabase recommend maintaining separate configuration files (`deno.json`, `.npmrc`, or `import_map.json`) within each function's directory, even if it means duplicating some configurations. Read more [here](https://supabase.com/docs/guides/functions/dependencies#managing-dependencies).
</Callout>

#### Connect Drizzle ORM to your database

Update your edge function code with your database configuration:

```typescript copy filename="supabase/functions/drizzle-tutorial/index.ts" {14,17,18}
// Setup type definitions for built-in Supabase Runtime APIs
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/postgres-js";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import postgres from "postgres";

const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  age: integer("age").notNull(),
});

Deno.serve(async () => {
  const connectionString = Deno.env.get("SUPABASE_DB_URL")!;

  // Disable prefetch as it is not supported for "Transaction" pool mode
  const client = postgres(connectionString, { prepare: false });
  const db = drizzle({ client });

  await db.insert(usersTable).values({
    name: "Alice",
    age: 25,
  });
  const data = await db.select().from(usersTable);

  return new Response(JSON.stringify(data));
});
```

`SUPABASE_DB_URL` is default environment variable for the direct database connection. Learn more about managing environment variables in Supabase Edge Functions in the [documentation](https://supabase.com/docs/guides/functions/secrets).

#### Test your code locally

Run the following command to test your function locally:

```bash copy
supabase functions serve --no-verify-jwt
```

Navigate to the route `(e.g. /drizzle-tutorial)` in your browser:

```plaintext
[
  {
    "id": 1,
    "name": "Alice",
    "age": 25
  }
]
```

#### Link your local project to a hosted Supabase project

You can create new Supabase project in the [dashboard](https://supabase.com/dashboard) or by following this [link](https://database.new/).

Copy the `Reference ID` from project settings and use it to link your local development project to a hosted Supabase project by running the following command:

```bash copy
supabase link --project-ref=<REFERENCE_ID>
```

Push your schema changes to the hosted Supabase project by running the following command:

```bash copy
supabase db push
```

#### Setup environment variables

You can find `Project connect details` by clicking **Connect** in the top bar of the dashboard and copy the URI from the `Transaction pooler` section. Remember to replace the password placeholder with your actual database password.

Read more about Connection Pooler in the [documentation](https://supabase.com/docs/guides/database/connecting-to-postgres#connection-pooler).

Update your edge function code to use the `DATABASE_URL` environment variable instead of `SUPABASE_DB_URL`:

```typescript copy filename="supabase/functions/drizzle-tutorial/index.ts"
// imports

// const connectionString = Deno.env.get("SUPABASE_DB_URL")!;
const connectionString = Deno.env.get("DATABASE_URL")!;

// code
```

Run the following command to set the environment variable:

```bash copy
supabase secrets set DATABASE_URL=<CONNECTION_STRING>
```

Learn more about managing environment variables in Supabase Edge Functions in the [documentation](https://supabase.com/docs/guides/functions/secrets).

#### Deploy your function

Deploy your function by running the following command:

```bash copy
supabase functions deploy drizzle-tutorial --no-verify-jwt
```

</Steps>

Finally, you can use URL of the deployed project and navigate to the route you created `(e.g. /drizzle-tutorial)` to access your edge function.

Source: https://orm.drizzle.team/docs/tutorials/drizzle-with-vercel-edge-functions

import Prerequisites from "@mdx/Prerequisites.astro";
import Npm from '@mdx/Npm.astro';
import Steps from '@mdx/Steps.astro';
import Section from "@mdx/Section.astro";
import Callout from "@mdx/Callout.astro";

This tutorial demonstrates how to use Drizzle ORM with [Vercel Functions](https://vercel.com/docs/functions) in [Edge runtime](https://vercel.com/docs/functions/runtimes/edge-runtime).

<Prerequisites>
- You should have the latest version of [Vercel CLI](https://vercel.com/docs/cli#) installed.
<Npm>
-g vercel
</Npm>

- You should have an existing Next.js project or create a new one using the following command:

```bash copy
npx create-next-app@latest --typescript
```

- You should have installed Drizzle ORM and [Drizzle kit](/docs/kit-overview). You can do this by running the following command: <Npm>

drizzle-orm
-D drizzle-kit </Npm> </Prerequisites>

<Callout type="warning">
In case you face the issue with resolving dependencies during installation:

If you're not using React Native, forcing the installation with `--force` or `--legacy-peer-deps` should resolve the issue. If you are using React Native, then you need to use the exact version of React which is compatible with your React Native version. </Callout>

## Edge-compatible driver

When using Drizzle ORM with Vercel Edge functions you have to use edge-compatible drivers because the functions run in [Edge runtime](https://vercel.com/docs/functions/runtimes/edge-runtime) not in Node.js runtime, so there are some limitations of standard Node.js APIs.

You can choose one of these drivers according to your database dialect:

- [Neon serverless driver](/docs/get-started-postgresql#neon) allows you to query your Neon Postgres databases from serverless and edge environments over HTTP or WebSockets in place of TCP. We recommend using this driver for connecting to `Neon Postgres`.
- [Vercel Postgres driver](/docs/get-started-postgresql#vercel-postgres) is built on top of the `Neon serverless driver`. We recommend using this driver for connecting to `Vercel Postgres`.
- [PlanetScale serverless driver](/docs/get-started-mysql#planetscale) allows you access any `MySQL` client and execute queries over an HTTP connection, which is generally not blocked by cloud providers.
- [libSQL client](/docs/get-started-sqlite#turso) allows you to access [Turso](https://docs.turso.tech/introduction) database.
