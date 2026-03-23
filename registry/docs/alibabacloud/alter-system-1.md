This statement modifies dynamic system parameters.

## Engines and Versions

The ALTER SYSTEM statement applies to LindormTable and LindormTSDB.

**Important**

This statement requires Lindorm SQL version 2.6.3.2 or later. For more information about how to view the Lindorm SQL version, see [SQL Version Guide](/help/en/lindorm/developer-reference/sql-version-description).

## **Syntax**

```
alter_system_statement ::= ALTER SYSTEM SET configuration_identifier = configuration_literal
```

## **Usage Notes**

**Parameter**

**Description**

configuration\_identifier

The name of the dynamic configuration parameter. It must be an SQL identifier. For the list of supported configuration items, see [Supported configuration items](#4892c25cdazkp).

configuration\_literal

Dynamic configuration parameter value. It must be an SQL constant. The SQL constant values vary based on the dynamic configuration parameter name, as follows:

-   BIGINT type constant.
    
-   DOUBLE type constant.
    
-   BOOLEAN type constant.
    
-   VARCHAR type constant.
    

### **Supported Configuration Items**

**Configuration item name**

**Data type**

**Applicable engine**

**Description**

FILE\_FORMAT\_VERSION

INTEGER

LindormTable

Set the version of data files in LindormTable. The default version for LindormTable data files is 2.

**Note**

If you encounter the error `Cell Tag is not supported since ldFileVersion is too small=2` during use, set the file version to 5 to resolve this issue.

SLOW\_QUERY\_RECORD\_ENABLE

BOOLEAN

LindormTable

Enable the slow query system view in LindormTable. When enabled, query information is recorded in the `lindorm._slow_query_` view if the query running time exceeds a certain threshold. This helps with O&M inspection and troubleshooting. Values:

-   TRUE
    
-   FALSE (**default**)
    

SLOW\_QUERY\_TIME\_MS

INTEGER

LindormTable

Set the slow query running time threshold recorded in `lindorm_slow_query`. Unit: milliseconds (ms). Default value: 10000 milliseconds (10 seconds).

**Note**

After you modify and successfully apply this value, queries sent to the Lindorm server might be recorded in the slow query view based on the new threshold.

MAX\_CONN

INTEGER

LindormTable

Set the maximum connections for LindormTable. The value must be greater than 0.

**Important**

-   The [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) must be **2.7.0.0 or later**.
    
-   Each single node has a default maximum connections limit. If the connections reach this default value, new connections are rejected, and error [1040](/help/en/lindorm/developer-reference/common-error-codes-reference#9f7aa157006jg) is returned. First, review how your application code uses connections. You can also [modify the maximum connections for LindormTable](#5ae3b9fe50byx) using an SQL statement.
    
    The default maximum connections for a single node are as follows:
    
    -   [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) earlier than 2.7.0.0: 1000.
        
    -   [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) 2.7.0.0 and later: 4000.
        

AUDIT\_LEVEL

INTEGER

LindormTable

Set the audit log level for LindormTable. Values:

-   0 (**default**): Output DDL and DCL logs.
    
-   1: Output DDL, DCL, and DML logs.
    
-   2: Output DDL, DCL, and DQL logs.
    
-   3: Output DDL, DCL, DML, and DQL logs.
    

ERROR\_LANG

VARCHAR

LindormTable

Set the language for Lindorm SQL error messages. The following languages are supported:

-   `en`: English.
    
-   `zh_CN`: Simplified Chinese.
    

**Important**

-   The [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) must be **2.9.0.0 or later**.
    
-   The default language for SQL engine error messages depends on the region where the instance was created.
    

USER\_AUTH

BOOLEAN

LindormTSDB

Enable or disable the user authentication and permission verification feature for LindormTSDB. Values:

-   TRUE: Enable user authentication and permission verification. Any connection to LindormTSDB requires a username and password. LindormTSDB authenticates the user and verifies permissions for data objects in SQL statements initiated by that connection.
    
-   FALSE (**default**): Disable user authentication and permission verification. Connections to LindormTSDB do not require a username and password.
    
    **Important**
    
    If LindormTSDB enables user authentication and permission verification, all subsequent access must include user information. Otherwise, authentication might fail (including the current connection executing the `ALTER SYSTEM` statement to enable user authentication and permission verification). Therefore, some existing business access might fail after this feature is enabled. Before enabling this feature, plan carefully and fully assess the impact.
    

QUERY\_MAX\_MEM

BIGINT

LindormTable

The maximum memory that a single query can consume in the Lindorm SQL engine. Default value: 8388608 bytes (8 MB).

**Important**

-   The [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) must be **2.9.6.0 or later**.
    
-   If a query triggers the memory limit, increase this configuration value as needed (incrementally, such as by doubling it). However, note that this parameter controls the memory limit for each query. Setting it too high can drastically increase memory pressure on LindormTable, potentially leading to system stability risks.
    

lindorm.allow.range.delete

BOOLEAN

LindormTable

Allow batch delete. Values:

-   TRUE
    
-   FALSE (**default**)
    

**Important**

-   The [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) must be **2.9.1.0 or later**.
    
-   If you enable batch query and delete a large amount of data, the request might time out. Set the timeout period using [HINT](/help/en/lindorm/developer-reference/hint/). Additionally, deleting large amounts of data generates many delete markers, which can affect query performance.
    

lindorm.indexed.non.primary.key.columns.max

INTEGER

LindormTable

The maximum number of non-primary key columns that you can use as index key columns. The default value is 3.

**Important**

-   The [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) must be **2.9.6.0 or later**.
    
-   If an index table has too many primary keys, the index table rowkey might become too long, affecting query performance.
    

lindorm.max.index.number

INTEGER

LindormTable

The maximum number of secondary indexes allowed. Default value: 5.

**Important**

-   The [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) must be **2.9.6.0 or later**.
    
-   If there are too many secondary indexes, write performance might decrease, and disk usage might increase.
    

lindorm.schema.column.nonpklength.max

INTEGER

LindormTable

The maximum data value that a single non-primary key column can store. This is a table-level configuration. Unit: bytes. Default value: 2,097,152 bytes (2 MB).

**Important**

-   The [SQL engine version](/help/en/lindorm/developer-reference/sql-version-description) must be **2.9.1.0 or later**.
    
-   Large volumes of big KV reads and writes can easily cause GC jitter.
    

SYSTEM\_TIME\_ZONE

STRING

LindormTable

Specify the default time zone for the entire database system instance. Default value: UTC+8.

## **Examples**

### **Modify the LindormTable file version**

Set the data file version for LindormTable to 5.

```
ALTER SYSTEM SET FILE_FORMAT_VERSION = 5;
```

### **Set the threshold for wide table slow query records**

Enable the slow query view in LindormTable and set the slow query recording threshold.

```
-- Enable slow query recording
ALTER SYSTEM SET SLOW_QUERY_RECORD_ENABLE = TRUE; 

-- Set the slow query threshold to 1 second (1000 ms)
ALTER SYSTEM SET SLOW_QUERY_TIME_MS = 1000; 
```

### **Modify Maximum Connections for a Wide Table**

Set the maximum connections for LindormTable to 5000.

```
ALTER SYSTEM SET MAX_CONN = 5000;
```

### **Enable or disable LindormTSDB authentication**

```
-- Enable authentication
ALTER SYSTEM SET USER_AUTH=TRUE; 

-- Disable authentication
ALTER SYSTEM SET USER_AUTH=FALSE; 
```

### **Modify the Language of Wide Table SQL Exception Messages**

Set the LindormTable SQL error message language to Simplified Chinese.

```
ALTER SYSTEM SET ERROR_LANG = 'zh_CN';
```

### Set whether to allow batch delete

You can configure whether to allow batch delete operations. The default value is FALSE.

```
ALTER SYSTEM SET `lindorm.allow.range.delete`=TRUE;
```

### **Modify** the number of non-primary-key columns used as index columns

Set the number of non-primary key columns that can be used as index column primary keys to 5.

```
ALTER SYSTEM SET `lindorm.indexed.non.primary.key.columns.max`= 5;
```

### **Modify the number of secondary indexes**

Set the number of secondary indexes to 5.

```
ALTER SYSTEM SET `lindorm.max.index.number`= 5;
```

### **Modify the data volume allowed for a single non-primary key column**

Set the maximum data volume for a single non-primary key column to 3,670,016 bytes (3.5 MB).

```
ALTER TABLE tableName SET 'MAX_NONPK_LEN'='3670016';
```

### **Verify the result**

You can verify that the configuration is successful using the `SHOW SYSTEM VARIABLES LIKE configuration_identifier;` statement, where `configuration_identifier` is the parameter name.

**Note**

If you have not set a parameter using the `ALTER SYSTEM SET` command, the `SHOW SYSTEM VARIABLES` command does not return the dynamic configuration of that parameter.
