This topic describes how to use the CREATE DYNAMIC TABLE statement to create a Dynamic Table.

## **Important notes**

-   For limitations on using Dynamic Tables, see [Dynamic Table support and limitations](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).
    
-   Hologres V3.1 and later requires the new syntax to create Dynamic Tables. You can still perform ALTER operations on tables created with the V3.0 syntax, but you cannot create new ones. For non-partitioned tables, you can use the [syntax conversion command](#3010a255acomq) to convert the legacy syntax to the new syntax. For partitioned tables, recreate them manually.
    
-   Upgrading to Hologres V3.1 and later requires recreation of existing Incremental Dynamic Tables. You can use the [syntax conversion command](#3010a255acomq) to do so.
    
-   Starting from Hologres V3.1, the engine adaptively optimizes the refresh process for Dynamic Tables to improve stability. Consequently, negative query IDs for Refresh operations are normal.
    

## **Syntax**

## V3.1+ (new syntax)

**Note**

Hologres V3.1 and later only supports the new syntax for creating Dynamic Tables.

### **Create Dynamic Table syntax**

In Hologres V3.1 and later, use the following syntax to create a Dynamic Table:

```
CREATE DYNAMIC TABLE [ IF NOT EXISTS ] [<schema_name>.]<table_name>
[ (<col_name> [, ...] ) ]
[LOGICAL PARTITION BY LIST(<partition_key>)]
WITH (
  -- Dynamic Table properties
  freshness = '<num> {minutes | hours}', -- Required
  [auto_refresh_enable = {true | false},] -- Optional
  [auto_refresh_mode = {'full' | 'incremental' | 'auto'},] -- Optional
  
  [base_table_cdc_format = {'stream' | 'binlog'},] -- Optional

  [auto_refresh_partition_active_time = '<num> {minutes | hours | days}',] -- Optional
  [partition_key_time_format = {'YYYYMMDDHH24' | 'YYYY-MM-DD-HH24' | 'YYYY-MM-DD_HH24' | 'YYYYMMDD' | 'YYYY-MM-DD' | 'YYYYMM' | 'YYYY-MM' | 'YYYY'},] --Optional
  
  [computing_resource = {'local' | 'serverless' | '<warehouse_name>'},] -- Optional. The warehouse_name value is supported only in Hologres V4.0.7 and later.
  [refresh_guc_hg_experimental_serverless_computing_required_cores=xxx,] --Optional. Specifies the required computing cores for Serverless.
  
  [refresh_guc_<guc_name> = '<guc_value>',] -- Optional

  -- General properties
  [orientation = {'column' | 'row' | 'row,column'},]
  [table_group = '<tableGroupName>',]
  [distribution_key = '<columnName>[,...]]',]
  [clustering_key = '<columnName>[:asc] [,...]',]
  [event_time_column = '<columnName> [,...]',]
  [bitmap_columns = '<columnName> [,...]',]
  [dictionary_encoding_columns = '<columnName> [,...]',]
  [time_to_live_in_seconds = '<non_negative_literal>',]
  [storage_mode = {'hot' | 'cold'},]
)
AS
<query>; -- Query definition.
```

### **Parameters**

#### **Refresh mode & resources**

**Parameter**

**Description**

**Required**

**Default**

`freshness`

Specifies the target Data Freshness in minutes or hours. The minimum value is 1 minute. The engine automatically schedules the next refresh based on the time of the previous refresh and the `freshness` setting. Compared to a fixed interval, `freshness` is more automated and helps ensure data is kept as up-to-date as possible.

Yes

None

`auto_refresh_mode`

The refresh mode. Valid values:

-   `auto`: Automatic mode. The engine automatically uses incremental refresh if the query supports it; otherwise, it falls back to full refresh.
    
-   `incremental`: Incremental refresh. Only incremental data is refreshed each time. For more information, see [Incremental refresh](#48d47bd060v6k).
    
-   `full`: Full refresh. The entire table is refreshed each time. For more information, see [Full refresh](#7843f3187cr5e).
    

No

auto

`auto_refresh_enable`

Specifies whether to enable automatic refresh. Valid values:

-   `true`: Enables automatic refresh.
    
-   `false`: Disables automatic refresh. After you disable it, all subsequent refresh jobs for the table are stopped.
    

No

true

`base_table_cdc_format`

Specifies how to consume data changes from the base table during an incremental refresh.

-   `stream` (default): Reads data changes at the file level to compute incremental data. Compared with the `binlog` method, the stream method has no extra storage overhead and provides higher performance. For more information, see [Dynamic tables](/help/en/hologres/user-guide/dynamic-table-overview/).
    
-   `binlog`: Consumes data from the base table using binlog. If you set this parameter to `binlog`, manually enable binlog for the base table. For more information, see [Subscribe to Hologres Binlog](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#section-ykn-nii-7bq).
    
    ```
    begin;
    call set_table_property('<table_name>', 'binlog.level', 'replica');
    call set_table_property('<table_name>', 'binlog.ttl', '2592000');
    commit;
    ```
    

**Note**

-   Starting from V3.1, all tables use the stream method by default to consume base table data changes. If your table has binlog enabled, disable it to avoid unnecessary storage costs.
    
-   The `stream` method is not supported for row-oriented base tables; only the `binlog` method is.
    
-   This parameter cannot be modified after the table is created. To change it, recreate the table.
    

No

stream

`computing_resource`

For more information, see [Parameters](/help/en/hologres/user-guide/set-computing-resources-for-dynamic-table-refresh#69284a6dcaulz).

No

serverless

`refresh_guc_<guc_name>`

You can set GUC parameters for refresh operations. For a list of supported GUCs, see [GUC parameters](/help/en/hologres/developer-reference/guc-parameters).

No

None

#### **Partitioned tables**

##### **Logical partitioned table**

**Parameter**

**Description**

**Required**

**Default**

`LOGICAL PARTITION BY LIST(<partition_key>)`

Creates logical partitioned Dynamic Table. You must also set the `auto_refresh_partition_active_time` and `partition_key_time_format` parameters to use it.

No

None

`auto_refresh_partition_active_time`

The refresh scope for partitions, specified in minutes, hours, or days. Hologres traces back historical partitions from the current time based on this setting and automatically refreshes partitions within this scope.

Active partitions are those are those for which the elapsed time since the partition's start (which is derived from its name) is less than the duration specified by the `auto_refresh_partition_active_time` configuration setting.

**Note**

-   The `auto_refresh_partition_active_time` parameter must specify a duration that is greater than one partition interval. For example, if data is partitioned daily, `auto_refresh_partition_active_time` must be set to a period longer than 24 hours.
    
-   This parameter is modifiable. Changes only affect future partitions.
    

Yes

Defaults to `Partitioning interval + 1 hour`.

This provides a 1-hour buffer to account for potential data delays from the base table. For example, with daily partitioning, the default becomes 25 hours (1 day + 1 hour).

`partition_key_time_format`

The partition format, based on which Hologres generates partition names. Valid options:

-   For `TEXT`/`VARCHAR` partition keys:
    
    YYYYMMDDHH24, YYYY-MM-DD-HH24, YYYY-MM-DD\_HH24, YYYYMMDD, YYYY-MM-DD, YYYYMM, YYYY-MM, YYYY.
    
-   For INT partition keys:
    
    YYYYMMDDHH24, YYYYMMDD, YYYYMM, YYYY.
    
-   For DATE partition keys:
    
    YYYY-MM-DD
    

Yes

None

##### **Physical partitioned tables**

**Parameter**

**Description**

**Required**

**Default**

`PARTITION BY LIST(<partition_key>)`

Creates a physical partitioned Dynamic Table.

Compared to logical partitioned Dynamic Tables, a physical partitioned Dynamic Table lacks dynamic partitioning capabilities and have certain usage limitations. We recommend using logical partitions instead. For differences, see [CREATE LOGICAL PARTITION TABLE](/help/en/hologres/developer-reference/create-logical-partition-table#32e49b34511gz).

**Important**

Hologres V3.1+ do not support creating a Dynamic Table as a physical partitioned table.

No

None

#### **Table properties**

**Parameter**

**Description**

**Required**

**Default value**

**Full refresh mode**

**Incremental refresh mode**

`col_name`

The column name in the Dynamic Table.

You can explicitly specify the column names for a Dynamic Table, but not their attributes or data types, as the engine infers them automatically.

**Note**

Specifying column attributes and data types can lead to incorrect engine inference.

No

Query column name

Query column name

`orientation`

Specifies the storage format for the Dynamic Table. `column` indicates column-oriented storage.

No

`column`

`column`

`table_group`

Specifies the Table Group for the Dynamic Table. It defaults to the default Table Group of the current database. For more information, see [Manage table groups and shards](/help/en/hologres/user-guide/user-guide-of-table-groups-and-shard-counts).

No

Default Table Group name

Default Table Group name

`distribution_key`

Specifies the distribution key for the Dynamic Table. For more information, see [Distribution key](/help/en/hologres/user-guide/distribution-key).

No

(none)

(none)

`clustering_key`

Specifies the clustering key for the Dynamic Table. For more information, see [Clustering key](/help/en/hologres/user-guide/clustering-key).

No

Allowed, with a default inferred value.

Allowed, with a default inferred value.

`event_time_column`

See [Event time column (segment key)](/help/en/hologres/user-guide/segment-key).

No

(none)

(none)

`bitmap_columns`

Specifies the bitmap column for the Dynamic Table. For more information, see [Bitmap index](/help/en/hologres/user-guide/bitmap-index).

No

TEXT type fields

TEXT type fields

`dictionary_encoding_columns`

See [Dictionary encoding](/help/en/hologres/user-guide/dictionary-encoding).

No

TEXT type fields

TEXT type fields

`time_to_live_in_seconds`

Specifies the Time to Live (TTL) for data in the Dynamic Table.

No

No expiration

No expiration

`storage_mode`

The storage tier for the Dynamic Table. Valid values:

-   `hot`: Hot storage.
    
-   `cold`: Cold storage.
    

**Note**

For details, see [Set up storage tiering](/help/en/hologres/user-guide/tiered-storage-of-hot-data-and-cold-data).

No

`hot`

`hot`

`binlog_level`

Specifies whether to enable binlog for the Dynamic Table. For details, see [Subscribe to Hologres Binlog](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs).

**Note**

-   This parameter requires V3.1.18 and later.
    
-   Avoid enabling binlog for Dynamic Tables that use full refresh.
    

No

`none`

`none`

`binlog_ttl`

The binlog TTL.

No

`2592000`

`2592000`

#### **Query**

The query that generates the data in the Dynamic Table. The supported query and base table types vary depending on the refresh mode. For more information, see [Scope and limitations](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).

## V3.0 (legacy syntax)

### **Create Dynamic Table syntax**

```
CREATE DYNAMIC TABLE [IF NOT EXISTS] <schema.tablename>(
[col_name],
[col_name]
  ) [PARTITION BY LIST (col_name)]
WITH (
    [refresh_mode='[full|incremental]',]
    [auto_refresh_enable='[true|false',]

  --Incremental refresh parameters:
    [incremental_auto_refresh_schd_start_time='[immediate|<timestamptz>]',]
    [incremental_auto_refresh_interval='[<num> {minute|minutes|hour|hours]',]  
    [incremental_guc_hg_computing_resource='[ local | serverless]',]
    [incremental_guc_hg_experimental_serverless_computing_required_cores='<num>',]

   --Full refresh parameters:
    [full_auto_refresh_schd_start_time='[immediate|<timestamptz>]',]
    [full_auto_refresh_interval='[<num> {minute|minutes|hour|hours]',] 
    [full_guc_hg_computing_resource='[ local | serverless]',]--hg_full_refresh_computing_resource defaults to serverless, can be set at the DB level, and is optional for users.
    [full_guc_hg_experimental_serverless_computing_required_cores='<num>',]
    
   --Shared parameters, GUCs are allowed:
   [refresh_guc_<guc>='xxx]',] 
   
  -- General Dynamic Table properties:
    [orientation = '[column]',]
    [table_group = '[tableGroupName]',]
    [distribution_key = 'columnName[,...]]',]
    [clustering_key = '[columnName{:asc]} [,...]]',]
    [event_time_column = '[columnName [,...]]',]
    [bitmap_columns = '[columnName [,...]]',]
    [dictionary_encoding_columns = '[columnName [,...]]',]
    [time_to_live_in_seconds = '<non_negative_literal>',]
    [storage_mode = '[hot | cold]']
    ) 
AS
<query> --Query definition
```

### **Parameters**

#### **Refresh mode and resources**

**Category**

**Parameter**

**Description**

**Required**

**Default**

Shared refresh parameters

`refresh_mode`

Specifies the data refresh mode. Valid values: `full` and `incremental`.

If it's not set, no refresh is performed.

No

(none)

`auto_refresh_enable`

Specifies whether to enable automatic refresh. Valid values:

-   `true`
    
-   `false`
    

No

false

`refresh_guc_<guc>`

You can set GUC parameters for refresh operations. For a list of supported GUCs, see [GUC parameters](/help/en/hologres/developer-reference/guc-parameters).

**Note**

For example, to set the timezone GUC, use `refresh_guc_timezone = 'GMT-8:00'`.

No

(none)

Incremental refresh

`incremental_auto_refresh_schd_start_time`

The start time for incremental refresh. Valid values:

-   `immediate`: Default. Starts incremental refresh immediately after table creation.
    
-   `<timestamptz>`: A custom start time, e.g., '2024-08-24 1:00', to begin the refresh task at that time.
    

No

immediate

`incremental_auto_refresh_interval`

The interval for incremental refresh. Unit: minute (minutes) and hour (hours).

-   Value range: \[1min, 48hours\].
    
-   If it's not set, the Dynamic Table is refreshed only once, at the start time.
    

No

(none)

`incremental_guc_hg_computing_resource`

Specifies the computing resources for incremental refresh. Valid values:

-   `local`: Use the instance's own resources.
    
-   `serverless`: Use Serverless Computing resources. To check if the instance meets Serverless Computing requirements, see [Work with serverless computing](/help/en/hologres/user-guide/serverless-computing/).
    

**Note**

To set the computing resources at the DB level, run `ALTER DATABASE xxx SET incremental_guc_hg_computing_resource=xx`.

No

local

`incremental_guc_hg_experimental_serverless_computing_required_cores`

Specifies Serverless Computing resources used for refresh.

**Note**

Serverless Computing resource quotas vary by instance specifications. For more information, see [Manage serverless computing resources](/help/en/hologres/user-guide/manage-serverless-computing-resources).

No

(none)

Full refresh

`full_auto_refresh_schd_start_time`

The start time for full refresh. Valid values:

-   `immediate`: Default. Starts full refresh immediately after table creation.
    
-   `<timestamptz>`: A custom start time, e.g., '2024-08-24 1:00', to begin the refresh task at that time.
    

No

immediate

`full_auto_refresh_interval`

The interval for full refresh. Unit: minute (minutes) and hour(hours).

-   Value range: \[1min, 48hours\].
    
-   If it's not set, the Dynamic Table is refreshed only once, at the start time.
    

No

(none)

`full_guc_hg_computing_resource`

Specifies the computing resources for full refresh. Valid values:

-   `local`: The instance's own resources.
    
-   `serverless`: Use Serverless Computing resources. To check if the instance meets Serverless Computing requirements, see [Work with serverless computing](/help/en/hologres/user-guide/serverless-computing/).
    

**Note**

To set the computing resources at the DB level, run `ALTER DATABASE xxx SET full_guc_hg_computing_resource=xx`.

No

local

`full_guc_hg_experimental_serverless_computing_required_cores`

Specifies Serverless Computing resources used for refresh.

**Note**

Serverless Computing resource quotas vary by instance specifications. For more information, see [Manage serverless computing resources](/help/en/hologres/user-guide/manage-serverless-computing-resources).

No

(none)

#### **Table properties**

**Parameter**

**Description**

**Required**

**Default**

**full**

**incremental**

`col_name`

The column name in the Dynamic Table.

You can explicitly specify the column names for a Dynamic Table, but not their attributes or data types, as the engine infers them automatically.

**Note**

Specifying column attributes and data types can lead to incorrect engine inference.

No

Query column name

Query column name

`orientation`

Specifies the storage mode for the Dynamic Table. The value `column` indicates column-oriented storage.

No

`column`

`column`

`table_group`

Specifies the Table Group for the Dynamic Table. Defaults to the default Table Group of the current database. For more information, see [Manage table groups and shards](/help/en/hologres/user-guide/user-guide-of-table-groups-and-shard-counts).

No

Default Table Group name

Default Table Group name

`distribution_key`

Specifies the distribution key for the Dynamic Table. For more information, see [Distribution key](/help/en/hologres/user-guide/distribution-key).

No

(none)

(none)

`clustering_key`

Specifies the clustering key for the Dynamic Table. For more information, see [Clustering key](/help/en/hologres/user-guide/clustering-key).

No

Allowed, with a default inferred value.

Allowed, with a default inferred value.

`event_time_column`

Specifies the segment key for the Dynamic Table. For more information, see [Event time column (segment key)](/help/en/hologres/user-guide/segment-key).

No

(none)

(none)

`bitmap_columns`

Specifies the bitmap columns for the Dynamic Table. For more information, see [Bitmap index](/help/en/hologres/user-guide/bitmap-index).

No

TEXT type fields

TEXT type fields

`dictionary_encoding_columns`

See [Dictionary encoding](/help/en/hologres/user-guide/dictionary-encoding).

No

TEXT type fields

TEXT type fields

`time_to_live_in_seconds`

Specifies data TTL in the Dynamic Table.

No

No expiration

No expiration

`storage_mode`

The storage tier for the Dynamic Table. Valid values:

-   `hot`: Hot storage.
    
-   `cold`: Cold storage.
    

**Note**

See [Set up storage tiering](/help/en/hologres/user-guide/tiered-storage-of-hot-data-and-cold-data).

No

`hot`

`hot`

`PARTITION BY LIST`

Specifies whether it is a partitioned table. You can create a partitioned Dynamic Table, which is used similarly to a regular partitioned table. Different partitions can have different refresh modes to meet various data refreshness requirements.

No

Non-partitioned table

Non-partitioned table

#### **Query**

The query that generates the data in the \`Dynamic Table\`. The supported query and base table types vary depending on the refresh mode. For more information, see [Dynamic Table support and limitations](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).

## **Incremental refresh**

Incremental refresh automatically detects changes in the base table's data and writes the incremental data from the query into the Dynamic Table. Compared to a full refresh, incremental refresh processes a smaller amount of data, resulting in less processing time. For near-real-time data query needs at the minute level, we recommend using incremental refresh. Take note of the following:

-   Base table limitations:
    
    -   Hologres V3.1 uses the `stream` mode by default to consume incremental data. If your base table had Binlog enabled in V3.0, we recommend disabling it to prevent increased storage costs.
        
    -   In V3.0, you must enable binlog for the base table, except for a dimension table involved in a join. Enabling binlog for a base table incurs some storage overhead. Check the binlog storage usage by referring to [Query the storage details of a table](/help/en/hologres/view-the-storage-size-of-the-table-and-db#83ea0ce0523vl).
        
-   In incremental refresh mode, Hologres generates a state table in the background to record intermediate aggregation results (See [Dynamic tables](/help/en/hologres/user-guide/dynamic-table-overview/#01049f702837s) for details). The state table also consumes some space for state storage. To view storage usage, see [View dynamic table schema and lineage](/help/en/hologres/user-guide/view-the-dynamic-table-structure-and-blood-relationship).
    
-   For details on the queries and operators currently supported by incremental refresh, see [Dynamic Table support and limitations](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits#d1850d58ccunv).
    

### **Stream-stream joins**

Stream-stream JOINs have the same semantics as OLAP queries and are implemented based on HASH JOIN. It supports INNER JOIN, LEFT/RIGHT/FULL OUTER JOIN.

## V3.1

**Note**

Starting from Hologres V3.1, the GUC for stream-stream JOIN is enabled by default.

Example:

```
CREATE TABLE users (
  user_id INT,
  user_name TEXT,
  PRIMARY KEY (user_id)
);
INSERT INTO users VALUES(1, 'hologres');

CREATE TABLE orders (
  order_id INT,
  user_id INT,
  PRIMARY KEY (order_id)
);
INSERT INTO orders VALUES(1, 1);

CREATE DYNAMIC TABLE dt WITH (
  auto_refresh_mode = 'incremental',
  freshness='10 minutes'
) 
AS 
SELECT order_id, orders.user_id, user_name 
FROM orders LEFT JOIN users ON orders.user_id = users.user_id;

-- After refresh, one joined record is visible
REFRESH TABLE dt;
SELECT * FROM dt;
 order_id | user_id | user_name 
----------+---------+-----------
        1 |       1 | hologres
(1 row)


UPDATE users SET user_name = 'dynamic table' WHERE user_id = 1;
INSERT INTO orders VALUES(4, 1);

-- After refresh, two joined records are visible. Dimension table updates affect all data and can correct previously joined records.
REFRESH TABLE dt;
SELECT * FROM dt;
```

Result:

```
order_id | user_id |   user_name   
----------+---------+---------------
        1 |       1 | dynamic table
        4 |       1 | dynamic table
(2 rows)
```

## V3.0

Stream-stream JOINs are supported in V3.0.26. To enable this feature, upgrade your instance and enable the GUC:

```
-- Enable at session level
SET hg_experimental_incremental_dynamic_table_enable_hash_join TO ON;

-- Enable at DB level (takes effect for new connections)
ALTER database <db_name> SET hg_experimental_incremental_dynamic_table_enable_hash_join TO ON;
```

Example:

```
CREATE TABLE users (
  user_id INT,
  user_name TEXT,
  PRIMARY KEY (user_id)
) WITH (binlog_level = 'replica');
INSERT INTO users VALUES(1, 'hologres');

CREATE TABLE orders (
  order_id INT,
  user_id INT,
  PRIMARY KEY (order_id)
)  WITH (binlog_level = 'replica');
INSERT INTO orders VALUES(1, 1);

CREATE DYNAMIC TABLE dt WITH (refresh_mode = 'incremental') 
AS 
SELECT order_id, orders.user_id, user_name 
FROM orders LEFT JOIN users ON orders.user_id = users.user_id;

-- After refresh, one joined record is visible
REFRESH TABLE dt;
SELECT * FROM dt;
 order_id | user_id | user_name 
----------+---------+-----------
        1 |       1 | hologres
(1 row)


UPDATE users SET user_name = 'dynamic table' WHERE user_id = 1;
INSERT INTO orders VALUES(4, 1);

-- After refresh, two joined records are visible. Dimension table updates affect all data and can correct previously joined records.
REFRESH TABLE dt;
SELECT * FROM dt;
```

Result:

```
order_id | user_id |   user_name   
----------+---------+---------------
        1 |       1 | dynamic table
        4 |       1 | dynamic table
(2 rows)
```

### **Dimension table joins**

Each record in a data stream is joined with a snapshot of the dimension table, reflecting its latest state at the exact moment of processing. This means the JOIN operation is performed strictly at processing time. Consequently, any additions, updates, or deletions to the dimension table that occur after a JOIN will not impact the already-processed data.

**Note**

The dimension table JOIN operation is independent of the table's data volume; it is determined by the JOIN statement.

## V3.1

```
CREATE TABLE users (
  user_id INT,
  user_name TEXT,
  PRIMARY KEY (user_id)
);
INSERT INTO users VALUES(1, 'hologres');

CREATE TABLE orders (
  order_id INT,
  user_id INT,
  PRIMARY KEY (order_id)
)  WITH (binlog_level = 'replica');

INSERT INTO orders VALUES(1, 1);
CREATE DYNAMIC TABLE dt_join_2 WITH (
    auto_refresh_mode = 'incremental',
    freshness='10 minutes') 
AS 
SELECT order_id, orders.user_id, user_name 
-- FOR SYSTEM_TIME AS OF PROCTIME() identifies 'users' as a dimension table
FROM orders LEFT JOIN users FOR SYSTEM_TIME AS OF PROCTIME()
ON orders.user_id = users.user_id;

-- After refresh, one joined record is visible
REFRESH TABLE dt_join_2;
SELECT * FROM dt_join_2;
 order_id | user_id | user_name 
----------+---------+-----------
        1 |       1 | hologres
(1 row)


UPDATE users SET user_name = 'dynamic table' WHERE user_id = 1;
INSERT INTO orders VALUES(4, 1);

-- After refresh, two joined records are visible. Dimension table updates only affect new data and cannot correct previously joined data.
REFRESH TABLE dt_join_2;
SELECT * FROM dt_join_2;
```

Result:

```
order_id | user_id |   user_name   
----------+---------+---------------
        1 |       1 | hologres
        4 |       1 | dynamic table
(2 rows)
```

## V3.0

```
CREATE TABLE users (
  user_id INT,
  user_name TEXT,
  PRIMARY KEY (user_id)
);
INSERT INTO users VALUES(1, 'hologres');

CREATE TABLE orders (
  order_id INT,
  user_id INT,
  PRIMARY KEY (order_id)
)  WITH (binlog_level = 'replica');
INSERT INTO orders VALUES(1, 1);

CREATE DYNAMIC TABLE dt_join_2 WITH (refresh_mode = 'incremental') 
AS 
SELECT order_id, orders.user_id, user_name 
-- FOR SYSTEM_TIME AS OF PROCTIME() identifies 'users' as a dimension table
FROM orders LEFT JOIN users FOR SYSTEM_TIME AS OF PROCTIME()
ON orders.user_id = users.user_id;

-- After refresh, one joined record is visible
REFRESH TABLE dt_join_2;
SELECT * FROM dt_join_2;

order_id | user_id | user_name 
----------+---------+-----------
        1 |       1 | hologres
(1 row)
 
UPDATE users SET user_name = 'dynamic table' WHERE user_id = 1;
INSERT INTO orders VALUES(4, 1);

-- After refresh, two joined records are visible. Dimension table updates only affect new data and cannot correct previously joined data.
REFRESH TABLE dt_join_2;
SELECT * FROM dt_join_2;
```

Result:

```
order_id | user_id |   user_name   
----------+---------+---------------
        1 |       1 | hologres
        4 |       1 | dynamic table
(2 rows)
```

### **Incremental consumption of Paimon lake tables**

-   Incremental refresh can be used for consuming Paimon tables, enabling data lakehousing.
    
-   External Dynamic Tables enhance the lakehouse data experience by offering incremental reading and seamless write-back capabilities. This combination simplifies data processing, accelerates query performance, and ultimately reduces operational costs. See [External Dynamic Table introduction](/help/en/hologres/user-guide/hologres-external-dynamic-table-introduction).
    

### **Hybrid consumption**

Currently, an Incremental Dynamic Table also supports a hybrid consumption model. This model first performs an initial full load of all existing data from the base table, and then continuously processes only new, incremental data.

## V3.1

V3.1 enables the hybrid refresh model by default. Example:

```
--Prepare the base table and insert data
CREATE TABLE base_sales(
  day TEXT NOT NULL,
  hour INT,
  user_id BIGINT,
  ts TIMESTAMPTZ,
  amount FLOAT,
  pk text NOT NULL PRIMARY KEY
);

-- Import data into the base table
INSERT INTO base_sales values ('2024-08-29',1,222222,'2024-08-29 16:41:19.141528+08',5,'ddd');


-- Import more data
INSERT INTO base_sales VALUES ('2024-08-29',2,3333,'2024-08-29 17:44:19.141528+08',100,'aaaaa');


-- Create an incremental Dynamic Table
CREATE DYNAMIC TABLE sales_incremental
  WITH (
    auto_refresh_mode='incremental',
    freshness='10 minutes'
  ) 
AS 
  SELECT day, hour, SUM(amount), COUNT(1) 
    FROM base_sales 
  GROUP BY day, hour;
```

Check data consistency:

-   Query the base table
    
    ```
    SELECT day, hour, SUM(amount), COUNT(1) 
        FROM base_sales 
      GROUP BY day, hour;
    ```
    
    Result:
    
    ```
    day	    hour	sum	count
    2024-08-29	2	100	1
    2024-08-29	1	5	1
    ```
    
-   Query the Dynamic Table
    
    ```
    SELECT * FROM sales_incremental;
    ```
    
    Result:
    
    ```
    day	    hour	sum	count
    2024-08-29	1	5	1
    2024-08-29	2	100	1
    ```
    

## V3.0

In V3.0, to use hybrid consumption, manually enable the GUC `incremental_guc_hg_experimental_enable_hybrid_incremental_mode`. Example:

```
--Prepare the base table, enable Binlog, and insert data
CREATE TABLE base_sales(
  day TEXT NOT NULL,
  hour INT,
  user_id BIGINT,
  ts TIMESTAMPTZ,
  amount FLOAT,
  pk text NOT NULL PRIMARY KEY
);

-- Import data into the base table
INSERT INTO base_sales values ('2024-08-29',1,222222,'2024-08-29 16:41:19.141528+08',5,'ddd');

-- Enable Binlog for the base table
ALTER TABLE base_sales SET (binlog_level = replica);

-- Import incremental data into the base table
INSERT INTO base_sales VALUES ('2024-08-29',2,3333,'2024-08-29 17:44:19.141528+08',100,'aaaaa');


-- Create an auto-refreshing incremental Dynamic Table and enable the GUC for hybrid consumption
CREATE DYNAMIC TABLE sales_incremental
  WITH (
    refresh_mode='incremental',
    incremental_auto_refresh_schd_start_time = 'immediate',
    incremental_auto_refresh_interval = '3 minutes',
    incremental_guc_hg_experimental_enable_hybrid_incremental_mode= 'true'
  ) 
AS 
  SELECT day, hour, SUM(amount), COUNT(1) 
    FROM base_sales 
  GROUP BY day, hour;
```

Check data consistency:

-   Query the base table
    
    ```
    SELECT day, hour, SUM(amount), COUNT(1) 
        FROM base_sales 
      GROUP BY day, hour;
    ```
    
    Result:
    
    ```
    day	    hour	sum	count
    2024-08-29	2	100	1
    2024-08-29	1	5	1
    ```
    
-   Query the Dynamic Table
    
    ```
    SELECT * FROM sales_incremental;
    ```
    
    Result:
    
    ```
    day	    hour	sum	count
    2024-08-29	1	5	1
    2024-08-29	2	100	1
    ```
    

## **Full refresh**

Full refresh writes the entire dataset from the query into the Dynamic Table. Compared to incremental refresh, its advantages are:

-   Supports more base table types.
    
-   Supports a richer set of query types and operators.
    

Full refresh processes more data and may consume more resources than incremental refresh. Therefore, it is better suited for scenarios like periodic reporting and regular data backfills.

**Note**

For more information, see [Full refresh](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits#2280a76744t7d).

## **Examples**

## **V3.1**

### **Example 1: Create a regular Incremental Dynamic Table**

Before proceeding, import the `tpch_10g` public dataset into Hologres by following the guide at [Import public datasets](/help/en/hologres/user-guide/one-click-import-of-public-datasets).

**Note**

Before creating an Incremental Dynamic Table, enable Binlog for the base table (not required for dimension tables).

```
-- Create an Incremental Dynamic Table that refreshes every 3 minutes.
CREATE DYNAMIC TABLE public.tpch_q1_incremental 
WITH (
auto_refresh_mode='incremental',
freshness='3 minutes'
) AS SELECT
        l_returnflag,
        l_linestatus,
        COUNT(*) AS count_order
FROM
        hologres_dataset_tpch_10g.lineitem
WHERE
        l_shipdate <= DATE '1998-12-01' - INTERVAL '120' DAY
GROUP BY
        l_returnflag,
        l_linestatus;
```

### **Example 2: Create an Incremental Dynamic Table from stream-stream joins**

Before proceeding, import the `tpch_10g` public dataset into Hologres by following the guide at [Import public datasets](/help/en/hologres/user-guide/one-click-import-of-public-datasets).

**Note**

Before creating an Incremental Dynamic Table, enable binlog for the base table (not required for the dimension table).

```
-- Create an Incremental Dynamic Table from stream-stream joins.
CREATE DYNAMIC TABLE dt_join
  WITH (
    auto_refresh_mode='incremental',
    freshness='30 minutes'
  ) 
AS 
SELECT
        l_shipmode,
        SUM(CASE
                WHEN o_orderpriority = '1-URGENT'
                        OR o_orderpriority = '2-HIGH'
                        THEN 1
                ELSE 0
        END) AS high_line_count,
        SUM(CASE
                WHEN o_orderpriority <> '1-URGENT'
                        AND o_orderpriority <> '2-HIGH'
                        THEN 1
                ELSE 0
        END) AS low_line_count
FROM
        hologres_dataset_tpch_10g.orders,
        hologres_dataset_tpch_10g.lineitem
WHERE
        o_orderkey = l_orderkey
        AND l_shipmode IN ('FOB', 'AIR')
        AND l_commitdate < l_receiptdate
        AND l_shipdate < l_commitdate
        AND l_receiptdate >= DATE '1997-01-01'
        AND l_receiptdate < DATE '1997-01-01' + INTERVAL '1' YEAR
GROUP BY
        l_shipmode;
```

### **Example 3: Create an Auto-refresh Dynamic Table**

Set the refresh mode to auto, allowing the engine to automatically select the refresh mode. It will prioritize incremental refresh and fall back to full refresh if incremental is not supported.

Before proceeding, import the `tpch_10g` public dataset into Hologres by following the guide at [Import public datasets](/help/en/hologres/user-guide/one-click-import-of-public-datasets).

```
-- Create an Auto-refresh Dynamic Table that intelligent decides the refresh mode. In this example, incremental refresh is the result.
CREATE DYNAMIC TABLE thch_q6_auto
  WITH (
    auto_refresh_mode='auto',
    freshness='1 hours'
       ) 
AS
SELECT
        SUM(l_extendedprice * l_discount) AS revenue
FROM
        hologres_dataset_tpch_100g.lineitem
WHERE
        l_shipdate >= DATE '1996-01-01'
        AND l_shipdate < DATE '1996-01-01' + INTERVAL '1' YEAR
        AND l_discount BETWEEN 0.02 - 0.01 AND 0.02 + 0.01
        AND l_quantity < 24;
```

### **Example 4: Create a logical partitioned Dynamic Table**

For a real-time transaction dashboard, there's often a need for both near-real-time viewing of current data and correction of historical data, which requires an integrated real-time and offline analysis solution (see [Business and data cognition](/help/en/hologres/use-cases/integration-of-offline-and-real-time-processing-of-data-in-github-public-event-datasets#f52c81c0cca5h)). We typically use \`Dynamic Table\` logical partitions for this scenario. The approach is as follows:

-   The base table is partitioned by day. The latest partition is written to by Flink in real-time/near-real-time, while historical partitions are written from MaxCompute.
    
-   The Dynamic Table is created as a logical partitioned table. The latest two partitions are active and refreshed incrementally for near-real-time data analytics.
    
-   Historical partitions are inactive and use full refresh. If the base table's historical partitions have been corrected or backfilled, they can be refreshed using a full refresh.
    

This example uses a public dataset from GitHub.

1.  Prepare the base table.
    
    Use Flink to write the latest data to the base table. For detailed steps, see [Batch and real-time analytics](/help/en/hologres/use-cases/integration-of-offline-and-real-time-processing-of-data-in-github-public-event-datasets).
    
    ```
    DROP TABLE IF EXISTS gh_realtime_data;
    
    BEGIN;
    CREATE TABLE gh_realtime_data (
        id BIGINT,
        actor_id BIGINT,
        actor_login TEXT,
        repo_id BIGINT,
        repo_name TEXT,
        org_id BIGINT,
        org_login TEXT,
        type TEXT,
        created_at timestamp with time zone NOT NULL,
        action TEXT,
        iss_or_pr_id BIGINT,
        number BIGINT,
        comment_id BIGINT,
        commit_id TEXT,
        member_id BIGINT,
        rev_or_push_or_rel_id BIGINT,
        ref TEXT,
        ref_type TEXT,
        state TEXT,
        author_association TEXT,
        language TEXT,
        merged BOOLEAN,
        merged_at TIMESTAMP WITH TIME ZONE,
        additions BIGINT,
        deletions BIGINT,
        changed_files BIGINT,
        push_size BIGINT,
        push_distinct_size BIGINT,
        hr TEXT,
        month TEXT,
        year TEXT,
        ds TEXT,
        PRIMARY KEY (id,ds)
    )
    PARTITION BY LIST (ds);
    CALL set_table_property('public.gh_realtime_data', 'distribution_key', 'id');
    CALL set_table_property('public.gh_realtime_data', 'event_time_column', 'created_at');
    CALL set_table_property('public.gh_realtime_data', 'clustering_key', 'created_at');
    
    COMMENT ON COLUMN public.gh_realtime_data.id IS 'Event ID';
    COMMENT ON COLUMN public.gh_realtime_data.actor_id IS 'Event actor ID';
    COMMENT ON COLUMN public.gh_realtime_data.actor_login IS 'Event actor login name';
    COMMENT ON COLUMN public.gh_realtime_data.repo_id IS 'Repo ID';
    COMMENT ON COLUMN public.gh_realtime_data.repo_name IS 'Repo name';
    COMMENT ON COLUMN public.gh_realtime_data.org_id IS 'Repo organization ID';
    COMMENT ON COLUMN public.gh_realtime_data.org_login IS 'Repo organization name';
    COMMENT ON COLUMN public.gh_realtime_data.type IS 'Event type';
    COMMENT ON COLUMN public.gh_realtime_data.created_at IS 'Event time';
    COMMENT ON COLUMN public.gh_realtime_data.action IS 'Event action';
    COMMENT ON COLUMN public.gh_realtime_data.iss_or_pr_id IS 'Issue/pull_request ID';
    COMMENT ON COLUMN public.gh_realtime_data.number IS 'Issue/pull_request number';
    COMMENT ON COLUMN public.gh_realtime_data.comment_id IS 'Comment ID';
    COMMENT ON COLUMN public.gh_realtime_data.commit_id IS 'Commit ID';
    COMMENT ON COLUMN public.gh_realtime_data.member_id IS 'Member ID';
    COMMENT ON COLUMN public.gh_realtime_data.rev_or_push_or_rel_id IS 'Review/push/release ID';
    COMMENT ON COLUMN public.gh_realtime_data.ref IS 'Name of created/deleted resource';
    COMMENT ON COLUMN public.gh_realtime_data.ref_type IS 'Type of created/deleted resource';
    COMMENT ON COLUMN public.gh_realtime_data.state IS 'State of issue/pull_request/pull_request_review';
    COMMENT ON COLUMN public.gh_realtime_data.author_association IS 'Relationship between actor and repo';
    COMMENT ON COLUMN public.gh_realtime_data.language IS 'Programming language';
    COMMENT ON COLUMN public.gh_realtime_data.merged IS 'Whether merged';
    COMMENT ON COLUMN public.gh_realtime_data.merged_at IS 'Merge time';
    COMMENT ON COLUMN public.gh_realtime_data.additions IS 'Number of added lines';
    COMMENT ON COLUMN public.gh_realtime_data.deletions IS 'Number of deleted lines';
    COMMENT ON COLUMN public.gh_realtime_data.changed_files IS 'Number of changed files in pull request';
    COMMENT ON COLUMN public.gh_realtime_data.push_size IS 'Number of pushes';
    COMMENT ON COLUMN public.gh_realtime_data.push_distinct_size IS 'Number of distinct pushes';
    COMMENT ON COLUMN public.gh_realtime_data.hr IS 'Hour of event, e.g., 00 for 00:23';
    COMMENT ON COLUMN public.gh_realtime_data.month IS 'Month of event, e.g., 2015-10 for Oct 2015';
    COMMENT ON COLUMN public.gh_realtime_data.year IS 'Year of event, e.g., 2015';
    COMMENT ON COLUMN public.gh_realtime_data.ds IS 'Date of event, ds=yyyy-mm-dd';
    
    COMMIT;
    ```
    
2.  Create a logical partitioned Dynamic Table.
    
    ```
    CREATE  DYNAMIC TABLE ads_dt_github_event
    LOGICAL PARTITION BY LIST(ds)
    WITH (
      -- Dynamic table properties
      freshness = '5 minutes', 
      auto_refresh_mode = 'auto', 
      auto_refresh_partition_active_time = '2 days' ,
      partition_key_time_format = 'YYYY-MM-DD'
    )
    AS
    SELECT
        repo_name,
        COUNT(*) AS events,
        ds
    FROM
        gh_realtime_data
    GROUP BY repo_name,ds
    ```
    
3.  Query the Dynamic Table.
    
    ```
    SELECT * FROM ads_dt_github_event ;
    ```
    
4.  Backfill a historical partition.
    
    If historical data in the base table changes (e.g., data for '2025-04-01'), and the Dynamic Table needs to be updated, set the historical partition to full refresh mode and trigger a refresh, preferably with Serverless Computing resources.
    
    ```
    REFRESH OVERWRITE DYNAMIC TABLE ads_dt_github_event
    PARTITION (ds = '2025-04-01') 
    WITH (
      refresh_mode = 'full'
    );
    ```
    

### **Example 5: Calculate UVs with Incremental Dynamic Table**

Starting from Hologres V3.1, an Incremental Dynamic Table supports the `RB_BUILD_AGG` function for calculations like the number of UVs. Compared to pre-aggregation, this offers:

-   Faster performance: Computes only incremental data.
    
-   Lower cost: Reduced data volume and resource usage, enabling calculations over longer periods.
    

**Example**:

1.  Prepare a user detail table.
    
    ```
    BEGIN;
    CREATE TABLE IF NOT EXISTS ods_app_detail (
         uid INT,
         country TEXT,
         prov TEXT,
         city TEXT,
         channel TEXT,
         operator TEXT,
         brand TEXT,
         ip TEXT,
         click_time TEXT,
         year TEXT,
         month TEXT,
         day TEXT,
         ymd TEXT NOT NULL
    );
    CALL set_table_property('ods_app_detail', 'orientation', 'column');
    CALL set_table_property('ods_app_detail', 'bitmap_columns', 'country,prov,city,channel,operator,brand,ip,click_time, year, month, day, ymd');
    -- Set distribution_key based on query needs for optimal sharding effect.
    CALL set_table_property('ods_app_detail', 'distribution_key', 'uid');
    -- For a field with full date-time used in WHERE filters, setting it as clustering_key and event_time_column is recommended.
    CALL set_table_property('ods_app_detail', 'clustering_key', 'ymd');
    CALL set_table_property('ods_app_detail', 'event_time_column', 'ymd');
    COMMIT;
    ```
    
2.  Calculate UV using an Incremental Dynamic Table.
    
    ```
    CREATE DYNAMIC TABLE ads_uv_dt
      WITH (
        freshness = '5 minutes', 
        auto_refresh_mode = 'incremental') 
      AS 
    SELECT  
     RB_BUILD_AGG(uid),
     country,
     prov,
     city,
     ymd,
    COUNT(1)
    FROM    ods_app_detail
    WHERE ymd >= '20231201' AND ymd <='20240502'
    GROUP BY country,prov,city,ymd;
    ```
    
3.  Query UV for a specific day.
    
    ```
    SELECT  
    RB_CARDINALITY(RB_OR_AGG(rb_uid)) AS uv,
      country,
      prov,
      city,
      SUM(pv) AS pv
    FROM    ads_uv_dt
    WHERE   ymd = '20240329'
    GROUP BY country,prov,city;
    ```
    

## **V3.0**

### **Example 1: Create an auto-starting full-refresh dynamic table**

Before proceeding, import the tpch\_10g public dataset into Hologres by following the guide at [Import public datasets](/help/en/hologres/user-guide/one-click-import-of-public-datasets).

```
--Create "test" Schema
CREATE SCHEMA test;

--Create a single-table full refresh dynamic table, starting immediately and refreshing every hour.
CREATE DYNAMIC TABLE test.thch_q1_full
  WITH (
    refresh_mode='full',
    auto_refresh_enable='true',
    full_auto_refresh_interval='1 hours',
    full_guc_hg_computing_resource='serverless',
    full_guc_hg_experimental_serverless_computing_required_cores='32'
       ) 
AS
  SELECT
        l_returnflag,
        l_linestatus,
        SUM(l_quantity) AS sum_qty,
        SUM(l_extendedprice) AS sum_base_price,
        SUM(l_extendedprice * (1 - l_discount)) AS sum_disc_price,
        SUM(l_extendedprice * (1 - l_discount) * (1 + l_tax)) AS sum_charge,
        AVG(l_quantity) AS avg_qty,
        AVG(l_extendedprice) AS avg_price,
        AVG(l_discount) AS avg_disc,
        COUNT(*) AS count_order
FROM
        hologres_dataset_tpch_10g.lineitem
WHERE
        l_shipdate <= DATE '1998-12-01' - INTERVAL '120' DAY
GROUP BY
        l_returnflag,
        l_linestatus;
```

### **Example 2: Create an incremental dynamic table with a start time**

Before proceeding, import the tpch\_10g public dataset into Hologres by following the guide at [Import public datasets](/help/en/hologres/user-guide/one-click-import-of-public-datasets).

Example:

**Note**

Before creating an incremental \`Dynamic Table\`, you must enable Binlog for the base table (not required for dimension tables).

```
--Enable binlog for the base table:
BEGIN;
CALL set_table_property('hologres_dataset_tpch_10g.lineitem', 'binlog.level', 'replica');
COMMIT;

--Create a single-table incremental refresh dynamic table, specifying a start time and a 3-minute refresh interval.
CREATE DYNAMIC TABLE public.tpch_q1_incremental 
WITH (
refresh_mode='incremental',
auto_refresh_enable='true',
incremental_auto_refresh_schd_start_time='2024-09-15 23:50:0',
incremental_auto_refresh_interval='3 minutes',
incremental_guc_hg_computing_resource='serverless',
incremental_guc_hg_experimental_serverless_computing_required_cores='30'
) AS SELECT
        l_returnflag,
        l_linestatus,
        COUNT(*) AS count_order
FROM
        hologres_dataset_tpch_10g.lineitem
WHERE
        l_shipdate <= DATE '1998-12-01' - INTERVAL '120' DAY
GROUP BY
        l_returnflag,
        l_linestatus
;
```

### **Example 3: Create a multi-join full-refresh dynamic table**

```
--Create a dynamic table with a multi-table join query, using full refresh mode every 3 hours.
CREATE DYNAMIC TABLE dt_q_full
  WITH (
    refresh_mode='full',
    auto_refresh_enable='true',
    full_auto_refresh_schd_start_time='immediate',
    full_auto_refresh_interval='3 hours',
    full_guc_hg_computing_resource='serverless',
    full_guc_hg_experimental_serverless_computing_required_cores='64'
  ) 
AS 
SELECT
        o_orderpriority,
        COUNT(*) AS order_count
FROM
        hologres_dataset_tpch_10g.orders
WHERE
        o_orderdate >= DATE '1996-07-01'
        AND o_orderdate < DATE '1996-07-01' + INTERVAL '3' MONTH
        AND EXISTS (
                SELECT
                        *
                FROM
                        hologres_dataset_tpch_10g.lineitem
                WHERE
                        l_orderkey = o_orderkey
                        AND l_commitdate < l_receiptdate
        )
GROUP BY
        o_orderpriority;
```

### **Example 4: Create a dimension-join incremental dynamic table**

Example:

**Note**

Before creating an incremental \`Dynamic Table\`, you must enable Binlog for the base table (not required for dimension tables).

The semantics of a dimension table JOIN are that each record is joined only with the latest version of the dimension table data at that time, i.e., the JOIN occurs at processing time. If the dimension table data changes (add, update, or delete) after the JOIN, the already joined data is not updated. SQL example:

```
--Detail table
BEGIN;
CREATE TABLE public.sale_detail(
        app_id TEXT,
        uid TEXT,
        product TEXT,
        gmv BIGINT,
        order_time TIMESTAMPTZ
);
--Enable binlog for the base table; dimension tables do not require it.
CALL set_table_property('public.sale_detail', 'binlog.level', 'replica');
COMMIT;

--Property table
CREATE TABLE public.user_info(
        uid TEXT,
        province TEXT,
        city TEXT
);

CREATE DYNAMIC TABLE public.dt_sales_incremental
  WITH (
    refresh_mode='incremental',
    auto_refresh_enable='true',
    incremental_auto_refresh_schd_start_time='2024-09-15 00:00:00',
    incremental_auto_refresh_interval='5 minutes',
    incremental_guc_hg_computing_resource='serverless',
    incremental_guc_hg_experimental_serverless_computing_required_cores='128') 
AS 
SELECT 
    sale_detail.app_id,
    sale_detail.uid,
    product,
    SUM(sale_detail.gmv) AS sum_gmv,
    sale_detail.order_time,
    user_info.province,
    user_info.city 
FROM public.sale_detail 
INNER JOIN public.user_info  FOR SYSTEM_TIME AS OF PROCTIME()
ON sale_detail.uid =user_info.uid
GROUP BY sale_detail.app_id,sale_detail.uid,sale_detail.product,sale_detail.order_time,user_info.province,user_info.city;
```

### **Example 5: Create a partitioned dynamic table**

For a real-time transaction dashboard, there's often a need for both near-real-time viewing of current data and correction of historical data. This can be achieved using a combination of \`Dynamic Table\` incremental and full refresh. The approach is as follows:

1.  Create a partitioned base table where the latest partition is written in real-time/near-real-time, and historical partitions are occasionally corrected.
    
2.  Create a \`Dynamic Table\` as a partitioned parent table. Use incremental refresh for the latest partition to meet near-real-time analysis needs.
    
3.  Switch historical partitions to full refresh mode. If the source table's historical partitions have been corrected, the \`Dynamic Table\`'s partitions can also be backfilled using full refresh, preferably with Serverless to speed it up.
    

**Example**:

1.  Prepare the base table and data.
    
    The base table is a partitioned table, with the latest partition receiving real-time data.
    
    ```
    -- Create a partitioned source table
    CREATE TABLE base_sales(
      uid INT,
      opreate_time TIMESTAMPTZ,
      amount FLOAT,
      tt TEXT NOT NULL,
      ds TEXT,
      PRIMARY KEY(ds)
    ) PARTITION BY LIST (ds) ;
    
    --Historical partition
    CREATE TABLE base_sales_20240615 PARTITION OF base_sales FOR VALUES IN ('20240615');
    INSERT INTO base_sales_20240615 VALUES (2,'2024-06-15 16:18:25.387466+08','111','2','20240615');
    
    --Latest partition, typically for real-time writes
    CREATE TABLE base_sales_20240616 PARTITION OF base_sales FOR VALUES IN ('20240616');
    INSERT INTO base_sales_20240616 VALUES (1,'2024-06-16 16:08:25.387466+08','2','1','20240616');
    ```
    
2.  Create a partitioned \`Dynamic Table\` parent table, defining only the query without a refresh mode.
    
    ```
    --Create extension
    CREATE EXTENSION roaringbitmap;
    
    CREATE DYNAMIC TABLE partition_dt_base_sales
    PARTITION BY LIST (ds)
    as
    SELECT  
     public.RB_BUILD_AGG(uid),
     opreate_time,
     amount,
     tt,
     ds,
    COUNT(1)
    FROM    base_sales
    GROUP BY opreate_time ,amount,tt,ds;
    ```
    
3.  Create sub-tables and set their refresh modes.
    
    You can create \`Dynamic Table\` sub-partitions manually or dynamically using DataWorks. Set the latest partition to incremental refresh and historical partitions to full refresh.
    
    ```
    -- Enable Binlog for the base table
    ALTER TABLE base_sales SET (binlog_level = replica);
    
    -- Assume the historical Dynamic Table sub-partition is as follows:
    CREATE DYNAMIC TABLE partition_dt_base_sales_20240615 PARTITION OF partition_dt_base_sales FOR VALUES IN ('20240615')
      WITH (
        refresh_mode='incremental',
        auto_refresh_enable='true',
        incremental_auto_refresh_schd_start_time='immediate',
        incremental_auto_refresh_interval='30 minutes'
           );
    
    -- Create a new Dynamic Table sub-partition, set its refresh mode to incremental, start immediately, refresh every 30 minutes, and use instance resources.
    CREATE DYNAMIC TABLE partition_dt_base_sales_20240616 PARTITION OF partition_dt_base_sales FOR VALUES IN ('20240616')
      WITH (
        refresh_mode='incremental',
        auto_refresh_enable='true',
        incremental_auto_refresh_schd_start_time='immediate',
        incremental_auto_refresh_interval='30 minutes'
           );
    
    --Switch the historical partition to full refresh mode
    ALTER DYNAMIC TABLE partition_dt_base_sales_20240615 SET (refresh_mode = 'full');
    --If historical partition data needs correction, execute a refresh, preferably with serverless.
    SET hg_computing_resource = 'serverless';
    REFRESH DYNAMIC TABLE partition_dt_base_sales_20240615;
    ```
    

## Convert legacy to new syntax

Starting from Hologres V3.1, the syntax for creating Dynamic Tables has been changed. After upgrading from V3.0, you must recreate Dynamic Tables using the V3.1 syntax. Hologres provides a syntax conversion tool to simplify this process.

### **Scenarios**

-   Incremental Dynamic Tables must be recreated with new syntax.
    
-   Syntax incompatibilities found during the upgrade check. Refer to your upgrade check report for details.
    

**Note**

Except for the scenarios above, Dynamic Tables from V3.0 do not require recreation in Hologres V3.1. However, only `ALTER DYNAMIC TABLE` can be performed on them. CREATE DYNAMIC TABLE (old syntax) is not supported in V3.1+.

### **Limitations**

The syntax conversion command is restricted to non-partitioned tables (both Incremental and Full-refresh). For partitioned Dynamic Tables from V3.0, recreate them manually.

### View Dynamic Tables requiring syntax conversion

Find tables in your instance that need conversion after an upgrade:

## Non-partitioned tables

```
SELECT DISTINCT 
    p.dynamic_table_namespace as table_namespace, 
    p.dynamic_table_name as table_name
FROM hologres.hg_dynamic_table_properties p
JOIN pg_class c ON c.relname = p.dynamic_table_name
JOIN pg_namespace n ON n.oid = c.relnamespace AND n.nspname = p.dynamic_table_namespace
WHERE p.property_key = 'refresh_mode' 
    AND p.property_value = 'incremental'
    AND c.relispartition = false 
    AND c.relkind != 'p';
```

## Partitioned tables

```
SELECT DISTINCT 
    pn.nspname as parent_schema,
    pc.relname as parent_name
FROM hologres.hg_dynamic_table_properties p
JOIN pg_class c ON c.relname = p.dynamic_table_name
JOIN pg_namespace n ON n.oid = c.relnamespace AND n.nspname = p.dynamic_table_namespace
JOIN pg_inherits i ON c.oid = i.inhrelid
JOIN pg_class pc ON pc.oid = i.inhparent
JOIN pg_namespace pn ON pn.oid = pc.relnamespace
WHERE p.property_key = 'refresh_mode' 
    AND p.property_value = 'incremental'
    AND c.relispartition = true 
    AND c.relkind != 'p';
```

### **Perform syntax conversion**

Take note of the following:

-   Version requirement: V3.1.11 and later.
    
-   Role requirement: Superuser.
    
-   Post-conversion behavior changes:
    
    -   Automatic refresh starts immediately if the refresh mode is `auto`. Ensure the operation occurs during off-peak hours to avoid resource contention. For better isolation, use Serverless Computing resources.
        
    -   Resource usage changes for virtual warehouse instances:
        
        -   V3.1/V3.2 (new syntax): Refreshing Dynamic Tables use resources from the primary virtual warehouses of base and dynamic tables' Table Groups.
            
        -   V3.0 (legacy syntax) and V4.1 (new syntax): Refreshing Dynamic Tables use resources from the primary virtual warehouse of the Dynamic Table's Table Group.
            
    -   New syntax requires more connections: This enables a stable and efficient scheduling mechanism, adding one connection per Dynamic Table. If your instance has high connection usage and hundreds of or more Dynamic Tables, clear idle connections first.
        

Commands:

```
-- Only for non-partitioned tables (full and incremental).
-- Convert a single Dynamic Table
call hg_dynamic_table_config_upgrade('<table_name>');

-- Convert all Dynamic Tables. Use with caution.
call hg_upgrade_all_normal_dynamic_tables();
```

**Note**

These commands convert Dynamic Tables (old syntax) in the current database to the new syntax.

### **Syntax parameter mappings**

The command maps V3.0 and V3.1 parameters and values as follows:

**Legacy syntax (V3.0)**

**New syntax (V3.1+)**

**Description**

`refresh_mode`

`auto_refresh_mode`

The parameter value is preserved after conversion. For example, `refresh_mode='incremental'` becomes `auto_refresh_mode='incremental'`.

`auto_refresh_enable`

`auto_refresh_enable`

The parameter value is preserved after conversion.

`{refresh_mode}_auto_refresh_schd_start_time`

`freshness`

The `auto_refresh_interval` value becomes the `freshness` value.

E.g., `full_auto_refresh_interval='30 minutes'` becomes `freshness='30 minutes'`.

`{refresh_mode}_auto_refresh_interval`

`{refresh_mode}_guc_hg_computing_resource`

`computing_resource`

The parameter value is preserved after conversion. E.g., `full_guc_hg_computing_resource='serverless'` becomes `computing_resource='serverless'`.

`{refresh_mode}guc_hg_experimental_serverless_computing_required_cores`

`refresh_guc_hg_experimental_serverless_computing_required_cores`

The parameter value is preserved after conversion.

`{refresh_mode}guc<guc>`

`refresh_guc<guc_name>`

The parameter value is preserved after conversion. For example, `incremental_guc_hg_experimental_max_consumed_rows_per_refresh='1000000'` becomes `refresh_guc_hg_experimental_max_consumed_rows_per_refresh='1000000'`.

Table properties (e.g., `orientation`)

Table properties (e.g., `orientation`)

Basic table properties remain unchanged.

## **References**

-   [View dynamic table schema and lineage](/help/en/hologres/user-guide/view-the-dynamic-table-structure-and-blood-relationship)
    
-   [Alter dynamic table](/help/en/hologres/user-guide/alter-dynamic-table)
    

## **FAQ**

-   Q: How do I fix the error with a null segment or clustering key? Example:
    
    ```
    ERROR: commit ddl phase1 failed: the index partition key "xxx" should not be nullable
    ```
    
-   Cause: A Dynamic Table's segment or clustering key is non-nullable. For rules on setting these keys, see [Event time column (segment key)](/help/en/hologres/user-guide/segment-key).
    
-   Solution:
    
    1.  Clustering key error: For Hologres earlier than V3.1.26, V3.2.9, V4.0.0, upgrade your instance and modify the following GUC to allow a nullable clustering key:
        
        ```
        -- For V3.1 and later
        ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema>.]<table_name> SET
        (refresh_guc_hg_experimental_enable_nullable_segment_key=true);
        ```
        
    2.  Segment key error: Run the following command to allow a nullable segment key. Starting from Hologres V4.1, segment keys are nullable allowed by default, so we recommend upgrading your instance to fix the error.
        
        ```
        --For V3.1 and later, allows a nullable clustering key
        ALTER DYNAMIC TABLE [ IF EXISTS ] [<schema>.]<table_name> SET
        (refresh_guc_hg_experimental_enable_nullable_clustering_key=true);
        ```
