StarRocks catalogs provide metadata, such as databases, tables, and partitions. The metadata also includes functions and information that are required to access data stored in a database or other external systems. After you create a StarRocks catalog, you can use the StarRocks catalog to read the StarRocks metadata in the development console of Realtime Compute for Apache Flink without the need to manually register a StarRocks table. This improves the efficiency of draft development and ensures data correctness. This topic describes how to create, view, use, and drop a StarRocks catalog in the development console of Realtime Compute for Apache Flink.

## Limitations

-   Only Realtime Compute for Apache Flink whose engine version is vvr-6.0.6-flink-1.15 or later supports StarRocks catalogs.
    
-   You cannot create or modify StarRocks tables by using StarRocks catalogs.
    

## Create a StarRocks catalog

You can create a StarRocks catalog on the UI or by executing an SQL statement. We recommend that you create a StarRocks catalog on the UI.

### Create a StarRocks catalog on the UI

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai). Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    2.  In the left-side navigation pane, click **Catalogs**.
        
2.  On the Catalog List page, click **Create Catalog**. In the **Create Catalog** wizard, click **StarRocks** on the **Built-in Catalog** tab and click **Next**.
    
3.  Configure the catalog:
    
    **Important**
    
    StarRocks catalog configurations cannot be modified in place after creation. To change them, drop the existing catalog and create a new one.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6436405171/p787041.png)
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Remarks**
    
    catalog name
    
    The name of the StarRocks catalog.
    
    Yes
    
    The name can contain only lowercase letters and digits. The name cannot contain uppercase letters or special characters, such as hyphens (-) and underscores (\_).
    
    endpoint
    
    The endpoint of a frontend (FE) node of StarRocks.
    
    Yes
    
    The endpoint includes the specified IP address and JDBC port of an FE. You must configure this parameter in the `jdbc:mysql://ip:port` format. In most cases, the port number is 9030.
    
    dbname
    
    The name of the default StarRocks database that you want to access.
    
    Yes
    
    N/A.
    
    username
    
    The username that is used to access StarRocks.
    
    Yes
    
    N/A.
    
    password
    
    The password that is used to access StarRocks.
    
    Yes
    
    To prevent password leaks, use variables in place of plaintext password. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
4.  Click **Confirm**.
    
5.  View the created catalog.
    

### Create a StarRocks catalog using Flink SQL

1.  In the SQL editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) page, enter the following statement to create a StarRocks catalog:
    
    ```
    CREATE CATALOG <catalogname> WITH (
      'type' = 'starrocks',
      'endpoint' = '<ip>:<port>', 
      'username' = '<userName>',
      'password' = '<password>',
      'dbname' = '<dbname>'
    );
    ```
    
    ## VVR 11+
    
    **Configuration option**
    
    **Description**
    
    **Required**
    
    **Notes**
    
    catalogname
    
    The name of your StarRocks catalog.
    
    Yes
    
    The name can contain only lowercase letters (a-z) and digits (0-9).
    
    type
    
    The connector type.
    
    Yes
    
    Set it to `starrocks`.
    
    endpoint
    
    The endpoint of the StarRocks FrontEnd (FE).
    
    No
    
    Specify the IP address and JDBC port of the FE. Format: `jdbc:mysql://ip:port`. Default port: 9030.
    
    jdbc-url
    
    Used to access the MySQL server on the FE node.
    
    No
    
    Separate multiple addresses with commas (,). Format: `jdbc:mysql://<fe_host1>:<fe_query_port1>,<fe_host2>:<fe_query_port2>`.
    
    **Important**
    
    This item must be configured with `http-url`. Alternatively, you can set `endpoint` to avoid configuring two separate options.
    
    http-url
    
    Used to access the HTTP server on the FE node.
    
    No
    
    Separate multiple addresses with semicolons (;). Format: `<fe_host1>:<fe_http_port1>;<fe_host2>:<fe_http_port2>`.
    
    **Important**
    
    This item must be configured with `http-url`. Alternatively, you can set `endpoint` to avoid configuring two separate options.
    
    username
    
    The username to access StarRocks.
    
    Yes
    
    password
    
    The password to access StarRocks.
    
    Yes
    
    To ensure security, use a variable instead of hardcoding your password in plaintext. For more information, see [Namespace variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).
    
    dbname
    
    The name of the default StarRocks database to access.
    
    No
    
    default-database
    
    The name of the default database to access in StarRocks.
    
    No
    
    This option serves compatibility purposes and has the same effect as `dbname`. Use either one.
    
    table.num-buckets
    
    The default number of buckets for each partition in a table created through the catalog.
    
    No
    
    table.char-expand-multiple
    
    The multiplication factor used to expand `VARCHAR` and `CHAR` column lengths in tables created via the catalog, relative to their source table lengths.
    
    No
    
    Default: 4.
    
    table.binary-padding
    
    The number of characters to append to `VARBINARY` and `BINARY` column lengths in tables created via the catalog, relative to their source table lengths.
    
    No
    
    The default is to add 2 characters.
    
    table.key-type
    
    The type of table to create through the catalog.
    
    No
    
    Valid values:
    
    -   `PRI` (default): Primary key table.
        
    -   `UNI`: Unique key table.
        
    -   `AGG`: Aggregate table.
        
    -   `DUP`: Duplicate key table.
        
    
    table.keys
    
    The key fields of the table created via the catalog.
    
    No
    
    table.distribution-keys
    
    The distribution key fields of the table created via the catalog.
    
    No
    
    table.enable-null-primary-key
    
    Specifies whether Flink treats nullable primary key columns in StarRocks as non-nullable.
    
    No
    
    Valid values:
    
    -   false (default)
        
    -   true
        
    
    **Important**
    
    When setting this configuration option to `true`, ensure upstream data has no NULL values in these columns to avoid unexpected issues.
    
    ## VVR 8 and earlier
    
    **Configuration option**
    
    **Description**
    
    **Required**
    
    **Notes**
    
    catalogname
    
    The name of the StarRocks catalog.
    
    Yes
    
    The name can contain only lowercase letters (a-z) and digits (0-9).
    
    type
    
    The type.
    
    Yes
    
    Set it to `starrocks`.
    
    endpoint
    
    The endpoint of the StarRocks FE.
    
    Yes
    
    Specify the IP address and JDBC port of the FE. The format is `jdbc:mysql://ip:port`. The default port is 9030.
    
    username
    
    The username to access StarRocks.
    
    Yes
    
    password
    
    The password to access StarRocks.
    
    Yes
    
    To prevent password leaks, use variables instead of hardcoding your password in plaintext. For more information, see [Namespace variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).
    
    dbname
    
    The name of the default database to access in StarRocks.
    
    Yes
    
