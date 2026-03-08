[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Coinbase

![](/img/providers/coinbase.svg)

# Coinbase Provider

## Resources[](#resources)

-   [Coinbase OAuth documentation](https://developers.coinbase.com/api/v2)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/coinbase
```

```
https://example.com/auth/callback/coinbase
```

```
https://example.com/auth/callback/coinbase
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/coinbase.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_COINBASE_ID
AUTH_COINBASE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Coinbase from "next-auth/providers/coinbase"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Coinbase],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Coinbase from "@auth/qwik/providers/coinbase"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Coinbase],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Coinbase from "@auth/sveltekit/providers/coinbase"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Coinbase],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Coinbase from "@auth/express/providers/coinbase"
 
app.use("/auth/*", ExpressAuth({ providers: [Coinbase] }))
```

### Notes[](#notes)

-   This Provider template has a 2 hour access token to it. A refresh token is also returned.

[Cognito](/getting-started/providers/cognito "Cognito")[Credentials](/getting-started/providers/credentials "Credentials")
