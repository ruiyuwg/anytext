After you create a MySQL catalog, you can access the tables of a MySQL instance in the MySQL catalog in the development console of Realtime Compute for Apache Flink. You can also use the tables in Flink SQL deployments. This topic describes how to create and use a MySQL catalog.

## Background information

When you use a MySQL catalog, take note of the following points:

-   You can directly access a table of a MySQL instance without the need to execute DDL statements to register the MySQL table. This improves the efficiency and accuracy of data development.
    
-   Tables of MySQL catalogs can be used as MySQL Change Data Capture (CDC) source tables, MySQL sink tables, and MySQL dimension tables in Realtime Compute for Apache Flink SQL deployments.
    
-   Catalogs of ApsaraDB RDS for MySQL, PolarDB for MySQL, and self-managed MySQL databases are supported.
    
-   Sharding-based logical tables can be directly accessed.
    
-   You can use the CREATE DATABASE AS and CREATE TABLE AS statements to synchronize full data of a database, the merged data of sharded tables in a sharded database, and changes in table schemas based on MySQL data sources.
    

## Limits

-   The MySQL instance and Realtime Compute for Apache Flink must reside in the same virtual private cloud (VPC). If the MySQL instance does not reside in the same VPC as Realtime Compute for Apache Flink or you want to access the MySQL instance and Realtime Compute for Apache Flink over the Internet, you must establish network connections. For more information, see [FAQ about network connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity).
    
-   You cannot modify the configuration of a catalog after the catalog is created. To modify the catalog, you must drop it and create another one.
    
-   You can only query data in existing databases and tables. You cannot to create databases or tables by using Realtime Compute for Apache Flink.
    
-   If a table of a MySQL catalog is used as a MySQL CDC source table, you can read data from the source table only in streaming mode. You cannot read data from the source table in batch mode.
    
    **Note**
    
    If a table of a MySQL catalog is used as a MySQL CDC source table, you must enable binary logging on the ApsaraDB RDS for MySQL, PolarDB for MySQL, or self-managed MySQL database. For more information, see [Configure a MySQL database](/help/en/flink/configure-a-mysql-database#concept-2116236).
    
-   Tables that are created by using the syntax specific to PolarDB in the CREATE TABLE statement cannot be identified.
    
    For example, if a table is created by using the ``PARTITION BY KEY(`idempotent_id`) PARTITIONS 16, UNIQUE KEY `uk_order_id` (`order_id`)`` syntax in the CREATE TABLE statement, MySQL catalogs cannot identify the table.
    
-   Views cannot be used as tables in the MySQL catalog created in Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 8.0.7 or later.
    
-   Only MySQL 5.7 and MySQL 8.0.x are supported.
    

## Create a MySQL catalog

You can create a MySQL catalog on the UI or by executing an SQL statement.

## UI (recommended)

1.  Go to the Catalogs page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai). Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    2.  In the left-side navigation pane, click Data Management.
        
2.  On the Catalog List page, click **Create Catalog**. On the Built-in Catalog tab of the Create Catalog dialog box, click **MySQL** and click **Next**.
    
3.  In the Configure Catalog step, configure the parameters.
    
    **Important**
    
    After you create a catalog, the following parameter configurations cannot be modified. To modify the catalog, you must drop it and create another one.
    
    ![配置信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0623546371/p370905.png)
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    catalogname
    
    The name of the custom MySQL catalog.
    
    Yes
    
    hostname
    
    The IP address or hostname that is used to access the MySQL database.
    
    **Note**
    
    If the **MySQL instance does not reside in the same VPC as Realtime Compute for Apache Flink** or you want to **access the MySQL instance and Realtime Compute for Apache Flink over the Internet**, you must establish network connections. For more information, see [FAQ about network connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity).
    
    Yes
    
    port
    
    The port number of the MySQL database. Default value: 3306.
    
    No
    
    default-database
    
    The name of the default MySQL database.
    
    Yes
    
    username
    
    The username that is used to access the MySQL database.
    
    Yes
    
    password
    
    The password that is used to access the MySQL database.
    
    To prevent risks caused by a plaintext AccessKey pair, we recommend that you use a variable to specify this parameter. In the sample figure, a variable named mysqlpw is used. For more information, see [Create a variable](/help/en/flink/realtime-flink/user-guide/manage-keys#1a7615b9a3g9p).
    
    Yes
    
4.  Click **Confirm**.
    
    In the **Catalogs** pane on the left side of the Catalog List page, view the catalog that you created.
    

## SQL

1.  Go to the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) page.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai). Find the workspace that you want to manage and click **Console** in the **Actions** column.
        
    2.  In the left-side navigation pane, choose **Development** > **Scripts**.
        
2.  Click ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3003614071/p741551.png) and select **New Script**. In the dialog, enter a script name, select a location, and click **Save**.
    
