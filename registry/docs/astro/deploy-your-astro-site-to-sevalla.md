# Deploy your Astro Site to Sevalla

> How to deploy your Astro site to the web using Sevalla.

[Sevalla](https://sevalla.com/) is an all-in-one hosting and management platform for static sites, applications, and databases.

This guide details how to deploy your Astro project to Sevalla.

## Prerequisites

[Section titled “Prerequisites”](#prerequisites)

- A [**Sevalla** account](https://sevalla.com/signup/).
- Your Astro project pushed to a [public or supported private Git repository](https://docs.sevalla.com/applications/git/overview) (GitHub, GitLab, or Bitbucket).

## Static Site Deployment

[Section titled “Static Site Deployment”](#static-site-deployment)

Sevalla’s Static Site Hosting deploys your site directly to a global edge network.

1. Create a new [**Static Site**](https://docs.sevalla.com/static-sites/get-started/add-a-static-site) in the Sevalla dashboard.

2. Connect your Git repository (GitHub, GitLab, or Bitbucket).

3. Select your repository and branch (e.g., `main`).

4. Configure the build settings:

   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

5. Click **Create Static Site** to deploy.

Note

Astro defaults to `output: 'static'`, so no additional configuration is required for static deployment.

## SSR Deployment

[Section titled “SSR Deployment”](#ssr-deployment)

Sevalla’s Application Hosting supports full-stack applications. You can deploy Astro projects using [on-demand rendering](/en/guides/on-demand-rendering/) (server-side rendering) via the Node.js adapter.

1. Add the [`@astrojs/node` adapter](/en/guides/integrations-guide/node/) to your Astro project.

   ```bash
   npx astro add node
   ```

2. Configure the adapter in `astro.config.mjs`. Set `mode: 'standalone'` and ensure `host: true` is set so the server listens on all addresses (required for containerized environments).

   astro.config.mjs

   ```js
   import { defineConfig } from 'astro/config';
   import node from '@astrojs/node';


   export default defineConfig({
     output: 'server',
     adapter: node({
       mode: 'standalone'
     }),
     server: {
       host: true
     }
   });
   ```

3. Ensure your `package.json` has a `start` script that runs the built server:

   package.json

   ```json
   "scripts": {
     "start": "node ./dist/server/entry.mjs"
   }
   ```

4. Create a new [**Application**](https://docs.sevalla.com/applications/get-started/add-an-application) in the Sevalla dashboard.

5. Connect your Git repository.

6. Configure the build settings:

   - **Build Method:** Sevalla automatically detects Node.js projects (via Nixpacks).
   - **Build command:** `npm run build`
   - **Start command:** `npm run start`

7. Click **Create Application** to deploy.

## Troubleshooting

[Section titled “Troubleshooting”](#troubleshooting)

### Build Failures

[Section titled “Build Failures”](#build-failures)

Check the [**Build Logs**](https://docs.sevalla.com/applications/runtime-logs) in the Sevalla dashboard for error messages. Ensure all dependencies are in `dependencies` (not `devDependencies` if needed at runtime).

### Node Version

[Section titled “Node Version”](#node-version)

Ensure the Node.js version selected in Sevalla matches your local development version (check `node -v`).

# Deploy your Astro Site to Stormkit

> Deploy your Astro site to Stormkit

You can deploy your Astro project to [Stormkit](https://stormkit.io/), a deployment platform for static websites, single-page applications (SPAs), and serverless functions.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

1. [Log in to Stormkit](https://app.stormkit.io/auth).

2. Using the user interface, import your Astro project from one of the three supported Git providers (GitHub, GitLab, or Bitbucket).

3. Navigate to the project’s production environment in Stormkit or create a new environment if needed.

4. Verify the build command in your [Stormkit configuration](https://stormkit.io/docs/deployments/configuration). By default, Stormkit CI will run `npm run build` but you can specify a custom build command on this page.

5. Click the “Deploy Now” button to deploy your site.

Read more in the [Stormkit Documentation](https://stormkit.io/docs).

# Deploy your Astro Site to Surge

> How to deploy your Astro site to the web using Surge

You can deploy your Astro project to [Surge](https://surge.sh/), a single-command web publishing platform designed for front-end developers.

## How to deploy

[Section titled “How to deploy”](#how-to-deploy)

1. Install [the Surge CLI](https://www.npmjs.com/package/surge) globally from the terminal, if you haven’t already.

   ```shell
   npm install -g surge
   ```

2. Build your Astro site from your project’s root directory.

   ```shell
   npm run build
   ```

3. Deploy to Surge using the CLI.

   ```shell
   surge dist
   ```

   You can [use a custom domain with Surge](http://surge.sh/help/adding-a-custom-domain) when deploying by running `surge dist yourdomain.com`.
