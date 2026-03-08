[API reference](/reference/overview "API reference")@auth/edgedb-adapter

# @auth/edgedb-adapter

Official [Edge DB](https://www.edgedb.com/) adapter for Auth.js / NextAuth.js.

[![](/img/adapters/edgedb.svg)](https://www.edgedb.com/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install edgedb @auth/edgedb-adapter
npm install @edgedb/generate --save-dev
```

```
pnpm add edgedb @auth/edgedb-adapter
pnpm add @edgedb/generate --save-dev
```

```
yarn add edgedb @auth/edgedb-adapter
yarn add @edgedb/generate --dev
```

```
bun add edgedb @auth/edgedb-adapter
bun add @edgedb/generate --dev
```

## EdgeDBAdapter()[](#edgedbadapter)

```
function EdgeDBAdapter(client): Adapter
```

### Parameters[](#parameters)

Parameter

Type

`client`

`Client`

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

[@auth/dynamodb-adapter](/reference/dynamodb-adapter "@auth/dynamodb-adapter")[@auth/fauna-adapter](/reference/fauna-adapter "@auth/fauna-adapter")
