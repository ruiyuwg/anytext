# Create a Document Function

Functions allow you to run small, single-purpose code whenever your content in Sanity changes. This guide explains how to set up your project, initialize your first blueprint, add a function, and deploy it to Sanity's infrastructure.

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

Prerequisites:

- The latest version of `sanity` CLI (`sanity@latest`) is recommended to interact with Blueprints and Functions as shown in this guide. You can always run the latest CLI commands with `npx sanity@latest`.
- Node.js v22.x. We highly suggest working on this version as it is the same version that your functions will run when deployed to Sanity.
- An existing project and [a role with Deploy Studio permissions](https://www.sanity.io/docs/user-guides/roles) (the `deployStudio` grant).

> \[!WARNING]
> Avoid recursive loops
> At this time, Sanity Functions limit recursive loops when using the `@sanity/client` v7.12.0 or later. Use caution when writing functions that may trigger themselves by editing other documents that trigger the function.
> Initiating multiple recursive functions may trigger [rate-limiting](https://www.sanity.io/docs/functions/functions-introduction) and may impact your usage limits sooner than expected. If you think you've deployed a recursive function or one that triggers too often, immediately override the deployment with new code, or `destroy` the blueprint.

## Set up your project

To create your first function, you need to initialize a blueprint. Blueprints are templates that describe Sanity resources. In this case, a blueprint describes how your function will respond to updates in your Sanity project. We recommend keeping functions and blueprints a level above your Studio directory.

For example, if you have a Marketing Website that uses Sanity, you may have a structure like this:

```text
marketing-site/
├─ studio/
├─ next-app/
```

If you initialize the blueprint in the `marketing-site` directory, functions and future resources will live alongside the `studio` and `next-app` directory.

> \[!TIP]
> Functions and Blueprints match your workflow
> While the example is our preferred way to organize Blueprints, Functions, and Sanity projects, you can initialize your first blueprint wherever you like. You can even store them inside your Studio directory.

## Create a blueprint

Initialize your first blueprint with the `init` command. Replace <project-id> with your project ID, found in manage or your sanity.config.ts file.

**CLI**

```sh
npx sanity@latest blueprints init . --type ts --stack-name production --project-id <project-id>
```

This configures a new blueprint for your project, adds a `blueprint.config.ts` [config file](https://www.sanity.io/docs/blueprints/blueprint-config) to the current directory (`.`), and creates a new [stack](https://www.sanity.io/docs/blueprints/blueprints-introduction) named production.

Follow the prompt and run your package manager’s install command to add the dependencies.

**CLI**

```sh
npm install
```

## Create a function

Use the `sanity blueprints add function` command to add a new function. You can also run it without any flags for interactive mode.

**CLI**

```sh
npx sanity@latest blueprints add function --name log-event --fn-type document-create --fn-type document-update --installer npm
```

> \[!TIP]
> If you’re using a package manager other than npm, set the `--installer` flag to your package manager, like `pnpm` or `yarn`. Run `sanity blueprints add function --help` for more details.

After running the command, follow the prompt and add the function declaration to your `sanity.blueprint.ts` configuration. Your file should look like this:

**sanity.blueprint.ts**

```
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({name: 'log-event', event: {on: ['create', 'update']}}),
  ],
})

```

The `on` property takes an array of trigger events:

- `create`: Fires when a new document is created for the first time.
- `update`: Fires when changes are made to an existing document.
- `delete`: Fires when a document is deleted.

For existing, published documents, `update` will only trigger when a draft or version is published and *updates* the document. In many cases where you'd use `update` on published documents, it may be better to use `['create', 'update']`. [Learn more about document lifecycles](https://www.sanity.io/docs/content-lake/documents).

This is the minimal configuration for defining a function in a blueprint file. You can see all available options in the [Function section of the Blueprints configuration reference documentation](https://www.sanity.io/docs/blueprints/blueprint-config).

If you've followed the directory structure mentioned earlier, you'll see it grow to something like this:

```text
marketing-site/
├─ studio/
├─ next-app/
├─ sanity.blueprint.ts
├─ package.json
├─ node_modules/
├─ functions/
│  ├─ log-event/
│  │  ├─ index.ts
```

After updating the `sanity.blueprint.ts` file, open `functions/log-event/index.ts` in your editor.

> \[!TIP]
> The documentEventHandler function
> TypeScript functions can take advantage of the `documentEventHandler` helper function to provide type support. Examples in this article include both TypeScript and JavaScript function syntax.

Every function exports a `handler` from the index file.

**functions/log-event/index.ts (TypeScript)**

```
import { documentEventHandler } from '@sanity/functions'

export const handler = documentEventHandler(async ({ context, event }) => {
  const time = new Date().toLocaleTimeString()
  console.log(`👋 Your Sanity Function was called at ${time}`)
})
```

**functions/log-event/index.js (JavaScript)**

```javascript
export async function handler({context, event}) {
  const time = new Date().toLocaleTimeString()
  console.log(`👋 Your Sanity Function was called at ${time}`)
}
```

The handler receives a `context` and an `event`. The context contains information to help you interact with your Sanity datastore, such as `clientOptions` to configure a `@sanity/client`.

The `event` contains information about the action that triggered the function. Most functions will use `event.data`, which contains the contents of the Sanity document. You can learn more in the [Function handler reference](https://www.sanity.io/docs/functions/function-wrapper).

### Limit the scope with GROQ

This function will run every time any document publishes and return the entire document to `event.data`. This includes system documents. Let’s narrow the scope.

Open the `sanity.blueprint.ts` file and update it to include an `event` object with the `on` and `filter` properties:

**sanity.blueprint.ts**

```typescript
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'log-event',
      event: {
        on: ['create', 'update'],
        filter: '_type == "post"'
      }
    }),
  ],
})
```

`filter` accepts a [GROQ filter](https://www.sanity.io/docs/specifications/groq-syntax) that limits which documents will trigger the function. Only include the filter contents, *the portion inside the square brackets*, of your GROQ query. For example, rather than `*[_type == 'post']`, only include `_type == 'post'`.

Projections let you shape the contents passed to the event. Set the `projection` property on `event`. If you want your function to receive an object instead of individual attributes, ensure your `projection` is wrapped in curly braces (`{}`) as shown in the example.

**sanity.blueprint.ts**

```typescript
import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'log-event',
      event: {
        on: ['create', 'update'],
        filter: '_type == "post"',
        projection: "{_id, content}"
      }
    }),
  ],
})
```

Projections don't limit what fields trigger the function, only which data is passed into the function.

GROQ is a powerful query language, and with features such as [delta functions](https://www.sanity.io/docs/specifications/groq-functions) —to help you determine *what* in a document changed as well as *how* it changed—you can narrow the scope even farther. Check out the [GROQ Query Cheat Sheet](https://www.sanity.io/docs/content-lake/query-cheat-sheet) for more ideas, and the [Functions cheat sheet](https://www.sanity.io/docs/functions/functions-cheatsheet) for additional function-specific techniques.

## Test the function locally

You can test functions locally with the functions development playground. Local testing is a great way to experiment without affecting your usage quota.

To launch the development playground, run the following:

**CLI**

```sh
npx sanity functions dev
```

If you run this on the starter function from earlier, you'll see the default output message in the console pane.

![A screenshot of the functions playground interface](https://cdn.sanity.io/images/3do82whm/next/e5d0e1a477004bd36d24b9a52863accddb565309-2904x1456.png)

To test with real data from your project, you can pass a document `_id` and select a project/dataset to fetch a document and pass it to the function's `event`. Don't forget to press the download button next to the document ID to populate the input. You can also manually enter a document-like shape. In either case, make sure it matches your projection criteria.

Update your function to log the `event` and you'll see the supplied document details the next time you run the function in the playground.

**functions/log-event/index.ts (TypeScript)**

```typescript
import { documentEventHandler } from '@sanity/functions'

export const handler = documentEventHandler(async ({ context, event }) => {
  const time = new Date().toLocaleTimeString()
  console.log(`👋 Your Sanity Function was called at ${time}`)
  console.log('Event:', event)
})
```

**functions/log-event/index.js (JavaScript)**

```javascript
export async function handler({context, event}) {
  const time = new Date().toLocaleTimeString()
  console.log(`👋 Your Sanity Function was called at ${time}`)
  console.log('Event:', event)
}
```

> \[!TIP]
> Development playground
> In addition to the `sanity functions dev` command, there's also a more traditional CLI testing interface.
> Run the `sanity functions test functionName` command to run the function locally. You can learn more in the [local testing guide](https://www.sanity.io/docs/functions/functions-local-testing) and the [functions CLI reference](https://www.sanity.io/docs/cli-reference/functions).

## Deploy a function

Once you're satisfied that the function works as expected, deploy it by deploying the blueprint stack.

**CLI**

```sh
npx sanity blueprints deploy
```

You can begin using your function when the deployment finishes. If you set a filter earlier, edit a document that matches it and publish the changes to trigger the function.

If you need to change the function, update your code and re-run the deploy command to push the new changes live.

## Check the logs

When you tested the function locally, you saw the logs directly in your console. Once deployed, the function and its logs are in the cloud.

View the logs with the `functions logs` command. Replace `log-event` with your function name.

**CLI**

```sh
npx sanity functions logs log-event
```

This command outputs the function's logs. Try updating your document, publishing the change, and running the command again to see new logs.

> \[!NOTE]
> System documents
> If you didn't limit the scope of the function by setting a GROQ filter earlier, every change to a published document will run the function. This can greatly increase your usage, so it's best to create specific filters for your documents.

## Destroy a deployed blueprint

Sometimes you want to remove a deployed function so it won't run anymore or affect any future usage quotas. The `blueprints destroy` command removes, or undeploys\*,\* the blueprint and all of its functions from Sanity's infrastructure. It does not remove your local files.

Remove the test function:

**CLI**

```sh
npx sanity blueprints destroy
```

To remove the function from the blueprint locally, you can remove it from the `resources` array in the `sanity.blueprint.ts` file, then delete the `log-event` folder from the `functions` directory.

### Redeploying a destroyed blueprint

When you run `blueprints destroy`, it's as if you never used `blueprints init` during setup. The only difference is you still have all the files in your directory. To use this blueprint again and redeploy it, you'll need to let Sanity know about it. You can do this by running init again:

**CLI**

```sh
npx sanity blueprints init
```

This launches an editing interface that lets you reconfigure the blueprint, if needed, and it reconnects the blueprint to Sanity. Now you can add more functions or redeploy. Keep in mind that any environment variables added before destroying the blueprint will not carry over.
