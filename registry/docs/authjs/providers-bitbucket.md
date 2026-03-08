[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")bitbucket

# providers/bitbucket

Built-in **Bitbucket** integration.[![](https://authjs.dev/img/providers/bitbucket.svg)](https://bitbucket.org)

## BitbucketProfile[](#bitbucketprofile)

### See[](#see)

[https://developer.atlassian.com/cloud/bitbucket/rest/api-group-users/#api-user-get](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-users/#api-user-get)

### Properties[](#properties)

#### account\_id[](#account_id)

```
account_id: string;
```

#### account\_status[](#account_status)

```
account_status: string;
```

#### created\_on[](#created_on)

```
created_on: string;
```

#### display\_name[](#display_name)

```
display_name: string;
```

#### has\_2fa\_enabled[](#has_2fa_enabled)

```
has_2fa_enabled: null | boolean;
```

#### is\_staff[](#is_staff)

```
is_staff: boolean;
```

#### links[](#links)

```
links: Record<LiteralUnion<"html" | "self" | "avatar" | "repositories" | "snippets" | "hooks", string>, {
  href: string;
}>;
```

#### location[](#location)

```
location: null | string;
```

#### nickname[](#nickname)

```
nickname: string;
```

#### type[](#type)

```
type: string;
```

#### username[](#username)

```
username: string;
```

#### uuid[](#uuid)

```
uuid: string;
```

* * *

## default()[](#default)

```
function default(options): OAuthConfig<BitbucketProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/bitbucket
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Bitbucket from "@auth/core/providers/bitbucket"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Bitbucket({
      clientId: process.env.BITBUCKET_CLIENT_ID,
      clientSecret: process.env.BITBUCKET_CLIENT_SECRET,
    })
  ],
})
```

#### Resources[](#resources)

-   [Using OAuth on Bitbucket Cloud](https://support.atlassian.com/bitbucket-cloud/docs/use-oauth-on-bitbucket-cloud/)
-   [Bitbucket REST API Authentication](https://developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication)
-   [Bitbucket REST API Users](https://developer.atlassian.com/cloud/bitbucket/rest/api-group-users/#api-group-users)

#### Notes[](#notes)

By default, Auth.js assumes that the Bitbucket provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Bitbucket provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/bitbucket.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`BitbucketProfile`](bitbucket#bitbucketprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`BitbucketProfile`](bitbucket#bitbucketprofile)\>

[beyondidentity](/reference/core/providers/beyondidentity "beyondidentity")[box](/reference/core/providers/box "box")
