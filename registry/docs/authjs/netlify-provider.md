[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Netlify

![](/img/providers/netlify.svg)

# Netlify Provider

## Resources[](#resources)

-   [Netlify OAuth blog](https://www.netlify.com/blog/2016/10/10/integrating-with-netlify-oauth2/)
-   [Netlify OAuth example](https://github.com/netlify/netlify-oauth-example/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/netlify
```

```
https://example.com/auth/callback/netlify
```

```
https://example.com/auth/callback/netlify
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/netlify.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_NETLIFY_ID
AUTH_NETLIFY_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Netlify from "next-auth/providers/netlify"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Netlify],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Netlify from "@auth/qwik/providers/netlify"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Netlify],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Netlify from "@auth/sveltekit/providers/netlify"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Netlify],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Netlify from "@auth/express/providers/netlify"
 
app.use("/auth/*", ExpressAuth({ providers: [Netlify] }))
```

[Naver](/getting-started/providers/naver "Naver")[Netsuite](/getting-started/providers/netsuite "Netsuite")
