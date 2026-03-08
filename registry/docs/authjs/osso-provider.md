[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Osso

![](/img/providers/osso.svg)

# Osso Provider

## Resources[](#resources)

-   [Osso Project](https://github.com/enterprise-oss/osso)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/osso
```

```
https://example.com/auth/callback/osso
```

```
https://example.com/auth/callback/osso
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/osso.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_OSSO_ID
AUTH_OSSO_SECRET
AUTH_OSSO_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Osso from "next-auth/providers/osso"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Osso],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Osso from "@auth/qwik/providers/osso"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Osso],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Osso from "@auth/sveltekit/providers/osso"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Osso],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Osso from "@auth/express/providers/osso"
 
app.use("/auth/*", ExpressAuth({ providers: [Osso] }))
```

### Notes[](#notes)

-   You can configure your OAuth Clients on your Osso Admin UI, i.e. [https://yourInstance.com/admin/config](https://yourInstance.com/admin/config) - you’ll need to get a Client ID and Secret and allow-list your redirect URIs.
-   SAML - SSO differs a bit from OAuth, for every tenant who wants to sign in to your application using SAML, you and your customer need to perform a multi-step configuration in Osso’s Admin UI and the admin dashboard of the tenant’s Identity Provider. Osso provides documentation for providers like Okta and Osso, cloud-based IDPs who also offer a developer account that’s useful for testing. Osso also provides a Mock IDP that you can use for testing without needing to sign up for an Identity Provider service.
-   `issuer` should be the fully qualified domain – e.g. `demo.ossoapp.com`

[Onelogin](/getting-started/providers/onelogin "Onelogin")[Osu](/getting-started/providers/osu "Osu")
