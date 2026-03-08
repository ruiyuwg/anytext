[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Descope

![](/img/providers/descope.svg)

# Descope Provider

## Resources[](#resources)

-   [Descope OIDC](https://docs.descope.com/manage/idpapplications/oidc/)
-   [Descope Flows](https://docs.descope.com/customize/flows)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/descope
```

```
https://example.com/auth/callback/descope
```

```
https://example.com/auth/callback/descope
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/descope.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_DESCOPE_ID
AUTH_DESCOPE_SECRET
AUTH_DESCOPE_ISSUER
```

### Configuration[](#configuration)

Follow these steps:

1.  Log into the [Descope console](https://app.descope.com)
2.  Follow the [OIDC instructions](https://docs.descope.com/manage/idpapplications/oidc/)

Add the required environment variables from above to your `.env.local` file.

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Descope from "next-auth/providers/descope"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Descope],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Descope from "@auth/qwik/providers/descope"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Descope],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Descope from "@auth/sveltekit/providers/descope"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Descope],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Descope from "@auth/express/providers/descope"
 
app.use("/auth/*", ExpressAuth({ providers: [Descope] }))
```

### Using Descope Widgets[](#using-descope-widgets)

If you wish to use Descope [Widgets](https://docs.descope.com/widgets) with NextAuth.js, you will have to wrap your NextAuth.js components with our Next.js SDK and `<AuthProvider>`.

For more information on this, please look at our documentation [here](https://docs.descope.com/getting-started/nextauth/app-router#nextauth-and-widgets).

[Credentials](/getting-started/providers/credentials "Credentials")[Discord](/getting-started/providers/discord "Discord")
