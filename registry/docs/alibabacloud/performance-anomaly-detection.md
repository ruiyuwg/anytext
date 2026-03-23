Database Autonomy Service (DAS) uses machine learning and intelligent algorithms to monitor and predict the anomalies in the core metrics of database instances. DAS also provides the one-click diagnostics feature to help you identify root causes.

## Prerequisites

Your database instance must meet the following requirements:

-   Your database instance is an ApsaraDB RDS for MySQL instance.
    
-   The database instance is connected to DAS and is in the **Normal Access** state. For more information, see [Connect an Alibaba Cloud database instance to DAS](/help/en/das/user-guide/connect-an-alibaba-cloud-database-instance-to-das#multiTask596).
    

## Procedure

1.  Log on to the [DAS console](https://hdm.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Instance Monitoring**.
    
3.  On the page that appears, find the database instance that you want to manage and click the instance ID. The instance details page appears.
    
4.  In the left-side navigation pane, click **Dashboard**. On the page that appears, click the **Exception Detection** tab.
    
5.  On the **Exception Detection** tab, specify a time range to view the detection and prediction results of metrics within the specified time range.
    
    **Note**
    
    When you select a time range, the end time must be later than the start time, and the interval between the start time and the end time cannot exceed seven days.
    
    -   Click **More Metrics** and specify metrics that need to be detected and predicted. For more information about metrics, see the [Metrics](#section-133-55y-7e1) section of this topic.
        
    -   In the **Exception Information** section, click **Diagnose** in the Diagnose column of a metric. In the **Diagnostic Tree** dialog box, view the overall performance of the database instance and figure out the cause of the exception.![异常点信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8262191661/p466680.png)
        
    

## Metrics

DAS supports the following metrics for anomaly detection.

**Metric**

**Description**

tps

The transactions per second (TPS).

qps

The queries per second (QPS).

active\_session

The number of active sessions.

delete\_ps

The average number of DELETE statements that are executed per second.

insert\_ps

The average number of INSERT statements that are executed per second.

update\_ps

The average number of UPDATE statements that are executed per second.

select\_ps

The average number of SELECT statements that are executed per second.

bytes\_received

The average number of bytes that are received from all clients per second

bytes\_sent

The average number of bytes that are sent to all clients per second

innodb\_bp\_hit

The read hit ratio of the InnoDB buffer pool.

innodb\_data\_written

The average number of bytes that are written to the InnoDB table per second.

innodb\_data\_read

The average number of bytes that are read from the InnoDB table per second.

mysql.innodb\_log\_writes

The average number of physical writes to the InnoDB redo log file per second.

innodb\_rows\_deleted

The average number of rows that are deleted from the InnoDB table per second.

innodb\_rows\_read

The average number of rows that are read from the InnoDB table per second.

innodb\_rows\_inserted

The average number of rows that are inserted into the InnoDB table per second.

innodb\_rows\_updated

The average number of rows that are updated in the InnoDB table per second.

mysql.mem\_usage

The memory usage of the ApsaraDB RDS for MySQL instance in the entire operating system.

mysql.cpu\_usage

The CPU utilization of MySQL processes. The maximum value of this metric is 100% for Alibaba Cloud database instances.
