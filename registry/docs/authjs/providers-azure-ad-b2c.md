[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")azure-ad-b2c

# providers/azure-ad-b2c

Built-in **Azure AD B2C** integration.[![](https://authjs.dev/img/providers/azure.svg)](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)

## AzureADB2CProfile[](#azureadb2cprofile)

### See[](#see)

[Claims](https://learn.microsoft.com/en-us/azure/active-directory-b2c/tokens-overview#claims)

### Properties[](#properties)

#### aud[](#aud)

```
aud: string;
```

#### auth\_time[](#auth_time)

```
auth_time: number;
```

#### country[](#country)

```
country: string;
```

#### emails[](#emails)

```
emails: string[];
```

#### exp[](#exp)

```
exp: number;
```

#### iat[](#iat)

```
iat: number;
```

#### iss[](#iss)

```
iss: string;
```

#### name[](#name)

```
name: string;
```

#### nbf[](#nbf)

```
nbf: number;
```

#### oid[](#oid)

```
oid: string;
```

#### postalCode[](#postalcode)

```
postalCode: string;
```

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

#### sub[](#sub)

```
sub: string;
```

#### tfp[](#tfp)

```
tfp: string;
```

#### ver[](#ver)

```
ver: string;
```

* * *

## default()[](#default)

```
function default(options): OIDCConfig<AzureADB2CProfile>
```

Add Azure AD B2C login to your page.

## Configuration[](#configuration)

### Basic[](#basic)

Basic configuration sets up Azure AD B2C to return an ID Token. This should be done as a prerequisite prior to running through the Advanced configuration.

1.  [Azure AD B2C Tenant](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)
2.  [App Registration](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-register-applications)
3.  [User Flow](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-user-flows)

For the step “User attributes and token claims” set the following:

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

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`AzureADB2CProfile`](azure-ad-b2c#azureadb2cprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`AzureADB2CProfile`](azure-ad-b2c#azureadb2cprofile)\>

### Example[](#example)

```
import { Auth } from "@auth/core"
import AzureADB2C from "@auth/core/providers/azure-ad-b2c"
 
const request = new Request("https://example.com")
const response = await AuthHandler(request, {
  // optionally, you can pass `tenantId` and `primaryUserFlow` instead of `issuer`
  providers: [AzureADB2C({ clientId: "", clientSecret: "", issuer: "" })],
})
```

* * *

### Resources[](#resources)

-   [Azure Active Directory B2C documentation](https://learn.microsoft.com/en-us/azure/active-directory-b2c)

* * *

### Notes[](#notes)

By default, Auth.js assumes that the Azure AD B2C provider is based on the [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Azure AD B2C provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/azure-ad-b2c.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

[azure-ad](/reference/core/providers/azure-ad "azure-ad")[azure-devops](/reference/core/providers/azure-devops "azure-devops")
