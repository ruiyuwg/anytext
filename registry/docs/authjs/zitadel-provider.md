[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Zitadel

![](/img/providers/zitadel.svg)

# Zitadel Provider

## Resources[](#resources)

-   [ZITADEL OpenID Endpoints](https://zitadel.com/docs/apis/openidoauth/endpoints)
-   [ZITADEL recommended OAuth Flows](https://zitadel.com/docs/guides/integrate/oauth-recommended-flows)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/zitadel
```

```
https://example.com/auth/callback/zitadel
```

```
https://example.com/auth/callback/zitadel
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/zitadel.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_ZITADEL_ID
AUTH_ZITADEL_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Zitadel from "next-auth/providers/zitadel"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Zitadel],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Zitadel from "@auth/qwik/providers/zitadel"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Zitadel],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Zitadel from "@auth/sveltekit/providers/zitadel"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Zitadel],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Zitadel from "@auth/express/providers/zitadel"
 
app.use("/auth/*", ExpressAuth({ providers: [Zitadel] }))
```

### Notes[](#notes)

The Redirect URIs used when creating the credentials must include your full domain and end in the callback path. For example:

-   For production: `https://{YOUR_DOMAIN}/api/auth/callback/zitadel`
-   For development: `http://localhost:3000/api/auth/callback/zitadel`

Make sure to enable dev mode in ZITADEL console to allow redirects for local development.

ZITADEL also returns a email\_verified boolean property in the profile. You can use this property to restrict access to people with verified accounts.

```
const options = {
  ...
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "zitadel") {
        return profile.email_verified;
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  }
  ...
}
```

[Yandex](/getting-started/providers/yandex "Yandex")[Zoho](/getting-started/providers/zoho "Zoho")
