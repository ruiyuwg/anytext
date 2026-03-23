The CREATE DATABASE AS (CDAS) statement supports real-time synchronization of table schemas and data at the database level, along with synchronization of schema changes. This topic describes how to use the CDAS statement and its applicable scenarios.

**Note**

We recommend that you create a job [using YAML for data ingestion](/help/en/flink/realtime-flink/user-guide/develop-a-yaml-draft#38416d29efqxs). You can [convert existing SQL drafts containing CTAS or CDAS statements to YAML drafts](/help/en/flink/realtime-flink/user-guide/develop-a-yaml-draft#07274c4446pdr):

-   **Introduction**: You can develop a job by using YAML to synchronize data from the source to the destination.
    
-   **Advantages**: Key capabilities of CTAS and CDAS statements are supported, including synchronization of databases, tables, table schemas, and custom computed columns. Additionally, real-time schema evolution, synchronization of raw binary log data, the WHERE clause, and column pruning are also supported.
    

For more information, see [Data ingestion with Flink CDC](/help/en/flink/realtime-flink/use-cases/best-practices-for-configuring-data-ingestion-in-yaml-files/#8c711bf711br7).

## Background information

A syntactic sugar of [CREATE TABLE AS (CTAS)](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#concept-2156279), the CDAS statement is used to synchronize data from multiple or all tables in a database, and is ideal for automated data integration scenarios. It is often used with source and destination catalogs, which provide persistent metadata management capabilities for tables. The CDAS statement helps implement full and incremental data replication and synchronize data and schema changes, without the need to create target tables in advance.

The CDAS statement offers the following advantages:

-   Simplified syntax
    
    Realtime Compute for Apache Flink automatically converts a CDAS statement into CTAS statements, one CTAS statement per table. The CDAS statement inherits the CTAS statement's capabilities for data synchronization and schema evolution.
    
-   Optimized resources
    
    Realtime Compute for Apache Flink optimizes source tables by using a single source vertex to read from multiple business tables. This is especially beneficial for MySQL CDC sources, reducing database connections and preventing redundant binary log pulls, thus decreasing the overall read load on MySQL databases.
    

## **Core capabilities**

### **Data synchronization**

**Feature**

**Description**

[Synchronize a database](#f73ecb702crbj)

Performs full and incremental data synchronization from multiple tables (or all tables) in a database to each related sink table.

[Consolidate and synchronize database shards](#95f103f02c62q)

Matches source table names across database shards by using regular expressions, consolidates these tables, and synchronizes them to corresponding sinks.

[Synchronize new tables](#610d6a704auw7)

Synchronizes newly added tables by restarting your job from a savepoint.

[Execute multiple CDAS and CTAS statements](#1db555202cjlh)

Allows you to use the STATEMENT SET statement to commit multiple CDAS and CTAS statements as one job. You can also merge and reuse the data of source table operators to reduce the reading load on the data source.

### **Schema evolution**

During database data synchronization, schema changes (adding columns, etc.) can also be propagated to the sink. The policy is consistent with that of the CTAS statement. For more information, see [Schema evolution](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#28195f8606it8).

## **Startup process**

The following table shows the process of synchronizing data from MySQL to Hologres by using the CDAS statement.

**Flowchart**

**Description**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1786403771/CAEQPxiBgMD9t5KwuBkiIDEyYzNmOTQ2ZjZiYTRhYzA4NWFmNGM0ZDRmMmUwOThk5068151_20250422164422.575.svg)

When executing a CDAS statement, Realtime Compute for Apache Flink does the following:

1.  Verifies the existence of the destination database and sink tables.
    
    -   If the destination database is not found, Realtime Compute for Apache Flink creates a database via the destination catalog.
        
    -   If the destination database is found, Realtime Compute for Apache Flink skips database creation and checks for sink tables in the database.
        
        -   If sink tables are not found, Realtime Compute for Apache Flink creates sink tables that mirror source table names and schemas.
            
        -   If the sink tables are found, Realtime Compute for Apache Flink skips table creation.
            
2.  Commits and runs the data synchronization job.
    
    Data and schema changes are replicated from the source database to tables in the destination database.
    

## Prerequisites

The destination catalog is registered in the workspace. For more information, see [Catalogs](/help/en/flink/realtime-flink/user-guide/manage-catalogs/).

## Limits

### **Syntax limits**

-   Debugging an SQL draft that contains the CDAS statement is not supported.
    
-   MiniBatch is not supported.
    
    **Important**
    
    -   Ensure that MiniBatch configurations have been deleted before you create an SQL draft containing a CTAS or CDAS statement. Do the following:
        
        1.  Go to **O&M** > **Configurations**.
            
        2.  Select the **Deployment Defaults** tab.
            
        3.  In the **Other Configuration** section, verify MiniBatch configurations are removed.
            
    -   If errors are reported when you create a deployment from the SQL draft or start the deployment, see [How do I fix the "Currently does not support merge StreamExecMiniBatchAssigner type ExecNode in CTAS/CDAS syntax" error?](/help/en/flink/realtime-flink/support/data-synchronization#875c5f7f07lu1).
        
    

### **Supported upstream and downstream systems**

The following table lists the upstream and downstream systems supported by the CDAS statement:

**Connector**

**Source table**

**Sink table**

**Notes**

[MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/)

√

×

Views cannot be synchronized.

[Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/)

√

×

[MongoDB](/help/en/flink/realtime-flink/developer-reference/mongodb-connector)

√

×

-   Consolidation and synchronization of sharded tables and databases are not supported.
    
-   MongoDB metadata cannot be synchronized.
    
-   To synchronize data and schema changes from MongoDB to a destination store via the CDAS statement, see [Manage MongoDB catalogs](/help/en/flink/realtime-flink/user-guide/manage-mongodb-catalogs).
    

[Upsert Kafka](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector)

×

√

[Hologres](/help/en/flink/realtime-flink/developer-reference/hologres-connector/)

×

√

When Hologres serves as the destination system of data synchronization, the system automatically creates connections for each table based on the value of the `connectionSize` option. You can configure the same connection pool for multiple tables by using the `connectionPoolName` option.

**Note**

-   If data types in the source table are not supported by Hologres' [fixed plan](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#section-nlz-l8y-xaa) feature, use the [INSERT INTO](/help/en/flink/realtime-flink/developer-reference/insert-into-statement) statement for data synchronization instead. Do not use the CTAS statement, which delivers lower writing performance because fixed plans cannot be used.
    
-   Realtime Compute for Apache Flink can read from and write to an exclusive Hologres instance. [A Hologres shared cluster instance](/help/en/hologres/user-guide/shared-cluster-lake-warehouse/) is not supported.
    

[StarRocks](/help/en/flink/realtime-flink/developer-reference/starrocks-connector)

×

√

Support is limited to StarRocks on Alibaba Cloud EMR.

[Paimon](/help/en/flink/realtime-flink/developer-reference/apache-paimon-connector)

×

√

N/A.

## **Usage notes**

-   Synchronization of new tables
    
    -   VVR 8.0.6 or later: After a table is added, create a savepoint and restart your job from the savepoint to capture and synchronize the new table. For more information, see [Synchronize new tables](#610d6a704auw7).
        
    -   VVR 8.0.5 or earlier: New tables are not captured or synchronized via job retarts. Use either of the following methods instead:
        
        **Method**
        
        **Description**
        
        Create a new job to synchronize new tables
        
        Leave the existing job as is. Create a new job to synchronize new tables. Sample code:
        
        ```
        -- Create a job to sync data from the new table named new_table
        CREATE TABLE IF NOT EXISTS new_table
        AS TABLE mysql.tpcds.new_table 
        /*+ OPTIONS('server-id'='8008-8010') */;
        ```
        
        Clean up synced data and restart your job
        
        Do the following:
        
        1.  Cancel the existing job.
            
        2.  Clean up synchronized data in the sink.
            
        3.  Restart the job without states to synchronize data again.
            
        
-   Read/write access to external systems
    
    To ensure successful operations, grant necessary read/write permissions to your account when:
    
    -   Accessing external resources across accounts;
        
    -   Accessing external resources as a RAM user or RAM role.
        

## Syntax

```
CREATE DATABASE IF NOT EXISTS <target_database>
[COMMENT database_comment]
[WITH (key1=val1, key2=val2, ...)]
AS DATABASE <source_database>
INCLUDING { ALL TABLES | TABLE 'table_name' }
[EXCLUDING TABLE 'table_name']
[/*+ OPTIONS(key1=val1, key2=val2, ... ) */]

<target_database>:
  [catalog_name.]db_name

<source_database>:
  [catalog_name.]db_name
```

The CDAS statement uses the basic syntax of the CREATE DATABASE statement. The following table describes the parameters:

**Parameter**

**Description**

target\_database

The destination database name. Optionally include the destination catalog name.

COMMENT

The description of the destination database. The description of source\_database is automatically used.

WITH

The options for the destination database. For more information, see the respective document under [Catalogs](/help/en/flink/realtime-flink/user-guide/manage-catalogs/).

**Note**

Both the key and value must be of the string type, such as 'sink.parallelism' = '4'.

source\_database

The source database name. Optionally include the source catalog name.

INCLUDING ALL TABLES

Specifies that all tables in the source database are synchronized.

INCLUDING TABLE

Specifies tables for synchronization. Separate multiple tables with vertical bars (|). You can use a regular expression to include all tables based on specific naming patterns. For example, INCLUDING TABLE 'web.\*' synchronizes all tables with names starting with `web` in the source database.

EXCLUDING TABLE

Specifies tables excluded from synchronization. Separate multiple tables with vertical bars (|). You can use a regular expression to include all tables based on specific naming patterns. For example, INCLUDING TABLE 'web.\*' synchronizes all tables with names starting with `web` in the source database.

OPTIONS

The connector options for the source table. For more information, see the respective document under [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors#undefined).

**Note**

Both the key and value must be of the string type, such as 'server-id' = '65500'.

**Note**

-   **The** `**IF NOT EXISTS**` **keyword is required**. It prompts the system to check the sink table's existence in the destination store. If it is absent, the system will create a sink table. If it is present, table creation is skipped.
    
-   The created sink table **shares the source table's schema**, including the primary key and physical field names and types, but excludes computed columns, metadata fields, and watermark configurations.
    
-   Realtime Compute for Apache Flink **performs data type mappings** from the source table to the sink table during data synchronization. For more information about data type mappings, see the specific [connector](/help/en/flink/realtime-flink/developer-reference/supported-connectors#undefined) document.
    

## Examples

### **Synchronize a database**

**Description**: Synchronize all tables from the `tpcds` MySQL database to Hologres.

**Prerequisites**: The following catalogs are created in your workspace:

-   A Hologres catalog named `holo`.
    
-   A MySQL catalog named `mysql`.
    

**Sample code**:

```
USE CATALOG holo;

CREATE DATABASE IF NOT EXISTS holo_tpcds  -- Create a database named holo_tpcds in Hologres.
WITH ('sink.parallelism' = '4') -- Optionally configure the options for the destination database. By default, the sink parallelism for Hologres is set to 4.
AS DATABASE mysql.tpcds INCLUDING ALL TABLES  -- Synchronize all tables.
/*+ OPTIONS('server-id'='8001-8004') */ ; -- Optionally configure options for the MySQL CDC source table.
```

**Note**

Options configured for the destination database in the WITH clause apply only to the current job to control writing behavior. They are not persisted in the Hologres catalog. For information about supported connector options, see [Hologres](/help/en/flink/realtime-flink/developer-reference/hologres-connector/).

### **Synchronize data across database shards**

**Description**: A MySQL instance has multiple database shards named from `order_db01` to `order_db99`. Each database shard contains multiple tables, such as `order` and `order_detail`. The CDAS statement can be used to synchronize all tables, along with data and schema changes, in these database shards to Hologres.

**Solution**:

Use the **regular expression** for the database name (\`order\_db\[0-9\]+\`) to match all database shards (`order_db01` to `order_db99`) for synchronization. The database and table names are added to each sink table as two additional fields.

The Hologres table's primary key includes the database name, table name, and source table's primary key columns to ensure uniqueness.

There is no need to create target tables in advance.

**Sample code and results**:

Tables with identical names across database shards are merged before being synchronized into a single Hologres table.

**Sample code**

**Results**

```
USE CATALOG holo;

CREATE DATABASE IF NOT EXISTS holo_order  -- Create a database named holo_order in Hologres. The database contains all tables in the order_db database shards of the MySQL instance.
WITH('sink.parallelism'='4')        -- Specify the parameters of the destination database. By default, the parallelism of each Hologres sink is 4. The setting is optional.
AS DATABASE mysql.`order_db[0-9]+` INCLUDING ALL TABLES -- Synchronize data from all tables in the order_db database shards of the MySQL instance.
/*+OPTIONS('server-id'='8001-8004')*/;  -- Specify additional parameters for the MySQL CDC source table. The setting is optional.
```

![order1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8807318561/p440137.png)

### Synchronize new tables

**Description**: After a job that synchronizes data via the CDAS statement is started, new tables are added and need to be synchronized.

**Solution**: Enable new table detection for the job and restart it from a savepoint to capture and synchronize newly added tables.

**Limits**: New table detection is supported in VVR 8.0.6 or later. To enable this feature, make sure that the startup mode of the source table is set to initial.

**Procedure**:

1.  On the **Deployments** page, find the target deployment and click **Cancel** in the **Actions** column.
    
2.  In the dialog, expand the **More Strategies** section, select **Stop With Savepoint**, and click **OK**.
    
3.  In the job's SQL draft, add the following statement to enable new table detection:
    
    ```
    SET 'table.cdas.scan.newly-added-table.enabled' = 'true';
    ```
    
4.  Click **Deploy**.
    
5.  Recover the job from the savepoint.
    
    1.  On the **Deployments** page, click the name of your deployment.
        
    2.  On the deployment details page, click the **State** tab. Then, click the **History** subtab.
        
    3.  In the **Savepoints** list, find the savepoint created when the job was canceled.
        
    4.  Choose **More** > **Start job from this savepoint** in the **Actions** column. For more information, see [Start a job](/help/en/flink/realtime-flink/user-guide/start-a-deployment).
        

### **Execute multiple CDAS and CTAS statements**

**Description**: Synchronize data from the `tpcds` database, the `tpch` database, and the `user_db01` to `user_db99` database shards to Hologres in a single job.

**Solution**: Use the `STATEMENT SET` statement to group multiple CDAS and CTAS statements. This solution reuses a source vertex to read data from required tables. This is especially beneficial with MySQL CDC data sources, reducing the number of server IDs, database connections, and overall read load on MySQL databases.

**Important**

-   To reuse the source and optimize performance, ensure the connector options for each source table are identical.
    
-   For information about the configuration of server IDs, see [Set the Server ID to avoid Binlog consumption conflicts](/help/en/flink/realtime-flink/developer-reference/best-practices-for-mysql-connector#e51133dc73tro).
    

**Sample code**:

```
USE CATALOG holo;

BEGIN STATEMENT SET;

-- Synchronize data from the user tables across database shards.
CREATE TABLE IF NOT EXISTS user
AS TABLE mysql.`user_db[0-9]+`.`user[0-9]+`
/*+ OPTIONS('server-id'='8001-8004') */;

-- Synchronize data from the tpcds database.
CREATE DATABASE IF NOT EXISTS holo_tpcds
AS DATABASE mysql.tpcds INCLUDING ALL TABLES
/*+ OPTIONS('server-id'='8001-8004') */ ;
-- Synchronize data from the tpch database.
CREATE DATABASE IF NOT EXISTS holo_tpch
AS DATABASE mysql.tpch INCLUDING ALL TABLES
/*+ OPTIONS('server-id'='8001-8004') */ ;

END;
```

### **Synchronize data in a database to Kafka via multiple CDAS statements**

**Description**: Synchronize data in tables from multiple MySQL databases (`tpcds` and `tpch`, etc.) to Kafka.

**Solution**: When you use multiple CDAS statements to synchronize data in a database to Kafka, tables with identical names may exist in different databases. To prevent topic conflicts, configure the `cdas.topic.pattern` option to define the pattern of topic names. You can use the `{table-name}` placeholder. For example, specifying `'cdas.topic.pattern'='dbname-{table-name}'` results in data replicated from in the `table1` table in the `db1` database to the `dbname-table1` Kafka topic.

**Sample code**:

```
USE CATALOG kafkaCatalog;

BEGIN STATEMENT SET;

-- Synchronize data from the tpcds database.
CREATE DATABASE IF NOT EXISTS kafka
WITH ('cdas.topic.pattern' = 'tpcds-{table-name}')
AS DATABASE mysql.tpcds INCLUDING ALL TABLES
/*+ OPTIONS('server-id'='8001-8004') */ ;

-- Synchronize data from the tpch database.
CREATE DATABASE IF NOT EXISTS kafka
WITH ('cdas.topic.pattern' = 'tpch-{table-name}')
AS DATABASE mysql.tpch INCLUDING ALL TABLES
/*+ OPTIONS('server-id'='8001-8004') */ ;

END;
```

By introducing Kafka as an intermediate layer between MySQL and Flink, you can reduce the load on MySQL. For more information, see [Synchronize MySQL database to Kafka with Flink CDC](/help/en/flink/realtime-flink/use-cases/synchronize-data-from-all-tables-in-a-mysql-database-to-kafka).

## **FAQ**

## **Runtime errors**

-   [What do I do if a job cannot be started?](/help/en/flink/realtime-flink/support/common-sql-errors#3020084ff0zm8)
    
-   [What do I do if a job restarts unexpectedly?](/help/en/flink/realtime-flink/support/common-sql-errors#342cd0c2f3x16)
    
-   [What do I do if the error message "akka.pattern.AskTimeoutException" appears?](/help/en/flink/realtime-flink/support/common-sql-errors#section-m2r-78k-tkc)
    

## **Job performance**

-   [How do I troubleshoot backpressure issues?](/help/en/flink/realtime-flink/support/faq-about-sql-performance#bf707479874be)
    
-   [What do I do if the data reading efficiency is low and backpressure exists when full data is read from tables?](/help/en/flink/realtime-flink/support/faq-about-sql-performance#b53b5399c0xdv)
    
-   [How do I troubleshoot high latency issues?](/help/en/flink/realtime-flink/support/faq-about-sql-performance#10948087ceaji)
    
-   [What do I do if the consumption of upstream data is unstable?](/help/en/flink/realtime-flink/support/faq-about-sql-performance#3d1d9a00c5lyb)
    

## **Data synchronization**

-   [Why does the data type of the primary key in a MySQL table change from BIGINT UNSIGNED to DECIMAL when I use the MySQL table to create a catalog in the development console of Realtime Compute for Apache Flink? Why does the data type of the primary key change to TEXT after I execute the CREATE TABLE AS statement to synchronize data to Hologres?](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage#adb58a1440628)
    
-   [How do I fix the "Currently does not support merge StreamExecMiniBatchAssigner type ExecNode in CTAS/CDAS syntax" error?](/help/en/flink/realtime-flink/support/data-synchronization#875c5f7f07lu1)
    
-   [Why do I get no output in the sink table?](/help/en/flink/realtime-flink/support/faq-about-data-validity#section-vob-c0t-yr7)
    
-   [How do I troubleshoot Flink source reading issues?](/help/en/flink/realtime-flink/support/faq-about-data-validity#a8c6606b6ck0i)
    
-   [How do I troubleshoot the issue that fully managed Flink cannot write data to the sink table?](/help/en/flink/realtime-flink/support/faq-about-data-validity#2ff8d3ef5aakp)
    
-   [How do I troubleshoot the data inaccuracy issue?](/help/en/flink/realtime-flink/support/faq-about-data-validity#f11539db8be7i)
    

## **References**

-   Popular catalogs used with CDAS and CTAS statements:
    
    -   [Manage MySQL Catalog](/help/en/flink/realtime-flink/user-guide/manage-mysql-catalogs)
        
    -   [Manage Hologres Catalog](/help/en/flink/realtime-flink/user-guide/manage-hologres-catalogs)
        
    -   [Manage Kafka JSON Catalog](/help/en/flink/realtime-flink/user-guide/manage-kafka-json-catalogs)
        
    -   [Manage MongoDB Catalog](/help/en/flink/realtime-flink/user-guide/manage-mongodb-catalogs)
        
-   Best practices:
    
    -   [CREATE TABLE AS (CTAS)](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement).
        
    -   [Synchronize MySQL database to Kafka with Flink CDC](/help/en/flink/realtime-flink/use-cases/synchronize-data-from-all-tables-in-a-mysql-database-to-kafka).
        
    -   [Quick start with real-time database ingestion](/help/en/flink/realtime-flink/getting-started/ingest-data-into-data-warehouses-in-real-time)
        
    -   [Build a real-time data warehouse with Hologres](/help/en/flink/realtime-flink/use-cases/build-real-time-data-warehouse-based-on-flink-hologres)
        
    -   [Build streaming lakehouse with Paimon and StarRocks](/help/en/flink/realtime-flink/use-cases/build-a-streaming-data-warehouse-based-on-flink-and-apache-paimon).
        
-   Data ingestion via YAML:
    
    -   [Quick start with Flink CDC data ingestion](/help/en/flink/realtime-flink/getting-started/quick-start-for-data-ingestion-yaml-jobs).
        
    -   [Create a YAML draft via CTAS/CDAS conversion](/help/en/flink/realtime-flink/user-guide/develop-a-yaml-draft)
