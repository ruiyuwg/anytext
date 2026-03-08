[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")pinterest

# providers/pinterest

Built-in **Pinterest** integration.[![](https://authjs.dev/img/providers/pinterest.svg)](https://www.pinterest.com/)

## PinterestProfile[](#pinterestprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### account\_type[](#account_type)

```
account_type: "BUSINESS" | "PINNER";
```

#### profile\_image[](#profile_image)

```
profile_image: string;
```

#### username[](#username)

```
username: string;
```

#### website\_url[](#website_url)

```
website_url: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Pinterest login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/pinterest
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Pinterest from "@auth/core/providers/pinterest"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Pinterest({
      clientId: PINTEREST_CLIENT_ID,
      clientSecret: PINTEREST_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Pinterest OAuth documentation](https://developers.pinterest.com/docs/getting-started/authentication/)
-   [Pinterest app console](https://developers.pinterest.com/apps/)

### Notes[](#notes)

By default, Auth.js assumes that the Pinterest provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

To use in production, make sure the app has standard API access and not trial access

💡

The Pinterest provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/pinterest.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`PinterestProfile`](pinterest#pinterestprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[ping-id](/reference/core/providers/ping-id "ping-id")[pipedrive](/reference/core/providers/pipedrive "pipedrive")
