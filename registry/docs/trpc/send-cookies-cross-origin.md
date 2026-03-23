# Send cookies cross-origin

If your API resides on a different origin than your front-end and you wish to send cookies to it, you will need to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on your server and send cookies with your requests by providing the option `{credentials: "include"}` to fetch.

The arguments provided to the fetch function used by tRPC can be modified as follows.

```ts twoslash title='app.ts'
// @filename: server.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();
export const appRouter = t.router({});
export type AppRouter = typeof appRouter;

// @filename: client.ts
// ---cut---
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';

const client = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'YOUR_SERVER_URL',
      fetch(url, options) {
        return fetch(url, {
          ...options,
          credentials: 'include',
        });
      },
    }),
  ],
});
```

You also need to enable CORS on your server by modifying your [adapter](/docs/server/adapters), or the HTTP server which fronts your API. The best way to do this varies adapter-by-adapter and based on your hosting infrastructure, and individual adapters generally document this process where applicable.

# Headers

The headers option may be used with any of our HTTP links: [`httpBatchLink`](./links/httpBatchLink.md), [`httpBatchStreamLink`](./links/httpBatchStreamLink.md), [`httpLink`](./links/httpLink.md), or [`httpSubscriptionLink`](./links/httpSubscriptionLink.md).

`headers` can be both an object or a function. If it's a function it will get called dynamically for every HTTP request.

```ts twoslash title='utils/trpc.ts'
// @filename: server.ts
import { initTRPC } from '@trpc/server';
const t = initTRPC.create();
export const appRouter = t.router({});
export type AppRouter = typeof appRouter;

// @filename: client.ts
// ---cut---
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';

let token: string;

export function setToken(newToken: string) {
  /**
   * You can also save the token to cookies, and initialize from
   * cookies above.
   */
  token = newToken;
}

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      /**
       * Headers will be called on each request.
       */
      headers() {
        return {
          Authorization: token,
        };
      },
    }),
  ],
});
```

### Example with auth login

```ts twoslash title='auth.ts'
// @target: esnext
// @filename: server.ts
import { initTRPC } from '@trpc/server';
import { z } from 'zod';
const t = initTRPC.create();
export const appRouter = t.router({
  auth: t.router({
    login: t.procedure
      .input(z.object({ username: z.string(), password: z.string() }))
      .mutation(() => ({ accessToken: 'token' })),
  }),
});
export type AppRouter = typeof appRouter;

// @filename: utils.ts
export function setToken(token: string) {}

// @filename: auth.ts
import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';
const trpc = createTRPCClient<AppRouter>({ links: [httpBatchLink({ url: 'http://localhost:3000' })] });
import { setToken } from './utils';
// ---cut---
const result = await trpc.auth.login.mutate({ username: 'user', password: 'pass' });
setToken(result.accessToken);
```

The `token` can be whatever you want it to be. It's entirely up to you whether that's just a client-side
variable that you update the value of on success or whether you store the token and pull it from local storage.
