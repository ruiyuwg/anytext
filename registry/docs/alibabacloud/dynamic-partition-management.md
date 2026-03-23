The dynamic partitioning feature in Hologres automatically creates and manages child partitions based on rules configured at table creation. You do not need to define all partitions in advance. This feature also supports migrating eligible data to low-frequency storage devices to ensure query performance and reduce storage fees.

## **Function introduction**

The following list describes feature support across different Hologres versions:

-   Starting from Hologres V1.3, you can configure dynamic partitioning rules. The system periodically runs scheduling tasks based on these rules to create child partitions in advance and delete expired ones.
    
-   Starting from Hologres V1.3.37, dynamic management of tiered storage for hot and cold data is supported. This feature automatically moves data to cold storage to reduce storage costs. For more information, see [Tiered storage](/help/en/hologres/user-guide/tiered-storage-of-hot-data-and-cold-data).
    
-   In HoloGres version 2.1.11 and later, dynamic partitioning supports the Date type as a partition key.
    
-   Starting from Hologres V2.2, you can use the `schd_start_time` property in the dynamic partition configuration table to customize the partition scheduling time. This lets you set custom times for creating, deleting, and moving partitions to cold storage.
    
-   Starting from Hologres V3.0.12, the new `auto_partitioning_time_format` parameter is available. Use this parameter to specify the date and time format of the partition key. For example, you can specify that partitions are created in the YYYY-MM-DD format.
    

## **Precautions**

