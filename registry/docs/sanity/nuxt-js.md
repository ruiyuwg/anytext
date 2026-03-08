# Nuxt.js

Following this guide will enable you to:

- Render overlays in your application, allowing content editors to jump directly from Sanity content to its source in Sanity Studio.
- Edit your content and see changes reflected in an embedded preview of your application in Sanity’s Presentation tool.
- Provide instant updates and seamless switching between draft and published content.

## Prerequisites

- A Sanity project with a hosted or embedded Studio. Read more about hosting [here](https://www.sanity.io/docs/studio/deployment).
- A Nuxt application with SSR. Follow [this guide](https://nuxt.com/docs/getting-started/installation) to set one up.

### Nuxt application setup

The following steps should be performed in your Nuxt application.

### Install dependencies

Install the dependencies that will provide your application with data fetching and Visual Editing capabilities.

```bash
npm install @sanity/client

npx nuxi@latest module add sanity
```

### Environment variables

Create a `.env` file in your application’s root directory to provide Sanity specific configuration.

You can use [Manage](https://www.sanity.io/manage) to find your project ID and dataset, and to create a token with [Viewer permissions](https://www.sanity.io/docs/user-guides/roles) which will be used to fetch preview content.

The URL of your Sanity Studio will depend on where it is [hosted](https://www.sanity.io/docs/studio/deployment) or [embedded](https://www.sanity.io/docs/studio/embedding-sanity-studio).

```bash
# .env
# Public
SANITY_PROJECT_ID="YOUR_PROJECT_ID"
SANITY_DATASET="YOUR_DATASET"
SANITY_STUDIO_URL="https://YOUR_PROJECT.sanity.studio"
# Private
SANITY_VIEWER_TOKEN="YOUR_VIEWER_TOKEN"
```

## Application setup

### Sanity client

Create a Sanity client instance to handle fetching data from Content Lake.

Configuring the `stega` option enables automatic overlays for basic data types when preview mode is enabled. You can read more about how stega works [here](https://www.sanity.io/docs/visual-editing/stega).

```tsx
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID
    dataset: process.env.SANITY_DATASET,
    visualEditing: {
	    token: process.env.SANITY_VIEWER_TOKEN,
	    studioUrl: process.env.SANITY_STUDIO_URL,
	    stega: true
    }
  }
})
```

### Rendering pages

Firstly, set up the queries you will use to fetch data from Content Lake.

```tsx
// queries.ts
export type PageResult = { title: string }

export const pageQuery = /* groq */`*[_type == "page"][0]{title}`
```

```tsx
// pages/index.vue
<script lang="ts">
import {pageQuery, type PageResult} from '../queries'

const {data, pending} = await useSanityQuery<PageResult>(pageQuery)
</script>

<template>
	<div v-if="pending">Loading...</div>
  <h1 v-else>{data.title}</h1>
</template>
```

## Studio setup

To setup Presentation tool in your Sanity Studio, import the tool from `sanity/presentation`, add it to your `plugins` array, and configure `previewUrl`, optionally passing an origin, path, and endpoints to enable and disable preview mode.

We similarly recommend using environment variables loaded via a `.env` file to support development and production environments.

```tsx
// sanity.config.ts
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'

export default defineConfig({
  // ... project configuration
  plugins: [
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: '/',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable',
        },
      }
    }),
    // ... other plugins
  ],
})
```

## Optional Extras

### Adding data attributes

`useSanityQuery` also returns an `encodeDataAttribute` helper method for generating `data-sanity` attributes. These attributes give you direct control over rendering [overlays](https://www.sanity.io/docs/visual-editing/visual-editing-overlays) in your application, and are especially useful if not using stega encoding.

```html
// pages/index.vue
<script lang="ts">
import {pageQuery, type PageResult} from '../queries'

const {data, pending, encodeDataAttribute} = await useSanityQuery<PageResult>(pageQuery)
</script>

<template>
  <div v-if="pending">Loading...</div>
  <h1 v-else :data-sanity="encodeDataAttribute(['title'])">{data.title}</h1>
</template>
```
