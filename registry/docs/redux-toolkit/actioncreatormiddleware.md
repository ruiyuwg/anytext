On this page

A custom middleware that detects if an action creator has been mistakenly dispatched, instead of being called before dispatching.

A common mistake is to call `dispatch(actionCreator)` instead of `dispatch(actionCreator())`. This tends to "work" as the action creator has the static `type` property, but can lead to unexpected behavior.

## Options[​](#options "Direct link to Options")

```
export interface ActionCreatorInvariantMiddlewareOptions {  /**   * The function to identify whether a value is an action creator.   * The default checks for a function with a static type property and match method.   */  isActionCreator?: (action: unknown) => action is Function & { type?: unknown }}
```

## Exports[​](#exports "Direct link to Exports")

### `createActionCreatorInvariantMiddleware`[​](#createactioncreatorinvariantmiddleware "Direct link to createactioncreatorinvariantmiddleware")

Creates an instance of the action creator check middleware, with the given options.

You will most likely not need to call this yourself, as `getDefaultMiddleware` already does so. Example:

-   TypeScript
-   JavaScript

```
import {  configureStore,  createActionCreatorInvariantMiddleware,  Tuple,} from '@reduxjs/toolkit'import reducer from './reducer'// Augment middleware to consider all functions with a static type property to be action creatorsconst isActionCreator = (  action: unknown,): action is Function & { type: unknown } =>  typeof action === 'function' && 'type' in actionconst actionCreatorMiddleware = createActionCreatorInvariantMiddleware({  isActionCreator,})const store = configureStore({  reducer,  middleware: () => new Tuple(actionCreatorMiddleware),})
```

```
import {  configureStore,  createActionCreatorInvariantMiddleware,  Tuple,} from '@reduxjs/toolkit'import reducer from './reducer'// Augment middleware to consider all functions with a static type property to be action creatorsconst isActionCreator = (action) =>  typeof action === 'function' && 'type' in actionconst actionCreatorMiddleware = createActionCreatorInvariantMiddleware({  isActionCreator,})const store = configureStore({  reducer,  middleware: () => new Tuple(actionCreatorMiddleware),})
```
