# Netlify

**Preset:** `netlify`

:read-more{title="Netlify Functions" to="https://www.netlify.com/platform/core/functions/"}

::note
Integration with this provider is possible with [zero configuration](https://nitro.build/deploy/#zero-config-providers).
::

Normally, the deployment to Netlify does not require any configuration.
Nitro will auto-detect that you are in a [Netlify](https://www.netlify.com){rel=""nofollow""} build environment and build the correct version of your server.

For new sites, Netlify will detect that you are using Nitro and set the publish directory to `dist` and build command to `npm run build`.

If you are upgrading an existing site you should check these and update them if needed.

If you want to add custom redirects, you can do so with [`routeRules`](https://nitro.build/config#routerules) or by adding a [`_redirects`](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file){rel=""nofollow""} file to your `public` directory.

For deployment, just push to your git repository [as you would normally do for Netlify](https://docs.netlify.com/configure-builds/get-started/){rel=""nofollow""}.

::note{type="note"}
Make sure the publish directory is set to `dist` when creating a new project.
::

## Netlify edge functions

**Preset:** `netlify_edge`

Netlify Edge Functions use Deno and the powerful V8 JavaScript runtime to let you run globally distributed functions for the fastest possible response times.

:read-more{title="Netlify Edge functions" to="https://docs.netlify.com/edge-functions/overview/"}

Nitro output can directly run the server at the edge. Closer to your users.

::note{type="note"}
Make sure the publish directory is set to `dist` when creating a new project.
::

## Custom deploy configuration

You can provide additional deploy configuration using the `netlify` key inside `nitro.config`. It will be merged with built-in auto-generated config. Currently the only supported value is `images.remote_images`, for [configuring Netlify Image CDN](https://docs.netlify.com/image-cdn/create-integration/){rel=""nofollow""}.

# Platform.sh

**Preset:** `platform_sh`

:read-more{to="https://platform.sh"}

## Setup

First, create a new project on platform.sh and link it to the repository you want to auto-deploy with.

Then in repository create `.platform.app.yaml` file:

```yaml [.platform.app.yaml]
name: nitro-app
type: 'nodejs:20'
disk: 128
web:
  commands:
    start: "node .output/server/index.mjs"
build:
  flavor: none
hooks:
  build: |
    corepack enable
    npx nypm install
    NITRO_PRESET=platform_sh npm run build
mounts:
    '.data':
        source: local
        source_path: .data
```

:read-more{title="Complete list of all available properties" to="https://docs.platform.sh/create-apps/app-reference.html"}

:read-more{title="Complete list of all available properties" to="https://unjs.io/blog/2023-08-25-nitro-2.6#default-persistent-data-storage"}

# Render.com

**Preset:** `render_com`

:read-more{title="render.com" to="https://render.com"}

## Set up application

::steps{level="4"}

#### [Create a new Web Service](https://dashboard.render.com/select-repo?type=web){rel=""nofollow""} and select the repository that contains your code.

#### Ensure the 'Node' environment is selected.

#### Update the start command to `node .output/server/index.mjs`

#### Click 'Advanced' and add an environment variable with `NITRO_PRESET` set to `render_com`. You may also need to add a `NODE_VERSION` environment variable set to `20` for the build to succeed ([docs](https://render.com/docs/node-version){rel=""nofollow""}).

#### Click 'Create Web Service'.

::

## Infrastructure as Code (IaC)

1. Create a file called `render.yaml` with following content at the root of your repository.

> This file followed by [Infrastructure as Code](https://render.com/docs/infrastructure-as-code){rel=""nofollow""} on Render

```yaml
services:
  - type: web
    name: 
    env: node
    branch: main
    startCommand: node .output/server/index.mjs
    buildCommand: npx nypm install && npm run build
    envVars:
    - key: NITRO_PRESET
      value: render_com
```

1. [Create a new Blueprint Instance](https://dashboard.render.com/select-repo?type=blueprint){rel=""nofollow""} and select the repository containing your `render.yaml` file.

You should be good to go!

# StormKit

**Preset:** `stormkit`

:read-more{title="Stormkit" to="https://www.stormkit.io"}

::note
Integration with [Stormkit](https://www.stormkit.io/){rel=""nofollow""} is possible with [zero configuration](https://nitro.build/deploy#zero-config-providers).
::

## Setup

Follow the steps to [create a new app](https://app.stormkit.io/apps/new){rel=""nofollow""} on Stormkit.

![Create a new app on Stormkit](https://nitro.build/images/stormkit-new-app.png)

## Deployment

By default, Stormkit will deploy your apps automatically when you push changes to your main branch. But to trigger a manual deploy (for example, you might do this for the very first deployment), you may click `Deploy now`.

![Trigger a manual deploy with Deploy Now](https://nitro.build/images/stormkit-deploy.png)
