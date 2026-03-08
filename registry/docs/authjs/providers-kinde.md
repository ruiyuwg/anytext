[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")kinde

# providers/kinde

Built-in sign in with **Kinde** integration.

[![](https://authjs.dev/img/providers/kinde.svg)](https://kinde.com)

## KindeProfile[](#kindeprofile)

The returned user profile from Kinde when using the profile callback. [Reference](https://kinde.com/api/docs/#get-user-profile).

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### first\_name[](#first_name)

```
first_name: string;
```

The user’s given name.

#### id[](#id)

```
id: string;
```

The user’s unique identifier.

#### last\_name[](#last_name)

```
last_name: string;
```

The user’s family name.

#### picture[](#picture)

```
picture: string;
```

URL pointing to the user’s profile picture.

#### preferred\_email[](#preferred_email)

```
preferred_email: string;
```

The user’s email address.

#### provided\_id[](#provided_id)

```
provided_id: string;
```

The user’s identifier from a previous system.

#### username[](#username)

```
username: string;
```

The user’s username.

* * *

## default()[](#default)

```
function default(config): OIDCConfig<KindeProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/kinde
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Kinde from "@auth/core/providers/kinde"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Kinde({
      clientId: KINDE_CLIENT_ID,
      clientSecret: KINDE_CLIENT_SECRET,
      issuer: KINDE_DOMAIN,
    }),
  ],
})
```

### Resources[](#resources)

-   [Kinde docs](https://docs.kinde.com/)

### Notes[](#notes)

The Kinde provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/kinde.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`KindeProfile`](kinde#kindeprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`KindeProfile`](kinde#kindeprofile)\>

[keycloak](/reference/core/providers/keycloak "keycloak")[line](/reference/core/providers/line "line")
