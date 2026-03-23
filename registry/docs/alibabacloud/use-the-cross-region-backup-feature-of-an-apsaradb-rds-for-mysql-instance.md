ApsaraDB RDS for MySQL offers a cross-region backup (geo-redundancy) feature that automatically backs up data to another region for regulatory compliance or disaster recovery.

**Note**

-   For more information about the default backup feature of MySQL, see [Automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb).
    
-   For more information about cross-region backup for PostgreSQL, see [Cross-region backup for PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2054022).
    
-   For more information about cross-region backup for SQL Server, see [SQL Server cross-region backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-cross-region-backup-feature-for-an-apsaradb-rds-for-sql-server-instance#concept-405443).
    

## Differences between cross-region backup and default backup

**Item**

**Cross-region backup**

**Default backup**

Enabled by default

No. You must enable it manually.

Yes. It is enabled by default.

Backup storage

Backups are stored in another region.

Backups are stored in the same region as the instance.

Backup restoration

You can restore data to:

-   A new instance in the destination region.
    
-   An existing instance.
    

**Note**

ApsaraDB RDS for MySQL instances that use cloud disks can be restored only to new instances in the destination region.

You can restore data to:

-   The source instance.
    
-   A new instance in the current region.
    

Retention period

-   **Instances with Premium Local SSDs**: After an instance is released, existing cross-region backup data is retained based on the original data retention policy. **You are charged for the storage of the retained backup sets**, but not for network traffic. You can:
    
    -   On the **Backup Management** > **Cross-region Backup** page, click an instance ID to view the backup data on the details page.
        
    -   On the **Backup Management** > **Cross-region Backup** page, click **Settings** to change the retention period. You cannot directly delete existing backup sets.
        
-   **Cloud disk instances**: After an instance is released, existing cross-region backup data is no longer retained, and you are not charged for storage.
    

After an instance is released, backups are retained for 7 days by default.

**Note**

Cross-region backups and data restoration use a virtual private cloud (VPC) in non-cross-border scenarios and the Internet in cross-border scenarios.

## Procedure

**Switch to the tab** that corresponds to the storage class of your instance to view the features and instructions for that class.

### Cloud disk instances

### **Prerequisites**

-   The ApsaraDB RDS for MySQL instance meets the following requirements:
    
    -   Major version: 8.0 or 5.7
        
    -   Edition: Basic Edition, High-availability Edition, or Cluster Edition
        
    -   Storage class: Cloud Disk ([Serverless instances](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-serverless) are not supported)
        
    
    **Note**
    
    You can view this information on the **Basic Information** page of the instance.
    
-   If you are using the RDS backup service for the first time, you must use your Alibaba Cloud account to authorize the [service-linked role for Data Disaster Recovery (AliyunServiceRoleForDBS)](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs).
    

### **Billing**

The following fees are generated when you enable cross-region backup for a cloud disk instance in the ApsaraDB RDS console:

**Billable item**

**Destination region**

**Unit Price** **(USD/GB/day)**

Geo-redundant storage fee

China (Beijing), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Chengdu), China (Qingdao), China (Guangzhou), China (Zhangjiakou)

0.0009375

China (Hong Kong), US (Silicon Valley), US (Virginia), Singapore, Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), UK (London), South Korea (Seoul), Thailand (Bangkok)

0.001125

Network traffic fee

For billing details in each region, see [Network fees](/help/en/dbs/product-overview/network-traffic-fees).

**Note**

If your data volume is large, you can use a [DBS network plan](/help/en/dbs/getting-started/use-network-plans#task-1953491) to offset network fees.

### **Notes**

If you enable cross-region backup in the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/), note the following:

-   Cross-region backup supports backing up data only to a region other than the source region. You cannot restore data to the source region.
    
-   Cross-region backup does not affect default backups. Both types of backups can coexist. Local backups are copied to the destination region.
    
-   After a default backup is complete, a cross-region backup is triggered. The default backup is then dumped to a cross-region backup storage device.
    
-   After you enable cross-region backup, the system does not automatically trigger a backup.
    
-   After you enable cross-region log backup, the system dumps only the logs that are generated after you enable this feature.
    
-   You cannot download cross-region data backup sets and log backup sets for **cloud disk instances**.
    

### **Supported backup links and regions**

Due to network factors, the cross-region backup feature is available only in specific regions. The following table describes the supported regions.

Supported backup links

Data backup is supported between the Chinese mainland, China (Hong Kong), and other regions. **The destination region must be different from the source region**.

Supported regions

-   **The Chinese mainland**: China (Beijing), China (Shanghai), China (Hangzhou), China (Shenzhen), China (Qingdao), China (Guangzhou), China (Ulanqab), China (Heyuan), China (Chengdu), China (Hohhot), and China (Zhangjiakou)
    
