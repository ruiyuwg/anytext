[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")logto

# providers/logto

Built-in sign in with **Logto** integration.

[![](https://authjs.dev/img/providers/logto.svg)](https://logto.io)

## LogtoProfile[](#logtoprofile)

The returned user profile from Logto when using the profile callback. [Reference](https://docs.logto.io/quick-starts/next-auth#scopes-and-claims).

### Indexable[](#indexable)

\[`claim`: `string`\]: `unknown`

### Properties[](#properties)

#### address[](#address)

```
address: string;
```

The user’s address

#### custom\_data[](#custom_data)

```
custom_data: object;
```

Custom fields

#### email[](#email)

```
email: string;
```

The user’s email

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

A boolean indicating if the user’s email is verified

#### identities[](#identities)

```
identities: object;
```

The linked identities of the user

#### name[](#name)

```
name: string;
```

The user’s name

#### organization\_data[](#organization_data)

```
organization_data: object[];
```

The organization data the user belongs to

#### organization\_roles[](#organization_roles)

```
organization_roles: string[];
```

The organization roles the user belongs to with the format of organization\_id:/role\_name

#### organizations[](#organizations)

```
organizations: string[];
```

The organization IDs the user belongs to

#### phone\_number[](#phone_number)

```
phone_number: string;
```

The user’s phone number

#### phone\_number\_verified[](#phone_number_verified)

```
phone_number_verified: boolean;
```

A boolean indicating if the user’s phone number is verified

#### picture[](#picture)

```
picture: string;
```

The user’s picture

#### sso\_identities[](#sso_identities)

```
sso_identities: object[];
```

The linked SSO identities of the user

#### sub[](#sub)

```
sub: string;
```

The user’s unique ID

#### username[](#username)

```
username: string;
```

The user’s username

* * *

## default()[](#default)

```
function default(options): OIDCConfig<LogtoProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/logto
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Logto from "@auth/core/providers/logto"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Logto({
      clientId: LOGTO_ID,
      clientSecret: LOGTO_SECRET,
      issuer: LOGTO_ISSUER
    }),
  ],
})
```

### Resources[](#resources)

-   [Logto Auth.js quickstart](https://docs.logto.io/quick-starts/next-auth)
-   [Integrate Logto in your application](https://docs.logto.io/integrate-logto/integrate-logto-into-your-application)

### Notes[](#notes)

The Logto provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/logto.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

By default, Auth.js assumes that the Logto provider is based on the [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) spec

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`LogtoProfile`](logto#logtoprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`LogtoProfile`](logto#logtoprofile)\>

[linkedin](/reference/core/providers/linkedin "linkedin")[loops](/reference/core/providers/loops "loops")
