# Windows

iwr https://encore.dev/install.ps1 | iex

````

- You should have installed Drizzle ORM and [Drizzle kit](/docs/kit-overview). You can do this by running the following command:
<Npm>
  drizzle-orm
  -D drizzle-kit
</Npm>
</Prerequisites>

## Setup Encore and Drizzle ORM

<Steps>
#### Create a new Encore project

You can create a new Encore project with Drizzle already configured:

```bash
encore app create my-app --example=ts/drizzle
cd my-app
````

Or if you have an existing Encore project, install Drizzle:

<Npm>
  drizzle-orm
  -D drizzle-kit
</Npm>

#### Create the database

Define your database in a `database.ts` file. Encore automatically provisions a PostgreSQL database locally using Docker and in the cloud when you deploy:

```typescript copy filename="database.ts"
import { SQLDatabase } from "encore.dev/storage/sqldb";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";

const db = new SQLDatabase("mydb", {
  migrations: {
    path: "migrations",
    source: "drizzle",
  },
});

export const orm = drizzle(db.connectionString, { schema });
```

Setting `source: "drizzle"` tells Encore to use Drizzle's migration format.

#### Define your schema

Create a `schema.ts` file to define your tables:

```typescript copy filename="schema.ts"
import * as p from "drizzle-orm/pg-core";

export const users = p.pgTable("users", {
  id: p.serial().primaryKey(),
  name: p.text().notNull(),
  email: p.text().unique().notNull(),
  createdAt: p.timestamp().defaultNow().notNull(),
});
```

#### Setup Drizzle config

Create a `drizzle.config.ts` file:

```typescript copy filename="drizzle.config.ts"
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "migrations",
  schema: "schema.ts",
  dialect: "postgresql",
});
```

#### Generate migrations

Run Drizzle Kit to generate migrations from your schema:

```bash
drizzle-kit generate
```

This creates migration files in the `migrations` folder.

#### Create an API endpoint

Use Drizzle in your Encore endpoints:

```typescript copy filename="users.ts"
import { api } from "encore.dev/api";
import { orm } from "./database";
import { users } from "./schema";
import { eq } from "drizzle-orm";

interface User {
  id: number;
  name: string;
  email: string;
}

export const list = api(
  { expose: true, method: "GET", path: "/users" },
  async (): Promise<{ users: User[] }> => {
    const result = await orm.select().from(users);
    return { users: result };
  },
);

export const create = api(
  { expose: true, method: "POST", path: "/users" },
  async (req: { name: string; email: string }): Promise => {
    const [user] = await orm
      .insert(users)
      .values({ name: req.name, email: req.email })
      .returning();
    return user;
  },
);
```

#### Run your application

Start your Encore app:

```bash
encore run
```

Encore automatically applies migrations when starting. Open [localhost:9400](http://localhost:9400) to see the local dashboard with API docs, database explorer, and tracing. </Steps>

<Callout type="info">
Migrations are automatically applied when you run your Encore application. You don't need to run `drizzle-kit migrate` manually.
</Callout>

## Learn more

- [Encore Documentation](https://encore.dev/docs)
- [Encore Drizzle Guide](https://encore.dev/docs/ts/develop/orms/drizzle)
- [Drizzle ORM Documentation](/docs/overview)

Source: https://orm.drizzle.team/docs/typebox-legacy

import Npm from '@mdx/Npm.astro';
import Callout from '@mdx/Callout.astro';

<Callout type="error">
Starting from `drizzle-orm@1.0.0-beta.15`, `drizzle-typebox` has been deprecated in favor of first-class schema generation support within Drizzle ORM itself

You can still use `drizzle-typebox` package but all new update will be added to Drizzle ORM directly

This version of `typebox` is legacy by using `@sinclair/typebox` package </Callout>
