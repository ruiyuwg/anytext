## Experimental: standalone middlewares

This has been deprecated in favor of `.concat()`

tRPC has an experimental API called `experimental_standaloneMiddleware` which allows you to independently define a middleware that can be used with any tRPC instance. Creating middlewares using `t.middleware` has the limitation that
the `Context` type is tied to the `Context` type of the tRPC instance. This means that you cannot use the same middleware with multiple tRPC instances that have different `Context` types.

Using `experimental_standaloneMiddleware` you can create a middleware that explicitly defines its requirements, i.e. the Context, Input and Meta types:

```ts twoslash
// @target: esnext
import {
  experimental_standaloneMiddleware,
  initTRPC,
  TRPCError,
} from '@trpc/server';
import * as z from 'zod';

const projectAccessMiddleware = experimental_standaloneMiddleware<{
  ctx: { allowedProjects: string[] }; // defaults to 'object' if not defined
  input: { projectId: string }; // defaults to 'unknown' if not defined
  // 'meta', not defined here, defaults to 'object | undefined'
}>().create((opts) => {
  if (!opts.ctx.allowedProjects.includes(opts.input.projectId)) {
    throw new TRPCError({
      code: 'FORBIDDEN',
      message: 'Not allowed',
    });
  }

  return opts.next();
});

const t1 = initTRPC
  .context<{
    allowedProjects: string[];
  }>()
  .create();

// ✅ `ctx.allowedProjects` satisfies "string[]" and `input.projectId` satisfies "string"
const accessControlledProcedure = t1.procedure
  .input(z.object({ projectId: z.string() }))
  .use(projectAccessMiddleware);

// @errors: 2345
// ❌ `ctx.allowedProjects` satisfies "string[]" but `input.projectId` does not satisfy "string"
const accessControlledProcedure2 = t1.procedure
  .input(z.object({ projectId: z.number() }))
  .use(projectAccessMiddleware);

// @errors: 2345
// ❌ `ctx.allowedProjects` does not satisfy "string[]" even though `input.projectId` satisfies "string"
const t2 = initTRPC
  .context<{
    allowedProjects: number[];
  }>()
  .create();

const accessControlledProcedure3 = t2.procedure
  .input(z.object({ projectId: z.string() }))
  .use(projectAccessMiddleware);
```

Here is an example with multiple standalone middlewares:

```ts twoslash
// @target: esnext
import { experimental_standaloneMiddleware, initTRPC } from '@trpc/server';
import * as z from 'zod';

const t = initTRPC.create();
const schemaA = z.object({ valueA: z.string() });
const schemaB = z.object({ valueB: z.string() });

const valueAUppercaserMiddleware = experimental_standaloneMiddleware<{
  input: z.infer<typeof schemaA>;
}>().create((opts) => {
  return opts.next({
    ctx: { valueAUppercase: opts.input.valueA.toUpperCase() },
  });
});

const valueBUppercaserMiddleware = experimental_standaloneMiddleware<{
  input: z.infer<typeof schemaB>;
}>().create((opts) => {
  return opts.next({
    ctx: { valueBUppercase: opts.input.valueB.toUpperCase() },
  });
});

const combinedInputThatSatisfiesBothMiddlewares = z.object({
  valueA: z.string(),
  valueB: z.string(),
  extraProp: z.string(),
});

t.procedure
  .input(combinedInputThatSatisfiesBothMiddlewares)
  .use(valueAUppercaserMiddleware)
  .use(valueBUppercaserMiddleware)
  .query(
    ({
      input: { valueA, valueB, extraProp },
      ctx: { valueAUppercase, valueBUppercase },
    }) =>
      `valueA: ${valueA}, valueB: ${valueB}, extraProp: ${extraProp}, valueAUppercase: ${valueAUppercase}, valueBUppercase: ${valueBUppercase}`,
  );
```

In addition to JSON-serializable data, tRPC can use FormData, File, and other Binary types as procedure inputs

## Client Setup

While tRPC natively supports several non-json serializable types, your client may need a little link configuration to support them depending on your setup.

`httpLink` supports non-json content types out the box, if you're only using this then your existing setup should work immediately

```ts
import { httpLink } from '@trpc/client';

trpc.createClient({
  links: [
    httpLink({
      url: 'http://localhost:2022',
    }),
  ],
});
```

However, not all links support these new content types, if you're using `httpBatchLink` or `httpBatchStreamLink` you will need to include a splitLink and check which link to use depending on the content

```ts
import {
  httpBatchLink,
  httpLink,
  isNonJsonSerializable,
  splitLink,
} from '@trpc/client';

trpc.createClient({
  links: [
    splitLink({
      condition: (op) => isNonJsonSerializable(op.input),
      true: httpLink({
        url,
      }),
      false: httpBatchLink({
        url,
      }),
    }),
  ],
});
```

If you are using `transformer` in your tRPC server, typescript requires that your tRPC client link defines `transformer` as well.\
Use this example as base:

```ts
import {
  httpBatchLink,
  httpLink,
  isNonJsonSerializable,
  splitLink,
} from '@trpc/client';
import superjson from 'superjson';

trpc.createClient({
  links: [
    splitLink({
      condition: (op) => isNonJsonSerializable(op.input),
      true: httpLink({
        url,
        transformer: {
          // request - convert data before sending to the tRPC server
          serialize: (data) => data,
          // response - convert the tRPC response before using it in client
          deserialize: superjson.deserialize, // or your other transformer
        },
      }),
      false: httpBatchLink({
        url,
        transformers: superjson, // or your other transformer
      }),
    }),
  ],
});
```
