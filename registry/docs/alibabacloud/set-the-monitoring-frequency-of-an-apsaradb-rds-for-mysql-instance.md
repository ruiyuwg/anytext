You can configure a monitoring frequency for an ApsaraDB RDS for MySQL instance on the monitoring page (old version) to monitor the instance performance in real time. This topic describes how to configure a monitoring frequency for your RDS for MySQL instance on the monitoring page (old version).

**Important**

-   You can configure a monitoring frequency only **on** **the monitoring page (old version)**. In this case, some frequencies are not available before you pay for them.
    
-   **On** **the monitoring page (new version)**, the monitoring frequency is set to every 5 seconds and cannot be changed. You are not charged fees for the features on the monitoring page (new version).
    

## Introduction

On the monitoring page (old version) of an RDS instance, the following monitoring frequencies are supported to ensure that you can monitor the instance performance in real time:

-   Every 5 seconds (paid feature)
    
-   Every 60 seconds
    
-   Every 300 seconds
    

**Note**

RDS allows you to query the monitoring data from the most recent 30 days. You may not be able to query the monitoring data over a time range of more than 30 days.

The following table describes the supported monitoring frequencies.

**Instance type**

**Every 5 seconds**

**Every 60 seconds**

**Every 300 seconds**

RDS High-availability Edition or RDS Enterprise Edition with a memory capacity **less than** 8 GB

Not supported

Supported free of charge

Supported free of charge (This is the default monitoring frequency.)

RDS High-availability Edition or RDS Enterprise Edition with a memory capacity **greater than or equal to** 8 GB

Supported with fees required

Supported free of charge (This is the default monitoring frequency.)

Supported free of charge

RDS Basic Edition

Not supported

Not supported

Supported free of charge (This is the default monitoring frequency.)

RDS Cluster Edition

Not supported

Supported free of charge

Supported free of charge

**Note**

If your RDS instance uses cloud disks, the monitoring frequency is fixed as every 60 seconds. Changes of the monitoring frequency do not take effect.

For more information about how to configure a monitoring frequency for an RDS instance that runs a different database engine, see [Configure a monitoring frequency](/help/en/rds/apsaradb-rds-for-sql-server/set-the-monitoring-frequency-of-an-apsaradb-rds-for-sql-server-instance#concept-ug4-x5p-wdb).

## Billing

-   Billable item: the monitoring frequency of every 5 seconds.
    
-   Billing method: You are charged based on the pay-as-you-go billing method, and fees are deducted once every hour.
    
-   Price: USD 0.012 per hour.
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Monitoring and Alerts**.
    
3.  Click **Old Version** on the right side of the page.
    
    **Note**
    
    You can configure a monitoring frequency only **on** **the monitoring page (old version)**. **On** **the monitoring page (new version)**, the monitoring frequency is set to every 5 seconds and cannot be changed.
    
4.  On the Standard Monitoring tab, click **Set Monitoring Frequency**.
    
5.  In the **Set Monitoring Frequency** dialog box, select a monitoring frequency and click **OK**.
    
    **Note**
    
    The 60 Seconds and 300 Seconds monitoring frequencies are supported free of charge. However, the 5 Seconds monitoring frequency charges you additional fees. For more information, see [Billing](#section-mnp-6pn-xul).
    
    If the RDS instance does not support the 5 Seconds monitoring frequency, a message appears in the **Set Monitoring Frequency** dialog box.
    

## **References**

-   For more information about the supported monitoring metrics, see [View the monitoring information](/help/en/rds/apsaradb-rds-for-mysql/view-the-metrics-of-an-apsaradb-rds-for-mysql-instance#concept-sp4-jgl-jgb).
    
-   For more information about how to view monitoring information **on the monitoring page (new version)**, see [View the monitoring information](/help/en/rds/apsaradb-rds-for-mysql/view-the-metrics-of-an-apsaradb-rds-for-mysql-instance).
    

## Related operation

**Operation**

**Description**

[DescribeDBInstanceMonitor](/help/en/rds/api-query-the-monitoring-frequency-of-an-apsaradb-rds-instance#doc-api-Rds-DescribeDBInstanceMonitor)

Queries the monitoring frequency of an instance.
