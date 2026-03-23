# Shiki

::code-tree{expand-all default-value="api/highlight.ts"}

```html [index.html]
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Hello World Snippet</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="card" role="region" aria-label="Code snippet">
      <div class="label">JavaScript</div>
      <script server>
        const hl = (code) =>
          serverFetch("/api/highlight", {
            method: "POST",
            body: code,
          });
      </script>
      <pre><code>{{{ hl(`console.log("💚 Simple is beautiful!");`) }}}</code></pre>
    </div>
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
    "dev": "vite dev",
    "build": "vite build"
  },
  "devDependencies": {
    "nitro": "latest",
    "shiki": "latest"
  }
}
```

```css [styles.css]
html,
body {
  height: 100%;
  margin: 0;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8fa;
  font-family:
    system-ui,
    -apple-system,
    "Segoe UI",
    Roboto,
    "Helvetica Neue",
    Arial,
    "Noto Sans",
    "Liberation Sans",
    sans-serif;
}
.card {
  text-align: left;
  background: #0b1220;
  color: #e6edf3;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(2, 6, 23, 0.2);
  max-width: 90%;
  width: 520px;
}
.label {
  font-size: 12px;
  color: #9aa7b2;
  margin-bottom: 8px;
}
pre {
  margin: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Courier New", monospace;
  font-size: 14px;
  background: transparent;
  white-space: pre;
  overflow: auto;
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

export default defineConfig({
  plugins: [nitro()],
});
```

```ts [api/highlight.ts]
import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";

const highlighter = await createHighlighterCore({
  engine: createOnigurumaEngine(import("shiki/wasm")),
  themes: [await import("shiki/themes/vitesse-dark.mjs")],
  langs: [await import("shiki/langs/ts.mjs")],
});

export default async ({ req }: { req: Request }) => {
  const code = await req.text();
  const html = await highlighter.codeToHtml(code, {
    lang: "ts",
    theme: "vitesse-dark",
  });
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};
```

::

Use Shiki for syntax highlighting with TextMate grammars. This example highlights code on the server using Nitro's server scripts feature, which runs JavaScript inside HTML files before sending the response.

## API Route

```ts [api/highlight.ts]
import { createHighlighterCore } from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";

const highlighter = await createHighlighterCore({
  engine: createOnigurumaEngine(import("shiki/wasm")),
  themes: [await import("shiki/themes/vitesse-dark.mjs")],
  langs: [await import("shiki/langs/ts.mjs")],
});

export default async ({ req }: { req: Request }) => {
  const code = await req.text();
  const html = await highlighter.codeToHtml(code, {
    lang: "ts",
    theme: "vitesse-dark",
  });
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
};
```

Create a Shiki highlighter with the Vitesse Dark theme and TypeScript language support. When the API receives a POST request, it reads the code from the request body and returns highlighted HTML.

## Server-Side Rendering

```html [index.html]
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Hello World Snippet</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="card" role="region" aria-label="Code snippet">
      <div class="label">JavaScript</div>
      <script server>
        const hl = (code) =>
          serverFetch("/api/highlight", {
            method: "POST",
            body: code,
          });
      </script>
      <pre><code>{{{ hl(`console.log("💚 Simple is beautiful!");`) }}}</code></pre>
    </div>
  </body>
</html>
```

The `<script server>` tag runs on the server before the HTML is sent. It defines a helper function that calls the highlight API using `serverFetch`. The triple-brace syntax `{{{ }}}` outputs the result without escaping, so the highlighted HTML renders correctly.

## Learn More

- [Shiki](https://shiki.style/){rel=""nofollow""}

# Virtual Routes

::code-tree{expand-all default-value="nitro.config.ts"}

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  routes: {
    "/": "#virtual-route",
  },
  virtual: {
    "#virtual-route": () =>
      /* js */ `export default () => new Response("Hello from virtual entry!")`,
  },
});
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

Virtual routes let you define handlers as strings in your config instead of creating separate files. This is useful when generating routes dynamically, building plugins, or keeping simple routes inline.

## Configuration

```ts [nitro.config.ts]
import { defineConfig } from "nitro";

export default defineConfig({
  routes: {
    "/": "#virtual-route",
  },
  virtual: {
    "#virtual-route": () =>
      /* js */ `export default () => new Response("Hello from virtual entry!")`,
  },
});
```

The `routes` option maps URL paths to virtual module identifiers (prefixed with `#`). The `virtual` option defines the module content as a string or function returning a string. At build time, Nitro resolves these virtual modules to actual handlers.

There are no route files in this project. The entire handler is defined inline in the config, and Nitro generates the route at build time.

## Learn More

- [Routing](https://nitro.build/docs/routing)
- [Configuration](https://nitro.build/docs/configuration)

# Vite Nitro Plugin

::code-tree{expand-all default-value="vite.config.mjs"}

```json [package.json]
{
  "type": "module",
  "scripts": {
    "build": "vite build",
    "preview": "vite preview",
    "dev": "vite dev"
  },
  "devDependencies": {
    "nitro": "latest",
    "vite": "latest"
  }
}
```

```json [tsconfig.json]
{
  "extends": "nitro/tsconfig"
}
```

```js [vite.config.mjs]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    nitro(),
    {
      name: "my-nitro-plugin",
      nitro: {
        setup: (nitro) => {
          nitro.options.routes["/"] = "#virtual-by-plugin";
          nitro.options.virtual["#virtual-by-plugin"] =
            `export default () => new Response("Hello from virtual entry!")`;
        },
      },
    },
  ],
});
```

::

Instead of using a separate `nitro.config.ts`, you can configure Nitro directly in your Vite config. This gives you access to Nitro's setup hook where you can register routes and virtual modules programmatically.

## Vite Configuration

```js [vite.config.mjs]
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    nitro(),
    {
      name: "my-nitro-plugin",
      nitro: {
        setup: (nitro) => {
          nitro.options.routes["/"] = "#virtual-by-plugin";
          nitro.options.virtual["#virtual-by-plugin"] =
            `export default () => new Response("Hello from virtual entry!")`;
        },
      },
    },
  ],
});
```

The config adds two plugins: the `nitro()` plugin and a custom plugin that uses the `nitro.setup` hook. Inside the setup function, you have access to Nitro's options object. This example registers a virtual route at `/` that maps to a virtual module `#virtual-by-plugin`, then defines that module inline.

## Learn More

- [Configuration](https://nitro.build/docs/configuration)
