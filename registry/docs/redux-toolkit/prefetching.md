On this page

The goal of prefetching is to make data fetch _before_ the user navigates to a page or attempts to load some known content.

There are a handful of situations that you may want to do this, but some very common use cases are:

1.  User hovers over a navigation element
2.  User hovers over a list element that is a link
3.  User hovers over a next pagination button
4.  User navigates to a page and you know that some components down the tree will require said data. This way, you can prevent fetching waterfalls.

## Prefetching vs Subscriptions[​](#prefetching-vs-subscriptions "Direct link to Prefetching vs Subscriptions")

Prefetching is designed as a "fire and forget" operation that loads data into the cache without creating an ongoing subscription. This means:

-   **No automatic refetching**: Prefetched data will not automatically refetch when tags are invalidated
-   **No subscription management**: You don't need to (and can't) manually unsubscribe from prefetched data
-   **Cache cleanup**: Prefetched data without active subscriptions may be removed during normal cache cleanup
-   **Returns void**: The prefetch trigger function doesn't return a promise or subscription handle

If you need data that automatically refetches on invalidation or stays in the cache as long as a component is mounted, use a query hook like `useQuery` or `useQuerySubscription` instead. Prefetch is ideal for warming the cache before a user action, while query hooks are for ongoing data needs.

When to use prefetch vs query hooks

-   **Use prefetch** when you want to load data ahead of time (e.g., on hover) but don't need it to stay fresh
-   **Use query hooks** when you need data that automatically refetches on invalidation and stays in cache while the component is mounted
-   **Use both together**: Prefetch on hover, then let the query hook create a subscription when the user navigates

## Prefetching with React Hooks[​](#prefetching-with-react-hooks "Direct link to Prefetching with React Hooks")

Similar to the [`useMutation`](/rtk-query/usage/mutations) hook, the `usePrefetch` hook will not run automatically — it returns a "trigger function" that can be used to initiate the behavior.

It accepts two arguments: the first is the key of a query action that you [defined in your API service](/rtk-query/api/createApi#endpoints), and the second is an object of two optional parameters:

usePrefetch Signature

```
export type PrefetchOptions =  | { force?: boolean }  | {      ifOlderThan?: false | number;    };usePrefetch<EndpointName extends QueryKeys<Definitions>>(    endpointName: EndpointName,    options?: PrefetchOptions  ): (arg: QueryArgFrom<Definitions[EndpointName]>, options?: PrefetchOptions) => void;
```

### Customizing the Hook Behavior[​](#customizing-the-hook-behavior "Direct link to Customizing the Hook Behavior")

You can specify these prefetch options when declaring the hook or at the call site. The call site will take priority over the defaults.

1.  `ifOlderThan` - (default: `false` | `number`) - _number is value in seconds_
    -   If specified, it will only run the query if the difference between `new Date()` and the last `fulfilledTimeStamp` is greater than the given value
2.  `force`
    -   If `force: true`, it will ignore the `ifOlderThan` value if it is set and the query will be run even if it exists in the cache.

### Trigger Function Behavior[​](#trigger-function-behavior "Direct link to Trigger Function Behavior")

1.  The trigger function _always_ returns `void`.
2.  If `force: true` is set during the declaration or at the call site, the query will be run no matter what. The one exception to that is if the same query is already in-flight.
3.  If no options are specified and the query exists in the cache, the query will not be performed.
4.  If no options are specified and the query _does not exist_ in the cache, the query will be performed.
    -   **Assuming** you have a `useQuery` hook in the tree that is subscribed to the same query that you are prefetching:
        -   `useQuery` will return `{isLoading: true, isFetching: true, ...rest`}
5.  If `ifOlderThan` is specified but evaluates to false and the query is in the cache, the query will not be performed.
6.  If `ifOlderThan` is specified and evaluates to true, the query will be performed even if there is an existing cache entry.
    -   **Assuming** you have a `useQuery` hook in the tree that is subscribed to the same query that you are prefetching:
        -   `useQuery` will return `{isLoading: false, isFetching: true, ...rest`}

usePrefetch Example

```
function User() {  const prefetchUser = usePrefetch('getUser')  // Low priority hover will not fire unless the last request happened more than 35s ago  // High priority hover will _always_ fire  return (    <div>      <button onMouseEnter={() => prefetchUser(4, { ifOlderThan: 35 })}>        Low priority      </button>      <button onMouseEnter={() => prefetchUser(4, { force: true })}>        High priority      </button>    </div>  )}
```

### Recipe: Prefetch Immediately[​](#recipe-prefetch-immediately "Direct link to Recipe: Prefetch Immediately")

In some cases, you may want to prefetch a resource immediately. You can implement this in just a few lines of code:

hooks/usePrefetchImmediately.ts

```
type EndpointNames = keyof typeof api.endpointsexport function usePrefetchImmediately<T extends EndpointNames>(  endpoint: T,  arg: Parameters<(typeof api.endpoints)[T]['initiate']>[0],  options: PrefetchOptions = {},) {  const dispatch = useAppDispatch()  useEffect(() => {    dispatch(api.util.prefetch(endpoint, arg as any, options))  }, [])}// In a componentusePrefetchImmediately('getUser', 5)
```

## Prefetching Without Hooks[​](#prefetching-without-hooks "Direct link to Prefetching Without Hooks")

If you're not using the `usePrefetch` hook, you can recreate the same behavior on your own in any framework.

When dispatching the `prefetch` thunk as shown below you will see the same exact behavior as [described here](#trigger-function-behavior).

Non-hook prefetching example

```
store.dispatch(  api.util.prefetch(endpointName, arg, { force: false, ifOlderThan: 10 }),)
```

### Prefetch vs `initiate()`[​](#prefetch-vs-initiate "Direct link to prefetch-vs-initiate")

While you can also use `initiate()` directly, there are important differences:

Using initiate() directly

```
// This creates a subscription that must be manually cleaned upconst promise = dispatch(  api.endpoints[endpointName].initiate(arg, {    subscribe: true, // Creates a subscription (default)    forceRefetch: true,  }),)// You must manually unsubscribe to prevent memory leakspromise.unsubscribe()
```

**Key differences:**

-   **`api.util.prefetch()`**: Automatically uses `subscribe: false`, no cleanup needed
-   **`endpoint.initiate()`**: Defaults to `subscribe: true`, requires manual `unsubscribe()` call

Use `prefetch()` for simple "load and forget" scenarios. Use `initiate()` directly only when you need fine-grained control over subscriptions and are prepared to manage the subscription lifecycle yourself.

## Prefetching Examples[​](#prefetching-examples "Direct link to Prefetching Examples")

### Basic Prefetching[​](#basic-prefetching "Direct link to Basic Prefetching")

This is a very basic example that shows how you can prefetch when a user hovers over the next arrow. This is probably not the optimal solution, because if they hover, click, then change pages without moving their mouse, we wouldn't know to prefetch the next page because we wouldn't see the next `onMouseEnter` event. In this case, you would need to handle this on your own. You could also consider automatically prefetching the next page...

### Automatic Prefetching[​](#automatic-prefetching "Direct link to Automatic Prefetching")

Picking up on our last example, we automatically `prefetch` the next page, giving the appearance of no network delay.

### Prefetching All Known Pages[​](#prefetching-all-known-pages "Direct link to Prefetching All Known Pages")

After the first query initialized by `useQuery` runs, we automatically fetch all remaining pages.
