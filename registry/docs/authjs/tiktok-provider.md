[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Tiktok

![](/img/providers/tiktok.svg)

# TikTok Provider

## Resources[](#resources)

-   [TikTok app console](https://developers.tiktok.com/)
-   [TikTok login kit documentation](https://developers.tiktok.com/doc/login-kit-web/)
-   [Available Scopes](https://developers.tiktok.com/doc/tiktok-api-scopes/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/tiktok
```

```
https://example.com/auth/callback/tiktok
```

```
https://example.com/auth/callback/tiktok
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/tiktok.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_TIKTOK_ID
AUTH_TIKTOK_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import TikTok from "next-auth/providers/tiktok"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [TikTok],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import TikTok from "@auth/qwik/providers/tiktok"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [TikTok],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import TikTok from "@auth/sveltekit/providers/tiktok"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [TikTok],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import TikTok from "@auth/express/providers/tiktok"
 
app.use("/auth/*", ExpressAuth({ providers: [TikTok] }))
```

### Notes[](#notes)

-   Production applications cannot use localhost URLs to sign in with TikTok. You need add the domain and Callback/Redirect url’s to your TikTok app and have them review and approved by the TikTok Team.
-   Email address is not supported by TikTok.
-   Client\_ID will be the Client Key in the TikTok Application

[Threads](/getting-started/providers/threads "Threads")[Todoist](/getting-started/providers/todoist "Todoist")
