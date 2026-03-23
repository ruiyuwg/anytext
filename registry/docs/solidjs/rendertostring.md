Rendering

# renderToString

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/render-to-string.mdx)

```
import { renderToString } from "solid-js/web";
function renderToString<T>(  fn: () => T,  options?: {    nonce?: string;    renderId?: string;  }): string;
```

Renders to a string synchronously. The function also generates a script tag for progressive hydration. Options include eventNames to listen to before the page loads and play back on hydration, and nonce to put on the script tag.

`renderId` is used to namespace renders when having multiple top level roots.

```
const html = renderToString(App);
```

***

## [Options](/reference/rendering/render-to-string#options)

Name

Type

Description

`nonce`

`string`

The nonce to use for the script tag.

`renderId`

`string`

The id to use for the script tag.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/render-to-string.mdx\&page=https://docs.solidjs.com/reference/rendering/render-to-string)

On this page

1. [Overview](#_top)
2. [Options](#options)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/render-to-string.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/render-to-string.mdx\&page=https://docs.solidjs.com/reference/rendering/render-to-string)
