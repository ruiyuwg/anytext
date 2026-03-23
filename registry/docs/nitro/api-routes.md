# API Routes

::code-tree{expand-all default-value="api/hello.ts"}

```html [index.html]
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>API Routes</title>
  </head>
  <body>
    <h2>API Routes:</h2>
    <ul>
      <li><a href="/api/hello">/api/hello</a></li>
      <li><a href="/api/hello/world">/api/hello/world</a></li>
      <li><a href="/api/test">/api/test</a></li>
    </ul>
  </body>
</html>
```

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: "./",
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

```ts [api/hello.ts]
import { defineHandler } from "nitro";

export default defineHandler(() => "Nitro is amazing!");
```

```ts [api/test.get.ts]
import { defineHandler } from "nitro";

export default defineHandler(() => "Test get handler");
```

```ts [api/test.post.ts]
import { defineHandler } from "nitro";

export default defineHandler(async (event) => {
  const body = await event.req.json();
  return {
    message: "Test post handler",
    body,
  };
});
```

```ts [api/hello/[name\\].ts]
import { defineHandler } from "nitro";

export default defineHandler((event) => `Hello (param: ${event.context.params!.name})!`);
```

::

Nitro supports file-based routing in the `api/` or `routes/` directory. Each file becomes an API endpoint based on its path.

## Basic Route

Create a file in the `api/` directory to define a route. The file path becomes the URL path:

```ts [api/hello.ts]
import { defineHandler } from "nitro";

export default defineHandler(() => "Nitro is amazing!");
```

This creates a `GET /api/hello` endpoint.

## Dynamic Routes

Use square brackets `[param]` for dynamic URL segments. Access params via `event.context.params`:

```ts [api/hello/[name\\].ts]
import { defineHandler } from "nitro";

export default defineHandler((event) => `Hello (param: ${event.context.params!.name})!`);
```

This creates a `GET /api/hello/:name` endpoint (e.g., `/api/hello/world`).

## HTTP Methods

Suffix your file with the HTTP method (`.get.ts`, `.post.ts`, `.put.ts`, `.delete.ts`, etc.):

### GET Handler

```ts [api/test.get.ts]
import { defineHandler } from "nitro";

export default defineHandler(() => "Test get handler");
```

### POST Handler

```ts [api/test.post.ts]
import { defineHandler } from "nitro";

export default defineHandler(async (event) => {
  const body = await event.req.json();
  return {
    message: "Test post handler",
    body,
  };
});
```

## Learn More

- [Routing](https://nitro.build/docs/routing)

# Auto Imports

::code-tree{expand-all default-value="nitro.config.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: true,
  imports: {},
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
import { makeGreeting } from "./server/utils/hello.ts";

export default defineHandler(() => `<h1>${makeGreeting("Nitro")}</h1>`);
```

```json [tsconfig.json]
{
  "include": [".nitro/types/nitro-imports.d.ts", "src"]
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

```ts [server/utils/hello.ts]
export function makeGreeting(name: string) {
  return `Hello, ${name}!`;
}
```

::

Functions exported from `server/utils/` are automatically available without explicit imports when auto-imports are enabled. Define a utility once and use it anywhere in your server code.

## Configuration

Enable auto-imports by setting `imports` in your config:

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: true,
  imports: {},
});
```

## Using Auto Imports

1. Create a utility file in `server/utils/`:

```ts [server/utils/hello.ts]
export function makeGreeting(name: string) {
  return `Hello, ${name}!`;
}
```

2. The function is available without importing it:

```ts [server.ts]
import { defineHandler } from "nitro";
import { makeGreeting } from "./server/utils/hello.ts";

export default defineHandler(() => `<h1>${makeGreeting("Nitro")}</h1>`);
```

With this setup, any function exported from `server/utils/` becomes globally available. Nitro scans the directory and generates the necessary imports automatically.

## Learn More

- [Configuration](https://nitro.build/docs/configuration)
