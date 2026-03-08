[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")strava

# providers/strava

Built-in **Strava** integration.[![](https://authjs.dev/img/providers/strava.svg)](https://www.strava.com/)

## StravaProfile[](#stravaprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### firstname[](#firstname)

```
firstname: string;
```

#### id[](#id)

```
id: string;
```

#### lastname[](#lastname)

```
lastname: string;
```

#### profile[](#profile)

```
profile: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add Strava login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/strava
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import Strava from "@auth/core/providers/strava"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    Strava({ clientId: STRAVA_CLIENT_ID, clientSecret: STRAVA_CLIENT_SECRET }),
  ],
})
```

### Resources[](#resources)

-   [Strava API documentation](http://developers.strava.com/docs/reference/)

### Notes[](#notes)

By default, Auth.js assumes that the Strava provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The Strava provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/strava.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`StravaProfile`](strava#stravaprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[spotify](/reference/core/providers/spotify "spotify")[threads](/reference/core/providers/threads "threads")
