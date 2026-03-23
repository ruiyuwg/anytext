If you want to create a custom monitoring dashboard or compare the statuses of ApsaraDB RDS for SQL Server instances, you can use the monitoring dashboard feature. This feature allows you to specify the RDS instances and metrics that you want to monitor and compare the performance of RDS instances. This provides an overall understanding of the health status of RDS instances.

## Background information

Database Autonomy Service (DAS) provides the monitoring dashboard feature for ApsaraDB RDS for SQL Server instances in phases from May 20, 2022.

## Create a monitoring dashboard

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Maintenance & Monitoring** **\>** **Performance Monitoring**.
    
3.  On the **Performance Monitoring** page, click the **Monitoring Dashboard** tab.
    
4.  On the SQL Server tab, click **Add Monitoring Dashboard**.
    
5.  In the dialog box that appears, configure the **Dashboard Name** parameter and click **OK**.
    
6.  Click **Select Instances and Metrics**, select the RDS instances and the metrics that are required, and then click the ![选择](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6998764561/p438188.png) icon.
    
    **Note**
    
    -   You can select up to 32 RDS instances at a time.
        
    -   For more information about metrics, see [Metrics](#section-khs-7cd-th5).
        
    
    ![选择实例和指标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7975525561/p439147.png)
    
7.  Click **Confirm**.
    
    **Note**
    
    To modify the RDS instances or metrics that you select in the monitoring dashboard, click **Add Instances and Metrics**.
    

## View the metric trends of an RDS instance in the monitoring dashboard

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Performance Center**.
    
3.  On the **Performance Center** page, click the **Monitoring Dashboard** tab.
    
4.  Click the tab for the database engine, select the monitoring dashboard that you want to view, and then specify a time range to view the trend charts of the metrics during the specified time range.
    
    **Note**
    
    When you specify a time range, the end time must be later than the start time, and the interval between the start time and the end time cannot exceed seven days.
    
    -   You can configure the **Instance filtering** parameter to filter for multiple RDS instances and then view and compare the metrics of the RDS instances.
        
    -   You can turn on **Auto Refresh (Every 5 Seconds)** for the system to refresh the trend charts of the metrics every 5 seconds.
        
    -   You can turn on **Linkage Chart** to view the values of different metrics at the same point in time.
        
    -   You can configure **Chart Layout** to specify the number of metric trend charts that can be displayed in each row.
        
    -   You can click **Add Instances and Metrics** to modify the RDS instances or metrics in the dashboard.
        
    -   You can click **Details** in the trend chart of a metric to expand the chart. You can also change the time range to view the changes in the trend of the metric at the specified time range.
        
    -   You can click **Delete** in the trend chart of a metric to delete the chart from the dashboard.
        
    

## Metrics

**Category**

**Metric**

**Description**

SQL Server process

cpu\_usage

The CPU utilization of the RDS instance within the operating system.

db\_io

The number of I/O requests per second.

db\_io\_read

The number of read I/O requests per second.

db\_io\_write

The number of write I/O requests per second.

other\_size

The amount of disk space occupied by system files

log\_size

The amount of disk space occupied by log files.

tmp\_size

The amount of disk space occupied by temporary files.

ins\_size

The total amount of disk space occupied by the RDS instance.

data\_size

The amount of disk space occupied by data files.

Database

qps

The average number of times that SQL statements are executed per second.

connection\_reset

The total number of logon attempts from the connection pool per second.

active\_temp\_tables

The number of active temporary tables.

active\_session

The number of active threads.

active\_cursors

The number of active cursors.

sessions

The total number of connections.

active\_transactions

The number of active transactions.

transactions

The average number of transactions per second.

write\_transactions

The average number of write transactions per second.

read\_kb

The outbound traffic per second of the RDS instance.

write\_kb

The inbound traffic per second of the RDS instance.

Basic monitoring

cache\_hit\_ratio

The hit ratio of the high-speed cache.

bufferpool

The percentage of pages that are found in the high-speed cache to all pages that are read from disks.

fullscans

The average number of full table scans per second.

autoparam\_attempts\_per\_sec

The number of auto parameterization attempts per second.

forced\_parameterizations\_per\_sec

The number of successful forced parameterizations per second.

sql\_compilations

The number of SQL compilations per second.

unsafe\_autoparams\_per\_sec

The number of unsafe auto parameterization attempts per second.

failed\_autoparams\_per\_sec

The number of auto parameterization failures per second.

safe\_autoparams\_per\_sec

The number of safe auto parameterization attempts per second.

resqlcompilations

The number of SQL statement recompilations per second.

lazy\_writes

The number of times that dirty pages are written to disks per second.

checkpoint

The number of dirty pages that the checkpoint operation must write per second.

logout

The number of logouts per second.

logins

The number of logons per second.

locktimeout

The number of lock requests that time out per second, including requests for NOWAIT locks.

deadlock

The number of lock requests that resulted in a deadlock per second.

lock\_requests\_per\_sec

The number of new locks and lock conversions per second.

lockwaits

The number of lock requests that the client waits for per second.

lock\_waits

The statistics of processes waiting for locks.

latchwaits

The number of latch requests that are not immediately granted per second.

lock\_wait\_time\_ms

The average amount of wait time for each lock request that resulted in a wait.

average\_latch\_wait\_time

The average waiting time to request a latch resource.

table\_lock\_escalations\_per\_sec

The number of times that a lock on a table is escalated to the HoBT level or the table level.

average\_lock\_wait\_time

The average waiting time of the requested lock resource.

total\_latch\_wait\_time

The total wait time for locks in the last second.

**Note**

You can click the ![问号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6446764561/p438662.png) icon to the right of a metric on a dashboard to view the description of the metric.
