This topic describes how to restore the data of an ApsaraDB RDS for PostgreSQL instance from a cross-region backup file to a new RDS instance. The new RDS instance must reside in the region in which the cross-region backup file is stored.

## Prerequisites

Your RDS instance is backed up across regions. For more information, see [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2054022).

**Note**

-   For more information about data restoration methods, see [Methods to restore an ApsaraDB RDS for PostgreSQL instance](/help/en/doc-detail/444453.html#task-2223561).
    
-   For more information about how to restore the data of an ApsaraDB RDS for MySQL instance across regions, see [Restore the data of an ApsaraDB RDS for MySQL instance across regions](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-across-regions#concept-405831).
    
-   For more information about how to restore the data of an ApsaraDB RDS for SQL Server instance across regions, see [Restore the data of an ApsaraDB RDS for SQL Server instance across regions](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance-across-regions#concept-405831).
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  On the **Backup Instances** tab of the **Cross-region Backup** tab, find the RDS instance and click the ID of the instance.
    
3.  On the page that appears, find the backup set that you want to use, and click **Restore** in the **Actions** column.
    
4.  In the message that appears, click **OK**.
    
    **Note**
    
    You can restore data only to a new instance. You cannot restore data to an existing instance.
    
5.  On the **Restore Database** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    -   **Subscription**: A subscription RDS instance is an instance for which you pay an upfront fee. For long-term usage, the subscription billing method is more cost-effective than the pay-as-you-go billing method. You are charged lower prices for longer subscription periods.
        
    -   **Pay-As-You-Go**: A pay-as-you-go RDS instance is billed per hour based on your actual resource usage. We recommend that you select the pay-as-you-go billing method for short-term use. If you no longer need your pay-as-you-go RDS instance, you can release it to reduce costs.
        
    
    **Restore Method**
    
    -   **By Backup Set**: allows you to restore the data of your RDS instance from a backup set.
        
    -   **By Time**: allows you to restore the data of your RDS instance to a specific point in time. The point in time must be within the specified log backup retention period.
        
    
    **By Backup Set**
    
    The backup set from which you want to restore the data of your RDS instance. This parameter appears only when you set the **Restore Method** parameter to **By Backup Set**.
    
    **By Time**
    
    The point in time to which you want to restore the data of your RDS instance. This parameter appears only when you set the **Restore Method** parameter to **By Time**.
    
    **Note**
    
    Both local and cross-region log backup files can be used to restore the data of your RDS instance to a specific point in time.
    
    **Region**
    
    The region to which the new RDS instance belongs.
    
    **Zone**
    
    A zone is an independent physical location within a region. The **Zone of Primary Node** parameter specifies the zone to which the primary RDS instance belongs. The **Zone of Secondary Node** parameter specifies the zone to which the secondary RDS instance belongs.
    
    You can select the **Single-zone Deployment** or **Multi-zone Development** method.
    
    -   **Single-zone Deployment**: If you select this deployment method, the values of the **Zone of Primary Node** and **Zone of Secondary Node** parameters are the same.
    -   **Multi-zone Development**: We recommend that you select this deployment method to ensure zone-level disaster recovery. If you select this deployment method, the value of the **Zone of Primary Node** parameter differs from the value of the **Zone of Secondary Node** parameter. You must manually configure the **Zone of Primary Node** and **Zone of Secondary Node** parameters.
    
    **Note**
    
    -   After the RDS instance is created, you can view information about the new RDS instance and its secondary RDS instance on the **Service Availability** page.
    -   If you select RDS Basic Edition, the database system consists of only one primary RDS instance and supports only the single-zone deployment method.
    
    **Instance Type**
    
    The instance type of the new RDS instance. Each instance type supports a specific number of CPU cores, memory capacity, maximum number of connections, and maximum IOPS. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    
    **Capacity**
    
    The maximum storage capacity that is provisioned to store data files, system files, binary log files, and transaction files in the instance.
    
    **Duration**
    
    You must configure this parameter only when the Billing Method parameter is set to **Subscription**.
    
    **Note**
    
    The settings of some parameters cannot be modified. These parameters include Database Engine, Version, and Edition. The same settings of these parameters must be specified for both your RDS instance and the new RDS instance.
    
6.  Click Next: Instance Configuration to configure the network type and resource group of the RDS instance.
    
    **Parameter**
    
    **Description**
    
    **Network Type**
    
    The network type of the RDS instance. Select **VPC**. A virtual private cloud (VPC) is an isolated network that provides higher security and better performance than the classic network. If you select the VPC network type, you must configure the **VPC** and **VSwitch of Primary Node** parameters. If you set the Deployment Method parameter to **Multi-zone Deployment** in the previous step, you must also configure the **VSwitch of Secondary Node** parameter.
    
    **Resource Group**
    
    The resource group to which the new RDS instance belongs.
    
7.  Click **Next: Confirm Order**.
8.  Confirm the settings in the **Parameters** section, configure the **Purchase Plan** and **Duration** parameters, read and select Terms of Service, click **Pay Now**, and then complete the payment. You must configure the Duration parameter only when the RDS instance uses the subscription billing method.
    
    **Note** If you select the subscription billing method for the new RDS instance, we recommend that you select **Auto-Renew Enabled**. This way, you do not need to manually renew the new RDS instance on a regular basis. This also helps prevent interruptions on your workloads on the new RDS instance if a payment becomes overdue.
    
9.  **Optional.** Log on to the new RDS instance and verify the data. For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance).
    

## References

After you create an RDS instance, you must configure IP address whitelists or security groups and create accounts. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance#concept-sfx-kdg-wdb) and [Create an account](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance#concept-kxw-k1p-ydb). If you want to connect to the RDS instance over the Internet, you must also apply for a public endpoint. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance#concept-nsl-hff-vdb). After you complete these operations, you can connect to the RDS instance. For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance#concept-stt-3hg-wdb).
