[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")hubspot

# providers/hubspot

Built-in **HubSpot** integration.[![](https://authjs.dev/img/providers/hubspot.svg)](https://hubspot.com)

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add HubSpot login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/hubspot
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import HubSpot from "@auth/core/providers/hubspot"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    HubSpot({
      clientId: HUBSPOT_CLIENT_ID,
      clientSecret: HUBSPOT_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [HubSpot OAuth documentation](https://developers.hubspot.com/docs/api/oauth-quickstart-guide)

### Notes[](#notes)

By default, Auth.js assumes that the HubSpot provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

You need to have an APP in your Developer Account as described at [https://developers.hubspot.com/docs/api/developer-tools-overview](https://developers.hubspot.com/docs/api/developer-tools-overview)

HubSpot returns a limited amount of information on the token holder (see [docs](https://legacydocs.hubspot.com/docs/methods/oauth2/get-access-token-information)). One other issue is that the name and profile photo cannot be fetched through API as discussed [here](https://community.hubspot.com/t5/APIs-Integrations/Profile-photo-is-not-retrieved-with-User-API/m-p/325521).

💡

The HubSpot provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/hubspot.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ `HubSpotProfile`

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[google](/reference/core/providers/google "google")[huggingface](/reference/core/providers/huggingface "huggingface")
