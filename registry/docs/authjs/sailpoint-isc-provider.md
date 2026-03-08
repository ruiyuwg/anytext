[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Sailpoint

![](/img/providers/sailpoint.svg)

# SailPoint ISC Provider

SailPoint Identity Secure Cloud (ISC) is an enterprise SaaS platform for identity and security. In order to use this OAuth integration, you will need an ISC tenant. If you’re a SailPoint customer or partner, please talk to your SailPoint account manager for more details. If you are a developer, check out the [SailPoint Developer Community](https://developer.sailpoint.com/discuss/).

💡

This provider is not shipped with any of the Auth.js packages because it is an enterprise provider for which we cannot obtain a tenant to test and ensure compatibility. That being said, we’d like to make providers like these available to our users, so we will share a copy and paste version of the provider on respective docs pages like this. The provider configuration below is provided as-is and has been submitted by a community member with access to a SailPoint tenant.

## Resources[](#resources)

-   [SailPoint Identity Secure Cloud Authentication](https://developer.sailpoint.com/docs/api/authentication#choose-authorization-grant-flow)
-   [Managing API Keys and Personal Access Tokens](https://documentation.sailpoint.com/saas/help/common/api_keys.html?h=oauth+client#creating-an-api-key)
-   [SailPoint Developer Community](https://developer.sailpoint.com/discuss/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/sailpoint
```

```
https://example.com/auth/callback/sailpoint
```

```
https://example.com/auth/callback/sailpoint
```

```
https://example.com/auth/callback/sailpoint
```

### Create OAuth Client[](#create-oauth-client)

First, you’ll need to create a client in your SailPoint admin console in order to get your `clientId` and `clientSecret`. You can follow this [guide](https://documentation.sailpoint.com/saas/help/common/api_keys.html?h=oauth+client#creating-an-api-key), or follow the main steps below.

1.  Create an OAuth Client () with grant types: `AUTHORIZATION_TOKEN` and `REFRESH_TOKEN`.
2.  Set the redirect URL to match your callback URL, based on the example above.
3.  Finally, select the scopes `sp:scope:all`.
4.  Click “**Create**” and note down the generated `clientId` and `clientSecret`.

### Environment Variables[](#environment-variables)

```
AUTH_SAILPOINT_ID=
AUTH_SAILPOINT_SECRET=
AUTH_SAILPOINT_BASE_URL=https://{tenant}.identitynow.com
AUTH_SAILPOINT_BASE_API_URL=https://{tenant}.api.identitynow.com
```

### Configuration[](#configuration)

Unlike other Auth.js providers, this cannot be imported from the package (see the note at the top of this page for more details). However, you can copy and paste the following object into your `providers` array to enable this provider.

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    {
      id: "sailpoint",
      name: "SailPoint",
      type: "oauth",
      clientId: process.env.AUTH_SAILPOINT_ID!,
      clientSecret: process.env.AUTH_SAILPOINT_SECRET!,
      authorization: {
        url: `${process.env.AUTH_SAILPOINT_BASE_URL!}/oauth/authorize`,
        params: { scope: "sp:scopes:all" },
      },
      token: `${process.env.AUTH_SAILPOINT_BASE_API_URL!}/oauth/token`,
      userinfo: `${process.env.AUTH_SAILPOINT_BASE_API_URL!}/oauth/userinfo`,
      profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          name: profile.uid,
          image: null,
        }
      },
      style: { brandColor: "#011E69", logo: "sailpoint.svg" },
    },
  ],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      {
        id: "sailpoint",
        name: "SailPoint",
        type: "oauth",
        clientId: import.meta.env.AUTH_SAILPOINT_ID!,
        clientSecret: import.meta.env.AUTH_SAILPOINT_SECRET!,
        authorization: {
          url: `${import.meta.env.AUTH_SAILPOINT_BASE_URL!}/oauth/authorize`,
          params: { scope: "sp:scopes:all" },
        },
        token: `${import.meta.env.AUTH_SAILPOINT_BASE_API_URL!}/oauth/token`,
        userinfo: `${import.meta.env.AUTH_SAILPOINT_BASE_API_URL!}/oauth/userinfo`,
        profile(profile) {
          return {
            id: profile.id,
            email: profile.email,
            name: profile.uid,
            image: null,
          }
        },
        style: { brandColor: "#011E69", logo: "sailpoint.svg" },
      },
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import { env } from "$env/dynamic/prviate"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [
    {
      id: "sailpoint",
      name: "SailPoint",
      type: "oauth",
      clientId: env.AUTH_SAILPOINT_ID!,
      clientSecret: env.AUTH_SAILPOINT_SECRET!,
      authorization: {
        url: `${env.AUTH_SAILPOINT_BASE_URL!}/oauth/authorize`,
        params: { scope: "sp:scopes:all" },
      },
      token: `${env.AUTH_SAILPOINT_BASE_API_URL!}/oauth/token`,
      userinfo: `${env.AUTH_SAILPOINT_BASE_API_URL!}/oauth/userinfo`,
      profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          name: profile.uid,
          image: null,
        }
      },
      style: { brandColor: "#011E69", logo: "sailpoint.svg" },
    },
  ],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
 
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [
      {
        id: "sailpoint",
        name: "SailPoint",
        type: "oauth",
        clientId: process.env.AUTH_SAILPOINT_ID!,
        clientSecret: process.env.AUTH_SAILPOINT_SECRET!,
        authorization: {
          url: `${process.env.AUTH_SAILPOINT_BASE_URL!}/oauth/authorize`,
          params: { scope: "sp:scopes:all" },
        },
        token: `${process.env.AUTH_SAILPOINT_BASE_API_URL!}/oauth/token`,
        userinfo: `${process.env.AUTH_SAILPOINT_BASE_API_URL!}/oauth/userinfo`,
        profile(profile) {
          return {
            id: profile.id,
            email: profile.email,
            name: profile.uid,
            image: null,
          }
        },
        style: { brandColor: "#011E69", logo: "sailpoint.svg" },
      },
    ],
  })
)
```

### Profile[](#profile)

The SailPoint `userprofile` endpoint will return more fields, but by default the [User table](/getting-started/database#models) only supports `id`, `name`, `email`, and `image`. Therefore, if you’d like to use any of the following fields and you’re using a database adapter with Auth.js, make sure you modify the `User` table schema in whichever adapter and database you’re using. Then you can additionally return any of these fields from the `profile` callback above.

The available fields from the SailPoint `userprofile` endpoint response include the following.

```
type SailPointProfile = {
  tenant: string
  id: string
  uid: string
  email: string
  phone: string
  workPhone: string
  firstname: string
  lastname: string
  capabilities: string
  displayName: string
  name: string
}
```

[Resend](/getting-started/providers/resend "Resend")[Salesforce](/getting-started/providers/salesforce "Salesforce")
