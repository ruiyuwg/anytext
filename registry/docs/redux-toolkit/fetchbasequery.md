On this page

This is a very small wrapper around [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) that aims to simplify HTTP requests. It is not a full-blown replacement for `axios`, `superagent`, or any other more heavyweight library, but it will cover the vast majority of your HTTP request needs.

`fetchBaseQuery` is a factory function that generates a data fetching method compatible with RTK Query's `baseQuery` configuration option. It takes all standard options from fetch's [`RequestInit`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch) interface, as well as `baseUrl`, a `prepareHeaders` function, an optional `fetch` function, a `paramsSerializer` function, and a `timeout`.

## Basic Usage[​](#basic-usage "Direct link to Basic Usage")

To use it, import it when you are [creating an API service definition](/tutorials/rtk-query#create-an-api-service), call it as `fetchBaseQuery(options)`, and pass the result as the `baseQuery` field in `createApi`:

-   TypeScript
-   JavaScript

src/services/pokemon.ts

```
// Or from '@reduxjs/toolkit/query/react'import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'export const pokemonApi = createApi({  // Set the baseUrl for every endpoint below  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),  endpoints: (build) => ({    getPokemonByName: build.query({      // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur      query: (name: string) => `pokemon/${name}`,    }),    updatePokemon: build.mutation({      query: ({ name, patch }) => ({        url: `pokemon/${name}`,        // When performing a mutation, you typically use a method of        // PATCH/PUT/POST/DELETE for REST endpoints        method: 'PATCH',        // fetchBaseQuery automatically adds `content-type: application/json` to        // the Headers and calls `JSON.stringify(patch)`        body: patch,      }),    }),  }),})
```

src/services/pokemon.js

```
// Or from '@reduxjs/toolkit/query/react'import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'export const pokemonApi = createApi({  // Set the baseUrl for every endpoint below  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),  endpoints: (build) => ({    getPokemonByName: build.query({      // Will make a request like https://pokeapi.co/api/v2/pokemon/bulbasaur      query: (name) => `pokemon/${name}`,    }),    updatePokemon: build.mutation({      query: ({ name, patch }) => ({        url: `pokemon/${name}`,        // When performing a mutation, you typically use a method of        // PATCH/PUT/POST/DELETE for REST endpoints        method: 'PATCH',        // fetchBaseQuery automatically adds `content-type: application/json` to        // the Headers and calls `JSON.stringify(patch)`        body: patch,      }),    }),  }),})
```

## Signature[​](#signature "Direct link to Signature")

fetchBaseQuery signature

```
type FetchBaseQuery = (  args: FetchBaseQueryArgs,) => (  args: string | FetchArgs,  api: BaseQueryApi,  extraOptions: ExtraOptions,) => FetchBaseQueryResulttype FetchBaseQueryArgs = {  baseUrl?: string  prepareHeaders?: (    headers: Headers,    api: Pick<      BaseQueryApi,      'getState' | 'extra' | 'endpoint' | 'type' | 'forced'    > & { arg: string | FetchArgs },  ) => MaybePromise<Headers | void>  fetchFn?: (    input: RequestInfo,    init?: RequestInit | undefined,  ) => Promise<Response>  paramsSerializer?: (params: Record<string, any>) => string  isJsonContentType?: (headers: Headers) => boolean  jsonContentType?: string  timeout?: number} & RequestInittype FetchBaseQueryResult = Promise<  | {      data: any      error?: undefined      meta?: { request: Request; response: Response }    }  | {      error: FetchBaseQueryError      data?: undefined      meta?: { request: Request; response: Response }    }>type FetchBaseQueryError =  | {      /**       * * `number`:       *   HTTP status code       */      status: number      data: unknown    }  | {      /**       * * `"FETCH_ERROR"`:       *   An error that occurred during execution of `fetch` or the `fetchFn` callback option       **/      status: 'FETCH_ERROR'      data?: undefined      error: string    }  | {      /**       * * `"PARSING_ERROR"`:       *   An error happened during parsing.       *   Most likely a non-JSON-response was returned with the default `responseHandler` "JSON",       *   or an error occurred while executing a custom `responseHandler`.       **/      status: 'PARSING_ERROR'      originalStatus: number      data: string      error: string    }  | {      /**       * * `"TIMEOUT_ERROR"`:       *   Request timed out       **/      status: 'TIMEOUT_ERROR'      data?: undefined      error: string    }  | {      /**       * * `"CUSTOM_ERROR"`:       *   A custom error type that you can return from your `queryFn` where another error might not make sense.       **/      status: 'CUSTOM_ERROR'      data?: unknown      error: string    }
```

## Parameters[​](#parameters "Direct link to Parameters")

### `baseUrl`[​](#baseurl "Direct link to baseurl")

_(required)_

Typically a string like `https://api.your-really-great-app.com/v1/`. If you don't provide a `baseUrl`, it defaults to a relative path from where the request is being made. **You should most likely _always_ specify this**.

### `prepareHeaders`[​](#prepareheaders "Direct link to prepareheaders")

_(optional)_

Allows you to inject headers on every request. You can specify headers at the endpoint level, but you'll typically want to set common headers like `authorization` here. As a convenience mechanism, the second argument allows you to use `getState` to access your redux store in the event you store information you'll need there such as an auth token. Additionally, it provides access to `arg`, `extra`, `endpoint`, `type`, and `forced` to unlock more granular conditional behaviors.

You can mutate the `headers` argument directly, and returning it is optional.

prepareHeaders signature

```
type prepareHeaders = (  headers: Headers,  api: {    getState: () => unknown    arg: string | FetchArgs    extra: unknown    endpoint: string    type: 'query' | 'mutation'    forced: boolean | undefined  },) => Headers | void
```

### `paramsSerializer`[​](#paramsserializer "Direct link to paramsserializer")

_(optional)_

A function that can be used to apply custom transformations to the data passed into [`params`](#setting-the-query-string). If you don't provide this, `params` will be stripped of keys with `undefined` values, and then passed to `new URLSearchParams()`. With some API integrations, you may need to leverage this to use something like the [`query-string`](https://github.com/sindresorhus/query-string) library to support different array types.

### `fetchFn`[​](#fetchfn "Direct link to fetchfn")

_(optional)_

A fetch function that overrides the default on the window. Can be useful in SSR environments where you may need to leverage `isomorphic-fetch` or `cross-fetch`.

### `timeout`[​](#timeout "Direct link to timeout")

_(optional)_

A number in milliseconds that represents the maximum time a request can take before timing out.

### `isJsonContentType`[​](#isjsoncontenttype "Direct link to isjsoncontenttype")

_(optional)_

A callback that receives a `Headers` object and determines the `body` field of the `FetchArgs` argument should be stringified via `JSON.stringify()`.

The default implementation inspects the `content-type` header, and will match values like `"application/json"` and `"application/vnd.api+json"`.

### `jsonContentType`[​](#jsoncontenttype "Direct link to jsoncontenttype")

_(optional)_

Used when automatically setting the `content-type` header for a request with a jsonifiable body that does not have an explicit `content-type` header. Defaults to `"application/json"`.

## Common Usage Patterns[​](#common-usage-patterns "Direct link to Common Usage Patterns")

### Setting default headers on requests[​](#setting-default-headers-on-requests "Direct link to Setting default headers on requests")

The most common use case for `prepareHeaders` would be to automatically include `authorization` headers for your API requests.

-   TypeScript
-   JavaScript

```
import { fetchBaseQuery } from '@reduxjs/toolkit/query'import type { RootState } from './store'const baseQuery = fetchBaseQuery({  baseUrl: '/',  prepareHeaders: (headers, { getState }) => {    const token = (getState() as RootState).auth.token    // If we have a token set in state, let's assume that we should be passing it.    if (token) {      headers.set('authorization', `Bearer ${token}`)    }    return headers  },})
```

```
import { fetchBaseQuery } from '@reduxjs/toolkit/query'const baseQuery = fetchBaseQuery({  baseUrl: '/',  prepareHeaders: (headers, { getState }) => {    const token = getState().auth.token    // If we have a token set in state, let's assume that we should be passing it.    if (token) {      headers.set('authorization', `Bearer ${token}`)    }    return headers  },})
```

## Individual query options[​](#individual-query-options "Direct link to Individual query options")

There is more behavior that you can define on a per-request basis. The `query` field may return an object containing any of the default `fetch` options available to the `RequestInit` interface, as well as these additional options:

-   TypeScript
-   JavaScript

endpoint request options

```
interface FetchArgs extends RequestInit {  url: string  params?: Record<string, any>  body?: any  responseHandler?:    | 'json'    | 'text'    | `content-type`    | ((response: Response) => Promise<any>)  validateStatus?: (response: Response, body: any) => boolean  timeout?: number}const defaultValidateStatus = (response: Response) =>  response.status >= 200 && response.status <= 299
```

endpoint request options

```
const defaultValidateStatus = (response) =>  response.status >= 200 && response.status <= 299
```

### Setting the body[​](#setting-the-body "Direct link to Setting the body")

By default, `fetchBaseQuery` assumes that every request you make will be `json`, so in those cases all you have to do is set the `url` and pass a `body` object when appropriate. For other implementations, you can manually set the `Headers` to specify the content type.

#### json[​](#json "Direct link to json")

```
 // omitted  endpoints: (build) => ({    updateUser: build.query({      query: (user: Record<string, string>) => ({        url: `users`,        method: 'PUT',        body: user // Body is automatically converted to json with the correct headers      }),    }),
```

#### text[​](#text "Direct link to text")

```
 // omitted  endpoints: (build) => ({    updateUser: build.query({      query: (user: Record<string, string>) => ({        url: `users`,        method: 'PUT',        headers: {            'content-type': 'text/plain',        },        body: user      }),    }),
```

### Setting the query string[​](#setting-the-query-string "Direct link to Setting the query string")

`fetchBaseQuery` provides a simple mechanism that converts an `object` to a serialized query string by passing the object to `new URLSearchParms()`. If this doesn't suit your needs, you have two options:

1.  Pass the `paramsSerializer` option to `fetchBaseQuery` to apply custom transformations
2.  Build your own querystring and set it in the `url`

```
 // omitted  endpoints: (build) => ({    updateUser: build.query({      query: (user: Record<string, string>) => ({        url: `users`,        // Assuming no `paramsSerializer` is specified, the user object is automatically converted        // and produces a url like /api/users?first_name=test&last_name=example        params: user      }),    }),
```

### Parsing a Response[​](#parsing-a-response "Direct link to Parsing a Response")

By default, `fetchBaseQuery` assumes that every `Response` you get will be parsed as `json`. In the event that you don't want that to happen, you can customize the behavior by specifying an alternative response handler like `text`, or take complete control and use a custom function that accepts the raw `Response` object — allowing you to use any [`Response` method](https://developer.mozilla.org/en-US/docs/Web/API/Response).

The `responseHandler` field can be either:

-   TypeScript
-   JavaScript

```
type ResponseHandler =  | 'content-type'  | 'json'  | 'text'  | ((response: Response) => Promise<any>)
```

The `"json"` and `"text"` values instruct `fetchBaseQuery` to the corresponding fetch response methods for reading the body. `content-type` will check the header field to first determine if this appears to be JSON, and then use one of those two methods. The callback allows you to process the body yourself.

-   TypeScript
-   JavaScript

Parse a Response as text

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'export const customApi = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),  endpoints: (build) => ({    getUsers: build.query({      query: () => ({        url: `users`,        // This is the same as passing 'text'        responseHandler: (response) => response.text(),      }),    }),  }),})
```

Parse a Response as text

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'export const customApi = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),  endpoints: (build) => ({    getUsers: build.query({      query: () => ({        url: `users`,        // This is the same as passing 'text'        responseHandler: (response) => response.text(),      }),    }),  }),})
```

Note about responses that return an undefined body

If you make a `json` request to an API that only returns a `200` with an undefined body, `fetchBaseQuery` will pass that through as `undefined` and will not try to parse it as `json`. This can be common with some APIs, especially on `delete` requests.

#### Default response handler[​](#default-response-handler "Direct link to Default response handler")

The default response handler is `"json"`, which is equivalent to the following function:

-   TypeScript
-   JavaScript

Default responseHandler

```
const defaultResponseHandler = async (res: Response) => {  const text = await res.text()  return text.length ? JSON.parse(text) : null}
```

Default responseHandler

```
const defaultResponseHandler = async (res) => {  const text = await res.text()  return text.length ? JSON.parse(text) : null}
```

### Handling non-standard Response status codes[​](#handling-non-standard-response-status-codes "Direct link to Handling non-standard Response status codes")

By default, `fetchBaseQuery` will `reject` any `Response` that does not have a status code of `2xx` and set it to `error`. This is the same behavior you've most likely experienced with `axios` and other popular libraries. In the event that you have a non-standard API you're dealing with, you can use the `validateStatus` option to customize this behavior.

-   TypeScript
-   JavaScript

Using a custom validateStatus

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'export const customApi = createApi({  // Set the baseUrl for every endpoint below  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),  endpoints: (build) => ({    getUsers: build.query({      query: () => ({        url: `users`,        // Example: we have a backend API always returns a 200,        // but sets an `isError` property when there is an error.        validateStatus: (response, result) =>          response.status === 200 && !result.isError,      }),    }),  }),})
```

Using a custom validateStatus

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'export const customApi = createApi({  // Set the baseUrl for every endpoint below  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),  endpoints: (build) => ({    getUsers: build.query({      query: () => ({        url: `users`,        // Example: we have a backend API always returns a 200,        // but sets an `isError` property when there is an error.        validateStatus: (response, result) =>          response.status === 200 && !result.isError,      }),    }),  }),})
```

### Adding a custom timeout to requests[​](#adding-a-custom-timeout-to-requests "Direct link to Adding a custom timeout to requests")

By default, `fetchBaseQuery` has no default timeout value set, meaning your requests will stay pending until your api resolves the request(s) or it reaches the browser's default timeout (normally 5 minutes). Most of the time, this isn't what you'll want. When using `fetchBaseQuery`, you have the ability to set a `timeout` on the `baseQuery` or on individual endpoints. When specifying both options, the endpoint value will take priority.

-   TypeScript
-   JavaScript

Setting a timeout value

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'export const api = createApi({  // Set a default timeout of 10 seconds  baseQuery: fetchBaseQuery({ baseUrl: '/api/', timeout: 10000 }),  endpoints: (build) => ({    getUsers: build.query({      query: () => ({        url: `users`,        // Example: we know the users endpoint is _really fast_ because it's always cached.        // We can assume if it's over > 1000ms, something is wrong and we should abort the request.        timeout: 1000,      }),    }),  }),})
```

Setting a timeout value

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'export const api = createApi({  // Set a default timeout of 10 seconds  baseQuery: fetchBaseQuery({ baseUrl: '/api/', timeout: 10000 }),  endpoints: (build) => ({    getUsers: build.query({      query: () => ({        url: `users`,        // Example: we know the users endpoint is _really fast_ because it's always cached.        // We can assume if it's over > 1000ms, something is wrong and we should abort the request.        timeout: 1000,      }),    }),  }),})
```
