[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")azure-devops

# providers/azure-devops

## AzureDevOpsProfile[](#azuredevopsprofile)

### See[](#see)

[Azure DevOps Services REST API 7.0 · Profiles · Get](https://learn.microsoft.com/en-us/rest/api/azure/devops/profile/profiles/get?view=azure-devops-rest-7.0&tabs=HTTP#examples)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### coreAttributes[](#coreattributes)

```
coreAttributes: {
  Avatar: {
     value: {
        value: string;
       };
    };
};
```

##### Avatar[](#avatar)

```
Avatar: {
  value: {
     value: string;
    };
};
```

###### Avatar.value[](#avatarvalue)

```
Avatar.value: {
  value: string;
};
```

###### Avatar.value.value[](#avatarvaluevalue)

```
Avatar.value.value: string;
```

#### displayName[](#displayname)

```
displayName: string;
```

#### emailAddress[](#emailaddress)

```
emailAddress: string;
```

#### id[](#id)

```
id: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`AzureDevOpsProfile`](azure-devops#azuredevopsprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `scope`: `string`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

### Deprecated[](#deprecated)

While still available, Microsoft is [no longer supporting](https://learn.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops#available-oauth-models) Azure DevOps OAuth and recommends using [Microsoft Entra ID](/getting-started/providers/microsoft-entra-id) instead.

## Documentation[](#documentation)

[Microsoft Docs](https://docs.microsoft.com/en-us) · [Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/) · [Authorize access to REST APIs with OAuth 2.0](https://docs.microsoft.com/en-us/azure/devops/integrate/get-started/authentication/oauth?view=azure-devops%5D)

## Configuration[](#configuration)

### Register application[](#register-application)

💡

[`https://app.vsaex.visualstudio.com/app/register`](https://app.vsaex.visualstudio.com/app/register)

Provide the required details:

-   Company name
-   Application name
-   Application website
-   Authorization callback URL
    -   `https://example.com/api/auth/callback/azure-devops` for production
    -   `https://localhost/api/auth/callback/azure-devops` for development
-   Authorized scopes
    -   Required minimum is `User profile (read)`

Click ‘Create Application’

⚠️

You are required to use HTTPS even for the localhost

⚠️

You will have to delete and create a new application to change the scopes later

The following data is relevant for the next step:

-   App ID
-   Client Secret (after clicking the ‘Show’ button, ignore App Secret entry above it)
-   Authorized Scopes

### Set up the environment variables[](#set-up-the-environment-variables)

In `.env.local` create the following entries:

```
AZURE_DEVOPS_APP_ID=<copy App ID value here>
AZURE_DEVOPS_CLIENT_SECRET=<copy generated client secret value here>
AZURE_DEVOPS_SCOPE=<copy space separated Authorized Scopes list here>
```

## Example[](#example)

```
import AzureDevOps from "@auth/core/providers/azure-devops"
...
providers: [
  AzureDevOps({
    clientId: process.env.AZURE_DEVOPS_APP_ID,
    clientSecret: process.env.AZURE_DEVOPS_CLIENT_SECRET,
    scope: process.env.AZURE_DEVOPS_SCOPE,
  }),
]
...
```

### Refresh token rotation[](#refresh-token-rotation)

Use the [main guide](/guides/basics/refresh-token-rotation) as your starting point with the following considerations:

```
async jwt({ token, user, account }) {
  ...
  // The token has an absolute expiration time
  const accessTokenExpires = account.expires_at * 1000
  ...
}
 
async function refreshAccessToken(token) {
  ...
  const response = await fetch(
    "https://app.vssps.visualstudio.com/oauth2/token",
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      method: "POST",
      body: new URLSearchParams({
        client_assertion_type:
          "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
        client_assertion: process.env.AZURE_DEVOPS_CLIENT_SECRET,
        grant_type: "refresh_token",
        assertion: token.refreshToken,
        redirect_uri:
          process.env.NEXTAUTH_URL + "/api/auth/callback/azure-devops",
      }),
    }
  )
  ...
  // The refreshed token comes with a relative expiration time
  const accessTokenExpires = Date.now() + newToken.expires_in * 1000
  ...
}
```

[azure-ad-b2c](/reference/core/providers/azure-ad-b2c "azure-ad-b2c")[bankid-no](/reference/core/providers/bankid-no "bankid-no")
