# Nuxt Image v2

We're excited to announce **Nuxt Image v2**! 🎉 This release focuses on TypeScript support, performance improvements, and better developer experience.

::note
Nuxt Image v2 works with Nuxt 3.1+. If you're on Nuxt 3.0.x, you'll need to upgrade to at least 3.1 first.
::

## 🎯 TypeScript support

The biggest change in v2 is full TypeScript support throughout the module ([#1802](https://github.com/nuxt/image/pull/1802){rel=""nofollow""}).

### Typed composables

The `$img` helper and `useImage()` composable have full type inference ([#1844](https://github.com/nuxt/image/pull/1844){rel=""nofollow""}):

```ts
const img = useImage()

// Full autocomplete for modifiers
const url = img('/image.jpg', { 
  width: 300,
  height: 200,
  fit: 'cover' // TypeScript knows the valid values!
})
```

### Type-safe configuration

Module options are now fully typed. For example, providers that require a `baseURL` will enforce it at the type level in your `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    provider: 'bunny',
    bunny: {
      baseURL: '...' // TypeScript error if missing!
    }
  }
})
```

### Typed providers

Finally, if you are using custom image providers, you should use the new `defineProvider` for type-safe configuration:

```ts
// Before (v1)
export const getImage = (src, { modifiers, baseURL }) => {
  // ...
  return { url }
}

// After (v2)
import { defineProvider } from '@nuxt/image/runtime'

export default defineProvider({
  getImage(src, { modifiers, baseURL }) {
    // Fully typed modifiers
    // ...
    return { url }
  }
})
```

## 🚀 IPX v3

We've upgraded to IPX v3 ([#1799](https://github.com/nuxt/image/pull/1799){rel=""nofollow""}) for better performance and better `sharp` binary handling. The upgrade includes automatic detection of the correct `sharp` binaries for your deployment architecture.

## 🔌 Server-side utilities

You can now use image helpers directly in Nitro server endpoints ([#1473](https://github.com/nuxt/image/pull/1473){rel=""nofollow""}).

```ts [server/api/og-image.ts]
export default defineEventHandler((event) => {
  const img = useImage()
  
  return {
    url: img('/hero.jpg', { 
      width: 1200, 
      height: 630,
      fit: 'cover' 
    })
  }
})
```

## 🎨 Component improvements

### Template refs

`<NuxtImg>` now exposes the underlying `<img>` element via template refs:

```vue
<script setup>
const img = useTemplateRef('img')

onMounted(() => {
  // Direct access to the native img element
  console.log(img.value.imgEl)
})
</script>

<template>
  <NuxtImg ref="img" src="/image.jpg" />
</template>
```

### Typed slots

Both `<NuxtImg>` and `<NuxtPicture>` now have properly typed default slots.

```vue
<template>
  <NuxtImg src="/image.jpg" custom>
    <template #default="{ imgAttrs, isLoaded, src }">
      <img v-bind="imgAttrs" :src="src">
      <span v-if="!isLoaded">Loading...</span>
    </template>
  </NuxtImg>
</template>
```

The slot provides:

- `imgAttrs` - All computed image attributes (sizes, srcset, etc.)
- `isLoaded` - Whether the placeholder has loaded
- `src` - The computed image source URL

## 🌐 New providers

### Shopify

You can now configure the Shopify provider ([#1890](https://github.com/nuxt/image/pull/1890){rel=""nofollow""}):

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  image: {
    provider: 'shopify',
    shopify: {
      baseURL: 'https://your-store.myshopify.com'
    }
  }
})
```

### GitHub

This provider lets you inject GitHub avatars and user content ([#1990](https://github.com/nuxt/image/pull/1990){rel=""nofollow""}):

```vue
<!-- Width and height -->
<NuxtImg provider="github" src="nuxt" height="50" width="50" />

<!-- Width only -->
<NuxtImg provider="github" src="unjs" width="512" />

<!-- Default size -->
<NuxtImg provider="github" src="npm" />
```

## ⚡ Performance

We've made several optimizations to reduce bundle size and improve runtime performance:

- **Better URL encoding** ([#1813](https://github.com/nuxt/image/pull/1813){rel=""nofollow""}) - Switched to `URLSearchParams` for more reliable parameter handling
- **Reduced runtime utilities** ([#1816](https://github.com/nuxt/image/pull/1816){rel=""nofollow""}) - Removed unused code and simplified implementations
- **Streamlined screen sizes** ([#1931](https://github.com/nuxt/image/pull/1931){rel=""nofollow""}) - Aligned default breakpoints with Tailwind CSS

## 🎯 Better layer support

Nuxt Image now properly supports custom image directories within Nuxt layers ([#1880](https://github.com/nuxt/image/pull/1880){rel=""nofollow""}), making it easier to organize images in modular projects.

## ⚠️ Breaking changes

### Provider API

The biggest breaking change is how providers are defined. All providers now use a default export with the `defineProvider` wrapper:

```diff
- export const getImage = (src, { modifiers }) => { ... }
+ export default defineProvider({
+   getImage(src, { modifiers }) { ... }
+ })
```

If you maintain a custom provider, you'll need to update it. But you get full TypeScript support in return!

### Removed providers

The deprecated `layer0` and `edgio` providers have been removed.

### URL formatters

If you have custom providers using `joinWith` for parameter formatting, you'll need to update them to use the `formatter` function with `createOperationsGenerator`. See the [migration guide](https://image.nuxt.com/get-started/migration#url-formatter-changes){rel=""nofollow""} for details.

### Screen sizes

Default screen sizes now match Tailwind CSS. We've removed `xs` (320px) and `xxl` (2560px). See the [migration guide](https://image.nuxt.com/get-started/migration#screen-size-changes){rel=""nofollow""} for how to add them back if needed.

### Removed utilities

We've removed several unused runtime utilities. If you were importing internal utilities directly, check if they still exist.

## ✅ Upgrading

Check out our comprehensive [migration guide](https://image.nuxt.com/get-started/migration){rel=""nofollow""} for step-by-step upgrade instructions.

The quick version:

```bash [Terminal]
npm install @nuxt/image@latest
```

Most apps can upgrade with no code changes. If you have custom providers, you'll need to update them to use `defineProvider` - see the [migration guide](https://image.nuxt.com/get-started/migration#custom-provider-updates){rel=""nofollow""} for examples.

## 🐛 Bug fixes

This release includes several fixes:

- **Preload links**: Fixed preload for multiple densities with single size ([#1851](https://github.com/nuxt/image/pull/1851){rel=""nofollow""})
- **Crossorigin attributes**: Correct crossorigin on preload links ([#1836](https://github.com/nuxt/image/pull/1836){rel=""nofollow""})
- **Provider-specific formats**: AWS Amplify and Vercel providers now have proper format allow lists ([#1996](https://github.com/nuxt/image/pull/1996){rel=""nofollow""})
- **Hygraph**: Prevented broken image URLs ([#1999](https://github.com/nuxt/image/pull/1999){rel=""nofollow""})
- **Preset sizes**: Fixed preset size application when component sizes prop is undefined ([#1919](https://github.com/nuxt/image/pull/1919){rel=""nofollow""})
- **Cloudflare**: Don't add baseURL if there are no operations ([#1790](https://github.com/nuxt/image/pull/1790){rel=""nofollow""})
- **IPX**: Always use IPX provider if external baseURL is provided ([#1800](https://github.com/nuxt/image/pull/1800){rel=""nofollow""})

## 🙏 Thank you

Thank you to all the contributors who made this release possible! This includes contributions from dozens of community members who helped with features, bug fixes, documentation improvements, and feedback.

## 📚 Resources

- [Documentation](https://image.nuxt.com){rel=""nofollow""}
- [GitHub Repository](https://github.com/nuxt/image){rel=""nofollow""}
- [Migration Guide](https://image.nuxt.com/get-started/migration){rel=""nofollow""}

## 👉 Full release notes

::read-more

Read the full release notes of Nuxt Image `v2.0.0`.
::

Happy optimizing! 🖼️✨
