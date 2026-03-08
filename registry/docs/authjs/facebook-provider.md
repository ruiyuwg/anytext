[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Facebook

![](/img/providers/facebook.svg)

# Facebook Provider

## Resources[](#resources)

-   [Facebook OAuth documentation](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/)
-   [Facebook Developer Apps](https://developers.facebook.com/apps/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/facebook
```

```
https://example.com/auth/callback/facebook
```

```
https://example.com/auth/callback/facebook
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/facebook.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_FACEBOOK_ID
AUTH_FACEBOOK_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Facebook from "next-auth/providers/facebook"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Facebook],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Facebook from "@auth/qwik/providers/facebook"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Facebook],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Facebook from "@auth/sveltekit/providers/facebook"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Facebook],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Facebook from "@auth/express/providers/facebook"
 
app.use("/auth/*", ExpressAuth({ providers: [Facebook] }))
```

### Notes[](#notes)

-   Production applications cannot use localhost URLs to sign in with Facebook. You need to use a dedicated development application in Facebook to use localhost callback URLs.
-   Email address may not be returned for accounts created on mobile.
-   `clientId` is your Facebook App ID, `clientSecret` is your Facebook App Secret.

[Eveonline](/getting-started/providers/eveonline "Eveonline")[Faceit](/getting-started/providers/faceit "Faceit")
