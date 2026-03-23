Component APIs

# lazy

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/lazy.mdx)

The `lazy` helper wraps a dynamic import and returns a component that loads on demand. Lazy components accept the same props as their eager counterparts and integrate with `<Suspense>` boundaries.

***

## [Import](/reference/component-apis/lazy#import)

```
import { lazy } from "solid-js";
```

***

## [Type](/reference/component-apis/lazy#type)

```
function lazy<T extends Component<any>>(  fn: () => Promise<{ default: T }>): T & { preload: () => Promise<T> };
```

***

## [Parameters](/reference/component-apis/lazy#parameters)

### [`fn`](/reference/component-apis/lazy#fn)

- **Type:** `() => Promise<{ default: T }>`
- **Required:** Yes

Dynamic import that resolves to the component module, exposing the component as the `default` export.

***

## [Return value](/reference/component-apis/lazy#return-value)

`lazy` returns a renderable component compatible with `T`. The component exposes a `preload()` method that resolves the underlying module.

Property

Type

Description

`preload`

`() => Promise<T>`

Loads the module without rendering and returns the resolved component.

***

## [Examples](/reference/component-apis/lazy#examples)

### [Basic usage](/reference/component-apis/lazy#basic-usage)

```
import { lazy } from "solid-js";
const ComponentA = lazy(() => import("./ComponentA"));
function App(props: { title: string }) {  return <ComponentA title={props.title} />;}
```

### [Preloading nested lazy components](/reference/component-apis/lazy#preloading-nested-lazy-components)

```
import { lazy } from "solid-js";import type { Component } from "solid-js";
const Nested = lazy(() => import("./Nested"));
const ComponentWithPreload = () => {  const [showNested, setShowNested] = createSignal(false);
  return (    <div>      <button        onMouseEnter={() => Nested.preload()}        onClick={() => setShowNested(true)}      >        Preload Nested Component      </button>      <Show when={showNested()}>        <Nested />      </Show>    </div>  );};
```

***

## [See also](/reference/component-apis/lazy#see-also)

- [`Suspense`](https://docs.solidjs.com/reference/components/suspense)
- [Router preloading guide](/solid-router/advanced-concepts/preloading)

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/component-apis/lazy.mdx\&page=https://docs.solidjs.com/reference/component-apis/lazy)

On this page

1. [Overview](#_top)
2. [Import](#import)
3. [Type](#type)
4. [Parameters](#parameters)
   1. [fn](#fn)
5. [Return value](#return-value)
6. [Examples](#examples)
   1. [Basic usage](#basic-usage)
   2. [Preloading nested lazy components](#preloading-nested-lazy-components)
7. [See also](#see-also)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/component-apis/lazy.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/component-apis/lazy.mdx\&page=https://docs.solidjs.com/reference/component-apis/lazy)
