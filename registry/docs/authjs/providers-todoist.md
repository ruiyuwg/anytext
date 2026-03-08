[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")todoist

# providers/todoist

Built-in **Todoist** integration.[![](https://authjs.dev/img/providers/todoist.svg)](https://www.todoist.com/)

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Todoist login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/todoist
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Todoist from "@auth/core/providers/todoist"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Todoist({
      clientId: TODOIST_CLIENT_ID,
      clientSecret: TODOIST_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Todoist OAuth documentation](https://developer.todoist.com/guides/#oauth)
-   [Todoist configuration](https://developer.todoist.com/appconsole.html)

### Notes[](#notes)

By default, Auth.js assumes that the Todoist provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Todoist provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/todoist.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ `TodoistProfile`

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[tiktok](/reference/core/providers/tiktok "tiktok")[trakt](/reference/core/providers/trakt "trakt")
