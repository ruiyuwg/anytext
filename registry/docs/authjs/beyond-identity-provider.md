[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Beyondidentity

![](/img/providers/beyondidentity.svg)

# Beyond Identity Provider

## Resources[](#resources)

-   [Beyond Identity Developer documentation](https://developer.beyondidentity.com/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/beyondidentity
```

```
https://example.com/auth/callback/beyondidentity
```

```
https://example.com/auth/callback/beyondidentity
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/beyondidentity.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_BEYOND_IDENTITY_ID
AUTH_BEYOND_IDENTITY_SECRET
AUTH_BEYOND_IDENTITY_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import BeyondIdentity from "next-auth/providers/beyondidentity"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [BeyondIdentity],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import BeyondIdentity from "@auth/qwik/providers/beyondidentity"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [BeyondIdentity],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import BeyondIdentity from "@auth/sveltekit/providers/beyondidentity"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [BeyondIdentity],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import BeyondIdentity from "@auth/express/providers/beyondidentity"
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [BeyondIdentity],
  })
)
```

[Battlenet](/getting-started/providers/battlenet "Battlenet")[Bitbucket](/getting-started/providers/bitbucket "Bitbucket")
