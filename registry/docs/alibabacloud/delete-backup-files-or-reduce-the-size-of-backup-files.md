This topic describes how to delete or reduce backup files of an ApsaraDB RDS for PostgreSQL instance to reduce backup storage costs.

## Usage notes

-   If you delete backup files, the backup files are **permanently deleted**, and deleted backup files **cannot be restored**.
    
-   The data backup files and log backup files of your RDS instance occupy the backup storage that is provided by Alibaba Cloud for the RDS instance. These backup files do not occupy the storage capacity of your RDS instance. For information about how to release storage, see [FAQ about storage capacity](/help/en/rds/apsaradb-rds-for-postgresql/faq-about-storage-capacity).
    

## Delete or reduce data backup files

## Delete data backup files

#### **Automatic deletion**

**Note**

You can use this method to delete the backup files that are generated from **manual backups** and **automatic backups**.

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the page that appears, click the ****Backup Strategy**** tab.
    
4.  In the **Data Backup Settings** section, click **Edit** to reduce the backup retention period.
    
    The minimum backup retention period is 7 days. Backup sets that are retained for a longer period than the specified backup retention period are automatically deleted.
    

#### **Manual deletion**

**Note**

This method can be used to delete the data backup files that are generated only from **manual backups**. You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3977085371/p896238.png) icon in the **Backup Method** column of the required backup set. If **Manual Backup** is displayed, you can manually delete the backup set.

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the page that appears, click the **Base Backups** tab and then the **Data Backup** tab.
    
4.  Find the backup set that you want to delete and click **Delete** in the **Actions** column.![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9048443961/p487516.png)
    

## Reduce data backup files

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the page that appears, click the ****Backup Strategy**** tab.
    
4.  In the **Data Backup Settings** section, click **Edit** to reduce the backup frequency.
    
    **Note**
    
    To ensure data security, we recommend that you set the backup frequency to at least twice a week.
    

## **Delete log backup files**

You cannot reduce the backup frequency to reduce the number of log backup files. You can reduce the log backup retention period or disable the log backup feature to delete log backup files.

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the page that appears, click the ****Backup Strategy**** tab.
    
4.  In the **Data Backup Settings** section, click **Edit**.
    
    -   **Reduce the log backup retention period**
        
        The minimum log backup retention period is 7 days. Backup sets that are retained for a longer period than the specified backup retention period are automatically deleted.
        
    -   **Disable the log backup feature**
        
        After you disable the log backup feature, the system automatically deletes existing log backup files within 1 minute to 3 minutes. In this case, you **cannot restore data by point in time**.
        

## Related operations

**Operation**

**Description**

[DeleteBackup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletebackup-postgresql)

Deletes data backup files of an instance.

[ModifyBackupPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifybackuppolicy-postgresql)

Modifies the backup policy of an instance.
