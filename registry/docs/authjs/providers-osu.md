[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")osu

# providers/osu

Built-in **osu!** integration.[![](https://authjs.dev/img/providers/osu.svg)](https://osu.ppy.sh/home)

## OsuProfile[](#osuprofile)

### Extends[](#extends)

-   [`OsuUserCompact`](osu#osuusercompact).[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### avatar\_url[](#avatar_url)

```
avatar_url: string;
```

##### Inherited from[](#inherited-from)

[`OsuUserCompact`](osu#osuusercompact).[`avatar_url`](osu#avatar_url-1)

#### country[](#country)

```
country: {
  code: string;
  name: string;
};
```

##### code[](#code)

```
code: string;
```

##### name[](#name)

```
name: string;
```

#### country\_code[](#country_code)

```
country_code: string;
```

##### Inherited from[](#inherited-from-1)

[`OsuUserCompact`](osu#osuusercompact).[`country_code`](osu#country_code-1)

#### cover[](#cover)

```
cover: {
  custom_url: null | string;
  id: null | number;
  url: string;
};
```

##### custom\_url[](#custom_url)

```
custom_url: null | string;
```

##### id[](#id)

```
id: null | number;
```

##### url[](#url)

```
url: string;
```

#### default\_group[](#default_group)

```
default_group: string;
```

##### Inherited from[](#inherited-from-2)

[`OsuUserCompact`](osu#osuusercompact).[`default_group`](osu#default_group-1)

#### discord[](#discord)

```
discord: null | string;
```

#### has\_supported[](#has_supported)

```
has_supported: boolean;
```

#### id[](#id-1)

```
id: number;
```

##### Inherited from[](#inherited-from-3)

[`OsuUserCompact`](osu#osuusercompact).[`id`](osu#id-2)

#### interests[](#interests)

```
interests: null | string;
```

#### is\_active[](#is_active)

```
is_active: boolean;
```

##### Inherited from[](#inherited-from-4)

[`OsuUserCompact`](osu#osuusercompact).[`is_active`](osu#is_active-1)

#### is\_bot[](#is_bot)

```
is_bot: boolean;
```

##### Inherited from[](#inherited-from-5)

[`OsuUserCompact`](osu#osuusercompact).[`is_bot`](osu#is_bot-1)

#### is\_deleted[](#is_deleted)

```
is_deleted: boolean;
```

##### Inherited from[](#inherited-from-6)

[`OsuUserCompact`](osu#osuusercompact).[`is_deleted`](osu#is_deleted-1)

#### is\_online[](#is_online)

```
is_online: boolean;
```

##### Inherited from[](#inherited-from-7)

[`OsuUserCompact`](osu#osuusercompact).[`is_online`](osu#is_online-1)

#### is\_restricted[](#is_restricted)

```
is_restricted: boolean;
```

#### is\_supporter[](#is_supporter)

```
is_supporter: boolean;
```

##### Inherited from[](#inherited-from-8)

[`OsuUserCompact`](osu#osuusercompact).[`is_supporter`](osu#is_supporter-1)

#### join\_date[](#join_date)

```
join_date: Date;
```

#### kudosu[](#kudosu)

```
kudosu: {
  available: number;
  total: number;
};
```

##### available[](#available)

```
available: number;
```

##### total[](#total)

```
total: number;
```

#### last\_visit[](#last_visit)

```
last_visit: 
  | null
  | Date;
```

##### Inherited from[](#inherited-from-9)

[`OsuUserCompact`](osu#osuusercompact).[`last_visit`](osu#last_visit-1)

#### location[](#location)

```
location: null | string;
```

#### max\_blocks[](#max_blocks)

```
max_blocks: number;
```

#### max\_friends[](#max_friends)

```
max_friends: number;
```

#### occupation[](#occupation)

```
occupation: null | string;
```

#### playmode[](#playmode)

```
playmode: string;
```

#### playstyle[](#playstyle)

```
playstyle: string[];
```

#### pm\_friends\_only[](#pm_friends_only)

```
pm_friends_only: boolean;
```

##### Inherited from[](#inherited-from-10)

[`OsuUserCompact`](osu#osuusercompact).[`pm_friends_only`](osu#pm_friends_only-1)

#### post\_count[](#post_count)

```
post_count: number;
```

#### profile\_colour[](#profile_colour)

```
profile_colour: null | string;
```

##### Inherited from[](#inherited-from-11)

[`OsuUserCompact`](osu#osuusercompact).[`profile_colour`](osu#profile_colour-1)

#### profile\_order[](#profile_order)

```
profile_order: string[];
```

#### title[](#title)

```
title: null | string;
```

#### title\_url[](#title_url)

```
title_url: null | string;
```

#### twitter[](#twitter)

```
twitter: null | string;
```

#### username[](#username)

```
username: string;
```

##### Inherited from[](#inherited-from-12)

[`OsuUserCompact`](osu#osuusercompact).[`username`](osu#username-1)

#### website[](#website)

```
website: null | string;
```

* * *

## OsuUserCompact[](#osuusercompact)

### Extended by[](#extended-by)

-   [`OsuProfile`](osu#osuprofile)

### Properties[](#properties-1)

#### avatar\_url[](#avatar_url-1)

```
avatar_url: string;
```

#### country\_code[](#country_code-1)

```
country_code: string;
```

#### default\_group[](#default_group-1)

```
default_group: string;
```

#### id[](#id-2)

```
id: number;
```

#### is\_active[](#is_active-1)

```
is_active: boolean;
```

#### is\_bot[](#is_bot-1)

```
is_bot: boolean;
```

#### is\_deleted[](#is_deleted-1)

```
is_deleted: boolean;
```

#### is\_online[](#is_online-1)

```
is_online: boolean;
```

#### is\_supporter[](#is_supporter-1)

```
is_supporter: boolean;
```

#### last\_visit[](#last_visit-1)

```
last_visit: 
  | null
  | Date;
```

#### pm\_friends\_only[](#pm_friends_only-1)

```
pm_friends_only: boolean;
```

#### profile\_colour[](#profile_colour-1)

```
profile_colour: null | string;
```

#### username[](#username-1)

```
username: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add osu! login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/osu
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Osu from "@auth/core/providers/osu"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Osu({ clientId: OSU_CLIENT_ID, clientSecret: OSU_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [osu! OAuth documentation](https://osu.ppy.sh/docs/index.html#authentication)
-   [osu! app console](https://osu.ppy.sh/home/account/edit#new-oauth-application)

### Notes[](#notes)

By default, Auth.js assumes that the Osu provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

osu! does not provide a user email.

💡

The osu! provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/osu.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`OsuProfile`](osu#osuprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[osso](/reference/core/providers/osso "osso")[passage](/reference/core/providers/passage "passage")
