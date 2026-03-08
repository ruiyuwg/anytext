[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")facebook

# providers/facebook

Built-in **Facebook** integration.[![](https://authjs.dev/img/providers/facebook.svg)](https://facebook.com)

## FacebookProfile[](#facebookprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### id[](#id)

```
id: string;
```

#### picture[](#picture)

```
picture: FacebookPicture;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Facebook login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/facebook
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Facebook from "@auth/core/providers/facebook"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Facebook({
      clientId: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Facebook OAuth documentation](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/)

### Notes[](#notes)

💡

Production applications cannot use localhost URLs to sign in with Facebook. You need to use a dedicated development application in Facebook to use localhost callback URLs.

💡

Email address may not be returned for accounts created on mobile.

By default, Auth.js assumes that the Facebook provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Facebook provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/facebook.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`FacebookProfile`](facebook#facebookprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[eveonline](/reference/core/providers/eveonline "eveonline")[faceit](/reference/core/providers/faceit "faceit")
