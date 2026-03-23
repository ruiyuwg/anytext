# Gatsby

[Skip to content](#%5Ftop)

### Tags

[ SSG ](https://developers.cloudflare.com/search/?tags=SSG)

Was this helpful?

YesNo

[ Edit page ](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/workers/framework-guides/web-apps/more-web-frameworks/gatsby.mdx) [ Report issue ](https://github.com/cloudflare/cloudflare-docs/issues/new/choose)

Copy page

# Gatsby

In this guide, you will create a new [Gatsby ↗](https://www.gatsbyjs.com/) application and deploy to Cloudflare Workers (with the new [Workers Assets](https://developers.cloudflare.com/workers/static-assets/)).

## 1. Set up a new project

Use the [create-cloudflare ↗](https://www.npmjs.com/package/create-cloudflare) CLI (C3) to set up a new project. C3 will create a new project directory, initiate Gatsby's official setup tool, and provide the option to deploy instantly.

To use `create-cloudflare` to create a new Gatsby project with Workers Assets, run the following command:

- [  npm ](#tab-panel-8097)
- [  yarn ](#tab-panel-8098)
- [  pnpm ](#tab-panel-8099)

Terminal window

```

npm create cloudflare@latest -- my-gatsby-app --framework=gatsby


```

Terminal window

```

yarn create cloudflare my-gatsby-app --framework=gatsby


```

Terminal window

```

pnpm create cloudflare@latest my-gatsby-app --framework=gatsby


```

After setting up your project, change your directory by running the following command:

Terminal window

```

cd my-gatsby-app


```

## 2. Develop locally

After you have created your project, run the following command in the project directory to start a local server. This will allow you to preview your project locally during development.

- [  npm ](#tab-panel-8100)
- [  yarn ](#tab-panel-8101)
- [  pnpm ](#tab-panel-8102)

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

- [  npm ](#tab-panel-8103)
- [  yarn ](#tab-panel-8104)
- [  pnpm ](#tab-panel-8105)

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

```json
{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"/directory/","name":"Directory"}},{"@type":"ListItem","position":2,"item":{"@id":"/workers/","name":"Workers"}},{"@type":"ListItem","position":3,"item":{"@id":"/workers/framework-guides/","name":"Framework guides"}},{"@type":"ListItem","position":4,"item":{"@id":"/workers/framework-guides/web-apps/","name":"Web applications"}},{"@type":"ListItem","position":5,"item":{"@id":"/workers/framework-guides/web-apps/more-web-frameworks/","name":"More guides..."}},{"@type":"ListItem","position":6,"item":{"@id":"/workers/framework-guides/web-apps/more-web-frameworks/gatsby/","name":"Gatsby"}}]}
```
