# Common patterns

Functions create the ability for countless content-driven opportunities. This guide collects common patterns and approaches to working with Functions.

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Prerequisites:

- Complete the [Functions quick start](https://www.sanity.io/docs/functions/function-quickstart), or be comfortable writing and deploying a Sanity Function.
- `sanity` CLI v4.12.0 or higher is recommended to interact with Blueprints and Functions. You can always run the latest CLI commands with `npx sanity@latest`.

The examples below assume you've created a new function, and configured it to trigger based on your own schema requirements.

## Explore the exchange

Looking for more ideas and ready-made functions? Check out the a curated list in the exchange.

#### Explore more functions

[Auto-tag blog posts](https://www.sanity.io/recipes/auto-tag-function-ba7ce6e2)

[Algolia Sync](https://www.sanity.io/recipes/algolia-sync-function-cae9ec0f)

[Post to Bluesky](https://www.sanity.io/recipes/post-to-bluesky-fd18322f)

[Explore more recipes](https://www.sanity.io/recipes)

## Ping an endpoint on publish

A common approach to invalidating CDNs and triggering new builds is to ping, or make a GET request, to an endpoint. Some require you to provide specifics, such as the endpoint or slug for targeted refreshes. Others only require a single URL.

Create a function and configure it to trigger when your target document publishes. For the example, make sure to [define an environment variable](https://www.sanity.io/docs/functions/function-env-vars) named `DEPLOY_HOOK_URL`.

**index.ts (TypeScript)**

```
import { documentEventHandler } from '@sanity/functions'

export const handler = documentEventHandler(async ({ context, event }) => {
  const URL = process.env.DEPLOY_HOOK_URL
  if (!URL) {
    throw new Error("DEPLOY_HOOK_URL is not set")
  }
  try {
    await fetch(URL)
  } catch (error) {
    console.error(error)
  }
})
```

**index.js (JavaScript)**

```javascript
export async function handler({context, event}) {
  const URL = process.env.DEPLOY_HOOK_URL
  if (!URL) {
    throw new Error("DEPLOY_HOOK_URL is not set")
  }
  try {
    await fetch(URL)
  } catch (error) {
    console.error(error)
  }
}
```

To find the deploy or trigger URL for your provider, check their documentation. We've included a few common links below:

- [Vercel: Create and trigger deploy hooks](https://vercel.com/docs/deploy-hooks)
- [Azure: purge content](https://learn.microsoft.com/en-us/rest/api/cdn/endpoints/purge-content?view=rest-cdn-2025-04-15\&tabs=HTTP)
- [Cloudflare: purge cache](https://developers.cloudflare.com/api/resources/cache/methods/purge/)

## Automatically translate documents

You can combine Agent Actions Translate with Functions to translate documents automatically.

We recommend completing [the quick start](https://www.sanity.io/docs/agent-actions/translate-quickstart) if you haven't used Translate before.

First, create a function and configure it to only trigger when a document's language is in your "from" language. Here's an example of the function resource in `sanity.blueprint.ts`.

**sanity.blueprint.ts**

```typescript
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: "translate",
      event: {
        on: ["publish"],
        filter: "_type == 'post' && language == 'en-US'",
        projection: "{_id}"
      }
    }),
  ],
})
```

> \[!TIP]
> Use caution when creating documents
> The GROQ filter in this example is important. It makes sure that the function only runs when the language is set to English. When we generate a new translation in the next code block, Translate sets that field to Greek. This stops the new document from triggering the same function and creating a recursive loop.
> You could also create draft or version documents to prevent the "on publish" function from triggering.

For this approach, we have documents with a `language` set. We only want the English language files.

1. [Import and configure the @sanity/client](https://www.sanity.io/docs/functions/functions-js-client).
2. Capture the document `data` from the `event`.
3. Construct a `translate` request.

**index.ts (TypeScript)**

```
import { documentEventHandler } from '@sanity/functions'
import { createClient } from '@sanity/client'

export const handler = documentEventHandler(async ({ context, event }) => {
  const { data } = event
  const client = createClient({
    ...context.clientOptions,
    apiVersion: 'vX',
  })
  const targetLanguage = {
    id: "el-GR",
    title: "Greek"
  }
  // Create a consistent ID based on the source and target language.
  // This allows the function to override the document in the future
  const targetId = `${data._id}-${targetLanguage.id}`

  try {

    await client.agent.action.translate({
      // Replace with your schema ID
      schemaId: "your-schema-id",
      
      // Tell the client to run the action asynchronously.
      // We don't need to wait for it to complete.
      async: true,
      
      // Tell the client the ID of the document to use as the source.
      documentId: data._id,

      // Set the language field to the target language.
      languageFieldPath: "language",
      
      // Set the operation mode
      // createOrReplace will override the ID in future invocations.
      targetDocument: { 
        operation: "createOrReplace",
        _id: targetId
      },
      
      // Set the 'from' and 'to' language
      fromLanguage: {id: "en-US", title: "English"},
      toLanguage: {id: targetLanguage.id, title: targetLanguage.title},
    });
  } catch (error) {
    console.error(error)
  }
})
```

**index.js (JavaScript)**

```javascript
import { createClient } from '@sanity/client'

export async function handler({context, event}) {
  const { data } = event
  const client = createClient({
    ...context.clientOptions,
    apiVersion: 'vX',
  })
  const targetLanguage = {
    id: "el-GR",
    title: "Greek"
  }
  // Create a consistent ID based on the source and target language.
  // This allows the function to override the document in the future
  const targetId = `${data._id}-${targetLanguage.id}`

  try {

    await client.agent.action.translate({
      // Replace with your schema ID
      schemaId: "your-schema-id",
      
      // Tell the client to run the action asynchronously.
      // We don't need to wait for it to complete.
      async: true,
      
      // Tell the client the ID of the document to use as the source.
      documentId: data._id,

      // Set the language field to the target language.
      languageFieldPath: "language",
      
      // Set the operation mode
      // createOrReplace will override the ID in future invocations.
      targetDocument: { 
        operation: "createOrReplace",
        _id: targetId
      },
      
      // Set the 'from' and 'to' language
      fromLanguage: {id: "en-US", title: "English"},
      toLanguage: {id: targetLanguage.id, title: targetLanguage.title},
    });
  } catch (error) {
    console.error(error)
  }
}
```

Now, when you publish an English-language document, it will create a Greek version. [Learn more about Agent Actions here](https://www.sanity.io/docs/agent-actions/introduction).

## Set an undefined value with `setIfMissing`

You may have values in documents that are sometimes set by people, but otherwise could be derived programatically. This example uses GROQ's `!defined` function and a `setIfMissing` patch to add a the current date and time as the published date to a document, but only when it hasn't been set.

For this example, you'll need to:

1. Set up a new function or edit an existing one.
2. Import and configure the `@sanity/client` if you haven't already.

First, modify the following filter and add it to your function's `event` in the `sanity.blueprint.ts` configuration.

```text
"filter": "_type == 'post' && !defined(firstPublished)"
```

Adjust the `_type` and `firstPublished` values to match properties from your schema.  `!defined` checks that the property is not set, which prevents the function from running if the document receives future updates.

Next, create a `setIfMissing` patch to set the same field from the filter. `setIfMissing` is  redundant here, as it *should* be empty if `!defined` worked as intended. It's still a useful to approach when you only want to update empty fields.

**index.ts (TypeScript)**

```
import { documentEventHandler } from '@sanity/functions'
import { createClient } from '@sanity/client'

export const handler = documentEventHandler(async ({ context, event }) => {
  const { data } = event
  const client = createClient({
    ...context.clientOptions,
    apiVersion: "2025-02-19"
  })
  
  try {
    await client.patch(data._id, {
      setIfMissing: {
        firstPublished: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error(error)
  }
})
```

**index.js (JavaScript)**

```javascript
import { createClient } from '@sanity/client'

export async function handler({context, event}) {
  const { data } = event
  const client = createClient({
    ...context.clientOptions,
    apiVersion: "2025-02-19"
  })
  
  try {
    await client.patch(data._id, {
      setIfMissing: {
        firstPublished: new Date().toISOString()
      }
    })
  } catch (error) {
    console.error(error)
  }
} 
```

## Scope Functions to a specific dataset

By default, your functions run against all datasets for the project they've been configured with. You can define a [resource](https://www.sanity.io/docs/blueprints/blueprint-config) in your functions config to cause only changes in a specific dataset to trigger functions.

**sanity.blueprint.ts**

```
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'
export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: "log-event",
      event: {
        on: ["update"],
        filter: "_type == 'post'",
        resource: {
          type: 'dataset',
          id: 'myProjectId.production'
        },
      },
    })
  ]
})
```

Alternatively, you can also narrow dataset scope with filters and the `sanity::dataset()` function.

**sanity.blueprint.ts**

```
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'
export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: "log-event",
      event: {
        on: ["update"],
        filter: "_type == 'post' && sanity::dataset() == 'production'",
      },
    })
  ]
})
```

## Use Functions with Media Library assets

To configure a function to react to changes in assets in Media Library, use the `defineMediaLibraryAssetFunction` helper and configure the [resource object](https://www.sanity.io/docs/blueprints/blueprint-config).

You can try things like:

- Comparing changes in an asset's aspect data.
- Kicking off a review flow when new versions are added to an asset.
- Update references when assets are deleted.

> \[!WARNING]
> If you're using the TS/JS configuration format, you'll need to update `@sanity/blueprints` to v0.4.0 or later to access `defineMediaLibaryAssetFunction`.

Asset functions only support the `sanity.asset` document `_type`. You can apply additional filters, but it will only run on documents of this type.

For example, this function will run whenever someone deletes an asset that's referenced by another document in your organization.

**sanity.blueprint.ts**

```
import { defineBlueprint, defineMediaLibraryAssetFunction } from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineMediaLibraryAssetFunction({
      name: 'ml-asset',
      event: {
        on: ['delete'],
        filter: "documents::incomingGlobalDocumentReferenceCount() > 0",
        projection: "{_id, versions, title}",
        resource: {
          type: 'media-library',
          id: 'mlFqEeKZYecz',
        }
      },
    })
  ],
})
```

If you need to query or mutate ML documents from your function, make sure to [configure the @sanity/client](https://www.sanity.io/docs/functions/functions-js-client) for use with Media Library.

Learn more about working with Media Library documents in the [Media Library documentation](https://www.sanity.io/docs/media-library/introduction).

## Enable recursion control in unofficial clients

Sanity client (`@sanity/client` v7.12.0 or later) includes recursion protection by reading and setting a lineage header. If you're mutating documents from a function and not using the client, you can implement this functionality yourself.

1. Read the `process.env.X_SANITY_LINEAGE` environment variable.
2. Pass the value to the `X-Sanity-Lineage` header of any requests that mutate a document.

This allows Sanity's infrastructure to limit function invocation chains just as it does for the official client.
