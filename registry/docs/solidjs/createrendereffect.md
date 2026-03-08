Secondary primitives

# createRenderEffect

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-render-effect.mdx)

The `createRenderEffect` primitive creates a reactive computation that automatically tracks reactive values, such as [signals](/concepts/signals), accessed within the provided function. This function re-runs whenever any of its dependencies change.

***

## [Execution Timing](/reference/secondary-primitives/create-render-effect#execution-timing)

### [Initial Run](/reference/secondary-primitives/create-render-effect#initial-run)

- A render effect runs **synchronously during the current rendering phase**, while DOM elements are being created or updated.
- It **runs before elements are mounted** to the DOM.
- **[Refs](/concepts/refs) are not set** during this initial run.

### [Subsequent Runs](/reference/secondary-primitives/create-render-effect#subsequent-runs)

- After the initial render, the render effect **re-runs whenever any of its tracked dependencies change**.
- Re-runs occur **after** all pure computations (such as [memos](/concepts/derived-values/memos)) have completed within the same update cycle.
- When multiple dependencies change within the same batch, the render effect **runs once per batch**.
- The **order of re-runs** among multiple render effects is **not guaranteed**.

### [Server-Side Rendering](/reference/secondary-primitives/create-render-effect#server-side-rendering)

- During SSR, render effects **run once on the server**, since they are part of the synchronous rendering phase.
- On the client, an initial run still occurs during the client rendering phase to initialize the reactive system; that client initial run is separate from the server run.
- After hydration, subsequent runs occur on the client when dependencies change.

***

## [Import](/reference/secondary-primitives/create-render-effect#import)

```
import { createRenderEffect } from "solid-js";
```

***

## [Type](/reference/secondary-primitives/create-render-effect#type)

```
function createRenderEffect<Next>(  fn: EffectFunction<undefined | NoInfer<Next>, Next>): void;function createRenderEffect<Next, Init = Next>(  fn: EffectFunction<Init | Next, Next>,  value: Init,  options?: { name?: string }): void;function createRenderEffect<Next, Init>(  fn: EffectFunction<Init | Next, Next>,  value?: Init,  options?: { name?: string }): void;
```

***

## [Parameters](/reference/secondary-primitives/create-render-effect#parameters)

### [`fn`](/reference/secondary-primitives/create-render-effect#fn)

- **Type:** `EffectFunction<undefined | NoInfer<Next> | EffectFunction<Init | Next, Next>`
- **Required:** Yes

A function to be executed as the render effect.

It receives the value returned from the previous run, or the initial `value` during the first run. The value returned by `fn` is passed to the next run.

### [`value`](/reference/secondary-primitives/create-render-effect#value)

- **Type:** `Init`
- **Required:** No

The initial value passed to `fn` during its first run.

### [`options`](/reference/secondary-primitives/create-render-effect#options)

- **Type:** `{ name?: string }`
- **Required:** No

An optional configuration object with the following properties:

#### [`name`](/reference/secondary-primitives/create-render-effect#name)

- **Type:** `string`
- **Required:** No

A name for the render effect, which can be useful for identification in debugging tools like the [Solid Debugger](https://github.com/thetarnav/solid-devtools).

***

## [Return value](/reference/secondary-primitives/create-render-effect#return-value)

`createRenderEffect` does not return a value.

***

## [Examples](/reference/secondary-primitives/create-render-effect#examples)

### [Basic Usage](/reference/secondary-primitives/create-render-effect#basic-usage)

```
import { createSignal, createRenderEffect } from "solid-js";
function Counter() {  const [count, setCount] = createSignal(0);
  // This runs immediately during render, and re-runs when the count changes.  createRenderEffect(() => {    console.log("Count: ", count());  });
  return (    <div>      <p>Count: {count()}</p>      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>    </div>  );}
```

### [Execution Timing](/reference/secondary-primitives/create-render-effect#execution-timing-1)

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

## [Related](/reference/secondary-primitives/create-render-effect#related)

- [`createEffect`](/reference/basic-reactivity/create-effect)
- [`onCleanup`](/reference/lifecycle/on-cleanup)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/secondary-primitives/create-render-effect.mdx\&page=https://docs.solidjs.com/reference/secondary-primitives/create-render-effect)

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

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-render-effect.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/secondary-primitives/create-render-effect.mdx\&page=https://docs.solidjs.com/reference/secondary-primitives/create-render-effect)
