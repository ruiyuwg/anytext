[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")reddit

# providers/reddit

Built-in **Reddit** integration.[![](https://authjs.dev/img/providers/reddit.svg)](https://www.reddit.com/)

## default()[](#default)

```
function default(config): OAuthConfig<Record<string, any>>
```

Add Reddit login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/reddit
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Reddit from "@auth/core/providers/reddit"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Reddit({ clientId: REDDIT_CLIENT_ID, clientSecret: REDDIT_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Reddit API documentation](https://www.reddit.com/dev/api/)
-   [Reddit app console](https://www.reddit.com/prefs/apps/)

### Notes[](#notes)

By default, Auth.js assumes that the Reddit provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

🚫

Reddit requires authorization every time you go through their page. Only allows one callback URL per Client ID / Client Secret.

💡

This Provider template only has a one hour access token to it and only has the “identity” scope. If you want to get a refresh token as well you must follow this:

```
providers: [
 Reddit({
   clientId: process.env.REDDIT_CLIENT_ID,
   clientSecret: process.env.REDDIT_CLIENT_SECRET,
   authorization: {
     params: {
       duration: 'permanent',
     },
   },
 }),
]
```

💡

The Reddit provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/reddit.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[provider-types](/reference/core/providers/provider-types "provider-types")[resend](/reference/core/providers/resend "resend")
