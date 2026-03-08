[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Spotify

![](/img/providers/spotify.svg)

# Spotify Provider

## Resources[](#resources)

-   [Spotify OAuth documentation](https://developer.spotify.com/documentation/general/guides/authorization-guide)
-   [Spotify app console](https://developer.spotify.com/dashboard/applications)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/spotify
```

```
https://example.com/auth/callback/spotify
```

```
https://example.com/auth/callback/spotify
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/spotify.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_SPOTIFY_ID
AUTH_SPOTIFY_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Spotify from "next-auth/providers/spotify"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Spotify],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Spotify from "@auth/qwik/providers/spotify"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Spotify],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Spotify from "@auth/sveltekit/providers/spotify"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Spotify],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Spotify from "@auth/express/providers/spotify"
 
app.use("/auth/*", ExpressAuth({ providers: [Spotify] }))
```

[Slack](/getting-started/providers/slack "Slack")[Strava](/getting-started/providers/strava "Strava")
