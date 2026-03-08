[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")eveonline

# providers/eveonline

Built-in **EVEOnline** integration.[![](https://authjs.dev/img/providers/eveonline.svg)](https://eveonline.com)

## EVEOnlineProfile[](#eveonlineprofile)

### Extends[](#extends)

-   [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Properties[](#properties)

#### CharacterID[](#characterid)

```
CharacterID: number;
```

#### CharacterName[](#charactername)

```
CharacterName: string;
```

#### CharacterOwnerHash[](#characterownerhash)

```
CharacterOwnerHash: string;
```

#### ExpiresOn[](#expireson)

```
ExpiresOn: string;
```

#### IntellectualProperty[](#intellectualproperty)

```
IntellectualProperty: string;
```

#### Scopes[](#scopes)

```
Scopes: string;
```

#### TokenType[](#tokentype)

```
TokenType: string;
```

* * *

## default()[](#default)

```
function default<P>(options): OAuthConfig<P>
```

Add EveOnline login to your page.

### Setup[](#setup)

#### Callback URL[](#callback-url)

```
https://example.com/api/auth/callback/eveonline
```

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import EveOnline from "@auth/core/providers/eveonline"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [
    EveOnline({
      clientId: EVEONLINE_CLIENT_ID,
      clientSecret: EVEONLINE_CLIENT_SECRET,
    }),
  ],
})
```

### Resources[](#resources)

-   [EveOnline OAuth documentation](https://developers.eveonline.com/blog/article/sso-to-authenticated-calls)

### Notes[](#notes)

💡

When creating your application, make sure to select `Authentication Only` as the connection type.

💡

If using JWT for the session, you can add the `CharacterID` to the JWT and session. Example:

```
options: {
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    session: async ({ session, token }) => {
      session.user.id = token.id;
      return session;
    }
  }
}
```

By default, Auth.js assumes that the EveOnline provider is based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.

💡

The EveOnline provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/eveonline.ts). To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Type Parameters[](#type-parameters)

Type Parameter

`P` _extends_ [`EVEOnlineProfile`](eveonline#eveonlineprofile)

### Parameters[](#parameters)

Parameter

Type

`options`

[`OAuthUserConfig`](../providers#oauthuserconfigprofile)<`P`\>

### Returns[](#returns)

[`OAuthConfig`](../providers#oauthconfigprofile)<`P`\>

[eventbrite](/reference/core/providers/eventbrite "eventbrite")[facebook](/reference/core/providers/facebook "facebook")
