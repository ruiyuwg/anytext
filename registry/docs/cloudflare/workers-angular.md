# Angular

[Skip to content](#%5Ftop)

### Tags

[ Full stack ](https://developers.cloudflare.com/search/?tags=Full%20stack)[ Angular ](https://developers.cloudflare.com/search/?tags=Angular)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/framework-guides/web-apps/more-web-frameworks/angular.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Angular

In this guide, you will create a new [Angular ↗](https://angular.dev/) application and deploy to Cloudflare Workers (with the new [Workers Assets](https://developers.cloudflare.com/workers/static-assets/)).

Automatic configuration

Run `wrangler deploy` in a project without a Wrangler configuration file and Wrangler will automatically detect Angular, generate the necessary configuration, and deploy your project.

- [  npm ](#tab-panel-8065)
- [  yarn ](#tab-panel-8066)
- [  pnpm ](#tab-panel-8067)

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

Angular Detected

Generated configuration

wrangler.jsonc

assets: directory: dist/browser

wrangler.jsonc

observability: enabled: true

Workers Deployed

Wrangler handles configuration automatically

## 1. Set up a new project

Use the [create-cloudflare ↗](https://www.npmjs.com/package/create-cloudflare) CLI (C3) to set up a new project. C3 will create a new project directory, initiate Angular's official setup tool, and provide the option to deploy instantly.

To use `create-cloudflare` to create a new Angular project with Workers Assets, run the following command:

- [  npm ](#tab-panel-8068)
- [  yarn ](#tab-panel-8069)
- [  pnpm ](#tab-panel-8070)

Terminal window

```

npm create cloudflare@latest -- my-angular-app --framework=angular


```

Terminal window

```

yarn create cloudflare my-angular-app --framework=angular


```

Terminal window

```

pnpm create cloudflare@latest my-angular-app --framework=angular


```

After setting up your project, change your directory by running the following command:

Terminal window

```

cd my-angular-app


```

## 2. Develop locally

After you have created your project, run the following command in the project directory to start a local server. This will allow you to preview your project locally during development.

- [  npm ](#tab-panel-8071)
- [  yarn ](#tab-panel-8072)
- [  pnpm ](#tab-panel-8073)

Terminal window

```

npm run start


```

Terminal window

```

yarn run start


```

Terminal window

```

pnpm run start


```

## 3. Deploy your Project

Your project can be deployed to a `*.workers.dev` subdomain or a [Custom Domain](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/), from your own machine or from any CI/CD system, including [Cloudflare's own](https://developers.cloudflare.com/workers/ci-cd/builds/).

The following command will build and deploy your project. If you're using CI, ensure you update your ["deploy command"](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/#build-settings) configuration appropriately.

- [  npm ](#tab-panel-8074)
- [  yarn ](#tab-panel-8075)
- [  pnpm ](#tab-panel-8076)

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

## Static assets

By default, Cloudflare first tries to match a request path against a static asset path, which is based on the file structure of the uploaded asset directory. This is either the directory specified by `assets.directory` in your Wrangler config or, in the case of the [Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/), the output directory of the client build. Failing that, we invoke a Worker if one is present. If there is no Worker, or the Worker then uses the asset binding, Cloudflare will fallback to the behaviour set by [not\_found\_handling](https://developers.cloudflare.com/workers/static-assets/#routing-behavior).

Refer to the [routing documentation](https://developers.cloudflare.com/workers/static-assets/routing/) for more information about how routing works with static assets, and how to customize this behavior.

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/framework-guides/","name":"Framework guides"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/framework-guides/web-apps/","name":"Web applications"}},{"@type":"ListItem","position":5,"item":{"@id":"/workers/framework-guides/web-apps/more-web-frameworks/","name":"More guides..."}},{"@type":"ListItem","position":6,"item":{"@id":"/workers/framework-guides/web-apps/more-web-frameworks/angular/","name":"Angular"}}]}
```
