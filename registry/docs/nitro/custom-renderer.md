# Custom Renderer

::code-tree{expand-all default-value="renderer.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: "./",
  renderer: { handler: "./renderer" },
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

```ts [renderer.ts]
import { fetch } from "nitro";

export default async function renderer({ url }: { req: Request; url: URL }) {
  const apiRes = await fetch("/api/hello").then((res) => res.text());
  return new Response(
    /* html */ `<!DOCTYPE html>
    <html>
    <head>
      <title>Custom Renderer</title>
    </head>
    <body>
      <h1>Hello from custom renderer!</h1>
      <p>Current path: ${url.pathname}</p>
      <p>API says: ${apiRes}</p>
    </body>
    </html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
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

::

Create a custom renderer that generates HTML responses with data from API routes. Use Nitro's internal `fetch` to call routes without network overhead.

## Renderer

```ts [renderer.ts]
import { fetch } from "nitro";

export default async function renderer({ url }: { req: Request; url: URL }) {
  const apiRes = await fetch("/api/hello").then((res) => res.text());
  return new Response(
    /* html */ `<!DOCTYPE html>
    <html>
    <head>
      <title>Custom Renderer</title>
    </head>
    <body>
      <h1>Hello from custom renderer!</h1>
      <p>Current path: ${url.pathname}</p>
      <p>API says: ${apiRes}</p>
    </body>
    </html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}
```

Nitro auto-detects `renderer.ts` in your project root and uses it for all non-API routes. The renderer function receives the request URL and returns a `Response`.

Use `fetch` from `nitro` to call API routes without network overhead—these requests stay in-process.

## API Route

```ts [api/hello.ts]
import { defineHandler } from "nitro";

export default defineHandler(() => "Nitro is amazing!");
```

Define API routes in the `api/` directory. When the renderer calls `fetch("/api/hello")`, this handler runs and returns its response.

## Learn More

- [Renderer](https://nitro.build/docs/renderer)

# Runtime Config

::code-tree{expand-all default-value="nitro.config.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: "./",
  runtimeConfig: {
    apiKey: "",
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
import { useRuntimeConfig } from "nitro/runtime-config";

export default defineHandler((event) => {
  const runtimeConfig = useRuntimeConfig();
  return { runtimeConfig };
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

::

Runtime config lets you define configuration values that can be overridden by environment variables at runtime.

## Define Config Schema

Declare your runtime config with default values in `nitro.config.ts`:

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: "./",
  runtimeConfig: {
    apiKey: "",
  },
});
```

## Access at Runtime

Use `useRuntimeConfig` to access configuration values in your handlers:

```ts [server.ts]
import { defineHandler } from "nitro";
import { useRuntimeConfig } from "nitro/runtime-config";

export default defineHandler((event) => {
  const runtimeConfig = useRuntimeConfig();
  return { runtimeConfig };
});
```

## Environment Variables

Override config values via environment variables prefixed with `NITRO_`:

```sh [.env]
# NEVER COMMIT SENSITIVE DATA. THIS IS ONLY FOR DEMO PURPOSES.
NITRO_API_KEY=secret-api-key
```

## Learn More

- [Configuration](https://nitro.build/docs/configuration)

# Server Fetch

::code-tree{expand-all default-value="routes/index.ts"}

```ts [nitro.config.ts]
import { defineConfig, serverFetch } from "nitro";

export default defineConfig({
  serverDir: "./",
  hooks: {
    "dev:start": async () => {
      const res = await serverFetch("/hello");
      const text = await res.text();
      console.log("Fetched /hello in nitro module:", res.status, text);
    },
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

```ts [routes/hello.ts]
import { defineHandler } from "nitro";

export default defineHandler(() => "Hello!");
```

```ts [routes/index.ts]
import { defineHandler } from "nitro";
import { fetch } from "nitro";

export default defineHandler(() => fetch("/hello"));
```

::

When you need one route to call another, use Nitro's `fetch` function instead of the global fetch. It makes internal requests that stay in-process, avoiding network round-trips. The request never leaves the server.

## Main Route

```ts [routes/index.ts]
import { defineHandler } from "nitro";
import { fetch } from "nitro";

export default defineHandler(() => fetch("/hello"));
```

The index route imports `fetch` from `nitro` (not the global fetch) and calls the `/hello` route. This request is handled internally without going through the network stack.

## Internal API Route

```ts [routes/hello.ts]
import { defineHandler } from "nitro";

export default defineHandler(() => "Hello!");
```

A simple route that returns "Hello!". When the index route calls `fetch("/hello")`, this handler runs and its response is returned directly.

## Learn More

- [Routing](https://nitro.build/docs/routing)
