# Supabase

Supabase is an open-source Firebase alternative that provides a suite of tools for building applications. At the core, it is a managed PostgreSQL database vendor. They provide a CLI library called `supabase` that's at the heart of their ecosystem. It manages your database, migrates it and can generate TypeScript types from it. They also provide a JavaScript client library called `@supabase/supabase-js` that wraps a PostgREST API, and is pretty limited - doesn't even allow raw SQL. This is where Kysely comes in.

We provide a bridge library called `kysely-supabase` that allows you to translate `supabase`'s generated TypeScript types into types compatible with Kysely.

## Prerequisites[​](#prerequisites "Direct link to Prerequisites")

1. `supabase` CLI installed and a Supabase project set up.

2. `kysely` installed.

3. A PostgreSQL driver installed - e.g. `pg` or `postgres`. The latter requires `kysely-postgres-js` to be installed as well.

## Installation[​](#installation "Direct link to Installation")

```
npm i -D kysely-supabase
```

## Usage[​](#usage "Direct link to Usage")

### Generate TypeScript types using `supabase` CLI[​](#generate-typescript-types-using-supabase-cli "Direct link to generate-typescript-types-using-supabase-cli")

```
npx supabase gen types typescript --local > path/to/supabase/generated/types/file
```

### Translate Supabase types to Kysely types[​](#translate-supabase-types-to-kysely-types "Direct link to Translate Supabase types to Kysely types")

src/types.ts

```
import type { Database as SupabaseDatabase } from 'path/to/supabase/generated/types/file'
import type { KyselifyDatabase } from 'kysely-supabase'

export type Database = KyselifyDatabase<SupabaseDatabase>
```

### Pass translated types to Kysely constructor[​](#pass-translated-types-to-kysely-constructor "Direct link to Pass translated types to Kysely constructor")

src/db.ts

```
import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'
import type { Database } from './types'

export const db = new Kysely<Database>({
  //                         ^^^^^^^^
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: process.env.DATABASE_URL,
    }),
  }),
})
```

***

# Introduction

Kysely (pronounced “Key-Seh-Lee”) is a type-safe and autocompletion-friendly TypeScript SQL query builder. Inspired by Knex. Mainly developed for [node.js](https://nodejs.org/en/) but also runs on all other JavaScript environments like [deno](https://deno.land/) and [bun](https://bun.sh/).

[![](/demo-poster.webp)](/demo_optimized.webm)

Kysely makes sure you only refer to tables and columns that are visible to the part of the query you're writing. The result type only has the selected columns with correct types and aliases. As an added bonus you get autocompletion for all that stuff.

As shown in the gif above, through the pure magic of modern TypeScript, Kysely is even able to parse the alias given to `pet.name` and add the `pet_name` column to the result row type. Kysely is able to infer column names, aliases and types from selected subqueries, joined subqueries, `with` statements and pretty much anything you can think of.

Of course there are cases where things cannot be typed at compile time, and Kysely offers escape hatches for these situations. See the [sql template tag](https://kysely-org.github.io/kysely-apidoc/interfaces/Sql.html) and the [DynamicModule](https://kysely-org.github.io/kysely-apidoc/classes/DynamicModule.html#ref) for more info.

All API documentation is written in the typing files and you can simply hover over the module, class or method you're using to see it in your IDE. The same documentation is also hosted [here](https://kysely-org.github.io/kysely-apidoc/).

If you start using Kysely and can't find something you'd want to use, please open an issue or join our [Discord server](https://discord.gg/xyBJ3GwvAm).

## Looking for help?[​](#looking-for-help "Direct link to Looking for help?")

If you start using Kysely and can't find something you'd want to use, please [open an issue](https://github.com/kysely-org/kysely/issues) or [join our Discord server](https://discord.gg/xyBJ3GwvAm).

***
