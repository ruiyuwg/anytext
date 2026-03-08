[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")frontegg

# providers/frontegg

Built-in sign in with **Frontegg** integration.

[![](https://authjs.dev/img/providers/frontegg.svg)](https://frontegg.com)

## FronteggProfile[](#fronteggprofile)

The returned user profile from Frontegg when using the profile callback. [Reference](https://docs.frontegg.com/docs/admin-portal-profile).

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

#### profilePictureUrl[](#profilepictureurl)

```
profilePictureUrl: string;
```

The user’s picture

#### roles[](#roles)

```
roles: string[];
```

The user’s roles

#### sub[](#sub)

```
sub: string;
```

The user’s unique Frontegg ID

* * *

## default()[](#default)

```
function default(options): OIDCConfig<FronteggProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/frontegg
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Frontegg from "@auth/core/providers/frontegg"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Frontegg({
      clientId: AUTH_FRONTEGG_ID,
      clientSecret: AUTH_FRONTEGG_SECRET,
      issuer: AUTH_FRONTEGG_ISSUER
    }),
  ],
})
```

### Configuring Frontegg[](#configuring-frontegg)

Follow these steps:

Log into the [Frontegg portal](https://portal.frontegg.com)

Authentication > Login method > Hosted login > Add your callback url here

Then, create a `.env.local` file in the project root add the following entries:

Get the following from the Frontegg’s portal:

```
AUTH_FRONTEGG_ID="<Client ID>" # Environments > Your environment > Env settings
AUTH_FRONTEGG_SECRET="<API KEY>" # Environments > Your environment > Env settings
AUTH_FRONTEGG_ISSUER="<https://[YOUR_SUBDOMAIN].frontegg.com>" # Environments > Your environment > Env settings > Domains > Domain name
```

### Resources[](#resources)

-   [Frontegg Docs](https://docs.frontegg.com/docs/how-to-use-our-docs)

### Notes[](#notes)

The Frontegg provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/frontegg.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

By default, Auth.js assumes that the Frontegg provider is based on the [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) spec

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`FronteggProfile`](frontegg#fronteggprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`FronteggProfile`](frontegg#fronteggprofile)\>

[freshbooks](/reference/core/providers/freshbooks "freshbooks")[fusionauth](/reference/core/providers/fusionauth "fusionauth")
