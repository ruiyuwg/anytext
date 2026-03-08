[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")click-up

# providers/click-up

Built-in **ClickUp** integration.[![](https://authjs.dev/img/providers/click-up.svg)](https://clickup.com)

## ClickUpProfile[](#clickupprofile)

### See[](#see)

[Get the authenticated user](https://clickup.com/api/clickupreference/operation/GetAuthorizedUser/)

### Properties[](#properties)

#### user[](#user)

```
user: {
  color: string;
  id: number;
  profilePicture: string;
  username: string;
};
```

##### color[](#color)

```
color: string;
```

##### id[](#id)

```
id: number;
```

##### profilePicture[](#profilepicture)

```
profilePicture: string;
```

##### username[](#username)

```
username: string;
```

* * *

## default()[](#default)

```
function default(config): OAuthConfig<ClickUpProfile>
```

Add ClickUp login to your page and make requests to [ClickUp APIs](https://clickup.com/api/).

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/clickup
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import ClickUp from "@auth/core/providers/click-up"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    ClickUp({
      clientId: CLICKUP_CLIENT_ID,
      clientSecret: CLICKUP_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [ClickUp - Authorizing OAuth Apps](https://clickup.com/api/developer-portal/authentication#oauth-flow)
-   [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/click-up.ts)

### Notes[](#notes)

By default, Auth.js assumes that the ClickUp provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The ClickUp provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/click-up.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`ClickUpProfile`](click-up#clickupprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`ClickUpProfile`](click-up#clickupprofile)\>

[bungie](/reference/core/providers/bungie "bungie")[cognito](/reference/core/providers/cognito "cognito")
