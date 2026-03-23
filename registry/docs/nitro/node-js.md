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

**Preset:** `node_middleware`

Nitro also has a more low-level preset that directly exports a middleware usable for custom servers.

When running `nitro build` with the Node middleware preset, the result will be an entry point exporting a middleware handler.

**Example:**

```js
import { createServer } from 'node:http'
import { listener } from './.output/server'

const server = createServer(listener)
server.listen(8080)
```

# Bun

**Preset:** `bun`

Nitro output is compatible with Bun runtime. While using default [Node.js](https://nitro.build/deploy/runtimes/node) you can also run the output in bun, using `bun` preset has advantage of better optimizations.

After building with bun preset using `bun` as preset, you can run server in production using:

```bash
bun run ./.output/server/index.mjs
```

:read-more{to="https://bun.sh"}

# Deno

**Preset:** `deno_server`

You can build your Nitro server using Node.js to run within [Deno Runtime](https://deno.com/runtime){rel=""nofollow""} in a custom server.

```bash
# Build with the deno NITRO preset
NITRO_PRESET=deno_server npm run build

# Start production server
deno run --unstable --allow-net --allow-read --allow-env .output/server/index.ts
```

## Deno Deploy

:read-more{to="https://nitro.build/deploy/providers/deno-deploy"}

# Alwaysdata

**Preset:** `alwaysdata`

:read-more{to="https://alwaysdata.com"}

## Set up application

### Pre-requisites

::steps{level="4"}

#### [Register a new profile](https://www.alwaysdata.com/en/register/){rel=""nofollow""} on alwaysdata platform if you don't have one.

#### Get a free 100Mb plan to host your app.

::

::note
Keep in mind your *account name* will be used to provide you a default URL in the form of `account_name.alwaysdata.net`, so choose it wisely. You can also link your existing domains to your account later or register as many accounts under your profile as you need.
::

### Local deployment

::steps{level="4"}

#### Build your project locally with `npm run build -- preset alwaysdata`

#### [Upload your app](https://help.alwaysdata.com/en/remote-access/){rel=""nofollow""} to your account in its own directory (e.g. `$HOME/www/my-app`). You can use any protocol you prefer (SSH/FTP/WebDAV…) to do so.

#### On your admin panel, [create a new site](https://admin.alwaysdata.com/site/add/){rel=""nofollow""} for your app with the following features:\* *Addresses*: `[account_name].alwaysdata.net`

- *Type*: Node.js
- *Command*: `node .output/server/index.mjs`
- *Working directory*: `www/my-app` (adapt it to your deployment path)
- *Environment*:
  ```ini
  NITRO_PRESET=alwaysdata
  ```
- *Node.js version*: `Default version` is fine; pick no less than `20.0.0` (you can also [set your Node.js version globally](https://help.alwaysdata.com/en/languages/nodejs/configuration/#supported-versions){rel=""nofollow""})
- *Hot restart*: `SIGHUP`:read-more{title="Get more information about alwaysdata Node.js sites type" to="https://help.alwaysdata.com/en/languages/nodejs"}

#### Your app is now live at `http(s)://[account_name].alwaysdata.net`.

::

# AWS Lambda

**Preset:** `aws_lambda`

:read-more{title="AWS Lambda" to="https://aws.amazon.com/lambda/"}

Nitro provides a built-in preset to generate output format compatible with [AWS Lambda](https://aws.amazon.com/lambda/){rel=""nofollow""}.
The output entrypoint in `.output/server/index.mjs` is compatible with [AWS Lambda format](https://docs.aws.amazon.com/lex/latest/dg/lambda-input-response-format.html){rel=""nofollow""}.

It can be used programmatically or as part of a deployment.

```ts
import { handler } from './.output/server'

// Use programmatically
const { statusCode, headers, body } = handler({ rawPath: '/' })
```

## Inlining chunks

Nitro output, by default uses dynamic chunks for lazy loading code only when needed. However this sometimes can not be ideal for performance. (See discussions in [nitrojs/nitro#650](https://github.com/nitrojs/nitro/pull/650){rel=""nofollow""}). You can enabling chunk inlining behavior using [`inlineDynamicImports`](https://nitro.build/config#inlinedynamicimports) config.

```ts [nitro.config.ts]
import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  inlineDynamicImports: true
});
```

## Response streaming

:read-more{title="Introducing AWS Lambda response streaming" to="https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/"}

In order to enable response streaming, enable `awsLambda.streaming` flag:

```ts [nitro.config.ts]
import { defineNitroConfig } from "nitro/config";

export default defineNitroConfig({
  awsLambda: {
    streaming: true
  }
});
```
