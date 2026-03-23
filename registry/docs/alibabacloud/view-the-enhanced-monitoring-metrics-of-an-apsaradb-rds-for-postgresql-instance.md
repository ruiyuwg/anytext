ApsaraDB RDS for PostgreSQL provides comprehensive Enhanced Monitoring metrics, including operating system metrics and database metrics. This topic describes how to view these metrics in the ApsaraDB RDS console.

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Monitoring and Alerts**.
    
3.  Select the **Enhanced Monitoring** tab, click **Manage Metrics**, and then select the metrics that you want to display on the **OS Metrics** tab and the **Database Metrics** tab. For more information about the metrics, see [References](#section-iur-9e9-1m1).
    
    **Note**
    
    -   The **Enhanced Monitoring** tab can display a maximum of 30 metrics.
        
    -   You can apply the selected metrics to all ApsaraDB RDS for PostgreSQL instances in the region of the current RDS instance:
        
        -   If the current RDS instance is equipped with standard SSDs or enhanced SSDs (ESSDs), you can apply the selected metrics to all ApsaraDB RDS for PostgreSQL instances that are equipped with standard SSDs or ESSDs in the region of the current RDS instance.
            
        -   If the current RDS instance is equipped with local SSDs, you can apply the selected metrics to all ApsaraDB RDS for PostgreSQL instances that are equipped with local SSDs in the region of the current RDS instance.
            
    
4.  Click **Update Metrics**. Then, you can view the monitoring data of the selected metrics on the **Enhanced Monitoring** tab.
    
    Enhanced Monitoring supports the following aggregation methods:
    
    -   Metric name.avg: the average value of the metric.
        
    -   Metric name.max: the maximum value of the metric.
        
    -   Metric name.min: the minimum value of the metric.
        
5.  The **Enhanced Monitoring** tab provides a variety of query settings to help you view monitoring data easily.![更多功能](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1856449361/p306911.png)
    
    **Number**
    
    **Feature**
    
    **Description**
    
    1
    
    **Query Time**
    
    You can query monitoring data over a preset time range or a custom time range.
    
    -   The preset time range can be 30 minutes, 1 hour, 2 hours, 6 hours, 1 day, 7 days, or 30 days.
        
    -   The custom time range is specified by a start time and an end time in the following format: YYYY-MM-DD hh:mm:ss - YYYY-MM-DD hh:mm:ss.
        
    
    2
    
    **Aggregation Method**
    
    You can specify the method based on which ApsaraDB RDS aggregates monitoring data. The following aggregation methods are supported:
    
    -   Average
        
    -   Maximum
        
    -   Minimum
        
    
    3
    
    **Layout**
    
    You can adjust the layout in which charts displayed. The following layouts are supported:
    
    -   One column
        
    -   Two columns
        
    -   Three columns
        
    -   Four columns
        
    
    4
    
    **Time Granularity**
    
    You can specify the time granularity of the x-axis in each chart that is displayed.
    
    The time granularity varies based on the time range that you specify. The following relationships exist between the time granularity and the time range:
    
    -   If the time range is less than or equal to 1 hour, the time granularity is 5 seconds.
        
    -   If the time range is greater than 1 hour and less than or equal to 2 hours, the time granularity is 10 seconds.
        
    -   If the time range is greater than 2 hours and less than or equal to 6 hours, the time granularity is 30 seconds.
        
    -   If the time range is greater than 6 hours and less than or equal to 12 hours, the time granularity is 1 minute.
        
    -   If the time range is greater than 12 hours and less than or equal to 1 day, the time granularity is 2 minutes.
        
    -   If the time range is greater than 1 day and less than or equal to 5 days, the time granularity is 10 minutes.
        
    -   If the time range is greater than 5 days and less than or equal to 15 days, the time granularity is 30 minutes.
        
    -   If the time range is greater than 15 days and less than or equal to 30 days, the time granularity is 1 hour.
        
    
    5
    
    **Pointer Linkage**
    
    You can turn on Pointer Link. When you move the pointer over a specific point in time on the x-axis of a chart, all charts on the Enhanced Monitoring tab display the monitoring data that is collected at that specific point in time.
    
    6
    
    **Refresh**
    
    You can manually refresh the Enhanced Monitoring tab to update monitoring data.
    

## References

The following table describes the supported operating system metrics and database metrics. In the table, ticks (✔️) indicate that a metric is supported, and crosses (❌) indicate that a metric is not supported.

**Operating system metrics**

**Classification**

**Metric**

**Description**

**Unit**

**Instances equipped with local SSDs**

**Instances equipped with standard SSDs or ESSDs**

Network Traffic

os.network.rx

The throughput of inbound traffic of the server.

MB/s

❌

✔️

os.network.tx

The throughput of outbound traffic of the server.

MB/s

❌

✔️

CPU utilization

os.cpu\_usage.sys

The system CPU utilization. The value of this metric is calculated based on the following formula: System CPU utilization = CPU resources consumed to run kernel code/Total CPU resources.

%

✔️

✔️

os.cpu\_usage.user

The user CPU utilization. The value of this metric is calculated based on the following formula: User CPU utilization = CPU resources consumed to run code in user mode/Total CPU resources.

%

✔️

✔️

os.cpu\_usage.total

The CPU utilization for the server. The value of this metric is calculated based on the following formula: CPU utilization for the server = CPU resources consumed to both run kernel code and run code in user mode/Total CPU resources

%

✔️

✔️

CPU consumption by process

os.cpu\_process.backend

The CPU utilization for the backend process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the backend process.

%

✔️

✔️

os.cpu\_process.bgwriter

The CPU utilization for the bgwriter process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the bgwriter process.

%

✔️

✔️

os.cpu\_process.checkpoint

The CPU utilization for the checkpoint process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the checkpoint process.

%

✔️

✔️

os.cpu\_process.logger

The CPU utilization for the logger process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the logger process.

%

✔️

✔️

os.cpu\_process.pgstat

The CPU utilization for the pgstat process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the pgstat process.

%

✔️

✔️

os.cpu\_process.walwriter

The CPU utilization for the walwriter process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the walwriter process.

%

✔️

✔️

os.cpu\_process.autovacuum

The CPU utilization for the autovacuum process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the autovacuum process.

%

✔️

✔️

os.cpu\_process.walsender

The CPU utilization for the walsender process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the walsender process.

%

✔️

✔️

os.cpu\_process.postmaster

The CPU utilization for the postmaster process. If one CPU is consumed, the CPU utilization is 100%. If two CPUs are consumed, the CPU utilization is 200%. In this way, you can calculate the CPU utilization for the postmaster process.

%

✔️

✔️

Memory details

os.mem\_size.spec

The memory size of the instance type.

MB

✔️

✔️

os.mem\_size.used

The amount of the memory that is used.

MB

✔️

✔️

os.mem\_size.cache

The amount of the memory that is used as page cache.

MB

✔️

✔️

os.mem\_size.mapped\_file

The amount of the shared memory that is used.

MB

✔️

✔️

os.mem\_size.rss

The amount of the resident set size (RSS) memory that is used.

MB

✔️

✔️

os.mem\_size.enormoustlb\_usage\_2m

The amount of the enormous-page memory that is used. For this metric, the size of a enormous page is 2 MB.

MB

✔️

✔️

Memory used by process

os.mem\_process.backend

The amount of the memory that is used by the backend process.

MB

✔️

✔️

os.mem\_process.bgwriter

The amount of the memory that is used by the bgwriter process.

MB

✔️

✔️

os.mem\_process.checkpoint

The amount of the memory that is used by the checkpoint process.

MB

✔️

✔️

os.mem\_process.logger

The amount of the memory that is used by the logger process.

MB

✔️

✔️

os.mem\_process.pgstat

The amount of the memory that is used by the pgstat process.

MB

✔️

✔️

os.mem\_process.walwriter

The amount of the memory that is used by the walwriter process.

MB

✔️

✔️

os.mem\_process.autovacuum

The amount of the memory that is used by the autovacuum process.

MB

✔️

✔️

os.mem\_process.walsender

The amount of the memory that is used by the walsender process.

MB

✔️

✔️

os.mem\_process.postmaster

The amount of the memory that is used by the postmaster process.

MB

✔️

✔️

Memory usage

os.mem\_usage.total

The memory usage of the server.

%

✔️

✔️

IOPS

os.iops.total

The disk read and write IOPS of the server.

Counts/s

❌

✔️

os.iops.read

The disk read IOPS of the server.

Counts/s

❌

✔️

os.iops.write

The disk write IOPS of the server.

Counts/s

❌

✔️

os.iops.limit

The baseline IOPS limit of the disk.

Counts/s

❌

✔️

os.iops.burst\_limit

The burst IOPS limit of the disk.

**Note**

This metric is available for premium performance disks that have the burst I/O feature enabled.

Counts/s

❌

✔️

os.iops.data

The IOPS of the local data disk.

Counts/s

✔️

❌

os.iops.wal

The IOPS of the local log disk.

Counts/s

✔️

❌

I/O throughout

os.iothroughput.total

The disk read and write throughput of the server.

MB/s

❌

✔️

os.iothroughput.read

The disk read throughput of the server.

MB/s

❌

✔️

os.iothroughput.write

The disk write throughput of the server.

MB/s

❌

✔️

os.iothroughput.limit

The baseline I/O bandwidth limit of the disk.

MB/s

❌

✔️

os.iothroughput.burst\_limit

The burst I/O bandwidth limit of the disk.

**Note**

This metric is available for premium performance disks that have the burst I/O feature enabled.

MB/s

❌

✔️

os.iothroughput.data

The throughput of the local data disk.

MB/s

✔️

❌

os.iothroughput.wal

The throughput of the local log disk.

MB/s

✔️

❌

I/O usage

os.io\_usage.iops\_usage

IOPS utilization

%

❌

✔️

os.io\_usage.iops\_burst\_ratio

Burst IOPS rate

%

❌

✔️

os.io\_usage.mbps\_usage

I/O bandwidth usage

%

❌

✔️

os.io\_usage.mbps\_burst\_ratio

Burst I/O bandwidth rate

%

❌

✔️

Disk usage

os.fs\_usage.total

The disk usage of the server.

%

❌

✔️

Disk space

os.fs\_size.used

The used disk space of the server.

MB

❌

✔️

os.fs\_size.total

The total disk space of the server.

MB

❌

✔️

os.fs\_size.log\_dir

The size of log files. This includes audit log files, error log files, and slow SQL log files.

MB

✔️

✔️

os.fs\_size.wal\_dir

The size of write-ahead logging (WAL) files.

MB

✔️

✔️

os.fs\_size.base\_dir

The size of data files. This excludes log files and WAL files.

MB

✔️

✔️

**Database metrics**

**Note**

For more information about the metrics in the following table, see [PostgreSQL Documentation](https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-STATS-VIEWS).

**Classification**

**Metric**

**Description**

**Unit**

**Instances equipped with local SSDs**

**Instances equipped with standard SSDs or ESSDs**

Connections

db.connections.active

The number of active connections.

Counts

✔️

✔️

db.connections.waiting

The number of connections in the waiting state.

Counts

✔️

✔️

db.connections.idle

The number of connections in the idle state.

Counts

✔️

✔️

db.connections.total

The number of connections.

Counts

✔️

✔️

db.connections.spec

The maximum number of connections that are allowed.

Counts

✔️

✔️

SQL

db.sql.tup\_returned

The number of rows that are returned per second.

Tuples/s

✔️

✔️

db.sql.tup\_fetched

The number of rows that are read per second.

Tuples/s

✔️

✔️

db.sql.tup\_inserted

The number of rows that are inserted per second.

Tuples/s

✔️

✔️

db.sql.tup\_deleted

The number of rows that are deleted per second.

Tuples/s

✔️

✔️

db.sql.tup\_updated

The number of rows that are updated per second.

Tuples/s

✔️

✔️

Slow SQL statements

db.slow\_sql.one\_second

The number of SQL statements that have been running for 1 second.

Counts

✔️

✔️

db.slow\_sql.three\_seconds

The number of SQL statements that have been running for 3 seconds.

Counts

✔️

✔️

db.slow\_sql.five\_seconds

The number of SQL statements that have been running for 5 seconds.

Counts

✔️

✔️

Long transactions

db.long\_transactions.active\_one\_second

The number of transactions that have been running for 1 second.

Counts

✔️

✔️

db.long\_transactions.active\_three\_seconds

The number of transactions that have been running for 3 seconds.

Counts

✔️

✔️

db.long\_transactions.idle\_one\_second

The number of transactions that have been idle for 1 second.

Counts

✔️

✔️

db.long\_transactions.idle\_three\_seconds

The number of transactions that have been idle for 3 seconds.

Counts

✔️

✔️

db.long\_transactions.idle\_five\_seconds

The number of transactions that have been idle for 5 seconds.

Counts

✔️

✔️

db.long\_transactions.two\_pc\_one\_second

The number of two-phase transactions that have been running for 1 second.

Counts

✔️

✔️

db.long\_transactions.two\_pc\_three\_seconds

The number of two-phase transactions that have been running for 3 seconds.

Counts

✔️

✔️

db.long\_transactions.two\_pc\_five\_seconds

The number of two-phase transactions that have been running for 5 seconds.

Counts

✔️

✔️

Temporary files

db.temp.temp\_files

The number of temporary files that are generated per second.

Counts/s

✔️

✔️

Temporary file size

db.temp.temp\_bytes

The size of temporary files that are generated per second.

Bytes/s

✔️

✔️

Maximum transaction ID

db.age.max\_age.

The maximum transaction ID on the RDS instance.

xids

✔️

✔️

Synchronization latency to read-only instances

db.ro\_replica.replay\_lag

The latency at which the attached read-only RDS instances replay logs.

s

✔️

✔️

db.ro\_replica.write\_lag

The latency at which the attached read-only RDS instances write data.

s

✔️

✔️

db.ro\_replica.flush\_lag

The latency at which the attached read-only RDS instances flush data.

s

✔️

✔️

Database memory distribution

db.mem\_size.spec

The memory size of the instance type.

MB

✔️

✔️

db.mem\_size.shared\_buffer

The amount of the shared\_buffer memory that is used.

**Note**

The level 1 cache memory remains unchanged after up to 25% of cache memory is used.

MB

✔️

✔️

db.mem\_size.rss

The amount of the RSS memory that is used.

**Note**

This metric indicates the amount of memory that is allocated to the PostgreSQL process by using the malloc() function. The value of this metric is related to the number of connections and the SQL statements that are running. This metric and the `db.mem_size.cache` metric share 75% of all memory in a flexible manner. The value of this metric is typically about 10%.

-   If the memory allocated to the PostgreSQL process exceeds 75% of all memory, an out-of-memory (OOM) error occurs in the PostgreSQL process.
    
-   If the value of this metric increases, the value of the `db.mem_size.cache` metric decreases.
    

MB

✔️

✔️

db.mem\_size.free

The free memory.

**Note**

The free memory will gradually be used up. PostgreSQL allocates the free memory to db.mem\_size.cache as much as possible. This helps make full use of the instance memory.

MB

✔️

✔️

db.mem\_size.cache

The amount of the memory that is used as page cache.

**Note**

This metric indicates the amount of memory that is used as the level 2 cache. This metric and the `db.mem_size.rss` metric share 75% of all memory in a flexible manner. The value of this metric is typically about 65%.

-   The memory occupied by the level-2 cache can be reclaimed to prevent OOM errors.
    
-   To make full use of the instance memory, PostgreSQL allocates as much `db.mem_size.free` memory as possible to `db.mem_size.cache`.
    

MB

✔️

✔️

Available database memory

db.mem\_available.size

The amount of the available database memory.

**Note**

`available memory = empty memory + quickly revocable cache memory`, when `db.mem_size.rss` continues to increase, this portion of memory will be used to prevent OOM.

MB

✔️

✔️

Database memory availability ratio

db.mem\_available.ratio

The availability ratio of the database memory.

**Note**

-   The proportion of the memory indicated by db.mem\_available.size to all memory is relavant to the Memory Usage metric of the alerting feature that is provided by CloudMonitor. The sum of the values of db.mem\_available.size and Memory Usage is equal to 1. If the available memory is less than 20%, you must increase the ratio of available memory by reducing the number of idle connections, optimizing SQL statements, or increasing the memory capacity.
    
-   For more information about how to calculate the memory usage, see [\[Product/Feature Update\] Optimization of the Memory Usage Metric for ApsaraDB RDS for PostgreSQL Instances That Use Standard SSDs or ESSDs](/help/en/rds/apsaradb-rds-for-postgresql/optimization-of-the-memory-usage-metric-for-an-apsaradb-rds-for-postgresql-instance-with-standard-ssds-or-essds).
    

%

✔️

✔️

Shared buffer hit ratio

db.buffers.hit\_ratio

The proportion of requests for which the requested content is hit in the shared buffers.

%

✔️

✔️

Shared buffer hits

db.buffers.blks\_hit

The number of requests for which the requested content is hit in the shared buffers per second.

Blocks/s

✔️

✔️

I/O

db.io.blks\_read

The number of operations that are performed by the backend process per second to read data from the disks to the buffers.

Counts/s

✔️

✔️

db.io.buffers\_backend

The number of operations that are performed by the backend process per second to write data from the buffers to the disks.

Counts/s

✔️

✔️

db.io.buffers\_checkpoint

The number of operations that are performed by the checkpoint process per second to write data from the buffers to the disks.

Counts/s

✔️

✔️

db.io.buffers\_clean

The number of operations that are performed by the bgwriter process per second to write data from the buffers to the disks.

Counts/s

✔️

✔️

db.io.buffers\_backend\_fsync

The number of times that the backend process calls the fsync() function on the disks per second.

Counts/s

✔️

✔️

Checkpoint quantity

db.checkpoint.checkpoints\_timed

The number of checkpoint processes that are scheduled by the database engine per second.

Counts/s

✔️

✔️

db.checkpoint.checkpoints\_req

The number of checkpoint processes that are requested by the user per second.

Counts/s

✔️

✔️

TPS

db.transactions.xact\_commit

The number of write transactions that are committed per second.

Counts/s

✔️

✔️

db.transactions.xact\_rollback

The number of write transactions that are rolled back per second.

Counts/s

✔️

✔️

Transaction statuses

db.transactions.active

The number of transactions in the active state.

Counts

✔️

✔️

db.transactions.waiting

The number of transactions in the waiting state.

Counts

✔️

✔️

db.transactions.idle

The number of transactions in the idle state. We recommend that you check and process these transactions at the earliest opportunity.

Counts

✔️

✔️

Swell point in time

db.swell.swell\_time

The execution duration of the longest transaction.

s

✔️

✔️

ReplicationSlot latency

db.slots.max\_slot\_wal\_delay

The maximum latency that is allowed for the replication slot to replicate WAL records. The WAL records that follow the replication start position must be retained. If the replication start position indicates a WAL record that has a relatively high log sequence number (LSN), WAL records may pile up. In this case, we recommend that you make sure these WAL records are processed at the earliest opportunity.

MB

✔️

✔️

Checkpoint write duration

db.checkpoint.checkpoints\_sync\_time

The amount of time that the checkpoint process spends per second in running the fsync() function on the disks.

ms/s

✔️

✔️

db.checkpoint.checkpoints\_write\_time

The amount of time that the checkpoint process spends per second in writing data from the buffers to the disks.

ms/s

✔️

✔️

PgBouncer connections

db.pgbouncer.client\_connections.active

The number of active connections on the client.

**Note**

You can view the monitoring metrics of connection pools in Enhanced Monitoring only after you [enable the connection pool feature](/help/en/rds/apsaradb-rds-for-postgresql/use-pgbouncer-to-enable-or-disable-connection-pooling).

Counts

❌

✔️

db.pgbouncer.client\_connections.waiting

The number of waiting connections on the client.

Counts

❌

✔️

db.pgbouncer.server\_connections.active

The number of active connections on the server.

Counts

❌

✔️

db.pgbouncer.server\_connections.idle

The number of idle connections on the server.

Counts

❌

✔️

db.pgbouncer.total\_pooled\_connections

The total number of connections in a connection pool.

Counts

❌

✔️

db.pgbouncer.num\_pools

The number of connection pools.

Counts

❌

✔️

## Related API operations

**API operation**

**Description**

[DescribeDBInstancePerformance](/help/en/rds/api-query-performance-metrics#doc-api-Rds-DescribeDBInstancePerformance)

Queries the performance data of an ApsaraDB RDS instance.

[DescribeAvailableMetrics](/help/en/rds/api-query-available-enhanced-monitoring-metrics#doc-api-Rds-DescribeAvailableMetrics)

Queries the list of available Enhanced Monitoring metrics.

[ModifyDBInstanceMetrics](/help/en/rds/api-modify-displayed-enhanced-monitoring-metrics#doc-api-Rds-ModifyDBInstanceMetrics)

Modifies displayed Enhanced Monitoring metrics.

[DescribeDBInstanceMetrics](/help/en/rds/api-query-enabled-enhanced-monitoring-metrics#doc-api-Rds-DescribeDBInstanceMetrics)

Queries enabled Enhanced Monitoring metrics.
