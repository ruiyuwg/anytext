Rendering

# hydrate

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/hydrate.mdx)

```
import { hydrate } from "solid-js/web"import type { JSX } from "solid-js"import type { MountableElement } from "solid-js/web"
function hydrate(  fn: () => JSX.Element,  node: MountableElement,  options?: { renderId?: string; owner?: unknown }): () => void
```

This method is similar to `render` except that it attempts to rehydrate what is already rendered to the DOM. When initializing in the browser a page has already been server rendered.

```
const dispose = hydrate(App, document.getElementById("app"))
```

***

## [Parameters](/reference/rendering/hydrate#parameters)

Prop

type

description

fn

`() => JSX.Element`

Function that returns the application code.

node

MountableElement

DOM Element to mount the application to

options.renderId

string

options.owner

unknown

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/hydrate.mdx\&page=https://docs.solidjs.com/reference/rendering/hydrate)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/hydrate.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/hydrate.mdx\&page=https://docs.solidjs.com/reference/rendering/hydrate)
