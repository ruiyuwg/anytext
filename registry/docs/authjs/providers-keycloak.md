[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")keycloak

# providers/keycloak

Built-in **Keycloak** integration.[![](https://authjs.dev/img/providers/keycloak.svg)](https://keycloak.com)

## KeycloakProfile[](#keycloakprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### acr[](#acr)

```
acr: string;
```

#### at\_hash[](#at_hash)

```
at_hash: string;
```

#### aud[](#aud)

```
aud: string;
```

#### auth\_time[](#auth_time)

```
auth_time: number;
```

#### azp[](#azp)

```
azp: string;
```

#### email[](#email)

```
email: string;
```

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

#### exp[](#exp)

```
exp: number;
```

#### family\_name[](#family_name)

```
family_name: string;
```

#### given\_name[](#given_name)

```
given_name: string;
```

#### iat[](#iat)

```
iat: number;
```

#### iss[](#iss)

```
iss: string;
```

#### jti[](#jti)

```
jti: string;
```

#### name[](#name)

```
name: string;
```

#### picture[](#picture)

```
picture: string;
```

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

#### session\_state[](#session_state)

```
session_state: string;
```

#### sid[](#sid)

```
sid: string;
```

#### sub[](#sub)

```
sub: string;
```

#### typ[](#typ)

```
typ: string;
```

#### user[](#user)

```
user: any;
```

* * *

## default()[](#default)

```
function default<P>(options): OIDCConfig<P>
```

Add Keycloak login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/keycloak
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Keycloak from "@auth/core/providers/keycloak"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Keycloak({
      clientId: KEYCLOAK_CLIENT_ID,
      clientSecret: KEYCLOAK_CLIENT_SECRET,
      issuer: KEYCLOAK_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [Keycloak OIDC documentation](https://www.keycloak.org/docs/latest/server_admin/#_oidc_clients)

💡

Create an openid-connect client in Keycloak with “confidential” as the “Access Type”.

issuer should include the realm – e.g. [https://my-keycloak-domain.com/realms/My\_Realm](https://my-keycloak-domain.com/realms/My_Realm)

### Notes[](#notes)

By default, Auth.js assumes that the Keycloak provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Keycloak provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/keycloak.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`KeycloakProfile`](keycloak#keycloakprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<`P`\>

[kakao](/reference/core/providers/kakao "kakao")[kinde](/reference/core/providers/kinde "kinde")
