[API reference](/reference/overview "API reference")@auth/fauna-adapter

# @auth/fauna-adapter

Official [Fauna](https://docs.fauna.com/fauna/current/) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/fauna.svg)](https://fauna.com/features)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/fauna-adapter fauna
```

```
pnpm add @auth/fauna-adapter fauna
```

```
yarn add @auth/fauna-adapter fauna
```

```
bun add @auth/fauna-adapter fauna
```

## FaunaAccount[](#faunaaccount)

```
type FaunaAccount = ToFauna<AdapterAccount>;
```

* * *

## FaunaSession[](#faunasession)

```
type FaunaSession = ToFauna<AdapterSession>;
```

* * *

## FaunaUser[](#faunauser)

```
type FaunaUser = ToFauna<AdapterUser>;
```

* * *

## FaunaVerificationToken[](#faunaverificationtoken)

```
type FaunaVerificationToken = ToFauna<VerificationToken> & {
  id: string;
};
```

### Type declaration[](#type-declaration)

#### id[](#id)

```
id: string;
```

* * *

## format[](#format)

```
const format: {
  from: T;
  to: T;
};
```

### Type declaration[](#type-declaration-1)

#### from()[](#from)

Takes an object that’s coming from the database and converts it to plain JavaScript.

##### Type Parameters[](#type-parameters)

Type Parameter

`T`

##### Parameters[](#parameters)

Parameter

Type

`object`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns)

`T`

#### to()[](#to)

Takes an object that’s coming from Auth.js and prepares it to be written to the database.

##### Type Parameters[](#type-parameters-1)

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

## FaunaAdapter()[](#faunaadapter)

```
function FaunaAdapter(client, config?): Adapter
```

### Parameters[](#parameters-2)

Parameter

Type

`client`

`Client`

`config`?

`AdapterConfig`

### Returns[](#returns-2)

[`Adapter`](core/adapters#adapter)

[@auth/edgedb-adapter](/reference/edgedb-adapter "@auth/edgedb-adapter")[@auth/firebase-adapter](/reference/firebase-adapter "@auth/firebase-adapter")
