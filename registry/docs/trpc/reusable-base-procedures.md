## Reusable "Base Procedures"

As a general pattern we recommend you rename and export `t.procedure` as `publicProcedure`, which then makes room for you to create other named procedures for specific use cases and export those too. This pattern is called "base procedures" and is a key pattern for code and behaviour re-use in tRPC; every application is likely to need it.

In the below code, we're using reusable base procedures to build common use-cases for our app - we're making a reusable base procedures for logged in users (`authedProcedure`) & another base procedure that takes an `organizationId` and validates that a user is part of that organization.

> This is a simplified example; in practice you may want to use some combination of [Headers](/docs/client/headers), [Context](context), [Middleware](middlewares), and [Metadata](metadata), to [authenticate](https://en.wikipedia.org/wiki/Authentication) and [authorize](authorization) your users.

```ts twoslash
// @target: esnext
import { initTRPC, TRPCError } from '@trpc/server';
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

export const appRouter = t.router({
  whoami: authedProcedure.query(async (opts) => {
    // user is non-nullable here
    const { ctx } = opts;
    //      ^?
    return ctx.user;
  }),
  addMember: organizationProcedure
    .input(
      z.object({
        email: z.string().email(),
      }),
    )
    .mutation((opts) => {
      // ctx contains the non-nullable user & the organization being queried
      const { ctx } = opts;
      //       ^?

      // input includes the validated email of the user being invited & the validated organizationId
      const { input } = opts;
      //       ^?

      return '...';
    }),
});
```
