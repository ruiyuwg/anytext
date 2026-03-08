# Assets

Nuxt uses two directories to handle assets like stylesheets, fonts or images.

- The [`public/`](https://nuxt.com/docs/3.x/directory-structure/public) directory content is served at the server root as-is.
- The [`assets/`](https://nuxt.com/docs/3.x/directory-structure/assets) directory contains by convention every asset that you want the build tool (Vite or webpack) to process.

## Public Directory

The [`public/`](https://nuxt.com/docs/3.x/directory-structure/public) directory is used as a public server for static assets publicly available at a defined URL of your application.

You can get a file in the [`public/`](https://nuxt.com/docs/3.x/directory-structure/public) directory from your application's code or from a browser by the root URL `/`.

### Example

For example, referencing an image file in the `public/img/` directory, available at the static URL `/img/nuxt.png`:

```vue [app.vue]
<template>
  <img
    src="/img/nuxt.png"
    alt="Discover Nuxt"
  >
</template>
```

## Assets Directory

Nuxt uses [Vite](https://vite.dev/guide/assets){rel=""nofollow""} (default) or [webpack](https://webpack.js.org/guides/asset-management/){rel=""nofollow""} to build and bundle your application. The main function of these build tools is to process JavaScript files, but they can be extended through [plugins](https://vite.dev/plugins/){rel=""nofollow""} (for Vite) or [loaders](https://webpack.js.org/loaders/){rel=""nofollow""} (for webpack) to process other kinds of assets, like stylesheets, fonts or SVGs. This step transforms the original file, mainly for performance or caching purposes (such as stylesheet minification or browser cache invalidation).

By convention, Nuxt uses the [`assets/`](https://nuxt.com/docs/3.x/directory-structure/assets) directory to store these files but there is no auto-scan functionality for this directory, and you can use any other name for it.

In your application's code, you can reference a file located in the [`assets/`](https://nuxt.com/docs/3.x/directory-structure/assets) directory by using the `~/assets/` path.

### Example

For example, referencing an image file that will be processed if a build tool is configured to handle this file extension:

```vue [app.vue]
<template>
  <img
    src="~/assets/img/nuxt.png"
    alt="Discover Nuxt"
  >
</template>
```

::note
Nuxt won't serve files in the [`assets/`](https://nuxt.com/docs/3.x/directory-structure/assets) directory at a static URL like `/assets/my-file.png`. If you need a static URL, use the [`public/`](https://nuxt.com/docs/3.x/getting-started/assets#public-directory) directory.
::
