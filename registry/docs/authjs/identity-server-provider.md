[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Identity Server4

![](/img/providers/identity-server4.svg)

# Identity Server Provider

💡

This provider has been deprecated and is superceded by [Duende IdentityServer6](/getting-started/providers/duende-identity-server6).

## Resources[](#resources)

-   [IdentityServer4 OAuth documentation](https://identityserver4.readthedocs.io/en/latest/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/identity-server4
```

```
https://example.com/auth/callback/identity-server4
```

```
https://example.com/auth/callback/identity-server4
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/identity-server4.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_IDENTITY_SERVER4_ID
AUTH_IDENTITY_SERVER4_SECRET
AUTH_IDENTITY_SERVER4_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import IdentityServer4 from "next-auth/providers/identity-server4"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [IdentityServer4],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import IdentityServer4 from "@auth/qwik/providers/identity-server4"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [IdentityServer4],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import IdentityServer4 from "@auth/sveltekit/providers/identity-server4"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [IdentityServer4],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import IdentityServer4 from "@auth/express/providers/identity-server4"
 
app.use("/auth/*", ExpressAuth({ providers: [IdentityServer4] }))
```

[Hubspot](/getting-started/providers/hubspot "Hubspot")[Instagram](/getting-started/providers/instagram "Instagram")
