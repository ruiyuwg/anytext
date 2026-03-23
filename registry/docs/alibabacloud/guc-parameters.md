To support a wide range of scenarios, Hologres provides Grand Unified Configuration (GUC) parameters. This topic describes the GUC parameters provided by Hologres and how to use the GUC parameters.

## **Limits**

GUC parameters are invalid for system tables.

## GUC parameters

**GUC parameter**

**Description**

**Remarks**

**Example**

hg\_enable\_start\_auto\_analyze\_worker

These parameters are used to specify whether to enable the auto-analyze feature and configure the auto-analyze feature. For more information, see [ANALYZE and AUTO ANALYZE](/help/en/hologres/developer-reference/analyze-and-auto-analyze#concept-2074426).

The default value is `on` for Hologres V1.1 and later.

set hg\_enable\_start\_auto\_analyze\_worker = on;

hg\_auto\_check\_table\_changes\_interval

Default value: `10min`.

set hg\_auto\_check\_table\_changes\_interval = '10min';

hg\_auto\_check\_foreign\_table\_changes\_interval

Default value: `4h`.

set hg\_auto\_check\_foreign\_table\_changes\_interval = '4h';

hg\_auto\_analyze\_max\_sample\_row\_count

Default value: `16777216`.

set hg\_auto\_analyze\_max\_sample\_row\_count = 16777216;

hg\_fixed\_api\_modify\_max\_delay\_interval

Default value: `3day`.

set hg\_fixed\_api\_modify\_max\_delay\_interval = '3day';

hg\_foreign\_table\_max\_partition\_limit

This parameter specifies the maximum number of partitions that can be hit by each query of a MaxCompute table. You can use this parameter to adjust the limit.

-   **In versions earlier than Hologres V3.0.7:**
    
    -   Default value: `512`.
        
    -   Valid values: `0-1024`.
        
-   **In Hologres V3.0.7 and later:**
    
    -   Default value: 0, indicating no limit.
        
    -   Valid values: `0-1024`.
        

set hg\_foreign\_table\_max\_partition\_limit = 128;

hg\_experimental\_query\_batch\_size

These parameters are used to optimize the performance of querying MaxCompute tables in Hologres. For more information, see [Optimize query performance for MaxCompute foreign tables](/help/en/hologres/user-guide/optimize-the-performance-of-querying-maxcompute-tables-in-hologres#concept-2535937).

Default value: `8192`.

set hg\_experimental\_query\_batch\_size = 4096;

hg\_foreign\_table\_split\_size

Default value: `64`. We recommend that you do not set this parameter to an excessively large value.

set hg\_foreign\_table\_split\_size = 128;

hg\_foreign\_table\_executor\_max\_dop

The default value of this parameter is the same as the number of CPU cores of the Hologres instance. The maximum value is `128`.

set hg\_foreign\_table\_executor\_max\_dop = 32;

hg\_foreign\_table\_executor\_dml\_max\_dop

Default value: `32`.

set hg\_foreign\_table\_executor\_dml\_max\_dop = 16;

hg\_enable\_access\_odps\_orc\_via\_holo

The default value is `on` for Hologres V1.1 and later.

set hg\_enable\_access\_odps\_orc\_via\_holo = on;

hg\_experimental\_enable\_result\_cache

This parameter specifies whether to enable result caching.

Default value: `on`. We recommend that you do not disable the result caching feature.

set hg\_experimental\_enable\_result\_cache = on;

optimizer\_join\_order

These parameters are used to optimize the performance of querying internal tables. For more information, see [Optimize query performance](/help/en/hologres/user-guide/optimize-performance-of-queries-on-hologres-internal-tables#task-1948728).

Default value: `exhaustive`. You can use this parameter followed by an SQL query statement.

set optimizer\_join\_order = query;

optimizer\_force\_multistage\_agg

Default value: `off`. You can set this parameter to on based on your business requirements.

set optimizer\_force\_multistage\_agg = on;

hg\_anon\_enable

This parameter specifies whether to enable the data masking feature. For more information, see [Data masking](/help/en/hologres/security-and-compliance/data-masking#task-1962205).

Default value: `off`. We recommend that you enable the data masking feature at the database level based on your business requirements.

alter database <db\_name> set hg\_anon\_enable = on;

hg\_experimental\_encryption\_options

This parameter specifies whether to enable data encryption and is used to configure the data encryption feature. For more information, see [Encrypt data at rest](/help/en/hologres/security-and-compliance/encrypt-data-in-hologres#task-2113204).

Default value: `off`. We recommend that you enable the data encryption feature at the database level based on your business requirements.

alter database <db\_name> set hg\_experimental\_encryption\_options='AES256,623c26ee-xxxx-xxxx-xxxx-91d323cc4855,AliyunHologresEncryptionDefaultRole,187xxxxxxxxxxxxx';

statement\_timeout

This parameter specifies the timeout period of active queries. For more information, see [Manage queries](/help/en/hologres/user-guide/manage-queries#concept-2058301).

Default value: `8h`. We recommend that you configure the time granularity at the session level based on your business requirements.

set statement\_timeout = 5000 ;

idle\_in\_transaction\_session\_timeout

This parameter specifies the timeout period of idle queries. For more information, see [Manage queries](/help/en/hologres/user-guide/manage-queries#concept-2058301).

Default value: `10min`. We recommend that you configure this parameter at the database level. Otherwise, if transaction leaks occur, the database is locked.

alter database db\_name set idle\_in\_transaction\_session\_timeout=300000;

idle\_session\_timeout

This parameter specifies the timeout period after which an idle connection is automatically released. For more information, see [Manage connections](/help/en/hologres/user-guide/manage-connections#concept-2058301).

Default value: `0`, which indicates that an idle connection is not automatically released. We recommend that you do not use the default value. Otherwise, the number of connections to your Hologres instance may reach the upper limit and connection leaks occur.

alter database <db\_name> SET idle\_session\_timeout = 600000;

hg\_experimental\_functions\_use\_pg\_implementation

This parameter specifies the time range for data type conversion functions that are supported by Hologres. By default, the time range supported by the `to_char`, `to_date`, and `to_timestamp` functions is `1925 to 2282`. You can configure this parameter to extend the time range to 0000 to 9999. For more information, see [Data type conversion function](/help/en/hologres/developer-reference/try-cast-function).

Hologres V1.1.31 and later support this parameter. After you configure this parameter for a data type conversion function, the time range supported by the function is `0000 to 9999`.

set hg\_experimental\_functions\_use\_pg\_implementation = 'to\_char';

hg\_experimental\_approx\_count\_distinct\_precision

This parameter is used to adjust the margin of error for the APPROX\_COUNT\_DISTINCT function. For more information, see [APPROX\_COUNT\_DISTINCT](/help/en/hologres/developer-reference/general-purpose-aggregate-functions#section-49i-kdi-i8i).

Default value: `17`. Valid values: `12 to 20`.

set hg\_experimental\_approx\_count\_distinct\_precision = 20;

timezone

This parameter specifies the time zone.

Default value: `GMT-8:00`.

set timezone='GMT-8:00';

hg\_experimental\_enable\_create\_table\_like\_properties

This parameter specifies whether to copy both table schemas and table properties such as the primary key and index. For more information, see [CREATE TABLE LIKE](/help/en/hologres/developer-reference/create-table-like#concept-2441223).

Default value: `off`.

set hg\_experimental\_enable\_create\_table\_like\_properties=true;

hg\_experimental\_affect\_row\_multiple\_times\_keep\_first

The parameters specify the conflict processing policy for the `INSERT ON CONFLICT` statement when you insert a row that has the same primary key values as existing data. For more information, see [INSERT ON CONFLICT (UPSERT)](/help/en/hologres/developer-reference/insert-on-conflict#concept-1963560).

Default value: `off`.

set hg\_experimental\_affect\_row\_multiple\_times\_keep\_first = on;

hg\_experimental\_affect\_row\_multiple\_times\_keep\_last

set hg\_experimental\_affect\_row\_multiple\_times\_keep\_last = on;

hg\_experimental\_enable\_read\_replica

This parameter specifies whether to enable shard-level replication. For more information, see [Shard-level replication for a Hologres instance](/help/en/hologres/user-guide/shard-level-replication-for-high-throughout#concept-2068666).

Default value: `on`.

set hg\_experimental\_enable\_read\_replica = on;

hg\_experimental\_display\_query\_id

This parameter specifies whether to display the query ID in the NOTICE field on the client. This parameter is valid for HoloWeb and the PostgreSQL client. If you use the Java Database Connectivity (JDBC) driver, you must use `statement.getWarnings()` to query the NOTICE field and obtain the query ID from the NOTICE field.

Default value: off.

set hg\_experimental\_display\_query\_id =on;

## Query the value of a GUC parameter

You can execute the `SHOW` statement to query the setting or default value of a GUC parameter. Sample statements:

-   Check whether the auto-analyze feature is enabled:
    
    ```
    show hg_enable_start_auto_analyze_worker;
    ```
    
-   Query the maximum number of partitions that can be hit by each query of a MaxCompute table:
    
    ```
    show hg_foreign_table_max_partition_limit;
    ```
    

## Configure GUC parameters

You can configure GUC parameters at the session level or database level.

**Note**

You must configure GUC parameters for databases or sessions based on the business scenarios and the characteristics of the parameters. We recommend that you do not configure all GUC parameters at the database level.

-   Configure GUC parameters at the session level
    
    You can use the `SET` statement to configure GUC parameters at the session level. If you configure GUC parameters at the session level, the parameters take effect only in the current session. After the connection is closed, the parameter settings become invalid. We recommend that you use GUC parameters followed by SQL statements.
    
    -   Syntax:
        
        ```
        set <GUC_name> = <values>;
        ```
        
        The GUC\_name parameter specifies the name of the GUC parameter and the values parameter specifies the value of this GUC parameter.
        
    -   Examples:
        
        ```
        -- Enable the auto-analyze feature.
        set hg_enable_start_auto_analyze_worker = on;
        
        -- Change the maximum number of partitions that can be hit by each query of a MaxCompute table to 1024.
        set hg_foreign_table_max_partition_limit =1024;
        ```
        
    
-   Configure GUC parameters at the database level
    
    You can use the `alter database xx set xxx` statement to configure GUC parameters at the database level. The parameter settings take effect for the specified database after you close the current connection and re-establish a connection. If you create a database, you must manually configure the GUC parameters for the database.
    
    -   Syntax:
        
        ```
        alter database <db_name> set <GUC_name> = <values>;
        ```
        
        The db\_name parameter specifies the name of the database. The GUC\_name parameter specifies the name of the GUC parameter, and the values parameter specifies the value of the GUC parameter.
        
    -   Examples:
        
        ```
        -- Enable the auto-analyze feature for a database.
        alter database testdb set hg_enable_start_auto_analyze_worker = on;
        
        -- Change the maximum number of partitions that can be hit by each query of a MaxCompute table to 1,024 for a database.
        alter database testdb set hg_foreign_table_max_partition_limit =1024;
        ```
