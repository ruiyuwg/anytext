[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")tiktok

# providers/tiktok

Built-in **TikTok** integration.[![](https://authjs.dev/img/providers/tiktok.svg)](https://www.tiktok.com/)

## TiktokProfile[](#tiktokprofile)

[More info](https://developers.tiktok.com/doc/tiktok-api-v2-get-user-info/)

### Properties[](#properties)

#### data[](#data)

```
data: {
  user: {
     avatar_large_url: string;
     avatar_url: string;
     avatar_url_100: string;
     bio_description: string;
     display_name: string;
     email: string;
     follower_count: number;
     following_count: number;
     is_verified: boolean;
     likes_count: number;
     open_id: string;
     profile_deep_link: string;
     union_id: string;
     username: string;
     video_count: number;
    };
};
```

##### user[](#user)

```
user: {
  avatar_large_url: string;
  avatar_url: string;
  avatar_url_100: string;
  bio_description: string;
  display_name: string;
  email: string;
  follower_count: number;
  following_count: number;
  is_verified: boolean;
  likes_count: number;
  open_id: string;
  profile_deep_link: string;
  union_id: string;
  username: string;
  video_count: number;
};
```

###### user.avatar\_large\_url?[](#useravatar_large_url)

```
optional user.avatar_large_url: string;
```

User’s profile image with higher resolution

To return this field, add `fields=avatar_url_100` in the user profile request’s query parameter.

###### user.avatar\_url[](#useravatar_url)

```
user.avatar_url: string;
```

User’s profile image.

To return this field, add `fields=avatar_url` in the user profile request’s query parameter.

###### user.avatar\_url\_100?[](#useravatar_url_100)

```
optional user.avatar_url_100: string;
```

User\`s profile image in 100x100 size.

To return this field, add `fields=avatar_url_100` in the user profile request’s query parameter.

###### user.bio\_description?[](#userbio_description)

```
optional user.bio_description: string;
```

User’s bio description if there is a valid one.

To return this field, add `fields=bio_description` in the user profile request’s query parameter.

###### user.display\_name[](#userdisplay_name)

```
user.display_name: string;
```

User’s profile name

To return this field, add `fields=display_name` in the user profile request’s query parameter.

###### user.email?[](#useremail)

```
optional user.email: string;
```

###### Note[](#note)

Email is currently unsupported by TikTok

###### user.follower\_count?[](#userfollower_count)

```
optional user.follower_count: number;
```

User’s followers count.

To return this field, add `fields=follower_count` in the user profile request’s query parameter.

###### user.following\_count?[](#userfollowing_count)

```
optional user.following_count: number;
```

The number of accounts that the user is following.

To return this field, add `fields=following_count` in the user profile request’s query parameter.

###### user.is\_verified?[](#useris_verified)

```
optional user.is_verified: boolean;
```

Whether TikTok has provided a verified badge to the account after confirming that it belongs to the user it represents.

To return this field, add `fields=is_verified` in the user profile request’s query parameter.

###### user.likes\_count?[](#userlikes_count)

```
optional user.likes_count: number;
```

The total number of likes received by the user across all of their videos.

To return this field, add `fields=likes_count` in the user profile request’s query parameter.

###### user.open\_id[](#useropen_id)

```
user.open_id: string;
```

The unique identification of the user in the current application.Open id for the client.

To return this field, add `fields=open_id` in the user profile request’s query parameter.

###### user.profile\_deep\_link?[](#userprofile_deep_link)

```
optional user.profile_deep_link: string;
```

The link to user’s TikTok profile page.

To return this field, add `fields=profile_deep_link` in the user profile request’s query parameter.

###### user.union\_id?[](#userunion_id)

```
optional user.union_id: string;
```

The unique identification of the user across different apps for the same developer. For example, if a partner has X number of clients, it will get X number of open\_id for the same TikTok user, but one persistent union\_id for the particular user.

To return this field, add `fields=union_id` in the user profile request’s query parameter.

###### user.username[](#userusername)

```
user.username: string;
```

User’s username.

To return this field, add `fields=username` in the user profile request’s query parameter.

###### user.video\_count?[](#uservideo_count)

```
optional user.video_count: number;
```

The total number of publicly posted videos by the user.

To return this field, add `fields=video_count` in the user profile request’s query parameter.

#### error[](#error)

```
error: {
  code: string;
  log_id: string;
  message: string;
};
```

##### code[](#code)

```
code: string;
```

The error category in string.

##### log\_id[](#log_id)

```
log_id: string;
```

The error message in string.

##### message[](#message)

```
message: string;
```

The error message in string.

* * *

## default()[](#default)

```
function default(options): OAuthConfig<TiktokProfile>
```

Add TikTok login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/tiktok
```

#### Configuration[](#configuration)

You can omit the client and secret if you have set the `AUTH_TIKTOK_ID` and `AUTH_TIKTOK_SECRET` environment variables. Remeber that the AUTH\_TIKTOK\_ID is the Client Key in the TikTok Application

```
import { Auth } from "@auth/core"
import TikTok from "@auth/core/providers/tiktok"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    TikTok({ clientId: AUTH_TIKTOK_ID, clientSecret: AUTH_TIKTOK_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [TikTok app console](https://developers.tiktok.com/)
-   [TikTok login kit documentation](https://developers.tiktok.com/doc/login-kit-web/)
-   [Available Scopes](https://developers.tiktok.com/doc/tiktok-api-scopes/)
-   [Sandbox for testing](https://developers.tiktok.com/blog/introducing-sandbox)

### Notes[](#notes)

💡

Production applications cannot use localhost URLs to sign in with TikTok. You need add the domain and Callback/Redirect url’s to your TikTok app and have them review and approved by the TikTok Team. If you need to test your implementation, you can use the sandbox feature and ngrok for testing in localhost.

💡

Email address is not supported by TikTok.

💡

AUTH\_TIKTOK\_ID will be the Client Key in the TikTok Application

By default, Auth.js assumes that the TikTok provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The TikTok provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/tiktok.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

If You Need to Customize the TikTok Provider, You Can Use the Following Configuration as a custom provider

```
{
  async [customFetch](...args) {
    const url = new URL(args[0] instanceof Request ? args[0].url : args[0]);
    if (url.pathname.endsWith("/token/")) {
      const [url, request] = args;
      const customHeaders = {
        ...request?.headers,
        "content-type": "application/x-www-form-urlencoded",
      };
 
      const customBody = new URLSearchParams(request?.body as string);
      customBody.append("client_key", process.env.AUTH_TIKTOK_ID!);
 
      const response = await fetch(url, {
        ...request,
        headers: customHeaders,
        body: customBody.toString(),
      });
      const json = await response.json();
      return Response.json({ ...json });
    }
    return fetch(...args);
  },
 
  id: "tiktok",
  name: "TikTok",
  type: "oauth",
  client: {
    token_endpoint_auth_method: "client_secret_post",
  },
 
  authorization: {
    url: "https://www.tiktok.com/v2/auth/authorize",
    params: {
      client_key: options.clientId,
      scope: "user.info.profile", //Add scopes you need eg(user.info.profile,user.info.stats,video.list)
    },
  },
 
  token: "https://open.tiktokapis.com/v2/oauth/token/",
 
  userinfo: "https://open.tiktokapis.com/v2/user/info/?fields=open_id,avatar_url,display_name,username", //Add fields you need eg(open_id,avatar_url,display_name,username)
 
  profile(profile) {
    return {
      id: profile.data.user.open_id,
      name: profile.data.user.display_name,
      image: profile.data.user.avatar_url,
      email: profile.data.user.email || profile.data.user.username || null,
    };
  },
}
 
```

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`TiktokProfile`](tiktok#tiktokprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`TiktokProfile`](tiktok#tiktokprofile)\>

[threads](/reference/core/providers/threads "threads")[todoist](/reference/core/providers/todoist "todoist")
