[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Zoho

![](/img/providers/zoho.svg)

# Zoho Provider

## Resources[](#resources)

-   [Zoho OAuth 2.0 Integration Guide](https://www.zoho.com/accounts/protocol/oauth/web-server-applications.html)
-   [Zoho API Console](https://api-console.zoho.com)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/zoho
```

```
https://example.com/auth/callback/zoho
```

```
https://example.com/auth/callback/zoho
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/zoho.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_ZOHO_ID
AUTH_ZOHO_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Zoho from "next-auth/providers/zoho"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Zoho],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Zoho from "@auth/qwik/providers/zoho"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Zoho],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Zoho from "@auth/sveltekit/providers/zoho"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Zoho],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Zoho from "@auth/express/providers/zoho"
 
app.use("/auth/*", ExpressAuth({ providers: [Zoho] }))
```

[Zitadel](/getting-started/providers/zitadel "Zitadel")[Zoom](/getting-started/providers/zoom "Zoom")
