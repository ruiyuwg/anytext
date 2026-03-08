[API reference](/reference/overview "API reference")@auth/pg-adapter

# @auth/pg-adapter

An official [PostgreSQL](https://www.postgresql.org/) adapter for Auth.js / NextAuth.js.

[![](/img/adapters/pg.svg)](https://www.postgresql.org/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install next-auth @auth/pg-adapter pg
```

```
pnpm add next-auth @auth/pg-adapter pg
```

```
yarn add next-auth @auth/pg-adapter pg
```

```
bun add next-auth @auth/pg-adapter pg
```

## default()[](#default)

```
function default(client): Adapter
```

### Parameters[](#parameters)

Parameter

Type

`client`

`Pool`

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

* * *

## mapExpiresAt()[](#mapexpiresat)

```
function mapExpiresAt(account): any
```

### Parameters[](#parameters-1)

Parameter

Type

`account`

`any`

### Returns[](#returns-1)

`any`

[@auth/neon-adapter](/reference/neon-adapter "@auth/neon-adapter")[@auth/pouchdb-adapter](/reference/pouchdb-adapter "@auth/pouchdb-adapter")
