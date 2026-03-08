# SvelteKit

Following this guide will enable you to:

- Render overlays in your application, allowing content editors to jump directly from Sanity content to its source in Sanity Studio.
- Edit your content and see changes reflected in an embedded preview of your application in Sanity’s Presentation tool.
- **Optional:** Provide instant updates and seamless switching between draft and published content.

## Prerequisites

- A Sanity project with a hosted or embedded Studio. Read more about hosting [here](https://www.sanity.io/docs/studio/deployment).
- A SvelteKit application using Svelte 5 with SSR. Follow [this guide](https://kit.svelte.dev/docs/creating-a-project) to set one up.

## SvelteKit application setup

The following steps should be performed in your SvelteKit application.

### Install dependencies

Install the Sanity SvelteKit package that will provide your application with data fetching and Visual Editing capabilities.

```sh
npm install @sanity/sveltekit
```

### Set environment variables

Create a `.env` file in your application’s root directory to provide Sanity-specific configuration.

In the [project management area](https://www.sanity.io/manage), find your project ID and dataset, and create a token with [Viewer permissions](https://www.sanity.io/docs/user-guides/roles) which will be used to fetch preview content.

The URL of your Sanity Studio will depend on where it is [hosted](https://www.sanity.io/docs/studio/deployment) or [embedded](https://www.sanity.io/docs/studio/embedding-sanity-studio).

**.env**

```sh
# Public
PUBLIC_SANITY_PROJECT_ID="YOUR_PROJECT_ID"
PUBLIC_SANITY_DATASET="YOUR_DATASET"
PUBLIC_SANITY_STUDIO_URL="https://YOUR_PROJECT.sanity.studio"
# Private
SANITY_VIEWER_TOKEN="YOUR_VIEWER_TOKEN"
```

### Sanity client

Create a [Sanity client](https://github.com/sanity-io/client) instance to handle fetching data from Content Lake.

Configuring the `stega` option enables automatic overlays for basic data types when preview mode is enabled. You can read more about how stega works [here](https://www.sanity.io/docs/visual-editing/stega).

**src/lib/sanity.ts**

```typescript
import {createClient} from '@sanity/sveltekit'
import {
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_STUDIO_URL
} from '$env/static/public'

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  apiVersion: '2025-10-01',
  useCdn: true,
  stega: {
    enabled: true,
    studioUrl: PUBLIC_SANITY_STUDIO_URL
  }
})

```

Create a server-only Sanity client instance using the Viewer token and client created above. This will be used to fetch draft content when in preview mode.

**src/lib/sanity.server.ts**

```typescript
import {SANITY_VIEWER_TOKEN} from '$env/static/private'
import {client} from '$lib/sanity'

export const serverClient = client.withConfig({
  token: SANITY_VIEWER_TOKEN
})
```

### Preview mode

Preview mode allows authorized content editors to view and interact with draft content.

In the [server hooks](https://kit.svelte.dev/docs/hooks#server-hooks) file, sequence the `handlePreviewMode` [handle function](https://kit.svelte.dev/docs/hooks#server-hooks-handle), which adds preview mode to your application.

**src/hooks.server.ts**

```typescript
import {handlePreviewMode} from '@sanity/sveltekit'
import {redirect} from '@sveltejs/kit'
import {sequence} from '@sveltejs/kit/hooks'
import {serverClient} from '$lib/sanity.server'

export const handle = sequence(
  handlePreviewMode({
    client: serverClient,
    preview: {redirect}
  })
)
```

The `handle` function implemented above adds a `sanity` property to the `locals` object, exposing the status of preview mode on the server. The server layout file lets you expose this value for use in a Svelte layout file.

> \[!NOTE]
> TypeScript
> If using TypeScript, you should [augment your applications ambient types](https://www.sanity.io/docs/visual-editing/visual-editing-with-sveltekit) to provide correct typings for the `locals.sanity` object.

**src/routes/+layout.server.ts**

```typescript
import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = ({locals: {sanity}}) => {
  const {previewEnabled} = sanity
  return {previewEnabled}
}
```

Render the `PreviewMode` wrapper component in the Svelte layout file to ensure the correct preview context is available in child components.

**src/routes/+layout.svelte**

```typescript
<script lang="ts">
  import {PreviewMode} from '@sanity/sveltekit'
  import type {LayoutProps} from './$types'

  const {children, data}: LayoutProps = $props()
  const {previewEnabled} = data
</script>

<PreviewMode enabled={previewEnabled}>
  {@render children()}
</PreviewMode>
```

### Rendering pages

First, define the [GROQ](https://www.sanity.io/docs/content-lake/groq-introduction) queries you will use to fetch data from Content Lake. In the following example we are fetching the `title` of the first document of type `page` returned.

**src/lib/queries.ts**

```typescript
import {defineQuery} from '@sanity/sveltekit'

export const pageQuery = defineQuery(`*[_type == "page"][0]{title}`)
```

Next, define a [load function](https://kit.svelte.dev/docs/load) that uses your query to fetch and return data.

When fetching content using the Sanity client in an application that implements visual editing using [stega](https://www.sanity.io/docs/visual-editing/stega), make sure to set `stega` to `false` when preview mode is disabled.

**src/routes/+page.server.ts**

```typescript
import {pageQuery} from '$lib/queries'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({locals: {sanity}}) => {
  const {client, previewEnabled} = sanity
  const options = {stega: previewEnabled ? true : false}
  const page = await client.fetch(pageQuery, {}, options)

  return {page}
}
```

The load function’s return value will be available in the corresponding `.svelte` file via the `data` prop. Use a `$derived` rune to ensure the page remains reactive.

**src/routes/+page.svelte**

```typescript
<script lang="ts">
  import type {PageProps} from './$types'

  const {data}: PageProps = $props()
</script>

<h1>{data.page.title}</h1>
```

You should now see the page render with the correct page title, confirming that your query and data binding are working as expected.

### Enable Visual Editing

The `<VisualEditing>` component handles rendering overlays, enabling click to edit, and refreshing pages in your application when content changes.

Providing the component with the current preview mode status ensures these features are only enabled for content editors, while your application remains unchanged for regular users.

**src/routes/+layout.svelte**

```typescript
<script lang="ts">
  import {
    PreviewMode,
    VisualEditing
  } from '@sanity/sveltekit'
  import type {LayoutProps} from './$types'

  const {children, data}: LayoutProps = $props()
  const {previewEnabled} = data
</script>

<PreviewMode enabled={previewEnabled}>
  <VisualEditing enabled={previewEnabled}>
    {@render children()}
  </VisualEditing>
</PreviewMode>
```

That's it for setup in your Svelte application for now. In the next section we'll enable Visual Editing in your studio project!

## Studio setup

To set up [Presentation tool](https://www.sanity.io/docs/visual-editing/configuring-the-presentation-tool) in your studio, import the tool from `sanity/presentation`, add it to your `plugins` array, and configure `previewUrl`, passing the `origin` of your application and endpoints to `enable` and `disable` preview mode.

**sanity.config.ts**

```typescript
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  // ... project configuration
  plugins: [
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_URL,
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable'
        }
      }
    })
    // ... other plugins
  ]
})
```

**.env**

```sh
SANITY_STUDIO_PREVIEW_URL="https://YOUR_APP.com"
```

At this point, you should have Visual Editing set up in your SvelteKit app and connected to your Sanity Studio. In the Presentation tool, you can view your application in an embedded preview and click content to edit in context. The next steps introduce advanced features like faster content updates and perspective switching.

## Using Loaders (optional)

Loaders enhance the Visual Editing experience by providing faster content updates and perspective switching.

The **Query Loader** offers instant updates when previewing content in the Presentation tool, while the **Live Loader** connects to Sanity’s [Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) to deliver continuous updates to both editors using Presentation tool and end users.

> \[!WARNING]
> Loaders
> Loaders should be used independently. Use one loader per application, or per layout for advanced use cases.

### Query Loader

The Query Loader provides instant content updates and perspective switching when using the Presentation tool.

#### 1. Update server hooks

Update your server hooks file to call `setServerClient` and sequence the `handleQueryLoader` [handle function](https://kit.svelte.dev/docs/hooks#server-hooks-handle). This sets up the `loadQuery` helper function which will be used for fetching content on the server.

**src/hooks.server.ts**

```typescript
import {
  handlePreviewMode,
  handleQueryLoader,
  setServerClient
} from '@sanity/sveltekit'
import {redirect} from '@sveltejs/kit'
import {sequence} from '@sveltejs/kit/hooks'
import {serverClient} from '$lib/sanity.server'

setServerClient(serverClient)

export const handle = sequence(
  handlePreviewMode({
    client: serverClient,
    preview: {redirect}
  }),
  handleQueryLoader()
)

```

#### 2. Update layout

In the layout component, render the `QueryLoader` wrapper component to enable instant updates. Pass a Sanity client instance and enable the loader when preview mode is active using props.

**src/routes/+layout.svelte**

```typescript
<script lang="ts">
  import {
    PreviewMode,
    QueryLoader,
    VisualEditing
  } from '@sanity/sveltekit'
  import {client} from '$lib/sanity'
  import type {LayoutProps} from './$types'

  const {children, data}: LayoutProps = $props()
  const {previewEnabled} = data
</script>

<PreviewMode enabled={previewEnabled}>
  <VisualEditing enabled={previewEnabled}>
    <QueryLoader enabled={previewEnabled} {client}>
      {@render children()}
    </QueryLoader>
  </VisualEditing>
</PreviewMode>
```

#### 3. Use `loadQuery` and `useQuery`

In your page's load function, you can now use the `loadQuery` function exposed by `locals.sanity` to ensure data is fetched from Content Lake with the correct perspective: draft content will be fetched if preview mode is enabled, otherwise published content is returned.

**src/routes/+page.server.ts**

```typescript
import {pageQuery} from '$lib/queries'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async ({locals: {sanity}}) => {
  const {loadQuery} = sanity
  const initial = await loadQuery(pageQuery)

  return {query: pageQuery, options: {initial}}
}
```

Structuring the load function's return value in this way conveniently means you can pass the `data` value directly to the `useQuery` function. `useQuery` returns a [readable store](https://svelte.dev/docs/svelte/stores#svelte-store-readable). Prefix any references to the store with `$` to access its value when deriving state.

When your application is viewed in Presentation tool, `useQuery` provides instant content updates and seamless switching between draft and published content.

**src/routes/+page.svelte**

```typescript
<script lang="ts">
  import {useQuery} from '@sanity/sveltekit'
  import type {PageProps} from './$types'

  const {data}: PageProps = $props()
  const query = useQuery(data)
  const page = $derived($query.data)
</script>

<h1>{page.title}</h1>
```

### Live Loader

The Live Loader provides content updates using the [Live Content API](https://www.sanity.io/docs/content-lake/live-content-api) both in the Presentation tool (draft and published content) and to end users of your application (published content only).

#### 1. Update server hooks

Update your server hooks file to sequence the `handleLiveLoader` [handle function](https://kit.svelte.dev/docs/hooks#server-hooks-handle). This sets up the `sanityFetch` helper function which will be used for fetching content on the server.

The `serverToken` is used to fetch draft content on the server and so must have permissions to query draft documents. The `browserToken` allows live previewing draft content outside of the Presentation tool.

The same token can be used as both `browserToken` and `serverToken`, as the `browserToken` is only shared with the browser when preview mode is enabled.

**src/hooks.server.ts**

```typescript
import {
  handlePreviewMode,
  handleLiveLoader
} from '@sanity/sveltekit'
import {redirect} from '@sveltejs/kit'
import {sequence} from '@sveltejs/kit/hooks'
import {serverClient} from '$lib/sanity.server'
import {SANITY_VIEWER_TOKEN} from '$env/static/private'

export const handle = sequence(
  handlePreviewMode({
    client: serverClient,
    preview: {redirect}
  }),
  handleLiveLoader({
    client: serverClient,
    browserToken: SANITY_VIEWER_TOKEN,
    serverToken: SANITY_VIEWER_TOKEN
  })
)
```

#### 2. Update layout

Update the server layout file to expose the `browserToken` and `previewPerspective` properties added by `handleLiveLoader`.

**src/routes/+layout.server.ts**

```typescript
import type {LayoutServerLoad} from './$types'

export const load: LayoutServerLoad = ({locals: {sanity}}) => {
  const {browserToken,previewEnabled,previewPerspective} = sanity
  return {browserToken, previewEnabled, previewPerspective}
}
```

In the layout component, render the `LiveLoader` wrapper component to enable live updates. Unlike other components exported by `@sanity/sveltekit`, `LiveLoader` doesn't accept an `enabled` prop, as it provides live updates to both content editors and end users.

**src/routes/+layout.svelte**

```typescript
<script lang="ts">
  import {
    LiveLoader,
    PreviewMode,
    VisualEditing
  } from '@sanity/sveltekit'
  import {client} from '$lib/sanity'
  import type {LayoutProps} from './$types'

  const {children, data}: LayoutProps = $props()
  const {browserToken, previewEnabled, previewPerspective} = $derived(data)
</script>

<PreviewMode enabled={previewEnabled}>
  <VisualEditing enabled={previewEnabled}>
    <LiveLoader {client} {previewEnabled} {previewPerspective} {browserToken}>
      {@render children()}
    </LiveLoader>
  </VisualEditing>
</PreviewMode>

```

#### 3. Use `sanityFetch`

Import and use `sanityFetch` to fetch data using the Live Content API. The event object provided by a load function should be passed as the first argument.

**src/routes/+page.server.ts**

```typescript
import {sanityFetch} from '@sanity/sveltekit'
import {pageQuery} from '$lib/queries'
import type {PageServerLoad} from './$types'

export const load: PageServerLoad = async (event) => {
  return sanityFetch(event, {query: pageQuery})
}
```

The corresponding Svelte page will receive the result of the query. Use a `$derived` rune to ensure the page remains reactive.

**src/routes/+page.svelte**

```typescript
<script lang="ts">
  import type {PageProps} from './$types'

  const {data}: PageProps = $props()
  const page = $derived(data.data)
</script>

<h1>{page.title}</h1>
```

## Advanced features (optional)

### Adding data attributes

Along with the `createDataAttribute` function exported by `@sanity/sveltekit`, when using the Query Loader, `useQuery` also returns an `encodeDataAttribute` helper method for generating `data-sanity` attributes. These attributes give you direct control over rendering [overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays) in your application, and are especially useful if not using stega encoding.

**src/routes/+page.svelte**

```typescript
<script lang="ts">
  import {useQuery} from '@sanity/sveltekit'
  import type {PageProps} from './$types'

  const {data}: PageProps = $props()
  const query = useQuery(data)
  const {data: page, encodeDataAttribute } = $derived($query)
</script>

<h1 data-sanity={encodeDataAttribute(['title'])}>
  {page.title}
</h1>
```

### Context functions and conditional rendering

Your application might need to conditionally render elements in preview mode, for example to notify content editors that they are viewing draft content, or to provide a mechanism for disabling preview mode.

`@sanity/sveltekit` exports several helper functions which return useful context for this purpose:

**getLoader()** - Returns which loader is currently in use: `'live'`, `'query'` or `undefined`.

**getIsPreviewing()** - Returns `true` if preview mode is enabled, otherwise returns `false`. Available in descendants of the `PreviewMode` component.

The example below shows how to use this function to implement a component for disabling preview mode, and could be added to your `+layout.svelte` file.

**DisablePreviewModeLink.svelte**

```typescript
<script lang="ts">
  import {getIsPreviewing} from '@sanity/sveltekit'
  import {page} from '$app/state'
  import {resolve} from '$app/paths'

  const isPreviewing = getIsPreviewing()
</script>

{#if isPreviewing}
  <a
    href={resolve('/preview/disable', {
      redirect: page.url.pathname
    })}
  >
    Disable preview mode
  </a>
{/if}
```

**getPerspective()** - Returns the current perspective. Available in descendants of the `LiveLoader` component.

**getEnvironment()** - Returns the currently detected preview environment. Available in descendants of the `LiveLoader` component.

### TypeScript: `event.locals`

The handler functions referenced in this guide add a `sanity` property to SvelteKit’s `event.locals` object. If your application is written in TypeScript, extend the `App.Locals` interface with the `SanityLocals` type to ensure type safety.

**app.d.ts**

```typescript
import type {SanityLocals} from '@sanity/sveltekit'

declare global {
  namespace App {
    interface Locals extends SanityLocals {}
  }
}

export {}

```

Additionally, if you are linking to any paths that `@sanity/sveltekit` adds to your application—for example to create a link to disable preview mode—you may also want to overload SvelteKit's `resolve` function.

**app.d.ts**

```typescript
import type {ResolvedPathname} from '$app/types'

declare module '$app/paths' {
  export function resolve(
    path: '/preview/disable',
    options?: {
      redirect?: string
    }
  ): ResolvedPathname
}

export {}
```
