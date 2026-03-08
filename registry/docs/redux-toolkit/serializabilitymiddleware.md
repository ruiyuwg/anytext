On this page

A custom middleware that detects if any non-serializable values have been included in state or dispatched actions, modeled after `redux-immutable-state-invariant`. Any detected non-serializable values will be logged to the console.

This middleware is added to the store by default by [`configureStore`](/api/configureStore) and [`getDefaultMiddleware`](/api/getDefaultMiddleware).

You can customize the behavior of this middleware by passing any of the supported options as the `serializableCheck` value for `getDefaultMiddleware`.

## Options[​](#options "Direct link to Options")

```
interface SerializableStateInvariantMiddlewareOptions {  /**   * The function to check if a value is considered serializable. This   * function is applied recursively to every value contained in the   * state. Defaults to `isPlain()`.   */  isSerializable?: (value: any) => boolean  /**   * The function that will be used to retrieve entries from each   * value.  If unspecified, `Object.entries` will be used. Defaults   * to `undefined`.   */  getEntries?: (value: any) => [string, any][]  /**   * An array of action types to ignore when checking for serializability.   * Defaults to []   */  ignoredActions?: string[]  /**   * An array of dot-separated path strings or regular expressions to ignore   * when checking for serializability, Defaults to   * ['meta.arg', 'meta.baseQueryMeta']   */  ignoredActionPaths?: (string | RegExp)[]  /**   * An array of dot-separated path strings or regular expressions to ignore   * when checking for serializability, Defaults to []   */  ignoredPaths?: (string | RegExp)[]  /**   * Execution time warning threshold. If the middleware takes longer   * than `warnAfter` ms, a warning will be displayed in the console.   * Defaults to 32ms.   */  warnAfter?: number  /**   * Opt out of checking state. When set to `true`, other state-related params will be ignored.   */  ignoreState?: boolean  /**   * Opt out of checking actions. When set to `true`, other action-related params will be ignored.   */  ignoreActions?: boolean}
```

## Exports[​](#exports "Direct link to Exports")

### `createSerializableStateInvariantMiddleware`[​](#createserializablestateinvariantmiddleware "Direct link to createserializablestateinvariantmiddleware")

Creates an instance of the serializability check middleware, with the given options.

You will most likely not need to call this yourself, as `getDefaultMiddleware` already does so.

Example:

-   TypeScript
-   JavaScript

```
import { Iterable } from 'immutable'import {  configureStore,  createSerializableStateInvariantMiddleware,  isPlain,  Tuple,} from '@reduxjs/toolkit'import reducer from './reducer'// Augment middleware to consider Immutable.JS iterables serializableconst isSerializable = (value: any) =>  Iterable.isIterable(value) || isPlain(value)const getEntries = (value: any) =>  Iterable.isIterable(value) ? value.entries() : Object.entries(value)const serializableMiddleware = createSerializableStateInvariantMiddleware({  isSerializable,  getEntries,})const store = configureStore({  reducer,  middleware: () => new Tuple(serializableMiddleware),})
```

```
import { Iterable } from 'immutable'import {  configureStore,  createSerializableStateInvariantMiddleware,  isPlain,  Tuple,} from '@reduxjs/toolkit'import reducer from './reducer'// Augment middleware to consider Immutable.JS iterables serializableconst isSerializable = (value) => Iterable.isIterable(value) || isPlain(value)const getEntries = (value) =>  Iterable.isIterable(value) ? value.entries() : Object.entries(value)const serializableMiddleware = createSerializableStateInvariantMiddleware({  isSerializable,  getEntries,})const store = configureStore({  reducer,  middleware: () => new Tuple(serializableMiddleware),})
```

### `isPlain`[​](#isplain "Direct link to isplain")

Checks whether the given value is considered a "plain value" or not.

Currently implemented as:

-   TypeScript
-   JavaScript

```
import isPlainObject from './isPlainObject'export function isPlain(val: any) {  return (    typeof val === 'undefined' ||    val === null ||    typeof val === 'string' ||    typeof val === 'boolean' ||    typeof val === 'number' ||    Array.isArray(val) ||    isPlainObject(val)  )}
```

```
import isPlainObject from './isPlainObject'export function isPlain(val) {  return (    typeof val === 'undefined' ||    val === null ||    typeof val === 'string' ||    typeof val === 'boolean' ||    typeof val === 'number' ||    Array.isArray(val) ||    isPlainObject(val)  )}
```

This will accept all standard JS objects, arrays, and primitives, but return false for `Date`s, `Map`s, and other similar class instances.
