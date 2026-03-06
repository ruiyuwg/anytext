## Output validation

Since subscriptions are async iterators, you have to go through the iterator to validate the output.

### Example with zod v4

```ts title="zAsyncIterable.ts"
import type { TrackedEnvelope } from '@trpc/server';
import { isTrackedEnvelope, tracked } from '@trpc/server';
import { z } from 'zod';

function isAsyncIterable<TValue, TReturn = unknown>(
  value: unknown,
): value is AsyncIterable<TValue, TReturn> {
  return !!value && typeof value === 'object' && Symbol.asyncIterator in value;
}
const trackedEnvelopeSchema =
  z.custom<TrackedEnvelope<unknown>>(isTrackedEnvelope);

/**
 * A Zod schema helper designed specifically for validating async iterables. This schema ensures that:
 * 1. The value being validated is an async iterable.
 * 2. Each item yielded by the async iterable conforms to a specified type.
 * 3. The return value of the async iterable, if any, also conforms to a specified type.
 */
export function zAsyncIterable<
  TYieldIn,
  TYieldOut,
  TReturnIn = void,
  TReturnOut = void,
  Tracked extends boolean = false,
>(opts: {
  /**
   * Validate the value yielded by the async generator
   */
  yield: z.ZodType<TYieldOut, TYieldIn>;
  /**
   * Validate the return value of the async generator
   * @remark not applicable for subscriptions
   */
  return?: z.ZodType<TReturnOut, TReturnIn>;
  /**
   * Whether if the yielded values are tracked
   * @remark only applicable for subscriptions
   */
  tracked?: Tracked;
}) {
  return z
    .custom<
      AsyncIterable<
        Tracked extends true ? TrackedEnvelope<TYieldIn> : TYieldIn,
        TReturnIn
      >
    >((val) => isAsyncIterable(val))
    .transform(async function* (iter) {
      const iterator = iter[Symbol.asyncIterator]();

      try {
        let next;
        while ((next = await iterator.next()) && !next.done) {
          if (opts.tracked) {
            const [id, data] = trackedEnvelopeSchema.parse(next.value);
            yield tracked(id, await opts.yield.parseAsync(data));
            continue;
          }
          yield opts.yield.parseAsync(next.value);
        }
        if (opts.return) {
          return await opts.return.parseAsync(next.value);
        }
        return;
      } finally {
        await iterator.return?.();
      }
    }) as z.ZodType<
    AsyncIterable<
      Tracked extends true ? TrackedEnvelope<TYieldIn> : TYieldIn,
      TReturnIn,
      unknown
    >,
    AsyncIterable<
      Tracked extends true ? TrackedEnvelope<TYieldOut> : TYieldOut,
      TReturnOut,
      unknown
    >
  >;
}
```

### Example with zod v3

```ts title="zAsyncIterable.ts"
import type { TrackedEnvelope } from '@trpc/server';
import { isTrackedEnvelope, tracked } from '@trpc/server';
import { z } from 'zod';

function isAsyncIterable<TValue, TReturn = unknown>(
  value: unknown,
): value is AsyncIterable<TValue, TReturn> {
  return !!value && typeof value === 'object' && Symbol.asyncIterator in value;
}
const trackedEnvelopeSchema =
  z.custom<TrackedEnvelope<unknown>>(isTrackedEnvelope);

/**
 * A Zod schema helper designed specifically for validating async iterables. This schema ensures that:
 * 1. The value being validated is an async iterable.
 * 2. Each item yielded by the async iterable conforms to a specified type.
 * 3. The return value of the async iterable, if any, also conforms to a specified type.
 */
export function zAsyncIterable<
  TYieldIn,
  TYieldOut,
  TReturnIn = void,
  TReturnOut = void,
  Tracked extends boolean = false,
>(opts: {
  /**
   * Validate the value yielded by the async generator
   */
  yield: z.ZodType<TYieldIn, any, TYieldOut>;
  /**
   * Validate the return value of the async generator
   * @remark not applicable for subscriptions
   */
  return?: z.ZodType<TReturnIn, any, TReturnOut>;
  /**
   * Whether if the yielded values are tracked
   * @remark only applicable for subscriptions
   */
  tracked?: Tracked;
}) {
  return z
    .custom<
      AsyncIterable<
        Tracked extends true ? TrackedEnvelope<TYieldIn> : TYieldIn,
        TReturnIn
      >
    >((val) => isAsyncIterable(val))
    .transform(async function* (iter) {
      const iterator = iter[Symbol.asyncIterator]();

      try {
        let next;
        while ((next = await iterator.next()) && !next.done) {
          if (opts.tracked) {
            const [id, data] = trackedEnvelopeSchema.parse(next.value);
            yield tracked(id, await opts.yield.parseAsync(data));
            continue;
          }
          yield opts.yield.parseAsync(next.value);
        }
        if (opts.return) {
          return await opts.return.parseAsync(next.value);
        }
        return;
      } finally {
        await iterator.return?.();
      }
    }) as z.ZodType<
    AsyncIterable<
      Tracked extends true ? TrackedEnvelope<TYieldIn> : TYieldIn,
      TReturnIn,
      unknown
    >,
    any,
    AsyncIterable<
      Tracked extends true ? TrackedEnvelope<TYieldOut> : TYieldOut,
      TReturnOut,
      unknown
    >
  >;
}
```

