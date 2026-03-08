[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")mastodon

# providers/mastodon

Built-in **Mastodon** integration.[![](https://authjs.dev/img/providers/mastodon.svg)](https://mastodon.social)

## MastodonProfile[](#mastodonprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### acct[](#acct)

```
acct: string;
```

#### avatar[](#avatar)

```
avatar: string;
```

#### avatar\_static[](#avatar_static)

```
avatar_static: string;
```

#### bot[](#bot)

```
bot: boolean;
```

#### created\_at[](#created_at)

```
created_at: string;
```

#### display\_name[](#display_name)

```
display_name: string;
```

#### followers\_count[](#followers_count)

```
followers_count: number;
```

#### following\_count[](#following_count)

```
following_count: number;
```

#### header[](#header)

```
header: string;
```

#### header\_static[](#header_static)

```
header_static: string;
```

#### id[](#id)

```
id: string;
```

#### last\_status\_at[](#last_status_at)

```
last_status_at: null | string;
```

#### locked[](#locked)

```
locked: boolean;
```

#### note[](#note)

```
note: string;
```

#### statuses\_count[](#statuses_count)

```
statuses_count: number;
```

#### url[](#url)

```
url: string;
```

#### username[](#username)

```
username: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Mastodon login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/mastodon
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Mastodon from "@auth/core/providers/mastodon"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Mastodon({
      clientId: MASTODON_CLIENT_ID,
      clientSecret: MASTODON_CLIENT_SECRET,
      issuer: MASTODON_ISSUER,
    }),
  ],
})
```

### Resources[](#resources)

-   [Mastodon OAuth documentation](https://docs.joinmastodon.org/client/token/)
-   [Mastodon OAuth Configuration](https://mastodon.social/settings/applications)

### Notes[](#notes)

By default, Auth.js assumes that the Mastodon provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

Due to Mastodons infrastructure beeing a Fediverse you have to define the `issuer` you want to connect to.

💡

The Mastodon provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/mastodon.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`MastodonProfile`](mastodon#mastodonprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `issuer`: `string`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[mailru](/reference/core/providers/mailru "mailru")[mattermost](/reference/core/providers/mattermost "mattermost")
