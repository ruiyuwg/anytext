[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")slack

# providers/slack

Built-in **Slack** integration.[![](https://authjs.dev/img/providers/slack.svg)](https://www.slack.com/)

## SlackProfile[](#slackprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### date\_email\_verified[](#date_email_verified)

```
date_email_verified: number;
```

#### email[](#email)

```
email: string;
```

#### email\_verified[](#email_verified)

```
email_verified: boolean;
```

#### family\_name[](#family_name)

```
family_name: string;
```

#### given\_name[](#given_name)

```
given_name: string;
```

#### [https://slack.com/team\\\_domain](https://slack.com/team%5C_domain)[](#httpsslackcomteam_domain)

```
https://slack.com/team_domain: string;
```

#### [https://slack.com/team\\\_id](https://slack.com/team%5C_id)[](#httpsslackcomteam_id)

```
https://slack.com/team_id: string;
```

#### [https://slack.com/team\\\_image\\\_102](https://slack.com/team%5C_image%5C_102)[](#httpsslackcomteam_image_102)

```
https://slack.com/team_image_102: string;
```

#### [https://slack.com/team\\\_image\\\_132](https://slack.com/team%5C_image%5C_132)[](#httpsslackcomteam_image_132)

```
https://slack.com/team_image_132: string;
```

#### [https://slack.com/team\\\_image\\\_230](https://slack.com/team%5C_image%5C_230)[](#httpsslackcomteam_image_230)

```
https://slack.com/team_image_230: string;
```

#### [https://slack.com/team\\\_image\\\_34](https://slack.com/team%5C_image%5C_34)[](#httpsslackcomteam_image_34)

```
https://slack.com/team_image_34: string;
```

#### [https://slack.com/team\\\_image\\\_44](https://slack.com/team%5C_image%5C_44)[](#httpsslackcomteam_image_44)

```
https://slack.com/team_image_44: string;
```

#### [https://slack.com/team\\\_image\\\_68](https://slack.com/team%5C_image%5C_68)[](#httpsslackcomteam_image_68)

```
https://slack.com/team_image_68: string;
```

#### [https://slack.com/team\\\_image\\\_88](https://slack.com/team%5C_image%5C_88)[](#httpsslackcomteam_image_88)

```
https://slack.com/team_image_88: string;
```

#### [https://slack.com/team\\\_image\\\_default](https://slack.com/team%5C_image%5C_default)[](#httpsslackcomteam_image_default)

```
https://slack.com/team_image_default: boolean;
```

#### [https://slack.com/team\\\_name](https://slack.com/team%5C_name)[](#httpsslackcomteam_name)

```
https://slack.com/team_name: string;
```

#### [https://slack.com/user\\\_id](https://slack.com/user%5C_id)[](#httpsslackcomuser_id)

```
https://slack.com/user_id: string;
```

#### [https://slack.com/user\\\_image\\\_1024](https://slack.com/user%5C_image%5C_1024)[](#httpsslackcomuser_image_1024)

```
https://slack.com/user_image_1024: string;
```

#### [https://slack.com/user\\\_image\\\_192](https://slack.com/user%5C_image%5C_192)[](#httpsslackcomuser_image_192)

```
https://slack.com/user_image_192: string;
```

#### [https://slack.com/user\\\_image\\\_24](https://slack.com/user%5C_image%5C_24)[](#httpsslackcomuser_image_24)

```
https://slack.com/user_image_24: string;
```

#### [https://slack.com/user\\\_image\\\_32](https://slack.com/user%5C_image%5C_32)[](#httpsslackcomuser_image_32)

```
https://slack.com/user_image_32: string;
```

#### [https://slack.com/user\\\_image\\\_48](https://slack.com/user%5C_image%5C_48)[](#httpsslackcomuser_image_48)

```
https://slack.com/user_image_48: string;
```

#### [https://slack.com/user\\\_image\\\_512](https://slack.com/user%5C_image%5C_512)[](#httpsslackcomuser_image_512)

```
https://slack.com/user_image_512: string;
```

#### [https://slack.com/user\\\_image\\\_72](https://slack.com/user%5C_image%5C_72)[](#httpsslackcomuser_image_72)

```
https://slack.com/user_image_72: string;
```

#### locale[](#locale)

```
locale: string;
```

#### name[](#name)

```
name: string;
```

#### ok[](#ok)

```
ok: boolean;
```

#### picture[](#picture)

```
picture: string;
```

#### sub[](#sub)

```
sub: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Slack login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/slack
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Slack from "@auth/core/providers/slack"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Slack({ clientId: SLACK_CLIENT_ID, clientSecret: SLACK_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Slack Authentication documentation](https://api.slack.com/authentication)
-   [Sign-in with Slack](https://api.slack.com/docs/sign-in-with-slack)
-   [Slack app console](https://api.slack.com/apps)

### Notes[](#notes)

By default, Auth.js assumes that the Slack provider is based on the [Open ID Connect](https://openid.net/specs/openid-connect-core-1_0.html) specification.

🚫

Slack requires that the redirect URL of your app uses https, even for local development. An easy workaround for this is using a service like [ngrok](https://ngrok.com/) that creates a secure tunnel to your app, using https. Remember to set the url as `NEXTAUTH_URL` as well.

💡

The Slack provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/slack.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`SlackProfile`](slack#slackprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[simplelogin](/reference/core/providers/simplelogin "simplelogin")[spotify](/reference/core/providers/spotify "spotify")
