[API reference](/reference/overview "API reference")[@auth/drizzle-adapter](/reference/drizzle-adapter "@auth/drizzle-adapter")[lib](/reference/drizzle-adapter/lib/mysql "lib")Utils

# lib/utils

## DefaultSchema<Flavor>[](#defaultschemaflavor)

```
type DefaultSchema<Flavor> = Flavor extends AnyMySqlDatabase ? DefaultMySqlSchema : Flavor extends AnyPostgresDatabase ? DefaultPostgresSchema : Flavor extends AnySQLiteDatabase ? DefaultSQLiteSchema : never;
```

### Type Parameters[](#type-parameters)

Type Parameter

`Flavor` _extends_ [`SqlFlavorOptions`](utils#sqlflavoroptions)

* * *

## SqlFlavorOptions[](#sqlflavoroptions)

```
type SqlFlavorOptions = AnyPostgresDatabase | AnyMySqlDatabase | AnySQLiteDatabase;
```

[Sqlite](/reference/drizzle-adapter/lib/sqlite "Sqlite")[@auth/azure-tables-adapter](/reference/azure-tables-adapter "@auth/azure-tables-adapter")
