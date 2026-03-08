[API reference](/reference/overview "API reference")[@auth/mikro-orm-adapter](/reference/mikro-orm-adapter "@auth/mikro-orm-adapter")libEntities

# lib/entities

## Account[](#account)

### Implements[](#implements)

-   `RemoveIndex`<[`AdapterAccount`](../../core/adapters#adapteraccount)\>

### Constructors[](#constructors)

#### new Account()[](#new-account)

```
new Account(): Account
```

##### Returns[](#returns)

[`Account`](entities#account)

### Properties[](#properties)

#### access\_token?[](#access_token)

```
optional access_token: string;
```

##### Implementation of[](#implementation-of)

`RemoveIndex.access_token`

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

##### Implementation of[](#implementation-of-1)

`RemoveIndex.expires_at`

#### id[](#id)

```
id: string;
```

#### id\_token?[](#id_token)

```
optional id_token: string;
```

##### Implementation of[](#implementation-of-2)

`RemoveIndex.id_token`

#### provider[](#provider)

```
provider: string;
```

Provider’s id for this account. E.g. “google”. See the full list at [https://authjs.dev/reference/core/providers](https://authjs.dev/reference/core/providers)

##### Implementation of[](#implementation-of-3)

`RemoveIndex.provider`

#### providerAccountId[](#provideraccountid)

```
providerAccountId: string;
```

This value depends on the type of the provider being used to create the account.

-   oauth/oidc: The OAuth account’s id, returned from the `profile()` callback.
-   email: The user’s email address.
-   credentials: `id` returned from the `authorize()` callback

##### Implementation of[](#implementation-of-4)

`RemoveIndex.providerAccountId`

#### refresh\_token?[](#refresh_token)

```
optional refresh_token: string;
```

##### Implementation of[](#implementation-of-5)

`RemoveIndex.refresh_token`

#### scope?[](#scope)

```
optional scope: string;
```

##### Implementation of[](#implementation-of-6)

`RemoveIndex.scope`

#### session\_state?[](#session_state)

```
optional session_state: JsonValue;
```

#### token\_type?[](#token_type)

```
optional token_type: Lowercase<string>;
```

NOTE: because the value is case insensitive it is always returned lowercased

##### Implementation of[](#implementation-of-7)

`RemoveIndex.token_type`

#### type[](#type)

```
type: AdapterAccountType;
```

##### Implementation of[](#implementation-of-8)

`RemoveIndex.type`

#### user[](#user)

```
user: User;
```

#### userId[](#userid)

```
userId: string;
```

##### Implementation of[](#implementation-of-9)

`RemoveIndex.userId`

* * *

## Session[](#session)

A session holds information about a user’s current signin state.

### Implements[](#implements-1)

-   [`AdapterSession`](../../core/adapters#adaptersession)

### Constructors[](#constructors-1)

#### new Session()[](#new-session)

```
new Session(): Session
```

##### Returns[](#returns-1)

[`Session`](entities#session)

### Properties[](#properties-1)

#### expires[](#expires)

```
expires: Date;
```

The absolute date when the session expires.

If a session is accessed prior to its expiry date, it will be extended based on the `maxAge` option as defined in by `SessionOptions.maxAge`. It is never extended more than once in a period defined by `SessionOptions.updateAge`.

If a session is accessed past its expiry date, it will be removed from the database to clean up inactive sessions.

##### Implementation of[](#implementation-of-10)

[`AdapterSession`](../../core/adapters#adaptersession).[`expires`](../../core/adapters#expires)

#### id[](#id-1)

```
id: string;
```

#### sessionToken[](#sessiontoken)

```
sessionToken: string;
```

A randomly generated value that is used to look up the session in the database when using `"database"` `AuthConfig.strategy` option. This value is saved in a secure, HTTP-Only cookie on the client.

##### Implementation of[](#implementation-of-11)

[`AdapterSession`](../../core/adapters#adaptersession).[`sessionToken`](../../core/adapters#sessiontoken)

#### user[](#user-1)

```
user: User;
```

#### userId[](#userid-1)

```
userId: string;
```

Connects the active session to a user in the database

##### Implementation of[](#implementation-of-12)

[`AdapterSession`](../../core/adapters#adaptersession).[`userId`](../../core/adapters#userid-2)

* * *

## User[](#user-2)

### Implements[](#implements-2)

-   `RemoveIndex`<[`AdapterUser`](../../core/adapters#adapteruser)\>

### Constructors[](#constructors-2)

#### new User()[](#new-user)

```
new User(): User
```

##### Returns[](#returns-2)

[`User`](entities#user-2)

### Properties[](#properties-2)

#### accounts[](#accounts)

```
accounts: Collection<Account, object>;
```

#### email[](#email)

```
email: string = "";
```

The user’s email address.

##### Implementation of[](#implementation-of-13)

`RemoveIndex.email`

#### emailVerified[](#emailverified)

```
emailVerified: 
  | null
  | Date = null;
```

Whether the user has verified their email address via an [Email provider](https://authjs.dev/getting-started/authentication/email). It is `null` if the user has not signed in with the Email provider yet, or the date of the first successful signin.

##### Implementation of[](#implementation-of-14)

`RemoveIndex.emailVerified`

#### id[](#id-2)

```
id: string;
```

A unique identifier for the user.

##### Implementation of[](#implementation-of-15)

`RemoveIndex.id`

#### image?[](#image)

```
optional image: null | string;
```

##### Implementation of[](#implementation-of-16)

`RemoveIndex.image`

#### name?[](#name)

```
optional name: null | string;
```

##### Implementation of[](#implementation-of-17)

`RemoveIndex.name`

#### sessions[](#sessions)

```
sessions: Collection<Session, object>;
```

* * *

## VerificationToken[](#verificationtoken)

A verification token is a temporary token that is used to sign in a user via their email address. It is created when a user signs in with an [Email provider](https://authjs.dev/getting-started/authentication/email). When the user clicks the link in the email, the token and email is sent back to the server where it is hashed and compared to the value in the database. If the tokens and emails match, and the token hasn’t expired yet, the user is signed in. The token is then deleted from the database.

### Implements[](#implements-3)

-   [`VerificationToken`](../../core/adapters#verificationtoken)

### Constructors[](#constructors-3)

#### new VerificationToken()[](#new-verificationtoken)

```
new VerificationToken(): VerificationToken
```

##### Returns[](#returns-3)

[`VerificationToken`](entities#verificationtoken)

### Properties[](#properties-3)

#### expires[](#expires-1)

```
expires: Date;
```

The absolute date when the token expires.

##### Implementation of[](#implementation-of-18)

[`VerificationToken`](../../core/adapters#verificationtoken).[`expires`](../../core/adapters#expires-1)

#### identifier[](#identifier)

```
identifier: string;
```

The user’s email address.

##### Implementation of[](#implementation-of-19)

[`VerificationToken`](../../core/adapters#verificationtoken).[`identifier`](../../core/adapters#identifier)

#### token[](#token)

```
token: string;
```

A [hashed](https://en.wikipedia.org/wiki/Hash_function) token, using the `AuthConfig.secret` value.

##### Implementation of[](#implementation-of-20)

[`VerificationToken`](../../core/adapters#verificationtoken).[`token`](../../core/adapters#token)

[@auth/mikro-orm-adapter](/reference/mikro-orm-adapter "@auth/mikro-orm-adapter")[@auth/mongodb-adapter](/reference/mongodb-adapter "@auth/mongodb-adapter")