3.  Copy and paste the following code:
    
    ```
    CREATE CATALOG YourCatalogName WITH(
      'type' = 'mysql',
      'hostname' = 'rm-bp1gcn0q0j0******.mysql.rds.aliyuncs.com',
      'port' = '3306',
      'username' = 'usertest',
      'password' = '${secret_values.mysqlpw}',
      'default-database' = 'flinktest',
      'catalog.table.metadata-columns'='table_name'
    );
    ```
    
    **Option**
    
    **Description**
    
    **Required**
    
    YourCatalogName
    
    The name of the custom MySQL catalog.
    
    Yes
    
    type
    
    The type of the catalog. Set the value to mysql.
    
    Yes
    
    hostname
    
    The IP address or hostname that is used to access the MySQL database.
    
    **Note**
    
    To access MySQL across VPCs or over the Internet, you must establish network connections. For more information, see [FAQ about network connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity).
    
    Yes
    
    port
    
    The port number of the MySQL database. Default value: 3306.
    
    No
    
    default-database
    
    The name of the default MySQL database.
    
    Yes
    
    username
    
    The username that is used to access the MySQL database.
    
    Yes
    
    password
    
    The password that is used to access the MySQL database.
    
    To prevent risks caused by a plaintext AccessKey pair, we recommend that you use a variable to specify this option. The sample code uses a variable named `mysqlpw`. For more information, see [Create a variable](/help/en/flink/realtime-flink/user-guide/manage-keys#1a7615b9a3g9p).
    
    Yes
    
    property-version
    
    The version of the catalog option. Valid values: 0 and 1. While 0 is the default value, 1 is **recommended**.
    
    The available options and the default values of the options may vary based on the version of the catalog option. For more information, see the option description.
    
    **Note**
    
    -   Only VVR 8.0.6 or later supports this option.
        
    -   In VVR 11.1 or later, the default value is `1`.
        
    
    No
    
    catalog.table.metadata-columns
    
    The [metadata](/help/en/flink/realtime-flink/developer-reference/mysql-connector/#d5158046e443r) columns in a MySQL CDC source table that you want to add to the schema of a table when you query the table. By default, no metadata column is added.
    
    Separate multiple metadata columns with semicolons (;). Example: `op_ts;table_name;database_name`.
    
    **Note**
    
    -   Only VVR 6.0.5 or later supports this option.
        
    -   If you specify this option, the specified metadata columns are added to the schema of the returned table. The metadata columns are available only in MySQL CDC source tables. Therefore, the tables that are created in the MySQL catalog can be used as only source tables and cannot be used as sink tables or dimension tables.
        
    
    No
    
    catalog.table.treat-tinyint1-as-boolean
    
    Specifies whether to map the TINYINT(1) and BOOLEAN data types of MySQL to the BOOLEAN data type of Flink when Realtime Compute for Apache Flink obtains the schema of a table. Valid values:
    
    -   true: The TINYINT(1) and BOOLEAN data types of MySQL are mapped to the BOOLEAN data type of Flink.
        
    -   false: The TINYINT(1) and BOOLEAN data types of MySQL are mapped to the TINYINT data type of Flink.
        
    
    Default value:
    
    -   If you set the property-version option to 0, the default value of this option is `true`.
        
    -   If you set the property-version option to 1, the default value of this option is `false`.
        
    
    **Note**
    
    -   Only VVR 8.0.4 or later supports this option.
        
    -   We recommend that you use fields of the TINYINT(1) data type of MySQL to store only values 0 and 1. You must select data types that meet your business requirements for mapping. For more information, see [Type mapping](/help/en/flink/realtime-flink/developer-reference/mysql-connector/#section-wfd-9m8-blm).
        
    
    No
    
4.  Select the code for catalog creation and click **Run** on the left side of the code.
    
    The `The following statement has been executed successfully!` message indicates the catalog is created.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0623546371/p669542.png)
    

## View and drop a MySQL catalog

## UI (recommended)

On the **Catalogs** page, click the created catalog to view the **Name** and **Type** parameters of the catalog in the **Catalog List** section.

-   View a catalog: Click **View** in the **Actions** column of the catalog that you want to manage and view the databases and tables in the catalog.
    
    The comment field is not displayed in the table schema details.
    
-   Drop a catalog: Click **Delete** in the **Actions** column of the catalog that you want to delete.
    
    The drop operation only drops the catalogs that you create and does not drop the tables in the related services. After a catalog is dropped, the running deployments that use a table in the catalog are not adversely affected. If the deployments are redeployed or restarted, an error occurs, indicating that the table cannot be found. Exercise caution when you perform drop operations.
    

## SQL

1.  In the code editor of the [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts) tab on the Scripts page, enter the following code:
    
    ```
    -- View the schema information of the table in the catalog. The comment field is not displayed. 
    DESCRIBE `<catalogname>`.`<dbname>`.`<tablename>`;
    
    -- Drop a catalog.
    DROP CATALOG `<catalogname>`;
    ```
    
    **Note**
    
    The drop operation only drops the catalogs that you create and does not drop the tables in the related services. After a catalog is dropped, the running deployments that use a table in the catalog are not affected. If the deployments are redeployed or restarted, an error will occur indicating that the table cannot be found. Exercise caution when you perform drop operations.
    
2.  Right-click the statements and choose **Run** from the shortcut menu.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4806400471/p902272.png)
    

## Use a MySQL catalog

### **Read data from a MySQL source table**

```
INSERT INTO `<othersinktable>`
SELECT ...
FROM `<mysqlcatalog>`.`<dbname>`.`<tablename>` /*+ OPTIONS('server-id' = '6000-6008') */;
```

If you use a table of a MySQL catalog as the MySQL CDC source table, we recommend that you use [SQL hints](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/sql/queries/hints/) to set the server-id parameter to a unique value for each deployment. If you want to run multiple deployments to read data from the source table at the same time, you must set the server-id parameter to a value range. The number of server-id values in the value range must be greater than or equal to the parallelism of deployments.

### **Read data from the sharding-based MySQL logic tables**

MySQL catalogs allow you to configure the databases and tables in a sharded database as a logical table in a query statement by using regular expressions and execute the query statement to read data from the logical table.

For example, if a sharded MySQL database contains tables, such as user01, user02, and user99, in database shards from db01 to db10 and the schemas of all the tables are compatible with each other, you can access all the tables in the database shards by using the following regular expression:

```
SELECT ... FROM `db.*`.`user.*` /*+ OPTIONS('server-id'='6000-6018') */;
```

The query result contains two additional system fields \_db\_name (STRING) and \_table\_name (STRING). The two fields and the primary key of the original tables are used as the new joint primary key of the logical table to ensure that the joint primary key is unique. If the primary keys of the tables from user01 to user99 are id, the joint primary key of the logical table named user is (\_db\_name, \_table\_name, id).

MySQL catalogs allow you to use regular expressions to match multiple tables to be synchronized. This way, you can merge and synchronize data in multiple tables of a sharded database. For more information, see [Consolidate and synchronize table and database shards](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#88444c602b8xk).

### **Execute the CREATE TABLE AS and CREATE DATABASE AS statements to synchronize MySQL data changes and schema changes in real time**

**Note**

When you synchronize data, you must use [a upstream and downstream data store that is supported](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#section-6cg-tqj-k0s) by the CREATE TABLE AS and CREATE DATABASE AS statements. For example, when the MongoDB connector is used as a sink table, this error will be reported: [CREATE TABLE ... AS TABLE ... statement requires target catalog ... implements org.apache.flink.table.catalog.CatalogTableProvider interface.](/help/en/flink/realtime-flink/support/faq-about-sql-and-catalog-errors#f3dc5b8c93zxy)

The CREATE TABLE AS statement can synchronize data from a single table, synchronize table schema changes, merge and synchronize data from multiple tables in a sharded database, and add custom computed columns. You can also add a CREATE TABLE AS statement in a data synchronization deployment. For more information, see [CREATE TABLE AS (CTAS)](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#concept-2156279). The CREATE DATABASE AS statement can synchronize table schemas and data of an entire database in real time. This statement can also synchronize changes of table schemas. For more information, see [CREATE DATABASE AS (CDAS)](/help/en/flink/realtime-flink/developer-reference/create-database-as-statement#concept-2156279).

```
-- Single-table synchronization: Synchronize schema changes and data changes of tables in real time. 
CREATE TABLE IF NOT EXISTS `<targetcatalog>`.`<targetdbname>`.`<targettablename>`
WITH (...)
AS TABLE `<mysqlcatalog>`.`<dbname>`.`<tablename>`
/*+ OPTIONS('server-id'='6000-6018') */;

-- Database synchronization: Synchronize schema changes and data changes of the database in real time. 
CREATE DATABASE `<targetcatalog>`.`<targetdbname>` WITH (...)
AS DATABASE `<mysqlcatalog>`.`<dbname>` INCLUDING ALL TABLES
/*+ OPTIONS('server-id'='6000-6018') */;   
```

For example, you can synchronize data from a MySQL database to Hologres. For more information, see [Use a Hologres catalog](/help/en/flink/realtime-flink/user-guide/manage-hologres-catalogs#section-x6a-as1-mbe).

```
USE CATALOG holocatalog; -- Specify a catalog.

CREATE TABLE IF NOT EXISTS holotable -- Specify the name of the table to which data is synchronized. If you do not specify the database level, the table is automatically synchronized to the default database of the catalog.  
WITH ('jdbcWriteBatchSize' = '1024')   -- Optionally configure connector options for the sink table. 
AS TABLE mysqlcatalog.dbmysql.mysqltable   
/*+ OPTIONS('server-id'='8001-8004') */; -- Configure additional options for the MySQL CDC source table.
```

### **Read data from a MySQL dimension table**

```
INSERT INTO `<othersinktable>`
SELECT ...
FROM `<othersourcetable>` AS e
JOIN `<mysqlcatalog>`.`<dbname>`.`<tablename>` FOR SYSTEM_TIME AS OF e.proctime AS w
ON e.id = w.id;
```

### **Write data to a MySQL table**

```
INSERT INTO `<mysqlcatalog>`.`<dbname>`.`<tablename>`
SELECT ...
FROM `<othersourcetable>`
```
