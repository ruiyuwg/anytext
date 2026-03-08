Secondary primitives

# createDeferred

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-deferred.mdx)

```
import { createDeferred } from "solid-js"
function createDeferred<T>(  source: () => T,  options?: {    timeoutMs?: number    equals?: false | ((prev: T, next: T) => boolean)    name?: string  }): () => T
```

Creates a readonly that only notifies downstream changes when the browser is idle. `timeoutMs` is the maximum time to wait before forcing the update.

***

## [Options](/reference/secondary-primitives/create-deferred#options)

Name

Type

Description

timeoutMs

`number`

The maximum time to wait before forcing the update.

equals

`false or ((prev: T, next: T) => boolean)`

A function that returns true if the value has changed.

name

`string`

The name of the readonly.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/secondary-primitives/create-deferred.mdx\&page=https://docs.solidjs.com/reference/secondary-primitives/create-deferred)

On this page

1. [Overview](#_top)
2. [Options](#options)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/secondary-primitives/create-deferred.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/secondary-primitives/create-deferred.mdx\&page=https://docs.solidjs.com/reference/secondary-primitives/create-deferred)
