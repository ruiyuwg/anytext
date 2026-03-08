[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")okta

# providers/okta

Built-in **Okta** integration.[![](https://authjs.dev/img/providers/okta.svg)](https://okta.com/)

## OktaProfile[](#oktaprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### address[](#address)

```
address: string;
```

#### amr[](#amr)

```
amr: string;
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
auth_time: string;
```

#### birthdate[](#birthdate)

```
birthdate: string;
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
email_verified: string;
```

#### exp[](#exp)

```
exp: string;
```

#### family\_name[](#family_name)

```
family_name: string;
```

#### gender[](#gender)

```
gender: string;
```

#### given\_name[](#given_name)

```
given_name: string;
```

#### iat[](#iat)

```
iat: string;
```

#### idp[](#idp)

```
idp: string;
```

#### iss[](#iss)

```
iss: string;
```

#### jti[](#jti)

```
jti: string;
```

#### locale[](#locale)

```
locale: string;
```

#### middle\_name[](#middle_name)

```
middle_name: string;
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

#### phone\_number[](#phone_number)

```
phone_number: string;
```

#### picture[](#picture)

```
picture: string;
```

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

#### profile[](#profile)

```
profile: string;
```

#### sub[](#sub)

```
sub: string;
```

#### updated\_at[](#updated_at)

```
updated_at: string;
```

#### ver[](#ver)

```
ver: string;
```

#### website[](#website)

```
website: string;
```

#### zoneinfo[](#zoneinfo)

```
zoneinfo: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Okta login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/okta
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Okta from "@auth/core/providers/okta"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Okta({
      clientId: OKTA_CLIENT_ID,
      clientSecret: OKTA_CLIENT_SECRET,
      issuer: OKTA_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [Okta OAuth documentation](https://developer.okta.com/docs/reference/api/oidc)

### Notes[](#notes)

By default, Auth.js assumes that the Okta provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Okta provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/okta.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`OktaProfile`](okta#oktaprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[notion](/reference/core/providers/notion "notion")[onelogin](/reference/core/providers/onelogin "onelogin")
