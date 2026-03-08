# useSeoMeta

This helps you avoid common mistakes, such as using `name` instead of `property`, as well as typos - with over 100+ meta tags fully typed.

::important
This is the recommended way to add meta tags to your site as it is XSS safe and has full TypeScript support.
::

:read-more{to="https://nuxt.com/docs/3.x/getting-started/seo-meta"}

## Usage

```vue [app.vue]
<script setup lang="ts">
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
```

When inserting tags that are reactive, you should use the computed getter syntax (`() => value`):

```vue [app.vue]
<script setup lang="ts">
const title = ref('My title')

useSeoMeta({
  title,
  description: () => `This is a description for the ${title.value} page`,
})
</script>
```

## Parameters

There are over 100 parameters. See the [full list of parameters in the source code](https://github.com/harlan-zw/zhead/blob/main/packages/zhead/src/metaFlat.ts#L1035){rel=""nofollow""}.

:read-more{to="https://nuxt.com/docs/3.x/getting-started/seo-meta"}

## Performance

In most instances, SEO meta tags don't need to be reactive as search engine robots primarily scan the initial page load.

For better performance, you can wrap your `useSeoMeta` calls in a server-only condition when the meta tags don't need to be reactive:

```vue [app.vue]
<script setup lang="ts">
if (import.meta.server) {
  // These meta tags will only be added during server-side rendering
  useSeoMeta({
    robots: 'index, follow',
    description: 'Static description that does not need reactivity',
    ogImage: 'https://example.com/image.png',
    // other static meta tags...
  })
}

const dynamicTitle = ref('My title')
// Only use reactive meta tags outside the condition when necessary
useSeoMeta({
  title: () => dynamicTitle.value,
  ogTitle: () => dynamicTitle.value,
})
</script>
```

This previously used the [`useServerSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-server-seo-meta) composable, but it has been deprecated in favor of this approach.

# useServerSeoMeta

Just like [`useSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-seo-meta), `useServerSeoMeta` composable lets you define your site's SEO meta tags as a flat object with full TypeScript support.

:read-more{to="https://nuxt.com/docs/3.x/api/composables/use-seo-meta"}

In most instances, the meta doesn't need to be reactive as robots will only scan the initial load. So we recommend using [`useServerSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-server-seo-meta) as a performance-focused utility that will not do anything (or return a `head` object) on the client.

```vue [app.vue]
<script setup lang="ts">
useServerSeoMeta({
  robots: 'index, follow',
})
</script>
```

Parameters are exactly the same as with [`useSeoMeta`](https://nuxt.com/docs/3.x/api/composables/use-seo-meta)

:read-more{to="https://nuxt.com/docs/3.x/getting-started/seo-meta"}
