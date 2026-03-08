[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")zoho

# providers/zoho

Built-in **ZOHO** integration.[![](https://authjs.dev/img/providers/zoho.svg)](https://zoho.com/)

## default()[](#default)

```
function default(config): OAuthConfig<Record<string, any>>
```

Add ZOHO login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/zoho
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import ZOHO from "@auth/core/providers/zoho"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    ZOHO({ clientId: ZOHO_CLIENT_ID, clientSecret: ZOHO_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Zoho OAuth 2.0 Integration Guide](https://www.zoho.com/accounts/protocol/oauth/web-server-applications.html)
-   [Zoho API Console](https://api-console.zoho.com)

### Notes[](#notes)

By default, Auth.js assumes that the ZOHO provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The ZOHO provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/zoho.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[zitadel](/reference/core/providers/zitadel "zitadel")[zoom](/reference/core/providers/zoom "zoom")
