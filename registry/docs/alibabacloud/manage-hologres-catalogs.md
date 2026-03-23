After you configure a Hologres catalog, you can directly read Hologres metadata in the Realtime Compute development console. This eliminates the need to manually register Hologres tables, which improves development efficiency and ensures data accuracy. This topic describes how to configure, view, use, and delete a Hologres catalog.

## **Prerequisites**

A dedicated Hologres instance has been created, and a database has been created in the instance. For more information, see [Create a database](/help/en/hologres/getting-started/create-a-database).

## Limitations

-   You cannot modify a catalog. To make changes, you must delete the existing catalog and create a new one.
    
-   The Hologres instance must be an exclusive instance. Shared cluster instances are not supported because Realtime Compute for Apache Flink can only read from and write to internal tables in Hologres.
    

## Create a Hologres catalog

**Important**

Catalog configurations cannot be modified in place after creation. To change them, drop the existing catalog and create a new one.

## UI

To set Hologres connector options while creating a catalog, use Flink SQL commands.

1.  Go to the **Catalogs** page.
    
    1.  Log on to [Realtime Compute for Apache Flink's Management Console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV). In the **Actions** column of your workspace, click **Console**.
        
    2.  In the left navigation menu, click **Catalogs**.
        
2.  Click **Create Catalog**, select **Hologres**, and click **Next**.
    
3.  Configure the catalog:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7437923571/p952369.png)
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Remarks**
    
    **catalog name**
    
    The name of the Hologres catalog.
    
    Yes
    
    The name can contain only lowercase letters (a-z) and digits (0-9). Uppercase letters, hyphens (-), underscores (\_), and other special characters are not supported.
    
    **endpoint**
    
    The endpoint of the Hologres instance.
    
    Yes
    
    If the Hologres instance and the Flink workspace are in the same VPC: Go to the **[Hologres console](https://hologram.console.alibabacloud.com/#/instance)**. On the product page of the target instance, obtain the **Dedicated VPC** endpoint from the **Network Information** section.
    
    For other network types, see [Network connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#7fc6bce322b3f).
    
    **username**
    
    -   The username of a custom account. The format is `BASIC$<user_name>`.
        
    -   The AccessKey ID of an Alibaba Cloud account or a Resource Access Management (RAM) user.
        
    
    Yes
    
    -   The user must have permissions to access the corresponding Hologres database. For more information about Hologres database permissions and user management, see [Hologres permission models](/help/en/hologres/security-and-compliance/hologres-permission-model/#concept-2021277) and [User management](/help/en/hologres/user-guide/manage-users#section-fv0-kzc-n35).
        
    -   For more information about how to obtain an AccessKey ID and an AccessKey secret, see [How do I view the AccessKey pair of an account?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe).
        
        **Important**
        
        -   To prevent your AccessKey or password from being leaked, use project variables to specify their values. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).
            
        -   A catalog created using a custom account displays only the databases for which the account has permissions. A catalog created using an AccessKey pair can display all databases in the instance.
            
        
    
    **password**
    
    -   The password of the custom account.
        
    -   The AccessKey secret of the Alibaba Cloud account or RAM user.
        
    
    Yes
    
    **dbname**
    
    The name of the Hologres database.
    
    Yes
    
    A database must be created in the target Hologres instance. Otherwise, an error occurs when you create the catalog.
    
4.  Click **OK**.
    
    You can view it under **Catalogs**.
    

## Flink SQL

1.  In the editor of the [Data Query](/help/en/flink/realtime-flink/user-guide/sql-scripts) page, enter the command to create the Hologres catalog.
    
    **Syntax**:
    
    ```
    CREATE CATALOG <catalogname> WITH (
      'type' = 'hologres',
      'endpoint' = '<endpoint>', 
      'username' = '<AccessKey>',
      'password' = '<AccessSecret>',
      'dbname' = '<dbname>'
    );
    ```
    
    **Examples**:
    
    **Simple example**
    
    **Real-time consumption example**
    
    ```
    CREATE CATALOG holocatalog WITH (
      'type' = 'hologres',
      'endpoint' = 'hgpostcn-cn-******-cn-hangzhou-vpc-st.hologres.aliyuncs.com:80', 
      'username' = 'LTAI********************',
      'password' = '${secret_values.ak_holo}',
      'dbname' = 'holo_test'
    );
    ```
    
    Binary logging must be enabled to consume binary logging data.
    
    ```
    CREATE CATALOG holocatalog WITH (
      'type' = 'hologres',
      'endpoint' = 'hgpostcn-cn-******-cn-hangzhou-vpc-st.hologres.aliyuncs.com:80', 
      'username' = 'LTAI********************',
      'password' = '${secret_values.ak_holo}',
      'dbname' = 'holo_test',
      'binlog' = 'true', -- When you create a catalog, you can set the WITH parameters that are supported by source tables, dimension tables, and sink tables. When you use a table in this catalog, these default parameters are automatically added.
      'cdcmode' = 'true',
      'connectionpoolname' = 'the_conn_pool',
      'table_property.binlog.level' = 'replica', -- You can also pass persisted Hologres table properties when you create the catalog. Then, when you create a table, binary logging is enabled by default.
      'table_property.binlog.ttl' = '259200'
    );
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Remarks**
    
    catalogname
    
    The name of the Hologres catalog.
    
    Yes
    
    The name can contain only lowercase letters (a-z) and digits (0-9). Uppercase letters, hyphens (-), underscores (\_), and other special characters are not supported.
    
    type
    
    The type.
    
    Yes
    
    The value is fixed to \`hologres\`.
    
    endpoint
    
    The Endpoint of the Hologres instance.
    
    Yes
    
    If the Hologres instance and the Flink workspace are in the same VPC: Go to the **[Hologres console](https://hologram.console.alibabacloud.com/#/instance)**. On the product page of the target instance, obtain the **VPC** endpoint from the **Network Information** section.
    
    For other network types, see [How do I obtain the Endpoint of a Hologres instance?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#7fc6bce322b3f).
    
    username
    
    The AccessKey ID of the Alibaba Cloud account.
    
    Yes
    
    For more information, see [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe).
    
    **Note**
    
    -   To prevent your AccessKey information from being leaked, use variables to specify the value of the password. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).
        
    -   The user that corresponds to the AccessKey must have permissions to access the corresponding Hologres database. For more information about Hologres database permissions, see [Hologres permission model](/help/en/hologres/security-and-compliance/hologres-permission-model/#concept-2021277).
        
    
    password
    
    The AccessKey secret of the Alibaba Cloud account.
    
    Yes
    
    dbname
    
    The name of the Hologres database.
    
    Yes
    
    A database must be created in the target Hologres instance. Otherwise, an error occurs when you create the catalog.
    
    ignore-non-persisted-options
    
    Specifies whether to ignore non-persisted options when you create a table with non-persisted options in the Hologres catalog.
    
    No
    
    Valid values:
    
    -   true (default): The table is created, and all non-persisted options are ignored.
        
    -   false: An error is reported, and the table fails to be created.
        
    
    **Note**
    
    A table option in a Hologres catalog is persisted if you can retrieve the same information that you defined in the DDL statement when you read the table information from the catalog again. Currently, only the endpoint, username, password, and dbname options can be persisted.
    
    catalog.table.metadata-columns
    
    When you specify a source table using this catalog, you can add [metadata](/help/en/doc-detail/184874.html#section-y3j-3m8-9i0) columns from the Hologres binary logging source table to the table schema as needed. Separate multiple metadata columns with semicolons (;), for example, `hg_binlog_event_type;hg_binlog_timestamp_us`.
    
    No
    
    By default, no metadata columns are added. When you configure this parameter, the specified metadata columns are added to the returned table schema. These columns are applicable only to Hologres binary logging source tables. Therefore, the tables returned by this catalog can be used only as source tables, not as sink tables or dimension tables. Six types of meta-columns are supported. For more information, see [Hologres binary logging fields](/help/en/flink/developer-reference/realtime-compute-real-time-consumption-of-hologres-in-flink#1d748a8fb2cs9).
    
    **Note**
    
    This parameter is supported only in Ververica Runtime (VVR) 8.0.11 and later.
    
    Other parameters supported by the Hologres connector
    
    When you create a catalog, you can specify some parameters, including [WITH parameters](/help/en/flink/realtime-flink/developer-reference/hologres-connector/#title-kjn-2hs-rim). When you use a table in this catalog, these parameters are configured by default.
    
    No
    
    To use this feature, you must set the `ignore-non-persisted-options` parameter to true.
    
2.  After you enter the code to create the catalog, click **Run** in the upper-right corner.
    

## View a Hologres catalog

After you configure a Hologres catalog, you can view its metadata as follows:

1.  Go to the **Catalogs** page.
    
    1.  Log on to the [Realtime Compute for Apache Flink's Management Console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
        
    2.  Click **Console** in the **Actions** column of your workspace.
        
    3.  In the left navigation menu, click **Catalogs**.
        
2.  On the **Catalog List** page, view catalogs in the namespace.
    
    Click **View** to see the databases and tables in a catalog. If the schema is `public`, the schema prefix is omitted from the table name.
    

## Use a Hologres catalog

**Note:**

-   If the schema is `public`, you can omit the schema name prefix and specify the table name as ${table\_name} instead of ${schema\_name.table\_name}.
    
-   Tables read from a Hologres catalog support the consumption of updated data. For these tables, the `ignoredelete` property is `false` by default, and the `mutatetype` property is `insertorupdate` by default. For more information about the `ignoredelete` and `mutatetype` properties, see [Merge data into a wide table](/help/en/doc-detail/178795.html#section-1rj-9gy-i5c).
    

### **Create a Hologres table**

This example creates a table named `holotable` in the `holodb` database, which is in the `holocatalog` Hologres catalog.

**Note**

-   When you create a table in a registered Hologres catalog, the \`connector\` parameter is required in the WITH clause, and its value must be \`hologres\`. You can omit other parameters, such as \`endpoint\`.
    
-   You cannot directly add or modify supported WITH parameters in a Hologres table definition. Instead, you can use [SQL hints](https://ci.apache.org/projects/flink/flink-docs-master/zh/docs/dev/table/sql/queries/hints/) to add or modify them in an INSERT statement.
    

Perform the following steps:

#### **UI**

1.  Go to the Data Management page.
    
    1.  Log on to the [Realtime Compute for Apache Flink's Management Console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
        
    2.  In the **Actions** column of your workspace, click **Console**.
        
    3.  Click **Catalogs**.
        
2.  Go to the target database.
    
    1.  In the **Actions** column of the target catalog, click **View**.
        
    2.  In the **Actions** column of the target database, click **View**.
        
3.  Create a Hologres table.
    
    1.  Click **Create Table**.
        
    2.  On the **Built-in Connector** tab, select the Hologres connector and click **Next**.
        
    3.  Enter the CREATE TABLE statement. Syntax and example:
        
        **Syntax**
        
        **Example**
        
        ```
        CREATE TABLE `${catalog_name}`.`${db_name}`.`${table_name}` (
         ...
        ) WITH (
         'connector' = 'hologres'
        );
        ```
        
        ```
        CREATE TABLE `holocatalog`.`holo_test`.`product` (
         id INT,
         name STRING
        ) WITH (
         'connector' = 'hologres'
        );
        ```
        
    4.  Click **Confirm**.
        

#### **Flink SQL**

1.  In the editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) page, enter the following CREATE TABLE statement.
    
    You can create a Hologres table in one of the following ways:
    
    ## Use the `USE CATALOG HoloName` command
    
    Use the [USE statement](https://ci.apache.org/projects/flink/flink-docs-release-1.13/zh/docs/dev/table/sql/use/) to directly reference the Hologres catalog.
    
    **Syntax**
    
    **Example**
    
    ```
    USE CATALOG ${catalog_name};
    CREATE TABLE `${db_name}`.`${schema_name.table_name}`(
      ...
     ) WITH (
       'connector' = 'hologres'
     );
    ```
    
    ```
    USE CATALOG holocatalog;
    CREATE TABLE `holodb`.`holotable` (
     id INT,
     name STRING
    ) WITH (
     'connector' = 'hologres'
    );
    ```
    
    ## Use a DDL statement
    
    Directly reference the Hologres catalog in the DDL statement.
    
    **Syntax**
    
    **Example**
    
    ```
    CREATE TABLE `${catalog_name}`.`${db_name}`.`${schema_name.table_name}`(
      ...
     ) WITH (
       'connector' = 'hologres'
     );
    ```
    
    ```
    CREATE TABLE `holocatalog`.`holodb`.`holotable` (
     id INT,
     name STRING
    ) WITH (
     'connector' = 'hologres'
    );
    ```
    
    You can set physical table properties in the DDL statement.
    
    ```
    CREATE TABLE `holocatalog`.`holodb`.`holotable` (
      id INT,
      name STRING
    ) WITH (
      'connector' = 'hologres',
      'table_property.orientation' = 'column',
      'table_property.distribution_key' = 'a',
      'table_property.clustering_key' = 'b:desc',
      'table_property.bitmap_columns' = 'a,b',
      'table_property.segment_key' = 'c',
      'table_property.time_to_live_in_seconds' = '86400',
      'table_property.binlog.level' = 'replica',
      'table_property.binlog.ttl' = '86400'
    );
    ```
    
2.  Enter the CREATE TABLE statement and click **Run** in the upper-right corner.
    

When you create a Hologres table, you can set table properties in the WITH clause. Some properties cannot be modified. Setting table properties correctly helps the system efficiently organize and query data.

-   Physical table properties: The supported table properties are the same as those in Hologres. The catalog adds the `table_property.` prefix for differentiation. For more information about the parameters, see [Overview of table creation](/help/en/hologres/developer-reference/create-tables#concept-2463104) and [Subscribe to Hologres binary logs](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#concept-2037122).
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Can be modified**
    
    table\_property.orientation
    
    The storage format of the table.
    
    'table\_property.orientation' = 'row,column'
    
    This cannot be modified.
    
    table\_property.table\_group
    
    The table group.
    
    'table\_property.table\_group' = 'table\_group\_xxx'
    
    table\_property.distribution\_key
    
    The distribution key.
    
    'table\_property.distribution\_key' = 'a,b'
    
    table\_property.clustering\_key
    
    The clustering key.
    
    'table\_property.clustering\_key' = 'a,b:desc'
    
    able\_property.event\_time\_column (formerly table\_property.segment\_key)
    
    The segment key.
    
    'table\_property.event\_time\_column' = 'c,d' (or 'table\_property.segment\_key' = 'c,d')
    
    table\_property.bitmap\_columns
    
    The bitmap index.
    
    'table\_property.bitmap\_columns' = 'a:on,b:off'
    
    Can be modified
    
    table\_property.dictionary\_encoding\_columns
    
    Bit encoding.
    
    'table\_property.dictionary\_encoding\_columns' = 'a:on,b:off,c:auto'
    
    table\_property.time\_to\_live\_in\_seconds
    
    The time to live (TTL) of the table data.
    
    'table\_property.time\_to\_live\_in\_seconds' = '864000'
    
    table\_property.binlog.level
    
    Specifies whether to enable binary logging.
    
    'table\_property.binlog.level' = 'replica'
    
    table\_property.binlog.ttl
    
    The TTL of the binary log.
    
    'table\_property.binlog.ttl' = '86400'
    
-   Lenient mode parameter: When you create a table using a Hologres catalog, you can use the enableTypeNormalization parameter to enable lenient mode for types.
    
    **Dimension**
    
    **Description**
    
    **Scenarios**
    
    In scenarios such as Create Table As Select (CTAS), you may need to adjust the precision of the data type of an existing field, for example, from VARCHAR(10) to VARCHAR(20), or change the data type, for example, from SMALLINT to INT.
    
    **Note**
    
    -   Lenient mode must be enabled when you start a CTAS job for the first time. If lenient mode is not enabled at the first startup, you must delete the descendant table and perform a stateless restart of the job for the setting to take effect.
        
    -   After lenient mode is enabled, if the data type is modified in the upstream, the type modification is considered successful and the CTAS job runs as normal, provided that the normalized type of the modified type is the same as the original normalized type. Otherwise, the types are incompatible, and the CTAS job throws an exception.
        
    
    **Valid values**
    
    -   false (default): A Hologres physical table is created based on the type mapping.
        
    -   true: Lenient mode for types is enabled. When a Hologres physical table is created, a data type with higher precision after type normalization is used. The following list describes the current type normalization rules:
        
        -   TINYINT, SMALLINT, INT, and BIGINT are normalized to BIGINT.
            
        -   CHAR, VARCHAR, and STRING are normalized to STRING.
            
        -   FLOAT and DOUBLE are normalized to DOUBLE.
            
        -   Other data types are created based on their original type mapping rules. For more information, see [Type mapping](/help/en/doc-detail/178795.html#section-c10-vrk-gv7).
            
    

### **Modify a Hologres table**

The following table describes the supported operations for modifying a table and provides examples.

**Operation**

**Syntax and example**

Modify table properties

Only some table properties can be modified. For more information, see [Create a Hologres table](#section-x6a-as1-mbe).

-   Syntax:
    
    ```
    ALTER TABLE `${catalog_name}`.`${db_name}`.`${schema_name.table_name}` SET (
      'table_property.binlog.level' = 'replica',
      'table_property.binlog.ttl' = '64700'
    );
    ```
    
-   Example:
    
    ```
    ALTER TABLE `holocatalog`.`holodb`.`holotable` SET (
      'table_property.binlog.level' = 'replica',
      'table_property.binlog.ttl' = '64700'
    );
    ```
    

Rename a table

-   Syntax:
    
    ```
    ALTER TABLE `${catalog_name}`.`${db_name}`.`${schema_name.table_name}` 
    RENAME TO `${catalog_name}`.`${db_name}`.`${schema_name.new_table_name}`;
    ```
    
-   Example:
    
    ```
    ALTER TABLE `holocatalog`.`holodb`.`holotable` 
    RENAME TO `holocatalog`.`holodb`.`new_holotable`;
    ```
    

Add a column

-   Syntax:
    
    ```
    ALTER TABLE `${catalog_name}`.`${db_name}`.`${schema_name.table_name}` 
    ADD <column_name> <column_datatype> COMMENT '<column_comment>';
    ```
    
-   Example:
    
    ```
    ALTER TABLE `holocatalog`.`holodb`.`holotable` 
    ADD address STRING COMMENT 'Address information';
    ```
    

Rename a column

-   Syntax:
    
    ```
    ALTER TABLE `${catalog_name}`.`${db_name}`.`${schema_name.table_name}` 
    RENAME <old_column_name> TO <new_column_name>;
    ```
    
-   Example:
    
    ```
    ALTER TABLE `holocatalog`.`holodb`.`holotable` 
    RENAME address TO new_address;
    ```
    

Modify a column comment

-   Syntax:
    
    ```
    ALTER TABLE `${catalog_name}`.`${db_name}`.`${schema_name.table_name}` 
    MODIFY <column_name> <original_column_type> COMMENT '<new_column_comment>';
    ```
    
-   Example:
    
    ```
    ALTER TABLE `holocatalog`.`holodb`.`holotable` 
    MODIFY new_address STRING COMMENT 'New address information';
    ```
    

### **Read from and write to Hologres tables**

-   Read data from a Hologres table and write the data to a sink table.
    
    By default, Flink reads data from a Hologres source table in batch mode and does not consume new data in real time. To consume Hologres data in real time, use one of the following methods:
    
    -   Configure during catalog creation: Use SQL commands to create the catalog, enable binary logging, and consume binary log data. For more information, see [Real-time consumption example](#section-yyg-blr-h3j). Then, read the Hologres data. The following table provides sample code.
        
        **Syntax**
        
        **Example**
        
        ```
        INSERT INTO ${other_sink_table}
        SELECT ...
        FROM `${catalog_name}`.`${db_name}`.`${schema_name.table_name}`;
        ```
        
        ```
        INSERT INTO sink_table
        SELECT id, name
        FROM `holocatalog`.`holodb`.`holotable`;
        ```
        
    -   Change the read mode to streaming: Use a table hint to change the read mode to streaming. Add the `/*+ OPTIONS('binlog'='true') */` hint to the SQL statement. The following table provides sample code.
        
        ```
        INSERT INTO sinktable
        SELECT id, name
          FROM `holocatalog`.`holodb`.`holotable`
          /*+ OPTIONS ('binlog' = 'true') */;
        ```
        
-   Write data from a source table to a Hologres table.
    
    **Syntax**
    
    **Example**
    
    ```
    INSERT INTO `${catalog_name}`.`${db_name}`.`${schema_name.table_name}`
    SELECT ... 
    FROM ${other_source_table}
    ```
    
    ```
    INSERT INTO `holocatalog`.`holodb`.`holotable`
    SELECT id, name 
    FROM source_table;
    ```
    

### **Use as a destination catalog for** [CTAS](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#concept-2156279)

-   Syntax
    
    ```
    CREATE TABLE IF NOT EXISTS `${catalog_name}`.`${db_name}`.`${schema_name.table_name}`
    WITH (
      'connector' = 'hologres'
    ) AS TABLE ${other_source_table};
    ```
    
-   Example
    
    ```
    CREATE TABLE IF NOT EXISTS `holocatalog`.`holodb`.`holotable`
    WITH (
      'connector' = 'hologres'
    ) AS TABLE source_table;
    ```
    

CTAS lets you set physical table properties in the WITH clause. When the destination table is created, the corresponding properties are set for the table. For more information about the supported table property parameters, see [Create a Hologres table](#faf57f40e1pye).

During data synchronization from a source, the Hologres catalog may forcibly rewrite the destination schema to ensure that data can be written to Hologres. This occurs in the following cases:

-   The upstream schema uses a DECIMAL type column as the primary key.
    
    Because Hologres does not support the DECIMAL type as a primary key, the column type is rewritten to BIGINT by default. If this behavior does not meet your requirements, you can use the CTAS syntax to convert the type to STRING and re-establish the primary key.
    
-   The upstream schema contains a TIME, TIMESTAMP, or TIMESTAMP\_LTZ type with a precision greater than 6.
    
    Because the time types supported by Hologres have a precision of 6, Flink implicitly discards any precision beyond that to ensure that data can be written to Hologres.
    

### **Use as a destination catalog for** [CDAS](/help/en/flink/realtime-flink/developer-reference/create-database-as-statement#concept-2156279)

-   Syntax
    
    ```
    CREATE DATABASE IF NOT EXISTS `${catalog_name}`.`${db_name}`
    WITH (
      'sink.parallelism' = '5' -- Set the concurrency for each sink table.
    ) AS DATABASE ${other_source_database};
    ```
    
-   Example
    
    ```
    CREATE DATABASE IF NOT EXISTS `holocatalog`.`holodb`
    WITH (
      'sink.parallelism' = '5' -- Set the concurrency for each sink table.
    ) AS DATABASE source_database;
    ```
    

WITH parameter settings:

-   Declare parameters for sink tables: When a job starts, these parameters are applied to the downstream tables that need to be synchronized. For more information about the supported parameters, see [Hologres sink table](/help/en/doc-detail/178795.html#concept-2481852).
    
-   Specify schemaname: Synchronize data to the specified schema of the destination Hologres database. The following table describes the parameter.
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Remarks**
    
    schemaname
    
    The schema name.
    
    No
    
    The default value is public.
    
-   Set physical table properties: Each destination table may require different table properties. The WITH clause does not support setting properties for each table separately.
    
    To set table properties, you must manually create the destination table before you start the CDAS job. For more information about physical table properties, see [Create a Hologres catalog](#section-yyg-blr-h3j).
    

## Delete a Hologres catalog

**Important**

Deleting a Hologres catalog does not affect running jobs. However, it affects jobs that are not yet published or jobs that need to be paused and resumed. Perform this operation with caution.

## UI

1.  Go to the Catalogs page.
    
    1.  Log on to [Realtime Compute for Apache Flink's Management Console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
        
    2.  In the **Actions** column of your workspace, click **Console**.
        
    3.  Click **Catalogs**.
        
2.  On the **Catalog List** page, find the target catalog and click **Delete** in the **Actions** column.
    
3.  In the dialog box, click **Delete**.
    
4.  After the deletion is complete, verify that the target catalog has been removed from the **Catalogs** section on the left.
    

## Flink SQL

1.  In the editor of the [Data Query](/help/en/flink/realtime-flink/user-guide/sql-scripts) page, enter the following command.
    
    ```
    DROP CATALOG ${catalog_name}
    ```
    
    In the command, ${catalog\_name} is the name of the Hologres catalog that you want to delete, as displayed in the Realtime Compute development console.
    
2.  Right-click the command to delete the catalog and select **Run**.
    
3.  In the **Metadata** section on the left, verify that the target catalog is deleted.
    

## **FAQ**

-   Real-time data consumption from Hologres: [FAQ about catalog errors](/help/en/flink/realtime-flink/support/faq-about-sql-and-catalog-errors#8a044a6964ojg)
    
-   Troubleshooting network issues: [Network connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#7fc6bce322b3f)
    
-   Upstream and downstream storage limitations: [What do I do if the error message "CREATE TABLE ... AS TABLE ... statement requires target catalog ... implements org.apache.flink.table.catalog.CatalogTableProvider interface." appears?](/help/en/flink/realtime-flink/support/faq-about-sql-and-catalog-errors#4fd63b7760133)
    

## **References**

-   Hologres WITH parameters: [Connector options](/help/en/flink/realtime-flink/developer-reference/hologres-connector/#section-r91-f4z-7lp)
    
-   Scenarios for Hologres catalogs:
    
    -   [Ingest log data into data warehouses in real time](/help/en/flink/realtime-flink/getting-started/ingest-log-data-into-data-warehouses-in-real-time)
        
    -   [Build a real-time data warehouse with Flink and Hologres](/help/en/flink/realtime-flink/use-cases/build-real-time-data-warehouse-based-on-flink-hologres)
