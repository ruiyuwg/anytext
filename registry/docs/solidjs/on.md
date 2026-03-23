Reactive utilities

# on

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/on-util.mdx)

```
import { on } from "solid-js";
function on<T extends Array<() => any> | (() => any), U>(  deps: T,  fn: (input: T, prevInput: T, prevValue?: U) => U,  options: { defer?: boolean } = {}): (prevValue?: U) => U | undefined;
```

`on` is designed to be passed into a computation to make its dependencies explicit. If an array of dependencies is passed, `input` and `prevInput` are arrays.

```
createEffect(on(a, (v) => console.log(v, b())));
// is equivalent to:createEffect(() => {  const v = a();  untrack(() => console.log(v, b()));});
```

You can also not run the computation immediately and instead opt in for it to only run on change by setting the defer option to true.

```
// doesn't run immediatelycreateEffect(on(a, (v) => console.log(v), { defer: true }));
setA("new"); // now it runs
```

***

## [Using `on` with stores](/reference/reactive-utilities/on-util#using-on-with-stores)

note

Please note that on stores and mutable, adding or removing a property from the parent object will trigger an effect. See [`createMutable`](/reference/store-utilities/create-mutable)

```
const [state, setState] = createStore({ a: 1, b: 2 });
// this will not workcreateEffect(on(state.a, (v) => console.log(v)));
setState({ a: 3 }); // logs nothing
// instead, use an arrow functioncreateEffect(  on(    () => state.a,    (v) => console.log(v)  ));
setState({ a: 4 }); // logs 4
```

***

## [Arguments and options](/reference/reactive-utilities/on-util#arguments-and-options)

Argument

Type

Description

deps

`T`

The dependencies to watch.

fn

`(input: T, prevInput: T, prevValue?: U) => U`

The function to run when the dependencies change.

options

`{ defer?: boolean }`

Options to configure the effect.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/on-util.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/on-util)

On this page

1. [Overview](#_top)
2. [Using on with stores](#using-on-with-stores)
3. [Arguments and options](#arguments-and-options)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/on-util.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/on-util.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/on-util)