-   **China (Hong Kong)**
    
-   **Regions outside China**: US (Silicon Valley), US (Virginia), Singapore, Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), UK (London), South Korea (Seoul), and Thailand (Bangkok)
    

### **Procedure**

**Enable cross-region backup**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find the destination instance. On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Cross-region Backup Settings** section, click **Edit**.
    
    **Note**
    
    If the **Cross-region Backup Settings** section is not displayed, check whether the instance meets the **Prerequisites**.
    
3.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Cross-region Backup**
    
    The switch for the cross-region backup feature. Select **Enable**.
    
    **Backup Region**
    
    The region where backups can be stored. Local backup files are automatically copied to this region.
    
    **Cross-region Backup Retention Period (Days)**
    
    The retention period for cross-region backup files. Valid values: 7 to 1825 days. The maximum retention period is 5 years.
    
    **Note**
    
    For cloud disk instances, after an instance is released, existing cross-region backup data is no longer retained. You are not charged for the storage.
    
    **Cross-region Log Backup**
    
    The switch for the cross-region log backup feature. After you enable this feature, local log backup files are automatically copied to an OSS bucket in the destination region.
    
4.  Read and select the billing description and the data cross-border compliance commitment. Then, click **OK**.
    

**Modify cross-region backup settings**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find the destination instance. On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Cross-region Backup Settings** section, click **Edit** to change the cross-region backup settings.
    
3.  Click **OK**.
    

**Disable cross-region backup**

If you no longer need the cross-region backup feature, you can disable it.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find the destination instance. On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Cross-region Backup Settings** section, click **Edit**.
    
3.  Set Cross-region Backup to **Disabled** and set **Cross-region Backup Retention Period (Days)** to 7 days.
    
    **Note**
    
    After you disable cross-region backup, no network traffic fees or new backup fees are generated. However, existing backups are not immediately deleted. They are retained for their specified retention period and are deleted after they expire.
    
4.  Click **OK**.
    

**Query cross-region backup sets**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find the destination instance. On the **Backup and Restoration** page, click the **Cross-region Backups** tab. Select a **Region of Backup Set** to view all cross-region backups.
    

### Instances with Premium Local SSDs

### **Prerequisites**

-   The RDS instance meets the following requirements:
    
    -   Major version: 8.0, 5.7, or 5.6
        
    -   Edition: High-availability Edition or RDS Enterprise Edition (5.7)
        
    -   Storage class: Premium Local SSDs
        
    
    **Note**
    
    You can view this information on the **Basic Information** page of the instance.
    
-   If you are using the RDS backup service for the first time, you must use your Alibaba Cloud account to authorize the [service-linked role for Data Disaster Recovery (AliyunServiceRoleForDBS)](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs).
    

### **Billing**

The following fees are generated when you enable cross-region backup for an instance with Premium Local SSDs in the ApsaraDB RDS console:

**Billable item**

**Unit price****(USD/GB/hour)**

Geo-redundant storage fee

0.0002

Network traffic fee

For billing details by region, see [Network fees](/help/en/dbs/product-overview/network-traffic-fees).

**Note**

If you have a large data volume, use a [DBS network plan](/help/en/dbs/getting-started/use-network-plans#task-1953491) to cover network costs.

### **Notes**

If you enable cross-region backup in the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/), note the following:

