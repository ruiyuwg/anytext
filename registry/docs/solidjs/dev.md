Rendering

# DEV

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/dev.mdx)

```
import { DEV } from "solid-js";
const DEV: object | undefined;
```

On the client, Solid provides (via [conditional exports](https://nodejs.org/api/packages.html#conditional-exports)) different builds depending on whether the **development** condition is set. Development mode provides some additional checking — e.g. detecting accidental use of multiple instances of Solid — which are removed in production builds.

If you want code to run only in development mode (most useful in libraries), you can check whether the **DEV** export is defined. Note that it is always defined on the server, so you may want to combine with [isServer](/reference/rendering/is-server):

```
import { DEV } from "solid-js"import { isServer } from "solid-js/web"
if (DEV && !isServer) {  console.log(...);}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/dev.mdx\&page=https://docs.solidjs.com/reference/rendering/dev)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/dev.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/dev.mdx\&page=https://docs.solidjs.com/reference/rendering/dev)
