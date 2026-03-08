[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")united-effects

# providers/united-effects

Built-in **United Effects** integration.[![](https://authjs.dev/img/providers/united-effects.svg)](https://www.unitedeffects.com/)

## UnitedEffectsProfile[](#unitedeffectsprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
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

Add United Effects login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/united-effects
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import UnitedEffects from "@auth/core/providers/united-effects"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    UnitedEffects({ clientId: UE_CLIENT_ID, clientSecret: UE_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [UnitedEffects Auth.js documentation](https://docs.unitedeffects.com/integrations/nextauthjs)”,

### Notes[](#notes)

By default, Auth.js assumes that the UnitedEffects provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

`issuer` should be the fully qualified URL including your Auth Group ID – e.g. `https://auth.unitedeffects.com/YQpbQV5dbW-224dCovz-3`

🚫

The United Effects API does not return the user name or image by design, so this provider will return null for both. United Effects prioritizes user personal information security above all and has built a secured profile access request system separate from the provider API.

💡

The UnitedEffects provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/united-effects.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`UnitedEffectsProfile`](united-effects#unitedeffectsprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `issuer`: `string`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[twitter](/reference/core/providers/twitter "twitter")[vipps](/reference/core/providers/vipps "vipps")
