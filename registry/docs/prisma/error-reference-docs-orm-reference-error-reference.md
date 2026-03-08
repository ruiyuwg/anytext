# Error Reference (/docs/orm/reference/error-reference)

For more information about how to work with exceptions and error codes, see [Handling exceptions and errors](/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors).

Prisma Client error types \[#prisma-client-error-types]

Prisma Client throws different kinds of errors. The following lists the exception types, and their documented data fields:

PrismaClientKnownRequestError \[#prismaclientknownrequesterror]

Prisma Client throws a `PrismaClientKnownRequestError` exception if the query engine returns a known error related to the request - for example, a unique constraint violation.

| **Property**    | **Description**                                                                                                  |
| :-------------- | :--------------------------------------------------------------------------------------------------------------- |
| `code`          | A Prisma-specific [error code](#error-codes).                                                                    |
| `meta`          | Additional information about the error - for example, the field that caused the error: `{ target: [ 'email' ] }` |
| `message`       | Error message associated with [error code](#error-codes).                                                        |
| `clientVersion` | Version of Prisma Client (for example, `2.19.0`)                                                                 |

PrismaClientUnknownRequestError \[#prismaclientunknownrequesterror]

Prisma Client throws a `PrismaClientUnknownRequestError` exception if the query engine returns an error related to a request that does not have an error code.

| **Property**    | **Description**                                           |
| :-------------- | :-------------------------------------------------------- |
| `message`       | Error message associated with [error code](#error-codes). |
| `clientVersion` | Version of Prisma Client (for example, `2.19.0`)          |

PrismaClientRustPanicError \[#prismaclientrustpanicerror]

Prisma Client throws a `PrismaClientRustPanicError` exception if the underlying engine crashes and exits with a non-zero exit code. In this case, Prisma Client or the whole Node process must be restarted.

| **Property**    | **Description**                                           |
| :-------------- | :-------------------------------------------------------- |
| `message`       | Error message associated with [error code](#error-codes). |
| `clientVersion` | Version of Prisma Client (for example, `2.19.0`)          |

PrismaClientInitializationError \[#prismaclientinitializationerror]

Prisma Client throws a `PrismaClientInitializationError` exception if something goes wrong when the query engine is started and the connection to the database is created. This happens either:

- When `prisma.$connect()` is called OR
- When the first query is executed

Errors that can occur include:

- The provided credentials for the database are invalid
- There is no database server running under the provided hostname and port
- The port that the query engine HTTP server wants to bind to is already taken
- A missing or inaccessible environment variable
- The query engine binary for the current platform could not be found (`generator` block)

| **Property**    | **Description**                                           |
| :-------------- | :-------------------------------------------------------- |
| `errorCode`     | A Prisma-specific error code.                             |
| `message`       | Error message associated with [error code](#error-codes). |
| `clientVersion` | Version of Prisma Client (for example, `2.19.0`)          |

PrismaClientValidationError \[#prismaclientvalidationerror]

Prisma Client throws a `PrismaClientValidationError` exception if validation fails - for example:

- Missing field - for example, an empty `data: {}` property when creating a new record
- Incorrect field type provided (for example, setting a `Boolean` field to `"Hello, I like cheese and gold!"`)

| **Property**    | **Description**                                  |
| :-------------- | :----------------------------------------------- |
| `message`       | Error message.                                   |
| `clientVersion` | Version of Prisma Client (for example, `2.19.0`) |

Error codes \[#error-codes]

Common \[#common]

P1000 \[#p1000]

"Authentication failed against database server at `{database_host}`, the provided database credentials for `{database_user}` are not valid. Please make sure to provide valid database credentials for the database server at `{database_host}`."

P1001 \[#p1001]

"Can't reach database server at `{database_host}`:`{database_port}` Please make sure your database server is running at `{database_host}`:`{database_port}`."

P1002 \[#p1002]

"The database server at `{database_host}`:`{database_port}` was reached but timed out. Please try again. Please make sure your database server is running at `{database_host}`:`{database_port}`. "

P1003 \[#p1003]

"Database {database\_file\_name} does not exist at {database\_file\_path}"

"Database `{database_name}.{database_schema_name}` does not exist on the database server at `{database_host}:{database_port}`."

"Database `{database_name}` does not exist on the database server at `{database_host}:{database_port}`."

P1008 \[#p1008]

"Operations timed out after `{time}`"

P1009 \[#p1009]

"Database `{database_name}` already exists on the database server at `{database_host}:{database_port}`"

P1010 \[#p1010]

"User `{database_user}` was denied access on the database `{database_name}`"

P1011 \[#p1011]

"Error opening a TLS connection: {message}"

P1012 \[#p1012]

```
If you get error code P1012 after you upgrade Prisma ORM to version 4.0.0 or later, see the [version 4.0.0 upgrade guide](/guides/upgrade-prisma-orm/v4#update-schema). A schema that was valid before version 4.0.0 might be invalid in version 4.0.0 and later. The upgrade guide explains how to update your schema to make it valid.
```

"{full\_error}"

Possible P1012 error messages:

- "Argument `{}` is missing."
- "Function `{}` takes {} arguments, but received {}."
- "Argument `{}` is missing in attribute `@{}`."
- "Argument `{}` is missing in data source block `{}`."
- "Argument `{}` is missing in generator block `{}`."
- "Error parsing attribute `@{}`: {}"
- "Attribute `@{}` is defined twice."
- "The model with database name `{}` could not be defined because another model with this name exists: `{}`"
- "`{}` is a reserved scalar type name and can not be used."
- "The {} `{}` cannot be defined because a {} with that name already exists."
- "Key `{}` is already defined in {}."
- "Argument `{}` is already specified as unnamed argument."
- "Argument `{}` is already specified."
- "No such argument.""
- "Field `{}` is already defined on model `{}`."
- "Field `{}` in model `{}` can't be a list. The current connector does not support lists of primitive types."
- "The index name `{}` is declared multiple times. With the current connector index names have to be globally unique."
- "Value `{}` is already defined on enum `{}`."
- "Attribute not known: `@{}`."
- "Function not known: `{}`."
- "Datasource provider not known: `{}`."
- "shadowDatabaseUrl is the same as url for datasource `{}`. Please specify a different database as shadow database."
- "The preview feature `{}` is not known. Expected one of: {}"
- "`{}` is not a valid value for {}."
- "Type `{}` is neither a built-in type, nor refers to another model, custom type, or enum."
- "Type `{}` is not a built-in type."
- "Unexpected token. Expected one of: {}"
- "Environment variable not found: {}."
- "Expected a {} value, but received {} value `{}`."
- "Expected a {} value, but failed while parsing `{}`: {}."
- "Error validating model `{}`: {}"
- "Error validating field `{}` in model `{}`: {}"
- "Error validating datasource `{datasource}`: {message}"
- "Error validating enum `{}`: {}"
- "Error validating: {}"

P1013 \[#p1013]

"The provided database string is invalid. {details}"

P1014 \[#p1014]

"The underlying {kind} for model `{model}` does not exist."

P1015 \[#p1015]

"Your Prisma schema is using features that are not supported for the version of the database.Database version: {database\_version}Errors:{errors}"

P1016 \[#p1016]

"Your raw query had an incorrect number of parameters. Expected: `{expected}`, actual: `{actual}`."

P1017 \[#p1017]

"Server has closed the connection."

Prisma Client (Query Engine) \[#prisma-client-query-engine]

P2000 \[#p2000]

"The provided value for the column is too long for the column's type. Column: {column\_name}"

P2001 \[#p2001]

"The record searched for in the where condition (`{model_name}.{argument_name} = {argument_value}`) does not exist"

P2002 \[#p2002]

"Unique constraint failed on the {constraint}"

P2003 \[#p2003]

"Foreign key constraint failed on the field: `{field_name}`"

P2004 \[#p2004]

"A constraint failed on the database: `{database_error}`"

P2005 \[#p2005]

"The value `{field_value}` stored in the database for the field `{field_name}` is invalid for the field's type"

P2006 \[#p2006]

"The provided value `{field_value}` for `{model_name}` field `{field_name}` is not valid"

P2007 \[#p2007]

"Data validation error `{database_error}`"

P2008 \[#p2008]

"Failed to parse the query `{query_parsing_error}` at `{query_position}`"

P2009 \[#p2009]

"Failed to validate the query: `{query_validation_error}` at `{query_position}`"

P2010 \[#p2010]

"Raw query failed. Code: `{code}`. Message: `{message}`"

P2011 \[#p2011]

"Null constraint violation on the {constraint}"

P2012 \[#p2012]

"Missing a required value at `{path}`"

P2013 \[#p2013]

"Missing the required argument `{argument_name}` for field `{field_name}` on `{object_name}`."

P2014 \[#p2014]

"The change you are trying to make would violate the required relation '{relation\_name}' between the `{model_a_name}` and `{model_b_name}` models."

P2015 \[#p2015]

"A related record could not be found. {details}"

P2016 \[#p2016]

"Query interpretation error. {details}"

P2017 \[#p2017]

"The records for relation `{relation_name}` between the `{parent_name}` and `{child_name}` models are not connected."

P2018 \[#p2018]

"The required connected records were not found. {details}"

P2019 \[#p2019]

"Input error. {details}"

P2020 \[#p2020]

"Value out of range for the type. {details}"

P2021 \[#p2021]

"The table `{table}` does not exist in the current database."

P2022 \[#p2022]

"The column `{column}` does not exist in the current database."

P2023 \[#p2023]

"Inconsistent column data: {message}"

P2024 \[#p2024]

"Timed out fetching a new connection from the connection pool. (More info: [http://pris.ly/d/connection-pool](/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool) (Current connection pool timeout: {timeout}, connection limit: {connection\_limit})"

In Prisma ORM v7, pool size and timeout are configured per [driver adapter](/orm/prisma-client/setup-and-configuration/databases-connections/connection-pool)—see the connection pool reference for your adapter.

P2025 \[#p2025]

"An operation failed because it depends on one or more records that were required but not found. {cause}"

P2026 \[#p2026]

"The current database provider doesn't support a feature that the query used: {feature}"

P2027 \[#p2027]

"Multiple errors occurred on the database during query execution: {errors}"

P2028 \[#p2028]

"Transaction API error: {error}"

P2029 \[#p2029]

"Query parameter limit exceeded error: {message}"

P2030 \[#p2030]

"Cannot find a fulltext index to use for the search, try adding a @@fulltext(\[Fields...]) to your schema"

P2031 \[#p2031]

"Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set. See details: [https://pris.ly/d/mongodb-replica-set](/orm/core-concepts/supported-databases/mongodb#replica-set-configuration)"

P2033 \[#p2033]

"A number used in the query does not fit into a 64 bit signed integer. Consider using `BigInt` as field type if you're trying to store large integers"

P2034 \[#p2034]

"Transaction failed due to a write conflict or a deadlock. Please retry your transaction"

P2035 \[#p2035]

"Assertion violation on the database: {database\_error}"

P2036 \[#p2036]

"Error in external connector (id {id})"

P2037 \[#p2037]

"Too many database connections opened: {message}"

Prisma Migrate (Schema Engine) \[#prisma-migrate-schema-engine]

```
The Schema Engine was previously called Migration Engine. This change was introduced in version [5.0.0](https://github.com/prisma/prisma/releases/tag/5.0.0).
```

P3000 \[#p3000]

"Failed to create database: {database\_error}"

P3001 \[#p3001]

"Migration possible with destructive changes and possible data loss: {migration\_engine\_destructive\_details}"

P3002 \[#p3002]

"The attempted migration was rolled back: {database\_error}"

P3003 \[#p3003]

"The format of migrations changed, the saved migrations are no longer valid. To solve this problem, please follow the steps at: [https://pris.ly/d/migrate](/orm/prisma-migrate)"

P3004 \[#p3004]

"The `{database_name}` database is a system database, it should not be altered with prisma migrate. Please connect to another database."

P3005 \[#p3005]

"The database schema is not empty. Read more about how to baseline an existing production database: [https://pris.ly/d/migrate-baseline](/orm/prisma-migrate/workflows/baselining)"

P3006 \[#p3006]

"Migration `{migration_name}` failed to apply cleanly to the shadow database. {error\_code}Error:{inner\_error}"

P3007 \[#p3007]

"Some of the requested preview features are not yet allowed in schema engine. Please remove them from your data model before using migrations. (blocked: {list\_of\_blocked\_features})"

P3008 \[#p3008]

"The migration `{migration_name}` is already recorded as applied in the database."

P3009 \[#p3009]

"migrate found failed migrations in the target database, new migrations will not be applied. Read more about how to resolve migration issues in a production database: [https://pris.ly/d/migrate-resolve](/orm/prisma-migrate/workflows/troubleshooting){details}"

P3010 \[#p3010]

"The name of the migration is too long. It must not be longer than 200 characters (bytes)."

P3011 \[#p3011]

"Migration `{migration_name}` cannot be rolled back because it was never applied to the database. Hint: did you pass in the whole migration name? (example: "20201207184859\_initial\_migration")"

P3012 \[#p3012]

"Migration `{migration_name}` cannot be rolled back because it is not in a failed state."

P3013 \[#p3013]

"Datasource provider arrays are no longer supported in migrate. Please change your datasource to use a single provider. Read more at <https://pris.ly/multi-provider-deprecation>"

P3014 \[#p3014]

"Prisma Migrate could not create the shadow database. Please make sure the database user has permission to create databases. Read more about the shadow database (and workarounds) at [https://pris.ly/d/migrate-shadow](/orm/prisma-migrate/understanding-prisma-migrate/shadow-database).

Original error: {error\_code}{inner\_error}"

P3015 \[#p3015]

"Could not find the migration file at {migration\_file\_path}. Please delete the directory or restore the migration file."

P3016 \[#p3016]

"The fallback method for database resets failed, meaning Migrate could not clean up the database entirely. Original error: {error\_code}{inner\_error}"

P3017 \[#p3017]

"The migration {migration\_name} could not be found. Please make sure that the migration exists, and that you included the whole name of the directory. (example: "20201207184859\_initial\_migration")"

P3018 \[#p3018]

"A migration failed to apply. New migrations cannot be applied before the error is recovered from. Read more about how to resolve migration issues in a production database: [https://pris.ly/d/migrate-resolve](/orm/prisma-migrate/workflows/troubleshooting)"Migration name: {migration\_name}Database error code: {database\_error\_code}Database error:{database\_error} "

P3019 \[#p3019]

"The datasource provider `{provider}` specified in your schema does not match the one specified in the migration\_lock.toml, `{expected_provider}`. Please remove your current migration directory and start a new migration history with prisma migrate dev. Read more: [https://pris.ly/d/migrate-provider-switch](/orm/prisma-migrate/workflows/troubleshooting)"

P3020 \[#p3020]

"The automatic creation of shadow databases is disabled on Azure SQL. Please set up a shadow database using the `shadowDatabaseUrl` datasource attribute.Read the docs page for more details: [https://pris.ly/d/migrate-shadow](/orm/prisma-migrate/understanding-prisma-migrate/shadow-database)"

P3021 \[#p3021]

"Foreign keys cannot be created on this database. Learn more how to handle this: [https://pris.ly/d/migrate-no-foreign-keys](/orm/core-concepts/supported-databases/mysql#planetscale)"

P3022 \[#p3022]

"Direct execution of DDL (Data Definition Language) SQL statements is disabled on this database. Please read more here about how to handle this: [https://pris.ly/d/migrate-no-direct-ddl](/orm/core-concepts/supported-databases/mysql#planetscale)"

P3023 \[#p3023]

"For the current database, `externalTables` & `externalEnums` in your prisma config must contain only fully qualified identifiers (e.g. `schema_name.table_name`)."

P3024 \[#p3024]

"For the current database, `externalTables` & `externalEnums` in your prisma config must contain only simple identifiers without a schema name."

prisma db pull \[#prisma-db-pull]

P4000 \[#p4000]

"Introspection operation failed to produce a schema file: {introspection\_error}"

P4001 \[#p4001]

"The introspected database was empty."

P4002 \[#p4002]

"The schema of the introspected database was inconsistent: {explanation}"

{/\* Error codes generated by https://github.com/mhwelander/doc-tools/blob/master/error\_code\_parser.py \*/}

Prisma Accelerate \[#prisma-accelerate]

Prisma Accelerate-related errors start with `P6xxx` except for [`P5011`](/orm/reference/error-reference#p5011-too-many-requests).

P6000 (ServerError) \[#p6000-servererror]

Generic error to catch all other errors.

P6001 (InvalidDataSource) \[#p6001-invaliddatasource]

The URL is malformed; for instance, it does not use the `prisma://` protocol.

P6002 (Unauthorized) \[#p6002-unauthorized]

The API Key in the connection string is invalid.

P6003 (PlanLimitReached) \[#p6003-planlimitreached]

The included usage of the current plan has been exceeded. This can only occur on the [free plan](https://www.prisma.io/pricing).

P6004 (QueryTimeout) \[#p6004-querytimeout]

The global timeout of Accelerate has been exceeded.

> Also see the [troubleshooting guide](/accelerate/more/troubleshoot#p6004-querytimeout) for more information.

P6005 (InvalidParameters) \[#p6005-invalidparameters]

The user supplied invalid parameters. Currently only relevant for transaction methods. For example, setting a timeout that is too high.

P6006 (VersionNotSupported) \[#p6006-versionnotsupported]

The chosen Prisma version is not compatible with Accelerate. This may occur when a user uses an unstable development version that we occasionally prune.

P6008 (ConnectionError|EngineStartError) \[#p6008-connectionerrorenginestarterror]

The engine failed to start. For example, it couldn't establish a connection to the database.

> Also see the [troubleshooting guide](/accelerate/more/troubleshoot#p6008-connectionerrorenginestarterror) for more information.

P6009 (ResponseSizeLimitExceeded) \[#p6009-responsesizelimitexceeded]

The global response size limit of Accelerate has been exceeded.

> Also see the [troubleshooting guide](/accelerate/more/troubleshoot#p6009-responsesizelimitexceeded) for more information.

P6010 (ProjectDisabledError) \[#p6010-projectdisablederror]

Your accelerate project is disabled. Please [enable](/accelerate/getting-started#1-enable-accelerate) it again to use it.

P5011 (Too Many Requests) \[#p5011-too-many-requests]

This error indicates that the request volume exceeded. Implement a back-off strategy and try again later. For assistance with expected high workloads, contact [support](/console/more/support).
