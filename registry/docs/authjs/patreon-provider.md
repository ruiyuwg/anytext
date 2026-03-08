[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Patreon

![](/img/providers/patreon.svg)

# Patreon Provider

## Resources[](#resources)

-   [Patreon OAuth documentation](https://docs.patreon.com/#apiv2-oauth)
-   [Patreon Platform](https://www.patreon.com/portal/registration/register-clients)
-   [ApiV2 Scopes](https://docs.patreon.com/#scopes)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/patreon
```

```
https://example.com/auth/callback/patreon
```

```
https://example.com/auth/callback/patreon
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/patreon.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_PATREON_ID
AUTH_PATREON_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Patreon from "next-auth/providers/patreon"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Patreon],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Patreon from "@auth/qwik/providers/patreon"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Patreon],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Patreon from "@auth/sveltekit/providers/patreon"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Patreon],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Patreon from "@auth/express/providers/patreon"
 
app.use("/auth/*", ExpressAuth({ providers: [Patreon] }))
```

[Passkey](/getting-started/providers/passkey "Passkey")[Pinterest](/getting-started/providers/pinterest "Pinterest")
