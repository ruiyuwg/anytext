# Local Link

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

# Logger Link

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
