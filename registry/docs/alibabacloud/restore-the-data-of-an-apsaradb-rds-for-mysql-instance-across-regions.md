If you have created a cross-region backup, you can use the backup files to restore data to a new or existing instance. The destination instance can be in the same region as the source instance or in the destination region where the cross-region backup is stored.

## Prerequisites

You have completed a [cross-region backup](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance).

**Note**

-   For more information about data restoration solutions, see [Data restoration solution overview](/help/en/doc-detail/157519.html#concept-2445988).
    
-   To restore data across regions for an ApsaraDB RDS for SQL Server instance, see [Restore data across regions for SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance-across-regions#concept-405831).
    
-   To restore data across regions for an ApsaraDB RDS for PostgreSQL instance, see [Restore data across regions for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions#task-2056360).
    

## Usage notes

-   If the source database instance has the database proxy feature enabled and does not have a privileged account, you may need to reset the password before you can connect to the new instance.
    
-   Cross-region log backups are synchronized in near real time. The system scans for changes in local binary logs (binlogs) in the source region every 2 seconds. It then incrementally uploads new logs to the destination region. Because of a short delay in scanning and transmission, you might not be able to recover data from the last second in extreme cases, such as an entire region becoming unavailable.
    

## Restore data to a new instance

You can restore data from backup files to a new ApsaraDB RDS for MySQL instance that uses high-performance local disks or cloud disks. This method does not affect the performance of the source instance.

## High-performance local disks

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the navigation pane on the left, click **Backups**. In the top navigation bar, select the region where your RDS instance is located.
    
2.  On the **Cross-region Backup** tab, click the **Backup Instances** tab. Then, click the ID of the source instance to go to the **Cross-region Backup Recovery** page.
    
3.  In the **Actions** column of the target backup set, click **Restore**.
    
4.  Select **Restore To New Instance** and click **OK**.
    
5.  On the **Restore Database** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    -   **Subscription**: A subscription instance is an instance for which you pay an upfront fee. For long-term use, the subscription billing method is more cost-effective than the pay-as-you-go billing method. You are offered lower prices for longer subscription periods.
        
    -   **Pay-as-you-go**: This is a post-paid billing method where you are charged on an hourly basis. This billing method is suitable for short-term use. If you no longer require an instance, you can release it at any time to reduce costs.
        
    
    **Restoration Mode**
    
    -   **By Backup Set**: Restores data from a backup set to a new instance.
        
    -   **By Time Point**: You can restore data to a new instance from any point in time within the log backup retention period.
        
    
    **By Backup Set**
    
    When **Restore Method** is set to **By Backup Set**, select the backup set from which you want to restore data.
    
    **Restore Time**
    
    When **Restore Mode** is set to **By Time**, specify the point in time to which you want to restore the data.
    
    **Note**
    
    Both local and cross-region log backups can be used for point-in-time restore.
    
    **Region**
    
    The region where the new instance is located.
    
    **Zone**
    
    You can set the instance to **Single-zone Deployment** or **Multi-zone Deployment**:
    
    -   **Single-zone Deployment**: The primary and standby nodes are in the same zone.
        
    -   **Multi-zone Deployment** (Recommended): The primary and standby nodes are deployed across different zones for disaster recovery.
        
    
    **Note**
    
    -   After the RDS instance is created, you can view information about the new RDS instance and its secondary RDS instance on the **Service Availability** page.
        
    -   If you select RDS Basic Edition, the database system supports only the single-zone deployment method.
        
    
    **Instance Type**
    
    Each instance type has [a corresponding number of CPU cores, memory, maximum connections, and maximum IOPS](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    
    **Storage Capacity**
    
    The storage space includes the space for data, system files, binary log files, and transaction files.
    
    **Note**
    
    Parameters such as the database engine, version, and edition are the same as those of the source instance and cannot be changed.
    
6.  Click **Next: Instance Configuration**, and then configure the network type, resource group, and the following parameters.
    
    **Category**
    
    **Description**
    
    **Network Type**
    
    -   **Classic Network**: the traditional type of network.
        
    -   **VPC** (Recommended): A virtual private cloud (VPC) is an isolated network that provides higher security and better performance than the classic network. If you select the VPC network type, you must also select the **VPC** and **Primary Node VSwitch**.
        
    
    **Note**
    
    Make sure that the RDS instance and the ECS instance that you want to connect to use the same network type. If you select the VPC network type, they must be in the same VPC. Otherwise, they cannot communicate with each other over the internal network.
    
    **Resource Group**
    
    You can use resource groups to categorize the resources of your Alibaba Cloud account, which helps simplify resource and permission management. You can select an existing resource group or create a new one. If you do not need to group resources, select the **Default Resource Group**.
    
7.  Click **Next: Confirm Order**.
    
8.  Confirm the settings in the **Parameters** section, configure the **Purchase Plan** and **Duration** parameters, read and select Terms of Service, click **Pay Now**, and then complete the payment. You must configure the Duration parameter only when you select the subscription billing method for the RDS instance.
    
    **Note**
    
    If you select the subscription billing method for the new RDS instance, we recommend that you select **Auto-Renew Enabled** below the Duration parameter. This way, you do not need to renew the new RDS instance on a regular basis. This also helps prevent interruptions on your workloads on the new RDS instance if a payment becomes overdue.
    
9.  **Optional.** Log on to the new RDS instance and verify the data. For more information, see [Use a client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance#concept-n1v-qpf-vdb).
    

## Cloud disks

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  Click the **Cross-region Backups** tab and select a region from the **Region of Backup Set** list.
    
4.  In the **Actions** column of the target backup set, click **Restore**.
    
5.  On the **Restore Database** page, configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Billing Method**
    
    -   **Subscription**: A subscription instance is an instance for which you pay an upfront fee. For long-term use, the subscription billing method is more cost-effective than the pay-as-you-go billing method. You are offered lower prices for longer subscription periods.
        
    -   **Pay-as-you-go**: This post-paid billing method charges you on an hourly basis and is suitable for short-term use. If you no longer require an instance, you can release it at any time to reduce costs.
        
    
    **Restoration Mode**
    
    -   **By Backup Set**: Restores data from a backup set to a new instance.
        
    -   **By Point In Time**: Allows you to restore data to a new instance from any point in time within the log backup retention period.
        
    
    **By Backup Set**
    
    When **Restore Method** is set to **By Backup Set**, select the backup set for data recovery.
    
    **Restore Time**
    
    When **Restore Mode** is set to **By Time**, select the point in time to which you want to restore data.
    
    **Note**
    
    Both local and cross-region log backups can be used for point-in-time restore.
    
    **Region**
    
    The region where the new instance is located.
    
    **Zone**
    
    A zone is an independent physical area within a region. Zones in the same region do not have substantial differences. You can create the RDS instance and the ECS instance in the same zone or in different zones.
    
    **Instance Type**
    
    Each instance type has a specific number of CPU cores, memory capacity, maximum number of connections, and maximum IOPS. For more information, see [Primary instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    
    **Storage Capacity**
    
    The storage space includes the space for data, system files, binary log files, and transaction files.
    
6.  Click **Next: Instance Configuration**, and then configure the network type, resource group, and the following parameters.
    
    **Category**
    
    **Description**
    
    **Network Type**
    
    -   **Classic Network**: the traditional type of network.
        
    -   **VPC** (Recommended): A virtual private cloud (VPC) is an isolated network that provides higher security and better performance than the classic network. If you select the VPC network type, you must also select the **VPC** and **Primary Node VSwitch**.
        
    
    **Note**
    
    Make sure that the RDS instance and the ECS instance that you want to connect to use the same network type. If you select the VPC network type, they must be in the same VPC. Otherwise, they cannot communicate with each other over the internal network.
    
    **Resource Group**
    
    You can use resource groups to categorize the resources of your Alibaba Cloud account, which helps simplify resource and permission management. You can select an existing resource group or create a new one. If you do not need to group resources, select the **Default Resource Group**.
    
7.  Click **Next: Confirm Order**.
    
8.  Confirm the settings in the **Parameters** section, configure the **Purchase Plan** and **Duration** parameters, read and select Terms of Service, click **Pay Now**, and then complete the payment. You must configure the Duration parameter only when you select the subscription billing method for the RDS instance.
    
    **Note**
    
    If you select the subscription billing method for the new RDS instance, we recommend that you select **Auto-Renew Enabled** below the Duration parameter. This way, you do not need to renew the new RDS instance on a regular basis. This also helps prevent interruptions on your workloads on the new RDS instance if a payment becomes overdue.
    
9.  **Optional.** Log on to the new RDS instance and verify the data. For more information, see [Use a client or the CLI to connect to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance#concept-n1v-qpf-vdb).
    

## Restore data to an existing instance

**Note**

-   Only instances that use **high-performance local disks** support cross-region data restoration to an existing instance.
    
-   Before you can restore data to an existing instance across regions, you must have at least one available [database- and table-level backup](/help/en/rds/apsaradb-rds-for-mysql/back-up-the-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance) set for the instance.
    

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the navigation pane on the left, click **Backups**. In the top navigation bar, select the region where your RDS instance is located.
    
2.  On the **Cross-region Backup** tab, click the **Backup Instances** tab. Then, click the ID of the source instance to go to the **Cross-region Backup Recovery** page.
    
3.  In the **Actions** column of the target backup set, click **Restore**.
    
4.  Select **Restore To Existing Instance** and click **OK**.
    
5.  In the dialog box that appears, set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Restore Method**
    
    -   **By Backup Set**: Allows you to restore data from a backup set to an existing instance.
        
    -   **By Point In Time**: Restores data to an existing instance from a specific point in time within the log backup retention period.
        
    
    **Region**
    
    The region where the destination instance is located.
    
    **Destination Instance Name**
    
    The destination instance to which you want to restore data.
    
    **Databases And Tables To Restore**
    
    Select the databases and tables that you want to restore.
    
    **Selected Databases And Tables**
    
    Set the names for the restored databases and tables. By default, the suffix `_backup` is added to the original names.
    
6.  Click **OK**.
    

## References

After you create an instance, you must configure a [whitelist](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2#concept-pdr-k2f-vdb) and create an [account](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance#concept-jyq-tc5-q2b). If you want to connect to the instance over the internet, you must also apply for a [public endpoint](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance#concept-nsl-hff-vdb). Then, you can [connect to the instance](/help/en/rds/apsaradb-rds-for-mysql/use-a-client-or-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance#concept-n1v-qpf-vdb).

## Related APIs

**API**

**Description**

[Precheck a cross-region backup](/help/en/rds/api-check-cross-region-backup#doc-api-Rds-CheckCreateDdrDBInstance)

Checks whether an RDS instance has a cross-region backup set that can be used for cross-region restoration.

[Restore data to a new instance across regions](/help/en/rds/api-restore-data-to-a-new-instance-across-regions#doc-api-Rds-CreateDdrInstance)

Restores data to a new instance across regions.

[Modify cross-region backup settings](/help/en/rds/api-modify-cross-region-backup-settings#doc-api-Rds-ModifyInstanceCrossBackupPolicy)

Modifies the cross-region backup settings of an RDS instance.

[Query cross-region backup settings](/help/en/rds/api-query-cross-region-backup-settings#doc-api-Rds-DescribeInstanceCrossBackupPolicy)

Queries the cross-region backup settings.

[Query a list of cross-region data backup files](/help/en/rds/api-query-cross-region-data-backup-files#doc-api-Rds-DescribeCrossRegionBackups)

Queries a list of cross-region data backup files.

[Query a list of cross-region log backup files](/help/en/rds/api-query-cross-region-log-backup-files#doc-api-Rds-DescribeCrossRegionLogBackupFiles)

Queries a list of cross-region log backup files.

[Query available cross-region backup regions](/help/en/rds/api-query-regions-that-support-cross-region-backup#doc-api-Rds-DescribeAvailableCrossRegion)

Queries the destination regions to which you can back up data from the selected region.

[Query the restorable time range for a cross-region backup](/help/en/rds/api-query-the-time-range-to-which-you-can-restore-data-by-using-a-cross-region-backup-set#doc-api-Rds-DescribeAvailableRecoveryTime)

Queries the time range to which data of an instance can be restored.

[Query cross-region backup instances](/help/en/rds/api-query-apsaradb-for-rds-instances-on-which-cross-region-backup-is-enabled#doc-api-Rds-DescribeCrossRegionBackupDBInstance)

Queries the instances for which cross-region backup is enabled in a specified region.
