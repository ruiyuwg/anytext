[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Box

![](/img/providers/box.svg)

# Box Provider

## Resources[](#resources)

-   [Box developers documentation](https://developer.box.com/reference/)
-   [Box OAuth documentation](https://developer.box.com/guides/sso-identities-and-app-users/connect-okta-to-app-users/configure-box/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/box
```

```
https://example.com/auth/callback/box
```

```
https://example.com/auth/callback/box
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/box.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_BOX_CLIENT_ID
AUTH_BOX_CLIENT_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Box from "next-auth/providers/box"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Box],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Box from "@auth/qwik/providers/box"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Box],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Box from "@auth/sveltekit/providers/box"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Box],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Box from "@auth/express/providers/box"
 
app.use("/auth/*", ExpressAuth({ providers: [Box] }))
```

[Bitbucket](/getting-started/providers/bitbucket "Bitbucket")[Boxyhq Saml](/getting-started/providers/boxyhq-saml "Boxyhq Saml")
