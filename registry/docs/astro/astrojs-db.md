# @astrojs/db

> Learn how to use the @astrojs/db integration in your Astro project.

Astro DB is a fully-managed SQL database designed for the Astro ecosystem: develop locally in Astro and deploy to any [libSQL-compatible database](/en/guides/astro-db/).

With Astro DB you have a powerful, local, type-safe tool to query and model content as a relational database.

See the [Astro DB guide](/en/guides/astro-db/) for full usage and examples.

## Installation

[Section titled “Installation”](#installation)

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can [install integrations manually](#manual-installation) instead.

Run one of the following commands in a new terminal window.

- npm

  ```sh
  npx astro add db
  ```

- pnpm

  ```sh
  pnpm astro add db
  ```

- Yarn

  ```sh
  yarn astro add db
  ```

#### Manual Installation

[Section titled “Manual Installation”](#manual-installation)

If you prefer to set things up from scratch yourself, skip `astro add` and follow these instructions to install Astro DB yourself.

##### 1. Install the integration from npm via a package manager

[Section titled “1. Install the integration from npm via a package manager”](#1-install-the-integration-from-npm-via-a-package-manager)

- npm

  ```shell
  npm install @astrojs/db
  ```

- pnpm

  ```shell
  pnpm add @astrojs/db
  ```

- Yarn

  ```shell
  yarn add @astrojs/db
  ```

##### 2. Add the integration to `astro.config.mjs`

[Section titled “2. Add the integration to astro.config.mjs”](#2-add-the-integration-to-astroconfigmjs)

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
+import db from '@astrojs/db';


export default defineConfig({
  integrations: [
   +db()
  ]
});
```

##### 3. Configure your database

[Section titled “3. Configure your database”](#3-configure-your-database)

Create a `db/config.ts` file at the root of your project. This is a special file that Astro will automatically load and use to configure your database tables.

db/config.ts

```ts
import { defineDb } from 'astro:db';


export default defineDb({
  tables: {},
})
```

## Configuration

[Section titled “Configuration”](#configuration)

### `mode`

[Section titled “mode”](#mode)

**Type:** `'node' | 'web'`\
**Default:** `'node'`

**Added in:** `@astrojs/db@0.18.0`

Configures the driver to use to connect to your database in production.

By default, Astro DB uses a Node.js-based libSQL driver for production deployments. The `node` driver mode is sufficient for most Astro hosted or self-hosted websites with Node.js runtimes. This allows you to connect to your database over several protocols, including `memory:`, `file:`, `ws:`, `wss:`, `libsql`, `http`, and `https`, as well as allowing for more advanced features such as [embedded replicas](/en/guides/astro-db/#syncurl).

When deploying to a serverless environment on a non-Node.js runtime, such as Cloudflare Workers or Deno, a web-based libSQL driver is available. When deploying using the `web` mode, you will be able to make web-based connections over `libsql`, `http`, or `https`.

To use the web libSQL driver mode for non-Node.js environments, set the `mode` property in your adapter’s configuration:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';


export default defineConfig({
  integrations: [
   db({
+     mode: 'web'
   })
  ]
});
```

## Table configuration reference

[Section titled “Table configuration reference”](#table-configuration-reference)

### `columns`

[Section titled “columns”](#columns)

**Type:** `ColumnsConfig`

Table columns are configured using the `columns` object:

```ts
import { defineTable, column, NOW } from 'astro:db';


const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    content: column.text({ optional: true }),
    published: column.date({ default: NOW }),
  },
});
```

Columns are configured using the `column` utility. `column` supports the following types:

- **`column.text(...)`** - store either plain or rich text content
- **`column.number(...)`** - store integer and floating point values
- **`column.boolean(...)`** - store true / false values
- **`column.date(...)`** - store `Date` objects, parsed as ISO strings for data storage
- **`column.json(...)`** - store arbitrary JSON blobs, parsed as stringified JSON for data storage

There are a few shared configuration values across all columns:

- `primaryKey` - Set a `number` or `text` column as the unique identifier.
- `optional` - Astro DB uses `NOT NULL` for all columns by default. Set `optional` to `true` to allow null values.
- `default` - Set the default value for newly inserted entries. This accepts either a static value or a string of `sql` for generated values like timestamps.
- `unique` - Mark a column as unique. This prevents duplicate values across entries in the table.
- `references` - Reference a related table by column. This establishes a foreign key constraint, meaning each column value must have a matching value in the referenced table.

A `text` column can optionally define a list of string literals to serve as an enum for generating types. However, **no runtime validation will be performed**. Removing, adding, and changing values should be handled in your project code.

db/config.ts

```ts
import { defineTable, column } from 'astro:db';


// Table definition
const UserTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    rank: column.text({ enum: ['user', 'mod', 'admin'] }),
  },
});


// Resulting type definition
type UserTableInferInsert = {
    id?: string;
    name: string;
    rank: "user" | "mod" | "admin";
}
```

### `indexes`

[Section titled “indexes”](#indexes)

**Type:** `{ on: string | string[]; unique?: boolean | undefined; name?: string | undefined; }[]`

Table indexes are used to improve lookup speeds on a given column or combination of columns. The `indexes` property accepts an array of configuration objects specifying the columns to index:

db/config.ts

```ts
import { defineTable, column } from 'astro:db';


const Comment = defineTable({
  columns: {
    authorId: column.number(),
    published: column.date(),
    body: column.text(),
  },
  indexes: [
    { on: ["authorId", "published"], unique: true },
  ]
});
```

This will generate a unique index on the `authorId` and `published` columns with the name `Comment_authorId_published_idx`.

The following configuration options are available for each index:

- `on` - A single column or array of column names to index.
- `unique` (optional) - Set to `true` to enforce unique values across the indexed columns.
- `name` (optional) - A custom name for the unique index. This will override Astro’s generated name based on the table and column names being indexed (e.g. `Comment_authorId_published_idx`). Custom names are global, so ensure index names do not conflict between tables.

### `foreignKeys`

[Section titled “foreignKeys”](#foreignkeys)

**Type:** `{ columns: string | string[]; references: () => Column | Column[]; }[]`

Tip

`foreignKeys` is an advanced API for relating multiple table columns. If you only need to reference a single column, try using [the column `references` property.](#columns)

Foreign keys are used to establish a relationship between two tables. The `foreignKeys` property accepts an array of configuration objects that may relate one or more columns between tables:

db/config.ts

```ts
import { defineTable, column } from 'astro:db';


const Author = defineTable({
  columns: {
    firstName: column.text(),
    lastName: column.text(),
  },
});


const Comment = defineTable({
  columns: {
    authorFirstName: column.text(),
    authorLastName: column.text(),
    body: column.text(),
  },
  foreignKeys: [
    {
      columns: ["authorFirstName", "authorLastName"],
      references: () => [Author.columns.firstName, Author.columns.lastName],
    },
  ],
});
```

Each foreign key configuration object accepts the following properties:

- `columns` - A single column or array of column names to relate to the referenced table.
- `references` - A function that returns a single column or an array of columns from the referenced table.

## Astro DB CLI reference

[Section titled “Astro DB CLI reference”](#astro-db-cli-reference)

Astro DB includes a set of CLI commands to interact with your local and libSQL-compatible database.

These commands are called automatically when using a GitHub CI action, and can be called manually using the `astro db` CLI.

### `astro db push`

[Section titled “astro db push”](#astro-db-push)

**Flags:**

- `--db-app-token <token>` Provide the remote database app token directly instead of `ASTRO_DB_APP_TOKEN`.
- `--dry-run` Print the generated SQL statements without applying them.
- `--force-reset` Reset all production data if a breaking schema change is required.
- `--remote` Push to your remote database instead of the local database file. Requires the `ASTRO_DB_REMOTE_URL` environment variable to be set, and either `ASTRO_DB_APP_TOKEN` to be set in the environment or a value passed with the `--db-app-token` command-line argument.

Safely push database configuration changes to your project database. This will check for any risk of data loss and guide you on any recommended migration steps. Use `--remote` to apply changes to your remote database. If a breaking schema change must be made, use `--force-reset` to reset all production data.

### `astro db verify`

[Section titled “astro db verify”](#astro-db-verify)

**Flags:**

- `--db-app-token <token>` Provide the remote database app token directly instead of `ASTRO_DB_APP_TOKEN`.
- `--json` Print a machine-readable JSON result from `verify`.
- `--remote` Compare against your remote database instead of the local database file. Requires the `ASTRO_DB_REMOTE_URL` environment variable to be set, and either `ASTRO_DB_APP_TOKEN` to be set in the environment or a value passed with the `--db-app-token` command-line argument.

Compares your local schema against the remote database to check for any differences between your local and remote database configurations. This is automatically run by `astro db push`.

`verify` will compare your local `db/config.ts` file with the remote database and warn if changes are detected. It will exit with a non-zero code if changes are required or unsafe, making it useful for CI.

### `astro db execute <file-path>`

[Section titled “astro db execute \<file-path>”](#astro-db-execute-file-path)

**Flags:**

- `--db-app-token <token>` Provide the remote database app token directly instead of `ASTRO_DB_APP_TOKEN`.
- `--remote` Run against your libSQL-compatible database. Omit to run against your local database file. Requires the `ASTRO_DB_REMOTE_URL` environment variable to be set, and either `ASTRO_DB_APP_TOKEN` to be set in the environment or a value passed with the `--db-app-token` command-line argument.

Execute a `.ts` or `.js` file to read or write to your database. This accepts a file path as an argument, and supports usage of the `astro:db` module to write type-safe queries. Use the `--remote` flag to run against your libSQL-compatible database, or omit the flag to run against your local database file. See how to [seed development data](/en/guides/astro-db/#seed-your-database-for-development) for an example file.

### `astro db shell --query <sql-string>`

[Section titled “astro db shell --query \<sql-string>”](#astro-db-shell---query-sql-string)

**Flags:**

- `--query` Raw SQL query to execute.
- `--remote` Run against your libSQL-compatible database. Omit to run against your local database file. Requires the `ASTRO_DB_REMOTE_URL` environment variable to be set, and either `ASTRO_DB_APP_TOKEN` to be set in the environment or a value passed with the `--db-app-token` command-line argument.

Execute a raw SQL query against your database.

The following example selects all rows from a `Comment` table in a remote database:

```sh
npx astro db shell --query "SELECT * FROM Comment;" --remote
```

## Astro DB utility reference

[Section titled “Astro DB utility reference”](#astro-db-utility-reference)

### `isDbError()`

[Section titled “isDbError()”](#isdberror)

**Type:** `(err: unknown) => boolean`

**Added in:** `@astrojs/db@0.9.1`

The `isDbError()` function checks if an error is a libSQL database exception. This may include a foreign key constraint error when using references, or missing fields when inserting data. You can combine `isDbError()` with a try / catch block to handle database errors in your application:

src/pages/api/comment/\[id].ts

```ts
import { db, Comment, isDbError } from 'astro:db';
import type { APIRoute } from 'astro';


export const POST: APIRoute = (ctx) => {
  try {
    await db.insert(Comment).values({
      id: ctx.params.id,
      content: 'Hello, world!'
    });
  } catch (e) {
    if (isDbError(e)) {
      return new Response(`Cannot insert comment with id ${id}\n\n${e.message}`, { status: 400 });
    }
    return new Response('An unexpected error occurred', { status: 500 });
  }


  return new Response(null, { status: 201 });
};
```

# @deno/astro-adapter

> The Deno Astro adapter

The Deno adapter allows Astro to deploy your SSR site to Deno targets including Deno Deploy.

The Deno adapter was previously maintained by Astro but now is maintained by Deno directly. Usage is now documented [in the Deno adapter repository](https://github.com/denoland/deno-astro-adapter).

If you are currently using this Astro adapter, you will need to migrate to the new Deno version or to [add another adapter](/en/guides/on-demand-rendering/) to continue using SSR in your project.

# Lit

> Using Lit to extend component support in your Astro project.

Deprecated

This Astro integration to enable on-demand rendering and client-side hydration for your [Lit](https://lit.dev/) custom elements was deprecated in Astro 5.0.

You can continue to use Lit for client components by adding a client-side script tag. For example:

```astro
<script>
  import "../components/MyTabs";
</script>


<my-tabs title="These are my tabs">...</my-tabs>
```

If you’re interested in maintaining a Lit integration yourself, you may wish to use the [last published version of `@astrojs/lit`](https://github.com/withastro/astro/tree/astro%404.13.0/packages/integrations/lit) as a starting point and upgrade the relevant packages.
