# Node.js

**Preset:** `node_server`

Node.js is the default nitro output preset for production builds and Nitro has native Node.js runtime support.

Build project using nitro CLI:

```bash
nitro build
```

When running `nitro build` with the Node server preset, the result will be an entry point that launches a ready-to-run Node server. To try output:

```bash
$ node .output/server/index.mjs
Listening on http://localhost:3000
```

You can now deploy fully standalone `.output` directory to the hosting of your choice.

### Environment Variables

You can customize server behavior using following environment variables:

- `NITRO_PORT` or `PORT` (defaults to `3000`)
- `NITRO_HOST` or `HOST`
- `NITRO_UNIX_SOCKET` - if provided (a path to the desired socket file) the service will be served over the provided UNIX socket.
- `NITRO_SSL_CERT` and `NITRO_SSL_KEY` - if both are present, this will launch the server in HTTPS mode. In the vast majority of cases, this should not be used other than for testing, and the Nitro server should be run behind a reverse proxy like nginx or Cloudflare which terminates SSL.
- `NITRO_SHUTDOWN_DISABLED` - Disables the graceful shutdown feature when set to `'true'`. If it's set to `'true'`, the graceful shutdown is bypassed to speed up the development process. Defaults to `'false'`.
- `NITRO_SHUTDOWN_SIGNALS` - Allows you to specify which signals should be handled. Each signal should be separated with a space. Defaults to `'SIGINT SIGTERM'`.
- `NITRO_SHUTDOWN_TIMEOUT` - Sets the amount of time (in milliseconds) before a forced shutdown occurs. Defaults to `'30000'` milliseconds.
- `NITRO_SHUTDOWN_FORCE` - When set to true, it triggers `process.exit()` at the end of the shutdown process. If it's set to `'false'`, the process will simply let the event loop clear. Defaults to `'true'`.

## Cluster mode

**Preset:** `node_cluster`

For more performance and leveraging multi-core handling, you can use cluster preset.

### Environment Variables

In addition to environment variables from the `node_server` preset, you can customize behavior:

- `NITRO_CLUSTER_WORKERS`: Number of cluster workers (default is Number of available cpu cores)

## Handler (advanced)

**Preset:** `node`

Nitro also has a more low-level preset that directly exports a function with `(req, res) => {}` signature usable for middleware and custom servers.

When running `nitro build` with the Node preset, the result will be an entry point exporting a function with the `(req, res) => {}` signature.

**Example:**

```js
import { createServer } from 'node:http'
import { listener } from './.output/server'

const server = createServer(listener)
server.listen(8080)
```

# WinterJS

**Preset:** `winterjs`

You can easily build Nitro powered applications to run with [wasmerio/winterjs](https://github.com/wasmerio/winterjs){rel=""nofollow""} runtime.

[WinterJS](https://github.com/wasmerio/winterjs){rel=""nofollow""} is a JavaScript Service Workers server written in Rust, that uses the SpiderMonkey runtime to execute JavaScript (the same runtime that Firefox uses) ([announcement](https://wasmer.io/posts/announcing-winterjs-service-workers){rel=""nofollow""}).

::warning
🚧 WinterJS runtime is unstable and under heavy development. Follow [nitrojs/nitro#1861](https://github.com/nitrojs/nitro/issues/1861){rel=""nofollow""} for status and information.
::

In order to build for this runtime, use `NITRO_PRESET="winterjs"` environment variable:

```sh
NITRO_PRESET="winterjs" npm run build
```

Make sure you have `wasmer` installed locally ([install wasmer](https://docs.wasmer.io/install){rel=""nofollow""})

Run locally:

```sh
wasmer run wasmer/winterjs --forward-host-env --net --mapdir app:.output app/server/index.mjs
```

# Bun

**Preset:** `bun`

Nitro output is compatible with Bun runtime. While using default [Node.js](https://nitro.build/deploy/runtimes/node) you can also run the output in bun, using `bun` preset has advantage of better optimizations.

After building with bun preset using `bun` as preset, you can run server in production using:

```bash
bun run ./.output/server/index.mjs
```

:read-more{to="https://bun.sh"}

## Environment Variables

You can use the `PORT` or `NITRO_PORT` and `HOST` or `NITRO_HOST` environment variables to set the server port.

Use the `NITRO_BUN_IDLE_TIMEOUT` environment variable to change the default [idleTimeout](https://bun.sh/docs/runtime/http/server#idletimeout){rel=""nofollow""}.

# Deno

**Preset:** `deno_server`

You can build your Nitro server using Node.js to run within [Deno Runtime](https://deno.com/runtime){rel=""nofollow""} in a custom server.

```bash
# Build with the deno NITRO preset
NITRO_PRESET=deno_server npm run build

# Start production server
deno run --unstable --allow-net --allow-read --allow-env .output/server/index.ts
```

To enabling Node.js compatibility, you need to upgrade to Deno v2, and a compatibility date set to `2025-01-30` or later in your nitro configuration file.

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
    compatibilityDate: "2025-01-30",
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
    compatibilityDate: "2025-01-30",
})
```

::

## Deno Deploy

:read-more{to="https://nitro.build/deploy/providers/deno-deploy"}
