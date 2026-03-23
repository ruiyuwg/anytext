On this page

RTK Query supports rehydration via the [`extractRehydrationInfo`](/rtk-query/api/createApi#extractrehydrationinfo) option on [`createApi`](/rtk-query/api/createApi). This function is passed every dispatched action, and where it returns a value other than `undefined`, that value is used to rehydrate the API state for fulfilled & errored queries.

See also [Server Side Rendering](/rtk-query/usage/server-side-rendering).

info

Generally, persisting API slices is not recommended and instead, mechanisms like [`Cache-Control` Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) should be used in browsers to define cache behavior. Persisting and rehydrating an api slice might always leave the user with very stale data if the user has not visited the page for some time. Nonetheless, in environments like Native Apps, where there is no browser cache to take care of this, persistence might still be a viable option.

## Redux Persist[​](#redux-persist "Direct link to Redux Persist")

API state rehydration can be used in conjunction with [Redux Persist](https://github.com/rt2zz/redux-persist) by leveraging the `REHYDRATE` action type imported from `redux-persist`. This can be used out of the box with the `autoMergeLevel1` or `autoMergeLevel2` [state reconcilers](https://github.com/rt2zz/redux-persist#state-reconciler) when persisting the root reducer, or with the `autoMergeLevel1` reconciler when persisting just the api reducer.

-   TypeScript
-   JavaScript

redux-persist rehydration example

```
import type { Action } from '@reduxjs/toolkit'import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import { REHYDRATE } from 'redux-persist'type RootState = any // normally inferred from statefunction isHydrateAction(action: Action): action is Action<typeof REHYDRATE> & {  key: string  payload: RootState  err: unknown} {  return action.type === REHYDRATE}export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  // to prevent circular type issues, the return type needs to be annotated as any  extractRehydrationInfo(action, { reducerPath }): any {    if (isHydrateAction(action)) {      // when persisting the api reducer      if (action.key === 'key used with redux-persist') {        return action.payload      }      // When persisting the root reducer      return action.payload[api.reducerPath]    }  },  endpoints: (build) => ({    // omitted  }),})
```

redux-persist rehydration example

```
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import { REHYDRATE } from 'redux-persist'function isHydrateAction(action) {  return action.type === REHYDRATE}export const api = createApi({  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  // to prevent circular type issues, the return type needs to be annotated as any  extractRehydrationInfo(action, { reducerPath }) {    if (isHydrateAction(action)) {      // when persisting the api reducer      if (action.key === 'key used with redux-persist') {        return action.payload      }      // When persisting the root reducer      return action.payload[api.reducerPath]    }  },  endpoints: (build) => ({    // omitted  }),})
```
