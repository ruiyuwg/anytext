# Quick start

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Patch is a Sanity Agent Action that helps you make schema-aware patches to documents. You can run Patch from anywhere you can execute code, such as [Sanity Functions](https://www.sanity.io/docs/functions/functions-introduction), custom components, webhook listeners, CI/CD pipelines, migration scripts, and more.

In this guide, you'll use Patch to modify documents in a safe, schema-aware way. You'll use `@sanity/client` to run Patch (you can also make requests using the [HTTP API](https://www.sanity.io/docs/http-reference/agent-actions) directly).

> \[!TIP]
> Patch doesn't use an LLM
> Unlike many Agent Actions, Patch doesn't use an LLM and instead relies on your schema.
> This means it uses standard Sanity API billing for API requests.

**Prerequisites**:

- `@sanity/client` v7.4.0 or higher and an environment to run client requests.
- API Version `vX` is required for any requests to the Agent Actions APIs.
- Optional: In Node.js v23.6 and above, you can run the TypeScript examples below without additional servers or build processes. Alternatively, you can use [earlier versions with an experimental flag](https://nodejs.org/en/learn/typescript/run-natively). Converting the examples to JavaScript is okay too.
- An API or personal token to make authenticated requests.

## Obtain your schema ID

Patch requires an uploaded schema. If you've deployed recently, you can check for a list of uploaded schemas by running the `schema list` command. If you don't see a schema or want to deploy the latest version, redeploy your studio to Sanity or deploy the schema.

**List schema**

```sh
npx sanity schema list
```

**Deploy Studio**

```sh
npx sanity deploy
```

**Deploy schema**

```sh
npx sanity schema deploy
```

Copy the schema ID, which you'll need for making Agent Action requests.

[You can learn more about schema deployment here](https://www.sanity.io/docs/apis-and-sdks/schema-deployment).

## Configure the client

Import and configure `@sanity/client` with the `projectId`, `dataset`, API `token`, and an `apiVersion` of vX.

```typescript
import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: '<project-id>',
    dataset: '<datset-name>', // such as 'production'
    apiVersion: 'vX',
    token: '<editor-token>'
})
```

If you're already using the client elsewhere in an application, you can reuse its base configuration. If you need to adjust the token and/or API version, use the `withConfig` method to create a new client based on your existing one. For example:

```typescript
// ...
const patchClient = client.withConfig({
  token: '<your-token>',
})
```

## Patch basics

At it's core, Patch works much like the patch format used by many Content Lake APIs. The big difference is that Agent Action Patch is aware of your schema. It validates paths and ensures that the provided values are compatible with the target schema.

Patch relies heavily targets, paths, and operations.

- **Targets** and \*\*paths \*\*tell Patch which parts of a document to affect.
- **Operations** tell Patch how to reconcile new and old data.

To learn more about these concepts, see the [Targets and paths documentation](https://www.sanity.io/docs/agent-actions/targets-paths).

Here's an example of a patch request that updates a nested title field and changes the title to "New title".

```
await client.agent.action.patch({
  schemaId: 'sanity.workspace.schema.production',
  documentId: 'documentId',
  target: {
    path: ['metadata', 'title'], // path to metadata.title
    operation: 'set',
    value: 'New title'
  }
});
```

## Multi-target patches

Patch excels at targeted, multi-target edits. This example uses multiple targets with different operations to mutate the document.

```
await client.agent.action.patch({
  schemaId: 'sanity.workspace.schema.production',
  documentId: 'documentId',
  target: [
    { path: ['title'], operation: 'set', value: 'New title' },
    {
      path: ['array'], 
      operation: 'append', 
      value: [
        { _type: 'item', title: 'New Array item' }, // key will be generated
        { _type: 'item', title: 'Another new array item', _key: 'explicitKey' }
      ]
    },
    { path: ['customFieldName', {_key: 'abc'}, 'title'], operation: 'unset'},
    
    // 'mixed' will set non-array fields, and append to array fields.
    // Objects are merged, not overwritten.
    {
      path: ['customObject'],
      operation: 'mixed', 
      value: {
        // mixed mode implies set for string fields
        description: 'Hello',
        // mixed mode implies append for arrays
        otherArray: [{_type: 'item', title: 'a'}]
      }
    }
  ]
});
```

# Setting up your studio

## Create a new Studio with Sanity CLI

![Video](https://stream.mux.com/wIMs3CS7T4pP7hRArpQZsBZ01Be02vCjbK)

Run the command in your Terminal to initialize your project on your local computer.

See the documentation if you are [having issues with the CLI](https://www.sanity.io/docs/help/cli-errors).

**Terminal**

```sh
npm create sanity@latest -- --dataset production --template clean --typescript --output-path studio-hello-world
cd studio-hello-world
```

## Run Sanity Studio locally

Inside the directory of the Studio, start the development server by running the following command.

**Terminal**

```sh
# in studio-hello-world 
npm run dev
```

## Log in to the Studio

**Open** the Studio running locally in your browser from <http://localhost:3333>.

You should now see a screen prompting you to log in to the Studio. Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

# Defining a schema

## Create a new document type

![Video](https://stream.mux.com/IfVfAwxfwOKN2khdGCQ3cs5IuF1rYte1)

Create a new file in your Studio’s `schemaTypes` folder called `postType.ts` with the code below which contains a set of fields for a new `post` document type.

**/studio-hello-world/schemaTypes/postType.ts**

```
import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
```

## Register the `post` schema type to the Studio schema

Now you can import this document type into the `schemaTypes` array in the `index.ts` file in the same folder.

**/studio-hello-world/schemaTypes/index.ts**

```
import {postType} from './postType'

export const schemaTypes = [postType]
```

## Publish your first document

When you save these two files, your Studio should automatically reload and show your first document type. Click the `+` symbol at the top left to create and publish a new `post` document.

# Query content with GROQ

## Write your first GROQ query

![Video](https://stream.mux.com/Mc12Sdeu00ugrGuQyz00Du1G4AQZmT36UV)

Open **Vision** in your Studio's top nav bar and paste this query into the **Query** code block field.

**Vision**

```groq
*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt
}
```

- `*` represents all documents in a dataset as an array
- `[_type == "post"]` represents a **filter** to only return matching documents
- `{ _id, title, slug, publishedAt }` represents a **projection** which defines the attributes from those documents that you wish to include in the response.

## Run the query

Click **Fetch** to see the JSON output in **Results**. You should see the document you previously published in the results.

Queries run in Vision use your authenticated session, so you will see private documents – which have a `.` in the `_id` key, like `drafts.`. You will not see when queried from your front end in the next step.

# Deploying the Studio

## Deploy your Studio with Sanity

![Video](https://stream.mux.com/CvYhCQr8e1oZt98NW202BZLLNv376VVKc)

In your Studio directory (`studio-hello-world`) run the following command to deploy your Sanity Studio.

**Terminal**

```sh
npm run deploy
```

## Invite a collaborator

Now that you’ve deployed your Studio, you can optionally invite a collaborator to your project. Navigate to your project in [Sanity Manage](https://www.sanity.io/manage), then select "Members".

They will be able to access the deployed Studio, where you can collaborate together on creating content.

# Dashboard

#### Explore Dashboard

[Meet the Dashboard](https://www.sanity.io/docs/dashboard/dashboard-introduction)

[Set up and configure Dashboard](https://www.sanity.io/docs/dashboard/dashboard-configure)

#### Custom apps for Dashboard

[App SDK](https://www.sanity.io/docs/app-sdk)

[App SDK Quickstart Guide](https://www.sanity.io/docs/app-sdk/sdk-quickstart)
