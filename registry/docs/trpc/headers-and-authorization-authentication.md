## Headers and authorization / authentication

### Web apps

#### Same domain

If you're doing a web application, cookies are sent as part of the request as long as your client is on the same domain as the server.

#### Cross-domain

If the client and server are not on the same domain, you can use `withCredentials: true` ([read more on MDN here](https://developer.mozilla.org/en-US/docs/Web/API/EventSource/withCredentials)).

**Example:**

```tsx
// [...]
httpSubscriptionLink({
  url: 'https://example.com/api/trpc',
  eventSourceOptions() {
    return {
      withCredentials: true, // <---
    };
  },
});
```

### Custom headers through ponyfill

**Recommended for non-web environments**

You can ponyfill `EventSource` and use the `eventSourceOptions` -callback to populate headers.

```tsx
import {
  createTRPCClient,
  httpBatchLink,
  httpSubscriptionLink,
  splitLink,
} from '@trpc/client';
import { EventSourcePolyfill } from 'event-source-polyfill';
import type { AppRouter } from '../server/index.js';

// Initialize the tRPC client
const trpc = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      condition: (op) => op.type === 'subscription',
      true: httpSubscriptionLink({
        url: 'http://localhost:3000',
        // ponyfill EventSource
        EventSource: EventSourcePolyfill,
        // options to pass to the EventSourcePolyfill constructor
        eventSourceOptions: async ({ op }) => {
          //                          ^ Includes the operation that's being executed
          // you can use this to generate a signature for the operation
          const signature = await getSignature(op);
          return {
            headers: {
              authorization: 'Bearer supersecret',
              'x-signature': signature,
            },
          };
        },
      }),
      false: httpBatchLink({
        url: 'http://localhost:3000',
      }),
    }),
  ],
});
```

### Updating configuration on an active connection

`httpSubscriptionLink` leverages SSE through `EventSource`, ensuring that connections encountering errors like network failures or bad response codes are automatically retried. However, `EventSource` does not allow re-execution of the `eventSourceOptions()` or `url()` options to update its configuration, which is particularly important in scenarios where authentication has expired since the last connection.

To address this limitation, you can use a [`retryLink`](./retryLink.md) in conjunction with `httpSubscriptionLink`. This approach ensures that the connection is re-established with the latest configuration, including any updated authentication details.

Please note that restarting the connection will result in the `EventSource` being recreated from scratch, which means any previously tracked events will be lost.

```tsx
import {
  createTRPCClient,
  httpBatchLink,
  httpSubscriptionLink,
  retryLink,
  splitLink,
} from '@trpc/client';
import {
  EventSourcePolyfill,
  EventSourcePolyfillInit,
} from 'event-source-polyfill';
import type { AppRouter } from '../server/index.js';

// Initialize the tRPC client
const trpc = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      condition: (op) => op.type === 'subscription',
      false: httpBatchLink({
        url: 'http://localhost:3000',
      }),
      true: [
        retryLink({
          retry: (opts) => {
            opts.op.type;
            //       ^? will always be 'subscription' since we're in a splitLink
            const code = opts.error.data?.code;
            if (!code) {
              // This shouldn't happen as our httpSubscriptionLink will automatically retry within when there's a non-parsable response
              console.error('No error code found, retrying', opts);
              return true;
            }
            if (code === 'UNAUTHORIZED' || code === 'FORBIDDEN') {
              console.log('Retrying due to 401/403 error');
              return true;
            }
            return false;
          },
        }),
        httpSubscriptionLink({
          url: async () => {
            // calculate the latest URL if needed...
            return getAuthenticatedUri();
          },
          // ponyfill EventSource
          EventSource: EventSourcePolyfill,
          eventSourceOptions: async () => {
            // ...or maybe renew an access token
            const token = await auth.getOrRenewToken();

            return {
              headers: {
                authorization: `Bearer ${token}`,
              },
            };
          },
        }),
      ],
    }),
  ],
});
```

### Connection params

In order to authenticate with `EventSource`, you can define `connectionParams` in `httpSubscriptionLink`. This will be sent as part of the URL, which is why other methods are preferred).

```ts twoslash title="server/context.ts"
import type { CreateHTTPContextOptions } from '@trpc/server/adapters/standalone';

export const createContext = async (opts: CreateHTTPContextOptions) => {
  const token = opts.info.connectionParams?.token;
  //    ^?

  // [... authenticate]

  return {};
};

export type Context = Awaited<ReturnType<typeof createContext>>;
```

```ts title="client/trpc.ts"
import {
  createTRPCClient,
  httpBatchLink,
  httpSubscriptionLink,
  splitLink,
} from '@trpc/client';
import type { AppRouter } from '../server/index.js';

// Initialize the tRPC client
const trpc = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      condition: (op) => op.type === 'subscription',
      true: httpSubscriptionLink({
        url: 'http://localhost:3000',
        connectionParams: async () => {
          // Will be serialized as part of the URL
          return {
            token: 'supersecret',
          };
        },
      }),
      false: httpBatchLink({
        url: 'http://localhost:3000',
      }),
    }),
  ],
});
```

## Timeout Configuration

The `httpSubscriptionLink` supports configuring a timeout for inactivity through the `reconnectAfterInactivityMs` option. If no messages (including ping messages) are received within the specified timeout period, the connection will be marked as "connecting" and automatically attempt to reconnect.

The timeout configuration is set on the server side when initializing tRPC:

```ts title="server/trpc.ts"
import { initTRPC } from '@trpc/server';

export const t = initTRPC.create({
  sse: {
    client: {
      reconnectAfterInactivityMs: 3_000,
    },
  },
});
```

## Server Ping Configuration

The server can be configured to send periodic ping messages to keep the connection alive and prevent timeout disconnections. This is particularly useful when combined with the `reconnectAfterInactivityMs`-option.

```ts title="server/trpc.ts"
import { initTRPC } from '@trpc/server';

export const t = initTRPC.create({
  sse: {
    // Maximum duration of a single SSE connection in milliseconds
    // maxDurationMs: 60_00,
    ping: {
      // Enable periodic ping messages to keep connection alive
      enabled: true,
      // Send ping message every 2s
      intervalMs: 2_000,
    },
    // client: {
    //   reconnectAfterInactivityMs: 3_000
    // }
  },
});
```

## Compatibility (React Native)

The `httpSubscriptionLink` makes use of the `EventSource` API, Streams API, and `AsyncIterator`s, these are not natively supported by React Native and will have to be ponyfilled.

To ponyfill `EventSource` we recommend to use a polyfill that utilizes the networking library exposed by React Native, over using a polyfill that using the `XMLHttpRequest` API. Libraries that polyfill `EventSource` using `XMLHttpRequest` fail to reconnect after the app has been in the background. Consider using the [rn-eventsource-reborn](https://www.npmjs.com/package/rn-eventsource-reborn) package.

The Streams API can be ponyfilled using the [web-streams-polyfill](https://www.npmjs.com/package/web-streams-polyfill) package.

`AsyncIterator`s can be polyfilled using the [@azure/core-asynciterator-polyfill](https://www.npmjs.com/package/@azure/core-asynciterator-polyfill) package.

### Installation

Install the required polyfills:

import { InstallSnippet } from '@site/src/components/InstallSnippet';

Add the polyfills to your project before the link is used (e.g. where you add your TRPCReact.Provider):

```ts title="utils/api.tsx"
import '@azure/core-asynciterator-polyfill';
import { RNEventSource } from 'rn-eventsource-reborn';
import { ReadableStream, TransformStream } from 'web-streams-polyfill';

globalThis.ReadableStream = globalThis.ReadableStream || ReadableStream;
globalThis.TransformStream = globalThis.TransformStream || TransformStream;
```

Once the ponyfills are added, you can continue setting up the `httpSubscriptionLink` as described in the [setup](#setup) section.

## `httpSubscriptionLink` Options

```ts
type HTTPSubscriptionLinkOptions<
  TRoot extends AnyClientTypes,
  TEventSource extends EventSourceLike.AnyConstructor = typeof EventSource,
> = {
  /**
   * EventSource ponyfill
   */
  EventSource?: TEventSource;
  /**
   * EventSource options or a callback that returns them
   */
  eventSourceOptions?:
    | EventSourceLike.InitDictOf<TEventSource>
    | ((opts: {
        op: Operation;
      }) =>
        | EventSourceLike.InitDictOf<TEventSource>
        | Promise<EventSourceLike.InitDictOf<TEventSource>>);
};
```

## SSE Options on the server

```ts
export interface SSEStreamProducerOptions<TValue = unknown> {
  ping?: {
    /**
     * Enable ping comments sent from the server
     * @default false
     */
    enabled: boolean;
    /**
     * Interval in milliseconds
     * @default 1000
     */
    intervalMs?: number;
  };
  /**
   * Maximum duration in milliseconds for the request before ending the stream
   * @default undefined
   */
  maxDurationMs?: number;
  /**
   * End the request immediately after data is sent
   * Only useful for serverless runtimes that do not support streaming responses
   * @default false
   */
  emitAndEndImmediately?: boolean;
  /**
   * Client-specific options - these will be sent to the client as part of the first message
   * @default {}
   */
  client?: {
    /**
     * Timeout and reconnect after inactivity in milliseconds
     * @default undefined
     */
    reconnectAfterInactivityMs?: number;
  };
}
```

`localLink` is a [**terminating link**](./overview.md#the-terminating-link) that allows you to make tRPC procedure calls directly in your application without going through HTTP.

We have prefixed this as `unstable_` as it's a new API, but you're safe to use it! [Read more](/docs/faq#unstable).

## Usage

```tsx
import { createTRPCClient, unstable_localLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCClient<AppRouter>({
  links: [
    unstable_localLink({
      router: appRouter,
      createContext: async () => {
        // Create your context here
        return {};
      },
      onError: (opts) => {
        // Log errors here, similarly to how you would in an API route
        console.error('Error:', opts.error);
      },
    }),
  ],
});
```

## Features

- Direct procedure calls without HTTP overhead
- Full support for queries, mutations, and subscriptions
- Automatic error handling and transformation
- Support for abort signals
- Type-safe context creation

## Options

The `localLink` accepts the following options:

```ts
type LocalLinkOptions<TRouter extends AnyRouter> = {
  router: TRouter;
  createContext: () => Promise<inferRouterContext<TRouter>>;
  onError?: (opts: ErrorHandlerOptions<inferRouterContext<TRouter>>) => void;
} & TransformerOptions<inferClientTypes<TRouter>>;
```

### router

The tRPC router instance to use for procedure calls.

### createContext

A function that creates the context for each procedure call. This is called for each request and should return a promise that resolves to the context object.

### onError

An optional error handler that is called when an error occurs during a procedure call. It receives the error, operation type, path, input, and context.

### transformer

Optional input/output transformers for serialization/deserialization of data.

## Notes

- It's recommended to use this link in scenarios where you need direct procedure calls without HTTP
- For most client-side applications, you should use the `httpLink` or other HTTP-based links instead
- The link supports all tRPC features including queries, mutations, and subscriptions
- Error handling and transformation are handled automatically, just like with HTTP-based links

`loggerLink` is a link that lets you implement a logger for your tRPC client. It allows you to see more clearly what operations are queries, mutations, or subscriptions, their requests, and responses. The link, by default, prints a prettified log to the browser's console. However, you can customize the logging behavior and the way it prints to the console with your own implementations.

## Usage

You can import and add the `loggerLink` to the `links` array as such:

```ts title="client/index.ts"
import { createTRPCClient, httpBatchLink, loggerLink } from '@trpc/client';
import type { AppRouter } from '../server';

const client = createTRPCClient<AppRouter>({
  links: [
    /**
     * The function passed to enabled is an example in case you want to the link to
     * log to your console in development and only log errors in production
     */
    loggerLink({
      enabled: (opts) =>
        (process.env.NODE_ENV === 'development' &&
          typeof window !== 'undefined') ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});
```

## `loggerLink` Options

The `loggerLink` function takes an options object that has the `LoggerLinkOptions` shape:

```ts
type LoggerLinkOptions<TRouter extends AnyRouter> = {
  logger?: LogFn<TRouter>;
  /**
   * It is a function that returns a condition that determines whether to enable the logger.
   * It is true by default.
   */
  enabled?: EnabledFn<TRouter>;
  /**
   * Used in the built-in defaultLogger
   */
  console?: ConsoleEsque;
  /**
   * Color mode used in the default logger.
   * @default typeof window === 'undefined' ? 'ansi' : 'css'
   */
  colorMode?: 'ansi' | 'css';
};
```

## Reference

You can check out the source code for this link on [GitHub.](https://github.com/trpc/trpc/blob/main/packages/client/src/links/loggerLink.ts)

Links enable you to customize the flow of data between the tRPC Client and Server. A link should do only one thing, which can be either a self-contained modification to a tRPC operation (query, mutation, or subscription) or a side-effect based on the operation (such as logging).

You can compose links together into an array that you can provide to the tRPC client configuration via the `links` property, which represents a link chain. This means that the tRPC client will execute the links in the order they are added to the `links` array when doing a request and will execute them again in reverse when it's handling a response. Here's a visual representation of the link chain:

tRPC Link Diagram. Based on Apollo's.

The below examples are assuming you use Next.js, but the same as below can be added if you use the vanilla tRPC client

```tsx title='utils/trpc.ts'
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

export default createTRPCNext<AppRouter>({
  config() {
    const url = `http://localhost:3000`;

    return {
      links: [
        loggerLink(),
        httpBatchLink({
          url,
        }),
      ],
    };
  },
});
```
