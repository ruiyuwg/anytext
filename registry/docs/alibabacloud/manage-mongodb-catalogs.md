A MongoDB catalog lets you access MongoDB collections from Realtime Compute for Apache Flink without manually defining collection schemas. The catalog automatically parses Binary JSON (BSON)-formatted documents to infer each collection's schema, so you can query specific fields directly in Flink SQL without writing DDL statements. This topic describes how to create, view, use, and drop a MongoDB catalog.

## **Background information**

A MongoDB catalog automatically infers the schema of a collection by parsing BSON-formatted documents. Because the table name in a MongoDB catalog matches the corresponding MongoDB collection name, you do not need to register MongoDB tables with DDL statements. This reduces setup overhead and improves data accuracy.

Tables in a MongoDB catalog can serve as source tables, dimension tables, and result tables in Realtime Compute for Apache Flink SQL deployments.

In Realtime Compute for Apache Flink with Ververica Runtime (VVR) 8.0.6 or later, you can use MongoDB catalogs together with the [CREATE TABLE AS statement](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#concept-2156279) or the [CREATE DATABASE AS statement](/help/en/flink/realtime-flink/developer-reference/create-database-as-statement) to synchronize table schema changes.

This topic covers the following operations:

-   [Create a MongoDB catalog](#f6c641ef4fox2)
    
-   [View a MongoDB catalog](#7535bf94c7vne)
    
-   [Use a MongoDB catalog](#dcf58f6e12evr)
    
-   [Drop a MongoDB catalog](#df9918ae00fop)
    

## **Before you begin**

Confirm the following before working with MongoDB catalogs:

-   Your Realtime Compute for Apache Flink workspace uses VVR 8.0.5 or later. VVR 8.0.6 or later is required if you plan to use the CREATE TABLE AS or CREATE DATABASE AS statement.
    

## **Limits**

-   Only Realtime Compute for Apache Flink with VVR 8.0.5 or later supports MongoDB catalogs.
    
-   You cannot modify an existing MongoDB catalog using DDL statements. To update connection settings, drop the catalog and recreate it.
    
-   MongoDB catalogs support read access only. You cannot create, modify, or delete databases and tables through a MongoDB catalog.
    

## **Create a MongoDB catalog**

**Important**

If your MongoDB database requires authentication, the password parameter accepts a plaintext value by default. To prevent credential exposure, use the key management feature to store your password as a variable. For more information, see [Manage variables and keys](/help/en/flink/realtime-flink/user-guide/manage-keys).

**Note**

In the following SQL statement, replace all placeholder values enclosed in angle brackets (`< >`). You must remove the angle brackets when substituting your actual values. Leaving the angle brackets in place causes a syntax check error.

1.  In the code editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) tab on the SQL Editor page, enter the statement for creating a MongoDB catalog.
    
    ```
    CREATE CATALOG <yourcatalogname> WITH(
     'type'='mongodb',
     'default-database'='<dbName>',
     'hosts'='<hosts>',
     'scheme'='<scheme>',
     'username'='<username>',
     'password'='<password>',
     'connection.options'='<connectionOptions>',
     'max.fetch.records'='100',
     'scan.flatten-nested-columns.enabled'='<flattenNestedColumns>',
     'scan.primitive-as-string'='<primitiveAsString>'
    );
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Data type**
    
    **Description**
    
    **Required**
    
    **Default value**
    
    **Remarks**
    
    yourcatalogname
    
    STRING
    
    The name of the MongoDB catalog.
    
    Yes
    
    N/A
    
    Enter a custom name.
    
    type
    
    STRING
    
    The type of the catalog.
    
    Yes
    
    N/A
    
    Set the value to `mongodb`.
    
    hosts
    
    STRING
    
    The hostname of the MongoDB instance.
    
    Yes
    
    N/A
    
    Separate multiple hostnames with commas (`,`).
    
    default-database
    
    STRING
    
    The name of the default MongoDB database.
    
    Yes
    
    N/A
    
    N/A.
    
    scheme
    
    STRING
    
    The connection protocol for the MongoDB database.
    
    No
    
    `mongodb`
    
    Valid values:
    
    -   `mongodb` (uses the standard MongoDB protocol)
        
    -   `mongodb+srv` (uses the DNS SRV record protocol)
        
    
    username
    
    STRING
    
    The username for connecting to the MongoDB database.
    
    No
    
    N/A
    
    Required if authentication is enabled on the MongoDB database.
    
    password
    
    STRING
    
    The password for connecting to the MongoDB database.
    
    No
    
    N/A
    
    Required if authentication is enabled on the MongoDB database. To prevent credential exposure, use the key management feature instead of specifying a plaintext password. See [Manage variables and keys](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).
    
    connection.options
    
    STRING
    
    Additional connection parameters for the MongoDB database.
    
    No
    
    N/A
    
    Specify as key-value pairs in `key=value` format, separated by ampersands (`&`). For example: `connectTimeoutMS=12000&socketTimeoutMS=13000`.
    
    max.fetch.records
    
    INT
    
    The maximum number of documents the MongoDB catalog attempts to read when inferring a collection schema.
    
    No
    
    `100`
    
    N/A.
    
    scan.flatten-nested-columns.enabled
    
    BOOLEAN
    
    Specifies whether to recursively expand nested columns when parsing BSON-formatted documents.
    
    No
    
    `false`
    
    Valid values:
    
    -   `true`: Nested columns are expanded; the column path becomes the column name, for example `{"nested": {"col": true}}` becomes `nested.col`.
        
    -   `false`: Nested documents are parsed as STRING.
        
    
    **Important**
    
    This parameter applies only to MongoDB catalog tables used as source tables in Flink SQL deployments.
    
    scan.primitive-as-string
    
    BOOLEAN
    
    Specifies whether to infer all primitive data types as STRING when parsing BSON-formatted documents.
    
    No
    
    `false`
    
    Valid values:
    
    -   `true`: All primitive types are inferred as STRING.
        
    -   `false`: Types are inferred from the BSON-to-Flink type mapping. For type mappings, see [Schema inference description](#17638b2dddfaz).
        
    
2.  Select the code for creating the catalog and click **Run** on the left side of the code editor.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9256486071/p753062.png)
    
3.  In the **Catalogs** pane on the left side of the Catalog List page, verify that the new catalog appears.
    

## **View a MongoDB catalog**

1.  In the code editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) tab on the SQL Editor page, enter the following statement:
    
    ```
    DESCRIBE `${catalog_name}`.`${db_name}`.`${collection_name}`;
    ```
    
    **Parameter**
    
    **Description**
    
    ${catalog\_name}
    
    The name of the MongoDB catalog.
    
    ${db\_name}
    
    The name of the ApsaraDB for MongoDB database.
    
    ${collection\_name}
    
    The name of the ApsaraDB for MongoDB collection.
    
2.  Select the code and click **Run** on the left side of the code editor.
    
    After the statement runs, the table details appear in the results panel.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9256486071/p753087.png)
    

## **Use a MongoDB catalog**

### **Use as a source table**

Use the following pattern to read data from a MongoDB collection through a catalog table:

```
INSERT INTO ${other_sink_table}
SELECT...
FROM `${mongodb_catalog}`.`${db_name}`.`${collection_name}`
/*+OPTIONS('scan.incremental.snapshot.enabled'='true')*/;
```

**Note**

To specify additional WITH clause parameters when using a MongoDB catalog, use [SQL hints](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/sql/queries/hints/) rather than altering the catalog definition. The example above uses SQL hints to enable parallel reading during the initial snapshot phase. For all available parameters, see [MongoDB connector](/help/en/flink/realtime-flink/developer-reference/mongodb-connector).

### **Use with CTAS/CDAS for data sync**

Use the [CREATE TABLE AS statement](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#concept-2156279) or [CREATE DATABASE AS statement](/help/en/flink/realtime-flink/developer-reference/create-database-as-statement) to synchronize data from a MongoDB collection to a destination table.

**Important**

Before using these statements, confirm that all of the following conditions are met:

-   The VVR version is 8.0.6 or later, and the MongoDB database version is 6.0 or later.
    
-   The scan.incremental.snapshot.enabled and scan.full-changelog parameters are set to `true` in the SQL hints.
    
-   The preimage feature is enabled in the MongoDB database. For instructions, see [Document Preimages](https://www.mongodb.com/docs/atlas/app-services/mongodb/preimages/).
    

**Synchronize data from a single collection in real time:**

```
CREATE TABLE IF NOT EXISTS `${target_table_name}`
WITH(...)
AS TABLE `${mongodb_catalog}`.`${db_name}`.`${collection_name}`
/*+ OPTIONS('scan.incremental.snapshot.enabled'='true', 'scan.full-changelog'='true') */;
```

**Synchronize data from multiple collections in a deployment:**

```
BEGIN STATEMENT SET;

CREATE TABLE IF NOT EXISTS `some_catalog`.`some_database`.`some_table0`
AS TABLE `mongodb-catalog`.`database`.`collection0`
/*+ OPTIONS('scan.incremental.snapshot.enabled'='true', 'scan.full-changelog'='true') */;

CREATE TABLE IF NOT EXISTS `some_catalog`.`some_database`.`some_table1`
AS TABLE `mongodb-catalog`.`database`.`collection1`
/*+ OPTIONS('scan.incremental.snapshot.enabled'='true', 'scan.full-changelog'='true') */;

CREATE TABLE IF NOT EXISTS `some_catalog`.`some_database`.`some_table2`
AS TABLE `mongodb-catalog`.`database`.`collection2`
/*+ OPTIONS('scan.incremental.snapshot.enabled'='true', 'scan.full-changelog'='true') */;

END;
```

When synchronizing multiple MongoDB collections in a single deployment using the CREATE TABLE AS statement, the following parameters must be configured identically for all tables:

-   MongoDB database connection parameters: hosts, scheme, username, password, and connection.options
    
-   scan.startup.mode
    

**Synchronize data from an entire MongoDB database:**

```
CREATE DATABASE IF NOT EXISTS `some_catalog`.`some_database`
AS DATABASE `mongodb-catalog`.`database`
/*+ OPTIONS('scan.incremental.snapshot.enabled'='true', 'scan.full-changelog'='true') */;
```

### **Use as a dimension table**

```
INSERT INTO ${other_sink_table}
SELECT ...
FROM ${other_source_table} AS e
JOIN `${mysql_catalog}`.`${db_name}`.`${table_name}` FOR SYSTEM_TIME AS OF e.proctime AS w
ON e.id = w.id;
```

### **Use as a result table**

```
INSERT INTO `${mysql_catalog}`.`${db_name}`.`${table_name}`
SELECT ...
FROM ${other_source_table}
```

## **Drop a MongoDB catalog**

**Warning**

After you drop a MongoDB catalog, running deployments are not affected. However, any deployment that references a table in the dropped catalog will fail to find that table when the deployment is next published or restarted. Proceed with caution.

1.  In the code editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) tab on the SQL Editor page, enter the following statement:
    
    ```
    DROP CATALOG ${catalog_name};
    ```
    
    ${catalog\_name} specifies the name of the MongoDB catalog that you want to drop.
    
2.  Right-click the statement and choose **Run** from the shortcut menu to drop the catalog.
    
3.  In the **Catalogs** pane on the left side of the Catalog List page, verify that the catalog no longer appears.
    

## **Schema inference description**

When a MongoDB catalog infers the schema of a table, it automatically adds default parameters and primary key information. When the catalog parses BSON-formatted documents to obtain the schema of a collection, it attempts to read up to the number of data records specified by the max.fetch.records parameter. The catalog parses the schema of each record and merges all parsed schemas into a single collection schema.

A collection schema consists of the following parts:

-   **Physical columns:** The MongoDB catalog infers physical columns from BSON-formatted documents.
    
-   **Default primary key:** For any table in a MongoDB catalog, the \_id column serves as the primary key to prevent duplicate data.
    

After the MongoDB catalog reads a set of BSON-formatted documents, it parses them in sequence and merges the physical columns into the collection schema using the following rules. The MongoDB catalog merges BSON-formatted documents based on the following rules:

-   If a field in the parsed physical columns does not exist in the current collection schema, the MongoDB catalog adds the field to the schema.
    
-   If a parsed physical column has the same name as an existing column in the collection schema, apply the following merge logic based on your data types:
    
    -   If the columns share the same data type but differ in precision, the MongoDB catalog retains the column with the larger precision.
        
    -   If the columns have different data types, the MongoDB catalog uses the smallest common parent type from the type hierarchy shown in the following figure. If columns of DECIMAL and FLOAT types are merged, the result is DOUBLE to preserve precision.
        
        ![Type hierarchy diagram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6367738271/CAEQJBiBgMDdzLjG9hgiIDEwYThiZGNhOWJkMzQyNThiNTlmY2E0NTlkYjRiZDIz4146325_20240103154215.446.svg)
        

The following table describes the data type mappings between BSON and Realtime Compute for Apache Flink SQL when a collection schema is inferred.

**BSON data type**

**Data type of Realtime Compute for Apache Flink SQL**

Boolean

BOOLEAN

Int32

INT

Int64

BIGINT

Binary

BYTES

Double

DOUBLE

Decimal128

DECIMAL

String

STRING

ObjectId

STRING

DateTime

TIMESTAMP\_LTZ(3)

Timestamp

TIMESTAMP\_LTZ(0)

Array

STRING

Document

STRING

## **References**

-   For more information about how to use the MongoDB connector, see [MongoDB connector](/help/en/flink/realtime-flink/developer-reference/mongodb-connector).
    
-   If the built-in catalogs of Realtime Compute for Apache Flink do not meet your requirements, you can use custom catalogs. For more information, see [Manage custom catalogs](/help/en/flink/realtime-flink/user-guide/manage-custom-catalogs).
