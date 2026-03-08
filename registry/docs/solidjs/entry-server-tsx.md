Entrypoints

# entry-server.tsx

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/entry-server.mdx)

`entry-server.tsx` is where an application starts on the server. This happens by `entry-server.tsx` providing a document component to [`<StartServer>`](/solid-start/reference/server/start-server) and passing it into [`createHandler`](/solid-start/reference/server/create-handler) for server side rendering. A typical `entry-server.tsx` for a new project looks like this:

```
import { createHandler, StartServer } from "@solidjs/start/server";
export default createHandler(() => (  <StartServer    document={({ assets, children, scripts }) => (      <html lang="en">        <head>          <meta charset="utf-8" />          <meta name="viewport" content="width=device-width, initial-scale=1" />          <link rel="icon" href="/favicon.ico" />          {assets}        </head>        <body>          <div id="app">{children}</div>          {scripts}        </body>      </html>    )}  />));
```

For setting different SSR modes (sync | async | stream), see [`createHandler`](/solid-start/reference/server/create-handler).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/entrypoints/entry-server.mdx\&page=https://docs.solidjs.com/solid-start/reference/entrypoints/entry-server)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/entry-server.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/entrypoints/entry-server.mdx\&page=https://docs.solidjs.com/solid-start/reference/entrypoints/entry-server)
