[API reference](/reference/overview "API reference")@auth/supabase-adapter

# @auth/supabase-adapter

Official [Supabase](https://supabase.com/docs) adapter for Auth.js / NextAuth.js.

[![](https://authjs.dev/img/adapters/supabase.svg)](https://supabase.com/)

## Installation[](#installation)

npmpnpmyarnbun

```
npm install @supabase/supabase-js @auth/supabase-adapter
```

```
pnpm add @supabase/supabase-js @auth/supabase-adapter
```

```
yarn add @supabase/supabase-js @auth/supabase-adapter
```

```
bun add @supabase/supabase-js @auth/supabase-adapter
```

## SupabaseAdapterOptions[](#supabaseadapteroptions)

This is the interface of the Supabase adapter options.

### Properties[](#properties)

#### secret[](#secret)

```
secret: string;
```

The secret to grant access to the database

#### url[](#url)

```
url: string;
```

The URL of your Supabase database

* * *

## format()[](#format)

```
function format<T>(obj): T
```

### Type Parameters[](#type-parameters)

Type Parameter

`T`

### Parameters[](#parameters)

Parameter

Type

`obj`

[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)<`string`, `any`\>

### Returns[](#returns)

`T`

* * *

## SupabaseAdapter()[](#supabaseadapter)

```
function SupabaseAdapter(options): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`options`

[`SupabaseAdapterOptions`](supabase-adapter#supabaseadapteroptions)

### Returns[](#returns-1)

[`Adapter`](core/adapters#adapter)

[models](/reference/sequelize-adapter/models "models")[@auth/surrealdb-adapter](/reference/surrealdb-adapter "@auth/surrealdb-adapter")
