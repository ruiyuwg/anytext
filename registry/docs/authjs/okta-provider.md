[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Okta

![](/img/providers/okta.svg)

# Okta Provider

## Resources[](#resources)

-   [Okta OAuth documentation](https://developer.okta.com/docs/reference/api/oidc)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/okta
```

```
https://example.com/auth/callback/okta
```

```
https://example.com/auth/callback/okta
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/okta.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_OKTA_ID
AUTH_OKTA_SECRET
AUTH_OKTA_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Okta from "next-auth/providers/okta"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Okta],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Okta from "@auth/qwik/providers/okta"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Okta],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Okta from "@auth/sveltekit/providers/okta"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Okta],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Okta from "@auth/express/providers/okta"
 
app.use("/auth/*", ExpressAuth({ providers: [Okta] }))
```

[Notion](/getting-started/providers/notion "Notion")[Onelogin](/getting-started/providers/onelogin "Onelogin")
