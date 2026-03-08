[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Fusionauth

![](/img/providers/fusionauth.svg)

# Fusion Auth

## Resources[](#resources)

-   [FusionAuth OAuth documentation](https://fusionauth.io/docs/v1/tech/oauth/)
-   [FusionAuth 5-minute setup guide](https://fusionauth.io/docs/v1/tech/5-minute-setup-guide).

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/fusionauth
```

```
https://example.com/auth/callback/fusionauth
```

```
https://example.com/auth/callback/fusionauth
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/fusionauth.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_FUSIONAUTH_ID
AUTH_FUSIONAUTH_SECRET
AUTH_FUSIONAUTH_TENANT_ID
AUTH_FUSIONAUTH_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import FusionAuth from "next-auth/providers/fusionauth"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    FusionAuth({
      clientId: process.env.AUTH_FUSIONAUTH_ID,
      clientSecret: process.env.AUTH_FUSIONAUTH_SECRET,
      tenantId: process.env.AUTH_FUSIONAUTH_TENANT_ID,
      issuer: process.env.AUTH_FUSIONAUTH_ISSUER,
    }),
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import FusionAuth from "@auth/qwik/providers/fusionauth"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      FusionAuth({
        clientId: import.meta.env.AUTH_FUSIONAUTH_ID,
        clientSecret: import.meta.env.AUTH_FUSIONAUTH_SECRET,
        tenantId: import.meta.env.AUTH_FUSIONAUTH_TENANT_ID,
        issuer: import.meta.env.AUTH_FUSIONAUTH_ISSUER,
      }),
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import FusionAuth from "@auth/sveltekit/providers/fusionauth"
import {
  AUTH_FUSIONAUTH_ID,
  AUTH_FUSIONAUTH_SECRET,
  AUTH_FUSIONAUTH_TENANT_ID,
  AUTH_FUSIONAUTH_ISSUER,
} from "$env/static/private"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    FusionAuth({
      clientId: AUTH_FUSIONAUTH_ID,
      clientSecret: AUTH_FUSIONAUTH_SECRET,
      tenantId: AUTH_FUSIONAUTH_TENANT_ID,
      issuer: AUTH_FUSIONAUTH_ISSUER,
    }),
  ],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import FusionAuth from "@auth/express/providers/fusionauth"
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
      FusionAuth({
        clientId: process.env.AUTH_FUSIONAUTH_ID,
        clientSecret: process.env.AUTH_FUSIONAUTH_SECRET,
        tenantId: process.env.AUTH_FUSIONAUTH_TENANT_ID,
        issuer: process.env.AUTH_FUSIONAUTH_ISSUER,
      }),
    ],
  })
)
```

⚠️

If you’re using multi-tenancy, you need to pass in the tenantId option to apply the proper theme.

### Notes[](#notes)

-   An application can be created at `https://your-fusionauth-server-url/admin/application`

In the OAuth settings for your application, configure the following.

-   Redirect URL
    -   [https://localhost:3000/api/auth/callback/fusionauth](https://localhost:3000/api/auth/callback/fusionauth)
-   Enabled grants
    -   Make sure _Authorization Code_ is enabled.

If using JSON Web Tokens, you need to make sure the signing algorithm is RS256, you can create an RS256 key pair by going to Settings, Key Master, generate RSA and choosing SHA-256 as algorithm. After that, go to the JWT settings of your application and select this key as Access Token signing key and Id Token signing key.

[Frontegg](/getting-started/providers/frontegg "Frontegg")[GitHub](/getting-started/providers/github "GitHub")
