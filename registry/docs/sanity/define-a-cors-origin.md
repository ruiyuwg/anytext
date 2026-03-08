# Define a CORS origin

CORS is a security mechanism that allows browsers to safely make requests across different origins. Without it, the browser's Same-Origin Policy would block your Sanity Studio from communicating with the Sanity API, since they run on different domains.

In this guide, you’ll define a CORS origin resource with Blueprints and deploy the blueprint to Sanity.

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs and behavior may change at any time. Follow the [changelog](https://www.sanity.io/docs/changelog) for updates.

Prerequisites:

- The latest version of `sanity` CLI is recommended to interact with Blueprints. You can always run the latest CLI commands with `npx sanity@latest`.
- An existing project and [a role with permission](https://www.sanity.io/docs/content-lake/roles-concepts) to edit a project’s CORS origins (requires the `sanity-project-cors` permission).
- CORS support was first introduced in `@sanity/blueprints` v0.11.0. We recommend using the latest version of the library.

## Initialize a new blueprint

To initialize a blueprint in the current directory, run the command below. Replace the project ID with your own. Skip to the next section if you already have a blueprint set up.

**CLI**

```sh
npx sanity@latest blueprints init . --type ts --project-id <project-id> --stack-name production
```

## Configure the CORS origin

Use the `defineCorsOrigin` helper to define an origin.

**sanity.blueprint.ts**

```
import { defineBlueprint, defineCorsOrigin } from "@sanity/blueprints"

export default defineBlueprint({
  resources: [
    defineCorsOrigin({
      name: 'studio-origin',
      origin: 'https://your-studio.your-domain.com',
      // allowCredentials: true, // optional, only set if needed
    })
  ],
})
```

A full list of available configuration options is available in the [reference documentation](https://reference.sanity.io/_sanity/blueprints/defineCorsOrigin/).

## Deploy the blueprint

Next, deploy the blueprint.

```sh
npx sanity blueprints deploy
```

Once the deployment finishes, your CORs origin resource is active.

If you need to make changes, update the blueprint file (`sanity.blueprint.ts`) and run the deploy command again.

## Remove the CORS origin

To remove a resources created with a blueprint, you need to either:

1. Remove the definition from the blueprint, and run the `deploy` command again.
2. Destroy the blueprint with the `destroy` command.

Destroy will “undeploy” the blueprint and remove the [stack](https://www.sanity.io/docs/blueprints/blueprints-introduction), leaving only your local files.

### Redeploy a destroyed blueprint

When you run `blueprints destroy`, it's as if you never used `blueprints init` during setup. The only difference is you still have all the files in your directory. To use this blueprint again and redeploy it, you'll need to let Sanity know about it. You can do this by running init again:

**CLI**

```sh
npx sanity blueprints init
```

This launches an editing interface that lets you reconfigure the blueprint, if needed, and it reconnects the blueprint to Sanity. Now you can add more functions or redeploy. Keep in mind that any environment variables added before destroying the blueprint will not carry over.

## Learn more about CORS

#### Explore CORS

[Access Your Data (CORS)](https://www.sanity.io/docs/content-lake/cors)

[Browser security & CORS](https://www.sanity.io/docs/content-lake/browser-security-and-cors)

[CORS](https://www.sanity.io/docs/cli-reference/cors-in-cli)
