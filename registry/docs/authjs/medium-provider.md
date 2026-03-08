[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Medium

![](/img/providers/medium.svg)

# Medium Provider

## Resources[](#resources)

-   [Medium OAuth documentation](https://example.com)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/medium
```

```
https://example.com/auth/callback/medium
```

```
https://example.com/auth/callback/medium
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/medium.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_MEDIUM_ID
AUTH_MEDIUM_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Medium from "next-auth/providers/medium"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Medium],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Medium from "@auth/qwik/providers/medium"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Medium],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Medium from "@auth/sveltekit/providers/medium"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Medium],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Medium from "@auth/express/providers/medium"
 
app.use("/auth/*", ExpressAuth({ providers: [Medium] }))
```

### Notes[](#notes)

-   Email address is not returned by the Medium API.

[Mattermost](/getting-started/providers/mattermost "Mattermost")[Microsoft Entra Id](/getting-started/providers/microsoft-entra-id "Microsoft Entra Id")
