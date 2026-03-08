[API reference](/reference/overview "API reference")@auth/d1-adapter

# @auth/d1-adapter

An official [Cloudflare D1](https://developers.cloudflare.com/d1/) adapter for Auth.js / NextAuth.js.

[![](/img/adapters/d1.svg)](https://developers.cloudflare.com/d1/)

## Warning[](#warning)

This adapter is not developed or maintained by Cloudflare and they haven’t declared the D1 api stable. The author will make an effort to keep this adapter up to date. The adapter is compatible with the D1 api as of March 22, 2023.

## Installation[](#installation)

npmpnpmyarnbun

```
npm install next-auth @auth/d1-adapter
```

```
pnpm add next-auth @auth/d1-adapter
```

```
yarn add next-auth @auth/d1-adapter
```

```
bun add next-auth @auth/d1-adapter
```

## D1Database[](#d1database)

```
type D1Database = WorkerDatabase | MiniflareD1Database;
```

* * *

## createRecord()[](#createrecord)

```
function createRecord<RecordType>(
   db, 
   CREATE_SQL, 
   bindings, 
   GET_SQL, 
getBindings): Promise<null | RecordType>
```

### Type Parameters[](#type-parameters)

Type Parameter

`RecordType`

### Parameters[](#parameters)

Parameter

Type

`db`

[`D1Database`](d1-adapter#d1database)

`CREATE_SQL`

`string`

`bindings`

`any`\[\]

`GET_SQL`

`string`

`getBindings`

`any`\[\]

### Returns[](#returns)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`null` | `RecordType`\>

* * *

## D1Adapter()[](#d1adapter)

```
function D1Adapter(db): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`db`

[`D1Database`](d1-adapter#d1database)

### Returns[](#returns-1)

[`Adapter`](core/adapters#adapter)

* * *

## deleteRecord()[](#deleterecord)

```
function deleteRecord(
   db, 
   SQL, 
bindings): Promise<void>
```

### Parameters[](#parameters-2)

Parameter

Type

`db`

[`D1Database`](d1-adapter#d1database)

`SQL`

`string`

`bindings`

`any`\[\]

### Returns[](#returns-2)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

* * *

## getRecord()[](#getrecord)

```
function getRecord<RecordType>(
   db, 
   SQL, 
bindings): Promise<null | RecordType>
```

### Type Parameters[](#type-parameters-1)

Type Parameter

`RecordType`

### Parameters[](#parameters-3)

Parameter

Type

`db`

[`D1Database`](d1-adapter#d1database)

`SQL`

`string`

`bindings`

`any`\[\]

### Returns[](#returns-3)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`null` | `RecordType`\>

* * *

## up()[](#up)

```
function up(db): Promise<void>
```

### Parameters[](#parameters-4)

Parameter

Type

`db`

[`D1Database`](d1-adapter#d1database)

### Returns[](#returns-4)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

* * *

## updateRecord()[](#updaterecord)

```
function updateRecord(
   db, 
   SQL, 
bindings): Promise<D1Result<unknown> | D1Result<unknown>>
```

### Parameters[](#parameters-5)

Parameter

Type

`db`

[`D1Database`](d1-adapter#d1database)

`SQL`

`string`

`bindings`

`any`\[\]

### Returns[](#returns-5)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`D1Result`<`unknown`\> | `D1Result`<`unknown`\>>

[@auth/azure-tables-adapter](/reference/azure-tables-adapter "@auth/azure-tables-adapter")[@auth/dgraph-adapter](/reference/dgraph-adapter "@auth/dgraph-adapter")
