After a subscription RDS MySQL instance is released due to expiration, or a pay-as-you-go or Serverless instance is released due to overdue payments or manual release, the instance is moved to the recycle bin. You can unlock, rebuild, or destroy instances in the recycle bin.

**Important**

When an instance is being deleted, it enters a backup state. If the instance is being backed up and the deletion process is not complete (the instance status is **Deleting**), you cannot use the recycle bin feature for this instance. The deletion process may take some time, depending on the amount of data and configuration of the instance. Please wait patiently until the instance status changes to Deleted.

## Sample scenario

Your subscription RDS instance is locked due to expiration. You can renew and unlock the instance in the recycle bin within seven days. After seven days, you can only [rebuild and restore](#section-vbk-v25-52b) the instance in the recycle bin to restore the data of the original instance to a new instance.

## Feature overview

**Recycle bin feature category**

**Specific scenarios**

Scenarios where instances are moved to the recycle bin

-   Manually released pay-as-you-go primary instances.
    
-   Manually released Serverless primary instances.
    
-   Pay-as-you-go or Serverless primary instances that are automatically released by the system due to overdue payments on your Alibaba Cloud account.
    
-   Manually unsubscribed subscription primary instances.
    
-   Subscription primary instances that are automatically released by the system due to expiration.
    

Scenarios where instances are not moved to the recycle bin

-   **Dedicated cluster instances**, **read-only instances** under any circumstances.
    

**Note**

-   If your RDS instance uses a phased-out instance type and is moved to the recycle bin, you can rebuild the RDS instance from the recycle bin to an instance that uses an available instance type. You can also retain the last backup file of your RDS instance before you release the RDS instance. Then, you can use the backup file to rebuild the RDS instance from the recycle bin to an RDS instance that uses an available instance type.
    
-   After an instance is released, the instance backups that meet the following conditions are retained:
    
    -   [RDS MySQL cross-region backup](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443), [RDS SQL Server cross-region backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance), [RDS PostgreSQL cross-region backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance) (must be within the retention period).
        
    -   After an instance for which you have [configured a backup retention policy after instance release](/help/en/rds/apsaradb-rds-for-mysql/retain-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-for-a-long-period-of-time#section-pwm-nbk-ii5) is released or unsubscribed, the data backups are not deleted with the instance and can be downloaded to your computer.
        

### **Time series status and operation permissions**

## Subscription instances

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5127519271/p817128.png)

For example, your subscription RDS instance expired at 00:00:00 on January 4, 2024, and the RDS instance was released at 00:00:26 on January 11, 2024. In this case, you can renew and unlock the RDS instance within the time range from 00:00:00 on January 4, 2024 to 00:00:26 on January 11, 2024, and rebuild and restore the RDS instance within the time range from 00:00:26 on January 11, 2024 to 00:00:00 on January 19, 2024. After 00:00:00 on January 19, 2024, the RDS instance was destroyed.

## Pay-as-you-go or Serverless instances

-   Manual release:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057519271/p817131.png)
    
    For example, you manually released your pay-as-you-go RDS instance at 21:38:33 on January 12, 2024. You can restore the pay-as-you-go RDS instance within the time range from 21:38:33 on January 12, 2024 to 00:00:00 on January 20, 2024. After 00:00:00 on January 20, 2024, the pay-as-you-go RDS instance was destroyed.
    
-   Locked due to overdue payments:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5127519271/p817126.png)
    
    For example, a pay-as-you-go RDS instance was suspended at 21:25:13 on January 5, 2024 due to overdue payments, and was released at 21:38:33 on January 12, 2024. In this case, you can settle the overdue payments and unlock the RDS instance within the time range from 21:25:13 on January 5, 2024 to 21:38:33 on January 12, 2024, and rebuild and restore the RDS instance within the time range from 21:38:33 on January 12, 2024 to 00:00:00 on January 20, 2024. After 00:00:00 on January 20, 2024, the RDS instance was destroyed.
    

**Important**

