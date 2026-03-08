[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Logto

![](/img/providers/logto.svg)

# Logto Provider

## Resources[](#resources)

-   [Logto Auth.js quickstart](https://docs.logto.io/quick-starts/next-auth)
-   [Integrate Logto in your application](https://docs.logto.io/integrate-logto/integrate-logto-into-your-application)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/logto
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/logto.mdx).

```
https://example.com/auth/callback/logto
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/logto.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_LOGTO_ID
AUTH_LOGTO_SECRET
AUTH_LOGTO_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Logto from "next-auth/providers/logto"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Logto],
})
```

Qwik not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/logto.mdx).

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Logto from "@auth/sveltekit/providers/logto"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Logto],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Logto from "@auth/express/providers/logto"
 
app.use("/auth/*", ExpressAuth({ providers: [Logto] }))
```

[Linkedin](/getting-started/providers/linkedin "Linkedin")[Loops](/getting-started/providers/loops "Loops")
