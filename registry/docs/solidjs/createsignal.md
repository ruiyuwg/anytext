Basic reactivity

# createSignal

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-signal.mdx)

Creates a reactive state primitive consisting of a getter (accessor) and a setter function that forms the foundation of Solid's reactivity system. Signals use a pull-based reactivity model where tracking subscriptions (reads) is lightweight, while updates (writes) trigger dependency tracking and effect re-execution, making them optimized for frequent reads and infrequent writes.

***

## [Import](/reference/basic-reactivity/create-signal#import)

```
import { createSignal } from "solid-js";
```

***

## [Type signature](/reference/basic-reactivity/create-signal#type-signature)

```
function createSignal<T>(): Signal<T | undefined>;function createSignal<T>(value: T, options?: SignalOptions<T>): Signal<T>;
type Signal<T> = [get: Accessor<T>, set: Setter<T>];
type Accessor<T> = () => T;
type Setter<T> = {  <U extends T>(value: Exclude<U, Function> | ((prev: T) => U)): U;  <U extends T>(value: (prev: T) => U): U;  <U extends T>(value: Exclude<U, Function>): U;  <U extends T>(value: Exclude<U, Function> | ((prev: T) => U)): U;};
interface SignalOptions<T> {  name?: string;  equals?: false | ((prev: T, next: T) => boolean);  internal?: boolean;}
```

***

## [Parameters](/reference/basic-reactivity/create-signal#parameters)

### [`value`](/reference/basic-reactivity/create-signal#value)

- **Type:** `T`
- **Default:** `undefined`

The initial value for the signal. If no initial value is provided, the signal's type is automatically extended with `undefined`.

### [`options`](/reference/basic-reactivity/create-signal#options)

- **Type:** `SignalOptions<T>`
- **Default:** `undefined`

Configuration object for the signal.

#### [`name`](/reference/basic-reactivity/create-signal#name)

- **Type:** `string`
- **Default:** `undefined`

A name for the signal used by debugging tools like [Solid devtools](https://github.com/thetarnav/solid-devtools). It works only in development mode and is removed from the production bundle.

#### [`equals`](/reference/basic-reactivity/create-signal#equals)

- **Type:** `false | ((prev: T, next: T) => boolean)`
- **Default:** `false`

A custom comparison function to determine when the signal should update. By default, signals use reference equality (`===`) to compare previous and next values. When set to `false`, the signal will always update regardless of value equality, which is useful for creating signals that trigger manual updates in the reactive system.

When providing a custom function, it should be pure and return `true` if the values are equal (no update needed) or `false` if they differ (trigger update). Impure functions can create unexpected side effects and performance issues.

#### [`internal`](/reference/basic-reactivity/create-signal#internal)

- **Type:** `boolean`
- **Default:** `false`

Marks the signal as internal, preventing it from appearing in development tools. This is primarily used by Solid's internal systems.

***

## [Return value](/reference/basic-reactivity/create-signal#return-value)

- **Type:** `Signal<T>`

Returns a tuple `[getter, setter]` where:

- **getter**: An accessor function that returns the current value and tracks dependencies when called within a reactive context
- **setter**: A function that updates the signal's value and notifies all dependent computations

***

## [Examples](/reference/basic-reactivity/create-signal#examples)

### [Basic usage](/reference/basic-reactivity/create-signal#basic-usage)

```
import { createSignal } from "solid-js";
function Counter() {  const [count, setCount] = createSignal(0);
  return (    <div>      <button onClick={() => setCount(count() + 1)}>+</button>      <span>{count()}</span>    </div>  );}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/basic-reactivity/create-signal.mdx\&page=https://docs.solidjs.com/reference/basic-reactivity/create-signal)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type signature](#type-signature)
4. [Parameters](#parameters)
   1. [value](#value)
   2. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/basic-reactivity/create-signal.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/basic-reactivity/create-signal.mdx\&page=https://docs.solidjs.com/reference/basic-reactivity/create-signal)
