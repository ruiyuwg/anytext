Rendering

# isServer

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/is-server.mdx)

```
import { isServer } from "solid-js/web";
const isServer: boolean;
```

This indicates that the code is being run as the server or browser bundle. As the underlying runtimes export this as a constant boolean it allows bundlers to eliminate the code and their used imports from the respective bundles.

```
import { isServer } from "solid-js/web";
if (isServer) {  // I will never make it to the browser bundle} else {  // won't be run on the server;}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/is-server.mdx\&page=https://docs.solidjs.com/reference/rendering/is-server)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/rendering/is-server.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/rendering/is-server.mdx\&page=https://docs.solidjs.com/reference/rendering/is-server)
