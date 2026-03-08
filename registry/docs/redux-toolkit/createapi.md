On this page

`createApi` is the core of RTK Query's functionality. It allows you to define a set of "endpoints" that describe how to retrieve data from backend APIs and other async sources, including the configuration of how to fetch and transform that data. It generates [an "API slice" structure](/rtk-query/api/created-api/overview) that contains Redux logic (and optionally React hooks) that encapsulate the data fetching and caching process for you.

tip

Typically, you should only have one API slice per base URL that your application needs to communicate with. For example, if your site fetches data from both `/api/posts` and `/api/users`, you would have a single API slice with `/api/` as the base URL, and separate endpoint definitions for `posts` and `users`. This allows you to effectively take advantage of [automated re-fetching](/rtk-query/usage/automated-refetching) by defining [tag](/rtk-query/usage/automated-refetching#tags) relationships across endpoints.

This is because:

-   Automatic tag invalidation only works within a single API slice. If you have multiple API slices, the automatic invalidation won't work across them.
-   Every `createApi` call generates its own middleware, and each middleware added to the store will run checks against every dispatched action. That has a perf cost that adds up. So, if you called `createApi` 10 times and added 10 separate API middleware to the store, that will be noticeably slower perf-wise.

For maintainability purposes, you may wish to split up endpoint definitions across multiple files, while still maintaining a single API slice which includes all of these endpoints. See [code splitting](/rtk-query/usage/code-splitting) for how you can use the `injectEndpoints` property to inject API endpoints from other files into a single API slice definition.

-   TypeScript
-   JavaScript

Example: src/services/pokemon.ts

```
// Need to use the React-specific entry point to allow generating React hooksimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import type { Pokemon } from './types'// Define a service using a base URL and expected endpointsexport const pokemonApi = createApi({  reducerPath: 'pokemonApi',  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),  endpoints: (build) => ({    getPokemonByName: build.query<Pokemon, string>({      query: (name) => `pokemon/${name}`,    }),  }),})// Export hooks for usage in function components, which are// auto-generated based on the defined endpointsexport const { useGetPokemonByNameQuery } = pokemonApi
```

Example: src/services/pokemon.js

```
// Need to use the React-specific entry point to allow generating React hooksimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'// Define a service using a base URL and expected endpointsexport const pokemonApi = createApi({  reducerPath: 'pokemonApi',  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),  endpoints: (build) => ({    getPokemonByName: build.query({      query: (name) => `pokemon/${name}`,    }),  }),})// Export hooks for usage in function components, which are// auto-generated based on the defined endpointsexport const { useGetPokemonByNameQuery } = pokemonApi
```

## `createApi` Parameters[​](#createapi-parameters "Direct link to createapi-parameters")

`createApi` accepts a single configuration object parameter with the following options:

```
  baseQuery(args: InternalQueryArgs, api: BaseQueryApi, extraOptions?: DefinitionExtraOptions): any;  endpoints(build: EndpointBuilder<InternalQueryArgs, TagTypes>): Definitions;  extractRehydrationInfo?: (    action: UnknownAction,    {      reducerPath,    }: {      reducerPath: ReducerPath    }  ) =>    | undefined    | CombinedState<Definitions, TagTypes, ReducerPath>  tagTypes?: readonly TagTypes[];  reducerPath?: ReducerPath;  serializeQueryArgs?: SerializeQueryArgs<InternalQueryArgs>;  keepUnusedDataFor?: number; // value is in seconds  refetchOnMountOrArgChange?: boolean | number; // value is in seconds  refetchOnFocus?: boolean;  refetchOnReconnect?: boolean;
```

### `baseQuery`[​](#basequery "Direct link to basequery")

The base query used by each endpoint if no `queryFn` option is specified. RTK Query exports a utility called [fetchBaseQuery](/rtk-query/api/fetchBaseQuery) as a lightweight wrapper around `fetch` for common use-cases. See [Customizing Queries](/rtk-query/usage/customizing-queries) if `fetchBaseQuery` does not handle your requirements.

#### baseQuery function arguments[​](#basequery-function-arguments "Direct link to baseQuery function arguments")

-   `args` - The return value of the `query` function for a given endpoint
-   `api` - The `BaseQueryApi` object contains:
    -   `signal` - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object that may be used to abort DOM requests and/or read whether the request is aborted.
    -   `abort` - The [`abort()`](https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort) method of the AbortController attached to `signal`.
    -   `dispatch` - The `store.dispatch` method for the corresponding Redux store
    -   `getState` - A function that may be called to access the current store state
    -   `extra` - Provided as thunk.extraArgument to the configureStore getDefaultMiddleware option.
    -   `endpoint` - The name of the endpoint.
    -   `type` - Type of request (`query` or `mutation`).
    -   `forced` - Indicates if a query has been forced.
    -   `queryCacheKey`\- The computed query cache key.
-   `extraOptions` - The value of the optional `extraOptions` property provided for a given endpoint

#### baseQuery function signature[​](#basequery-function-signature "Direct link to baseQuery function signature")

Base Query signature

```
export type BaseQueryFn<  Args = any,  Result = unknown,  Error = unknown,  DefinitionExtraOptions = {},  Meta = {},> = (  args: Args,  api: BaseQueryApi,  extraOptions: DefinitionExtraOptions,) => MaybePromise<QueryReturnValue<Result, Error, Meta>>export interface BaseQueryApi {  signal: AbortSignal  abort: (reason?: string) => void  dispatch: ThunkDispatch<any, any, any>  getState: () => unknown  extra: unknown  endpoint: string  type: 'query' | 'mutation'  forced?: boolean}export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =  | {      error: E      data?: undefined      meta?: M    }  | {      error?: undefined      data: T      meta?: M    }
```

-   TypeScript
-   JavaScript

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    // ...endpoints  }),})
```

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    // ...endpoints  }),})
```

### `endpoints`[​](#endpoints "Direct link to endpoints")

Endpoints are a set of operations that you want to perform against your server. You define them as an object using the builder syntax. There are three endpoint types: [`query`](/rtk-query/usage/queries), [`infiniteQuery`](/rtk-query/usage/infinite-queries) and [`mutation`](/rtk-query/usage/mutations).

See [Endpoint Definition Parameters](#endpoint-definition-parameters) for details on individual properties.

#### Query endpoint definition[​](#query-endpoint-definition "Direct link to Query endpoint definition")

Query endpoints (defined with `build.query()`) are used to cache data fetched from the server.

You must specify either a `query` field (which will use the API's `baseQuery` to make a request), or a `queryFn` function with your own async logic. All other fields are optional.

Query endpoint definition

```
export type FullTagDescription<TagType> = {  type: TagType  id?: number | string}export type TagDescription<TagType> = TagType | FullTagDescription<TagType>type TagDescriptionArray<TagTypes extends string> = ReadonlyArray<  TagDescription<TagTypes> | undefined | null>export type ResultDescription<  TagTypes extends string,  ResultType,  QueryArg,  ErrorType,  MetaType,> =  | TagDescriptionArray<TagTypes>  | (  result: ResultType | undefined,  error: ErrorType | undefined,  arg: QueryArg,  meta: MetaType,) => TagDescriptionArray<TagTypes>export type QueryDefinition<  QueryArg,  BaseQuery extends BaseQueryFn,  TagTypes extends string,  ResultType,  ReducerPath extends string = string,> = {  query(arg: QueryArg): BaseQueryArg<BaseQuery>  /* either `query` or `queryFn` can be present, but not both simultaneously */  queryFn(    arg: QueryArg,    api: BaseQueryApi,    extraOptions: BaseQueryExtraOptions<BaseQuery>,    baseQuery: (arg: Parameters<BaseQuery>[0]) => ReturnType<BaseQuery>,  ): MaybePromise<QueryReturnValue<ResultType, BaseQueryError<BaseQuery>>>  /* transformResponse only available with `query`, not `queryFn` */  transformResponse?(    baseQueryReturnValue: BaseQueryResult<BaseQuery>,    meta: BaseQueryMeta<BaseQuery>,    arg: QueryArg,  ): ResultType | Promise<ResultType>  /* transformErrorResponse only available with `query`, not `queryFn` */  transformErrorResponse?(    baseQueryReturnValue: BaseQueryError<BaseQuery>,    meta: BaseQueryMeta<BaseQuery>,    arg: QueryArg,  ): unknown  extraOptions?: BaseQueryExtraOptions<BaseQuery>  providesTags?: ResultDescription<    TagTypes,    ResultType,    QueryArg,    BaseQueryError<BaseQuery>  >  keepUnusedDataFor?: number  onQueryStarted?(    arg: QueryArg,    {      dispatch,      getState,      extra,      requestId,      queryFulfilled,      getCacheEntry,      updateCachedData, // available for query endpoints only    }: QueryLifecycleApi,  ): Promise<void>  onCacheEntryAdded?(    arg: QueryArg,    {      dispatch,      getState,      extra,      requestId,      cacheEntryRemoved,      cacheDataLoaded,      getCacheEntry,      updateCachedData, // available for query endpoints only    }: QueryCacheLifecycleApi,  ): Promise<void>  argSchema?: StandardSchemaV1<QueryArg>  /* only available with `query`, not `queryFn` */  rawResponseSchema?: StandardSchemaV1<BaseQueryResult<BaseQuery>>  responseSchema?: StandardSchemaV1<ResultType>  /* only available with `query`, not `queryFn` */  rawErrorResponseSchema?: StandardSchemaV1<BaseQueryError<BaseQuery>>  errorResponseSchema?: StandardSchemaV1<BaseQueryError<BaseQuery>>  metaSchema?: StandardSchemaV1<BaseQueryMeta<BaseQuery>>}
```

#### Infinite Query endpoint definition[​](#infinite-query-endpoint-definition "Direct link to Infinite Query endpoint definition")

Infinite query endpoints (defined with `build.infiniteQuery()`) are used to cache multi-page data sets from the server. They have all the same callbacks and options as standard query endpoints, but also require an additional [`infiniteQueryOptions`](#infinitequeryoptions) field to specify how to calculate the unique parameters to fetch each page.

For infinite query endpoints, there is a separation between the "query arg" used for the cache key, and the "page param" used to fetch a specific page. For example, a Pokemon API endpoint might have a string query arg like `"fire"` , but use a page number as the param to determine which page to fetch out of the results. The `query` and `queryFn` methods will receive a combined `{queryArg, pageParam}` object as the argument, rather than just the `queryArg` by itself.

Infinite Query endpoint definition

```
export type PageParamFunction<DataType, PageParam, QueryArg> = (  firstPage: DataType,  allPages: Array<DataType>,  firstPageParam: PageParam,  allPageParams: Array<PageParam>,  queryArg: QueryArg,) => PageParam | undefined | nulltype InfiniteQueryCombinedArg<QueryArg, PageParam> = {  queryArg: QueryArg  pageParam: PageParam}export type InfiniteQueryDefinition<  QueryArg,  PageParam,  BaseQuery extends BaseQueryFn,  TagTypes extends string,  ResultType,  ReducerPath extends string = string,> =  // Infinite queries have all the same options as query endpoints,  // but store the `{pages, pageParams}` structure, and receive an object  // with both `{queryArg, pageParam}` as the arg for `query` and `queryFn`.  QueryDefinition<    InfiniteQueryCombinedArg<QueryArg, PageParam>,    BaseQuery,    TagTypes,    InfiniteData<ResultType>  > & {    /**     * Required options to configure the infinite query behavior.     * `initialPageParam` and `getNextPageParam` are required, to     * ensure the infinite query can properly fetch the next page of data.     * `initialPageparam` may be specified when using the     * endpoint, to override the default value.     */    infiniteQueryOptions: {      /**       * The initial page parameter to use for the first page fetch.       */      initialPageParam: PageParam      /**       * This function is required to automatically get the next cursor for infinite queries.       * The result will also be used to determine the value of `hasNextPage`.       */      getNextPageParam: PageParamFunction<DataType, PageParam, QueryArg>      /**       * This function can be set to automatically get the previous cursor for infinite queries.       * The result will also be used to determine the value of `hasPreviousPage`.       */      getPreviousPageParam?: PageParamFunction<DataType, PageParam, QueryArg>      /**       * If specified, only keep this many pages in cache at once.       * If additional pages are fetched, older pages in the other       * direction will be dropped from the cache.       */      maxPages?: number      /**       * Defaults to `true`. When this is `true` and an infinite query endpoint is refetched       * (due to tag invalidation, polling, arg change configuration, or manual refetching),       * RTK Query will try to sequentially refetch all pages currently in the cache.       * When `false` only the first page will be refetched.       */      refetchCachedPages?: boolean    }  }
```

#### Mutation endpoint definition[​](#mutation-endpoint-definition "Direct link to Mutation endpoint definition")

Mutation endpoints (defined with `build.mutation()`) are used to send updates to the server, and force invalidation and refetching of query endpoints.

As with queries, you must specify either the `query` option or the `queryFn` async method.

Mutation endpoint definition

```
export type MutationDefinition<  QueryArg,  BaseQuery extends BaseQueryFn,  TagTypes extends string,  ResultType,  ReducerPath extends string = string,  Context = Record<string, any>,> = {  query(arg: QueryArg): BaseQueryArg<BaseQuery>  /* either `query` or `queryFn` can be present, but not both simultaneously */  queryFn(    arg: QueryArg,    api: BaseQueryApi,    extraOptions: BaseQueryExtraOptions<BaseQuery>,    baseQuery: (arg: Parameters<BaseQuery>[0]) => ReturnType<BaseQuery>,  ): MaybePromise<QueryReturnValue<ResultType, BaseQueryError<BaseQuery>>>  /* transformResponse only available with `query`, not `queryFn` */  transformResponse?(    baseQueryReturnValue: BaseQueryResult<BaseQuery>,    meta: BaseQueryMeta<BaseQuery>,    arg: QueryArg,  ): ResultType | Promise<ResultType>  /* transformErrorResponse only available with `query`, not `queryFn` */  transformErrorResponse?(    baseQueryReturnValue: BaseQueryError<BaseQuery>,    meta: BaseQueryMeta<BaseQuery>,    arg: QueryArg,  ): unknown  extraOptions?: BaseQueryExtraOptions<BaseQuery>  invalidatesTags?: ResultDescription<TagTypes, ResultType, QueryArg>  onQueryStarted?(    arg: QueryArg,    {      dispatch,      getState,      extra,      requestId,      queryFulfilled,      getCacheEntry,    }: MutationLifecycleApi,  ): Promise<void>  onCacheEntryAdded?(    arg: QueryArg,    {      dispatch,      getState,      extra,      requestId,      cacheEntryRemoved,      cacheDataLoaded,      getCacheEntry,    }: MutationCacheLifecycleApi,  ): Promise<void>}
```

#### How endpoints get used[​](#how-endpoints-get-used "Direct link to How endpoints get used")

When defining a key like `getPosts` as shown below, it's important to know that this name will become exportable from `api` and be able to referenced under `api.endpoints.getPosts.useQuery()`, `api.endpoints.getPosts.initiate()` and `api.endpoints.getPosts.select()`. The same thing applies to `mutation`s but they reference `useMutation` instead of `useQuery`.

-   TypeScript
-   JavaScript

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}type PostsResponse = Post[]const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query<PostsResponse, void>({      query: () => 'posts',      providesTags: (result) =>        result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],    }),    addPost: build.mutation<Post, Partial<Post>>({      query: (body) => ({        url: `posts`,        method: 'POST',        body,      }),      invalidatesTags: ['Posts'],    }),  }),})// Auto-generated hooksexport const { useGetPostsQuery, useAddPostMutation } = api// Possible exportsexport const { endpoints, reducerPath, reducer, middleware } = api// reducerPath, reducer, middleware are only used in store configuration// endpoints will have:// endpoints.getPosts.initiate(), endpoints.getPosts.select(), endpoints.getPosts.useQuery()// endpoints.addPost.initiate(), endpoints.addPost.select(), endpoints.addPost.useMutation()// see `createApi` overview for _all exports_
```

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',      providesTags: (result) =>        result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],    }),    addPost: build.mutation({      query: (body) => ({        url: `posts`,        method: 'POST',        body,      }),      invalidatesTags: ['Posts'],    }),  }),})// Auto-generated hooksexport const { useGetPostsQuery, useAddPostMutation } = api// Possible exportsexport const { endpoints, reducerPath, reducer, middleware } = api// reducerPath, reducer, middleware are only used in store configuration// endpoints will have:// endpoints.getPosts.initiate(), endpoints.getPosts.select(), endpoints.getPosts.useQuery()// endpoints.addPost.initiate(), endpoints.addPost.select(), endpoints.addPost.useMutation()// see `createApi` overview for _all exports_
```

