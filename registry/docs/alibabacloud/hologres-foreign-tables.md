This topic describes how to create a Hologres external table. It also explains how to specify a Hologres data source, configure STS authentication information or enable double signature, map a destination table, and provide Java Database Connectivity (JDBC) driver details in the CREATE EXTERNAL TABLE statement.

## **Introduction**

[Hologres](/help/en/hologres/product-overview/what-is-hologres#concept-1681168) is a real-time interactive analytics data warehouse compatible with the PostgreSQL protocol. It integrates seamlessly with MaxCompute at the storage layer. You can create a Hologres external table in MaxCompute to query data from a Hologres data source using the PostgreSQL JDBC driver and [STS authentication information](/help/en/hologres/security-and-compliance/ram-authorization-mode#section-xet-fgf-iem). This method avoids redundant storage and eliminates the need for data import or export, enabling fast query results.

## **Usage notes**

-   **Data Manipulation Language (DML) operations**
    
    -   MaxCompute does not support UPDATE or DELETE operations on Hologres external tables.
        
    -   The INSERT OVERWRITE operation is not supported for Hologres external tables.
        
        To overwrite data from MaxCompute to Hologres, read the external table that maps to the MaxCompute table from Hologres and use Hologres’s INSERT OVERWRITE semantics. For more information, see [INSERT OVERWRITE](/help/en/hologres/developer-reference/insert-overwrite).
        
-   **Data write risks**
    
    When you write large volumes of data to a Hologres external table, parallel writes across multiple processes may occasionally cause data rewrite, resulting in duplication.
    
-   **Partitions**
    
    Partitioned tables in Hologres do not correspond to partitioned tables in MaxCompute. Hologres external tables do not support partitions. However, in direct read mode, if you query a Hologres external table mapped to a partitioned parent table in Hologres, partition pruning applies when query conditions match the partition key columns of the child tables.
    
-   Hologres external tables do not support the cluster property.
    
-   Hologres external tables cannot be mapped to Dynamic Tables in Hologres.
    
-   [Supported data types](#6f8f75b82b0q6).
    

## **Create a Hologres external table**

Create a Hologres external table in STS mode or double-signature mode.

### **Notes**

**External table creation rules**

-   If you enable the IP address whitelist for Hologres, you must create the Hologres external table in double-signature mode. If you create it in STS mode, MaxCompute access to Hologres is blocked by the IP address whitelist.
    
-   For parent and child tables in Hologres, the table name is specified in the Hologres external table and SQL statements are executed. Both parent and child tables can be mapped to a Hologres external table, but parent tables are read-only.
    
-   When you write data to a Hologres external table, the [INSERT ON CONFLICT (UPSERT)](/help/en/hologres/developer-reference/insert-on-conflict#concept-1963560) mechanism of Hologres is not supported. If the Hologres source table has a primary key, ensure that the data you write does not violate primary key uniqueness constraints in the source table.
    
-   Table names and field names are case-insensitive. You cannot force case conversion when creating, querying, or referencing tables and fields.
    

**Schema compatibility**

If the schema of the Hologres source table differs from that of the external table:

-   **Inconsistent number of columns:** If the Hologres source table has fewer columns than the Data Definition Language (DDL) statement of the external table, an error occurs when reading data from Hologres. For example, the error message `column "xxx" does not exist` appears. If the Hologres source table has more columns than the DDL statement, the extra columns are ignored.
    
-   **Inconsistent column types:** MaxCompute does not support using the INT type to receive STRING data from a Hologres source table. You can use the STRING type to receive INT data, but this is not recommended.
    

### **Syntax**

When you create an external table, you must specify a StorageHandler and configure STS authentication information or enable double signature and specify the JDBC endpoint in the CREATE EXTERNAL TABLE DDL statement to access the Hologres data source.

#### **Create a Hologres external table in STS mode**

For sample code, see [Create a Hologres external table (STS mode)](#7ad1da2f93gll).

```
CREATE EXTERNAL TABLE [IF NOT EXISTS] <table_name>(
  <col1_name> <data_type>,
  <col2_name> <data_type>,
  ......
)
stored BY 'com.aliyun.odps.jdbc.JdbcStorageHandler'
WITH serdeproperties (
  'odps.properties.rolearn'='<ram_arn>')
location '<jdbc:postgresql://<endpoint>:<port>/<database>?ApplicationName=MaxCompute&[currentSchema=<schema>&][useSSL={true|false}&]table=<holo_table_name>/>' 
tblproperties (
  'mcfed.mapreduce.jdbc.driver.class'='org.postgresql.Driver', 
  'odps.federation.jdbc.target.db.type'='holo',
  'odps.federation.jdbc.colmapping'='<table_column1>:<source_column1>, <table_column2>:<source_column2>,...'
);
```

#### **Create a Hologres external table in double-signature mode**

For sample code, see [Create a Hologres external table (double-signature mode)](#bd7a289719tqr).

A Hologres external table created in double-signature mode allows the same RAM user to access authorized tables in MaxCompute and Hologres without manual authorization. This mode also supports the IP address whitelist feature of Hologres.

```
-- Enable the double-signature mode.
SET odps.sql.common.table.planner.ext.hive.bridge=true;
-- Create an external table.
CREATE EXTERNAL TABLE [IF NOT EXISTS]  <table_name>(
  <col1_name> <data_type>,
  <col2_name> <data_type>,
  ......
)
STORED BY '<com.aliyun.odps.jdbc.JdbcStorageHandler>'
LOCATION '<jdbc:postgresql://<endpoint>:<port>/<database>?ApplicationName=MaxCompute&[currentSchema=<schema>&][useSSL={true|false}&]table=<holo_table_name>/>' 
tblproperties (
  'mcfed.mapreduce.jdbc.driver.class'='org.postgresql.Driver', 
  'odps.federation.jdbc.target.db.type'='holo',
  ['odps.federation.jdbc.colmapping'='<table_column1>:<source_column1>, <table_column2>:<source_column2>,...']
);
```

### **Parameters**

**Parameter**

**Required**

**Description**

odps.sql.common.table.planner.ext.hive.bridge

Yes

Specifies whether to create the Hologres external table in double-signature mode. Set the value to `true` to enable this mode.

No

You do not need to specify this parameter if you create the Hologres external table in STS mode.

IF NOT EXISTS

No

-   If you do not specify the IF NOT EXISTS option and a table with the same name exists, an error is reported.
    
-   If you specify IF NOT EXISTS, a success message is returned regardless of whether a table with the same name exists. This is true even if the schema of the existing table is different from the schema of the table that you want to create. The metadata of the existing table is not changed.
    

table\_name

Yes

The name of the Hologres external table to be created in MaxCompute.

col\_name

Yes

The name of a column in the Hologres external table.

data\_type

Yes

The data type of a column in the Hologres external table.

STORED BY

Yes

Specifies the StorageHandler, which defines how to query the Hologres external table.

The value is fixed at `com.aliyun.odps.jdbc.JdbcStorageHandler`, which specifies the JdbcStorageHandler connection method.

ram\_arn

Yes

Required when you create a Hologres external table in STS mode. Specifies the Alibaba Cloud Resource Name (ARN) of the RAM role for STS authentication when you create the external table. For information about how to create and grant permissions to a RAM role, see [Authorize a regular RAM role in STS mode for Hologres](/help/en/maxcompute/security-and-compliance/sts-authorization#56ab3ff072loz).

1.  Log on to the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, choose **Identities** > **Roles**.
    
3.  On the **Roles** page, click the target **Role Name** to open its details page.
    
4.  In the **Basic Information** section, you can find the **ARN**.
    

No

You do not need to specify this parameter if you create the Hologres external table in double-signature mode.

LOCATION

Yes

The JDBC endpoint of the Hologres instance. The endpoint contains the following parameters:

-   endpoint: Required. The **classic network domain name** of the Hologres instance.
    
    **Important**
    
    Currently, you can access Hologres only using a classic network domain name. Access over a VPC domain name is not supported.
    
-   port: Required. The **network port** of the Hologres instance.
    
    1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/), and in the upper-left corner, select the region.
        
    2.  In the navigation pane on the left, click **Instances**.
        
        On the **Instances** page, click the target instance name.
        
    3.  In the **Network Information** section, obtain the **classic network domain name and port** of the Hologres instance.
        
-   database: Required. The name of the Hologres database to connect to. For more information about Hologres databases, see [CREATE DATABASE](/help/en/hologres/developer-reference/create-database#concept-2463095).
    
-   ApplicationName: Required. The default value is MaxCompute. You do not need to change this value.
    
-   schema: Optional. You do not need to configure this property if the table name is unique within the Hologres database or if the source table is in the default schema. For more information about schemas, see [CREATE SCHEMA](/help/en/hologres/developer-reference/create-schema#task-2567974).
    
-   holo\_table\_name: Required. The name of the Hologres source table. For more information about Hologres source tables, see [CREATE TABLE](/help/en/hologres/developer-reference/create-tables#concept-2463104).
    

tblproperties

Yes

-   mcfed.mapreduce.jdbc.driver.class: Required.
    
    The driver for connecting to the Hologres database. The value is fixed at `org.postgresql.Driver`.
    
-   odps.federation.jdbc.target.db.type: Required.
    
    The type of the database to connect to. The value is fixed at `holo`.
    
-   odps.federation.jdbc.colmapping: Optional.
    
    If you want to map some columns of the data source to the Hologres external table, you must configure this parameter to specify the mapping between the fields of the Hologres source table and the fields of the Hologres external table.
    
    -   If this parameter is not configured, the fields of the source table are mapped to columns with the same names in the Hologres external table.
        
    -   If this parameter is configured but you specify mappings for only some columns of the Hologres external table, the fields of the source table are mapped to columns with the same names in the Hologres external table. An error is reported for other unspecified columns if their names or types do not match.
        
    -   If this parameter is configured and a field name in Hologres contains uppercase letters, you must enclose the Hologres field name in double quotation marks (`""`). Format: `MaxCompute field 1 : "Hologres field 1"[ ,MaxCompute field 2 : "Hologres field 2" ,...]`.
        
        **Note**
        
        The fields of the Hologres source table are `c bool, map_B string, a bigint`. The fields of the Hologres external table are `a bigint, x string, c bool`.
        
        If you set `colmapping` to `'x: "map_B"'`, the mapping is successful and you can query data from Hologres.
        
-   mcfed.mapreduce.jdbc.input.query: Optional.
    
    Reads data from the Hologres source table. The columns and column names of the external table must be the same as the columns, column names, and data types of the Hologres source table that is directly queried. If an alias is used, the alias must be consistent. The format of `select_sentence` is `SELECT xxx FROM <holo_database_name>.<holo_schema_name>.<holo_table_name>`.
    

## **Examples**

### **Prepare data**

If you already have a Hologres database, a Hologres table, and test data, skip this step.

#### **Create a Hologres database**

1.  Log on to the [Hologres Management Console](https://hologram.console.alibabacloud.com/), and in the upper-left corner, select the region.
    
2.  In the navigation pane on the left, click **Instances**.
    
3.  If you do not have a Hologres instance, you must first [purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance).
    
    On the **Instances** page, click the target instance name.
    
4.  On the instance details page, click **Connect to Instance**.
    
5.  Click the **Metadata Management** tab.
    
    Click **Create Database**. In the dialog box that appears, enter a **Database Name** and keep the other parameters at their default settings.
    

#### **Create a Hologres table**

1.  On the instance details page, click **Connect to Instance**.
    
2.  Click the **SQL Editor** tab.
    
3.  Enter the following statements:
    
    ```
    CREATE TABLE IF NOT EXISTS holo (
        id   INT PRIMARY KEY,
        name TEXT
    );
    
    INSERT INTO holo (id, name) VALUES
        (1, 'kate'),
        (2, 'mary'),
        (3, 'bob'),
        (4, 'tom'),
        (5, 'lulu'),
        (6, 'mark'),
        (7, 'haward'),
        (8, 'lilei'),
        (9, 'hanmeimei'),
        (10, 'lily'),
        (11, 'lucy');
    
    SELECT * FROM holo ORDER BY id;
    ```
    

### **Create a Hologres external table (STS mode)**

Hologres does not support adding a RAM role from another Alibaba Cloud account to a database instance. Therefore, STS mode for regular role authorization in Hologres supports only RAM roles belonging to the same account. Similarly, when MaxCompute accesses a Hologres external table or external schema, only RAM roles from the same account are supported.

#### **Prerequisites**

1.  [Install and configure the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).
    
2.  Prepare a MaxCompute project for creating the Hologres external table.
    
    For more information about how to create a MaxCompute project, see [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project#task-zl2-mtx-5db).
    
3.  For information about how to create and grant permissions to a RAM role, see [Authorize a regular RAM role in STS mode for Hologres](/help/en/maxcompute/security-and-compliance/sts-authorization#56ab3ff072loz).
    

#### **Create an external table in MaxCompute**

1.  Log on to the MaxCompute client and enter the destination MaxCompute project.
    
2.  Run the following command to create a Hologres external table.
    
    The following Hologres instance information is based on the steps in the [Prepare data](#f2f39cf2bciwu) section:
    
    -   Hologres database name: `holo_external_test`.
        
    -   Hologres database schema: `public`.
        
    -   Hologres table name: `holo`.
        
    -   Classic network endpoint of the Hologres database: `hgprecn-cn-oew210ut****-cn-hangzhou-internal.hologres.aliyuncs.com:80`.
        
    
    ```
    CREATE EXTERNAL TABLE IF NOT EXISTS my_table_holo_jdbc
    (
     id bigint,
     name string
    )
    stored BY 'com.aliyun.odps.jdbc.JdbcStorageHandler' 
    WITH serdeproperties (
      'odps.properties.rolearn'='acs:ram::139699392458****:role/<role name>')
    location 'jdbc:postgresql://hgprecn-cn-oew210ut****-cn-hangzhou-internal.hologres.aliyuncs.com:80/<holo database name>?ApplicationName=MaxCompute&currentSchema=public&useSSL=true&table=<table name>/'
    tblproperties (
      'mcfed.mapreduce.jdbc.driver.class'='org.postgresql.Driver',
      'odps.federation.jdbc.target.db.type'='holo',
      'odps.federation.jdbc.colmapping'='id:id,name:name'
    );
    ```
    
3.  Run the following command to query the Hologres source table using the new Hologres external table.
    
    ```
    -- The following properties must be added to access the Hologres external table.
    SET odps.sql.split.hive.bridge=true;
    SET odps.sql.hive.compatible=true;
    SET odps.table.api.enable.holo.table=true; -- Enable the JDBC direct read mode. 
    -- Query data from the Hologres external table.
    SELECT * FROM my_table_holo_jdbc limit 10;
    -- The following result is returned.
    +------------+------------+
    | id         | name       | 
    +------------+------------+
    | 9          | hanmeimei  | 
    | 4          | tom        | 
    | 7          | haward     | 
    | 2          | mary       | 
    | 5          | lulu       | 
    | 8          | lilei      | 
    | 10         | lily       | 
    | 1          | kate       | 
    | 6          | mark       | 
    | 11         | lucy       | 
    +------------+------------+
    ```
    
4.  Exchange data and perform join analysis with Hologres using the Hologres external table.
    
    -   Use the Hologres external table to write MaxCompute-processed data to Hologres for accelerated analysis and online services. The following sample command is provided.
        
        ```
        -- The following properties must be added to access the Hologres external table.
        SET odps.sql.split.hive.bridge=true;
        SET odps.sql.hive.compatible=true;
        SET odps.table.api.enable.holo.table=true; -- Enable the JDBC direct read mode. 
        -- Insert data into the Hologres external table.
        INSERT INTO my_table_holo_jdbc VALUES (12,'alice');
        -- Query data from the Hologres external table.
        SELECT * FROM my_table_holo_jdbc;
        -- The following result is returned.
        +------------+------------+
        | id         | name       | 
        +------------+------------+
        | 9          | hanmeimei  | 
        | 4          | tom        | 
        | 7          | haward     | 
        | 2          | mary       | 
        | 5          | lulu       | 
        | 12         | alice      | 
        | 8          | lilei      | 
        | 10         | lily       | 
        | 1          | kate       | 
        | 11         | lucy       | 
        | 6          | mark       | 
        | 3          | bob        | 
        +------------+------------+
        ```
        
    -   Store frequently updated dimension tables in Hologres to meet real-time dynamic update requirements. MaxCompute accesses these dimension tables using external tables and performs join analysis with fact tables in MaxCompute. The following sample command is provided.
        
        ```
        -- The following properties must be added to access the Hologres external table.
        SET odps.sql.split.hive.bridge=true;
        SET odps.sql.hive.compatible=true;
        -- Create a MaxCompute internal table.
        CREATE TABLE holo_test AS SELECT * FROM my_table_holo_jdbc;
        -- Perform a join analysis on the MaxCompute internal table and the Hologres external table.
        SELECT * FROM my_table_holo_jdbc t1 INNER JOIN holo_test t2 ON t1.id=t2.id;
        -- The following result is returned.
        +------------+------------+------------+------------+
        | id         | name       | id2        | name2      | 
        +------------+------------+------------+------------+
        | 9          | hanmeimei  | 9          | hanmeimei  | 
        | 4          | tom        | 4          | tom        | 
        | 7          | haward     | 7          | haward     | 
        | 2          | mary       | 2          | mary       | 
        | 5          | lulu       | 5          | lulu       | 
        | 12         | alice      | 12         | alice      | 
        | 8          | lilei      | 8          | lilei      | 
        | 10         | lily       | 10         | lily       | 
        | 1          | kate       | 1          | kate       | 
        | 11         | lucy       | 11         | lucy       | 
        | 6          | mark       | 6          | mark       | 
        | 3          | bob        | 3          | bob        | 
        +------------+------------+------------+------------+
        ```
        

### **Create a Hologres external table (double-signature mode)**

Double signature is an authentication and authorization protocol jointly developed by MaxCompute and Hologres. When you use this mode, MaxCompute signs your account logon information and passes the authentication data to Hologres. Hologres then authenticates and authorizes the same account based on the protocol agreed upon with MaxCompute. As a result, you can use the same account in MaxCompute and Hologres to directly access external tables without configuring additional authentication information.

#### **Prerequisites**

1.  [Install and configure the MaxCompute client](/help/en/maxcompute/user-guide/maxcompute-client#section-vd2-4me-7uu).
    
2.  Prepare a MaxCompute project for creating the Hologres external table.
    
    For more information about how to create a MaxCompute project, see [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project#task-zl2-mtx-5db).
    
3.  An account with the **same name** as the MaxCompute account exists in Hologres, and this account has **read and write permissions** on the corresponding table in Hologres.
    
4.  Only Hologres V1.3 and later support creating Hologres external tables in double-signature mode from MaxCompute. Currently, this mode supports only reading data from Hologres external tables. Writing data to Hologres external tables is not supported.
    

#### **Create an external table in MaxCompute**

1.  Log on to the MaxCompute client and enter the destination MaxCompute project.
    
2.  Run the following command to create a Hologres external table.
    
    The following Hologres instance information is based on the steps in the [Prepare data](#f2f39cf2bciwu) section:
    
    -   Hologres database name: `holo_external_test`.
        
    -   Hologres database schema: `public`.
        
    -   Hologres table name: `holo`.
        
    -   Classic network endpoint of the Hologres database: `hgprecn-cn-oew210ut****-cn-hangzhou-internal.hologres.aliyuncs.com:80`.
        
    
    ```
    -- Create an external table.
    CREATE EXTERNAL TABLE IF NOT EXISTS holo_mc_external_dbl
    (
      id int,
      name string
    )
    STORED BY 'com.aliyun.odps.jdbc.JdbcStorageHandler'
    location 'jdbc:postgresql://hgpostcn-cn-****-cn-hangzhou-internal.hologres.aliyuncs.com:80/<holo database name>?ApplicationName=MaxCompute&currentSchema=public&preferQueryMode=simple&useSSL=false&table=<table name>/'
    TBLPROPERTIES (
      'mcfed.mapreduce.jdbc.driver.class'='org.postgresql.Driver',
      'odps.federation.jdbc.target.db.type'='holo',
      'odps.federation.jdbc.colmapping'='id:id,name:name'
    );
    ```
    
3.  Query the external table.
    
    ```
    -- Query the external table. This command must be executed together with the command that enables the double-signature mode.
    SET odps.sql.common.table.planner.ext.hive.bridge=true;
    SELECT * FROM holo_mc_external_dbl;
    
    -- The following result is returned.
    +------------+------------+
    | id         | name       | 
    +------------+------------+
    | 9          | hanmeimei  | 
    | 4          | tom        | 
    | 7          | haward     | 
    | 2          | mary       | 
    | 5          | lulu       | 
    | 12         | alice      | 
    | 8          | lilei      | 
    | 10         | lily       | 
    | 1          | kate       | 
    | 11         | lucy       | 
    | 6          | mark       | 
    | 3          | bob        | 
    +------------+------------+
    ```
    

## Enable direct read of Hologres external tables from storage

MaxCompute reads data from Hologres external tables in JDBC mode. The current version supports directly reading data from the Hologres storage layer, which provides the following benefits:

-   Significantly reduces table read latency and improves data query speed.
    
-   Significantly reduces the number of connections to Hologres frontend (FE) nodes. Most queries require only one connection.
    

### Limits

When you enable direct read for Hologres, the following limits apply. If any condition is not met, the system falls back to JDBC mode.

1.  **Version requirements**
    
    Your Hologres instance must be V1.3.34 or later. Earlier versions do not support direct read.
    
2.  **Table type limits**
    
    -   Direct read of Hologres cold storage tables is not supported.
        
    -   Direct read of Hologres row-oriented tables is not supported.
        
3.  **Data type mapping limits**
    
    When you use MaxCompute’s direct read mode, minor time errors may occur when mapping the Hologres TIMESTAMP WITH TIME ZONE type to the TIMESTAMP type. The differences are as follows:
    
    -   **Time value errors**
        
        -   If the time in a TIMESTAMP WITH TIME ZONE column in Hologres is earlier than `1900-12-31 15:54:15`, the time queried by MaxCompute is 5 minutes and 44 seconds later.
            
        -   If the time in a TIMESTAMP WITH TIME ZONE column in Hologres is between `1900-12-31 15:54:16` and `1969-12-31 23:59:58`, the time queried by MaxCompute is 1 second later.
            
        -   If the time in a TIMESTAMP WITH TIME ZONE column in Hologres is later than `1969-12-31 23:59:59`, the time queried by MaxCompute matches the time in Hologres.
            
    -   **Time zone offset**
        
        -   If MaxCompute uses UTC+8 and the time in a TIMESTAMP WITH TIME ZONE column in Hologres is `2000-01-01 00:00:00`, the time queried by MaxCompute is `2000-01-01 08:00:00`.
            
        -   If MaxCompute uses UTC+8 and the time in a TIMESTAMP WITH TIME ZONE column in Hologres is `1969-01-01 00:00:00`, the time queried by MaxCompute is `1969-01-01 08:00:01`.
            
4.  **Same-region limit**
    
    Due to network connectivity limits, only MaxCompute instances in the same region can access Hologres instances. Cross-region access returns the following error: `FAILED: ODPS-0010000:System internal error - fuxi job failed, caused by: Pangu request failed with error code 3`.
    
5.  If Hologres is configured with a master-slave architecture, you can only use the connection URL of the primary instance. Connection URLs for slave instances are not supported.
    
6.  Additional limits for Foreign Server mode: The schema-level syntax switch must be enabled for the MaxCompute project.
    

### Enable the feature

Add the following parameter before the SQL statement when you query a Hologres external table in MaxCompute.

```
SET odps.table.api.enable.holo.table=true;
```

Set the project-level direct read switch.

```
-- You can enable the direct read mode and disable the fallback to JDBC mode at the project level.
-- Enable the direct read mode at the project level: 
setproject odps.table.api.enable.holo.table=true; -- true: enable, false: disable

-- Disable the default fallback to JDBC mode: 
setproject odps.table.api.allow.fallback.jdbc=false; -- true: fall back, false: do not fall back
```

### Verify the direct read mode

You can view logs in Logview to check whether the query runs in direct read mode. For more information about how to use Logview, see [Use Logview V2.0 to view job information](/help/en/maxcompute/user-guide/use-logview-v2-0-to-view-job-information#concept-1946409).

On the **Summary** tab of Logview, locate the `external holo tables` field to view its properties. The format is as follows:

```
<project_name>.<table_name>:<Access mode>[<(Fallback reason)>]
```

**Parameter description**:

**Parameter**

**Description**

project\_name

The project name.

table\_name

The table name.

Access mode

The access mode of the external table. Valid values:

-   `Optimized`: Indicates that the direct read mode is used. The following figure shows a Logview example.![直读模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0807757761/p551566.png)
    
-   `Fallback`: Indicates that the system falls back to JDBC mode. The following figure shows a Logview example.![回退为JDBC模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0807757761/p551572.png)
    

Fallback reason

If the Access mode is `Fallback`, this parameter indicates the reason why the system falls back to JDBC mode. The following table describes the possible values and solutions.

-   `Column type map error Column name ${ColumnName}`: The column types of the MaxCompute table and the Hologres table do not match or are incompatible. Change the data type of the external table based on the data type mapping to use the direct read mode.
    
-   `Holo connection error`: The Hologres instance connection is abnormal. The permission information may be incorrect or the Hologres instance status may be abnormal. Check whether the current user has the permissions to access the corresponding Hologres database or whether the Hologres instance is in the active state.
    
-   `Odps table is partition table`: The Hologres external table created in MaxCompute is a partitioned table. This is not supported.
    
-   `Select hg_version error`, `Hologres version check error`, or `Fetch hg_version data error`: The Hologres instance version is incorrect. Upgrade the Hologres instance to V1.3.34 or later. For more information about how to upgrade an instance, see [Upgrade an instance](/help/en/hologres/user-guide/instance-upgrades#task-2148158).
    

A task running in direct read mode may occasionally hit a direct read limit and fall back to JDBC mode. If the workload is heavy during direct read, falling back to JDBC mode consumes many Hologres connection pool resources. In addition, data transmission efficiency in JDBC mode is much lower than in direct read mode, and resources are released slowly.

Monitor the load pressure on the Hologres instance after a fallback to JDBC mode. In extreme cases, many fallback jobs can affect other services accessing the Hologres instance. To prevent this, add the `set odps.table.api.allow.fallback.jdbc=false;` parameter to the direct read task to disable automatic fallback and avoid unexpected impacts.

## **Import and export Hologres data**

-   To import data from Hologres to a MaxCompute table or a partition of a table, use the [LOAD](/help/en/maxcompute/user-guide/load-2) command.
    
-   To export data from a MaxCompute project to an external storage system such as Hologres for use by other compute engines, use the [UNLOAD](/help/en/maxcompute/user-guide/product-unload-dml) command.
    

## **Supported data types**

-   DECIMAL type limits:
    
    For a Hologres external table created in MaxCompute, the `DECIMAL` data type is fixed at `decimal(38,18)` and cannot be modified. If the source table has fewer decimal places, define the column as the `STRING` type in the MaxCompute external table and use the `CAST` function for conversion when needed.
    
-   Complex type limits:
    
    Hologres external tables created in MaxCompute do not support complex data types such as `Array`, `Map`, and `Struct`.
    
-   Other incompatible types:
    
    Data types in Hologres such as `MONEY` do not have corresponding data types in MaxCompute and are not supported.
    

**The following table provides more details.**:

**Hologres data type**

**MaxCompute data type**

**JDBC read**

**JDBC write**

**Direct read (odps.table.api.enable.holo.table=true)**

**Description**

INTEGER (alias: INT or INT4)

INT

Supported

Supported

Supported

32-bit signed integer.

TEXT

STRING, VARCHAR

Supported

Supported

Supported

String type. The current length limit is 8 MB.

SMALLINT

SMALLINT

Supported

Supported

Supported

16-bit signed integer.

INT2

SMALLINT

Supported

Supported

Supported

16-bit signed integer.

BIGINT (alias: INT8)

BIGINT

Supported

Supported

Supported

64-bit signed integer.

BYTEA

BINARY

Supported

Supported

Supported

Binary data type. The current length limit is 8 MB. The maximum size of the `BINARY` type in Hologres is 1 GB.

REAL (alias: FLOAT4)

FLOAT

Supported

Supported

Supported

32-bit binary floating-point type.

DOUBLE PRECISION (alias: FLOAT8)

DOUBLE

Supported

Supported

Supported

64-bit binary floating-point type.

BOOLEAN (alias: BOOL)

BOOLEAN

Supported

Supported

Supported

BOOLEAN type.

TIMESTAMP

TIMESTAMP\_NTZ

Supported

Not supported

Supported

The storage precision is nanoseconds. Time zone errors may occur.

The TIMESTAMP type in Hologres does not include a time zone, and its storage precision is microseconds.

TIMESTAMP WITH TIME ZONE (alias: TIMESTAMPTZ)

TIMESTAMP

Supported

Not supported

Supported

Timestamp type with a precision to the nanosecond. The format is `yyyy-mm-dd hh:mm:ss.xxxxxxxxx`.

MaxCompute and Hologres perform precision conversion at the underlying layer. MaxCompute outputs data in a format that does not include the time zone.

DECIMAL (alias: NUMERIC)

DECIMAL(precision,scale)

Supported

Supported

Supported

Decimal exact numeric data type.

-   **precision**: the maximum number of digits that can be represented. Valid values: `1 <= precision <= 38`.
    
-   **scale**: the number of digits in the fractional part. Default value range: `0 <= scale <= 18`.
    

If you do not specify the precision for the DECIMAL type in MaxCompute, the default value is `(38,18)`. When you use the `IMPORT FOREIGN SCHEMA` statement to create a table, the system automatically converts the precision.

CHAR(n)

CHAR(n)

Supported

Supported

Supported

The `CHAR(n)` type in MaxCompute is a fixed-length character type, where `n` is the length. The maximum value of n is 255. If the length of a string is less than n, the string is padded with spaces.

The maximum size of the `CHAR(n)` type in Hologres is 1 GB.

VARCHAR(n)

VARCHAR(n)

Supported

Supported

Supported

The `VARCHAR(n)` type in MaxCompute is a variable-length character type, where `n` is the length. The value of n ranges from 1 to 65535.

The maximum size of the `VARCHAR(n)` type in Hologres is 1 GB.

DATE

DATE

Supported

Supported

Supported

Date type. The format is `yyyy-mm-dd`.

INT4\[\]

ARRAY<INT>

Supported

Not supported

Supported

Complex type ARRAY.

INT8\[\]

ARRAY<BIGINT>

Supported

Not supported

Supported

FLOAT4\[\]

ARRAY<FLOAT>

Supported

Not supported

Supported

FLOAT8\[\]

ARRAY<DOUBLE>

Supported

Not supported

Supported

BOOLEAN\[\]

ARRAY<BOOLEAN>

Supported

Not supported

Supported

TEXT\[\]

ARRAY<STRING>

Supported

Not supported

Supported

JSONB

JSON

Not supported

Not supported

Supported

Complex type JSON. Supported in direct read mode.

JSON

STRING

Supported

Not supported

Not supported

String type. The current length limit is 8 MB. The JSON type of Hologres is supported in JDBC mode.

SERIAL (auto-incrementing sequence)

INT

Supported

Not supported

Supported

For a SERIAL auto-incrementing field in Hologres, you can use the INT type in MaxCompute to receive the data. However, the auto-increment feature is not available during data writes.

RoaringBitmap

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

RoaringBitmap64

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

BIT(n)

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

VARBIT(n)

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

INTERVAL

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

TIMETZ

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

TIME

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

INET

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

MONEY

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

OID

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

UUID

Not supported

Not supported

Not supported

Not supported

No corresponding data type is available in MaxCompute.

## **FAQ**

### **What do I do if the "ODPS-0130071" error is reported when I directly read data from Hologres using MaxCompute?**

-   Issue
    
    When you directly read data from Hologres, the error `ODPS-0130071 Failed to split to equal size...max count: 7777` appears. Example:
    
    ```
    ODPS-0130071:[0,0] Semantic analysis exception - physical plan generation failed: storage/table/src/input_splits_builder.cpp(195): StorageException: Failed to split to equal size, total size: 2143570729934, min size: 268435456, max size: 272629760, max count: 7777, split size: 275629513, split count: 7777
    ```
    
-   Cause
    
    When MaxCompute directly reads data from Hologres, it uses the default mapper splitting policy (input data volume/split.size = 256 MB). This causes the number of concurrent mappers generated by the task to exceed the maximum limit of 7,777.
    
    **Note**
    
    This limit prevents submission of tasks that generate excessive mappers, which could affect the stability of Hologres files or network connections.
    
-   Solution
    
    You can resolve the error by setting the following parameters.
    
    ```
    SET odps.external.holo.mapper.instances=10000; -- Increase the upper limit of concurrency. The maximum value is 10,000.
    SET odps.sql.mapper.split.size=512; -- Adjust the task concurrency. The maximum value is 512 MB.
    ```
    

### **What do I do if an SQL job that is run on a Hologres external table runs slowly?**

Searching for data in a MaxCompute external table using an SDK is slow.

-   Issue
    
    Searching for data in a MaxCompute external table using an SDK is slow.
    
-   Solution
    
    External tables support only full table scans, which are slow. Use MaxCompute internal tables instead.
    

### **What do I do if an error is reported when a keyword is used as a column name in Hologres?**

-   Issue
    
    If a keyword is used as a column name in Hologres without special configuration, the following error appears:
    
    `ODPS-0123131:User defined function exception - SQLException in nextKeyValue`
    
    `Caused by: org.postgresql.util.PSQLException: ERROR: syntax error at or near ","`
    
-   Solution
    
    Add the `odps.federation.jdbc.colmapping` parameter to map the fields of the Hologres source table to the fields of the Hologres external table.
    
    For example, if the Hologres source table contains the keyword field `"offset"`, add the `'odps.federation.jdbc.colmapping'='offset:"offset"'` parameter when you create the Hologres external table.
    

## **References**

For more information about common issues with Hologres external tables, see [Common issues with data lakehouse and external tables](/help/en/maxcompute/user-guide/faq-about-external-tables).