2.  Select the code that is used to create a catalog and click **Run** that appears on the left side of the code.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9732228071/p677444.png)
    

## View a StarRocks catalog

After a StarRocks catalog is created, you can perform the following steps to view the StarRocks metadata.

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    3.  In the left-side navigation pane, click **Catalogs**.
        
2.  On the **Catalog List** page, find the desired catalog and view the **Name** and **Type** columns of the catalog.
    
    **Note**
    
    If you want to view the databases and tables in the catalog, click **View** in the Actions column.
    

## Use a StarRocks catalog

### Read data from a StarRocks table

## **VVR 11+**

```
INSERT INTO ${other_sink_table}
SELECT ...
FROM `${catalog_name}`.`${db_name}`.`${table_name}`
```

## **VVR 8 and earlier**

**Note**

The OPTIONS parameter is required. This parameter specifies the parameters that are used to read data from a StarRocks source table.

```
INSERT INTO ${other_sink_table}
SELECT ...
FROM `${catalog_name}`.`${db_name}`.`${table_name}`
    /*+
        OPTIONS('connector' = 'starrocks', 'jdbc-url' = 'jdbc:mysql://ip:port', 'scan-url' = 'ip:port')
    */
```

### Write result data to a StarRocks table

## **VVR 11+**

```
INSERT INTO `${catalog_name}`.`${db_name}`.`${table_name}`
SELECT ... 
FROM ${other_source_table}
```

## **VVR 8 and earlier**

**Note**

The OPTIONS parameter is required. This parameter specifies the parameters that are used to write data to a StarRocks result table.

```
INSERT INTO `${catalog_name}`.`${db_name}`.`${table_name}`
 /*+
        OPTIONS('connector' = 'starrocks', 'jdbc-url' = 'jdbc:mysql://ip:port', 'load-url' = 'ip:port', 'sink.buffer-flush.interval-ms' = '5000','sink.properties.row_delimiter' = '\x02',
'sink.properties.column_separator' = '\x01')
    */
SELECT ... 
FROM ${other_source_table}
```

### Use CTAS/CDAS statements to write to StarRocks

```
use catalog sr_catalog;

CREATE TABLE IF NOT EXISTS `${table_name}`
WITH (
  ...
) AS TABLE ${other_source_table};


CREATE DATABASE IF NOT EXISTS `${db_name}`
WITH (
 ...
) AS DATABASE ${other_source_database};
```

For more information, see [Ingest data from MySQL to StarRocks with Flink](/help/en/emr/emr-on-ecs/user-guide/use-the-ctas-and-cdas-statements-of-realtime-compute-for-apache-flink-to-synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-starrocks-cluster).

## Drop a StarRocks catalog

You can drop a StarRocks catalog on the UI or by executing an SQL statement. We recommend that you drop a StarRocks catalog on the UI.

### Drop a StarRocks catalog on the UI

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    3.  In the left-side navigation pane, click **Catalogs**.
        
2.  On the **Catalog List** page, find the desired catalog and click **Delete** in the **Actions** column.
    
3.  In the message that appears, click **Delete**.
    
4.  View the **Catalogs** pane on the left side of the Catalog List page to check whether the catalog is dropped.
    

### Drop a StarRocks catalog by executing an SQL statement

1.  In the code editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) tab on the SQL Editor page, enter the following statement:
    
    ```
    DROP CATALOG `<catalog name>`;
    ```
    
    `<catalog name>` is the name of the StarRocks catalog that you want to drop in the development console of Realtime Compute for Apache Flink.
    
    **Important**
    
    After you drop a StarRocks catalog, the deployments that are running are not affected but the deployments that are not published or need to be suspended are affected. Proceed with caution when you drop a StarRocks catalog.
    
2.  Right-click the statement that is used to drop the catalog and select **Run** from the shortcut menu.
    
3.  View the **Catalogs** pane on the left side of the Catalog List page to check whether the catalog is dropped.
