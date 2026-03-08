# Common reasons

## Browser-only APIs in Server Context

**Problem**: Using browser-specific APIs during server-side rendering.

```html
<template>
  <div>User preference: {{ userTheme }}</div>
</template>

<script setup>
// This will cause hydration mismatch!
// localStorage doesn't exist on the server!
const userTheme = localStorage.getItem('theme') || 'light'
</script>
```

**Solution**: You can use [`useCookie`](https://nuxt.com/docs/4.x/api/composables/use-cookie):

```html
<template>
  <div>User preference: {{ userTheme }}</div>
</template>

<script setup>
// This works on both server and client
const userTheme = useCookie('theme', { default: () => 'light' })
</script>
```

## Inconsistent Data

**Problem**: Different data between server and client.

```html
<template>
  <div>{{ Math.random() }}</div>
</template>
```

**Solution**: Use SSR-friendly state:

```html
<template>
  <div>{{ state }}</div>
</template>

<script setup>
const state = useState('random', () => Math.random())
</script>
```

## Conditional Rendering Based on Client State

**Problem**: Using client-only conditions during SSR.

```html
<template>
  <div v-if="window?.innerWidth > 768">
    Desktop content
  </div>
</template>
```

**Solution**: Use media queries or handle it client-side:

```html
<template>
  <div class="responsive-content">
    <div class="hidden md:block">Desktop content</div>
    <div class="md:hidden">Mobile content</div>
  </div>
</template>
```

## Third-party Libraries with Side Effects

**Problem**: Libraries that modify the DOM or have browser dependencies (this happens a LOT with tag managers).

```html
<script setup>
if (import.meta.client) {
    const { default: SomeBrowserLibrary } = await import('browser-only-lib')
    SomeBrowserLibrary.init()
}
</script>
```

**Solution**: Initialise libraries after hydration has completed:

```html
<script setup>
onMounted(async () => {
  const { default: SomeBrowserLibrary } = await import('browser-only-lib')
  SomeBrowserLibrary.init()
})
</script>
```

## Dynamic Content Based on Time

**Problem**: Content that changes based on current time.

```html
<template>
  <div>{{ greeting }}</div>
</template>

<script setup>
const hour = new Date().getHours()
const greeting = hour < 12 ? 'Good morning' : 'Good afternoon'
</script>
```

**Solution**: Use [`NuxtTime`](https://nuxt.com/docs/4.x/api/components/nuxt-time) component or handle it client-side:

```html
<template>
  <div>
    <NuxtTime :date="new Date()" format="HH:mm" />
  </div>
</template>
```

```html
<template>
  <div>
    <ClientOnly>
      {{ greeting }}
      <template #fallback>
        Hello!
      </template>
    </ClientOnly>
  </div>
</template>

<script setup>
const greeting = ref('Hello!')

onMounted(() => {
  const hour = new Date().getHours()
  greeting.value = hour < 12 ? 'Good morning' : 'Good afternoon'
})
</script>
```

## In summary

1. **Use SSR-friendly composables**: [`useFetch`](https://nuxt.com/docs/4.x/api/composables/use-fetch), [`useAsyncData`](https://nuxt.com/docs/4.x/api/composables/use-async-data), [`useState`](https://nuxt.com/docs/4.x/api/composables/use-state)
2. **Wrap client-only code**: Use [`ClientOnly`](https://nuxt.com/docs/4.x/api/components/client-only) component for browser-specific content
3. **Consistent data sources**: Ensure server and client uses the same data
4. **Avoid side effects in setup**: Move browser-dependent code to `onMounted`

::tip
You can read the [Vue documentation on SSR hydration mismatch](https://vuejs.org/guide/scaling-up/ssr#hydration-mismatch){rel=""nofollow""} for a better understanding of hydration.
::
