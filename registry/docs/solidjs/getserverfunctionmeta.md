Server

# getServerFunctionMeta

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/get-server-function-meta.mdx)

`getServerFunctionMeta` returns a function-specific id string, that is stable across all instances when server functions are run in parallel on multiple CPU cores or workers.

This `id` property can and *will* change between builds.

```
import { getServerFunctionMeta } from "@solidjs/start";
// or some in-memory dbconst appCache: any = globalThis;
const counter = async () => {  "use server";  const { id } = getServerFunctionMeta()!;  const key = `counter_${id}`;  appCache[key] = appCache[key] ?? 0;  appCache[key]++;
  return appCache[key] as number;};
```

***

## [Parameters](/solid-start/reference/server/get-server-function-meta#parameters)

`getServerFunctionMeta(): { id: string }`

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/get-server-function-meta.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/get-server-function-meta)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/get-server-function-meta.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/get-server-function-meta.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/get-server-function-meta)
