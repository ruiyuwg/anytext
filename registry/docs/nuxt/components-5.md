# components

Nuxt automatically imports any components in this directory (along with components that are registered by any modules you may be using).

```bash [Directory Structure]
-| components/
---| AppHeader.vue
---| AppFooter.vue
```

```html [app.vue]
<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
```

## Component Names

If you have a component in nested directories such as:

```bash [Directory Structure]
-| components/
---| base/
-----| foo/
-------| Button.vue
```

... then the component's name will be based on its own path directory and filename, with duplicate segments being removed. Therefore, the component's name will be:

```html
<BaseFooButton />
```

::note
For clarity, we recommend that the component's filename matches its name. So, in the example above, you could rename `Button.vue` to be `BaseFooButton.vue`.
::

If you want to auto-import components based only on its name, not path, then you need to set `pathPrefix` option to `false` using extended form of the configuration object:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  components: [
    {
      path: '~/components',
      pathPrefix: false, // [!code ++]
    },
  ],
})
```

This registers the components using the same strategy as used in Nuxt 2. For example, `~/components/Some/MyComponent.vue` will be usable as `<MyComponent>` and not `<SomeMyComponent>`.

## Dynamic Components

If you want to use the Vue `<component :is="someComputedComponent">`{.shiki,shiki-themes,material-theme-lighter,material-theme-lighter,material-theme-palenight lang="vue"} syntax, you need to use the `resolveComponent` helper provided by Vue or import the component directly from `#components` and pass it into `is` prop.

For example:

```vue [pages/index.vue]
<script setup lang="ts">
import { SomeComponent } from '#components'

const MyButton = resolveComponent('MyButton')
</script>

<template>
  <component :is="clickable ? MyButton : 'div'" />
  <component :is="SomeComponent" />
</template>
```

::important
If you are using `resolveComponent` to handle dynamic components, make sure not to insert anything but the name of the component, which must be a literal string and not be or contain a variable. The string is statically analyzed at the compilation step.
::

:video-accordion{title="Watch Daniel Roe's short video about resolveComponent()" video-id="4kq8E5IUM2U"}

Alternatively, though not recommended, you can register all your components globally, which will create async chunks for all your components and make them available throughout your application.

```diff
  export default defineNuxtConfig({
    components: {
+     global: true,
+     dirs: ['~/components']
    },
  })
```

You can also selectively register some components globally by placing them in a `~/components/global` directory, or by using a `.global.vue` suffix in the filename. As noted above, each global component is rendered in a separate chunk, so be careful not to overuse this feature.

::note
The `global` option can also be set per component directory.
::

## Dynamic Imports

To dynamically import a component (also known as lazy-loading a component) all you need to do is add the `Lazy` prefix to the component's name. This is particularly useful if the component is not always needed.

By using the `Lazy` prefix you can delay loading the component code until the right moment, which can be helpful for optimizing your JavaScript bundle size.

```vue [pages/index.vue]
<script setup lang="ts">
const show = ref(false)
</script>

<template>
  <div>
    <h1>Mountains</h1>
    <LazyMountainsList v-if="show" />
    <button
      v-if="!show"
      @click="show = true"
    >
      Show List
    </button>
  </div>
</template>
```

## Delayed (or Lazy) Hydration

Lazy components are great for controlling the chunk sizes in your app, but they don't always enhance runtime performance, as they still load eagerly unless conditionally rendered. In real-world applications, some pages may include a lot of content and a lot of components, and most of the time not all of them need to be interactive as soon as the page is loaded. Having them all load eagerly can negatively impact performance.

In order to optimize your app, you may want to delay the hydration of some components until they're visible, or until the browser is done with more important tasks.

Nuxt supports this using lazy (or delayed) hydration, allowing you to control when components become interactive.

### Hydration Strategies

Nuxt provides a range of built-in hydration strategies. Only one strategy can be used per lazy component.

::note
Any prop change on a lazily hydrated component will trigger hydration immediately. (e.g., changing a prop on a component with `hydrate-never` will cause it to hydrate)
::

::warning
Currently Nuxt's built-in lazy hydration only works in single-file components (SFCs), and requires you to define the prop in the template (rather than spreading an object of props via `v-bind`). It also does not work with direct imports from `#components`.
::

#### `hydrate-on-visible`

Hydrates the component when it becomes visible in the viewport.

```vue [pages/index.vue]
<template>
  <div>
    <LazyMyComponent hydrate-on-visible />
  </div>
</template>
```

::read-more
