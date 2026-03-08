# Playground

[@wirekang](https://github.com/wirekang) has created a [playground for Kysely](https://kyse.link). You can use it to quickly test stuff out and for creating code examples for your issues, PRs and Discord messages.

```
import type {
  ColumnType,
  Generated,
  GeneratedAlways,
  Insertable,
  Kysely,
  Selectable,
  SqlBool,
  Updateable,
} from 'kysely'

export interface Database {
  audit: AuditTable
  person: PersonTable
  person_backup: PersonTable
  pet: PetTable
  toy: ToyTable
  wine: WineTable
  wine_stock_change: WineStockChangeTable
}

interface AuditTable {
  id: Generated<number>
  action: string
}

interface PersonTable {
  id: Generated<number>
  address: { city: string } | null
  age: number | null
  birthdate: ColumnType<Date | null, string | null | undefined, string | null>
  created_at: GeneratedAlways<Date>
  deleted_at: ColumnType<Date | null, string | null | undefined, string | null>
  experience: { role: string }[] | null
  first_name: string
  gender: 'male' | 'female' | 'other' | null
  has_pets: Generated<'Y' | 'N'>
  last_name: string | null
  middle_name: string | null
  nicknames: string[] | null
  nullable_column: string | null
  profile: {
    addresses: { city: string }[]
    website: { url: string }
  } | null
  updated_at: ColumnType<Date | null, string | null | undefined, string | null>
  marital_status: 'single' | 'married' | 'divorced' | 'widowed' | null
}

interface PetTable {
  id: Generated<number>
  created_at: GeneratedAlways<Date>
  is_favorite: Generated<SqlBool>
  name: string
  owner_id: number
  species: Species
}

interface ToyTable {
  id: Generated<number>
  name: string
  pet_id: number
  price: number
}

interface WineTable {
  id: Generated<number>
  name: string
  stock: number
}

interface WineStockChangeTable {
  id: Generated<number>
  stock_delta: number
  wine_name: string
}

export type Person = Selectable<PersonTable>
export type NewPerson = Insertable<PersonTable>
export type PersonUpdate = Updateable<PersonTable>
export type Pet = Selectable<PetTable>
export type NewPet = Insertable<PetTable>
export type PetUpdate = Updateable<PetTable>
export type Species = 'dog' | 'cat' | 'hamster'

declare global {
  // @ts-ignore
  export class Buffer {
    static isBuffer(obj: unknown): obj is { length: number }
    static compare(a: Buffer, b: Buffer): number
  }
  export const db: Kysely<Database>
  export function functionThatExpectsPersonWithNonNullValue(
    person: Person & { nullable_column: string },
  ): void
}


const person = await db
.selectFrom('person')
.select(['id', 'first_name'])
.where('id', '=', 1)
.executeTakeFirst()
```

## Codesandbox[​](#codesandbox "Direct link to Codesandbox")

We also have a minimal [code sandbox example](https://codesandbox.io/s/kysely-demo-9l099t?file=/src/index.tsx:0-36).

***

# Plugin system

Plugins are classes that implement [KyselyPlugin](https://kysely-org.github.io/kysely-apidoc/interfaces/KyselyPlugin.html). Plugins are then added to the `Kysely` instance as follows:

```
const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    database: 'kysely_test',
    host: 'localhost',
  }),
  plugins: [new CamelCasePlugin()],
})
```

## Built-in plugins[​](#built-in-plugins "Direct link to Built-in plugins")

### Camel case plugin[​](#camel-case-plugin "Direct link to Camel case plugin")

A plugin that converts snake\_case identifiers in the database into camelCase in the JavaScript side. [Learn more](https://kysely-org.github.io/kysely-apidoc/classes/CamelCasePlugin.html).

### Deduplicate joins plugin[​](#deduplicate-joins-plugin "Direct link to Deduplicate joins plugin")

A plugin that removes duplicate joins from queries. You can read more about it in the [examples](https://kysely.dev/docs/recipes/deduplicate-joins.md) section or check the [API docs](https://kysely-org.github.io/kysely-apidoc/classes/DeduplicateJoinsPlugin.html).

### Handle `in ()` and `not in ()` plugin[​](#handle-in--and-not-in--plugin "Direct link to handle-in--and-not-in--plugin")

A plugin that allows handling `in ()` and `not in ()` with a chosen strategy. [Learn more](https://kysely-org.github.io/kysely-apidoc/classes/HandleEmptyInListsPlugin.html).

***
