### New Directory Structure

🚦 **Impact Level**: Significant

Nuxt now defaults to a new directory structure, with backwards compatibility (so if Nuxt detects you are using the old structure, such as with a top-level `app/pages/` directory, this new structure will not apply).

👉 [See full RFC](https://github.com/nuxt/nuxt/issues/26444){rel=""nofollow""}

#### What Changed

- the new Nuxt default `srcDir` is `app/` by default, and most things are resolved from there.
- `serverDir` now defaults to `<rootDir>/server` rather than `<srcDir>/server`
- `layers/`, `modules/` and `public/` are resolved relative to `<rootDir>` by default
- if using [Nuxt Content v2.13+](https://github.com/nuxt/content/pull/2649){rel=""nofollow""}, `content/` is resolved relative to `<rootDir>`
- a new `dir.app` is added, which is the directory we look for `router.options.ts` and `spa-loading-template.html` - this defaults to `<srcDir>/`
- a new [`shared/`](https://nuxt.com/docs/4.x/directory-structure/shared) directory is available for code shared between the Vue app and the Nitro server, with auto-imports for `shared/utils/` and `shared/types/`

An example v4 folder structure.

```sh
.output/
.nuxt/
app/
  assets/
  components/
  composables/
  layouts/
  middleware/
  pages/
  plugins/
  utils/
  app.config.ts
  app.vue
  router.options.ts
content/
layers/
modules/
node_modules/
public/
shared/
  types/
  utils/
server/
  api/
  middleware/
  plugins/
  routes/
  utils/
nuxt.config.ts
```

::note
With this new structure, the `~` alias now points to the `app/` directory by default (your `srcDir`). This means `~/components` resolves to `app/components/`, `~/pages` to `app/pages/`, etc.
::

👉 For more details, see the [PR implementing this change](https://github.com/nuxt/nuxt/pull/27029){rel=""nofollow""}.

#### Reasons for Change

1. **Performance** - placing all your code in the root of your repo causes issues with `.git/` and `node_modules/` folders being scanned/included by FS watchers which can significantly delay startup on non-Mac OSes.
2. **IDE type-safety** - `server/` and the rest of your app are running in two entirely different contexts with different global imports available, and making sure `server/` isn't *inside* the same folder as the rest of your app is a big first step to ensuring you get good auto-completes in your IDE.

:video-accordion{platform="vimeo" title="Watch a video from Vue School on the new directory structure" video-id="1031028378"}

#### Migration Steps

1. Create a new directory called `app/`.
2. Move your `assets/`, `components/`, `composables/`, `app/layouts/`, `app/middleware/`, `app/pages/`, `app/plugins/` and `utils/` folders under it, as well as `app.vue`, `error.vue`, `app.config.ts`. If you have an `app/router-options.ts` or `app/spa-loading-template.html`, these paths remain the same.
3. Make sure your `nuxt.config.ts`, `content/`, `layers/`, `modules/`, `public/`, `shared/` and `server/` folders remain outside the `app/` folder, in the root of your project.
4. Remember to update any third-party configuration files to work with the new directory structure, such as your `tailwindcss` or `eslint` configuration (if required - `@nuxtjs/tailwindcss` should automatically configure `tailwindcss` correctly).

::tip
You can automate this migration by running `npx codemod@latest nuxt/4/file-structure`
::

However, migration is *not required*. If you wish to keep your current folder structure, Nuxt should auto-detect it. (If it does not, please raise an issue.) The one exception is that if you *already* have a custom `srcDir`. In this case, you should be aware that your `modules/`, `public/`, `shared/` and `server/` folders will be resolved from your `rootDir` rather than from your custom `srcDir`. You can override this by configuring `dir.modules`, `dir.public` and `serverDir` if you need to.

You can also force a v3 folder structure with the following configuration:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  // This reverts the new srcDir default from `app` back to your root directory
  srcDir: '.',
  // This specifies the directory prefix for `router.options.ts` and `spa-loading-template.html`
  dir: {
    app: 'app',
  },
})
```
