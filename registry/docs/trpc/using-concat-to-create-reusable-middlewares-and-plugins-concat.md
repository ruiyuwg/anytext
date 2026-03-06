## Using `.concat()` to create reusable middlewares and plugins {#concat}

:::tip

- Creating middlewares using `t.middleware` has the limitation that the `Context` type is tied to the `Context` type of the tRPC instance.
- Creating middlewares with `experimental_standaloneMiddleware()` has the limitation that you cannot define input parsers and similar tied to your module.

:::

tRPC has an API called `.concat()` which allows you to independently define a partial procedure that can be used with any tRPC instance that matches the context and metadata of the plugin.

This helper primarily targets creating plugins and libraries with tRPC.

```ts twoslash
// @target: esnext
// ------------------------------------------------
// 🧩🧩🧩 a library creating a reusable plugin 🧩🧩🧩
// @filename: myPlugin.ts

import { initTRPC, TRPCError } from '@trpc/server';

export function createMyPlugin() {
  // When creating a plugin for tRPC, you use the same API as creating any other tRPC-app
  // this is the plugin's root `t`-object
  const t = initTRPC
    .context<{
      // the procedure using the plugin will need to extend this context
    }>()
    .meta<{
      // the base `initTRPC`-object of the application using this needs to extend this meta
    }>()
    .create();

  return {
    // you can also add `.input()` if you want your plugin to do input validation
    pluginProc: t.procedure.use((opts) => {
      return opts.next({
        ctx: {
          fromPlugin: 'hello from myPlugin' as const,
        },
      });
    }),
  };
}
// ------------------------------------
// 🚀🚀🚀 the app using the plugin 🚀🚀🚀
// @filename: app.ts
import { createMyPlugin } from './myPlugin';
import { initTRPC, TRPCError } from '@trpc/server';


// the app's root `t`-object
const t = initTRPC
  .context<{
    // ...
  }>()
  .create();


export const publicProcedure = t.procedure;
export const router = t.router;

// initialize the plugin (a real-world example would likely take options here)
const plugin = createMyPlugin();

// create a base procedure using the plugin
const procedureWithPlugin = publicProcedure
  .concat(
    plugin.pluginProc,
  )
  .use(opts => {
    const { ctx } = opts;
    //      ^?
    return opts.next()
  })


export const appRouter = router({
  hello: procedureWithPlugin.query(opts => {
    return opts.ctx.fromPlugin;
  })
})
```
