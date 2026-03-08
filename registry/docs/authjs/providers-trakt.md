[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")trakt

# providers/trakt

Built-in **Trakt** integration.[![](https://authjs.dev/img/providers/trakt.svg)](https://www.trakt.tv/)

## TraktUser[](#traktuser)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### about[](#about)

```
about: null | string;
```

#### age[](#age)

```
age: null | number;
```

#### gender[](#gender)

```
gender: null | string;
```

#### ids[](#ids)

```
ids: {
  slug: string;
};
```

##### slug[](#slug)

```
slug: string;
```

#### images[](#images)

```
images: {
  avatar: {
     full: string;
    };
};
```

##### avatar[](#avatar)

```
avatar: {
  full: string;
};
```

###### avatar.full[](#avatarfull)

```
avatar.full: string;
```

#### joined\_at[](#joined_at)

```
joined_at: string;
```

#### location[](#location)

```
location: null | string;
```

#### name[](#name)

```
name: string;
```

#### private[](#private)

```
private: boolean;
```

#### username[](#username)

```
username: string;
```

#### vip[](#vip)

```
vip: boolean;
```

#### vip\_ep[](#vip_ep)

```
vip_ep: boolean;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Trakt login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/trakt
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Trakt from "@auth/core/providers/trakt"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Trakt({ clientId: TRAKT_CLIENT_ID, clientSecret: TRAKT_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Trakt OAuth documentation](https://trakt.docs.apiary.io/#reference/authentication-oauth)

If you’re using the api in production by calling `api.trakt.tv`. Follow the example. If you wish to develop on Trakt’s sandbox environment by calling `api-staging.trakt.tv`, change the URLs.

Start by creating an OAuth app on Trakt for production or development. Then set the Client ID and Client Secret as TRAKT\_ID and TRAKT\_SECRET in .env.

### Notes[](#notes)

By default, Auth.js assumes that the Trakt provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

🚫

-   Trakt does not allow hotlinking images. Even the authenticated user’s profile picture.
-   Trakt does not supply the authenticated user’s email.

💡

The Trakt provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/trakt.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`TraktUser`](trakt#traktuser)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[todoist](/reference/core/providers/todoist "todoist")[twitch](/reference/core/providers/twitch "twitch")