-   Hologres allows you to import data to a child table rather than a parent table.
    
    **Note**
    
    Realtime Compute for Apache Flink allows you to import data to a parent table in Hologres in real time. For more information, see [Write data to a partitioned Hologres sink table in real time](/help/en/hologres/user-guide/hologres-result-table#section-7av-gr2-kws).
    
-   Each partitioning rule can be used to create only one partitioned table.
    
-   The `PARTITION BY` clause supports only `list partitioning`. The partition key must be a single column.
    
-   If a partitioned table has a primary key, the partition key must be a subset of the primary key.
    

-   The dynamic partitioning feature only supports setting the scheduling time (`schd_start_time`) for the parent table. You cannot set it for child partitions.
    
-   The `auto_partitioning_time_format` parameter can be set only once and cannot be modified after it is set. For new tables, set this parameter using the CREATE TABLE statement. You cannot modify this parameter for existing tables.
    
-   After you specify a time format using the `auto_partitioning_time_format` parameter, the naming format of child partitions matches the date format of the partition key. When you query a child partition, you must enclose the child table name in double quotes. For example: `SELECT xxx FROM "tbl_2024_11_22"`.
    

## **Configure dynamic partitioning**

#### **Syntax description**

You can configure dynamic partition management properties when you create a partitioned table or modify them after the table is created. The syntax is as follows.

## Example using the WITH clause

-   Configure dynamic partition management properties when creating a partitioned table.
    
    ```
    -- Configure dynamic partition management properties when creating a partitioned table.
    CREATE TABLE [IF NOT EXISTS] [<schema_name>.]<table_name>  ([
      {
       <column_name> <column_type> [ <column_constraints>, [...]]
       | <table_constraints>
       [, ...]
      }
    ])
    PARTITION BY LIST(<column_name>)
    WITH (
       auto_partitioning_enable = 'xxx',
       auto_partitioning_time_unit = 'xxx',
       auto_partitioning_time_zone = 'xxx',
       auto_partitioning_num_precreate = 'xxx',
       auto_partitioning_num_retention = 'xxx',
       auto_partitioning_num_hot='xxx',
       -- Note: The schd_start_time parameter is supported in Hologres V2.2 and later.
       auto_partitioning_schd_start_time = 'xxx',
       -- Note: The time_format parameter is supported in Hologres V3.0.12 and later.
       auto_partitioning_time_format = 'xxx'
    );
    ```
    
-   Modify dynamic partition management properties after creating a partitioned table.
    
    ```
    -- Modify dynamic partition management properties.
    ALTER TABLE [<schema_name>.]<table_name> SET (
       auto_partitioning_enable = 'xxx',
       auto_partitioning_time_unit = 'xxx',
       auto_partitioning_time_zone = 'xxx',
       auto_partitioning_num_precreate = 'xxx',
       auto_partitioning_num_retention = 'xxx',
       auto_partitioning_num_hot='xxx',
       -- Note: The schd_start_time parameter is supported in Hologres V2.2 and later.
       auto_partitioning_schd_start_time = 'xxx',
       -- Note: The time_format parameter is supported in Hologres V3.0.12 and later.
       auto_partitioning_time_format = 'xxx'
    );
    ```
    

## Example using the CALL statement

-   Configure dynamic partition management properties when creating a partitioned table.
    
    ```
    -- Configure dynamic partition management properties when creating a partitioned table.
    BEGIN;
    CREATE TABLE [IF NOT EXISTS] [<schema_name>.]<table_name>  ([
      {
       <column_name> <column_type> [ <column_constraints>, [...]]
       | <table_constraints>
       [, ...]
      }
    ])
    PARTITION BY LIST(<column_name>);
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.enable', 'xxx');
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.time_unit', 'xxx');
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.time_zone', 'xxx');
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.num_precreate', 'xxx');
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.num_retention', 'xxx');
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.num_hot', 'xxx');
    -- Note: The schd_start_time parameter is supported in Hologres V2.2 and later.
    CALL set_table_property ('[<schema_name>.]<table_name>', 'auto_partitioning.schd_start_time', 'xxx');
    -- Note: The time_format parameter is supported in Hologres V3.0.12 and later.
    CALL set_table_property ('[<schema_name>.]<table_name>', 'auto_partitioning.time_format', 'xxx');
    COMMIT;
    ```
    
-   Modify dynamic partition management properties after creating a partitioned table.
    
    ```
    -- Modify dynamic partition management properties.
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.enable', 'xxx');
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.num_precreate', 'xxx');
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.num_retention', 'xxx');
    -- Note: The time_format parameter is supported in Hologres V3.0.12 and later.
    CALL set_table_property('[<schema_name>.]<table_name>', 'auto_partitioning.time_format', 'xxx');
    ```
    

#### **Parameter description**

**Important**

When you use the `CREATE TABLE WITH` syntax to configure dynamic partitioning, replace the period (`.`) in the parameter name with an underscore (`_`). For example, change `auto_partitioning.enable` to `auto_partitioning_enable`.

**Parameter name**

**Required**

**Description**

**Updatable**

**Version requirements**

`auto_partitioning_enable`/`auto_partitioning.enable`

No

Specifies whether to enable dynamic partition management. Valid values:

-   true: Enables dynamic partition management.
    
-   false (default): Disables dynamic partition management.
    

Yes

Hologres V1.3 and later

`auto_partitioning_time_unit`/`auto_partitioning.time_unit`

Yes

The time unit for dynamic partitioning. Valid values:

-   HOUR
    
-   DAY
    
-   MONTH
    
-   QUARTER
    
-   YEAR
    

For example, if you set this parameter to DAY, partitions are pre-created and deleted on a daily basis.

No

`auto_partitioning_time_zone`/`auto_partitioning.time_zone`

No

The time zone for dynamic partitioning. The default value is the time zone of the current connection. After you configure this parameter, dynamic partition management is performed based on the time in the specified time zone.

You can run the following SQL statement to view available time zones and their offsets. The value in the name column of the result is the timezone value, such as Asia/Shanghai.

```
SELECT * FROM pg_timezone_names;
```

No

`auto_partitioning_num_precreate`/`auto_partitioning.num_precreate`

No

The number of partitions to pre-create. Valid values:

-   0: No pre-creation.
    
-   \[1, 512\]: Creates partitions based on the current time. We recommend that you set this value to 2 or greater. The default value is 4.
    

**Note**

For example, if the current time is 2022-01-10, the parameter settings `time_unit = DAY, num_precreate = 3` create the three partitions 2022-01-10, 2022-01-11, and 2022-01-12.

**Important**

Pre-creating partitions affects the behavior of the [MAX\_PT function](/help/en/hologres/developer-reference/max-pt). Before you configure this parameter, check if your workload depends on the MAX\_PT function.

Yes

`auto_partitioning_num_retention`/`auto_partitioning.num_retention`

No

The number of historical partitions to retain. Valid values:

-   0: Does not retain historical partitions.
    
-   \-1 (default): Does not purge historical partitions.
    
-   A positive integer: Retains N historical partitions. The maximum value is 512.
    

You can run `set hg_experimental_auto_part_max_maintained_partitions=<value>;` to adjust the number of partitions to retain. The maximum value is 8760.

**Note**

For example, if the current date is 2022-01-10, and you set `<time_unit = DAY, num_retention = 3>`, the system retains three partitions for 2022-01-09, 2022-01-08, and 2022-01-07. Historical partitions from before 2022-01-07 are deleted.

Yes

`auto_partitioning_num_hot`/`auto_partitioning.num_hot`

No

The number of hot partitions to retain. Valid values:

-   0: Does not retain hot partitions.
    
-   \-1 (default): Does not purge hot partitions.
    
-   A positive integer: Retains N hot partitions. The maximum value is 512.
    

Hologres V1.3.37 and later

`auto_partitioning_schd_start_time`/`auto_partitioning.schd_start_time`

No

The custom partition scheduling time. If `auto_partitioning.time_unit` is set to HOUR, partitions are scheduled by default at the beginning of each hour. For other values, the default time is 00:00:01 of the current day.

You can use this parameter to change the scheduling time. For supported date and time formats, see [Date/Time Types](https://www.postgresql.org/docs/13/datatype-datetime.html). If you set a future time, the configuration takes effect at that time.

Hologres V2.2 and later

`auto_partitioning_time_format`/`auto_partitioning.time_format`

No

Specifies the date and time format of the partition key when creating a table.

-   Default formats: YYYYMMDDHH24 (HOUR), YYYYMMDD (DAY), YYYYMM (MONTH), YYYYQ (QUARTER), YYYY (YEAR).
    
-   Optional formats: YYYY-MM-DD-HH24 (HOUR), YYYY-MM-DD (DAY), YYYY-MM (MONTH), YYYY-Q (QUARTER).
    

No

Hologres V3.0.12 and later

#### **Table name generation rules**

When the `auto_partitioning.time_unit` parameter is set to HOUR, DAY, MONTH, QUARTER, or YEAR, dynamic partitioning uses the parent table name plus a time suffix as the name for newly created partitions. The format is `{parent_table}_{time_suffix}`. The time suffix is generated based on the scheduled time for automatic partitioning and the format template corresponding to the time unit. The specific mappings are as follows.

**Time unit**

**Time suffix format**

**Example**

**Running time**

HOUR

YYYYMMDDHH24

2024112221.

Starts at the beginning of each hour. For example, the task runs at 21:00:01 on November 22, 2024.

YYYY-MM-DD-HH24

2024-11-22-21.

DAY

YYYYMMDD

20241122.

Starts at 00:00:01 every day. For example, 00:00:01 on November 22, 2024.

YYYY-MM-DD

2024-11-22.

MONTH

YYYYMM

202411.

Starts at 00:00:01 on the first day of each month. For example, 00:00:01 on November 1, 2024.

YYYY-MM

2024-11.

QUARTER

YYYYQ

20241, 20242, 20243, and 20244 represent the four quarters of 2024.

Starts at 00:00:01 on the first day of each quarter. For example, 00:00:01 on January 1, 2024.

YYYY-Q

2024-1, 2024-2, 2024-3, and 2024-4 represent the four quarters of 2024.

YEAR

YYYY

2023 and 2024 represent partitions for the years 2023 and 2024.

Starts at 00:00:01 on the first day of each year. For example, 00:00:01 on January 1, 2023.

#### **Examples**

The following example shows how to set the time unit to DAY, pre-create partitions for the next 3 days, retain historical partitions for the last 2 days, and set the time zone to `Asia/Shanghai`.

## Example using the WITH clause

1.  Create the partitioned table `tbl1`.
    
    ```
    -- In V2.1, create a partitioned table and configure dynamic partition management:
    
    CREATE TABLE tbl1 (
        c1 TEXT NOT NULL,
        c2 TEXT 
    )
    PARTITION BY LIST (c2)
    WITH (
       auto_partitioning_enable = 'true',
       auto_partitioning_time_unit = 'DAY',
       auto_partitioning_time_zone = 'Asia/Shanghai',
       auto_partitioning_num_precreate = '3',
       auto_partitioning_num_retention = '2'
    );
    ```
    
2.  After the child partitions are generated, insert data.
    
    ```
    INSERT INTO tbl1 (c1, c2) VALUES ('Data 1', '20231212');
    INSERT INTO tbl1 (c1, c2) VALUES ('Data 2', '20231213');
    INSERT INTO tbl1 (c1, c2) VALUES ('Data 3', '20231214');
    ```
    
3.  Query data.
    
    ```
    SELECT * FROM tbl1 WHERE c2='20231212';
    ```
    
    The following result is returned:
    
    ```
    c1	     c2
    Data 1   20231212
    ```
    

## Example using the CALL statement

1.  Create the partitioned table `tbl1`.
    
    ```
    -- Create a partitioned table and configure dynamic partition management:
    BEGIN;
    CREATE TABLE tbl1 (
        c1 TEXT NOT NULL,
        c2 TEXT 
    )
    PARTITION BY LIST (c2);
    CALL set_table_property ('tbl1', 'auto_partitioning.enable', 'true');
    CALL set_table_property ('tbl1', 'auto_partitioning.time_unit', 'DAY');
    CALL set_table_property ('tbl1', 'auto_partitioning.time_zone', 'Asia/Shanghai');
    CALL set_table_property ('tbl1', 'auto_partitioning.num_precreate', '3');
    CALL set_table_property ('tbl1', 'auto_partitioning.num_retention', '2');
    COMMIT;
    ```
    
2.  After the child partitions are generated, insert data.
    
    ```
    INSERT INTO tbl1 (c1, c2) VALUES ('Data 1', '20231212');
    INSERT INTO tbl1 (c1, c2) VALUES ('Data 2', '20231213');
    INSERT INTO tbl1 (c1, c2) VALUES ('Data 3', '20231214');
    ```
    
3.  Query data.
    
    ```
    SELECT * FROM tbl1 WHERE c2='20231212';
    ```
    
    The following result is returned:
    
    ```
    c1	     c2
    Data 1   20231212
    ```
    

The logic for adding and removing partitions is as follows:

**Time**

**Event**

**Result**

2023-12-12 09:00:00

Run the preceding SQL statement to create the partitioned table.

-   Parent table created: tbl1
    
-   Child partitions created: tbl1\_20231212, tbl1\_20231213, tbl1\_20231214
    

2023-12-13 00:00:00

The system automatically creates a child partition.

-   Child partition created: tbl1\_20231215
    

2023-12-14 00:00:00

The system automatically creates a child partition.

-   Child partition created: tbl1\_20231216
    

2023-12-15 00:00:00

The system automatically creates a child partition and purges a child partition.

-   Child partition created: tbl1\_20231217
    
-   Child partition purged: tbl1\_20231212
    

2023-12-16 00:00:00

The system automatically creates a child partition and purges a child partition.

-   Child partition created: tbl1\_20231218
    
-   Child partition purged: tbl1\_20231213
    

## **Common scenarios**

#### **Retain specific child partitions**

By default, the system automatically creates and deletes child partitions based on the configured dynamic partitioning rules. Child partitions outside the retention range are automatically deleted. However, in some scenarios, you may need to retain data in important partitions. For example, in an e-commerce scenario, you might need to retain data from the Double 11 shopping festival each year for year-over-year and month-over-month analysis. You can retain a specific child partition by adding the `keep_alive` property to the table. The syntax is as follows.

-   Syntax supported from V2.1:
    
    ```
    -- Retain a partition
    ALTER TABLE [<schema_name>.]<table_name> SET (keep_alive = 'true');
    
    -- Stop retaining a partition: After the retention property is removed, dynamic partition management immediately triggers a purge of expired data.
    ALTER TABLE [<schema_name>.]<table_name> SET (keep_alive = 'false');
    ```
    
-   Syntax supported in all versions:
    
    ```
    -- Retain a partition
    CALL set_table_property('[<schema_name>.]<table_name>', 'keep_alive', 'true');
    
    -- Stop retaining a partition: After the retention property is removed, dynamic partition management immediately triggers a purge of expired data.
    CALL set_table_property('[<schema_name>.]<table_name>', 'keep_alive', 'false');
    ```
    
    **Note**
    
    Replace table\_name with the actual name of the child partition.
    

#### **Dynamically manage the storage medium for partitioned tables**

When you work with partitioned tables, using tiered storage for hot and cold data can effectively balance cost and performance. For example, you can dynamically retain the N most recent historical partitions in hot storage to meet frequent query demands, while storing the next M partitions in cold storage to save costs. You can implement this scenario using the dynamic partition management feature to delete data that is older than N+M partitions.

##### **Create a dynamic partitioned table**

Example: Create one partition per day. Dynamically retain the 7 most recent historical partitions in the hot storage medium. Store the next 23 partitions (older than 7 days) in the cold storage medium. Delete partitions that are older than this range. The following code provides an example.

```
BEGIN;
CREATE TABLE tbl2(	
  c1 text not null, 
  c2 text
)
PARTITION BY LIST(c2);
CALL set_table_property('tbl2', 'auto_partitioning.enable', 'true');
CALL set_table_property('tbl2', 'auto_partitioning.time_unit', 'DAY');
CALL set_table_property('tbl2', 'auto_partitioning.num_precreate', '3');
CALL set_table_property('tbl2', 'auto_partitioning.num_hot', '7');
CALL set_table_property('tbl2', 'auto_partitioning.num_retention', '30');
COMMIT;
```

The effect is shown in the following figure:

![Effect](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6575436761/p532349.png)

##### **Modify the storage policy**

You can modify the partitioning policy for the hot storage medium by changing the value of the `auto_partitioning.num_hot` parameter. Note that if you modify this policy, child partitions that are already in cold storage are not automatically moved to hot storage. Assume that the current date is July 1, 2022, and you create the following partitioned table.

```
BEGIN;
CREATE TABLE tbl_p(
  c1 text not null,
  c2 text
)
PARTITION BY LIST(c2);
CALL set_table_property('tbl_p', 'auto_partitioning.enable', 'true');
CALL set_table_property('tbl_p', 'auto_partitioning.time_unit', 'DAY');
CALL set_table_property('tbl_p', 'auto_partitioning.num_precreate', '3');
CALL set_table_property('tbl_p', 'auto_partitioning.num_hot', '3');
CALL set_table_property('tbl_p', 'auto_partitioning.num_retention', '10');
COMMIT;
```

The data distribution in this case has two possible scenarios:

-   Scenario 1: Expand the hot storage partition policy
    
    To change the number of hot partitions in the dynamic management policy to 4, run the following code:
    
    ```
    CALL set_table_property('tbl_p', 'auto_partitioning.num_hot', '4');
    ```
    
    Because child partitions already in cold storage are not automatically moved to hot storage, the effect after the change is shown in the following figure:![Example](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5932077671/p532362.png)
    
-   Scenario 2: Reducing the hot storage cutoff in a partition policy
    
    To change the number of hot partitions in the dynamic management policy to 2, run the following code:
    
    ```
    CALL set_table_property('tbl_p', 'auto_partitioning.num_hot', '2');
    ```
    
    Child partitions already in cold storage are not automatically moved to hot storage. However, data that needs to be moved from hot to cold storage is migrated. The effect after the change is shown in the following figure:![Example](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5932077671/p532363.png)
    

#### **Change a cold storage partitioned table to a dynamic partitioned table**

For example, to change a partitioned table with the cold storage property to a dynamic partitioned table and set the partitions for the last 7 days to hot storage, use the following method.

1.  Data preparation.
    
    ```
    -- Specify the cold storage medium as the storage policy when creating the table.
    BEGIN;
    CREATE TABLE tbl2(	
      c1 TEXT NOT NULL, 
      c2 TEXT 
    )
    PARTITION BY LIST(c2);
    CALL set_table_property('tbl2', 'storage_mode', 'cold');
    
    CREATE TABLE tbl2_20230808 PARTITION OF tbl2 FOR VALUES IN('20230808');
    CREATE TABLE tbl2_20230809 PARTITION OF tbl2 FOR VALUES IN('20230809');
    CREATE TABLE tbl2_20230810 PARTITION OF tbl2 FOR VALUES IN('20230810');
    CREATE TABLE tbl2_20230817 PARTITION OF tbl2 FOR VALUES IN('20230817');
    COMMIT;
    ```
    
2.  Modify the table to be a dynamic partitioned table and set the partitions for the last 7 days to hot storage.
    
    ```
    BEGIN;
    CALL set_table_property('tbl2', 'storage_mode', 'hot'); -- Set the parent table to hot.
    CALL set_table_property('tbl2_20230810', 'storage_mode', 'cold'); -- Set partitions that do not need to be moved to hot storage to cold.
    CALL set_table_property('tbl2_20230809', 'storage_mode', 'cold');
    CALL set_table_property('tbl2_20230808', 'storage_mode', 'cold');
    CALL set_table_property('tbl2', 'auto_partitioning.enable', 'true');
    CALL set_table_property('tbl2', 'auto_partitioning.time_unit', 'DAY');
    CALL set_table_property('tbl2', 'auto_partitioning.num_precreate', '3');
    CALL set_table_property('tbl2', 'auto_partitioning.num_hot', '7');
    CALL set_table_property('tbl2', 'auto_partitioning.num_retention', '10');
    COMMIT;
    ```
    

#### **View dynamic partition configurations and scheduling status**

Run the following SQL statement to query information about the dynamic partitioned tables and their configurations in the current database.

```
SELECT
    nsp_name AS schema_name,
    tbl_name AS table_name,
    ENABLE,
    time_unit,
    time_zone,
    num_precreate,
    num_retention,
    b.usename AS create_user,
    cret_time,
    schd_start_time,
    options
FROM
    hologres.hg_partitioning_config AS a
    LEFT JOIN pg_user AS b ON a.cret_user = b.usesysid;
```

The following describes the fields.

**Field name**

**Description**

schema\_name

The schema name.

table\_name

The table name.

ENABLE

Indicates whether dynamic partition management is enabled.

time\_unit

The time unit for dynamic partitioning.

time\_zone

The time zone for dynamic partitioning.

num\_precreate

The number of partitions to pre-create.

num\_retention

The number of historical partitions to retain.

create\_user

You can create a user.

cret\_time

The creation time.

schd\_start\_time

The most recent scheduled time.

The following result is returned.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5119246171/p777693.png)

#### **View logs for creating and purging child partitions**

The Query Log does not record logs for creating and purging child partitions. Run the following SQL statement to query these logs.

```
SELECT                           
    relname,
    relowner,
    schdtime,
    trigtime,
    status,
    message,
    precreate,
    discard
FROM
    hologres.hg_partitioning_log 
```

The following describes the field names listed above.

**Field name**

**Description**

relname

schema.table

relowner

The owner of the partitioned table.

schdtime

The scheduled time.

trigtime

The actual trigger time.

status

The status.

message

Remarks.

precreate

The name of the created child partition.

discard

The name of the purged child partition.

The following result is returned.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5119246171/p777146.png)

