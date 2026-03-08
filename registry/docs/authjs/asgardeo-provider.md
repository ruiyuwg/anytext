[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Asgardeo

![](/img/providers/asgardeo.svg)

# Asgardeo Provider

## Resources[](#resources)

-   [Asgardeo - Authentication Guide](https://wso2.com/asgardeo/docs/guides/authentication)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/asgardeo
```

```
https://example.com/auth/callback/asgardeo
```

```
https://example.com/auth/callback/asgardeo
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/asgardeo.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_ASGARDEO_ID
AUTH_ASGARDEO_SECRET
AUTH_ASGARDEO_ISSUER
```

### Configuration[](#configuration)

Follow these steps:

1.  Log into the [Asgardeo console](https://console.asgardeo.io)
2.  Next, go to “Application” tab (more info [here](https://wso2.com/asgardeo/docs/guides/applications/register-oidc-web-app/))
3.  Register a standard based, Open ID connect, application
4.  Add the **callback URLs**: `http://localhost:3000/api/auth/callback/asgardeo` (development) and `https://{YOUR_DOMAIN}.com/api/auth/callback/asgardeo` (production)
5.  After registering the application, go to “Protocol” tab.
6.  Check `code` as the grant type.
7.  Add “Authorized redirect URLs” & “Allowed origins fields”
8.  Make Email, First Name, Photo URL user attributes mandatory from the console.

Then, add the ClientID, ClientSecret, and Issuer values to your environment variables.

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import Asgardeo from "next-auth/providers/asgardeo"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Asgardeo],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import Asgardeo from "@auth/qwik/providers/asgardeo"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [Asgardeo],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import Asgardeo from "@auth/sveltekit/providers/asgardeo"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [Asgardeo],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import Asgardeo from "@auth/express/providers/asgardeo"
 
app.use("/auth/*", ExpressAuth({ providers: [Asgardeo] }))
```

[Apple](/getting-started/providers/apple "Apple")[Auth0](/getting-started/providers/auth0 "Auth0")
