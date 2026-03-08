[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")discord

# providers/discord

Built-in **Discord** integration.[![](https://authjs.dev/img/providers/discord.svg)](https://discord.com/)

## DiscordProfile[](#discordprofile)

Corresponds to the user structure documented here: [https://discord.com/developers/docs/resources/user#user-object-user-structure](https://discord.com/developers/docs/resources/user#user-object-user-structure)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### accent\_color[](#accent_color)

```
accent_color: null | number;
```

the user’s banner color encoded as an integer representation of hexadecimal color code

#### avatar[](#avatar)

```
avatar: null | string;
```

the user’s avatar hash: [https://discord.com/developers/docs/reference#image-formatting](https://discord.com/developers/docs/reference#image-formatting)

#### avatar\_decoration[](#avatar_decoration)

```
avatar_decoration: null | string;
```

undocumented field; corresponds to the Discord feature where you can e.g. put your avatar inside of an ice cube

#### banner[](#banner)

```
banner: null | string;
```

the user’s banner hash: [https://discord.com/developers/docs/reference#image-formatting](https://discord.com/developers/docs/reference#image-formatting)

#### banner\_color[](#banner_color)

```
banner_color: null | string;
```

undocumented field; corresponds to the premium feature where you can select a custom banner color

#### bot?[](#bot)

```
optional bot: boolean;
```

whether the user belongs to an OAuth2 application

#### discriminator[](#discriminator)

```
discriminator: string;
```

the user’s Discord-tag

#### display\_name[](#display_name)

```
display_name: null | string;
```

undocumented field; corresponds to the user’s custom nickname

#### email[](#email)

```
email: null | string;
```

the user’s email

#### flags[](#flags)

```
flags: number;
```

the flags on a user’s account: [https://discord.com/developers/docs/resources/user#user-object-user-flags](https://discord.com/developers/docs/resources/user#user-object-user-flags)

#### global\_name[](#global_name)

```
global_name: null | string;
```

the user’s display name, if it is set

#### id[](#id)

```
id: string;
```

the user’s id (i.e. the numerical snowflake)

#### image\_url[](#image_url)

```
image_url: string;
```

undocumented field; the CDN URL of their profile picture

#### locale[](#locale)

```
locale: string;
```

the user’s chosen language option: [https://discord.com/developers/docs/reference#locales](https://discord.com/developers/docs/reference#locales)

#### mfa\_enabled[](#mfa_enabled)

```
mfa_enabled: boolean;
```

whether the user has two factor enabled on their account

#### premium\_type[](#premium_type)

```
premium_type: number;
```

the type of Nitro subscription on a user’s account: [https://discord.com/developers/docs/resources/user#user-object-premium-types](https://discord.com/developers/docs/resources/user#user-object-premium-types)

#### public\_flags[](#public_flags)

```
public_flags: number;
```

the public flags on a user’s account: [https://discord.com/developers/docs/resources/user#user-object-user-flags](https://discord.com/developers/docs/resources/user#user-object-user-flags)

#### system?[](#system)

```
optional system: boolean;
```

whether the user is an Official Discord System user (part of the urgent message system)

#### username[](#username)

```
username: string;
```

the user’s username, not unique across the platform

#### verified[](#verified)

```
verified: boolean;
```

whether the email on this account has been verified

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Discord login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/discord
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Discord from "@auth/core/providers/discord"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Discord({
      clientId: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Discord OAuth documentation](https://discord.com/developers/docs/topics/oauth2)
-   [Discord OAuth apps](https://discord.com/developers/applications)

### Notes[](#notes)

By default, Auth.js assumes that the Discord provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Discord provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/discord.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`DiscordProfile`](discord#discordprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[descope](/reference/core/providers/descope "descope")[dribbble](/reference/core/providers/dribbble "dribbble")
