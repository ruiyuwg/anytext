On this page

## Overview[​](#overview "Direct link to Overview")

A function that combines slices into a single reducer, and enables injection of more reducers after initialisation.

-   TypeScript
-   JavaScript

```
// file: slices/index.tsimport { combineSlices } from '@reduxjs/toolkit'import { api } from './api'import { userSlice } from './users'export const rootReducer = combineSlices(api, userSlice)// file: store.tsimport { configureStore } from '@reduxjs/toolkit'import { rootReducer } from './slices'export const store = configureStore({  reducer: rootReducer,})
```

```
// file: slices/index.jsimport { combineSlices } from '@reduxjs/toolkit'import { api } from './api'import { userSlice } from './users'export const rootReducer = combineSlices(api, userSlice)// file: store.jsimport { configureStore } from '@reduxjs/toolkit'import { rootReducer } from './slices'export const store = configureStore({  reducer: rootReducer,})
```

note

A "slice" for `combineSlices` is typically created with [`createSlice`](/api/createSlice), but can be any "slice-like" object with `reducerPath` and `reducer` properties (meaning RTK Query [API instances](/rtk-query/api/created-api/overview) are also compatible).

```
const withUserReducer = rootReducer.inject({  reducerPath: 'user',  reducer: userReducer,})const withApiReducer = rootReducer.inject(fooApi)
```

For simplicity, this `{ reducerPath, reducer }` shape will be described in these docs as a "slice".

## Parameters[​](#parameters "Direct link to Parameters")

`combineSlices` accepts a set of slices and/or reducer map objects, and combines them into a single reducer.

Slices will be mounted at their `reducerPath`, and items from reducer map objects will be mounted under their respective key.

```
const rootReducer = combineSlices(counterSlice, baseApi, {  user: userSlice.reducer,  auth: authSlice.reducer,})// is likeconst rootReducer = combineReducers({  [counterSlice.reducerPath]: counterSlice.reducer,  [baseApi.reducerPath]: baseApi.reducer,  user: userSlice.reducer,  auth: authSlice.reducer,})
```

caution

If multiple slices/map objects have the same reducer path, the reducer provided later in the arguments will override the previous.

However, typing will not be able to account for this. It's best to ensure that all of your reducers will aim for a unique location.

## Return Value[​](#return-value "Direct link to Return Value")

`combineSlices` returns a reducer function, with attached methods.

```
interface CombinedSliceReducer<InitialState, DeclaredState = InitialState>  extends Reducer<DeclaredState, AnyAction, Partial<DeclaredState>> {  withLazyLoadedSlices<LazyLoadedSlices>(): CombinedSliceReducer<    InitialState,    DeclaredState & Partial<LazyLoadedSlices>  >  inject<Slice extends SliceLike>(    slice: Slice,    config?: InjectConfig  ): CombinedSliceReducer<InitialState, DeclaredState & WithSlice<Slice>>  selector: {    (selectorFn: Selector, selectState?: SelectFromRootState) => WrappedSelector    original(state: DeclaredState) => InitialState & Partial<DeclaredState>  }}
```

### `withLazyLoadedSlices`[​](#withlazyloadedslices "Direct link to withlazyloadedslices")

It's recommended to [infer your RootState type from your store](https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types), which is inferred from the reducer. However, this can present issues if slices are lazy loaded, and thus not able to be inferred from.

`withLazyLoadedSlices` allows you to declare slices that will be added to state later, which will be included in the final state type.

One possible pattern of managing this would be with declaration merging:

Using declaration merging to declare injected slices

```
// file: slices/index.tsimport { combineSlices } from '@reduxjs/toolkit'import { staticSlice } from './static'export interface LazyLoadedSlices {}export const rootReducer =  combineSlices(staticSlice).withLazyLoadedSlices<LazyLoadedSlices>()// keys in LazyLoadedSlices are marked as optionalexport type RootState = ReturnType<typeof rootReducer>// file: slices/lazySlice.tsimport type { WithSlice } from '@reduxjs/toolkit'import { rootReducer } from '.'const lazySlice = createSlice({  /* ... */})declare module '.' {  export interface LazyLoadedSlices extends WithSlice<typeof lazySlice> {}}const injectedReducer = rootReducer.inject(lazySlice)// and/orconst injectedSlice = lazySlice.injectInto(rootReducer)
```

tip

The above example uses the `WithSlice` utility type for a slice mounted under its `reducerPath`. If the slice is mounted under a different key, you can declare it as a regular key instead.

Declaring a slice mounted outside its reducerPath

```
// file: slices/lazySlice.tsimport { rootReducer } from '.'const lazySlice = createSlice({  /* ... */})declare module '.' {  export interface LazyLoadedSlices {    customKey: LazyState  }}const injectedReducer = rootReducer.inject({  reducerPath: 'customKey',  reducer: lazySlice.reducer,})// and/orconst injectedSlice = lazySlice.injectInto(rootReducer, {  reducerPath: 'customKey',})
```

### `inject`[​](#inject "Direct link to inject")

`inject` allows you to add a slice to your set of reducers after initialisation. It expects to be passed a slice and an optional config, and returns an updated version of the reducer with the slice included.

This is mainly useful for lazy loading reducers.

