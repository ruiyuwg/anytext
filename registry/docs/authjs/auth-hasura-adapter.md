[API reference](/reference/overview "API reference")@auth/hasura-adapter

# @auth/hasura-adapter

Official [Hasura](https://hasura.io/) adapter for Auth.js / NextAuth.js.

[![](/img/adapters/hasura.svg)](https://hasura.io/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/hasura-adapter
```

```
pnpm add @auth/hasura-adapter
```

```
yarn add @auth/hasura-adapter
```

```
bun add @auth/hasura-adapter
```

## format[](#format)

```
const format: {
  from: B extends true ? T : null | T;
  to: T;
};
```

### Type declaration[](#type-declaration)

#### from()[](#from)

##### Type Parameters[](#type-parameters)

Type Parameter

Default type

`T`

\-

`B` _extends_ `boolean`

`false`

##### Parameters[](#parameters)

Parameter

Type

`object`?

| `null` | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

`throwIfNullish`?

`B`

##### Returns[](#returns)

`B` _extends_ `true` ? `T` : `null` | `T`

#### to()[](#to)

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

## HasuraAdapter()[](#hasuraadapter)

```
function HasuraAdapter(client): Adapter
```

### Parameters[](#parameters-2)

Parameter

Type

`client`

[`HasuraAdapterClient`](hasura-adapter/lib/client#hasuraadapterclient)

### Returns[](#returns-2)

[`Adapter`](core/adapters#adapter)

[@auth/firebase-adapter](/reference/firebase-adapter "@auth/firebase-adapter")[Client](/reference/hasura-adapter/lib/client "Client")