## **FAQ**

#### **How do I enable dynamic partitioning for an existing partitioned table?**

Use the following SQL statements to enable dynamic partitioning for an existing partitioned table.

```
-- SQL example for Hologres V2.1 and later
ALTER TABLE auto_part_old SET (
   auto_partitioning_enable = 'true',
   auto_partitioning_time_unit = 'HOUR',
   auto_partitioning_time_zone = 'PRC',
   auto_partitioning_num_precreate = '4',
   auto_partitioning_num_retention = '-1',
   auto_partitioning_num_hot = '-1'
);

-- SQL example for all Hologres versions
BEGIN;
CALL set_table_property('auto_part_old', 'auto_partitioning.enable', 'true');
CALL set_table_property('auto_part_old', 'auto_partitioning.time_unit', 'HOUR');
CALL set_table_property('auto_part_old', 'auto_partitioning.time_zone', 'PRC');
CALL set_table_property('auto_part_old', 'auto_partitioning.num_precreate', '4');
CALL set_table_property('auto_part_old', 'auto_partitioning.num_retention', '-1');
CALL set_table_property('auto_part_old', 'auto_partitioning.num_hot', '-1');
COMMIT;
```

**Important**

The `auto_partitioning.time_unit` and `auto_partitioning.time_zone` parameters are core configurations for the dynamic partitioning feature. After you upgrade Hologres, you can set these parameters only once. They cannot be changed after they are set.

#### **After I enable dynamic partitioning for an existing partitioned table, are the historical child partitions affected by the automatic purge logic?**

The system purges child partitions based on their names. If a child partition's name matches the `{parent_table}_{time_suffix}` naming convention, it will be purged. Otherwise, it will not be purged.

#### **I created a dynamic partitioned table and set** `**num_precreate**` **to 3. The parent table was created successfully after I ran the SQL statement, but the three child partitions were not created. Why?**

For the initial task of creating dynamic partitions, the system checks every 10 minutes by default. Therefore, the child partitions will be created within 10 minutes. Check again later.