```
const reducerWithUser = rootReducer.inject(userSlice)
```

note

`inject` adds the slice to the map of reducers in your original reducer, but doesn't dispatch an action.

This means that the added reducer state will not show up in your store until the next action is dispatched.

#### Reducer replacement[​](#reducer-replacement "Direct link to Reducer replacement")

By default, replacing a reducer is not allowed. In development mode, a warning will be logged to console if a new reducer instance is attempted to inject into a `reducerPath` that's already injected. (It won't warn if the same reducer instance is injected into the same place twice.)

If you wish to allow replacing a reducer with a new instance, you must explicitly pass `overrideExisting: true` as part of your configuration object.

```
const reducerWithUser = rootReducer.inject(userSlice, {  overrideExisting: true,})
```

This may be useful for hot reload, or "removing" a reducer by replacing it with a function that always returns `null`. Note that for predictable behavior, your types should account for all of the possible reducers you intend to occupy a path.

'Removing' a reducer, by replacing it with a no-op function

```
declare module '.' {  export interface LazyLoadedSlices {    removable: RemovableState | null  }}const withInjected = rootReducer.inject(  { reducerPath: 'removable', reducer: removableReducer },  { overrideExisting: true },)const emptyReducer = () => nullconst removeReducer = () =>  rootReducer.inject(    { reducerPath: 'removable', reducer: emptyReducer },    { overrideExisting: true },  )
```

### `selector`[​](#selector "Direct link to selector")

As noted previously, an injected reducer can still be undefined in state if no action has been dispatched.

Dealing with this possibly-optional state can be inconvient when writing selectors, as you may end up with a lot of results being possibly undefined or relying on explicit defaults.

`selector` allows you to get around this, by wrapping the reducer state in a `Proxy` that ensures that any currently injected reducers evaluate to their initial state if they're currently `undefined` in state.

```
declare module '.' {  export interface LazyLoadedSlices extends WithSlice<typeof counterSlice> {}}const counterSlice = createSlice({  name: 'counter',  initialState: { value: 0 },  reducers: {    /* ... */  },})const withCounter = rootReducer.inject(counterSlice)const selectCounterValue = (rootState: RootState) => rootState.counter?.value // number | undefinedconst wrappedSelectCounterValue = withCounter.selector(  (rootState) => rootState.counter.value, // number)console.log(  selectCounterValue({}), // undefined  selectCounterValue({ counter: { value: 2 } }), // 2  wrappedSelectCounterValue({}), // 0  wrappedSelectCounterValue({ counter: { value: 2 } }), // 2)
```

caution

The `Proxy` retrieves a reducer's initial state by calling it with a randomly generated action type - don't try to handle this as a special case inside your reducer.

#### Nested combined reducer[​](#nested-combined-reducer "Direct link to Nested combined reducer")

The wrapped selector expects to use the state returned by the combined reducer as its first argument.

If the combined reducer is nested further inside the store state, pass a `selectState` callback as the second argument to `selector`:

```
interface RootState {  innerCombined: ReturnType<typeof combinedReducer>}const selectCounterValue = withCounter.selector(  (combinedState) => combinedState.counter.value,  (rootState: RootState) => rootState.innerCombined,)console.log(  selectCounterValue({    innerCombined: {},  }), // 0  selectCounterValue({    innerCombined: {      counter: {        value: 2,      },    },  }), // 2)
```

#### `original`[​](#original "Direct link to original")

Similar to [Immer usage](/usage/immer-reducers#debugging-and-inspecting-drafted-state), an `original` function is provided to retrieve the original state value provided to the `Proxy`.

This is mainly useful for debugging/inspecting, as `Proxy` instances tend to be displayed in a format that's hard to read.

The function is attached as a method on the `selector` function:

```
const wrappedSelectCounterValue = withCounter.selector((rootState) => {  console.log(withCounter.selector.original(rootState))  return rootState.counter.value})
```

## Slice integration[​](#slice-integration "Direct link to Slice integration")

### `injectInto`[​](#injectinto "Direct link to injectinto")

Slice instances returned by [`createSlice`](/api/createSlice) have an attached `injectInto` method, which receive an injectable reducer from `combineSlices` and returns an "injected" version of that slice.

```
const injectedCounterSlice = counterSlice.injectInto(rootReducer)
```

An optional configuration object can be passed. This follows [`inject`](#inject)'s options with an additional `reducerPath` field, for injecting the slice under a path other than its current `reducerPath` property.

```
const aCounterSlice = counterSlice.injectInto(rootReducer, {  reducerPath: 'aCounter',})
```

### `selectors` / `getSelectors`[​](#selectors--getselectors "Direct link to selectors--getselectors")

Similar to [`selector`](#selector), the selectors from an "injected" slice instance behave slightly differently.

If the slice state is undefined in the store state passed, the selector will instead be called with the slice's initial state.

`selectors` will also reflect the change in `reducerPath` if one was made during injection.

```
console.log(  injectedCounterSlice.selectors.selectValue({}), // 0  injectedCounterSlice.selectors.selectValue({ counter: { value: 2 } }), // 2  aCounterSlice.selectors.selectValue({ aCounter: { value: 2 } }), // 2)
```
