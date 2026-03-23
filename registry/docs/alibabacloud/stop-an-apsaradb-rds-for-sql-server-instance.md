Stop an ApsaraDB RDS for SQL Server instance to release its computing resources and suspend the instance type fee. Storage and backup fees continue to apply while the instance is stopped.

## Prerequisites

The instance must meet all of the following conditions:

**Condition**

**Requirement**

Instance status

**Running**

Billing method

Pay-as-you-go or [Serverless](/help/en/rds/apsaradb-rds-for-sql-server/serverless/)

Storage type

Enterprise SSD (ESSD)

Instance family

Dedicated or general-purpose

Network type

VPC. Classic network is not supported. To change the network type, see [Change the network type](/help/en/rds/apsaradb-rds-for-sql-server/change-the-network-type-of-an-apsaradb-rds-for-sql-server-instance#concept-zqv-gxx-wdb).

Instance role

Primary instance with no [read-only instances](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance#concept-ghp-wq5-vdb). A primary instance that has read-only instances cannot be stopped, nor can its read-only instances.

SQL Server version

This feature is not supported for instances that run SQL Server 2008 R2 and use local disks. To use this feature, first [upgrade from SQL Server 2008 R2](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-an-apsaradb-rds-for-sql-server-instance-with-local-disks-from-sql-server-2008-r2-to-sql-server-2012-or-sql-server-2016#concept-t13-1wj-dhb).

**Note**

Subscription instances must first [change their billing method to pay-as-you-go](/help/en/rds/apsaradb-rds-for-sql-server/switch-an-apsaradb-rds-for-postgresql-instance-from-subscription-to-pay-as-you-go#task-2441126) before they can be stopped.

## Stop an instance

The instance status transitions from **Running** to **Stopping** to **Stopped**.

**Note**

The console label for this action is **Pause To Use**. Clicking it opens a dialog titled **Stop Instance**.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic).
    
2.  In the left-side navigation pane, click **Instances**.
    
3.  In the top navigation bar, select the region of the instance.
    
4.  Find the target instance and choose **More** > **Pause To Use** in the **Actions** column.
    
5.  In the **Stop Instance** dialog box, click **OK**.
    
6.  On the **Instances** page, verify that the instance status changes to **Stopped**.
    

## Start an instance

The instance status transitions from **Stopped** to **Starting** to **Running**. The transition from **Starting** to **Running** takes about 3 to 5 minutes.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic).
    
2.  In the left-side navigation pane, click **Instances**.
    
3.  In the top navigation bar, select the region of the instance.
    
4.  Find the target instance and choose **More** > **Start Instance** in the **Actions** column.
    
5.  In the **Start Instance** dialog box, click **OK**.
    
6.  On the **Instances** page, verify that the instance status changes to **Running**.
    

**Note**

A primary/secondary failover may occur during startup. This can cause the primary and secondary zones to switch.

## Billing impact

**Instance status**

**Instance type fee**

**Storage space fee**

**Backup set retention fee**

**Running**

Charged

Charged

Charged

**Paused**

Charged

Charged

Charged

**Stopped**

Not charged

Charged

Charged

**Starting**

Not charged

Charged

Charged

After an instance is stopped, the instance type fee stops. [Storage space and backup set retention fees](/help/en/rds/product-overview/billable-items-billing-methods-and-pricing#concept-qxr-pd2-vdb) continue to accrue.

## What happens when an instance is stopped

### Retained

-   **Endpoints:** Internal and public endpoints are preserved. They become usable again after the instance restarts.
    
-   **Storage data:** All data on disk is retained.
    
-   **Latest full backup:** The most recent full backup is always kept, regardless of the retention period.
    
-   **Monitoring data:** Historical monitoring data remains accessible.
    
-   **Pending events:** Scheduled events such as zone migrations or specification changes in a maintenance window are not removed.
    

### Released or cleared

-   **Computing resources:** CPU and memory are released. Because resources are released, the instance may fail to restart due to insufficient inventory. If this occurs, try again later or use a full backup to [restore SQL Server data](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance#concept-o52-hlx-52b).
    
-   **In-memory data:** All data in memory is cleared.
    

### Unavailable while stopped

-   **Connections:** Instance connections are unavailable while the instance is stopped.
    
-   **Backups:** Backup features are unavailable while the instance is stopped. Existing full and incremental backups continue to expire per the retention period. The backup retention period does not pause while the instance is stopped.
    
-   **O&M operations:** Specification changes, zone migrations, and manual restarts are blocked.
    

**Warning**

After a backup expires, you cannot use it to restore data to the corresponding point in time. Alibaba Cloud is not liable for any data loss or other consequences caused by backup expiration.

## FAQ

**After I start a stopped instance, do I need to restore data or perform additional setup?**

No. The instance resumes with its previous configuration and data intact. No restore or reconfiguration is required.

**Does the backup retention period pause while the instance is stopped?**

No. Backups continue to expire on schedule per the backup policy. However, the system always retains the most recent full backup, even if it exceeds the retention period.

**Can a stopped instance restart on a different primary zone?**

Yes. A primary/secondary failover may occur when the instance starts, which can cause the primary and secondary zones to switch.