### `extractRehydrationInfo`[​](#extractrehydrationinfo "Direct link to extractrehydrationinfo")

A function that is passed every dispatched action. If this returns something other than `undefined`, that return value will be used to rehydrate fulfilled & errored queries.

-   TypeScript
-   JavaScript

next-redux-wrapper rehydration example

```
import type { Action, PayloadAction } from '@reduxjs/toolkit'import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import { HYDRATE } from 'next-redux-wrapper'type RootState = any // normally inferred from statefunction isHydrateAction(action: Action): action is PayloadAction<RootState> {  return action.type === HYDRATE}export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  extractRehydrationInfo(action, { reducerPath }): any {    if (isHydrateAction(action)) {      return action.payload[reducerPath]    }  },  endpoints: (build) => ({    // omitted  }),})
```

next-redux-wrapper rehydration example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import { HYDRATE } from 'next-redux-wrapper'function isHydrateAction(action) {  return action.type === HYDRATE}export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  extractRehydrationInfo(action, { reducerPath }) {    if (isHydrateAction(action)) {      return action.payload[reducerPath]    }  },  endpoints: (build) => ({    // omitted  }),})
```

See also [Server Side Rendering](/rtk-query/usage/server-side-rendering) and [Persistence and Rehydration](/rtk-query/usage/persistence-and-rehydration).

### `tagTypes`[​](#tagtypes "Direct link to tagtypes")

An array of string tag type names. Specifying tag types is optional, but you should define them so that they can be used for caching and invalidation. When defining a tag type, you will be able to [provide](/rtk-query/usage/automated-refetching#providing-tags) them with `providesTags` and [invalidate](/rtk-query/usage/automated-refetching#invalidating-tags) them with `invalidatesTags` when configuring [endpoints](#endpoints).

-   TypeScript
-   JavaScript

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    // ...endpoints  }),})
```

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    // ...endpoints  }),})
```

### `reducerPath`[​](#reducerpath "Direct link to reducerpath")

The `reducerPath` is a _unique_ key that your service will be mounted to in your store. If you call `createApi` more than once in your application, you will need to provide a unique value each time. Defaults to `'api'`.

-   TypeScript
-   JavaScript

apis.js

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const apiOne = createApi({  reducerPath: 'apiOne',  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (builder) => ({    // ...endpoints  }),})const apiTwo = createApi({  reducerPath: 'apiTwo',  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (builder) => ({    // ...endpoints  }),})
```

apis.js

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const apiOne = createApi({  reducerPath: 'apiOne',  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (builder) => ({    // ...endpoints  }),})const apiTwo = createApi({  reducerPath: 'apiTwo',  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (builder) => ({    // ...endpoints  }),})
```

### `serializeQueryArgs`[​](#serializequeryargs "Direct link to serializequeryargs")

Accepts a custom function if you have a need to change the creation of cache keys for any reason.

By default, this function will take the query arguments, sort object keys where applicable, stringify the result, and concatenate it with the endpoint name. This creates a cache key based on the combination of arguments + endpoint name (ignoring object key order), such that calling any given endpoint with the same arguments will result in the same cache key.

### `invalidationBehavior`[​](#invalidationbehavior "Direct link to invalidationbehavior")

Defaults to `'delayed'`. This setting allows you to control when tags are invalidated after a mutation.

-   `'immediately'`: Queries are invalidated instantly after the mutation finished, even if they are running. If the query provides tags that were invalidated while it ran, it won't be re-fetched.
-   `'delayed'`: Invalidation only happens after all queries and mutations are settled. This ensures that queries are always invalidated correctly and automatically "batches" invalidations of concurrent mutations. Note that if you constantly have some queries (or mutations) running, this can delay tag invalidations indefinitely.

### `keepUnusedDataFor`[​](#keepunuseddatafor "Direct link to keepunuseddatafor")

Defaults to `60` _(this value is in seconds)_. This is how long RTK Query will keep your data cached for **after** the last component unsubscribes. For example, if you query an endpoint, then unmount the component, then mount another component that makes the same request within the given time frame, the most recent value will be served from the cache.

-   TypeScript
-   JavaScript

keepUnusedDataFor example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}type PostsResponse = Post[]const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPosts: build.query<PostsResponse, void>({      query: () => 'posts',    }),  }),  keepUnusedDataFor: 5,})
```

keepUnusedDataFor example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',    }),  }),  keepUnusedDataFor: 5,})
```

### `refetchOnMountOrArgChange`[​](#refetchonmountorargchange "Direct link to refetchonmountorargchange")

Defaults to `false`. This setting allows you to control whether if a cached result is already available RTK Query will only serve a cached result, or if it should `refetch` when set to `true` or if an adequate amount of time has passed since the last successful query result.

-   `false` - Will not cause a query to be performed _unless_ it does not exist yet.
-   `true` - Will always refetch when a new subscriber to a query is added. Behaves the same as calling the `refetch` callback or passing `forceRefetch: true` in the action creator.
-   `number` - **Value is in seconds**. If a number is provided and there is an existing query in the cache, it will compare the current time vs the last fulfilled timestamp, and only refetch if enough time has elapsed.

If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.

note

You can set this globally in `createApi`, but you can also override the default value and have more granular control by passing `refetchOnMountOrArgChange` to each individual hook call or similarly by passing `forceRefetch: true` when dispatching the [`initiate`](/rtk-query/api/created-api/endpoints#initiate) action.

### `refetchOnFocus`[​](#refetchonfocus "Direct link to refetchonfocus")

Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after the application window regains focus.

If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.

Note: requires [`setupListeners`](/rtk-query/api/setupListeners) to have been called.

note

You can set this globally in `createApi`, but you can also override the default value and have more granular control by passing `refetchOnFocus` to each individual hook call or when dispatching the [`initiate`](/rtk-query/api/created-api/endpoints#initiate) action.

If you specify `track: false` when manually dispatching queries, RTK Query will not be able to automatically refetch for you.

### `refetchOnReconnect`[​](#refetchonreconnect "Direct link to refetchonreconnect")

Defaults to `false`. This setting allows you to control whether RTK Query will try to refetch all subscribed queries after regaining a network connection.

If you specify this option alongside `skip: true`, this **will not be evaluated** until `skip` is false.

Note: requires [`setupListeners`](/rtk-query/api/setupListeners) to have been called.

note

You can set this globally in `createApi`, but you can also override the default value and have more granular control by passing `refetchOnReconnect` to each individual hook call or when dispatching the [`initiate`](/rtk-query/api/created-api/endpoints#initiate) action.

If you specify `track: false` when manually dispatching queries, RTK Query will not be able to automatically refetch for you.

### `onSchemaFailure`[​](#onschemafailure "Direct link to onschemafailure")

A function that is called when a schema validation fails.

Gets called with a `NamedSchemaError` and an object containing the endpoint name, the type of the endpoint, the argument passed to the endpoint, and the query cache key (if applicable).

`NamedSchemaError` has the following properties:

-   `issues`: an array of issues that caused the validation to fail
-   `value`: the value that was passed to the schema
-   `schemaName`: the name of the schema that was used to validate the value (e.g. `argSchema`)

```
import { createApi } from '@reduxjs/toolkit/query/react'import * as v from "valibot"const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPost: build.query<Post, { id: number }>({      query: ({ id }) => `/post/${id}`,    }),  }),  onSchemaFailure: (error, info) => {    console.error(error, info)  },})
```

note

You can set this globally in `createApi`, but you can also override the default value and have more granular control by passing `onSchemaFailure` to each individual endpoint definition.

### `catchSchemaFailure`[​](#catchschemafailure "Direct link to catchschemafailure")

Convert a schema validation failure into an error shape matching base query errors.

When not provided, schema failures are treated as fatal, and normal error handling such as tag invalidation will not be executed.

```
import { createApi } from '@reduxjs/toolkit/query/react'import * as v from "valibot"const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPost: build.query<Post, { id: number }>({      query: ({ id }) => `/post/${id}`,      responseSchema: v.object({ id: v.number(), name: v.string() }),    }),  }),  catchSchemaFailure: (error, info) => ({    status: "CUSTOM_ERROR",    error: error.schemaName + " failed validation",    data: error.issues,  }),})
```

note

You can set this globally in `createApi`, but you can also override the default value and have more granular control by passing `catchSchemaFailure` to each individual endpoint definition.

### `skipSchemaValidation`[​](#skipschemavalidation "Direct link to skipschemavalidation")

Defaults to `false`.

If set to `true`, will skip schema validation for all endpoints, unless overridden by the endpoint.

Can be overridden for specific schemas by passing an array of schema types to skip.

```
import { createApi } from '@reduxjs/toolkit/query/react'import * as v from "valibot"const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  skipSchemaValidation: process.env.NODE_ENV === "test" ? ["response"] : false, // skip schema validation for response in tests, since we'll be mocking the response  endpoints: (build) => ({    getPost: build.query<Post, { id: number }>({      query: ({ id }) => `/post/${id}`,      responseSchema: v.object({ id: v.number(), name: v.string() }),    }),  })})
```

note

You can set this globally in `createApi`, but you can also override the default value and have more granular control by passing `skipSchemaValidation` to each individual endpoint definition.

## Endpoint Definition Parameters[​](#endpoint-definition-parameters "Direct link to Endpoint Definition Parameters")

### `query`[​](#query "Direct link to query")

_(required if no `queryFn` provided)_

query signature

```
export type query = <QueryArg>(  arg: QueryArg,) => string | Record<string, unknown>// with `fetchBaseQuery`export type query = <QueryArg>(arg: QueryArg) => string | FetchArgs
```

### `queryFn`[​](#queryfn "Direct link to queryfn")

_(required if no `query` provided)_

Called with the same arguments as `baseQuery`, as well as the provided `baseQuery` function itself. It is expected to return an object with either a `data` or `error` property, or a promise that resolves to return such an object.

See also [Customizing queries with queryFn](/rtk-query/usage/customizing-queries#customizing-queries-with-queryfn).

queryFn signature

```
queryFn(  arg: QueryArg,  api: BaseQueryApi,  extraOptions: BaseQueryExtraOptions<BaseQuery>,  baseQuery: (arg: Parameters<BaseQuery>[0]) => ReturnType<BaseQuery>): MaybePromise<| {    error: BaseQueryError<BaseQuery>    data?: undefined  }| {    error?: undefined    data: ResultType  }>export interface BaseQueryApi {  signal: AbortSignal  dispatch: ThunkDispatch<any, any, any>  getState: () => unknown}
```

#### `queryFn` function arguments[​](#queryfn-function-arguments "Direct link to queryfn-function-arguments")

-   `args` - The argument provided when the query itself is called
-   `api` - The `BaseQueryApi` object, containing `signal`, `dispatch` and `getState` properties
    -   `signal` - An [`AbortSignal`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) object that may be used to abort DOM requests and/or read whether the request is aborted.
    -   `dispatch` - The `store.dispatch` method for the corresponding Redux store
    -   `getState` - A function that may be called to access the current store state
-   `extraOptions` - The value of the optional `extraOptions` property provided for the endpoint
-   `baseQuery` - The `baseQuery` function provided to the api itself

### `infiniteQueryOptions`[​](#infinitequeryoptions "Direct link to infinitequeryoptions")

_(only for `infiniteQuery` endpoints)_

Required options to configure the infinite query behavior. `initialPageParam` and `getNextPageParam` are required, to ensure the infinite query can properly fetch the next page of data. `initialPageParam` may be specified when using the endpoint, to override the default value. `maxPages` and `getPreviousPageParam` are both optional.

The `infiniteQueryOptions` field includes:

-   `initialPageParam`: the default page param value used for the first request, if this was not specified at the usage site
-   `getNextPageParam`: a required callback you must provide to calculate the next page param, given the existing cached pages and page params
-   `getPreviousPageParam`: an optional callback that will be used to calculate the previous page param, if you try to fetch backwards.
-   `maxPages`: an optional limit to how many fetched pages will be kept in the cache entry at a time

-   TypeScript
-   JavaScript

infiniteQueryOptions example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'type Pokemon = {  id: string  name: string}const pokemonApi = createApi({  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),  endpoints: (build) => ({    getInfinitePokemonWithMax: build.infiniteQuery<Pokemon[], string, number>({      infiniteQueryOptions: {        initialPageParam: 0,        maxPages: 3,        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>          lastPageParam + 1,        getPreviousPageParam: (          firstPage,          allPages,          firstPageParam,          allPageParams,        ) => {          return firstPageParam > 0 ? firstPageParam - 1 : undefined        },      },      query({ pageParam }) {        return `https://example.com/listItems?page=${pageParam}`      },    }),  }),})
```

infiniteQueryOptions example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'const pokemonApi = createApi({  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),  endpoints: (build) => ({    getInfinitePokemonWithMax: build.infiniteQuery({      infiniteQueryOptions: {        initialPageParam: 0,        maxPages: 3,        getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>          lastPageParam + 1,        getPreviousPageParam: (          firstPage,          allPages,          firstPageParam,          allPageParams,        ) => {          return firstPageParam > 0 ? firstPageParam - 1 : undefined        },      },      query({ pageParam }) {        return `https://example.com/listItems?page=${pageParam}`      },    }),  }),})
```

### `transformResponse`[​](#transformresponse "Direct link to transformresponse")

_(optional, not applicable with `queryFn`)_

In some cases, you may want to manipulate the data returned from a query before you put it in the cache. In this instance, you can take advantage of `transformResponse`.

See also [Customizing query responses with `transformResponse`](/rtk-query/usage/customizing-queries#customizing-query-responses-with-transformresponse)

Unpack a deeply nested collection

```
transformResponse: (response, meta, arg) =>  response.some.deeply.nested.collection
```

### `transformErrorResponse`[​](#transformerrorresponse "Direct link to transformerrorresponse")

_(optional, not applicable with `queryFn`)_

In some cases, you may want to manipulate the error returned from a query before you put it in the cache. In this instance, you can take advantage of `transformErrorResponse`.

See also [Customizing query responses with `transformErrorResponse`](/rtk-query/usage/customizing-queries#customizing-query-responses-with-transformerrorresponse)

Unpack a deeply nested error object

```
transformErrorResponse: (response, meta, arg) =>  response.data.some.deeply.nested.errorObject
```

### `extraOptions`[​](#extraoptions "Direct link to extraoptions")

_(optional)_

Passed as the third argument to the supplied `baseQuery` function

### `providesTags`[​](#providestags "Direct link to providestags")

_(optional, only for query endpoints)_

Used by `query` endpoints. Determines which 'tag' is attached to the cached data returned by the query. Expects an array of tag type strings, an array of objects of tag types with ids, or a function that returns such an array.

1.  `['Post']` - equivalent to `2`
2.  `[{ type: 'Post' }]` - equivalent to `1`
3.  `[{ type: 'Post', id: 1 }]`
4.  `(result, error, arg) => ['Post']` - equivalent to `5`
5.  `(result, error, arg) => [{ type: 'Post' }]` - equivalent to `4`
6.  `(result, error, arg) => [{ type: 'Post', id: 1 }]`

See also [Providing cache data](/rtk-query/usage/automated-refetching#providing-cache-data).

-   TypeScript
-   JavaScript

providesTags example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}type PostsResponse = Post[]const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query<PostsResponse, void>({      query: () => 'posts',      providesTags: (result) =>        result          ? [              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),              { type: 'Posts', id: 'LIST' },            ]          : [{ type: 'Posts', id: 'LIST' }],    }),  }),})
```

