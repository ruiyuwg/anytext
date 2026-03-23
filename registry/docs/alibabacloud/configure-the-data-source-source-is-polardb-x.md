DataWorks provides PolarDB Reader and PolarDB Writer for you to read data from and write data to PolarDB data sources. You can use the codeless user interface (UI) or code editor to configure synchronization tasks for PolarDB data sources.

## Limits

### Batch data read and write

Data of views can be read.

### Real-time data read

If the source of a synchronization task is a PolarDB for MySQL cluster, you must enable the binary logging feature for the cluster. PolarDB for MySQL is fully compatible with MySQL and uses high-level physical logs to replace binary logs. To facilitate the integration between PolarDB and the MySQL ecosystem, you can enable the binary logging feature for PolarDB clusters.

## Data type mappings

### Batch data read

The following table lists the data type mappings based on which PolarDB Reader converts data types.

**Category**

**PolarDB data type**

Integer

INT, TINYINT, SMALLINT, MEDIUMINT, and BIGINT

Floating point

FLOAT, DOUBLE, and DECIMAL

String

VARCHAR, CHAR, TINYTEXT, TEXT, MEDIUMTEXT, and LONGTEXT

Date and time

DATE, DATETIME, TIMESTAMP, TIME, and YEAR

Boolean

BIT and BOOL

Binary

TINYBLOB, MEDIUMBLOB, BLOB, LONGBLOB, and VARBINARY

**Note**

-   Data types that are not listed in the preceding table are not supported.
    
-   PolarDB Reader processes TINYINT (1) as an integer data type.
    

### Batch data write

Similar to PolarDB Reader, PolarDB Writer supports most PolarDB data types. Make sure that the data types of your database are supported.

The following table lists the data type mappings based on which PolarDB Writer converts data types.

**Category**

**PolarDB data type**

Integer

INT, TINYINT, SMALLINT, MEDIUMINT, BIGINT, and YEAR

Floating point

FLOAT, DOUBLE, and DECIMAL

String

VARCHAR, CHAR, TINYTEXT, TEXT, MEDIUMTEXT, and LONGTEXT

Date and time

DATE, DATETIME, TIMESTAMP, and TIME

Boolean

BOOL

Binary

TINYBLOB, MEDIUMBLOB, BLOB, LONGBLOB, and VARBINARY

## Prepare a PolarDB environment before data synchronization

### Configure an IP address whitelist

You must add the CIDR block of the virtual private cloud (VPC) where the exclusive resource group for Data Integration resides to an IP address whitelist of the PolarDB for MySQL cluster.

### Prepare an account that has the required permissions

Create an account and grant the required permissions to the account.

You must create an account to log on to the database of the PolarDB for MySQL cluster. You must grant the `SELECT, REPLICATION SLAVE, and REPLICATION CLIENT` permissions to the account.

1.  Create an account.
    
    For more information, see [Create and manage a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts#task-1580301).
    
2.  Grant the required permissions to the account.
    
    You can run the following command to grant the required permissions to the account, or you can directly assign the `SUPER` role to the account.
    
    ```
    -- CREATE USER 'Account for data synchronization'@'%' IDENTIFIED BY 'Account for data synchronization';
    GRANT SELECT, REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'Account for data synchronization'@'%';
    ```
    

### Enable the binary logging feature

For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301).

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task based on the PolarDB data source

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configure a batch synchronization task to synchronize data of a single table

