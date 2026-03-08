[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Trakt

![](/img/providers/trakt.svg)

# Trakt Provider

## Resources[](#resources)

-   [Trakt OAuth documentation](https://trakt.docs.apiary.io/#reference/authentication-oauth)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/trakt
```

```
https://example.com/auth/callback/trakt
```

```
https://example.com/auth/callback/trakt
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/trakt.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_TRAKT_ID
AUTH_TRAKT_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Trakt from "next-auth/providers/trakt"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Trakt],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Trakt from "@auth/qwik/providers/trakt"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Trakt],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Trakt from "@auth/sveltekit/providers/trakt"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Trakt],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Trakt from "@auth/express/providers/trakt"
 
app.use("/auth/*", ExpressAuth({ providers: [Trakt] }))
```

### Notes[](#notes)

-   If you’re using the api in production by calling `api.trakt.tv`. Follow the example. If you wish to develop on Trakt’s sandbox environment by calling `api-staging.trakt.tv`, change the URLs.
-   Trakt does not allow hotlinking images. Even the authenticated user’s profile picture.
-   Trakt does not supply the authenticated user’s email.

[Todoist](/getting-started/providers/todoist "Todoist")[Twitch](/getting-started/providers/twitch "Twitch")
