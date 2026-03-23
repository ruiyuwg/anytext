Reactive utilities

# indexArray

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/index-array.mdx)

```
import { indexArray } from "solid-js";
function indexArray<T, U>(  list: () => readonly T[],  mapFn: (v: () => T, i: number) => U): () => U[];
```

Similar to `mapArray` except it maps by index. The item is a signal and the index is now the constant.

Underlying helper for the `<Index>` control flow.

```
const mapped = indexArray(source, (model) => {  return {    get id() {      return model().id    }    get firstInitial() {      return model().firstName[0];    },    get fullName() {      return `${model().firstName} ${model().lastName}`;    },  }});
```

***

## [Arguments](/reference/reactive-utilities/index-array#arguments)

Name

Type

Description

list

`() => readonly T[]`

The list to map.

mapFn

`(v: () => T, i: number) => U`

The mapping function.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/index-array.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/index-array)

On this page

1. [Overview](#_top)
2. [Arguments](#arguments)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/reactive-utilities/index-array.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/reactive-utilities/index-array.mdx\&page=https://docs.solidjs.com/reference/reactive-utilities/index-array)
