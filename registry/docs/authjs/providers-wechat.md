[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")wechat

# providers/wechat

Built-in **WeChat** integration.[![](https://authjs.dev/img/providers/wechat.svg)](https://www.wechat.com/)

## WeChatProfile[](#wechatprofile)

### See[](#see)

[Get the authenticated user](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Authorized_Interface_Calling_UnionID.html)

### Indexable[](#indexable)

\[`claim`: `string`\]: `unknown`

### Properties[](#properties)

#### city[](#city)

```
city: string;
```

#### country[](#country)

```
country: string;
```

#### headimgurl[](#headimgurl)

```
headimgurl: string;
```

#### nickname[](#nickname)

```
nickname: string;
```

#### openid[](#openid)

```
openid: string;
```

#### privilege[](#privilege)

```
privilege: string[];
```

#### province[](#province)

```
province: string;
```

#### sex[](#sex)

```
sex: number;
```

#### unionid[](#unionid)

```
unionid: string;
```

* * *

## default()[](#default)

```
function default(options): OAuthConfig<WeChatProfile>
```

Add WeChat login to your page and make requests to [WeChat APIs](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Authorized_Interface_Calling_UnionID.html).

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/wechat
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import WeChat from "@auth/core/providers/wechat"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [WeChat({
    clientId: AUTH_WECHAT_APP_ID,
    clientSecret: AUTH_WECHAT_APP_SECRET,
    platformType: "OfficialAccount",
  })],
})
```

### Resources[](#resources)

-   [WeChat Official Account](https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Overview.html)
-   [WeChat Official Account - Webpage Authorization](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)
-   [WeChat Official Account Test Account](https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login)
-   [WeChat WebsiteApp Login](https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html)
-   [使用微信测试账号对网页进行授权](https://cloud.tencent.com/developer/article/1703167)

💡

The WeChat provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/wechat.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/providers/custom-provider#override-default-options).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`WeChatProfile`](wechat#wechatprofile)\> & { `platformType`: `"OfficialAccount"` | `"WebsiteApp"`; }

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`WeChatProfile`](wechat#wechatprofile)\>

[webex](/reference/core/providers/webex "webex")[wikimedia](/reference/core/providers/wikimedia "wikimedia")
