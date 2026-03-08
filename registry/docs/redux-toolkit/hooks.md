On this page

## Hooks Overview[​](#hooks-overview "Direct link to Hooks Overview")

The core RTK Query `createApi` method is UI-agnostic, in the same way that the Redux core library and Redux Toolkit are UI-agnostic. They are all plain JS logic that can be used anywhere. So, if you import `createApi` from `'@reduxjs/toolkit/query'`, it does not have any specific UI integrations included.

However, RTK Query also provides the ability to auto-generate React hooks for each of your endpoints. Since this specifically depends on React itself, RTK Query provides an additional entry point that exposes a customized version of `createApi` that includes that functionality:

```
import { createApi } from '@reduxjs/toolkit/query/react'
```

If you have used the React-specific version of `createApi`, the generated `api` slice structure will also contain a set of React hooks. The primary endpoint hooks are available as `api.endpoints[endpointName].useQuery`, `api.endpoints[endpointName].useMutation`, and `api.endpoints[endpointName].useInfiniteQuery`, matching how you defined that endpoint.

### Generated Hook Names[​](#generated-hook-names "Direct link to Generated Hook Names")

The same hooks are also added to the `api` object itself, and given auto-generated names based on the endpoint name and query/mutation type.

For example, if you had endpoints for `getPosts` and `updatePost`, these options would be available:

Generated React Hook names

```
// Hooks attached to the endpoint definitionconst { data } = api.endpoints.getPosts.useQuery()const [updatePost, { data }] = api.endpoints.updatePost.useMutation()// Same hooks, but given unique names and attached to the API slice objectconst { data } = api.useGetPostsQuery()const [updatePost, { data }] = api.useUpdatePostMutation()
```

The general format is `use(Endpointname)(Query|Mutation|InfiniteQuery)` - `use` is prefixed, the first letter of your endpoint name is capitalized, then `Query` or `Mutation` or `InfiniteQuery` is appended depending on the type.

### Available Hooks[​](#available-hooks "Direct link to Available Hooks")

RTK Query provides additional hooks for more advanced use-cases, although not all are generated directly on the `api` object as well.

Most of the hooks are generated on a per-endpoint basis.

The full list of hooks generated in the React-specific version of `createApi` is:

