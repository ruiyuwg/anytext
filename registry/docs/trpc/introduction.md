If your API resides on a different origin than your front-end and you wish to send cookies to it, you will need to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on your server and send cookies with your requests by providing the option `{credentials: "include"}` to fetch.

The arguments provided to the fetch function used by tRPC can be modified as follow.

```ts title='app.ts'
import { createTRPCClient, httpBatchLink } from '@trpc/client';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'YOUR_SERVER_URL',
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    }),
  ],
});
```

You also need to enable CORS on your server by modifying your [adapter](/docs/server/adapters), or the HTTP server which fronts your API. The best way to do this varies adapter-by-adapter and based on your hosting infrastructure, and individual adapters generally document this process where applicable.

The headers option can be customized in the config when using the [`httpBatchLink`](./links/httpBatchLink.md) or the [`httpLink`](./links/httpLink.md).

`headers` can be both an object or a function. If it's a function it will get called dynamically for every HTTP request.

```ts title='utils/trpc.ts'
// Import the router type from your server file
import type { AppRouter } from '@/server/routers/app';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

let token: string;

export function setToken(newToken: string) {
  /**
   * You can also save the token to cookies, and initialize from
   * cookies above.
   */
  token = newToken;
}

export const trpc = createTRPCNext<AppRouter>({
  config(config) {
    return {
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
          /**
           * Headers will be called on each request.
           */
          headers() {
            return {
              Authorization: token,
            };
          },
        }),
      ],
    };
  },
});
```

### Example with auth login

```ts title='pages/auth.tsx'
const loginMut = trpc.auth.login.useMutation({
  onSuccess(opts) {
    token = opts.accessToken;
  },
});
```

The `token` can be whatever you want it to be. It's entirely up to you whether that's just a client-side
variable that you update the value of on success or whether you store the token and pull it from local storage.

