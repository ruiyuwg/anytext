On this page

What You'll Learn

-   How to set up and use Redux Toolkit's "RTK Query" data fetching functionality

Prerequisites

-   Understanding of [Redux terms and concepts](https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow)

## Introduction[​](#introduction "Direct link to Introduction")

Welcome to the Redux Toolkit Query tutorial! **This tutorial will briefly introduce you to Redux Toolkit's "RTK Query" data fetching capability and teach you how to start using it correctly**.

info

For a more in-depth tutorial on RTK Query, see the full ["Redux Essentials" tutorial](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics) on the Redux core docs site.

RTK Query is an advanced data fetching and caching tool, designed to simplify common cases for loading data in a web application. RTK Query itself is built on top of the Redux Toolkit core, and leverages RTK's APIs like [`createSlice`](/api/createSlice) and [`createAsyncThunk`](/api/createAsyncThunk) to implement its capabilities.

RTK Query is included in the `@reduxjs/toolkit` package as an additional addon. You are not required to use the RTK Query APIs when you use Redux Toolkit, but we think many users will benefit from RTK Query's data fetching and caching in their apps.

### How to Read This Tutorial[​](#how-to-read-this-tutorial "Direct link to How to Read This Tutorial")

For this tutorial, we assume that you're using Redux Toolkit with React, but you can also use it with other UI layers as well. The examples are based on [a typical Create-React-App folder structure](https://create-react-app.dev/docs/folder-structure) where all the application code is in a `src`, but the patterns can be adapted to whatever project or folder setup you're using.

## Setting up your store and API service[​](#setting-up-your-store-and-api-service "Direct link to Setting up your store and API service")

To see how RTK Query works, let's walk through a basic usage example. For this example, we'll assume you're using React and want to make use of RTK Query's auto-generated React hooks.

### Create an API service[​](#create-an-api-service "Direct link to Create an API service")

First, we'll create a service definition that queries the publicly available [PokeAPI](https://pokeapi.co/).

-   TypeScript
-   JavaScript

src/services/pokemon.ts

```
// Need to use the React-specific entry point to import createApiimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'import type { Pokemon } from './types'// Define a service using a base URL and expected endpointsexport const pokemonApi = createApi({  reducerPath: 'pokemonApi',  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),  endpoints: (builder) => ({    getPokemonByName: builder.query<Pokemon, string>({      query: (name) => `pokemon/${name}`,    }),  }),})// Export hooks for usage in functional components, which are// auto-generated based on the defined endpointsexport const { useGetPokemonByNameQuery } = pokemonApi
```

src/services/pokemon.js

```
// Need to use the React-specific entry point to import createApiimport { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'// Define a service using a base URL and expected endpointsexport const pokemonApi = createApi({  reducerPath: 'pokemonApi',  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),  endpoints: (builder) => ({    getPokemonByName: builder.query({      query: (name) => `pokemon/${name}`,    }),  }),})// Export hooks for usage in functional components, which are// auto-generated based on the defined endpointsexport const { useGetPokemonByNameQuery } = pokemonApi
```

With RTK Query, you usually define your entire API definition in one place. This is most likely different from what you see with other libraries such as `swr` or `react-query`, and there are several reasons for that. Our perspective is that it's _much_ easier to keep track of how requests, cache invalidation, and general app configuration behave when they're all in one central location in comparison to having X number of custom hooks in different files throughout your application.

tip

