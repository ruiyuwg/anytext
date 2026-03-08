[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")mattermost

# providers/mattermost

Built-in **Mattermost** integration.[![](https://authjs.dev/img/providers/mattermost.svg)](https://mattermost.com)

## MattermostProfile[](#mattermostprofile)

[Get a user](https://api.mattermost.com/#tag/users/operation/GetUser)

### Properties[](#properties)

#### auth\_data[](#auth_data)

```
auth_data: string;
```

#### auth\_service[](#auth_service)

```
auth_service: string;
```

#### create\_at[](#create_at)

```
create_at: number;
```

The time in milliseconds a user was created

#### delete\_at[](#delete_at)

```
delete_at: number;
```

The time in milliseconds a user was deleted

#### disable\_welcome\_email[](#disable_welcome_email)

```
disable_welcome_email: boolean;
```

#### email[](#email)

```
email: string;
```

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

#### first\_name[](#first_name)

```
first_name: string;
```

#### id[](#id)

```
id: string;
```

#### last\_name[](#last_name)

```
last_name: string;
```

#### last\_password\_update[](#last_password_update)

```
last_password_update: number;
```

#### locale[](#locale)

```
locale: string;
```

#### nickname[](#nickname)

```
nickname: string;
```

#### notify\_props[](#notify_props)

```
notify_props: {
  channel: string;
  comments: string;
  desktop: string;
  desktop_sound: string;
  desktop_threads: string;
  email: string;
  email_threads: string;
  first_name: string;
  mention_keys: string;
  push: string;
  push_status: string;
  push_threads: string;
};
```

##### channel[](#channel)

```
channel: string;
```

Set to “true” to enable channel-wide notifications (@channel, @all, etc.), “false” to disable. Defaults to “true”.

##### comments[](#comments)

```
comments: string;
```

##### desktop[](#desktop)

```
desktop: string;
```

Set to “all” to receive desktop notifications for all activity, “mention” for mentions and direct messages only, and “none” to disable. Defaults to “all”.

##### desktop\_sound[](#desktop_sound)

```
desktop_sound: string;
```

Set to “true” to enable sound on desktop notifications, “false” to disable. Defaults to “true”.

##### desktop\_threads[](#desktop_threads)

```
desktop_threads: string;
```

##### email[](#email-1)

```
email: string;
```

Set to “true” to enable email notifications, “false” to disable. Defaults to “true”.

##### email\_threads[](#email_threads)

```
email_threads: string;
```

##### first\_name[](#first_name-1)

```
first_name: string;
```

Set to “true” to enable mentions for first name. Defaults to “true” if a first name is set, “false” otherwise.

##### mention\_keys[](#mention_keys)

```
mention_keys: string;
```

A comma-separated list of words to count as mentions. Defaults to username and @username.

##### push[](#push)

```
push: string;
```

Set to “all” to receive push notifications for all activity, “mention” for mentions and direct messages only, and “none” to disable. Defaults to “mention”.

##### push\_status[](#push_status)

```
push_status: string;
```

##### push\_threads[](#push_threads)

```
push_threads: string;
```

#### position[](#position)

```
position: string;
```

#### roles[](#roles)

```
roles: string;
```

#### terms\_of\_service\_create\_at?[](#terms_of_service_create_at)

```
optional terms_of_service_create_at: number;
```

The time in milliseconds the user accepted the terms of service

#### terms\_of\_service\_id?[](#terms_of_service_id)

```
optional terms_of_service_id: string;
```

ID of accepted terms of service, if any. This field is not present if empty.

#### timezone[](#timezone)

```
timezone: {
  automaticTimezone: string;
  manualTimezone: string;
  useAutomaticTimezone: string;
};
```

##### automaticTimezone[](#automatictimezone)

```
automaticTimezone: string;
```

This value is set automatically when the “useAutomaticTimezone” is set to “true”.

##### manualTimezone[](#manualtimezone)

```
manualTimezone: string;
```

Value when setting manually the timezone, i.e. “Europe/Berlin”.

##### useAutomaticTimezone[](#useautomatictimezone)

```
useAutomaticTimezone: string;
```

Set to “true” to use the browser/system timezone, “false” to set manually. Defaults to “true”.

#### update\_at[](#update_at)

```
update_at: number;
```

The time in milliseconds a user was last updated

#### username[](#username)

```
username: string;
```

* * *

## default()[](#default)

```
function default<P>(config): OAuthConfig<P>
```

Add Mattermost login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/mattermost
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Mattermost from "@auth/core/providers/mattermost"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Mattermost({
      clientId: MATTERMOST_CLIENT_ID,
      clientSecret: MATTERMOST_CLIENT_SECRET,
      issuer: MATTERMOST_ISSUER, // The base url of your Mattermost instance. e.g `https://my-cool-server.cloud.mattermost.com`
    }),
  ],
})
```

### Resources[](#resources)

-   [Mattermost OAuth documentation](https://example.com)

### Notes[](#notes)

By default, Auth.js assumes that the Mattermost provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

To create your Mattermost OAuth2 app visit `http://<your Mattermost instance url>/<your team>/integrations/oauth2-apps`

⚠️

The Mattermost provider requires the `issuer` option to be set. This is the base url of your Mattermost instance. e.g [https://my-cool-server.cloud.mattermost.com](https://my-cool-server.cloud.mattermost.com)

💡

The Mattermost provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/mattermost.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`MattermostProfile`](mattermost#mattermostprofile)

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\> & { `issuer`: `string`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[mastodon](/reference/core/providers/mastodon "mastodon")[medium](/reference/core/providers/medium "medium")
