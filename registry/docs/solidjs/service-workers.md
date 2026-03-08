Guides

# Service workers

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/service-workers.mdx)

To register a service worker:

1. Place your service-worker file in the `public` directory (e.g., `public/sw.js`), making it available at the root URL (`/sw.js`).
2. Add registration logic to the `entry-client.tsx` file.

```
// @refresh reloadimport { mount, StartClient } from "@solidjs/start/client";
mount(() => <StartClient />, document.getElementById("app")!);
if ("serviceWorker" in navigator && import.meta.env.PROD) {  window.addEventListener("load", () => {    navigator.serviceWorker.register("/sw.js");  });}
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/guides/service-workers.mdx\&page=https://docs.solidjs.com/solid-start/guides/service-workers)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/guides/service-workers.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/guides/service-workers.mdx\&page=https://docs.solidjs.com/solid-start/guides/service-workers)
