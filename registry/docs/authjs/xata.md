[API reference](/reference/overview "API reference")[@auth/xata-adapter](/reference/xata-adapter "@auth/xata-adapter")xata

# xata

## XataClient[](#xataclient)

### Extends[](#extends)

-   `DatabaseClient`<[`DatabaseSchema`](xata#databaseschema)\>

### Indexable[](#indexable)

\[`key`: `string`\]: `any`

### Constructors[](#constructors)

#### new XataClient()[](#new-xataclient)

```
new XataClient(options?): XataClient
```

##### Parameters[](#parameters)

Parameter

Type

`options`?

`BaseClientOptions`

##### Returns[](#returns)

[`XataClient`](xata#xataclient)

##### Overrides[](#overrides)

`DatabaseClient<DatabaseSchema>.constructor`

### Methods[](#methods)

#### getConfig()[](#getconfig)

```
getConfig(): Promise<{
  branch: string;
  databaseURL: string;
}>
```

##### Returns[](#returns-1)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<{ `branch`: `string`; `databaseURL`: `string`; }>

##### Inherited from[](#inherited-from)

`DatabaseClient.getConfig`

* * *

## NextauthAccount[](#nextauthaccount)

### Properties[](#properties)

#### access\_token?[](#access_token)

```
optional access_token: null | string;
```

#### expires\_at?[](#expires_at)

```
optional expires_at: null | number;
```

#### id\_token?[](#id_token)

```
optional id_token: null | string;
```

#### provider?[](#provider)

```
optional provider: null | string;
```

#### providerAccountId?[](#provideraccountid)

```
optional providerAccountId: null | string;
```

#### refresh\_token?[](#refresh_token)

```
optional refresh_token: null | string;
```

#### scope?[](#scope)

```
optional scope: null | string;
```

#### session\_state?[](#session_state)

```
optional session_state: null | string;
```

#### token\_type?[](#token_type)

```
optional token_type: null | string;
```

#### type?[](#type)

```
optional type: null | string;
```

#### user?[](#user)

```
optional user: null | NextauthUserRecord;
```

* * *

## NextauthSession[](#nextauthsession)

### Properties[](#properties-1)

#### expires?[](#expires)

```
optional expires: 
  | null
  | Date;
```

#### sessionToken?[](#sessiontoken)

```
optional sessionToken: null | string;
```

#### user?[](#user-1)

```
optional user: null | NextauthUserRecord;
```

* * *

## NextauthUser[](#nextauthuser)

### Properties[](#properties-2)

#### email?[](#email)

```
optional email: null | string;
```

#### emailVerified?[](#emailverified)

```
optional emailVerified: 
  | null
  | Date;
```

#### image?[](#image)

```
optional image: null | string;
```

#### name?[](#name)

```
optional name: null | string;
```

* * *

## NextauthUsersAccount[](#nextauthusersaccount)

### Properties[](#properties-3)

#### account?[](#account)

```
optional account: null | NextauthAccountRecord;
```

#### user?[](#user-2)

```
optional user: null | NextauthUserRecord;
```

* * *

## NextauthUsersSession[](#nextauthuserssession)

### Properties[](#properties-4)

#### session?[](#session)

```
optional session: null | NextauthSessionRecord;
```

#### user?[](#user-3)

```
optional user: null | NextauthUserRecord;
```

* * *

## NextauthVerificationToken[](#nextauthverificationtoken)

### Properties[](#properties-5)

#### expires?[](#expires-1)

```
optional expires: 
  | null
  | Date;
```

#### identifier?[](#identifier)

```
optional identifier: null | string;
```

#### token?[](#token)

```
optional token: null | string;
```

* * *

## DatabaseSchema[](#databaseschema)

```
type DatabaseSchema = {
  nextauth_accounts: NextauthAccountRecord;
  nextauth_sessions: NextauthSessionRecord;
  nextauth_users: NextauthUserRecord;
  nextauth_users_accounts: NextauthUsersAccountRecord;
  nextauth_users_sessions: NextauthUsersSessionRecord;
  nextauth_verificationTokens: NextauthVerificationTokenRecord;
};
```

### Type declaration[](#type-declaration)

#### nextauth\_accounts[](#nextauth_accounts)

```
nextauth_accounts: NextauthAccountRecord;
```

#### nextauth\_sessions[](#nextauth_sessions)

```
nextauth_sessions: NextauthSessionRecord;
```

#### nextauth\_users[](#nextauth_users)

```
nextauth_users: NextauthUserRecord;
```

#### nextauth\_users\_accounts[](#nextauth_users_accounts)

```
nextauth_users_accounts: NextauthUsersAccountRecord;
```

#### nextauth\_users\_sessions[](#nextauth_users_sessions)

```
nextauth_users_sessions: NextauthUsersSessionRecord;
```

#### nextauth\_verificationTokens[](#nextauth_verificationtokens)

```
nextauth_verificationTokens: NextauthVerificationTokenRecord;
```

* * *

## NextauthAccountRecord[](#nextauthaccountrecord)

```
type NextauthAccountRecord = NextauthAccount & XataRecord;
```

* * *

## NextauthSessionRecord[](#nextauthsessionrecord)

```
type NextauthSessionRecord = NextauthSession & XataRecord;
```

* * *

## NextauthUserRecord[](#nextauthuserrecord)

```
type NextauthUserRecord = NextauthUser & XataRecord;
```

* * *

## NextauthUsersAccountRecord[](#nextauthusersaccountrecord)

```
type NextauthUsersAccountRecord = NextauthUsersAccount & XataRecord;
```

* * *

## NextauthUsersSessionRecord[](#nextauthuserssessionrecord)

```
type NextauthUsersSessionRecord = NextauthUsersSession & XataRecord;
```

* * *

## NextauthVerificationTokenRecord[](#nextauthverificationtokenrecord)

```
type NextauthVerificationTokenRecord = NextauthVerificationToken & XataRecord;
```

[@auth/xata-adapter](/reference/xata-adapter "@auth/xata-adapter")
