[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Threads

![](/img/providers/threads.svg)

# Threads Provider

## Resources[](#resources)

-   [Threads OAuth documentation](https://developers.facebook.com/docs/threads)
-   [Threads OAuth apps](https://developers.facebook.com/apps/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/threads
```

```
https://example.com/auth/callback/threads
```

```
https://example.com/auth/callback/threads
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/threads.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_THREADS_ID
AUTH_THREADS_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Threads from "next-auth/providers/threads"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Threads],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Threads from "@auth/qwik/providers/threads"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Threads],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Threads from "@auth/sveltekit/providers/threads"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Threads],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Threads from "@auth/express/providers/threads"
 
app.use("/auth/*", ExpressAuth({ providers: [Threads] }))
```

### Notes[](#notes)

-   Email address is not returned by the Threads API.
-   Threads requires a callback URL to be configured in your Facebook app and Facebook requires you to use **https** even for localhost. In order to do that, you either need to [add an SSL to your localhost](https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/) or use a proxy such as [ngrok](https://ngrok.com/docs).

[Strava](/getting-started/providers/strava "Strava")[Tiktok](/getting-started/providers/tiktok "Tiktok")
