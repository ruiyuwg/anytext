# Introduction

Functions enable you to execute custom logic whenever changes occur in your content—all without requiring your own infrastructure.

> \[!WARNING]
> Experimental feature
> This article describes an experimental Sanity feature. The APIs described are subject to change and the documentation may not be completely accurate.

With Functions, you can:

- Enrich, validate, and constrain your content in new ways.
- Create complex workflows.
- Connect changes in your content to external applications and services. Refresh a CDN cache, trigger social posts, update inventory, and more.

[Create a Document Function](https://www.sanity.io/docs/functions/function-quickstart)

[Official Function recipes](https://www.sanity.io/exchange/type=schemas/by=sanity)

## Requirements

- Functions run on **Node.js v22.x**. We encourage you to use the same version in local testing to avoid unsupported features or syntax changes.
- The lastest version of the `sanity` CLI is recommended for interacting with Blueprints and Functions. You can always run the latest CLI commands with `npx sanity@latest`.

## Core concepts

### Functions

Functions are small, single-purpose pieces of code that run on Sanity's cloud infrastructure. They act on changes in your content and allow you to extend the capabilities of your existing content management workflows.

When changes in your content trigger a function, they pass along details about the document. [Using GROQ, you can further refine](https://www.sanity.io/docs/functions/function-quickstart):

- What *kinds* of content changes trigger a function using GROQ filters.
- What *sections* of content are passed to functions using GROQ projections.

Functions can access the full range of Sanity's APIs so you can interact with all of your content, not just the document that triggered the change.

#### Function types

There are different types of functions you can use for different parts of Sanity, and different invoking scenarios. The available function types are:

- Document functions (`sanity.function.document`): React to any document changes in a project dataset. These are commonly configured with the `defineDocumentFunction` helper.
- Media Library Asset functions (`sanity.function.media-library.asset`): React to asset changes in Media Library. This is limited to the `sanity.asset` document type. These are commonly configured with the `defineMediaLibraryAssetFunction` helper.

More function types will come in the future.

#### Organizing Functions

All function code resides in a dedicated directory for each individual function.

**Example directory structure**

```text
marketing_site/
├─ studio/
├─ next-app/
├─ functions/
│  ├─ my-function/ <-- directory matches the function name
│  │  ├─ index.ts
├─ sanity.blueprint.ts
├─ package.json
├─ node_modules/

```

You can treat functions as individual projects, with packages included in their individual `package.json` files, or as part of a larger system with packages installed at alongside the `sanity.blueprints.ts` configuration. You can even mix the two approaches, should your project require it. More details in the [Function dependencies](https://www.sanity.io/docs/functions/function-dependencies) docs.

### Blueprints

A function on its own doesn't know much about the larger Sanity ecosystem. That's where Blueprints come in. A blueprint is a template that describes Sanity resources. For Functions, blueprints describe when and where your function should trigger.

#### Learn more about Blueprints

[Blueprints introduction](https://www.sanity.io/docs/blueprints/blueprints-introduction)

### Event-driven workflow

Functions work on an event system. They react to changes in your data. Did an editor publish a new document? Run a function. Was a versioned document just updated? Run a function. Did someone just upload a new image to the Media Library that needs to kick off an approval workflow? Yep, run a function.

Functions support the following events:

- `create`: a new document is created.
- `update`: an existing document is modified.
- `delete`: an existing document is deleted.

You can learn more about document lifecycles in the [documents documentation](https://www.sanity.io/docs/content-lake/documents).

### Testing and logging

Your development process might need some adjustments to work with functions. As they run remotely on Sanity's infrastructure, you'll rely on local test commands and checking the logs from the CLI to debug your function logic.

Learn more about [testing your functions locally](https://www.sanity.io/docs/functions/functions-local-testing).

### Dependencies

It can be tempting to treat functions just like any other TS/JS project, but you should use restraint when including additional dependencies. See our guide on [structuring function dependencies in your projects](https://www.sanity.io/docs/functions/function-dependencies).

Additionally, prefer platform-agnostic packages in the JS ecosystem over libraries that wrap native code. This will help ensure your functions run as expected once deployed—regardless of your local environment.

### Deployment

You deploy functions as part of deploying a blueprint. You can learn more about deployment in the function quick starts, or use the [Blueprints GitHub Action](https://www.sanity.io/docs/blueprints/blueprint-action) to deploy them.

## Usage and cost considerations

Functions use three variables when calculating cost.

- Invocations: The total number of times your function runs.
- Memory: The amount of memory a function uses to run. This defaults to 1GB, but you can adjust it up to 10GB in the blueprint configuration for each function.
- Duration: The execution time of the function.

Memory and duration combine to to give a GB-second calculation. For example, a function with 1GB of memory that runs for 2 seconds is 2GB-seconds. Multiply that by the number of total invocations, and you have your total GB-seconds.

As another example, if your functions average 1GB in memory-size and 40ms in duration, you could run 500k invocations to reach 20K GB-seconds.

Every function will be different, and your total usage accounts for all of your organization's functions. [Learn more on the pricing page](https://www.sanity.io/pricing).

## Limitations

### Max function size

**Limit**: 200MB

Although your individual function's TypeScript or JavaScript code may appear small, it can rapidly expand in size when packages are included.

We strongly suggest keeping your functions small. The larger the function, the slower it is. You can limit the size, and therefore increase the execution speed by:

- Limit dependency usage to only what's necessary.
- Choose performant, slim libraries.
- If you must use large libraries, consider bundling or tree-shaking in advance.

If your functions require too many dependencies, it may help to narrow their purpose and split the logic into multiple functions.

### Max function execution time

Functions default to a max execution time of 10 seconds. In the [Blueprint configuration](https://www.sanity.io/docs/blueprints/blueprint-config), this can be configured from 1 to 900 seconds.

### Rate limits

To prevent accidental recursion and unexpected behaviors, we rate limit function executions.

**Per document**: If a function is invoked more than 200 times within 30 seconds in a single document, we stop further executions until the rate drops below the limit.

**Per project**: If functions from the same project are invoked more than 4000 times within 30 seconds, we stop further executions until the rate drops below the limit.

### Function scope

When writing projections for a function, you’re limited to the invoking document’s scope. The exception being using `→` to follow references.

For example, projections containing a filter like shown below will fail silently:

**index.ts**

```groq
{
  _id,
  title,
  specification {code},
  "referencedBy": *[references(^._id)] {
    _id,
    title,
    specification {code}
  }
}
```

Instead, you’ll need to handle any nested filtering by making a new request inside the function. See our guide on [using the client library](https://www.sanity.io/docs/functions/functions-js-client) for more details.
