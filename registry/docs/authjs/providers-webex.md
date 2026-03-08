[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")webex

# providers/webex

Built-in **Webex** integration.[![](https://authjs.dev/img/providers/webex.svg)](https://webex.com)

## WebexProfile[](#webexprofile)

The returned user profile from Webex when using the profile callback.

Please refer to [People - Get My Own Details](https://developer.webex.com/docs/api/v1/people/get-my-own-details) on Webex Developer portal for additional fields. Returned fields may vary depending on the user’s role, the OAuth integration’s scope, and the organization the OAuth integration belongs to.

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### avatar?[](#avatar)

```
optional avatar: string;
```

#### displayName?[](#displayname)

```
optional displayName: string;
```

#### emails[](#emails)

```
emails: string[];
```

#### id[](#id)

```
id: string;
```

* * *

## default()[](#default)

```
function default<P>(config): OAuthConfig<P>
```

Add Webex login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/webex
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Webex from "@auth/core/providers/webex"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Webex({ clientId: WEBEX_CLIENT_ID, clientSecret: WEBEX_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Webex OAuth 2.0 Integration Guide](https://developer.webex.com/docs/integrations)
-   [Login with Webex](https://developer.webex.com/docs/login-with-webex)

### Notes[](#notes)

By default, Auth.js assumes that the Webex provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Webex provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/webex.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`WebexProfile`](webex#webexprofile)

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `apiBaseUrl`: `string`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[webauthn](/reference/core/providers/webauthn "webauthn")[wechat](/reference/core/providers/wechat "wechat")
