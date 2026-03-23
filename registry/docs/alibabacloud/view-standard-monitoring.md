ApsaraDB RDS for SQL Server offers a comprehensive set of performance monitoring metrics. You can view standard monitoring data for an instance, including basic and database metrics, in the RDS console.

## Features

ApsaraDB RDS for SQL Server has upgraded the **Standard Monitoring** page. This page now integrates the [Performance Trend](/help/en/das/user-guide/performance-trends#task-2172635) feature and provides additional features. On the Standard Monitoring page, you can view the following metrics:

**Metric classification**

**Metrics**

**Basic metrics**

**CPU/Memory Usage**, **IOPS Utilization**, **IOPS**, **Instance Storage**, **Instance Disk Usage**, **Network Traffic**, **Throughput Utilization**, **Throughput**

**Database metrics**

**QPS**, **Connections**, **Transactions**, **SQLServer\_BufferHit**, **Full Table Scan Rate**, **SQL Compilation Rate**, **Checkpoint Pages Written**, **Logons**, **Lock Timeouts**, **Deadlocks**, **Lock Wait Times**, **SQL Server AlwaysOn Replication Lag** (Cluster Edition only), **Page Life Expectancy**

## **View standard monitoring**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the navigation pane on the left, click **Monitoring and Alerts**.
    
3.  On the **Standard Monitoring** page, you can perform the following operations:
    
    **Note**
    
    If the monitoring page does not show **Basic Metrics** and **Database Metrics**, you may be on the old version of the page. Click **Previous Version** in the upper-right corner.
    
    -   **Query monitoring metrics for a specific time period**
        
        Select a time range to view the corresponding metrics. You can query monitoring data for the last 30 days.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6213568571/p995861.png)
        
    -   **Enable real-time mode**
        
        Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6213568571/p988483.png) before the time range box to enable real-time mode. The system then auto-refreshes the metrics every 5 seconds. This lets you view real-time changes in database performance.
        
    -   **Change the monitoring frequency**
        
        You can set **Data Granularity** to view metric trends at a different time granularity, such as 5 seconds, 30 seconds, or 1 minute.
        
    -   **View metric descriptions**
        
        In the metric trends graph, you can click ![指标.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0936123571/p672144.png) after each metric to view the sub-metrics and their descriptions.
        
    -   **Switch nodes**
        
        For ApsaraDB RDS for SQL Server instances of the **Cluster Edition**, you can select one or more nodes to view. This lets you compare and analyze metrics across different nodes.
        

## **Metric descriptions**

## Basic metrics

**Metric**

**Metric name**

**Unit**

**Description**

**CPU/Memory Usage**

cpu\_usage

%

CPU usage of the instance as a percentage of the total operating system CPU.

mem\_usage

%

Instance memory usage.

**IOPS Utilization**

iops\_usage\_no\_burst

%

The IOPS usage if I/O burst is disabled for the instance.

iops\_usage\_burst

%

The actual IOPS usage.

iops\_usage\_burst\_ratio

%

The percentage of IOPS improvement after I/O burst is enabled.

**IOPS**

db\_io\_read

Count

The number of read I/O requests per second.

db\_io

Count

The number of I/O requests per second.

db\_io\_write

Count

The number of write I/O requests per second.

iops\_of\_ecs

Count

The upper limit of IOPS on the computing side.

iops\_of\_disk

Count

The upper limit of IOPS on the storage side.

iops\_no\_burst

Count

The upper limit of IOPS if I/O burst is disabled for the instance.

iops\_burst

Count

The upper limit of IOPS.

**Instance Storage**

disk\_mastersize

MB

The disk space occupied by the SQL Server system database master.

disk\_modelsize

MB

The disk space occupied by the model database. The model database is the template for each new database.

disk\_msdbsize

MB

The disk space occupied by the msdb database. The msdb database is used to manage SQL Server Agent jobs and backup history information.

disk\_errorlog

MB

The disk space occupied by error log files. You can clear the error logs of the instance in the console or by calling an API operation.

disk\_xel

MB

The disk space occupied by Extended Event log files.

disk\_trace

MB

The disk space used to store SQL Server trace files, such as SQL Profiler trace files.

disk\_dump

MB

The space occupied by dump files that are generated when the SQL Server kernel encounters an exception.

log\_size

MB

The amount of log space used.

ins\_size

MB

The total amount of space used by the instance.

