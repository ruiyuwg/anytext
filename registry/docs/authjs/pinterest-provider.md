[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Pinterest

![](/img/providers/pinterest.svg)

# Pinterest Provider

## Resources[](#resources)

-   [Pinterest OAuth documentation](https://developers.pinterest.com/docs/getting-started/authentication/)
-   [Pinterest app console](https://developers.pinterest.com/apps/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/pinterest
```

```
https://example.com/auth/callback/pinterest
```

```
https://example.com/auth/callback/pinterest
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/pinterest.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_PINTEREST_ID
AUTH_PINTEREST_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Pinterest from "next-auth/providers/pinterest"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Pinterest],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Pinterest from "@auth/qwik/providers/pinterest"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Pinterest],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Pinterest from "@auth/sveltekit/providers/pinterest"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Pinterest],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Pinterest from "@auth/express/providers/pinterest"
 
app.use("/auth/*", ExpressAuth({ providers: [Pinterest] }))
```

### Notes[](#notes)

-   To use in production, make sure the app has standard API access and not trial access

[Patreon](/getting-started/providers/patreon "Patreon")[Pipedrive](/getting-started/providers/pipedrive "Pipedrive")
