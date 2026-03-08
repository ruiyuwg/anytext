[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Faceit

![](/img/providers/faceit.svg)

# Faceit Provider

## Resources[](#resources)

-   [FACEIT OAuth documentation](https://cdn.faceit.com/third_party/docs/FACEIT_Connect_3.0.pdf)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/faceit
```

```
https://example.com/auth/callback/faceit
```

```
https://example.com/auth/callback/faceit
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/faceit.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_FACEIT_ID
AUTH_FACEIT_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import FaceIt from "next-auth/providers/faceit"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [FaceIt],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import FaceIt from "@auth/qwik/providers/faceit"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [FaceIt],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import FaceIt from "@auth/sveltekit/providers/faceit"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [FaceIt],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import FaceIt from "@auth/express/providers/faceit"
 
app.use("/auth/*", ExpressAuth({ providers: [FaceIt] }))
```

### Notes[](#notes)

-   Grant type: `Authorization Code`
-   Scopes required to get basic infos like email, nickname, guid and avatar: `openid, email, profile`

[Facebook](/getting-started/providers/facebook "Facebook")[Figma](/getting-started/providers/figma "Figma")
