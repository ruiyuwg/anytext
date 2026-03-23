This topic describes the Performance Agent feature that is provided by PolarDB. You can use Performance Agent as a PolarDB for MySQL plug-in to collect the performance statistics of the nodes in PolarDB for MySQL clusters.

## Prerequisites

-   The PolarDB cluster is a PolarDB for MySQL 8.0 one and the revision version is 8.0.2.1.0 or later. For more information about how to check the version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).
-   The loose\_performance\_schema parameter is set to ON. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301 "After you create a cluster, you can modify the parameters of the cluster and its nodes in the console and export the modified parameters as templates. You can also apply templates to clusters that are deployed in the same region for easy parameter modification. This topic describes how to modify the parameters of a cluster and its nodes, export the modified parameters as templates, and apply the templates.").

## Background information

A memory table named PERF\_STATISTICS is added for Performance Agent. This table is stored in the performance\_schema system database. This table stores the performance data that is generated over the most recent period of time. You can query performance data from this table.

**Note**

You can enable the performance\_schema feature to monitor cluster performance metrics in terms of locks, transactions, and memory. However, after you enable the performance\_schema feature, a large amount of system memory is occupied and the performance of the cluster is affected. The performance\_schema feature is disabled by default in PolarDB for MySQL. If you want to enable the performance\_schema feature, we recommend that you carefully configure the performance\_schema metrics based on the specifications and resources of the cluster.

## Parameters

The following table describes the parameters that you must configure for Performance Agent.

 

Parameter

Description

performance\_agent\_enabled

Specifies whether to enable the Performance Agent feature. Valid values: ON and OFF. Default value: ON.

performance\_agent\_interval

Specifies the interval at which PolarDB collects performance data. Valid values: 1 to 60. Unit: seconds. Default value: 1.

performance\_agent\_perfstat\_volume\_size

Specifies the maximum number of data records that are allowed in the PERF\_STATISTICS memory table. Default value: 3600. If you set the performance\_agent\_interval parameter to 1, the system retains the performance data that is generated within the last hour.

## Schema

The PERF\_STATISTICS memory table uses the following schema:

