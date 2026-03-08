# Controlled transaction /w savepoints

A controlled transaction allows you to commit and rollback manually, execute savepoint commands, and queries in general.

In this example we start a transaction, insert a person, create a savepoint, try inserting a toy and a pet, and if an error is thrown, we rollback to the savepoint. Eventually we release the savepoint, insert an audit record and commit the transaction. If an error is thrown, we catch it and rollback the transaction.

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


const trx = await db.startTransaction().execute()

try {
  const jennifer = await trx
    .insertInto('person')
    .values({
      first_name: 'Jennifer',
      last_name: 'Aniston',
      age: 40,
    })
    .returning('id')
    .executeTakeFirstOrThrow()

  const trxAfterJennifer = await trx.savepoint('after_jennifer').execute()

  try {
    const catto = await trxAfterJennifer
      .insertInto('pet')
      .values({
        owner_id: jennifer.id,
        name: 'Catto',
        species: 'cat',
      })
      .returning('id')
      .executeTakeFirstOrThrow()

    await trxAfterJennifer
      .insertInto('toy')
      .values({ name: 'Bone', price: 1.99, pet_id: catto.id })
      .execute()
  } catch (error) {
    await trxAfterJennifer.rollbackToSavepoint('after_jennifer').execute()
  }

  await trxAfterJennifer.releaseSavepoint('after_jennifer').execute()

  await trx.insertInto('audit').values({ action: 'added Jennifer' }).execute()

  await trx.commit().execute()
} catch (error) {
  await trx.rollback().execute()
}
```

More examples

The API documentation is packed with examples. The API docs are hosted [here](https://kysely-org.github.io/kysely-apidoc/), but you can access the same documentation by hovering over functions/methods/classes in your IDE. The examples are always just one hover away!

For example, check out these sections:

- [transaction method](https://kysely-org.github.io/kysely-apidoc/classes/Kysely.html#transaction)

***
