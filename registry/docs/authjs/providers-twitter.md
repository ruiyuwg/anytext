[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")twitter

# providers/twitter

Built-in **Twitter** integration.[![](https://authjs.dev/img/providers/twitter.svg)](https://www.x.com/)

## TwitterProfile[](#twitterprofile)

[Users lookup](https://developer.x.com/en/docs/twitter-api/users/lookup/api-reference/get-users-me)

### Indexable[](#indexable)

\[`claims`: `string`\]: `unknown`

### Properties[](#properties)

#### data[](#data)

```
data: {
  created_at: string;
  description: string;
  email: string;
  entities: {
     description: {
        hashtags: {
           end: number;
           start: number;
           tag: string;
          }[];
       };
     url: {
        urls: {
           display_url: string;
           end: number;
           expanded_url: string;
           start: number;
           url: string;
          }[];
       };
    };
  id: string;
  location: string;
  name: string;
  pinned_tweet_id: string;
  profile_image_url: string;
  protected: boolean;
  url: string;
  username: string;
  verified: boolean;
};
```

##### created\_at?[](#created_at)

```
optional created_at: string;
```

##### description?[](#description)

```
optional description: string;
```

The text of this user’s profile description (also known as bio), if the user provided one.

To return this field, add `user.fields=description` in the authorization request’s query parameter.

##### email?[](#email)

```
optional email: string;
```

###### Note[](#note)

Email is currently unsupported by Twitter.

##### entities?[](#entities)

```
optional entities: {
  description: {
     hashtags: {
        end: number;
        start: number;
        tag: string;
       }[];
    };
  url: {
     urls: {
        display_url: string;
        end: number;
        expanded_url: string;
        start: number;
        url: string;
       }[];
    };
};
```

This object and its children fields contain details about text that has a special meaning in the user’s description.

To return this field, add `user.fields=entities` in the authorization request’s query parameter.

###### entities.description[](#entitiesdescription)

```
entities.description: {
  hashtags: {
     end: number;
     start: number;
     tag: string;
    }[];
};
```

Contains details about URLs, Hashtags, Cashtags, or mentions located within a user’s description.

###### entities.description.hashtags[](#entitiesdescriptionhashtags)

```
entities.description.hashtags: {
  end: number;
  start: number;
  tag: string;
 }[];
```

###### entities.url[](#entitiesurl)

```
entities.url: {
  urls: {
     display_url: string;
     end: number;
     expanded_url: string;
     start: number;
     url: string;
    }[];
};
```

Contains details about the user’s profile website.

###### entities.url.urls[](#entitiesurlurls)

```
entities.url.urls: {
  display_url: string;
  end: number;
  expanded_url: string;
  start: number;
  url: string;
 }[];
```

Contains details about the user’s profile website.

##### id[](#id)

```
id: string;
```

Unique identifier of this user. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### location?[](#location)

```
optional location: string;
```

The location specified in the user’s profile, if the user provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.

To return this field, add `user.fields=location` in the authorization request’s query parameter.

##### name[](#name)

```
name: string;
```

The friendly name of this user, as shown on their profile.

##### pinned\_tweet\_id?[](#pinned_tweet_id)

```
optional pinned_tweet_id: string;
```

Unique identifier of this user’s pinned Tweet.

You can obtain the expanded object in `includes.tweets` by adding `expansions=pinned_tweet_id` in the authorization request’s query parameter.

##### profile\_image\_url?[](#profile_image_url)

```
optional profile_image_url: string;
```

The URL to the profile image for this user, as shown on the user’s profile.

##### protected?[](#protected)

```
optional protected: boolean;
```

##### url?[](#url)

```
optional url: string;
```

The URL specified in the user’s profile, if present.

To return this field, add `user.fields=url` in the authorization request’s query parameter.

##### username[](#username)

```
username: string;
```

The Twitter handle (screen name) of this user.

##### verified?[](#verified)

```
optional verified: boolean;
```

Indicate if this user is a verified Twitter user.

To return this field, add `user.fields=verified` in the authorization request’s query parameter.

#### includes?[](#includes)

```
optional includes: {
  tweets: {
     id: string;
     text: string;
    }[];
};
```

##### tweets?[](#tweets)

```
optional tweets: {
  id: string;
  text: string;
 }[];
```

* * *

## default()[](#default)

```
function default(config): OAuthConfig<TwitterProfile>
```

Add Twitter login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/twitter
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Twitter from "@auth/core/providers/twitter"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Twitter({
      clientId: TWITTER_CLIENT_ID,
      clientSecret: TWITTER_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Twitter App documentation](https://developer.x.com/en/apps)

## OAuth 2[](#oauth-2)

Twitter supports OAuth 2, which is currently opt-in. To enable it, simply add version: “2.0” to your Provider configuration:

```
Twitter({
  clientId: process.env.TWITTER_ID,
  clientSecret: process.env.TWITTER_SECRET,
  version: "2.0", // opt-in to Twitter OAuth 2.0
})
```

Keep in mind that although this change is easy, it changes how and with which of Twitter APIs you can interact with. Read the official Twitter OAuth 2 documentation for more details.

Email is currently not supported by Twitter OAuth 2.0.

### Notes[](#notes)

Twitter is currently the only built-in provider using the OAuth 1.0 spec. This means that you won’t receive an `access_token` or `refresh_token`, but an `oauth_token` and `oauth_token_secret` respectively. Remember to add these to your database schema, in case if you are using an [Adapter](https://authjs.dev/reference/core/adapters).

💡

You must enable the “Request email address from users” option in your app permissions if you want to obtain the users email address.

By default, Auth.js assumes that the Twitter provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Twitter provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/twitter.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters)

Parameter

Type

`config`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<[`TwitterProfile`](twitter#twitterprofile)\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<[`TwitterProfile`](twitter#twitterprofile)\>

[twitch](/reference/core/providers/twitch "twitch")[united-effects](/reference/core/providers/united-effects "united-effects")