-   Endpoint-specific, generated the `api` object with a unique name and on the endpoint object with a generic name:
    -   [`useQuery`](#usequery) (all standard queries)
    -   [`useMutation`](#usemutation) (all mutations)
    -   [`useInfiniteQuery`](#useinfinitequery) (only infinite queries)
    -   [`useLazyQuery`](#uselazyquery) (all standard queries)
-   Endpoint-specific, only generated on the endpoint object with a generic name:
    -   [`useQueryState`](#usequerystate)
    -   [`useQuerySubscription`](#usequerysubscription)
    -   [`useLazyQuerySubscription`](#uselazyquerysubscription)
    -   [`useInfiniteQueryState`](#useinfinitequerystate)
    -   [`useInfiniteQuerySubscription`](#useinfinitequerysubscription)
-   Endpoint-agnostic, generated on the `api` object:
    -   [`usePrefetch`](#useprefetch)

For the example above, the full set of generated hooks for the api would be like so:

Generated React Hooks

```
/* Hooks attached to the `getPosts` query endpoint definition */api.endpoints.getPosts.useQuery(arg, options)api.endpoints.getPosts.useQueryState(arg, options)api.endpoints.getPosts.useQuerySubscription(arg, options)api.endpoints.getPosts.useLazyQuery(options)api.endpoints.getPosts.useLazyQuerySubscription(options)/* hooks attached to the `getManyPosts` infinite query endpoint definition */api.endpoints.getManyPosts.useInfiniteQuery(arg, options)api.endpoints.getManyPosts.useInfiniteQueryState(arg, options)api.endpoints.getManyPosts.useInfiniteQuerySubscription(arg, options)/* Hooks attached to the `updatePost` mutation endpoint definition */api.endpoints.updatePost.useMutation(options)/* Hooks attached to the `api` object */// same as api.endpoints.getPosts.useQueryapi.useGetPostsQuery(arg, options)// same as api.endpoints.getPosts.useLazyQueryapi.useLazyGetPostsQuery(arg, options)// same as api.endpoints.updatePost.useMutationapi.useUpdatePostMutation(arg, options)// same as api.endpoints.getManyPosts.useInfiniteQueryapi.useGetManyPostsInfiniteQuery(arg, options)// Generic, used for any endpointapi.usePrefetch(endpointName, options)
```

### Feature Comparison[​](#feature-comparison "Direct link to Feature Comparison")

The provided hooks have a degree of feature overlap in order to provide options optimized for a given situation. The table below provides a comparison of the core features for each hook.

Feature

[useQuery](#usequery)

[useMutation](#usemutation)

[useQueryState](#usequerystate)

[useQuerySubscription](#usequerysubscription)

[useLazyQuery](#uselazyquery)

[useLazyQuerySubscription](#uselazyquerysubscription)

[usePrefetch](#useprefetch)

Automatically triggers query requests

✔️

✔️

Allows manually triggering query requests

✔️

✔️

✔️

✔️

✔️

Allows manually triggering mutation requests

✔️

Subscribes a component to keep cached data in the store

✔️

✔️

✔️

✔️

✔️

Returns request status and cached data from the store

✔️

✔️

✔️

✔️

Re-renders as request status and data become available

✔️

✔️

✔️

✔️

Accepts polling/re-fetching options to trigger automatic re-fetches

✔️

✔️

✔️

✔️

## Primary Hooks[​](#primary-hooks "Direct link to Primary Hooks")

These hooks are the main methods you will use to interact with RTK Query in your React components. They encapsulate all of logic and options needed for most data fetching and update use cases.

### `useQuery`[​](#usequery "Direct link to usequery")

Accessing a useQuery hook

```
const useQueryResult = api.endpoints.getPosts.useQuery(arg, options)// orconst useQueryResult = api.useGetPostsQuery(arg, options)
```

A React hook that automatically triggers fetches of data from an endpoint, 'subscribes' the component to the cached data, and reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available.

The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already, and the hook will return the data for that query arg once it's available.

This hook combines the functionality of both [`useQueryState`](#usequerystate) and [`useQuerySubscription`](#usequerysubscription) together, and is intended to be used in the majority of situations.

#### Features

-   Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
-   'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
-   Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met
-   Returns the latest request status and cached data from the Redux store
-   Re-renders as the request status changes and data becomes available

#### `useQuery` Signature[​](#usequery-signature "Direct link to usequery-signature")

```
type UseQuery = (  arg: any | SkipToken,  options?: UseQueryOptions,) => UseQueryResulttype UseQueryOptions = {  pollingInterval?: number  skipPollingIfUnfocused?: boolean  refetchOnReconnect?: boolean  refetchOnFocus?: boolean  skip?: boolean  refetchOnMountOrArgChange?: boolean | number  selectFromResult?: (result: UseQueryStateDefaultResult) => any}type UseQueryResult<T> = {  // Base query state  // Arguments passed to the query  originalArgs?: unknown  // The latest returned result regardless of hook arg, if present  data?: T  // The latest returned result for the current hook arg, if present  currentData?: T  // Error result if present  error?: unknown  // A string generated by RTK Query  requestId?: string  // The name of the given endpoint for the query  endpointName?: string  // Timestamp for when the query was initiated  startedTimeStamp?: number  // Timestamp for when the query was completed  fulfilledTimeStamp?: number  // Derived request status booleans  // Query has not started yet.  isUninitialized: boolean  // Query is currently loading for the first time. No data yet.  isLoading: boolean  // Query is currently fetching, but might have data from an earlier request.  isFetching: boolean  // Query has data from a successful load.  isSuccess: boolean  // Query is currently in an "error" state.  isError: boolean  // A function to force refetch the query - returns a Promise with additional methods  refetch: () => QueryActionCreatorResult}
```

-   **Parameters**
    -   `arg`: The query argument to be used in constructing the query itself, and as a cache key for the query. You can also pass in `skipToken` here as an alternative way of skipping the query, see [skipToken](#skiptoken)
    -   `options`: A set of options that control the fetching behavior of the hook
-   **Returns**
    -   A query result object containing the current loading state, the actual data or error returned from the API call, metadata about the request, and a function to `refetch` the data. Can be customized with `selectFromResult`

#### `skipToken`[​](#skiptoken "Direct link to skiptoken")

Can be passed into `useQuery`, `useQueryState` or `useQuerySubscription` instead of the query argument to get the same effect as if setting `skip: true` in the query options.

Useful for scenarios where a query should be skipped when `arg` is `undefined` and TypeScript complains about it because `arg` is not allowed to be passed in as `undefined`, such as

will error if the query argument is not allowed to be undefined

```
useSomeQuery(arg, { skip: !!arg })
```

using skipToken instead

```
useSomeQuery(arg ?? skipToken)
```

If passed directly into a query or mutation selector, that selector will always return an uninitialized state.

See also [Skipping queries with TypeScript using `skipToken`](/rtk-query/usage-with-typescript#skipping-queries-with-typescript-using-skiptoken)

### `useMutation`[​](#usemutation "Direct link to usemutation")

Accessing a useMutation hook

```
const useMutationResult = api.endpoints.updatePost.useMutation(options)// orconst useMutationResult = api.useUpdatePostMutation(options)
```

A React hook that lets you trigger an update request for a given endpoint, and subscribes the component to read the request status from the Redux store. The component will re-render as the loading status changes.

#### Features

-   Manual control over firing a request to alter data on the server or possibly invalidate the cache
-   'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
-   Returns the latest request status and cached data from the Redux store
-   Re-renders as the request status changes and data becomes available

#### `useMutation` Signature[​](#usemutation-signature "Direct link to usemutation-signature")

```
type UseMutation = (  options?: UseMutationStateOptions,) => [UseMutationTrigger, UseMutationResult | SelectedUseMutationResult]type UseMutationStateOptions = {  // A method to determine the contents of `UseMutationResult`  selectFromResult?: (result: UseMutationStateDefaultResult) => any  // A string used to enable shared results across hook instances which have the same key  fixedCacheKey?: string}type UseMutationTrigger<T> = (arg: any) => Promise<  { data: T } | { error: BaseQueryError | SerializedError }> & {  requestId: string // A string generated by RTK Query  abort: () => void // A method to cancel the mutation promise  unwrap: () => Promise<T> // A method to unwrap the mutation call and provide the raw response/error  reset: () => void // A method to manually unsubscribe from the mutation call and reset the result to the uninitialized state}type UseMutationResult<T> = {  // Base query state  // Arguments passed to the latest mutation call. Not available if using the `fixedCacheKey` option  originalArgs?: unknown  // Returned result if present  data?: T  // Error result if present  error?: unknown  // The name of the given endpoint for the mutation  endpointName?: string  // Timestamp for when the mutation was completed  fulfilledTimeStamp?: number  // Derived request status booleans  // Mutation has not been fired yet  isUninitialized: boolean  // Mutation has been fired and is awaiting a response  isLoading: boolean  // Mutation has data from a successful call  isSuccess: boolean  // Mutation is currently in an "error" state  isError: boolean  // Timestamp for when the latest mutation was initiated  startedTimeStamp?: number  // A method to manually unsubscribe from the mutation call and reset the result to the uninitialized state  reset: () => void}
```

tip

The generated `UseMutation` hook will cause a component to re-render by default after the trigger callback is fired, as it affects the properties of the result. If you want to call the trigger but don't care about subscribing to the result with the hook, you can use the `selectFromResult` option to limit the properties that the hook cares about.

Returning a completely empty object will mean that any individual mutation call will cause only one re-render at most, e.g.

```
selectFromResult: () => ({})
```

-   **Parameters**
    
    -   `options`: A set of options that control the subscription behavior of the hook:
        -   `selectFromResult`: A callback that can be used to customize the mutation result returned as the second item in the tuple
        -   `fixedCacheKey`: An optional string used to enable shared results across hook instances
-   **Returns**: A tuple containing:
    
    -   `trigger`: A function that triggers an update to the data based on the provided argument. The trigger function returns a promise with the properties shown above that may be used to handle the behavior of the promise
    -   `mutationState`: A query status object containing the current loading state and metadata about the request, or the values returned by the `selectFromResult` option where applicable. Additionally, this object will contain
        -   a `reset` method to reset the hook back to its original state and remove the current result from the cache
        -   an `originalArgs` property that contains the argument passed to the last call of the `trigger` function.

### `useInfiniteQuery`[​](#useinfinitequery "Direct link to useinfinitequery")

Accessing a useQuery hook

```
const useQueryResult = api.endpoints.getManyPosts.useInfiniteQuery(arg, options)// orconst useQueryResult = api.useGetManyPostsInfiniteQuery(arg, options)
```

A React hook that automatically triggers fetches of data from an endpoint, 'subscribes' the component to the cached data, and reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available. Additionally, it will cache multiple "pages" worth of responses within a single cache entry, and allows fetching more pages forwards and backwards from the current cached pages.

The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already, and the hook will return the data for that query arg once it's available.

The `data` field will be a `{pages: Data[], pageParams: PageParam[]}` structure containing all fetched page responses and the corresponding page param values for each page. You may use this to render individual pages, combine all pages into a single infinite list, or other display logic as needed.

This hook combines the functionality of both [`useInfiniteQueryState`](#useinfinitequerystate) and [`useInfiniteQuerySubscription`](#useinfinitequerysubscription) together, and is intended to be used in the majority of situations.

As with normal query hooks, `skipToken` is a valid argument that will skip the query from executing.

By default, the initial request will use the `initialPageParam` value that was defined on the infinite query endpoint. If you want to start from a different value, you can pass `initialPageParam` as part of the hook options to override that initial request value.

Use the returned `fetchNextPage` and `fetchPreviousPage` methods on the hook result object to trigger fetches forwards and backwards. These will always calculate the next or previous page param based on the current cached pages and the provided `getNext/PreviousPageParam` callbacks defined in the endpoint.

#### Features

-   Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
-   'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
-   Caches multiple pages worth of responses, and provides methods to trigger more page fetches forwards and backwards
-   Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met
-   Returns the latest request status and cached data from the Redux store
-   Re-renders as the request status changes and data becomes available

#### `useInfiniteQuery` Signature[​](#useinfinitequery-signature "Direct link to useinfinitequery-signature")

```
type UseInfiniteQuery = (  arg: any | SkipToken,  options?: UseQueryOptions,) => UseInfiniteQueryResulttype InfiniteData<Data, PageParam> = {  pages: Array<Data>  pageParams: Array<PageParam>}type UseInfiniteQueryOptions = {  pollingInterval?: number  skipPollingIfUnfocused?: boolean  refetchOnReconnect?: boolean  refetchOnFocus?: boolean  skip?: boolean  refetchOnMountOrArgChange?: boolean | number  selectFromResult?: (result: UseQueryStateDefaultResult) => any  initialPageParam?: PageParam  refetchCachedPages?: boolean}type UseInfiniteQueryResult<Data, PageParam> = {  // Base query state  // Arguments passed to the query  originalArgs?: unknown  // The latest returned result regardless of hook arg, if present  data?: InfiniteData<Data, PageParam>  // The latest returned result for the current hook arg, if present  currentData?: InfiniteData<Data, PageParam>  // Error result if present  error?: unknown  // A string generated by RTK Query  requestId?: string  // The name of the given endpoint for the query  endpointName?: string  // Timestamp for when the query was initiated  startedTimeStamp?: number  // Timestamp for when the query was completed  fulfilledTimeStamp?: number  // Derived request status booleans  // Query has not started yet.  isUninitialized: boolean  // Query is currently loading for the first time. No data yet.  isLoading: boolean  // Query is currently fetching, but might have data from an earlier request.  isFetching: boolean  // Query has data from a successful load.  isSuccess: boolean  // Query is currently in an "error" state.  isError: boolean  // Derived request status booleans for infinite query pages  // There is another page available querying forwards  hasNextPage: boolean  // There is another page available querying backwards  hasPreviousPage: boolean  // The current in-progress fetch is for the next page  isFetchingNextPage: boolean  // The current in-progress fetch is for the previous page  isFetchingPreviousPage: boolean  // The current error occurred fetching the next page  isFetchNextPageError: boolean  // The current error occurred fetching the previous page  isFetchPreviousPageError: boolean  // A function to force refetch the query - returns a Promise with additional methods  refetch: (options?: {    refetchCachedPages?: boolean  }) => InfiniteQueryActionCreatorResult  // Triggers a fetch for the next page, based on the current cache  fetchNextPage: () => InfiniteQueryActionCreatorResult  // Triggers a fetch for the previous page, based on the current cache  fetchPreviousPage: () => InfiniteQueryActionCreatorResult}
```

-   **Parameters**
    -   `arg`: The query argument to be used in constructing the query itself, and as a cache key for the query. You can also pass in `skipToken` here as an alternative way of skipping the query, see [skipToken](#skiptoken)
    -   `options`: A set of options that control the fetching behavior of the hook
-   **Returns**
    -   A query result object containing the current loading state, the actual data or error returned from the API call, metadata about the request, and a function to `refetch` the data. Can be customized with `selectFromResult`

## Secondary Hooks[​](#secondary-hooks "Direct link to Secondary Hooks")

These hooks are useful for specific additional use cases in your application, but will probably not be used that frequently.

### `useLazyQuery`[​](#uselazyquery "Direct link to uselazyquery")

Accessing a useLazyQuery hook

```
const [trigger, result, lastPromiseInfo] =  api.endpoints.getPosts.useLazyQuery(options)// orconst [trigger, result, lastPromiseInfo] = api.useLazyGetPostsQuery(options)
```

A React hook similar to [`useQuery`](#usequery), but with manual control over when the data fetching occurs.

This hook includes the functionality of [`useLazyQuerySubscription`](#uselazyquerysubscription).

#### Features

-   Manual control over firing a request to retrieve data
-   'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
-   Returns the latest request status and cached data from the Redux store
-   Re-renders as the request status changes and data becomes available
-   Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met and the fetch has been manually called at least once

#### Note

When the trigger function returned from a LazyQuery is called, it always initiates a new request to the server even if there is cached data. Set `preferCacheValue`(the second argument to the function) as `true` if you want it to immediately return a cached value if one exists.

#### `useLazyQuery` Signature[​](#uselazyquery-signature "Direct link to uselazyquery-signature")

```
type UseLazyQuery = (  options?: UseLazyQueryOptions) => [UseLazyQueryTrigger, UseLazyQueryStateResult, UseLazyQueryLastPromiseInfo]type UseLazyQueryOptions = {  pollingInterval?: number  skipPollingIfUnfocused?: boolean  refetchOnReconnect?: boolean  refetchOnFocus?: boolean  selectFromResult?: (result: UseQueryStateDefaultResult) => any}type UseLazyQueryTrigger<T> = (arg: any, preferCacheValue?: boolean) => Promise<  QueryResultSelectorResult> & {  // Whatever argument was provided to the query  arg: unknown  // A string generated by RTK Query  requestId: string  // The values used for the query subscription  subscriptionOptions: SubscriptionOptions   // A method to cancel the query promise  abort: () => void  // A method to unwrap the query call and provide the raw response/error  unwrap: () => Promise<T>  // A method used to manually unsubscribe from the query results  unsubscribe: () => void  // A method used to re-run the query. In most cases when using a lazy query, you will never use this and should prefer to call the trigger again.  refetch: () => void  // A method used to update the subscription options (eg. pollingInterval)  updateSubscriptionOptions: (options: SubscriptionOptions) () => void}type UseLazyQueryStateResult<T> = {  // Base query state  // Arguments passed to the query  originalArgs?: unknown  // The latest returned result regardless of hook arg, if present  data?: T  // The latest returned result for the current hook arg, if present  currentData?: T  // Error result if present  error?: unknown  // A string generated by RTK Query  requestId?: string  // The name of the given endpoint for the query  endpointName?: string  // Timestamp for when the query was initiated  startedTimeStamp?: number  // Timestamp for when the query was completed  fulfilledTimeStamp?: number  // Derived request status booleans  // Query has not started yet.  isUninitialized: boolean  // Query is currently loading for the first time. No data yet.  isLoading: boolean  // Query is currently fetching, but might have data from an earlier request.  isFetching: boolean  // Query has data from a successful load.  isSuccess: boolean  // Query is currently in an "error" state.  isError: boolean}type UseLazyQueryLastPromiseInfo = {  lastArg: any}
```

-   **Parameters**
    
    -   `options`: A set of options that control the fetching behavior and returned result value of the hook. Options affecting fetching behavior will only have an effect after the lazy query has been triggered at least once.
-   **Returns**: A tuple containing:
    
    -   `trigger`: A function that fetches the corresponding data for the endpoint when called
    -   `result`: A query result object containing the current loading state, the actual data or error returned from the API call and metadata about the request. Can be customized with `selectFromResult`
    -   `lastPromiseInfo`: An object containing the last argument used to call the trigger function

### `usePrefetch`[​](#useprefetch "Direct link to useprefetch")

Accessing a usePrefetch hook

```
const prefetchCallback = api.usePrefetch(endpointName, options)
```

A React hook which can be used to initiate fetching data ahead of time.

##### Features[​](#features "Direct link to Features")

-   Manual control over firing a request to retrieve data

##### Signature[​](#signature "Direct link to Signature")

```
type UsePrefetch = (  endpointName: string,  options?: UsePrefetchOptions,) => PrefetchCallbacktype UsePrefetchOptions =  | {      // If specified, only runs the query if the difference between `new Date()` and the last      // `fulfilledTimeStamp` is greater than the given value (in seconds)      ifOlderThan?: false | number    }  | {      // If `force: true`, it will ignore the `ifOlderThan` value if it is set and the query      // will be run even if it exists in the cache.      force?: boolean    }type PrefetchCallback = (arg: any, options?: UsePrefetchOptions) => void
```

-   **Parameters**
    
    -   `endpointName`: The name of the endpoint to prefetch data for
    -   `options`: A set of options that control whether the prefetch request should occur
-   **Returns**
    
    -   A `prefetch` callback that when called, will initiate fetching the data for the provided endpoint

## Implementation Hooks[​](#implementation-hooks "Direct link to Implementation Hooks")

This hooks exist as implementation details of the primary hooks. They may be useful in rare cases, but you should generally use the primary hooks in your apps.

### `useQueryState`[​](#usequerystate "Direct link to usequerystate")

Accessing a useQuery hook

```
const useQueryStateResult = api.endpoints.getPosts.useQueryState(arg, options)
```

A React hook that reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available.

Note that this hook does not trigger fetching new data. For that use-case, see [`useQuery`](#usequery) or [`useQuerySubscription`](#usequerysubscription).

#### Features

-   Returns the latest request status and cached data from the Redux store
-   Re-renders as the request status changes and data becomes available

##### `useQueryState` Signature[​](#usequerystate-signature "Direct link to usequerystate-signature")

```
type UseQueryState = (  arg: any | SkipToken,  options?: UseQueryStateOptions,) => UseQueryStateResult | SelectedQueryStateResulttype UseQueryStateOptions = {  skip?: boolean  selectFromResult?: (result: UseQueryStateDefaultResult) => any}type UseQueryStateResult<T> = {  // Base query state  // Arguments passed to the query  originalArgs?: unknown  // The latest returned result regardless of hook arg, if present  data?: T  // The latest returned result for the current hook arg, if present  currentData?: T  // Error result if present  error?: unknown  // A string generated by RTK Query  requestId?: string  // The name of the given endpoint for the query  endpointName?: string  // Timestamp for when the query was initiated  startedTimeStamp?: number  // Timestamp for when the query was completed  fulfilledTimeStamp?: number  // Derived request status booleans  // Query has not started yet.  isUninitialized: boolean  // Query is currently loading for the first time. No data yet.  isLoading: boolean  // Query is currently fetching, but might have data from an earlier request.  isFetching: boolean  // Query has data from a successful load.  isSuccess: boolean  // Query is currently in an "error" state.  isError: boolean}
```

-   **Parameters**
    
    -   `arg`: The argument passed to the query defined in the endpoint. You can also pass in `skipToken` here as an alternative way of skipping the selection, see [skipToken](#skiptoken)
    -   `options`: A set of options that control the return value for the hook
-   **Returns**
    
    -   A query result object containing the current loading state, the actual data or error returned from the API call and metadata about the request. Can be customized with `selectFromResult`

### `useQuerySubscription`[​](#usequerysubscription "Direct link to usequerysubscription")

Accessing a useQuerySubscription hook

```
const { refetch } = api.endpoints.getPosts.useQuerySubscription(arg, options)
```

A React hook that automatically triggers fetches of data from an endpoint, and 'subscribes' the component to the cached data.

The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already.

Note that this hook does not return a request status or cached data. For that use-case, see [`useQuery`](#usequery) or [`useQueryState`](#usequerystate).

#### Features

-   Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
-   'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
-   Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met

##### `useQuerySubscription` Signature[​](#usequerysubscription-signature "Direct link to usequerysubscription-signature")

```
type UseQuerySubscription = (  arg: any | SkipToken,  options?: UseQuerySubscriptionOptions,) => UseQuerySubscriptionResulttype UseQuerySubscriptionOptions = {  skip?: boolean  refetchOnMountOrArgChange?: boolean | number  pollingInterval?: number  skipPollingIfUnfocused?: boolean  refetchOnReconnect?: boolean  refetchOnFocus?: boolean}type UseQuerySubscriptionResult = {  refetch: () => void // A function to force refetch the query}
```

-   **Parameters**
    
    -   `arg`: The argument passed to the query defined in the endpoint. You can also pass in `skipToken` here as an alternative way of skipping the query, see [skipToken](#skiptoken)
    -   `options`: A set of options that control the fetching behavior of the hook
-   **Returns**
    
    -   An object containing a function to `refetch` the data

### `useInfiniteQueryState`[​](#useinfinitequerystate "Direct link to useinfinitequerystate")

Accessing a useInfiniteQueryState hook

```
const useInfiniteQueryStateResult =  api.endpoints.getManyPosts.useInfiniteQueryState(arg, options)
```

A React hook that reads the request status and cached data from the Redux store. The component will re-render as the loading status changes and the data becomes available.

Note that this hook does not trigger fetching new data. For that use-case, see [`useInfiniteQuery`](#useinfinitequery) or [`useInfiniteQuerySubscription`](#useinfinitequerysubscription).

#### Features

-   Returns the latest request status and cached data from the Redux store
-   Re-renders as the request status changes and data becomes available

### `useInfiniteQuerySubscription`[​](#useinfinitequerysubscription "Direct link to useinfinitequerysubscription")

Accessing a useInfiniteQuerySubscription hook

```
const useInfiniteQuerySubscriptionResult =  api.endpoints.getManyPosts.useInfiniteQuerySubscription(arg, options)
```

A React hook that automatically triggers fetches of data from an endpoint, and 'subscribes' the component to the cached data. Additionally, it will cache multiple "pages" worth of responses within a single cache entry, and allows fetching more pages forwards and backwards from the current cached pages.

The query arg is used as a cache key. Changing the query arg will tell the hook to re-fetch the data if it does not exist in the cache already.

Note that this hook does not return a request status or cached data. For that use-case, see [`useInfiniteQuery`](#useinfinitequery) or [`useInfiniteQueryState`](#useinfinitequerystate).

#### Features

-   Automatically triggers requests to retrieve data based on the hook argument and whether cached data exists by default
-   'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
-   Caches multiple pages worth of responses, and provides methods to trigger more page fetches forwards and backwards
-   Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met

### `useLazyQuerySubscription`[​](#uselazyquerysubscription "Direct link to uselazyquerysubscription")

Accessing a useLazyQuerySubscription hook

```
const [trigger, lastArg] =  api.endpoints.getPosts.useLazyQuerySubscription(options)
```

A React hook similar to [`useQuerySubscription`](#usequerysubscription), but with manual control over when the data fetching occurs.

Note that this hook does not return a request status or cached data. For that use-case, see [`useLazyQuery`](#uselazyquery).

#### Features

-   Manual control over firing a request to retrieve data
-   'Subscribes' the component to keep cached data in the store, and 'unsubscribes' when the component unmounts
-   Accepts polling/re-fetching options to trigger automatic re-fetches when the corresponding criteria is met and the fetch has been manually called at least once

##### `useLazyQuerySubscription` Signature[​](#uselazyquerysubscription-signature "Direct link to uselazyquerysubscription-signature")

```
type UseLazyQuerySubscription = (  options?: UseLazyQuerySubscriptionOptions,) => [UseLazyQuerySubscriptionTrigger, LastArg]type UseLazyQuerySubscriptionOptions = {  pollingInterval?: number  skipPollingIfUnfocused?: boolean  refetchOnReconnect?: boolean  refetchOnFocus?: boolean}type UseLazyQuerySubscriptionTrigger = (  arg: any,  preferCacheValue?: boolean,) => void
```

-   **Parameters**
    
    -   `options`: A set of options that control the fetching behavior of the hook. The options will only have an effect after the lazy query has been triggered at least once.
-   **Returns**: A tuple containing:
    
    -   `trigger`: A function that fetches the corresponding data for the endpoint when called
    -   `lastArg`: The last argument used to call the trigger function
