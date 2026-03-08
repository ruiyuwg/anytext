[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")netlify

# providers/netlify

Built-in **Netlify** integration.[![](https://authjs.dev/img/providers/netlify.svg)](https://netlify.com)

## default()[](#default)

```
function default(config): OAuthConfig<Record<string, any>>
```

Add Netlify login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/netlify
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Netlify from "@auth/core/providers/netlify"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Netlify({
      clientId: NETLIFY_CLIENT_ID,
      clientSecret: NETLIFY_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Netlify OAuth blog](https://www.netlify.com/blog/2016/10/10/integrating-with-netlify-oauth2/)
-   [Netlify OAuth example](https://github.com/netlify/netlify-oauth-example/)

### Notes[](#notes)

By default, Auth.js assumes that the Netlify provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Netlify provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/netlify.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[naver](/reference/core/providers/naver "naver")[netsuite](/reference/core/providers/netsuite "netsuite")
