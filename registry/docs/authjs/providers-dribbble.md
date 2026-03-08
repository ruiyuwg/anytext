[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")dribbble

# providers/dribbble

Built-in **Dribbble** integration.[![](https://authjs.dev/img/providers/dribbble.svg)](https://dribbble.com)

## DribbbleProfile[](#dribbbleprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### avatar\_url[](#avatar_url)

```
avatar_url: string;
```

#### email[](#email)

```
email: string;
```

#### id[](#id)

```
id: number;
```

#### name[](#name)

```
name: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Dribbble login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/dribbble
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Dribbble from "@auth/core/providers/dribbble"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Dribbble({
      clientId: DRIBBBLE_CLIENT_ID,
      clientSecret: DRIBBBLE_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Dribbble API](https://developer.dribbble.com)
-   [Dribbble OAuth](https://developer.dribbble.com/v2/oauth/)
-   [Dribbble Applications](https://dribbble.com/account/applications/new)

### Notes[](#notes)

By default, Auth.js assumes that the GitHub provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Dribbble provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/dribbble.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

💡

You can optionally set the scope to `public upload` for more advanced scenarios. If omitted, the default `public` scope will be used for authentication purposes.

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`DribbbleProfile`](dribbble#dribbbleprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `scope`: `"public"` | `"public upload"`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[discord](/reference/core/providers/discord "discord")[dropbox](/reference/core/providers/dropbox "dropbox")
