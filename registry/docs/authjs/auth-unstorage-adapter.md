[API reference](/reference/overview "API reference")@auth/unstorage-adapter

# @auth/unstorage-adapter

Official [Unstorage](https://unstorage.unjs.io/) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/unstorage.svg)](https://unstorage.unjs.io/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install unstorage @auth/unstorage-adapter
```

```
pnpm add unstorage @auth/unstorage-adapter
```

```
yarn add unstorage @auth/unstorage-adapter
```

```
bun add unstorage @auth/unstorage-adapter
```

## UnstorageAdapterOptions[](#unstorageadapteroptions)

This is the interface of the Unstorage adapter options.

### Properties[](#properties)

#### accountByUserIdPrefix?[](#accountbyuseridprefix)

```
optional accountByUserIdPrefix: string;
```

The prefix for the `accountByUserId` key

#### accountKeyPrefix?[](#accountkeyprefix)

```
optional accountKeyPrefix: string;
```

The prefix for the `account` key

#### authenticatorKeyPrefix?[](#authenticatorkeyprefix)

```
optional authenticatorKeyPrefix: string;
```

The prefix for the `authenticator` key

#### authenticatorUserKeyPrefix?[](#authenticatoruserkeyprefix)

```
optional authenticatorUserKeyPrefix: string;
```

The prefix for the `authenticator-by-user-id` key

#### baseKeyPrefix?[](#basekeyprefix)

```
optional baseKeyPrefix: string;
```

The base prefix for your keys

#### emailKeyPrefix?[](#emailkeyprefix)

```
optional emailKeyPrefix: string;
```

The prefix for the `emailKey` key

#### sessionByUserIdKeyPrefix?[](#sessionbyuseridkeyprefix)

```
optional sessionByUserIdKeyPrefix: string;
```

The prefix for the `sessionByUserId` key

#### sessionKeyPrefix?[](#sessionkeyprefix)

```
optional sessionKeyPrefix: string;
```

The prefix for the `sessionKey` key

#### useItemRaw?[](#useitemraw)

```
optional useItemRaw: boolean;
```

Use `getItemRaw/setItemRaw` instead of `getItem/setItem`.

This is an experimental feature. Please check [unjs/unstorage#142](https://github.com/unjs/unstorage/issues/142) for more information.

#### userKeyPrefix?[](#userkeyprefix)

```
optional userKeyPrefix: string;
```

The prefix for the `user` key

#### verificationTokenKeyPrefix?[](#verificationtokenkeyprefix)

```
optional verificationTokenKeyPrefix: string;
```

The prefix for the `verificationToken` key

* * *

## defaultOptions[](#defaultoptions)

```
const defaultOptions: {
  accountByUserIdPrefix: string;
  accountKeyPrefix: string;
  authenticatorKeyPrefix: string;
  authenticatorUserKeyPrefix: string;
  baseKeyPrefix: string;
  emailKeyPrefix: string;
  sessionByUserIdKeyPrefix: string;
  sessionKeyPrefix: string;
  useItemRaw: boolean;
  userKeyPrefix: string;
  verificationTokenKeyPrefix: string;
};
```

### Type declaration[](#type-declaration)

#### accountByUserIdPrefix[](#accountbyuseridprefix-1)

```
accountByUserIdPrefix: string = "user:account:by-user-id:";
```

#### accountKeyPrefix[](#accountkeyprefix-1)

```
accountKeyPrefix: string = "user:account:";
```

#### authenticatorKeyPrefix[](#authenticatorkeyprefix-1)

```
authenticatorKeyPrefix: string = "authenticator:";
```

#### authenticatorUserKeyPrefix[](#authenticatoruserkeyprefix-1)

```
authenticatorUserKeyPrefix: string = "authenticator:by-user-id:";
```

#### baseKeyPrefix[](#basekeyprefix-1)

```
baseKeyPrefix: string = "";
```

#### emailKeyPrefix[](#emailkeyprefix-1)

```
emailKeyPrefix: string = "user:email:";
```

#### sessionByUserIdKeyPrefix[](#sessionbyuseridkeyprefix-1)

```
sessionByUserIdKeyPrefix: string = "user:session:by-user-id:";
```

#### sessionKeyPrefix[](#sessionkeyprefix-1)

```
sessionKeyPrefix: string = "user:session:";
```

#### useItemRaw[](#useitemraw-1)

```
useItemRaw: boolean = false;
```

#### userKeyPrefix[](#userkeyprefix-1)

```
userKeyPrefix: string = "user:";
```

#### verificationTokenKeyPrefix[](#verificationtokenkeyprefix-1)

```
verificationTokenKeyPrefix: string = "user:token:";
```

* * *

## hydrateDates()[](#hydratedates)

```
function hydrateDates(json): any
```

### Parameters[](#parameters)

Parameter

Type

`json`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Returns[](#returns)

`any`

* * *

## UnstorageAdapter()[](#unstorageadapter)

```
function UnstorageAdapter(storage, options): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`storage`

`Storage`

`options`

[`UnstorageAdapterOptions`](unstorage-adapter#unstorageadapteroptions)

### Returns[](#returns-1)

[`Adapter`](core/adapters#adapter)

[utils](/reference/typeorm-adapter/utils "utils")[@auth/upstash-redis-adapter](/reference/upstash-redis-adapter "@auth/upstash-redis-adapter")
