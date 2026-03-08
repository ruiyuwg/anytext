[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")huggingface

# providers/huggingface

Built-in **Hugging Face** integration.[![](https://authjs.dev/img/providers/huggingface.svg)](https://huggingface.co)

## HuggingfaceProfile[](#huggingfaceprofile)

### Properties[](#properties)

#### canPay?[](#canpay)

```
optional canPay: boolean;
```

Whether the user has a payment method set up.

Needs the `read-billing` scope.

#### email?[](#email)

```
optional email: string;
```

Need ‘email’ scope

Email address of the user.

#### email\_verified?[](#email_verified)

```
optional email_verified: boolean;
```

Need ‘email’ scope

Whether the user’s email address is verified. Should always be true, Hugging Face enforces email verification for users to grant access to OAuth apps.

#### isPro[](#ispro)

```
isPro: boolean;
```

Whether the user has a paid subscription.

#### name?[](#name)

```
optional name: string;
```

Full name of the user.

Needs ‘profile’ scope

#### orgs[](#orgs)

```
orgs: {
  canPay: boolean;
  isEnterprise: boolean;
  missingMFA: boolean;
  name: string;
  pendingSSO: boolean;
  picture: string;
  preferred_username: string;
  resourceGroups: {
     name: string;
     role: "admin" | "write" | "read" | "contributor";
     sub: string;
    }[];
  roleInOrg: "admin" | "write" | "read" | "contributor";
  sub: string;
 }[];
```

List of the user’s organizations.

##### canPay?[](#canpay-1)

```
optional canPay: boolean;
```

Whether the organization has a payment method set up.

Access to the organization needs to be granted to the oauth app for this field to be present.

##### isEnterprise[](#isenterprise)

```
isEnterprise: boolean;
```

Whether the organization has a paid enterprise subscription.

##### missingMFA?[](#missingmfa)

```
optional missingMFA: boolean;
```

User needs to enable MFA to access the organization.

Access to the organization needs to be granted to the oauth app for this field to be present.

##### name[](#name-1)

```
name: string;
```

Name of the organization.

##### pendingSSO?[](#pendingsso)

```
optional pendingSSO: boolean;
```

User needs to re-authenticate to access the organization.

Access to the organization needs to be granted to the oauth app for this field to be present.

##### picture[](#picture)

```
picture: string;
```

URL of the organization’s avatar.

##### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

Username of the organization.

##### resourceGroups?[](#resourcegroups)

```
optional resourceGroups: {
  name: string;
  role: "admin" | "write" | "read" | "contributor";
  sub: string;
 }[];
```

Resource groups are a feature of enterprise organizations.

They allow granular access control to resources within the organization.

Access to the organization needs to be granted to the oauth app for this field to be present.

##### roleInOrg?[](#roleinorg)

```
optional roleInOrg: "admin" | "write" | "read" | "contributor";
```

The role of the user in the organization.

Access to the organization needs to be granted to the oauth app for this field to be present.

##### sub[](#sub)

```
sub: string;
```

Unique identifier for the organization.

#### picture?[](#picture-1)

```
optional picture: string;
```

URL of the user’s profile picture.

Need ‘profile’ scope

#### preferred\_username?[](#preferred_username-1)

```
optional preferred_username: string;
```

Username of the user.

Need ‘profile’ scope

#### profile?[](#profile)

```
optional profile: string;
```

URL of the user’s avatar.

Need ‘profile’ scope

#### sub[](#sub-1)

```
sub: string;
```

Unique identifier for the user.

#### website?[](#website)

```
optional website: string;
```

Need ‘profile’ scope

Website of the user.

* * *

## default()[](#default)

```
function default(options): OIDCConfig<HuggingfaceProfile>
```

Add HuggingFace login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/huggingface
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import HuggingFace from "@auth/core/providers/huggingface"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    HuggingFace({
      clientId: HUGGINGFACE_CLIENT_ID,
      clientSecret: HUGGINGFACE_CLIENT_SECRET,
      authorization: {
       params: {
         scope: "openid profile email", // specify the scopes you need
         //  orgIds: "unique_org_id" // If your oauth app needs access to a specific organization of the user
       }
      },
    }),
  ],
})
```

The following scopes are available:

-   `openid`: Grants access to the user’s OpenID Connect profile.
-   `profile`: Grants access to the user’s profile information.
-   `email`: Grants access to the user’s email address.
-   `read-repos`: Grants read access to the user’s repositories.
-   `write-repos`: Grants write access to the user’s repositories.
-   `manage-repos`: Can create/delete repositories on behalf of the user.
-   `write-discussions`: Can post on the user’s behalf.
-   `read-billing`: Know if the user has a payment method set up.
-   `inference-api`: Can make calls to Inference providers on behalf of the user.
-   `webhooks`: Can manage webhooks on behalf of the user.

You need to enable them first in your OAuth app settings.

/!\\ By default, the `profile` and `email` scopes are enabled in NextAuth. So you need to enable the `email` scope in your OAuth app settings or you will get a scope error.

### Resources[](#resources)

-   [Hugging Face OAuth documentation](https://huggingface.co/docs/hub/en/oauth#creating-an-oauth-app)
-   [Create an OAuth application](https://huggingface.co/settings/applications/new)

### Notes[](#notes)

By default, Auth.js assumes that the Hugging Face provider is based on the [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The HuggingFace provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/huggingface.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`HuggingfaceProfile`](huggingface#huggingfaceprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`HuggingfaceProfile`](huggingface#huggingfaceprofile)\>

[hubspot](/reference/core/providers/hubspot "hubspot")[identity-server4](/reference/core/providers/identity-server4 "identity-server4")
