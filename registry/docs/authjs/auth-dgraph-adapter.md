[API reference](/reference/overview "API reference")@auth/dgraph-adapter

# @auth/dgraph-adapter

Official [Dgraph](https://dgraph.io/docs) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/dgraph.svg)](https://dgraph.io/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install next-auth @auth/dgraph-adapter
```

```
pnpm add next-auth @auth/dgraph-adapter
```

```
yarn add next-auth @auth/dgraph-adapter
```

```
bun add next-auth @auth/dgraph-adapter
```

## DgraphAdapterOptions[](#dgraphadapteroptions)

This is the interface of the Dgraph adapter options.

### Properties[](#properties)

#### fragments?[](#fragments)

```
optional fragments: {
  Account: string;
  Session: string;
  User: string;
  VerificationToken: string;
};
```

The GraphQL [Fragments](https://dgraph.io/docs/query-language/fragments/) you can supply to the adapter to define how the shapes of the `user`, `account`, `session`, `verificationToken` entities look.

By default the adapter will uses the [default defined fragments](https://github.com/nextauthjs/next-auth/blob/main/packages/adapter-dgraph/src/lib/graphql/fragments.ts) , this config option allows to extend them.

##### Account?[](#account)

```
optional Account: string;
```

##### Session?[](#session)

```
optional Session: string;
```

##### User?[](#user)

```
optional User: string;
```

##### VerificationToken?[](#verificationtoken)

```
optional VerificationToken: string;
```

* * *

## format[](#format)

```
const format: {
  from: null | T;
};
```

### Type declaration[](#type-declaration)

#### from()[](#from)

##### Type Parameters[](#type-parameters)

Type Parameter

`T`

##### Parameters[](#parameters)

Parameter

Type

`object`?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns)

`null` | `T`

* * *

## DgraphAdapter()[](#dgraphadapter)

```
function DgraphAdapter(client, options?): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`client`

[`DgraphClientParams`](dgraph-adapter/lib/client#dgraphclientparams)

`options`?

[`DgraphAdapterOptions`](dgraph-adapter#dgraphadapteroptions)

### Returns[](#returns-1)

[`Adapter`](core/adapters#adapter)

* * *

## DgraphClientError[](#dgraphclienterror)

Re-exports [DgraphClientError](dgraph-adapter/lib/client#dgraphclienterror)

## DgraphClientParams[](#dgraphclientparams)

Re-exports [DgraphClientParams](dgraph-adapter/lib/client#dgraphclientparams)

[@auth/d1-adapter](/reference/d1-adapter "@auth/d1-adapter")[Client](/reference/dgraph-adapter/lib/client "Client")
