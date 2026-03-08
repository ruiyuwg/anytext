Secondary primitives

# createComputed

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-computed.mdx)

The `createComputed` function creates a reactive computation that runs *before* the rendering phase. It is primarily used to synchronize state before rendering begins.

***

## [Import](/reference/secondary-primitives/create-computed#import)

```
import { createComputed } from "solid-js";
```

***

## [Type](/reference/secondary-primitives/create-computed#type)

```
function createComputed<Next>(  fn: EffectFunction<undefined | NoInfer<Next>, Next>): void;function createComputed<Next, Init = Next>(  fn: EffectFunction<Init | Next, Next>,  value: Init,  options?: { name?: string }): void;function createComputed<Next, Init>(  fn: EffectFunction<Init | Next, Next>,  value?: Init,  options?: { name?: string }): void;
```

***

## [Parameters](/reference/secondary-primitives/create-computed#parameters)

### [`fn`](/reference/secondary-primitives/create-computed#fn)

- **Type:** `EffectFunction<undefined | NoInfer<Next>, Next> | EffectFunction<Init | Next, Next>`
- **Required:** Yes

The function that performs the computation. It executes immediately to track dependencies and re-runs whenever a dependency changes.

It receives the value returned from the previous execution as its argument. On the initial execution, it receives the [`value`](/reference/secondary-primitives/create-computed#value) parameter (if provided) or `undefined`.

### [`value`](/reference/secondary-primitives/create-computed#value)

- **Type:** `Init`
- **Required:** No

The initial value passed to `fn` on its first execution.

### [`options`](/reference/secondary-primitives/create-computed#options)

- **Type:** `{ name?: string }`
- **Required:** No

An optional configuration object with the following properties:

#### [`name`](/reference/secondary-primitives/create-computed#name)

- **Type:** `string`
- **Required:** No

A debug name for the computation. It is used for identification in debugging tools like the [Solid Debugger](https://github.com/thetarnav/solid-devtools).

***

## [Return value](/reference/secondary-primitives/create-computed#return-value)

- **Type:** `void`

`createComputed` does not return a value.

***

## [Examples](/reference/secondary-primitives/create-computed#examples)

### [Basic usage](/reference/secondary-primitives/create-computed#basic-usage)

```
import { createComputed } from "solid-js";import { createStore } from "solid-js/store";
type User = {  name?: string;};
type UserEditorProps = {  user: User;};
function UserEditor(props: UserEditorProps) {  const [formData, setFormData] = createStore<User>({    name: "",  });
  // Update the store synchronously when props change.  // This prevents a second render cycle.  createComputed(() => {    setFormData("name", props.user.name);  });
  return (    <form>      <h1>Editing: {formData.name}</h1>      <input        value={formData.name}        onInput={(e) => setFormData("name", e.currentTarget.value)}      />    </form>  );}
```

***

## [Related](/reference/secondary-primitives/create-computed#related)

- [`createMemo`](/reference/basic-reactivity/create-memo)
- [`createRenderEffect`](/reference/secondary-primitives/create-render-effect)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/secondary-primitives/create-computed.mdx\&page=https://docs.solidjs.com/reference/secondary-primitives/create-computed)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [fn](#fn)
   2. [value](#value)
   3. [options](#options)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
7. [Related](#related)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-computed.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/secondary-primitives/create-computed.mdx\&page=https://docs.solidjs.com/reference/secondary-primitives/create-computed)
