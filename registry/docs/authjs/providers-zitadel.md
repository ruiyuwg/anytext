[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")zitadel

# providers/zitadel

Built-in **Zitadel** integration.[![](https://authjs.dev/img/providers/zitadel.svg)](https://zitadel.com/)

## ZitadelProfile[](#zitadelprofile)

The returned user profile from ZITADEL when using the profile callback. See the standard claims reference [here](https://zitadel.com/docs/apis/openidoauth/claims#standard-claims). If you need access to ZITADEL APIs or need additional information, make sure to add the corresponding scopes.

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### amr[](#amr)

```
amr: string;
```

#### aud[](#aud)

```
aud: string;
```

#### auth\_time[](#auth_time)

```
auth_time: number;
```

#### azp[](#azp)

```
azp: string;
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
iat: number;
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

#### name[](#name)

```
name: string;
```

#### nbf[](#nbf)

```
nbf: number;
```

#### phone[](#phone)

```
phone: string;
```

#### phone\_verified[](#phone_verified)

```
phone_verified: boolean;
```

#### picture[](#picture)

```
picture: string;
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
function default<P>(options): OIDCConfig<P>
```

Add ZITADEL login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/zitadel
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import ZITADEL from "@auth/core/providers/zitadel"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    ZITADEL({
      clientId: ZITADEL_CLIENT_ID,
      clientSecret: ZITADEL_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [ZITADEL OpenID Endpoints](https://zitadel.com/docs/apis/openidoauth/endpoints)
-   [ZITADEL recommended OAuth Flows](https://zitadel.com/docs/guides/integrate/oauth-recommended-flows)

### Notes[](#notes)

By default, Auth.js assumes that the ZITADEL provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

The Redirect URIs used when creating the credentials must include your full domain and end in the callback path. For example:

-   For production: `https://{YOUR_DOMAIN}/api/auth/callback/zitadel`
-   For development: `http://localhost:3000/api/auth/callback/zitadel`

Make sure to enable dev mode in ZITADEL console to allow redirects for local development.

💡

The ZITADEL provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/zitadel.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

💡

ZITADEL also returns a email\_verified boolean property in the profile. You can use this property to restrict access to people with verified accounts.

```
const options = {
  ...
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "zitadel") {
        return profile.email_verified;
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  }
  ...
}
```

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`ZitadelProfile`](zitadel#zitadelprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<`P`\>

[yandex](/reference/core/providers/yandex "yandex")[zoho](/reference/core/providers/zoho "zoho")
