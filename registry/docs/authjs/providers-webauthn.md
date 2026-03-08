[API reference](/reference/overview "API reference")[@auth/core](/reference/core "@auth/core")[providers](/reference/core/providers "providers")webauthn

# providers/webauthn

## WebAuthnConfig[](#webauthnconfig)

Shared across all [ProviderType](../providers#providertype)

### Extends[](#extends)

-   [`CommonProviderOptions`](../providers#commonprovideroptions)

### Properties[](#properties)

#### authenticationOptions?[](#authenticationoptions)

```
optional authenticationOptions: Partial<ConfigurableAuthenticationOptions>;
```

Authentication options that are passed to

##### Simplewebauthn[](#simplewebauthn)

during authentication.

#### enableConditionalUI[](#enableconditionalui)

```
enableConditionalUI: boolean;
```

Enable conditional UI.

NOTE: Only one provider can have this option enabled at a time. Defaults to `true`.

#### formFields[](#formfields)

```
formFields: Record<string, CredentialInput>;
```

Form fields displayed in the default Passkey sign in/up form. These are not validated or enforced beyond the default Auth.js authentication page.

By default it displays an email field.

#### getRelayingParty()[](#getrelayingparty)

```
getRelayingParty: (options, request) => RelayingParty;
```

Function that returns the relaying party for the current request.

##### Parameters[](#parameters)

Parameter

Type

`options`

`InternalOptions`<`"webauthn"`\>

`request`

`RequestInternal`

##### Returns[](#returns)

[`RelayingParty`](webauthn#relayingparty-1)

#### getUserInfo[](#getuserinfo)

```
getUserInfo: GetUserInfo;
```

Function that returns the user info that the authenticator will use during registration and authentication.

-   It accepts the provider options, the request object, and returns the user info.
-   If the request contains an existing user’s data (e.g. email address), the function must return the existing user and `exists` must be `true`.
-   If the request contains enough information to create a new user, the function must return a new user info and `exists` must be `false`.
-   If the request does not contain enough information to create a new user, the function must return `null`.

It should not have any side effects (i.e. it shall not modify the database).

During passkey creation:

-   The passkey’s user ID will be a random string.
-   The passkey’s user name will be user.email
-   The passkey’s user display name will be user.name, if present, or user.email

By default, it looks for and uses the “email” request parameter to look up the user in the database.

#### id[](#id)

```
id: string;
```

Uniquely identifies the provider in AuthConfig.providers It’s also part of the URL

##### Inherited from[](#inherited-from)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`id`](../providers#id-1)

#### name[](#name)

```
name: string;
```

The provider name used on the default sign-in page’s sign-in button. For example if it’s “Google”, the corresponding button will say: “Sign in with Google”

##### Inherited from[](#inherited-from-1)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`name`](../providers#name-1)

#### registrationOptions[](#registrationoptions)

```
registrationOptions: Partial<ConfigurableRegistrationOptions>;
```

Registration options that are passed to

##### Simplewebauthn[](#simplewebauthn-1)

during registration.

#### relayingParty?[](#relayingparty)

```
optional relayingParty: Partial<RelayingPartyArray>;
```

Relaying party (RP) configuration

If not provided, the request URL will be used.

#### simpleWebAuthn[](#simplewebauthn-2)

```
simpleWebAuthn: {
  generateAuthenticationOptions: (options?) => Promise<PublicKeyCredentialRequestOptionsJSON>;
  generateRegistrationOptions: (options) => Promise<PublicKeyCredentialCreationOptionsJSON>;
  verifyAuthenticationResponse: (options) => Promise<VerifiedAuthenticationResponse>;
  verifyRegistrationResponse: (options) => Promise<VerifiedRegistrationResponse>;
};
```

SimpleWebAuthn instance to use for registration and authentication.

##### generateAuthenticationOptions()[](#generateauthenticationoptions)

```
generateAuthenticationOptions: (options?) => Promise<PublicKeyCredentialRequestOptionsJSON>;
```

Prepare a value to pass into navigator.credentials.get(…) for authenticator “login”

###### Parameters[](#parameters-1)

Parameter

Type

`options`?

`GenerateAuthenticationOptionsOpts`

###### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`PublicKeyCredentialRequestOptionsJSON`\>

##### generateRegistrationOptions()[](#generateregistrationoptions)

```
generateRegistrationOptions: (options) => Promise<PublicKeyCredentialCreationOptionsJSON>;
```

Prepare a value to pass into navigator.credentials.create(…) for authenticator “registration”

**Options:**

###### Parameters[](#parameters-2)

Parameter

Type

`options`

`GenerateRegistrationOptionsOpts`

###### Returns[](#returns-2)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`PublicKeyCredentialCreationOptionsJSON`\>

##### verifyAuthenticationResponse()[](#verifyauthenticationresponse)

```
verifyAuthenticationResponse: (options) => Promise<VerifiedAuthenticationResponse>;
```

Verify that the user has legitimately completed the login process

**Options:**

###### Parameters[](#parameters-3)

Parameter

Type

`options`

`VerifyAuthenticationResponseOpts`

###### Returns[](#returns-3)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`VerifiedAuthenticationResponse`\>

##### verifyRegistrationResponse()[](#verifyregistrationresponse)

```
verifyRegistrationResponse: (options) => Promise<VerifiedRegistrationResponse>;
```

Verify that the user has legitimately completed the registration process

**Options:**

###### Parameters[](#parameters-4)

Parameter

Type

`options`

`VerifyRegistrationResponseOpts`

###### Returns[](#returns-4)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`VerifiedRegistrationResponse`\>

#### simpleWebAuthnBrowserVersion[](#simplewebauthnbrowserversion)

```
simpleWebAuthnBrowserVersion: false | SemverString;
```

Version of SimpleWebAuthn browser script to load in the sign in page.

This is only loaded if the provider has conditional UI enabled. If set to false, it won’t load any script. Defaults to `v9.0.0`.

#### type[](#type)

```
type: "webauthn";
```

See [ProviderType](../providers#providertype)

##### Overrides[](#overrides)

[`CommonProviderOptions`](../providers#commonprovideroptions).[`type`](../providers#type-1)

#### verifyAuthenticationOptions?[](#verifyauthenticationoptions)

```
optional verifyAuthenticationOptions: Partial<ConfigurableVerifyAuthenticationOptions>;
```

Verify Authentication options that are passed to

##### Simplewebauthn[](#simplewebauthn-3)

during authentication.

#### verifyRegistrationOptions?[](#verifyregistrationoptions)

```
optional verifyRegistrationOptions: Partial<ConfigurableVerifyRegistrationOptions>;
```

Verify Registration options that are passed to

##### Simplewebauthn[](#simplewebauthn-4)

during registration.

* * *

## GetUserInfo()[](#getuserinfo-1)

```
type GetUserInfo = (options, request) => Promise<
  | {
  exists: true;
  user: User;
 }
  | {
  exists: false;
  user: Omit<User, "id">;
 }
| null>;
```

### Parameters[](#parameters-5)

Parameter

Type

`options`

`InternalOptions`<[`WebAuthnProviderType`](webauthn#webauthnprovidertype)\>

`request`

`RequestInternal`

### Returns[](#returns-5)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)< | { `exists`: `true`; `user`: [`User`](../types#user-2); } | { `exists`: `false`; `user`: [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)<[`User`](../types#user-2), `"id"`\>; } | `null`\>

* * *

## RelayingParty[](#relayingparty-1)

```
type RelayingParty = {
  id: string;
  name: string;
  origin: string;
};
```

### Type declaration[](#type-declaration)

#### id[](#id-1)

```
id: string;
```

Relaying Party ID. Use the website’s domain name.

#### name[](#name-1)

```
name: string;
```

Relaying Party name. Use the website’s name.

#### origin[](#origin)

```
origin: string;
```

Relaying Party origin. Use the website’s origin.

* * *

## WebAuthnProviderType[](#webauthnprovidertype)

```
type WebAuthnProviderType = "webauthn";
```

* * *

## DEFAULT\_SIMPLEWEBAUTHN\_BROWSER\_VERSION[](#default_simplewebauthn_browser_version)

```
const DEFAULT_SIMPLEWEBAUTHN_BROWSER_VERSION: SemverString = "v9.0.1";
```

* * *

## DEFAULT\_WEBAUTHN\_TIMEOUT[](#default_webauthn_timeout)

```
const DEFAULT_WEBAUTHN_TIMEOUT: number;
```

* * *

## default()[](#default)

```
function default(config): WebAuthnConfig
```

Add WebAuthn login to your page.

### Setup[](#setup)

#### Configuration[](#configuration)

```
import { Auth } from "@auth/core"
import WebAuthn from "@auth/core/providers/webauthn"
 
const request = new Request(origin)
const response = await Auth(request, {
  providers: [WebAuthn],
})
```

### Resources[](#resources)

-   [SimpleWebAuthn - Server side](https://simplewebauthn.dev/docs/packages/server)
-   [SimpleWebAuthn - Client side](https://simplewebauthn.dev/docs/packages/client)
-   [Source code](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/webauthn.ts)

💡

The WebAuthn provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/webauthn.ts). To override the defaults for your use case, check out [customizing the built-in WebAuthn provider](https://authjs.dev/guides/configuring-oauth-providers).

****Disclaimer**** If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).

Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec, we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).

### Parameters[](#parameters-6)

Parameter

Type

`config`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`WebAuthnConfig`](webauthn#webauthnconfig)\>

### Returns[](#returns-6)

[`WebAuthnConfig`](webauthn#webauthnconfig)

[vk](/reference/core/providers/vk "vk")[webex](/reference/core/providers/webex "webex")
