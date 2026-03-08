[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")gitlab

# providers/gitlab

Built-in **GitLab** integration.[![](https://authjs.dev/img/providers/gitlab.svg)](https://gitlab.com)

## GitLabProfile[](#gitlabprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### avatar\_url[](#avatar_url)

```
avatar_url: string;
```

#### bio[](#bio)

```
bio: string;
```

#### bot[](#bot)

```
bot: boolean;
```

#### can\_create\_group[](#can_create_group)

```
can_create_group: boolean;
```

#### can\_create\_project[](#can_create_project)

```
can_create_project: boolean;
```

#### color\_scheme\_id[](#color_scheme_id)

```
color_scheme_id: number;
```

#### commit\_email[](#commit_email)

```
commit_email: string;
```

#### confirmed\_at[](#confirmed_at)

```
confirmed_at: string;
```

#### created\_at[](#created_at)

```
created_at: string;
```

#### current\_sign\_in\_at[](#current_sign_in_at)

```
current_sign_in_at: string;
```

#### email[](#email)

```
email: string;
```

#### external[](#external)

```
external: boolean;
```

#### extra\_shared\_runners\_minutes\_limit[](#extra_shared_runners_minutes_limit)

```
extra_shared_runners_minutes_limit: number;
```

#### followers[](#followers)

```
followers: number;
```

#### following[](#following)

```
following: number;
```

#### id[](#id)

```
id: number;
```

#### identities[](#identities)

```
identities: {
  extern_uid: string;
  provider: string;
 }[];
```

##### extern\_uid[](#extern_uid)

```
extern_uid: string;
```

##### provider[](#provider)

```
provider: string;
```

#### job\_title[](#job_title)

```
job_title: string;
```

#### last\_activity\_on[](#last_activity_on)

```
last_activity_on: string;
```

#### last\_sign\_in\_at[](#last_sign_in_at)

```
last_sign_in_at: string;
```

#### linkedin[](#linkedin)

```
linkedin: string;
```

#### local\_time[](#local_time)

```
local_time: string;
```

#### location?[](#location)

```
optional location: string;
```

#### name[](#name)

```
name: string;
```

#### organization[](#organization)

```
organization: string;
```

#### private\_profile[](#private_profile)

```
private_profile: boolean;
```

#### projects\_limit[](#projects_limit)

```
projects_limit: number;
```

#### pronouns[](#pronouns)

```
pronouns: string;
```

#### public\_email[](#public_email)

```
public_email: string;
```

#### shared\_runners\_minutes\_limit[](#shared_runners_minutes_limit)

```
shared_runners_minutes_limit: number;
```

#### skype[](#skype)

```
skype: string;
```

#### state[](#state)

```
state: string;
```

#### theme\_id[](#theme_id)

```
theme_id: number;
```

#### twitter[](#twitter)

```
twitter: string;
```

#### two\_factor\_enabled[](#two_factor_enabled)

```
two_factor_enabled: boolean;
```

#### username[](#username)

```
username: string;
```

#### web\_url[](#web_url)

```
web_url: string;
```

#### website\_url[](#website_url)

```
website_url: string;
```

#### work\_information?[](#work_information)

```
optional work_information: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add GitLab login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/gitlab
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import GitLab from "@auth/core/providers/gitlab"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    GitLab({ clientId: GITLAB_CLIENT_ID, clientSecret: GITLAB_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [GitLab OAuth documentation](https://docs.gitlab.com/ee/api/oauth2.html)

### Notes[](#notes)

By default, Auth.js assumes that the GitLab provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

Enable the `read_user` option in scope if you want to save the users email address on sign up.

💡

The GitLab provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/gitlab.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`GitLabProfile`](gitlab#gitlabprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `baseUrl`: `string` | [`URL`](https://developer.mozilla.org/docs/Web/API/URL); }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[github](/reference/core/providers/github "github")[google](/reference/core/providers/google "google")
