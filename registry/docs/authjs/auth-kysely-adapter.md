[API reference](/reference/overview "API reference")@auth/kysely-adapter

# @auth/kysely-adapter

Official [Kysely](https://kysely.dev/) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/kysely.svg)](https://kysely.dev/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/kysely-adapter kysely
```

```
pnpm add @auth/kysely-adapter kysely
```

```
yarn add @auth/kysely-adapter kysely
```

```
bun add @auth/kysely-adapter kysely
```

## KyselyAuth<DB, T>[](#kyselyauthdb-t)

Wrapper over the original `Kysely` class in order to validate the passed in database interface. A regular Kysely instance may also be used, but wrapping it ensures the database interface implements the fields that Auth.js requires. When used with `kysely-codegen`, the `Codegen` type can be passed as the second generic argument. The generated types will be used, and `KyselyAuth` will only verify that the correct fields exist.

### Extends[](#extends)

-   `Kysely`<`DB`\>

### Type Parameters[](#type-parameters)

Type Parameter

Default type

`DB` _extends_ `T`

\-

`T`

[`Database`](kysely-adapter#database)

* * *

## Database[](#database)

### Properties[](#properties)

#### Account[](#account)

```
Account: AdapterAccount;
```

#### Session[](#session)

```
Session: AdapterSession;
```

#### User[](#user)

```
User: AdapterUser;
```

#### VerificationToken[](#verificationtoken)

```
VerificationToken: VerificationToken;
```

* * *

## Codegen[](#codegen)

```
type Codegen = { [K in keyof Database]: { [J in keyof Database[K]]: unknown } };
```

* * *

## format[](#format)

```
const format: {
  from: T;
  to: T;
};
```

### Type declaration[](#type-declaration)

#### from()[](#from)

##### Type Parameters[](#type-parameters-1)

Type Parameter

`T`

##### Parameters[](#parameters)

Parameter

Type

`object`?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns)

`T`

#### to()[](#to)

##### Type Parameters[](#type-parameters-2)

Type Parameter

`T`

##### Parameters[](#parameters-1)

Parameter

Type

`object`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns-1)

`T`

* * *

## KyselyAdapter()[](#kyselyadapter)

```
function KyselyAdapter(db): Adapter
```

### Parameters[](#parameters-2)

Parameter

Type

`db`

`Kysely`<[`Database`](kysely-adapter#database)\>

### Returns[](#returns-2)

[`Adapter`](core/adapters#adapter)

[Client](/reference/hasura-adapter/lib/client "Client")[@auth/mikro-orm-adapter](/reference/mikro-orm-adapter "@auth/mikro-orm-adapter")
