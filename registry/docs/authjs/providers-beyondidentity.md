[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")beyondidentity

# providers/beyondidentity

Built-in **Beyond Identity** integration.[![](https://authjs.dev/img/providers/beyondidentity.svg)](https://www.beyondidentity.com/)

## BeyondIdentityProfile[](#beyondidentityprofile)

### See[](#see)

[Beyond Identity Developer Docs](https://developer.beyondidentity.com/)

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

The user’s email address.

#### name[](#name)

```
name: string;
```

The user’s full name.

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

The user’s preferred username.

#### sub[](#sub)

```
sub: string;
```

The user’s unique identifier.

* * *

## default()[](#default)

```
function default(config): OIDCConfig<BeyondIdentityProfile>
```

Add Beyond Identity login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/beyondidentity
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import BeyondIdentity from "@auth/core/providers/beyondidentity"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    BeyondIdentity({
      clientId: BEYOND_IDENTITY_CLIENT_ID,
      clientSecret: BEYOND_IDENTITY_CLIENT_SECRET,
      issuer: BEYOND_IDENTITY_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [Beyond Identity Developer Docs](https://developer.beyondidentity.com/)

### Notes[](#notes)

By default, Auth.js assumes that the BeyondIdentity provider is based on the [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The BeyondIdentity provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/beyondidentity.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`BeyondIdentityProfile`](beyondidentity#beyondidentityprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`BeyondIdentityProfile`](beyondidentity#beyondidentityprofile)\>

[battlenet](/reference/core/providers/battlenet "battlenet")[bitbucket](/reference/core/providers/bitbucket "bitbucket")