Now you can use this helper to validate the output of your subscription procedures:

```ts title="_app.ts"
import { publicProcedure, router } from '../trpc';
import { zAsyncIterable } from './zAsyncIterable';

export const appRouter = router({
  mySubscription: publicProcedure
    .input(
      z.object({
        lastEventId: z.coerce.number().min(0).optional(),
      }),
    )
    .output(
      zAsyncIterable({
        yield: z.object({
          count: z.number(),
        }),
        tracked: true,
      }),
    )
    .subscription(async function* (opts) {
      let index = opts.input.lastEventId ?? 0;
      while (true) {
        index++;
        yield tracked(index, {
          count: index,
        });

        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    }),
});
```

tRPC procedures may define validation logic for their input and/or output, and validators are also used to infer the types of inputs and outputs (using the [Standard Schema](https://standardschema.dev) interface if available, or custom interfaces for supported validators if not). We have first class support for many popular validators, and you can [integrate validators](#contributing-your-own-validator-library) which we don't directly support.

## Input Validators

By defining an input validator, tRPC can check that a procedure call is correct and return a validation error if not.

To set up an input validator, use the `procedure.input()` method:

```ts twoslash
// @target: esnext
import { initTRPC } from '@trpc/server';
// ---cut---

// Our examples use Zod by default, but usage with other libraries is identical
import { z } from 'zod';

export const t = initTRPC.create();
const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query((opts) => {
      const name = opts.input.name;
      //    ^?
      return {
        greeting: `Hello ${opts.input.name}`,
      };
    }),
});
```

### Input Merging

`.input()` can be stacked to build more complex types, which is particularly useful when you want to utilise some common input to a collection of procedures in a [middleware](middlewares).

```ts twoslash
// @target: esnext
import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.create();

// ---cut---

const baseProcedure = t.procedure
  .input(z.object({ townName: z.string() }))
  .use((opts) => {
    const input = opts.input;
    //    ^?

    console.log(`Handling request with user from: ${input.townName}`);

    return opts.next();
  });

export const appRouter = t.router({
  hello: baseProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query((opts) => {
      const input = opts.input;
      //    ^?
      return {
        greeting: `Hello ${input.name}, my friend from ${input.townName}`,
      };
    }),
});
```

## Output Validators

Validating outputs is not always as important as defining inputs, since tRPC gives you automatic type-safety by inferring the return type of your procedures. Some reasons to define an output validator include:

- Checking that data returned from untrusted sources is correct
- Ensure that you are not returning more data to the client than necessary

If output validation fails, the server will respond with an `INTERNAL_SERVER_ERROR`.

```ts twoslash
// @target: esnext
import { initTRPC } from '@trpc/server';
// @noErrors
// ---cut---

import { z } from 'zod';

export const t = initTRPC.create();
const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .output(
      z.object({
        greeting: z.string(),
      }),
    )
    .query((opts) => {
      return {
        gre,
        // ^|
      };
    }),
});
```

### Output validation of subscriptions

Since subscriptions are async iterators, you can use the same validation techniques as above.

Have a look at the [subscriptions guide](subscriptions.md#output-validation) for more information.

## The most basic validator: a function

You can define a validator without any 3rd party dependencies, with a function.

We don't recommend making a custom validator unless you have a specific need, but it's important to understand that there's no magic here - it's *just typescript*!

In most cases we recommend you use a [validation library](#library-integrations)

```ts twoslash
import { initTRPC } from '@trpc/server';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input((value): string => {
      if (typeof value === 'string') {
        return value;
      }
      throw new Error('Input is not a string');
    })
    .output((value): string => {
      if (typeof value === 'string') {
        return value;
      }
      throw new Error('Output is not a string');
    })
    .query((opts) => {
      const { input } = opts;
      //      ^?
      return `hello ${input}`;
    }),
});

export type AppRouter = typeof appRouter;
```
