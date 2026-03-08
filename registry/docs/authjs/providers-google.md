[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")google

# providers/google

Built-in **Google** integration.[![](https://authjs.dev/img/providers/google.svg)](https://google.com)

## GoogleProfile[](#googleprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### aud[](#aud)

```
aud: string;
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

#### family\_name?[](#family_name)

```
optional family_name: string;
```

#### given\_name[](#given_name)

```
given_name: string;
```

#### hd?[](#hd)

```
optional hd: string;
```

#### iat[](#iat)

```
iat: number;
```

#### iss[](#iss)

```
iss: string;
```

#### jti?[](#jti)

```
optional jti: string;
```

#### locale?[](#locale)

```
optional locale: string;
```

#### name[](#name)

```
name: string;
```

#### nbf?[](#nbf)

```
optional nbf: number;
```

#### picture[](#picture)

```
picture: string;
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

Add Google login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/google
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Google from "@auth/core/providers/google"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Google({ clientId: GOOGLE_CLIENT_ID, clientSecret: GOOGLE_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Google OAuth documentation](https://developers.google.com/identity/protocols/oauth2)
-   [Google OAuth Configuration](https://console.developers.google.com/apis/credentials)

### Notes[](#notes)

By default, Auth.js assumes that the Google provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

The “Authorized redirect URIs” used when creating the credentials must include your full domain and end in the callback path. For example;

-   For production: `https://{YOUR_DOMAIN}/api/auth/callback/google`
-   For development: `http://localhost:3000/api/auth/callback/google`

⚠️

Google only provides Refresh Token to an application the first time a user signs in.

To force Google to re-issue a Refresh Token, the user needs to remove the application from their account and sign in again: [https://myaccount.google.com/permissions](https://myaccount.google.com/permissions)

Alternatively, you can also pass options in the `params` object of `authorization` which will force the Refresh Token to always be provided on sign in, however this will ask all users to confirm if they wish to grant your application access every time they sign in.

If you need access to the RefreshToken or AccessToken for a Google account and you are not using a database to persist user accounts, this may be something you need to do.

```
const options = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
}
```

💡

Google also returns a `email_verified` boolean property in the OAuth profile.

You can use this property to restrict access to people with verified accounts at a particular domain.

```
const options = {
  ...
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@example.com")
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  }
  ...
}
```

💡

The Google provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/google.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`GoogleProfile`](google#googleprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[gitlab](/reference/core/providers/gitlab "gitlab")[hubspot](/reference/core/providers/hubspot "hubspot")
