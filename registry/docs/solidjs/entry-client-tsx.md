Entrypoints

# entry-client.tsx

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/entry-client.mdx)

`entry-client.tsx` is where an application starts in the browser. It does this by passing [`<StartClient>`](/solid-start/reference/client/start-client) and a DOM Element (the mounting point), to the [`mount`](/solid-start/reference/client/mount) function.

```
import { mount, StartClient } from "@solidjs/start/client";
mount(() => <StartClient />, document.getElementById("app")!);
```

This file is an ideal place to run any client specific code that is needed on startup, such as registering service workers. This is important if you are performing client-only rendering or using other modes of server-side rendering.

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/entrypoints/entry-client.mdx\&page=https://docs.solidjs.com/solid-start/reference/entrypoints/entry-client)

On this page

1. [Overview](#_top)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/entrypoints/entry-client.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/entrypoints/entry-client.mdx\&page=https://docs.solidjs.com/solid-start/reference/entrypoints/entry-client)
