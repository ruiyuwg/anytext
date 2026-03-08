[API reference](/reference/overview "API reference")[@auth/drizzle-adapter](/reference/drizzle-adapter "@auth/drizzle-adapter")[lib](/reference/drizzle-adapter/lib/mysql "lib")Sqlite

# lib/sqlite

## DefaultSQLiteAccountsTable[](#defaultsqliteaccountstable)

```
type DefaultSQLiteAccountsTable = SQLiteTableWithColumns<{
  columns: {
     access_token: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     expires_at: DefaultSQLiteColumn<{
        columnType: "SQLiteInteger";
        data: number;
        dataType: "number";
        notNull: boolean;
       }>;
     id_token: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     provider: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     providerAccountId: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     refresh_token: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     scope: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     session_state: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     token_type: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     type: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     userId: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "sqlite";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultSQLiteAuthenticatorTable[](#defaultsqliteauthenticatortable)

```
type DefaultSQLiteAuthenticatorTable = SQLiteTableWithColumns<{
  columns: {
     counter: DefaultSQLiteColumn<{
        columnType: "SQLiteInteger";
        data: number;
        dataType: "number";
        notNull: true;
       }>;
     credentialBackedUp: DefaultSQLiteColumn<{
        columnType: "SQLiteBoolean";
        data: boolean;
        dataType: "boolean";
        notNull: true;
       }>;
     credentialDeviceType: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     credentialID: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     credentialPublicKey: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     providerAccountId: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     transports: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: false;
       }>;
     userId: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "sqlite";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultSQLiteSchema[](#defaultsqliteschema)

```
type DefaultSQLiteSchema = {
  accountsTable: DefaultSQLiteAccountsTable;
  authenticatorsTable: DefaultSQLiteAuthenticatorTable;
  sessionsTable: DefaultSQLiteSessionsTable;
  usersTable: DefaultSQLiteUsersTable;
  verificationTokensTable: DefaultSQLiteVerificationTokenTable;
};
```

### Type declaration[](#type-declaration)

#### accountsTable[](#accountstable)

```
accountsTable: DefaultSQLiteAccountsTable;
```

#### authenticatorsTable?[](#authenticatorstable)

```
optional authenticatorsTable: DefaultSQLiteAuthenticatorTable;
```

#### sessionsTable?[](#sessionstable)

```
optional sessionsTable: DefaultSQLiteSessionsTable;
```

#### usersTable[](#userstable)

```
usersTable: DefaultSQLiteUsersTable;
```

#### verificationTokensTable?[](#verificationtokenstable)

```
optional verificationTokensTable: DefaultSQLiteVerificationTokenTable;
```

* * *

## DefaultSQLiteSessionsTable[](#defaultsqlitesessionstable)

```
type DefaultSQLiteSessionsTable = SQLiteTableWithColumns<{
  columns: {
     expires: DefaultSQLiteColumn<{
        columnType: "SQLiteTimestamp";
        data: Date;
        dataType: "date";
        notNull: true;
       }>;
     sessionToken: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        isPrimaryKey: true;
        notNull: true;
       }>;
     userId: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "sqlite";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultSQLiteUsersTable[](#defaultsqliteuserstable)

```
type DefaultSQLiteUsersTable = SQLiteTableWithColumns<{
  columns: {
     email: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     emailVerified: DefaultSQLiteColumn<{
        columnType: "SQLiteTimestamp";
        data: Date;
        dataType: "date";
        notNull: boolean;
       }>;
     id: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        isPrimaryKey: true;
        notNull: true;
       }>;
     image: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     name: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
    };
  dialect: "sqlite";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultSQLiteVerificationTokenTable[](#defaultsqliteverificationtokentable)

```
type DefaultSQLiteVerificationTokenTable = SQLiteTableWithColumns<{
  columns: {
     expires: DefaultSQLiteColumn<{
        columnType: "SQLiteTimestamp";
        data: Date;
        dataType: "date";
        notNull: true;
       }>;
     identifier: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     token: DefaultSQLiteColumn<{
        columnType: "SQLiteText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "sqlite";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## defineTables()[](#definetables)

```
function defineTables(schema): Required<DefaultSQLiteSchema>
```

### Parameters[](#parameters)

Parameter

Type

`schema`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`DefaultSQLiteSchema`](sqlite#defaultsqliteschema)\>

### Returns[](#returns)

[`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)<[`DefaultSQLiteSchema`](sqlite#defaultsqliteschema)\>

* * *

## SQLiteDrizzleAdapter()[](#sqlitedrizzleadapter)

```
function SQLiteDrizzleAdapter(client, schema?): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`client`

`BaseSQLiteDatabase`<`"sync"` | `"async"`, `any`, `any`\>

`schema`?

[`DefaultSQLiteSchema`](sqlite#defaultsqliteschema)

### Returns[](#returns-1)

[`Adapter`](../../core/adapters#adapter)

[Pg](/reference/drizzle-adapter/lib/pg "Pg")[Utils](/reference/drizzle-adapter/lib/utils "Utils")
