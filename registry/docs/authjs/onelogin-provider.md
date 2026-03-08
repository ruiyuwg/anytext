[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Onelogin

![](/img/providers/onelogin.svg)

# OneLogin Provider

## Resources[](#resources)

-   [OneLogin OAuth documentation](https://example.com)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/onelogin
```

```
https://example.com/auth/callback/onelogin
```

```
https://example.com/auth/callback/onelogin
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/onelogin.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_ONELOGIN_ID
AUTH_ONELOGIN_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import OneLogin from "next-auth/providers/onelogin"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [OneLogin],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import OneLogin from "@auth/qwik/providers/onelogin"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [OneLogin],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import OneLogin from "@auth/sveltekit/providers/onelogin"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [OneLogin],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import OneLogin from "@auth/express/providers/onelogin"
 
app.use("/auth/*", ExpressAuth({ providers: [OneLogin] }))
```

[Okta](/getting-started/providers/okta "Okta")[Osso](/getting-started/providers/osso "Osso")
