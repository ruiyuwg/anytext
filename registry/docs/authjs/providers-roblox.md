[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")roblox

# providers/roblox

Built-in **Roblox** integration.[![](https://authjs.dev/img/providers/roblox.svg)](https://roblox.com/)

## RobloxProfile[](#robloxprofile)

Corresponds to the user structure documented here: [https://create.roblox.com/docs/cloud/reference/oauth2](https://create.roblox.com/docs/cloud/reference/oauth2) (Example User with Profile Scope)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### created\_at[](#created_at)

```
created_at: number;
```

#### name[](#name)

```
name: string;
```

#### nickname[](#nickname)

```
nickname: string;
```

#### picture[](#picture)

```
picture: null | string;
```

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

#### profile[](#profile)

```
profile: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## default()[](#default)

```
function default(options): OIDCConfig<RobloxProfile>
```

Add Roblox login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/roblox
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Roblox from "@auth/providers/roblox"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Roblox({
      clientId: AUTH_ROBLOX_ID,
      clientSecret: AUTH_ROBLOX_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Roblox OAuth documentation](https://create.roblox.com/docs/cloud/open-cloud/oauth2-overview)
-   [Roblox OAuth apps](https://create.roblox.com/dashboard/credentials?activeTab=OAuthTab)

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`RobloxProfile`](roblox#robloxprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`RobloxProfile`](roblox#robloxprofile)\>

[resend](/reference/core/providers/resend "resend")[salesforce](/reference/core/providers/salesforce "salesforce")
