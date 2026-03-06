## Advanced usage

When initializing your router, tRPC allows you to:

- Setup [request contexts](/docs/server/context)
- Assign [metadata](/docs/server/metadata) to procedures
- [Format](/docs/server/error-formatting) and [handle](/docs/server/error-handling) errors
- [Transform data](/docs/server/data-transformers) as needed
- Customize the [runtime configuration](#runtime-configuration)

You can use method chaining to customize your `t`-object on initialization. For example:

```ts
const t = initTRPC.context<Context>().meta<Meta>().create({
  /* [...] */
});
```

### Runtime Configuration

```ts
export interface RootConfig<TTypes extends RootTypes> {
  /**
   * Use a data transformer
   * @see https://trpc.io/docs/v11/data-transformers
   */
  transformer: TTypes['transformer'];

  /**
   * Use custom error formatting
   * @see https://trpc.io/docs/v11/error-formatting
   */
  errorFormatter: ErrorFormatter<TTypes['ctx'], any>;

  /**
   * Allow `@trpc/server` to run in non-server environments
   * @warning **Use with caution**, this should likely mainly be used within testing.
   * @default false
   */
  allowOutsideOfServer: boolean;

  /**
   * Is this a server environment?
   * @warning **Use with caution**, this should likely mainly be used within testing.
   * @default typeof window === 'undefined' || 'Deno' in window || process.env.NODE_ENV === 'test'
   */
  isServer: boolean;

  /**
   * Is this development?
   * Will be used to decide if the API should return stack traces
   * @default process.env.NODE_ENV !== 'production'
   */
  isDev: boolean;
}
```

You may need to call your procedure(s) directly from the same server they're hosted in, `createCallerFactory()` can be used to achieve this. This is useful for server-side calls and for integration testing of your tRPC procedures.

`createCaller` should not be used to call procedures from within other procedures. This creates overhead by (potentially) creating context again, executing all middlewares, and validating the input - all of which were already done by the current procedure. Instead, you should extract the shared logic into a separate function and call that from within the procedures, like so:
