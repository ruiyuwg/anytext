## Signature

### Options

- If you need to set any options but don't want to pass any input, you can pass `undefined` instead.
- If you pass `skipToken` from `@tanstack/react-query`, the subscription will be paused.
- Have a look at our [SSE example](https://github.com/trpc/examples-next-sse-chat) for a complete example of how to use subscriptions

```tsx
function useSubscription<TOutput, TError>(
  input: TInput | SkipToken,
  opts?: UseTRPCSubscriptionOptions<TOutput, TError>,
): TRPCSubscriptionResult<TOutput, TError>;

interface UseTRPCSubscriptionOptions<TOutput, TError> {
  /**
   * Callback invoked when the subscription starts.
   */
  onStarted?: () => void;
  /**
   * Callback invoked when new data is received from the subscription.
   * @param data - The data received.
   */
  onData?: (data: TOutput) => void;
  /**
   * Callback invoked when an **unrecoverable error** occurs and the subscription is stopped.
   */
  onError?: (error: TError) => void;
  /**
   * Callback invoked when the subscription is completed.
   */
  onComplete?: () => void;
  /**
   * @deprecated Use a `skipToken` from `@tanstack/react-query` instead.
   * This will be removed in a future version.
   */
  enabled?: boolean;
}
```

### Return type

```ts
type TRPCSubscriptionResult<TOutput, TError> = {
  /**
   * The current status of the subscription.
   * Will be one of: `'idle'`, `'connecting'`, `'pending'`, or `'error'`.
   *
   * - `idle`: subscription is disabled or ended
   * - `connecting`: trying to establish a connection
   * - `pending`: connected to the server, receiving data
   * - `error`: an error occurred and the subscription is stopped
   */
  status: 'idle' | 'connecting' | 'pending' | 'error';
  /**
   * The last data received from the subscription.
   */
  data: TOutput | undefined;
  /**
   * The last error received - will be `null` whenever the status is `'pending'` or `'idle'`
   * - has a value only when the status is `'error'`
   * - *may* have a value when the status is `'connecting'`
   */
  error: TRPCClientError | null;
  /**
   * Function to reset the subscription.
   */
  reset: () => void;
};
```

## Example

```tsx title='components/MyComponent.tsx'
import { trpc } from '../utils/trpc';

export function MyComponent() {
  const [numbers, setNumbers] = React.useState<number[]>([]);

  const result = trpc.onNumber.useSubscription(undefined, {
    onData: (num) => {
      setNumbers((prev) => [...prev, num]);
    },
  });

  return (
    <div>
      <h1>Subscription Example</h1>
      <p>
        {result.status}: <pre>{JSON.stringify(result.data, null, 2)}</pre>
      </p>
      <h2>Previous numbers:</h2>
      <ul>
        {numbers.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>

      {result.status === 'error' && (
        <button onClick={() => result.reset()}>
          Something went wrong - restart the subscription
        </button>
      )}
    </div>
  );
}
```

`useUtils` is a hook that gives you access to helpers that let you manage the cached data of the queries you execute via `@trpc/react-query`. These helpers are actually thin wrappers around `@tanstack/react-query`'s [`queryClient`](https://tanstack.com/query/v5/docs/reference/QueryClient) methods. If you want more in-depth information about options and usage patterns for `useContext` helpers than what we provide here, we will link to their respective `@tanstack/react-query` docs so you can refer to them accordingly.

This hook was called `useContext()` until `10.41.0` (and is still aliased for the foreseeable future)

## Usage

`useUtils` returns an object with all the available queries you have in your routers. You use it the same way as your `trpc` client object. Once you reach a query, you'll have access to the query helpers. For example, let's say you have a `post` router with an `all` query:

```twoslash include server
// @target: esnext

// @filename: server.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const appRouter = t.router({
  post: t.router({
    all: t.procedure.query(() => {
      return {
        posts: [
          { id: 1, title: 'everlong' },
          { id: 2, title: 'After Dark' },
        ],
      };
    }),
  }),
});

export type AppRouter = typeof appRouter;
```

```ts twoslash title='server.ts'
// @include: server
```

Now in our component, when we navigate the object `useUtils` gives us and reach the `post.all` query, we'll get access to our query helpers!

```tsx twoslash title="MyComponent.tsx"
// @target: esnext
// @include: server
// @filename: MyComponent.tsx
import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from './server';

const trpc = createTRPCReact<AppRouter>();

// ---cut---
// @noErrors
function MyComponent() {
  const utils = trpc.useUtils();
  utils.post.all.f;
  //              ^|
  // [...]
}
```
