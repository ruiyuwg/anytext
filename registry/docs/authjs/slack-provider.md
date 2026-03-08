[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Slack

![](/img/providers/slack.svg)

# Slack Provider

## Resources[](#resources)

-   [Slack Authentication documentation](https://api.slack.com/authentication)
-   [Sign-in with Slack](https://api.slack.com/docs/sign-in-with-slack)
-   [Slack app console](https://api.slack.com/apps)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/slack
```

```
https://example.com/auth/callback/slack
```

```
https://example.com/auth/callback/slack
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/slack.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_SLACK_ID
AUTH_SLACK_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Slack from "next-auth/providers/slack"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Slack],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Slack from "@auth/qwik/providers/slack"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Slack],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Slack from "@auth/sveltekit/providers/slack"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Slack],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Slack from "@auth/express/providers/slack"
 
app.use("/auth/*", ExpressAuth({ providers: [Slack] }))
```

### Notes[](#notes)

-   Slack requires that the redirect URL of your app uses https, even for local development. An easy workaround for this is using a service like [ngrok](https://ngrok.com/) that creates a secure tunnel to your app, using https. Remember to set the url as `AUTH_URL` as well.

[Simplelogin](/getting-started/providers/simplelogin "Simplelogin")[Spotify](/getting-started/providers/spotify "Spotify")
