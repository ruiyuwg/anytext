Reactive utilities

# from

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/from.mdx)

```
import { from } from "solid-js"
function from<T>(  producer:    | ((setter: (v: T) => T) => () => void)    | {        subscribe: (          fn: (v: T) => void        ) => (() => void) | { unsubscribe: () => void }      }): () => T | undefined
```

A helper to make it easier to interop with external producers like RxJS observables or with Svelte Stores. This basically turns any subscribable (object with a subscribe method) into a Signal and manages subscription and disposal.

```
const signal = from(obsv$)
```

It can also take a custom producer function where the function is passed a setter function that returns an unsubscribe function:

```
const clock = from((set) => {  const interval = setInterval(() => {    set((v) => v + 1)  }, 1000)
  return () => clearInterval(interval)})
```

***

## [Arguments](/reference/reactive-utilities/from#arguments)

Name

Type

Description

producer

`((setter: (v: T) => T) => () => void) | { subscribe: (fn: (v: T) => void) => (() => void) | { unsubscribe: () => void }; }`

The producer function or subscribable object

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/from.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/from)

On this page

1. [Overview](#_top)
2. [Arguments](#arguments)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/from.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/from.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/from)
