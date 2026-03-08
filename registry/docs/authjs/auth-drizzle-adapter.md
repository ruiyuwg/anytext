[API reference](/reference/overview "API reference")@auth/drizzle-adapter

# @auth/drizzle-adapter

Official [Drizzle ORM](https://orm.drizzle.team) adapter for Auth.js / NextAuth.js.

[![](/img/adapters/drizzle.svg)](https://orm.drizzle.team)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install drizzle-orm @auth/drizzle-adapter
npm install drizzle-kit --save-dev
```

```
pnpm add drizzle-orm @auth/drizzle-adapter
pnpm add drizzle-kit --save-dev
```

```
yarn add drizzle-orm @auth/drizzle-adapter
yarn add drizzle-kit --dev
```

```
bun add drizzle-orm @auth/drizzle-adapter
bun add drizzle-kit --dev
```

## DrizzleAdapter()[](#drizzleadapter)

```
function DrizzleAdapter<SqlFlavor>(db, schema?): Adapter
```

### Type Parameters[](#type-parameters)

Type Parameter

`SqlFlavor` _extends_ [`SqlFlavorOptions`](drizzle-adapter/lib/utils#sqlflavoroptions)

### Parameters[](#parameters)

Parameter

Type

`db`

`SqlFlavor`

`schema`?

[`DefaultSchema`](drizzle-adapter/lib/utils#defaultschemaflavor)<`SqlFlavor`\>

### Returns[](#returns)

[`Adapter`](core/adapters#adapter)

[@auth/prisma-adapter](/reference/prisma-adapter "@auth/prisma-adapter")[Mysql](/reference/drizzle-adapter/lib/mysql "Mysql")
