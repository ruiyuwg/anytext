[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Pipedrive

![](/img/providers/pipedrive.svg)

# Pipedrive Provider

## Resources[](#resources)

-   [Pipedrive OAuth documentation](https://pipedrive.readme.io/docs/marketplace-oauth-authorization)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/pipedrive
```

```
https://example.com/auth/callback/pipedrive
```

```
https://example.com/auth/callback/pipedrive
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/pipedrive.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_PIPEDRIVE_ID
AUTH_PIPEDRIVE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import PipeDrive from "next-auth/providers/pipedrive"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [PipeDrive],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import PipeDrive from "@auth/qwik/providers/pipedrive"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [PipeDrive],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import PipeDrive from "@auth/sveltekit/providers/pipedrive"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [PipeDrive],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import PipeDrive from "@auth/express/providers/pipedrive"
 
app.use("/auth/*", ExpressAuth({ providers: [PipeDrive] }))
```

[Pinterest](/getting-started/providers/pinterest "Pinterest")[Postmark](/getting-started/providers/postmark "Postmark")
