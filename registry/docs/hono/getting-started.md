# Hono — Getting Started

## Installation

```bash
# Create a new project
npm create hono@latest my-app

# Or add to an existing project
npm install hono
```

## Basic Application

```typescript
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
```

## Runtime Adapters

Hono runs on multiple runtimes. The default export works with Cloudflare Workers, Deno, and Bun. For Node.js, use the Node adapter:

```typescript
import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello from Node.js!"));

serve(app, (info) => {
  console.log(`Listening on http://localhost:${info.port}`);
});
```

### Supported Runtimes

| Runtime | Adapter |
|---|---|
| Cloudflare Workers | `export default app` (no adapter needed) |
| Deno | `Deno.serve(app.fetch)` |
| Bun | `export default app` (no adapter needed) |
| Node.js | `@hono/node-server` |
| AWS Lambda | `@hono/aws-lambda` |
| Vercel | `@hono/vercel` |

## Project Structure

A typical Hono project:

```
my-app/
├── src/
│   └── index.ts       # App entry point
├── package.json
├── tsconfig.json
└── wrangler.toml      # If using Cloudflare Workers
```

## Returning Responses

```typescript
// Plain text
app.get("/text", (c) => c.text("Hello"));

// JSON
app.get("/json", (c) => c.json({ message: "Hello" }));

// HTML
app.get("/html", (c) => c.html("<h1>Hello</h1>"));

// Custom status
app.get("/created", (c) => c.json({ id: 1 }, 201));

// Redirect
app.get("/old", (c) => c.redirect("/new"));
```
