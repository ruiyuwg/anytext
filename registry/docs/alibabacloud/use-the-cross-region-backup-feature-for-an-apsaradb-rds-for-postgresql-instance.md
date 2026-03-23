This topic describes how to use the cross-region backup feature for an ApsaraDB RDS for PostgreSQL instance. After you enable the cross-region backup feature, the backup files of the RDS instance are automatically replicated from the source region to the destination region. You can use this feature for regulatory compliance and disaster recovery.

**Note**

-   For more information about how to use the default backup feature for an ApsaraDB RDS for PostgreSQL instance, see [Back up an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#concept-l1m-xgn-ydb).
    
-   For more information about how to use the cross-region backup feature for an ApsaraDB RDS for MySQL instance, see [Cross-region backup](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443).
    
-   For more information about how to use the cross-region backup feature for an ApsaraDB RDS for SQL Server instance, see [Use the cross-region backup feature](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#concept-405443).
    

## Differences between cross-region backups and default backups

**Item**

**Cross-region backup**

**Default backup**

Default configuration

By default, the feature is disabled. If you want to use the cross-region backup feature, you must manually enable the feature.

By default, the feature is enabled.

Backup storage

Backup files are stored in a region that is different from the region of the RDS instance.

Backup files are stored in the region in which the RDS instance resides.

Restoration

The data of a cross-region backup file can be restored only to a new RDS instance that resides in the destination region.

Data can be restored to one of the following RDS instances:

-   New RDS instance that resides in the same region as the original RDS instance
    
-   Original RDS instance
    

Retention period

If an RDS instance is released, the backup files are still retained based on the cross-region backup retention period that you specify.

By default, after the original RDS instance is released, its default backup files are retained for seven days.

## Prerequisites

-   The original RDS instance meets the following requirements:
    
    -   If the RDS instance uses Premium Local SSDs, the instance runs PostgreSQL 9.4 or PostgreSQL 10 on RDS High-availability Edition.
        
    -   The RDS instance runs PostgreSQL 10 or later. Serverless RDS instances are not supported.
        
-   The [AliyunServiceRoleForDBS service-linked role is created](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs) by using your Alibaba Cloud account if you use the backup feature of ApsaraDB RDS for the first time.
    
-   The RDS instance does not use a new general-purpose instance type.
    
    **Note**
    
    The new general-purpose instance types provide better scalability and performance and reduce the time to create an RDS instance or change the specifications of an RDS instance. The new general-purpose instance types do not support the cross-region backup feature.
    

-   Before you enable the cross-region backup feature for an RDS instance for which the cloud disk encryption feature is enabled, you must activate your Alibaba Cloud account in the destination region. For more information, see [Use the cloud disk encryption feature](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance), [Enable the cross-region backup feature](#97fc2c0227a1y), and [FAQ](#section-g3z-03g-cl8).
    

## Billing rules

The following fees are generated if you perform cross-region backups on an RDS instance in the ApsaraDB RDS console:

-   Cross-region storage fee: USD 0.0002 per GB-hour
    
-   Network traffic fee. For more information, see [Network traffic fees](/help/en/dbs/product-overview/network-traffic-fees).
    

**Note**

If your RDS instance contains a large amount of data, we recommend that your use storage plans for Data Disaster Recovery to offset the network traffic fees. For more information, see [Storage fees](/help/en/dbs/getting-started/use-network-plans#task-1953491).

## Usage notes

-   Cross-region backups do not affect default backups. These two types of backups can exist on an RDS instance at the same time.
    
-   After a default backup is complete, a cross-region backup is triggered. During the cross-region backup process, the system dumps the generated default backup files of the RDS instance to the destination region.
    
-   After you enable the cross-region backup feature, the original RDS instance checks whether valid data backup files are generated over the most recent 24 hours. If no valid data backup files are generated over the most recent 24 hours, a backup is triggered on the secondary RDS instance of the original RDS instance.
    

## **Supported backup links and regions**

The cross-region backup feature is supported in specific Alibaba Cloud regions due to network reasons. The following table describes the Alibaba Cloud regions in which the feature is supported.

Backup link

The cross-region backup feature allows you to back up data between regions in the Chinese mainland, the China (Hong Kong) region, and regions outside China. **The destination region must be different from the source region.**

Region

-   **Regions in the Chinese mainland:** China (Beijing), China (Shanghai), China (Hangzhou), China (Shenzhen), China (Qingdao), China (Guangzhou), China (Ulanqab), China (Heyuan), China (Chengdu), China (Hohhot), and China (Zhangjiakou)
    
-   **China (Hong Kong)**
    
-   **Regions outside China:** US (Silicon Valley), US (Virginia), Singapore, Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), UK (London), South Korea (Seoul), and Thailand (Bangkok)
    

## **Enable the cross-region backup feature**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find the RDS instance for which you want to enable the cross-region backup feature. In the Actions column, choose **More** > **Cross-region Backup Settings**.
    
    **Note**
    
    -   You can also go to the **Backup and Restoration** page of the RDS instance, click the **Backup Settings** tab, and then click **Edit** in the **Cross-region Backup Settings** section.
        
    -   If the **Cross-region Backup Settings** section is not displayed, you must check whether the RDS instance meets all **prerequisites**.
        
    
3.  Configure the following parameters, select related agreements, and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Cross-region Backup**
    
    Specifies whether to enable the cross-region backup feature. Select **Enable**.
    
    **Backup Region**
    
    Select the destination region to which the backup files of the RDS instance are automatically replicated.
    
    **Cross-region Retention Period**
    
    Specify the retention period of cross-region backup files. Valid values: 7 to 1825. Unit: days. The longest cross-region backup retention period spans five years.
    
    **Note**
    
    After the RDS instance expires or is released, its cross-region backup files are still retained based on the specified retention period. You can log on to the ApsaraDB RDS console and go to the **Backup and Restoration** tab on the **Cross-region Backups** page of your RDS instance to view the cross-region backup files that do not expire.
    
    ****Cross-region Log Backup Status****
    
    Specify whether to enable or disable the cross-region log backup feature. After you enable the cross-region log backup feature, the log backup files of the RDS instance are automatically replicated to an Object Storage Service (OSS) bucket in the destination region.
    
    **Important**
    
    If you cannot enable the cross-region backup feature for an RDS instance for which **cloud disks are used and the** [cloud disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance) **feature is enabled**, your Alibaba Cloud account may not be activated in the destination region. In this case, you must activate your Alibaba Cloud account in the destination region and enable the cross-region backup feature again. For more information, see [FAQ](#section-g3z-03g-cl8).
    

## **Modify the cross-region backup settings**

You can modify the cross-region backup settings, including the destination region and cross-region backup retention period.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  On the Backups page, click the **Cross-region Backup** tab. Click the **Backup Instances** tab and find the RDS instance whose cross-region backup settings you want to modify. Then, click **Settings** in the Cross-region Backup Settings column to modify the cross-region backup settings of the RDS instance.
    
    **Note**
    
    If the RDS instance is released, you can modify only the cross-region backup retention period.
    

## **Disable the cross-region backup feature for an RDS instance**

You can disable the cross-region backup feature at any time based on your business requirements.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  On the Backups page, click the **Cross-region Backup** tab. Click the **Backup Instances** tab and find the RDS instance for which you want to disable the cross-region backup feature. Then, click **Settings** in the Cross-region Backup Settings column.
    
3.  Change the values of the **Cross-region Backup Status** parameter to **Disabled** and the **Cross-region Retention Period** parameter to **7**.
    
    **Note**
    
    After you disable the cross-region backup feature for your RDS instance, no new cross-region backup files are generated and you are no longer charged for the traffic that is consumed to transmit cross-region backup files. However, you are still charged for the storage of the existing cross-region backup files within the cross-region backup retention period that you specify. The existing cross-region backup files are retained for at least seven days. You can set the cross-region backup retention period to seven days. After the seven-day retention period elapses, all existing cross-region backup files are deleted and you are no longer charged for the storage of cross-region backup files. For more information, see [Enable the cross-region backup feature](#97fc2c0227a1y).
    

## **Download the cross-region backup files of an RDS instance**

After a cross-region backup is completed for your RDS instance in the ApsaraDB RDS console, you can download the cross-region backup sets.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Backups**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  On the Backups page, click the **Cross-region Backup** tab. Click the **Backup Instances** tab and click the ID of the RDS instance for which you want to download cross-region backup files.
    
3.  On the **Data Backup** tab or the **Log Backup** tab, click **Download** in the Actions column to download the full data backup file or the incremental backup file.
    
4.  Read and select the agreement, and click **Download**.
    
    **Note**
    
    If you download backup sets over an internal network, the traffic is free of charge. If you download backup sets over the Internet, the traffic is charged. For more information, see [Network traffic fees](/help/en/dbs/product-overview/network-traffic-fees).
    

## **References**

-   After a cross-region backup is complete, you can restore the data of the RDS instance by using the generated cross-region backup files to an existing RDS instance or to a new RDS instance that resides in the destination region. For more information, see [Restore data across regions](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions).
    
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

After I disable the cross-region backup feature for my RDS instance, why am I still charged for the storage of cross-region backup files?

After you disable the cross-region backup feature for your RDS instance, no new cross-region backup files are generated and you are no longer charged for the traffic that is consumed to transmit cross-region backup files. However, you are still charged for the storage of the existing cross-region backup files within the cross-region backup retention period that you specify. The existing cross-region backup files are retained for at least seven days. You can set the cross-region backup retention period to seven days. After the seven-day retention period elapses, all existing cross-region backup files are deleted and you are no longer charged for the storage of cross-region backup files. For more information, see [Enable the cross-region backup feature](#97fc2c0227a1y).

How do the original backup sets expire after the level-2 backup feature is disabled?

-   Cross-region level-2 backup
    
    If you disable the cross-region level-2 backup feature, the original backup sets expire after the cross-region backup retention period that you specified elpases.
    
-   Intra-region level-2 backup
    
    If you disable the intra-region level-2 backup feature, the level-2 backup sets are retained. However, you cannot view the backup sets, and no fees are generated. You can view the backup sets only after you enable the intra-region level-2 backup feature.
    

What resource plan can I use to offset the fees generated for the cross-region backup storage when I perform cross-region backups on an RDS instance in the ApsaraDB RDS console?

No resource plan is available to offset the cross-region storage fees for your RDS instance.

Why is an error reported when I enable the cross-region backup feature for my RDS instance for which the cloud disk encryption feature is enabled?

If you want to enable the cross-region backup feature for your RDS instance for which the cloud disk encryption feature is enabled, you must activate your Alibaba Cloud account in the destination region. For more information, see [Use the cloud disk encryption feature](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance) and [Enable the cross-region backup feature](#97fc2c0227a1y). If the Alibaba Cloud account is not activated in the destination region, an error is reported.

For example, you want to enable the cross-region backup feature for an RDS instance in the China (Beijing) region and want to store the backup files of the RDS instance to the China (Chengdu) region.

You can perform the following operations to activate your Alibaba Cloud account in the China (Chengdu) region: Visit the [ApsaraDB RDS buy page](https://rdsbuy.console.alibabacloud.com/newCreate/rds/PostgreSQL). Set the **Region** parameter to China (Chengdu). On the Instances page, find the RDS instance. Enable the cross-region backup feature and select China (Chengdu) as the destination region. After you set the Region parameter to China (Chengdu) on the ApsaraDB RDS buy page, **you do not need to complete the order**.

**Note**

The preceding operations are used to activate your Alibaba Cloud account in the destination region. This allows you to enable the cross-region backup feature. In this example, the China (Chengdu) region is used as an example.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2230813271/p824377.png)
