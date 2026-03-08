[API reference](/reference/overview "API reference")[@auth/drizzle-adapter](/reference/drizzle-adapter "@auth/drizzle-adapter")libMysql

# lib/mysql

## DefaultMySqlAccountsTable[](#defaultmysqlaccountstable)

```
type DefaultMySqlAccountsTable = MySqlTableWithColumns<{
  columns: {
     access_token: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        driverParam: string | number;
        notNull: boolean;
       }>;
     expires_at: DefaultMyqlColumn<{
        columnType: "MySqlInt";
        data: number;
        dataType: "number";
        notNull: boolean;
       }>;
     id_token: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     provider: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     providerAccountId: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     refresh_token: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     scope: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     session_state: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     token_type: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     type: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     userId: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "mysql";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultMySqlAuthenticatorTable[](#defaultmysqlauthenticatortable)

```
type DefaultMySqlAuthenticatorTable = MySqlTableWithColumns<{
  columns: {
     counter: DefaultMyqlColumn<{
        columnType: "MySqlInt";
        data: number;
        dataType: "number";
        notNull: true;
       }>;
     credentialBackedUp: DefaultMyqlColumn<{
        columnType: "MySqlBoolean";
        data: boolean;
        dataType: "boolean";
        notNull: true;
       }>;
     credentialDeviceType: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     credentialID: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     credentialPublicKey: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     providerAccountId: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     transports: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: false;
       }>;
     userId: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "mysql";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultMySqlSchema[](#defaultmysqlschema)

```
type DefaultMySqlSchema = {
  accountsTable: DefaultMySqlAccountsTable;
  authenticatorsTable: DefaultMySqlAuthenticatorTable;
  sessionsTable: DefaultMySqlSessionsTable;
  usersTable: DefaultMySqlUsersTable;
  verificationTokensTable: DefaultMySqlVerificationTokenTable;
};
```

### Type declaration[](#type-declaration)

#### accountsTable[](#accountstable)

```
accountsTable: DefaultMySqlAccountsTable;
```

#### authenticatorsTable?[](#authenticatorstable)

```
optional authenticatorsTable: DefaultMySqlAuthenticatorTable;
```

#### sessionsTable?[](#sessionstable)

```
optional sessionsTable: DefaultMySqlSessionsTable;
```

#### usersTable[](#userstable)

```
usersTable: DefaultMySqlUsersTable;
```

#### verificationTokensTable?[](#verificationtokenstable)

```
optional verificationTokensTable: DefaultMySqlVerificationTokenTable;
```

* * *

## DefaultMySqlSessionsTable[](#defaultmysqlsessionstable)

```
type DefaultMySqlSessionsTable = MySqlTableWithColumns<{
  columns: {
     expires: DefaultMyqlColumn<{
        columnType: "MySqlTimestamp";
        data: Date;
        dataType: "date";
        notNull: true;
       }>;
     sessionToken: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        isPrimaryKey: true;
        notNull: true;
       }>;
     userId: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "mysql";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultMySqlUsersTable[](#defaultmysqluserstable)

```
type DefaultMySqlUsersTable = MySqlTableWithColumns<{
  columns: {
     email: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     emailVerified: DefaultMyqlColumn<{
        columnType: "MySqlTimestamp";
        data: Date;
        dataType: "date";
        notNull: boolean;
       }>;
     id: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        isPrimaryKey: true;
        notNull: true;
       }>;
     image: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
     name: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: boolean;
       }>;
    };
  dialect: "mysql";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## DefaultMySqlVerificationTokenTable[](#defaultmysqlverificationtokentable)

```
type DefaultMySqlVerificationTokenTable = MySqlTableWithColumns<{
  columns: {
     expires: DefaultMyqlColumn<{
        columnType: "MySqlTimestamp";
        data: Date;
        dataType: "date";
        notNull: true;
       }>;
     identifier: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
     token: DefaultMyqlColumn<{
        columnType: "MySqlVarChar" | "MySqlText";
        data: string;
        dataType: "string";
        notNull: true;
       }>;
    };
  dialect: "mysql";
  name: string;
  schema: string | undefined;
}>;
```

* * *

## defineTables()[](#definetables)

```
function defineTables(schema): Required<DefaultMySqlSchema>
```

### Parameters[](#parameters)

Parameter

Type

`schema`

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)<[`DefaultMySqlSchema`](mysql#defaultmysqlschema)\>

### Returns[](#returns)

[`Required`](https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype)<[`DefaultMySqlSchema`](mysql#defaultmysqlschema)\>

* * *

## MySqlDrizzleAdapter()[](#mysqldrizzleadapter)

```
function MySqlDrizzleAdapter(client, schema?): Adapter
```

### Parameters[](#parameters-1)

Parameter

Type

`client`

`MySqlDatabase`<`MySqlQueryResultHKT`, `PreparedQueryHKTBase`, `any`\>

`schema`?

[`DefaultMySqlSchema`](mysql#defaultmysqlschema)

### Returns[](#returns-1)

[`Adapter`](../../core/adapters#adapter)

[@auth/drizzle-adapter](/reference/drizzle-adapter "@auth/drizzle-adapter")[Pg](/reference/drizzle-adapter/lib/pg "Pg")
