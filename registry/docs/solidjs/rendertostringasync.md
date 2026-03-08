Rendering

# renderToStringAsync

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/render-to-string-async.mdx)

```
import { renderToStringAsync } from "solid-js/web"
function renderToStringAsync<T>(  fn: () => T,  options?: {    timeoutMs?: number    renderId?: string    nonce?: string  }): Promise<string>
```

Same as `renderToString` except that it will wait for all `<Suspense>` boundaries to resolve before returning the results. Resource data is automatically serialized into the script tag and will be hydrated on client load.

`renderId` is used to namespace renders when having multiple top level roots.

```
const html = await renderToStringAsync(App)
```

***

## [Options](/reference/rendering/render-to-string-async#options)

Name

Type

Description

`timeoutMs`

`number`

The number of milliseconds to wait for a `<Suspense>` boundary to resolve before timing out.

`renderId`

`string`

The id to use for the render.

`nonce`

`string`

The nonce to use for the script tag.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/render-to-string-async.mdx\&page=https://docs.solidjs.com/reference/rendering/render-to-string-async)

On this page

1. [Overview](#_top)
2. [Options](#options)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/render-to-string-async.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/render-to-string-async.mdx\&page=https://docs.solidjs.com/reference/rendering/render-to-string-async)
