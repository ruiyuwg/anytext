Basic reactivity

# createEffect

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-effect.mdx)

The `createEffect` primitive creates a reactive computation. It automatically tracks reactive values, such as [signals](/concepts/signals), accessed within the provided function. This function will re-run whenever any of its dependencies change.

***

## [Execution Timing](/reference/basic-reactivity/create-effect#execution-timing)

### [Initial Run](/reference/basic-reactivity/create-effect#initial-run)

- The initial run of effects is **scheduled to occur after the current rendering phase completes**.
- It runs after all synchronous code in a component has finished and DOM elements have been created, but **before the browser paints them on the screen**.
- **[Refs](/concepts/refs) are set** before the first run, even though DOM nodes may not yet be attached to the main document tree. This is relevant when using the [`children`](/reference/component-apis/children) helper.

### [Subsequent Runs](/reference/basic-reactivity/create-effect#subsequent-runs)

- After the initial run, the effect **re-runs whenever any tracked dependency changes**.
- When multiple dependencies change within the same batch, the effect **runs once per batch**.
- The **order of runs** among multiple effects is **not guaranteed**.
- Effects always run **after** all pure computations (such as [memos](/concepts/derived-values/memos)) within the same update cycle.

### [Server-Side Rendering](/reference/basic-reactivity/create-effect#server-side-rendering)

- Effects **never run during SSR**.
- Effects also **do not run during the initial client hydration**.

***

## [Import](/reference/basic-reactivity/create-effect#import)

```
import { createEffect } from "solid-js";
```

***

## [Type](/reference/basic-reactivity/create-effect#type)

```
function createEffect<Next>(  fn: EffectFunction<undefined | NoInfer<Next>, Next>): void;function createEffect<Next, Init = Next>(  fn: EffectFunction<Init | Next, Next>,  value: Init,  options?: { name?: string }): void;function createEffect<Next, Init>(  fn: EffectFunction<Init | Next, Next>,  value?: Init,  options?: { name?: string }): void;
```

***

## [Parameters](/reference/basic-reactivity/create-effect#parameters)

### [`fn`](/reference/basic-reactivity/create-effect#fn)

- **Type:** `EffectFunction<undefined | NoInfer<Next> | EffectFunction<Init | Next, Next>`
- **Required:** Yes

A function to be executed as the effect.

It receives the value returned from the previous run, or the initial `value` during the first run. The value returned by `fn` is passed to the next run.

### [`value`](/reference/basic-reactivity/create-effect#value)

- **Type:** `Init`
- **Required:** No

The initial value passed to `fn` during its first run.

### [`options`](/reference/basic-reactivity/create-effect#options)

- **Type:** `{ name?: string }`
- **Required:** No

An optional configuration object with the following properties:

#### [`name`](/reference/basic-reactivity/create-effect#name)

- **Type:** `string`
- **Required:** No

A name for the effect, which can be useful for identification in debugging tools like the [Solid Debugger](https://github.com/thetarnav/solid-devtools).

***

## [Return value](/reference/basic-reactivity/create-effect#return-value)

`createEffect` does not return a value.

***

## [Examples](/reference/basic-reactivity/create-effect#examples)

### [Basic Usage](/reference/basic-reactivity/create-effect#basic-usage)

```
import { createSignal, createEffect } from "solid-js";
function Counter() {  const [count, setCount] = createSignal(0);
  // Every time count changes, this effect re-runs.  createEffect(() => {    console.log("Count incremented! New value: ", count());  });
  return (    <div>      <p>Count: {count()}</p>      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>    </div>  );}
```

### [Execution Timing](/reference/basic-reactivity/create-effect#execution-timing-1)

```
import { createSignal, createEffect, createRenderEffect } from "solid-js";
function Counter() {  const [count, setCount] = createSignal(0);
  // This is part of the component's synchronous execution.  console.log("Hello from counter");
  // This effect is scheduled to run after the initial render is complete.  createEffect(() => {    console.log("Effect:", count());  });
  // By contrast, a render effect runs synchronously during the render phase.  createRenderEffect(() => {    console.log("Render effect:", count());  });
  // Setting a signal during the render phase re-runs render effects, but not effects, which are  // still scheduled.  setCount(1);
  // A microtask is scheduled to run after the current synchronous code (the render phase) finishes.  queueMicrotask(() => {    // Now that rendering is complete, signal updates will trigger effects immediately.    setCount(2);  });}
// Output:// Hello from counter// Render effect: 0// Render effect: 1// Effect: 1// Render effect: 2// Effect: 2
```

***

## [Related](/reference/basic-reactivity/create-effect#related)

- [`createRenderEffect`](/reference/secondary-primitives/create-render-effect)
- [`onCleanup`](/reference/lifecycle/on-cleanup)
- [`onMount`](/reference/lifecycle/on-mount)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/basic-reactivity/create-effect.mdx\&page=https://docs.solidjs.com/reference/basic-reactivity/create-effect)

On this page

1. [Overview](#_top)
2. [Execution Timing](#execution-timing)
   1. [Initial Run](#initial-run)
   2. [Subsequent Runs](#subsequent-runs)
   3. [Server-Side Rendering](#server-side-rendering)
3. [Import](#import)
4. [Type](#type)
5. [Parameters](#parameters)
   1. [fn](#fn)
   2. [value](#value)
   3. [options](#options)
6. [Return value](#return-value)
7. [Examples](#examples)
   1. [Basic Usage](#basic-usage)
   2. [Execution Timing](#execution-timing-1)
8. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-effect.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/basic-reactivity/create-effect.mdx\&page=https://docs.solidjs.com/reference/basic-reactivity/create-effect)
