[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")threads

# providers/threads

Built-in **Threads** integration.[![](https://authjs.dev/img/providers/threads.svg)](https://www.threads.net/)

## ThreadsProfile[](#threadsprofile)

[User](https://developers.facebook.com/docs/threads/reference/user)

### Properties[](#properties)

#### data[](#data)

```
data: {
  id: string;
  threads_biography: string;
  threads_profile_picture_url: string;
  username: string;
};
```

##### id[](#id)

```
id: string;
```

Unique identifier of this user. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### threads\_biography?[](#threads_biography)

```
optional threads_biography: string;
```

The text of this user’s profile biography (also known as bio), if the user provided one.

To return this field, add `fields=threads_biography` in the authorization request’s query parameter.

##### threads\_profile\_picture\_url?[](#threads_profile_picture_url)

```
optional threads_profile_picture_url: string;
```

The URL to the profile image for this user, as shown on the user’s profile.

To return this field, add `fields=threads_profile_picture_url` in the authorization request’s query parameter.

##### username?[](#username)

```
optional username: string;
```

The Threads handle (username) of this user.

To return this field, add `fields=username` in the authorization request’s query parameter.

* * *

## default()[](#default)

```
function default(config): OAuthConfig<ThreadsProfile>
```

Add Threads login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/threads
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Threads from "@auth/core/providers/threads"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Threads({
      clientId: THREADS_CLIENT_ID,
      clientSecret: THREADS_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Threads OAuth documentation](https://developers.facebook.com/docs/threads)
-   [Threads OAuth apps](https://developers.facebook.com/apps/)

### Notes[](#notes)

⚠️

Email address is not returned by the Threads API.

💡

Threads required callback URL to be configured in your Facebook app and Facebook required you to use **https** even for localhost! In order to do that, you either need to [add an SSL to your localhost](https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/) or use a proxy such as [ngrok](https://ngrok.com/docs).

By default, Auth.js assumes that the Threads provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Threads provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/threads.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`ThreadsProfile`](threads#threadsprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`ThreadsProfile`](threads#threadsprofile)\>

[strava](/reference/core/providers/strava "strava")[tiktok](/reference/core/providers/tiktok "tiktok")
