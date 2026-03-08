[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")ping-id

# providers/ping-id

## PingProfile[](#pingprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### acr[](#acr)

```
acr: string;
```

#### amr[](#amr)

```
amr: [string];
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

#### email[](#email)

```
email: string;
```

#### env[](#env)

```
env: string;
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

#### name[](#name)

```
name: string;
```

#### org[](#org)

```
org: string;
```

#### p1.region[](#p1region)

```
p1.region: string;
```

#### picture[](#picture)

```
picture: string;
```

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

#### sid[](#sid)

```
sid: string;
```

#### sub[](#sub)

```
sub: string;
```

#### updated\_at[](#updated_at)

```
updated_at: number;
```

* * *

## default()[](#default)

```
function default(options): OIDCConfig<PingProfile>
```

Add PingId login to your page.

## Documentation[](#documentation)

-   [Create App in Ping Identity](https://docs.pingidentity.com/r/en-us/pingone/p1_add_app_worker)

* * *

## Example[](#example)

```
import PingId from "@auth/core/providers/ping-id"
 
...
providers: [
 PingId({
   clientId: AUTH_PING_ID_ID,
   clientSecret: AUTH_PING_ID_SECRET,
   issuer: PING_ID_ISSUER
 })
]
...
```

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`PingProfile`](ping-id#pingprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`PingProfile`](ping-id#pingprofile)\>

[patreon](/reference/core/providers/patreon "patreon")[pinterest](/reference/core/providers/pinterest "pinterest")
