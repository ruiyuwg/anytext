# Database

::code-tree{expand-all default-value="server.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  experimental: {
    database: true,
    tasks: true,
  },
  database: {
    default: { connector: "sqlite" },
  },
});
```

```json [package.json]
{
  "type": "module",
  "scripts": {
    "dev": "nitro dev",
    "build": "nitro build"
  },
  "devDependencies": {
    "nitro": "latest"
  }
}
```

```ts [server.ts]
import { defineHandler } from "nitro";
import { useDatabase } from "nitro/database";

export default defineHandler(async () => {
  const db = useDatabase();

  // Create users table
  await db.sql`DROP TABLE IF EXISTS users`;
  await db.sql`CREATE TABLE IF NOT EXISTS users ("id" TEXT PRIMARY KEY, "firstName" TEXT, "lastName" TEXT, "email" TEXT)`;

  // Add a new user
  const userId = String(Math.round(Math.random() * 10_000));
  await db.sql`INSERT INTO users VALUES (${userId}, 'John', 'Doe', '')`;

  // Query for users
  const { rows } = await db.sql`SELECT * FROM users WHERE id = ${userId}`;

  return {
    rows,
  };
});
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig"
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

```ts [tasks/db/migrate.ts]
import { defineTask } from "nitro/task";
import { useDatabase } from "nitro/database";

export default defineTask({
  meta: {
    description: "Run database migrations",
  },
  async run() {
    const db = useDatabase();

    console.log("Running database migrations...");

    // Create users table
    await db.sql`DROP TABLE IF EXISTS users`;
    await db.sql`CREATE TABLE IF NOT EXISTS users ("id" TEXT PRIMARY KEY, "firstName" TEXT, "lastName" TEXT, "email" TEXT)`;

    return {
      result: "Database migrations complete!",
    };
  },
});
```

::

Nitro provides a built-in database layer that uses SQL template literals for safe, parameterized queries. This example creates a users table, inserts a record, and queries it back.

## Querying the Database

```ts [server.ts]
import { defineHandler } from "nitro";
import { useDatabase } from "nitro/database";

export default defineHandler(async () => {
  const db = useDatabase();

  // Create users table
  await db.sql`DROP TABLE IF EXISTS users`;
  await db.sql`CREATE TABLE IF NOT EXISTS users ("id" TEXT PRIMARY KEY, "firstName" TEXT, "lastName" TEXT, "email" TEXT)`;

  // Add a new user
  const userId = String(Math.round(Math.random() * 10_000));
  await db.sql`INSERT INTO users VALUES (${userId}, 'John', 'Doe', '')`;

  // Query for users
  const { rows } = await db.sql`SELECT * FROM users WHERE id = ${userId}`;

  return {
    rows,
  };
});
```

Retrieve the database instance using `useDatabase()`. The database can be queried using `db.sql`, and variables like `${userId}` are automatically escaped to prevent SQL injection.

## Running Migrations with Tasks

Nitro tasks let you run operations outside of request handlers. For database migrations, create a task file in `tasks/` and run it via the CLI. This keeps schema changes separate from your application code.

```ts [tasks/db/migrate.ts]
import { defineTask } from "nitro/task";
import { useDatabase } from "nitro/database";

export default defineTask({
  meta: {
    description: "Run database migrations",
  },
  async run() {
    const db = useDatabase();

    console.log("Running database migrations...");

    // Create users table
    await db.sql`DROP TABLE IF EXISTS users`;
    await db.sql`CREATE TABLE IF NOT EXISTS users ("id" TEXT PRIMARY KEY, "firstName" TEXT, "lastName" TEXT, "email" TEXT)`;

    return {
      result: "Database migrations complete!",
    };
  },
});
```

## Learn More

