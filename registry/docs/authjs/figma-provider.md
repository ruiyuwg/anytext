[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Figma

![](/img/providers/figma.svg)

# Figma Provider

## Resources[](#resources)

-   [Using OAuth 2 on Figma](https://www.figma.com/developers/api#oauth2)
-   [User Type](https://www.figma.com/developers/api#users-types)
-   [Scopes](https://www.figma.com/developers/api#authentication-scopes)
-   [Migrate](https://www.figma.com/developers/api#oauth_migration_guide)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/figma
```

```
https://example.com/auth/callback/figma
```

```
https://example.com/auth/callback/figma
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/figma.mdx).

### Environment Variables[](#environment-variables)

Next.jsQwikSvelteKitExpress

.env.local

```
AUTH_FIGMA_ID
AUTH_FIGMA_SECRET
```

.env

```
AUTH_FIGMA_ID
AUTH_FIGMA_SECRET
```

.env

```
AUTH_FIGMA_ID
AUTH_FIGMA_SECRET
```

.env

```
AUTH_FIGMA_ID
AUTH_FIGMA_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

@/auth.ts

```
import NextAuth from "next-auth"
import Figma from "next-auth/providers/figma"
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Figma],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Figma from "@auth/qwik/providers/figma"
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Figma],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Figma from "@auth/sveltekit/providers/figma"
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Figma],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Figma from "@auth/express/providers/figma"
app.use("/auth/*", ExpressAuth({ providers: [Figma] }))
```

⚠️

The URL must be accessed via the user’s browser and not an embedded webview inside your application. Webview access to the Figma OAuth flow is not supported and may stop working for some or all users without an API version update.

[Faceit](/getting-started/providers/faceit "Faceit")[Forwardemail](/getting-started/providers/forwardemail "Forwardemail")
