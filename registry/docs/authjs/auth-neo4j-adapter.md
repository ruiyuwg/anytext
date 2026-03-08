[API reference](/reference/overview "API reference")@auth/neo4j-adapter

# @auth/neo4j-adapter

Official [Neo4j](https://neo4j.com/docs/) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/neo4j.svg)](https://neo4j.com/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/neo4j-adapter neo4j-driver
```

```
pnpm add @auth/neo4j-adapter neo4j-driver
```

```
yarn add @auth/neo4j-adapter neo4j-driver
```

```
bun add @auth/neo4j-adapter neo4j-driver
```

## Neo4jOptions[](#neo4joptions)

This is the interface of the Neo4j adapter options. The Neo4j adapter takes a [Neo4j session](https://neo4j.com/docs/bolt/current/driver-api/#driver-session) as its only argument.

### Extends[](#extends)

-   `Session`

### Methods[](#methods)

#### \_beginTransaction()[](#_begintransaction)

```
_beginTransaction(
   accessMode, 
   txConfig, 
   apiTelemetryConfig?): TransactionPromise
```

##### Parameters[](#parameters)

Parameter

Type

`accessMode`

`SessionMode`

`txConfig`

`TxConfig`

`apiTelemetryConfig`?

`NonAutoCommitApiTelemetryConfig`

##### Returns[](#returns)

`TransactionPromise`

##### Inherited from[](#inherited-from)

`Session._beginTransaction`

#### \_connectionHolderWithMode()[](#_connectionholderwithmode)

```
_connectionHolderWithMode(mode): ConnectionHolder
```

##### Parameters[](#parameters-1)

Parameter

Type

`mode`

`SessionMode`

##### Returns[](#returns-1)

`ConnectionHolder`

##### Inherited from[](#inherited-from-1)

`Session._connectionHolderWithMode`

#### \_run()[](#_run)

```
_run<T>(
   query, 
   parameters, 
   customRunner): Result
```

##### Type Parameters[](#type-parameters)

Type Parameter

Default type

`T` _extends_ `ResultStreamObserver`

`ResultStreamObserver`

##### Parameters[](#parameters-2)

Parameter

Type

`query`

`Query`

`parameters`

`any`

`customRunner`

`ConnectionConsumer`<`T`\>

##### Returns[](#returns-2)

`Result`

##### Inherited from[](#inherited-from-2)

`Session._run`

#### \_runTransaction()[](#_runtransaction)

```
_runTransaction<T>(
   accessMode, 
   transactionConfig, 
transactionWork): Promise<T>
```

##### Type Parameters[](#type-parameters-1)

Type Parameter

`T`

##### Parameters[](#parameters-3)

Parameter

Type

`accessMode`

`SessionMode`

`transactionConfig`

`TxConfig`

`transactionWork`

`TransactionWork`<`T`\>

##### Returns[](#returns-3)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`T`\>

##### Inherited from[](#inherited-from-3)

`Session._runTransaction`

#### beginTransaction()[](#begintransaction)

```
beginTransaction(transactionConfig?): TransactionPromise
```

Begin a new transaction in this session. A session can have at most one transaction running at a time, if you want to run multiple concurrent transactions, you should use multiple concurrent sessions.

While a transaction is open the session cannot be used to run queries outside the transaction.

##### Parameters[](#parameters-4)

Parameter

Type

Description

`transactionConfig`?

`TransactionConfig`

Configuration for the new auto-commit transaction.

##### Returns[](#returns-4)

`TransactionPromise`

New Transaction.

##### Inherited from[](#inherited-from-4)

`Session.beginTransaction`

#### close()[](#close)

```
close(): Promise<void>
```

Close this session.

##### Returns[](#returns-5)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`void`\>

##### Inherited from[](#inherited-from-5)

`Session.close`

#### executeRead()[](#executeread)

```
executeRead<T>(transactionWork, transactionConfig?): Promise<T>
```

Execute given unit of work in a READ transaction.

Transaction will automatically be committed unless the given function throws or returns a rejected promise. Some failures of the given function or the commit itself will be retried with exponential backoff with initial delay of 1 second and maximum retry time of 30 seconds. Maximum retry time is configurable via driver config’s `maxTransactionRetryTime` property in milliseconds.

##### Type Parameters[](#type-parameters-2)

Type Parameter

`T`

##### Parameters[](#parameters-5)

Parameter

Type

Description

`transactionWork`

`ManagedTransactionWork`<`T`\>

Callback that executes operations against a given Transaction.

`transactionConfig`?

`TransactionConfig`

Configuration for all transactions started to execute the unit of work.

##### Returns[](#returns-6)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`T`\>

Resolved promise as returned by the given function or rejected promise when given function or commit fails.

##### Inherited from[](#inherited-from-6)

`Session.executeRead`

#### executeWrite()[](#executewrite)

```
executeWrite<T>(transactionWork, transactionConfig?): Promise<T>
```

Execute given unit of work in a WRITE transaction.

Transaction will automatically be committed unless the given function throws or returns a rejected promise. Some failures of the given function or the commit itself will be retried with exponential backoff with initial delay of 1 second and maximum retry time of 30 seconds. Maximum retry time is configurable via driver config’s `maxTransactionRetryTime` property in milliseconds.

##### Type Parameters[](#type-parameters-3)

Type Parameter

`T`

##### Parameters[](#parameters-6)

Parameter

Type

Description

`transactionWork`

`ManagedTransactionWork`<`T`\>

Callback that executes operations against a given Transaction.

`transactionConfig`?

`TransactionConfig`

Configuration for all transactions started to execute the unit of work.

##### Returns[](#returns-7)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`T`\>

Resolved promise as returned by the given function or rejected promise when given function or commit fails.

##### Inherited from[](#inherited-from-7)

`Session.executeWrite`

#### lastBookmark()[](#lastbookmark)

```
lastBookmark(): string[]
```

Return the bookmarks received following the last completed Transaction.

##### Returns[](#returns-8)

`string`\[\]

A reference to a previous transaction.

##### Deprecated[](#deprecated)

This method will be removed in version 6.0. Please, use Session#lastBookmarks instead.

##### See[](#see)

[Session#lastBookmarks](neo4j-adapter#lastbookmarks)

##### Inherited from[](#inherited-from-8)

`Session.lastBookmark`

#### lastBookmarks()[](#lastbookmarks)

```
lastBookmarks(): string[]
```

Return the bookmarks received following the last completed Transaction.

##### Returns[](#returns-9)

`string`\[\]

A reference to a previous transaction.

##### Inherited from[](#inherited-from-9)

`Session.lastBookmarks`

#### readTransaction()[](#readtransaction)

```
readTransaction<T>(transactionWork, transactionConfig?): Promise<T>
```

Execute given unit of work in a READ transaction.

Transaction will automatically be committed unless the given function throws or returns a rejected promise. Some failures of the given function or the commit itself will be retried with exponential backoff with initial delay of 1 second and maximum retry time of 30 seconds. Maximum retry time is configurable via driver config’s `maxTransactionRetryTime` property in milliseconds.

##### Type Parameters[](#type-parameters-4)

Type Parameter

`T`

##### Parameters[](#parameters-7)

Parameter

Type

Description

`transactionWork`

`TransactionWork`<`T`\>

Callback that executes operations against a given Transaction.

`transactionConfig`?

`TransactionConfig`

Configuration for all transactions started to execute the unit of work.

##### Returns[](#returns-10)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`T`\>

Resolved promise as returned by the given function or rejected promise when given function or commit fails.

##### Deprecated[](#deprecated-1)

This method will be removed in version 6.0. Please, use Session#executeRead instead.

##### See[](#see-1)

[Session#executeRead](neo4j-adapter#executeread)

##### Inherited from[](#inherited-from-10)

`Session.readTransaction`

#### run()[](#run)

```
run<R>(
   query, 
   parameters?, 
transactionConfig?): Result<R>
```

Run Cypher query Could be called with a query object i.e.: `{text: "MATCH ...", parameters: {param: 1}}` or with the query and parameters as separate arguments.

##### Type Parameters[](#type-parameters-5)

Type Parameter

Default type

`R` _extends_ `RecordShape`

`RecordShape`

##### Parameters[](#parameters-8)

Parameter

Type

Description

`query`

`Query`

Cypher query to execute

`parameters`?

`any`

Map with parameters to use in query

`transactionConfig`?

`TransactionConfig`

Configuration for the new auto-commit transaction.

##### Returns[](#returns-11)

`Result`<`R`\>

New Result.

##### Inherited from[](#inherited-from-11)

`Session.run`

#### writeTransaction()[](#writetransaction)

```
writeTransaction<T>(transactionWork, transactionConfig?): Promise<T>
```

Execute given unit of work in a WRITE transaction.

Transaction will automatically be committed unless the given function throws or returns a rejected promise. Some failures of the given function or the commit itself will be retried with exponential backoff with initial delay of 1 second and maximum retry time of 30 seconds. Maximum retry time is configurable via driver config’s `maxTransactionRetryTime` property in milliseconds.

##### Type Parameters[](#type-parameters-6)

Type Parameter

`T`

##### Parameters[](#parameters-9)

Parameter

Type

Description

`transactionWork`

`TransactionWork`<`T`\>

Callback that executes operations against a given Transaction.

`transactionConfig`?

`TransactionConfig`

Configuration for all transactions started to execute the unit of work.

##### Returns[](#returns-12)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`T`\>

Resolved promise as returned by the given function or rejected promise when given function or commit fails.

##### Deprecated[](#deprecated-2)

This method will be removed in version 6.0. Please, use Session#executeWrite instead.

##### See[](#see-2)

[Session#executeWrite](neo4j-adapter#executewrite)

##### Inherited from[](#inherited-from-12)

`Session.writeTransaction`

* * *

## format[](#format)

```
const format: {
  from: null | T;
  to: Record<string, unknown>;
};
```

### Type declaration[](#type-declaration)

#### from()[](#from)

Takes a Neo4j object and returns a plain old JavaScript object

##### Type Parameters[](#type-parameters-7)

Type Parameter

Default type

`T`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>

##### Parameters[](#parameters-10)

Parameter

Type

`object`?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns-13)

`null` | `T`

#### to()[](#to)

Takes a plain old JavaScript object and turns it into a Neo4j compatible object

##### Parameters[](#parameters-11)

Parameter

Type

`object`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns-14)

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>

* * *

## Neo4jAdapter()[](#neo4jadapter)

```
function Neo4jAdapter(session): Adapter
```

### Parameters[](#parameters-12)

Parameter

Type

`session`

`Session`

### Returns[](#returns-15)

[`Adapter`](core/adapters#adapter)

[@auth/mongodb-adapter](/reference/mongodb-adapter "@auth/mongodb-adapter")[@auth/neon-adapter](/reference/neon-adapter "@auth/neon-adapter")
