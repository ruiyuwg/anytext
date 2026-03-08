[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")nextcloud

# providers/nextcloud

Built-in **Nextcloud** integration.[![](https://authjs.dev/img/providers/nextcloud.svg)](https://nextcloud.com)

## NextcloudProfile[](#nextcloudprofile)

Represents the Nextcloud user profile data returned from the `/ocs/v1.php/cloud/users/`.

### See[](#see)

[Check out the documentation for more details](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/instruction_set_for_users.html#get-data-of-a-single-user)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### address[](#address)

```
address: string;
```

The address of the user.

##### Example[](#example)

```
"Foobar 12, 12345 Town"
```

#### biography[](#biography)

```
biography: string;
```

The biography or detailed description of the user.

#### displayname[](#displayname)

```
displayname: string;
```

The display name of the user.

##### Example[](#example-1)

```
"Frank K."
```

#### email[](#email)

```
email: null | string;
```

The email address associated with the user.

##### Example[](#example-2)

```
"frank@domain.tld"
```

#### enabled[](#enabled)

```
enabled: boolean;
```

Indicates whether the user account is enabled or disabled.

##### Example[](#example-3)

```
true
```

#### fediverse[](#fediverse)

```
fediverse: string;
```

The user’s Fediverse handle.

#### groups[](#groups)

```
groups: string[];
```

An array of group names that the user belongs to.

##### Example[](#example-4)

```
["admin", "group1", "group2"]
```

#### headline[](#headline)

```
headline: string;
```

The headline or brief description of the user.

#### id[](#id)

```
id: string;
```

The user’s username.

##### Example[](#example-5)

```
"frank"
```

#### language[](#language)

```
language: string;
```

The language preference of the user.

##### Example[](#example-6)

```
"en"
```

#### locale[](#locale)

```
locale: string;
```

The locale or language locale of the user.

##### Example[](#example-7)

```
"en_US"
```

#### organisation[](#organisation)

```
organisation: string;
```

The organization associated with the user.

#### phone[](#phone)

```
phone: string;
```

The phone number of the user.

#### role[](#role)

```
role: string;
```

The role or position of the user.

#### storageLocation[](#storagelocation)

```
storageLocation: string;
```

The storage location of the user’s files.

##### Example[](#example-8)

```
"/path/to/nextcloud/data/frank"
```

#### twitter[](#twitter)

```
twitter: string;
```

The user’s Twitter handle.

##### Example[](#example-9)

```
"Nextcloud"
```

#### website[](#website)

```
website: string;
```

The website URL of the user.

##### Example[](#example-10)

```
"https://nextcloud.com"
```

* * *

## default()[](#default)

```
function default(options): OAuthConfig<NextcloudProfile>
```

Add Nextcloud login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/auth/callback/nextcloud
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Nextcloud from "@auth/core/providers/nextcloud"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Nextcloud({ clientId: AUTH_NEXTCLOUD_ID, clientSecret: AUTH_NEXTCLOUD_SECRET, issuer: AUTH_NEXTCLOUD_ISSUER }),
  ],
})
```

### Resources[](#resources)

-   [Nextcloud Documentation](https://docs.nextcloud.com/)
-   [Nextcloud OAuth 2](https://docs.nextcloud.com/server/latest/admin_manual/configuration_server/oauth2.html)
-   [Nextcloud Clients and Client APIs](https://docs.nextcloud.com/server/latest/developer_manual/client_apis/index.html)
-   [Nextcloud User provisioning API](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/user_provisioning_api.html)

### Notes[](#notes)

By default, Auth.js assumes that the Nextcloud provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Nextcloud provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/nextcloud.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`NextcloudProfile`](nextcloud#nextcloudprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`NextcloudProfile`](nextcloud#nextcloudprofile)\>

[netsuite](/reference/core/providers/netsuite "netsuite")[nodemailer](/reference/core/providers/nodemailer "nodemailer")
