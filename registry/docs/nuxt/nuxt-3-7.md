# Nuxt 3.7

### 🐣 A New CLI

We've refactored `nuxi` using [unjs/citty](http://github.com/unjs/citty){rel=""nofollow""} and this marks the first Nuxt release that depends on the new version, safely in its own repository. We have grand plans for this - check out some of the features + roadmap discussions in [nuxt/cli](https://github.com/nuxt/cli){rel=""nofollow""} and please feel free to contribute!

- [**Project Goals**](https://github.com/nuxt/cli/discussions/3)
- [Feedbacks and Ideas](https://github.com/nuxt/cli/discussions/4)
- [The journey of Nuxt CLI Generations](https://github.com/nuxt/cli/discussions/7)

Nuxi is now decoupled from the main `nuxt` version - we plan to iterate and release nuxi more quickly in future so you can expect new things coming soon!

### 🕸️ Native Web Streams and `Response`

With improvements in [unjs/h3](https://github.com/unjs/h3){rel=""nofollow""} and [unjs/nitro](https://github.com/unjs/nitro){rel=""nofollow""}, it's now possible to directly return a `Response` object from server routes, meaning it's *also* possible to return and handle streams natively in Nuxt.

👉 Check out the full detail in the [unjs/h3](https://github.com/unjs/h3/releases){rel=""nofollow""} and [unjs/nitro](https://github.com/unjs/nitro/releases){rel=""nofollow""} release notes.

### 🔥 HTML Rendering Optimisations

This release comes with a couple of improvements in rendering HTML responses from the server. We now determine whether to preload/prefetch resources at build time (so you can customise this in the `build:manifest` hook). We also now manage rendering the HTML for them directly in `unhead` ([#22179](https://github.com/nuxt/nuxt/pull/22179){rel=""nofollow""}), which means you can configure the *order* for `<link>`, `<meta>`, `<script>`, `<style>`, and more. And - in our preliminary testing - it's even faster!

It's possible to opt-in to upcoming head improvements with the `experimental.headNext` flag. This currently includes a new ordering algorithm based on [capo.js](https://github.com/rviscomi/capo.js){rel=""nofollow""} ([#22431](https://github.com/nuxt/nuxt/pull/22431){rel=""nofollow""}) and allows enabling future optimisations as they are released in `unhead`:

```ts
export default defineNuxtConfig({
  experimental: {
    headNext: true
  }
})
```

We'd love your thoughts - you can respond with any issues/feedback in [this discussion](https://github.com/nuxt/nuxt/discussions/22632){rel=""nofollow""}.

### 🛠️ Build Environment Shortcuts

In your Nuxt config you can now use `$client` and `$server` shortcuts to easily define configuration that is specific to just the Vite client/server ([#22302](https://github.com/nuxt/nuxt/pull/22302){rel=""nofollow""}) or webpack client/server ([#22304](https://github.com/nuxt/nuxt/pull/22304){rel=""nofollow""}) builds. This previously was only possible with the `vite:extendConfig` and `webpack:config` hooks.

For example:

```ts
export default defineNuxtConfig({
  vite: {
    $client: {
      build: {
        rollupOptions: {
          output: {
            chunkFileNames: '_nuxt/[hash].js',
            assetFileNames: '_nuxt/[hash][extname]',
            entryFileNames: '_nuxt/[hash].js'
          }
        }
      }
    }
  }
})
```

### ⚡️ Vite 4.4

We've chosen to unpin Vite from minor versions, meaning whenever Vite releases a new feature version you can opt-in straight away. Vite 4.4 brings a lot of exciting things, including experimental Lightning CSS support - and much more!

👉 Check out the [Vite release notes](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md#440-2023-07-06){rel=""nofollow""} for more.

### 💪 TypeScript Updates

We now use purely relative paths in the generated `tsconfig.json` instead of setting a `baseUrl`. This means better support for dev environments like docker images where the absolute path may not match your IDE ([#22410](https://github.com/nuxt/nuxt/pull/22410){rel=""nofollow""}).

We also set a couple of additional compiler flag defaults to match Vite/TS recommendations ([#22468](https://github.com/nuxt/nuxt/pull/22468){rel=""nofollow""}).

Plus, you should now get type hinted access to layouts in `setPageLayout` and also in `<NuxtLayout name>` ([#22363](https://github.com/nuxt/nuxt/pull/22362){rel=""nofollow""}).

### 🦄 Async Context support

If you've ever got an issue with 'Nuxt context unavailable' this might be one for you. We now support native async context for Bun and Node under an experimental flag, in both Nuxt and Nitro ([#20918](https://github.com/nuxt/nuxt/pull/20918){rel=""nofollow""}).

This enables using Nuxt composables on the server *without* needing to ensure they are being called directly in a setup function. It also allows the same in Nitro, with a new `useEvent()` utility that is usable in server routes.

To try it out, you can enable `experimental.asyncContext`:

```ts
export default defineNuxtConfig({
  experimental: {
    asyncContext: true
  }
})
```

### 👓 Watcher Updates

We've fixed a couple of issues with watchers, meaning that you should need to restart your server less often - and you should see a significant performance increase if you are using layers.

### ⚗️ Nitro 2.6

There lots more exciting features coming directly from Nitro 2.6, including smaller, lighter servers and new persistent data storage in a `.data` directory.

👉 Read more in [the full release article](https://unjs.io/blog/2023-08-25-nitro-2.6){rel=""nofollow""}.

## ✅ Upgrading

As usual, our recommendation for upgrading is to run:

```sh
npx nuxi upgrade --force
```

This will refresh your lockfile as well, and ensures that you pull in updates from other dependencies that Nuxt relies on, particularly in the [unjs](https://github.com/unjs){rel=""nofollow""} ecosystem.

## 📃 Full changelog

Read the full release notes on <https://github.com/nuxt/nuxt/releases/tag/v3.7.0>{rel=""nofollow""}
