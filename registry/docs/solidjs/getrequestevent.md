Server utilities

# getRequestEvent

[Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/server-utilities/get-request-event.mdx)

Solid uses Async Local Storage as a way of injecting the request context anywhere on the server. The server provides a utility function to access this context (called a `RequestEvent`).

```
import { getRequestEvent } from "solid-js/web"import type { RequestEvent } from "solid-js/web"
function getRequestEvent(): RequestEvent | undefined
```

You can retrieve the request event by calling `getRequestEvent`:

```
import { getRequestEvent } from "solid-js/web"
const event = getRequestEvent()
```

***

## [Request](/reference/server-utilities/get-request-event#request)

`.request` is the most important property of the `RequestEvent`. This is a Web [Request object](https://developer.mozilla.org/en-US/docs/Web/API/Request) that represents the current request to the server. You can access properties off of it such as `url` and `headers`. `body`, however, does not typically need to be handled directly for things such as server functions or rendering, which already handle mapping.

```
import { getRequestEvent } from "solid-js/web"
const event = getRequestEvent();if (event) {  const auth = event.request.headers.get("Authorization");}
```

***

## [Response](/reference/server-utilities/get-request-event#response)

The `getRequestEvent` can also be used to stub out the Response - this extends the [options that can be passed to the `Response constructor`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#options). This is kept up to date so it can be used to read and write headers and status for the current response.

```
import { getRequestEvent } from "solid-js/web"
const event = getRequestEvent();if (event) {  event.response.headers.append("Set-Cookie", "foo=hello");  event.response.status = 201;}
```

### [Change event.response or create a new Response](/reference/server-utilities/get-request-event#change-eventresponse-or-create-a-new-response)

The `getRequestEvent` event is considered global and lasts the life of the request. Therefore, if you are calling a server function on the server during SSR or an RPC call, setting values on `event.response` will reflect on that request.

The returned response will only impact the response when it is an RPC call. This is important because some headers previously set may not be needed to be set for the whole page, but only for a specific request.

**Note:** This is important to keep in mind when choosing where to set headers and responses.

Usage with SolidStart

See this guide on [Request Events](/solid-start/advanced/request-events).

[Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/server-utilities/get-request-event.mdx\&page=https://docs.solidjs.com/reference/server-utilities/get-request-event)

On this page

1. [Overview](#_top)
2. [Request](#request)
3. [Response](#response)
   1. [Change event.response or create a new Response](#change-eventresponse-or-create-a-new-response)

Contribute

1. [Edit this page](https://github.com/solidjs/solid-docs/edit/main/src/routes/reference/server-utilities/get-request-event.mdx)
2. [Report an issue with this page](https://github.com/solidjs/solid-docs-next/issues/new?assignees=ladybluenotes\&labels=improve+documentation%2Cpending+review\&projects=\&template=CONTENT.yml\&title=[Content]:\&subject=/reference/server-utilities/get-request-event.mdx\&page=https://docs.solidjs.com/reference/server-utilities/get-request-event)
