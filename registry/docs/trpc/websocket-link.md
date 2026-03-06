# WebSocket Link

`wsLink` is a [**terminating link**](./overview.md#the-terminating-link) that's used when using tRPC's WebSockets Client and Subscriptions, which you can learn more about [here](../../server/subscriptions.md)).

## Usage

To use `wsLink`, you need to pass it a `TRPCWebSocketClient`, which you can create with `createWSClient`:

```ts title="client/index.ts"
import { createTRPCClient, createWSClient, wsLink } from '@trpc/client';
import type { AppRouter } from '../server';

const wsClient = createWSClient({
  url: 'ws://localhost:3000',
});

const trpcClient = createTRPCClient<AppRouter>({
  links: [wsLink<AppRouter>({ client: wsClient })],
});
```

## Authentication / Connection params

[See more here](../../server/websockets.md#connection-params)

## `wsLink` / `createWSClient` Options

The `wsLink` function requires a `TRPCWebSocketClient` to be passed, which can be configured with the fields defined in `WebSocketClientOptions`:

```ts
export interface WebSocketLinkOptions {
  client: TRPCWebSocketClient;
  /**
   * Data transformer
   * @see https://trpc.io/docs/v11/data-transformers
   **/
  transformer?: DataTransformerOptions;
}

function createWSClient(opts: WebSocketClientOptions) => TRPCWebSocketClient


export interface WebSocketClientOptions {
  /**
   * The URL to connect to (can be a function that returns a URL)
   */
  url: string | (() => MaybePromise<string>);
  /**
   * Connection params that are available in `createContext()`
   * These are sent as the first message
   */
  connectionParams: string | (() => MaybePromise<string>);
  /**
   * Ponyfill which WebSocket implementation to use
   */
  WebSocket?: typeof WebSocket;
  /**
   * The number of milliseconds before a reconnect is attempted.
   * @default {@link exponentialBackoff}
   */
  retryDelayMs?: typeof exponentialBackoff;
  /**
   * Triggered when a WebSocket connection is established
   */
  onOpen?: () => void;
  /**
   * Triggered when a WebSocket connection encounters an error
   */
  onError?: (evt?: Event) => void;
  /**
   * Triggered when a WebSocket connection is closed
   */
  onClose?: (cause?: { code?: number }) => void;
  /**
   * Lazy mode will close the WebSocket automatically after a period of inactivity (no messages sent or received and no pending requests)
   */
  lazy?: {
    /**
     * Enable lazy mode
     * @default false
     */
    enabled: boolean;
    /**
     * Close the WebSocket after this many milliseconds
     * @default 0
     */
    closeMs: number;
  };
  /**
   * Send ping messages to the server and kill the connection if no pong message is returned
   */
  keepAlive?: {
    /**
     * @default false
     */
    enabled: boolean;
    /**
     * Send a ping message every this many milliseconds
     * @default 5_000
     */
    intervalMs?: number;
    /**
     * Close the WebSocket after this many milliseconds if the server does not respond
     * @default 1_000
     */
    pongTimeoutMs?: number;
  };
}
```

## Reference

You can check out the source code for this link on [GitHub.](https://github.com/trpc/trpc/blob/main/packages/client/src/links/wsLink)

# Aborting Procedure Calls

By default, tRPC does not cancel requests on unmount. If you want to opt into this behavior, you can provide `abortOnUnmount` in your configuration callback.

### Globally

```ts twoslash title="client.ts"
// @target: esnext
// ---cut---
// @filename: utils.ts
// @noErrors
import { createTRPCNext } from '@trpc/next';

export const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      // ...
      abortOnUnmount: true,
    };
  },
});
```

### Per-request

You may also override this behavior at the request level.

```ts twoslash title="client.ts"
// @target: esnext

// ---cut---
// @filename: pages/posts/[id].tsx
// @noErrors
import { trpc } from '~/utils/trpc';

const PostViewPage: NextPageWithLayout = () => {
  const id = useRouter().query.id as string;
  const postQuery = trpc.post.byId.useQuery({ id }, { trpc: { abortOnUnmount: true } });

  return (...)
}
```

# Next.js Integration

### tRPC ❤️ Next.js

Next.js makes it easy to build a client and server together in one codebase. tRPC makes it easy to share types between them, ensuring typesafety for your application's data fetching.

Our Next.js integration is built on top of our [React Query Integration](/docs/client/react) with some Next.js specific APIs, to handle both client and server side rendering.

When using the Next.js integration, you'll get the following features:

- **Server-side rendering** - You can tell tRPC to render your pages on the server, and then hydrate them on the client. This way, you'll avoid an initial loading state, although time to first byte will be blocked by the server. Read more about [Server-side rendering](/docs/client/nextjs/ssr).
- **Static site generation** - Prefetch queries on the server and generate static HTML files that are ready to be served. Read more about [Static site generation](/docs/client/nextjs/ssg).
- **Automatic Provider Wrapping** - `@trpc/next` provides a higher-order component (HOC) that wraps your app with the necessary providers so you don't have to do it yourself.

If you're using tRPC in a new project, consider using one of the example projects for reference: [tRPC Example Projects](/docs/example-apps)
