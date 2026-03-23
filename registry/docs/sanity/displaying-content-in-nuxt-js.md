# Displaying content in Nuxt.js

## Install a new Nuxt application

![Video](https://stream.mux.com/L02yip5K7fwXyG100zIGTpGi02ZOiktCSpV)

If you have an *existing* application, skip this first step and adapt the rest of the lesson to install Sanity dependencies to fetch and render content.

**Run** the following in a new tab or window in your Terminal (keep the Studio running) to create a new [Nuxt](https://nuxt.com/) application using the [Nuxt UI](https://ui.nuxt.com/) template for Tailwind CSS.

**Terminal**

```sh
# outside your studio directory
npx nuxi@latest init -t ui nuxt-hello-world
cd nuxt-hello-world
```

You should now have your Studio and Nuxt application in two separate, adjacent folders:

```sh
├─ /nuxt-hello-world
└─ /studio-hello-world
```

## Install Sanity dependencies

**Run** the following inside the `nuxt-hello-world` directory to:

- Install and configure the [Nuxt Sanity integration](https://nuxt.com/modules/sanity)
- Install [@sanity/image-url](https://github.com/sanity-io/image-url) for generating images from Sanity content

**Terminal**

```sh
npx nuxi@latest module add sanity
npm install @sanity/image-url
```

## Configure the Sanity client

**Update** the integration configuration to configure a Sanity Client to fetch content.

**/nuxt-hello-world/nuxt.config.ts**

```
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/sanity"],
  // 👇 Add these lines
  sanity: {
    projectId: "<your-project-id>",
    dataset: "<your-dataset>",
    apiVersion: "2025-10-01",
    typegen: {
      enabled: true,
      schemaTypesPath: "../studio-hello-world/schemaTypes",
      queryPaths: ["./app/**/*.{ts,tsx,vue}"],
    },
  },
});
```

## Start the development server

**Run** the following command and open [http://localhost:3000](http://localhost:3333) in your browser.

**Terminal**

```sh
npm run dev
```

## Display content on the home page

Nuxt performs data fetching inside `script` tags at the top of `.vue` files

**Create** a route for a page with a list of posts fetched from your Sanity dataset, and visit [http://localhost:3000](http://localhost:3333)

**/nuxt-hello-world/pages/index.vue**

```tsx
<script setup lang="ts">
  const postsQuery = groq`*[
    _type == "post"
    && defined(slug.current)
  ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`

  const { data: posts } = await useSanityQuery<PostsQueryResult>(postsQuery)
</script>

<template>
  <main class="container mx-auto min-h-screen max-w-3xl p-8">
    <h1 class="text-4xl font-bold mb-8">Posts</h1>
    <ul class="flex flex-col gap-y-4">
      <li v-for="post in posts" :key="post._id" class="hover:underline">
        <nuxt-link :to="`/${post.slug.current}`">
          <h2 class="text-xl font-semibold">{{ post.title }}</h2>
          <p>{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

```

## Display individual posts

**Create** a new route for individual post pages.

The dynamic value of a slug when visiting `/[slug]` in the URL is used as a parameter in the GROQ query used by Sanity Client.

Notice that we’re using [Tailwind CSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)’s `prose` class name to style the post’s `body` block content.

**/nuxt-hello-world/pages/\[slug].vue**

```tsx
<script setup lang="ts">
  import type { SanityDocument } from "@sanity/client";
  import {
    createImageUrlBuilder,
    type SanityImageSource,
  } from "@sanity/image-url";

  const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]`;
  const { params } = useRoute();

  const { data: post } = await useSanityQuery<SanityDocument>(POST_QUERY, params);
  const { projectId, dataset } = useSanity().client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? createImageUrlBuilder({ projectId, dataset }).image(source)
      : null;
</script>

<template>
  <main
    v-if="post"
    class="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4"
  >
    <a href="/" class="hover:underline">&larr; Back to posts</a>
    <img
      v-if="post.image"
      :src="urlFor(post.image)?.width(550).height(310).url()"
      :alt="post?.title"
      class="aspect-video rounded-xl"
      width="550"
      height="310"
    />
    <h1 v-if="post.title" class="text-4xl font-bold mb-8">{{ post.title }}</h1>
    <div class="prose">
      <p v-if="post.publishedAt">
        Published: {{ new Date(post.publishedAt).toLocaleDateString() }}
      </p>
      <SanityContent v-if="post.body" :blocks="post.body" />
    </div>
  </main>
</template>

```

# Deploying Studio and inviting editors

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

# APIs and SDKs

#### App SDK

[App SDK Quickstart](https://www.sanity.io/docs/app-sdk/sdk-quickstart)

[App SDK Reference](https://reference.sanity.io/_sanity/sdk-react/)

[App SDK Explorer](https://sdk-explorer.sanity.io)

#### Popular libraries

[@sanity/client](https://github.com/sanity-io/client)

[next-sanity](https://github.com/sanity-io/next-sanity)

[Sanity Connect for Shopify](https://www.sanity.io/docs/apis-and-sdks/sanity-connect-for-shopify)

#### Schemas

[Introduction to schemas](https://www.sanity.io/docs/apis-and-sdks/introduction-to-schemas)

[Studio schema reference](https://www.sanity.io/docs/studio/schema-types)

[Schema Deployment](https://www.sanity.io/docs/apis-and-sdks/schema-deployment)

#### Asset API

[Presenting Images](https://www.sanity.io/docs/apis-and-sdks/presenting-images)

[Image Metadata](https://www.sanity.io/docs/apis-and-sdks/image-metadata)

[Asset CDN](https://www.sanity.io/docs/apis-and-sdks/asset-cdn)

#### Command Line Interface

[Introduction to the CLI](https://www.sanity.io/docs/apis-and-sdks/cli)

[Importing Data](https://www.sanity.io/docs/content-lake/importing-data)

[CLI Configuration](https://www.sanity.io/docs/cli-reference/cli-config)
