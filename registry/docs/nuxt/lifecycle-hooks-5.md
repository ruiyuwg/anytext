# Lifecycle Hooks

::tip
The hooking system is powered by [unjs/hookable](https://github.com/unjs/hookable){rel=""nofollow""}.
::

## Nuxt Hooks (Build Time)

These hooks are available for [Nuxt modules](https://nuxt.com/docs/3.x/guide/modules) and build context.

### Within `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  hooks: {
    close: () => { },
  },
})
```

### Within Nuxt Modules

```js
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup (options, nuxt) {
    nuxt.hook('close', async () => { })
  },
})
```

::read-more

Explore all available Nuxt hooks.
::

## App Hooks (Runtime)

App hooks can be mainly used by [Nuxt Plugins](https://nuxt.com/docs/3.x/directory-structure/plugins) to hook into rendering lifecycle but could also be used in Vue composables.

```ts [plugins/test.ts]
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    /* your code goes here */
  })
})
```

::read-more{to="https://nuxt.com/docs/3.x/api/advanced/hooks#app-hooks-runtime"}
Explore all available App hooks.
::

## Server Hooks (Runtime)

These hooks are available for [server plugins](https://nuxt.com/docs/3.x/directory-structure/server#server-plugins) to hook into Nitro's runtime behavior.

```ts [~/server/plugins/test.ts]
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    console.log('render:html', html)
    html.bodyAppend.push('<hr>Appended by custom plugin')
  })

  nitroApp.hooks.hook('render:response', (response, { event }) => {
    console.log('render:response', response)
  })
})
```

::read-more

Learn more about available Nitro lifecycle hooks.
::

## Adding Custom Hooks

You can define your own custom hooks support by extending Nuxt's hook interfaces.

```ts
import type { HookResult } from '@nuxt/schema'

declare module '#app' {
  interface RuntimeNuxtHooks {
    'your-nuxt-runtime-hook': () => HookResult
  }
  interface NuxtHooks {
    'your-nuxt-hook': () => HookResult
  }
}

declare module 'nitropack/types' {
  interface NitroRuntimeHooks {
    'your-nitro-hook': () => void
  }
}
```

# Nuxt Kit

Nuxt Kit provides composable utilities to make interacting with [Nuxt Hooks](https://nuxt.com/docs/3.x/api/advanced/hooks), the [Nuxt Interface](https://nuxt.com/docs/3.x/guide/going-further/internals#the-nuxt-interface) and developing [Nuxt modules](https://nuxt.com/docs/3.x/guide/modules) super easy.

::read-more{to="https://nuxt.com/docs/3.x/api/kit"}
Discover all Nuxt Kit utilities.
::

## Usage

### Install Dependency

You can install the latest Nuxt Kit by adding it to the `dependencies` section of your `package.json`. However, please consider always explicitly installing the `@nuxt/kit` package even if it is already installed by Nuxt.

::note
`@nuxt/kit` and `@nuxt/schema` are key dependencies for Nuxt. If you are installing it separately, make sure that the versions of `@nuxt/kit` and `@nuxt/schema` are equal to or greater than your `nuxt` version to avoid any unexpected behavior.
::

```json [package.json]
{
  "dependencies": {
    "@nuxt/kit": "npm:@nuxt/kit-nightly@latest"
  }
}
```

### Import Kit Utilities

```ts [test.mjs]
import { useNuxt } from '@nuxt/kit'
```

:read-more{to="https://nuxt.com/docs/3.x/api/kit"}

::note
Nuxt Kit utilities are only available for modules and not meant to be imported in runtime (components, Vue composables, pages, plugins, or server routes).
::

Nuxt Kit is an [esm-only package](https://nuxt.com/docs/3.x/guide/concepts/esm) meaning that you **cannot** `require('@nuxt/kit')`. As a workaround, use dynamic import in the CommonJS context:

```ts [test.cjs]
// This does NOT work!
// const kit = require('@nuxt/kit')
async function main () {
  const kit = await import('@nuxt/kit')
}
main()
```
