# API versioning in Javascript Client

In order to promote incremental changes, [the Sanity API is versioned](https://www.sanity.io/docs/content-lake/api-versioning) based on ISO dates (YYYY-MM-DD) in the UTC timezone.

> \[!WARNING]
> Gotcha
> The `apiVersion` property of the JavaScript client is currently optional. If no value is provided, the client will issue a deprecation warning and default to using `v1` of the API.

Unless you know of a specific API version you want to use, you'll want to set it to **today's UTC date**. By doing this, you'll get all the latest bug fixes and features, while preventing any timezone confusion and locking the API to prevent breaking changes.

> \[!NOTE]
> What does the apiVersion date mean?
> Essentially, the date you enter for the `apiVersion` will use the API *as it worked on that date*. You can confidently use features that were added on or before that date, and any breaking changes implemented after that date will not affect your use of the API.

**Note**: While it's tempting to use a date that's been set dynamically as an API version, this can be a risky idea. Using a static (i.e., hard coded) date, you pin your project to a specific version of the API, which prevents any sudden changes that can break your implementation. If you hard code your API to `v2021-08-31`, and it works, you can be assured it will continue to work even as new API versions are released.

> \[!TIP]
> Protip
> **Recommended:** `apiVersion: '2021-08-31'`
> **Not recommended:** `apiVersion: new Date().toISOString().slice(0, 10)`

In future versions, specifying an API version will be required. For now, to maintain backward compatibility, not specifying a version will trigger a deprecation warning and fall back to using `v1`.

> \[!WARNING]
> Gotcha
> When using the HTTP API, the version number is prefixed with the `v` character (`v1`, `v2021-08-31`, etc.). In the JavaScript client, no prefix is needed (`apiVersion: '2021-08-31'`).

## Example usage

```javascript
import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'your-project-id',
  dataset: 'production',
  apiVersion: '2021-08-31', // use a UTC date string
  token: 'sanity-auth-token', // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})
```

# Upgrade version of studio package

The version of a package used in Sanity Studio can be upgraded from the command line.

#### Using yarn

`yarn add <package>@latest`

e.g. to upgrade the version of React:

`yarn add react@latest`

#### Using npm

`npm install <package>@latest`

e.g. to upgrade to the latest version of React:

`npm install react@latest`

# Slug: `slugifyFn` renamed

The slug type has gotten a brush-up recently, and as part of this process the option `slugifyFn` has been renamed to the easier-to-write, easier-to-remember option `slugify`.

There are no changes to it's signature, but you can now return a promise should you want to generate the slug asynchronously:

```javascript
{
  title: 'Slug',
  name: 'mySlugField',
  type: 'slug',
  options: {
    source: 'title',
    slugify: value => someAsyncSlugGenerator(value)
  }
}
```

The old option will still work for a number of upcoming releases, but will be removed at some point in the future.

# Renamed plugin @sanity/date-input

The plugin `@sanity/date-input` has been renamed to `@sanity/rich-date-input` to better reflect its purpose.

### What should I do?

1. Install the `@sanity/rich-date-input` plugin with `sanity install @sanity/rich-date-input`
2. Remove the `@sanity/date-input` entry from the `plugins` array in your `sanity.json`
3. Add the `richDate` type definition from the plugin to your schema, e.g:

```javascript
import richDate from 'part:@sanity/form-builder/input/rich-date/schema'
 
// ...
export default createSchema({
  name: 'mySchema',
  types: [
    //...
    richDate
  ]
})
```

# Specify API version when using custom document list filters

When specifying custom filters for document lists, we now require specifying an `apiVersion`. This can be set to the current date, e.g. `v2025-02-19`. See our [API Versioning](https://www.sanity.io/docs/content-lake/api-versioning) docs for more details.

## Before:

```javascript
S.documentList()
  .title('Posts')
  .filter('_type == "post" && $authorId == author._ref')
  .params({ authorId })

```

## After:

```javascript

  S.documentList()
    .title('Posts')
    .apiVersion('v2025-02-19')
    .filter('_type == "post" && $authorId == author._ref')
    .params({ authorId })
)
```

# Function Timeout

When testing [Compute Functions](https://www.sanity.io/docs/functions/functions-introduction) locally you may see a timeout error. For example:

**CLI**

```text
npx sanity functions test log-event
› Error: Error: Timeout: The process exceeded your current timeout limit of 10 seconds. Learn to adjust your blueprint's
› timeout settings here: https://www.sanity.io/docs/help/functions-timeout
```

By default function execution time is set to 10 seconds, but may be configured down as low as 1 second and as high as 900 seconds (15 minutes).

You can experiment with different timeout values directly from the command line via the `--timeout` flag.

**CLI**

```sh
npx sanity functions test log-event --timeout 15
```

This will increase the timeout value to 15 seconds.

**Note:** Your functions will likely run faster locally than in the cloud. Today's modern machines far outpace the capabilities of cloud runners. So expect to add a bit of padding in your timeout value to compensate.

Once you establish an appropriate timeout value, update your blueprint file.

**sanity.blueprints.ts**

```
import { defineBlueprint, defineDocumentFunction } from "@sanity/blueprints"

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: "log-event",
      timeout: 15, // Add your new timeout value
    }),
  ],
})

```

Now the next time you test your function locally it will read the new timeout value from the blueprint.

# Functions rate limit

You may have received an error or notification regarding rate limits or concurrency when running your [Functions](https://www.sanity.io/docs/functions/functions-introduction).

If a **function is invoked with the same document** more than 200 times within 30s, we will not execute further function calls until the rate drops below this limit.

If **functions from a single project are invoked** more than 4000 times within 30s, we will not execute further function calls until the rate drops below this limit. This limit is to prevent a single project with many documents from all running at the same time and using up all of our concurrency.

To prevent these errors, use caution in situations where a function will cause a mutation that triggers itself.

If you're using the `@sanity/client` v7.12.0 or later, it will limit mutations from triggering a function chain recursively up to 16 times.

# Configure TypeGen

Since its introduction the `sanity typegen` command has been configured with a separate config file, typically at `sanity-typegen.json`.

The Sanity CLI tooling now include the configuration properties for type generation by specifying the same parameters under the `typegen` field of the CLI config.

**sanity.cli.ts**

```
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'my-project-id',
    dataset: 'dataset',
  },
  typegen: {
    path: "./src/**/*.{ts,tsx,js,jsx}", // glob pattern to your typescript files. Can also be an array of paths
    schema: "schema.json", // path to your schema file, generated with 'sanity schema extract' command
    generates: "./sanity.types.ts", // path to the output file for generated type definitions
    overloadClientMethods: true, // set to false to disable automatic overloading the sanity client
  },
})
```
