Reactive utilities

# mapArray

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/map-array.mdx)

```
import { mapArray } from "solid-js"
function mapArray<T, U>(  list: () => readonly T[],  mapFn: (v: T, i: () => number) => U): () => U[]
```

Reactive map helper that caches each item by reference to reduce unnecessary mapping on updates. It only runs the mapping function once per value and then moves or removes it as needed. The index argument is a signal. The map function itself is not tracking.

Underlying helper for the `<For>` control flow.

```
const mapped = mapArray(source, (model) => {  const [name, setName] = createSignal(model.name)  const [description, setDescription] = createSignal(model.description)
  return {    id: model.id,    get name() {      return name()    },    get description() {      return description()    },    setName,    setDescription,  }})
```

***

## [Arguments](/reference/reactive-utilities/map-array#arguments)

Name

Type

Description

list

`() => readonly T[]`

The source array to map.

mapFn

`(v: T, i: () => number) => U`

The mapping function.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/map-array.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/map-array)

On this page

1. [Overview](#_top)
2. [Arguments](#arguments)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/map-array.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/map-array.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/map-array)
