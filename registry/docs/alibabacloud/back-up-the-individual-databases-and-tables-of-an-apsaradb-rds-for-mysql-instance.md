This topic describes how to back up individual databases or tables of an ApsaraDB RDS for MySQL instance.

## Automatically back up individual databases and tables

-   Default backup of ApsaraDB RDS: To ensure data security, **the default backup of ApsaraDB RDS backs up all databases and tables** and does not support backing up only some of them. If you do not need to back up specific databases or tables, we recommend that you delete these databases and tables or migrate them to your computer.
    
-   Data Disaster Recovery: [Logical backup of Data Disaster Recovery](/help/en/dbs/user-guide/back-up-apsaradb-rds-for-mysql-or-self-managed-mysql-instances-by-using-logical-backup#task-1964148) supports automatically backing up individual databases and tables.
    

**Note**

-   If your goal is to reduce the size and cost of default ApsaraDB RDS backups, see [Reduce backup costs](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance#section-qyc-r9l-pe1).
    
-   If your goal is to restore databases and tables, see [Restore databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb).
    

## Manually back up individual databases and tables

### **Method 1: Use the default backup feature in the ApsaraDB RDS console**

You can manually create a backup task to **back up specific databases**. Backing up **specific tables** is not supported.

#### **Prerequisites**

-   The RDS instance meets the following requirements:
    
    -   The major engine version is MySQL 8.0, MySQL 5.7, or MySQL 5.6
        
    -   Edition: High Availability Edition or MySQL 5.7 RDS Enterprise Edition
        
    -   Storage type: [Local SSD](/help/en/rds/product-overview/storage-types#concept-kpg-5wx-5db)
        
        **Note**
        
        RDS instances that use standard SSDs or enhanced SSDs support only snapshot backups and therefore do not support backing up specific databases or tables. If you need to back up data from a single database, you can use the [DMS data export](/help/en/dms/export-data-1) feature or [export the data of the specified database as an SQL file by using the mysqldump command](/help/en/rds/support/how-to-back-up-or-restore-the-databases-of-an-apsaradb-rds-for-mysql-instance#n49mj) for backup.
        
-   If this is the first time you use the backup feature of ApsaraDB RDS, make sure that the AliyunServiceRoleForDBS service-linked role is created by using your Alibaba Cloud account. For more information, see [How do I create a service-linked role for Data Disaster Recovery?](/help/en/rds/support/how-do-i-create-a-service-linked-role-for-dbs)
    

**Note**

You can go to the **Basic Information** page of the instance to view the preceding information.

#### **Procedure**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the upper-right corner of the page, click **Backup Instance**.
    
3.  In the dialog box that appears, set **Select Backup Mode** to **Logical Backup** and **Backup Policy** to **Single-Database Backup**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7756798861/p687127.png)
    
4.  Select the databases that you want to back up, click ![右移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7132898861/p615551.png) to add them to the right side, and then click **OK**.
    
5.  **(Optional)** View the backup task progress.
    
    The system generates a logical backup task. You can click the ![查看备份进度](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9334497861/p505712.png) button in the upper-right corner and go to the **Tasks** page. Then, filter the **Task Type** to **Manual Backup** to view the backup progress.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7756798861/p687111.png)
    
6.  **(Optional)** Restore the backup data.
    
    To restore the logical backup, see [Restore logical backup files of an ApsaraDB RDS for MySQL instance to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance#concept-zql-2c5-vfb) or [Restore databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb).
    

### **Method 2: Use** [**Data Disaster Recovery**](/help/en/dms/data-disaster-recovery-dbs-document-navigation/) **for backup**

1.  [Create a backup plan](/help/en/dbs/getting-started/create-backup-plans) (select Logical Backup as the backup method).
    
2.  [Configure the backup plan](/help/en/dbs/getting-started/set-backup-plans). When you configure the backup time, select **One-time Backup**.
    
    For more information, see [Back up an ApsaraDB RDS for MySQL instance or a self-managed MySQL database](/help/en/dbs/user-guide/back-up-apsaradb-rds-for-mysql-or-self-managed-mysql-instances-by-using-logical-backup#task-1964148).
    

## **Related API operations**

You can also call the API operations listed in the following table to manage the backup policies of your RDS instance or configure Data Disaster Recovery backup schedules.

**Classification**

**API operation**

**Description**

Use ApsaraDB RDS to perform backups

[ModifyBackupPolicy](/help/en/rds/api-modify-backup-settings#doc-api-Rds-ModifyBackupPolicy)

Modifies the backup settings of an ApsaraDB RDS instance.

[DescribeBackupPolicy](/help/en/rds/api-query-backup-settings#doc-api-Rds-DescribeBackupPolicy)

Queries the backup settings of an instance.

[DescribeBackups](/help/en/rds/api-query-data-backup-files#doc-api-Rds-DescribeBackups)

Queries backup sets.

[DescribeBackupTasks](/help/en/rds/api-query-backup-tasks#doc-api-Rds-DescribeBackupTasks)

Queries the backup tasks of an ApsaraDB RDS instance.

Use Data Disaster Recovery to perform backups

[CreateBackupPlan](/help/en/dms/developer-reference/api-dbs-2019-03-06-createbackupplan#main-107864)

Creates a backup plan.

[ConfigureBackupPlan](/help/en/dms/developer-reference/api-dbs-2019-03-06-configurebackupplan#main-107864)

Configures a backup plan.
