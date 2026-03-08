[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")descope

# providers/descope

Built-in sign in with **Descope** integration.

[![](https://authjs.dev/img/providers/descope.svg)](https://descope.com)

## DescopeProfile[](#descopeprofile)

The returned user profile from Descope when using the profile callback. [See Load User](https://docs.descope.com/api/openapi/usermanagement/operation/LoadUser/)

### Indexable[](#indexable)

\[`claim`: `string`\]: `unknown`

### Properties[](#properties)

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

#### name[](#name)

```
name: string;
```

The user’s name

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

#### sub[](#sub)

```
sub: string;
```

The user’s unique Descope ID

* * *

## default()[](#default)

```
function default(config): OIDCConfig<DescopeProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/descope
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Descope from "@auth/core/providers/descope"
 
const request = new Request(origin)
const response = await Auth(request, { providers: [Descope({ clientId: AUTH_DESCOPE_ID, clientSecret: AUTH_DESCOPE_SECRET, issuer: AUTH_DESCOPE_ISSUER })] })
```

### Configuring Descope[](#configuring-descope)

Follow these steps:

1.  Log into the [Descope console](https://app.descope.com)
2.  Follow the [OIDC instructions](https://docs.descope.com/customize/auth/oidc)

Then, create a `.env.local` file in the project root add the following entries:

Get the following from the Descope’s console:

```
AUTH_DESCOPE_ID="<Descope Issuer's last url segment>" # Descope's Issuer can be found in "Authentication Methods > SSO > Identity Provider" (Can also be taken from "Project > Project ID")
AUTH_DESCOPE_SECRET="<Descope Access Key>" # Manage > Access Keys
AUTH_DESCOPE_ISSUER="<Descope Issuer URL>" # Applications -> OIDC Application -> Issuer
```

### Resources[](#resources)

-   [Descope OIDC](https://docs.descope.com/customize/auth/oidc)
-   [Descope Flows](https://docs.descope.com/customize/flows)

### Notes[](#notes)

The Descope provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/descope.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

By default, Auth.js assumes that the Descope provider is based on the [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) spec

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`DescopeProfile`](descope#descopeprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`DescopeProfile`](descope#descopeprofile)\>

[credentials](/reference/core/providers/credentials "credentials")[discord](/reference/core/providers/discord "discord")
