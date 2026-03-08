# Deploy your Astro Site to Cloudflare

> How to deploy your Astro site to the web using Cloudflare

You can deploy full-stack applications, including front-end static assets and back-end APIs, as well as on-demand rendered sites, to both [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) and [Cloudflare Pages](https://pages.cloudflare.com/).

This guide includes:

- [How to deploy to Cloudflare Workers](#cloudflare-workers)
- [How to deploy to Cloudflare Pages](#cloudflare-pages)

Note

Cloudflare recommends using Cloudflare Workers for new projects. For existing Pages projects, refer to [Cloudflare’s migration guide](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/) and [compatibility matrix](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/#compatibility-matrix).

Read more about [using the Cloudflare runtime](/en/guides/integrations-guide/cloudflare/) in your Astro project.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

To get started, you will need:

- A Cloudflare account. If you don’t already have one, you can create a free Cloudflare account during the process.

## Cloudflare Workers

[Section titled “Cloudflare Workers”](#cloudflare-workers)

### How to deploy with Wrangler

[Section titled “How to deploy with Wrangler”](#how-to-deploy-with-wrangler)

1. Install [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/get-started/).

   ```bash
   npm install wrangler@latest --save-dev
   ```

2. If your site uses on-demand rendering, install the [`@astrojs/cloudflare` adapter](/en/guides/integrations-guide/cloudflare/).

   This will install the adapter and make the appropriate changes to your `astro.config.mjs` file in one step.

   - npm

     ```sh
     npx astro add cloudflare
     ```

   - pnpm

     ```sh
     pnpm astro add cloudflare
     ```

   - Yarn

     ```sh
     yarn astro add cloudflare
     ```

   Read more about [on-demand rendering in Astro](/en/guides/on-demand-rendering/).

3. Create a [Wrangler configuration file](https://developers.cloudflare.com/workers/wrangler/configuration/).

   Running `astro add cloudflare` will create this for you; if you are not using the adapter, you’ll need to create it yourself.

   - Static

     wrangler.jsonc

     ```jsonc
     {
       "name": "my-astro-app",
       "compatibility_date": "YYYY-MM-DD", // Update to the day you deploy
       "assets": {
         "directory": "./dist",
       }
     }
     ```

   - On demand

     wrangler.jsonc

     ```jsonc
     {
       "main": "dist/_worker.js/index.js",
       "name": "my-astro-app",
       "compatibility_date": "YYYY-MM-DD", // Update to the day you deploy
       "compatibility_flags": [
         "nodejs_compat",
         "global_fetch_strictly_public"
       ],
       "assets": {
         "binding": "ASSETS",
         "directory": "./dist"
       },
       "observability": {
         "enabled": true
       }
     }
     ```

4. Preview your project locally with Wrangler.

   ```bash
   npx astro build && npx wrangler dev
   ```

5. Deploy using `npx wrangler deploy`.

   ```bash
   npx astro build && npx wrangler deploy
   ```

After your assets are uploaded, Wrangler will give you a preview URL to inspect your site.

Read more about using [Cloudflare runtime APIs](/en/guides/integrations-guide/cloudflare/) such as bindings.

### How to deploy with CI/CD

[Section titled “How to deploy with CI/CD”](#how-to-deploy-with-cicd)

You can also use a CI/CD system such as [Workers Builds (BETA)](https://developers.cloudflare.com/workers/ci-cd/builds/) to automatically build and deploy your site on push.

If you’re using Workers Builds:

1. Follow Steps 1-3 from the Wrangler section above.

2. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) and navigate to `Workers & Pages`. Select `Create`.

3. Under `Import a repository`, select a Git account and then the repository containing your Astro project.

4. Configure your project with:

   - Build command: `npx astro build`
   - Deploy command: `npx wrangler deploy`

5. Click `Save and Deploy`. You can now preview your Worker at its provided `workers.dev` subdomain.

## Cloudflare Pages

[Section titled “Cloudflare Pages”](#cloudflare-pages)

### How to deploy with Wrangler

[Section titled “How to deploy with Wrangler”](#how-to-deploy-with-wrangler-1)

1. Install [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/get-started/).

   - npm

     ```sh
     npm install wrangler@latest --save-dev
     ```

   - pnpm

     ```sh
     pnpm add wrangler@latest --save-dev
     ```

   - Yarn

     ```sh
     yarn add wrangler@latest --dev
     ```

2. If your site uses on-demand rendering, install the [`@astrojs/cloudflare` adapter](/en/guides/integrations-guide/cloudflare/).

   This will install the adapter and make the appropriate changes to your `astro.config.mjs` file in one step.

   - npm

     ```sh
     npx astro add cloudflare
     ```

   - pnpm

     ```sh
     pnpm astro add cloudflare
     ```

   - Yarn

     ```sh
     yarn astro add cloudflare
     ```

3. Create a [Wrangler configuration file](https://developers.cloudflare.com/workers/wrangler/configuration/).

   Because Cloudflare recommends new projects use Workers instead of Pages, the `astro add cloudflare` command creates a `wrangler.jsonc` and `public/.assetsignore` file, which are specific to Workers projects. You will need to delete the `public/.assetsignore` file and change your `wrangler.jsonc` file. If you are not using the adapter you’ll need to create it yourself.

   Ensure your `wrangler.jsonc` file is structured like this:

   - Static

     wrangler.jsonc

     ```jsonc
     {
       "name": "my-astro-app",
       "compatibility_date": "YYYY-MM-DD", // Update to the day you deploy
       "pages_build_output_dir": "./dist"
     }
     ```

   - On demand

     wrangler.jsonc

     ```jsonc
     {
       "name": "my-astro-app",
       "compatibility_date": "YYYY-MM-DD", // Update to the day you deploy
       "compatibility_flags": [
         "nodejs_compat",
         "disable_nodejs_process_v2"
       ],
       "pages_build_output_dir": "./dist"
     }
     ```

   Read more about [on-demand rendering in Astro](/en/guides/on-demand-rendering/).

4. Preview your project locally with Wrangler.

   - npm

     ```sh
     npx astro build && wrangler pages dev ./dist
     ```

   - pnpm

     ```sh
     pnpm astro build && wrangler pages dev ./dist
     ```

   - Yarn

     ```sh
     yarn astro build && wrangler pages dev ./dist
     ```

5. Deploy using `npx wrangler deploy`.

   - npm

     ```sh
     npx astro build && wrangler pages deploy ./dist
     ```

   - pnpm

     ```sh
     pnpm astro build && wrangler pages deploy ./dist
     ```

   - Yarn

     ```sh
     yarn astro build && wrangler pages deploy ./dist
     ```

After your assets are uploaded, Wrangler will give you a preview URL to inspect your site.

### How to deploy a site with CI/CD

[Section titled “How to deploy a site with CI/CD”](#how-to-deploy-a-site-with-cicd)

1. Push your code to your git repository (e.g. GitHub, GitLab).

2. Log in to the [Cloudflare dashboard](https://dash.cloudflare.com/) and navigate to **Compute (Workers) > Workers & Pages**. Select **Create** and then select the **Pages** tab. Connect your git repository.

3. Configure your project with:

   - **Framework preset**: `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`

4. Click the **Save and Deploy** button.

## Troubleshooting

[Section titled “Troubleshooting”](#troubleshooting)

### 404 behavior

[Section titled “404 behavior”](#404-behavior)

For Workers projects, you will need to set `not_found_handling` if you want to serve a custom 404 page. You can read more about this in the [Routing behavior section](https://developers.cloudflare.com/workers/static-assets/#routing-behavior) of Cloudflare’s documentation.

wrangler.jsonc

```jsonc
{
  "assets": {
    "directory": "./dist",
    "not_found_handling": "404-page"
  }
}
```

For Pages projects, if you include a custom 404 page, it will be served by default. Otherwise, Pages will default to [Cloudflare’s single-page application rendering behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/#single-page-application-spa-rendering) and redirect to the home page instead of showing a 404 page.

### Client-side hydration

[Section titled “Client-side hydration”](#client-side-hydration)

Client-side hydration may fail as a result of Cloudflare’s Auto Minify setting. If you see `Hydration completed but contains mismatches` in the console, make sure to disable Auto Minify under Cloudflare settings.

### Node.js runtime APIs

[Section titled “Node.js runtime APIs”](#nodejs-runtime-apis)

If you are building a project that is using on-demand rendering with [the Cloudflare adapter](/en/guides/integrations-guide/cloudflare/) and the server fails to build with an error message such as `[Error] Could not resolve "XXXX. The package "XXXX" wasn't found on the file system but is built into node.`:

- This means that a package or import you are using in the server-side environment is not compatible with the [Cloudflare runtime APIs](https://developers.cloudflare.com/workers/runtime-apis/nodejs/).

- If you are directly importing a Node.js runtime API, please refer to the Astro documentation on Cloudflare’s [Node.js compatibility](/en/guides/integrations-guide/cloudflare/#nodejs-compatibility) for further steps on how to resolve this.

- If you are importing a package that imports a Node.js runtime API, check with the author of the package to see if they support the `node:*` import syntax. If they do not, you may need to find an alternative package.

# Deploy your Astro Site with CloudRay

> How to deploy your Astro site to your Ubuntu Server using CloudRay

You can deploy your Astro project using [CloudRay](https://cloudray.io), a centralized platform that helps you manage your servers, organize Bash scripts, and automate deployment tasks across virtual machines and cloud servers.

Note

CloudRay itself does not host your site. Instead, it provides automation tools to run deployment scripts on your own infrastructure (e.g., Ubuntu servers) using a connected agent.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

To get started, you will need:

- A [CloudRay Account](https://app.cloudray.io)
- Your app code stored in a [GitHub](https://github.com/) repository

## How to Deploy through CloudRay Dashboard

[Section titled “How to Deploy through CloudRay Dashboard”](#how-to-deploy-through-cloudray-dashboard)

Deploying with CloudRay typically involves three main steps:

1. Install the [CloudRay Agent](https://cloudray.io/docs/agent) on your server to securely register your machine and enable remote automation.

2. In your CloudRay Dashboard, write a reusable Bash script that clones your Astro repo, installs dependencies, builds your site, and configures a web server. Define any repo-specific values using [CloudRay’s variable groups](https://cloudray.io/docs/variable-groups).

3. Use CloudRay’s Runlog interface to execute your script on your connected server and monitor the deployment in real time.

## Official Resources

[Section titled “Official Resources”](#official-resources)

Check out [the Astro guide in CloudRay’s docs](https://cloudray.io/articles/how-to-deploy-your-astro-site).
