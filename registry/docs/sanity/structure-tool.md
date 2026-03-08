# Structure tool

The Structure tool is included with Sanity Studio and allows you to customize the experience of creating, browsing, and managing documents.

![Default structure tool layout](https://cdn.sanity.io/images/3do82whm/next/25f3e527146f39ec5abdd8549a51d42cd3b6aeb8-3798x2250.png)

## Install

New projects come pre-configured with the Structure tool. For existing projects, or if it isn’t part of your Studio configuration, you can install it by updating your project’s configuration file.

```typescript
// sanity.config.ts
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  // ...
  plugins: [structureTool()],
})

```

> \[!NOTE]
> Is Structure a tool or a plugin?
> Wondering why you’re adding a tool to the *plugins* array? Plugins are containers for shared tools, components, and other Studio configuration settings.

You can configure the Structure tool beyond the default settings by passing a configuration object to `structureTool` . The [Structure tool API](https://www.sanity.io/docs/studio/structure-tool-api) reference describes the list of available configuration options.

> \[!WARNING]
> Gotcha
> The Structure tool's document list has a limited view of 2000 documents. If you find yourself running into this limitation, consider customizing your Structure configuration with [Structure Builder](https://www.sanity.io/docs/studio/structure-builder-introduction) to lay out documents in a more categorized way.

## Customize

The Structure tool includes Structure Builder, an API that allows you to customize the way lists, documents, views, and menus are organized within Studio.

![Customized structure tool screenshot](https://cdn.sanity.io/images/3do82whm/next/801e3897cceea68de13a93cb8cbed2fc5cea982c-2288x1388.png)

Start customizing your studio with the [Introduction to Structure Builder](https://www.sanity.io/docs/studio/structure-builder-introduction) series.

## Additional resources

[Structure Tool API](https://www.sanity.io/docs/studio/structure-tool-api)

[Structure Builder cheat sheet](https://www.sanity.io/docs/studio/structure-builder-cheat-sheet)

[Structure Builder API reference](https://www.sanity.io/docs/studio/structure-builder-reference)

[Studio Tools](https://www.sanity.io/docs/studio/studio-tools)
