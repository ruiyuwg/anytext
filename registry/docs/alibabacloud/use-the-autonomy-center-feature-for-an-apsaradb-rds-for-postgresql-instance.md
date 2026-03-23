Database Autonomy Service (DAS) provides the autonomy center feature for ApsaraDB RDS for PostgreSQL. You can enable the autonomy center feature for your ApsaraDB RDS for PostgreSQL instance to query events that occurred within a specified time range. The events include exceptions, optimization events, and auto scaling events.

## Prerequisites

Your RDS instance runs RDS High-availability Edition.

## Background information

DAS monitors the core metrics of your RDS instance to detect anomalies. If an anomaly is detected, DAS checks sessions, SQL statements, and the capacity of the RDS instance to identify the cause. DAS also provides suggestions on how to optimize performance or mitigate the loss. You can authorize DAS to automatically optimize performance or mitigate the loss.

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, choose **Autonomy Service** > **Diagnostics**.
    
3.  On the page that appears, click the **Autonomy Center** tab.
    
4.  On the **Autonomy Center** tab, view the events that occurred within the specified time range.
    
    -   In the trend chart, view the duration of a specific event and the **CPU Utilization**, **Active Sessions**, and **IOPS** parameters of the RDS instance when the event occurred.
        
    -   Find the event that you want to view and click **Details**.
