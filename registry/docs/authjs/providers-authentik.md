[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")authentik

# providers/authentik

Built-in **Authentik** integration.[![](https://authjs.dev/img/providers/authentik.svg)](https://goauthentik.io/)

## AuthentikProfile[](#authentikprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### acr[](#acr)

```
acr: string;
```

#### at\_hash[](#at_hash)

```
at_hash: string;
```

#### aud[](#aud)

```
aud: string;
```

#### auth\_time[](#auth_time)

```
auth_time: number;
```

#### c\_hash[](#c_hash)

```
c_hash: string;
```

#### email[](#email)

```
email: string;
```

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

#### exp[](#exp)

```
exp: number;
```

#### family\_name[](#family_name)

```
family_name: string;
```

#### given\_name[](#given_name)

```
given_name: string;
```

#### groups[](#groups)

```
groups: string[];
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

#### nickname[](#nickname)

```
nickname: string;
```

#### nonce[](#nonce)

```
nonce: string;
```

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Authentik login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/authentik
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Authentik from "@auth/core/providers/authentik"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Authentik({
      clientId: AUTHENTIK_CLIENT_ID,
      clientSecret: AUTHENTIK_CLIENT_SECRET,
      issuer: AUTHENTIK_ISSUER,
    }),
  ],
})
```

issuer should include the slug without a trailing slash – e.g., [https://my-authentik-domain.com/application/o/My\_Slug](https://my-authentik-domain.com/application/o/My_Slug)

### Resources[](#resources)

-   [Authentik OAuth documentation](https://goauthentik.io/docs/providers/oauth2)

### Notes[](#notes)

By default, Auth.js assumes that the Authentik provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Authentik provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/authentik.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`AuthentikProfile`](authentik#authentikprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[auth0](/reference/core/providers/auth0 "auth0")[azure-ad](/reference/core/providers/azure-ad "azure-ad")
