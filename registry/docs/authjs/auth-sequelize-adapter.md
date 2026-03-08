[API reference](/reference/overview "API reference")@auth/sequelize-adapter

# @auth/sequelize-adapter

Official [Sequilize](https://sequelize.org/docs/v6/getting-started/) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/sequelize.svg)](https://sequelize.org/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install next-auth @auth/sequelize-adapter sequelize
```

```
pnpm add next-auth @auth/sequelize-adapter sequelize
```

```
yarn add next-auth @auth/sequelize-adapter sequelize
```

```
bun add next-auth @auth/sequelize-adapter sequelize
```

## SequelizeAdapterOptions[](#sequelizeadapteroptions)

This is the interface of the Sequelize adapter options.

### Properties[](#properties)

#### models?[](#models)

```
optional models: Partial<{
  Account: ModelCtor<AccountInstance>;
  Session: ModelCtor<SessionInstance>;
  User: ModelCtor<UserInstance>;
  VerificationToken: ModelCtor<VerificationTokenInstance>;
}>;
```

The [Sequelize Models](https://sequelize.org/docs/v6/core-concepts/model-basics/) related to Auth.js that will be created in your database.

#### synchronize?[](#synchronize)

```
optional synchronize: boolean;
```

Whether to [synchronize](https://sequelize.org/docs/v6/core-concepts/model-basics/#model-synchronization) the models or not.

* * *

## default()[](#default)

```
function default(client, options?): Adapter
```

### Parameters[](#parameters)

Parameter

Type

`client`

`Sequelize`

`options`?

[`SequelizeAdapterOptions`](sequelize-adapter#sequelizeadapteroptions)

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

* * *

## models[](#models-1)

Re-exports [models](sequelize-adapter/models)

[@auth/pouchdb-adapter](/reference/pouchdb-adapter "@auth/pouchdb-adapter")[models](/reference/sequelize-adapter/models "models")