-   You can use cross-region backup to restore data to the source or destination region, but if an instance has [TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#task-jrp-dw4-ydb) enabled, you can restore data only to the source region.
    
-   Cross-region backup does not affect default backups. Both types of backups can coexist. Local backups are copied to the destination region.
    
-   After a default backup is complete, a cross-region backup is triggered. The default backup is then dumped to a cross-region backup storage device.
    
-   When you enable cross-region backup, if no valid backup set is available in the last 24 hours, a backup of the secondary database is triggered.
    
-   When you enable cross-region log backup, the system checks for valid backup sets in the last 24 hours:
    
    -   If continuous logs exist after a valid backup set, these logs are dumped.
        
    -   If no continuous logs exist after a valid backup set, a backup of the secondary database is triggered.
        

### **Supported backup links and regions**

Due to network factors, the cross-region backup feature is available only in specific regions. The following table describes the supported regions:

Supported backup links

You can back up data between the Chinese mainland, China (Hong Kong), and regions outside China, and **the backup destination region must be different from the source region**.

Supported regions

-   **The Chinese mainland**: China (Beijing), China (Shanghai), China (Hangzhou), China (Shenzhen), China (Qingdao), China (Guangzhou), China (Ulanqab), China (Heyuan), China (Chengdu), China (Hohhot), and China (Zhangjiakou)
    
-   **China (Hong Kong)**
    
-   **Regions outside China**: US (Silicon Valley), US (Virginia), Singapore, Japan (Tokyo), Germany (Frankfurt), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Philippines (Manila), UK (London), South Korea (Seoul), and Thailand (Bangkok)
    

### **Procedure**

**Enable cross-region backup for a single instance**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the navigation pane on the left, click **Instances**. In the top navigation bar, select the region where your instance resides.
    
2.  Find the destination instance. In the Actions column, choose **More** > **Cross-region Backup Settings**.
    
    **Note**
    
    -   You can also go to the **Backup and Restoration** page of the instance, click the **Backup Strategy** tab, and in the **Cross-region Backup Settings** section, click **Edit**.
        
    -   If the **Cross-region Backup Settings** option is not displayed, check whether the instance meets the **Prerequisites**.
        
    
3.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Cross-region Backup**
    
    The switch for the cross-region backup feature. Select **Enable**.
    
    **Backup Region**
    
    The region where backups can be stored. Local backup files are automatically copied to this region.
    
    **Cross-region Backup Retention Period (Days)**
    
    The retention period for cross-region backup files. Valid values: 7 to 1825 days. The maximum retention period is 5 years.
    
    **Note**
    
    Even if the RDS instance expires or is released, the retention period of the cross-region backup file is not affected. You can view the unexpired backup files in the cross-region backup menu of the console.
    
    **Cross-region Log Backup**
    
    The switch for the cross-region log backup feature. After you enable this feature, local log backup files are automatically copied to an OSS bucket in the destination region.
    
    Cross-border Compliance Agreement
    
    Read and select the relevant agreement.
    
4.  Click **OK**.
    

**Enable cross-region backup for multiple instances (in batches)**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the navigation pane on the left, click **Backups**. In the top navigation bar, select a region.
    
2.  Click the **Cross-region Backup** > **Pending Instances** tab.
    
3.  Select the instances for which you want to enable cross-region backup and click **Backup Settings**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4162490961/p696652.png)
    
    **Note**
    
    You can also click **Settings** in the Actions column to enable cross-region backup for a single instance.
    
4.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Cross-region Backup Status**
    
    The switch for the cross-region backup feature. Select **Enable**.
    
    **Backup Region**
    
    The region where backups can be stored. Local backup files are automatically copied to this region.
    
    **Cross-region Retention Period**
    
    The retention period for cross-region backup files. Valid values: 7 to 1825 days. The maximum retention period is 5 years.
    
    **Note**
    
    Even if the RDS instance expires or is released, the retention period of the cross-region backup file is not affected. You can view the unexpired backup files in the cross-region backup menu of the console.
    
    **Cross-region Log Backup Status**
    
    The switch for the cross-region log backup feature. After you enable this feature, local log backup files are automatically copied to an OSS bucket in the destination region.
    
    Cross-border Compliance Agreement
    
    Read and select the relevant agreement.
    
5.  Click **OK**.
    

**Modify cross-region backup settings**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find the destination instance. On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Cross-region Backup Settings** section, click **Edit** to change the cross-region backup settings.
    
3.  Click **OK**.
    

**Disable cross-region backup**

If you no longer need the cross-region backup feature, you can disable it.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find the destination instance. On the **Backup and Restoration** page, click the **Backup Strategy** tab. In the **Cross-region Backup Settings** section, click **Edit**.
    
3.  Set Cross-region Backup to **Disabled** and set **Cross-region Backup Retention Period (Days)** to 7 days.
    
    **Note**
    
    After you disable cross-region backup, no network traffic fees or new backup fees are generated. However, existing backups are not immediately deleted. They are retained for their specified retention period and are deleted after they expire.
    
4.  Click **OK**.
    

**Download cross-region backup sets (data backups and log backups)**

After you enable cross-region backup in the ApsaraDB RDS console, you can download the cross-region backup data.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the navigation pane on the left, click **Backup Management**. In the top navigation bar, select a region.
    
2.  On the **Cross-region Backup** > **Backup Instances** tab, find the destination instance and click the instance ID.
    
3.  On the **Data Backup** or **Log Backup** tab, find the backup set that you want to download and click **Download** in the Actions column to download a full backup set or an incremental backup set.
    
