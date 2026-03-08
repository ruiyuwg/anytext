[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")foursquare

# providers/foursquare

Built-in **FourSquare** integration.[![](https://authjs.dev/img/providers/foursquare.svg)](https://foursquare.com)

## default()[](#default)

```
function default(options): OAuthConfig<Record<string, any>>
```

Add FourSquare login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/foursquare
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import FourSquare from "@auth/core/providers/foursquare"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    FourSquare({
      clientId: FOURSQUARE_CLIENT_ID,
      clientSecret: FOURSQUARE_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [FourSquare OAuth documentation](https://docs.foursquare.com/developer/reference/authentication)

### Notes[](#notes)

By default, Auth.js assumes that the FourSquare provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

⚠️

Foursquare requires an additional apiVersion parameter in YYYYMMDD format, which essentially states “I’m prepared for API changes up to this date”.

💡

The FourSquare provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/foursquare.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>> & { `apiVersion`: `string`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>>

[forwardemail](/reference/core/providers/forwardemail "forwardemail")[freshbooks](/reference/core/providers/freshbooks "freshbooks")
