Server

# createHandler

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/create-handler.mdx)

The `createHandler` is used to start the server in [`entry-server.tsx`](/solid-start/reference/entrypoints/entry-server). It takes a function that returns a static document (often created with [`<StartServer>`](/solid-start/reference/server/start-server)), and serves it using one of the three function for server side rendering (SSR):

- [`renderToString`](/reference/rendering/render-to-string) - "sync"
- [`renderToStringAsync`](/reference/rendering/render-to-string-async) - "async"
- [`renderToStream`](/reference/rendering/render-to-stream) - "stream"

The SSR mode can be configured through the `mode` property on the options object:

```
import { createHandler, StartServer } from "@solidjs/start/server";
export default createHandler(() => (  <StartServer document={...}  />), {  mode: "async"});
```

***

## [Parameters](/solid-start/reference/server/create-handler#parameters)

Argument

Type

Default

Description

fn

fn: (context: PageEvent)

A function that returns the static document for your application.

options.mode

string

"stream"

The SSR mode. Options are 'sync', 'async' and 'stream'.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/create-handler.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/create-handler)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/create-handler.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/create-handler.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/create-handler)
