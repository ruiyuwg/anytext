[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")coinbase

# providers/coinbase

Built-in **Coinbase** integration.[![](https://authjs.dev/img/providers/coinbase.svg)](https://coinbase.com/)

## default()[](#default)

```
function default(options): OAuthConfig<Record<string, any>>
```

Add Coinbase login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/coinbase
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Coinbase from "@auth/core/providers/coinbase"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Coinbase({
      clientId: COINBASE_CLIENT_ID,
      clientSecret: COINBASE_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Coinbase OAuth documentation](https://developers.coinbase.com/api/v2)

### Notes[](#notes)

💡

This Provider template has a 2 hour access token to it. A refresh token is also returned.

By default, Auth.js assumes that the Coinbase provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Coinbase provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/coinbase.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[cognito](/reference/core/providers/cognito "cognito")[concept2](/reference/core/providers/concept2 "concept2")
