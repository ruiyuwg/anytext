# IntersectionObserver options

Read more about the options for `hydrate-on-visible`.
::

::note
Under the hood, this uses Vue's built-in [`hydrateOnVisible` strategy](https://vuejs.org/guide/components/async#hydrate-on-visible){rel=""nofollow""}.
::

### Idle Strategy

Hydrates the component when the browser is idle. This is suitable if you need the component to load as soon as possible, but not block the critical rendering path.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'idle',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!-- Hydration will be triggered when the browser is idle or after 2000ms. -->
    <LazyHydrationMyComponent :hydrate-on-idle="2000" />
  </div>
</template>
```

The `hydrateOnIdle` prop is optional. You can pass a positive number to specify the maximum timeout.

Idle strategy is for components that can be hydrated when the browser is idle.

::note
Under the hood, this uses Vue's built-in [`hydrateOnIdle` strategy](https://vuejs.org/guide/components/async#hydrate-on-idle){rel=""nofollow""}.
::

### Interaction Strategy

Hydrates the component after a specified interaction (e.g., click, mouseover).

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'interaction',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!--
      Hydration will be triggered when
      the element(s) is hovered over by the pointer.
    -->
    <LazyHydrationMyComponent hydrate-on-interaction="mouseover" />
  </div>
</template>
```

The `hydrateOnInteraction` prop is optional. If you do not pass an event or a list of events, it defaults to hydrating on `pointerenter`, `click`, and `focus`.

::note
Under the hood, this uses Vue's built-in [`hydrateOnInteraction` strategy](https://vuejs.org/guide/components/async#hydrate-on-interaction){rel=""nofollow""}.
::

### Media Query Strategy

Hydrates the component when the window matches a media query.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'mediaQuery',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!--
      Hydration will be triggered when
      the window width is greater than or equal to 768px.
    -->
    <LazyHydrationMyComponent hydrate-on-media-query="(min-width: 768px)" />
  </div>
</template>
```

::note
Under the hood, this uses Vue's built-in [`hydrateOnMediaQuery` strategy](https://vuejs.org/guide/components/async#hydrate-on-media-query){rel=""nofollow""}.
::

### Time Strategy

Hydrates the component after a specified delay (in milliseconds).

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'time',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!-- Hydration is triggered after 1000ms. -->
    <LazyHydrationMyComponent :hydrate-after="1000" />
  </div>
</template>
```

Time strategy is for components that can wait a specific amount of time.

### If Strategy

Hydrates the component based on a boolean condition.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'if',
  () => import('./components/MyComponent.vue'),
)

const isReady = ref(false)

function myFunction () {
  // Trigger custom hydration strategy...
  isReady.value = true
}
</script>

<template>
  <div>
    <!-- Hydration is triggered when isReady becomes true. -->
    <LazyHydrationMyComponent :hydrate-when="isReady" />
  </div>
</template>
```

If strategy is best for components that might not always need to be hydrated.

### Never Hydrate

Never hydrates the component.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'never',
  () => import('./components/MyComponent.vue'),
)
</script>

<template>
  <div>
    <!-- This component will never be hydrated by Vue. -->
    <LazyHydrationMyComponent />
  </div>
</template>
```

### Listening to Hydration Events

All delayed hydration components emit a `@hydrated` event when they are hydrated.

```vue
<script setup lang="ts">
const LazyHydrationMyComponent = defineLazyHydrationComponent(
  'visible',
  () => import('./components/MyComponent.vue'),
)

function onHydrate () {
  console.log('Component has been hydrated!')
}
</script>

<template>
  <div>
    <LazyHydrationMyComponent
      :hydrate-on-visible="{ rootMargin: '100px' }"
      @hydrated="onHydrated"
    />
  </div>
</template>
```

## Parameters

::warning
To ensure that the compiler correctly recognizes this macro, avoid using external variables. The following approach will prevent the macro from being properly recognized:

```vue
<script setup lang="ts">
const strategy = 'visible'
const source = () => import('./components/MyComponent.vue')
const LazyHydrationMyComponent = defineLazyHydrationComponent(strategy, source)
</script>
```

::

### `strategy`

- **Type**: `'visible' | 'idle' | 'interaction' | 'mediaQuery' | 'if' | 'time' | 'never'`
- **Required**: `true`

| Strategy      | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| `visible`     | Hydrates when the component becomes visible in the viewport. |
| `idle`        | Hydrates when the browser is idle or after a delay.          |
| `interaction` | Hydrates upon user interaction (e.g., click, hover).         |
| `mediaQuery`  | Hydrates when the specified media query condition is met.    |
| `if`          | Hydrates when a specified boolean condition is met.          |
| `time`        | Hydrates after a specified time delay.                       |
| `never`       | Prevents Vue from hydrating the component.                   |

### `source`

- **Type**: `() => Promise<Component>`
- **Required**: `true`

# defineNuxtComponent

::note
`defineNuxtComponent()` is a helper function for defining type safe Vue components using options API similar to [`defineComponent()`](https://vuejs.org/api/general#definecomponent){rel=""nofollow""}. `defineNuxtComponent()` wrapper also adds support for `asyncData` and `head` component options.
::

::note
Using `<script setup lang="ts">` is the recommended way of declaring Vue components in Nuxt.
::

:read-more{to="https://nuxt.com/docs/getting-started/data-fetching"}

## `asyncData()`

If you choose not to use `setup()` in your app, you can use the `asyncData()` method within your component definition:

```vue [pages/index.vue]
<script lang="ts">
export default defineNuxtComponent({
  asyncData () {
    return {
      data: {
        greetings: 'hello world!',
      },
    }
  },
})
</script>
```

## `head()`

If you choose not to use `setup()` in your app, you can use the `head()` method within your component definition:

```vue [pages/index.vue]
<script lang="ts">
export default defineNuxtComponent({
  head (nuxtApp) {
    return {
      title: 'My site',
    }
  },
})
</script>
```
