[API reference](/reference/overview "API reference")@auth/azure-tables-adapter

# @auth/azure-tables-adapter

An official [Azure Table Storage](https://azure.microsoft.com/en-us/products/storage/tables) adapter for Auth.js / NextAuth.js.

[![](/img/adapters/azure-tables.svg)](https://azure.microsoft.com/en-us/products/storage/tables)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install next-auth @auth/azure-tables-adapter
```

```
pnpm add next-auth @auth/azure-tables-adapter
```

```
yarn add next-auth @auth/azure-tables-adapter
```

```
bun add next-auth @auth/azure-tables-adapter
```

## keys[](#keys)

```
const keys: {
  account: string;
  accountByUserId: string;
  session: string;
  sessionByUserId: string;
  user: string;
  userByEmail: string;
  verificationToken: string;
};
```

### Type declaration[](#type-declaration)

#### account[](#account)

```
account: string = "account";
```

#### accountByUserId[](#accountbyuserid)

```
accountByUserId: string = "accountByUserId";
```

#### session[](#session)

```
session: string = "session";
```

#### sessionByUserId[](#sessionbyuserid)

```
sessionByUserId: string = "sessionByUserId";
```

#### user[](#user)

```
user: string = "user";
```

#### userByEmail[](#userbyemail)

```
userByEmail: string = "userByEmail";
```

#### verificationToken[](#verificationtoken)

```
verificationToken: string = "verificationToken";
```

* * *

## TableStorageAdapter()[](#tablestorageadapter)

```
function TableStorageAdapter(client): Adapter
```

### Parameters[](#parameters)

Parameter

Type

`client`

`TableClient`

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

* * *

## withoutKeys()[](#withoutkeys)

```
function withoutKeys<T>(entity): T
```

### Type Parameters[](#type-parameters)

Type Parameter

`T`

### Parameters[](#parameters-1)

Parameter

Type

`entity`

`GetTableEntityResponse`<`TableEntityResult`<`T`\>>

### Returns[](#returns-1)

`T`

[Utils](/reference/drizzle-adapter/lib/utils "Utils")[@auth/d1-adapter](/reference/d1-adapter "@auth/d1-adapter")
