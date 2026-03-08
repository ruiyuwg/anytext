[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")simplelogin

# providers/simplelogin

Built-in **SimpleLogin** integration.[![](https://authjs.dev/img/providers/simplelogin.svg)](https://simplelogin.io)

## SimpleLoginProfile[](#simpleloginprofile)

### Properties[](#properties)

#### avatar\_url[](#avatar_url)

```
avatar_url: undefined | string;
```

#### client[](#client)

```
client: string;
```

#### email[](#email)

```
email: string;
```

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

#### id[](#id)

```
id: number;
```

#### name[](#name)

```
name: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add SimpleLogin login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/simplelogin
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import SimpleLogin from "@auth/core/providers/simplelogin"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    SimpleLogin({
      clientId: SIMPLELOGIN_CLIENT_ID,
      clientSecret: SIMPLELOGIN_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Sign in with SimpleLogin](https://simplelogin.io/developer/)
-   [SimpleLogin OAuth documentation](https://simplelogin.io/docs/siwsl/intro/)
-   [SimpleLogin OAuth Configuration](https://app.simplelogin.io/developer)

### Notes[](#notes)

By default, Auth.js assumes that the SimpleLogin provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

The “Authorized redirect URIs” used must include your full domain and end in the callback path. By default, SimpleLogin whitelists all `http[s]://localhost:*` address to facilitate local development. For example;

-   For production: `https://{YOUR_DOMAIN}/api/auth/callback/simplelogin`
-   For development: By default **localhost** is whitelisted.

⚠️

**Authorized Redirect URIs** must be **HTTPS** for security reason (except for `localhost`).

💡

The SimpleLogin provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/simplelogin.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`SimpleLoginProfile`](simplelogin#simpleloginprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[sendgrid](/reference/core/providers/sendgrid "sendgrid")[slack](/reference/core/providers/slack "slack")
