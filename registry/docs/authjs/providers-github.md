[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")github

# providers/github

Built-in **GitHub** integration.[![](https://authjs.dev/img/providers/github.svg)](https://github.com)

## GitHubEmail[](#githubemail)

### Properties[](#properties)

#### email[](#email)

```
email: string;
```

#### primary[](#primary)

```
primary: boolean;
```

#### verified[](#verified)

```
verified: boolean;
```

#### visibility[](#visibility)

```
visibility: "private" | "public";
```

* * *

## GitHubProfile[](#githubprofile)

### See[](#see)

[Get the authenticated user](https://docs.github.com/en/rest/users/users#get-the-authenticated-user)

### Indexable[](#indexable)

\[`claim`: `string`\]: `unknown`

### Properties[](#properties-1)

#### avatar\_url[](#avatar_url)

```
avatar_url: string;
```

#### bio[](#bio)

```
bio: null | string;
```

#### blog[](#blog)

```
blog: null | string;
```

#### collaborators?[](#collaborators)

```
optional collaborators: number;
```

#### company[](#company)

```
company: null | string;
```

#### created\_at[](#created_at)

```
created_at: string;
```

#### disk\_usage?[](#disk_usage)

```
optional disk_usage: number;
```

#### email[](#email-1)

```
email: null | string;
```

#### events\_url[](#events_url)

```
events_url: string;
```

#### followers[](#followers)

```
followers: number;
```

#### followers\_url[](#followers_url)

```
followers_url: string;
```

#### following[](#following)

```
following: number;
```

#### following\_url[](#following_url)

```
following_url: string;
```

#### gists\_url[](#gists_url)

```
gists_url: string;
```

#### gravatar\_id[](#gravatar_id)

```
gravatar_id: null | string;
```

#### hireable[](#hireable)

```
hireable: null | boolean;
```

#### html\_url[](#html_url)

```
html_url: string;
```

#### id[](#id)

```
id: number;
```

#### location[](#location)

```
location: null | string;
```

#### login[](#login)

```
login: string;
```

#### name[](#name)

```
name: null | string;
```

#### node\_id[](#node_id)

```
node_id: string;
```

#### organizations\_url[](#organizations_url)

```
organizations_url: string;
```

#### owned\_private\_repos?[](#owned_private_repos)

```
optional owned_private_repos: number;
```

#### plan?[](#plan)

```
optional plan: {
  collaborators: number;
  name: string;
  private_repos: number;
  space: number;
};
```

##### collaborators[](#collaborators-1)

```
collaborators: number;
```

##### name[](#name-1)

```
name: string;
```

##### private\_repos[](#private_repos)

```
private_repos: number;
```

##### space[](#space)

```
space: number;
```

#### private\_gists?[](#private_gists)

```
optional private_gists: number;
```

#### public\_gists[](#public_gists)

```
public_gists: number;
```

#### public\_repos[](#public_repos)

```
public_repos: number;
```

#### received\_events\_url[](#received_events_url)

```
received_events_url: string;
```

#### repos\_url[](#repos_url)

```
repos_url: string;
```

#### site\_admin[](#site_admin)

```
site_admin: boolean;
```

#### starred\_url[](#starred_url)

```
starred_url: string;
```

#### subscriptions\_url[](#subscriptions_url)

```
subscriptions_url: string;
```

#### suspended\_at?[](#suspended_at)

```
optional suspended_at: null | string;
```

#### total\_private\_repos?[](#total_private_repos)

```
optional total_private_repos: number;
```

#### twitter\_username?[](#twitter_username)

```
optional twitter_username: null | string;
```

#### two\_factor\_authentication[](#two_factor_authentication)

```
two_factor_authentication: boolean;
```

#### type[](#type)

```
type: string;
```

#### updated\_at[](#updated_at)

```
updated_at: string;
```

#### url[](#url)

```
url: string;
```

* * *

## default()[](#default)

```
function default(config): OAuthConfig<GitHubProfile>
```

Add GitHub login to your page and make requests to [GitHub APIs](https://docs.github.com/en/rest).

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/github
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import GitHub from "@auth/core/providers/github"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [GitHub - Creating an OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app)
-   [GitHub - Authorizing OAuth Apps](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps)
-   [GitHub - Configure your GitHub OAuth Apps](https://github.com/settings/developers)
-   [Learn more about OAuth](https://authjs.dev/concepts/oauth)
-   [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/github.ts)

### Notes[](#notes)

By default, Auth.js assumes that the GitHub provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The GitHub provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/github.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`GitHubProfile`](github#githubprofile)\> & { `enterprise`: { `baseUrl`: `string`; }; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`GitHubProfile`](github#githubprofile)\>

[fusionauth](/reference/core/providers/fusionauth "fusionauth")[gitlab](/reference/core/providers/gitlab "gitlab")
