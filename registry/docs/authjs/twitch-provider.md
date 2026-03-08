[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Twitch

![](/img/providers/twitch.svg)

# Twitch Provider

## Resources[](#resources)

-   [Twitch App Console](https://dev.twitch.tv/console/apps)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/twitch
```

```
https://example.com/auth/callback/twitch
```

```
https://example.com/auth/callback/twitch
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/twitch.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_TWITCH_ID
AUTH_TWITCH_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Twitch from "next-auth/providers/twitch"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Twitch],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Twitch from "@auth/qwik/providers/twitch"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Twitch],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Twitch from "@auth/sveltekit/providers/twitch"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Twitch],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Twitch from "@auth/express/providers/twitch"
 
app.use("/auth/*", ExpressAuth({ providers: [Twitch] }))
```

### Notes[](#notes)

-   Twitch will redirect to the first redirect URI if multiple are added.

[Trakt](/getting-started/providers/trakt "Trakt")[Twitter](/getting-started/providers/twitter "Twitter")
