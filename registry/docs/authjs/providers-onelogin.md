[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")onelogin

# providers/onelogin

Built-in **OneLogin** integration.[![](https://authjs.dev/img/providers/onelogin.svg)](https://onelogin.com/)

## default()[](#default)

```
function default(config): OAuthConfig<Record<string, any>>
```

Add OneLogin login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/onelogin
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import OneLogin from "@auth/core/providers/onelogin"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    OneLogin({
      clientId: ONELOGIN_CLIENT_ID,
      clientSecret: ONELOGIN_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [OneLogin OAuth documentation](https://example.com)

### Notes[](#notes)

By default, Auth.js assumes that the OneLogin provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The OneLogin provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/onelogin.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[okta](/reference/core/providers/okta "okta")[ory-hydra](/reference/core/providers/ory-hydra "ory-hydra")
