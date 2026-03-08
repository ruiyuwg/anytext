[API reference](/reference/overview "API reference")@auth/mikro-orm-adapter

# @auth/mikro-orm-adapter

Official [MikroORM](https://mikro-orm.io/docs/installation) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/mikro-orm.svg)](https://mikro-orm.io/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @mikro-orm/core @auth/mikro-orm-adapter
```

```
pnpm add @mikro-orm/core @auth/mikro-orm-adapter
```

```
yarn add @mikro-orm/core @auth/mikro-orm-adapter
```

```
bun add @mikro-orm/core @auth/mikro-orm-adapter
```

## MikroOrmAdapter()[](#mikroormadapter)

```
function MikroOrmAdapter<D>(ormOptions, options?): Adapter
```

### Type Parameters[](#type-parameters)

Type Parameter

Default type

`D` _extends_ `IDatabaseDriver`<`Connection`\>

`IDatabaseDriver`<`Connection`\>

### Parameters[](#parameters)

Parameter

Type

`ormOptions`

`Options`<`D`\>

`options`?

{ `entities`: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`lib/entities`](mikro-orm-adapter/lib/entities)\>; }

`options.entities`?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`lib/entities`](mikro-orm-adapter/lib/entities)\>

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

* * *

## defaultEntities[](#defaultentities)

Renames and re-exports [lib/entities](mikro-orm-adapter/lib/entities)

[@auth/kysely-adapter](/reference/kysely-adapter "@auth/kysely-adapter")[Entities](/reference/mikro-orm-adapter/lib/entities "Entities")
