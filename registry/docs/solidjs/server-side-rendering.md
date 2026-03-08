Rendering modes

# Server side rendering

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/ssr.mdx)

Solid Router supports all of Solid's SSR capabilities. In addition, it has Solid's transitions included, so it can be used freely with [suspense](/reference/components/suspense), [resources](/reference/basic-reactivity/create-resource), and [lazy components](/reference/component-apis/lazy).

When using SSR, there is the option to use the static router directly or let the browser router default to it on the server by passing in the URL.

```
import { isServer } from "solid-js/web";import { Router } from "@solidjs/router";
<Router url={isServer ? req.url : ""} />;
```

Solid Router also provides a way to define a `preload` function that loads parallel to the routes [render-as-you-fetch](https://epicreact.dev/render-as-you-fetch/).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/rendering-modes/ssr.mdx\&page=https://docs.solidjs.com/solid-router/rendering-modes/ssr)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-router/rendering-modes/ssr.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-router/rendering-modes/ssr.mdx\&page=https://docs.solidjs.com/solid-router/rendering-modes/ssr)
