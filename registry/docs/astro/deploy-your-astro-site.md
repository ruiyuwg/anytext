# Deploy your Astro Site

> How to deploy your Astro site to the web.

**Ready to build and deploy your Astro site?** Follow one of our guides to different deployment services or scroll down for general guidance about deploying an Astro site.

## Deployment Guides

[Section titled “Deployment Guides”](#deployment-guides)

- ![](/logos/aws.svg)

  ### [AWS](/en/guides/deploy/aws/)

  On demand Static

- ![](/logos/flightcontrol.svg)

  ### [AWS via Flightcontrol](/en/guides/deploy/aws-via-flightcontrol/)

  On demand Static

- ![](/logos/sst.svg)

  ### [AWS via SST](/en/guides/deploy/aws-via-sst/)

  On demand Static

- ![](/logos/azion.svg)

  ### [Azion](/en/guides/deploy/azion/)

  On demand Static

- ![](/logos/buddy.svg)

  ### [Buddy](/en/guides/deploy/buddy/)

  Static

- ![](/logos/cleavr.svg)

  ### [Cleavr](/en/guides/deploy/cleavr/)

  On demand Static

- ![](/logos/clever-cloud.svg)

  ### [Clever Cloud](/en/guides/deploy/clever-cloud/)

  Static On demand

- ![](/logos/cloudflare-pages.svg)

  ### [Cloudflare](/en/guides/deploy/cloudflare/)

  On demand Static

- ![](/logos/cloudray.svg)

  ### [CloudRay](/en/guides/deploy/cloudray/)

  Static

- ![](/logos/deno.svg)

  ### [Deno Deploy](/en/guides/deploy/deno/)

  On demand Static

- ![](/logos/deployhq.svg)

  ### [DeployHQ](/en/guides/deploy/deployhq/)

  Static

- ![](/logos/edgeone-pages.svg)

  ### [EdgeOne Pages](/en/guides/deploy/edgeone-pages/)

  On demand Static

- ![](/logos/firebase.svg)

  ### [Firebase](/en/guides/deploy/firebase/)

  On demand Static

- ![](/logos/fleek.svg)

  ### [Fleek](/en/guides/deploy/fleek/)

  Static

- ![](/logos/flyio.svg)

  ### [Fly.io](/en/guides/deploy/flyio/)

  On demand Static

- ![](/logos/github.svg)

  ### [GitHub Pages](/en/guides/deploy/github/)

  Static

- ![](/logos/gitlab.svg)

  ### [GitLab Pages](/en/guides/deploy/gitlab/)

  Static

- ![](/logos/google-cloud.svg)

  ### [Google Cloud](/en/guides/deploy/google-cloud/)

  On demand Static

- ![](/logos/heroku.svg)

  ### [Heroku](/en/guides/deploy/heroku/)

  Static

- ![](/logos/juno.svg)

  ### [Juno](/en/guides/deploy/juno/)

  Static

- ![](/logos/microsoft-azure.svg)

  ### [Microsoft Azure](/en/guides/deploy/microsoft-azure/)

  Static

- ![](/logos/netlify.svg)

  ### [Netlify](/en/guides/deploy/netlify/)

  On demand Static

- ![](/logos/railway.svg)

  ### [Railway](/en/guides/deploy/railway/)

  On demand Static

- ![](/logos/render.svg)

  ### [Render](/en/guides/deploy/render/)

  Static

- ![](/logos/seenode.svg)

  ### [Seenode](/en/guides/deploy/seenode/)

  On demand

- ![](/logos/sevalla.svg)

  ### [Sevalla](/en/guides/deploy/sevalla/)

  On demand Static

- ![](/logos/stormkit.svg)

  ### [Stormkit](/en/guides/deploy/stormkit/)

  Static

- ![](/logos/surge.svg)

  ### [Surge](/en/guides/deploy/surge/)

  Static

- ![](/logos/vercel.svg)

  ### [Vercel](/en/guides/deploy/vercel/)

  On demand Static

- ![](/logos/zeabur.svg)

  ### [Zeabur](/en/guides/deploy/zeabur/)

  On demand Static

- ![](/logos/zephyr.svg)

  ### [Zephyr Cloud](/en/guides/deploy/zephyr/)

  Static

- ![](/logos/zerops.svg)

  ### [Zerops](/en/guides/deploy/zerops/)

  On demand Static

## Quick Deploy Options

[Section titled “Quick Deploy Options”](#quick-deploy-options)

You can build and deploy an Astro site to a number of hosts quickly using either their website’s dashboard UI or a CLI.

### Website UI

[Section titled “Website UI”](#website-ui)

A quick way to deploy your website is to connect your Astro project’s online Git repository (e.g. GitHub, GitLab, Bitbucket) to a host provider and take advantage of continuous deployment using Git.

These host platforms automatically detect pushes to your Astro project’s source repository, build your site and deploy it to the web at a custom URL or your personal domain. Often, setting up a deployment on these platforms will follow steps something like the following:

1. Add your repository to an online Git provider (e.g. in GitHub, GitLab, Bitbucket)

2. Choose a host that supports **continuous deployment** (e.g. [Netlify](/en/guides/deploy/netlify/) or [Vercel](/en/guides/deploy/vercel/)) and import your Git repository as a new site/project.

   Many common hosts will recognize your project as an Astro site, and should choose the appropriate configuration settings to build and deploy your site as shown below. (If not, these settings can be changed.)

   Deploy settings

   - **Build Command:** `astro build` or `npm run build`
   - **Publish directory:** `dist`

3. Click “Deploy” and your new website will be created at a unique URL for that host (e.g. `new-astro-site.netlify.app`).

The host will be automatically configured to watch your Git provider’s main branch for changes, and to rebuild and republish your site at each new commit. These settings can typically be configured in your host provider’s dashboard UI.

### CLI Deployment

[Section titled “CLI Deployment”](#cli-deployment)

Some hosts will have their own command line interface (CLI) you can install globally to your machine using npm. Often, using a CLI to deploy looks something like the following:

1. Install your host’s CLI globally, for example:

   - npm

     ```shell
     npm install --global netlify-cli
     ```

   - pnpm

     ```shell
     pnpm add --global netlify-cli
     ```

   - Yarn

     ```shell
     yarn global add netlify-cli
     ```

2. Run the CLI and follow any instructions for authorization, setup etc.

3. Build your site and deploy to your host

   Many common hosts will build and deploy your site for you. They will usually recognize your project as an Astro site, and should choose the appropriate configuration settings to build and deploy as shown below. (If not, these settings can be changed.)

   Deploy settings

   - **Build Command:** `astro build` or `npm run build`
   - **Publish directory:** `dist`

   Other hosts will require you to [build your site locally](#building-your-site-locally) and deploy using the command line.

## Building Your Site Locally

[Section titled “Building Your Site Locally”](#building-your-site-locally)

Many hosts like Netlify and Vercel will build your site for you and then publish that build output to the web. But, some sites will require you to build locally and then run a deploy command or upload your build output.

You may also wish to build locally to preview your site, or to catch any potential errors and warnings in your own environment.

Run the command `npm run build` to build your Astro site.

- npm

  ```shell
  npm run build
  ```

- pnpm

  ```shell
  pnpm run build
  ```

- Yarn

  ```shell
  yarn run build
  ```

By default, the build output will be placed at `dist/`. This location can be changed using the [`outDir` configuration option](/en/reference/configuration-reference/#outdir).

## Adding an Adapter for on-demand rendering

[Section titled “Adding an Adapter for on-demand rendering”](#adding-an-adapter-for-on-demand-rendering)

Note

Before deploying your Astro site with [on-demand rendering](/en/guides/on-demand-rendering/) enabled, make sure you have:

- Installed the [appropriate adapter](/en/guides/on-demand-rendering/) to your project dependencies (either manually, or using the adapter’s `astro add` command, e.g. `npx astro add netlify`).
- [Added the adapter](/en/reference/configuration-reference/#integrations) to your `astro.config.mjs` file’s import and default export when installing manually. (The `astro add` command will take care of this step for you!)
