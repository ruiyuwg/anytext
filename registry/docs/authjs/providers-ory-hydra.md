[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")ory-hydra

# providers/ory-hydra

Built-in **Ory Hydra** integration.[![](https://authjs.dev/img/providers/ory.svg)](https://www.ory.sh/hydra/)

## OryHydraProfile[](#oryhydraprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### amr[](#amr)

```
amr: string;
```

#### aud[](#aud)

```
aud: string;
```

#### email?[](#email)

```
optional email: string;
```

#### exp[](#exp)

```
exp: string;
```

#### iat[](#iat)

```
iat: string;
```

#### iss[](#iss)

```
iss: string;
```

#### jti[](#jti)

```
jti: string;
```

#### sub[](#sub)

```
sub: string;
```

#### ver[](#ver)

```
ver: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OIDCConfig<P>
```

Add Ory Hydra login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/hydra
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import OryHydra from "@auth/core/providers/ory-hydra"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    OryHydra({
      clientId: ORY_HYDRA_CLIENT_ID,
      clientSecret: ORY_HYDRA_CLIENT_SECRET,
      issuer: ORY_HYDRA_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [Ory Hydra documentation](https://www.ory.sh/docs/hydra/5min-tutorial)

### Notes[](#notes)

Ory Hydra can be setup using the default Ory Network setup or self hosted on your own infrastructure. By default, Auth.js assumes that the Ory Hydra provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Ory Hydra provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/ory-hydra.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`OryHydraProfile`](ory-hydra#oryhydraprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<`P`\>

[onelogin](/reference/core/providers/onelogin "onelogin")[osso](/reference/core/providers/osso "osso")
