# Deploy your Astro Site to Zerops

> How to deploy your Astro site to the web using Zerops.

[Zerops](https://zerops.io/) is a dev-first cloud platform that can be used to deploy both Static and SSR Astro site.

This guide will walk you through setting up and deploying both Static and SSR Astro sites on Zerops.

Astro x Zerops Quickrun

Want to test running Astro on Zerops without installing or setting up anything? Using repositories [Zerops x Astro - Static](https://github.com/zeropsio/recipe-astro-static) or [Zerops x Astro - SSR on Node.js](https://github.com/zeropsio/recipe-astro-nodejs) you can deploy example Astro site with a single click.

Running apps on Zerops requires two steps:

1. Creating a project
2. Triggering build & deploy pipeline

Note

One Zerops project can contain multiple Astro sites.

## Astro Static site on Zerops

[Section titled “Astro Static site on Zerops”](#astro-static-site-on-zerops)

### Creating a project and a service for Astro Static

[Section titled “Creating a project and a service for Astro Static”](#creating-a-project-and-a-service-for-astro-static)

Projects and services can be added either through a [`Project add`](https://app.zerops.io/dashboard/project-add) wizard or imported using a yaml structure:

```yaml
# see https://docs.zerops.io/references/import for full reference
project:
  name: recipe-astro
services:
  - hostname: app
    type: static
```

This will create a project called `recipe-astro` with a Zerops Static service called `app`.

### Deploying your Astro Static site

[Section titled “Deploying your Astro Static site”](#deploying-your-astro-static-site)

To tell Zerops how to build and run your site, add a `zerops.yml` to your repository:

- npm

  zerops.yml

  ```yaml
  # see https://docs.zerops.io/zerops-yml/specification for full reference
  zerops:
    - setup: app
      build:
        base: nodejs@20
        buildCommands:
          - npm i
          - npm build
        deployFiles:
          - dist/~
      run:
        base: static
  ```

- pnpm

  zerops.yml

  ```yaml
  # see https://docs.zerops.io/zerops-yml/specification for full reference
  zerops:
    - setup: app
      build:
        base: nodejs@20
        buildCommands:
          - pnpm i
          - pnpm build
        deployFiles:
          - dist/~
      run:
        base: static
  ```

- Yarn

  zerops.yml

  ```yaml
  # see https://docs.zerops.io/zerops-yml/specification for full reference
  zerops:
    - setup: app
      build:
        base: nodejs@20
        buildCommands:
          - yarn
          - yarn build
        deployFiles:
          - dist/~
      run:
        base: static
  ```

Now you can [trigger the build & deploy pipeline using the Zerops CLI](#trigger-the-pipeline-using-zerops-cli-zcli) or by connecting the `app` service with your [GitHub](https://docs.zerops.io/references/github-integration/) / [GitLab](https://docs.zerops.io/references/gitlab-integration) repository from inside the service detail.

## Astro SSR site on Zerops

[Section titled “Astro SSR site on Zerops”](#astro-ssr-site-on-zerops)

### Update scripts

[Section titled “Update scripts”](#update-scripts)

Update your `start` script to run the server output from the Node adapter.

package.json

```json
"scripts": {
  "start": "node ./dist/server/entry.mjs",
}
```

### Creating a project and a service for Astro SSR (Node.js)

[Section titled “Creating a project and a service for Astro SSR (Node.js)”](#creating-a-project-and-a-service-for-astro-ssr-nodejs)

Projects and services can be added either through a [`Project add`](https://app.zerops.io/dashboard/project-add) wizard or imported using a yaml structure:

```yaml
# see https://docs.zerops.io/references/import for full reference
project:
  name: recipe-astro
services:
  - hostname: app
    type: nodejs@20
```

This will create a project called `recipe-astro` with Zerops Node.js service called `app`.

### Deploying your Astro SSR site

[Section titled “Deploying your Astro SSR site”](#deploying-your-astro-ssr-site)

To tell Zerops how to build and run your site using the official [Astro Node.js adapter](/en/guides/integrations-guide/node/) in `standalone` mode, add a `zerops.yml` file to your repository:

- npm

  zerops.yml

  ```yaml
  # see https://docs.zerops.io/zerops-yml/specification for full reference
  zerops:
    - setup: app
      build:
        base: nodejs@20
        buildCommands:
          - npm i
          - npm run build
        deployFiles:
          - dist
          - package.json
          - node_modules
      run:
        base: nodejs@20
        ports:
          - port: 3000
            httpSupport: true
        envVariables:
          PORT: 3000
          HOST: 0.0.0.0
        start: npm start
  ```

- pnpm

  zerops.yml

  ```yaml
  # see https://docs.zerops.io/zerops-yml/specification for full reference
  zerops:
    - setup: app
      build:
        base: nodejs@20
        buildCommands:
          - pnpm i
          - pnpm run build
        deployFiles:
          - dist
          - package.json
          - node_modules
      run:
        base: nodejs@20
        ports:
          - port: 3000
            httpSupport: true
        envVariables:
          PORT: 3000
          HOST: 0.0.0.0
        start: pnpm start
  ```

- Yarn

  zerops.yml

  ```yaml
  # see https://docs.zerops.io/zerops-yml/specification for full reference
  zerops:
    - setup: app
      build:
        base: nodejs@20
        buildCommands:
          - yarn
          - yarn build
        deployFiles:
          - dist
          - package.json
          - node_modules
      run:
        base: nodejs@20
        ports:
          - port: 3000
            httpSupport: true
        envVariables:
          PORT: 3000
          HOST: 0.0.0.0
        start: yarn start
  ```

Now you can [trigger the build & deploy pipeline using the Zerops CLI](#trigger-the-pipeline-using-zerops-cli-zcli) or by connecting the `app` service with your [GitHub](https://docs.zerops.io/references/github-integration/) / [GitLab](https://docs.zerops.io/references/gitlab-integration) repository from inside the service detail.

## Trigger the pipeline using Zerops CLI (zcli)

[Section titled “Trigger the pipeline using Zerops CLI (zcli)”](#trigger-the-pipeline-using-zerops-cli-zcli)

1. Install the Zerops CLI.

   ```shell
   # To download the zcli binary directly,
   # use https://github.com/zeropsio/zcli/releases
   npm i -g @zerops/zcli
   ```

2. Open [`Settings > Access Token Management`](https://app.zerops.io/settings/token-management) in the Zerops app and generate a new access token.

3. Log in using your access token with the following command:

   ```shell
   zcli login 
   ```

4. Navigate to the root of your app (where `zerops.yml` is located) and run the following command to trigger the deploy:

   ```shell
   zcli push
   ```

## Resources

[Section titled “Resources”](#resources)

### Official

[Section titled “Official”](#official)

- [Create Zerops account](https://app.zerops.io/registration)
- [Zerops Documentation](https://docs.zerops.io)
- [Zerops Astro recipe](https://app.zerops.io/recipe/astro)

### Community

[Section titled “Community”](#community)

- [Deploying Astro to Zerops in 3 mins](https://medium.com/@arjunaditya/how-to-deploy-astro-to-zerops-4230816a62b4)
- [Deploying Astro SSG with Node.js on Zerops with One Click Deploy](https://youtu.be/-4KTa4VWtBE)
- [Deploying Astro SSR with Node.js on Zerops with One Click Deploy](https://youtu.be/eR6b_JnDH6g)
