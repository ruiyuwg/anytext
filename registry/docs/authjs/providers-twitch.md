[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")twitch

# providers/twitch

Built-in **Twitch** integration.[![](https://authjs.dev/img/providers/twitch.svg)](https://www.twitch.tv/)

## TwitchProfile[](#twitchprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

#### picture[](#picture)

```
picture: string;
```

#### preferred\_username[](#preferred_username)

```
preferred_username: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## default()[](#default)

```
function default(config): OIDCConfig<TwitchProfile>
```

Add Twitch login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/twitch
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Twitch from "@auth/core/providers/twitch"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Twitch({ clientId: TWITCH_CLIENT_ID, clientSecret: TWITCH_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Twitch app documentation](https://dev.twitch.tv/console/apps)

Add the following redirect URL into the console `http://<your-next-app-url>/api/auth/callback/twitch`

### Notes[](#notes)

By default, Auth.js assumes that the Twitch provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

💡

The Twitch provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/twitch.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OIDCUserConfig`](../providers#oidcuserconfigprofile)<[`TwitchProfile`](twitch#twitchprofile)\>

### Returns[](#returns)

[`OIDCConfig`](../providers#oidcconfigprofile)<[`TwitchProfile`](twitch#twitchprofile)\>

[trakt](/reference/core/providers/trakt "trakt")[twitter](/reference/core/providers/twitter "twitter")