```
CREATE TEMPORARY TABLE `PERF_STATISTICS` (
  `TIME` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `PROCS_MEM_USAGE` double NOT NULL DEFAULT '0',
  `PROCS_CPU_RATIO` double NOT NULL DEFAULT '0',
  `PROCS_IOPS` double NOT NULL DEFAULT '0',
  `PROCS_IO_READ_BYTES` bigint(21) NOT NULL DEFAULT '0',
  `PROCS_IO_WRITE_BYTES` bigint(21) NOT NULL DEFAULT '0',
  `MYSQL_CONN_ABORT` int(11) NOT NULL DEFAULT '0',
  `MYSQL_CONN_CREATED` int(11) NOT NULL DEFAULT '0',
  `MYSQL_USER_CONN_COUNT` int(11) NOT NULL DEFAULT '0',
  `MYSQL_CONN_RUNNING` int(11) NOT NULL DEFAULT '0',
  `MYSQL_LOCK_IMMEDIATE` int(11) NOT NULL DEFAULT '0',
  `MYSQL_LOCK_WAITED` int(11) NOT NULL DEFAULT '0',
  `MYSQL_COM_INSERT` int(11) NOT NULL DEFAULT '0',
  `MYSQL_COM_UPDATE` int(11) NOT NULL DEFAULT '0',
  `MYSQL_COM_DELETE` int(11) NOT NULL DEFAULT '0',
  `MYSQL_COM_SELECT` int(11) NOT NULL DEFAULT '0',
  `MYSQL_COM_COMMIT` int(11) NOT NULL DEFAULT '0',
  `MYSQL_COM_ROLLBACK` int(11) NOT NULL DEFAULT '0',
  `MYSQL_COM_PREPARE` int(11) NOT NULL DEFAULT '0',
  `MYSQL_LONG_QUERY` int(11) NOT NULL DEFAULT '0',
  `MYSQL_TCACHE_GET` bigint(21) NOT NULL DEFAULT '0',
  `MYSQL_TCACHE_MISS` bigint(21) NOT NULL DEFAULT '0',
  `MYSQL_TMPFILE_CREATED` int(11) NOT NULL DEFAULT '0',
  `MYSQL_TMP_TABLES` int(11) NOT NULL DEFAULT '0',
  `MYSQL_TMP_DISKTABLES` int(11) NOT NULL DEFAULT '0',
  `MYSQL_SORT_MERGE` int(11) NOT NULL DEFAULT '0',
  `MYSQL_SORT_ROWS` int(11) NOT NULL DEFAULT '0',
  `MYSQL_BYTES_RECEIVED` bigint(21) NOT NULL DEFAULT '0',
  `MYSQL_BYTES_SENT` bigint(21) NOT NULL DEFAULT '0',
  `MYSQL_BINLOG_OFFSET` int(11) NOT NULL DEFAULT '0',
  `MYSQL_IOLOG_OFFSET` int(11) NOT NULL DEFAULT '0',
  `MYSQL_RELAYLOG_OFFSET` int(11) NOT NULL DEFAULT '0',
  `EXTRA` json NOT NULL DEFAULT 'null'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

 

Column

Description

TIME

The time when the data record was generated. The time is in the yyyy-MM-dd HH:mm:ss format.

PROCS\_MEM\_USAGE

The size of physical memory that is occupied by the cluster. Unit: bytes.

PROCS\_CPU\_RATIO

The CPU utilization.

PROCS\_IOPS

The number of I/O operations that are performed.

PROCS\_IO\_READ\_BYTES

The amount of data that is read by I/O operations. Unit: bytes.

PROCS\_IO\_WRITE\_BYTES

The amount of data that is written by I/O operations. Unit: bytes.

MYSQL\_CONN\_ABORT

The number of closed connections.

MYSQL\_CONN\_CREATED

The number of new connections.

MYSQL\_USER\_CONN\_COUNT

The total number of connections.

MYSQL\_CONN\_RUNNING

The number of active connections.

MYSQL\_LOCK\_IMMEDIATE

The number of locks that are held.

MYSQL\_LOCK\_WAITED

The number of lock wait events.

MYSQL\_COM\_INSERT

The number of statements that are executed to insert data.

MYSQL\_COM\_UPDATE

The number of statements that are executed to update data.

MYSQL\_COM\_DELETE

The number of statements that are executed to delete data.

MYSQL\_COM\_SELECT

The number of statements that are executed to query data.

MYSQL\_COM\_COMMIT

The number of transactions that are explicitly committed.

MYSQL\_COM\_ROLLBACK

The number of transactions that are rolled back.

MYSQL\_COM\_PREPARE

The number of statements that are preprocessed.

MYSQL\_LONG\_QUERY

The number of slow queries.

MYSQL\_TCACHE\_GET

The number of cache hits.

MYSQL\_TCACHE\_MISS

The number of cache misses.

MYSQL\_TMPFILE\_CREATED

The number of temporary files that are created.

MYSQL\_TMP\_TABLES

The number of temporary tables that are created.

MYSQL\_TMP\_DISKTABLES

The number of temporary disk tables that are created.

MYSQL\_SORT\_MERGE

The number of times that data is merged and sorted.

MYSQL\_SORT\_ROWS

The number of rows that are sorted.

MYSQL\_BYTES\_RECEIVED

The amount of data that is received. Unit: bytes.

MYSQL\_BYTES\_SENT

The amount of data that is sent. Unit: bytes.

MYSQL\_BINLOG\_OFFSET

The size of the binary log file that is generated. Unit: bytes.

MYSQL\_IOLOG\_OFFSET

The size of the binary log file that is sent by the primary node. Unit: bytes.

MYSQL\_RELAYLOG\_OFFSET

The size of the binary log file that is applied by the read-only node. Unit: bytes.

EXTRA

The statistics about InnoDB. The value of the EXTRA parameter consists of multiple fields and is in the JSON format. For more information, see the "[Table 1](#table-ltr-mnt-6c9)" section of this topic.

**Note** The values of the metrics in the InnoDB statistics are the same as the values that are obtained by executing the `SHOW STATUS` statement.

Table 1. Fields in the value of the EXTRA parameter  

Field

Description

INNODB\_TRX\_CNT

The number of transactions.

INNODB\_DATA\_READ

The amount of data that is read. Unit: bytes.

INNODB\_IBUF\_SIZE

The number of pages that are merged.

INNODB\_LOG\_WAITS

The number of times that InnoDB waits to write log data.

INNODB\_MAX\_PURGE

The number of transactions that are deleted.

INNODB\_N\_WAITING

The number of locks for which InnoDB waits.

INNODB\_ROWS\_READ

The number of rows that are read.

INNODB\_LOG\_WRITES

The number of times that log data is written by InnoDB.

INNODB\_IBUF\_MERGES

The number of times that data is merged by InnoDB.

INNODB\_DATA\_WRITTEN

The amount of data that is written. Unit: bytes.

INNODB\_DBLWR\_WRITES

The number of double write operations.

INNODB\_IBUF\_SEGSIZE

The size of data that is inserted into the buffer.

INNODB\_ROWS\_DELETED

The number of rows that are deleted.

INNODB\_ROWS\_UPDATED

The number of rows that are updated.

INNODB\_COMMIT\_TRXCNT

The number of transactions that are committed.

INNODB\_IBUF\_FREELIST

The length of the idle list.

INNODB\_MYSQL\_TRX\_CNT

The number of MySQL transactions.

INNODB\_ROWS\_INSERTED

The number of rows that are inserted.

INNODB\_ACTIVE\_TRX\_CNT

The number of active transactions.

INNODB\_OS\_LOG\_WRITTEN

The amount of log data that is written. Unit: bytes.

INNODB\_ACTIVE\_VIEW\_CNT

The number of active views.

INNODB\_RSEG\_HISTORY\_LEN

The length of the TRX\_RSEG\_HISTORY table.

INNODB\_AVG\_COMMIT\_TRXTIME

The average amount of time that is taken to commit a transaction.

INNODB\_MAX\_COMMIT\_TRXTIME

The maximum amount of time that is taken to commit a transaction.

INNODB\_DBLWR\_PAGES\_WRITTEN

The number of writes that are completed by double write operations.

## Usage

-   You can execute the following statements to query the system table to obtain performance data.
    -   Query the CPU utilization and memory usage over the previous 30 seconds. Example:
        
        ```
        MySQL> select TIME, PROCS_MEM_USAGE, PROCS_CPU_RATIO from performance_schema.PERF_STATISTICS order by time DESC limit 30;
        +---------------------+-----------------+-----------------+
        | TIME                | PROCS_MEM_USAGE | PROCS_CPU_RATIO |
        +---------------------+-----------------+-----------------+
        | 2020-02-27 11:15:36 |       857812992 |           18.55 |
        | 2020-02-27 11:15:35 |       857808896 |           18.54 |
        | 2020-02-27 11:15:34 |       857268224 |           19.64 |
        | 2020-02-27 11:15:33 |       857268224 |           21.06 |
        | 2020-02-27 11:15:32 |       857264128 |           20.39 |
        | 2020-02-27 11:15:31 |       857272320 |           20.32 |
        | 2020-02-27 11:15:30 |       857272320 |           21.35 |
        | 2020-02-27 11:15:29 |       857272320 |            28.8 |
        | 2020-02-27 11:15:28 |       857268224 |           29.08 |
        | 2020-02-27 11:15:27 |       857268224 |           26.92 |
        | 2020-02-27 11:15:26 |       857268224 |           23.84 |
        | 2020-02-27 11:15:25 |       857264128 |           13.76 |
        | 2020-02-27 11:15:24 |       857264128 |           15.12 |
        | 2020-02-27 11:15:23 |       857264128 |           14.76 |
        | 2020-02-27 11:15:22 |       857264128 |           15.38 |
        | 2020-02-27 11:15:21 |       857260032 |           13.23 |
        | 2020-02-27 11:15:20 |       857260032 |           12.75 |
        | 2020-02-27 11:15:19 |       857260032 |           12.17 |
        | 2020-02-27 11:15:18 |       857255936 |           13.22 |
        | 2020-02-27 11:15:17 |       857255936 |           20.51 |
        | 2020-02-27 11:15:16 |       857255936 |           28.74 |
        | 2020-02-27 11:15:15 |       857251840 |           29.85 |
        | 2020-02-27 11:15:14 |       857251840 |           29.31 |
        | 2020-02-27 11:15:13 |       856981504 |           28.85 |
        | 2020-02-27 11:15:12 |       856981504 |           29.19 |
        | 2020-02-27 11:15:11 |       856977408 |           29.12 |
        | 2020-02-27 11:15:10 |       856977408 |           29.32 |
        | 2020-02-27 11:15:09 |       856977408 |            29.2 |
        | 2020-02-27 11:15:08 |       856973312 |           29.36 |
        | 2020-02-27 11:15:07 |       856973312 |           28.79 |
        +---------------------+-----------------+-----------------+
        30 rows in set (0.08 sec)
        ```
        
    -   Query the rows that are read and written by InnoDB over the previous 30 seconds. Example:
        
        ```
        MySQL> select TIME, EXTRA->'$.INNODB_ROWS_READ', EXTRA->'$.INNODB_ROWS_INSERTED' from performance_schema.PERF_STATISTICS order by time DESC limit 30;
        +---------------------+-----------------------------+---------------------------------+
        | TIME                | EXTRA->'$.INNODB_ROWS_READ' | EXTRA->'$.INNODB_ROWS_INSERTED' |
        +---------------------+-----------------------------+---------------------------------+
        | 2020-02-27 11:22:17 | 39209                       | 0                               |
        | 2020-02-27 11:22:16 | 36098                       | 0                               |
        | 2020-02-27 11:22:15 | 38035                       | 0                               |
        | 2020-02-27 11:22:14 | 37384                       | 0                               |
        | 2020-02-27 11:22:13 | 38336                       | 0                               |
        | 2020-02-27 11:22:12 | 33946                       | 0                               |
        | 2020-02-27 11:22:11 | 36301                       | 0                               |
        | 2020-02-27 11:22:10 | 36835                       | 0                               |
        | 2020-02-27 11:22:09 | 36900                       | 0                               |
        | 2020-02-27 11:22:08 | 36402                       | 0                               |
        | 2020-02-27 11:22:07 | 39672                       | 0                               |
        | 2020-02-27 11:22:06 | 39316                       | 0                               |
        | 2020-02-27 11:22:05 | 37830                       | 0                               |
        | 2020-02-27 11:22:04 | 36396                       | 0                               |
        | 2020-02-27 11:22:03 | 34820                       | 0                               |
        | 2020-02-27 11:22:02 | 37350                       | 0                               |
        | 2020-02-27 11:22:01 | 39463                       | 0                               |
        | 2020-02-27 11:22:00 | 38419                       | 0                               |
        | 2020-02-27 11:21:59 | 37673                       | 0                               |
        | 2020-02-27 11:21:58 | 35117                       | 0                               |
        | 2020-02-27 11:21:57 | 36140                       | 0                               |
        | 2020-02-27 11:21:56 | 37592                       | 0                               |
        | 2020-02-27 11:21:55 | 39765                       | 0                               |
        | 2020-02-27 11:21:54 | 35553                       | 0                               |
        | 2020-02-27 11:21:53 | 35882                       | 0                               |
        | 2020-02-27 11:21:52 | 37061                       | 0                               |
        | 2020-02-27 11:21:51 | 40699                       | 0                               |
        | 2020-02-27 11:21:50 | 39608                       | 0                               |
        | 2020-02-27 11:21:49 | 39317                       | 0                               |
        | 2020-02-27 11:21:48 | 37413                       | 0                               |
        +---------------------+-----------------------------+---------------------------------+
        30 rows in set (0.08 sec)
        ```
        
-   Connect to a monitoring platform to monitor your database performance in real time. For example, connect to [Grafana](https://grafana.com/). ![Grafana](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5630749951/p87223.png)
