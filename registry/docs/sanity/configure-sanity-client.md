# Configure @sanity/client

Functions have the ability to connect back to Sanity and manipulate not only the incoming document, but any document in your dataset. By including details about your project in the context, Functions enable you to configure a `@sanity/client` instance and interact with any Sanity API.

In this guide, you'll learn to install and configure `@sanity/client` in a Sanity Function. Then you'll use it to make interact with your project dataset.

Prerequisites:

- Complete the [Functions quick start](https://www.sanity.io/docs/functions/function-quickstart), or be comfortable writing and deploying a Sanity Function.
- The latest version of `sanity` CLI (`sanity@latest`) is recommended to interact with Blueprints and Functions as shown in this guide. You can always run the latest CLI commands with `npx sanity@latest`.

## Create a function

If you don't already have a Blueprint and function set up, create them now.

Initialize a Blueprint:

**CLI**

```sh
npx sanity@latest blueprints init
```

Add a function:

**CLI**

```sh
npx sanity blueprints add function
```

In this example, we'll set the function to trigger on **Document Publish**, use **TypeScript**, and set the name to **clientExample**.

**Output**

```text
✔ Enter function name: clientExample
✔ Choose function type: Document Publish
✔ Choose function language: TypeScript
```

This creates a function in the `functions/clientExample` directory.

## Add `@sanity/client` to the function

> \[!TIP]
> Recursion protection
> In `@sanity/client` v7.12.0, Sanity Functions introduced a recursion-protection feature that limits functions from chaining beyond 16 invocations. You should still use caution when mutating documents that may invoke the same function that you're mutating from, but you can do so with less risk of runaway recursion.

To install the Sanity client, add it to your project at the blueprints root (where your `sanity.blueprint.ts` file is).

**NPM**

```sh
npm install @sanity/client
```

**PNPM**

```sh
pnpm add @sanity/client
```

> \[!TIP]
> Function dependencies
> Functions can be self-contained, managing their own dependencies, or share dependencies with other functions in the Blueprint. This guide adds dependencies at the Blueprint level, where all functions can import them.
> If you prefer, you can keep each function self-contained by adding dependencies directly to individual function folders. To do so, navigate to the function folder before installing the package. In this case, the function will only use it's local dependencies.
> Learn more in the guide on [managing function dependencies](https://www.sanity.io/docs/functions/function-dependencies).

Once the install completes, open the function's `index.ts` file and update the starter code.

- Import `createClient` .
- Use `context.clientOptions` to configure the client.
- Make and log a request to the API to test the client.

**index.ts (TypeScript)**

```
import { documentEventHandler } from '@sanity/functions'
import { createClient } from '@sanity/client'

export const handler = documentEventHandler(async ({ context, event }) => {
  const client = createClient({
    ...context.clientOptions,
    apiVersion: '2025-05-08',
  })
  const posts = await client.fetch('*[_type == "post"]')
  console.log(posts)
})
```

**index.js (JavaScript**

```javascript
import { createClient } from '@sanity/client'
export async function handler({context, event}) {
  const client = createClient({
    ...context.clientOptions,
    apiVersion: '2025-05-08',
  })
  const posts = await client.fetch('*[_type == "post"]')
  console.log(posts)
}
```

The context includes a `clientOptions` object with details about your project, dataset, and a robot token. Use `clientOptions` along with any preferred settings to create a new client. Aside from the values included with `clientOptions`, you must also set your preferred `apiVersion`. You should also set the `useCdn` option, along with any other client configuration settings you need for your specific request.

When developing locally with the `test` command, `clientOptions` only contains the `projectId` and `apiHost` values. You can pass additional values to `clientOptions` by using flags when running the test. The `--dataset` command lets you define the dataset, and `--with-user-token` will pass your user token. For example:

```sh
pnpx sanity functions test event-log --dataset production --with-user-token
```

> \[!TIP]
> Obfuscated tokens
> Logs will obfuscate `clientOptions.token` by replacing parts of the token with asterisks. This is limited to logging, and you can safely use the token to make API calls.

You can read more about clientOptions and all available properties in the [handler reference](https://www.sanity.io/docs/functions/function-wrapper).

Additional client-specific configuration options, and usage guides for the JavaScript client are available in the [@sanity/client readme](https://github.com/sanity-io/client/).

## Preventing writes during testing

The `sanity functions test` and `dev` commands simulate a function invocation, but they still execute your code. This can lead to mutations. To prevent this, you can take advantage of `context.local`.

You can wrap mutations in a conditional check to limit their execution to production only.

```
// Check if function context is NOT test/dev
if (!context.local) {
  await client.createOrReplace(doc)
}
```

You can also use `context.local` with the `dryRun` or `noWrite` options for various mutations and actions.

**Patch**

```
// will set dryRun to true in test / dev
client
  .patch('bike-123')
  .set({inStock: false})
  .inc({numSold: 1})
  .commit({ dryRun: context.local }) 
```

**Actions**

```
// will set dryRun to true in test
client.action({
    actionType: 'sanity.action.document.create',
    publishedId: 'bike-123',
    attributes: {name: 'Sanity Tandem Extraordinaire', _type: 'bike', seats: 1},
    ifExists: 'fail',
  },
  {dryRun: context.local}
)
```

**Agent Actions**

```
client.agent.action.generate({
  schemaId: 'your-schema-id',
  documentId: 'your-document-id',
  instruction: 'Write a summary for the following topic: $topic',
  instructionParams: {
    topic: 'Grapefruit',
  },
  target: {path: ['body']},
  noWrite: context.local
})
```

## Use the client with Media Library

Accessing Media Library (ML) with the client from functions require some additional information.

> \[!NOTE]
> ML support in functions requires `@sanity/blueprints` v0.4.0 or later and `@sanity/functions` v1.1.0 or later. ML support in `@sanity/client` requires v7.14.1 or later.

### Media Library Functions

If your function is a Media Library function, one triggered by events in the Media Library, you can get the Media Library identifier from the `context`.

The `context.eventResourceId` will be your Media Library's identifier. Keep in mind that in non-media-library functions, this identifier will be that of the triggering resource, like a dataset.

**index.ts**

```
import { documentEventHandler } from '@sanity/functions'
import { createClient } from '@sanity/client'

export const handler = documentEventHandler(async ({ context, event }) => {
  // This will be the Media Library ID of the triggering library
  const { eventResourceId } = context

  // Configure the client to make requests to Media Library
  const client = createClient({
    ...context.clientOptions,
    apiVersion: '2025-05-08',
    resource: {
      type: 'media-library',
      id: eventResourceId
    }
  })
  
  const QUERY = `*[_type == 'sanity.imageAsset']`
  
  const response = await client.fetch(QUERY)
})
```

### Document Functions

If your function is a document function, one not triggered by a Media Library event, you'll need to pass the ML identifier in another way. Either by hard-coding it in the function, or by setting it as an [environment variable](https://www.sanity.io/docs/functions/function-env-vars).

## Tips for using the client

- The `sanity functions test` command won't include a token or dataset by default. To include a token in `context.clientOptions`, run the command with the `--with-user-token` flag. To set a dataset, use the `--dataset my-dataset-name` flag, replacing the value with your project's dataset.
- Be cautious mutating the incoming document—the one that triggered the function—in a way that will trigger it again. The client limits recursive chains to 16 invocations.
- Don't re-fetch the `event` document unless you need. Use the incoming payload to save a request.
- The Sanity client isn't required to make requests to Sanity. If you're focused on the fastest, lightest function possible, you can build API calls manually with Node's `fetch` and the token, projectId, and dataset from `context.clientOptions`.
