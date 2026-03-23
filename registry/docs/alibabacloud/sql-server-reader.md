The SQL Server data source provides a bidirectional channel to read data from and write data to SQL Server. This topic describes the data synchronization capabilities of DataWorks for SQL Server.

## Supported versions

SQL Server Reader uses the com.microsoft.sqlserver sqljdbc4 4.0 driver. For more information about the driver capabilities, see the [official documentation](https://docs.microsoft.com/en-us/sql/connect/jdbc/microsoft-jdbc-driver-for-sql-server-support-matrix?view=sql-server-ver15). The driver supports the following SQL Server versions:

**Version**

**Supported (Yes/No)**

SQL Server 2016

Yes

SQL Server 2014

Yes

SQL Server 2012

Yes

PDW 2008R2 AU34

Yes

SQL Server 2008 R2

Yes

SQL Server 2008

Yes

SQL Server 2019

No

SQL Server 2018

No

Azure SQL Managed Instance

No

Azure Synapse Analytics

No

Azure SQL Database

Yes

## Limits

Offline synchronization supports reading data from views.

## Supported field types

For a complete list of SQL Server field types, see the [SQL Server Help documentation](https://learn.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-2016). The following table lists the supported common field types, using SQL Server 2016 as an example.

**SQL Server 2016 field type**

**SQL Server Reader**

**SQL Server Writer**

bigint

Supported

Supported

bit

Supported

Supported

decimal

Supported

Supported

int

Supported

Supported

money

Supported

Supported

numeric

Supported

Supported

smallint

Supported

Supported

smallmoney

Support

Supported

tinyint

Supported

Supported

float

Supported

Supported

real

Supported

Supported

date

Supported

Supported

datetime2

Supported

Supported

datetime

Supported

Supported

datetimeoffset

Not supported

Not supported

smalldatetime

Supported

Supported

time

Supported

Supported

char

Supported

Supported

text

Supported

Support

varchar

Supported

Support

nchar

Supported

Supported

ntext

Supported

Supported

nvarchar

Supported

Supported

binary

Supported

Support

image

Supported

Supported

varbinary

Supported

Support

cursor

Not supported

Not supported

hierarchyid

Not supported

Not supported

sql\_variant

Supported

Support

Spatial Geometry Types

Not supported

Not supported

table

Not supported

Not supported

rowversion

Not supported

Not supported

uniqueidentifier

Supported

Supported

xml

Supported

Supported

Spatial Geography Types

Not supported

Not supported

The following table lists the type mappings for SQL Server Reader and SQL Server Writer.

**Type category**

**SQL Server data type**

Integer

BIGINT, INT, SMALLINT, and TINYINT

Floating-point

FLOAT, DECIMAL, REAL, and NUMERIC

String

CHAR, NCHAR, NTEXT, NVARCHAR, TEXT, VARCHAR, NVARCHAR(MAX), and VARCHAR(MAX)

Date and time

DATE, DATETIME, and TIME

Boolean

BIT

Binary

BINARY, VARBINARY, VARBINARY(MAX), and TIMESTAMP

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configure an offline synchronization task for a single table

-   For instructions, see [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For a list of all parameters and a script demo for the code editor, see [Appendix: Script demo and parameters](#section-yzz-co6-e8h).
    

### Configure an offline read synchronization task for an entire database

For instructions, see [Configure a real-time synchronization task for an entire database](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration#task-2234369).

## FAQ

-   Data restoration for active/standby synchronization
    
    Active/standby synchronization issues can occur when SQL Server uses an active/standby disaster recovery architecture. In this architecture, the secondary database continuously restores data from the primary database using binlogs. A time lag can exist in the data synchronization between the primary and secondary databases. This lag can be significant in certain situations, such as during periods of network latency. As a result, the data restored to the secondary database may be significantly different from the data in the primary database. The data synchronized from the secondary database is not a complete, up-to-the-minute snapshot.
    
-   Consistency constraints
    
    SQL Server is a Relational Database Management System (RDBMS) that provides strongly consistent data query interfaces. For example, during a synchronization task, SQL Server Reader does not retrieve any updated data from other transactions. This is because of the database's snapshot feature.
    
    The preceding description applies to the data consistency of SQL Server Reader in a single-threaded model. SQL Server Reader can use concurrent data extraction based on your configurations. Therefore, strong data consistency cannot be guaranteed.
    
    After SQL Server Reader splits data based on the splitPk parameter, it starts multiple concurrent tasks to synchronize the data. These concurrent tasks do not belong to the same read transaction and run at different times. Therefore, the synchronized data is not a complete and consistent data snapshot.
    
    A technical solution for consistent snapshots in a multi-threaded environment is not currently available. You can address this issue only from an engineering perspective. Engineering methods involve trade-offs. The following solutions are provided for your reference. You can choose a solution as needed.
    
    -   Use single-threaded synchronization without data sharding. The disadvantage is that the synchronization speed is slow, but it ensures consistency.
        
    -   Stop other data writers to ensure that the current data is static. For example, you can lock tables or stop synchronization to the secondary database. The disadvantage is that this may affect online services.
        
-   Database encoding
    
    SQL Server Reader uses Java Database Connectivity (JDBC) to extract data. JDBC is naturally compatible with various encodings and performs encoding conversion at the underlying layer. Therefore, you do not need to specify an encoding for SQL Server Reader. It automatically obtains and transcodes the encoding.
    
-   Methods for incremental data synchronization
    
    SQL Server Reader uses SELECT statements to extract data. You can use a `SELECT…WHERE…` statement to perform incremental data extraction. The methods are as follows:
    
    -   For applications that populate a modify field with a timestamp for new, updated, or logically deleted records, SQL Server Reader requires only a WHERE clause that specifies the timestamp of the last synchronization.
        
    -   For new transactional data, SQL Server Reader requires only a WHERE clause that specifies the maximum auto-increment ID from the previous synchronization.
        
    
    If your application does not have a field to distinguish between new and modified data, SQL Server Reader cannot perform incremental data synchronization. In this case, it can synchronize only the full data.
    
-   SQL security
    
    SQL Server Reader provides the querySql parameter that lets you create SELECT statements for data extraction. SQL Server Reader does not perform any security checks on these querySql statements.
    

## Appendix: Script demo and parameters

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"sqlserver",// The plugin name.
            "parameter":{
                "datasource":"",// The data source.
                "column":[// The fields.
                    "id",
                    "name"
                ],
                "where":"",// The filter condition.
                "splitPk":"",// If you specify splitPk, the data is sharded based on the specified field.
                "table":""// The data table.
            },
            "name":"Reader",
            "category":"reader"
        },
        {
            "stepType":"stream",
            "parameter":{},
            "name":"Writer",
            "category":"writer"
        }
    ],
    "setting":{
        "errorLimit":{
            "record":"0"// The number of error records.
        },
        "speed":{
            "throttle":true,// If you set throttle to false, the mbps parameter does not take effect, and no rate limit is imposed. If you set throttle to true, a rate limit is imposed.
            "concurrent":1, // The number of concurrent jobs.
            "mbps":"12"// The rate limit. 1 mbps is equal to 1 MB/s.
        }
    },
    "order":{
        "hops":[
            {
                "from":"Reader",
                "to":"Writer"
            }
        ]
    }
}
```

If you want to use the querySql parameter to run a query, you can use the following sample script for the Reader section. In this example, the SQL Server data source is sql\_server\_source, the table to query is dbo.test\_table, and the column to query is name.

```
{
    "stepType": "sqlserver",
    "parameter": {
        "connection": [
            {
                "querySql": ["select name from dbo.test_table"],
                "datasource": "sql_server_source"
            }
        ],
        "datasource": "sql_server_source",
        "column": ["name"],
        "where": "",
        "splitPk": "id"
    },
    "name": "Reader",
    "category": "reader"
}
```

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

**datasource**

The name of the data source. The code editor supports adding data sources. The value of this parameter must be the same as the name of the added data source.

Yes

None

**table**

The name of the table from which you want to synchronize data. You can synchronize data from only one table in a job.

Yes

None

**column**

The columns that you want to synchronize from the source table. Use a JSON array to specify the column information. By default, all columns are synchronized. Example: \["\*"\].

-   Column pruning is supported. You can select specific columns to export.
    
-   Column reordering is supported. You can export columns in an order different from the table schema.
    
-   Constant configuration is supported. You must specify the constants in the MySQL SQL syntax format. For example, `["id", "table","1", "'john.doe'", "'null'", "to_char(a+1)", "2.3" , "true"]` .
    
    -   `id` is a regular column name.
        
    -   `table` is the column name that contains a reserved word.
        
    -   `1` is an integer constant.
        
    -   `'mingya.wmy'` is a string constant (note that it must be enclosed in single quotation marks).
        
    -   `'null'` is a string.
        
    -   `to_char(a + 1)` is a function expression.
        
    -   `2.3` is a floating-point number.
        
    -   `true` is a Boolean value.
        
-   The `column` parameter must specify the collection of columns to sync and cannot be empty.
    

Yes

None

**splitFactor**

The sharding factor. You can configure the number of shards for data synchronization. If you configure multiple concurrent threads, the data is split into `concurrency × splitFactor` shards. For example, if concurrency is 5 and splitFactor is 5, the data is split into 5 × 5 = 25 shards and processed by five concurrent threads.

**Note**

The recommended value is an integer from 1 to 100. An excessively large value may cause an out-of-memory (OOM) error.

No

5

**splitPk**

When SQL Server Reader extracts data, you can specify the `splitPk` parameter to shard the data based on the specified field. This allows the data synchronization system to start concurrent tasks to synchronize data, which improves efficiency.

-   We recommend that you use the primary key of the table for splitPk. Primary keys are usually evenly distributed, which helps prevent data hotspots in the shards.
    
-   Currently, splitPk supports sharding only for integer fields. If you specify a field of another type, such as string, floating-point, or date, SQL Server Reader reports an error.
    

No

None

**where**

The filter condition. SQL Server Reader constructs a SQL statement based on the specified `column`, `table`, and `where` parameters, and then extracts data based on the SQL statement. For example, for testing purposes, you can set the where condition to limit 10. In actual business scenarios, you might synchronize data for the current day by setting the where condition to `gmt_create > ${bizdate}`.

-   The where condition can be used for efficient incremental data synchronization.
    
-   If you leave the where parameter empty, all data in the table is synchronized.
    

No

None

**querySql**

Format: `"querysql" : "query statement"`. In some business scenarios, the where parameter is not sufficient to define the filter conditions. You can use this parameter to customize the filter SQL statement. When you configure this parameter, the data synchronization system ignores the tables and columns parameters and uses the content of this parameter to filter data. For example, to synchronize data after a multi-table join, use `select a,b from table_a join table_b on table_a.id = table_b.id`. When you configure `querySql`, SQL Server Reader ignores the `column`, `table`, and `where` parameters.

No

None

**fetchSize**

This parameter specifies the number of records to fetch in each batch from the database server. This value determines the number of network interactions between Data Integration and the server, which can improve data extraction performance.

**Note**

An excessively large `fetchSize` value (> 2048) may cause an OOM error in the data synchronization process.

No

1024

**driverVersion**

The version of the SQL Server driver. The default value is 4.0. You can set this parameter to 12.10 to use a version that supports Active Directory Service Principal authentication.

No

4.0

-   For the `table`, `column`, and `where` information that you configure, SQL Server Reader assembles them into an SQL statement and sends the statement to the SQL Server database.
    
-   For the `querySql` information that you configure, SQL Server sends it directly to the SQL Server database.
    

### Writer script demo

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"stream",
            "parameter":{},
            "name":"Reader",
            "category":"reader"
        },
        {
            "stepType":"sqlserver",// The plugin name.
            "parameter":{
                "postSql":[],// The SQL statement that is executed after the data synchronization task.
                "datasource":"",// The data source.
                "column":[// The fields.
                    "id",
                    "name"
                ],
                "table":"",// The table name.
                "preSql":[]// The SQL statement that is executed before the data synchronization task.
            },
            "name":"Writer",
            "category":"writer"
        }
    ],
    "setting":{
        "errorLimit":{
            "record":"0"// The number of error records.
        },
        "speed":{
            "throttle":true,// If you set throttle to false, the mbps parameter does not take effect, and no rate limit is imposed. If you set throttle to true, a rate limit is imposed.
            "concurrent":1, // The number of concurrent jobs.
            "mbps":"12"// The rate limit. 1 mbps is equal to 1 MB/s.
        }
    },
    "order":{
        "hops":[
            {
                "from":"Reader",
                "to":"Writer"
            }
        ]
    }
}
```

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default value**

**datasource**

The name of the data source. The code editor supports adding data sources. The value of this parameter must be the same as the name of the added data source.

Yes

None

**table**

The name of the table to which you want to synchronize data.

Yes

None

**column**

The fields in the destination table to which you want to write data. Separate the fields with commas (,). Example: `"column":["id","name","age"]`. To write data to all columns in order, use an asterisk (\*). Example: `"column":["*"]`.

Yes

None

**preSql**

The SQL statement that is executed before the data synchronization task runs. In the codeless UI, you can execute only one SQL statement. In the code editor, you can execute multiple SQL statements, such as statements to clear old data.

No

None

**postSql**

The SQL statement that is executed after the data synchronization task runs. In the codeless UI, you can execute only one SQL statement. In the code editor, you can execute multiple SQL statements, such as statements to add a timestamp.

No

None

**writeMode**

The import mode. The `insert` mode is supported. If a primary key or unique index conflict occurs, Data Integration treats the data as dirty data but retains the original data.

No

insert

**batchSize**

The number of records to submit in each batch. A larger value can significantly reduce network interactions between the data synchronization system and SQL Server and improve overall throughput. If this value is too large, an OOM error may occur in the data synchronization process.

No

1,024

**driverVersion**

The version of the SQL Server driver. The default value is 4.0. You can set this parameter to 12.10 to use a version that supports Active Directory Service Principal authentication.

No

4.0