providesTags example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',      providesTags: (result) =>        result          ? [              ...result.map(({ id }) => ({ type: 'Posts', id })),              { type: 'Posts', id: 'LIST' },            ]          : [{ type: 'Posts', id: 'LIST' }],    }),  }),})
```

### `invalidatesTags`[​](#invalidatestags "Direct link to invalidatestags")

_(optional, only for mutation endpoints)_

Used by `mutation` endpoints. Determines which cached data should be either re-fetched or removed from the cache. Expects the same shapes as `providesTags`.

See also [Invalidating cache data](/rtk-query/usage/automated-refetching#invalidating-cache-data).

-   TypeScript
-   JavaScript

invalidatesTags example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}type PostsResponse = Post[]const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query<PostsResponse, void>({      query: () => 'posts',      providesTags: (result) =>        result          ? [              ...result.map(({ id }) => ({ type: 'Posts' as const, id })),              { type: 'Posts', id: 'LIST' },            ]          : [{ type: 'Posts', id: 'LIST' }],    }),    addPost: build.mutation<Post, Partial<Post>>({      query(body) {        return {          url: `posts`,          method: 'POST',          body,        }      },      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],    }),  }),})
```

invalidatesTags example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Posts'],  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',      providesTags: (result) =>        result          ? [              ...result.map(({ id }) => ({ type: 'Posts', id })),              { type: 'Posts', id: 'LIST' },            ]          : [{ type: 'Posts', id: 'LIST' }],    }),    addPost: build.mutation({      query(body) {        return {          url: `posts`,          method: 'POST',          body,        }      },      invalidatesTags: [{ type: 'Posts', id: 'LIST' }],    }),  }),})
```

### `keepUnusedDataFor`[​](#keepunuseddatafor-1 "Direct link to keepunuseddatafor-1")

_(optional, only for query endpoints)_

Overrides the api-wide definition of `keepUnusedDataFor` for this endpoint only.

Defaults to `60` _(this value is in seconds)_. This is how long RTK Query will keep your data cached for **after** the last component unsubscribes. For example, if you query an endpoint, then unmount the component, then mount another component that makes the same request within the given time frame, the most recent value will be served from the cache.

-   TypeScript
-   JavaScript

keepUnusedDataFor example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}type PostsResponse = Post[]const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPosts: build.query<PostsResponse, void>({      query: () => 'posts',      keepUnusedDataFor: 5,    }),  }),})
```

