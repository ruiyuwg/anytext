[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")instagram

# providers/instagram

Built-in **Instagram** integration.[![](https://authjs.dev/img/providers/instagram.svg)](https://www.instagram.com/)

## default()[](#default)

```
function default(config): OAuthConfig<Record<string, any>>
```

Add Instagram login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/instagram
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Instagram from "@auth/core/providers/instagram"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Instagram({
      clientId: INSTAGRAM_CLIENT_ID,
      clientSecret: INSTAGRAM_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Instagram OAuth documentation](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started)
-   [Instagram OAuth apps](https://developers.facebook.com/apps/)

### Notes[](#notes)

By default, Auth.js assumes that the Instagram provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

⚠️

Email address is not returned by the Instagram API.

💡

Instagram display app required callback URL to be configured in your Facebook app and Facebook required you to use **https** even for localhost! In order to do that, you either need to [add an SSL to your localhost](https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/) or use a proxy such as [ngrok](https://ngrok.com/docs).

💡

The Instagram provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/instagram.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[identity-server4](/reference/core/providers/identity-server4 "identity-server4")[kakao](/reference/core/providers/kakao "kakao")
