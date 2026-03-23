Data Disaster Recovery provides the incremental log backup feature. You can use this feature to back up transaction logs of your database. This way, you can track data operations on the database, such as insert, update, and delete operations, based on the transaction logs. After you enable incremental log backup, you can restore the database to any point in time from the completion of the first full backup to the completion of the last incremental backup. The lifecycle of incremental backup data is the same as that of full backup data. This topic describes how to enable or disable incremental log backup.

## Prerequisites

-   The database that you want to back up supports the incremental log backup feature. For more information, see [Supported database types and features](/help/en/dms/product-overview/supported-database-types-and-features).
    
-   The binary logging feature is enabled for the database that you want to back up.
    
    **Note**
    
    -   By default, the binary logging feature is enabled for an ApsaraDB RDS for MySQL database. If you use a self-managed database, you must manually enable the binary logging feature.
        
    -   For more information about how to enable the binary logging feature for a PolarDB for MySQL database, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301).
        
    

## **Enable incremental log backup**

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
    
2.  In the top navigation bar, choose **Security and Specifications (DBS)** > **Disaster Recovery for Data (DBS)** > **Backup Plan**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner of the DMS console and choose **All Features** > **Security and Specifications (DBS)** > **Disaster Recovery for Data (DBS)** > **Backup Plan**.
    
3.  Find the backup schedule that you want to manage and click **Manage** in the **Actions** column to go to the **Configure Task** page.
    
4.  In the **Task Running Information** section, click **Enable Incremental Log Backup**. In the message that appears, click **OK**.
    
5.  The **Precheck** message appears. After the precheck succeeds, click **Start Task** or click the ![关闭](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9767020071/p561504.png) icon in the upper-right corner of the message.
    
    **Note**
    
    -   If you click **Start Task**, Data Disaster Recovery starts a full backup task and an incremental backup task at the same time.
        
        After the full backup task is complete, you can restore the database to any point in time from the completion of the first full backup.
        
    -   If you click the ![关闭](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9767020071/p561504.png) icon, Data Disaster Recovery does not start a full backup task or an incremental backup task.
        
        The next time a full backup task starts based on your existing scheduling policy of the full backup set, DBS also starts an incremental backup task. After the full backup task is complete, you can restore the database to any point in time from the completion of the first full backup.
        
    -   If the precheck fails, try again as prompted. For more information, see [Common errors and troubleshooting for Data Disaster Recovery](/help/en/dms/support/common-error-reporting).
        
    

## **Disable incremental log backup**

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
    
2.  In the top navigation bar, choose **Security and Specifications (DBS)** > **Disaster Recovery for Data (DBS)** > **Backup Plan**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner of the DMS console and choose **All Features** > **Security and Specifications (DBS)** > **Disaster Recovery for Data (DBS)** > **Backup Plan**.
    
3.  Find the backup schedule that you want to manage and click **Manage** in the **Actions** column to go to the **Configure Task** page.
    
4.  In the **Task Running Information** section, click **Disable Incremental Log Backup**. In the message that appears, click **OK**.
    

**Important**

-   If an incremental backup task is in progress when you disable incremental log backup, the incremental backup task is immediately stopped.
    
-   Data Disaster Recovery no longer generates incremental backup data and clears existing incremental backup sets when they expire.
    

## **References**

[Backup and restoration overview](/help/en/dbs/user-guide/backup-and-restoration-overview)

## **Related API operations**

**API operation**

**Description**

[EnableBackupLog](/help/en/dms/developer-reference/api-dbs-2019-03-06-enablebackuplog)

Enables the incremental log backup feature.

[DisableBackupLog](/help/en/dms/developer-reference/api-dbs-2019-03-06-disablebackuplog)

Disables the incremental log backup feature.

[DescribeIncrementBackupList](/help/en/dms/developer-reference/api-dbs-2019-03-06-describeincrementbackuplist)

Queries a list of incremental backup tasks.
