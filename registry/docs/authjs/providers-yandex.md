[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")yandex

# providers/yandex

Built-in **Yandex** integration.[![](https://authjs.dev/img/providers/yandex.svg)](https://yandex.com)

## YandexProfile[](#yandexprofile)

-   [Getting information about the user](https://yandex.com/dev/id/doc/en/user-information)
-   [Access to email address](https://yandex.com/dev/id/doc/en/user-information#email-access)
-   [Access to the user’s profile picture](https://yandex.com/dev/id/doc/en/user-information#avatar-access)
-   [Access to the date of birth](https://yandex.com/dev/id/doc/en/user-information#birthday-access)
-   [Access to login, first name, last name, and gender](https://yandex.com/dev/id/doc/en/user-information#name-access)
-   [Access to the phone number](https://yandex.com/dev/id/doc/en/user-information#phone-access)

### Properties[](#properties)

#### birthday?[](#birthday)

```
optional birthday: null | string;
```

The user’s date of birth in YYYY-MM-DD format. Unknown elements of the date are filled in with zeros, such as: `0000-12-23`. If the user’s date of birth is unknow, birthday will be `null`

#### client\_id[](#client_id)

```
client_id: string;
```

The ID of the app the OAuth token in the request was issued for. Available in the [app properties](https://oauth.yandex.com/). To open properties, click the app name.

#### default\_avatar\_id?[](#default_avatar_id)

```
optional default_avatar_id: string;
```

ID of the Yandex user’s profile picture. Format for downloading user avatars: `https://avatars.yandex.net/get-yapic/<default_avatar_id>/<size>`

##### Example[](#example)

```
"https://avatars.yandex.net/get-yapic/31804/BYkogAC6AoB17bN1HKRFAyKiM4-1/islands-200"
Available sizes:
`islands-small`: 28×28 pixels.
`islands-34`: 34×34 pixels.
`islands-middle`: 42×42 pixels.
`islands-50`: 50×50 pixels.
`islands-retina-small`: 56×56 pixels.
`islands-68`: 68×68 pixels.
`islands-75`: 75×75 pixels.
`islands-retina-middle`: 84×84 pixels.
`islands-retina-50`: 100×100 pixels.
`islands-200`: 200×200 pixels.
```

#### default\_email?[](#default_email)

```
optional default_email: string;
```

The default email address for contacting the user.

#### default\_phone?[](#default_phone)

```
optional default_phone: {
  id: number;
  number: string;
};
```

The default phone number for contacting the user. The API can exclude the user’s phone number from the response at its discretion. The field contains the following parameters: id: Phone number ID. number: The user’s phone number.

##### id[](#id)

```
id: number;
```

##### number[](#number)

```
number: string;
```

#### display\_name?[](#display_name)

```
optional display_name: string;
```

#### emails?[](#emails)

```
optional emails: string[];
```

An array of the user’s email addresses. Currently only includes the default email address.

#### first\_name?[](#first_name)

```
optional first_name: string;
```

#### id[](#id-1)

```
id: string;
```

Yandex user’s unique ID.

#### is\_avatar\_empty?[](#is_avatar_empty)

```
optional is_avatar_empty: boolean;
```

Indicates that the stub (profile picture that is automatically assigned when registering in Yandex) ID is specified in the `default_avatar_id` field.

#### last\_name?[](#last_name)

```
optional last_name: string;
```

#### login[](#login)

```
login: string;
```

User’s Yandex login.

#### psuid[](#psuid)

```
psuid: string;
```

Authorized Yandex user ID. It is formed on the Yandex side based on the `client_id` and `user_id` pair.

#### real\_name?[](#real_name)

```
optional real_name: string;
```

The first and last name that the user specified in Yandex ID. Non-Latin characters of the first and last names are presented in Unicode format.

#### sex?[](#sex)

```
optional sex: null | "female" | "male";
```

User’s gender. `null` Stands for unknown or unspecified gender. Will be `undefined` if not provided by Yandex.

* * *

## default()[](#default)

```
function default(options): OAuthConfig<YandexProfile>
```

Add Yandex login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/yandex
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Yandex from "@auth/core/providers/yandex"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Yandex({ clientId: YANDEX_CLIENT_ID, clientSecret: YANDEX_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Yandex - Creating an OAuth app](https://yandex.com/dev/id/doc/en/register-client#create)
-   [Yandex - Manage OAuth apps](https://oauth.yandex.com/)
-   [Yandex - OAuth documentation](https://yandex.com/dev/id/doc/en/)
-   [Learn more about OAuth](https://authjs.dev/concepts/oauth)
-   [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/yandex.ts)

💡

The Yandex provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/yandex.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`YandexProfile`](yandex#yandexprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`YandexProfile`](yandex#yandexprofile)\>

[workos](/reference/core/providers/workos "workos")[zitadel](/reference/core/providers/zitadel "zitadel")
