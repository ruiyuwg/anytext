[API reference](/reference/overview "API reference")@auth/pouchdb-adapter

# @auth/pouchdb-adapter

Official [PouchDB](https://pouchdb.com/api.html) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/pouchdb.svg)](https://pouchdb.com)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install pouchdb pouchdb-find @auth/pouchdb-adapter
```

```
pnpm add pouchdb pouchdb-find @auth/pouchdb-adapter
```

```
yarn add pouchdb pouchdb-find @auth/pouchdb-adapter
```

```
bun add pouchdb pouchdb-find @auth/pouchdb-adapter
```

## PouchDBAdapterOptions[](#pouchdbadapteroptions)

Configure the adapter

### Properties[](#properties)

#### indexes?[](#indexes)

```
optional indexes: IndexConfig;
```

Override the default index names.

##### Default[](#default)

```
{
  userByEmail: "nextAuthUserByEmail",
  accountByProviderId: "nextAuthAccountByProviderId",
  sessionByToken: "nextAuthSessionByToken",
  verificationTokenByToken: "nextAuthVerificationRequestByToken"
}
```

#### pouchdb[](#pouchdb)

```
pouchdb: Database;
```

Your PouchDB instance, with the `pouchdb-find` plugin installed.

##### Example[](#example)

````
import PouchDB from "pouchdb"
 
PouchDB
  .plugin(require("pouchdb-adapter-leveldb")) // Or any other adapter
  .plugin(require("pouchdb-find")) // Don't forget the `pouchdb-find` plugin
 
const pouchdb = new PouchDB("auth_db", { adapter: "leveldb" })
 
#### prefixes?
 
```ts
optional prefixes: PrefixConfig;
````

Override the default prefix names.

##### Default[](#default-1)

```
{
  user: "USER",
  account: "ACCOUNT",
  session: "SESSION",
  verificationToken: "VERIFICATION-TOKEN"
}
```

* * *

## createIndexes()[](#createindexes)

```
function createIndexes(pouchdb, indexes?): Promise<void>
```

### Parameters[](#parameters)

Parameter

Type

`pouchdb`

`Database`

`indexes`?

`IndexConfig`

### Returns[](#returns)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

* * *

## PouchDBAdapter()[](#pouchdbadapter)

```
function PouchDBAdapter(options): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`options`

[`PouchDBAdapterOptions`](pouchdb-adapter#pouchdbadapteroptions)

### Returns[](#returns-1)

[`Adapter`](core/adapters#adapter)

[@auth/pg-adapter](/reference/pg-adapter "@auth/pg-adapter")[@auth/sequelize-adapter](/reference/sequelize-adapter "@auth/sequelize-adapter")