keepUnusedDataFor example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',      keepUnusedDataFor: 5,    }),  }),})
```

### `serializeQueryArgs`[​](#serializequeryargs-1 "Direct link to serializequeryargs-1")

_(optional, only for query endpoints)_

Can be provided to return a custom cache key value based on the query arguments.

This is primarily intended for cases where a non-serializable value is passed as part of the query arg object and should be excluded from the cache key. It may also be used for cases where an endpoint should only have a single cache entry, such as an infinite loading / pagination implementation.

Unlike the `createApi` version which can _only_ return a string, this per-endpoint option can also return an an object, number, or boolean. If it returns a string, that value will be used as the cache key directly. If it returns an object / number / boolean, that value will be passed to the built-in `defaultSerializeQueryArgs`. This simplifies the use case of stripping out args you don't want included in the cache key.

-   TypeScript
-   JavaScript

serializeQueryArgs : exclude value

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}interface MyApiClient {  fetchPost: (id: string) => Promise<Post>}createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    // Example: an endpoint with an API client passed in as an argument,    // but only the item ID should be used as the cache key    getPost: build.query<Post, { id: string; client: MyApiClient }>({      queryFn: async ({ id, client }) => {        const post = await client.fetchPost(id)        return { data: post }      },      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {        const { id } = queryArgs        // This can return a string, an object, a number, or a boolean.        // If it returns an object, number or boolean, that value        // will be serialized automatically via `defaultSerializeQueryArgs`        return { id } // omit `client` from the cache key        // Alternately, you can use `defaultSerializeQueryArgs` yourself:        // return defaultSerializeQueryArgs({        //   endpointName,        //   queryArgs: { id },        //   endpointDefinition        // })        // Or  create and return a string yourself:        // return `getPost(${id})`      },    }),  }),})
```

