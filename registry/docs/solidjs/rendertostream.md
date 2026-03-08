Rendering

# renderToStream

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/render-to-stream.mdx)

```
import { renderToStream } from "solid-js/web"
function renderToStream<T>(  fn: () => T,  options?: {    nonce?: string    renderId?: string    onCompleteShell?: () => void    onCompleteAll?: () => void  }): {  pipe: (writable: { write: (v: string) => void }) => void  pipeTo: (writable: WritableStream) => void}
```

This method renders to a stream. It renders the content synchronously including any Suspense fallback placeholders, and then continues to stream the data and HTML from any async resource as it completes.

```
// noderenderToStream(App).pipe(res)
// web streamconst { readable, writable } = new TransformStream()renderToStream(App).pipeTo(writable)
```

`onCompleteShell` fires when synchronous rendering is complete before writing the first flush to the stream out to the browser. `onCompleteAll` is called when all server Suspense boundaries have settled. `renderId` is used to namespace renders when having multiple top level roots.

note

This API replaces the previous pipeToWritable and pipeToNodeWritable APIs.

***

## [Options](/reference/rendering/render-to-stream#options)

Name

Type

Description

nonce

string

The nonce to use for inline scripts.

renderId

string

The id to use for this render.

onCompleteShell

() => void

A callback that fires when the shell is complete.

onCompleteAll

() => void

A callback that fires when all Suspense boundaries have settled.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/render-to-stream.mdx\&page=https://docs.solidjs.com/reference/rendering/render-to-stream)

On this page

1. [Overview](#_top)
2. [Options](#options)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/render-to-stream.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/render-to-stream.mdx\&page=https://docs.solidjs.com/reference/rendering/render-to-stream)
