# Hosting and deployment

[Sanity Studio](https://www.sanity.io/studio) is an open-source React-based Single Page Application (SPA) that runs entirely in the browser and connects with Sanity's hosted APIs and Content Lake.

There are two primary ways of hosting Sanity Studio:

- We can host this web application for you, giving you a nice `my-company.sanity.studio` URL. With a single Sanity CLI command, you can deploy and manage multiple Studios for different environments or use cases under the same project.
- You can deploy Sanity Studio on any hosting platform that supports SPA routing.

The built-in Sanity Studio hosting is the quickest and easiest way to make the Studio accessible on the web. Self-hosting is usually preferred when you wish to use platform-specific features that are not offered by our hosting and when you want to host the Studio under your own domain.

It's also possible to [embed Sanity Studio](https://www.sanity.io/docs/studio/embedding-sanity-studio) in an application as a dependency – however, depending on your setup and configuration, you might forego certain features that are tied to the build tooling that comes with the Sanity CLI.

[Upgrading Sanity Studio](https://www.sanity.io/docs/studio/upgrade)

## Hosting with Sanity

```sh
# With the CLI globally installed
sanity deploy

# Using npx
npx sanity deploy
```

Running this command from your Studio project folder builds and deploys your Studio, making it available on a `*.sanity.studio` URL. When you deploy, you will be asked to choose a unique hostname for your Studio.

> \[!WARNING]
> Hostnames must begin with letters
> Studio hostnames must begin with alpha characters. Numbers and symbols are not permitted.

On subsequent deploys, you can select an existing hostname in a prompt or specify it in the CLI config file (`sanity.cli.js|ts)` for automated deployments.

**sanity.cli.ts**

```typescript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'projectid',
    dataset: 'production'
  },
  // Tip: You can use an environment variable for studioHost if you want to deploy separate Studios for production, staging, testing etc.
  studioHost: 'my-company'
})
```

> \[!WARNING]
> Gotcha
> The `sanity deploy` command works by building the source files in your Studio project into static files, which are then uploaded and served from your chosen `sanity.studio` domain.
> Logged-in access to your Studio, and private data in your Content Lake, is always secured by authentication. However, no authentication is involved when serving the built Studio's files. Make sure not to include any sensitive data – such as authentication tokens – in your Studio's configuration files.

You will also be prompted to, optionally, add your `appId` to your client configuration. Doing so will enable fine-grained control of how and when your studio will [auto-update](https://www.sanity.io/docs/archive/introduction-for-the-presence-api) in the [project management settings](https://www.sanity.io/docs/cli-reference/manage).

**sanity.cli.ts**

```
export default defineCliConfig({
  //…
  deployment: {
    appId: 'marpozwf8vgzhpk6ixqjk8lg',
  },
  //…
})
```

## Undeploying the Studio

```sh
# With the CLI globally installed
sanity undeploy

# Using npx
npx sanity undeploy
```

Run the command above to change the hostname later or remove the Studio from the web. You may choose a new hostname the next time you deploy.

The `undeploy` command targets the studio host defined in your `sanity.cli.ts` configuration. Use the environment variable strategy in the next section if you wish to enable deploying/undeploying different studio instances.

## Hosting with Sanity in a CI/CD flow

You can host with Sanity automatically with continuous integration tools.  This is convenient for automatically updating the hosted Studio when you push your local changes to source repositories or do manual releases. Add `@sanity/cli` as a development dependency and configure your CI/CD workflow to run the command `sanity deploy`. Remember to have the `sanity.cli.ts` config file in your Studio folder.

If you need to accommodate test, staging, and production deployments, then we recommend that you define the Studio host name (and other configuration) in  [environment variables](https://www.sanity.io/docs/studio/environment-variables) and access them in the config file like this:

```typescript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  studioHost: process.env.SANITY_STUDIO_HOSTNAME
})
```

### Authorizing Studio deployments

You also need to provide an authorization token using the `SANITY_AUTH_TOKEN` environment variable. This is because deploying with the `sanity deploy` command uses your local user session for authenticating with our hosting service, which won't necessarily be available in your CI/CD workflows. You can create a deploy token in [the project management dashboard](https://sanity.io/manage).

### Deploying pre-built Studios

If your CI/CD pipeline builds the Studio in a separate step, use --no-build to skip the build and deploy the existing dist/ directory:

```sh
sanity deploy --no-build
```

Schema extraction and manifest upload still run during deploy. The dist/ directory must exist before running this command. See [Deploy](https://www.sanity.io/docs/cli-reference/deploy) for the full pipeline.

## Self-hosting the Studio

Since the Studio consists of static HTML, CSS, and JavaScript files and communicates with Sanity through our HTTP API, it can be hosted anywhere. Popular hosting services like [Vercel](https://vercel.com/guides/deploying-sanity-studio-with-vercel) and [Netlify](https://www.netlify.com) make it possible to automatically deploy new versions of your Studio when you push it to code repositories like GitHub.

There are two things you need to make sure of when hosting the Studio yourself or with a service:

1. The server that delivers the Sanity Studio files needs to be configured for single-page application routing. This means if the requested URL path doesn't exist on the filesystem, it should serve `index.html` to allow the frontend router to handle the request. Most hosting services will have configuration options for this.
2. The domain for where the Studio is hosted must be [added as a valid domain in the project's CORS settings](https://www.sanity.io/docs/content-lake/cors). For security, the Sanity API ensures that only approved Studios can communicate with your project. This is in addition to other security measures such as user authentication, private datasets, and custom access rules.

If you host with Sanity, this is automatically handled for you. If your host does not support single-page-application routing, you can add a redirect rule to make sure non-existent paths are redirected properly. Check the documentation for your provider or server software.

### Specifying the base path

Normally, the Studio expects to be hosted at the root level of its hostname; for instance `https://studio.example.com/`. To serve the studio on a subpath, such as `https://example.com/studio`, you need to edit the CLI configuration file. You'll find it as `sanity.cli.js` or `sanity.cli.ts` in the root of your Studio project.

```javascript
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/studio'
  },
  // ...config continued
})

```

The Studio can now be served from `https://example.com/studio`. This will also change the base path of static files.

Most cases where you embed the Studio in another application will require you to set the basePath.

> \[!WARNING]
> Gotcha
> The `sanity.config.js` file *also* has a `basePath` property - this defines the base path of the [workspace](https://www.sanity.io/docs/studio/workspaces) and not the actual studio.
> In other words, the two `basePath`s gets joined together: if the CLI base path is set to `/studio` and the workspace base path is `/production`, the resulting base path for the "production" workspace will be `/studio/production`.

Setting the `SANITY_STUDIO_BASEPATH` environment variable is an alternative method of defining the base path for the studio, and will override any value set in the configuration file.

### Building the Studio for hosting

```sh
# With the CLI installed globally
sanity build

# With npx
npx sanity build

# With npx, specifying the build folder name to be "public"
npx sanity build public
```

Run the command above from the studio folder to generate the files for hosting. This will output the files to the `dist/` directory by default. Sometimes your environment requires another directory name, for instance `public`. You can specify this by entering the desired name after the `build` command.

Once the build is complete, the directory can be uploaded and hosted from any web hosting where you can control redirects for a Single-Page Application, like [Vercel](https://vercel.com), [Netlify](https://netlify.com), or [Cloudflare](https://pages.cloudflare.com/).

### Extract the manifest and deploy the schema

When you use `sanity deploy` to deploy to Sanity-managed hosting, manifest extraction and schema deployment happen automatically. When you self-host, you need to run these steps separately after building.

Without the manifest, features like the Dashboard, Canvas, and Agent Actions can’t discover your studio or its schema.

After building your studio, extract the manifest and deploy the schema:

Add these commands to your CI/CD pipeline or build script to keep your schema in sync with each deploy. For details on manifest extraction and schema deployment options, see [Schema deployment](https://www.sanity.io/docs/apis-and-sdks/schema-deployment).

### Registering the Studio

```sh
# With the CLI installed globally
sanity deploy --external

# With npx
npx sanity deploy --external

# With npx, specifying the build folder name to be "public"
npx sanity deploy --external
```

Run the command above from the studio folder to register your studio with Sanity. This will enable your studio and schema to be used across Sanity.

### Environment variables

Sometimes you want to configure the `projectId` , `dataset` or `studioHost` specified in `sanity.cli.js` and `sanity.config.js` at build time. This is useful for building multiple Studios from the same schema and code to facilitate different environments. See the documentation on [environment variables](https://www.sanity.io/docs/studio/environment-variables) for your options.

## GraphQL

How to deploy the [GraphQL APIs is covered in its own section](https://www.sanity.io/docs/content-lake/graphql).
