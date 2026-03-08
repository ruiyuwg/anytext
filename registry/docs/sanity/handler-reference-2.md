# Handler reference

[Overview](https://www.sanity.io/docs/functions/functions-introduction)

[Quick start](https://www.sanity.io/docs/functions/function-quickstart)

Every Function must export a `handler`. Handlers contain the logic that the Function infrastructure runs when your document changes trigger the function.

Create a function handler with the `sanity blueprints add function` command. Every handler receives an object containing `context` and `event` parameters. The function does not require a return value.

## `context` properties

#### Properties

| Property | Description |
| --- | --- |
| clientOptions | Provides properties for configuring the Sanity client (@sanity/client). Most commonly used to pass details about the invoking project dataset to a client configuration. See the configuring @sanity/client in Functions guide for details. |
| local | The context.local value is set to true for functions invoked with sanity functions test and sanity functions dev. This can be helpful when you want code to only execute in local environments.

It is undefined for functions in production. |
| eventResourceType | The resource type that triggered the function. For Document functions, this would be dataset. For Media Library functions, this would be media-library. |
| eventResourceId | The resource ID that triggered the function. For Document functions, this would be the ID of a dataset in the form <project-id>.<dataset-name>. For Media Library functions, this would be the Media Library id. |

### `clientOptions` properties

#### Properties

| Property | Description |
| --- | --- |
| projectId | The ID of the project that triggered this function. |
| dataset | The dataset name of the project that triggered this function.

The sanity functions test command won't include a dataset by default. Run with the --dataset flag to pass a dataset to clientOptions. For example: sanity functions test log-event --dataset production |
| apiHost | Defaults to https://api.sanity.io. |
| token | A token provided by the function with access to your Sanity project. This token is automatically generated with the editor role and added to your project when deploying the blueprint.

The sanity functions test command won't include a token by default. Run with the --with-user-token flag to pass a the logged-in user's token.

Note: the token is obfuscated in logs for security. You can directly use it to configure the Sanity client or to make API calls. |

### Example context

```javascript
{
  clientOptions: {
    apiHost: 'https://api.sanity.io',
    projectId: 'abc123',
    dataset: 'production',
    token: '***************'
  }
}
```

## `event` properties

Contains the shape of the event. In the case of document triggers, like `publish`, the event shape is the document. This will vary based on your schema.

### Example event

```javascript
{
  data: { 
    _id: '1234',
    _type: 'article',
    title: 'Functions quick start',
    _createdAt: '2025-04-24T16:26:58.901Z',
    _publishedAt: '2025-04-24T16:26:58.901Z',
  }
}
```

## Example handler

**index.ts (TypeScript)**

```
import { documentEventHandler } from '@sanity/functions'

export const handler = documentEventHandler(async ({ context, event }) => {
  console.log("Context: ", context)
  console.log("Event: ", event)
})
```

**index.js (JavaScript)**

```javascript
export async function handler({context, event}) {
  console.log("Context: ", context)
  console.log("Event: ", event)
}
```

## Type support

When you create a new TypeScript function with `sanity blueprint add`, you'll be prompted to add types.

If you did not add types as part of the init process, they are available in the [@sanity/functions](https://www.npmjs.com/package/@sanity/functions) package:

**CLI**

```sh
npm install -D @sanity/functions
```

You can then import and use the `documentEventHandler` helper to provide type support. See the example TS handler above for implementation details.

### Basic usage

Import `documentEventHandler`.

**index.ts**

```
import {documentEventHandler} from '@sanity/functions'

export const handler = documentEventHandler(async ({context, event}) => {
  // Your function implementation
  console.log('Document updated:', event.data)
})
```

### Pass type for event data

If you need to type `event.data`, and you know the shape of your incoming data, you can provide it to `documentEventHandler`.

**index.ts**

```
import {documentEventHandler} from '@sanity/functions'

interface NotificationData {
  documentId: string
  text: string
}

export const handler = documentEventHandler<NotificationData>(async ({event}) => {
  console.log(event.data.text) // Typed as `string`
  console.log(event.data.notSet) // Will yield type error
})
```

### Type only (TypeScript)

Import the `DocumentEventHandler` type.

**index.ts**

```
import {type DocumentEventHandler} from '@sanity/functions'

export const handler: DocumentEventHandler = async ({context, event}) => {
  // …
}

// …you can also define the data type:
export const handler: DocumentEventHandler<{text: string}> = async ({event}) => {
  console.log(event.data.text)
}
```

### Type only (JavaScript)

Use the `@type` comment syntax.

**index.js**

```javascript
/** @type {import('@sanity/functions').DocumentEventHandler} */
export const handler = async ({context, event}) => {
  console.log(event.data.text)
}

// …you can also define the data type:
/** @type {import('@sanity/functions').DocumentEventHandler<{text: string}>} */
export const handler = async ({event}) => {
  console.log(event.data.text)
}
```
