Viewing performance metrics is essential for database maintenance and troubleshooting. The standard monitoring feature of RDS for MySQL provides a wide range of performance metrics and powerful diagnostic capabilities to detect anomalies and provide solutions.

## Features

The upgraded **Standard Monitoring** feature in RDS for MySQL integrates [Performance Trend](/help/en/das/user-guide/performance-trends#task-2172635) and provides more features.

-   Custom views: The standard monitoring feature provides a wide range of performance metrics and supports custom views. You can select the metrics that you want to monitor.
    
    **Note**
    
    For more information about the performance parameters of each metric, see the [Performance Parameter Table](/help/en/rds/developer-reference/performance-parameters#reference-rdv-5nn-12b).
    
-   **Diagnostic views for common issues**: The service provides several diagnostic views that you can use to quickly identify problems. These views include **Memory OOM Diagnosis**, **Read-only Instance Delay Diagnosis**, **Full Storage Diagnosis**, **CPU Jitter Diagnosis**, and **Large Transaction Recognition Diagnosis**.
    
-   Automatic diagnosis: The standard monitoring feature can detect events on your database instance, perform automatic diagnosis, and provide root cause analysis and suggestions.
    
-   Manual diagnosis: You can select a time range to perform a manual diagnosis.
    

## **View standard monitoring data**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the navigation pane on the left, click **Monitoring and Alerts**.
    
3.  On the **Standard Monitoring** page, select **Standard View** or **Custom View**.
    
    ## Standard View
    
    On the **Standard View** tab, you can select a time range to view the **Performance Events** and **Performance Metrics** for the selected period.
    
    **Note**
    
    When you select a time range, the interval between the start and end times cannot exceed 7 days. You can view data from the last 30 days.
    
    -   **View performance events**
        
        In the event statistics area, you can view statistics information for various types of events within the selected time range. Click **View Details** to open the [View Performance Events](/help/en/rds/apsaradb-rds-for-postgresql/view-performance-events-1) page, where you can view detailed information about anomalous instance activities and optimization events, including events that are scheduled, in progress, or completed.
        
    -   **View performance metrics**
        
        -   **View metrics**
            
            In the default **Classic View**, you can view monitoring metrics for a selected time range.
            
            -   Click **More Metrics** and select the metrics to view their performance trends.
                
            -   You can click ![指标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4134779661/p494937.png) after each metric to view the metrics it contains.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5629537371/p907050.png)
                
            -   Click **Details** on a metric trend graph to zoom in and adjust the time range.
                
            -   Click **Add Trend Comparison** to compare the performance trends of the same metric across different time periods.![Add Trend Comparison](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9670788761/p574811.png)
                
        -   **View event analysis**
            
            In the default **Classic View**, selecting an event level displays the corresponding events in the **MySQL CPU/Memory Utilization** and **Session Connections** trend charts.
            
            You can click an event in a trend chart to view the diagnostic result in the event details.
            
            ![事件监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4031570861/p509527.png)
            
        -   **Diagnose and analyze metrics**
            
            In any metric trend chart, you can select a time range to **Diagnose** by dragging your mouse.
            
        -   **View diagnostic views for common issues**
            
            You can use the following diagnostic views to quickly identify the root cause of issues: **Memory OOM Diagnosis**, **Read-only Instance Delay Diagnosis**, **Full Disk Space Diagnosis**, **CPU Jitter Diagnosis**, and **Large Transaction Recognition Diagnosis**. For more information, see [Using Diagnostic Views](#section-2y8-1c3-rk8).
            
            ![选择视图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9670788761/p574817.png)
            
    
    ## Custom View
    
    On the **Custom View** tab, click **Add Monitoring Dashboard** to view trends for the metrics that you want to monitor. For more information about the performance parameters for each metric, see the [Performance Parameter Table](/help/en/rds/developer-reference/performance-parameters#reference-rdv-5nn-12b).
    
    -   Click **Add Node And Metric Monitoring** to select nodes and metrics to add to the dashboard.
        
    -   You can choose how metrics are displayed: **Merged Display** or **Separate Display**.
        
        -   **Merged View**: Displays multiple metrics in a single trend chart.
            
        -   **Separate Display**: Displays each metric in a separate trend graph.
            
            -   You can use **Chart Layout** to set how many metric trend charts are displayed per row.
                
            -   Click **Details** on a metric trend graph to zoom in and adjust the time range.
                
    

**Note**

On the **Standard Monitoring** page, click the **Old Version** button in the upper-right corner to revert to [the previous monitoring version](#acc6464e93a5q).

## Use diagnostic views

### Memory OOM diagnosis

![内容OOM诊断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9670788761/p574969.png)

You can use the **Memory OOM Diagnosis** view to analyze out-of-memory (OOM) problems.

-   **Memory Usage**:
    
    -   If the InnoDB Buffer Pool usage remains unchanged while the memory usage slowly and continuously increases for a long period, such as more than seven days, a memory leak may have occurred.
        
    -   If the memory usage suddenly increases while the InnoDB Buffer Pool usage remains unchanged, the increase may be caused by traffic spikes.
        
    -   If both the memory and the InnoDB Buffer Pool usage increase, the InnoDB Buffer Pool is being gradually filled, which is normal.
        
-   **Resident Memory**: The amount of physical memory used.
    
-   **Open files**, **Temp File Size**, **Temp Disk Tables**, and **Sort Rows** are common metrics that indicate memory consumption.
    

Memory growth is related to business metrics. SQL statements that cause sudden memory spikes are often untraceable because of OOM. Therefore, we recommend that you:

-   Check business logs to determine the cause of the sudden memory increase.
    
-   Upgrade the memory specifications and enable [SQL Explorer and Audit](/help/en/rds/apsaradb-rds-for-mysql/use-the-sql-explorer-and-audit-feature-on-an-apsaradb-rds-for-mysql-instance#task-2078931). If a sudden memory spike occurs, you can check the running time of SQL queries to determine the cause.
    

### Read-only instance latency diagnosis

![只读实例延迟诊断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9670788761/p574997.png)

You can use the **Read-only Instance Delay Diagnosis** view to diagnose delays for read-only instances.

-   **Active Session**: Check for blocking from metadata locks.
    
    Typically, queries on large amounts of data prevent DDL statements from obtaining metadata locks. In this case, the DDL statements block other sessions, which causes connections to accumulate.
    
-   **DML Rows Processed**, **Pages Requested**, **DML/DDL Operations**, and **Temp Disk Space Used**: Displays common business metrics.
    
-   **Replication Delay**: The latency metric.
    

### Full storage space diagnosis

![空间满问题诊断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9670788761/p575019.png)

You can use the **Diagnosis Of Space Full Problem** view to analyze insufficient space issues.

You can view the types of files that occupy the storage space of the instance and their change trends. The following metrics are commonly associated with storage usage:

-   Data files (user\_data\_size): You can use [Space Analysis](/help/en/rds/apsaradb-rds-for-mysql/use-the-storage-analysis-feature-for-an-apsaradb-rds-for-mysql-instance#concept-1545913) to view the space usage of each database and table, and then scale out or delete unnecessary data. For more information, see [Solutions for a Full Instance Caused by Data Files](/help/en/rds/support/what-do-i-do-if-an-apsaradb-rds-for-mysql-instance-is-in-the-locked-state-because-its-storage-capacity-is-exhausted-by-data-files#concept-nlr-ddb-3gb).
    
-   Temporary files (temp\_file\_size): Temporary tables may be generated when you execute SQL statements to sort and group data or associate tables. Binary log cache files are generated before large transactions are committed. These tables and files occupy storage space. For more information, see [Resolve full instance storage caused by temporary files](/help/en/rds/support/what-do-i-do-if-an-apsaradb-rds-for-mysql-instance-is-in-the-locked-state-because-its-storage-capacity-is-exhausted-by-temporary-files#concept-nqk-bh3-3gb).
    
-   Binary logs (binlog\_size): Large transactions can quickly generate binary logs. These logs occupy storage space. For more information about how to manage binary logs, see [Resolve full instance storage caused by MySQL binary log files](/help/en/rds/support/what-do-i-do-if-the-storage-capacity-of-an-apsaradb-rds-for-mysql-instance-is-exhausted-by-binary-log-files#concept-smh-123-3gb).
    
    **Note**
    
    If your services subscribe to the binary logs of the database, the logs may not be cleared promptly and can occupy space.
    
-   Undo logs (undo\_log\_size): In most cases, long-running queries prevent undo logs from being cleared. You can check for long-running queries that have not been completed.
    
    **Note**
    
    In MySQL 5.6 and earlier, undo logs do not have a separate tablespace.
    
-   Slow log (slowlog\_size): If the slow log uses too much space, you can use the `truncate` command to clear it during off-peak hours.
    
    **Note**
    
    Support for the `truncate` command was added in version 20210630 of MySQL 5.7 and version 20210930 of MySQL 8.0.
    
-   General logs (general\_log\_size): The total size of an instance's error, Performance Agent, and recovery logs, which is typically stable and under 1 GB. If the size **significantly exceeds** this value, please [submit a ticket](https://smartservice.console.alibabacloud.com/?spm=a2c52.21103487.top-nav.ditem-0.7e3d97daNoKIec#/ticket/createIndex) to contact the product team. This metric represents data that is periodically generated by the MySQL kernel, not the size of the general\_log file in MySQL.
    

### CPU jitter diagnosis

![CPU抖动诊断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8670788761/p575077.png)

You can use the **CPU Jitter Diagnostics** view to analyze CPU jitter issues. Relevant metrics include the following:

-   Business metrics:
    
    -   **Page Request**: Typically, Buffer Pool requests fluctuate in sync with CPU utilization.
        
    -   **Rows Processed**: Examine the relationship between CPU utilization and the number of rows processed to determine if a spike in the number of rows corresponds to a change in CPU utilization.
        
    -   **Queries**: View the main types of SQL statements that are executed when CPU utilization changes.
        
-   Connections:
    
    **Thread Running**: High concurrency can cause high CPU utilization. MDL stacking or row locks can also cause a buildup of connections, which increases CPU utilization.
    

Common causes of CPU jitter:

-   Changes in business metrics, such as **Page Request** or **Rows Processed**, can affect CPU utilization. If this occurs, you can select the time range of the change in CPU utilization and execute **Diagnosis** to obtain a detailed root cause analysis.
    
-   An increase in active connections causes CPU consumption. In this case, you must investigate the issue from the business side.
    

### Large transaction diagnosis

![大事务识别诊断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9670788761/p575098.png)

You can use the **Large Transaction Recognition Diagnosis** view to analyze large transaction issues.

-   **Threads Connected**, **Temp File Size**, and **Binlog Space**: These are the three core metrics that indicate a large transaction. A large transaction is present in the database if one of the following events occurs:
    
    -   Active sessions accumulate.
        
    -   The temporary space first increases and then decreases.
        
    -   After the temporary space decreases, the Binlog space increases.
        
-   **Rows Processed**, **Logical Page Write**, and **Queries per Second**: These metrics are used to determine the type of a large transaction.
    
    For example, if there are few queries but many rows are deleted, it indicates a large transaction that deletes data.
    

Large transactions can block binary log writes:

-   When an instance has a large transaction, the temporary tablespace (binlog cache) first increases gradually and then stabilizes.
    
-   When the temporary tablespace is stable, the Binlog space increases. Because binary log writing is globally serial, other transactions are blocked, which causes connections to accumulate.
    
-   If the instance runs RDS High-availability Edition, the probe statements from the high-availability (HA) component on the primary and secondary instances are also blocked, and a primary/secondary failover occurs.
    

We recommend that you split large transactions into small transactions and execute them separately. For example, in a `delete` statement, add a `where` clause to limit the amount of data that is deleted in each operation, splitting a single delete operation into multiple smaller delete operations.

## **References**

-   Common performance issues:
    
    -   [Troubleshoot slow SQL statements on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/troubleshoot-slow-sql-statements-on-an-apsaradb-rds-for-mysql-instance)
        
    -   [Troubleshoot memory consumption issues on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/troubleshoot-memory-consumption-issues-on-an-apsaradb-rds-for-mysql-instance)
        
    -   [Troubleshoot insufficient storage issues on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/troubleshoot-storage-issues-on-an-apsaradb-rds-for-mysql-instance)
        
    -   [Troubleshoot high I/O issues on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/troubleshoot-the-issues-that-cause-high-i-or-o-on-an-apsaradb-rds-for-mysql-instance)
        
    -   [Troubleshoot issues that are caused by an excessive number of active threads on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/troubleshoot-excessive-active-threads-on-an-apsaradb-rds-for-mysql-instance)
        
    -   [High CPU utilization of an RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/what-do-i-do-if-the-cpu-utilization-of-an-apsaradb-rds-for-mysql-instance-or-an-apsaradb-rds-for-mariadb-instance-is-high)
        
    -   [Causes and Solutions for High IOPS Usage on an RDS MySQL Instance](/help/en/rds/apsaradb-rds-for-mysql/what-do-i-do-if-the-iops-usage-of-an-apsaradb-rds-for-mysql-instance-is-high)
        
    -   [Actual memory allocation for RDS for MySQL](/help/en/rds/support/memory-capacity-allocation-of-an-rds-instance)
        
-   You can use the autonomy service to perform performance optimization and diagnosis on your database. For more information, see [Performance Optimization and Diagnosis](/help/en/doc-detail/144875.html).
    

## **Related API**

**API**

**Description**

[DescribeDBInstancePerformance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describedbinstanceperformance-mysql)

Queries the performance data of an RDS instance.

## **Appendix: Legacy monitoring**

#### **Overview of metrics in legacy monitoring**

Legacy monitoring provides the following metrics:

**Metric classification**

**Metric**

Resource Monitoring

Database capacity (RCU), CPU and memory utilization, Disk space, IOPS, Connections, Network traffic.

**Note**

Database capacity (RCU) is displayed only for Serverless ApsaraDB RDS for MySQL instances.

Engine Monitoring

TPS/QPS, InnoDB cache read hit ratio/usage/dirty ratio, InnoDB read/write volume, InnoDB cache requests, InnoDB log reads/writes/fsyncs, Number of temporary tables, MySQL\_COMDML, MySQL\_RowDML, MyISAM read/write operations, MyISAM Key Buffer read/write/utilization rate, MySQL\_ThreadStatus thread status, InnoDB redo log writes per second, MySQL\_ROW\_LOCK, MySQL\_SelectScan

Deployment Monitoring

Secondary node replication thread status, Secondary node replication delay

**Note**

Deployment monitoring is supported only for RDS instances that run RDS High-availability Edition or Cluster Edition.

#### **View legacy monitoring data**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left navigation pane, click **Monitoring and Alerts**.
    
3.  On the **Standard Monitoring** tab, click **Old Version**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2690025571/p995878.png)
    
4.  On the legacy monitoring page, select **Resource Monitoring**, **Engine Monitoring**, or **Deployment Monitoring** and a time range to view the monitoring data. For a Cluster Edition instance, you can also select an instance or node ID. You can only query monitoring data from the past 30 days.
    

#### **Change the monitoring frequency for legacy monitoring**

##### **Frequency configuration policy**

The following table describes the monitoring frequencies that are supported by different instances in legacy monitoring.

**Important**

In legacy monitoring, the monitoring frequency for instances that use cloud disks is fixed at 60 seconds. If you change the frequency, the change does not take effect.

**Instance type**

**5 seconds**

**60 seconds**

**300 seconds**

High-availability Edition with memory **less than** 8 GB or RDS Enterprise Edition (formerly Finance Edition)

Not supported

Supported (free)

Supported (free, default)

Memory **greater than or equal to** 8 GB in High-availability Edition, or RDS Enterprise Edition (formerly Finance Edition)

Supported (paid)

Supported (free, default)

Supported (free)

Basic Edition

Not supported

Not supported

Supported (free, default)

Cluster Edition

Not supported

Supported (free)

Supported (free)

##### **Billing**

In legacy monitoring, the 5-second monitoring frequency is a paid feature. Other monitoring frequencies are free.

-   Billable item: 5-second monitoring frequency.
    
-   Billing method: Pay-as-you-go (billed hourly).
    
-   Price: USD 0.012 per hour.
    

##### **Procedure**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left navigation pane, click **Monitoring and Alerts**.
    
3.  On the right side of the page, click **Return To The Previous Version**.
    
4.  Click **Set Monitoring Frequency** on the legacy monitoring page.
    
5.  In the **Set Monitoring Frequency** dialog box, select a monitoring frequency and click **OK**.
    

##### **Related API**

**API**

**Description**

[DescribeDBInstanceMonitor](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describedbinstancemonitor-mysql)

Queries the legacy monitoring frequency.
