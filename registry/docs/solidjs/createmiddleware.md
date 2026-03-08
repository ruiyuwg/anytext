Server

# createMiddleware

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/create-middleware.mdx)

`createMiddleware` creates a configuration object for SolidStart that specifies when middleware functions are executed during the request lifecycle.

There are two lifecycle events available: `onRequest` and `onBeforeResponse`.

- The `onRequest` event is triggered at the beginning of the request lifecycle, before the request is handled by the route handler.
- The `onBeforeResponse` event is triggered after a request has been processed by the route handler but before the response is sent to the client.

note

SolidStart will only execute the middleware functions if the path to the middleware file is configured within `app.config.ts` using the `middleware` option. This file must export the configuration using `export default`.

Learn more about middleware in the [Middleware documentation](/solid-start/advanced/middleware).

***

## [Parameters](/solid-start/reference/server/create-middleware#parameters)

`createMiddleware` takes an object with the following keys:

- `onRequest` (optional): A middleware function or an array of functions to execute at the `onRequest` event. If an array is provided, the middleware functions will be executed one by one, in the order they appear in the array.
- `onBeforeResponse` (optional): A middleware function or an array of functions to execute at the `onBeforeResponse` event. If an array is provided, the middleware functions will be executed one by one, in the order they appear in the array.

***

## [Example](/solid-start/reference/server/create-middleware#example)

```
import { createMiddleware } from "@solidjs/start/middleware";
export default createMiddleware({  onRequest: (event) => {    console.log("Request received:", event.request.url);  },  onBeforeResponse: (event) => {    console.log("Sending response:", event.response.status);  },});
```

```
import { defineConfig } from "@solidjs/start/config";
export default defineConfig({  middleware: "src/middleware/index.ts",});
```

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/create-middleware.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/create-middleware)

On this page

1. [Overview](#_top)
2. [Parameters](#parameters)
3. [Example](#example)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/solid-start/reference/server/create-middleware.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/solid-start/reference/server/create-middleware.mdx\&page=https://docs.solidjs.com/solid-start/reference/server/create-middleware)
