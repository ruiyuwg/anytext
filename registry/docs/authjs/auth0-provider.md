[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Auth0

![](/img/providers/auth0.svg)

# Auth0 Provider

## Resources[](#resources)

-   [Auth0 documentation](https://auth0.com/docs/authenticate)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/auth0
```

```
https://example.com/auth/callback/auth0
```

```
https://example.com/auth/callback/auth0
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/auth0.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_AUTH0_ID
AUTH_AUTH0_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Auth0 from "next-auth/providers/auth0"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Auth0],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Auth0 from "@auth/qwik/providers/auth0"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Auth0],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Auth0 from "@auth/sveltekit/providers/auth0"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Auth0],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Auth0 from "@auth/express/providers/auth0"
 
app.use("/auth/*", ExpressAuth({ providers: [Auth0] }))
```

[Asgardeo](/getting-started/providers/asgardeo "Asgardeo")[Authentik](/getting-started/providers/authentik "Authentik")
