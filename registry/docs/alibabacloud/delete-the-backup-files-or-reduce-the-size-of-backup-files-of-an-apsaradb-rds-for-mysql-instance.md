This topic describes how to delete the backup files or reduce the size of backup files of an ApsaraDB RDS for MySQL instance to reduce backup storage costs. For more information, see [Billable items and pricing for the backup storage of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#concept-ipg-lm4-ydb).

## Usage notes

The data backup files and log backup files of your RDS instance occupy the backup storage that is provided by Alibaba Cloud to the RDS instance. These backup files do not occupy the storage capacity of your RDS instance. For more information about how to view the size of backup files, see [View and manage the size of backup files for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/view-and-manage-the-size-of-backup-files-of-an-apsaradb-rds-for-mysql-instance). For information about how to release storage, see [What do I do if my ApsaraDB RDS instance is in the Locking state?](/help/en/rds/support/what-do-i-do-if-my-apsaradb-rds-instance-is-in-the-locking-state)

## Delete data backup files or reduce the size of data backup files

### **Manually delete data backup files**

**Note**

-   **This method can be used to delete only the data backup files that are generated from manual backups. Data backup files that are automatically generated cannot be manually deleted.** For more information, see [Manually back up an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manually-back-up-an-apsaradb-rds-for-mysql-instance#concept-2089372). You can move the pointer over the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4279004171/p787339.png) icon in the **Backup Policy** column to check whether the backup set is automatically generated or manually generated.
    
-   If the backup policy of a **manual backup file** is **Database/Table Backup**, you cannot delete the backup file. You can check whether the backup policy is **Database/Table Backup** in the **Backup Policy** column of the data backup file.
    
-   If you delete a **manual backup file**, the deleted backup file cannot be restored.
    

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page, choose **Base Backups** > **Data Backup**.
    
4.  On the tab that appears, find the backup file that you want to delete, click the ![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2068551961/p490246.png) icon, and then select **Delete** in the **Actions** column.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1513033961/p706108.png)
    

### **Automatically delete data backup files**

**Note**

You can use this method to delete the backup files that are generated from manual backups and automatic backups. For more information, see [Manually back up an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manually-back-up-an-apsaradb-rds-for-mysql-instance) and [Configure automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance).

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page that appears, click the **Backup Strategy** tab.
    
4.  In the **Basic Backup** section, click **Edit** to reduce the data backup retention period.
    
    **Important**
    
    For example, the data backup retention period of your RDS instance is 30 days.
    
    -   If you do not upgrade the log backup feature to the point-in-time restoration (PITR) feature for your RDS instance, data backup files that are retained for more than 30 days are automatically deleted and cannot be restored. Proceed with caution.
        
    -   If you upgrade the log backup feature to the PITR feature for your RDS instance, data backup files can be retained for more than 30 days. For more information, see [Configure the PITR feature](/help/en/rds/apsaradb-rds-for-mysql/any-point-in-time-recovery-protection#5c96c2b90fur0).
        
    

### **Reduce the size of data backup files**

**Method 1: Reduce the data backup frequency**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page that appears, click the **Backup Strategy** tab.
    
4.  In the **Basic Backup** section, click **Edit** to reduce the backup frequency.
    

**Method 2: Retain the minimum number of backup sets by using the sparse backup feature**

In some regions, you can use the spare backup feature by enabling the advanced backup settings on the Backup Strategy tab. The sparse backup feature allows you to configure backup policies for your RDS instance in a more flexible manner and retain the minimum number of backup sets. For more information, see [Switch to the advanced backup settings](/help/en/rds/apsaradb-rds-for-mysql/sparse-backup-2#0b7c4450bewz8) and [Use the sparse backup feature](/help/en/rds/apsaradb-rds-for-mysql/sparse-backup-2).

**Method 3: Delete or migrate the data that does not need to be backed up**

## Reduce the size of log backup files or disable the log backup feature

After the log backup feature is enabled, the binary logs of the instance are replicated to the backup storage as log backup files in real time. You can delete these log backup files or reduce the number of log backup files based on your requirements.

**Note**

The binary logs of an RDS for MySQL database record all modification operations performed on the database. You can use these logs to synchronize data between primary and secondary nodes or implement data subscription. For more information about how to query or delete binary logs, see [Manage binary log files](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance).

### **Reduce the size of log backup files**

**Method 1:** **Shorten the log backup retention period**

**Note**

You can specify the log backup retention period only when the log backup feature or the PITR feature is enabled. For more information about how to enable the feature, see [Log backup settings](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#1f4b7e31fb10f).

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page that appears, click the **Backup Strategy** tab.
    
4.  In the **Basic Backup** section, click **Edit** and configure the **Log Backup Retention Period (Days)** or **Time Range of Specific Points in Time for Restoration** parameter to shorten the log backup retention period. For more information, see [Configure the PITR feature](/help/en/rds/apsaradb-rds-for-mysql/any-point-in-time-recovery-protection#5c96c2b90fur0).
    
    **Important**
    
    For example, the **Log Backup Retention Period (Days)** or **Time Range of Specific Points in Time for Restoration** parameter is set to 30 for your RDS instance.
    
    -   If you do not upgrade the log backup feature to the PITR feature for your RDS instance and set the **Log Backup Retention Period (Days)** parameter to 30, data backup files that are retained for more than 30 days are automatically deleted and cannot be restored. Proceed with caution.
        
    -   If you enable the PITR feature for your RDS instance and modify the value of the **Time Range of Specific Points in Time for Restoration** parameter, the retention period of log backups is also modified. If you set the value of this parameter to 30, the system retains the log backup files that are required to restore data of your RDS instance to any point in time within 30 days. This way, the overall retention period of log backup files may exceed 30 days. For more information, see [Feature description](/help/en/rds/apsaradb-rds-for-mysql/any-point-in-time-recovery-protection#5c96c2b90fur0).
        
    

**Method 2: Retain the minimum number of backup sets by using the sparse backup feature**

In some regions, you can use the spare backup feature by enabling the advanced backup settings on the Backup Strategy tab. The sparse backup feature allows you to configure backup policies for your RDS instance in a more flexible manner and retain the minimum number of backup sets. For more information, see [Switch to the advanced backup settings](/help/en/rds/apsaradb-rds-for-mysql/sparse-backup-2#0b7c4450bewz8) and [Use the sparse backup feature](/help/en/rds/apsaradb-rds-for-mysql/sparse-backup-2).

**Method 3: Reduce unnecessary add, delete, and update operations, especially the update operations on large fields**

Add, delete, and update operations increase the total size of log backup files.

**Note**

You can use the SQL Explorer feature to view the add, delete, update, and query operations that are performed on your RDS instance. For more information, see [Use the SQL Explorer feature on an ApsaraDB RDS for MySQL instance](/help/en/rds/use-sql-explorer-features-on-apsaradb-rds-for-mysql-instances#task-msp-gz1-mfb).

### **Disable the log backup feature**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the **Backup and Restoration** page that appears, click the **Backup Strategy** tab.
    
4.  In the **Basic Backup** section, click **Edit** to disable the log backup feature or the PITR feature.
    
    **Important**
    
    After you disable the log backup feature, the system automatically deletes existing log backup files within 1 to 3 minutes. Deleted log backup files cannot be restored. Proceed with caution.
    

## **FAQ**

-   Why is the button to delete a backup set dimmed in the ApsaraDB RDS console?
    
    You can manually delete backup sets that are generated by using [manual backups](/help/en/rds/apsaradb-rds-for-mysql/manually-back-up-an-apsaradb-rds-for-mysql-instance) rather than [automatic backups](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance). You can change the backup retention period to 7 days. When the backup retention period elapses, the system automatically deletes the backup set.
    
-   Which logs are stored in the local storage of my RDS instance?
    
    Binary logs are stored in the local storage of your RDS instance. You can [view the total size of binary log files](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance#section-nbg-xyc-tkh) and [delete binary log files](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance#section-w5j-ovn-ebb) to free local storage space as needed.
    

## **Related operations**

-   You can call the DeleteBackup operation to delete the data backup files of an instance. For more information, see [DeleteBackup](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-deletebackup-mysql).
    
-   You can call the ModifyBackupPolicy operation to modify the backup settings of an instance. For more information, see [ModifyBackupPolicy](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-modifybackuppolicy-mysql).
