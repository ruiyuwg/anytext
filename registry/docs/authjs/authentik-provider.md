[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Authentik

![](/img/providers/authentik.svg)

# Authentik Provider

## Resources[](#resources)

-   [Authentik OAuth documentation](https://goauthentik.io/docs/providers/oauth2)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/authentik
```

```
https://example.com/auth/callback/authentik
```

```
https://example.com/auth/callback/authentik
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/authentik.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_AUTHENTIK_ID
AUTH_AUTHENTIK_SECRET
AUTH_AUTHENTIK_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth";
import Authentik from "next-auth/providers/authentik";
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Authentik({
    clientId: AUTH_AUTHENTIK_CLIENT_ID
    clientSecret: AUTH_AUTHENTIK_CLIENT_SECRET
    issuer: AUTH_AUTHENTIK_ISSUER
  })]
});
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Authentik from "@auth/qwik/providers/authentik";
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Authentik({
        clientId: import.meta.env.AUTH_AUTHENTIK_CLIENT_ID
        clientSecret: import.meta.env.AUTH_AUTHENTIK_CLIENT_SECRET
        issuer: import.meta.env.AUTH_AUTHENTIK_ISSUER
      })
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit";
import Authentik from "@auth/sveltekit/providers/authentik";
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Authentik({
    clientId: AUTH_AUTHENTIK_CLIENT_ID
    clientSecret: AUTH_AUTHENTIK_CLIENT_SECRET
    issuer: AUTH_AUTHENTIK_ISSUER
  })]
});
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express";
import Authentik from "@auth/express/providers/authentik";
 
app.use("/auth/*", ExpressAuth({
  providers: [Authentik({
    clientId: AUTH_AUTHENTIK_CLIENT_ID
    clientSecret: AUTH_AUTHENTIK_CLIENT_SECRET
    issuer: AUTH_AUTHENTIK_ISSUER
  })]
}));
```

💡

issuer should include the slug without a trailing slash – e.g., [https://my-authentik-domain.com/application/o/My\_Slug](https://my-authentik-domain.com/application/o/My_Slug)

[Auth0](/getting-started/providers/auth0 "Auth0")[Azure Ad](/getting-started/providers/azure-ad "Azure Ad")
