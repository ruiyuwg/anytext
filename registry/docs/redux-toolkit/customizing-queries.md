On this page

RTK Query is agnostic as to how your requests resolve. You can use any library you like to handle requests, or no library at all. RTK Query provides reasonable defaults expected to cover the majority of use cases, while also allowing room for customization to alter query handling to fit specific needs.

## Customizing queries with `baseQuery`[​](#customizing-queries-with-basequery "Direct link to customizing-queries-with-basequery")

The default method to handle queries is via the [`baseQuery`](/rtk-query/api/createApi#basequery) option on [`createApi`](/rtk-query/api/createApi), in combination with the [`query`](/rtk-query/api/createApi#query) option on an endpoint definition.

To process queries, endpoints are defined with a [`query`](/rtk-query/api/createApi#query) option, which passes its return value to a common [`baseQuery`](/rtk-query/api/createApi#basequery) function used for the API.

By default, RTK Query ships with [`fetchBaseQuery`](/rtk-query/api/fetchBaseQuery), which is a lightweight [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like `axios`. If `fetchBaseQuery` alone does not meet your needs, you can customize its behavior with a wrapper function, or create your own [`baseQuery`](/rtk-query/api/createApi#basequery) function from scratch for [`createApi`](/rtk-query/api/createApi) to use.

See also [`baseQuery API Reference`](/rtk-query/api/createApi#basequery).

### Implementing a custom `baseQuery`[​](#implementing-a-custom-basequery "Direct link to implementing-a-custom-basequery")

RTK Query expects a `baseQuery` function to be called with three arguments: `args`, `api`, and `extraOptions`. It is expected to return an object with either a `data` or `error` property, or a promise that resolves to return such an object.

tip

Base query and query functions must _always_ catch errors themselves, and return it in an object!

```
function brokenCustomBaseQuery() {  // ❌ Don't let this throw by itself  const data = await fetchSomeData()  return { data }}function correctCustomBaseQuery() {  // ✅ Catch errors and _return_ them so the RTKQ logic can track it  try {    const data = await fetchSomeData()    return { data }  } catch (error) {    return { error }  }}
```

#### baseQuery function arguments[​](#basequery-function-arguments "Direct link to baseQuery function arguments")

baseQuery example arguments

```
const customBaseQuery = (  args,  { signal, dispatch, getState },  extraOptions,) => {  // omitted}
```

#### baseQuery function return value[​](#basequery-function-return-value "Direct link to baseQuery function return value")

1.  Expected success result format
    
    ```
    return { data: YourData }
    ```
    
2.  Expected error result format
    
    ```
    return { error: YourError }
    ```
    

baseQuery example return value

```
const customBaseQuery = (  args,  { signal, dispatch, getState },  extraOptions,) => {  if (Math.random() > 0.5) return { error: 'Too high!' }  return { data: 'All good!' }}
```

note

This format is required so that RTK Query can infer the return types for your responses.

At its core, a `baseQuery` function only needs to have the minimum return value to be valid; an object with a `data` or `error` property. It is up to the user to determine how they wish to use the provided arguments, and how requests are handled within the function itself.

#### fetchBaseQuery defaults[​](#fetchbasequery-defaults "Direct link to fetchBaseQuery defaults")

For [`fetchBaseQuery`](/rtk-query/api/fetchBaseQuery) specifically, the return type is as follows:

Return types of fetchBaseQuery

```
Promise<  | {      data: any      error?: undefined      meta?: { request: Request; response: Response }    }  | {      error: {        status: number        data: any      }      data?: undefined      meta?: { request: Request; response: Response }    }>
```

1.  Expected success result format with fetchBaseQuery
    
    ```
    return { data: YourData }
    ```
    
2.  Expected error result format with fetchBaseQuery
    
    ```
    return { error: { status: number, data: YourErrorData } }
    ```
    

## Customizing query responses with `transformResponse`[​](#customizing-query-responses-with-transformresponse "Direct link to customizing-query-responses-with-transformresponse")

Individual endpoints on [`createApi`](/rtk-query/api/createApi) accept a [`transformResponse`](/rtk-query/api/createApi) property which allows manipulation of the data returned by a query or mutation before it hits the cache.

`transformResponse` is called with the data that a successful `baseQuery` returns for the corresponding endpoint, and the return value of `transformResponse` is used as the cached data associated with that endpoint call.

By default, the payload from the server is returned directly.

-   TypeScript
-   JavaScript

```
function defaultTransformResponse(  baseQueryReturnValue: unknown,  meta: unknown,  arg: unknown,) {  return baseQueryReturnValue}
```

```
function defaultTransformResponse(baseQueryReturnValue, meta, arg) {  return baseQueryReturnValue}
```

To change it, provide a function that looks like:

Unpack a deeply nested collection

```
transformResponse: (response, meta, arg) =>  response.some.deeply.nested.collection
```

`transformResponse` is called with the `meta` property returned from the `baseQuery` as its second argument, which can be used while determining the transformed response. The value for `meta` is dependent on the `baseQuery` used.

transformResponse meta example

```
transformResponse: (response: { sideA: Tracks; sideB: Tracks }, meta, arg) => {  if (meta?.coinFlip === 'heads') {    return response.sideA  }  return response.sideB}
```

`transformResponse` is called with the `arg` property provided to the endpoint as its third argument, which can be used while determining the transformed response. The value for `arg` is dependent on the `endpoint` used, as well as the argument used when calling the query/mutation.

transformResponse arg example

```
transformResponse: (response: Posts, meta, arg) => {  return {    originalArg: arg,    data: response,  }}
```

While there is less need to store the response in a [normalized lookup table](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) with RTK Query managing caching data, `transformResponse` can be leveraged to do so if desired.

Normalize the response data

```
transformResponse: (response) =>  response.reduce((acc, curr) => {    acc[curr.id] = curr    return acc  }, {})/*  will convert:  [    {id: 1, name: 'Harry'},    {id: 2, name: 'Ron'},    {id: 3, name: 'Hermione'},  ]  to:  {    1: { id: 1, name: "Harry" },    2: { id: 2, name: "Ron" },    3: { id: 3, name: "Hermione" },  }*/
```

[`createEntityAdapter`](/api/createEntityAdapter) can also be used with `transformResponse` to normalize data, while also taking advantage of other features provided by `createEntityAdapter`, including providing an `ids` array, using [`sortComparer`](/api/createEntityAdapter#sortcomparer) to maintain a consistently sorted list, as well as maintaining strong TypeScript support.

See also [Websocket Chat API with a transformed response shape](/rtk-query/usage/streaming-updates#websocket-chat-api-with-a-transformed-response-shape) for an example of `transformResponse` normalizing response data in combination with `createEntityAdapter`, while also updating further data using [`streaming updates`](/rtk-query/usage/streaming-updates).

## Customizing query responses with `transformErrorResponse`[​](#customizing-query-responses-with-transformerrorresponse "Direct link to customizing-query-responses-with-transformerrorresponse")

Individual endpoints on [`createApi`](/rtk-query/api/createApi) accept a [`transformErrorResponse`](/rtk-query/api/createApi) property which allows manipulation of the error returned by a query or mutation before it hits the cache.

`transformErrorResponse` is called with the error that a failed `baseQuery` returns for the corresponding endpoint, and the return value of `transformErrorResponse` is used as the cached error associated with that endpoint call.

By default, the payload from the server is returned directly.

-   TypeScript
-   JavaScript

```
function defaultTransformResponse(  baseQueryReturnValue: unknown,  meta: unknown,  arg: unknown,) {  return baseQueryReturnValue}
```

```
function defaultTransformResponse(baseQueryReturnValue, meta, arg) {  return baseQueryReturnValue}
```

To change it, provide a function that looks like:

Unpack a deeply nested error object

```
transformErrorResponse: (response, meta, arg) =>  response.data.some.deeply.nested.errorObject
```

`transformErrorResponse` is called with the `meta` property returned from the `baseQuery` as its second argument, which can be used while determining the transformed response. The value for `meta` is dependent on the `baseQuery` used.

transformErrorResponse meta example

```
transformErrorResponse: (  response: { data: { sideA: Tracks; sideB: Tracks } },  meta,  arg,) => {  if (meta?.coinFlip === 'heads') {    return response.data.sideA  }  return response.data.sideB}
```

`transformErrorResponse` is called with the `arg` property provided to the endpoint as its third argument, which can be used while determining the transformed response. The value for `arg` is dependent on the `endpoint` used, as well as the argument used when calling the query/mutation.

transformErrorResponse arg example

```
transformErrorResponse: (response: Posts, meta, arg) => {  return {    originalArg: arg,    error: response,  }}
```

## Customizing queries with `queryFn`[​](#customizing-queries-with-queryfn "Direct link to customizing-queries-with-queryfn")

RTK Query comes with `fetchBaseQuery` out of the box, which makes it straightforward to define endpoints that talk to HTTP URLs (such as a typical REST API). We also have integrations with GraphQL as well. However, at its core, RTK Query is really about tracking loading state and cached values for _any_ async request/response sequence, not just HTTP requests.

RTK Query supports defining endpoints that run arbitrary async logic and return a result. Individual endpoints on [`createApi`](/rtk-query/api/createApi) accept a [`queryFn`](/rtk-query/api/createApi#queryfn) property, which let you write your own async function with whatever logic you want inside.

This can be useful for scenarios where you want to have particularly different behavior for a single endpoint, or where the query itself is not relevant, including:

-   One-off queries that use a different base URL
-   One-off queries that use different request handling, such as automatic re-tries
-   One-off queries that use different error handling behavior
-   Queries that make requests using a third-party library SDK, such as Firebase or Supabase
-   Queries that perform async tasks that are not a typical request/response
-   Performing multiple requests with a single query ([example](#performing-multiple-requests-with-a-single-query))
-   Leveraging invalidation behavior with no relevant query ([example](#using-a-no-op-queryfn))
-   Using [Streaming Updates](/rtk-query/usage/streaming-updates) with no relevant initial request ([example](#streaming-data-with-no-initial-request))

See also [`queryFn API Reference`](/rtk-query/api/createApi#queryfn) for the type signature and available options.

### Implementing a `queryFn`[​](#implementing-a-queryfn "Direct link to implementing-a-queryfn")

A `queryFn` can be thought of as an inline `baseQuery`. It will be called with the same arguments as `baseQuery`, as well as the provided `baseQuery` function itself (`arg`, `api`, `extraOptions`, and `baseQuery`). Similarly to `baseQuery`, it is expected to return an object with either a `data` or `error` property, or a promise that resolves to return such an object.

#### Basic `queryFn` Example[​](#basic-queryfn-example "Direct link to basic-queryfn-example")

Basic queryFn example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import { userAPI, User } from './userAPI'const api = createApi({  baseQuery: fetchBaseQuery({ url: '/' }),  endpoints: (build) => ({    // normal HTTP endpoint using fetchBaseQuery    getPosts: build.query<PostsResponse, void>({      query: () => ({ url: 'posts' }),    }),    // endpoint with a custom `queryFn` and separate async logic    getUser: build.query<User, string>({      queryFn: async (userId: string) => {        try {          const user = await userApi.getUserById(userId)          // Return the result in an object with a `data` field          return { data: user }        } catch (error) {          // Catch any errors and return them as an object with an `error` field          return { error }        }      },    }),  }),})
```

#### queryFn function arguments[​](#queryfn-function-arguments "Direct link to queryFn function arguments")

queryFn example arguments

```
const queryFn = (  args,  { signal, dispatch, getState },  extraOptions,  baseQuery,) => {  // omitted}
```

#### queryFn function return value[​](#queryfn-function-return-value "Direct link to queryFn function return value")

1.  Expected success result format
    
    ```
    return { data: YourData }
    ```
    
2.  Expected error result format
    
    ```
    return { error: YourError }
    ```
    

queryFn example return value

```
const queryFn = (  args,  { signal, dispatch, getState },  extraOptions,  baseQuery,) => {  if (Math.random() > 0.5) return { error: 'Too high!' }  return { data: 'All good!' }}
```

## Examples - `baseQuery`[​](#examples---basequery "Direct link to examples---basequery")

### Axios baseQuery[​](#axios-basequery "Direct link to Axios baseQuery")

This example implements a very basic axios-based `baseQuery` utility.

-   TypeScript
-   JavaScript

Basic axios baseQuery

```
import { createApi } from '@reduxjs/toolkit/query'import type { BaseQueryFn } from '@reduxjs/toolkit/query'import axios from 'axios'import type { AxiosRequestConfig, AxiosError } from 'axios'const axiosBaseQuery =  (    { baseUrl }: { baseUrl: string } = { baseUrl: '' },  ): BaseQueryFn<    {      url: string      method?: AxiosRequestConfig['method']      data?: AxiosRequestConfig['data']      params?: AxiosRequestConfig['params']      headers?: AxiosRequestConfig['headers']    },    unknown,    unknown  > =>  async ({ url, method, data, params, headers }) => {    try {      const result = await axios({        url: baseUrl + url,        method,        data,        params,        headers,      })      return { data: result.data }    } catch (axiosError) {      const err = axiosError as AxiosError      return {        error: {          status: err.response?.status,          data: err.response?.data || err.message,        },      }    }  }const api = createApi({  baseQuery: axiosBaseQuery({    baseUrl: 'https://example.com',  }),  endpoints(build) {    return {      query: build.query({ query: () => ({ url: '/query', method: 'get' }) }),      mutation: build.mutation({        query: () => ({ url: '/mutation', method: 'post' }),      }),    }  },})
```

Basic axios baseQuery

```
import { createApi } from '@reduxjs/toolkit/query'import axios from 'axios'const axiosBaseQuery =  ({ baseUrl } = { baseUrl: '' }) =>  async ({ url, method, data, params, headers }) => {    try {      const result = await axios({        url: baseUrl + url,        method,        data,        params,        headers,      })      return { data: result.data }    } catch (axiosError) {      const err = axiosError      return {        error: {          status: err.response?.status,          data: err.response?.data || err.message,        },      }    }  }const api = createApi({  baseQuery: axiosBaseQuery({    baseUrl: 'https://example.com',  }),  endpoints(build) {    return {      query: build.query({ query: () => ({ url: '/query', method: 'get' }) }),      mutation: build.mutation({        query: () => ({ url: '/mutation', method: 'post' }),      }),    }  },})
```

### GraphQL baseQuery[​](#graphql-basequery "Direct link to GraphQL baseQuery")

This example implements a very basic GraphQL-based `baseQuery`.

-   TypeScript
-   JavaScript

Basic GraphQL baseQuery

```
import { createApi } from '@reduxjs/toolkit/query'import { request, gql, ClientError } from 'graphql-request'const graphqlBaseQuery =  ({ baseUrl }: { baseUrl: string }) =>  async ({ body }: { body: string }) => {    try {      const result = await request(baseUrl, body)      return { data: result }    } catch (error) {      if (error instanceof ClientError) {        return { error: { status: error.response.status, data: error } }      }      return { error: { status: 500, data: error } }    }  }export const api = createApi({  baseQuery: graphqlBaseQuery({    baseUrl: 'https://graphqlzero.almansi.me/api',  }),  endpoints: (build) => ({    getPosts: build.query({      query: () => ({        body: gql`          query {            posts {              data {                id                title              }            }          }        `,      }),      transformResponse: (response) => response.posts.data,    }),    getPost: build.query({      query: (id) => ({        body: gql`        query {          post(id: ${id}) {            id            title            body          }        }        `,      }),      transformResponse: (response) => response.post,    }),  }),})
```

Basic GraphQL baseQuery

```
import { createApi } from '@reduxjs/toolkit/query'import { request, gql, ClientError } from 'graphql-request'const graphqlBaseQuery =  ({ baseUrl }) =>  async ({ body }) => {    try {      const result = await request(baseUrl, body)      return { data: result }    } catch (error) {      if (error instanceof ClientError) {        return { error: { status: error.response.status, data: error } }      }      return { error: { status: 500, data: error } }    }  }export const api = createApi({  baseQuery: graphqlBaseQuery({    baseUrl: 'https://graphqlzero.almansi.me/api',  }),  endpoints: (build) => ({    getPosts: build.query({      query: () => ({        body: gql`          query {            posts {              data {                id                title              }            }          }        `,      }),      transformResponse: (response) => response.posts.data,    }),    getPost: build.query({      query: (id) => ({        body: gql`        query {          post(id: ${id}) {            id            title            body          }        }        `,      }),      transformResponse: (response) => response.post,    }),  }),})
```

### Automatic re-authorization by extending fetchBaseQuery[​](#automatic-re-authorization-by-extending-fetchbasequery "Direct link to Automatic re-authorization by extending fetchBaseQuery")

This example wraps [`fetchBaseQuery`](/rtk-query/api/fetchBaseQuery) such that when encountering a [`401 Unauthorized`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) error, an additional request is sent to attempt to refresh an authorization token, and re-try to initial query after re-authorizing.

-   TypeScript
-   JavaScript

Simulating axios-like interceptors with a custom base query

```
import { fetchBaseQuery } from '@reduxjs/toolkit/query'import type {  BaseQueryFn,  FetchArgs,  FetchBaseQueryError,} from '@reduxjs/toolkit/query'import { tokenReceived, loggedOut } from './authSlice'const baseQuery = fetchBaseQuery({ baseUrl: '/' })const baseQueryWithReauth: BaseQueryFn<  string | FetchArgs,  unknown,  FetchBaseQueryError> = async (args, api, extraOptions) => {  let result = await baseQuery(args, api, extraOptions)  if (result.error && result.error.status === 401) {    // try to get a new token    const refreshResult = await baseQuery('/refreshToken', api, extraOptions)    if (refreshResult.data) {      // store the new token      api.dispatch(tokenReceived(refreshResult.data))      // retry the initial query      result = await baseQuery(args, api, extraOptions)    } else {      api.dispatch(loggedOut())    }  }  return result}
```

Simulating axios-like interceptors with a custom base query

```
import { fetchBaseQuery } from '@reduxjs/toolkit/query'import { tokenReceived, loggedOut } from './authSlice'const baseQuery = fetchBaseQuery({ baseUrl: '/' })const baseQueryWithReauth = async (args, api, extraOptions) => {  let result = await baseQuery(args, api, extraOptions)  if (result.error && result.error.status === 401) {    // try to get a new token    const refreshResult = await baseQuery('/refreshToken', api, extraOptions)    if (refreshResult.data) {      // store the new token      api.dispatch(tokenReceived(refreshResult.data))      // retry the initial query      result = await baseQuery(args, api, extraOptions)    } else {      api.dispatch(loggedOut())    }  }  return result}
```

#### Preventing multiple unauthorized errors[​](#preventing-multiple-unauthorized-errors "Direct link to Preventing multiple unauthorized errors")

Using [`async-mutex`](https://github.com/DirtyHairy/async-mutex) to prevent multiple calls to '/refreshToken' when multiple calls fail with [`401 Unauthorized`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401) errors.

-   TypeScript
-   JavaScript

Preventing multiple calls to '/refreshToken'

```
import { fetchBaseQuery } from '@reduxjs/toolkit/query'import type {  BaseQueryFn,  FetchArgs,  FetchBaseQueryError,} from '@reduxjs/toolkit/query'import { tokenReceived, loggedOut } from './authSlice'import { Mutex } from 'async-mutex'// create a new mutexconst mutex = new Mutex()const baseQuery = fetchBaseQuery({ baseUrl: '/' })const baseQueryWithReauth: BaseQueryFn<  string | FetchArgs,  unknown,  FetchBaseQueryError> = async (args, api, extraOptions) => {  // wait until the mutex is available without locking it  await mutex.waitForUnlock()  let result = await baseQuery(args, api, extraOptions)  if (result.error && result.error.status === 401) {    // checking whether the mutex is locked    if (!mutex.isLocked()) {      const release = await mutex.acquire()      try {        const refreshResult = await baseQuery(          '/refreshToken',          api,          extraOptions,        )        if (refreshResult.data) {          api.dispatch(tokenReceived(refreshResult.data))          // retry the initial query          result = await baseQuery(args, api, extraOptions)        } else {          api.dispatch(loggedOut())        }      } finally {        // release must be called once the mutex should be released again.        release()      }    } else {      // wait until the mutex is available without locking it      await mutex.waitForUnlock()      result = await baseQuery(args, api, extraOptions)    }  }  return result}
```

Preventing multiple calls to '/refreshToken'

```
import { fetchBaseQuery } from '@reduxjs/toolkit/query'import { tokenReceived, loggedOut } from './authSlice'import { Mutex } from 'async-mutex'// create a new mutexconst mutex = new Mutex()const baseQuery = fetchBaseQuery({ baseUrl: '/' })const baseQueryWithReauth = async (args, api, extraOptions) => {  // wait until the mutex is available without locking it  await mutex.waitForUnlock()  let result = await baseQuery(args, api, extraOptions)  if (result.error && result.error.status === 401) {    // checking whether the mutex is locked    if (!mutex.isLocked()) {      const release = await mutex.acquire()      try {        const refreshResult = await baseQuery(          '/refreshToken',          api,          extraOptions,        )        if (refreshResult.data) {          api.dispatch(tokenReceived(refreshResult.data))          // retry the initial query          result = await baseQuery(args, api, extraOptions)        } else {          api.dispatch(loggedOut())        }      } finally {        // release must be called once the mutex should be released again.        release()      }    } else {      // wait until the mutex is available without locking it      await mutex.waitForUnlock()      result = await baseQuery(args, api, extraOptions)    }  }  return result}
```

### Automatic retries[​](#automatic-retries "Direct link to Automatic retries")

RTK Query exports a utility called `retry` that you can wrap the `baseQuery` in your API definition with. It defaults to 5 attempts with a basic exponential backoff.

The default behavior would retry at these intervals:

1.  600ms \* random(0.4, 1.4)
2.  1200ms \* random(0.4, 1.4)
3.  2400ms \* random(0.4, 1.4)
4.  4800ms \* random(0.4, 1.4)
5.  9600ms \* random(0.4, 1.4)

-   TypeScript
-   JavaScript

Retry every request 5 times by default

```
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'interface Post {  id: number  name: string}type PostsResponse = Post[]// maxRetries: 5 is the default, and can be omitted. Shown for documentation purposes.const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: '/' }), {  maxRetries: 5,})export const api = createApi({  baseQuery: staggeredBaseQuery,  endpoints: (build) => ({    getPosts: build.query<PostsResponse, void>({      query: () => ({ url: 'posts' }),    }),    getPost: build.query<PostsResponse, string>({      query: (id) => ({ url: `post/${id}` }),      extraOptions: { maxRetries: 8 }, // You can override the retry behavior on each endpoint    }),  }),})export const { useGetPostsQuery, useGetPostQuery } = api
```

Retry every request 5 times by default

```
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'// maxRetries: 5 is the default, and can be omitted. Shown for documentation purposes.const staggeredBaseQuery = retry(fetchBaseQuery({ baseUrl: '/' }), {  maxRetries: 5,})export const api = createApi({  baseQuery: staggeredBaseQuery,  endpoints: (build) => ({    getPosts: build.query({      query: () => ({ url: 'posts' }),    }),    getPost: build.query({      query: (id) => ({ url: `post/${id}` }),      extraOptions: { maxRetries: 8 }, // You can override the retry behavior on each endpoint    }),  }),})export const { useGetPostsQuery, useGetPostQuery } = api
```

In the event that you didn't want to retry on a specific endpoint, you can just set `maxRetries: 0`.

info

It is possible for a hook to return `data` and `error` at the same time. By default, RTK Query will keep whatever the last 'good' result was in `data` until it can be updated or garbage collected.

#### Bailing out of error re-tries[​](#bailing-out-of-error-re-tries "Direct link to Bailing out of error re-tries")

The `retry` utility has a `fail` method property attached which can be used to bail out of retries immediately. This can be used for situations where it is known that additional re-tries would be guaranteed to all fail and would be redundant.

-   TypeScript
-   JavaScript

Bailing out of error re-tries

```
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'import type { FetchArgs } from '@reduxjs/toolkit/query'interface Post {  id: number  name: string}type PostsResponse = Post[]const staggeredBaseQueryWithBailOut = retry(  async (args: string | FetchArgs, api, extraOptions) => {    const result = await fetchBaseQuery({ baseUrl: '/api/' })(      args,      api,      extraOptions,    )    // bail out of re-tries immediately if unauthorized,    // because we know successive re-retries would be redundant    if (result.error?.status === 401) {      retry.fail(result.error, result.meta)    }    return result  },  {    maxRetries: 5,  },)export const api = createApi({  baseQuery: staggeredBaseQueryWithBailOut,  endpoints: (build) => ({    getPosts: build.query<PostsResponse, void>({      query: () => ({ url: 'posts' }),    }),    getPost: build.query<Post, string>({      query: (id) => ({ url: `post/${id}` }),      extraOptions: { maxRetries: 8 }, // You can override the retry behavior on each endpoint    }),  }),})export const { useGetPostsQuery, useGetPostQuery } = api
```

Bailing out of error re-tries

```
import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'const staggeredBaseQueryWithBailOut = retry(  async (args, api, extraOptions) => {    const result = await fetchBaseQuery({ baseUrl: '/api/' })(      args,      api,      extraOptions,    )    // bail out of re-tries immediately if unauthorized,    // because we know successive re-retries would be redundant    if (result.error?.status === 401) {      retry.fail(result.error, result.meta)    }    return result  },  {    maxRetries: 5,  },)export const api = createApi({  baseQuery: staggeredBaseQueryWithBailOut,  endpoints: (build) => ({    getPosts: build.query({      query: () => ({ url: 'posts' }),    }),    getPost: build.query({      query: (id) => ({ url: `post/${id}` }),      extraOptions: { maxRetries: 8 }, // You can override the retry behavior on each endpoint    }),  }),})export const { useGetPostsQuery, useGetPostQuery } = api
```

### Adding Meta information to queries[​](#adding-meta-information-to-queries "Direct link to Adding Meta information to queries")

A `baseQuery` can also include a `meta` property in its return value. This can be beneficial in cases where you may wish to include additional information associated with the request such as a request ID or timestamp.

In such a scenario, the return value would look like so:

1.  Expected success result format with meta
    
    ```
    return { data: YourData, meta: YourMeta }
    ```
    
2.  Expected error result format with meta
    
    ```
    return { error: YourError, meta: YourMeta }
    ```
    

-   TypeScript
-   JavaScript

baseQuery example with meta information

```
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query'import type {  BaseQueryFn,  FetchArgs,  FetchBaseQueryError,} from '@reduxjs/toolkit/query'import type { FetchBaseQueryMeta } from '@reduxjs/toolkit/query'import { uuid } from './idGenerator'type Meta = {  requestId: string  timestamp: number}const metaBaseQuery: BaseQueryFn<  string | FetchArgs,  unknown,  FetchBaseQueryError,  {},  Meta & FetchBaseQueryMeta> = async (args, api, extraOptions) => {  const requestId = uuid()  const timestamp = Date.now()  const baseResult = await fetchBaseQuery({ baseUrl: '/' })(    args,    api,    extraOptions,  )  return {    ...baseResult,    meta: baseResult.meta && { ...baseResult.meta, requestId, timestamp },  }}const DAY_MS = 24 * 60 * 60 * 1000interface Post {  id: number  name: string  timestamp: number}type PostsResponse = Post[]const api = createApi({  baseQuery: metaBaseQuery,  endpoints: (build) => ({    // a theoretical endpoint where we only want to return data    // if request was performed past a certain date    getRecentPosts: build.query<PostsResponse, void>({      query: () => 'posts',      transformResponse: (returnValue: PostsResponse, meta) => {        // `meta` here contains our added `requestId` & `timestamp`, as well as        // `request` & `response` from fetchBaseQuery's meta object.        // These properties can be used to transform the response as desired.        if (!meta) return []        return returnValue.filter(          (post) => post.timestamp >= meta.timestamp - DAY_MS,        )      },    }),  }),})
```

baseQuery example with meta information

```
import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query'import { uuid } from './idGenerator'const metaBaseQuery = async (args, api, extraOptions) => {  const requestId = uuid()  const timestamp = Date.now()  const baseResult = await fetchBaseQuery({ baseUrl: '/' })(    args,    api,    extraOptions,  )  return {    ...baseResult,    meta: baseResult.meta && { ...baseResult.meta, requestId, timestamp },  }}const DAY_MS = 24 * 60 * 60 * 1000const api = createApi({  baseQuery: metaBaseQuery,  endpoints: (build) => ({    // a theoretical endpoint where we only want to return data    // if request was performed past a certain date    getRecentPosts: build.query({      query: () => 'posts',      transformResponse: (returnValue, meta) => {        // `meta` here contains our added `requestId` & `timestamp`, as well as        // `request` & `response` from fetchBaseQuery's meta object.        // These properties can be used to transform the response as desired.        if (!meta) return []        return returnValue.filter(          (post) => post.timestamp >= meta.timestamp - DAY_MS,        )      },    }),  }),})
```

### Constructing a Dynamic Base URL using Redux state[​](#constructing-a-dynamic-base-url-using-redux-state "Direct link to Constructing a Dynamic Base URL using Redux state")

In some cases, you may wish to have a dynamically altered base url determined from a property in your Redux state. A `baseQuery` has access to a [`getState`](/rtk-query/api/createApi#basequery-function-arguments) method that provides the current store state at the time it is called. This can be used to construct the desired url using a partial url string, and the appropriate data from your store state.

-   TypeScript
-   JavaScript

Dynamically generated Base URL example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import type {  BaseQueryFn,  FetchArgs,  FetchBaseQueryError,} from '@reduxjs/toolkit/query/react'import type { Post } from './types'import { selectProjectId } from './projectSlice'import type { RootState } from '../store'const rawBaseQuery = fetchBaseQuery({  baseUrl: 'www.my-cool-site.com/',})const dynamicBaseQuery: BaseQueryFn<  string | FetchArgs,  unknown,  FetchBaseQueryError> = async (args, api, extraOptions) => {  const projectId = selectProjectId(api.getState() as RootState)  // gracefully handle scenarios where data to generate the URL is missing  if (!projectId) {    return {      error: {        status: 400,        statusText: 'Bad Request',        data: 'No project ID received',      },    }  }  const urlEnd = typeof args === 'string' ? args : args.url  // construct a dynamically generated portion of the url  const adjustedUrl = `project/${projectId}/${urlEnd}`  const adjustedArgs =    typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }  // provide the amended url and other params to the raw base query  return rawBaseQuery(adjustedArgs, api, extraOptions)}export const api = createApi({  baseQuery: dynamicBaseQuery,  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => 'posts',    }),  }),})export const { useGetPostsQuery } = api/*  Using `useGetPostsQuery()` where a `projectId` of 500 is in the redux state will result in  a request being sent to www.my-cool-site.com/project/500/posts*/
```

Dynamically generated Base URL example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import { selectProjectId } from './projectSlice'const rawBaseQuery = fetchBaseQuery({  baseUrl: 'www.my-cool-site.com/',})const dynamicBaseQuery = async (args, api, extraOptions) => {  const projectId = selectProjectId(api.getState())  // gracefully handle scenarios where data to generate the URL is missing  if (!projectId) {    return {      error: {        status: 400,        statusText: 'Bad Request',        data: 'No project ID received',      },    }  }  const urlEnd = typeof args === 'string' ? args : args.url  // construct a dynamically generated portion of the url  const adjustedUrl = `project/${projectId}/${urlEnd}`  const adjustedArgs =    typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }  // provide the amended url and other params to the raw base query  return rawBaseQuery(adjustedArgs, api, extraOptions)}export const api = createApi({  baseQuery: dynamicBaseQuery,  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',    }),  }),})export const { useGetPostsQuery } = api/*  Using `useGetPostsQuery()` where a `projectId` of 500 is in the redux state will result in  a request being sent to www.my-cool-site.com/project/500/posts*/
```

## Examples - `transformResponse`[​](#examples---transformresponse "Direct link to examples---transformresponse")

### Unpacking deeply nested GraphQL data[​](#unpacking-deeply-nested-graphql-data "Direct link to Unpacking deeply nested GraphQL data")

-   TypeScript
-   JavaScript

GraphQL transformation example

```
import { createApi } from '@reduxjs/toolkit/query'import { graphqlBaseQuery, gql } from './graphqlBaseQuery'interface Post {  id: number  title: string}export const api = createApi({  baseQuery: graphqlBaseQuery({    baseUrl: '/graphql',  }),  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => ({        body: gql`          query {            posts {              data {                id                title              }            }          }        `,      }),      transformResponse: (response: { posts: { data: Post[] } }) =>        response.posts.data,    }),  }),})
```

GraphQL transformation example

```
import { createApi } from '@reduxjs/toolkit/query'import { graphqlBaseQuery, gql } from './graphqlBaseQuery'export const api = createApi({  baseQuery: graphqlBaseQuery({    baseUrl: '/graphql',  }),  endpoints: (build) => ({    getPosts: build.query({      query: () => ({        body: gql`          query {            posts {              data {                id                title              }            }          }        `,      }),      transformResponse: (response) => response.posts.data,    }),  }),})
```

### Normalizing data with `createEntityAdapter`[​](#normalizing-data-with-createentityadapter "Direct link to normalizing-data-with-createentityadapter")

In the example below, `transformResponse` is used in conjunction with [`createEntityAdapter`](/api/createEntityAdapter) to normalize the data before storing it in the cache.

For a response such as:

```
[  { id: 1, name: 'Harry' },  { id: 2, name: 'Ron' },  { id: 3, name: 'Hermione' },]
```

The normalized cache data will be stored as:

```
{  ids: [1, 3, 2],  entities: {    1: { id: 1, name: "Harry" },    2: { id: 2, name: "Ron" },    3: { id: 3, name: "Hermione" },  }}
```

-   TypeScript
-   JavaScript

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import { createEntityAdapter } from '@reduxjs/toolkit'import type { EntityState } from '@reduxjs/toolkit'export interface Post {  id: number  name: string}const postsAdapter = createEntityAdapter<Post>({  sortComparer: (a, b) => a.name.localeCompare(b.name),})export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPosts: build.query<EntityState<Post, number>, void>({      query: () => `posts`,      transformResponse(response: Post[]) {        return postsAdapter.addMany(postsAdapter.getInitialState(), response)      },    }),  }),})export const { useGetPostsQuery } = api
```

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import { createEntityAdapter } from '@reduxjs/toolkit'const postsAdapter = createEntityAdapter({  sortComparer: (a, b) => a.name.localeCompare(b.name),})export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: (build) => ({    getPosts: build.query({      query: () => `posts`,      transformResponse(response) {        return postsAdapter.addMany(postsAdapter.getInitialState(), response)      },    }),  }),})export const { useGetPostsQuery } = api
```

## Examples - `queryFn`[​](#examples---queryfn "Direct link to examples---queryfn")

### Using a Third-Party SDK[​](#using-a-third-party-sdk "Direct link to Using a Third-Party SDK")

Many services like Firebase and Supabase provide their own SDK to make requests. You can use those SDK methods in a `queryFn`:

Basic Third-Party SDK

```
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'import { supabase } from './supabaseApi'export const supabaseApi = createApi({  reducerPath: 'supabaseApi',  baseQuery: fakeBaseQuery(),  endpoints: (build) => ({    getBlogs: build.query({      queryFn: async () => {        // Supabase conveniently already has `data` and `error` fields        const { data, error } = await supabase.from('blogs').select()        if (error) {          return { error }        }        return { data }      },    }),  }),})
```

You could also try creating a custom base query that uses the SDK, and define endpoints that pass method names or args into that base query.

### Using a no-op queryFn[​](#using-a-no-op-queryfn "Direct link to Using a no-op queryFn")

In certain scenarios, you may wish to have a `query` or `mutation` where sending a request or returning data is not relevant for the situation. Such a scenario would be to leverage the `invalidatesTags` property to force re-fetch specific `tags` that have been provided to the cache.

See also ["providing errors to the cache"](/rtk-query/usage/automated-refetching#providing-errors-to-the-cache) to see additional detail and an example for such a scenario to 'refetch errored queries'.

-   TypeScript
-   JavaScript

Using a no-op queryFn

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Post, User } from './types'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query<Post[], void>({      query: () => 'posts',      providesTags: ['Post'],    }),    getUsers: build.query<User[], void>({      query: () => 'users',      providesTags: ['User'],    }),    refetchPostsAndUsers: build.mutation<null, void>({      // The query is not relevant here, so a `null` returning `queryFn` is used      queryFn: () => ({ data: null }),      // This mutation takes advantage of tag invalidation behavior to trigger      // any queries that provide the 'Post' or 'User' tags to re-fetch if the queries      // are currently subscribed to the cached data      invalidatesTags: ['Post', 'User'],    }),  }),})
```

Using a no-op queryFn

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Post', 'User'],  endpoints: (build) => ({    getPosts: build.query({      query: () => 'posts',      providesTags: ['Post'],    }),    getUsers: build.query({      query: () => 'users',      providesTags: ['User'],    }),    refetchPostsAndUsers: build.mutation({      // The query is not relevant here, so a `null` returning `queryFn` is used      queryFn: () => ({ data: null }),      // This mutation takes advantage of tag invalidation behavior to trigger      // any queries that provide the 'Post' or 'User' tags to re-fetch if the queries      // are currently subscribed to the cached data      invalidatesTags: ['Post', 'User'],    }),  }),})
```

### Streaming data with no initial request[​](#streaming-data-with-no-initial-request "Direct link to Streaming data with no initial request")

RTK Query provides the ability for an endpoint to send an initial request for data, followed up with recurring [streaming updates](/rtk-query/usage/streaming-updates) that perform further updates to the cached data as the updates occur. However, the initial request is optional, and you may wish to use streaming updates without any initial request fired off.

In the example below, a `queryFn` is used to populate the cache data with an empty array, with no initial request sent. The array is later populated using streaming updates via the [`onCacheEntryAdded`](/rtk-query/api/createApi#oncacheentryadded) endpoint option, updating the cached data as it is received.

-   TypeScript
-   JavaScript

Streaming data with no initial request

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { Message } from './types'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Message'],  endpoints: (build) => ({    streamMessages: build.query<Message[], void>({      // The query is not relevant here as the data will be provided via streaming updates.      // A queryFn returning an empty array is used, with contents being populated via      // streaming updates below as they are received.      queryFn: () => ({ data: [] }),      async onCacheEntryAdded(arg, { updateCachedData, cacheEntryRemoved }) {        const ws = new WebSocket('ws://localhost:8080')        // populate the array with messages as they are received from the websocket        ws.addEventListener('message', (event) => {          updateCachedData((draft) => {            draft.push(JSON.parse(event.data))          })        })        await cacheEntryRemoved        ws.close()      },    }),  }),})
```

Streaming data with no initial request

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  tagTypes: ['Message'],  endpoints: (build) => ({    streamMessages: build.query({      // The query is not relevant here as the data will be provided via streaming updates.      // A queryFn returning an empty array is used, with contents being populated via      // streaming updates below as they are received.      queryFn: () => ({ data: [] }),      async onCacheEntryAdded(arg, { updateCachedData, cacheEntryRemoved }) {        const ws = new WebSocket('ws://localhost:8080')        // populate the array with messages as they are received from the websocket        ws.addEventListener('message', (event) => {          updateCachedData((draft) => {            draft.push(JSON.parse(event.data))          })        })        await cacheEntryRemoved        ws.close()      },    }),  }),})
```

### Performing multiple requests with a single query[​](#performing-multiple-requests-with-a-single-query "Direct link to Performing multiple requests with a single query")

In the example below, a query is written to fetch all posts for a random user. This is done using a first request for a random user, followed by getting all posts for that user. Using `queryFn` allows the two requests to be included within a single query, avoiding having to chain that logic within component code.

-   TypeScript
-   JavaScript

Performing multiple requests with a single query

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'import type { Post, User } from './types'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/ ' }),  endpoints: (build) => ({    getRandomUserPosts: build.query<Post, void>({      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {        // get a random user        const randomResult = await fetchWithBQ('users/random')        if (randomResult.error)          return { error: randomResult.error as FetchBaseQueryError }        const user = randomResult.data as User        const result = await fetchWithBQ(`user/${user.id}/posts`)        return result.data          ? { data: result.data as Post }          : { error: result.error as FetchBaseQueryError }      },    }),  }),})
```

Performing multiple requests with a single query

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/ ' }),  endpoints: (build) => ({    getRandomUserPosts: build.query({      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {        // get a random user        const randomResult = await fetchWithBQ('users/random')        if (randomResult.error) return { error: randomResult.error }        const user = randomResult.data        const result = await fetchWithBQ(`user/${user.id}/posts`)        return result.data ? { data: result.data } : { error: result.error }      },    }),  }),})
```
