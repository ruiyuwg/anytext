[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")battlenet

# providers/battlenet

Built-in **Battle.net** integration.[![](https://authjs.dev/img/providers/battlenet.svg)](https://Battle.net/)

## BattleNetProfile[](#battlenetprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### battle\_tag[](#battle_tag)

```
battle_tag: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## BattleNetIssuer[](#battlenetissuer)

```
type BattleNetIssuer = 
  | "https://oauth.battle.net"
  | "https://oauth.battlenet.com.cn"
  | "https://www.battlenet.com.cn/oauth"
  | `https://${"us" | "eu" | "kr" | "tw"}.battle.net/oauth`;
```

See the [available regions](https://develop.battle.net/documentation/guides/regionality-and-apis)

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Battle.net login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/battlenet
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import BattleNet from "@auth/core/providers/battlenet"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    BattleNet({
      clientId: BATTLENET_CLIENT_ID,
      clientSecret: BATTLENET_CLIENT_SECRET,
      issuer: BATTLENET_ISSUER,
    }),
  ],
})
```

issuer must be one of these values, based on the available regions:

```
type BattleNetIssuer =
  | "https://oauth.battle.net"
  | "https://oauth.battlenet.com.cn"
  | "https://www.battlenet.com.cn/oauth"
  | "https://us.battle.net/oauth"
  | "https://eu.battle.net/oauth"
  | "https://kr.battle.net/oauth"
  | "https://tw.battle.net/oauth"
```

### Resources[](#resources)

-   [BattleNet OAuth documentation](https://develop.battle.net/documentation/guides/using-oauth)

### Notes[](#notes)

By default, Auth.js assumes that the BattleNet provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The BattleNet provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/battlenet.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`BattleNetProfile`](battlenet#battlenetprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `issuer`: [`BattleNetIssuer`](battlenet#battlenetissuer); }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[bankid-no](/reference/core/providers/bankid-no "bankid-no")[beyondidentity](/reference/core/providers/beyondidentity "beyondidentity")
