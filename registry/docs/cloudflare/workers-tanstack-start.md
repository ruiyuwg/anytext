# TanStack Start

[Skip to content](#%5Ftop)

### Tags

[ Full stack ](https://developers.cloudflare.com/search/?tags=Full%20stack)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/framework-guides/web-apps/tanstack-start.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# TanStack Start

[TanStack Start ↗](https://tanstack.com/start) is a full-stack framework for building web applications with server-side rendering, streaming, server functions, and bundling.

Already have a TanStack Start project?

Run `wrangler deploy` in a project without a Wrangler configuration file and Wrangler will automatically detect TanStack Start, generate the necessary configuration, and deploy your project.

- [  npm ](#tab-panel-8251)
- [  yarn ](#tab-panel-8252)
- [  pnpm ](#tab-panel-8253)

Terminal window

```

npx wrangler deploy


```

Terminal window

```

yarn wrangler deploy


```

Terminal window

```

pnpm wrangler deploy


```

Learn more about [automatic project configuration](https://developers.cloudflare.com/workers/framework-guides/automatic-configuration/).

TanStack Start Detected

Generated configuration

wrangler.jsonc

main: .output/server/index.mjs

wrangler.jsonc

assets: directory: .output/public

wrangler.jsonc

compatibility\_flags: nodejs\_compat

wrangler.jsonc

observability: enabled: true

Workers Deployed

Wrangler handles configuration automatically

## Create a new application

Create a TanStack Start application pre-configured for Cloudflare Workers:

- [  npm ](#tab-panel-8254)
- [  yarn ](#tab-panel-8255)
- [  pnpm ](#tab-panel-8256)

Terminal window

```

npm create cloudflare@latest -- my-tanstack-start-app --framework=tanstack-start


```

Terminal window

```

yarn create cloudflare my-tanstack-start-app --framework=tanstack-start


```

Terminal window

```

pnpm create cloudflare@latest my-tanstack-start-app --framework=tanstack-start


```

Start a local development server to preview your project during development:

- [  npm ](#tab-panel-8257)
- [  yarn ](#tab-panel-8258)
- [  pnpm ](#tab-panel-8259)

Terminal window

```

npm run dev


```

Terminal window

```

yarn run dev


```

Terminal window

```

pnpm run dev


```

## Configure an existing application

If you have an existing TanStack Start application, configure it to run on Cloudflare Workers:

1. Install `@cloudflare/vite-plugin` and `wrangler`:
   - [  npm ](#tab-panel-8260)
   - [  yarn ](#tab-panel-8261)
   - [  pnpm ](#tab-panel-8262)\
     Terminal window

```
npm i @cloudflare/vite-plugin wrangler -- -D  
```

Terminal window

```
yarn add @cloudflare/vite-plugin wrangler -D  
```

Terminal window

```
pnpm add @cloudflare/vite-plugin wrangler -D  
```

2. Add the Cloudflare plugin to your Vite configuration:
   - [  JavaScript ](#tab-panel-8282)
   - [  TypeScript ](#tab-panel-8283)\
     vite.config.js

```
import { defineConfig } from "vite";  
import { tanstackStart } from "@tanstack/react-start/plugin/vite";  
import { cloudflare } from "@cloudflare/vite-plugin";  
import react from "@vitejs/plugin-react";  
export default defineConfig({  
  plugins: [  
    cloudflare({ viteEnvironment: { name: "ssr" } }),  
    tanstackStart(),  
    react(),  
  ],  
});  
```

vite.config.ts

```
import { defineConfig } from "vite";  
import { tanstackStart } from "@tanstack/react-start/plugin/vite";  
import { cloudflare } from "@cloudflare/vite-plugin";  
import react from "@vitejs/plugin-react";  
export default defineConfig({  
  plugins: [  
    cloudflare({ viteEnvironment: { name: "ssr" } }),  
    tanstackStart(),  
    react(),  
  ],  
});  
```

3. Add a `wrangler.jsonc` configuration file:
   - [  wrangler.jsonc ](#tab-panel-8274)
   - [  wrangler.toml ](#tab-panel-8275)

```
{  
  "$schema": "node_modules/wrangler/config-schema.json",  
  "name": "<YOUR_PROJECT_NAME>",  
  // Set this to today's date  
  "compatibility_date": "2026-03-23",  
  "compatibility_flags": ["nodejs_compat"],  
  "main": "@tanstack/react-start/server-entry",  
  "observability": {  
    "enabled": true,  
  },  
}  
```

```
"$schema" = "node_modules/wrangler/config-schema.json"  
name = "<YOUR_PROJECT_NAME>"  
# Set this to today's date  
compatibility_date = "2026-03-23"  
compatibility_flags = [ "nodejs_compat" ]  
main = "@tanstack/react-start/server-entry"  
[observability]  
enabled = true  
```

4. Update the `scripts` section in `package.json`:\
   package.json

```
{  
  "scripts": {  
    "dev": "vite dev",  
    "build": "vite build",  
    "preview": "vite preview",  
    "deploy": "npm run build && wrangler deploy",  
    "cf-typegen": "wrangler types"  
  }  
}  
```

## Deploy

Deploy to a `*.workers.dev` subdomain or a [custom domain](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) from your machine or any CI/CD system, including [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/).

- [  npm ](#tab-panel-8263)
- [  yarn ](#tab-panel-8264)
- [  pnpm ](#tab-panel-8265)

Terminal window

```

npm run deploy


```

Terminal window

```

yarn run deploy


```

Terminal window

```

pnpm run deploy


```

Note

Preview the build locally before deploying:

- [  npm ](#tab-panel-8266)
- [  yarn ](#tab-panel-8267)
- [  pnpm ](#tab-panel-8268)

Terminal window

```

npm run preview


```

Terminal window

```

yarn run preview


```

Terminal window

```

pnpm run preview


```

## Custom entrypoints

TanStack Start uses `@tanstack/react-start/server-entry` as your default entrypoint. Create a custom server entrypoint to add additional Workers handlers such as [Queues](https://developers.cloudflare.com/queues/) and [Cron Triggers](https://developers.cloudflare.com/workers/configuration/cron-triggers/). This is also where you can add additional exports such as [Durable Objects](https://developers.cloudflare.com/durable-objects/) and [Workflows](https://developers.cloudflare.com/workflows/).

1. Create a custom server entrypoint file:
   - [  JavaScript ](#tab-panel-8286)
   - [  TypeScript ](#tab-panel-8287)\
     src/server.js

```
import handler from "@tanstack/react-start/server-entry";  
// Export Durable Objects as named exports  
export { MyDurableObject } from "./my-durable-object";  
export default {  
  fetch: handler.fetch,  
  // Handle Queue messages  
  async queue(batch, env, ctx) {  
    for (const message of batch.messages) {  
      console.log("Processing message:", message.body);  
      message.ack();  
    }  
  },  
  // Handle Cron Triggers  
  async scheduled(event, env, ctx) {  
    console.log("Cron triggered:", event.cron);  
  },  
};  
```

src/server.ts

```
import handler from "@tanstack/react-start/server-entry";  
// Export Durable Objects as named exports  
export { MyDurableObject } from "./my-durable-object";  
export default {  
  fetch: handler.fetch,  
  // Handle Queue messages  
  async queue(batch, env, ctx) {  
    for (const message of batch.messages) {  
      console.log("Processing message:", message.body);  
      message.ack();  
    }  
  },  
  // Handle Cron Triggers  
  async scheduled(event, env, ctx) {  
    console.log("Cron triggered:", event.cron);  
  },  
};  
```

2. Update your Wrangler configuration to point to your custom entrypoint:
   - [  wrangler.jsonc ](#tab-panel-8272)
   - [  wrangler.toml ](#tab-panel-8273)

```
{  
  "main": "src/server.ts",  
}  
```

```
main = "src/server.ts"  
```

### Test scheduled handlers locally

Test your scheduled handler locally using the `/cdn-cgi/handler/scheduled` endpoint:

Terminal window

```

curl "http://localhost:3000/cdn-cgi/handler/scheduled?cron=*+*+*+*+*"


```

Example: Using Workflows

Export a Workflow class from your custom entrypoint to run durable, multi-step tasks:

- [  JavaScript ](#tab-panel-8288)
- [  TypeScript ](#tab-panel-8289)

app/server.js

```

import {

  WorkflowEntrypoint,

  WorkflowStep,

  WorkflowEvent,

} from "cloudflare:workers";


export class MyWorkflow extends WorkflowEntrypoint {

  async run(event, step) {

    const result = await step.do("process data", async () => {

      return `Processed: ${event.payload.input}`;

    });


    await step.sleep("wait", "10 seconds");


    await step.do("finalize", async () => {

      console.log("Workflow complete:", result);

    });

  }

}


```

app/server.ts

```

import {

  WorkflowEntrypoint,

  WorkflowStep,

  WorkflowEvent,

} from "cloudflare:workers";


export class MyWorkflow extends WorkflowEntrypoint<Env> {

  async run(event: WorkflowEvent<{ input: string }>, step: WorkflowStep) {

    const result = await step.do("process data", async () => {

      return `Processed: ${event.payload.input}`;

    });


    await step.sleep("wait", "10 seconds");


    await step.do("finalize", async () => {

      console.log("Workflow complete:", result);

    });

  }

}


```

Add the Workflow configuration to your Wrangler configuration:

- [  wrangler.jsonc ](#tab-panel-8276)
- [  wrangler.toml ](#tab-panel-8277)

```

{

  "workflows": [

    {

      "name": "my-workflow",

      "binding": "MY_WORKFLOW",

      "class_name": "MyWorkflow",

    },

  ],

}


```

```

[[workflows]]

name = "my-workflow"

binding = "MY_WORKFLOW"

class_name = "MyWorkflow"


```

Example: Using Service Bindings

Add a service binding to call another Worker's RPC methods from your TanStack Start application:

- [  wrangler.jsonc ](#tab-panel-8278)
- [  wrangler.toml ](#tab-panel-8279)

```

{

  "services": [

    {

      "binding": "AUTH_SERVICE",

      "service": "auth-worker",

    },

  ],

}


```

```

[[services]]

binding = "AUTH_SERVICE"

service = "auth-worker"


```

Call the bound Worker's methods from a server function:

- [  JavaScript ](#tab-panel-8284)
- [  TypeScript ](#tab-panel-8285)

app/routes/index.jsx

```

import { createServerFn } from "@tanstack/react-start";

import { env } from "cloudflare:workers";


const verifyUser = createServerFn()

  .inputValidator((token) => token)

  .handler(async ({ data: token }) => {

    const result = await env.AUTH_SERVICE.verify(token);

    return result;

  });


```

app/routes/index.tsx

```

import { createServerFn } from "@tanstack/react-start";

import { env } from "cloudflare:workers";


const verifyUser = createServerFn()

  .inputValidator((token: string) => token)

  .handler(async ({ data: token }) => {

    const result = await env.AUTH_SERVICE.verify(token);

    return result;

  });


```

## Bindings

Your TanStack Start application can be fully integrated with the Cloudflare Developer Platform, in both local development and in production, by using [bindings](https://developers.cloudflare.com/workers/runtime-apis/bindings/).

Access bindings by [importing the env object](https://developers.cloudflare.com/workers/runtime-apis/bindings/#importing-env-as-a-global) in your server-side code:

- [  JavaScript ](#tab-panel-8290)
- [  TypeScript ](#tab-panel-8291)

app/routes/index.jsx

```

import { createFileRoute } from "@tanstack/react-router";

import { createServerFn } from "@tanstack/react-start";

import { env } from "cloudflare:workers";


export const Route = createFileRoute("/")({

  loader: () => getData(),

  component: RouteComponent,

});


const getData = createServerFn().handler(() => {

  // Access bindings via env

  // For example: env.MY_KV, env.MY_BUCKET, env.AI, etc.

});


function RouteComponent() {

  // ...

}


```

app/routes/index.tsx

```

import { createFileRoute } from "@tanstack/react-router";

import { createServerFn } from "@tanstack/react-start";

import { env } from "cloudflare:workers";


export const Route = createFileRoute("/")({

  loader: () => getData(),

  component: RouteComponent,

});


const getData = createServerFn().handler(() => {

  // Access bindings via env

  // For example: env.MY_KV, env.MY_BUCKET, env.AI, etc.

});


function RouteComponent() {

  // ...

}


```

Generate TypeScript types for your bindings based on your Wrangler configuration:

- [  npm ](#tab-panel-8269)
- [  yarn ](#tab-panel-8270)
- [  pnpm ](#tab-panel-8271)

Terminal window

```

npm run cf-typegen


```

Terminal window

```

yarn run cf-typegen


```

Terminal window

```

pnpm run cf-typegen


```

With bindings, your application can be fully integrated with the Cloudflare Developer Platform, giving you access to compute, storage, AI and more.

[ Bindings ](https://developers.cloudflare.com/workers/runtime-apis/bindings/) Access to compute, storage, AI and more.

### Use R2 in a server function

Add an [R2 bucket binding](https://developers.cloudflare.com/r2/api/workers/workers-api-usage/#4-bind-your-bucket-to-a-worker) to your Wrangler configuration:

- [  wrangler.jsonc ](#tab-panel-8280)
- [  wrangler.toml ](#tab-panel-8281)

```

{

  "r2_buckets": [

    {

      "binding": "MY_BUCKET",

      "bucket_name": "<YOUR_BUCKET_NAME>",

    },

  ],

}


```

```

[[r2_buckets]]

binding = "MY_BUCKET"

bucket_name = "<YOUR_BUCKET_NAME>"


```

Access the bucket in a server function:

- [  JavaScript ](#tab-panel-8292)
- [  TypeScript ](#tab-panel-8293)

app/routes/index.jsx

```

import { createServerFn } from "@tanstack/react-start";

import { env } from "cloudflare:workers";


const uploadFile = createServerFn({ method: "POST" })

  .validator((data) => data)

  .handler(async ({ data }) => {

    await env.MY_BUCKET.put(data.key, data.content);

    return { success: true };

  });


const getFile = createServerFn()

  .validator((key) => key)

  .handler(async ({ data: key }) => {

    const object = await env.MY_BUCKET.get(key);

    return object ? await object.text() : null;

  });


```

app/routes/index.tsx

```

import { createServerFn } from "@tanstack/react-start";

import { env } from "cloudflare:workers";


const uploadFile = createServerFn({ method: "POST" })

  .validator((data: { key: string; content: string }) => data)

  .handler(async ({ data }) => {

    await env.MY_BUCKET.put(data.key, data.content);

    return { success: true };

  });


const getFile = createServerFn()

  .validator((key: string) => key)

  .handler(async ({ data: key }) => {

    const object = await env.MY_BUCKET.get(key);

    return object ? await object.text() : null;

  });


```

## Static prerendering

Prerender your application to static HTML at build time and serve as [static assets](https://developers.cloudflare.com/workers/static-assets/).

- [  JavaScript ](#tab-panel-8294)
- [  TypeScript ](#tab-panel-8295)

vite.config.js

```

import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import react from "@vitejs/plugin-react";


export default defineConfig({

  plugins: [

    cloudflare({ viteEnvironment: { name: "ssr" } }),

    tanstackStart({

      prerender: {

        enabled: true,

      },

    }),

    react(),

  ],

});


```

vite.config.ts

```

import { defineConfig } from "vite";

import { cloudflare } from "@cloudflare/vite-plugin";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import react from "@vitejs/plugin-react";


export default defineConfig({

  plugins: [

    cloudflare({ viteEnvironment: { name: "ssr" } }),

    tanstackStart({

      prerender: {

        enabled: true,

      },

    }),

    react(),

  ],

});


```

For more options, refer to [TanStack Start static prerendering ↗](https://tanstack.com/start/latest/docs/framework/react/guide/static-prerendering).

Note

Requires `@tanstack/react-start` v1.138.0 or later.

Warning

Prerendering runs during build and uses local environment variables, secrets, and bindings storage data. Use [remote bindings](https://developers.cloudflare.com/workers/development-testing/#remote-bindings) to prerender with production data.

### Prerender in CI environments

When prerendering in CI, your Worker code may need environment variables or secrets not available in the build environment. Include a `.env` file with variable references that resolve to values from your CI environment:

.env

```

API_KEY=${API_KEY}

DATABASE_URL=${DATABASE_URL}


```

Set `CLOUDFLARE_INCLUDE_PROCESS_ENV=true` in your CI environment and provide the required values as environment variables. If using [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/), update your [build settings](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/#build-settings).

Note

For local development, create a `.env.local` file with actual values. Do not commit this file to your repository. Values in `.env.local` override references in `.env`:

.env.local

```

API_KEY=my-local-dev-key

DATABASE_URL=postgres://localhost/mydb


```

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/framework-guides/","name":"Framework guides"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/framework-guides/web-apps/","name":"Web applications"}},{"@type":"ListItem","position":5,"item":{"@id":"/workers/framework-guides/web-apps/tanstack-start/","name":"TanStack Start"}}]}
```
