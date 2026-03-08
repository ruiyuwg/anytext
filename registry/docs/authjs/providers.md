[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")providers

# providers

## AppProvider[](#appprovider)

Shared across all [ProviderType](providers#providertype)

### Extends[](#extends)

-   [`CommonProviderOptions`](providers#commonprovideroptions)

### Properties[](#properties)

#### callbackUrl[](#callbackurl)

```
callbackUrl: string;
```

#### id[](#id)

```
id: string;
```

Uniquely identifies the provider in AuthConfig.providers It’s also part of the URL

##### Inherited from[](#inherited-from)

[`CommonProviderOptions`](providers#commonprovideroptions).[`id`](providers#id-1)

#### name[](#name)

```
name: string;
```

The provider name used on the default sign-in page’s sign-in button. For example if it’s “Google”, the corresponding button will say: “Sign in with Google”

##### Inherited from[](#inherited-from-1)

[`CommonProviderOptions`](providers#commonprovideroptions).[`name`](providers#name-1)

#### signinUrl[](#signinurl)

```
signinUrl: string;
```

#### type[](#type)

```
type: ProviderType;
```

See [ProviderType](providers#providertype)

##### Inherited from[](#inherited-from-2)

[`CommonProviderOptions`](providers#commonprovideroptions).[`type`](providers#type-1)

* * *

## CommonProviderOptions[](#commonprovideroptions)

Shared across all [ProviderType](providers#providertype)

### Extended by[](#extended-by)

-   [`CredentialsConfig`](providers/credentials#credentialsconfigcredentialsinputs)
-   [`EmailConfig`](providers/email#emailconfig)
-   [`AppProvider`](providers#appprovider)
-   [`WebAuthnConfig`](providers/webauthn#webauthnconfig)
-   [`OAuth2Config`](providers#oauth2configprofile)

### Properties[](#properties-1)

#### id[](#id-1)

```
id: string;
```

Uniquely identifies the provider in AuthConfig.providers It’s also part of the URL

#### name[](#name-1)

```
name: string;
```

The provider name used on the default sign-in page’s sign-in button. For example if it’s “Google”, the corresponding button will say: “Sign in with Google”

#### type[](#type-1)

```
type: ProviderType;
```

See [ProviderType](providers#providertype)

* * *

## OAuth2Config<Profile>[](#oauth2configprofile)

TODO: Document

### Extends[](#extends-1)

-   [`CommonProviderOptions`](providers#commonprovideroptions).`PartialIssuer`

### Type Parameters[](#type-parameters)

Type Parameter

`Profile`

### Properties[](#properties-2)

#### \[conformInternal\]?[](#conforminternal)

```
optional [conformInternal]: true;
```

##### See[](#see)

#### \[customFetch\]()?[](#customfetch)

```
optional [customFetch]: (input, init?) => Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

##### Parameters[](#parameters)

Parameter

Type

`input`

[`URL`](https://developer.mozilla.org/docs/Web/API/URL) | `RequestInfo`

`init`?

`RequestInit`

##### Returns[](#returns)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

##### See[](#see-1)

#### account?[](#account)

```
optional account: AccountCallback;
```

Receives the full [TokenSet](types#tokenset) returned by the OAuth provider, and returns a subset. It is used to create the account associated with a user in the database.

You need to adjust your database’s [Account model](https://authjs.dev/reference/core/adapters#account) to match the returned properties. Check out the documentation of your [database adapter](https://authjs.dev/reference/core/adapters) for more information.

Defaults to: `access_token`, `id_token`, `refresh_token`, `expires_at`, `scope`, `token_type`, `session_state`

##### Example[](#example)

```
import GitHub from "@auth/core/providers/github"
// ...
GitHub({
  account(account) {
    // https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens#refreshing-a-user-access-token-with-a-refresh-token
    const refresh_token_expires_at =
      Math.floor(Date.now() / 1000) + Number(account.refresh_token_expires_in)
    return {
      access_token: account.access_token,
      expires_at: account.expires_at,
      refresh_token: account.refresh_token,
      refresh_token_expires_at
    }
  }
})
```

##### See[](#see-2)

-   [Database Adapter: Account model](https://authjs.dev/reference/core/adapters#account)
-   [https://openid.net/specs/openid-connect-core-1\_0.html#TokenResponse](https://openid.net/specs/openid-connect-core-1_0.html#TokenResponse)
-   [https://www.ietf.org/rfc/rfc6749.html#section-5.1](https://www.ietf.org/rfc/rfc6749.html#section-5.1)

#### allowDangerousEmailAccountLinking?[](#allowdangerousemailaccountlinking)

```
optional allowDangerousEmailAccountLinking: boolean;
```

Normally, when you sign in with an OAuth provider and another account with the same email address already exists, the accounts are not linked automatically.

Automatic account linking on sign in is not secure between arbitrary providers and is disabled by default. Learn more in our [Security FAQ](https://authjs.dev/concepts#security).

However, it may be desirable to allow automatic account linking if you trust that the provider involved has securely verified the email address associated with the account. Set `allowDangerousEmailAccountLinking: true` to enable automatic account linking.

#### authorization?[](#authorization)

```
optional authorization: 
  | string
  | AuthorizationEndpointHandler;
```

The login process will be initiated by sending the user to this URL.

[Authorization endpoint](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1)

#### checks?[](#checks)

```
optional checks: ("none" | "state" | "pkce")[];
```

The CSRF protection performed on the callback endpoint.

##### Default[](#default)

```
["pkce"]
```

##### Note[](#note)

When `redirectProxyUrl` or [AuthConfig.redirectProxyUrl](../core#redirectproxyurl) is set, `"state"` will be added to checks automatically.

[RFC 7636 - Proof Key for Code Exchange by OAuth Public Clients (PKCE)](https://www.rfc-editor.org/rfc/rfc7636.html#section-4) | [RFC 6749 - The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749.html#section-4.1.1) | [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) |

#### client?[](#client)

```
optional client: Partial<Client & {
  token_endpoint_auth_method: string;
}>;
```

Pass overrides to the underlying OAuth library. See [`oauth4webapi` client](https://github.com/panva/oauth4webapi/blob/main/docs/interfaces/Client.md) for details.

#### clientId?[](#clientid)

```
optional clientId: string;
```

#### clientSecret?[](#clientsecret)

```
optional clientSecret: string;
```

#### id[](#id-2)

```
id: string;
```

Identifies the provider when you want to sign in to a specific provider.

##### Example[](#example-1)

```
signIn('github') // "github" is the provider ID
```

##### Overrides[](#overrides)

[`CommonProviderOptions`](providers#commonprovideroptions).[`id`](providers#id-1)

#### issuer?[](#issuer)

```
optional issuer: string;
```

##### Overrides[](#overrides-1)

`PartialIssuer.issuer`

#### jwks\_endpoint?[](#jwks_endpoint)

```
optional jwks_endpoint: any;
```

##### Inherited from[](#inherited-from-3)

`PartialIssuer.jwks_endpoint`

#### name[](#name-2)

```
name: string;
```

The name of the provider. shown on the default sign in page.

##### Overrides[](#overrides-2)

[`CommonProviderOptions`](providers#commonprovideroptions).[`name`](providers#name-1)

#### options?[](#options)

```
optional options: OAuthUserConfig<Profile>;
```

#### profile?[](#profile)

```
optional profile: ProfileCallback<Profile>;
```

Receives the full [Profile](providers#oauth2configprofile) returned by the OAuth provider, and returns a subset. It is used to create the user in the database.

Defaults to: `id`, `email`, `name`, `image`

##### See[](#see-3)

[Database Adapter: User model](https://authjs.dev/reference/core/adapters#user)

#### redirectProxyUrl?[](#redirectproxyurl)

```
optional redirectProxyUrl: string;
```

#### style?[](#style)

```
optional style: OAuthProviderButtonStyles;
```

#### token?[](#token)

```
optional token: string | TokenEndpointHandler;
```

#### type[](#type-2)

```
type: "oauth";
```

See [ProviderType](providers#providertype)

##### Overrides[](#overrides-3)

[`CommonProviderOptions`](providers#commonprovideroptions).[`type`](providers#type-1)

#### userinfo?[](#userinfo)

```
optional userinfo: 
  | string
  | UserinfoEndpointHandler;
```

#### wellKnown?[](#wellknown)

```
optional wellKnown: string;
```

OpenID Connect (OIDC) compliant providers can configure this instead of `authorize`/`token`/`userinfo` options without further configuration needed in most cases. You can still use the `authorize`/`token`/`userinfo` options for advanced control.

[Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414#section-3)

* * *

## OAuthProviderButtonStyles[](#oauthproviderbuttonstyles)

### Properties[](#properties-3)

#### bg?[](#bg)

```
optional bg: string;
```

##### Deprecated[](#deprecated)

Please use ‘brandColor’ instead

#### brandColor?[](#brandcolor)

```
optional brandColor: string;
```

#### logo?[](#logo)

```
optional logo: string;
```

#### text?[](#text)

```
optional text: string;
```

##### Deprecated[](#deprecated-1)

* * *

## OIDCConfig<Profile>[](#oidcconfigprofile)

Extension of the [OAuth2Config](providers#oauth2configprofile).

### See[](#see-4)

[https://openid.net/specs/openid-connect-core-1\_0.html](https://openid.net/specs/openid-connect-core-1_0.html)

### Extends[](#extends-2)

-   [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`OAuth2Config`](providers#oauth2configprofile)<`Profile`\>, `"type"` | `"checks"`\>

### Type Parameters[](#type-parameters-1)

Type Parameter

`Profile`

### Properties[](#properties-4)

#### \[conformInternal\]?[](#conforminternal-1)

```
optional [conformInternal]: true;
```

##### See[](#see-5)

##### Inherited from[](#inherited-from-4)

`Omit.[conformInternal]`

#### \[customFetch\]()?[](#customfetch-1)

```
optional [customFetch]: (input, init?) => Promise<Response>;
```

[MDN Reference](https://developer.mozilla.org/docs/Web/API/fetch)

##### Parameters[](#parameters-1)

Parameter

Type

`input`

[`URL`](https://developer.mozilla.org/docs/Web/API/URL) | `RequestInfo`

`init`?

`RequestInit`

##### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[`Response`](https://developer.mozilla.org/docs/Web/API/Response)\>

##### See[](#see-6)

##### Inherited from[](#inherited-from-5)

`Omit.[customFetch]`

#### account?[](#account-1)

```
optional account: AccountCallback;
```

Receives the full [TokenSet](types#tokenset) returned by the OAuth provider, and returns a subset. It is used to create the account associated with a user in the database.

You need to adjust your database’s [Account model](https://authjs.dev/reference/core/adapters#account) to match the returned properties. Check out the documentation of your [database adapter](https://authjs.dev/reference/core/adapters) for more information.

Defaults to: `access_token`, `id_token`, `refresh_token`, `expires_at`, `scope`, `token_type`, `session_state`

##### Example[](#example-2)

```
import GitHub from "@auth/core/providers/github"
// ...
GitHub({
  account(account) {
    // https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/refreshing-user-access-tokens#refreshing-a-user-access-token-with-a-refresh-token
    const refresh_token_expires_at =
      Math.floor(Date.now() / 1000) + Number(account.refresh_token_expires_in)
    return {
      access_token: account.access_token,
      expires_at: account.expires_at,
      refresh_token: account.refresh_token,
      refresh_token_expires_at
    }
  }
})
```

##### See[](#see-7)

-   [Database Adapter: Account model](https://authjs.dev/reference/core/adapters#account)
-   [https://openid.net/specs/openid-connect-core-1\_0.html#TokenResponse](https://openid.net/specs/openid-connect-core-1_0.html#TokenResponse)
-   [https://www.ietf.org/rfc/rfc6749.html#section-5.1](https://www.ietf.org/rfc/rfc6749.html#section-5.1)

##### Inherited from[](#inherited-from-6)

`Omit.account`

#### allowDangerousEmailAccountLinking?[](#allowdangerousemailaccountlinking-1)

```
optional allowDangerousEmailAccountLinking: boolean;
```

Normally, when you sign in with an OAuth provider and another account with the same email address already exists, the accounts are not linked automatically.

Automatic account linking on sign in is not secure between arbitrary providers and is disabled by default. Learn more in our [Security FAQ](https://authjs.dev/concepts#security).

However, it may be desirable to allow automatic account linking if you trust that the provider involved has securely verified the email address associated with the account. Set `allowDangerousEmailAccountLinking: true` to enable automatic account linking.

##### Inherited from[](#inherited-from-7)

`Omit.allowDangerousEmailAccountLinking`

#### authorization?[](#authorization-1)

```
optional authorization: 
  | string
  | AuthorizationEndpointHandler;
```

The login process will be initiated by sending the user to this URL.

[Authorization endpoint](https://datatracker.ietf.org/doc/html/rfc6749#section-3.1)

##### Inherited from[](#inherited-from-8)

`Omit.authorization`

#### checks?[](#checks-1)

```
optional checks: ("none" | "state" | "nonce" | "pkce")[];
```

#### client?[](#client-1)

```
optional client: Partial<Client & {
  token_endpoint_auth_method: string;
}>;
```

Pass overrides to the underlying OAuth library. See [`oauth4webapi` client](https://github.com/panva/oauth4webapi/blob/main/docs/interfaces/Client.md) for details.

##### Inherited from[](#inherited-from-9)

`Omit.client`

#### clientId?[](#clientid-1)

```
optional clientId: string;
```

##### Inherited from[](#inherited-from-10)

`Omit.clientId`

#### clientSecret?[](#clientsecret-1)

```
optional clientSecret: string;
```

##### Inherited from[](#inherited-from-11)

`Omit.clientSecret`

#### id[](#id-3)

```
id: string;
```

Identifies the provider when you want to sign in to a specific provider.

##### Example[](#example-3)

```
signIn('github') // "github" is the provider ID
```

##### Inherited from[](#inherited-from-12)

`Omit.id`

#### idToken?[](#idtoken)

```
optional idToken: boolean;
```

If set to `false`, the `userinfo_endpoint` will be fetched for the user data.

##### Note[](#note-1)

An `id_token` is still required to be returned during the authorization flow.

#### issuer?[](#issuer-1)

```
optional issuer: string;
```

##### Inherited from[](#inherited-from-13)

`Omit.issuer`

#### jwks\_endpoint?[](#jwks_endpoint-1)

```
optional jwks_endpoint: any;
```

##### Inherited from[](#inherited-from-14)

`Omit.jwks_endpoint`

#### name[](#name-3)

```
name: string;
```

The name of the provider. shown on the default sign in page.

##### Inherited from[](#inherited-from-15)

`Omit.name`

#### options?[](#options-1)

```
optional options: OAuthUserConfig<Profile>;
```

##### Inherited from[](#inherited-from-16)

`Omit.options`

#### profile?[](#profile-1)

```
optional profile: ProfileCallback<Profile>;
```

Receives the full [Profile](providers#oauth2configprofile) returned by the OAuth provider, and returns a subset. It is used to create the user in the database.

Defaults to: `id`, `email`, `name`, `image`

##### See[](#see-8)

[Database Adapter: User model](https://authjs.dev/reference/core/adapters#user)

##### Inherited from[](#inherited-from-17)

`Omit.profile`

#### redirectProxyUrl?[](#redirectproxyurl-1)

```
optional redirectProxyUrl: string;
```

##### Inherited from[](#inherited-from-18)

`Omit.redirectProxyUrl`

#### style?[](#style-1)

```
optional style: OAuthProviderButtonStyles;
```

##### Inherited from[](#inherited-from-19)

`Omit.style`

#### token?[](#token-1)

```
optional token: string | TokenEndpointHandler;
```

##### Inherited from[](#inherited-from-20)

`Omit.token`

#### type[](#type-3)

```
type: "oidc";
```

#### userinfo?[](#userinfo-1)

```
optional userinfo: 
  | string
  | UserinfoEndpointHandler;
```

##### Inherited from[](#inherited-from-21)

`Omit.userinfo`

#### wellKnown?[](#wellknown-1)

```
optional wellKnown: string;
```

OpenID Connect (OIDC) compliant providers can configure this instead of `authorize`/`token`/`userinfo` options without further configuration needed in most cases. You can still use the `authorize`/`token`/`userinfo` options for advanced control.

[Authorization Server Metadata](https://datatracker.ietf.org/doc/html/rfc8414#section-3)

##### Inherited from[](#inherited-from-22)

`Omit.wellKnown`

* * *

## AccountCallback()[](#accountcallback)

```
type AccountCallback = (tokens) => TokenSet | undefined | void;
```

### Parameters[](#parameters-2)

Parameter

Type

`tokens`

[`TokenSet`](types#tokenset)

### Returns[](#returns-2)

[`TokenSet`](types#tokenset) | `undefined` | `void`

* * *

## AppProviders[](#appproviders)

```
type AppProviders = (
  | Provider
  | ReturnType<BuiltInProviders[keyof BuiltInProviders]>)[];
```

* * *

## AuthorizationEndpointHandler[](#authorizationendpointhandler)

```
type AuthorizationEndpointHandler = EndpointHandler<AuthorizationParameters>;
```

* * *

## BuiltInProviders[](#builtinproviders)

```
type BuiltInProviders = Record<OAuthProviderId, (config) => OAuthConfig<any>> & Record<CredentialsProviderId, typeof default> & Record<EmailProviderId, typeof default> & Record<WebAuthnProviderType, (config) => WebAuthnConfig>;
```

* * *

## OAuthChecks[](#oauthchecks)

```
type OAuthChecks = OpenIDCallbackChecks | OAuthCallbackChecks;
```

* * *

## OAuthConfig<Profile>[](#oauthconfigprofile)

```
type OAuthConfig<Profile> = 
  | OIDCConfig<Profile>
| OAuth2Config<Profile>;
```

### Type Parameters[](#type-parameters-2)

Type Parameter

`Profile`

* * *

## OAuthEndpointType[](#oauthendpointtype)

```
type OAuthEndpointType = "authorization" | "token" | "userinfo";
```

* * *

## OAuthUserConfig<Profile>[](#oauthuserconfigprofile)

```
type OAuthUserConfig<Profile> = Omit<Partial<OAuthConfig<Profile>>, "options" | "type">;
```

### Type Parameters[](#type-parameters-3)

Type Parameter

`Profile`

* * *

## OIDCConfigInternal<Profile>[](#oidcconfiginternalprofile)

```
type OIDCConfigInternal<Profile> = OAuthConfigInternal<Profile> & {
  checks: OIDCConfig<Profile>["checks"];
  idToken: OIDCConfig<Profile>["idToken"];
};
```

### Type declaration[](#type-declaration)

#### checks[](#checks-2)

```
checks: OIDCConfig<Profile>["checks"];
```

#### idToken[](#idtoken-1)

```
idToken: OIDCConfig<Profile>["idToken"];
```

### Type Parameters[](#type-parameters-4)

Type Parameter

`Profile`

* * *

## OIDCUserConfig<Profile>[](#oidcuserconfigprofile)

```
type OIDCUserConfig<Profile> = Omit<Partial<OIDCConfig<Profile>>, "options" | "type">;
```

### Type Parameters[](#type-parameters-5)

Type Parameter

`Profile`

* * *

## ProfileCallback()<Profile>[](#profilecallbackprofile)

```
type ProfileCallback<Profile> = (profile, tokens) => Awaitable<User>;
```

### Type Parameters[](#type-parameters-6)

Type Parameter

`Profile`

### Parameters[](#parameters-3)

Parameter

Type

`profile`

`Profile`

`tokens`

[`TokenSet`](types#tokenset)

### Returns[](#returns-3)

[`Awaitable`](types#awaitablet)<[`User`](types#user-2)\>

* * *

## Provider<P>[](#providerp)

```
type Provider<P> = 
  | 
  | OIDCConfig<P>
  | OAuth2Config<P>
  | EmailConfig
  | CredentialsConfig
  | WebAuthnConfig & InternalProviderOptions
  | (...args) => 
  | OAuth2Config<P>
  | OIDCConfig<P>
  | EmailConfig
  | CredentialsConfig
  | WebAuthnConfig & InternalProviderOptions & InternalProviderOptions;
```

Must be a supported authentication provider config:

-   [OAuthConfig](providers#oauthconfigprofile)
-   EmailConfigInternal
-   CredentialsConfigInternal

For more information, see the guides:

### Type Parameters[](#type-parameters-7)

Type Parameter

Default type

`P` _extends_ [`Profile`](types#profile)

`any`

### See[](#see-9)

-   [OAuth/OIDC guide](https://authjs.dev/guides/providers/custom-provider)
-   [Email (Passwordless) guide](https://authjs.dev/guides/providers/email)
-   [Credentials guide](https://authjs.dev/getting-started/providers/credentials)

* * *

## ProviderId[](#providerid)

```
type ProviderId = 
  | CredentialsProviderId
  | EmailProviderId
  | OAuthProviderId
  | WebAuthnProviderType
| string & {};
```

* * *

## ProviderType[](#providertype)

```
type ProviderType = 
  | "oidc"
  | "oauth"
  | "email"
  | "credentials"
  | WebAuthnProviderType;
```

Providers passed to Auth.js must define one of these types.

### See[](#see-10)

-   [RFC 6749 - The OAuth 2.0 Authorization Framework](https://www.rfc-editor.org/rfc/rfc6749.html#section-2.3)
-   [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html#ClientAuthentication)
-   [Email or Passwordless Authentication](https://authjs.dev/concepts/oauth)
-   [Credentials-based Authentication](https://authjs.dev/getting-started/providers/credentials)

* * *

## TokenEndpointHandler[](#tokenendpointhandler)

```
type TokenEndpointHandler = EndpointHandler<UrlParams, {
  checks: OAuthChecks;
  params: CallbackParamsType;
 }, {
  tokens: TokenSet;
}>;
```

* * *

## UserinfoEndpointHandler[](#userinfoendpointhandler)

```
type UserinfoEndpointHandler = EndpointHandler<UrlParams, {
  tokens: TokenSet;
}, Profile>;
```

* * *

## CredentialInput[](#credentialinput)

Re-exports [CredentialInput](providers/credentials#credentialinput)

## CredentialsConfig[](#credentialsconfig)

Re-exports [CredentialsConfig](providers/credentials#credentialsconfigcredentialsinputs)

## CredentialsProviderId[](#credentialsproviderid)

Re-exports [CredentialsProviderId](providers/credentials#credentialsproviderid)

## EmailConfig[](#emailconfig)

Re-exports [EmailConfig](providers/email#emailconfig)

## EmailProviderId[](#emailproviderid)

Re-exports [EmailProviderId](providers/provider-types#emailproviderid)

## EmailProviderSendVerificationRequestParams[](#emailprovidersendverificationrequestparams)

Re-exports [EmailProviderSendVerificationRequestParams](providers/email#emailprovidersendverificationrequestparams)

## EmailProviderType[](#emailprovidertype)

Re-exports [EmailProviderType](providers/email#emailprovidertype)

## EmailUserConfig[](#emailuserconfig)

Re-exports [EmailUserConfig](providers/email#emailuserconfig)

## OAuthProviderId[](#oauthproviderid)

Re-exports [OAuthProviderId](providers/provider-types#oauthproviderid)

[jwt](/reference/core/jwt "jwt")[42-school](/reference/core/providers/42-school "42-school")
