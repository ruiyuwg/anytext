On this page

Internally, `createApi` will call [the Redux Toolkit `createSlice` API](https://redux-toolkit.js.org/api/createSlice) to generate a slice reducer and corresponding action creators with the appropriate logic for caching fetched data. It also automatically generates a custom Redux middleware that manages subscription counts and cache lifetimes.

The generated slice reducer and the middleware both need to be added to your Redux store setup in `configureStore` in order to work correctly:

-   TypeScript
-   JavaScript

src/store.ts

```
import { configureStore } from '@reduxjs/toolkit'import { setupListeners } from '@reduxjs/toolkit/query'import { pokemonApi } from './services/pokemon'export const store = configureStore({  reducer: {    // Add the generated reducer as a specific top-level slice    [pokemonApi.reducerPath]: pokemonApi.reducer,  },  // Adding the api middleware enables caching, invalidation, polling,  // and other useful features of `rtk-query`.  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware().concat(pokemonApi.middleware),})// configure listeners using the provided defaultssetupListeners(store.dispatch)
```

src/store.js

```
import { configureStore } from '@reduxjs/toolkit'import { setupListeners } from '@reduxjs/toolkit/query'import { pokemonApi } from './services/pokemon'export const store = configureStore({  reducer: {    // Add the generated reducer as a specific top-level slice    [pokemonApi.reducerPath]: pokemonApi.reducer,  },  // Adding the api middleware enables caching, invalidation, polling,  // and other useful features of `rtk-query`.  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware().concat(pokemonApi.middleware),})// configure listeners using the provided defaultssetupListeners(store.dispatch)
```

## `reducerPath`[​](#reducerpath "Direct link to reducerpath")

```
reducerPath: string
```

Contains the `reducerPath` option provided to `createApi`. Use this as the root state key when adding the `reducer` function to the store so that the rest of the generated API logic can find the state correctly.

## `reducer`[​](#reducer "Direct link to reducer")

```
reducer: Reducer
```

A standard Redux slice reducer function containing the logic for updating the cached data. Add this to the Redux store using the `reducerPath` you provided as the root state key.

## `middleware`[​](#middleware "Direct link to middleware")

```
middleware: Middleware
```

A custom Redux middleware that contains logic for managing caching, invalidation, subscriptions, polling, and more. Add this to the store setup after other middleware.
