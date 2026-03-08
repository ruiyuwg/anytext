[API reference](/reference/overview "API reference")@auth/upstash-redis-adapter

# @auth/upstash-redis-adapter

Official [Upstash Redis](https://docs.upstash.com/redis) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/upstash-redis.svg)](https://docs.upstash.com/redis)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @upstash/redis @auth/upstash-redis-adapter
```

```
pnpm add @upstash/redis @auth/upstash-redis-adapter
```

```
yarn add @upstash/redis @auth/upstash-redis-adapter
```

```
bun add @upstash/redis @auth/upstash-redis-adapter
```

## UpstashRedisAdapterOptions[](#upstashredisadapteroptions)

This is the interface of the Upstash Redis adapter options.

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
  baseKeyPrefix: string;
  emailKeyPrefix: string;
  sessionByUserIdKeyPrefix: string;
  sessionKeyPrefix: string;
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

`object`

### Returns[](#returns)

`any`

* * *

## UpstashRedisAdapter()[](#upstashredisadapter)

```
function UpstashRedisAdapter(client, options): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`client`

`Redis`

`options`

[`UpstashRedisAdapterOptions`](upstash-redis-adapter#upstashredisadapteroptions)

### Returns[](#returns-1)

[`Adapter`](core/adapters#adapter)

[@auth/unstorage-adapter](/reference/unstorage-adapter "@auth/unstorage-adapter")[@auth/xata-adapter](/reference/xata-adapter "@auth/xata-adapter")
