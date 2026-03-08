# Netlify

::tip
**Zero Configuration ✨**

:br

Integration with Netlify is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel=""nofollow""}.
::

## Setup

Nuxt will auto-detect that you are in a [Netlify](https://www.netlify.com){rel=""nofollow""} build environment and build an optimized version of your server.

For new sites, Netlify will detect that you are using Nuxt 3 and set the publish directory to `dist` and build command to `npm run build`.

::note
If you are upgrading an existing site from Nuxt 2 you should check these and update them if needed.
::

If you want to add custom redirects, you can do so with [`routeRules`](https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering) or by adding a [`_redirects`](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file){rel=""nofollow""} file to your `public` directory.

::tip{color="green" icon="i-lucide-check-circle"}
For deployment, just push to your git repository [as you would normally do for Netlify](https://docs.netlify.com/configure-builds/get-started/){rel=""nofollow""}.
::

## Netlify Edge Functions

::read-more

Netlify Edge Functions use Deno and the powerful V8 JavaScript runtime to let you run globally distributed functions for the fastest possible response times.
::

Set the following environment variable to run Nuxt on Edge Functions:

```bash
SERVER_PRESET=netlify_edge
```

## On-demand Builders

On-demand Builders are serverless functions used to generate web content as needed that’s automatically cached on Netlify’s Edge CDN.

They enable you to build pages for your site when a user visits them for the first time and then cache them at the edge for subsequent visits until the next deployment.

::read-more

Read More about Netlify on-demand builders
::

Set the following environment variable to enable on-demand builders:

```bash
SERVER_PRESET=netlify_builder
```

::read-more{target="\_blank" to="https://nitro.unjs.io/deploy/providers/netlify"}
Head over **Nitro documentation** to learn more about the netlify deployment preset.
::

# Northflank

Nuxt supports deploying on [Northflank](https://www.northflank.com){rel=""nofollow""} with minimal configuration.

## Setup

1. Link your [Git provider](https://northflank.com/docs/v1/application/getting-started/link-your-git-account){rel=""nofollow""} and [create a new project](https://northflank.com/docs/v1/application/getting-started/create-a-project){rel=""nofollow""} in Northflank.
2. In your project, create a [Service](https://northflank.com/docs/v1/application/getting-started/build-and-deploy-your-code){rel=""nofollow""} and connect it to your Nuxt repository.
3. Ensure your package.json includes a start script that runs the Nuxt production server.

```json [package.json]
{
  "scripts": {
    "start": "node .output/server/index.mjs"
  }
}
```

4. Click "Create Service" to build and deploy your Nuxt app.

::read-more{target="\_blank" to="https://northflank.com/docs"}
For more information, refer to the **Northflank documentation**.
::

# Render

Nuxt supports deploying on [Render](https://render.com/){rel=""nofollow""} with minimal configuration.

## Set up application

1. [Create a new Web Service](https://dashboard.render.com/select-repo?type=web){rel=""nofollow""} and select the repository that contains your code.
2. Ensure the 'Node' environment is selected.
3. Depending on your package manager, set the build command to `yarn && yarn build`, `npm install && npm run build`, or `pnpm i --shamefully-hoist && pnpm build`.
4. Update the start command to `node .output/server/index.mjs`
5. Click 'Advanced' and add the following environment variables
   ```bash
   SERVER_PRESET=render_com
   NODE_VERSION=20
   ```
6. Click on `Create Web Service`.

## More options

::read-more{target="\_blank" to="https://nitro.unjs.io/deploy/providers/render"}
Head over **Nitro documentation** to learn more about the Render deployment presets.
::

# SST

Nuxt supports deploying on [SST](https://sst.dev/){rel=""nofollow""} with minimal configuration.

## Quick start

1. Create a Nuxt project.
2. Init SST in your project.
   ```bash
   npx sst@latest init
   ```
3. It should detect that your are using Nuxt and ask you to update your `nuxt.config.ts`file.
   ```ts
   nitro: {
     preset: 'aws-lambda'
   }
   ```
4. Once you are ready to deploy, run.
   ```bash
   npx sst deploy --stage production
   ```

You can [read the full Nuxt on SST tutorial here](https://sst.dev/docs/start/aws/nuxt){rel=""nofollow""}.

## More options

You can also deploy Nuxt to a container using SST. Head over to the [SST docs to learn more](https://sst.dev/docs/start/aws/nuxt){rel=""nofollow""}.

# Stormkit

::tip
**Zero Configuration ✨**

:br

Integration with [Stormkit](https://www.stormkit.io/){rel=""nofollow""} is possible with zero configuration, [learn more](https://nitro.unjs.io/deploy#zero-config-providers){rel=""nofollow""}.
::

## Setup

Follow the steps to [create a new app](https://app.stormkit.io/apps/new){rel=""nofollow""} on Stormkit.

## Deployment

By default, Stormkit will deploy your apps automatically when you push changes to your main branch. But to trigger a manual deploy (for example, you might do this for the very first deployment), you may click `Deploy now`.

::read-more

Head over **Nitro documentation** to learn more about the stormkit deployment preset.
::
