[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")mailchimp

# providers/mailchimp

Built-in **Mailchimp** integration.[![](https://authjs.dev/img/providers/mailchimp.svg)](https://mailchimp.com)

## default()[](#default)

```
function default(config): OAuthConfig<Record<string, any>>
```

Add Mailchimp login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/mailchimp
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Mailchimp from "@auth/core/providers/mailchimp"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Mailchimp({
      clientId: MAILCHIMP_CLIENT_ID,
      clientSecret: MAILCHIMP_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Mailchimp OAuth documentation](https://admin.mailchimp.com/account/oauth2/client/)
-   [Mailchimp documentation: Access user data](https://mailchimp.com/developer/marketing/guides/access-user-data-oauth-2/)

### Notes[](#notes)

By default, Auth.js assumes that the Mailchimp provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Mailchimp provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/mailchimp.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[loops](/reference/core/providers/loops "loops")[mailgun](/reference/core/providers/mailgun "mailgun")
