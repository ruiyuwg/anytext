[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")figma

# providers/figma

Built-in **Figma** integration.[![](https://authjs.dev/img/providers/figma.svg)](https://figma.com/)

## default()[](#default)

```
function default(options): OAuth2Config<FigmaProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/figma
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Figma from "@auth/core/providers/figma"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Figma({
      clientId: process.env.AUTH_FIGMA_ID,
      clientSecret: process.env.AUTH_FIGMA_SECRET
    })
  ],
})
```

### Resources[](#resources)

-   [Using OAuth 2 on Figma](https://www.figma.com/developers/api#oauth2)
-   [Scopes](https://www.figma.com/developers/api#authentication-scopes)

#### Notes[](#notes)

By default, Auth.js assumes that the Figma provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Figma provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/figma.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`FigmaProfile`\>

### Returns[](#returns)

[`OAuth2Config`](../providers#oauth2configprofile)<`FigmaProfile`\>

[faceit](/reference/core/providers/faceit "faceit")[forwardemail](/reference/core/providers/forwardemail "forwardemail")
