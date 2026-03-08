# Vision plugin

Vision is a plugin that lets you quickly test your GROQ queries right from the Studio. It shows up as a tool in the navigation bar when installed, and is part of the default Studio setup when running in development mode.

![Sanity Studio using the Vision plugin](https://cdn.sanity.io/images/3do82whm/next/7f4903586477a14beabf92fca429c92730b77fb8-2430x1352.png)

## Installing the plugin

New projects should have the plugin installed already. For existing projects, or if it is not part of your studio configuration, you can install it by adding `@sanity/vision` as a dependency of your project (adding it to `package.json` and reinstalling dependencies).

With the plugin installed, you should add it to your Sanity configuration (`sanity.config.js` / `sanity.config.ts`):

```typescript
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  // ...
  plugins: [structureTool(), visionTool()],
})
```

Should you want to only include the plugin in development mode, you can import and use the `isDev` boolean and conditionally add the plugin:

```typescript
import {defineConfig, isDev} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  // ...
  plugins: isDev
    ? [structureTool(), visionTool()]
    : [structureTool()],
})

```

## Configuring the plugin

The plugin can be configured by passing it an object of options.

```typescript
// sanity.config.js / sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  // ...
  plugins: [
    structureTool(),
    visionTool({
      defaultApiVersion: 'v2021-03-25',
      defaultDataset: 'development',
    }),
  ],
})

```

Currently supported properties are:

- `defaultApiVersion` - The default API version for queries, unless the user specifically selects a different version. Allowed values are `v1`, `vX`, `v2021-03-25`, or `v2021-10-21`.
- `defaultDataset` - The default dataset to use unless a specific one has been chosen in the user interface.
- `datasets` - Limits the datasets that are displayed in Vision's dataset selector. Example:

**Array**

```
export default defineConfig({
  // ...
  plugins: [
    visionTool({
      datasets: ["production", "development"]
    })
  ]
})
```

**Callback**

```
export default defineConfig({
  // ...
  plugins: [
    visionTool({
      // this example omits addon datasets, like comments
      datasets: (datasets) => datasets.filter(d => !d.addonFor)
    })
  ]
})
```

Additionally, these base properties are available should you want to customize what the item appears as in the navigation bar:

- `name` - Name used to identify the tool in URLs. Defaults to `vision`.
- `title` - Title that appears in the navigation bar. Defaults to `Vision`.
- `icon` - React icon that appears in navigation bar. Defaults to an eye icon (`EyeOpenIcon` from `@sanity/icons`)

## Using the Vision plugin

### Getting familiar with Vision

The Vision plugin allows you to quickly test a GROQ query against any of the datasets in your [Content Lake](https://www.sanity.io/docs/datastore). At the top of the tool, you'll find dropdowns to select your dataset, API version and perspective.

![Dataset, API version and perspective dropdowns in Vision.](https://cdn.sanity.io/images/3do82whm/next/f2234ee7e0c483e090c75f4d6cd1c56df49157a6-994x318.png)

Each time you run a query (we'll see how in a moment), you'll see a fourth field at the top containing a URL for your query. This URL contains the API call to the Content Lake that's querying for your data.

If your dataset is public, that URL can be run in a browser, cURL, or an app like Postman or Insomnia, and it will return the same JSON as you see in Vision. If your dataset is private, the request must be authenticated in order to return data. The decision on [dataset visibility](https://www.sanity.io/docs/content-lake/keeping-your-data-safe) is up to you, and can be changed if necessary.

On the left side of the Vision plugin are two panes: query and params. In the query pane, you can enter any valid [GROQ query](https://www.sanity.io/docs/content-lake/how-queries-work).

Query parameters works the same way as with Sanity client libraries. Given an object `{minSeats: 2}` in the Params field, you may use the keys in the object as parameters in the query: `*[_type == "bike" && seats >= $minSeats] {name, seats}`. Note that every param key is prefixed with `$` in the *query*, but does *not* have a prefix in the parameters object.

> \[!WARNING]
> Gotcha
> You can only use Vision to test queries and listeners. You cannot use it for mutations.

To learn more about how to write queries, read [How Queries Work - GROQ](https://www.sanity.io/docs/content-lake/how-queries-work).