- [Database](https://nitro.build/docs/database)
- [Tasks](https://nitro.build/docs/tasks)

# Elysia

::code-tree{expand-all default-value="server.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({});
```

```json [package.json]
{
  "type": "module",
  "scripts": {
    "build": "nitro build",
    "dev": "nitro dev"
  },
  "devDependencies": {
    "elysia": "^1.4.28",
    "nitro": "latest"
  }
}
```

```ts [server.ts]
import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello, Elysia with Nitro!");

export default app.compile();
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig"
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

::

## Server Entry

```ts [server.ts]
import { Elysia } from "elysia";

const app = new Elysia();

app.get("/", () => "Hello, Elysia with Nitro!");

export default app.compile();
```

Nitro auto-detects `server.ts` in your project root and uses it as the server entry. The Elysia app handles all incoming requests, giving you full control over routing and middleware.

Call `app.compile()` before exporting to optimize the router for production.

## Learn More

- [Server Entry](https://nitro.build/docs/server-entry)
- [Elysia Documentation](https://elysiajs.com/){rel=""nofollow""}

# Express

::code-tree{expand-all default-value="server.node.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({});
```

```json [package.json]
{
  "type": "module",
  "scripts": {
    "build": "nitro build",
    "dev": "nitro dev"
  },
  "devDependencies": {
    "@types/express": "^5.0.6",
    "express": "^5.2.1",
    "nitro": "latest"
  }
}
```

```ts [server.node.ts]
import Express from "express";

const app = Express();

app.use("/", (_req, res) => {
  res.send("Hello from Express with Nitro!");
});

export default app;
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig"
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

::

## Server Entry

```ts [server.node.ts]
import Express from "express";

const app = Express();

app.use("/", (_req, res) => {
  res.send("Hello from Express with Nitro!");
});

export default app;
```

Nitro auto-detects `server.node.ts` in your project root and uses it as the server entry. The Express app handles all incoming requests, giving you full control over routing and middleware.

::note
The `.node.ts` suffix indicates this entry is Node.js specific and won't work in other runtimes like Cloudflare Workers or Deno.
::

## Learn More

- [Server Entry](https://nitro.build/docs/server-entry)
- [Express Documentation](https://expressjs.com/){rel=""nofollow""}

# Fastify

::code-tree{expand-all default-value="server.node.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({});
```

```json [package.json]
{
  "type": "module",
  "scripts": {
    "build": "nitro build",
    "dev": "nitro dev"
  },
  "devDependencies": {
    "fastify": "^5.8.2",
    "nitro": "latest"
  }
}
```

```ts [server.node.ts]
import Fastify from "fastify";

const app = Fastify();

app.get("/", () => "Hello, Fastify with Nitro!");

await app.ready();

export default app.routing;
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig"
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

::

## Server Entry

```ts [server.node.ts]
import Fastify from "fastify";

const app = Fastify();

app.get("/", () => "Hello, Fastify with Nitro!");

await app.ready();

export default app.routing;
```

Nitro auto-detects `server.node.ts` in your project root and uses it as the server entry.

Call `await app.ready()` to initialize all registered plugins before exporting. Export `app.routing` (not `app`) to provide Nitro with the request handler function.

::note
The `.node.ts` suffix indicates this entry is Node.js specific and won't work in other runtimes like Cloudflare Workers or Deno.
::

## Learn More

- [Server Entry](https://nitro.build/docs/server-entry)
- [Fastify Documentation](https://fastify.dev/){rel=""nofollow""}

# Hello World

::code-tree{expand-all default-value="server.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({});
```

```json [package.json]
{
  "type": "module",
  "scripts": {
    "build": "nitro build",
    "dev": "nitro dev",
    "preview": "node .output/server/index.mjs"
  },
  "devDependencies": {
    "nitro": "latest"
  }
}
```

```ts [server.ts]
export default {
  fetch(req: Request) {
    return new Response("Nitro Works!");
  },
};
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig"
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

::

The simplest Nitro server. Export an object with a `fetch` method that receives a standard `Request` and returns a `Response`. No frameworks, no abstractions, just the web platform.

## Server Entry

```ts [server.ts]
export default {
  fetch(req: Request) {
    return new Response("Nitro Works!");
  },
};
```

The `fetch` method follows the same signature as Service Workers and Cloudflare Workers. This pattern works across all deployment targets because it uses web standards.

Add the Nitro plugin to Vite and it handles the rest: dev server, hot reloading, and production builds.

## Learn More

- [Server Entry](https://nitro.build/docs/server-entry)
- [Configuration](https://nitro.build/docs/configuration)

# Hono

::code-tree{expand-all default-value="server.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({});
```

```json [package.json]
{
  "type": "module",
  "scripts": {
    "build": "nitro build",
    "dev": "nitro dev"
  },
  "devDependencies": {
    "hono": "^4.12.8",
    "nitro": "latest"
  }
}
```

```ts [server.ts]
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, Hono with Nitro!");
});

export default app;
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig"
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

::

## Server Entry

```ts [server.ts]
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello, Hono with Nitro!");
});

export default app;
```

Nitro auto-detects `server.ts` in your project root and uses it as the server entry. The Hono app handles all incoming requests, giving you full control over routing and middleware.

Hono is cross-runtime compatible, so this server entry works across all Nitro deployment targets including Node.js, Deno, Bun, and Cloudflare Workers.

## Learn More

- [Server Entry](https://nitro.build/docs/server-entry)
- [Hono Documentation](https://hono.dev/){rel=""nofollow""}