`httpBatchLink` is a [**terminating link**](./overview.md#the-terminating-link) that batches an array of individual tRPC operations into a single HTTP request that's sent to a single tRPC procedure.

## Usage

You can import and add the `httpBatchLink` to the `links` array as such:

```ts title="client/index.ts"
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      // transformer,
    }),
  ],
});
```

After that, you can make use of batching by setting all your procedures in a `Promise.all`. The code below will produce exactly **one** HTTP request and on the server exactly **one** database query:

```ts
const somePosts = await Promise.all([
  trpc.post.byId.query(1),
  trpc.post.byId.query(2),
  trpc.post.byId.query(3),
]);
```

## `httpBatchLink` Options

The `httpBatchLink` function takes an options object that has the `HTTPBatchLinkOptions` shape.

```ts
export interface HTTPBatchLinkOptions extends HTTPLinkOptions {
  /**
   * Maximum length of HTTP URL allowed before operations are split into multiple requests
   * @default Infinity
   */
  maxURLLength?: number;
  /**
   * Maximum number of operations allowed in a single batch request
   * @default Infinity
   */
  maxItems?: number;
}

export interface HTTPLinkOptions {
  url: string;
  /**
   * Add ponyfill for fetch
   */
  fetch?: typeof fetch;
  /**
   * Add ponyfill for AbortController
   */
  AbortController?: typeof AbortController | null;
  /**
   * Data transformer
   * @see https://trpc.io/docs/data-transformers
   **/
  transformer?: DataTransformerOptions;
  /**
   * Headers to be set on outgoing requests or a callback that of said headers
   * @see http://trpc.io/docs/header
   */
  headers?:
    | HTTPHeaders
    | ((opts: { opList: Operation[] }) => HTTPHeaders | Promise<HTTPHeaders>);
}
```

## Setting a maximum URL length

When sending batch requests, sometimes the URL can become too large causing HTTP errors like [`413 Payload Too Large`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413), [`414 URI Too Long`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414), and [`404 Not Found`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404). The `maxURLLength` option will limit the number of requests that can be sent together in a batch.

> An alternative way of doing this is to

```ts title="client/index.ts"
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      maxURLLength: 2083, // a suitable size
      // alternatively, you can make all RPC-calls to be called with POST
      // methodOverride: 'POST',
    }),
  ],
});
```

## Disabling request batching

### 1. Disable `batching` on your server:

```ts title="server.ts"
import { createHTTPServer } from '@trpc/server/adapters/standalone';

createHTTPServer({
  // [...]
  // 👇 disable batching
  allowBatching: false,
});
```

or, if you're using Next.js:

```ts title='pages/api/trpc/[trpc].ts'
export default trpcNext.createNextApiHandler({
  // [...]
  // 👇 disable batching
  allowBatching: false,
});
```

### 2. Replace `httpBatchLink` with [`httpLink`](./httpLink.md) in your tRPC Client

```ts title="client/index.ts"
import { createTRPCClient, httpLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: 'http://localhost:3000',
    }),
  ],
});
```

or, if you're using Next.js:

```tsx title='utils/trpc.ts'
import type { AppRouter } from '@/server/routers/app';
import { httpLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      links: [
        httpLink({
          url: '/api/trpc',
        }),
      ],
    };
  },
});
```

`httpBatchStreamLink` is a [**terminating link**](./overview.md#the-terminating-link) that batches an array of individual tRPC operations into a single HTTP request that's sent to a single tRPC procedure (equivalent to [`httpBatchLink`](./httpBatchLink.md)), but doesn't wait for all the responses of the batch to be ready and streams the responses as soon as any data is available.

## Options

Options are identical to [`httpBatchLink options`](./httpBatchLink.md#options).

## Usage

> All usage and options are identical to [`httpBatchLink`](./httpBatchLink.md).

If you require the ability to change/set response headers (which includes cookies) from within your procedures, make sure to use `httpBatchLink` instead! This is due to the fact that `httpBatchStreamLink` does not support setting headers once the stream has begun. [Read more](https://trpc.io/docs/client/links/httpBatchLink).

You can import and add the `httpBatchStreamLink` to the `links` array as such:

```ts title="client/index.ts"
import { createTRPCClient, httpBatchStreamLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchStreamLink({
      url: 'http://localhost:3000',
    }),
  ],
});
```

After that, you can make use of batching by setting all your procedures in a `Promise.all`. The code below will produce exactly **one** HTTP request and on the server exactly **one** database query:

```ts
const somePosts = await Promise.all([
  trpc.post.byId.query(1),
  trpc.post.byId.query(2),
  trpc.post.byId.query(3),
]);
```

## Streaming mode

When batching requests together, the behavior of a regular `httpBatchLink` is to wait for all requests to finish before sending the response. If you want to send responses as soon as they are ready, you can use `httpBatchStreamLink` instead. This is useful for long-running requests.

```ts title="client/index.ts"
import { createTRPCClient, httpBatchStreamLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchStreamLink({
      url: 'http://localhost:3000',
    }),
  ],
});
```

Compared to a regular `httpBatchLink`, a `httpBatchStreamLink` will:

- Cause the requests to be sent with a `trpc-accept: application/jsonl` header
- Cause the response to be sent with a `transfer-encoding: chunked` and `content-type: application/jsonl`
- Remove the `data` key from the argument object passed to `responseMeta` (because with a streamed response, the headers are sent before the data is available)

## Async generators and deferred promises

You can try this out on the homepage of tRPC.io: [https://trpc.io/?try=minimal#try-it-out](/?try=minimal#try-it-out)

```ts twoslash
// @target: esnext
// @filename: trpc.ts
import { initTRPC } from '@trpc/server';

const t = initTRPC.create({});

export const router = t.router;
export const publicProcedure = t.procedure;

// ---cut---
// @filename: server.ts
import { publicProcedure, router } from './trpc';

const appRouter = router({
  examples: {
    iterable: publicProcedure.query(async function* () {
      for (let i = 0; i < 3; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        yield i;
      }
    }),
  },
});

export type AppRouter = typeof appRouter;


// @filename: client.ts
import { createTRPCClient, httpBatchStreamLink } from '@trpc/client';
import type { AppRouter } from './server';

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchStreamLink({
      url: 'http://localhost:3000',
    }),
  ],
});
const iterable = await trpc.examples.iterable.query();
//      ^?

for await (const value of iterable) {
  console.log('Iterable:', value);
  //                         ^?
}
```

## Compatibility (client-side)

### Browsers

Browser support should be identical to [`fetch`](https://caniuse.com/fetch) support.

### Node.js / Deno

For runtimes other than the browser ones, the `fetch` implementation should support streaming, meaning that the response obtained by `await fetch(...)` should have a `body` property of type `ReadableStream | NodeJS.ReadableStream`, meaning that:

- either `response.body.getReader` is a function that returns a `ReadableStreamDefaultReader<Uint8Array>` object
- or `response.body` is a `Uint8Array` `Buffer`

This includes support for `undici`, `node-fetch`, native Node.js fetch implementation, and WebAPI fetch implementation (browsers).

### React Native

Receiving the stream relies on the `TextDecoder` and `TextDecoderStream` APIs, which is not available in React Native. It's important to note that if your `TextDecoderStream` polyfill does not automatically polyfill `ReadableStream` and `WritableStream` those will also need to be polyfilled. If you still want to enable streaming, you need to polyfill those.

You will also need to overide the default fetch in the `httpBatchStreamLink` configuration options. In the below example we will be using the [Expo fetch](https://docs.expo.dev/versions/latest/sdk/expo/) package for the fetch implementation.

```typescript
httpBatchStreamLink({
  fetch: (url, opts) =>
    fetch(url, {
      ...opts,
      reactNative: { textStreaming: true },
    }),
  ...restOfConfig,
});
```

## Compatibility (server-side)

> ⚠️ for **aws lambda**, `httpBatchStreamLink` is not supported (will simply behave like a regular `httpBatchLink`). It should not break anything if enabled, but will not have any effect.

> ⚠️ for **cloudflare workers**, you need to enable the `ReadableStream` API through a feature flag: [`streams_enable_constructors`](https://developers.cloudflare.com/workers/platform/compatibility-dates#streams-constructors)

## Reference

You can check out the source code for this link on [GitHub.](https://github.com/trpc/trpc/blob/main/packages/client/src/links/httpBatchStreamLink.ts)

## Configure a ping option to keep the connection alive

When setting up your root config, you can pass in a `jsonl` option to configure a ping option to keep the connection alive.

```ts
import { initTRPC } from '@trpc/server';

const t = initTRPC.create({
  jsonl: {
    pingMs: 1000,
  },
});
```

`httpLink` is a [**terminating link**](./overview.md#the-terminating-link) that sends a tRPC operation to a tRPC procedure over HTTP.

`httpLink` supports both POST and GET requests.

## Usage

You can import and add the `httpLink` to the `links` array as such:

```ts title="client/index.ts"
import { createTRPCClient, httpLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: 'http://localhost:3000',
      // transformer,
    }),
  ],
});
```

## `httpLink` Options

The `httpLink` function takes an options object that has the `HTTPLinkOptions` shape.

```ts
export interface HTTPLinkOptions {
  url: string;
  /**
   * Add ponyfill for fetch
   */
  fetch?: typeof fetch;
  /**
   * Add ponyfill for AbortController
   */
  AbortController?: typeof AbortController | null;
  /**
   * Data transformer
   * @see https://trpc.io/docs/v11/data-transformers
   **/
  transformer?: DataTransformerOptions;
  /**
   * Headers to be set on outgoing requests or a callback that of said headers
   * @see http://trpc.io/docs/v10/header
   */
  headers?:
    | HTTPHeaders
    | ((opts: { op: Operation }) => HTTPHeaders | Promise<HTTPHeaders>);
  /**
   * Send all requests as POSTS requests regardless of the procedure type
   * The server must separately allow overriding the method. See:
   * @see https://trpc.io/docs/rpc
   */
  methodOverride?: 'POST';
}
```

## Reference

You can check out the source code for this link on [GitHub.](https://github.com/trpc/trpc/blob/main/packages/client/src/links/httpLink.ts)

`httpSubscriptionLink` is a [**terminating link**](./overview.md#the-terminating-link) that's uses [Server-sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) (SSE) for subscriptions.

SSE is a good option for real-time as it's a bit easier than setting up a WebSockets-server.

## Setup

If your client's environment doesn't support EventSource, you need an [EventSource polyfill](https://www.npmjs.com/package/event-source-polyfill). For React Native specific instructions please defer to the [compatibility section](#compatibility-react-native).

To use `httpSubscriptionLink`, you need to use a [splitLink](./splitLink.mdx) to make it explicit that we want to use SSE for subscriptions.

```ts title="client/index.ts"
import type { TRPCLink } from '@trpc/client';
import {
  httpBatchLink,
  httpSubscriptionLink,
  loggerLink,
  splitLink,
} from '@trpc/client';

const trpcClient = createTRPCClient<AppRouter>({
  /**
   * @see https://trpc.io/docs/v11/client/links
   */
  links: [
    // adds pretty logs to your console in development and logs errors in production
    loggerLink(),
    splitLink({
      // uses the httpSubscriptionLink for subscriptions
      condition: (op) => op.type === 'subscription',
      true: httpSubscriptionLink({
        url: `/api/trpc`,
      }),
      false: httpBatchLink({
        url: `/api/trpc`,
      }),
    }),
  ],
});
```

The document here outlines the specific details of using `httpSubscriptionLink`. For general usage of subscriptions, see [our subscriptions guide](../../server/subscriptions.md).
