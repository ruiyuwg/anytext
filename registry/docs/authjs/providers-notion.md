[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")notion

# providers/notion

Built-in **Notion** integration.[![](https://authjs.dev/img/providers/notion.svg)](https://notion.so)

## NotionProfile[](#notionprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### access\_token[](#access_token)

```
access_token: string;
```

#### bot\_id[](#bot_id)

```
bot_id: string;
```

#### duplicated\_template\_id[](#duplicated_template_id)

```
duplicated_template_id: string;
```

#### owner?[](#owner)

```
optional owner: Owner;
```

#### workspace\_icon[](#workspace_icon)

```
workspace_icon: string;
```

#### workspace\_id[](#workspace_id)

```
workspace_id: number;
```

#### workspace\_name[](#workspace_name)

```
workspace_name: string;
```

* * *

## Owner[](#owner-1)

### Properties[](#properties-1)

#### type[](#type)

```
type: string;
```

#### user[](#user)

```
user: User;
```

* * *

## Person[](#person)

### Extends[](#extends-1)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable-1)

\[`key`: `string`\]: `any`

### Properties[](#properties-2)

#### email[](#email)

```
email: string;
```

* * *

## User[](#user-1)

### Extends[](#extends-2)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable-2)

\[`key`: `string`\]: `any`

### Properties[](#properties-3)

#### avatar\_url[](#avatar_url)

```
avatar_url: null | string;
```

#### id[](#id)

```
id: string;
```

#### name[](#name)

```
name: string;
```

#### object[](#object)

```
object: "user" | "bot";
```

#### owner?[](#owner-2)

```
optional owner: {
  type: "user" | "workspace";
  workspace: string;
};
```

##### type[](#type-1)

```
type: "user" | "workspace";
```

##### workspace[](#workspace)

```
workspace: string;
```

#### person[](#person-1)

```
person: Person;
```

#### type[](#type-2)

```
type: string;
```

#### workspace\_name?[](#workspace_name-1)

```
optional workspace_name: null | string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Notion login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/notion
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Notion from "@auth/core/providers/notion"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Notion({
      clientId: NOTION_CLIENT_ID,
      clientSecret: NOTION_CLIENT_SECRET,
      redirectUri: NOTION_CLIENT_REDIRECT_URI,
    }),
  ],
})
```

### Resources[](#resources)

-   [Notion Docs](https://developers.notion.com/docs)
-   [Notion Authorization Docs](https://developers.notion.com/docs/authorization)
-   [Notion Integrations](https://www.notion.so/my-integrations)

### Notes[](#notes)

You need to select “Public Integration” on the configuration page to get an `oauth_id` and `oauth_secret`. Private integrations do not provide these details. You must provide a `clientId` and `clientSecret` to use this provider, as-well as a redirect URI (due to this being required by Notion endpoint to fetch tokens).

💡

The Notion provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/notion.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`NotionProfile`](notion#notionprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & `AdditionalConfig`

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[nodemailer](/reference/core/providers/nodemailer "nodemailer")[okta](/reference/core/providers/okta "okta")
