[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Twitter

![](/img/providers/twitter.svg)

# Twitter/X Provider

## Resources[](#resources)

-   [Twitter App documentation](https://developer.twitter.com/en/apps)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/twitter
```

```
https://example.com/auth/callback/twitter
```

```
https://example.com/auth/callback/twitter
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/twitter.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_TWITTER_ID
AUTH_TWITTER_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Twitter from "next-auth/providers/twitter"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Twitter],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Twitter from "@auth/qwik/providers/twitter"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Twitter],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Twitter from "@auth/sveltekit/providers/twitter"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Twitter],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Twitter from "@auth/express/providers/twitter"
 
app.use("/auth/*", ExpressAuth({ providers: [Twitter] }))
```

### Notes[](#notes)

-   Auth.js now uses Twitter/X OAuth 2.0 by default. There’s no need to set `version` anymore.
-   Email is currently not supported by Twitter/X OAuth 2.0.

[Twitch](/getting-started/providers/twitch "Twitch")[United Effects](/getting-started/providers/united-effects "United Effects")
