Hologres V1.3 and later versions collect daily statistics for tables in your instance. These statistics are stored in the hologres.hg\_table\_info system table. You can use this data to analyze your tables and perform optimizations. This topic describes how to view and analyze table statistics in Hologres.

## Limits

-   Only Hologres V1.3 and later versions support viewing table statistics. If your instance is an earlier version, you must upgrade it. For more information, see [Common errors when preparing for an upgrade](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) or join the Hologres DingTalk group for feedback. For more information, see [How to get online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   The hologres.hg\_table\_info table has a one-day data delay. Data for the current day is typically updated by 05:00 on the following day. On the day a Hologres instance is upgraded from V1.1 to V1.3, table statistics are not generated. If you query table statistics on this day, the following error message is returned: `meta warehouse store currently not available`. You must wait until the day after the upgrade to query table statistics.
    

## **Usage notes**

-   By default, table statistics logs are retained for 30 days.
    
-   For non-partitioned internal tables in Hologres (type='TABLE'), you can query detailed statistics, such as storage space, number of files, cumulative access count, and row count.
    
-   For other objects, such as views, materialized views, foreign tables, and parent tables, you can query only basic information, such as the number of partitions, the name of the external table for a foreign table, and view definitions.
    
-   The hologres.hg\_table\_info table is a system table in the Hologres metadata warehouse. Failures to query the hologres.hg\_table\_info table do not affect business queries in your instance. Therefore, the stability of the hologres.hg\_table\_info table is not covered by the product's Service-Level Agreement (SLA).
    

## The hg\_table\_info table

The `hg_table_info` table contains the following fields.

**Note**

-   Table statistics are stored in the hologres.hg\_table\_info system table. After an instance is upgraded to V1.3, Hologres collects table information daily by default.
    
-   Some fields may be empty. This occurs if a table was created before the instance was upgraded to V1.3, because its creation information was not collected. Information is collected for all tables created after the upgrade.
    

**Field**

**Type**

**Description**

**Notes**

db\_name

text

The name of the database where the table resides.

None

schema\_name

text

The name of the schema where the table resides.

None

table\_name

text

The name of the table.

None

table\_id

text

The unique identifier of the table. For foreign tables, the ID format is db.schema.table.

None

type

text

The table type. Valid values:

-   TABLE: standard tables and child partitions.
    
-   PARTITION TABLE: physical parent tables.
    
-   LOGICAL PARTITION TABLE: logical partitioned tables.
    
    **Note**
    
    This type is supported in Hologres V3.1.25/V3.2.8 and later. For earlier versions, the system reports the table type as TABLE.
    
-   FOREIGN TABLE: foreign tables.
    
-   VIEW: views.
    
-   MATERIALIZED VIEW: materialized views.
    

-   If \`type\` is \`VIEW\`, the \`create\_time\` and \`last\_ddl\_time\` fields are empty.
    
-   If \`type\` is \`VIEW\`, \`FOREIGN TABLE\`, or \`PARTITION TABLE\`, the \`last\_modify\_time\`, \`last\_access\_time\`, \`hot\_file\_count\`, \`cold\_file\_count\`, \`total\_read\_count\`, and \`total\_write\_count\` fields are empty and have no records.
    

partition\_spec

text

The partition condition. This field is valid for child partitions.

None

is\_partition

boolean

Indicates whether the table is a child partition.

None

owner\_name

text

The username of the table owner. You can join this field with the \`usename\` column of the \`hg\_query\_log\` table.

None

create\_time

timestamp with time zone

The time when the table was created.

None

last\_ddl\_time

timestamp with time zone

The time when the table information was last updated.

None

last\_modify\_time

timestamp with time zone

The time when the table information was last updated.

None

last\_access\_time

timestamp with time zone

The time when the table was last accessed.

None

view\_def

text

The definition of the view.

This field is valid only for views.

comment

text

The description of the table or view.

None

hot\_storage\_size

bigint

The storage space used by the table's hot data, in bytes.

It is normal for the storage size queried from \`hg\_table\_info\` to differ from the size returned by the \`pg\_relation\_size\` function. This is because \`hg\_table\_info\` data is reported daily, and the result of \`pg\_relation\_size\` does not include the storage size of binary logging.

cold\_storage\_size

bigint

The storage space used by the table's cold data, in bytes.

It is normal for the storage size queried from \`hg\_table\_info\` to differ from the size returned by the \`pg\_relation\_size\` function. This is because \`hg\_table\_info\` data is reported daily, and the result of \`pg\_relation\_size\` does not include the storage size of binary logging.

hot\_file\_count

bigint

The number of hot data files in the table.

None

cold\_file\_count

bigint

The number of cold data files in the table.

None

table\_meta

jsonb

The original metadata, in JSONB format.

None

row\_count

bigint

The number of rows in the table or partition.

If the table is a parent table, \`row\_count\` is the total number of rows in all its child tables.

collect\_time

timestamp with time zone

The time when the data was collected for reporting.

None

partition\_count

bigint

The number of child partitions.

This field is valid only when the table is a parent table.

parent\_schema\_name

text

The schema name of the parent table for a child partition.

This field is valid only when the table is a child partition.

parent\_table\_name

text

The table name of the parent table for a child partition.

This field is valid only when the table is a child partition.

total\_read\_count

bigint

The cumulative number of read operations on the table. This is not an exact value, because SELECT, INSERT, UPDATE, and DELETE operations all increase the count.

This is not an exact value. Do not use it.

total\_write\_count

bigint

The cumulative number of write operations on the table. This is not an exact value, because INSERT, UPDATE, and DELETE operations all increase the count.

This is not an exact value. Do not use it.

read\_sql\_count\_1d

bigint

The total number of read operations on the table on the previous day (00:00–24:00, UTC+8).

-   Supported only in V3.0 and later.
    
-   If the table is a partitioned table and an SQL query hits a specific child partition, data is collected only for the child partition, not the parent table.
    

write\_sql\_count\_1d

bigint

The total number of write operations on the table on the previous day (00:00–24:00, UTC+8).

-   Supported only in V3.0 and later.
    
-   If the table is a partitioned table and an SQL query hits a specific child partition, data is collected only for the child partition, not the parent table.
    

## Grant query permissions

You must have specific permissions to view table statistics logs. The permission rules and authorization methods are described below.

-   View table statistics logs for all databases in a Hologres instance.
    
    -   Grant the Superuser permission to a user.
        
        A Superuser can view the table statistics logs for all databases in a Hologres instance.
        
        ```
        -- Replace "Alibaba Cloud account ID" with the actual username. For a RAM user, add the p4_ prefix to the account ID.
        ALTER USER "Alibaba Cloud account ID" SUPERUSER;
        ```
        
    -   Add a user to the `pg_stat_scan_table` user group.
        
        In addition to Superusers, users in the `pg_stat_scan_tables` group (for versions earlier than V1.3.44) or the `pg_read_all_stats` group (for V1.3.44 and later) can also view the table statistics logs for all databases. Regular users can contact a Superuser to be added to the appropriate group. The authorization commands are as follows.
        
        ```
        -- For versions earlier than V1.3.44
        GRANT pg_stat_scan_tables TO "Alibaba Cloud account ID"; -- Grant permission using the standard PostgreSQL authorization model.
        CALL spm_grant('pg_stat_scan_tables', 'Alibaba Cloud account ID');  -- Grant permission using the simple permission model (SPM).
        CALL slpm_grant('pg_stat_scan_tables', 'Alibaba Cloud account ID'); -- Grant permission using the schema-level permission model (SLPM).
        
        -- For V1.3.44 and later
        GRANT pg_read_all_stats TO "Alibaba Cloud account ID"; -- Grant permission using the standard PostgreSQL authorization model.
        CALL spm_grant('pg_read_all_stats', 'Alibaba Cloud account ID');  -- Grant permission using the SPM.
        CALL slpm_grant('pg_read_all_stats', 'Alibaba Cloud account ID'); -- Grant permission using the SLPM.
        ```
        
-   View table statistics logs for the current database.
    
    You can enable the simple permission model (SPM) or the schema-level permission model (SLPM) and add the user to the `db_admin` group. Users with the `db_admin` role can view the table statistics logs for the current database.
    
    **Note**
    
    Regular users can only query statistics for tables they own in the current database.
    
    ```
    CALL spm_grant('<db_name>_admin', 'Alibaba Cloud account ID');  -- Grant permission using the SPM.
    CALL slpm_grant('<db_name>.admin', 'Alibaba Cloud account ID'); -- Grant permission using the SLPM.
    ```
    

## SQL commands to query trends in table statistics

### **Scenario 1: View the access trends of internal tables**

```
-- Trend changes for all internal tables in the instance: storage space, file count, read count, write count, and row count.
SELECT
  db_name,
  schema_name,
  table_name,
  collect_time :: date AS collect_date,
  hot_storage_size,
  cold_storage_size,
  hot_file_count,
  cold_file_count,
  read_sql_count_1d,
  write_sql_count_1d,
  row_count
FROM
  hologres.hg_table_info
WHERE
  collect_time > (current_date - interval '1 week')::timestamptz -- Last week
  AND type ='TABLE'
  ORDER  BY  collect_date desc ;
```

### Scenario 2: View access information for tables that use a large amount of disk space

```
-- View access information for the 10 tables that use the most disk space.
SELECT
  db_name,
  schema_name,
  table_name,
  hot_storage_size + cold_storage_size AS total_storage_size,
  row_count,
  sum(read_sql_count_1d) AS total_read_count,
  sum(write_sql_count_1d) AS total_write_count
FROM
  hologres.hg_table_info
WHERE
  collect_time > (current_date - interval '1 week')::timestamptz -- Last week
  AND type = 'TABLE'
  AND (
    cold_storage_size IS NOT NULL
    OR hot_storage_size IS NOT NULL
  )
GROUP BY db_name,schema_name,table_name,total_storage_size,row_count
ORDER BY total_storage_size DESC
LIMIT 10;
```

### Scenario 3: View access and data volume trends for the top 10 tables by storage

```
-- Access, storage, and data volume trends over the last week for the top 10 tables by storage, based on yesterday's statistics.
WITH top10_table AS (SELECT
  db_name,
  schema_name,
  table_name,
  hot_storage_size + cold_storage_size AS total_storage_size
FROM
  hologres.hg_table_info
WHERE
  collect_time >= (current_date - interval '1 day')::timestamptz -- Yesterday
  AND collect_time < current_date
  AND type = 'TABLE'
  AND ( cold_storage_size IS NOT NULL OR hot_storage_size IS NOT NULL )
ORDER BY total_storage_size DESC
LIMIT 10
)
SELECT
  base.db_name,
  base.schema_name,
  base.table_name,
  base.hot_storage_size + cold_storage_size AS total_storage_size,
  base.row_count,
  base.read_sql_count_1d,
  base.write_sql_count_1d,
  base.collect_time :: date AS collect_date
FROM
  hologres.hg_table_info AS base
LEFT JOIN
  top10_table
ON
  base.db_name = top10_table.db_name
  AND base.schema_name = top10_table.schema_name
  AND base.table_name = top10_table.table_name
WHERE
  collect_time > (current_date - interval '1 week')::timestamptz -- Last week
  AND type = 'TABLE'
  AND ( cold_storage_size IS NOT NULL OR hot_storage_size IS NOT NULL )
ORDER BY total_storage_size DESC , collect_date DESC;
```

### Scenario 4: View access and data volume trends for the tables that use the least storage

```
-- Access, storage, and data volume trends over the last week for the 10 tables that use the least storage, based on yesterday's statistics.
WITH top10_table AS (SELECT
  db_name,
  schema_name,
  table_name,
  hot_storage_size + cold_storage_size AS total_storage_size
FROM
  hologres.hg_table_info
WHERE
  collect_time >= (current_date - interval '1 day')::timestamptz -- Yesterday
  AND collect_time < current_date
  AND type = 'TABLE'
ORDER BY total_storage_size ASC LIMIT 10
)
SELECT
  base.db_name,
  base.schema_name,
  base.table_name,
  base.hot_storage_size + cold_storage_size AS total_storage_size,
  base.row_count,
  base.read_sql_count_1d,
  base.write_sql_count_1d,
  base.collect_time :: date AS collect_date
FROM
  hologres.hg_table_info AS base
RIGHT JOIN
  top10_table
ON
  base.db_name = top10_table.db_name
  AND base.schema_name = top10_table.schema_name
  AND base.table_name = top10_table.table_name
WHERE
  collect_time > (current_date - interval '1 week')::timestamptz -- Last week
  AND type = 'TABLE'
ORDER BY total_storage_size ASC  , collect_date DESC ;
```

### **Scenario 5:** Find tables that use a large amount of disk space due to too many small files

```
-- View the file count and disk space usage for each table, and sort by average file size.
-- The table group can only display the shard count of the current DB. It is empty for other DBs.
SELECT
  db_name,
  schema_name,
  table_name,
  cold_storage_size + hot_storage_size AS total_storage_size,
  cold_file_count + hot_file_count AS total_file_count,
  (cold_storage_size + hot_storage_size) / (cold_file_count + hot_file_count) AS avg_file_size,
  tmp_table_info.table_meta ->> 'table_group' AS table_group,
  tg_info.shard_count
FROM
  hologres.hg_table_info tmp_table_info
  LEFT JOIN (
    SELECT
      tablegroup_name,
      property_value AS shard_count
    FROM
      hologres.hg_table_group_properties
    WHERE
      property_key = 'shard_count'
  ) tg_info ON tmp_table_info.table_meta ->> 'table_group' = tg_info.tablegroup_name
WHERE
  collect_time > (current_date - interval '1 day')::timestamptz
  AND type = 'TABLE'
  AND (
    cold_storage_size IS NOT NULL
    OR hot_storage_size IS NOT NULL
  )
  AND (
    cold_file_count IS NOT NULL
    OR hot_file_count IS NOT NULL
  )
  AND cold_file_count + hot_file_count <> 0
ORDER BY avg_file_size;
```

### Scenario 6: View the change in the number of rows on the day the table data was last modified

```
-- View the last modification time of the table and the total number of rows modified compared to the previous modification.
-- If the instance has many tables, filter the tmp_table_info CTE to prevent long query times caused by fetching too much data.
WITH tmp_table_info AS (
  SELECT
    db_name,
    schema_name,
    table_name,
    row_count,
    collect_time,
    last_modify_time
  FROM
    hologres.hg_table_info
  WHERE
    last_modify_time IS NOT NULL
    AND type = 'TABLE'
    -- Add filters for tmp_table_info here.
    -- For example, collect_time > (current_date - interval '14 day'):: timestamptz
    -- For example, table_name like ''
    -- For example, type = 'PARTITION'
)
SELECT
  end_data.db_name AS db_name,
  end_data.schema_name AS schema_name,
  end_data.table_name AS table_name,
  (end_data.row_count - start_data.row_count) AS modify_row_count,
  end_data.row_count AS current_rows,
  end_data.last_modify_time AS last_modify_time
FROM
  (
    SELECT
      db_name,
      schema_name,
      table_name,
      row_count,
      last_modify_time
    FROM
      tmp_table_info
    WHERE
      collect_time > (current_date - interval '1 day')::timestamptz -- Query the last modification time of the table recorded yesterday.
  ) end_data
  LEFT JOIN (
    SELECT
      db_name,
      schema_name,
      table_name,
      row_count,
      collect_time
    FROM
      tmp_table_info
  ) start_data ON (
    end_data.db_name = start_data.db_name
    AND end_data.schema_name = start_data.schema_name
    AND end_data.table_name = start_data.table_name
    AND end_data.last_modify_time::date = (start_data.collect_time + interval '1 day')::date
  );
```
