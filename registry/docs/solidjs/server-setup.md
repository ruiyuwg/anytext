Getting started

# Server setup

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/server-setup.mdx)

For server setup, wrap your application with [`MetaProvider`](/solid-meta/reference/meta/metaprovider) on the server. This component uses a `tags[]` array to pass down your head tags as part of your server-rendered payload. Once rendered on the server, the component updates this array to include the tags.

```
import { renderToString, getAssets } from "solid-js/web";import { MetaProvider } from "@solidjs/meta";import App from "./App";
// ... within the context of a request ...const app = renderToString(() => (  <MetaProvider>    <App />  </MetaProvider>));
res.send(`  <!doctype html>  <html>    <head>      ${getAssets()}    </head>    <body>      <div id="root">${app}</div>    </body>  </html>`);
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/getting-started/server-setup.mdx\&page=https://docs.solidjs.com/solid-meta/getting-started/server-setup)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-meta/getting-started/server-setup.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-meta/getting-started/server-setup.mdx\&page=https://docs.solidjs.com/solid-meta/getting-started/server-setup)
