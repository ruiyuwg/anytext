[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")spotify

# providers/spotify

Built-in **Spotify** integration.[![](https://authjs.dev/img/providers/spotify.svg)](https://www.spotify.com/)

## SpotifyImage[](#spotifyimage)

### Properties[](#properties)

#### url[](#url)

```
url: string;
```

* * *

## SpotifyProfile[](#spotifyprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties-1)

#### display\_name[](#display_name)

```
display_name: string;
```

#### email[](#email)

```
email: string;
```

#### id[](#id)

```
id: string;
```

#### images[](#images)

```
images: SpotifyImage[];
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Spotify login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/spotify
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Spotify from "@auth/core/providers/spotify"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Spotify({
      clientId: SPOTIFY_CLIENT_ID,
      clientSecret: SPOTIFY_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [Spotify OAuth documentation](https://developer.spotify.com/documentation/general/guides/authorization-guide)
-   [Spotify app console](https://developer.spotify.com/dashboard/applications)

### Notes[](#notes)

By default, Auth.js assumes that the Spotify provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Spotify provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/spotify.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`SpotifyProfile`](spotify#spotifyprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[slack](/reference/core/providers/slack "slack")[strava](/reference/core/providers/strava "strava")
