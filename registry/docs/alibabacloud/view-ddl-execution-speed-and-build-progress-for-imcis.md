This topic describes how to view the DDL execution speed and build progress for In-Memory Column Indexes (IMCIs) in the IMCI and InnoDB scenarios when large tables or time-consuming DDL statements are involved.

## **IMCI scenario**

You can view the following information in the corresponding tables:

-   In the `INFORMATION_SCHEMA.IMCI_INDEXES` table, view the state of an IMCI.
    
-   In the `INFORMATION_SCHEMA.IMCI_INDEX_STATS` table, view the write speed of an IMCI.
    
-   In the `INFORMATION_SCHEMA.IMCI_ASYNC_DDL_STATS` table, view the DDL execution speed and build progress for IMCIs. A task for building IMCI data is cleared within 5 to 10 minutes after the task is completed. You can view the complete status information of IMCIs in the `INFORMATION_SCHEMA.IMCI_INDEXES` table.
    
    -   When the version of a PolarDB for MySQL **Enterprise Edition** cluster is 8.0.1.x earlier than 8.0.1.1.34 or 8.0.2.x earlier than 8.0.2.2.15, the `INFORMATION_SCHEMA.IMCI_ASYNC_DDL_STATS` table has the following schema:
        
        ```
        CREATE TABLE: CREATE TEMPORARY TABLE `IMCI_ASYNC_DDL_STATS` (
          `SCHEMA_NAME` varchar(193) NOT NULL DEFAULT '', -- The database name.
          `TABLE_NAME` varchar(193) NOT NULL DEFAULT '', -- The table name.
          `CREATED_AT` varchar(64) NOT NULL DEFAULT '', -- The timestamp when the task was created.
          `STARTED_AT` varchar(64) NOT NULL DEFAULT '', -- The timestamp when the task starts.
          `FINISHED_AT` varchar(64) NOT NULL DEFAULT '', -- The timestamp when the task ends.
          `STATUS` varchar(128) NOT NULL DEFAULT '', -- The status.
          `APPROXIMATE_ROWS` bigint(8) NOT NULL DEFAULT '0', -- The estimated number of rows for baseline data.
          `SCANNED_ROWS` bigint(8) NOT NULL DEFAULT '0', -- The number of scanned rows. The actual number may be greater than the estimated number.
          `AVG_SPEED` int(4) NOT NULL DEFAULT '0', -- The average speed of the task. Unit: rows per second.
          `SPEED_LAST_SECOND` int(4) NOT NULL DEFAULT '0', -- The speed of the last second. Unit: rows per second.
          `ESTIMATE_SECOND` bigint(8) NOT NULL DEFAULT '0' -- The estimated remaining time. Unit: seconds.
        ) ENGINE=MEMORY DEFAULT CHARSET=utf8
        ```
        
    -   When the version of a PolarDB for MySQL **Enterprise Edition** cluster is 8.0.1.x earlier than 8.0.1.1.35 or 8.0.2.x earlier than 8.0.2.2.16, the `INFORMATION_SCHEMA.IMCI_ASYNC_DDL_STATS` table has the following schema:
        
        ```
        Create Table: CREATE TEMPORARY TABLE `IMCI_ASYNC_DDL_STATS` (
          `SCHEMA_NAME` varchar(193) NOT NULL DEFAULT '', -- The database name.
          `TABLE_NAME` varchar(193) NOT NULL DEFAULT '', -- The table name.
          `CREATED_AT` varchar(64) NOT NULL DEFAULT '', -- The timestamp when the task was created.
          `STARTED_AT` varchar(64) NOT NULL DEFAULT '', -- The timestamp when the task starts.
          `FINISHED_AT` varchar(64) NOT NULL DEFAULT '', -- The timestamp when the task ends.
          `STATUS` varchar(128) NOT NULL DEFAULT '', -- The status.
          `APPROXIMATE_ROWS` bigint(8) NOT NULL DEFAULT '0', -- The estimated number of rows for baseline data.
          `SCANNED_ROWS` varchar(128) NOT NULL DEFAULT '', -- The number and percentage of scanned rows. The actual number may be greater than the estimated number.
          `SCAN_SECOND` bigint(8) NOT NULL DEFAULT '0', -- The number of seconds that a scan operation has been executed.
          `SORT_ROUNDS` bigint(8) NOT NULL DEFAULT '0', -- The number of sorting rounds. This column is applicable only to scenarios that involve sort keys.
          `SORT_SECOND` bigint(8) NOT NULL DEFAULT '0', -- The number of seconds that a sorting operation has been executed. This column is applicable only to scenarios that involve sort keys.
          `BUILD_ROWS` varchar(128) NOT NULL DEFAULT '', -- The number and percentage of written rows after sorting. This column is applicable only to scenarios that involve sort keys.
          `BUILD_SECOND` bigint(8) NOT NULL DEFAULT '0',  -- The time required to write data after sorting. This column is applicable only to scenarios that involve sort keys.
          `AVG_SPEED` int(4) NOT NULL DEFAULT '0', -- The average speed of the task. Unit: rows per second.
          `SPEED_LAST_SECOND` int(4) NOT NULL DEFAULT '0', -- The speed of the last second. Unit: rows per second. This column is applicable to the scanning and sorting phases.
          `ESTIMATE_SECOND` bigint(8) NOT NULL DEFAULT '0' -- The estimated remaining time. Unit: seconds. This column is applicable to the scanning and sorting phases.
        ) ENGINE=MEMORY DEFAULT CHARSET=utf8
        ```
        
        The `SPEED_LAST_SECOND` value may fluctuate depending on system resources and concurrent tasks. The `ESTIMATE_SECOND` value may fluctuate because it is obtained by dividing the remaining number of rows by the speed of the last second. If write throttling is triggered, the speed of the last second may be 0. In this case, the `ESTIMATE_SECOND` value is 9223372036854775807.
        

## **InnoDB scenario**

When you use a DDL statement to add an IMCI or build an index, the AP node replays redo logs and writes data to the IMCI. The performance of the AP node is primarily dependent on the log replay speed and the DDL execution speed on the primary node. You can refer to the performance monitoring information in the PolarDB console to assess the log replay speed, and refer to the DDL monitoring information on InnoDB to evaluate the speed of DDL execution on the primary node.

The DDL monitoring information on InnoDB depends on the Performance Schema module. You can query the DDL statements that are being executed in the `events_stages_current` table and the DDL statements that have been executed in the `events_stages_history` table. The main metrics include `WORK_COMPLETED` and `WORK_ESTIMATED`. Both are measured in pages. For more information, see [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/monitor-alter-table-performance-schema.html).
