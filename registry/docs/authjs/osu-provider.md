[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Osu

![](/img/providers/osu.svg)

# Osu Provider

## Resources[](#resources)

-   [osu! OAuth documentation](https://osu.ppy.sh/docs/index.html#authentication)
-   [osu! app console](https://osu.ppy.sh/home/account/edit#new-oauth-application)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/osu
```

```
https://example.com/auth/callback/osu
```

```
https://example.com/auth/callback/osu
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/osu.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_OSU_ID
AUTH_OSU_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Osu from "next-auth/providers/osu"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Osu],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Osu from "@auth/qwik/providers/osu"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Osu],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Osu from "@auth/sveltekit/providers/osu"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Osu],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Osu from "@auth/express/providers/osu"
 
app.use("/auth/*", ExpressAuth({ providers: [Osu] }))
```

### Notes[](#notes)

-   osu! does not provide a user email.

[Osso](/getting-started/providers/osso "Osso")[Passage](/getting-started/providers/passage "Passage")
