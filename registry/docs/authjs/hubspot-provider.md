[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Hubspot

![](/img/providers/hubspot.svg)

# Hubspot Provider

## Resources[](#resources)

-   [HubSpot OAuth documentation](https://developers.hubspot.com/docs/api/oauth-quickstart-guide)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/hubspot
```

```
https://example.com/auth/callback/hubspot
```

```
https://example.com/auth/callback/hubspot
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/hubspot.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_HUBSPOT_ID
AUTH_HUBSPOT_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Hubspot from "next-auth/providers/hubspot"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Hubspot],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Hubspot from "@auth/qwik/providers/hubspot"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Hubspot],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Hubspot from "@auth/sveltekit/providers/hubspot"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Hubspot],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Hubspot from "@auth/express/providers/hubspot"
 
app.use("/auth/*", ExpressAuth({ providers: [Hubspot] }))
```

### Notes[](#notes)

-   HubSpot returns a limited amount of information on the token holder (see [docs](https://legacydocs.hubspot.com/docs/methods/oauth2/get-access-token-information)).
-   One other issue is that the name and profile photo cannot be fetched through API as discussed [here](https://community.hubspot.com/t5/APIs-Integrations/Profile-photo-is-not-retrieved-with-User-API/m-p/325521).

[Google](/getting-started/providers/google "Google")[Identity Server4](/getting-started/providers/identity-server4 "Identity Server4")
