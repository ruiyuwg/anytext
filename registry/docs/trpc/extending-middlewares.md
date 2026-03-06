## Extending middlewares

We have prefixed this as `unstable_` as it's a new API, but you're safe to use it! [Read more](/docs/faq#unstable).

We have a powerful feature called `.pipe()` which allows you to extend middlewares in a typesafe manner.

Below we have an example of a middleware that extends a base middleware(foo). Like the context extension example above, piping middlewares will change properties of the context, and procedures will receive the new context value.

```ts twoslash
// @target: esnext
import { initTRPC, TRPCError } from '@trpc/server';

const t = initTRPC.create();
const publicProcedure = t.procedure;
const router = t.router;
const middleware = t.middleware;

// ---cut---

const fooMiddleware = t.middleware((opts) => {
  return opts.next({
    ctx: {
      foo: 'foo' as const,
    },
  });
});

const barMiddleware = fooMiddleware.unstable_pipe((opts) => {
  const { ctx } = opts;
  ctx.foo;
  //   ^?
  return opts.next({
    ctx: {
      bar: 'bar' as const,
    },
  });
});

const barProcedure = publicProcedure.use(barMiddleware);
barProcedure.query((opts) => {
  const { ctx } = opts;
  return ctx.bar;
  //     ^?
});
```

Beware that the order in which you pipe your middlewares matter and that the context must overlap. An example of a forbidden pipe is shown below. Here, the `fooMiddleware` overrides the `ctx.a` while `barMiddleware` still expects the root context from the initialization in `initTRPC` - so piping `fooMiddleware` with `barMiddleware` would not work, while piping `barMiddleware` with `fooMiddleware` does work.

```ts twoslash
import { initTRPC } from '@trpc/server';

const t = initTRPC
  .context<{
    a: {
      b: 'a';
    };
  }>()
  .create();

const fooMiddleware = t.middleware((opts) => {
  const { ctx } = opts;
  ctx.a; // 👈 fooMiddleware expects `ctx.a` to be an object
  //  ^?
  return opts.next({
    ctx: {
      a: 'a' as const, // 👈 `ctx.a` is no longer an object
    },
  });
});

const barMiddleware = t.middleware((opts) => {
  const { ctx } = opts;
  ctx.a; // 👈 barMiddleware expects `ctx.a` to be an object
  //  ^?
  return opts.next({
    ctx: {
      foo: 'foo' as const,
    },
  });
});

// @errors: 2345
// ❌ `ctx.a` does not overlap from `fooMiddleware` to `barMiddleware`
fooMiddleware.unstable_pipe(barMiddleware);

// ✅ `ctx.a` overlaps from `barMiddleware` and `fooMiddleware`
barMiddleware.unstable_pipe(fooMiddleware);
```
