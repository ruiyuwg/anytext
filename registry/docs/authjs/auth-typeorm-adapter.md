[API reference](/reference/overview "API reference")@auth/typeorm-adapter

# @auth/typeorm-adapter

Official [TypeORM](https://typeorm.io) adapter for Auth.js / NextAuth.js.

[![](/img/adapters/typeorm.svg)](https://typeorm.io)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @auth/typeorm-adapter typeorm
```

```
pnpm add @auth/typeorm-adapter typeorm
```

```
yarn add @auth/typeorm-adapter typeorm
```

```
bun add @auth/typeorm-adapter typeorm
```

## TypeORMAdapterOptions[](#typeormadapteroptions)

This is the interface for the TypeORM adapter options.

### Properties[](#properties)

#### entities?[](#entities)

```
optional entities: entities;
```

The [TypeORM entities](https://orkhan.gitbook.io/typeorm/docs/entities) to create the database tables from.

* * *

## Entities[](#entities-1)

```
type Entities = typeof entities;
```

* * *

## entities[](#entities-2)

```
const entities: entities = defaultEntities;
```

* * *

## getManager()[](#getmanager)

```
function getManager(options): Promise<EntityManager>
```

### Parameters[](#parameters)

Parameter

Type

`options`

{ `dataSource`: `string` | `DataSourceOptions`; `entities`: [`entities`](typeorm-adapter/entities); }

`options.dataSource`

`string` | `DataSourceOptions`

`options.entities`

[`entities`](typeorm-adapter/entities)

### Returns[](#returns)

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<`EntityManager`\>

* * *

## TypeORMAdapter()[](#typeormadapter)

```
function TypeORMAdapter(dataSource, options?): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`dataSource`

`string` | `DataSourceOptions`

`options`?

[`TypeORMAdapterOptions`](typeorm-adapter#typeormadapteroptions)

### Returns[](#returns-1)

[`Adapter`](core/adapters#adapter)

[@auth/surrealdb-adapter](/reference/surrealdb-adapter "@auth/surrealdb-adapter")[entities](/reference/typeorm-adapter/entities "entities")
