[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")cognito

# providers/cognito

Built-in **Cognito** integration.[![](https://authjs.dev/img/providers/cognito.svg)](https://docs.aws.amazon.com/cognito)

## CognitoProfile[](#cognitoprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
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

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Cognito login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/cognito
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Cognito from "@auth/core/providers/cognito"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Cognito({
      clientId: COGNITO_CLIENT_ID,
      clientSecret: COGNITO_CLIENT_SECRET,
      issuer: COGNITO_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [Cognito OAuth documentation](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-userpools-server-contract-reference.html)

### Notes[](#notes)

You need to select your AWS region to go the the Cognito dashboard.

💡

The issuer is a URL, that looks like this: [https://cognito-idp.{region}.amazonaws.com/{PoolId}](https://cognito-idp.%7Bregion%7D.amazonaws.com/%7BPoolId%7D)

`PoolId` is from General Settings in Cognito, not to be confused with the App Client ID.

⚠️

Make sure you select all the appropriate client settings or the OAuth flow will not work.

By default, Auth.js assumes that the Cognito provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Cognito provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/cognito.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`CognitoProfile`](cognito#cognitoprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[click-up](/reference/core/providers/click-up "click-up")[coinbase](/reference/core/providers/coinbase "coinbase")