tmp\_size

MB

The amount of temporary space used.

data\_size

MB

The amount of data space used.

other\_size

MB

The amount of system space used.

**Instance Disk Usage**

disk\_usage

%

The disk space usage.

**Network Traffic**

write\_kb

KB

The average inbound traffic of the instance per second.

read\_kb

KB

The average outbound traffic of the instance per second.

**Throughput Utilization**

mBps\_usage\_burst

%

The actual disk I/O throughput usage.

mBps\_usage\_no\_burst

%

The disk I/O throughput usage if I/O burst is disabled for the instance.

mBps\_burst\_ratio

%

The percentage of disk I/O throughput improvement after I/O burst is enabled.

**Throughput**

mBps\_total

MB/s

The disk I/O throughput per second.

mBps\_read

MB/s

The disk read I/O throughput per second.

mBps\_write

MB/s

The disk write I/O throughput per second.

mBps\_of\_ecs

MB/s

The upper limit of disk I/O throughput per second on the computing side.

mBps\_of\_disk

MB/s

The upper limit of disk I/O throughput per second on the storage side.

mBps\_no\_burst

MB/s

The upper limit of disk I/O throughput per second if I/O burst is disabled for the instance.

mBps\_burst

MB/s

The upper limit of disk I/O throughput per second.

## Database metrics

**Metric**

**Metric name**

**Unit**

**Description**

**QPS**

qps

Count

The average number of SQL statements that are executed per second.

**Connections**

connection\_reset

Count

The total number of logons that are initiated from the connection pool per second.

active\_temp\_tables

Count

The number of active temporary tables.

active\_session

Count

The number of active threads.

active\_cursors

Count

The number of active cursors.

sessions

Count

The total number of connections.

active\_transactions

Count

The number of active transactions.

**Transactions**

transactions

Count

The average number of transactions per second.

write\_transactions

Count

The average number of write transactions per second.

**SQLServer\_BufferHit**

cache\_hit\_ratio

%

The cache hit ratio.

bufferpool\_hit\_ratio

%

The percentage of pages that are found in the buffer cache without having to be read from the disk.

**Full Table Scan Rate**

fullscans

%

The average number of full table scans per second.

**SQL Compilation Rate**

autoparam\_attempts\_per\_sec

Count

The number of auto-parameterization attempts per second.

forced\_parameterizations\_per\_sec

Count

The number of successful forced parameterizations per second.

sql\_compilations

Count

The number of SQL compilations per second.

unsafe\_autoparams\_per\_sec

Count

The number of unsafe auto-parameterization attempts per second.

failed\_autoparams\_per\_sec

Count

The number of failed auto-parameterization attempts per second.

safe\_autoparams\_per\_sec

Count

The number of safe auto-parameterization attempts per second.

resqlcompilations

Count

The number of statement recompilations per second.

**Checkpoint Pages Written**

lazy\_writes

Count

The number of writes to the disk per second.

checkpoint

Count

The number of pages written to the disk by checkpoints per second.

**Logons**

logout

Count

The number of logouts per second.

logins

Count

The number of logons per second.

**Lock Timeouts**

locktimeout

Count

The number of lock requests that timed out per second. This includes requests for NOWAIT locks.

**Deadlocks**

deadlock

Count

The number of deadlocks that occurred per second.

**Lock Wait Times**

average\_latch\_wait\_time

ms

The average wait time for latch requests.

table\_lock\_escalations\_per\_sec

Count

The number of times locks on a table were escalated to the TABLE or HoBT granularity.

average\_lock\_wait\_time

ms

The average wait time for lock requests.

total\_latch\_wait\_time\_ms

ms

The total latch wait time in the last second.

lock\_requests\_per\_sec

Count

The number of new locks and lock conversions that are requested per second.

lockwaits

Count

The number of lock requests per second for which the caller waited.

latchwaits

Count

The number of latch requests that could not be granted immediately per second.

lock\_waits

Count

The statistics about processes that are waiting for a lock.

lock\_wait\_time\_ms

ms

The average lock wait time.

**SQL Server AlwaysOn Replication Lag**

ag\_sync\_lag\_secs

s

This metric is displayed only for instances of the Cluster Edition. It indicates the SQL Server AlwaysOn replication lag.

**Page Life Expectancy**

Page\_life\_expectancy

s

The average time that a cached data page stays in memory.
