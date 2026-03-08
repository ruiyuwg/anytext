[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")line

# providers/line

Built-in **LINE** integration.[![](https://authjs.dev/img/providers/line.svg)](https://LINE.com)

## LineProfile[](#lineprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### amr[](#amr)

```
amr: string[];
```

#### aud[](#aud)

```
aud: string;
```

#### exp[](#exp)

```
exp: number;
```

#### iat[](#iat)

```
iat: number;
```

#### iss[](#iss)

```
iss: string;
```

#### name[](#name)

```
name: string;
```

#### picture[](#picture)

```
picture: string;
```

#### sub[](#sub)

```
sub: string;
```

#### user[](#user)

```
user: any;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add LINE login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/line
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import LINE from "@auth/core/providers/line"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    LINE({ clientId: LINE_CLIENT_ID, clientSecret: LINE_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [LINE Login documentation](https://developers.line.biz/en/docs/line-login/integrate-line-login/)
-   [LINE app console](https://developers.line.biz/console/)

## Configuration[](#configuration-1)

Create a provider and a LINE login channel at [https://developers.line.biz/console/](https://developers.line.biz/console/). In the settings of the channel under LINE Login, activate web app and configure the following: Callback URL `http://localhost:3000/api/auth/callback/line`

### Notes[](#notes)

By default, Auth.js assumes that the LINE provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

To retrieve email address, you need to apply for Email address permission. Open [Line Developer Console](https://developers.line.biz/console/), go to your Login Channel. Scroll down bottom to find **OpenID Connect** -> **Email address permission**. Click **Apply** and follow the instruction.

💡

The LINE provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/line.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`LineProfile`](line#lineprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[kinde](/reference/core/providers/kinde "kinde")[linkedin](/reference/core/providers/linkedin "linkedin")
