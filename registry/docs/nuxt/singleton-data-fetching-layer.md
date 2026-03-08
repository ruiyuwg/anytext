### Singleton Data Fetching Layer

🚦 **Impact Level**: Moderate

#### What Changed

Nuxt's data fetching system (`useAsyncData` and `useFetch`) has been significantly reorganized for better performance and consistency:

1. **Shared refs for the same key**: All calls to `useAsyncData` or `useFetch` with the same key now share the same `data`, `error` and `status` refs. This means that it is important that all calls with an explicit key must not have conflicting `deep`, `transform`, `pick`, `getCachedData` or `default` options.
2. **More control over `getCachedData`**: The `getCachedData` function is now called every time data is fetched, even if this is caused by a watcher or calling `refreshNuxtData`. (Previously, new data was always fetched and this function was not called in these cases.) To allow more control over when to use cached data and when to refetch, the function now receives a context object with the cause of the request.
3. **Reactive key support**: You can now use computed refs, plain refs or getter functions as keys, which enables automatic data refetching (and stores data separately).
4. **Data cleanup**: When the last component using data fetched with `useAsyncData` is unmounted, Nuxt will remove that data to avoid ever-growing memory usage.

#### Reasons for Change

These changes have been made to improve memory usage and increase consistency with loading states across calls of `useAsyncData`.

#### Migration Steps

1. **Check for inconsistent options**: Review any components using the same key with different options or fetch functions.
   ```ts
   // This will now trigger a warning
   const { data: users1 } = useAsyncData('users', () => $fetch('/api/users'), { deep: false })
   const { data: users2 } = useAsyncData('users', () => $fetch('/api/users'), { deep: true })
   ```
   :brIt may be beneficial to extract any calls to `useAsyncData` that share an explicit key (and have custom options) into their own composable:
   ```ts [app/composables/useUserData.ts]
   export function useUserData (userId: string) {
     return useAsyncData(
       `user-${userId}`,
       () => fetchUser(userId),
       {
         deep: true,
         transform: user => ({ ...user, lastAccessed: new Date() }),
       },
     )
   }
   ```
2. **Update `getCachedData` implementations**:
   ```diff
   useAsyncData('key', fetchFunction, {
   -  getCachedData: (key, nuxtApp) => {
   -    return cachedData[key]
   -  }
   +  getCachedData: (key, nuxtApp, ctx) => {
   +    // ctx.cause - can be 'initial' | 'refresh:hook' | 'refresh:manual' | 'watch'
   +    
   +    // Example: Don't use cache on manual refresh
   +    if (ctx.cause === 'refresh:manual') return undefined
   +    
   +    return cachedData[key]
   +  }
   })
   ```

Alternatively, for now, you can disable this behaviour with:

```ts [nuxt.config.ts] twoslash
export default defineNuxtConfig({
  experimental: {
    granularCachedData: false,
    purgeCachedData: false,
  },
})
```
