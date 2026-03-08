[API reference](/reference/overview "API reference")@auth/surrealdb-adapter

# @auth/surrealdb-adapter

Official [SurrealDB](https://www.surrealdb.com) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/surrealdb.svg)](https://www.surrealdb.com)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/surrealdb-adapter surrealdb.js
```

```
pnpm add @auth/surrealdb-adapter surrealdb.js
```

```
yarn add @auth/surrealdb-adapter surrealdb.js
```

```
bun add @auth/surrealdb-adapter surrealdb.js
```

## AccountDoc<T>[](#accountdoct)

```
type AccountDoc<T> = Document<RecordId<"account">> & {
  access_token: string;
  expires_at: number;
  provider: string;
  providerAccountId: string;
  refresh_token: string;
  type: AdapterAccountType;
  userId: T;
};
```

### Type declaration[](#type-declaration)

#### access\_token?[](#access_token)

```
optional access_token: string;
```

#### expires\_at?[](#expires_at)

```
optional expires_at: number;
```

#### provider[](#provider)

```
provider: string;
```

#### providerAccountId[](#provideraccountid)

```
providerAccountId: string;
```

#### refresh\_token?[](#refresh_token)

```
optional refresh_token: string;
```

#### type[](#type)

```
type: AdapterAccountType;
```

#### userId[](#userid)

```
userId: T;
```

### Type Parameters[](#type-parameters)

Type Parameter

Default type

`T`

`RecordId`<`"user"`\>

* * *

## AuthenticatorDoc<T>[](#authenticatordoct)

```
type AuthenticatorDoc<T> = Document<RecordId<"authenticator">> & Omit<AdapterAuthenticator, "userId"> & {
  counter: number;
  userId: T;
};
```

### Type declaration[](#type-declaration-1)

#### counter[](#counter)

```
counter: number;
```

#### userId[](#userid-1)

```
userId: T;
```

### Type Parameters[](#type-parameters-1)

Type Parameter

Default type

`T`

`RecordId`<`"user"`\>

* * *

## SessionDoc<T>[](#sessiondoct)

```
type SessionDoc<T> = Document<RecordId<"session">> & {
  expires:   | string
     | Date;
  sessionToken: string;
  userId: T;
};
```

### Type declaration[](#type-declaration-2)

#### expires[](#expires)

```
expires: 
  | string
  | Date;
```

#### sessionToken[](#sessiontoken)

```
sessionToken: string;
```

#### userId[](#userid-2)

```
userId: T;
```

### Type Parameters[](#type-parameters-2)

Type Parameter

Default type

`T`

`RecordId`<`"user"`\>

* * *

## UserDoc[](#userdoc)

```
type UserDoc = Document<RecordId<"user">> & {
  email: string;
  emailVerified:   | string
     | Date;
};
```

### Type declaration[](#type-declaration-3)

#### email[](#email)

```
email: string;
```

#### emailVerified?[](#emailverified)

```
optional emailVerified: 
  | string
  | Date;
```

* * *

## VerificationTokenDoc[](#verificationtokendoc)

```
type VerificationTokenDoc = Document<RecordId<"verification_token">> & {
  expires: Date;
  identifier: string;
  token: string;
};
```

### Type declaration[](#type-declaration-4)

#### expires[](#expires-1)

```
expires: Date;
```

#### identifier[](#identifier)

```
identifier: string;
```

#### token[](#token)

```
token: string;
```

* * *

## SurrealDBAdapter()[](#surrealdbadapter)

```
function SurrealDBAdapter(client): Adapter
```

### Parameters[](#parameters)

Parameter

Type

`client`

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`Surreal`\>

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

[@auth/supabase-adapter](/reference/supabase-adapter "@auth/supabase-adapter")[@auth/typeorm-adapter](/reference/typeorm-adapter "@auth/typeorm-adapter")
