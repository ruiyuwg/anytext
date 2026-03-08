[API reference](/reference/overview "API reference")[@auth/drizzle-adapter](/reference/drizzle-adapter "@auth/drizzle-adapter")[lib](/reference/drizzle-adapter/lib/mysql "lib")Pg

# lib/pg

## DefaultPostgresAccountsTable[](#defaultpostgresaccountstable)

```
type DefaultPostgresAccountsTable = PgTableWithColumns<{
  columns: {
     access_token: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     expires_at: DefaultPostgresColumn<{
        columnType: "PgInteger";
        data: number;
        dataType: "number";
        notNull: boolean;
       }>;
     id_token: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     provider: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     providerAccountId: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     refresh_token: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     scope: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     session_state: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     token_type: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     type: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     userId: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText" | "PgUUID";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "pg";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultPostgresAuthenticatorTable[](#defaultpostgresauthenticatortable)

```
type DefaultPostgresAuthenticatorTable = PgTableWithColumns<{
  columns: {
     counter: DefaultPostgresColumn<{
        columnType: "PgInteger";
        data: number;
        dataType: "number";
        notNull: true;
       }>;
     credentialBackedUp: DefaultPostgresColumn<{
        columnType: "PgBoolean";
        data: boolean;
        dataType: "boolean";
        notNull: true;
       }>;
     credentialDeviceType: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     credentialID: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     credentialPublicKey: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     providerAccountId: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     transports: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: false;
       }>;
     userId: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText" | "PgUUID";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "pg";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultPostgresSchema[](#defaultpostgresschema)

```
type DefaultPostgresSchema = {
  accountsTable: DefaultPostgresAccountsTable;
  authenticatorsTable: DefaultPostgresAuthenticatorTable;
  sessionsTable: DefaultPostgresSessionsTable;
  usersTable: DefaultPostgresUsersTable;
  verificationTokensTable: DefaultPostgresVerificationTokenTable;
};
```

### Type declaration[](#type-declaration)

#### accountsTable[](#accountstable)

```
accountsTable: DefaultPostgresAccountsTable;
```

#### authenticatorsTable?[](#authenticatorstable)

```
optional authenticatorsTable: DefaultPostgresAuthenticatorTable;
```

#### sessionsTable?[](#sessionstable)

```
optional sessionsTable: DefaultPostgresSessionsTable;
```

#### usersTable[](#userstable)

```
usersTable: DefaultPostgresUsersTable;
```

#### verificationTokensTable?[](#verificationtokenstable)

```
optional verificationTokensTable: DefaultPostgresVerificationTokenTable;
```

* * *

## DefaultPostgresSessionsTable[](#defaultpostgressessionstable)

```
type DefaultPostgresSessionsTable = PgTableWithColumns<{
  columns: {
     expires: DefaultPostgresColumn<{
        columnType: "PgTimestamp";
        data: Date;
        dataType: "date";
        notNull: true;
       }>;
     sessionToken: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        isPrimaryKey: true;
        notNull: true;
       }>;
     userId: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText" | "PgUUID";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "pg";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultPostgresUsersTable[](#defaultpostgresuserstable)

```
type DefaultPostgresUsersTable = PgTableWithColumns<{
  columns: {
     email: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     emailVerified: DefaultPostgresColumn<{
        columnType: "PgTimestamp";
        data: Date;
        dataType: "date";
        notNull: boolean;
       }>;
     id: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText" | "PgUUID";
        data: string;
        dataType: "string";
        isPrimaryKey: true;
        notNull: true;
       }>;
     image: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     name: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
    };
  dialect: "pg";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultPostgresVerificationTokenTable[](#defaultpostgresverificationtokentable)

```
type DefaultPostgresVerificationTokenTable = PgTableWithColumns<{
  columns: {
     expires: DefaultPostgresColumn<{
        columnType: "PgTimestamp";
        data: Date;
        dataType: "date";
        notNull: true;
       }>;
     identifier: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     token: DefaultPostgresColumn<{
        columnType: "PgVarchar" | "PgText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "pg";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## defineTables()[](#definetables)

```
function defineTables(schema): Required<DefaultPostgresSchema>
```

### Parameters[](#parameters)

Parameter

Type

`schema`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`DefaultPostgresSchema`](pg#defaultpostgresschema)\>

### Returns[](#returns)

[`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)<[`DefaultPostgresSchema`](pg#defaultpostgresschema)\>

* * *

## PostgresDrizzleAdapter()[](#postgresdrizzleadapter)

```
function PostgresDrizzleAdapter(client, schema?): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`client`

`PgDatabase`<`PgQueryResultHKT`, `any`\>

`schema`?

[`DefaultPostgresSchema`](pg#defaultpostgresschema)

### Returns[](#returns-1)

[`Adapter`](../../core/adapters#adapter)

[Mysql](/reference/drizzle-adapter/lib/mysql "Mysql")[Sqlite](/reference/drizzle-adapter/lib/sqlite "Sqlite")
