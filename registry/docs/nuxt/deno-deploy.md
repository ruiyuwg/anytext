# Deno Deploy

::important
Deno deploy preset is experimental.
::

## Deploy with the CLI

You can use [deployctl](https://deno.com/deploy/docs/deployctl){rel=""nofollow""} to deploy your app.

Login to [Deno Deploy](https://dash.deno.com/account#access-tokens){rel=""nofollow""} to obtain a `DENO_DEPLOY_TOKEN` access token, and set it as an environment variable.

```bash
# Build with the deno_deploy preset
npm run build --preset=deno_deploy

# Make sure to run the deployctl command from the output directory
cd .output
deployctl deploy --project=my-project server/index.ts --token=<DENO_DEPLOY_TOKEN>
```

## Deploy within CI/CD using GitHub Actions

Link your GitHub repository to your Deno Deploy project and choose the "GitHub Actions" deployment mode. You can do this in your project settings on <https://dash.deno.com>{rel=""nofollow""}.

Create a GitHub action file in your repository:

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
          project: <my-project>
          entrypoint: server/index.ts
          root: .output
```

::important
Make sure to rename `<my-project>` with your project name.
::

## Templates

::card-group
:::card
-------

ui:
icon:
base: text-black dark:text-white
icon: i-simple-icons-github
target: \_blank
title: Nuxt Deno KV
to: https://github.com/Atinux/nuxt-deno-kv
------------------------------------------

A collaborative todo-list app built with Deno KV and Nuxt.
:::
::

## Learn more

::read-more

Head over **Nitro documentation** to learn more about the deno-deploy deployment preset.
::

# DigitalOcean

Nuxt supports deploying on the [DigitalOcean App Platform](https://docs.digitalocean.com/products/app-platform/){rel=""nofollow""} with minimal configuration.

## Setup

1. Create a new DigitalOcean app following the [guide](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/){rel=""nofollow""}.
2. Next, you'll need to configure environment variables. In your app settings, ensure the following [app-level environment variables](https://docs.digitalocean.com/products/app-platform/how-to/use-environment-variables/){rel=""nofollow""}:
   ```bash
   SERVER_PRESET=digital-ocean
   ```
3. You will need to ensure you set an `engines.node` field in your app's `package.json` to ensure DigitalOcean uses a supported version of Node.js:
   ```json [package.json]
   {
     "engines": {
         "node": "20.x"
     }
   }
   ```
4. You'll also need to add a run command so DigitalOcean knows what command to run after a build. You can do so by adding a start script to your `package.json`:
   ```json [package.json]
   {
     "scripts": {
         "start": "node .output/server/index.mjs"
     }
   }
   ```
5. Finally, you'll need to add this start script to your DigitalOcean app's run command. Go to `Components > Settings > Commands`, click "Edit", then add `npm run start`

::tip
Your Nuxt app should be live at a DigitalOcean generated URL and you can now follow [the rest of the DigitalOcean deployment guide](https://docs.digitalocean.com/products/app-platform/how-to/manage-deployments/){rel=""nofollow""}.
::

## Learn more

::read-more

Head over **Nitro documentation** to learn more about the digitalocean deployment preset.
::
