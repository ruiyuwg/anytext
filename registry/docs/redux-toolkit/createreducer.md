On this page

## Overview[​](#overview "Direct link to Overview")

A utility that simplifies creating Redux reducer functions. It uses Immer internally to drastically simplify immutable update logic by writing "mutative" code in your reducers, and supports directly mapping specific action types to case reducer functions that will update the state when that action is dispatched.

Redux [reducers](https://redux.js.org/basics/reducers) are often implemented using a `switch` statement, with one `case` for every handled action type.

```
const initialState = { value: 0 }function counterReducer(state = initialState, action) {  switch (action.type) {    case 'increment':      return { ...state, value: state.value + 1 }    case 'decrement':      return { ...state, value: state.value - 1 }    case 'incrementByAmount':      return { ...state, value: state.value + action.payload }    default:      return state  }}
```

This approach works well, but is a bit boilerplate-y and error-prone. For instance, it is easy to forget the `default` case or setting the initial state.

The `createReducer` helper streamlines the implementation of such reducers. It uses a "builder callback" notation to define handlers for specific action types, matching against a range of actions, or handling a default case. This is conceptually similar to a switch statement, but with better TS support.

With `createReducer`, your reducers instead look like:

-   TypeScript
-   JavaScript

```
import { createAction, createReducer } from '@reduxjs/toolkit'interface CounterState {  value: number}const increment = createAction('counter/increment')const decrement = createAction('counter/decrement')const incrementByAmount = createAction<number>('counter/incrementByAmount')const initialState = { value: 0 } satisfies CounterState as CounterStateconst counterReducer = createReducer(initialState, (builder) => {  builder    .addCase(increment, (state, action) => {      state.value++    })    .addCase(decrement, (state, action) => {      state.value--    })    .addCase(incrementByAmount, (state, action) => {      state.value += action.payload    })})
```

```
import { createAction, createReducer } from '@reduxjs/toolkit'const increment = createAction('counter/increment')const decrement = createAction('counter/decrement')const incrementByAmount = createAction('counter/incrementByAmount')const initialState = { value: 0 }const counterReducer = createReducer(initialState, (builder) => {  builder    .addCase(increment, (state, action) => {      state.value++    })    .addCase(decrement, (state, action) => {      state.value--    })    .addCase(incrementByAmount, (state, action) => {      state.value += action.payload    })})
```

## Usage with the "Builder Callback" Notation[​](#usage-with-the-builder-callback-notation "Direct link to Usage with the \"Builder Callback\" Notation")

This function accepts a callback that receives a `builder` object as its argument. That builder provides `addCase`, `addMatcher` and `addDefaultCase` functions that may be called to define what actions this reducer will handle.

### Parameters[​](#parameters "Direct link to Parameters")

-   **initialState** `State | (() => State)`: The initial state that should be used when the reducer is called the first time. This may also be a "lazy initializer" function, which should return an initial state value when called. This will be used whenever the reducer is called with `undefined` as its state value, and is primarily useful for cases like reading initial state from `localStorage`.
-   **builderCallback** `(builder: Builder) => void` A callback that receives a _builder_ object to define case reducers via calls to `builder.addCase(actionCreatorOrType, reducer)`.

### Example Usage[​](#example-usage "Direct link to Example Usage")

-   TypeScript
-   JavaScript

```
import type { PayloadAction, UnknownAction } from '@reduxjs/toolkit'import { createAction, createReducer } from '@reduxjs/toolkit'const increment = createAction<number>('increment')const decrement = createAction<number>('decrement')function isActionWithNumberPayload(  action: UnknownAction,): action is PayloadAction<number> {  return typeof action.payload === 'number'}const reducer = createReducer(  {    counter: 0,    sumOfNumberPayloads: 0,    unhandledActions: 0,  },  (builder) => {    builder      .addCase(increment, (state, action) => {        // action is inferred correctly here        state.counter += action.payload      })      // You can chain calls, or have separate `builder.addCase()` lines each time      .addCase(decrement, (state, action) => {        state.counter -= action.payload      })      // You can apply a "matcher function" to incoming actions      .addMatcher(isActionWithNumberPayload, (state, action) => {})      // and provide a default case if no other handlers matched      .addDefaultCase((state, action) => {})  },)
```

```
import { createAction, createReducer } from '@reduxjs/toolkit'const increment = createAction('increment')const decrement = createAction('decrement')function isActionWithNumberPayload(action) {  return typeof action.payload === 'number'}const reducer = createReducer(  {    counter: 0,    sumOfNumberPayloads: 0,    unhandledActions: 0,  },  (builder) => {    builder      .addCase(increment, (state, action) => {        // action is inferred correctly here        state.counter += action.payload      })      // You can chain calls, or have separate `builder.addCase()` lines each time      .addCase(decrement, (state, action) => {        state.counter -= action.payload      })      // You can apply a "matcher function" to incoming actions      .addMatcher(isActionWithNumberPayload, (state, action) => {})      // and provide a default case if no other handlers matched      .addDefaultCase((state, action) => {})  },)
```

### Builder Methods[​](#builder-methods "Direct link to Builder Methods")

### `builder.addCase`[​](#builderaddcase "Direct link to builderaddcase")

Adds a case reducer to handle a single exact action type.

All calls to `builder.addCase` must come before any calls to `builder.addMatcher` or `builder.addDefaultCase`.

#### Parameters[​](#parameters-1 "Direct link to Parameters")

-   **actionCreator** Either a plain action type string, or an action creator generated by [`createAction`](/api/createAction) that can be used to determine the action type.
-   **reducer** The actual case reducer function.

### `builder.addAsyncThunk`[​](#builderaddasyncthunk "Direct link to builderaddasyncthunk")

Adds case reducers to handle actions based on a `AsyncThunk` action creator.

All calls to `builder.addAsyncThunk` must come before after any calls to `builder.addCase` and before any calls to `builder.addMatcher` or `builder.addDefaultCase`.

#### Parameters[​](#parameters-2 "Direct link to Parameters")

-   **asyncThunk** The async thunk action creator itself.
-   **reducers** A mapping from each of the `AsyncThunk` action types to the case reducer that should handle those actions.

```
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';const fetchUserById = createAsyncThunk('users/fetchUser', async (id) => {  const response = await fetch(`https://reqres.in/api/users/${id}`);  return (await response.json()).data;});const reducer = createReducer(initialState, (builder) => {  builder.addAsyncThunk(fetchUserById, {    pending: (state, action) => {      state.fetchUserById.loading = 'pending';    },    fulfilled: (state, action) => {      state.fetchUserById.data = action.payload;    },    rejected: (state, action) => {      state.fetchUserById.error = action.error;    },    settled: (state, action) => {      state.fetchUserById.loading = action.meta.requestStatus;    },  });});
```

### `builder.addMatcher`[​](#builderaddmatcher "Direct link to builderaddmatcher")

Allows you to match your incoming actions against your own filter function instead of only the `action.type` property.

If multiple matcher reducers match, all of them will be executed in the order they were defined in - even if a case reducer already matched. All calls to `builder.addMatcher` must come after any calls to `builder.addCase` and `builder.addAsyncThunk` and before any calls to `builder.addDefaultCase`.

#### Parameters[​](#parameters-3 "Direct link to Parameters")

-   **matcher** A matcher function. In TypeScript, this should be a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates) function
-   **reducer** The actual case reducer function.

-   TypeScript
-   JavaScript

```
import type { AsyncThunk, UnknownAction } from '@reduxjs/toolkit'import { createAction, createReducer } from '@reduxjs/toolkit'type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>type PendingAction = ReturnType<GenericAsyncThunk['pending']>type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>const initialState: Record<string, string> = {}const resetAction = createAction('reset-tracked-loading-state')function isPendingAction(action: UnknownAction): action is PendingAction {  return typeof action.type === 'string' && action.type.endsWith('/pending')}const reducer = createReducer(initialState, (builder) => {  builder    .addCase(resetAction, () => initialState)    // matcher can be defined outside as a type predicate function    .addMatcher(isPendingAction, (state, action) => {      state[action.meta.requestId] = 'pending'    })    .addMatcher(      // matcher can be defined inline as a type predicate function      (action): action is RejectedAction => action.type.endsWith('/rejected'),      (state, action) => {        state[action.meta.requestId] = 'rejected'      },    )    // matcher can just return boolean and the matcher can receive a generic argument    .addMatcher<FulfilledAction>(      (action) => action.type.endsWith('/fulfilled'),      (state, action) => {        state[action.meta.requestId] = 'fulfilled'      },    )})
```

```
import { createAction, createReducer } from '@reduxjs/toolkit'const initialState = {}const resetAction = createAction('reset-tracked-loading-state')function isPendingAction(action) {  return typeof action.type === 'string' && action.type.endsWith('/pending')}const reducer = createReducer(initialState, (builder) => {  builder    .addCase(resetAction, () => initialState)    // matcher can be defined outside as a type predicate function    .addMatcher(isPendingAction, (state, action) => {      state[action.meta.requestId] = 'pending'    })    .addMatcher(      // matcher can be defined inline as a type predicate function      (action) => action.type.endsWith('/rejected'),      (state, action) => {        state[action.meta.requestId] = 'rejected'      },    )    // matcher can just return boolean and the matcher can receive a generic argument    .addMatcher(      (action) => action.type.endsWith('/fulfilled'),      (state, action) => {        state[action.meta.requestId] = 'fulfilled'      },    )})
```

### `builder.addDefaultCase`[​](#builderadddefaultcase "Direct link to builderadddefaultcase")

Adds a "default case" reducer that is executed if no case reducer and no matcher reducer was executed for this action.

#### Parameters[​](#parameters-4 "Direct link to Parameters")

-   **reducer** The fallback "default case" reducer function.

-   TypeScript
-   JavaScript

```
import { createReducer } from '@reduxjs/toolkit'const initialState = { otherActions: 0 }const reducer = createReducer(initialState, (builder) => {  builder    // .addCase(...)    // .addMatcher(...)    .addDefaultCase((state, action) => {      state.otherActions++    })})
```

```
import { createReducer } from '@reduxjs/toolkit'const initialState = { otherActions: 0 }const reducer = createReducer(initialState, (builder) => {  builder    // .addCase(...)    // .addMatcher(...)    .addDefaultCase((state, action) => {      state.otherActions++    })})
```

### Returns[​](#returns "Direct link to Returns")

The generated reducer function.

The reducer will have a `getInitialState` function attached that will return the initial state when called. This may be useful for tests or usage with React's `useReducer` hook:

```
const counterReducer = createReducer(0, (builder) => {  builder    .addCase('increment', (state, action) => state + action.payload)    .addCase('decrement', (state, action) => state - action.payload)})console.log(counterReducer.getInitialState()) // 0
```

### Example Usage[​](#example-usage-1 "Direct link to Example Usage")

-   TypeScript
-   JavaScript

```
import type { PayloadAction, UnknownAction } from '@reduxjs/toolkit'import { createAction, createReducer } from '@reduxjs/toolkit'const increment = createAction<number>('increment')const decrement = createAction<number>('decrement')function isActionWithNumberPayload(  action: UnknownAction,): action is PayloadAction<number> {  return typeof action.payload === 'number'}const reducer = createReducer(  {    counter: 0,    sumOfNumberPayloads: 0,    unhandledActions: 0,  },  (builder) => {    builder      .addCase(increment, (state, action) => {        // action is inferred correctly here        state.counter += action.payload      })      // You can chain calls, or have separate `builder.addCase()` lines each time      .addCase(decrement, (state, action) => {        state.counter -= action.payload      })      // You can apply a "matcher function" to incoming actions      .addMatcher(isActionWithNumberPayload, (state, action) => {})      // and provide a default case if no other handlers matched      .addDefaultCase((state, action) => {})  },)
```

```
import { createAction, createReducer } from '@reduxjs/toolkit'const increment = createAction('increment')const decrement = createAction('decrement')function isActionWithNumberPayload(action) {  return typeof action.payload === 'number'}const reducer = createReducer(  {    counter: 0,    sumOfNumberPayloads: 0,    unhandledActions: 0,  },  (builder) => {    builder      .addCase(increment, (state, action) => {        // action is inferred correctly here        state.counter += action.payload      })      // You can chain calls, or have separate `builder.addCase()` lines each time      .addCase(decrement, (state, action) => {        state.counter -= action.payload      })      // You can apply a "matcher function" to incoming actions      .addMatcher(isActionWithNumberPayload, (state, action) => {})      // and provide a default case if no other handlers matched      .addDefaultCase((state, action) => {})  },)
```

## Direct State Mutation[​](#direct-state-mutation "Direct link to Direct State Mutation")

Redux requires reducer functions to be pure and treat state values as immutable. While this is essential for making state updates predictable and observable, it can sometimes make the implementation of such updates awkward. Consider the following example:

-   TypeScript
-   JavaScript

```
import { createAction, createReducer } from '@reduxjs/toolkit'interface Todo {  text: string  completed: boolean}const addTodo = createAction<Todo>('todos/add')const toggleTodo = createAction<number>('todos/toggle')const todosReducer = createReducer([] as Todo[], (builder) => {  builder    .addCase(addTodo, (state, action) => {      const todo = action.payload      return [...state, todo]    })    .addCase(toggleTodo, (state, action) => {      const index = action.payload      const todo = state[index]      return [        ...state.slice(0, index),        { ...todo, completed: !todo.completed },        ...state.slice(index + 1),      ]    })})
```

```
import { createAction, createReducer } from '@reduxjs/toolkit'const addTodo = createAction('todos/add')const toggleTodo = createAction('todos/toggle')const todosReducer = createReducer([], (builder) => {  builder    .addCase(addTodo, (state, action) => {      const todo = action.payload      return [...state, todo]    })    .addCase(toggleTodo, (state, action) => {      const index = action.payload      const todo = state[index]      return [        ...state.slice(0, index),        { ...todo, completed: !todo.completed },        ...state.slice(index + 1),      ]    })})
```

The `addTodo` reducer is straightforward if you know the [ES6 spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax). However, the code for `toggleTodo` is much less straightforward, especially considering that it only sets a single flag.

To make things easier, `createReducer` uses [immer](https://github.com/mweststrate/immer) to let you write reducers as if they were mutating the state directly. In reality, the reducer receives a proxy state that translates all mutations into equivalent copy operations.

-   TypeScript
-   JavaScript

```
import { createAction, createReducer } from '@reduxjs/toolkit'interface Todo {  text: string  completed: boolean}const addTodo = createAction<Todo>('todos/add')const toggleTodo = createAction<number>('todos/toggle')const todosReducer = createReducer([] as Todo[], (builder) => {  builder    .addCase(addTodo, (state, action) => {      // This push() operation gets translated into the same      // extended-array creation as in the previous example.      const todo = action.payload      state.push(todo)    })    .addCase(toggleTodo, (state, action) => {      // The "mutating" version of this case reducer is much      //  more direct than the explicitly pure one.      const index = action.payload      const todo = state[index]      todo.completed = !todo.completed    })})
```

```
import { createAction, createReducer } from '@reduxjs/toolkit'const addTodo = createAction('todos/add')const toggleTodo = createAction('todos/toggle')const todosReducer = createReducer([], (builder) => {  builder    .addCase(addTodo, (state, action) => {      // This push() operation gets translated into the same      // extended-array creation as in the previous example.      const todo = action.payload      state.push(todo)    })    .addCase(toggleTodo, (state, action) => {      // The "mutating" version of this case reducer is much      //  more direct than the explicitly pure one.      const index = action.payload      const todo = state[index]      todo.completed = !todo.completed    })})
```

Writing "mutating" reducers simplifies the code. It's shorter, there's less indirection, and it eliminates common mistakes made while spreading nested state. However, the use of Immer does add some "magic", and Immer has its own nuances in behavior. You should read through [pitfalls mentioned in the immer docs](https://immerjs.github.io/immer/pitfalls) . Most importantly, **you need to ensure that you either mutate the `state` argument or return a new state, _but not both_**. For example, the following reducer would throw an exception if a `toggleTodo` action is passed:

-   TypeScript
-   JavaScript

```
import { createAction, createReducer } from '@reduxjs/toolkit'interface Todo {  text: string  completed: boolean}const toggleTodo = createAction<number>('todos/toggle')const todosReducer = createReducer([] as Todo[], (builder) => {  builder.addCase(toggleTodo, (state, action) => {    const index = action.payload    const todo = state[index]    // This case reducer both mutates the passed-in state...    todo.completed = !todo.completed    // ... and returns a new value. This will throw an    // exception. In this example, the easiest fix is    // to remove the `return` statement.    return [...state.slice(0, index), todo, ...state.slice(index + 1)]  })})
```

```
import { createAction, createReducer } from '@reduxjs/toolkit'const toggleTodo = createAction('todos/toggle')const todosReducer = createReducer([], (builder) => {  builder.addCase(toggleTodo, (state, action) => {    const index = action.payload    const todo = state[index]    // This case reducer both mutates the passed-in state...    todo.completed = !todo.completed    // ... and returns a new value. This will throw an    // exception. In this example, the easiest fix is    // to remove the `return` statement.    return [...state.slice(0, index), todo, ...state.slice(index + 1)]  })})
```

## Multiple Case Reducer Execution[​](#multiple-case-reducer-execution "Direct link to Multiple Case Reducer Execution")

Originally, `createReducer` always matched a given action type to a single case reducer, and only that one case reducer would execute for a given action.

Using action matchers changes that behavior, as multiple matchers may handle a single action.

For any dispatched action, the behavior is:

-   If there is an exact match for the action type, the corresponding case reducer will execute first
-   Any matchers that return `true` will execute in the order they were defined
-   If a default case reducer is provided, and _no_ case or matcher reducers ran, the default case reducer will execute
-   If no case or matcher reducers ran, the original existing state value will be returned unchanged

The executing reducers form a pipeline, and each of them will receive the output of the previous reducer:

-   TypeScript
-   JavaScript

```
import { createReducer } from '@reduxjs/toolkit'const reducer = createReducer(0, (builder) => {  builder    .addCase('increment', (state) => state + 1)    .addMatcher(      (action) => action.type.startsWith('i'),      (state) => state * 5,    )    .addMatcher(      (action) => action.type.endsWith('t'),      (state) => state + 2,    )})console.log(reducer(0, { type: 'increment' }))// Returns 7, as the 'increment' case and both matchers all ran in sequence:// - case 'increment": 0 => 1// - matcher starts with 'i': 1 => 5// - matcher ends with 't': 5 => 7
```

```
import { createReducer } from '@reduxjs/toolkit'const reducer = createReducer(0, (builder) => {  builder    .addCase('increment', (state) => state + 1)    .addMatcher(      (action) => action.type.startsWith('i'),      (state) => state * 5,    )    .addMatcher(      (action) => action.type.endsWith('t'),      (state) => state + 2,    )})console.log(reducer(0, { type: 'increment' }))// Returns 7, as the 'increment' case and both matchers all ran in sequence:// - case 'increment": 0 => 1// - matcher starts with 'i': 1 => 5// - matcher ends with 't': 5 => 7
```

## Logging Draft State Values[​](#logging-draft-state-values "Direct link to Logging Draft State Values")

It's very common for a developer to call `console.log(state)` during the development process. However, browsers display Proxies in a format that is hard to read, which can make console logging of Immer-based state difficult.

When using either `createSlice` or `createReducer`, you may use the [`current`](/api/other-exports#current) utility that we re-export from the [`immer` library](https://immerjs.github.io/immer/current). This utility creates a separate plain copy of the current Immer `Draft` state value, which can then be logged for viewing as normal.

-   TypeScript
-   JavaScript

```
import { createSlice, current } from '@reduxjs/toolkit'const slice = createSlice({  name: 'todos',  initialState: [{ id: 1, title: 'Example todo' }],  reducers: {    addTodo: (state, action) => {      console.log('before', current(state))      state.push(action.payload)      console.log('after', current(state))    },  },})
```

```
import { createSlice, current } from '@reduxjs/toolkit'const slice = createSlice({  name: 'todos',  initialState: [{ id: 1, title: 'Example todo' }],  reducers: {    addTodo: (state, action) => {      console.log('before', current(state))      state.push(action.payload)      console.log('after', current(state))    },  },})
```
