On this page

## Server Side Rendering with Next.js[​](#server-side-rendering-with-nextjs "Direct link to Server Side Rendering with Next.js")

RTK Query supports Server Side Rendering (SSR) with [Next.js](https://nextjs.org/) via [rehydration](/rtk-query/usage/persistence-and-rehydration) in combination with [next-redux-wrapper](https://github.com/kirill-konshin/next-redux-wrapper).

The workflow is as follows:

-   Set up `next-redux-wrapper`
    
-   In `getStaticProps` or `getServerSideProps`:
    
    -   Pre-fetch all queries via the `initiate` actions, e.g. `store.dispatch(api.endpoints.getPokemonByName.initiate(name))`
    -   Wait for each query to finish using `await Promise.all(dispatch(api.util.getRunningQueriesThunk()))`
-   In your `createApi` call, configure rehydration using the `extractRehydrationInfo` option:
    
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
    

An example repo using `next.js` is available [here](https://github.com/phryneas/ssr-experiments/tree/main/nextjs-blog).

tip

While memory leaks are not anticipated, once a render is sent to the client and the store is being removed from memory, you may wish to also call `store.dispatch(api.util.resetApiState())` to ensure that no rogue timers are left running.

tip

In order to avoid providing stale data with Static Site Generation (SSG), you may wish to set [`refetchOnMountOrArgChange`](/rtk-query/api/createApi#refetchonmountorargchange) to a reasonable value such as 900 (seconds) in order to allow data to be re-fetched when accessed if it has been that long since the page was generated.

## Server Side Rendering elsewhere[​](#server-side-rendering-elsewhere "Direct link to Server Side Rendering elsewhere")

If you are not using `next.js`, and the example above cannot be adapted to your SSR framework, an `unstable__` marked approach is available to support SSR scenarios where you need to execute async code during render and not safely in an effect. This is a similar approach to using [`getDataFromTree`](https://www.apollographql.com/docs/react/performance/server-side-rendering/#executing-queries-with-getdatafromtree) with [Apollo](https://www.apollographql.com/docs/).

The workflow is as follows:

-   Create a version of `createApi` that performs asynchronous work during render:
    
    -   TypeScript
    -   JavaScript
    
    ```
    import {  buildCreateApi,  coreModule,  reactHooksModule,} from '@reduxjs/toolkit/query/react'const createApi = buildCreateApi(  coreModule(),  reactHooksModule({ unstable__sideEffectsInRender: true }),)
    ```
    
    ```
    import {  buildCreateApi,  coreModule,  reactHooksModule,} from '@reduxjs/toolkit/query/react'const createApi = buildCreateApi(  coreModule(),  reactHooksModule({ unstable__sideEffectsInRender: true }),)
    ```
    
-   Use your custom `createApi` when calling `const api = createApi({...})`
    
-   Wait for all queries to finish using `await Promise.all(dispatch(api.util.getRunningQueriesThunk()))` before performing the next render cycle
