[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Azure Ad

![](/img/providers/azure.svg)

# Azure AD Provider

⚠️

Deprecated - Microsoft has rebranded this product [Microsoft Entra ID](/getting-started/providers/microsoft-entra-id) and all support work will be going into that IdP. We recommend you migrate to using that provider as well.

## Resources[](#resources)

-   [AzureAD OAuth documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow/)
-   [AzureAD OAuth apps](https://docs.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app/)

## Setup[](#setup)

### Callback URL[](#callback-url)

Next.jsQwikSvelteKitExpress

```
https://example.com/api/auth/callback/azure-ad
```

```
https://example.com/auth/callback/azure-ad
```

```
https://example.com/auth/callback/azure-ad
```

Express not documented yet. Help us by contributing [here](https://github.com/nextauthjs/next-auth/edit/main/docs/pages/getting-started/providers/azure-ad.mdx).

### Environment Variables[](#environment-variables)

```
AUTH_AZURE_AD_ID
AUTH_AZURE_AD_SECRET
AUTH_AZURE_AD_TENANT_ID
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth"
import AzureAd from "next-auth/providers/azure-ad"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [AzureAd],
})
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import AzureAd from "@auth/qwik/providers/azure-ad"
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [AzureAd],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit"
import AzureAd from "@auth/sveltekit/providers/azure-ad"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [AzureAd],
})
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express"
import AzureAd from "@auth/express/providers/azure-ad"
 
app.use("/auth/*", ExpressAuth({ providers: [AzureAd] }))
```

#### To allow specific Active Directory users access:[](#to-allow-specific-active-directory-users-access)

-   In [https://portal.azure.com/](https://portal.azure.com/) search for “Azure Active Directory”, and select your organization.
-   Next, go to “App Registration” in the left menu, and create a new one.
-   Pay close attention to “Who can use this application or access this API?”
    -   This allows you to scope access to specific types of user accounts
    -   Only your tenant, all azure tenants, or all azure tenants and personal Microsoft accounts (Skype, Xbox, Outlook.com, etc.)
-   When asked for a redirection URL, use `https://yourapplication.com/api/auth/callback/azure-ad` or for development `http://localhost:3000/api/auth/callback/azure-ad`.
-   After your App Registration is created, under “Client Credential” create your Client secret.
-   Click on “API Permissions” and click “Grant admin consent for…” to allow User.Read access to your tenant.
-   Now copy your:
    -   Application (client) ID
    -   Directory (tenant) ID
    -   Client secret (value)

In `.env.local` create the following entries:

```
AUTH_AZURE_AD_CLIENT_ID=<copy Application (client) ID here>
AUTH_AZURE_AD_CLIENT_SECRET=<copy generated client secret value here>
AUTH_AZURE_AD_TENANT_ID=<copy the tenant id here>
```

That will default the tenant to use the `common` authorization endpoint. [For more details see here](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-v2-protocols#endpoints).

If you want your application to receive authorization requests from not only the tenants but also all Microsoft users just add “common” in AUTH\_AZURE\_AD\_TENANT\_ID, this will “skip” tenants authorization.

```
AUTH_AZURE_AD_TENANT_ID=common
```

Azure AD returns the profile picture in an ArrayBuffer, instead of just a URL to the image, so our provider converts it to a base64 encoded image string and returns that instead. See: [https://docs.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0#examples](https://docs.microsoft.com/en-us/graph/api/profilephoto-get?view=graph-rest-1.0#examples). The default image size is 48x48 to avoid [running out of space](https://next-auth.js.org/faq#:~:text=What%20are%20the%20disadvantages%20of%20JSON%20Web%20Tokens%3F) in case the session is saved as a JWT.

In `pages/api/auth/[...nextauth].js` find or add the `AzureAD` entries:

```
import AzureADProvider from "next-auth/providers/azure-ad"
 
providers: [
  AzureADProvider({
    clientId: process.env.AZURE_AD_CLIENT_ID,
    clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
    tenantId: process.env.AZURE_AD_TENANT_ID,
  }),
]
```

[Authentik](/getting-started/providers/authentik "Authentik")[Azure Ad B2c](/getting-started/providers/azure-ad-b2c "Azure Ad B2c")
