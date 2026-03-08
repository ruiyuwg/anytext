[API reference](/reference/overview "API reference")[@auth/solid-start](/reference/solid-start "@auth/solid-start")adapters

# adapters

## Adapter[](#adapter)

An adapter is an object with function properties (methods) that read and write data from a data source. Think of these methods as a way to normalize the data layer to common interfaces that Auth.js can understand.

This is what makes Auth.js very flexible and allows it to be used with any data layer.

The adapter methods are used to perform the following operations:

-   Create/update/delete a user
-   Link/unlink an account to/from a user
-   Handle active sessions
-   Support passwordless authentication across multiple devices

If any of the methods are not implemented, but are called by Auth.js, an error will be shown to the user and the operation will fail.

### Methods[](#methods)

#### createAuthenticator()?[](#createauthenticator)

```
optional createAuthenticator(authenticator): Awaitable<AdapterAuthenticator>
```

Create a new authenticator.

If the creation fails, the adapter must throw an error.

##### Parameters[](#parameters)

Parameter

Type

`authenticator`

[`AdapterAuthenticator`](adapters#adapterauthenticator)

##### Returns[](#returns)

[`Awaitable`](../core/types#awaitablet)<[`AdapterAuthenticator`](adapters#adapterauthenticator)\>

#### createSession()?[](#createsession)

```
optional createSession(session): Awaitable<AdapterSession>
```

Creates a session for the user and returns it.

See also [Database Session management](https://authjs.dev/guides/creating-a-database-adapter#database-session-management)

##### Parameters[](#parameters-1)

Parameter

Type

`session`

{ `expires`: [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date); `sessionToken`: `string`; `userId`: `string`; }

`session.expires`

[`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date)

`session.sessionToken`

`string`

`session.userId`

`string`

##### Returns[](#returns-1)

[`Awaitable`](../core/types#awaitablet)<[`AdapterSession`](adapters#adaptersession)\>

#### createUser()?[](#createuser)

```
optional createUser(user): Awaitable<AdapterUser>
```

Creates a user in the database and returns it.

See also [User management](https://authjs.dev/guides/creating-a-database-adapter#user-management)

##### Parameters[](#parameters-2)

Parameter

Type

`user`

[`AdapterUser`](adapters#adapteruser)

##### Returns[](#returns-2)

[`Awaitable`](../core/types#awaitablet)<[`AdapterUser`](adapters#adapteruser)\>

#### createVerificationToken()?[](#createverificationtoken)

```
optional createVerificationToken(verificationToken): Awaitable<undefined | null | VerificationToken>
```

Creates a verification token and returns it.

See also [Verification tokens](https://authjs.dev/guides/creating-a-database-adapter#verification-tokens)

##### Parameters[](#parameters-3)

Parameter

Type

`verificationToken`

[`VerificationToken`](adapters#verificationtoken)

##### Returns[](#returns-3)

[`Awaitable`](../core/types#awaitablet)<`undefined` | `null` | [`VerificationToken`](adapters#verificationtoken)\>

#### deleteSession()?[](#deletesession)

```
optional deleteSession(sessionToken): 
  | Promise<void>
| Awaitable<undefined | null | AdapterSession>
```

Deletes a session from the database. It is preferred that this method also returns the session that is being deleted for logging purposes.

See also [Database Session management](https://authjs.dev/guides/creating-a-database-adapter#database-session-management)

##### Parameters[](#parameters-4)

Parameter

Type

`sessionToken`

`string`

##### Returns[](#returns-4)

| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\> | [`Awaitable`](../core/types#awaitablet)<`undefined` | `null` | [`AdapterSession`](adapters#adaptersession)\>

#### deleteUser()?[](#deleteuser)

```
optional deleteUser(userId): 
  | Promise<void>
| Awaitable<undefined | null | AdapterUser>
```

##### Parameters[](#parameters-5)

Parameter

Type

`userId`

`string`

##### Returns[](#returns-5)

| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\> | [`Awaitable`](../core/types#awaitablet)<`undefined` | `null` | [`AdapterUser`](adapters#adapteruser)\>

##### Todo[](#todo)

This method is currently not invoked yet.

See also [User management](https://authjs.dev/guides/creating-a-database-adapter#user-management)

#### getAccount()?[](#getaccount)

```
optional getAccount(providerAccountId, provider): Awaitable<null | AdapterAccount>
```

Get account by provider account id and provider.

If an account is not found, the adapter must return `null`.

##### Parameters[](#parameters-6)

Parameter

Type

`providerAccountId`

`string`

`provider`

`string`

##### Returns[](#returns-6)

[`Awaitable`](../core/types#awaitablet)<`null` | [`AdapterAccount`](adapters#adapteraccount)\>

#### getAuthenticator()?[](#getauthenticator)

```
optional getAuthenticator(credentialID): Awaitable<null | AdapterAuthenticator>
```

Returns an authenticator from its credentialID.

If an authenticator is not found, the adapter must return `null`.

##### Parameters[](#parameters-7)

Parameter

Type

`credentialID`

`string`

##### Returns[](#returns-7)

[`Awaitable`](../core/types#awaitablet)<`null` | [`AdapterAuthenticator`](adapters#adapterauthenticator)\>

#### getSessionAndUser()?[](#getsessionanduser)

```
optional getSessionAndUser(sessionToken): Awaitable<
  | null
  | {
  session: AdapterSession;
  user: AdapterUser;
}>
```

Returns a session and a userfrom the database in one go.

💡

If the database supports joins, it’s recommended to reduce the number of database queries.

See also [Database Session management](https://authjs.dev/guides/creating-a-database-adapter#database-session-management)

##### Parameters[](#parameters-8)

Parameter

Type

`sessionToken`

`string`

##### Returns[](#returns-8)

[`Awaitable`](../core/types#awaitablet)< | `null` | { `session`: [`AdapterSession`](adapters#adaptersession); `user`: [`AdapterUser`](adapters#adapteruser); }>

#### getUser()?[](#getuser)

```
optional getUser(id): Awaitable<null | AdapterUser>
```

Returns a user from the database via the user id.

See also [User management](https://authjs.dev/guides/creating-a-database-adapter#user-management)

##### Parameters[](#parameters-9)

Parameter

Type

`id`

`string`

##### Returns[](#returns-9)

[`Awaitable`](../core/types#awaitablet)<`null` | [`AdapterUser`](adapters#adapteruser)\>

#### getUserByAccount()?[](#getuserbyaccount)

```
optional getUserByAccount(providerAccountId): Awaitable<null | AdapterUser>
```

Using the provider id and the id of the user for a specific account, get the user.

See also [User management](https://authjs.dev/guides/creating-a-database-adapter#user-management)

##### Parameters[](#parameters-10)

Parameter

Type

`providerAccountId`

[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<[`AdapterAccount`](adapters#adapteraccount), `"provider"` | `"providerAccountId"`\>

##### Returns[](#returns-10)

[`Awaitable`](../core/types#awaitablet)<`null` | [`AdapterUser`](adapters#adapteruser)\>

#### getUserByEmail()?[](#getuserbyemail)

```
optional getUserByEmail(email): Awaitable<null | AdapterUser>
```

Returns a user from the database via the user’s email address.

See also [Verification tokens](https://authjs.dev/guides/creating-a-database-adapter#verification-tokens)

##### Parameters[](#parameters-11)

Parameter

Type

`email`

`string`

##### Returns[](#returns-11)

[`Awaitable`](../core/types#awaitablet)<`null` | [`AdapterUser`](adapters#adapteruser)\>

#### linkAccount()?[](#linkaccount)

```
optional linkAccount(account): 
  | Promise<void>
| Awaitable<undefined | null | AdapterAccount>
```

This method is invoked internally (but optionally can be used for manual linking). It creates an [Account](https://authjs.dev/reference/core/adapters#models) in the database.

See also [User management](https://authjs.dev/guides/creating-a-database-adapter#user-management)

##### Parameters[](#parameters-12)

Parameter

Type

`account`

[`AdapterAccount`](adapters#adapteraccount)

##### Returns[](#returns-12)

| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\> | [`Awaitable`](../core/types#awaitablet)<`undefined` | `null` | [`AdapterAccount`](adapters#adapteraccount)\>

#### listAuthenticatorsByUserId()?[](#listauthenticatorsbyuserid)

```
optional listAuthenticatorsByUserId(userId): Awaitable<AdapterAuthenticator[]>
```

Returns all authenticators from a user.

If a user is not found, the adapter should still return an empty array. If the retrieval fails for some other reason, the adapter must throw an error.

##### Parameters[](#parameters-13)

Parameter

Type

`userId`

`string`

##### Returns[](#returns-13)

[`Awaitable`](../core/types#awaitablet)<[`AdapterAuthenticator`](adapters#adapterauthenticator)\[\]>

#### unlinkAccount()?[](#unlinkaccount)

```
optional unlinkAccount(providerAccountId): 
  | Promise<void>
| Awaitable<undefined | AdapterAccount>
```

##### Parameters[](#parameters-14)

Parameter

Type

`providerAccountId`

[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<[`AdapterAccount`](adapters#adapteraccount), `"provider"` | `"providerAccountId"`\>

##### Returns[](#returns-14)

| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\> | [`Awaitable`](../core/types#awaitablet)<`undefined` | [`AdapterAccount`](adapters#adapteraccount)\>

##### Todo[](#todo-1)

This method is currently not invoked yet.

#### updateAuthenticatorCounter()?[](#updateauthenticatorcounter)

```
optional updateAuthenticatorCounter(credentialID, newCounter): Awaitable<AdapterAuthenticator>
```

Updates an authenticator’s counter.

If the update fails, the adapter must throw an error.

##### Parameters[](#parameters-15)

Parameter

Type

`credentialID`

`string`

`newCounter`

`number`

##### Returns[](#returns-15)

[`Awaitable`](../core/types#awaitablet)<[`AdapterAuthenticator`](adapters#adapterauthenticator)\>

#### updateSession()?[](#updatesession)

```
optional updateSession(session): Awaitable<undefined | null | AdapterSession>
```

Updates a session in the database and returns it.

See also [Database Session management](https://authjs.dev/guides/creating-a-database-adapter#database-session-management)

##### Parameters[](#parameters-16)

Parameter

Type

`session`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`AdapterSession`](adapters#adaptersession)\> & [`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<[`AdapterSession`](adapters#adaptersession), `"sessionToken"`\>

##### Returns[](#returns-16)

[`Awaitable`](../core/types#awaitablet)<`undefined` | `null` | [`AdapterSession`](adapters#adaptersession)\>

#### updateUser()?[](#updateuser)

```
optional updateUser(user): Awaitable<AdapterUser>
```

Updates a user in the database and returns it.

See also [User management](https://authjs.dev/guides/creating-a-database-adapter#user-management)

##### Parameters[](#parameters-17)

Parameter

Type

`user`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`AdapterUser`](adapters#adapteruser)\> & [`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)<[`AdapterUser`](adapters#adapteruser), `"id"`\>

##### Returns[](#returns-17)

[`Awaitable`](../core/types#awaitablet)<[`AdapterUser`](adapters#adapteruser)\>

#### useVerificationToken()?[](#useverificationtoken)

```
optional useVerificationToken(params): Awaitable<null | VerificationToken>
```

Return verification token from the database and deletes it so it can only be used once.

See also [Verification tokens](https://authjs.dev/guides/creating-a-database-adapter#verification-tokens)

##### Parameters[](#parameters-18)

Parameter

Type

`params`

{ `identifier`: `string`; `token`: `string`; }

`params.identifier`

`string`

`params.token`

`string`

##### Returns[](#returns-18)

[`Awaitable`](../core/types#awaitablet)<`null` | [`VerificationToken`](adapters#verificationtoken)\>

* * *

## AdapterAccount[](#adapteraccount)

An account is a connection between a user and a provider.

There are two types of accounts:

-   OAuth/OIDC accounts, which are created when a user signs in with an OAuth provider.
-   Email accounts, which are created when a user signs in with an [Email provider](https://authjs.dev/getting-started/authentication/email).

One user can have multiple accounts.

### Extends[](#extends)

-   [`Account`](../solid-start#account)

### Indexable[](#indexable)

\[`key`: `string`\]: `undefined` | `JsonValue`

### Properties[](#properties)

#### access\_token?[](#access_token)

```
readonly optional access_token: string;
```

##### Inherited from[](#inherited-from)

[`Account`](../solid-start#account).[`access_token`](../solid-start#access_token)

#### authorization\_details?[](#authorization_details)

```
readonly optional authorization_details: AuthorizationDetails[];
```

##### Inherited from[](#inherited-from-1)

[`Account`](../solid-start#account).[`authorization_details`](../solid-start#authorization_details)

#### expires\_at?[](#expires_at)

```
optional expires_at: number;
```

Calculated value based on TokenEndpointResponse.expires\_in.

It is the absolute timestamp (in seconds) when the TokenEndpointResponse.access\_token expires.

This value can be used for implementing token rotation together with TokenEndpointResponse.refresh\_token.

##### See[](#see)

-   [https://authjs.dev/guides/refresh-token-rotation#database-strategy](https://authjs.dev/guides/refresh-token-rotation#database-strategy)
-   [https://www.rfc-editor.org/rfc/rfc6749#section-5.1](https://www.rfc-editor.org/rfc/rfc6749#section-5.1)

##### Inherited from[](#inherited-from-2)

[`Account`](../solid-start#account).[`expires_at`](../solid-start#expires_at)

#### expires\_in?[](#expires_in)

```
readonly optional expires_in: number;
```

##### Inherited from[](#inherited-from-3)

[`Account`](../solid-start#account).[`expires_in`](../solid-start#expires_in)

#### id\_token?[](#id_token)

```
readonly optional id_token: string;
```

##### Inherited from[](#inherited-from-4)

[`Account`](../solid-start#account).[`id_token`](../solid-start#id_token)

#### provider[](#provider)

```
provider: string;
```

Provider’s id for this account. E.g. “google”. See the full list at [https://authjs.dev/reference/core/providers](https://authjs.dev/reference/core/providers)

##### Inherited from[](#inherited-from-5)

[`Account`](../solid-start#account).[`provider`](../solid-start#provider)

#### providerAccountId[](#provideraccountid)

```
providerAccountId: string;
```

This value depends on the type of the provider being used to create the account.

-   oauth/oidc: The OAuth account’s id, returned from the `profile()` callback.
-   email: The user’s email address.
-   credentials: `id` returned from the `authorize()` callback

##### Inherited from[](#inherited-from-6)

[`Account`](../solid-start#account).[`providerAccountId`](../solid-start#provideraccountid)

#### refresh\_token?[](#refresh_token)

```
readonly optional refresh_token: string;
```

##### Inherited from[](#inherited-from-7)

[`Account`](../solid-start#account).[`refresh_token`](../solid-start#refresh_token)

#### scope?[](#scope)

```
readonly optional scope: string;
```

##### Inherited from[](#inherited-from-8)

[`Account`](../solid-start#account).[`scope`](../solid-start#scope)

#### token\_type?[](#token_type)

```
readonly optional token_type: Lowercase<string>;
```

NOTE: because the value is case insensitive it is always returned lowercased

##### Inherited from[](#inherited-from-9)

[`Account`](../solid-start#account).[`token_type`](../solid-start#token_type)

#### type[](#type)

```
type: AdapterAccountType;
```

Provider’s type for this account

##### Overrides[](#overrides)

[`Account`](../solid-start#account).[`type`](../solid-start#type-2)

#### userId[](#userid)

```
userId: string;
```

id of the user this account belongs to

##### See[](#see-1)

[https://authjs.dev/reference/core/adapters#adapteruser](https://authjs.dev/reference/core/adapters#adapteruser)

##### Overrides[](#overrides-1)

[`Account`](../solid-start#account).[`userId`](../solid-start#userid)

* * *

## AdapterAuthenticator[](#adapterauthenticator)

An authenticator represents a credential authenticator assigned to a user.

### Extends[](#extends-1)

-   [`Authenticator`](../core/types#authenticator)

### Properties[](#properties-1)

#### counter[](#counter)

```
counter: number;
```

Number of times the authenticator has been used.

##### Inherited from[](#inherited-from-10)

[`Authenticator`](../core/types#authenticator).[`counter`](../core/types#counter)

#### credentialBackedUp[](#credentialbackedup)

```
credentialBackedUp: boolean;
```

Whether the client authenticator backed up the credential.

##### Inherited from[](#inherited-from-11)

[`Authenticator`](../core/types#authenticator).[`credentialBackedUp`](../core/types#credentialbackedup)

#### credentialDeviceType[](#credentialdevicetype)

```
credentialDeviceType: string;
```

Device type of the authenticator.

##### Inherited from[](#inherited-from-12)

[`Authenticator`](../core/types#authenticator).[`credentialDeviceType`](../core/types#credentialdevicetype)

#### credentialID[](#credentialid)

```
credentialID: string;
```

Base64 encoded credential ID.

##### Inherited from[](#inherited-from-13)

[`Authenticator`](../core/types#authenticator).[`credentialID`](../core/types#credentialid)

#### credentialPublicKey[](#credentialpublickey)

```
credentialPublicKey: string;
```

Base64 encoded credential public key.

##### Inherited from[](#inherited-from-14)

[`Authenticator`](../core/types#authenticator).[`credentialPublicKey`](../core/types#credentialpublickey)

#### providerAccountId[](#provideraccountid-1)

```
providerAccountId: string;
```

The provider account ID connected to the authenticator.

##### Inherited from[](#inherited-from-15)

[`Authenticator`](../core/types#authenticator).[`providerAccountId`](../core/types#provideraccountid-1)

#### transports?[](#transports)

```
optional transports: null | string;
```

Concatenated transport flags.

##### Inherited from[](#inherited-from-16)

[`Authenticator`](../core/types#authenticator).[`transports`](../core/types#transports)

#### userId[](#userid-1)

```
userId: string;
```

User ID of the authenticator.

##### Overrides[](#overrides-2)

[`Authenticator`](../core/types#authenticator).[`userId`](../core/types#userid-1)

* * *

## AdapterSession[](#adaptersession)

A session holds information about a user’s current signin state.

### Properties[](#properties-2)

#### expires[](#expires)

```
expires: Date;
```

The absolute date when the session expires.

If a session is accessed prior to its expiry date, it will be extended based on the `maxAge` option as defined in by `SessionOptions.maxAge`. It is never extended more than once in a period defined by `SessionOptions.updateAge`.

If a session is accessed past its expiry date, it will be removed from the database to clean up inactive sessions.

#### sessionToken[](#sessiontoken)

```
sessionToken: string;
```

A randomly generated value that is used to look up the session in the database when using `"database"` `AuthConfig.strategy` option. This value is saved in a secure, HTTP-Only cookie on the client.

#### userId[](#userid-2)

```
userId: string;
```

Connects the active session to a user in the database

* * *

## AdapterUser[](#adapteruser)

A user represents a person who can sign in to the application. If a user does not exist yet, it will be created when they sign in for the first time, using the information (profile data) returned by the identity provider. A corresponding account is also created and linked to the user.

### Extends[](#extends-2)

-   [`User`](../solid-start#user-2)

### Properties[](#properties-3)

#### email[](#email)

```
email: string;
```

The user’s email address.

##### Overrides[](#overrides-3)

[`User`](../solid-start#user-2).[`email`](../solid-start#email-1)

#### emailVerified[](#emailverified)

```
emailVerified: 
  | null
  | Date;
```

Whether the user has verified their email address via an [Email provider](https://authjs.dev/getting-started/authentication/email). It is `null` if the user has not signed in with the Email provider yet, or the date of the first successful signin.

#### id[](#id)

```
id: string;
```

A unique identifier for the user.

##### Overrides[](#overrides-4)

[`User`](../solid-start#user-2).[`id`](../solid-start#id-1)

#### image?[](#image)

```
optional image: null | string;
```

##### Inherited from[](#inherited-from-17)

[`User`](../solid-start#user-2).[`image`](../solid-start#image)

#### name?[](#name)

```
optional name: null | string;
```

##### Inherited from[](#inherited-from-18)

[`User`](../solid-start#user-2).[`name`](../solid-start#name-1)

* * *

## VerificationToken[](#verificationtoken)

A verification token is a temporary token that is used to sign in a user via their email address. It is created when a user signs in with an [Email provider](https://authjs.dev/getting-started/authentication/email). When the user clicks the link in the email, the token and email is sent back to the server where it is hashed and compared to the value in the database. If the tokens and emails match, and the token hasn’t expired yet, the user is signed in. The token is then deleted from the database.

### Properties[](#properties-4)

#### expires[](#expires-1)

```
expires: Date;
```

The absolute date when the token expires.

#### identifier[](#identifier)

```
identifier: string;
```

The user’s email address.

#### token[](#token)

```
token: string;
```

A [hashed](https://en.wikipedia.org/wiki/Hash_function) token, using the `AuthConfig.secret` value.

* * *

## AdapterAccountType[](#adapteraccounttype)

```
type AdapterAccountType = Extract<ProviderType, "oauth" | "oidc" | "email" | "webauthn">;
```

The type of account.

* * *

## isDate()[](#isdate)

```
function isDate(value): value is string
```

Determines if a given value can be parsed into `Date`

### Parameters[](#parameters-19)

Parameter

Type

`value`

`unknown`

### Returns[](#returns-19)

`value is string`

[@auth/solid-start](/reference/solid-start "@auth/solid-start")[client](/reference/solid-start/client "client")