serializeQueryArgs : exclude value

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    // Example: an endpoint with an API client passed in as an argument,    // but only the item ID should be used as the cache key    getPost: build.query({      queryFn: async ({ id, client }) => {        const post = await client.fetchPost(id)        return { data: post }      },      serializeQueryArgs: ({ queryArgs, endpointDefinition, endpointName }) => {        const { id } = queryArgs        // This can return a string, an object, a number, or a boolean.        // If it returns an object, number or boolean, that value        // will be serialized automatically via `defaultSerializeQueryArgs`        return { id } // omit `client` from the cache key        // Alternately, you can use `defaultSerializeQueryArgs` yourself:        // return defaultSerializeQueryArgs({        //   endpointName,        //   queryArgs: { id },        //   endpointDefinition        // })        // Or  create and return a string yourself:        // return `getPost(${id})`      },    }),  }),})
```

### `merge`[​](#merge "Direct link to merge")

_(optional, only for query endpoints)_

Can be provided to merge an incoming response value into the current cache data. If supplied, no automatic structural sharing will be applied - it's up to you to update the cache appropriately.

Since RTKQ normally replaces cache entries with the new response, you will usually need to use this with the `serializeQueryArgs` or `forceRefetch` options to keep an existing cache entry so that it can be updated.

Since this is wrapped with Immer, you may either mutate the `currentCacheValue` directly, or return a new value, but _not_ both at once.

Will only be called if the existing `currentCacheData` is _not_ `undefined` - on first response, the cache entry will just save the response data directly.

Useful if you don't want a new request to completely override the current cache value, maybe because you have manually updated it from another source and don't want those updates to get lost.

-   TypeScript
-   JavaScript

merge: pagination

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    listItems: build.query<string[], number>({      query: (pageNumber) => `/listItems?page=${pageNumber}`,      // Only have one cache entry because the arg always maps to one string      serializeQueryArgs: ({ endpointName }) => {        return endpointName      },      // Always merge incoming data to the cache entry      merge: (currentCache, newItems) => {        currentCache.push(...newItems)      },      // Refetch when the page arg changes      forceRefetch({ currentArg, previousArg }) {        return currentArg !== previousArg      },    }),  }),})
```