-   For more information about the configuration procedure, see [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For information about all parameters that are configured and the code that is run when you use the code editor to configure a batch synchronization task, see [Appendix: Code and parameters](#section-4r8-7vc-9d1).
    

### Configure a real-time synchronization task to synchronize data of a single table or synchronize all data of a database

For more information about the configuration procedure, see [Configure a real-time synchronization task in DataStudio](/help/en/dataworks/user-guide/configure-a-real-time-synchronization-node-in-datastudio/#task-2231840).

### Configure synchronization settings to implement batch synchronization of all data in a database and real-time synchronization of data of a single table or full data or incremental data in a database

For more information about the configuration procedure, see [Configure a real-time full-database synchronization task](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration#task-2234369).

## FAQ

[Why are errors repeatedly reported when a real-time synchronization task is run to synchronize data from Oracle, PolarDB, or MySQL?](/help/en/dataworks/real-time-synchronization-1#section-ihb-lam-dv3)

## Appendix: Code and parameters

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Code for PolarDB Reader

In the following code, a batch synchronization task is configured to read data from a single table. For information about the parameters, see the parameters in code for PolarDB Reader.

```
{
    "type": "job",
    "steps": [
        {
            "parameter": {
                "datasource": "test_005",// The name of the data source. 
                "column": [// The names of the columns. 
                    "id",
                    "name",
                    "age",
                    "sex",
                    "salary",
                    "interest"
                ],
                "where": "id=1001",// The WHERE clause. 
                "splitPk": "id",// The shard key. 
                "table": "PolarDB_person"// The name of the table. 
              	"useReadonly": "false"// Specifies whether to read data from a secondary database. 
            },
            "name": "Reader",
            "category": "reader"
        },
        {
            "parameter": {}
    ],
    "version": "2.0",// The version number. 
    "order": {
        "hops": [
            {
                "from": "Reader",
                "to": "Writer"
            }
        ]
    },
    "setting": {
        "errorLimit": {// The maximum number of dirty data records allowed. 
            "record": ""
        },
        "speed": {
            "concurrent": 6,// The maximum number of parallel threads. 
            "throttle": true,// Specifies whether to enable throttling. The value false indicates that throttling is disabled, and the value true indicates that throttling is enabled. The mbps parameter takes effect only when the throttle parameter is set to true. 
      "mbps":"12",// The maximum transmission rate. Unit: MB/s. 
        }
    }
}
```

### Parameters in code for PolarDB Reader

**Parameter**

**Description**

**Required**

**Default value**

**datasource**

The name of the data source. It must be the same as the name of the added data source. You can add data sources by using the code editor.

Yes

No default value

**table**

The name of the table from which you want to read data.

Yes

No default value

**useReadonly**

Specifies whether to read data from a secondary database. If you want to implement read/write splitting and read data from a secondary database of the PolarDB for MySQL cluster, set this parameter to true. If you leave this parameter empty, the default value false is used, which indicates that data is read from the primary database.

No

false

column

The names of the columns from which you want to read data. Specify the names in a JSON array. The default value is \[\*\], which indicates all the columns in the source table.

-   You can select specific columns to read.
    
-   The column order can be changed. This indicates that you can specify columns in an order different from the order specified by the schema of the source table.
    
-   Constants are supported. The column names must be arranged in compliance with the SQL syntax supported by PolarDB, such as `["id", "table","1","'mingya.wmy'","'null'", "to_char(a+1)","2.3","true"]`.
    
    -   id: a column name.
        
    -   table: the name of a column that contains reserved keywords.
        
    -   1: an integer constant.
        
    -   'mingya.wmy': a string constant, which is enclosed in single quotation marks (').
        
    -   'null': the string null.
        
    -   to\_char(a+1): a function expression that is used to calculate the length of a string.
        
    -   2.3: a floating-point constant.
        
    -   true: a Boolean value.
        
-   The column parameter must explicitly specify all the columns from which you want to read data. This parameter cannot be left empty.
    

Yes

No default value

splitPk

The field that is used for data sharding when PolarDB Reader reads data. If you configure this parameter, the source table is sharded based on the value of this parameter. Data Integration then runs parallel threads to read data. This improves data synchronization efficiency.

-   We recommend that you set the splitPk parameter to the name of the primary key column of the table. Data can be evenly distributed to different shards based on the primary key column, instead of being intensively distributed only to specific shards.
    
-   The splitPk parameter supports sharding only for data of integer data types. If you set this parameter to a field of an unsupported data type, such as a string, floating point, or date data type, PolarDB Reader ignores the setting of the splitPk parameter and uses a single thread to read data.
    
-   If the splitPk parameter is not provided or is left empty, PolarDB Reader uses a single thread to read data.
    

No

No default value

splitFactor

The sharding factor, which determines the number of parts into which data to be synchronized is sharded. If you configure parallelism for your batch synchronization task, the number of parts is calculated based on the following formula: Number of parallel threads × Sharding factor. For example, if the number of parallel threads and the sharding factor are 5, the number of parts into which data to be synchronized is sharded is 25.

**Note**

We recommend that you specify a sharding factor that ranges from 1 to 100. If you specify a sharding factor that is greater than 100, an out of memory (OOM) error may occur.

No

5

where

The WHERE clause. For example, you can set this parameter to `gmt_create>$bizdate` to read the data that is generated on the current day.

-   You can use the WHERE clause to read incremental data. If the where parameter is not provided or is left empty, PolarDB Reader reads all data.
    
-   Do not set the where parameter to limit 10. This value does not conform to the constraints of PolarDB on the SQL WHERE clause.
    

No

No default value

querySql (advanced parameter, which is available only in the code editor)

The SQL statement that is used for refined data filtering. If you configure this parameter, PolarDB Reader ignores the settings of the column, table, and where parameters, and filters data based only on the value of this parameter. For example, if you want to join multiple tables for data synchronization, you can set this parameter to `select a,b from table_a join table_b on table_a.id = table_b.id`. The priority of the querySql parameter is higher than that of the column, table, where, and splitPk parameters. The data source that is specified by the datasource parameter parses information, including the username and password, from this parameter.

No

No default value

### Code for PolarDB Writer

In the following code, a batch synchronization task is configured to write data to PolarDB. For information about the parameters, see the parameters in code for PolarDB Writer.

```
{
    "type": "job",
    "steps": [
        {
            "parameter": {},
            "name": "Reader",
            "category": "reader"
        },
        {
            "parameter": {
                "postSql": [],// The SQL statement that you want to execute after the batch synchronization task is run. 
                "datasource": "test_005",// The name of the data source. 
                "column": [// The names of the columns. 
                    "id",
                    "name",
                    "age",
                    "sex",
                    "salary",
                    "interest"
                ],
                "writeMode": "insert",// The write mode. 
                "batchSize": 256,// The number of data records to write at a time. 
                "table": "PolarDB_person_copy",// The name of the table. 
                "preSql": []// The SQL statement that you want to execute before the batch synchronization task is run. 
            },
            "name": "Writer",
            "category": "writer"
        }
    ],
    "version": "2.0",// The version number. 
    "order": {
        "hops": [
            {
                "from": "Reader",
                "to": "Writer"
            }
        ]
    },
    "setting": {
        "errorLimit": {// The maximum number of dirty data records allowed. 
            "record": ""
        },
        "speed": {
            "throttle":true,// Specifies whether to enable bandwidth throttling. The value false indicates that bandwidth throttling is disabled, and the value true indicates that bandwidth throttling is enabled. The mbps parameter takes effect only when the throttle parameter is set to true. 
            "concurrent":6, // The maximum number of parallel threads. 
            "mbps":"12",// The maximum transmission rate. Unit: MB/s. 
        }
    }
}
```

### Parameters in code for PolarDB Writer

-   Parameters in code for PolarDB Writer
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Default value**
    
    datasource
    
    The name of the data source. It must be the same as the name of the added data source. You can add data sources by using the code editor.
    
    Yes
    
    No default value
    
    table
    
    The name of the table from which you want to read data.
    
    Yes
    
    No default value
    
    writeMode
    
    The write mode. Valid values:
    
    -   insert: This mode is equivalent to INSERT INTO on the codeless UI.
        
    -   update (equivalent to ON DUPLICATE KEY UPDATE on the codeless UI)
        
    -   replace: This mode is equivalent to REPLACE INTO on the codeless UI.
        
    
    For more information about the write modes and data examples, see **Description of the writeMode parameter**.
    
    **Note**
    
    When the destination is PolarDB for PostgreSQL, only the insert mode is supported. To update data and avoid primary key conflicts, we recommend deleting duplicate records in the destination table before performing batch synchronization. You can use one of the following approaches:
    
    Approach 1: Configure a `TRUNCATE` statement in the **preSql** parameter (equivalent to **a statement to be executed before data is written to the destination on the codeless UI)** to clear the destination table.
    
    Approach 2: Process the destination table in an upstream node of the batch synchronization node to ensure no primary key conflicts occur during data synchronization.
    
    No
    
    insert
    
    column
    
    The names of the columns to which you want to write data. Separate the names with commas (,). Example: `"column":["id","name","age"]`. If you want to write data to all the columns in the destination table, set this parameter to an asterisk (\*), such as `"column":["*"]`.
    
    Yes
    
    No default value
    
    preSql
    
    The SQL statement that you want to execute before the batch synchronization task is run. For example, you can set this parameter to the SQL statement that is used to delete outdated data. You can execute only one SQL statement on the codeless UI and multiple SQL statements in the code editor.
    
    No
    
    No default value
    
    postSql
    
    The SQL statement that you want to execute after the batch synchronization task is run. For example, you can set this parameter to the SQL statement that is used to add a timestamp. You can execute only one SQL statement on the codeless UI and multiple SQL statements in the code editor.
    
    No
    
    No default value
    
    batchSize
    
    The number of data records to write at a time. Set this parameter to an appropriate value based on your business requirements. This greatly reduces the interactions between Data Integration and PolarDB and increases throughput. If you set this parameter to an excessively large value, an out of memory (OOM) error may occur during data synchronization.
    
    No
    
    1,024
    
    updateColumn
    
    The names of the columns that are updated when a primary key conflict or unique index conflict occurs. This parameter takes effect only when the writeMode parameter is set to update. Separate the names with commas (,), such as `"updateColumn": ["name", "age"]`.
    
    **Note**
    
    Only PolarDB for MySQL data sources support this parameter.
    
    No
    
    No default value
    
-   Description of the writeMode parameter
    
    **Item**
    
    **insert (equivalent to INSERT INTO on the codeless UI)**
    
    **update (equivalent to ON DUPLICATE KEY UPDATE on the codeless UI)**
    
    **replace (equivalent to REPLACE INTO on the codeless UI)**
    
    Processing rule
    
    If a primary key conflict or unique index conflict occurs, data is not written to conflicting rows, and the data that is not written to these rows is regarded as dirty data.
    
    If no primary key conflict or unique index conflict occurs, data is processed in the same way as that when you set this parameter to **insert**. If a conflict occurs, data in conflicting rows in the destination table is replaced by new data.
    
    If no primary key conflict or unique index conflict occurs, data is processed in the same way as that when you set this parameter to **insert**. If a conflict occurs, the original rows are deleted, and new rows are inserted. This indicates that all fields of the original rows are replaced.
    
    Data example
    
    -   Data in the source table
        
        ```
        +----+---------+-----+
        | id | name    | age |
        +----+---------+-----+
        | 1  | zhangsan| 1   |
        | 2  | lisi    |     |
        +----+---------+-----+
        ```
        
    -   Original data in the destination table
        
        ```
        +----+---------+-----+
        | id | name    | age |
        +----+---------+-----+
        | 2  | wangwu  |     |
        +----+---------+-----+
        ```
        
    -   After the batch synchronization task is run, one data record is written to the destination table, and one data record is generated.
        
        ```
        +----+---------+-----+
        | id | name    | age |
        +----+---------+-----+
        | 1  | zhangsan| 1   |
        | 2  | wangwu  |     |
        +----+---------+-----+
        ```
        
    
    -   Scenario 1: Only some columns are specified: `"column": ["id","name"]`.
        
        -   Data in the source table
            
            ```
            +----+---------+-----+
            | id | name    | age |
            +----+---------+-----+
            | 1  | zhangsan| 1   |
            | 2  | lisi    |     |
            +----+---------+-----+
            ```
            
        -   Original data in the destination table
            
            ```
            +----+---------+-----+
            | id | name    | age |
            +----+---------+-----+
            | 2  | wangwu  |  3  |
            +----+---------+-----+
            ```
            
        -   After the batch synchronization task is run, two data records are written to the destination table, and no dirty data record is generated.
            
            ```
            +----+---------+-----+
            | id | name    | age |
            +----+---------+-----+
            | 1  | zhangsan| 1   |
            | 2  | lisi    | 3   |
            +----+---------+-----+
            ```
            
    -   Scenario 2: All columns are specified: `"column": ["id","name","age"]`.
        
        -   Data in the source table
            
            ```
            +----+---------+-----+
            | id | name    | age |
            +----+---------+-----+
            | 1  | zhangsan| 1   |
            | 2  | lisi    |     |
            +----+---------+-----+
            ```
            
        -   Original data in the destination table
            
            ```
            +----+---------+-----+
            | id | name    | age |
            +----+---------+-----+
            | 2  | wangwu  |  3  |
            +----+---------+-----+
            ```
            
        -   After the batch synchronization task is run, two data records are written to the destination table, and no dirty data record is generated.
            
            ```
            +----+---------+-----+
            | id | name    | age |
            +----+---------+-----+
            | 1  | zhangsan| 1   |
            | 2  | lisi    |     |
            +----+---------+-----+
            ```
            
    
    -   Data in the source table
        
        ```
        +----+---------+-----+
        | id | name    | age |
        +----+---------+-----+
        | 1  | zhangsan| 1   |
        | 2  | lisi    |     |
        +----+---------+-----+
        ```
        
    -   Original data in the destination table
        
        ```
        +----+---------+-----+
        | id | name    | age |
        +----+---------+-----+
        | 2  | wangwu  |  3  |
        +----+---------+-----+
        ```
        
    -   After the batch synchronization task is run, two data records are written to the destination table, and no dirty data record is generated.
        
        ```
        +----+---------+-----+
        | id | name    | age |
        +----+---------+-----+
        | 1  | zhangsan| 1   |
        | 2  | lisi    |     |
        +----+---------+-----+
        ```