4.  Click **Download**.
    
    **Important**
    
    If you download backup files over an internal network, no traffic fees are generated. If you download backup files over the Internet, Internet traffic fees apply. For more information, see [Network fees](/help/en/dbs/product-overview/network-traffic-fees#task-2039249).
    

**Query cross-region backup sets**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find the destination instance. On the **Backup and Restoration** page, click the **Cross-region Backups** tab to view all cross-region backups.
    

## **Related operations**

-   If you have completed a cross-region backup, you can [restore data across regions](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-across-regions#concept-405831) to a new or an existing instance in the destination region.
    
-   To modify the cross-region backup policy, such as the destination region or retention period, or to disable the cross-region backup feature, see the **Procedure** section in this topic.
    
-   You can also call the following API operations to manage cross-region backups:
    
    -   [CheckCreateDdrDBInstance - Precheck whether an instance can be restored across regions](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-checkcreateddrdbinstance-mysql)
        
    -   [CreateDdrInstance - Restore data from another region to a new instance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-createddrinstance-mysql)
        
    -   [RestoreDdrTable - Restore data to an existing instance across regions](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-restoreddrtable-mysql)
        
    -   [ModifyInstanceCrossBackupPolicy - Modify RDS cross-region backup settings](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-modifyinstancecrossbackuppolicy-mysql)
        
    -   [DescribeInstanceCrossBackupPolicy - Query cross-region backup settings](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describeinstancecrossbackuppolicy-mysql)
        
    -   [DescribeCrossBackupMetaList - Query database and table metadata of cross-region backups for an instance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describecrossbackupmetalist-mysql)
        
    -   [DescribeCrossRegionBackups - Query the list of cross-region data backup files for an RDS instance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describecrossregionbackups-mysql)
        
    -   [DescribeCrossRegionLogBackupFiles - Query cross-region log backup files](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describecrossregionlogbackupfiles-mysql)
        
    -   [DescribeAvailableCrossRegion - Query available destination regions for cross-region backups](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describeavailablecrossregion-mysql)
        
    -   [DescribeAvailableRecoveryTime - Query the recoverable time range of a backup](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describeavailablerecoverytime-mysql)
        
    -   [DescribeCrossRegionBackupDBInstance - Query instances that have cross-region backup enabled](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describecrossregionbackupdbinstance-mysql)
        

## FAQ

**How do I separately configure the backup frequency for cross-region backups?**

You cannot set a separate backup frequency for cross-region backups. The source for a cross-region backup is a backup file from the source region. Therefore, the actual frequency of cross-region replication depends on the [backup policy of the source instance](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#87397dc0ee6q5). The following rules apply:

-   If the source instance is configured for daily automatic backups, each successful backup is automatically copied to the destination region.
    
-   Manual backups created after you enable the cross-region backup feature are also automatically synchronized to the destination region after they are completed successfully.
    
-   If multiple backups, both automatic and manual, are created on the same day, each successful backup is copied to the destination region and stored as an independent backup in the geo-redundancy backup list.
    

**Are historical backups created before I enable cross-region backup automatically synchronized to the destination region?**

No. Cross-region backup copies only new backup files created after the feature is enabled. It does not synchronize existing backups to the destination region.

**Why am I still charged after I disable cross-region backup? How do I stop the billing?**

After you disable the cross-region backup feature, different instance types are handled as follows:

-   **Cloud disk instances**
    
    -   If an instance is not released, backups copied to the destination region are retained based on the original data retention policy. Cross-region storage fees continue to apply until the backups expire and are automatically purged.
        
        To delete existing cross-region backup sets and stop billing, [change the cross-region backup retention period to the shortest period](#cf9eb4c6dcskg), such as 7 days. After the retention period expires, the system automatically purges the backup files, and billing for storage stops.
        
    -   When an instance is released, its cross-region backups are deleted, and billing stops immediately.
        
-   **Instances with Premium Local SSDs**
    
    Regardless of whether the instance is released, backups copied to the destination region are retained based on the original data retention policy. Cross-region storage fees continue to apply until the backups expire and are automatically purged.
    
    To delete existing cross-region backup sets and stop billing, [modify the cross-region backup retention period to the shortest period](#cf9eb4c6dcskg), such as 7 days. After the retention period expires, the system automatically deletes the backup files, and you are no longer charged for storage.
    

**Can I manually delete previous cross-region backup files after I disable cross-region backup?**

No. You cannot directly delete existing backup sets. To release previous cross-region backup files, you must modify the backup retention period.

**Does enabling cross-region backup affect instance performance?**

Enabling cross-region backup does not affect source instance performance.

**How do existing backup sets expire after level-2 backup is disabled?**

-   Cross-region level-2 backup
    
    The backups are retained for the current cross-region backup retention period until all backup sets expire.
    
-   Same-region level-2 backup
    
    Level-2 backups are not purged, but they cannot be viewed and do not incur fees. You can view them after you enable level-2 backup again.
    

**Can I use a resource plan to offset the geo-redundant storage fees that are generated after I enable cross-region backup in the ApsaraDB RDS console?**

There are no resource plans to offset cross-region storage fees.

**Will cross-region backups cause connection instability?**

No, it is not.
