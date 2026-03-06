## Library integrations

tRPC works out of the box with a number of popular validation and parsing libraries, including any library conforming to [Standard Schema](https://standardschema.dev). The below are some examples of usage with validators which we officially maintain support for.

### With [Zod](https://github.com/colinhacks/zod)

Zod is our default recommendation, it has a strong ecosystem which makes it a great choice to use in multiple parts of your codebase. If you have no opinion of your own and want a powerful library which won't limit future needs, Zod is a great choice.

```ts twoslash
import { initTRPC } from '@trpc/server';
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
    .output(
      z.object({
        greeting: z.string(),
      }),
    )
    .query(({ input }) => {
      //      ^?
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
```

### With [Yup](https://github.com/jquense/yup)

```ts twoslash
import { initTRPC } from '@trpc/server';
import * as yup from 'yup';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(
      yup.object({
        name: yup.string().required(),
      }),
    )
    .output(
      yup.object({
        greeting: yup.string().required(),
      }),
    )
    .query(({ input }) => {
      //      ^?
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
```

### With [Superstruct](https://github.com/ianstormtaylor/superstruct)

```ts twoslash
import { initTRPC } from '@trpc/server';
import { object, string } from 'superstruct';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(object({ name: string() }))
    .output(object({ greeting: string() }))
    .query(({ input }) => {
      //      ^?
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
```

### With [scale-ts](https://github.com/paritytech/scale-ts)

```ts twoslash
import { initTRPC } from '@trpc/server';
import * as $ from 'scale-codec';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input($.object($.field('name', $.str)))
    .output($.object($.field('greeting', $.str)))
    .query(({ input }) => {
      //      ^?
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
```

### With [Typia](https://typia.io/docs/utilization/trpc/)

```ts
import { initTRPC } from '@trpc/server';
import typia from 'typia';
import { v4 } from 'uuid';
import { IBbsArticle } from '../structures/IBbsArticle';

const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  store: publicProcedure
    .input(typia.createAssert<IBbsArticle.IStore>())
    .output(typia.createAssert<IBbsArticle>())
    .query(({ input }) => {
      return {
        id: v4(),
        writer: input.writer,
        title: input.title,
        body: input.body,
        created_at: new Date().toString(),
      };
    }),
});

export type AppRouter = typeof appRouter;
```

### With [ArkType](https://github.com/arktypeio/arktype#trpc)

```ts
import { initTRPC } from '@trpc/server';
import { type } from 'arktype';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure.input(type({ name: 'string' })).query((opts) => {
    return {
      greeting: `hello ${opts.input.name}`,
    };
  }),
});

export type AppRouter = typeof appRouter;
```

### With [effect](https://github.com/Effect-TS/effect/tree/main/packages/schema)

```ts
import { initTRPC } from '@trpc/server';
import { Schema } from 'effect';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(Schema.standardSchemaV1(Schema.Struct({ name: Schema.String })))
    .output(Schema.standardSchemaV1(Schema.Struct({ greeting: Schema.String })))
    .query(({ input }) => {
      //      ^?
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
```

<!--
### With [runtypes](https://github.com/pelotom/runtypes)

```ts twoslash
import { initTRPC } from '@trpc/server';
import * as T from 'runtypes';

const t = initTRPC.create();
const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(T.Record({ name: T.String }))
    .output(T.Record({ greeting: T.String }))
    .query(({ input }) => {
      //      ^?
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
``` -->

### With [Valibot](https://github.com/fabian-hiller/valibot)

```ts twoslash
import { initTRPC } from '@trpc/server';
import * as v from 'valibot';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(v.object({ name: v.string() }))
    .output(v.object({ greeting: v.string() }))
    .query(({ input }) => {
      //      ^?
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
```

### With [@robolex/sure](https://github.com/robolex-app/public_ts)

You're able to define your own Error types and error throwing function if necessary.
As a convenience `@robolex/sure` provides [sure/src/err.ts](https://github.com/robolex-app/public_ts/blob/main/packages/sure/src/err.ts):

```ts
// sure/src/err.ts
export const err = (schema) => (input) => {
  const [good, result] = schema(input);
  if (good) return result;
  throw result;
};
```

```ts
import { err, object, string } from '@robolex/sure';
import { initTRPC } from '@trpc/server';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(
      err(
        object({
          name: string,
        }),
      ),
    )
    .output(
      err(
        object({
          greeting: string,
        }),
      ),
    )
    .query(({ input }) => {
      //      ^?
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
```

### With [TypeBox](https://github.com/sinclairzx81/typebox)

```ts
import { Type } from '@sinclair/typebox';
import { initTRPC } from '@trpc/server';
import { wrap } from '@typeschema/typebox';

export const t = initTRPC.create();

const publicProcedure = t.procedure;

export const appRouter = t.router({
  hello: publicProcedure
    .input(wrap(Type.Object({ name: Type.String() })))
    .output(wrap(Type.Object({ greeting: Type.String() })))
    .query(({ input }) => {
      return {
        greeting: `hello ${input.name}`,
      };
    }),
});

export type AppRouter = typeof appRouter;
```
