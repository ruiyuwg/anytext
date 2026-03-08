[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Zoom

![](/img/providers/zoom.svg)

# Zoom Provider

## Resources[](#resources)

-   [Zoom OAuth 2.0 Integration Guide](https://developers.zoom.us/docs/integrations/oauth/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/zoom
```

```
https://example.com/auth/callback/zoom
```

```
https://example.com/auth/callback/zoom
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/zoom.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_ZOOM_ID
AUTH_ZOOM_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Zoom from "next-auth/providers/zoom"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Zoom],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Zoom from "@auth/qwik/providers/zoom"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Zoom],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Zoom from "@auth/sveltekit/providers/zoom"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Zoom],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Zoom from "@auth/express/providers/zoom"
 
app.use("/auth/*", ExpressAuth({ providers: [Zoom] }))
```

[Zoho](/getting-started/providers/zoho "Zoho")[Azure Tables](/getting-started/adapters/azure-tables "Azure Tables")
