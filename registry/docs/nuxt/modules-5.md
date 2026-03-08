# modules

It is a good place to place any local modules you develop while building your application.

The auto-registered files patterns are:

- `modules/*/index.ts`
- `modules/*.ts`

You don't need to add those local modules to your [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) separately.

::code-group

```ts [modules/hello/index.ts] twoslash
// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import { addComponentsDir, addServerHandler, createResolver, defineNuxtModule } from 'nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'hello',
  },
  setup () {
    const resolver = createResolver(import.meta.url)

    // Add an API route
    addServerHandler({
      route: '/api/hello',
      handler: resolver.resolve('./runtime/api-route'),
    })

    // Add components
    addComponentsDir({
      path: resolver.resolve('./runtime/app/components'),
      pathPrefix: true, // Prefix your exports to avoid conflicts with user code or other modules
    })
  },
})
```

```ts [modules/hello/runtime/api-route.ts] twoslash
export default defineEventHandler(() => {
  return { hello: 'world' }
})
```

::

When starting Nuxt, the `hello` module will be registered and the `/api/hello` route will be available.

::note
Note that all components, pages, composables and other files that would be normally placed in your `app/` directory need to be in `modules/your-module/runtime/app/`. This ensures they can be type-checked properly.
::

Modules are executed in the following sequence:

- First, the modules defined in [`nuxt.config.ts`](https://nuxt.com/docs/4.x/api/nuxt-config#modules-1) are loaded.
- Then, modules found in the `modules/` directory are executed, and they load in alphabetical order.

You can change the order of local module by adding a number to the front of each directory name:

```bash [Directory structure]
modules/
  1.first-module/
    index.ts
  2.second-module.ts
```

:read-more{to="https://nuxt.com/docs/4.x/guide/modules"}

::tip

Watch Vue School video about Nuxt private modules.
::

# node\_modules

The package manager ([`npm`](https://docs.npmjs.com/cli/commands/npm/){rel=""nofollow""} or [`yarn`](https://yarnpkg.com){rel=""nofollow""} or [`pnpm`](https://pnpm.io/cli/install){rel=""nofollow""} or [`bun`](https://bun.com/package-manager){rel=""nofollow""} or [`deno`](https://docs.deno.com/runtime/getting_started/installation/){rel=""nofollow""}) creates this directory to store the dependencies of your project.

::important
This directory should be added to your [`.gitignore`](https://nuxt.com/docs/4.x/directory-structure/gitignore) file to avoid pushing the dependencies to your repository.
::

# public

Files contained within the `public/` directory are served at the root and are not modified by the build process. This is suitable for files that have to keep their names (e.g. `robots.txt`) *or* likely won't change (e.g. `favicon.ico`).

```bash [Directory structure]
-| public/
---| favicon.ico
---| og-image.png
---| robots.txt
```

```vue [app/app.vue]
<script setup lang="ts">
useSeoMeta({
  ogImage: '/og-image.png',
})
</script>
```

::tip{target="\_blank" to="https://v2.nuxt.com/docs/directory-structure/static/"}
This is known as the \[`static/`] directory in Nuxt 2.
::
