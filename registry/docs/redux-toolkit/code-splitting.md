On this page

## Overview[​](#overview "Direct link to Overview")

By default, an RTK Query API definition normally has all of the endpoint definitions in a single file. However, in larger applications this can result in very large files that may be harder to maintain. It also means that all of the relevant code is being imported right away.

RTK Query allows dynamically injecting endpoint definitions into an existing API service object. This enables splitting up endpoints into multiple files for maintainability, as well as lazy-loading endpoint definitions and associated code to trim down initial bundle sizes. This can be very beneficial for larger applications that may have _many_ endpoints.

## Injecting Endpoints[​](#injecting-endpoints "Direct link to Injecting Endpoints")

`api.injectEndpoints` accepts a collection of endpoint definitions (same as `createApi`), as well as an optional `overrideExisting` parameter.

Calling `api.injectEndpoints` will inject the endpoints into the original API service object, modifying it immediately. It returns **the _same_ API service object reference**. If you're using TypeScript, the return value has the TS types for the new endpoints included. (Unfortunately, it cannot modify the types for the original API reference.)

A typical approach would be to have one empty central API slice definition:

-   TypeScript
-   JavaScript

Basic setup

```
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooksimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'// initialize an empty api service that we'll inject endpoints into later as neededexport const emptySplitApi = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: () => ({}),})
```

Basic setup

```
// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooksimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'// initialize an empty api service that we'll inject endpoints into later as neededexport const emptySplitApi = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  endpoints: () => ({}),})
```

and then inject the api endpoints in other files and export them from there - that way you will be sure to always import the endpoints in a way that they are definitely injected.

-   TypeScript
-   JavaScript

Injecting & exporting additional endpoints

```
import { emptySplitApi } from './emptySplitApi'// NOTE: these are the _SAME_ API reference!const extendedApi = emptySplitApi.injectEndpoints({  endpoints: (build) => ({    example: build.query({      query: () => 'test',    }),  }),  overrideExisting: false,})export const { useExampleQuery } = extendedApi
```

Injecting & exporting additional endpoints

```
import { emptySplitApi } from './emptySplitApi'// NOTE: these are the _SAME_ API reference!const extendedApi = emptySplitApi.injectEndpoints({  endpoints: (build) => ({    example: build.query({      query: () => 'test',    }),  }),  overrideExisting: false,})export const { useExampleQuery } = extendedApi
```

tip

If you inject an endpoint that already exists and don't explicitly specify `overrideExisting: true`, the endpoint will not be overridden. In development mode, you will get a warning about this if `overrideExisting` is set to `false`, and an error will be throw if set to `'throw'`.

## Enhancing Endpoints[​](#enhancing-endpoints "Direct link to Enhancing Endpoints")

Sometimes you may also need to modify an existing API definition, such as adding additional tag types, or providing additional configuration options to a given endpoint.

`api.enhanceEndpoints` returns an updated and enhanced version of the API slice object, containing the combined endpoint definitions.

This is primarily useful for taking an API slice object that was code-generated from an API schema file like OpenAPI, and adding additional specific hand-written configuration for cache invalidation management on top of the generated endpoint definitions.

For example, `enhanceEndpoints` can be used to modify caching behavior by changing the values of `providesTags`, `invalidatesTags`, and `keepUnusedDataFor`:

-   TypeScript
-   JavaScript

```
import { api } from './api'const enhancedApi = api.enhanceEndpoints({  addTagTypes: ['User'],  endpoints: {    getUserByUserId: {      providesTags: ['User'],    },    patchUserByUserId: {      invalidatesTags: ['User'],    },    // alternatively, define a function which is called with the endpoint definition as an argument    getUsers(endpoint) {      endpoint.providesTags = ['User']      endpoint.keepUnusedDataFor = 120    },  },})
```

```
import { api } from './api'const enhancedApi = api.enhanceEndpoints({  addTagTypes: ['User'],  endpoints: {    getUserByUserId: {      providesTags: ['User'],    },    patchUserByUserId: {      invalidatesTags: ['User'],    },    // alternatively, define a function which is called with the endpoint definition as an argument    getUsers(endpoint) {      endpoint.providesTags = ['User']      endpoint.keepUnusedDataFor = 120    },  },})
```
