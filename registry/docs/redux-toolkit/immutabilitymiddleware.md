On this page

A port of the [`redux-immutable-state-invariant`](https://github.com/leoasis/redux-immutable-state-invariant) middleware, customized for use with Redux Toolkit. Any detected mutations will be thrown as errors.

This middleware is added to the store by default by [`configureStore`](/api/configureStore) and [`getDefaultMiddleware`](/api/getDefaultMiddleware).

You can customize the behavior of this middleware by passing any of the supported options as the `immutableCheck` value for `getDefaultMiddleware`.

## Options[​](#options "Direct link to Options")

```
type IsImmutableFunc = (value: any) => booleaninterface ImmutableStateInvariantMiddlewareOptions {  /**    Callback function to check if a value is considered to be immutable.    This function is applied recursively to every value contained in the state.    The default implementation will return true for primitive types     (like numbers, strings, booleans, null and undefined).   */  isImmutable?: IsImmutableFunc  /**     An array of dot-separated path strings or RegExps that match named nodes from     the root state to ignore when checking for immutability.    Defaults to undefined   */  ignoredPaths?: (string | RegExp)[]  /** Print a warning if checks take longer than N ms. Default: 32ms */  warnAfter?: number}
```

## Exports[​](#exports "Direct link to Exports")

### `createImmutableStateInvariantMiddleware`[​](#createimmutablestateinvariantmiddleware "Direct link to createimmutablestateinvariantmiddleware")

Creates an instance of the immutability check middleware, with the given options.

You will most likely not need to call this yourself, as `getDefaultMiddleware` already does so.

Example:

-   TypeScript
-   JavaScript

```
// file: exampleSlice.tsimport { createSlice } from '@reduxjs/toolkit'export const exampleSlice = createSlice({  name: 'example',  initialState: {    user: 'will track changes',    ignoredPath: 'single level',    ignoredNested: {      one: 'one',      two: 'two',    },  },  reducers: {},})export default exampleSlice.reducer// file: store.tsimport {  configureStore,  createImmutableStateInvariantMiddleware,  Tuple,} from '@reduxjs/toolkit'import exampleSliceReducer from './exampleSlice'const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],})const store = configureStore({  reducer: exampleSliceReducer,  // Note that this will replace all default middleware  middleware: () => new Tuple(immutableInvariantMiddleware),})
```

```
// file: exampleSlice.jsimport { createSlice } from '@reduxjs/toolkit'export const exampleSlice = createSlice({  name: 'example',  initialState: {    user: 'will track changes',    ignoredPath: 'single level',    ignoredNested: {      one: 'one',      two: 'two',    },  },  reducers: {},})export default exampleSlice.reducer// file: store.jsimport {  configureStore,  createImmutableStateInvariantMiddleware,  Tuple,} from '@reduxjs/toolkit'import exampleSliceReducer from './exampleSlice'const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({  ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],})const store = configureStore({  reducer: exampleSliceReducer,  // Note that this will replace all default middleware  middleware: () => new Tuple(immutableInvariantMiddleware),})
```

doing the same without removing all other middlewares, using [getDetfaultMiddleware](/api/getDefaultMiddleware):

-   TypeScript
-   JavaScript

```
import { configureStore } from '@reduxjs/toolkit'import exampleSliceReducer from './exampleSlice'const store = configureStore({  reducer: exampleSliceReducer,  // This replaces the original default middleware with the customized versions  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware({      immutableCheck: {        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],      },    }),})
```

```
import { configureStore } from '@reduxjs/toolkit'import exampleSliceReducer from './exampleSlice'const store = configureStore({  reducer: exampleSliceReducer,  // This replaces the original default middleware with the customized versions  middleware: (getDefaultMiddleware) =>    getDefaultMiddleware({      immutableCheck: {        ignoredPaths: ['ignoredPath', 'ignoredNested.one', 'ignoredNested.two'],      },    }),})
```

### `isImmutableDefault`[​](#isimmutabledefault "Direct link to isimmutabledefault")

Default implementation of the "is this value immutable?" check. Currently implemented as:

```
return (  typeof value !== 'object' || value === null || typeof value === 'undefined')
```

This will return true for primitive types (like numbers, strings, booleans, null and undefined)
