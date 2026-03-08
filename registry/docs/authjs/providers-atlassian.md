[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")atlassian

# providers/atlassian

Built-in sign in with **Atlassian** integration.

[![](https://authjs.dev/img/providers/atlassian.svg)](https://www.atlassian.com/)

## AtlassianProfile[](#atlassianprofile)

The returned user profile from Atlassian when using the profile callback.

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### account\_id[](#account_id)

```
account_id: string;
```

The user’s atlassian account ID

#### email[](#email)

```
email: string;
```

The user’s email

#### name[](#name)

```
name: string;
```

The user name

#### picture[](#picture)

```
picture: string;
```

The user’s profile picture

* * *

## default()[](#default)

```
function default(options): OAuthConfig<AtlassianProfile>
```

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/atlassian
```

#### Configuration[](#configuration)

Import the provider and configure it in your **Auth.js** initialization file:

```
import Atlassian from "@auth/core/providers/atlassian"
...
providers: [
 Atlassian({
   clientId: env.AUTH_ATLASSIAN_ID,
   clientSecret: env.AUTH_ATLASSIAN_SECRET,
 }),
]
...
```

### Configuring Atlassian[](#configuring-atlassian)

Follow these steps:

1.  From any page on [developer.atlassian.com](https://developer.atlassian.com), select your profile icon in the top-right corner, and from the dropdown, select **Developer console**.
2.  Select your app from the list (or create one if you don’t already have one)
3.  Select **Authorization** in the left menu
4.  Next to OAuth 2.0 (3LO), select **Configure** (or **Add** for newly created app)
5.  Enter the **Callback URL**: `https://{YOUR_DOMAIN}/api/auth/callback/atlassian`
6.  Click Save changes
7.  Select **Settings** in the left menu
8.  Access and copy your app’s **Client ID** and **Secret**

Then, create a `.env` file in the project root add the following entries:

```
AUTH_ATLASSIAN_ID=<Client ID copied in step 8>
AUTH_ATLASSIAN_SECRET=<Secret copied in step 8>
```

### Resources[](#resources)

-   [Atlassian docs](https://developer.atlassian.com/cloud/jira/software/oauth-2-3lo-apps/)

### Notes[](#notes)

The Atlassian provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/atlassian.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/providers/custom-provider#override-default-options).

## Help[](#help)

If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`AtlassianProfile`](atlassian#atlassianprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`AtlassianProfile`](atlassian#atlassianprofile)\>

[asgardeo](/reference/core/providers/asgardeo "asgardeo")[auth0](/reference/core/providers/auth0 "auth0")
