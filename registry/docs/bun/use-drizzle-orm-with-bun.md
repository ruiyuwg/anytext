# Use Drizzle ORM with Bun

Source: https://bun.com/docs/guides/ecosystem/drizzle

Drizzle is an ORM that supports both a SQL-like "query builder" API and an ORM-like [Queries API](https://orm.drizzle.team/docs/rqb). It supports the `bun:sqlite` built-in module.

***

Let's get started by creating a fresh project with `bun init` and installing Drizzle.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun init -y
bun add drizzle-orm
bun add -D drizzle-kit
```

***

Then we'll connect to a SQLite database using the `bun:sqlite` module and create the Drizzle database instance.

```ts db.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database("sqlite.db");
export const db = drizzle(sqlite);
```

***

To see the database in action, add these lines to `index.ts`.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { db } from "./db";
import { sql } from "drizzle-orm";

const query = sql`select "hello world" as text`;
const result = db.get<{ text: string }>(query);
console.log(result);
```

***

Then run `index.ts` with Bun. Bun will automatically create `sqlite.db` and execute the query.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run index.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
{
  text: "hello world"
}
```

***

Lets give our database a proper schema. Create a `schema.ts` file and define a `movies` table.

```ts schema.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const movies = sqliteTable("movies", {
  id: integer("id").primaryKey(),
  title: text("name"),
  releaseYear: integer("release_year"),
});
```

***

We can use the `drizzle-kit` CLI to generate an initial SQL migration.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bunx drizzle-kit generate --dialect sqlite --schema ./schema.ts
```

***

This creates a new `drizzle` directory containing a `.sql` migration file and `meta` directory.

```txt File Tree icon="folder-tree" theme={"theme":{"light":"github-light","dark":"dracula"}}
drizzle
├── 0000_ordinary_beyonder.sql
└── meta
    ├── 0000_snapshot.json
    └── _journal.json
```

***

We can execute these migrations with a simple `migrate.ts` script.

This script creates a new connection to a SQLite database that writes to `sqlite.db`, then executes all unexecuted migrations in the `drizzle` directory.

```ts migrate.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);
migrate(db, { migrationsFolder: "./drizzle" });
```

***

We can run this script with `bun` to execute the migration.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run migrate.ts
```

***

Now that we have a database, let's add some data to it. Create a `seed.ts` file with the following contents.

```ts seed.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { db } from "./db";
import * as schema from "./schema";

await db.insert(schema.movies).values([
  {
    title: "The Matrix",
    releaseYear: 1999,
  },
  {
    title: "The Matrix Reloaded",
    releaseYear: 2003,
  },
  {
    title: "The Matrix Revolutions",
    releaseYear: 2003,
  },
]);

console.log(`Seeding complete.`);
```

***

Then run this file.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run seed.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
Seeding complete.
```

***

We finally have a database with a schema and some sample data. Let's use Drizzle to query it. Replace the contents of `index.ts` with the following.

```ts index.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import * as schema from "./schema";
import { db } from "./db";

const result = await db.select().from(schema.movies);
console.log(result);
```

***

Then run the file. You should see the three movies we inserted.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun run index.ts
```

```txt theme={"theme":{"light":"github-light","dark":"dracula"}}
[
  {
    id: 1,
    title: "The Matrix",
    releaseYear: 1999
  }, {
    id: 2,
    title: "The Matrix Reloaded",
    releaseYear: 2003
  }, {
    id: 3,
    title: "The Matrix Revolutions",
    releaseYear: 2003
  }
]
```

***

Refer to the [Drizzle website](https://orm.drizzle.team/docs/overview) for complete documentation.

# Build an HTTP server using Elysia and Bun

Source: https://bun.com/docs/guides/ecosystem/elysia

[Elysia](https://elysiajs.com) is a Bun-first performance focused web framework that takes full advantage of Bun's HTTP, file system, and hot reloading APIs. Get started with `bun create`.

```bash terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun create elysia myapp
cd myapp
bun run dev
```

***

To define a simple HTTP route and start a server with Elysia:

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia").listen(8080);

console.log(`🦊 Elysia is running at on port ${app.server?.port}...`);
```

***

Elysia is a full-featured server framework with Express-like syntax, type inference, middleware, file uploads, and plugins for JWT authentication, tRPC, and more. It's also is one of the [fastest Bun web frameworks](https://github.com/SaltyAom/bun-http-framework-benchmark).

Refer to the Elysia [documentation](https://elysiajs.com/quick-start.html) for more information.

# Build an HTTP server using Express and Bun

Source: https://bun.com/docs/guides/ecosystem/express

Express and other major Node.js HTTP libraries should work out of the box. Bun implements the [`node:http`](https://nodejs.org/api/http.html) and [`node:https`](https://nodejs.org/api/https.html) modules that these libraries rely on.

Refer to the [Runtime > Node.js APIs](/runtime/nodejs-compat#node-http) page for more detailed compatibility
information.

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun add express
```

***

To define a simple HTTP route and start a server with Express:

```ts server.ts icon="https://mintcdn.com/bun-1dd33a4e/nIz6GtMH5K-dfXeV/icons/typescript.svg?fit=max&auto=format&n=nIz6GtMH5K-dfXeV&q=85&s=5d73d76daf7eb7b158469d8c30d349b0" theme={"theme":{"light":"github-light","dark":"dracula"}}
import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
```

***

To start the server on `localhost`:

```sh terminal icon="terminal" theme={"theme":{"light":"github-light","dark":"dracula"}}
bun server.ts
```
