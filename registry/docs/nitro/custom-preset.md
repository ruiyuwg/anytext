# Custom Preset

Custom presets are local files that have a preset entry that defines builder configuration and a runtime entry point.

::warning
Custom local preset support is an experimental feature.
::

## Example

::note
Check [nitrojs/nitro-preset-starter](https://github.com/nitrojs/nitro-preset-starter){rel=""nofollow""} for a ready-to-use template.
::

First, we have to define our preset entry point in a local directory `preset/nitro.config.ts`

```ts [./preset/nitro.config.ts]
import type { NitroPreset } from "nitropack";
import { fileURLToPath } from "node:url"

export default <NitroPreset>{
  // extends: "node-server", // You can extend existing presets
  entry: fileURLToPath(new URL("./entry.ts", import.meta.url)),
  hooks: {
    compiled() {
      // ...
    },
  },
};
```

The entry point will be used by your server or provider, and you can fully customize its behavior.

::code-group

```ts [preset/entry.ts (Workers)]
import "#internal/nitro/virtual/polyfill";

const nitroApp = useNitroApp();

export default {
  fetch(request: Request) {
    const url = new URL(request.url);
    return nitroApp.localFetch(url.pathname + url.search, {
      context: {},
      host: url.hostname,
      protocol: url.protocol,
      method: request.method,
      headers: request.headers,
      body: undefined,
    });
  },
};
```

```ts [preset/entry.ts (Node.js)]
import "#internal/nitro/virtual/polyfill";
import { Server } from "node:http";
import { toNodeListener } from "h3";

const nitroApp = useNitroApp();
const server = new Server(toNodeListener(nitroApp.h3App));

// @ts-ignore
server.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Listening on http://localhost:3000 (custom preset)`);
});
```

::

Then in your nitro config file, you can use your custom preset.

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
  preset: "./preset",
});
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  nitro: {
    preset: "./preset",
  }
});
```

::

Refer to the Nitro [source code](https://github.com/nitrojs/nitro/tree/main/src){rel=""nofollow""} directly to have a better understanding of presets and entry points.

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
- *Command*: `node ./output/server/index.mjs`
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

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
  inlineDynamicImports: true
});
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  nitro: {
    inlineDynamicImports: true
  }
})
```

::

## Response streaming

:read-more{title="Introducing AWS Lambda response streaming" to="https://aws.amazon.com/blogs/compute/introducing-aws-lambda-response-streaming/"}

In order to enable response streaming, enable `awsLambda.streaming` flag:

```ts [nitro.config.ts]
export default defineNitroConfig({
  awsLambda: {
    streaming: true
  }
});
```
