[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")wordpress

# providers/wordpress

Built-in **WordPress** integration.[![](https://authjs.dev/img/providers/wordpress.svg)](https://wordpress.com/)

## default()[](#default)

```
function default(config): OAuthConfig<Record<string, any>>
```

Add WordPress login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/wordpress
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import WordPress from "@auth/core/providers/wordpress"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    WordPress({
      clientId: WORKPRESS_CLIENT_ID,
      clientSecret: WORKPRESS_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [WordPress OAuth documentation](https://developer.wordpress.com/docs/oauth2/)

### Notes[](#notes)

By default, Auth.js assumes that the WordPress provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The WordPress provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/wordpress.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[wikimedia](/reference/core/providers/wikimedia "wikimedia")[workos](/reference/core/providers/workos "workos")
