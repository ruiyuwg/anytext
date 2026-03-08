[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Strava

![](/img/providers/strava.svg)

# Strava Provider

## Resources[](#resources)

-   [Strava API documentation](http://developers.strava.com/docs/reference/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/strava
```

```
https://example.com/auth/callback/strava
```

```
https://example.com/auth/callback/strava
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/strava.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_STRAVA_ID
AUTH_STRAVA_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Strava from "next-auth/providers/strava"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Strava],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Strava from "@auth/qwik/providers/strava"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Strava],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Strava from "@auth/sveltekit/providers/strava"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Strava],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Strava from "@auth/express/providers/strava"
 
app.use("/auth/*", ExpressAuth({ providers: [Strava] }))
```

[Spotify](/getting-started/providers/spotify "Spotify")[Threads](/getting-started/providers/threads "Threads")
