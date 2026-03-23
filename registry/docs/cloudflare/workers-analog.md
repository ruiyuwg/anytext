# Analog

[Skip to content](#%5Ftop)

### Tags

[ Full stack ](https://developers.cloudflare.com/search/?tags=Full%20stack)[ Angular ](https://developers.cloudflare.com/search/?tags=Angular)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/framework-guides/web-apps/more-web-frameworks/analog.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Analog

In this guide, you will create a new [Analog ↗](https://analogjs.org/) application and deploy to Cloudflare Workers.

[Analog ↗](https://analogjs.org/) is a fullstack meta-framework for Angular, powered by [Vite ↗](https://vitejs.dev/) and [Nitro ↗](https://nitro.unjs.io/).

Already have an Analog project?

Run `wrangler deploy` in a project without a Wrangler configuration file and Wrangler will automatically detect Analog, generate the necessary configuration, and deploy your project.

- [  npm ](#tab-panel-8053)
- [  yarn ](#tab-panel-8054)
- [  pnpm ](#tab-panel-8055)

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

Analog Detected

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

## 1. Set up a new project

Use the [create-cloudflare ↗](https://www.npmjs.com/package/create-cloudflare) CLI (C3) to set up a new project. C3 will create a new project directory, initiate Analog's official setup tool, and provide the option to deploy instantly.

To use `create-cloudflare` to create a new Analog project, run the following command:

- [  npm ](#tab-panel-8056)
- [  yarn ](#tab-panel-8057)
- [  pnpm ](#tab-panel-8058)

Terminal window

```

npm create cloudflare@latest -- my-analog-app --framework=analog


```

Terminal window

```

yarn create cloudflare my-analog-app --framework=analog


```

Terminal window

```

pnpm create cloudflare@latest my-analog-app --framework=analog


```

After setting up your project, change your directory by running the following command:

Terminal window

```

cd my-analog-app


```

## 2. Develop locally

After you have created your project, run the following command in the project directory to start a local server. This will allow you to preview your project locally during development.

- [  npm ](#tab-panel-8059)
- [  yarn ](#tab-panel-8060)
- [  pnpm ](#tab-panel-8061)

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

## 3. Deploy your Project

Your project can be deployed to a `*.workers.dev` subdomain or a [Custom Domain](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/), from your own machine or from any CI/CD system, including [Cloudflare's own](https://developers.cloudflare.com/workers/ci-cd/builds/).

The following command will build and deploy your project. If you're using CI, ensure you update your ["deploy command"](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/#build-settings) configuration appropriately.

- [  npm ](#tab-panel-8062)
- [  yarn ](#tab-panel-8063)
- [  pnpm ](#tab-panel-8064)

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

***

## Bindings

Your Analog application can be fully integrated with the Cloudflare Developer Platform, in both local development and in production, by using product bindings. The [Nitro documentation ↗](https://nitro.unjs.io/deploy/providers/cloudflare#direct-access-to-cloudflare-bindings) provides information about configuring bindings and how you can access them in your Analog API routes.

With bindings, your application can be fully integrated with the Cloudflare Developer Platform, giving you access to compute, storage, AI and more.

[ Bindings ](https://developers.cloudflare.com/workers/runtime-apis/bindings/) Access to compute, storage, AI and more.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/framework-guides/","name":"Framework guides"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/framework-guides/web-apps/","name":"Web applications"}},{"@type":"ListItem","position":5,"item":{"@id":"/workers/framework-guides/web-apps/more-web-frameworks/","name":"More guides..."}},{"@type":"ListItem","position":6,"item":{"@id":"/workers/framework-guides/web-apps/more-web-frameworks/analog/","name":"Analog"}}]}
```
