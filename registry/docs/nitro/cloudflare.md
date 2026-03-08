# Cloudflare

## Cloudflare Workers

**Preset:** `cloudflare_module`

:read-more{title="Cloudflare Workers" to="https://developers.cloudflare.com/workers/"}

::note
Integration with this provider is possible with [zero configuration](https://nitro.build/deploy#zero-config-providers) supporting [workers builds (beta)](https://developers.cloudflare.com/workers/ci-cd/builds/){rel=""nofollow""}.
::

::important
To use Workers with Static Assets, you need a Nitro compatibility date set to `2024-09-19` or later.
::

The following shows an example `nitro.config.ts` file for deploying a Nitro app to Cloudflare Workers.

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
    compatibilityDate: "2024-09-19",
    preset: "cloudflare_module",
    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
    compatibilityDate: "2024-09-19",
    nitro: {
      preset: "cloudflare_module",
      cloudflare: {
        deployConfig: true,
        nodeCompat: true
      }
    }
})
```

::

By setting `deployConfig: true`, Nitro will automatically generate a `wrangler.json` for you with the correct configuration.
If you need to add [Cloudflare Workers configuration](https://developers.cloudflare.com/workers/wrangler/configuration/){rel=""nofollow""}, such as [bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/){rel=""nofollow""}, you can either:

- Set these in your Nitro config under the `cloudflare: { wrangler : {} }`. This has the same type as `wrangler.json`.
- Provide your own `wrangler.json`. Nitro will merge your config with the appropriate settings, including pointing to the build output.

### Local Preview

You can use [Wrangler](https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler){rel=""nofollow""} to preview your app locally:

:pm-run{script="build"}

:pm-x{command="wrangler dev"}

### Manual Deploy

After having built your application you can manually deploy it with Wrangler.

First make sure to be logged into your Cloudflare account:

:pm-x{command="wrangler login"}

Then you can deploy the application with:

:pm-x{command="wrangler deploy"}

### Runtime Hooks

You can use [runtime hooks](https://nitro.build/guide/plugins#nitro-runtime-hooks) below in order to extend [Worker handlers](https://developers.cloudflare.com/workers/runtime-apis/handlers/){rel=""nofollow""}.

:read-more{to="https://nitro.build/guide/plugins#nitro-runtime-hooks"}

- [`cloudflare:scheduled`](https://developers.cloudflare.com/workers/runtime-apis/handlers/scheduled/){rel=""nofollow""}
- [`cloudflare:email`](https://developers.cloudflare.com/email-routing/email-workers/runtime-api/){rel=""nofollow""}
- [`cloudflare:queue`](https://developers.cloudflare.com/queues/configuration/javascript-apis/#consumer){rel=""nofollow""}
- [`cloudflare:tail`](https://developers.cloudflare.com/workers/runtime-apis/handlers/tail/){rel=""nofollow""}
- `cloudflare:trace`

## Cloudflare Pages

**Preset:** `cloudflare_pages`

:read-more{title="Cloudflare Pages" to="https://pages.cloudflare.com/"}

::note
Integration with this provider is possible with [zero configuration](https://nitro.build/deploy#zero-config-providers).
::

::warning
Cloudflare [Workers Module](https://nitro.build/#cloudflare-workers) is the new recommended preset for deployments. Please consider using the pages only if you need specific features.
::

The following shows an example `nitro.config.ts` file for deploying a Nitro app to Cloudflare Pages.

::code-group

```ts [nitro.config.ts]
export default defineNitroConfig({
    preset: "cloudflare_pages",
    cloudflare: {
      deployConfig: true,
      nodeCompat:true
    }
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
    nitro: {
      preset: "cloudflare_pages",
      cloudflare: {
        deployConfig: true,
        nodeCompat:true
      }
    }
})
```

::

Nitro automatically generates a `_routes.json` file that controls which routes get served from files and which are served from the Worker script. The auto-generated routes file can be overridden with the config option `cloudflare.pages.routes` ([read more](https://developers.cloudflare.com/pages/platform/functions/routing/#functions-invocation-routes){rel=""nofollow""}).

### Local Preview

You can use [Wrangler](https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler){rel=""nofollow""} to preview your app locally:

:pm-run{script="build"}

:pm-x{command="wrangler pages dev"}

### Manual Deploy

After having built your application you can manually deploy it with Wrangler, in order to do so first make sure to be
logged into your Cloudflare account:

:pm-x{command="wrangler login"}

Then you can deploy the application with:

:pm-x{command="wrangler pages deploy"}

## Cloudflare Service Workers

**Preset:** `cloudflare`

::note
**Note:** This preset uses the [service worker syntax](https://developers.cloudflare.com/workers/learning/service-worker/){rel=""nofollow""} for deployment.
::

::warning
**Note:** This preset is deprecated.
::

The way this preset works is identical to that of the `cloudflare_module` one presented above, with the only difference being that such preset inherits all the [disadvantages](https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/#advantages-of-migrating){rel=""nofollow""} that such syntax brings.

## Deploy within CI/CD using GitHub Actions

Regardless on whether you're using Cloudflare Pages or Cloudflare Workers, you can use the [Wrangler GitHub actions](https://github.com/marketplace/actions/deploy-to-cloudflare-workers-with-wrangler){rel=""nofollow""} to deploy your application.

::note
**Note:** Remember to [instruct Nitro to use the correct preset](https://nitro.build/deploy#changing-the-deployment-preset) (note that this is necessary for all presets including the `cloudflare_pages` one).
::

## Environment Variables

Nitro allows you to universally access environment variables using `process.env` or `import.meta.env` or the runtime config.

::note
Make sure to only access environment variables **within the event lifecycle** and not in global contexts since Cloudflare only makes them available during the request lifecycle and not before.
::

**Example:** If you have set the `SECRET` and `NITRO_HELLO_THERE` environment variables set you can access them in the following way:

```ts
console.log(process.env.SECRET) // note that this is in the global scope! so it doesn't actually work and the variable is undefined!

