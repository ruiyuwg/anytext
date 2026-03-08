On this page

Returns an array containing the default list of enhancers.

## Intended Usage[​](#intended-usage "Direct link to Intended Usage")

By default, [`configureStore`](/api/configureStore) adds some enhancers to the Redux store setup automatically.

```
const store = configureStore({  reducer: rootReducer,})// Store has enhancers added, because the enhancer list was not customized
```

If you want to customise the list of enhancers, you can supply an array of enhancer functions to `configureStore`:

```
const store = configureStore({  reducer: rootReducer,  enhancers: () => new Tuple(offline(offlineConfig)),})// store specifically has the offline enhancer applied
```

However, when you supply the `enhancer` option, you are responsible for defining _all_ the enhancers you want added to the store (with the exception of the [devtools](/api/configureStore#devtools)). `configureStore` will not add any extra enhancers beyond what you listed, **including the middleware enhancer**.

`getDefaultEnhancers` is useful if you want to add some custom enhancers, but also still want to have the default enhancers added as well:

```
import { configureStore } from '@reduxjs/toolkit'import { offline } from '@redux-offline/redux-offline'import offlineConfig from '@redux-offline/redux-offline/lib/defaults'import rootReducer from './reducer'const store = configureStore({  reducer: rootReducer,  enhancers: (getDefaultEnhancers) =>    getDefaultEnhancers().concat(offline(offlineConfig)),})// Store has all of the default middleware + enhancers added, _plus_ the offline enhancer
```

## Included Default Enhancers[​](#included-default-enhancers "Direct link to Included Default Enhancers")

The resulting array will always contain the `applyMiddleware` enhancer created based on the `configureStore`'s `middleware` field.

Additionally, the [`autoBatchEnhancer`](/api/autoBatchEnhancer) is included, to allow for "batching" of low priority action updates. This is used by [RTK Query](/rtk-query/overview) and should improve performance when using it.

Currently, the return value is

```
const enhancers = [applyMiddleware, autoBatchEnhancer]
```

## Customising the Included Enhancers[​](#customising-the-included-enhancers "Direct link to Customising the Included Enhancers")

`getDefaultEnhancers` accepts an options object that allows customizing each enhancer (excluding the middleware enhancer) in two ways:

-   Each enhancer can be excluded from the result array by passing `false` for its corresponding field
-   Each enhancer can have its options customized by passing the matching options object for its corresponding field

This example shows customising the autoBatch enhancer:

-   TypeScript
-   JavaScript

```
import rootReducer from './reducer'import { configureStore } from '@reduxjs/toolkit'const store = configureStore({  reducer: rootReducer,  enhancers: (getDefaultEnhancers) =>    getDefaultEnhancers({      autoBatch: { type: 'tick' },    }),})
```

```
import rootReducer from './reducer'import { configureStore } from '@reduxjs/toolkit'const store = configureStore({  reducer: rootReducer,  enhancers: (getDefaultEnhancers) =>    getDefaultEnhancers({      autoBatch: { type: 'tick' },    }),})
```

## API Reference[​](#api-reference "Direct link to API Reference")

```
interface AutoBatchOptions {  // see "autoBatchEnhancer" page for options}interface GetDefaultEnhancersOptions {  autoBatch?: boolean | AutoBatchOptions}function getDefaultEnhancers<M extends Middlewares<any>>(  options: GetDefaultEnhancersOptions = {},): EnhancerArray<[StoreEnhancer<{ dispatch: ExtractDispatchExtensions<M> }>]>
```