Typically, you should only have one API slice per base URL that your application needs to communicate with. For example, if your site fetches data from both `/api/posts` and `/api/users`, you would have a single API slice with `/api/` as the base URL, and separate endpoint definitions for `posts` and `users`. This allows you to effectively take advantage of [automated re-fetching](/rtk-query/usage/automated-refetching) by defining [tag](/rtk-query/usage/automated-refetching#tags) relationships across endpoints.

For maintainability purposes, you may wish to split up endpoint definitions across multiple files, while still maintaining a single API slice which includes all of these endpoints. See [code splitting](/rtk-query/usage/code-splitting) for how you can use the `injectEndpoints` property to inject API endpoints from other files into a single API slice definition.

### Add the service to your store[​](#add-the-service-to-your-store "Direct link to Add the service to your store")

An RTKQ service generates a "slice reducer" that should be included in the Redux root reducer, and a custom middleware that handles the data fetching. Both need to be added to the Redux store.

-   TypeScript
-   JavaScript

src/store.ts

```
import { configureStore } from '@reduxjs/toolkit'// Or from '@reduxjs/toolkit/query/react'import { setupListeners } from '@reduxjs/toolkit/query'import { pokemonApi } from './services/pokemon'export const store = configureStore({  reducer: {    // Add the generated reducer as a specific top-level slice    [pokemonApi.reducerPath]: pokemonApi.reducer,  },  // Adding the api middleware enables caching, invalidation, polling,  // and other useful features of `rtk-query`.  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware().concat(pokemonApi.middleware),})// optional, but required for refetchOnFocus/refetchOnReconnect behaviors// see `setupListeners` docs - takes an optional callback as the 2nd arg for customizationsetupListeners(store.dispatch)
```

src/store.js

```
import { configureStore } from '@reduxjs/toolkit'// Or from '@reduxjs/toolkit/query/react'import { setupListeners } from '@reduxjs/toolkit/query'import { pokemonApi } from './services/pokemon'export const store = configureStore({  reducer: {    // Add the generated reducer as a specific top-level slice    [pokemonApi.reducerPath]: pokemonApi.reducer,  },  // Adding the api middleware enables caching, invalidation, polling,  // and other useful features of `rtk-query`.  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware().concat(pokemonApi.middleware),})// optional, but required for refetchOnFocus/refetchOnReconnect behaviors// see `setupListeners` docs - takes an optional callback as the 2nd arg for customizationsetupListeners(store.dispatch)
```

### Wrap your application with the `Provider`[​](#wrap-your-application-with-the-provider "Direct link to wrap-your-application-with-the-provider")

If you haven't already done so, follow the standard pattern for providing the Redux store to the rest of your React application component tree:

-   TypeScript
-   JavaScript

src/index.tsx

```
import * as React from 'react'import { createRoot } from 'react-dom/client'import { Provider } from 'react-redux'import App from './App'import { store } from './store'const container = document.getElementById('root')if (container) {  const root = createRoot(container)  root.render(    <Provider store={store}>      <App />    </Provider>,  )} else {  throw new Error(    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",  )}
```

src/index.jsx

```
import * as React from 'react'import { createRoot } from 'react-dom/client'import { Provider } from 'react-redux'import App from './App'import { store } from './store'const container = document.getElementById('root')if (container) {  const root = createRoot(container)  root.render(    <Provider store={store}>      <App />    </Provider>,  )} else {  throw new Error(    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",  )}
```

## Use the query in a component[​](#use-the-query-in-a-component "Direct link to Use the query in a component")

Once a service has been defined, you can import the hooks to make a request.

-   TypeScript
-   JavaScript

src/App.tsx

```
import * as React from 'react'import { useGetPokemonByNameQuery } from './services/pokemon'export default function App() {  // Using a query hook automatically fetches data and returns query values  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')  // Individual hooks are also accessible under the generated endpoints:  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')  return (    <div className="App">      {error ? (        <>Oh no, there was an error</>      ) : isLoading ? (        <>Loading...</>      ) : data ? (        <>          <h3>{data.species.name}</h3>          <img src={data.sprites.front_shiny} alt={data.species.name} />        </>      ) : null}    </div>  )}
```

src/App.jsx

```
import * as React from 'react'import { useGetPokemonByNameQuery } from './services/pokemon'export default function App() {  // Using a query hook automatically fetches data and returns query values  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')  // Individual hooks are also accessible under the generated endpoints:  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')  return (    <div className="App">      {error ? (        <>Oh no, there was an error</>      ) : isLoading ? (        <>Loading...</>      ) : data ? (        <>          <h3>{data.species.name}</h3>          <img src={data.sprites.front_shiny} alt={data.species.name} />        </>      ) : null}    </div>  )}
```

When making a request, you're able to track the state in several ways. You can always check `data`, `status`, and `error` to determine the right UI to render. In addition, `useQuery` also provides utility booleans like `isLoading`, `isFetching`, `isSuccess`, and `isError` for the latest request.

#### Basic Example[​](#basic-example "Direct link to Basic Example")

Okay, that's interesting... but what if you wanted to show multiple pokemon at the same time? What happens if multiple components load the same pokemon?

#### Advanced example[​](#advanced-example "Direct link to Advanced example")

RTK Query ensures that any component that subscribes to the same query will always use the same data. RTK Query automatically de-dupes requests so you don't have to worry about checking in-flight requests and performance optimizations on your end. Let's evaluate the sandbox below - make sure to check the Network panel in your browser's dev tools. You will see 3 requests, even though there are 4 subscribed components - `bulbasaur` only makes one request, and the loading state is synchronized between the two components. For fun, try changing the value of the dropdown from `Off` to `1s` to see this behavior continue when a query is re-ran.
