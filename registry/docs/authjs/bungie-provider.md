[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Bungie

![](/img/providers/bungie.svg)

# Bungie Provider

## Resources[](#resources)

-   [Bungie OAuth documentation](https://github.com/Bungie-net/api/wiki/OAuth-Documentation)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/bungie
```

```
https://example.com/auth/callback/bungie
```

```
https://example.com/auth/callback/bungie
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/bungie.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_BUNGIE_ID
AUTH_BUNGIE_SECRET
AUTH_BUNGIE_API_KEY
```

### Configuration[](#configuration)

Navigate to [https://www.bungie.net/en/Application](https://www.bungie.net/en/Application) and fill in the required details:

-   Application name
-   Application Status
-   Website
-   OAuth Client Type
    -   Confidential
-   Redirect URL
    -   [https://localhost:3000/api/auth/callback/bungie](https://localhost:3000/api/auth/callback/bungie)
-   Scope
    -   `Access items like your Bungie.net notifications, memberships, and recent Bungie.Net forum activity.`
-   Origin Header

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth";
import Bungie from "next-auth/providers/boxyhq-saml";
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Bungie({
      clientId: AUTH_BUNGIE_ID
      clientSecret: AUTH_BUNGIE_SECRET
      headers: { "X-API-Key": AUTH_BUNGIE_API_KEY }
    }),
  ],
});
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Bungie from "@auth/qwik/providers/boxyhq-saml";
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      Bungie({
        clientId: import.meta.env.AUTH_BUNGIE_ID
        clientSecret: import.meta.env.AUTH_BUNGIE_SECRET
        headers: { "X-API-Key": import.meta.env.AUTH_BUNGIE_API_KEY }
      }),
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit";
import Bungie from "@auth/sveltekit/providers/boxyhq-saml";
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    Bungie({
      clientId: AUTH_BUNGIE_ID
      clientSecret: AUTH_BUNGIE_SECRET
      headers: { "X-API-Key": AUTH_BUNGIE_API_KEY }
    }),
  ],
});
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express";
import Bungie from "@auth/express/providers/boxyhq-saml";
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
      Bungie({
        clientId: AUTH_BUNGIE_ID
        clientSecret: AUTH_BUNGIE_SECRET
        headers: { "X-API-Key": AUTH_BUNGIE_API_KEY }
      }),
    ],
  })
);
```

### Notes[](#notes)

-   Bungie requires all clients to be using **https**.
-   Bungie does not allow the hostname `localhost`, so for local development, you must use `127.0.0.1` for example

[Boxyhq Saml](/getting-started/providers/boxyhq-saml "Boxyhq Saml")[Click Up](/getting-started/providers/click-up "Click Up")
