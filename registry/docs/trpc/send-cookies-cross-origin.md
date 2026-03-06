# Send cookies cross-origin

If your API resides on a different origin than your front-end and you wish to send cookies to it, you will need to enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) on your server and send cookies with your requests by providing the option `{credentials: "include"}` to fetch.

The arguments provided to the fetch function used by tRPC can be modified as follow.

```ts title='app.ts'
import { createTRPCClient, httpBatchLink } from '@trpc/client';

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

# Custom header

The headers option can be customized in the config when using the [`httpBatchLink`](./links/httpBatchLink.md) or the [`httpLink`](./links/httpLink.md).

`headers` can be both an object or a function. If it's a function it will get called dynamically for every HTTP request.

```ts title='utils/trpc.ts'
// Import the router type from your server file
import type { AppRouter } from '@/server/routers/app';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

let token: string;

export function setToken(newToken: string) {
  /**
   * You can also save the token to cookies, and initialize from
   * cookies above.
   */
  token = newToken;
}

export const trpc = createTRPCNext<AppRouter>({
  config(config) {
    return {
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
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
    };
  },
});
```

### Example with auth login

```ts title='pages/auth.tsx'
const loginMut = trpc.auth.login.useMutation({
  onSuccess(opts) {
    token = opts.accessToken;
  },
});
```

The `token` can be whatever you want it to be. It's entirely up to you whether that's just a client-side
variable that you update the value of on success or whether you store the token and pull it from local storage.
