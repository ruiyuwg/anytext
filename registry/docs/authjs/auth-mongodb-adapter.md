[API reference](/reference/overview "API reference")@auth/mongodb-adapter

# @auth/mongodb-adapter

Official [MongoDB](https://www.mongodb.com) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/mongodb.svg)](https://www.mongodb.com)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/mongodb-adapter mongodb
```

```
pnpm add @auth/mongodb-adapter mongodb
```

```
yarn add @auth/mongodb-adapter mongodb
```

```
bun add @auth/mongodb-adapter mongodb
```

## MongoDBAdapterOptions[](#mongodbadapteroptions)

This is the interface of the MongoDB adapter options.

### Properties[](#properties)

#### collections?[](#collections)

```
optional collections: {
  Accounts: string;
  Sessions: string;
  Users: string;
  VerificationTokens: string;
};
```

The name of the [MongoDB collections](https://www.mongodb.com/docs/manual/core/databases-and-collections/#collections).

##### Accounts?[](#accounts)

```
optional Accounts: string;
```

##### Sessions?[](#sessions)

```
optional Sessions: string;
```

##### Users?[](#users)

```
optional Users: string;
```

##### VerificationTokens?[](#verificationtokens)

```
optional VerificationTokens: string;
```

#### databaseName?[](#databasename)

```
optional databaseName: string;
```

The name you want to give to the MongoDB database

#### onClose()?[](#onclose)

```
optional onClose: (client) => Promise<void>;
```

Callback function for managing the closing of the MongoDB client. This could be useful when `client` is provided as a function returning MongoClient. It allows for more customized management of database connections, addressing persistence, container reuse, and connection closure issues.

##### Parameters[](#parameters)

Parameter

Type

`client`

`MongoClient`

##### Returns[](#returns)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

* * *

## defaultCollections[](#defaultcollections)

```
const defaultCollections: Required<Required<MongoDBAdapterOptions>["collections"]>;
```

* * *

## format[](#format)

```
const format: {
  from: T;
  to: T & {
     _id: ObjectId;
    };
};
```

### Type declaration[](#type-declaration)

#### from()[](#from)

Takes a MongoDB object and returns a plain old JavaScript object

##### Type Parameters[](#type-parameters)

Type Parameter

Default type

`T`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>

##### Parameters[](#parameters-1)

Parameter

Type

`object`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns-1)

`T`

#### to()[](#to)

Takes a plain old JavaScript object and turns it into a MongoDB object

##### Type Parameters[](#type-parameters-1)

Type Parameter

Default type

`T`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>

##### Parameters[](#parameters-2)

Parameter

Type

`object`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns-2)

`T` & { `_id`: `ObjectId`; }

* * *

## MongoDBAdapter()[](#mongodbadapter)

```
function MongoDBAdapter(client, options): Adapter
```

### Parameters[](#parameters-3)

Parameter

Type

Description

`client`

| `MongoClient` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`MongoClient`\> | () => | `MongoClient` | [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`MongoClient`\>

The MongoDB client. The MongoDB team recommends providing a non-connected `MongoClient` instance to avoid unhandled promise rejections if the client fails to connect. Alternatively, you can also pass: - A promise that resolves to a connected `MongoClient` (not recommended). - A function, to handle more complex and custom connection strategies. Using a function combined with `options.onClose`, can be useful when you want a more advanced and customized connection strategy to address challenges related to persistence, container reuse, and connection closure.

`options`

[`MongoDBAdapterOptions`](mongodb-adapter#mongodbadapteroptions)

\-

### Returns[](#returns-3)

[`Adapter`](core/adapters#adapter)

[Entities](/reference/mikro-orm-adapter/lib/entities "Entities")[@auth/neo4j-adapter](/reference/neo4j-adapter "@auth/neo4j-adapter")
