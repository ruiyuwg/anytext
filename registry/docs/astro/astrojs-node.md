# @astrojs/node

> Learn how to use the @astrojs/node adapter to deploy your Astro project.

This adapter allows Astro to deploy your [on-demand rendered routes and features](/en/guides/on-demand-rendering/) to Node targets, including [server islands](/en/guides/server-islands/), [actions](/en/guides/actions/), and [sessions](/en/guides/sessions/).

If you’re using Astro as a static site builder, you don’t need an adapter.

## Why Astro Node.js

[Section titled “Why Astro Node.js”](#why-astro-nodejs)

[Node.js](https://nodejs.org/en/) is a JavaScript runtime for server-side code. @astrojs/node can be used either in standalone mode or as middleware for other http servers, such as [Express](https://expressjs.com/).

## Installation

[Section titled “Installation”](#installation)

Astro includes an `astro add` command to automate the setup of official integrations. If you prefer, you can [install integrations manually](#manual-install) instead.

Add the Node adapter to enable on-demand rendering in your Astro project with the `astro add` command. This will install `@astrojs/node` and make the appropriate changes to your `astro.config.*` file in one step.

- npm

  ```sh
  npx astro add node
  ```

- pnpm

  ```sh
  pnpm astro add node
  ```

- Yarn

  ```sh
  yarn astro add node
  ```

Now, you can enable [on-demand rendering per page](/en/guides/on-demand-rendering/#enabling-on-demand-rendering), or set your build output configuration to `output: 'server'` to [server-render all your pages by default](/en/guides/on-demand-rendering/#server-mode).

### Manual Install

[Section titled “Manual Install”](#manual-install)

First, add the Node adapter to your project’s dependencies using your preferred package manager.

- npm

  ```sh
  npm install @astrojs/node
  ```

- pnpm

  ```sh
  pnpm add @astrojs/node
  ```

- Yarn

  ```sh
  yarn add @astrojs/node
  ```

Then, add the adapter to your `astro.config.*` file:

astro.config.mjs

```diff
import { defineConfig } from 'astro/config';
+import node from '@astrojs/node';


export default defineConfig({
+  adapter: node({
+    mode: 'standalone',
+  }),
});
```

## Configuration

[Section titled “Configuration”](#configuration)

@astrojs/node can be configured by passing options into the adapter function. The following options are available:

### `mode`

[Section titled “mode”](#mode)

**Type:** `'middleware' | 'standalone'`

Controls whether the adapter builds to `middleware` or `standalone` mode.

- `middleware` mode allows the built output to be used as middleware for another Node.js server, like Express.js or Fastify.
- `standalone` mode builds a server that automatically starts when the entry module is run. This allows you to more easily deploy your build to a host without needing additional code.

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
  adapter: node({
    mode: 'middleware',
  }),
});
```

### `experimentalDisableStreaming`

[Section titled “experimentalDisableStreaming”](#experimentaldisablestreaming)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `@astrojs/node@9.3.0`

Disables Astro’s default [HTML streaming](/en/guides/on-demand-rendering/#html-streaming) for pages rendered on demand.

HTML streaming helps with performance and generally provides a better visitor experience. In most cases, disabling streaming is not recommended.

However, when you need to disable HTML streaming (e.g. your host only supports non-streamed HTML caching at the CDN level), you can opt out of the default behavior:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
  adapter: node({
    mode: 'standalone',
    experimentalDisableStreaming: true,
  }),
});
```

### `experimentalStaticHeaders`

[Section titled “experimentalStaticHeaders”](#experimentalstaticheaders)

**Type:** `boolean`\
**Default:** `false`

**Added in:** `@astrojs/node@9.3.0`

If enabled, the adapter will serve the headers of prerendered pages using the `Response` object when provided by Astro features, such as Content Security Policy.

For example, when [experimental Content Security Policy](/en/reference/experimental-flags/csp/) is enabled, `experimentalStaticHeaders` can be used to add the CSP headers to the `Response` object instead of creating a `<meta>` element:

astro.config.mjs

```js
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
  experimental: {
    csp: true
  },
  adapter: node({
    mode: 'standalone',
    experimentalStaticHeaders: true,
  })
});
```

### `experimentalErrorPageHost`

[Section titled “experimentalErrorPageHost”](#experimentalerrorpagehost)

**Type:** `string | URL`\
**Default:** `undefined`

**Added in:** `@astrojs/node@9.4.0`

Specifies an alternate host for loading prerendered [custom error pages](/en/basics/astro-pages/#custom-404-error-page).

Astro needs to be able to load your 404 page in order to return it in a response. By default, Astro will load prerendered custom error pages from the same host as the one that the request is made to. For example, if a request is made to `https://example.com/nonexistent-page`, Astro will attempt to load the prerendered error page from `https://example.com/404.html`.

Use `experimentalErrorPageHost` when your custom error page must be loaded from a different host, such as when the server is running behind a reverse proxy or in a container that may not have access to the external host URL. You can also use this when it is more efficient to load the prerendered error page from localhost rather than via the public internet.

The value can be a string or a URL object. It must be a fully-qualified URL, including the protocol (e.g., `http://localhost:4321`). Astro will always load the prerendered error page from the root path, and any path or query parameters will be ignored.

```js
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';


export default defineConfig({
  adapter: node({
    // Load pages from localhost, not the public URL.
    experimentalErrorPageHost: 'http://localhost:4321',
  })
});
```

## Usage

[Section titled “Usage”](#usage)

First, [performing a build](/en/guides/deploy/#building-your-site-locally). Depending on which `mode` selected (see above) follow the appropriate steps below:

### Middleware

[Section titled “Middleware”](#middleware)

The server entrypoint is built to `./dist/server/entry.mjs` by default. This module exports a `handler` function that can be used with any framework that supports the Node `request` and `response` objects.

For example, with Express:

run-server.mjs

```js
import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';


const app = express();
// Change this based on your astro.config.mjs, `base` option.
// They should match. The default value is "/".
const base = '/';
app.use(base, express.static('dist/client/'));
app.use(ssrHandler);


app.listen(8080);
```

Or, with Fastify (>4):

run-server.mjs

```js
import Fastify from 'fastify';
import fastifyMiddie from '@fastify/middie';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'node:url';
import { handler as ssrHandler } from './dist/server/entry.mjs';


const app = Fastify({ logger: true });


await app
  .register(fastifyStatic, {
    root: fileURLToPath(new URL('./dist/client', import.meta.url)),
  })
  .register(fastifyMiddie);
app.use(ssrHandler);


app.listen({ port: 8080 });
```

Additionally, you can also pass in an object to be accessed with `Astro.locals` or in Astro middleware:

run-server.mjs

```js
import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';


const app = express();
app.use(express.static('dist/client/'));
app.use((req, res, next) => {
  const locals = {
    title: 'New title',
  };


  ssrHandler(req, res, next, locals);
});


app.listen(8080);
```

Note that middleware mode does not do file serving. You’ll need to configure your HTTP framework to do that for you. By default the client assets are written to `./dist/client/`.

### Standalone

[Section titled “Standalone”](#standalone)

In standalone mode a server starts when the server entrypoint is run. By default it is built to `./dist/server/entry.mjs`. You can run it with:

```sh
node ./dist/server/entry.mjs
```

For standalone mode the server handles file serving in addition to the page and API routes.

#### Custom host and port

[Section titled “Custom host and port”](#custom-host-and-port)

You can override the host and port the standalone server runs on by passing them as environment variables at runtime:

```sh
HOST=0.0.0.0 PORT=4321 node ./dist/server/entry.mjs
```

#### HTTPS

[Section titled “HTTPS”](#https)

By default the standalone server uses HTTP. This works well if you have a proxy server in front of it that does HTTPS. If you need the standalone server to run HTTPS itself you need to provide your SSL key and certificate.

You can pass the path to your key and certification via the environment variables `SERVER_CERT_PATH` and `SERVER_KEY_PATH`. This is how you might pass them in bash:

```bash
SERVER_KEY_PATH=./private/key.pem SERVER_CERT_PATH=./private/cert.pem node ./dist/server/entry.mjs
```

#### Assets

[Section titled “Assets”](#assets)

In standalone mode, assets in your `dist/client/` folder are served via the standalone server. You might be deploying these assets to a CDN, in which case the server will never actually be serving them. But in some cases, such as intranet sites, it’s fine to serve static assets directly from the application server.

Assets in the `dist/client/_astro/` folder are the ones that Astro has built. These assets are all named with a hash and therefore can be given long cache headers. Internally the adapter adds this header for these assets:

```plaintext
Cache-Control: public, max-age=31536000, immutable
```

## Sessions

[Section titled “Sessions”](#sessions)

The Astro [Sessions API](/en/guides/sessions/) allows you to easily store user data between requests. This can be used for things like user data and preferences, shopping carts, and authentication credentials. Unlike cookie storage, there are no size limits on the data, and it can be restored on different devices.

Astro uses the local filesystem for session storage when using the Node adapter. If you would prefer to use a different session storage driver, you can specify it in your Astro config. See [the `session` configuration reference](/en/reference/configuration-reference/#sessiondriver) for more details.

## Environment variables

[Section titled “Environment variables”](#environment-variables)

When using the [`astro:env`](/en/guides/environment-variables/#type-safe-environment-variables) secrets or `process.env` at runtime, neither Astro nor the adapter loads environment variables for you.

Some hosts may expose the environment variables you configure through their dashboard during the build and at runtime. Check your host’s documentation for setting and using environment variables within the specific platform.

When self-hosting, you can load environment variables through CLI commands or configuration files as appropriate:

- Inline

  ```shell
  DB_HOST=... DB_PASSWORD=... node ./dist/server/entry.mjs
  ```

- dotenvx

  ```shell
  npx @dotenvx/dotenvx run -- node ./dist/server/entry.mjs
  ```

- Docker

  Dockerfile

  ```docker
  FROM node:lts AS runtime
  WORKDIR /app


  COPY . .


  RUN npm install
  RUN npm run build


  ENV DB_HOST=...
  ENV DB_PASSWORD=...
  CMD node ./dist/server/entry.mjs
  ```
