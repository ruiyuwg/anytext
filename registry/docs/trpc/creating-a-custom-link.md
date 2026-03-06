## Creating a custom link

A link is a function that follows the `TRPCLink` type. Each link is composed of three parts:

1. The link returns a function that has a parameter with the `TRPCClientRuntime` type. This argument is passed by tRPC and it is used when creating a [**terminating link**](#the-terminating-link). If you're not creating a terminating link, you can just create a function that has no parameters. In such case, the link should be added to the `links` array without invoking (`links: [..., myLink, httpBatchLink(...)]`).
2. The function in step 1 returns another function that receives an object with two properties: `op` which is the `Operation` that is being executed by the client, and `next` which is the function we use to call the next link down the chain.
3. The function in step 2 returns a final function that returns the `observable` function provided by `@trpc/server`. The `observable` accepts a function that receives an `observer` which helps our link notify the next link up the chain how they should handle the operation result. In this function, we can just return `next(op)` and leave it as is, or we can subscribe to `next`, which enables our link to handle the operation result.

### Example

```tsx title='utils/customLink.ts'
import { TRPCLink } from '@trpc/client';
import { observable } from '@trpc/server/observable';
import type { AppRouter } from '~/server/routers/_app';

export const customLink: TRPCLink<AppRouter> = () => {
  // here we just got initialized in the app - this happens once per app
  // useful for storing cache for instance
  return ({ next, op }) => {
    // this is when passing the result to the next link

    // each link needs to return an observable which propagates results
    return observable((observer) => {
      console.log('performing operation:', op);
      const unsubscribe = next(op).subscribe({
        next(value) {
          console.log('we received value', value);
          observer.next(value);
        },
        error(err) {
          console.log('we received error', err);
          observer.error(err);
        },
        complete() {
          observer.complete();
        },
      });

      return unsubscribe;
    });
  };
};
```

### References

If you need a more real reference for creating your custom link, you can check out some of the built-in links tRPC provides on [GitHub](https://github.com/trpc/trpc/tree/main/packages/client/src/links).

## The terminating link

The **terminating link** is the last link in a link chain. Instead of calling the `next` function, the terminating link is responsible for sending your composed tRPC operation to the tRPC server and returning an `OperationResultEnvelope`.

The `links` array that you add to the tRPC client config should have at least one link, and that link should be a terminating link. If `links` don't have a terminating link at the end of them, the tRPC operation will not be sent to the tRPC server.

[`httpBatchLink`](./httpBatchLink.md) is the recommended terminating link by tRPC.

[`httpLink`](./httpLink.md), [`wsLink`](./wsLink.md), and [`localLink`](./localLink.mdx) are other examples of terminating links.

## Managing context

As an operation moves along your link chain, it maintains a context that each link can read and modify. This allows links to pass metadata along the chain that other links use in their execution logic.

Obtain the current context object and modify it by accessing `op.context`.

You can set the context object's initial value for a particular operation by providing the context parameter to the `query` or `useQuery` hook (or `mutation`, `subscription`, etc.).

For an example use case, see [Disable batching for certain requests](/docs/client/links/splitLink#disable-batching-for-certain-requests).

`retryLink` is a link that allows you to retry failed operations in your tRPC client. It provides a customizable way to handle transient errors, such as network failures or server errors, by automatically retrying the failed requests based on specified conditions.

If you use `@trpc/react-query` you will generally **not** need this link as it's built into the `useQuery()` and the `useMutation()` hooks from `@tanstack/react-query`.

## Usage

You can import and add the `retryLink` to the `links` array when creating your tRPC client. This link can be placed before or after other links in your setup, depending on your requirements.

```ts
import { createTRPCClient, retryLink } from '@trpc/client';

const client = createTRPCClient<AppRouter>({
  links: [
    retryLink({
      retry(opts) {
        if (
          opts.error.data &&
          opts.error.data.code !== 'INTERNAL_SERVER_ERROR'
        ) {
          // Don't retry on non-500s
          return false;
        }
        if (opts.op.type !== 'query') {
          // Only retry queries
          return false;
        }

        // Retry up to 3 times
        return opts.attempts <= 3;
      },
      // Double every attempt, with max of 30 seconds (starting at 1 second)
      retryDelayMs: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    }),
    httpBatchLink({
      url: 'http://localhost:3000',
    }),
  ],
});
```

In the example above, we add the `retryLink` before the `httpBatchLink`. By default, `retryLink` will:

- Retry the request if the error is a `TRPCClientError` with a status code of 500 or if we couldn't get a valid TRPC error.
- Retry the request up to 3 times.

You can customize the retry logic by providing a custom `retry` function.

## Options

```ts
interface RetryLinkOptions<TInferrable extends InferrableClientTypes> {
  /**
   * The retry function
   */
  retry: (opts: RetryFnOptions<TInferrable>) => boolean;
  /**
   * The delay between retries in ms (defaults to 0)
   */
  retryDelayMs?: (attempt: number) => number;
}

interface RetryFnOptions<TInferrable extends InferrableClientTypes> {
  /**
   * The operation that failed
   */
  op: Operation;
  /**
   * The error that occurred
   */
  error: TRPCClientError<TInferrable>;
  /**
   * The number of attempts that have been made (including the first call)
   */
  attempts: number;
}
```

## Handling tracked() events

When using `retryLink` with subscriptions that use [`tracked()`](../../server/subscriptions.md#tracked), the link will automatically include the last known event ID when retrying. This ensures that when a subscription reconnects, it can resume from where it left off without missing any events.

For example, if you're using Server-sent Events (SSE) with `httpSubscriptionLink`, the `retryLink` will automatically handle reconnecting with the last event ID when errors like `401 Unauthorized` occur.

import SplitLinkDiagram from '../../../static/img/split-link-diagram.svg';

`splitLink` is a link that allows you to branch your link chain's execution depending on a given condition. Both the `true` and `false` branches are required. You can provide just one link, or multiple links per branch via an array.

It's important to note that when you provide links for `splitLink` to execute, `splitLink` will create an entirely new link chain based on the links you passed. Therefore, you need to use a [**terminating link**](./overview.md#the-terminating-link) if you only provide one link or add the terminating link at the end of the array if you provide multiple links to be executed on a branch. Here's a visual representation of how `splitLink` works:

## Usage Example

### Disable batching for certain requests

Let's say you're using `httpBatchLink` as the terminating link in your tRPC client config. This means request batching is enabled in every request. However, if you need to disable batching only for certain requests, you would need to change the terminating link in your tRPC client config dynamically between `httpLink` and `httpBatchLink`. This is a perfect opportunity for `splitLink` to be used:

#### 1. Configure client / `utils/trpc.ts`

```ts title="client/index.ts"
import {
  createTRPCClient,
  httpBatchLink,
  httpLink,
  splitLink,
} from '@trpc/client';
import type { AppRouter } from '../server';

const url = `http://localhost:3000`;

const client = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      condition(op) {
        // check for context property `skipBatch`
        return Boolean(op.context.skipBatch);
      },
      // when condition is true, use normal request
      true: httpLink({
        url,
      }),
      // when condition is false, use batching
      false: httpBatchLink({
        url,
      }),
    }),
  ],
});
```

#### 2. Perform request without batching

```ts title='client.ts'
const postResult = proxy.posts.query(null, {
  context: {
    skipBatch: true,
  },
});
```

or:

```tsx title='MyComponent.tsx'
export function MyComponent() {
  const postsQuery = proxy.posts.useQuery(undefined, {
    trpc: {
      context: {
        skipBatch: true,
      },
    }
  });
  return (
    <pre>{JSON.stringify(postsQuery.data ?? null, null, 4)}</pre>
  )
})
```

## `splitLink` Options

The `splitLink` function takes an options object that has three fields: `condition`, `true`, and `false`.

```ts
function splitLink<TRouter extends AnyRouter = AnyRouter>(opts: {
  condition: (op: Operation) => boolean;
  /**
   * The link to execute next if the test function returns `true`.
   */
  true: TRPCLink<TRouter> | TRPCLink<TRouter>[];
  /**
   * The link to execute next if the test function returns `false`.
   */
  false: TRPCLink<TRouter> | TRPCLink<TRouter>[];
}) => TRPCLink<TRouter>
```

## Reference

You can check out the source code for this link on [GitHub.](https://github.com/trpc/trpc/blob/main/packages/client/src/links/splitLink.ts)

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
