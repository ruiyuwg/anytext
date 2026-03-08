# Simple inner join

Simple `inner join`s can be done by providing a table name and two columns to join:

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
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  // `select` needs to come after the call to `innerJoin` so
  // that you can select from the joined table.
  .select(['person.id', 'pet.name as pet_name'])
  .execute()
```

More examples

The API documentation is packed with examples. The API docs are hosted [here](https://kysely-org.github.io/kysely-apidoc/), but you can access the same documentation by hovering over functions/methods/classes in your IDE. The examples are always just one hover away!

For example, check out these sections:

- [innerJoin method](https://kysely-org.github.io/kysely-apidoc/interfaces/SelectQueryBuilder.html#innerJoin)
- [leftJoin method](https://kysely-org.github.io/kysely-apidoc/interfaces/SelectQueryBuilder.html#leftJoin)
- [rightJoin method](https://kysely-org.github.io/kysely-apidoc/interfaces/SelectQueryBuilder.html#rightJoin)
- [fullJoin method](https://kysely-org.github.io/kysely-apidoc/interfaces/SelectQueryBuilder.html#fullJoin)

***
