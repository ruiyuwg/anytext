## Setup Neon and Drizzle ORM

<Steps>
#### Create a new Neon project

Log in to the [Neon Console](https://console.neon.tech/app/projects) and navigate to the Projects section. Select a project or click the `New Project` button to create a new one.

Your Neon projects come with a ready-to-use Postgres database named `neondb`. We'll use it in this tutorial.

#### Setup connection string variable

Navigate to the **Connection Details** section in the project console to find your database connection string. It should look similar to this:

```bash
postgres://username:password@ep-cool-darkness-123456.us-east-2.aws.neon.tech/neondb
```

Add the `DATABASE_URL` environment variable to your `.env` or `.env.local` file, which you'll use to connect to the Neon database.

```bash
DATABASE_URL=NEON_DATABASE_CONNECTION_STRING
```

#### Connect Drizzle ORM to your database

Create a `drizzle.ts` file in your `src/db` folder and set up your database configuration:

```tsx copy filename="src/db/drizzle.ts"
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";

config({ path: ".env" }); // or .env.local

export const db = drizzle(process.env.DATABASE_URL!);
```

#### Declare todo schema

```tsx copy filename="src/db/schema.ts"
import { integer, text, boolean, pgTable } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: integer("id").primaryKey(),
  text: text("text").notNull(),
  done: boolean("done").default(false).notNull(),
});
```

Here we define the **`todo`** table with fields **`id`**, **`text`**, and **`done`**, using data types from Drizzle ORM.

#### Setup Drizzle config file

**Drizzle config** - a configuration file that is used by [Drizzle Kit](/docs/kit-overview) and contains all the information about your database connection, migration folder and schema files.

Create a `drizzle.config.ts` file in the root of your project and add the following content:

```typescript copy filename="drizzle.config.ts"
import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env" });

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
```

#### Applying changes to the database

You can generate migrations using `drizzle-kit generate` command and then run them using the `drizzle-kit migrate` command.

Generate migrations:

```bash
npx drizzle-kit generate
```

These migrations are stored in the `drizzle/migrations` directory, as specified in your `drizzle.config.ts`. This directory will contain the SQL files necessary to update your database schema and a `meta` folder for storing snapshots of the schema at different migration stages.

Example of a generated migration:

```sql
CREATE TABLE IF NOT EXISTS "todo" (
	"id" integer PRIMARY KEY NOT NULL,
	"text" text NOT NULL,
	"done" boolean DEFAULT false NOT NULL
);
```

Run migrations:

```bash
npx drizzle-kit migrate
```

Alternatively, you can push changes directly to the database using [Drizzle kit push command](/docs/kit-overview#prototyping-with-db-push):

```bash
npx drizzle-kit push
```

<Callout type="warning">Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files.</Callout> </Steps>

#### Establish server-side functions

In this step, we establish server-side functions in the **src/actions/todoAction.ts** file to handle crucial operations on todo items:

1. **`getData`:**
   - Fetches all existing todo items from the database.
2. **`addTodo`:**
   - Adds a new todo item to the database with the provided text.
   - Initiates revalidation of the home page using **`revalidatePath("/")`**.
3. **`deleteTodo`:**
   - Removes a todo item from the database based on its unique ID.
   - Triggers a revalidation of the home page.
4. **`toggleTodo`:**
   - Toggles the completion status of a todo item, updating the database accordingly.
   - Revalidates the home page after the operation.
5. **`editTodo`:**
   - Modifies the text of a todo item identified by its ID in the database.
   - Initiates a revalidation of the home page.

```tsx collapsable copy filename="src/actions/todoAction.ts"
"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { db } from "@/db/drizzle";
import { todo } from "@/db/schema";

export const getData = async () => {
  const data = await db.select().from(todo);
  return data;
};

export const addTodo = async (id: number, text: string) => {
  await db.insert(todo).values({
    id: id,
    text: text,
  });
};

export const deleteTodo = async (id: number) => {
  await db.delete(todo).where(eq(todo.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: number) => {
  await db
    .update(todo)
    .set({
      done: not(todo.done),
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};

export const editTodo = async (id: number, text: string) => {
  await db
    .update(todo)
    .set({
      text: text,
    })
    .where(eq(todo.id, id));

  revalidatePath("/");
};
```
