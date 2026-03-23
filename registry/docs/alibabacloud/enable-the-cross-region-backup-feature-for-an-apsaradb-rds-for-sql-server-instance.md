This topic describes how to use the cross-region backup feature for an ApsaraDB RDS for SQL Server instance. After you enable the cross-region backup feature, the backup files of the RDS instance are automatically replicated from the source region to the specified destination region. You can use this feature for regulatory compliance and disaster recovery.

**Note**

-   For more information about how to use the default backup feature for an RDS instance, see [Back up an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#concept-l1m-xgn-ydb).
    
-   For more information about how to use the cross-region backup feature for an RDS instance, see [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443).
    
-   For more information about how to use the cross-region backup feature for an ApsaraDB RDS for PostgreSQL instance, see [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2054022).
    

## Differences between cross-region backups and default backups

**Item**

**Cross-region backup**

**Default backup**

Default status

By default, the feature is disabled. If you want to use the cross-region backup feature, you must manually enable the feature.

By default, the feature is enabled.

Backup storage

Cross-region backup files are stored in a different region rather than the source region.

Default backup files are stored in the source region.

Restoration

The data of a cross-region backup file can be restored only to a new RDS instance that resides in the destination region.

The data of a default backup file can be restored to one of the following RDS instances:

-   New RDS instance that resides in the same region as the original RDS instance
    
-   Original RDS instance
    

Retention period

If the RDS instance is released, its cross-region backup files are still retained based on the cross-region backup retention period that you specify.

By default, the backup files of an RDS instance are retained for seven days after the RDS instance is released.

## Prerequisites

-   The RDS instance must meet the following requirements:
    
    -   The RDS instance uses a general-purpose or dedicated instance type. Shared instance types are not supported. For more information, see [Instance families](/help/en/rds/product-overview/instance-families).
        
    -   The RDS instance uses the subscription or pay-as-you-go billing method. Serverless RDS instances are not supported. For more information, see [Serverless ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/serverless/).
        
-   The [AliyunServiceRoleForDBS service-linked role is created](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs) by using your Alibaba Cloud account when you use the backup feature of ApsaraDB RDS for the first time.
    

## Billing rules

The following fees are generated if you perform cross-region backups on an RDS instance in the ApsaraDB RDS console:

-   Cross-region storage fee: USD 0.0002 per GB-hour
    
-   Network traffic fees: For more information, see [Network traffic fees](/help/en/dbs/product-overview/network-traffic-fees#task-2039249).
    

**Note**

If your RDS instance contains a large amount of data, we recommend that your use storage plans for Data Disaster Recovery to offset the network traffic fees. For more information, see [Storage fees](/help/en/dbs/getting-started/use-network-plans#task-1953491).

## Usage notes

-   Cross-region backups do not affect default backups. These types of backups can exist at the same time.
    
-   After a default backup is complete, a cross-region backup is triggered. During the cross-region backup process, the original RDS instance replicates the default backup file that is generated to the destination region.
    
-   After you enable the cross-region backup feature, the system checks whether valid backup sets are generated for the RDS instance over the most recent 24 hours. If no valid backup sets are generated over the most recent 24 hours, a full backup is triggered for the RDS instance.
    
-   **Only RDS instances that run RDS Cluster Edition support cross-region snapshot backups**. For more information, see [Comparison between snapshot backup and physical backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#section-cwj-t5p-dr4).
    
-   Cross-region snapshot backup files cannot be downloaded, but they can be used to restore data to a new RDS instance. For more information, see [Restore the data of an ApsaraDB RDS for SQL Server instance across regions](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance-across-regions).
    
-   After you enable the cross-region log backup feature, the original RDS instance checks the valid backup sets that are generated over the most recent 24 hours.
    
    -   If continuous log files are archived following the valid backup sets, the system dumps the archived log files to the destination region.
        
    -   If no continuous binary log files are archived following the valid backup sets, a backup is triggered on the secondary RDS instance.
        

## **Supported backup links and regions**

The cross-region backup feature is supported in specific Alibaba Cloud regions due to network reasons. The following table describes the Alibaba Cloud regions in which the feature is supported.

Backup link

The cross-region backup feature allows you to back up data between regions in the Chinese mainland, the China (Hong Kong) region, and regions outside China. **The destination region must be different from the source region.**

Region

-   **Regions in the Chinese mainland:** China (Beijing), China (Shanghai), China (Hangzhou), China (Shenzhen), China (Qingdao), China (Guangzhou), China (Ulanqab), China (Heyuan), China (Chengdu), China (Hohhot), and China (Zhangjiakou)
    
-   **China (Hong Kong)**
    
-   **Regions outside China:** US (Silicon Valley), US (Virginia), Singapore, Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), UK (London), South Korea (Seoul), and Thailand (Bangkok)
    
-   **Alibaba Finance Cloud:** China East 1 Finance, China East 2 Finance, and China South 1 Finance
    

## Procedure

-   ### **Enable the cross-region backup feature**
    
    1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which the RDS instances reside.
        
    2.  On the **Cross-region Backup** > **Pending Instances** tab, select the RDS instances for which you want to enable the cross-region backup feature and click **Backup Settings**.
        
        **Note**
        
        -   You can also click **Settings** to the right of the RDS instance to enable the cross-region backup feature for **a single RDS instance**.
            
        -   If you do not find the RDS instance for which you want to enable the cross-region backup feature, check whether the RDS instance meets all requirements that are described in **Prerequisites**.
            
        
    3.  Configure the following parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Cross-region Backup Status**
        
        Specifies whether to enable cross-region backup. Select **Enable**.
        
        **Backup Region**
        
        The destination region to which the backup files of the RDS instance are automatically replicated.
        
        **Cross-region Retention Period**
        
        The number of days for which cross-region backup files are retained. Valid values: 7 to 1825. The value 1825 is equivalent to five years.
        
        **Note**
        
        After the RDS instance expires or is released, its cross-region backup files are still retained based on the cross-region backup retention period that you specify. You can perform the following operations to view the cross-region backup files that do not expire: Log on to the ApsaraDB RDS console. In the left-side navigation pane, click Backups. On the page that appears, click the Cross-region Backup tab.
        
        **Cross-region Log Backup Status**
        
        Specifies whether to enable or disable the cross-region log backup feature. After you enable the cross-region log backup feature, the log backup files of the RDS instance are automatically replicated to the specified OSS bucket in the destination region.
        
        **Cross-border compliance agreement**
        
        The relevant agreement. Read and select the relevant agreement.
        
-   ### **Modify the cross-region backup settings of an RDS instance**
    
    1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which the RDS instances reside.
        
    2.  On the Backups page, click the **Cross-region Backup** tab. Click the **Backup Instances** tab and find the RDS instance whose cross-region backup settings you want to modify. Then, click **Settings** in the Cross-region Backup Settings column to modify the cross-region backup settings of the RDS instance.
        
        **Note**
        
        If the RDS instance is released, you can only change the cross-region backup retention period.
        
-   ### **Disable the cross-region backup feature for an RDS instance**
    
    If you no longer require cross-region backups, you can perform the following steps to disable the cross-region backup feature:
    
    1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which the RDS instances reside.
        
    2.  On the **Cross-region Backup** > **Backup Instances** tab, find the RDS instance for which you want to disable cross-region backups. Then, click **Settings** in the Cross-region Backup Settings column.
        
    3.  Change the values of the **Cross-region Backup Status** parameter to **Disabled** and the **Cross-region Retention Period** parameter to **7**. Then, click **OK**.
        
        **Note**
        
        After you disable the cross-region backup feature for your RDS instance, no new cross-region backup files are generated and you are no longer charged for the traffic that is consumed to transmit cross-region backup files. However, you are still charged for the storage of the existing cross-region backup files within the cross-region backup retention period that you specify. The existing cross-region backup files are retained for at least seven days. You can set the cross-region backup retention period to seven days. After the seven-day retention period elapses, all existing cross-region backup files are deleted, and you are no longer charged for the storage of cross-region backup files. For more information about how to specify a cross-region backup retention period, see [Procedure](#section-opw-kjj-ntt).
        
-   ### **View and download the cross-region backup sets of an RDS instance**
    
    1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which the RDS instances reside.
        
    2.  On the **Cross-region Backup** > **Backup Instances** tab, view the cross-region backup files of the RDS instances for which the cross-region backup feature is enabled.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5291455371/p844309.png)
        
    3.  Click the ID of the RDS instance. On the page that appears, click the Data Backup or Log Backup tab. Then, find the backup set that you want to download, and click **Download** in the **Actions** column.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5291455371/p844311.png)
        
    4.  Select **I have learnt the billing rules for backup file download.** and click **Download**.
        
        **Note**
        
        For more information about the billing rules, see [Network traffic fees](/help/en/dbs/product-overview/network-traffic-fees#task-2039249).
        

## **References**

-   After a cross-region backup is complete, you can [restore the data of the original RDS instance by using the generated cross-region backup files](/help/en/rds/apsaradb-rds-for-sql-server/restore-the-data-of-an-apsaradb-rds-for-sql-server-instance-across-regions) to an existing RDS instance or to a new RDS instance that resides in the destination region.
    
-   For more information about how to modify the cross-region backup settings, such as the destination region to which the cross-region backup files can be replicated and the number of days for which the cross-region backup files are retained, or how to disable the cross-region backup feature, see [Procedure](#section-opw-kjj-ntt).
    
-   You can also call the following API operations to perform operations related to the cross-region backup feature:
    
    -   [CheckCreateDdrDBInstance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-checkcreateddrdbinstance-mysql)
        
    -   [CreateDdrInstance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-createddrinstance-mysql)
        
    -   [ModifyInstanceCrossBackupPolicy](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-modifyinstancecrossbackuppolicy-mysql)
        
    -   [DescribeInstanceCrossBackupPolicy](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describeinstancecrossbackuppolicy-mysql)
        
    -   [DescribeCrossBackupMetaList](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describecrossbackupmetalist-mysql)
        
    -   [DescribeCrossRegionBackups](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describecrossregionbackups-mysql)
        
    -   [DescribeCrossRegionLogBackupFiles](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describecrossregionlogbackupfiles-mysql)
        
    -   [DescribeAvailableCrossRegion](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describeavailablecrossregion-mysql)
        
    -   [DescribeCrossRegionBackupDBInstance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describecrossregionbackupdbinstance-mysql)
        

## FAQ

-   After I disable cross-region backups for my RDS instance, why am I still charged for the storage of cross-region backup files?
    
    After you disable the cross-region backup feature for your RDS instance, no new cross-region backup files are generated and you are no longer charged for the traffic that is consumed to transmit cross-region backup files. However, you are still charged for the storage of the existing cross-region backup files within the cross-region backup retention period that you specify. The existing cross-region backup files are retained for at least seven days. You can set the cross-region backup retention period to seven days. After the seven-day retention period elapses, all existing cross-region backup files are deleted, and you are no longer charged for the storage of cross-region backup files. For more information about how to specify a cross-region backup retention period, see [Procedure](#section-opw-kjj-ntt).
    
-   How do the original backup sets expire after the level-2 backup feature is disabled?
    
    -   Cross-region level-2 backup
        
        If you disable the cross-region level-2 backup feature, the original backup sets expire after the cross-region backup retention period that you specified elpases.
        
    -   Intra-region level-2 backup
        
        If you disable the intra-region level-2 backup feature, the level-2 backup sets are retained. However, you cannot view the backup sets, and no fees are generated. You can view the backup sets only after you enable the intra-region level-2 backup feature.
        
-   What resource plan can I use to offset the fees generated for the cross-region backup storage when I perform cross-region backups on an RDS instance in the ApsaraDB RDS console?
    
    No resource plan is available to offset the cross-region storage fees for your RDS instance.
