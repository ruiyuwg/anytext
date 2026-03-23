# Import Alias

::code-tree{expand-all default-value="server/routes/index.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: true,
});
```

```json [package.json]
{
  "type": "module",
  "imports": {
    "#server/*": "./server/*"
  },
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

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig",
  "compilerOptions": {
    "paths": {
      "~server/*": ["./server/*"]
    }
  }
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()], resolve: { tsconfigPaths: true } });
```

```ts [server/routes/index.ts]
import { sum } from "~server/utils/math.ts";

import { rand } from "#server/utils/math.ts";

export default () => {
  const [a, b] = [rand(1, 10), rand(1, 10)];
  const result = sum(a, b);
  return `The sum of ${a} + ${b} = ${result}`;
};
```

```ts [server/utils/math.ts]
export function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sum(a: number, b: number): number {
  return a + b;
}
```

::

Import aliases like `~` and `#` let you reference modules with shorter paths instead of relative imports.

## Importing Using Aliases

```ts [server/routes/index.ts]
import { sum } from "~server/utils/math.ts";

import { rand } from "#server/utils/math.ts";

export default () => {
  const [a, b] = [rand(1, 10), rand(1, 10)];
  const result = sum(a, b);
  return `The sum of ${a} + ${b} = ${result}`;
};
```

The route imports the `sum` function using `~server/` and `rand` using `#server/`. Both resolve to the same `server/utils/math.ts` file. The handler generates two random numbers and returns their sum.

## Configuration

Aliases can be configured in `package.json` imports field or `nitro.config.ts`.

## Learn More

- [Configuration](https://nitro.build/docs/configuration)

# Middleware

::code-tree{expand-all default-value="server/middleware/auth.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: true,
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

export default defineHandler((event) => ({
  auth: event.context.auth,
}));
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

```ts [server/middleware/auth.ts]
import { defineMiddleware } from "nitro";

export default defineMiddleware((event) => {
  event.context.auth = { name: "User " + Math.round(Math.random() * 100) };
});
```

::

Middleware functions run before route handlers on every request. They can modify the request, add context, or return early responses.

## Defining Middleware

Create files in `server/middleware/`. They run in alphabetical order:

```ts [server/middleware/auth.ts]
import { defineMiddleware } from "nitro";

export default defineMiddleware((event) => {
  event.context.auth = { name: "User " + Math.round(Math.random() * 100) };
});
```

Middleware can:

- Add data to `event.context` for use in handlers
- Return a response early to short-circuit the request
- Modify request headers or other properties

## Accessing Context in Handlers

Data added to `event.context` in middleware is available in all subsequent handlers:

```ts [server.ts]
import { defineHandler } from "nitro";

export default defineHandler((event) => ({
  auth: event.context.auth,
}));
```

## Learn More

- [Routing](https://nitro.build/docs/routing)

# Mono JSX

::code-tree{expand-all default-value="server.tsx"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({});
```

```json [package.json]
{
  "type": "module",
  "scripts": {
    "dev": "nitro dev",
    "build": "nitro build"
  },
  "devDependencies": {
    "mono-jsx": "latest",
    "nitro": "latest"
  }
}
```

```tsx [server.tsx]
export default () => (
  <html>
    <h1>Nitro + mono-jsx works!</h1>
  </html>
);
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "mono-jsx"
  }
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

::

## Server Entry

```tsx [server.tsx]
export default () => (
  <html>
    <h1>Nitro + mono-jsx works!</h1>
  </html>
);
```

Nitro auto-detects `server.tsx` and uses mono-jsx to transform JSX into HTML. Export a function that returns JSX, and Nitro sends the rendered HTML as the response.

## Learn More

- [Renderer](https://nitro.build/docs/renderer)
- [mono-jsx](https://github.com/aspect-dev/mono-jsx){rel=""nofollow""}

# Nano JSX

::code-tree{expand-all default-value="server.tsx"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({});
```

```json [package.json]
{
  "type": "module",
  "scripts": {
    "dev": "nitro dev",
    "build": "nitro build"
  },
  "devDependencies": {
    "nano-jsx": "^0.2.1",
    "nitro": "latest"
  }
}
```

```tsx [server.tsx]
import { defineHandler, html } from "nitro";
import { renderSSR } from "nano-jsx";

export default defineHandler(() => {
  return html(renderSSR(() => <h1>Nitro + nano-jsx works!</h1>));
});
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "nano-jsx/esm"
  }
}
```

```ts [vite.config.ts]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({ plugins: [nitro()] });
```

::

## Server Entry

```tsx [server.tsx]
import { defineHandler, html } from "nitro";
import { renderSSR } from "nano-jsx";

export default defineHandler(() => {
  return html(renderSSR(() => <h1>Nitro + nano-jsx works!</h1>));
});
```

Nitro auto-detects `server.tsx` and uses it as the server entry. Use `renderSSR` from nano-jsx to convert JSX into an HTML string. The `html` helper from H3 sets the correct content type header.

## Learn More

- [Renderer](https://nitro.build/docs/renderer)
- [nano-jsx](https://nanojsx.io/){rel=""nofollow""}
