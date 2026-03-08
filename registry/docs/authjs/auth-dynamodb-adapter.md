[API reference](/reference/overview "API reference")@auth/dynamodb-adapter

# @auth/dynamodb-adapter

Official [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/dynamodb.png)](https://docs.aws.amazon.com/dynamodb/index.html)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install next-auth @auth/dynamodb-adapter
```

```
pnpm add next-auth @auth/dynamodb-adapter
```

```
yarn add next-auth @auth/dynamodb-adapter
```

```
bun add next-auth @auth/dynamodb-adapter
```

## DynamoDBAdapterOptions[](#dynamodbadapteroptions)

### Properties[](#properties)

#### indexName?[](#indexname)

```
optional indexName: string;
```

#### indexPartitionKey?[](#indexpartitionkey)

```
optional indexPartitionKey: string;
```

#### indexSortKey?[](#indexsortkey)

```
optional indexSortKey: string;
```

#### partitionKey?[](#partitionkey)

```
optional partitionKey: string;
```

#### sortKey?[](#sortkey)

```
optional sortKey: string;
```

#### tableName?[](#tablename)

```
optional tableName: string;
```

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

Takes a Dynamo object and returns a plain old JavaScript object

##### Type Parameters[](#type-parameters)

Type Parameter

Default type

`T`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>

##### Parameters[](#parameters)

Parameter

Type

`object`?

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns)

`null` | `T`

#### to()[](#to)

Takes a plain old JavaScript object and turns it into a DynamoDB object

##### Parameters[](#parameters-1)

Parameter

Type

`object`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

##### Returns[](#returns-1)

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `unknown`\>

* * *

## DynamoDBAdapter()[](#dynamodbadapter)

```
function DynamoDBAdapter(client, options?): Adapter
```

### Parameters[](#parameters-2)

Parameter

Type

`client`

`DynamoDBDocument`

`options`?

[`DynamoDBAdapterOptions`](dynamodb-adapter#dynamodbadapteroptions)

### Returns[](#returns-2)

[`Adapter`](core/adapters#adapter)

* * *

## generateUpdateExpression()[](#generateupdateexpression)

```
function generateUpdateExpression(object): {
  ExpressionAttributeNames: Record<string, string>;
  ExpressionAttributeValues: Record<string, unknown>;
  UpdateExpression: string;
}
```

### Parameters[](#parameters-3)

Parameter

Type

`object`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Returns[](#returns-3)

```
{
  ExpressionAttributeNames: Record<string, string>;
  ExpressionAttributeValues: Record<string, unknown>;
  UpdateExpression: string;
}
```

#### ExpressionAttributeNames[](#expressionattributenames)

```
ExpressionAttributeNames: Record<string, string>;
```

#### ExpressionAttributeValues[](#expressionattributevalues)

```
ExpressionAttributeValues: Record<string, unknown>;
```

#### UpdateExpression[](#updateexpression)

```
UpdateExpression: string;
```

[Fragments](/reference/dgraph-adapter/lib/graphql/fragments "Fragments")[@auth/edgedb-adapter](/reference/edgedb-adapter "@auth/edgedb-adapter")
