[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")passage

# providers/passage

Built-in **Passage by 1Password** integration.[![](https://authjs.dev/img/providers/passage.svg)](https://passage.1password.com)

## PassageProfile[](#passageprofile)

### See[](#see)

[Supported Scopes](https://docs.passage.id/hosted-login/oidc-client-configuration#supported-scopes)

### Properties[](#properties)

#### at\_hash[](#at_hash)

```
at_hash: string;
```

#### aud[](#aud)

```
aud: string[];
```

#### auth\_time[](#auth_time)

```
auth_time: number;
```

#### azp[](#azp)

```
azp: string;
```

#### c\_hash[](#c_hash)

```
c_hash: string;
```

#### client\_id[](#client_id)

```
client_id: string;
```

#### email[](#email)

```
email: string;
```

The user’s email address

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

Whether the user has verified their email address

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

#### phone[](#phone)

```
phone: string;
```

The user’s phone number

#### phone\_number\_verified[](#phone_number_verified)

```
phone_number_verified: boolean;
```

Whether the user has verified their phone number

#### sub[](#sub)

```
sub: string;
```

Unique identifer in Passage for the user

* * *

## default()[](#default)

```
function default(config): OAuthConfig<PassageProfile>
```

Add Passage login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/passage
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Passage from "@auth/core/providers/passage"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Passage({
      clientId: PASSAGE_ID,
      clientSecret: PASSAGE_SECRET,
      issuer: PASSAGE_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [Passage OIDC documentation](https://docs.passage.id/hosted-login/oidc-client-configuration)

### Notes[](#notes)

By default, Auth.js assumes that the Passage provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Passage provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/passage.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`PassageProfile`](passage#passageprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`PassageProfile`](passage#passageprofile)\>

[osu](/reference/core/providers/osu "osu")[passkey](/reference/core/providers/passkey "passkey")
