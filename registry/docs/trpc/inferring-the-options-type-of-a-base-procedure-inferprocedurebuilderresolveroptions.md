## Inferring the options type of a "Base Procedure" {#inferProcedureBuilderResolverOptions}

In addition to being able to [infer the input and output types](/docs/client/vanilla/infer-types#inferring-input--output-types) of a procedure, you can also infer the options type of a specific procedure builder (or base procedure) using `inferProcedureBuilderResolverOptions`.

This type helper is useful for declaring a type to a function's parameters. Like for example, separating the procedure's handler (main execution code) from its definition at the router, or for creating a helper function that works with multiple procedures.

```ts twoslash
// @target: esnext
// ---cut---
import {
  inferProcedureBuilderResolverOptions,
  initTRPC,
  TRPCError,
} from '@trpc/server';
import { z } from 'zod';

type Organization = {
  id: string;
  name: string;
};
type Membership = {
  role: 'ADMIN' | 'MEMBER';
  Organization: Organization;
};
type User = {
  id: string;
  memberships: Membership[];
};
type Context = {
  /**
   * User is nullable
   */
  user: User | null;
};

const t = initTRPC.context<Context>().create();

export const publicProcedure = t.procedure;

// procedure that asserts that the user is logged in
export const authedProcedure = t.procedure.use(async function isAuthed(opts) {
  const { ctx } = opts;
  // `ctx.user` is nullable
  if (!ctx.user) {
    //     ^?
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }

  return opts.next({
    ctx: {
      // ✅ user value is known to be non-null now
      user: ctx.user,
    },
  });
});
// mock prisma
let prisma = {} as any;

// procedure that a user is a member of a specific organization
export const organizationProcedure = authedProcedure
  .input(z.object({ organizationId: z.string() }))
  .use(function isMemberOfOrganization(opts) {
    const membership = opts.ctx.user.memberships.find(
      (m) => m.Organization.id === opts.input.organizationId,
    );
    if (!membership) {
      throw new TRPCError({
        code: 'FORBIDDEN',
      });
    }
    return opts.next({
      ctx: {
        Organization: membership.Organization,
      },
    });
  });

// ---cut---
async function getMembersOfOrganization(
  opts: inferProcedureBuilderResolverOptions<typeof organizationProcedure>,
) {
  // input and ctx are now correctly typed!
  const { ctx, input } = opts;

  return await prisma.user.findMany({
    where: {
      membership: {
        organizationId: ctx.Organization.id,
      },
    },
  });
}
export const appRouter = t.router({
  listMembers: organizationProcedure.query(async (opts) => {
    // use helper function!
    const members = await getMembersOfOrganization(opts);

    return members;
  }),
});
```

## Subscriptions

For information on subscriptions, see [our subscriptions guide](../server/subscriptions.md).

***

To begin building your tRPC-based API, you'll first need to define your router. Once you've mastered the fundamentals, you can [customize your routers](#advanced-usage) for more advanced use cases.

## Initialize tRPC

You should initialize tRPC **exactly once** per application. Multiple instances of tRPC will cause issues.

```ts twoslash title='server/trpc.ts'
// @filename: trpc.ts
// ---cut---
import { initTRPC } from '@trpc/server';

// You can use any variable name you like.
// We use t to keep things simple.
const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
```

You'll notice we are exporting certain methods of the `t` variable here rather than `t` itself. This is to establish a certain set of procedures that we will use idiomatically in our codebase.

## Defining a router

Next, let's define a router with a procedure to use in our application. We have now created an API "endpoint".

In order for these endpoints to be exposed to the frontend, your [Adapter](/docs/server/adapters) should be configured with your `appRouter` instance.

```ts twoslash title="server/_app.ts"
// @filename: trpc.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();

export const publicProcedure = t.procedure;
export const router = t.router;

// @filename: _app.ts
import * as trpc from '@trpc/server';
// ---cut---
import { publicProcedure, router } from './trpc';

const appRouter = router({
  greeting: publicProcedure.query(() => 'hello tRPC v10!'),
});

// Export only the type of a router!
// This prevents us from importing server code on the client.
export type AppRouter = typeof appRouter;
```
