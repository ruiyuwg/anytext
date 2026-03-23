This topic describes how to configure a maintenance window for an ApsaraDB RDS for MariaDB instance. After you configure a maintenance window for your RDS instance, the backend system maintains your RDS instance during the maintenance window. This ensures the stability of your RDS instance. The default maintenance window spans from 02:00 to 06:00. We recommend that you set the maintenance window to an off-peak hour based on your business requirements. This helps prevent interruptions to your workloads.

## Usage notes

-   Before the maintenance starts, the system sends emails to the contacts that are associated with your Alibaba Cloud account. We recommend that you check your email box on a regular basis to obtain up-to-date information.
    
-   To ensure the stability of the maintenance, the RDS instance changes to the Maintaining Instance state before the maintenance window starts. When the RDS instance is in this state, database access and query operations such as performance monitoring are not affected. However, except for account management, database management, and IP address whitelist configuration, modification operations such as upgrade, downgrade, and restart are temporarily unavailable.
    
-   During the maintenance window, one or two transient connections may occur. Make sure that your application is configured to automatically reconnect to your RDS instance.
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic).
    
2.  In the upper-left corner of the page that appears, select the region in which your RDS instance resides.
    
3.  Find the RDS instance. Then, click the instance ID or click **Manage** in the **Actions** column.
    
4.  In the **Configuration Information** section of the page that appears, click **Settings** to the right of **Maintenance Window**.
    
5.  Select a maintenance window and click **Yes**.
    
    **Note**
    
    The time zone of the displayed maintenance window is the same as that of the computer used to log on to the ApsaraDB RDS console.
    

## Related operations

**Operation**

**Description**

[ModifyDBInstanceMaintainTime](/help/en/rds/api-modify-the-maintenance-time#doc-api-Rds-ModifyDBInstanceMaintainTime)

Modifies the maintenance window of an instance.