-   To export data from an instance in the recycle bin, you must first [unlock the instance](#d6fe92de1eu8x) or [rebuild the instance](#section-vbk-v25-52b). After the data is exported, you can [release or unsubscribe from the instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance). For more information about data export, see [Data exporting](/help/en/dms/export-databases).
    
-   Some locked instances are read-only. You can run query statements on these instances but cannot export data from these instances. For more information, see [How do I resolve the issue that the instance status is "Locked"?](/help/en/rds/apsaradb-rds-for-mysql/what-do-i-do-if-my-apsaradb-rds-instance-is-in-the-locking-state)
    

## **Unlock an instance**

### **Settle overdue payments to unlock a pay-as-you-go instance**

If your pay-as-you-go RDS instance is locked due to overdue payments, check the [payment method](https://billingnew.console.alibabacloud.com/?#/account/overview) of your Alibaba Cloud account.

### **Renew a subscription instance to unlock it**

If your subscription RDS instance is locked due to expiration, you can renew the RDS instance in the recycle bin within seven days. If you do not renew the RDS instance within seven days, the RDS instance is released.

1.  Visit the [RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic).
    
2.  In the left-side navigation pane, click **Recycle Bin**, and then select **the region where the target instance is located** at the top of the page.
    
3.  Find the locked instance and click **Unlock** to renew the instance.
    

After the RDS instance is renewed, it is immediately restored to normal.

## Rebuild an instance

### **Prerequisites**

If the storage type of the RDS instance is **Disk**, the network type must be **VPC**.

### **Usage notes**

-   Backup data created by instances with [transparent data encryption (TDE)](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#task-jrp-dw4-ydb) enabled cannot be used to rebuild instances.
    
-   By default, the rebuilt RDS instance uses the same specifications as the original RDS instance and resides in the same zone as the original RDS instance. However, if the specifications of the original RDS instance are no longer available for purchase, you must select available specifications when you restore the original RDS instance to a new RDS instance. For more information about phased-out and available specifications, see [Product specifications](/help/en/rds/apsaradb-rds-for-mysql/specifications-2/).
    
-   After an RDS instance is rebuilt, the data of the original RDS instance is restored to a new RDS instance. However, the new RDS instance does not inherit the ID or endpoint of the original RDS instance. You can change the endpoint of the new RDS instance to the endpoint of the original RDS instance. This way, your applications can connect to the new RDS instance by using the original endpoint. For more information about how to modify the endpoint of an RDS instance, see [Modify the internal and public endpoints and port numbers](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance#section-hwe-7xt-cjf).
    
-   When an RDS instance is moved to the recycle bin, the IP address whitelists of the RDS instance become invalid. After the RDS instance is rebuilt and the data of the RDS instance is restored to a new RDS instance, you must create IP address whitelists for the new RDS instance.
    

### **Procedure**

1.  Visit the [RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic), and then select **the region where the target instance is located** at the top of the page.
    
2.  Click **Recycle Bin**.
    
3.  Find the locked instance and click **Rebuild**.
    
4.  Select the service agreement and click **Confirm Order**.
    
5.  Click **Purchase** (only for subscription instances).
    

### **FAQ**

When my RDS instance is rebuilt and the data of the RDS instance is restored to a new RDS instance, why am I charged more for the new RDS instance?

After your RDS instance is rebuilt and the data of the RDS instance is restored to a new RDS instance, the fee for the new RDS instance may be increased due to the new specifications and expanded storage capacity of the new RDS instance.

**Note**

By default, the rebuilt RDS instance uses the same specifications as the original RDS instance and resides in the same zone as the original RDS instance. However, if the specifications of the original RDS instance are no longer available for purchase, you must select available specifications when you restore the original RDS instance to a new RDS instance. For more information about phased-out and available specifications, see [Product specifications](/help/en/rds/apsaradb-rds-for-mysql/specifications-2/).

## Destroy an instance

**Warning**

When you destroy an instance, all backups except [cross-region backups](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443) are destroyed, including regular data backups, archived backups, and log backups. Proceed with caution.

If an RDS instance is locked due to overdue payments or expiration, you can destroy the RDS instance in the recycle bin.

**Note**

Due to a certain delay in system cache updates, you may not be able to immediately destroy an instance that has just entered the recycle bin. Typically, an instance needs to be in the recycle bin for about 10 minutes before it can be destroyed. Additionally, once an instance enters the recycle bin, billing for it stops immediately.

1.  Visit the [RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic).
    
2.  In the left-side navigation pane, click **Recycle Bin**, and then select **the region where the target instance is located** at the top of the page.
    
3.  Find the target instance and click **Destroy**. In the dialog box that appears, click **OK**.
    

## References

-   [Overdue payments](/help/en/rds/product-overview/overdue-payments#concept-drz-ml2-vdb)
    
-   [Release or unsubscribe from an instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance#concept-r1p-jgj-wdb)
