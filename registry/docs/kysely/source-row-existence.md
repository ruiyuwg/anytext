# Source row existence

Update a target column based on the existence of a source row:

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


const result = await db
  .mergeInto('person as target')
  .using('pet as source', 'source.owner_id', 'target.id')
  .whenMatchedAnd('target.has_pets', '!=', 'Y')
  .thenUpdateSet({ has_pets: 'Y' })
  .whenNotMatchedBySourceAnd('target.has_pets', '=', 'Y')
  .thenUpdateSet({ has_pets: 'N' })
  .executeTakeFirstOrThrow()

console.log(result.numChangedRows)
```

More examples

The API documentation is packed with examples. The API docs are hosted [here](https://kysely-org.github.io/kysely-apidoc/), but you can access the same documentation by hovering over functions/methods/classes in your IDE. The examples are always just one hover away!

For example, check out these sections:

- [mergeInto method](https://kysely-org.github.io/kysely-apidoc/classes/Kysely.html#mergeInto)
- [using method](https://kysely-org.github.io/kysely-apidoc/classes/MergeQueryBuilder.html#using)
- [whenMatched method](https://kysely-org.github.io/kysely-apidoc/classes/WheneableMergeQueryBuilder.html#whenMatched)
- [thenUpdateSet method](https://kysely-org.github.io/kysely-apidoc/classes/MatchedThenableMergeQueryBuilder.html#thenUpdateSet)
- [thenDelete method](https://kysely-org.github.io/kysely-apidoc/classes/MatchedThenableMergeQueryBuilder.html#thenDelete)
- [thenDoNothing method](https://kysely-org.github.io/kysely-apidoc/classes/MatchedThenableMergeQueryBuilder.html#thenDoNothing)
- [whenNotMatched method](https://kysely-org.github.io/kysely-apidoc/classes/WheneableMergeQueryBuilder.html#whenNotMatched)
- [thenInsertValues method](https://kysely-org.github.io/kysely-apidoc/classes/NotMatchedThenableMergeQueryBuilder.html#thenInsertValues)

***