export default defineEventHandler((event) => {
  // note that all the below are valid ways of accessing the above mentioned variables
  useRuntimeConfig(event).helloThere
  useRuntimeConfig(event).secret
  process.env.NITRO_HELLO_THERE
  import.meta.env.SECRET
});
```

### Specify Variables in Development Mode

For development, you can use a `.env` file to specify environment variables:

```ini
NITRO_HELLO_THERE="captain"
SECRET="top-secret"
```

::note
**Note:** Make sure you add `.env` to the `.gitignore` file so that you don't commit it as it can contain sensitive information.
::

### Specify Variables for local previews

After build, when you try out your project locally with `wrangler dev` or `wrangler pages dev`, in order to have access to environment variables you will need to specify the in a `.dev.vars` file in the root of your project (as presented in the [Pages](https://developers.cloudflare.com/pages/functions/bindings/#interact-with-your-environment-variables-locally){rel=""nofollow""} and [Workers](https://developers.cloudflare.com/workers/configuration/environment-variables/#interact-with-environment-variables-locally){rel=""nofollow""} documentation).

If you are using a `.env` file while developing, your `.dev.vars` should be identical to it.

::note
**Note:** Make sure you add `.dev.vars` to the `.gitignore` file so that you don't commit it as it can contain sensitive information.
::

### Specify Variables for Production

For production, use the Cloudflare dashboard or the [`wrangler secret`](https://developers.cloudflare.com/workers/wrangler/commands/#secret){rel=""nofollow""} command to set environment variables and secrets.

### Specify Variables using `wrangler.toml`/`wrangler.json`

You can specify a custom `wrangler.toml`/`wrangler.json` file and define vars inside.

::warning
Note that this isn't recommend for sensitive data like secrets.
::

**Example:**

```ini [wrangler.toml]
# Shared
[vars]
NITRO_HELLO_THERE="general"
SECRET="secret"

# Override values for `--env production` usage
[env.production.vars]
NITRO_HELLO_THERE="captain"
SECRET="top-secret"
```

## Direct access to Cloudflare bindings

Bindings are what allows you to interact with resources from the Cloudflare platform, examples of such resources are key-value data storages ([KVs](https://developers.cloudflare.com/kv/){rel=""nofollow""}) and serverless SQL databases ([D1s](https://developers.cloudflare.com/d1/){rel=""nofollow""}).

::read-more
For more details on Bindings and how to use them please refer to the Cloudflare [Pages](https://developers.cloudflare.com/pages/functions/bindings/){rel=""nofollow""} and [Workers](https://developers.cloudflare.com/workers/configuration/bindings/#bindings){rel=""nofollow""} documentation.
::

::tip
Nitro provides high level API to interact with primitives such as [KV Storage](https://nitro.build/guide/storage) and [Database](https://nitro.build/guide/database) and you are highly recommended to prefer using them instead of directly depending on low-level APIs for usage stability.
::

:read-more{title="Database Layer" to="https://nitro.build/guide/database"}

:read-more{title="KV Storage" to="https://nitro.build/guide/storage"}

In runtime, you can access bindings from the request event, by accessing its `context.cloudflare.env` field, this is for example how you can access a D1 bindings:

```ts
defineEventHandler(async (event) => {
  const { cloudflare } = event.context
  const stmt = await cloudflare.env.MY_D1.prepare('SELECT id FROM table')
  const { results } = await stmt.all()
})
```

## Dev Preset

Cloudflare preset can be enabled in development mode for production environment emulation and access to the bindings in local dev.

In order to enable dev preset, make sure using latest nitro version (>=2.12) and install [`wrangler`](https://npmjs.com/package/wrangler){rel=""nofollow""} as a dependency.

:pm-install{name="-D wrangler"}

Then, update config:

::CodeGroup

```ts [nitro.config.ts]
export default defineNitroConfig({
    compatibilityDate: "2025-07-15", // or "latest"
    preset: "cloudflare-module" // or "cloudflare-pages"
})
```

```ts [nuxt.config.ts]
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15", // or "latest"
    nitro: {
        preset: "cloudflare-module" // or "cloudflare-pages"
    }
})
```

::

In development terminal, you should see a message like this:

```sh
ℹ Using cloudflare-dev emulation in development mode.
```

In order to access bindings in dev mode we start by defining the bindings. You can do this in a `wrangler.toml`/`wrangler.jsonc` file, or directly in your Nitro config under `cloudflare.wrangler` (accepts the same type as `wrangler.json`).

For example to define a variable and a KV namespace in a `wrangler.toml`

```ini [wrangler.toml]
[vars]
MY_VARIABLE="my-value"

