[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")faceit

# providers/faceit

Built-in **FACEIT** integration.[![](https://authjs.dev/img/providers/faceit.svg)](https://faceit.com)

## default()[](#default)

```
function default(options): OAuthConfig<Record<string, any>>
```

Add FACEIT login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/faceit
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import FACEIT from "@auth/core/providers/faceit"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    FACEIT({ clientId: FACEIT_CLIENT_ID, clientSecret: FACEIT_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [FACEIT OAuth documentation](https://cdn.faceit.com/third_party/docs/FACEIT_Connect_3.0.pdf)

### Notes[](#notes)

Grant type: Authorization Code Scopes to have basic infos (email, nickname, guid and avatar) : openid, email, profile By default, Auth.js assumes that the FACEIT provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The FACEIT provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/faceit.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[facebook](/reference/core/providers/facebook "facebook")[figma](/reference/core/providers/figma "figma")
