[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")patreon

# providers/patreon

Built-in **Patreon** integration.[![](https://authjs.dev/img/providers/patreon.svg)](https://www.patreon.com/)

## PatreonProfile[](#patreonprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

#### nickname[](#nickname)

```
nickname: string;
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

Add Patreon login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/patreon
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Patreon from "@auth/core/providers/patreon"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Patreon({
      clientId: PATREON_CLIENT_ID,
      clientSecret: PATREON_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Patreon OAuth documentation](https://docs.patreon.com/#apiv2-oauth)
-   [Patreon Platform](https://www.patreon.com/portal/registration/register-clients)
-   [ApiV2 Scopes](https://docs.patreon.com/#scopes)

### Notes[](#notes)

By default, Auth.js assumes that the Patreon provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Patreon provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/patreon.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`PatreonProfile`](patreon#patreonprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[passkey](/reference/core/providers/passkey "passkey")[ping-id](/reference/core/providers/ping-id "ping-id")