merge: pagination

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    listItems: build.query({      query: (pageNumber) => `/listItems?page=${pageNumber}`,      // Only have one cache entry because the arg always maps to one string      serializeQueryArgs: ({ endpointName }) => {        return endpointName      },      // Always merge incoming data to the cache entry      merge: (currentCache, newItems) => {        currentCache.push(...newItems)      },      // Refetch when the page arg changes      forceRefetch({ currentArg, previousArg }) {        return currentArg !== previousArg      },    }),  }),})
```

### `forceRefetch`[​](#forcerefetch "Direct link to forcerefetch")

_(optional, only for query endpoints)_

forceRefetch signature

```
type forceRefetch = (params: {  currentArg: QueryArg | undefined  previousArg: QueryArg | undefined  state: RootState<any, any, string>  endpointState?: QuerySubState<any>}) => boolean
```

Check to see if the endpoint should force a refetch in cases where it normally wouldn't. This is primarily useful for "infinite scroll" / pagination use cases where RTKQ is keeping a single cache entry that is added to over time, in combination with `serializeQueryArgs` returning a fixed cache key and a `merge` callback set to add incoming data to the cache entry each time.

-   TypeScript
-   JavaScript

forceRefresh: pagination

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    listItems: build.query<string[], number>({      query: (pageNumber) => `/listItems?page=${pageNumber}`,      // Only have one cache entry because the arg always maps to one string      serializeQueryArgs: ({ endpointName }) => {        return endpointName      },      // Always merge incoming data to the cache entry      merge: (currentCache, newItems) => {        currentCache.push(...newItems)      },      // Refetch when the page arg changes      forceRefetch({ currentArg, previousArg }) {        return currentArg !== previousArg      },    }),  }),})
```

forceRefresh: pagination

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    listItems: build.query({      query: (pageNumber) => `/listItems?page=${pageNumber}`,      // Only have one cache entry because the arg always maps to one string      serializeQueryArgs: ({ endpointName }) => {        return endpointName      },      // Always merge incoming data to the cache entry      merge: (currentCache, newItems) => {        currentCache.push(...newItems)      },      // Refetch when the page arg changes      forceRefetch({ currentArg, previousArg }) {        return currentArg !== previousArg      },    }),  }),})
```

### `onQueryStarted`[​](#onquerystarted "Direct link to onquerystarted")

_(optional)_

Available to both [queries](/rtk-query/usage/queries) and [mutations](/rtk-query/usage/mutations).

A function that is called when you start each individual query or mutation. The function is called with a lifecycle api object containing properties such as `queryFulfilled`, allowing code to be run when a query is started, when it succeeds, and when it fails (i.e. throughout the lifecycle of an individual query/mutation call).

Can be used in `mutations` for [optimistic updates](/rtk-query/usage/manual-cache-updates#optimistic-updates).

#### Lifecycle API properties[​](#lifecycle-api-properties "Direct link to Lifecycle API properties")

-   `dispatch` - The dispatch method for the store.
-   `getState` - A method to get the current state for the store.
-   `extra` - `extra` as provided as `thunk.extraArgument` to the `configureStore` `getDefaultMiddleware` option.
-   `requestId` - A unique ID generated for the query/mutation.
-   `queryFulfilled` - A Promise that will resolve with a `data` property (the transformed query result), and a `meta` property (`meta` returned by the `baseQuery`). If the query fails, this Promise will reject with the error. This allows you to `await` for the query to finish.
-   `getCacheEntry` - A function that gets the current value of the cache entry.
-   `updateCachedData` _(query endpoints only)_ - A function that accepts a 'recipe' callback specifying how to update the data for the corresponding cache at the time it is called. This uses `immer` internally, and updates can be written 'mutably' while safely producing the next immutable state.

Mutation onQueryStarted signature

```
async function onQueryStarted(  arg: QueryArg,  {    dispatch,    getState,    extra,    requestId,    queryFulfilled,    getCacheEntry,  }: MutationLifecycleApi,): Promise<void>
```

Query onQueryStarted signature

```
async function onQueryStarted(  arg: QueryArg,  {    dispatch,    getState,    extra,    requestId,    queryFulfilled,    getCacheEntry,    updateCachedData, // available for query endpoints only  }: QueryLifecycleApi,): Promise<void>
```

-   TypeScript
-   JavaScript

onQueryStarted query lifecycle example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import { messageCreated } from './notificationsSlice'export interface Post {  id: number  name: string}const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  endpoints: (build) => ({    getPost: build.query<Post, number>({      query: (id) => `post/${id}`,      async onQueryStarted(id, { dispatch, queryFulfilled }) {        // `onStart` side-effect        dispatch(messageCreated('Fetching post...'))        try {          const { data } = await queryFulfilled          // `onSuccess` side-effect          dispatch(messageCreated('Post received!'))        } catch (err) {          // `onError` side-effect          dispatch(messageCreated('Error fetching post!'))        }      },    }),  }),})
```

onQueryStarted query lifecycle example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import { messageCreated } from './notificationsSlice'const api = createApi({  baseQuery: fetchBaseQuery({    baseUrl: '/',  }),  endpoints: (build) => ({    getPost: build.query({      query: (id) => `post/${id}`,      async onQueryStarted(id, { dispatch, queryFulfilled }) {        // `onStart` side-effect        dispatch(messageCreated('Fetching post...'))        try {          const { data } = await queryFulfilled          // `onSuccess` side-effect          dispatch(messageCreated('Post received!'))        } catch (err) {          // `onError` side-effect          dispatch(messageCreated('Error fetching post!'))        }      },    }),  }),})
```

### `onCacheEntryAdded`[​](#oncacheentryadded "Direct link to oncacheentryadded")

_(optional)_

Available to both [queries](/rtk-query/usage/queries) and [mutations](/rtk-query/usage/mutations).

A function that is called when a new cache entry is added, i.e. when a new subscription for the endpoint + query parameters combination is created. The function is called with a lifecycle api object containing properties such as `cacheDataLoaded` & `cacheDataRemoved`, allowing code to be run when a cache entry is added, when cache data is loaded, and when the cache entry is removed (i.e. throughout the lifecycle of a cache entry).

Can be used for [streaming updates](/rtk-query/usage/streaming-updates).

#### Cache Lifecycle API properties[​](#cache-lifecycle-api-properties "Direct link to Cache Lifecycle API properties")

-   `dispatch` - The dispatch method for the store.
-   `getState` - A method to get the current state for the store.
-   `extra` - `extra` as provided as `thunk.extraArgument` to the `configureStore` `getDefaultMiddleware` option.
-   `requestId` - A unique ID generated for the cache entry.
-   `cacheEntryRemoved` - A Promise that allows you to wait for the point in time when the cache entry has been removed from the cache, by not being used/subscribed to any more in the application for too long or by dispatching `api.util.resetApiState`.
-   `cacheDataLoaded` - A Promise that will resolve with the first value for this cache key. This allows you to `await` until an actual value is in the cache.  
    Note: If the cache entry is removed from the cache before any value has ever been resolved, this Promise will reject with `new Error('Promise never resolved before cacheEntryRemoved.')` to prevent memory leaks. You can just re-throw that error (or not handle it at all) - it will be caught outside of `cacheEntryAdded`.
-   `getCacheEntry` - A function that gets the current value of the cache entry.
-   `updateCachedData` _(query endpoints only)_ - A function that accepts a 'recipe' callback specifying how to update the data at the time it is called. This uses `immer` internally, and updates can be written 'mutably' while safely producing the next immutable state.

Mutation onCacheEntryAdded signature

```
async function onCacheEntryAdded(  arg: QueryArg,  {    dispatch,    getState,    extra,    requestId,    cacheEntryRemoved,    cacheDataLoaded,    getCacheEntry,  }: MutationCacheLifecycleApi,): Promise<void>
```

Query onCacheEntryAdded signature

```
async function onCacheEntryAdded(  arg: QueryArg,  {    dispatch,    getState,    extra,    requestId,    cacheEntryRemoved,    cacheDataLoaded,    getCacheEntry,    updateCachedData, // available for query endpoints only  }: QueryCacheLifecycleApi,): Promise<void>
```

### Schema Validation[​](#schema-validation "Direct link to Schema Validation")

Endpoints can have schemas for runtime validation of query args, responses, and errors. Any [Standard Schema](https://standardschema.dev/) compliant library can be used.

When used with TypeScript, schemas can also be used to [infer the type of that value instead of having to declare it](/rtk-query/usage-with-typescript#schema-validation).

warning

By default, schema failures are treated as _fatal_, meaning that normal error handling such as tag invalidation will not be executed.

In order for schema failures to be treated as non-fatal, you must provide a [`catchSchemaFailure`](#catchschemafailure) function, to convert the schema failure into an error shape matching the base query errors.

catchSchemaFailure example

```
const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  catchSchemaFailure: (error, info) => ({    status: 'CUSTOM_ERROR',    error: error.schemaName + ' failed validation',    data: error,  }),  endpoints: (build) => ({    // ...  }),})
```

#### `argSchema`[​](#argschema "Direct link to argschema")

_(optional)_

A schema for the arguments to be passed to the `query` or `queryFn`.

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';import * as v from 'valibot';interface Post {  id: number;  name: string;}const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPost: build.query<Post, { id: number }>({      query: ({ id }) => `/post/${id}`,      argSchema: v.object({ id: v.number() }),    }),  }),});
```

#### `responseSchema`[​](#responseschema "Direct link to responseschema")

_(optional)_

A schema for the result (including `transformResponse` if provided).

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';import * as v from 'valibot';const postSchema = v.object({ id: v.number(), name: v.string() });type Post = v.InferOutput<typeof postSchema>;const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPost: build.query<Post, { id: number }>({      query: ({ id }) => `/post/${id}`,      responseSchema: postSchema,    }),  }),});
```

#### `rawResponseSchema`[​](#rawresponseschema "Direct link to rawresponseschema")

_(optional, not applicable with `queryFn`)_

#### `errorResponseSchema`[​](#errorresponseschema "Direct link to errorresponseschema")

_(optional)_

A schema for the error object returned by the `query` or `queryFn` (including `transformErrorResponse` if provided).

```
import { createApi } from '@reduxjs/toolkit/query/react';import { baseQueryErrorSchema, customBaseQuery } from './customBaseQuery';interface Post {  id: number;  name: string;}const api = createApi({  baseQuery: customBaseQuery,  endpoints: (build) => ({    getPost: build.query<Post, { id: number }>({      query: ({ id }) => `/post/${id}`,      errorResponseSchema: baseQueryErrorSchema,    }),  }),});
```

#### `rawErrorResponseSchema`[​](#rawerrorresponseschema "Direct link to rawerrorresponseschema")

_(optional, not applicable with `queryFn`)_

#### `metaSchema`[​](#metaschema "Direct link to metaschema")

_(optional)_

A schema for the `meta` property returned by the `query` or `queryFn`.

```
import { createApi } from '@reduxjs/toolkit/query/react';import { baseQueryMetaSchema, customBaseQuery } from './customBaseQuery';interface Post {  id: number;  name: string;}const api = createApi({  baseQuery: customBaseQuery,  endpoints: (build) => ({    getPost: build.query<Post, { id: number }>({      query: ({ id }) => `/post/${id}`,      metaSchema: baseQueryMetaSchema,    }),  }),});
```

## Return value[​](#return-value "Direct link to Return value")

See [the "created Api" API reference](/rtk-query/api/created-api/overview)
