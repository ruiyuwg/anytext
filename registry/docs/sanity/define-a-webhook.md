# Define a webhook

With [webhooks](https://www.sanity.io/docs/content-lake/webhooks) you can send customized HTTP requests when documents in your content lake change. If you also need code to run when documents change, [you should try Functions](https://www.sanity.io/docs/functions/functions-introduction).

In this guide, you’ll define a webhook resource with Blueprints and deploy the blueprint to Sanity.

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs and behavior may change at any time. Follow the [changelog](https://www.sanity.io/docs/changelog) for updates.

Prerequisites:

- The latest version of `sanity` CLI is recommended to interact with Blueprints. You can always run the latest CLI commands with `npx sanity@latest`.
- An existing project and [a role with permission](https://www.sanity.io/docs/content-lake/roles-concepts) to edit webhooks (requires the `sanity-project-webhooks` permission).
- Webhook support was first introduced in `@sanity/blueprints` v0.11.0. We recommend using the latest version of the library.

## Initialize a new blueprint

To initialize a blueprint in the current directory, run the command below. Replace the project ID with your own. Skip to the next section if you already have a blueprint set up.

**CLI**

```sh
npx sanity@latest blueprints init . --type ts --project-id <project-id> --stack-name production
```

## Configure the document webhook

Use the `defineDocumentWebhook` helper to define a webhook.

**sanity.blueprint.ts**

```
import { defineBlueprint, defineDocumentWebhook } from "@sanity/blueprints"

export default defineBlueprint({
  resources: [
    defineDocumentWebhook({
      name: 'my-webhook',
      on: ['create'],
      url: 'https://example.com/webhook',
      filter: '_type == "post"',
      projection: '{_id}',
      dataset: 'production',
      apiVersion: 'v2026-01-01',
    })
  ],
})
```

A full list of available configuration options is available in the [reference documentation](https://reference.sanity.io/_sanity/blueprints/defineDocumentWebhook/).

## Deploy the blueprint

Once you’ve configured your webhook, deploy the blueprint.

```sh
npx sanity blueprints deploy
```

Once the deployment finishes, your webhook will begin sending updates whenever a document changes that matches the configuration.

If you need to make changes, update the blueprint file (`sanity.blueprint.ts`) and run the deploy command again.

## Remove the webhook

To remove a resource that’s been created with a blueprint, you need to either:

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

## Learn more about webhooks

#### Explore webhooks

[GROQ-powered webhooks](https://www.sanity.io/docs/content-lake/webhooks)

[GROQ-Powered Webhooks – Intro to Filters](https://www.sanity.io/docs/developer-guides/filters-in-groq-powered-webhooks)

[GROQ-Powered Webhooks – Intro to Projections](https://www.sanity.io/docs/developer-guides/projections-in-groq-powered-webhooks)
