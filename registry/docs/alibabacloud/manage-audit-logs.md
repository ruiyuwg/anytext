StarRocks stores all audit logs in a local file named `fe/log/fe.audit.log`. You cannot access these logs through the internal system database. The audit log feature is enabled by default, and the AuditLoader plugin is installed. The plugin reads logs from the local file and imports them into a StarRocks database using the HTTP PUT method. This lets you view and analyze all operations performed in the database.

## **Precautions**

-   By default, the audit log feature is enabled, and a database named \_starrocks\_audit\_db\_ and a table named starrocks\_audit\_tbl are automatically created. All subsequent audit logs are stored in this table. Do not delete the \_starrocks\_audit\_db\_ database and the starrocks\_audit\_tbl table. If you perform the deletion operation, the SQL task query feature cannot properly work in StarRocks Manager.
    
-   Audit logs use dynamic partitioning. By default, audit data from the last 30 days is stored. You can adjust the storage duration for audit data by modifying the `dynamic_partition.start` and `dynamic_partition.end` parameter values.
    
-   You cannot disable the audit log feature.
    

## Feature overview

You can view the \_starrocks\_audit\_db\_ database and the starrocks\_audit\_tbl table that are automatically created under default\_catalog in the Data Directory pane of the **Metadata Management** page in E-MapReduce (EMR) StarRocks Manager. All subsequent audit logs are stored in the table.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5058194371/p754956.png)

To view the statement used to create the starrocks\_audit\_tbl table, execute `SHOW CREATE TABLE starrocks_audit_tbl;`. The creation statement is as follows.

```
CREATE TABLE `starrocks_audit_tbl` (
  `queryId` varchar(64) NOT NULL COMMENT "The unique ID of the query",
  `timestamp` datetime NOT NULL COMMENT "The time when the query starts",
  `queryTime` bigint(20) NOT NULL COMMENT "The running time of the query, in milliseconds",
  `queryType` varchar(12) NULL COMMENT "The type of the query, such as query, slow_query, or connection",
  `clientIp` varchar(32) NULL COMMENT "The IP address of the client",
  `user` varchar(64) NULL COMMENT "The username for the query",
  `authorizedUser` varchar(64) NULL COMMENT "The unique identity of the user, which is user_identity",
  `resourceGroup` varchar(64) NULL COMMENT "The name of the resource group",
  `catalog` varchar(32) NULL COMMENT "The name of the data catalog",
  `db` varchar(96) NULL COMMENT "The database where the query is run",
  `state` varchar(8) NULL COMMENT "The status of the query, such as EOF, ERR, or OK",
  `errorCode` varchar(512) NULL COMMENT "The error code",
  `scanBytes` bigint(20) NULL COMMENT "The number of bytes scanned by the query",
  `scanRows` bigint(20) NULL COMMENT "The number of rows scanned by the query",
  `returnRows` bigint(20) NULL COMMENT "The number of rows returned by the query",
  `cpuCostNs` bigint(20) NULL COMMENT "The CPU time consumed by the query, in nanoseconds",
  `memCostBytes` bigint(20) NULL COMMENT "The memory consumed by the query, in bytes",
  `stmtId` int(11) NULL COMMENT "The incremental ID of the SQL statement",
  `isQuery` tinyint(4) NULL COMMENT "Indicates whether the SQL statement is a query. Valid values: 1 (Yes) and 0 (No).",
  `feIp` varchar(128) NULL COMMENT "The IP address of the frontend (FE) that executes the statement",
  `stmt` varchar(1048576) NULL COMMENT "The original SQL statement",
  `digest` varchar(32) NULL COMMENT "The fingerprint of the slow SQL statement",
  `planCpuCosts` double NULL COMMENT "The CPU time consumed during the query planning phase, in nanoseconds",
  `planMemCosts` double NULL COMMENT "The memory consumed during the query planning phase, in bytes",
  `warehouse` varchar(96) NULL COMMENT "The compute group used by the query",
  `stmtType` varchar(8) NULL COMMENT "The type of the SQL statement, such as DQL, DML, DDL, DCL, or OTHER",
  `isFilter` tinyint(4) NULL COMMENT "Indicates whether the SQL statement is filtered. Valid values: 1 (Yes) and 0 (No).",
  `errorMsg` varchar(1048576) NULL COMMENT "The details of the error",
  `pendingTimeMs` bigint(20) NULL COMMENT "The time the query waits in the queue, in milliseconds",
  `candidateMVs` varchar(65533) NULL COMMENT "A list of candidate materialized views (MVs)",
  `hitMvs` varchar(65533) NULL COMMENT "A list of hit MVs"
) ENGINE=OLAP 
DUPLICATE KEY(`queryId`, `timestamp`, `queryTime`)
COMMENT "The audit log table"
PARTITION BY RANGE(`timestamp`)
(PARTITION p20250909 VALUES [("0000-01-01 00:00:00"), ("2025-09-10 00:00:00")),
PARTITION p20250910 VALUES [("2025-09-10 00:00:00"), ("2025-09-11 00:00:00")),
PARTITION p20250911 VALUES [("2025-09-11 00:00:00"), ("2025-09-12 00:00:00")),
PARTITION p20250912 VALUES [("2025-09-12 00:00:00"), ("2025-09-13 00:00:00")),
PARTITION p20250913 VALUES [("2025-09-13 00:00:00"), ("2025-09-14 00:00:00")))
DISTRIBUTED BY HASH(`queryId`) BUCKETS 3 
PROPERTIES (
"compression" = "LZ4",
"datacache.enable" = "true",
"dynamic_partition.buckets" = "3",
"dynamic_partition.enable" = "true",
"dynamic_partition.end" = "3",
"dynamic_partition.history_partition_num" = "0",
"dynamic_partition.prefix" = "p",
"dynamic_partition.start" = "-30",
"dynamic_partition.time_unit" = "DAY",
"dynamic_partition.time_zone" = "Asia/Shanghai",
"enable_async_write_back" = "false",
"replication_num" = "1",
"storage_volume" = "builtin_storage_volume"
);
```
