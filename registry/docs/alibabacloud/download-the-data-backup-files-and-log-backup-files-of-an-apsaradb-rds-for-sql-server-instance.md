ApsaraDB RDS for SQL Server lets you download unencrypted data backups and log backups. You can archive these backups or use them to restore data to an on-premises database.

**Note**

For more information about data backup and log backup, see [Backup features](/help/en/rds/apsaradb-rds-for-sql-server/back-up-an-apsaradb-rds-for-sql-server-instance#6dc8ae8016aru).

## **Limitations**

-   Read-only Resource Access Management (RAM) users with the **AliyunRDSReadOnlyAccess** permission cannot download backup files. To enable downloads, grant the **AliyunRDSFullAccess** permission to the RAM user.
    
-   You cannot download backup data generated from a [snapshot backup](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-snapshot-backup-feature-for-an-apsaradb-rds-for-sql-server-instance).
    

## Billing

Downloading backup files over the Internet incurs network traffic fees.

-   Downloads over an internal network: You are not charged for the traffic that you consume.
    
-   Downloads over the Internet: After the free quota of 500 GB per instance-month is exhausted, you are charged for the excess traffic that you consume based on the pay-as-you-go billing method. Fees are deducted from your account on a daily basis. For more information, see [Network traffic fees](/help/en/dbs/product-overview/network-traffic-fees).
    

**Note**

-   To view the amount of backup data downloaded over the Internet, go to the [RDS Instances](https://rds.console.alibabacloud.com/rdsList/cn-zhangjiakou/basic) page. Click the ID of the target instance. On the **Basic Information** page, find **Backup Downloads** in the **Instance Resources** section.
    
-   We recommend that you purchase a subscription [network plan](/help/en/dbs/getting-started/use-network-plans#task-1953491) to offset the network traffic fees that are generated when you download backups over the Internet. A network plan with a larger capacity provides a higher discount.
    

## Download full or incremental instance-level physical backups

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Base Backups** tab, click the **Data Backup** tab.
    
4.  Select a time range to query for backups. Find the target backup set and click **Download Instance Backup** in the **Actions** column.
    
    **Note**
    
    -   If the download button is not available, see the [Limitations](#c38026d036yo4) section.
        
    -   If you plan to use the data backup for data restoration, select the backup file that is closest to your desired point in time for restoration.
        
    -   If you use a log backup to restore data to an on-premises database, the time range of the log backup must be after the point in time of the data backup and before your target point in time for recovery.
        
    
5.  In the dialog box that appears, read the terms, select the confirmation checkbox, and then click **Download**. You can also copy the download URL to download the backup using other methods.
    
    **Note**
    
    -   If you download backup data over the Internet, you are charged for the Internet traffic that exceeds the free quota. For more information about the free quota and billing, see the [Billing](#section-tyz-hpd-gfs) section.
        
    -   Use commands such as wget or curl to download backup sets. If you use other third-party tools, the backup set might be downloaded multiple times. This may result in a downloaded data size that is larger than the actual backup set, and you will be charged for the extra traffic that is generated over the Internet.
        
    
    -   **Internal URL**: If your Elastic Compute Service (ECS) instance and RDS instance are in the same region and virtual private cloud (VPC), you can download the backup on the ECS instance using the internal URL. This method is faster and more secure.
        
    -   **Public URL**: If you cannot access the RDS instance over the internal network, use the public URL to download the backup.
        
    
    Click to view the description of the downloaded backup files
    
    **File name**
    
    **Description**
    
    `<database_name>.bak`
    
    The full or incremental backup file of the database.
    
    `backupinfo.json`
    
    The physical file distribution information of the database.
    
    `msdb_job.ini`
    
    The backup information of jobs in the instance.
    
    `sqlserver_logins.ini`
    
    The backup information of logins in the instance.
    

## Download full physical backups of a single database

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Base Backups** tab, click the **Data Backup** tab.
    
4.  Select a time range to query for backups. Find the target backup set and click **Download Database Backup** in the **Actions** column.
    
    **Note**
    
    The single-database backup download feature supports only full physical backup sets and does not support incremental backup sets.
    
5.  On the **Download Database Backup** page, click **Download** in the **Actions** column.
    
    **Note**
    
    -   If the download button is not available, see the [Limitations](#c38026d036yo4) section.
        
    -   If you plan to use the data backup for data restoration, select the backup file that is closest to your desired point in time for restoration.
        
    -   If you use a log backup to restore data to an on-premises database, the time range of the log backup must be after the point in time of the data backup and before your target point in time for recovery.
        
    -   If you do not have the download permission, grant the `DescribeDownloadLinkDetails` permission to your account.
        
    
6.  In the dialog box that appears, read the terms, select the confirmation checkbox, and then click **Download**. You can also copy the download URL to download the backup using other methods.
    
    **Note**
    
    -   If you download backup data over the Internet, you are charged for the Internet traffic that exceeds the free quota. For more information about the free quota and billing, see the [Billing](#section-tyz-hpd-gfs) section.
        
    -   Use commands such as wget or curl to download backup sets. If you use other third-party tools, the backup set might be downloaded multiple times. This may result in a downloaded data size that is larger than the actual backup set, and you will be charged for the extra traffic that is generated over the Internet.
        
    
    -   **Internal URL**: If your Elastic Compute Service (ECS) instance and RDS instance are in the same region and virtual private cloud (VPC), you can download the backup on the ECS instance using the internal URL. This method is faster and more secure.
        
    -   **Public URL**: If you cannot access the RDS instance over the internal network, use the public URL to download the backup.
        
    
    Click to view the description of the downloaded backup files
    
    **File name**
    
    **Description**
    
    `<database_name>.bak`
    
    The full or incremental backup file of the database.
    
    `backupinfo.json`
    
    The physical file distribution information of the database.
    
    `msdb_job.ini`
    
    The backup information of jobs in the instance.
    
    `sqlserver_logins.ini`
    
    The backup information of logins in the instance.
    

## Download log backups

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Backup and Restoration**.
    
3.  On the **Base Backups** tab, click the **Log Backup** tab.
    
4.  Select a time range to query for backups. Find the target log backup set and click **Download** in the **Actions** column.
    
    **Note**
    
    -   If the download button is not available, see the [Limitations](#c38026d036yo4) section.
        
    -   If you plan to use the data backup for data restoration, select the backup file that is closest to your desired point in time for restoration.
        
    -   If you use a log backup to restore data to an on-premises database, the time range of the log backup must be after the point in time of the data backup and before your target point in time for recovery.
        
    
5.  In the dialog box that appears, read the terms, select the confirmation checkbox, and then click **Download**. You can also copy the download URL to download the backup using other methods.
    
    **Note**
    
    -   If you download backup data over the Internet, you are charged for the Internet traffic that exceeds the free quota. For more information about the free quota and billing, see the [Billing](#section-tyz-hpd-gfs) section.
        
    -   Use commands such as wget or curl to download backup sets. If you use other third-party tools, the backup set might be downloaded multiple times. This may result in a downloaded data size that is larger than the actual backup set, and you will be charged for the extra traffic that is generated over the Internet.
        
    
    -   **Internal URL**: If your ECS instance and RDS instance are in the same region and VPC, you can download the backup on the ECS instance using the internal URL. This method is faster and more secure.
        
    -   **Public URL**: If you cannot access the RDS instance over the internal network, use the public URL to download the backup.
        
    

## Related operations

To restore data from an ApsaraDB RDS for SQL Server instance to a self-managed, on-premises SQL Server instance, you can use one of the following methods:

-   Option 1: Follow the steps in this topic to download a physical backup of your RDS for SQL Server instance, and [upload it to the server that hosts your self-managed SQL Server, decompress the backup, and restore the data](/help/en/rds/apsaradb-rds-for-sql-server/migrate-data-from-an-apsaradb-rds-for-sql-server-instancce-to-a-local-sql-server-database).
    
-   Option 2: Use the [DTS service](/help/en/dts/user-guide/migrate-data-from-an-sql-server-database/) to migrate data from your RDS for SQL Server instance to a self-managed SQL Server instance.
    
-   Option 3: Refer to [the official Microsoft documentation](https://learn.microsoft.com/zh-cn/sql/relational-databases/backup-restore/quickstart-backup-restore-database?view=sql-server-2017&tabs=ssms) for other recovery options.
    

## **FAQ**

Q: What is the difference between **Download Instance Backup** and **Download Database Backup** for ApsaraDB RDS for SQL Server?

A: The main difference is whether you download a full data set or a partial data set:

-   Instance Backup Download: Downloads an entire backup set. This backup set can contain the data of the entire instance or the data of a single database from a manual backup. The actual data included depends on the details of the backup set. You can then download the backup set to your computer.
    
-   Single-database Backup Download: This feature is provided by Data Disaster Recovery. It lets you split an instance-level full physical backup and download the data of a specific database to your computer.
    

**Note**

The availability of the download feature depends on the options that are displayed in the console.
