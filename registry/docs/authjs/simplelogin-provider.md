[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Simplelogin

![](/img/providers/simplelogin.svg)

# SimpleLogin Provider

## Resources[](#resources)

-   [Sign in with SimpleLogin](https://simplelogin.io/developer/)
-   [SimpleLogin OAuth documentation](https://simplelogin.io/docs/siwsl/intro/)
-   [SimpleLogin OAuth Configuration](https://app.simplelogin.io/developer)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/simplelogin
```

```
https://example.com/auth/callback/simplelogin
```

```
https://example.com/auth/callback/simplelogin
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/simplelogin.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_SIMPLELOGIN_ID
AUTH_SIMPLELOGIN_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

@/auth.ts

```
import NextAuth from "next-auth"
import SimpleLogin from "next-auth/providers/simplelogin"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [SimpleLogin],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import SimpleLogin from "@auth/qwik/providers/simplelogin"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [SimpleLogin],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import SimpleLogin from "@auth/sveltekit/providers/simplelogin"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [SimpleLogin],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import SimpleLogin from "@auth/express/providers/simplelogin"
 
app.use("/auth/*", ExpressAuth({ providers: [SimpleLogin] }))
```

## Notes[](#notes)

### Authorized Redirect URIs[](#authorized-redirect-uris)

The “Authorized redirect URIs” used must include your full domain and end in the callback path. By default, SimpleLogin whitelists all `http[s]://localhost:*` address to facilitate local development. For example;

-   For production: `https://{YOUR_DOMAIN}/api/auth/callback/simplelogin`
-   For development: By default **localhost** is whitelisted.

**Authorized Redirect URIs** must be **HTTPS** for security reason (except for `localhost`).

[Sendgrid](/getting-started/providers/sendgrid "Sendgrid")[Slack](/getting-started/providers/slack "Slack")
