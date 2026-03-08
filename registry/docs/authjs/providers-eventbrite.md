[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")eventbrite

# providers/eventbrite

Built-in **Eventbrite** integration.[![](https://authjs.dev/img/providers/eventbrite.svg)](https://www.eventbrite.com)

## EventbriteProfile[](#eventbriteprofile)

### See[](#see)

[https://www.eventbrite.com/platform/api#/reference/user/retrieve-your-user/retrieve-your-user](https://www.eventbrite.com/platform/api#/reference/user/retrieve-your-user/retrieve-your-user)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### emails[](#emails)

```
emails: {
  email: string;
  primary: boolean;
  verified: boolean;
 }[];
```

##### email[](#email)

```
email: string;
```

##### primary[](#primary)

```
primary: boolean;
```

##### verified[](#verified)

```
verified: boolean;
```

#### first\_name[](#first_name)

```
first_name: string;
```

#### id[](#id)

```
id: string;
```

#### image\_id[](#image_id)

```
image_id: string;
```

#### last\_name[](#last_name)

```
last_name: string;
```

#### name[](#name)

```
name: string;
```

* * *

## default()[](#default)

```
function default<P>(config): OAuthConfig<P>
```

Add Eventbrite login to your page and make requests to [Eventbrite APIs](https://www.eventbrite.com/platform/api).

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/eventbrite
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Eventbrite from "@auth/core/providers/eventbrite"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [Eventbrite({ clientId: EVENTBRITE_CLIENT_ID, clientSecret: EVENTBRITE_CLIENT_SECRET })],
})
```

### Resources[](#resources)

-   [Eventbrite OAuth documentation](https://www.eventbrite.com/platform/api#/introduction/authentication)
-   [Eventbrite App Management](https://www.eventbrite.com/account-settings/apps)
-   [Learn more about OAuth](https://authjs.dev/concepts/oauth)
-   [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/eventbrite.ts)

### Notes[](#notes)

By default, Auth.js assumes that the Eventbrite provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Eventbrite provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/eventbrite.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`EventbriteProfile`](eventbrite#eventbriteprofile)

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[email](/reference/core/providers/email "email")[eveonline](/reference/core/providers/eveonline "eveonline")
