[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Naver

![](/img/providers/naver.svg)

# Naver Provider

## Resources[](#resources)

-   [Naver OAuth documentation](https://developers.naver.com/docs/login/overview/overview.md)
-   [Naver OAuth documentation 2](https://developers.naver.com/docs/login/api/api.md)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/naver
```

```
https://example.com/auth/callback/naver
```

```
https://example.com/auth/callback/naver
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/naver.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_NAVER_ID
AUTH_NAVER_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Naver from "next-auth/providers/naver"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Naver],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Naver from "@auth/qwik/providers/naver"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Naver],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Naver from "@auth/sveltekit/providers/naver"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Naver],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Naver from "@auth/express/providers/naver"
 
app.use("/auth/*", ExpressAuth({ providers: [Naver] }))
```

[Microsoft Entra Id](/getting-started/providers/microsoft-entra-id "Microsoft Entra Id")[Netlify](/getting-started/providers/netlify "Netlify")
