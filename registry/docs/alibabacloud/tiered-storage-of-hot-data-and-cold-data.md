Hologres V1.3.37 and later support tiered storage for hot and cold data to help you manage data tiers effectively. This topic describes how to use tiered storage.

## Function introduction

Hologres offers two storage types: Standard and Infrequent Access.

-   Standard storage uses all-SSD hot storage. It is the default storage type in Hologres and meets low-latency, high-performance data access requirements. For most scenarios, Standard storage is the most effective and cost-efficient option. This document refers to it as **hot storage**.
    
-   Infrequent Access storage uses all-HDD cold storage. It meets low-cost storage needs for infrequently accessed data and is suitable for very large datasets that are not latency-sensitive or rarely accessed. This document refers to it as **cold storage**.
    
-   For primary/secondary instances, upgrade to Hologres V1.3.55 or later to enable cold storage.
    

Hologres also supports table-level tiered storage. You can dynamically set the storage medium for partition child tables using the [CREATE PARTITION TABLE](/help/en/hologres/developer-reference/create-partition-table#section-v07-tzl-3j9) feature.

Starting with Hologres V2.1, SSD-based cache acceleration is supported to improve cold storage access speed. Only the default allocated cache space is currently supported. Cache acceleration is enabled by default and improves access performance by more than double.

## Prerequisites

-   Only Hologres V1.3.37 and later support tiered hot and cold storage. If your instance runs an earlier version, use the [Common upgrade preparation failure errors](/help/en/hologres/user-guide/instance-upgrades#section-32k-sdy-wpv) guide or join the Hologres DingTalk group to provide feedback. For more information, see [How do I get more online support?](/help/en/hologres/support/obtain-online-support-for-hologres).
    
-   For subscription instances running earlier versions, the Infrequent Access storage quota defaults to 0 GB after upgrading to Hologres V1.3.37.
    

## Notes

-   Hologres table storage consists of Data and Meta. Data stores your user data, while Meta stores table metadata. In tiered storage, you can only set the storage medium for the Data portion. For performance reasons, Meta is always stored in hot storage. Therefore, even if you set a table’s storage policy to cold storage, it still consumes a small amount of hot storage and incurs minor hot storage fees.
    
-   To avoid impacting your services, hot-to-cold data migration tasks run at low priority. After you change a table’s Data storage policy, the change does not take effect immediately. Hologres performs data migration asynchronously in the background. By default, migration starts at midnight. Starting with Hologres V2.2, you can customize the migration time. For more information, see [Dynamic partitioning](/help/en/hologres/developer-reference/dynamic-partition-management).
    
-   When writing new data to a cold storage table, data is first written to hot storage. A background task asynchronously migrates it to cold storage, which incurs some hot storage fees.
    
-   Due to disk seek time limitations, do not use cold storage tables for point query scenarios such as Flink dimension tables or serving scenarios. Cold storage tables support read throughput that is two orders of magnitude lower than hot storage tables.
    
-   Do not set row-oriented tables to use cold storage.
    
-   During batch hot-to-cold data conversion, all table tablets are opened, increasing memory usage. Convert no more than 200 tables at once.
    

## Create tiered storage tables

When creating a table, specify the data storage policy by setting the `storage_mode` parameter in SET\_TABLE\_PROPERTY. For more information, see [CREATE TABLE](/help/en/hologres/developer-reference/create-tables#concept-2463104).

### Non-partitioned tables

**Set storage policy for non-partitioned tables**

For non-partitioned tables, use `SET_TABLE_PROPERTY` to set the storage policy. Supported options are:

-   hot (hot storage).
    
-   cold (cold storage).
    

For example, to set tbl1 to use cold storage, run the following code:

```
-- Specify cold storage when creating the table
BEGIN;
CREATE TABLE tbl1 (
 "id" INT NOT NULL,
 "name" TEXT NOT NULL
);
CALL set_table_property('tbl1', 'storage_mode', 'cold');
COMMIT;
```

**Change storage medium for non-partitioned tables**

Hologres supports changing the storage medium after table creation. For example, to change tbl1 to hot storage, the system asynchronously migrates data to hot storage. Example:

```
-- Change storage medium to hot storage after table creation
CALL set_table_property('tbl1', 'storage_mode', 'hot');
```

### Partitioned tables

**Set storage policy for partitioned tables**

Partitioned tables also use `SET_TABLE_PROPERTY` to set storage policies. Child partitions inherit the parent table’s storage property by default but can also be set individually. Supported options are:

-   hot (hot storage).
    
-   cold (cold storage).
    

For example, setting the parent partition table (tbl2) to cold storage causes all its child partitions (such as tbl2\_v1) to use cold storage. Code:

```
-- Specify cold storage when creating the table
BEGIN;
CREATE TABLE tbl2(
  c1 TEXT NOT NULL,
  c2 TEXT
)
PARTITION BY LIST(c2);
CALL set_table_property('tbl2', 'storage_mode', 'cold');
CREATE TABLE tbl2_v1 PARTITION OF tbl2 FOR VALUES IN ('v1');
COMMIT;
```

**Modify storage for partitioned tables**

Hologres supports changing the storage medium after table creation. For example, changing the parent partition table tbl2 to hot storage causes all its child partitions to be asynchronously migrated to hot storage. Example:

```
-- Change storage policy to hot storage after table creation
CALL set_table_property('tbl2', 'storage_mode', 'hot');
```

To set a specific child partition to cold storage, modify that partition’s `storage_mode` property. The system immediately starts migrating that partition to cold storage. Example:

```
-- Create multiple child partitions

CREATE TABLE tbl2_v2 PARTITION OF tbl2 FOR VALUES IN ('v2');
CREATE TABLE tbl2_v3 PARTITION OF tbl2 FOR VALUES IN ('v3');

-- Query table properties; they currently inherit the parent's hot storage setting

SELECT * FROM hg_table_storage_status('public', 'tbl2');

-- Change a child partition to cold storage

CALL set_table_property('tbl2_v3', 'storage_mode', 'cold');
                
```

## Dynamically manage storage medium for partitioned tables

To intelligently manage partition storage media, use dynamic partitioning to define hot-to-cold data transformation rules. This enables smart tiered storage that effectively balances cost and performance. For more information about dynamic partition management, see [Dynamic partitioning](/help/en/hologres/developer-reference/dynamic-partition-management).

### Query storage medium status

Call the `hg_table_storage_status` function to check table storage status. `hg_table_storage_status` shows only data storage size, excluding Meta storage size. Usage:

```
SELECT * FROM hg_table_storage_status('<schema_name>', '<table_name>');
```

**Parameter**

**Description**

`schema_name`

Schema name of the table

`table_name`

Table name

The following result is returned:

**Column Name**

**Content**

**table\_name**

-   Non-partitioned table: table name
    
-   Parent partition table: child partition name. Returns multiple rows, one per child partition
    
-   Child partition table: child partition name
    

**hot\_size**

Hot storage size in bytes

**cold\_size**

Cold storage size in bytes

**status**

Status:

-   hot: data is in hot storage
    
-   cold: data is in cold storage
    
-   transferring: data is being migrated
    

Examples:

```
-- Non-partitioned table
SELECT * FROM hg_table_storage_status('public', 'tbl1');-- returns size in bytes
 table_name | hot_size |   cold_size   | status
------------+----------+---------------+--------
 tbl1       |  145643  |      3685     | transferring

-- Parent partition table
SELECT * FROM hg_table_storage_status('public', 'tbl2');-- returns size in bytes
   table_name    | hot_size | cold_size | status
-----------------+----------+-----------+--------
 tbl2_2022062222 |        0 |         0 | hot
 tbl2_2022062221 |     1125 |         0 | hot
 tbl2_2022062220 |     1245 |         0 | hot
 tbl2_2022062219 |     1358 |         0 | hot
 tbl2_2022062218 |        0 |      1875 | cold
 tbl2_2022062217 |        0 |      1143 | cold
 tbl2_2022062216 |        0 |      1299 | cold
```

### Query table access frequency

Starting with Hologres V1.3.37, the log system table `hologres.hg_table_info` collects daily statistics on tables within an instance. Use this data to view and analyze table information for targeted optimization. For more information, see [View and analyze table statistics](/help/en/hologres/user-guide/query-and-analyze-table-statistics#task-2237601). Query this table to obtain hot/cold storage volume, table access frequency, and partition access frequency to decide whether to perform hot-to-cold data conversion. Sample queries:

#### **Non-partitioned tables**

```
SELECT a.table_name,
       (a.total_read_count - b.total_read_count) AS read_count,
       (a.total_write_count - b.total_write_count) AS write_count,
       a.hot_storage_size
FROM (SELECT * FROM hologres.hg_table_info
      WHERE type='TABLE' AND collect_time::DATE = CURRENT_DATE - interval '1 day') a
JOIN
    (SELECT * FROM hologres.hg_table_info
    WHERE type='TABLE' AND collect_time::DATE = CURRENT_DATE - interval '${days} day') b
ON a.table_name = b.table_name
ORDER BY hot_storage_size DESC;
```

#### **Partitioned tables**

Query all partitions:

```
SELECT parent_table_name,COUNT(*) AS partition_cnt, 
       sum(hot_storage_size)/1024/1024/1024 AS hot_size_gb 
FROM hologres.hg_table_info
WHERE type = 'PARTITION' AND collect_time::DATE = CURRENT_DATE - interval '1 day'
GROUP BY parent_table_name
ORDER BY hot_size_gb DESC;
```
