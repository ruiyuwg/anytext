AnalyticDB for MySQL lets you quickly recover data. If you accidentally delete data from a cluster, you can restore it using a full backup dataset and logs from the last seven days. This topic describes how to view backup sets, modify the backup cycle, and change the retention period for full backups in the console.

## **Features**

-   **Basic backup**: After you create a cluster, the data backup and log backup features are automatically enabled to perform cluster-level data backups. The backup sets are stored in the same region as the cluster.
    
-   **Cross-region backup**: After you create a cluster, you must [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?spm=5176.12818093.top-nav.ditem-submit.eebd16d0jbMYO0&activeTab=1) to contact technical support to manually enable this feature. After this feature is enabled, full backups of the cluster are automatically copied to a destination region, and log backups of the database are synchronized in real time. The cross-region backup feature provides region-level disaster recovery for AnalyticDB for MySQL.
    

## **Limits**

-   Only data in internal tables can be backed up and restored. Data in external tables or data in lake storage is not supported.
    
-   The cross-region backup feature is not supported for Data Warehouse Edition clusters or clusters in the US (Silicon Valley) and US (Virginia) regions.
    

## Notes

-   For about 10 minutes after a full backup starts, you cannot execute Data Definition Language (DDL) statements on the cluster.
    
-   The log backup feature is enabled by default. Log backup sets are retained for seven days free of charge.
    
-   After a cluster is released, its backup data is also deleted. If you have data that must be retained, export it to OSS in advance. For more information, see [Export data to OSS](/help/en/analyticdb/analyticdb-for-mysql/user-guide/export-data-to-oss#task2264).
    
-   For cross-region backups, the default backup region for clusters in the Chinese mainland is China (Hangzhou). The default backup region for clusters in China (Hangzhou) is China (Beijing). The default backup region for clusters in China (Hong Kong) and other regions outside China is Singapore. The default backup region for clusters in Singapore is China (Hong Kong). To specify a backup region, [submit a ticket](https://smartservice.console.alibabacloud.com/service/create-ticket-intl?spm=5176.12818093.top-nav.ditem-submit.eebd16d0jbMYO0&activeTab=1) to contact technical support.
    
-   After the cross-region backup feature is enabled, all new full backup sets are copied to the destination region. Previous full backup sets are not copied.
    
-   For cross-region backups, the lifecycle of a full backup set copied to the destination region is the same as that of the associated source backup set. If you delete the associated source backup set, the cross-region backup set is also deleted.
    

## **Billing**

-   The latest backup dataset of an AnalyticDB for MySQL cluster is retained at no charge. If a cluster has multiple backup datasets, you are charged for backup storage space on a pay-as-you-go basis for all datasets except the latest one.
    
-   For cross-region backup sets, you are charged for backup storage space on a pay-as-you-go basis. The fees are based on the pricing of the region where the cluster resides.
    

For more information about billing, see [Pricing](/help/en/analyticdb/analyticdb-for-mysql/product-overview/pricing-1-1/).

## **Enable cross-region backup**

1.  Log on to the [AnalyticDB for MySQL console](https://ads.console.alibabacloud.com/). In the upper-left corner of the console, select a region. In the left-side navigation pane, click **Clusters**. Find the cluster that you want to manage and click the cluster ID.
    
2.  In the navigation pane on the left, click **Backup and Restoration**, and then click the **Backup Settings** tab.
    
3.  In the **Cross-region Backup Settings** section, click **Edit**.
    
4.  In the **Cross-region Backup Settings** dialog box, select **Enable**, select the checkbox to agree to the terms of service, and then click **OK**.
    

## View backup sets

1.  In the navigation pane on the left, click **Backup and Restoration**.
    
2.  View the backup sets.
    
    -   Click the **Basic Backup Sets** tab to view the details of the basic backup sets for the cluster, such as the backup start and end times, free quota for backup sets, and backup type.
        
    -   Click the **Cross-region Backup Sets** tab to view the details of the cross-region backup sets for the cluster, such as the backup start and end times, backup set size, and backup region.
        
    
    **Note**
    
    The **Backup Size** displayed in the console varies based on the cluster's product series:
    
    -   For Enterprise Edition, Basic Edition, Data Lakehouse Edition, and Data Warehouse Edition (Elastic Mode) clusters, the **Backup Size** is the actual data size of the target backup set.
        
    -   For Data Warehouse Edition (Reserved Mode) clusters, the backup storage space is the same as the disk space that you selected when you purchased the cluster. Therefore, the displayed **Backup Size** is larger than the actual data size of the target backup set.
        
    

## Modify backup settings

1.  On the **Backup and Restoration** page, click the **Backup Settings** tab.
    
2.  In the **Basic Backup** section, click **Edit**. In the **Backup Settings** dialog box, set the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Data Backup Cycle**
    
    The cycle for automatic data backups.
    
    **Important**
    
    Set the backup cycle to once a week and the data backup retention period to 7 days. This ensures that only one data backup set exists in the cluster to avoid extra backup fees.
    
    **Backup Start Time**
    
    The start time for automatic data backups.
    
    **Important**
    
    The duration of a data backup is affected by the amount of data to be backed up. Set the backup start time to a time during off-peak hours.
    
    **Data Backup Retention Period**
    
    The retention period for data backups. Unit: days. The default retention period is 7 days.
    
    To restore a cluster to a specific point in time, make sure that a complete data backup set exists before that point in time. Set the data backup retention period based on your business needs.
    
    **Important**
    
    The **Data Backup Cycle**, **Backup Start Time**, and **Data Backup Retention Period** for cross-region backups are the same as those for basic backups.
    

## **Delete backup sets**

## Delete basic backup sets

1.  On the **Backup and Restoration** page, click the **Basic Backup Sets** tab.
    
2.  In the **Actions** column for the target backup set, click **Delete**.
    
3.  In the dialog box, click **OK**.
    

## Delete cross-region backup sets

1.  On the **Backup and Restoration** page, click the **Cross-region Backup Sets** tab.
    
2.  In the **Actions** column for the target backup set, click **Delete**.
    
3.  In the dialog box, click **OK**.
    

## **Disable the backup feature**

## Disable basic backup

1.  On the **Backup and Restoration** page, click the **Backup Settings** tab.
    
2.  Click **Modify Backup Settings**. In the **Backup Settings** panel, clear the **Data Backup Cycle** checkbox.
    
3.  Click **OK**.
    

## Disable cross-region backup

1.  On the **Backup and Restoration** page, click the **Backup Settings** tab.
    
2.  In the **Cross-region Backup Settings** section, click **Edit**.
    
3.  In the **Cross-region Backup Settings** dialog box, select **Enable**, select the checkbox to agree to the terms of service, and then click **OK**.
    

## What to do next

You can use an existing backup set to clone the backup data of AnalyticDB for MySQL to a new cluster. For more information, see [Clone a cluster](/help/en/analyticdb/analyticdb-for-mysql/user-guide/clone-a-cluster#multiTask10dd17).
