[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Duende Identity Server6

![](/img/providers/duende-identityserver6.svg)

# Duende Identity Server Provider

## Resources[](#resources)

-   [DuendeIdentityServer6 documentation](https://docs.duendesoftware.com/identityserver/v6)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/duende-identity-service
```

```
https://example.com/auth/callback/duende-identity-service
```

```
https://example.com/auth/callback/duende-identity-service
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/duende-identity-server6.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_DUENDE_IDENTITY_SERVER6_ID
AUTH_DUENDE_IDENTITY_SERVER6_SECRET
AUTH_DUENDE_IDENTITY_SERVER6_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import DuendeIdentityServer6 from "next-auth/providers/duende-identity-server6"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [DuendeIdentityServer6],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import DuendeIdentityServer6 from "@auth/qwik/providers/duende-identity-server6"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [DuendeIdentityServer6],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import DuendeIdentityServer6 from "@auth/sveltekit/providers/duende-identity-server6"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [DuendeIdentityServer6],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import DuendeIdentityServer6 from "@auth/express/providers/duende-identity-server6"
 
app.use("/auth/*", ExpressAuth({ providers: [DuendeIdentityServer6] }))
```

### Demo IdentityServer[](#demo-identityserver)

The configuration below is for the demo server at [https://demo.duendesoftware.com/](https://demo.duendesoftware.com/)

If you want to try it out, you can copy and paste the configuration below.

You can sign in to the demo service with either `bob`/`bob` or `alice`/`alice`.

```
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6"
providers: [
  DuendeIDS6Provider({
    clientId: "interactive.confidential",
    clientSecret: "secret",
    issuer: "https://demo.duendesoftware.com",
  }),
]
```

[Dropbox](/getting-started/providers/dropbox "Dropbox")[Eveonline](/getting-started/providers/eveonline "Eveonline")
