[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Foursquare

![](/img/providers/foursquare.svg)

# Foursquare Provider

## Resources[](#resources)

-   [Foursquare OAuth documentation](https://docs.foursquare.com/developer/reference/personalization-apis-authentication#web-app-authentication)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/foursquare
```

```
https://example.com/auth/callback/foursquare
```

```
https://example.com/auth/callback/foursquare
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/foursquare.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_FOURSQUARE__ID
AUTH_FOURSQUARE_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import FourSquare from "next-auth/providers/foursquare"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [FourSquare],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import FourSquare from "@auth/qwik/providers/foursquare"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [FourSquare],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import FourSquare from "@auth/sveltekit/providers/foursquare"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [FourSquare],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import FourSquare from "@auth/express/providers/foursquare"
 
app.use("/auth/*", ExpressAuth({ providers: [FourSquare] }))
```

### Notes[](#notes)

-   Foursquare requires an additional apiVersion parameter in YYYYMMDD format, which essentially states “I’m prepared for API changes up to this date”.

[Forwardemail](/getting-started/providers/forwardemail "Forwardemail")[Freshbooks](/getting-started/providers/freshbooks "Freshbooks")
