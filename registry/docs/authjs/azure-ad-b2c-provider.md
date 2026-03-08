[Getting Started](/getting-started "Getting Started")[Providers](/getting-started/providers/42-school "Providers")Azure Ad B2c

![](/img/providers/azure.svg)

# Azure AD B2C Provider

## Resources[](#resources)

-   [Azure Active Directory B2C documentation](https://learn.microsoft.com/en-us/azure/active-directory-b2c)
-   [What is Azure AD B2C](https://learn.microsoft.com/en-us/azure/active-directory-b2c/overview)
-   [Azure AD B2C Tenant](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)
-   [App Registration](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-applications)
-   [User Flow](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows)

## Setup[](#setup)

### Environment Variables[](#environment-variables)

```
AUTH_AZURE_AD_B2C_ID
AUTH_AZURE_AD_B2C_SECRET
AUTH_AZURE_AD_B2C_ISSUER
```

### Configuration[](#configuration)

Next.jsQwikSvelteKitExpress

/auth.ts

```
import NextAuth from "next-auth";
import AzureADB2C from "next-auth/providers/azure-ad-b2c";
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [AzureADB2C({
    clientId: AUTH_AZURE_AD_B2C_CLIENT_ID
    clientSecret: AUTH_AZURE_AD_B2C_CLIENT_SECRET
    issuer: AUTH_AZURE_AD_B2C_ISSUER
  })]
});
```

/src/routes/plugin@auth.ts

```
import { QwikAuth$ } from "@auth/qwik"
import AzureADB2C from "@auth/qwik/providers/azure-ad-b2c";
 
export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  () => ({
    providers: [
      AzureADB2C({
        clientId: import.meta.env.AUTH_AZURE_AD_CLIENT_ID
        clientSecret: import.meta.env.AUTH_AZURE_AD_CLIENT_SECRET
        issuer: import.meta.env.AUTH_AZURE_AD_ISSUER
      })
    ],
  })
)
```

/src/auth.ts

```
import { SvelteKitAuth } from "@auth/sveltekit";
import AzureADB2C from "@auth/sveltekit/providers/azure-ad-b2c";
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  providers: [AzureADB2C({
    clientId: AUTH_AZURE_AD_CLIENT_ID
    clientSecret: AUTH_AZURE_AD_CLIENT_SECRET
    issuer: AUTH_AZURE_AD_ISSUER
  })]
});
```

/src/app.ts

```
import { ExpressAuth } from "@auth/express";
import AzureADB2C from "@auth/express/providers/azure-ad-b2c";
 
app.use("/auth/*", ExpressAuth({
  providers: [AzureADB2C({
    clientId: AUTH_AZURE_AD_CLIENT_ID
    clientSecret: AUTH_AZURE_AD_CLIENT_SECRET
    issuer: AUTH_AZURE_AD_ISSUER
  })]
}));
```

### Tenant Setup[](#tenant-setup)

Basic configuration sets up Azure AD B2C to return an ID Token. This should be done as a prerequisite prior to running through the Advanced configuration. In the Tenant Setup, make sure to set the following during “User attributes and token claims”.

-   Collect attribute:
    -   Email Address
    -   Display Name
    -   Given Name
    -   Surname
-   Return claim:
    -   Email Addresses
    -   Display Name
    -   Given Name
    -   Surname
    -   Identity Provider
    -   Identity Provider Access Token
    -   User’s Object ID

[Azure Ad](/getting-started/providers/azure-ad "Azure Ad")[Azure Devops](/getting-started/providers/azure-devops "Azure Devops")