[[kv_namespaces]]
binding = "MY_KV"
id = "xxx"
```

Or in your Nitro config:

```js [nitro.config.js]
export default defineNitroConfig({
    cloudflare: {
      wrangler: {
        vars: {
          MY_VARIABLE: "my-value"
        },
        kv_namespaces: [
          {
            binding: "MY_KV",
            id: "xxx"
          }
        ]
      }
    }
});
```

::note
Only bindings in the default environment are recognized.
::

you will be able to access the `MY_VARIABLE` and `MY_KV` from the request event just as illustrated above.

# Deno Deploy

**Preset:** `deno_deploy`

:read-more{title="Deno Deploy" to="https://deno.com/deploy"}

## Deploy with the CLI

You can use [deployctl](https://deno.com/deploy/docs/deployctl){rel=""nofollow""} to deploy your app.

Login to [Deno Deploy](https://dash.deno.com/account#access-tokens){rel=""nofollow""} to obtain a `DENO_DEPLOY_TOKEN` access token, and set it as an environment variable.

```bash
# Build with the deno_deploy NITRO preset
NITRO_PRESET=deno_deploy npm run build

# Make sure to run the deployctl command from the output directory
cd .output
deployctl deploy --project=my-project server/index.ts
```

## Deploy within CI/CD using gitHub actions

You just need to include the deployctl GitHub Action as a step in your workflow.

You do not need to set up any secrets for this to work. You do need to link your GitHub repository to your Deno Deploy project and choose the "GitHub Actions" deployment mode. You can do this in your project settings on [Deno Deploy](https://dash.deno.com){rel=""nofollow""}.

Create the following workflow file in your `.github/workflows` directory:

```yaml [.github/workflows/deno_deploy.yml]
name: deno-deploy

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    steps:
      - uses: actions/checkout@v3
      - run: corepack enable
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: pnpm
      - run: pnpm install
      - run: pnpm build
        env:
          NITRO_PRESET: deno_deploy
      - name: Deploy to Deno Deploy
        uses: denoland/deployctl@v1
        with:
          project: my-project
          entrypoint: server/index.ts
          root: .output
```

## Deno runtime

:read-more{to="https://nitro.build/deploy/runtimes/deno"}

# DigitalOcean

**Preset:** `digital_ocean`

:read-more{title="Digital Ocean App Platform" to="https://docs.digitalocean.com/products/app-platform/"}

## Set up application

::steps{level="4"}

#### Create a new Digital Ocean app following the [guide](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/){rel=""nofollow""}.

#### Next, you'll need to configure environment variables. In your app settings, ensure the following app-level environment variables are set:\`\`\`bash

NITRO\_PRESET=digital\_ocean

````:br[More information](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/){rel=""nofollow""}.

#### You will need to ensure you set an `engines.node` field in your app's `package.json` to ensure Digital Ocean uses a supported version of Node.js:```json
{
   "engines": {
      "node": "16.x"
   }
}
```:br[See more information](https://docs.digitalocean.com/products/app-platform/languages-frameworks/nodejs/#node-version){rel=""nofollow""}.

#### You'll also need to add a run command so Digital Ocean knows what command to run after a build. You can do so by adding a start script to your `package.json`:```json
{
   "scripts": {
      "start": "node .output/server/index.mjs"
   }
}
````

#### Finally, you'll need to add this start script to your Digital Ocean app's run command. Go to `Components > Settings > Commands`, click "Edit", then add `npm run start`

::

Your app should be live at a Digital Ocean generated URL and you can now follow [the rest of the Digital Ocean deployment guide](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/){rel=""nofollow""}.

# Edgio

::warning
This preset is deprecated and will be removed in v3.
::
