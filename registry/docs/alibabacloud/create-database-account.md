This topic describes how to get started with AnalyticDB for MySQL Data Warehouse Edition. AnalyticDB for MySQL is an online analytical processing (OLAP) warehouse service that can process petabytes of highly concurrent data in real time. This topic walks you through the procedure of using an AnalyticDB for MySQL Data Warehouse Edition cluster.

**Important**

Data Warehouse Edition is unavailable for purchase. You can purchase Enterprise Edition or Basic Edition clusters. If you have purchased Data Warehouse Edition clusters, you can refer to this topic to use the Data Warehouse Edition clusters.

## Usage process

The first time you use AnalyticDB for MySQL Data Warehouse Edition, we recommend that you read the following topics:

-   [Product introduction](/help/en/analyticdb/analyticdb-for-mysql/product-overview/what-is-analyticdb-for-mysql#concept-n4h-2rr-vy): describes the terms, benefits, and scenarios of AnalyticDB for MySQL.
    
-   [Pricing](/help/en/analyticdb/analyticdb-for-mysql/product-overview/pricing-for-data-warehouse-edition-v3#concept-2138707): describes the prices and billing methods of AnalyticDB for MySQL.
    
-   Getting started (this topic): describes how to use an AnalyticDB for MySQL Data Warehouse Edition cluster.
    

The following figure shows the process of using AnalyticDB for MySQL Data Warehouse Edition:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0855485571/CAEQORiBgMDXm6CwqhkiIGFiNTQxZmRjM2U5NTRiNjU4MzcxZTM1MGI1ZGY0NWQ14810107_20241206134120.738.svg)

## **Step 1: Create a database account**

AnalyticDB for MySQL supports two types of database accounts: privileged accounts and standard accounts. For information about the differences between privileged accounts and standard accounts, see the "Account types" section of the [Create a database account](/help/en/analyticdb/analyticdb-for-mysql/user-guide/create-database-accounts#section-hnv-veu-6hr) topic.

### **Create a privileged account**

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/). In the upper-left corner of the console, select a region. In the left-side navigation pane, click **Clusters**. Find the cluster that you want to manage and click the cluster ID.
    
2.  In the left-side navigation pane, click **Accounts**.
    
3.  On the **Accounts** tab, click **Create Privileged Account**.
    
4.  In the **Create Account** panel, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Database Account**
    
    The name of the privileged account. Enter a name that meets the on-screen requirements.
    
    **Account Type**
    
    The account type. For a Data Warehouse Edition cluster, this parameter is automatically set to **Privileged Account**.
    
    **New Password**
    
    The password of the privileged account. Enter a password that meets the on-screen requirements.
    
    **Confirm Password**
    
    Enter the password of the privileged account again.
    
    **Description**
    
    Optional. The description that is used to identify the account for future management.
    
5.  Click **OK**.
    

### **Create and grant permissions to a standard account**

The standard accounts created by executing SQL statements are not displayed in the console.

-   For information about how to create a database account, see [CREATE USER](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/create-user#concept-2138863).
    
-   For information about how to grant permissions to a database account, see [GRANT](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/grant#concept-2138864).
    
-   For information about how to revoke permissions from a database account, see [REVOKE](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/revoke#concept-2138865).
    
-   For information about how to change the name of a database account, see [RENAME USER](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/rename-user#concept-2138867).
    
-   For information about how to delete a database account, see [DROP USER](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/drop-user#concept-2138868).
    

## **Step 2: Configure an IP address whitelist**

-   The default IP address whitelist of an AnalyticDB for MySQL cluster contains only the default IP address 127.0.0.1, which indicates that no devices are allowed to access the cluster. You can configure an IP address whitelist to allow other devices to access the cluster. For example, you can specify 10.10.10.0/24 to allow all IP addresses in 10.10.10.x to access the cluster. If you want to add multiple IP addresses or CIDR blocks, separate multiple entries with commas (,). Do not add spaces before or after the commas. Example: 192.168.0.1,172.16.213.9.
    
    **Warning**
    
    The IP address 0.0.0.0 is not allowed in a whitelist.
    
-   If your public IP addresses change frequently and you want to allow all public IP addresses to access an AnalyticDB for MySQL cluster, contact technical support.
    
-   You can configure an IP address whitelist to enable fine-grained access control for your AnalyticDB for MySQL cluster. We recommend that you update the whitelist on a regular basis.
    
-   The whitelist configuration does not affect the running of your AnalyticDB for MySQL cluster. The modification to an IP address whitelist takes effect in 1 minute.
    

### **Procedure**

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/). In the upper-left corner of the console, select a region. In the left-side navigation pane, click **Clusters**. Find the cluster that you want to manage and click the cluster ID.
    
2.  In the left-side navigation pane, click **Data Security**.
    
3.  On the **Whitelist Settings** tab, click **Modify** to the right of the **default** whitelist.
    
    **Note**
    
    You can also click **Create Whitelist** to create an IP address whitelist.
    
4.  In the **Edit Whitelist** panel, remove the default IP address 127.0.0.1 and enter the IP addresses or CIDR blocks that you want to allow. Then, click **OK**.
    
    **Note**
    
    To add the egress IP address of the client to the IP address whitelist, query the IP address first. For more information, see [Connections](/help/en/analyticdb/analyticdb-for-mysql/support/connections#section-5og-ws5-7q7).
    

## **Step 3: Connect to an AnalyticDB for MySQL cluster**

You can connect to an AnalyticDB for MySQL cluster by using Data Management (DMS), a business intelligence (BI) visualization tool, the MySQL command-line tool, or a MySQL client such as Navicat for MySQL, DBeaver, DbVisualizer, or SQL Workbench/J.AnalyticDB for MySQL You can also enter information such as the endpoint, port, and database account of an AnalyticDB for MySQL cluster in your application to connect to the cluster.

### **Use DMS to connect to** AnalyticDB for MySQL

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/). In the upper-left corner of the console, select a region. In the left-side navigation pane, click **Clusters**. Find the cluster that you want to manage and click the cluster ID.
    
2.  In the upper-right corner of the **Cluster Information** page, click **Log On to Database**.
    
3.  In the dialog box that appears, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Database Type**
    
    The database type of the cluster. By default, **AnalyticDB MySQL 3.0** is displayed.
    
    **Instance Region**
    
    The region of the cluster. By default, the region where the cluster resides is displayed.
    
    **Instance ID**
    
    The cluster ID. By default, the ID of the current cluster is displayed.
    
    **Database Account**
    
    The name of the database account used to connect to the cluster.
    
    **Database Password**
    
    The password of the database account used to log on to the cluster.
    
    **Note**
    
    You can select **Remember Password** This way, the next time you connect to the current AnalyticDB for MySQL cluster, you do not need to enter the name and password of the database account.
    
    **Note**
    
    -   The first time you connect to an AnalyticDB for MySQL cluster by using DMS, the data in the cluster is managed in **Flexible Management** mode. You can modify the control mode by editing the cluster. For more information, see [Modify database instances](/help/en/dms/modify-database-instances) and [Control modes](/help/en/dms/product-overview/control-modes).
        
    -   After you configure the parameters, you can click **Test Connection** in the lower-left corner of the dialog box. If the connection fails, follow the instructions to check the information you entered, such as the Database Account or Database Password parameter.
        
    -   The system automatically adds the IP addresses or CIDR blocks of the DMS server to an IP address whitelist of the cluster. If the IP addresses or CIDR blocks fail to be added, you must manually add the IP addresses or CIDR blocks. For more information, see the "[Step 2: Configure an IP address whitelist](#605f2259c1mn5)" section of this topic and [Add DMS IP addresses and CIDR blocks to security settings](/help/en/dms/configure-an-ip-address-whitelist).
        
    
4.  Click **Login**.
    

### **Use code to connect to** AnalyticDB for MySQL **during application development**

-   [JDBC](/help/en/analyticdb/analyticdb-for-mysql/user-guide/java#concept-2138743)
    
-   [Druid connection pool](/help/en/analyticdb/analyticdb-for-mysql/user-guide/druid-connection-pool-1#concept-2138744)
    
-   [Python](/help/en/analyticdb/analyticdb-for-mysql/user-guide/python#concept-2138745)
    
-   [PHP](/help/en/analyticdb/analyticdb-for-mysql/user-guide/php#concept-2138746)
    
-   [C# for macOS](/help/en/analyticdb/analyticdb-for-mysql/user-guide/csharp-for-macos#concept-2138747)
    
-   [Golang](/help/en/analyticdb/analyticdb-for-mysql/user-guide/go#concept-2437637)
    

### **Use the MySQL command-line tool to connect to** AnalyticDB for MySQL

[Use the MySQL command-line client to connect to AnalyticDB for MySQL](/help/en/analyticdb/analyticdb-for-mysql/user-guide/use-the-mysql-command-line-tool-to-connect-to-analyticdb-for-mysql#concept-2138741)

### **Use a client to connect to** AnalyticDB for MySQL

-   [DBeaver](/help/en/analyticdb/analyticdb-for-mysql/user-guide/dbeaver-1#multiTask1030)
    
-   [DbVisualizer](/help/en/analyticdb/analyticdb-for-mysql/user-guide/dbvisualizer-2#multiTask1141)
    
-   [Navicat](/help/en/analyticdb/analyticdb-for-mysql/user-guide/navicat-2#multiTask1074)
    
-   [SQL WorkBench/J](/help/en/analyticdb/analyticdb-for-mysql/user-guide/sql-workbench-j-1#multiTask1352)
    

### **Use a data visualization tool to connect to** AnalyticDB for MySQL

-   [FineBI](/help/en/analyticdb/analyticdb-for-mysql/user-guide/finebi#multiTask2443)
    
-   [Quick BI](/help/en/analyticdb/analyticdb-for-mysql/user-guide/quick-bi-2#multiTask1063)
    
-   [DataV](/help/en/analyticdb/analyticdb-for-mysql/user-guide/datav#multiTask1109)
    
-   [Tableau](/help/en/analyticdb/analyticdb-for-mysql/user-guide/tableau#multiTask803)
    
-   [QlikView](/help/en/analyticdb/analyticdb-for-mysql/user-guide/qlikview#multiTask1240)
    
-   [FineReport](/help/en/analyticdb/analyticdb-for-mysql/user-guide/finereport-2#multiTask979)
    
-   [Smartbi](/help/en/analyticdb/analyticdb-for-mysql/user-guide/smartbi#task-2081436)
    

## **Step 4: Create a database**

**Note**

You can create up to 2,048 databases for each AnalyticDB for MySQL cluster.

1.  Select the **INFORMATION\_SCHEMA** system database and enter [CREATE DATABASE](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/create-database#concept-2138835) on the SQL Console tab.
    
    ![SQL Console](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6983701471/p178820.jpg)
    
    -   Syntax: `CREATE DATABASE [IF NOT EXISTS] $db_name`.
        
    -   Parameter description: The `db_name` parameter specifies the name of the database that you want to create. The name can be up to 64 characters in length and can contain letters, digits, and underscores (\_). The name must start with a lowercase letter and cannot contain consecutive underscores (\_).
        
        **Note**
        
        Do not use analyticdb as the database name. The name analyticdb is reserved for built-in databases.
        
    -   Examples:
        
        ```
        create database adb_demo;                          
        ```
        
        ```
        create database if not exists adb_demo2;                         
        ```
        
    
2.  In the upper-left corner of the SQLConsole tab, click **Execute**. The database is created.
    
    ![数据库创建成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6983701471/p178824.jpg)
    

## **Step 5: Import and query data**

### **Prerequisites**

-   A directory is created in an Object Storage Service (OSS) bucket by performing the following operations to store data imported from an AnalyticDB for MySQL cluster.
    
    1.  Activate OSS. For more information, see [Activate OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb).
        
    2.  Create an OSS bucket. For more information, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb).
        
        **Important**
        
        Make sure that the OSS bucket resides in the same region as the AnalyticDB for MySQL cluster.
        
    3.  Create a directory. For more information, see the "Create a directory".section of the [Manage directories](/help/en/oss/user-guide/manage-directories#section-l8o-x8m-ri6) topic.
        
    4.  Upload an object. For more information, see [Upload objects](/help/en/oss/getting-started/upload-objects-16#concept-zx1-4p4-tdb).
        
        In this example, the `oss_import_test_data.txt` object is uploaded to the `<bucket-name>.oss-cn-hangzhou.aliyuncs.com/adb/` directory in OSS. The row delimiter is a line feed, and the column delimiter is a semicolon (;). The following code shows part of the data contained in this object:
        
        ```
        uid;other
        12;hello_world_1
        27;hello_world_2
        28;hello_world_3
        33;hello_world_4
        37;hello_world_5
        40;hello_world_6
        ...     
        ```
        
-   An AnalyticDB for MySQL cluster is created. An IP address whitelist is configured for the cluster. A database account and a database are created for the cluster. For more information, see [Process of getting started with Data Warehouse Edition](#section-lvx-h44-po4).
    

### **Procedure**

1.  Execute the CREATE TABLE statement to create an external table in the `adb_demo` database. For information about how to create an OSS external table for an object that is in the CSV, Parquet, or TEXT format, see the "[Syntax for creating an OSS external table](#9be3a20ed2m0d)" section of this topic.
    
2.  Query OSS data.
    
    You can query the data of external tables in the same manner as you query the data of internal tables of AnalyticDB for MySQL . Example:
    
    ```
    select uid, other from oss_import_test_external_table where uid < 100 limit 10;
    ```
    
    -   If an object is in the CSV or TEXT format and contains a large amount of data, we recommend that you import the object to AnalyticDB for MySQL before you query the data. Otherwise, the query performance may be compromised.
        
    -   If an object is in the Parquet format, you can determine whether to directly query the data or import the object to AnalyticDB for MySQL before you query the data.
        
    
3.  Execute the [CREATE TABLE](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/create-table/#concept-2138836) statement to create a destination table named `adb_oss_import_test` in the `adb_demo` database to store the data imported from OSS.
    
    ```
    CREATE TABLE IF NOT EXISTS adb_oss_import_test
    (
        uid string,
        other string
    )
    DISTRIBUTED BY HASH(uid);                  
    ```
    
4.  Execute an INSERT statement to import data from the OSS external table to AnalyticDB for MySQL.
    
    **Important**
    
    By default, the `INSERT INTO` and `INSERT OVERWRITE SELECT` statements import data synchronously. If hundreds of gigabytes of data is imported, the client must maintain a connection with the AnalyticDB for MySQL server for an extended period of time. During this process, the import may fail due to a network disconnection. Therefore, if you want to import a large amount of data, we recommend that you execute the `SUBMIT JOB INSERT OVERWRITE SELECT` statement to import data asynchronously.
    
    -   Method 1: Execute the `INSERT INTO` statement to import data. If the primary key has duplicate values, data is not repeatedly inserted and the INSERT INTO statement is equivalent to the `INSERT IGNORE INTO` statement. For more information, see [INSERT INTO](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/insert-into#concept-2138843).
        
        ```
        INSERT INTO adb_oss_import_test
        SELECT * FROM oss_import_test_external_table;
        ```
        
    -   Method 2: Execute the INSERT OVERWRITE statement to import data. If the primary key has duplicate values, the original value is overwritten by the new value.
        
        ```
        INSERT OVERWRITE adb_oss_import_test
        SELECT * FROM oss_import_test_external_table;
        ```
        
    -   Method 3: Execute the `INSERT OVERWRITE` statement to import data asynchronously. In most cases, the `SUBMIT JOB` statement is used to submit an asynchronous job. You can add a hint (`/*+ direct_batch_load=true*/`) before the data import statement to accelerate the job. For more information, see the "Asynchronous writing" section of the [INSERT OVERWRITE SELECT](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/insert-overwrite-into-select#section-rtv-mqa-669) topic.
        
        ```
        SUBMIT JOB INSERT OVERWRITE adb_oss_import_test
        SELECT * FROM oss_import_test_external_table;
        ```
        
        Sample result:
        
        ```
        +---------------------------------------+
        | job_id                                |
        +---------------------------------------+
        | 2020112122202917203100908203303****** |
        ```
        
        For information about how to submit asynchronous jobs, see [Asynchronously submit an import job](/help/en/analyticdb/analyticdb-for-mysql/user-guide/asynchronously-submit-an-import-task#concept-2443807).
        
    
5.  Execute the following statement to query the data of the `adb_oss_import_test` table:
    
    ```
    SELECT * FROM adb_oss_import_test;
    ```
    

### **Syntax for creating an OSS external table**

#### **Non-partitioned OSS external tables**

```
CREATE TABLE [IF NOT EXISTS] table_name
(column_name column_type[, …])
ENGINE='OSS'
TABLE_PROPERTIES='{
    "endpoint":"endpoint",
    "url":"OSS_LOCATION",
    "accessid":"accesskey_id",
    "accesskey":"accesskey_secret",
    "format":"text|orc|parquet",
    "delimiter":";",
    "skip_header_line_count":1,
    "charset":"utf-8"
}';
```

**Table format**

**Parameter**

**Required**

**Description**

CSV, Parquet, or ORC

ENGINE='OSS'

Yes

The table engine. Set the value to OSS.

endpoint

The **endpoint** of the OSS bucket. AnalyticDB for MySQL can access OSS only by using a virtual private cloud (VPC).

**Note**

You can log on to the [OSS console](https://oss.console.alibabacloud.com/), find the bucket, and then obtain the **endpoint** on the **Overview** page.

url

The path of the OSS object or directory. Valid values:

-   The absolute path of the OSS object. Example: `oss://testBucketname/adb/oss_import_test_data.csv`.
    
-   The path of the OSS directory that ends with a forward slash (/). Example: `oss://testBucketname/adb/`.
    
    **Note**
    
    If you set this parameter to the path of the OSS directory, the created external table contains all data in the directory.
    
-   The path that ends with an asterisk (`*`) wildcard, which is used to match all objects and directories that meet the specified pattern. Example: `oss://testBucketname/adb/list_file_with_prefix/test*`.
    
    **Note**
    
    The preceding sample path matches all objects and directories that meet the specified prefix criterion, such as `oss://testBucketname/adb/list_file_with_prefix/testfile1` and
    
    `oss://testBucketname/adb/list_file_with_prefix/test1/file2`.
    

accessid

The AccessKey ID of the Alibaba Cloud account or the Resource Access Management (RAM) user that has permissions on OSS.

For information about how to obtain an AccessKey ID, see [Accounts and permissions](/help/en/analyticdb/analyticdb-for-mysql/support/accounts-and-permissions).

accesskey

The AccessKey secret of the Alibaba Cloud account or the RAM user that has permissions on OSS.

For information about how to obtain an AccessKey secret, see [Accounts and permissions](/help/en/analyticdb/analyticdb-for-mysql/support/accounts-and-permissions).

CSV

delimiter

The column delimiter of the CSV object.

Parquet or ORC

format

The format of the OSS object.

-   When you create an external table in the Parquet format, you must set this parameter to `parquet`.
    
-   When you create an external table in the ORC format, you must set this parameter to `orc`.
    

**Note**

-   You must specify this parameter only when you create an OSS external table in the Parquet or ORC format.
    
-   If you leave the format parameter empty, the CSV format is used.
    

CSV

null\_value

No

The `NULL` value of the CSV object. By default, an empty string is defined as `NULL`, which is `"null_value": ""`.

**Important**

This parameter is supported only for AnalyticDB for MySQL clusters of V3.1.4.2 or later.

ossnull

The rule for defining the `NULL` value of the CSV object. Valid values:

-   **1** (default): `EMPTY_SEPARATORS`. Only empty strings are defined as `NULL`.
    
    For example, `a,"",,c` is interpreted as "a","",NULL,"c" based on this rule.
    
-   **2**: `EMPTY_QUOTES`. Only quotation marks (`""`) are defined as `NULL`.
    
    For example, `a,"",,c` is interpreted as "a",NULL,"","c" based on this rule.
    
-   **3**: `BOTH`. Both empty strings and quotation marks (`""`) are defined as `NULL`.
    
    For example, `a,"",,c` is interpreted as "a",NULL,NULL,"c" based on this rule.
    
-   **4**: `NEITHER`. Empty strings and quotation marks (`""`) are not defined as `NULL`.
    
    For example, `a,"",,c` is interpreted as "a","","","c" based on this rule.
    

**Note**

The preceding examples are provided on the premise of `"null_value": ""`.

skip\_header\_line\_count

The number of header rows to skip when you import data. The first row of a CSV object is the table header. If you set this parameter to **1**, the first row of the object is skipped when you import data.

The default value of this parameter is **0**, which specifies that no rows are skipped.

oss\_ignore\_quote\_and\_escape

Specifies whether to ignore quotation marks (") and escape characters. The default value of this parameter is **false**, which specifies that quotation marks (") and escape characters are not ignored.

**Important**

This parameter is supported only for AnalyticDB for MySQL clusters of V3.1.4.2 or later.

charset

The character set that is used by the OSS external table. Valid values:

-   **utf-8** (default)
    
-   **gbk**
    

**Important**

This parameter is supported only for AnalyticDB for MySQL clusters of V3.1.10.4 or later.

**Note**

-   The column names used in the statement to create an external table must be the same as those in the Parquet or ORC file. Column names are case-insensitive. The sequence of the columns in the statement must be the same as that in the Parquet or ORC file.
    
-   When you create an external table, you can choose only specific columns in a Parquet or ORC file as the columns of the external table. Columns that are not selected in the Parquet or ORC file are not imported.
    
-   If the statement used to create an external table contains a column that is not in the Parquet or ORC file, NULL is returned for this column.
    

##### **Data type mappings between Parquet, ORC, and** AnalyticDB for MySQL

###### **Data type mappings between Parquet and** AnalyticDB for MySQL

**Basic type in Parquet**

**Logical type in Parquet**

**Data type in** AnalyticDB for MySQL

BOOLEAN

N/A

BOOLEAN

INT32

INT\_8

TINYINT

INT32

INT\_16

SMALLINT

INT32

N/A

INT or INTEGER

INT64

N/A

BIGINT

FLOAT

N/A

FLOAT

DOUBLE

N/A

DOUBLE

-   FIXED\_LEN\_BYTE\_ARRAY
    
-   BINARY
    
-   INT64
    
-   INT32
    

DECIMAL

DECIMAL

BINARY

UTF-8

-   VARCHAR
    
-   STRING
    
-   JSON (available if the Parquet object contains a column of the JSON type)
    

INT32

DATE

DATE

INT64

TIMESTAMP\_MILLIS

TIMESTAMP or DATETIME

INT96

N/A

TIMESTAMP or DATETIME

**Important**

Parquet external tables that use columns of the `STRUCT` type cannot be created.

###### **Data type mappings between ORC and** AnalyticDB for MySQL

**Data type in ORC**

**Data type in** AnalyticDB for MySQL

BOOLEAN

BOOLEAN

BYTE

TINYINT

SHORT

SMALLINT

INT

INT or INTEGER

LONG

BIGINT

DECIMAL

DECIMAL

FLOAT

FLOAT

DOUBLE

DOUBLE

-   BINARY
    
-   STRING
    
-   VARCHAR
    

-   VARCHAR
    
-   STRING
    
-   JSON (available if the ORC object contains a column of the JSON type)
    

TIMESTAMP

TIMESTAMP or DATETIME

DATE

DATE

**Important**

ORC external tables that use the `LIST`, `STRUCT`, or `UNION` type cannot be created. ORC external tables that use the `MAP` type cab be created but cannot be queried.

AnalyticDB for MySQL allows you to read and write data of TEXT files in Hive by using OSS external tables in the CSV format. The following statement can be used to create an external table:

```
CREATE TABLE adb_csv_hive_format_oss (
  a tinyint,
  b smallint,
  c int,
  d bigint,
  e boolean,
  f float,
  g double,
  h varchar,
  i varchar, -- binary
  j timestamp,
  k DECIMAL(10, 4),
  l varchar, -- char(10)
  m varchar, -- varchar(100)
  n date
) ENGINE = 'OSS' TABLE_PROPERTIES='{
    "format": "csv",
    "endpoint":"oss-cn-hangzhou-internal.aliyuncs.com",
    "accessid":"LTAI****************",
    "accesskey":"yourAccessKeySecret",
    "url":"oss://testBucketname/adb_data/",
    "delimiter": "\\1",
    "null_value": "\\\\N",
    "oss_ignore_quote_and_escape": "true",
    "ossnull": 2
}';
```

**Note**

When you create an OSS external table in the CSV format to read and write data of a TEXT file in Hive, take note of the following items:

-   The default column delimiter for the TEXT file in Hive is `\1`. If you want to use the OSS external table to read and write data of the TEXT file in Hive, \\1 must be escaped to `\\1` for the `delimiter` parameter.
    
-   By default, the `NULL` value of the TEXT file in Hive is `\N`. If you want to use the OSS external table to read and write data of the TEXT file in Hive, \\N must be escaped to `\\\\N` for the `null_value` parameter.
    
-   The `BINARY`, `CHAR(N)`, and `VARCHAR(N)` types in Hive all correspond to the `VARCHAR` type in AnalyticDB for MySQL. Other basic data types in Hive such as `BOOLEAN` are the same as those in AnalyticDB for MySQL.
    

#### **Partitioned OSS external tables**

A hierarchical directory is generated for OSS data that contains partitions. Example:

```
parquet_partition_classic/
├── p1=2020-01-01
│ ├── p2=4
│ │ ├── p3=SHANGHAI
│ │ │ ├── 000000_0
│           └── 000000_1
│       └── p3=SHENZHEN
│ │     └── 000000_0
│ └── p2=6
│     └── p3=SHENZHEN
│         └── 000000_0
├── p1=2020-01-02
│ └── p2=8
│     ├── p3=SHANGHAI
│     │ └── 000000_0
│     └── p3=SHENZHEN
│         └── 000000_0
└── p1=2020-01-03
    └── p2=6
        ├── p2=HANGZHOU
        └── p3=SHENZHEN
            └── 000000_0
```

In the preceding example, p1 indicates the level-1 partition, p2 indicates the level-2 partition, and p3 indicates the level-3 partition. If you want to query the data by partition, you must specify partition key columns in the statement used to create an OSS external table. The following statement shows how to create an OSS external table and specify partition key columns in the external table. In this example, a Parquet object is used.

```
CREATE TABLE [IF NOT EXISTS] table_name
(column_name column_type[, ...])
ENGINE='OSS'
TABLE_PROPERTIES='{
    "endpoint":"endpoint",
    "url":"OSS_LOCATION",
    "accessid":"accesskey_id",
    "accesskey":"accesskey_secret",
    "format":"parquet",
    "partition_column":"p1, p2, p3"
}';
```

**Note**

-   The `partition_column` property in the `TABLE_PROPERTIES` parameter specifies the partition key columns (p1, p2, and p3 in the example). The partition key columns specified by the `partition_column` property must conform to the partition levels of the sample data.
    
-   When you define columns in the statement, you must include the partition key columns (p1, p2, and p3 in the example) and their data types. The partition key columns must be placed at the end of the column definition.
    
-   The partition key columns defined in the statement must be in the same order as the partition key columns specified by the `partition_column` property.
    
-   Partition key columns support the following data types: `BOOLEAN`, `TINYINT`, `SMALLINT`, `INT`, `INTEGER`, `BIGINT`, `FLOAT`, `DOUBLE`, `DECIMAL`, `VARCHAR`, `STRING`, `DATE`, and `TIMESTAMP`.
    
-   When you query data, partition key columns can be displayed and used in the same manner as other columns.
    
-   If you leave the format parameter empty, the CSV format is used.
    
-   For information about other parameters, see the parameter table in the "[Non-partitioned OSS external tables](/help/en/analyticdb/analyticdb-for-mysql/user-guide/use-external-tables-to-import-data-to-data-warehouse-edition-3#row-33r-tlc-g3t)" section of this topic.
    

### **References**

For more information about how to import data to AnalyticDB for MySQL, see [Supported data sources](/help/en/analyticdb/analyticdb-for-mysql/user-guide/supported-data-sources#concept-2138717).
