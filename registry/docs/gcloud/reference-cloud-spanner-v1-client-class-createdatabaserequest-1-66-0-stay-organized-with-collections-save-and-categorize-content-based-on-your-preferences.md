-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Cloud Spanner V1 Client - Class CreateDatabaseRequest (1.66.0) Stay organized with collections Save and categorize content based on your preferences.

2.6.0 (latest) 2.5.1 2.4.1 2.3.0 2.2.0 2.1.0 2.0.1-RC1 1.106.0 1.105.1 1.104.1 1.103.0 1.102.0 1.101.0 1.100.0 1.98.0 1.97.0 1.96.0 1.95.0 1.94.0 1.93.1 1.92.1 1.91.0 1.90.0 1.89.0 1.88.0 1.87.0 1.86.0 1.85.0 1.84.0 1.83.0 1.82.0 1.81.0 1.80.0 1.79.0 1.78.0 1.77.0 1.76.1 1.68.0 1.67.0 1.66.0 1.65.0 1.64.0 1.63.2 1.62.1 1.61.0 1.60.0 1.59.0 1.58.4 1.57.0 1.56.0 1.55.0 1.54.2

Reference documentation and code samples for the Cloud Spanner V1 Client class CreateDatabaseRequest.

The request for [CreateDatabase](/php/docs/reference/cloud-spanner/1.66.0/Admin.Database.V1.DatabaseAdminClient#_Google_Cloud_Spanner_Admin_Database_V1_DatabaseAdminClient__createDatabase__).

Generated from protobuf message `google.spanner.admin.database.v1.CreateDatabaseRequest`

## Namespace

Google \\ Cloud \\ Spanner \\ Admin \\ Database \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ parent`

`string`  

Required. The name of the instance that will serve the new database. Values are of the form `projects/<project>/instances/<instance>`.

`↳ create_statement`

`string`  

Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `[a-z][a-z0-9_\-]*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` `` ).

`↳ extra_statements`

`array`  

Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.

`↳ encryption_config`

`[Google\Cloud\Spanner\Admin\Database\V1\EncryptionConfig](/php/docs/reference/cloud-spanner/1.66.0/Admin.Database.V1.EncryptionConfig)`  

Optional. The encryption configuration for the database. If this field is not specified, Cloud Spanner will encrypt/decrypt all data at rest using Google default encryption.

`↳ database_dialect`

`int`  

Optional. The dialect of the Cloud Spanner Database.

### getParent

Required. The name of the instance that will serve the new database.

Values are of the form `projects/<project>/instances/<instance>`.

**Returns**

**Type**

**Description**

`string`

### setParent

Required. The name of the instance that will serve the new database.

Values are of the form `projects/<project>/instances/<instance>`.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCreateStatement

Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `[a-z][a-z0-9_\-]*[a-z0-9]` and be between 2 and 30 characters in length.

If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` `` ).

**Returns**

**Type**

**Description**

`string`

### setCreateStatement

Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `[a-z][a-z0-9_\-]*[a-z0-9]` and be between 2 and 30 characters in length.

If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` `` ).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getExtraStatements

Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setExtraStatements

Optional. A list of DDL statements to run inside the newly created database. Statements can create tables, indexes, etc. These statements execute atomically with the creation of the database: if there is an error in any statement, the database is not created.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getEncryptionConfig

Optional. The encryption configuration for the database. If this field is not specified, Cloud Spanner will encrypt/decrypt all data at rest using Google default encryption.

**Returns**

**Type**

**Description**

`[Google\Cloud\Spanner\Admin\Database\V1\EncryptionConfig](/php/docs/reference/cloud-spanner/1.66.0/Admin.Database.V1.EncryptionConfig)|null`

### hasEncryptionConfig

### clearEncryptionConfig

### setEncryptionConfig

Optional. The encryption configuration for the database. If this field is not specified, Cloud Spanner will encrypt/decrypt all data at rest using Google default encryption.

**Parameter**

**Name**

**Description**

`var`

`[Google\Cloud\Spanner\Admin\Database\V1\EncryptionConfig](/php/docs/reference/cloud-spanner/1.66.0/Admin.Database.V1.EncryptionConfig)`  

**Returns**

**Type**

**Description**

`$this`

### getDatabaseDialect

Optional. The dialect of the Cloud Spanner Database.

**Returns**

**Type**

**Description**

`int`

### setDatabaseDialect

Optional. The dialect of the Cloud Spanner Database.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### static::build

**Parameters**

**Name**

**Description**

`parent`

`string`  

Required. The name of the instance that will serve the new database. Values are of the form `projects/<project>/instances/<instance>`. Please see [Google\\Cloud\\Spanner\\Admin\\Database\\V1\\DatabaseAdminClient::instanceName()](/php/docs/reference/cloud-spanner/1.66.0/Admin.Database.V1.DatabaseAdminClient#_Google_Cloud_Spanner_Admin_Database_V1_DatabaseAdminClient__instanceName__) for help formatting this field.

`createStatement`

`string`  

Required. A `CREATE DATABASE` statement, which specifies the ID of the new database. The database ID must conform to the regular expression `[a-z][a-z0-9_\-]*[a-z0-9]` and be between 2 and 30 characters in length. If the database ID is a reserved word or if it contains a hyphen, the database ID must be enclosed in backticks (`` ` `` ).

**Returns**

**Type**

**Description**

`[Google\Cloud\Spanner\Admin\Database\V1\CreateDatabaseRequest](/php/docs/reference/cloud-spanner/1.66.0/Admin.Database.V1.CreateDatabaseRequest)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.
