[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Reddit

![](/img/providers/reddit.svg)

# Reddit Provider

## Resources[](#resources)

-   [Reddit API documentation](https://www.reddit.com/dev/api/)
-   [Reddit app console](https://www.reddit.com/prefs/apps/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/reddit
```

```
https://example.com/auth/callback/reddit
```

```
https://example.com/auth/callback/reddit
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/reddit.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_REDDIT_ID
AUTH_REDDIT_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Reddit from "next-auth/providers/reddit"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Reddit],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Reddit from "@auth/qwik/providers/reddit"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Reddit],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Reddit from "@auth/sveltekit/providers/reddit"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Reddit],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Reddit from "@auth/express/providers/reddit"
 
app.use("/auth/*", ExpressAuth({ providers: [Reddit] }))
```

### Notes[](#notes)

-   Reddit requires authorization every time you go through their page.
-   Allows one callback URL per Client ID / Client Secret.
-   This Provider template only has a one hour access token to it and only has the “identity” scope. If you want to get a refresh token as well you must set these authorization params:

./auth.ts

```
export const { handlers, auth, signin, signout } = NextAuth({
  providers: [
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET,
      authorization: {
        params: {
          duration: "permanent",
        },
      },
    }),
  ],
})
```

[Postmark](/getting-started/providers/postmark "Postmark")[Resend](/getting-started/providers/resend "Resend")
