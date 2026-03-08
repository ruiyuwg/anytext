[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Freshbooks

![](/img/providers/freshbooks.svg)

# Freshbooks Provider

## Resources[](#resources)

-   [FreshBooks OAuth documentation](https://developer.freshbooks.com/docs/places-api/authentication/#web-applications)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/freshbooks
```

```
https://example.com/auth/callback/freshbooks
```

```
https://example.com/auth/callback/freshbooks
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/freshbooks.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_FRESHBOOKS_ID
AUTH_FRESHBOOKS_SECRET
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import FreshBooks from "next-auth/providers/freshbooks"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [FreshBooks],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import FreshBooks from "@auth/qwik/providers/freshbooks"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [FreshBooks],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import FreshBooks from "@auth/sveltekit/providers/freshbooks"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [FreshBooks],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import FreshBooks from "@auth/express/providers/freshbooks"
 
app.use("/auth/*", ExpressAuth({ providers: [FreshBooks] }))
```

### Notes[](#notes)

-   Freshbooks requires an additional apiVersion parameter in YYYYMMDD format, which essentially states “I’m prepared for API changes up to this date”.

[Foursquare](/getting-started/providers/foursquare "Foursquare")[Frontegg](/getting-started/providers/frontegg "Frontegg")
