On this page

Returns an array containing the default list of middleware.

## Intended Usage[​](#intended-usage "Direct link to Intended Usage")

By default, [`configureStore`](/api/configureStore) adds some middleware to the Redux store setup automatically.

```
const store = configureStore({  reducer: rootReducer,})// Store has middleware added, because the middleware list was not customized
```

If you want to customize the list of middleware, you can supply an array of middleware functions to `configureStore`:

```
const store = configureStore({  reducer: rootReducer,  middleware: () => new Tuple(thunk, logger),})// Store specifically has the thunk and logger middleware applied
```

However, when you supply the `middleware` option, you are responsible for defining _all_ the middleware you want added to the store. `configureStore` will not add any extra middleware beyond what you listed.

`getDefaultMiddleware` is useful if you want to add some custom middleware, but also still want to have the default middleware added as well:

```
import { configureStore } from '@reduxjs/toolkit'import logger from 'redux-logger'import rootReducer from './reducer'const store = configureStore({  reducer: rootReducer,  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),})// Store has all of the default middleware added, _plus_ the logger middleware
```

It is preferable to use the chainable `.concat(...)` and `.prepend(...)` methods of the returned `Tuple` instead of the array spread operator, as the latter can lose valuable TS type information under some circumstances.

## Included Default Middleware[​](#included-default-middleware "Direct link to Included Default Middleware")

### Development[​](#development "Direct link to Development")

One of the goals of Redux Toolkit is to provide opinionated defaults and prevent common mistakes. As part of that, `getDefaultMiddleware` includes some middleware that are added **in development builds of your app only** to provide runtime checks for three common issues:

-   [Immutability check middleware](/api/immutabilityMiddleware): deeply compares state values for mutations. It can detect mutations in reducers during a dispatch, and also mutations that occur between dispatches (such as in a component or a selector). When a mutation is detected, it will throw an error and indicate the key path for where the mutated value was detected in the state tree. (Forked from [`redux-immutable-state-invariant`](https://github.com/leoasis/redux-immutable-state-invariant).)
    
-   [Serializability check middleware](/api/serializabilityMiddleware): a custom middleware created specifically for use in Redux Toolkit. Similar in concept to `immutable-state-invariant`, but deeply checks your state tree and your actions for non-serializable values such as functions, Promises, Symbols, and other non-plain-JS-data values. When a non-serializable value is detected, a console error will be printed with the key path for where the non-serializable value was detected.
    
-   [Action creator check middleware](/api/actionCreatorMiddleware): another custom middleware created specifically for use in Redux Toolkit. Identifies when an action creator was mistakenly dispatched without being called, and warns to console with the action type.
    

In addition to these development tool middleware, it also adds [`redux-thunk`](https://github.com/reduxjs/redux-thunk) by default, since thunks are the basic recommended side effects middleware for Redux.

Currently, the return value is:

```
const middleware = [  actionCreatorInvariant,  immutableStateInvariant,  thunk,  serializableStateInvariant,]
```

### Production[​](#production "Direct link to Production")

Currently, the return value is:

```
const middleware = [thunk]
```

## Customizing the Included Middleware[​](#customizing-the-included-middleware "Direct link to Customizing the Included Middleware")

`getDefaultMiddleware` accepts an options object that allows customizing each middleware in two ways:

-   Each middleware can be excluded from the result array by passing `false` for its corresponding field
-   Each middleware can have its options customized by passing the matching options object for its corresponding field

This example shows excluding the serializable state check middleware, and passing a specific value for the thunk middleware's "extra argument":

-   TypeScript
-   JavaScript

```
import { configureStore } from '@reduxjs/toolkit'import rootReducer from './reducer'import { myCustomApiService } from './api'const store = configureStore({  reducer: rootReducer,  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware({      thunk: {        extraArgument: myCustomApiService,      },      serializableCheck: false,    }),})
```

```
import { configureStore } from '@reduxjs/toolkit'import rootReducer from './reducer'import { myCustomApiService } from './api'const store = configureStore({  reducer: rootReducer,  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware({      thunk: {        extraArgument: myCustomApiService,      },      serializableCheck: false,    }),})
```

## API Reference[​](#api-reference "Direct link to API Reference")

```
interface ThunkOptions<E = any> {  extraArgument: E}interface ImmutableStateInvariantMiddlewareOptions {  // See "Immutability Middleware" page for definition}interface SerializableStateInvariantMiddlewareOptions {  // See "Serializability Middleware" page for definition}interface ActionCreatorInvariantMiddlewareOptions {  // See "Action Creator Middleware" page for definition}interface GetDefaultMiddlewareOptions {  thunk?: boolean | ThunkOptions  immutableCheck?: boolean | ImmutableStateInvariantMiddlewareOptions  serializableCheck?: boolean | SerializableStateInvariantMiddlewareOptions  actionCreatorCheck?: boolean | ActionCreatorInvariantMiddlewareOptions}function getDefaultMiddleware<S = any>(  options: GetDefaultMiddlewareOptions = {},): Middleware<{}, S>[]
```
