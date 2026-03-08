[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")box

# providers/box

Built-in **Box** integration.[![](https://authjs.dev/img/providers/box.svg)](https://box.com/)

## default()[](#default)

```
function default(options): OAuthConfig<Record<string, any>>
```

Add Box login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/box
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Box from "@auth/core/providers/box"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Box({ clientId: BOX_CLIENT_ID, clientSecret: BOX_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Box developers documentation](https://developer.box.com/reference/)
-   [Box OAuth documentation](https://developer.box.com/guides/sso-identities-and-app-users/connect-okta-to-app-users/configure-box/)

### Notes[](#notes)

By default, Auth.js assumes that the Box provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Box provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/box.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[bitbucket](/reference/core/providers/bitbucket "bitbucket")[boxyhq-saml](/reference/core/providers/boxyhq-saml "boxyhq-saml")
