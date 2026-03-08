Reactive utilities

# createRoot

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/create-root.mdx)

The `createRoot` function creates a new owned context, which requires explicit disposal of computations it owns.

***

## [Import](/reference/reactive-utilities/create-root#import)

```
import { createRoot } from "solid-js";
```

***

## [Type](/reference/reactive-utilities/create-root#type)

```
function createRoot<T>(  fn: (dispose: () => void) => T,  detachedOwner?: Owner): T;
```

***

## [Parameters](/reference/reactive-utilities/create-root#parameters)

### [`fn`](/reference/reactive-utilities/create-root#fn)

- **Type:** `(dispose: () => void) => T`
- **Required:** Yes

The function executes within a newly created owned context. The computations created within this function are managed by the root and will only be disposed of when the provided `dispose` function is called.

If a function is passed without a `dispose` parameter, an unowned root is created. In this case, the computations are not managed for disposal, which may lead to memory leaks.

This function itself does not track dependencies and only runs once.

### [`detachedOwner`](/reference/reactive-utilities/create-root#detachedowner)

- **Type:** `Owner`
- **Required:** No

An optional owner that establishes the root's position in the ownership hierarchy. When provided, the root becomes owned by this owner and inherits its contextual state (such as [contexts](/concepts/context)).

***

## [Return Value](/reference/reactive-utilities/create-root#return-value)

`createRoot` returns the value returned by the `fn` function.

***

## [Examples](/reference/reactive-utilities/create-root#examples)

### [Basic Usage](/reference/reactive-utilities/create-root#basic-usage)

```
import { createSignal, createEffect, createRoot } from "solid-js";
function createCounter(initial = 0) {  const [count, setCount] = createSignal(initial);
  createEffect(() => {    console.log(`Count changed, new value: ${count()}`);  });
  function increment() {    setCount((c) => c + 1);  }
  function reset() {    setCount(initial);  }
  return { count, increment, reset };}
test("createCounter works correctly", () => {  createRoot((dispose) => {    const { count, increment, reset } = createCounter(10);
    expect(count()).toBe(10);    increment();    expect(count()).toBe(11);    reset();    expect(count()).toBe(10);
    dispose();  });});
```

### [Returning Values](/reference/reactive-utilities/create-root#returning-values)

```
import { createRoot, createSignal, onCleanup } from "solid-js";
const counter = createRoot((dispose) => {  const [count, setCount] = createSignal(0);
  onCleanup(() => {    console.log("Dispose was called!");  });
  return {    value: count,    increment: () => setCount((c) => c + 1),    dispose,  };});
console.log(counter.value()); // 0counter.increment();console.log(counter.value()); // 1counter.dispose(); // Logs "Dispose was called!"
```

***

## [Related](/reference/reactive-utilities/create-root#related)

- [`render`](/reference/rendering/render)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/create-root.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/create-root)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [fn](#fn)
   2. [detachedOwner](#detachedowner)
5. [Return Value](#return-value)
6. [Examples](#examples)
   1. [Basic Usage](#basic-usage)
   2. [Returning Values](#returning-values)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/create-root.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/create-root.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/create-root)
