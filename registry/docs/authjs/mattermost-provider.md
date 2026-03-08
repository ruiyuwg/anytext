[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Mattermost

![](/img/providers/mattermost.svg)

# Mattermost Provider

## Resources[](#resources)

-   [Mattermost OAuth documentation](https://example.com)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/mattermost
```

```
https://example.com/auth/callback/mattermost
```

```
https://example.com/auth/callback/mattermost
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/mattermost.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_MATTERMOST_ID
AUTH_MATTERMOST_SECRET
AUTH_MATTERMOST_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Mattermost from "next-auth/providers/mattermost"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Mattermost],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Mattermost from "@auth/qwik/providers/mattermost"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Mattermost],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Mattermost from "@auth/sveltekit/providers/mattermost"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Mattermost],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Mattermost from "@auth/express/providers/mattermost"
 
app.use("/auth/*", ExpressAuth({ providers: [Mattermost] }))
```

### Notes[](#notes)

-   To create your Mattermost OAuth2 app visit `http://<your Mattermost instance url>/<your team>/integrations/oauth2-apps`
-   The Mattermost provider requires the `issuer` option to be set. This is the base url of your Mattermost instance. e.g `https://my-cool-server.cloud.mattermost.com`

[Mastodon](/getting-started/providers/mastodon "Mastodon")[Medium](/getting-started/providers/medium "Medium")
