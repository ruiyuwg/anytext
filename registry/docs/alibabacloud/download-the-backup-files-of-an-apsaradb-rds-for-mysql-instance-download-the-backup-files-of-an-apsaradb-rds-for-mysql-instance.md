This topic describes how to download ApsaraDB RDS for MySQL backups for various purposes, including long-term retention, querying, migration, and auditing.

## Before you begin

-   No fees are charged for failed tasks.
    
-   You cannot cancel a backup download task after it starts.
    
-   A cluster or instance can have only one download task at a time. You cannot start a new task if a previous task is running or has failed.
    
-   You cannot use downloaded backup data to restore an ApsaraDB RDS instance directly. To restore an instance, see [Overview of data restoration solutions](/help/en/rds/apsaradb-rds-for-mysql/restoration-1/).
    
-   Directly downloading a backup is not always the best option. Before you start, identify your instance type and [scenario](#cdfbacb6828ar) to choose the most efficient and cost-effective method.
    

## Billing details

Downloading backups from an instance with high-performance local disks may incur outbound network traffic fees. For instances that use cloud disks, you may be charged for both outbound network traffic and backup set conversion.

**Note**

If you download backups to Object Storage Service (OSS), you are charged based on your actual usage of [OSS](/help/en/oss/billing-overview).

## Network traffic fees

-   **Internal network downloads**: Free of charge.
    
-   **External network downloads**: Each instance receives a free quota of 500 GB per month. Usage beyond this quota is billed on a pay-as-you-go basis. You can view the amount of downloaded traffic on the Basic Information page of the ApsaraDB RDS instance. For more information about unit prices, see [Network fees](/help/en/dbs/product-overview/network-traffic-fees).
    

**Note**

-   You can download backups over an internal network or the internet for instances that use cloud disks and instances with high-performance local disks.
    
-   When you start a snapshot backup download for an instance that use cloud disks, the system creates a data conversion task. You cannot obtain a download link while the task is in progress or has failed. No outbound network traffic fees are incurred during this period. After the task completes successfully, you are charged for the actual traffic generated when you use the download link.
    
-   Physical backup downloads for instances with high-performance local disks do not involve data conversion. You can obtain the download link directly. You are charged for the actual traffic generated when you use the link to download the backup.
    
-   To view the public network backup download volume, go to the [ApsaraDB RDS instance list](https://rds.console.alibabacloud.com/rdsList/cn-zhangjiakou/basic), click the instance ID, and on the **Basic Information** page, view **Backup Download Volume** in the **Instance Resources** section.
    
-   You can purchase a subscription [network plan](/help/en/dbs/getting-started/use-network-plans#task-1953491) to cover data transfer fees for downloading backups over the public network. The larger the network plan capacity, the higher the discount.
    

## Backup set conversion fees

This fee applies when you use the Advanced Download feature for an instance that uses cloud disks to convert a snapshot backup into a CSV file (without a header), a CSV file with a header, an SQL file, a Parquet file, or a qb.xb (physical backup) file. No free quota is provided. The billing standards are as follows:

**Region**

**Conversion fee (USD/GB)**

Public cloud

0.03125

**Note**

-   When you start a snapshot backup download for an instance that uses cloud disks, the system creates a data conversion task. No backup set conversion fees are charged if this task fails.
    
-   After you decompress a **qb.xb (physical backup)** file converted from a snapshot backup, the file size may be smaller than the **Backup Conversion Traffic** displayed in the console.
    

## **Download backups from a cloud disk instance**

Instances that use cloud disks support Advanced Download tasks for a specific point in time or a specific backup set. You can convert snapshot backups into CSV, SQL, Parquet, or qb.xb (physical backup) format as needed. You can also download the backup to a URL or save the backup file directly to your OSS bucket.

### **Prerequisites**

Before you start, make sure that the instance meets all the following conditions.

-   **Instance status**: Running.
    
-   **Storage type**: Enterprise SSD (ESSD) or Premium Performance Disk.
    
-   **Database version**: MySQL 8.0 or 5.7.
    
-   **Region support**: China (Chengdu), China (Shenzhen), China (Guangzhou), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hangzhou), China (Shanghai), Hong Kong (China), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), Singapore, US (Silicon Valley), US (Virginia), and Germany (Frankfurt). This feature is being gradually rolled out to other regions. The supported regions are displayed in the console.
    
-   **Minor engine version**: The minor engine version must be `20201031` or later. If the minor engine version of your instance does not meet this requirement, [upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
    
    **Important**
    
    The **Download Instance Backup** button may be unavailable if the [database proxy](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance) is enabled, even if the minor engine version meets the requirements. This is because some instances have hardware limitations that prevent them from supporting this download feature. To resolve this issue, first [disable the database proxy](/help/en/rds/apsaradb-rds-for-mysql/disable-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance) and then [upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11). After the issue is resolved, you can re-enable the proxy service as needed.
    
-   **Backup encryption**: Disabled. The Advanced Download feature is not supported for [encrypted instances that use cloud disks](/help/en/rds/apsaradb-rds-for-mysql/backup-encryption).
    
-   **Data archiving**: Disabled. The Advanced Download feature is not supported for instances that use premium performance disks for which [data archiving](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-data-archiving-function) is enabled.
    
-   **RAM permissions**: The Resource Access Management (RAM) user must have permissions to download backup files. To grant permissions to a RAM user, see [Grant permissions to a read-only RAM user to download backup files](/help/en/rds/apsaradb-rds-for-mysql/grant-backup-file-download-permissions-to-a-ram-user-with-read-only-permissions#concept-qmt-zxm-cgb).
    

### **Feature limitations**

-   **Unsupported objects**: The downloaded backup files do not include expression indexes, foreign keys, generated columns, hidden columns, views, functions, stored procedures, system variables, or triggers.
    
-   **Unsupported databases**: The download does not include system databases such as `information_schema`, `mysql`, `performance_schema`, `sys`, or `__recycle_bin__`.
    
-   **Unsupported data types**: The download task may fail if a table contains special data types such as `GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, or GEOMETRYCOLLECTION`.
    
-   **Name restriction**: The names of the downloaded databases and tables cannot contain forward slashes (/). If your database or table names contain forward slashes, the task will fail.
    
-   **Storage type restriction**: You can only download backups to OSS buckets that use the **Standard** storage class. If you want to save a backup to an OSS bucket that uses a storage class other than Standard, use one of the following methods:
    
    -   Method 1: Download the backup to a bucket with the Standard storage class, and then [transform the storage class](/help/en/oss/user-guide/convert-storage-classes#concept-p13-zmz-5db).
        
    -   Method 2: Download the backup to a local machine, and then upload it to the destination bucket.
        

### **Procedure**

1.  **Navigate to the backup list**
    
    1.  Go to the [ApsaraDB RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic), select the instance's region, and then click the instance ID.
        
    2.  In the left navigation pane, click **Backup and Restoration** > **Base Backup List**.
        
2.  **Start the download task**
    
    -   **Download a log backup**: On the **Log Backup** tab, find the target log file and click **Download** in the **Actions** column to obtain the download link. This requires that you **enable log backup**.
        
    -   **Download a data backup**: On the **Data Backup** tab, find the target backup set and click **Download Instance Backup** in the Actions column.
        
3.  **Configure instance backup download parameters**
    
    1.  In the **Download Time Point and Backup Set** step, select **Download by Backup Set** or **Download by Time Point** as needed, and then click **Next**.
        
    2.  In the Download Instance and Database/Table step, keep the default setting (Instance Download) and click Next.
        
    3.  In the **Download Destination and Format** step, configure the download destination and format.
        
        **Download Destination**
        
        **Configuration**
        
        OSS (Recommended)
        
        1.  Enter the bucket name and directory prefix of the destination OSS.
            
        2.  Set Download Format to CSV (without header), CSV-with-header, SQL, Parquet, or qb.xb (physical backup).
            
        3.  If this is your first time using this feature, click Go to Authorize > Agree to Authorization as prompted to grant ApsaraDB RDS permissions to access OSS.
            
        
        URL
        
        1.  Select URL.
            
        2.  Select the download format.
            
        3.  After the task is successful, you must manually generate a download link. The link is valid for a limited time.
            
        
4.  Confirm and execute Read and accept the terms, and then click **Finish**. You are automatically redirected to the **Backup Download List** tab, where you can monitor the task status.
    
5.  **Obtaining the backup file**
    
    -   **OSS method**: Wait for the task status to become Successful. The file is then automatically downloaded to the specified OSS bucket and directory.
        
    -   URL method: Wait for the task status to become Successful. Within **3 days**, click Generate Link in the Download Destination column to generate a download URL. You can set the validity period of the link from **5 minutes to 1 day**. The default period is **2 hours**. After the task and the link expire, the temporary data is automatically deleted. You must start a new download task if the link expires.
        
    
    **Important**
    
    Because the conversion process competes for computing resources from the service, a download may fail due to temporary resource allocation failures or unsupported data formats. If a task fails, try to download the backup again.
    
6.  **Use a command-line tool to download the file**
    
    After you obtain the URL download link:
    
    -   Use a command-line tool such as wget or curl to download the file. This is the **recommended** method. For more information, see [Appendix 1: Download commands](#section-6wu-6y2-ds7).
        
    -   If the file is small, you can copy the external URL to your browser's address bar.
        

## **Downloads for instances with Premium Local SSDs**

The process for downloading backups from an instance with high-performance local disks is more straightforward. This process does not require data format conversion, and you can immediately obtain the download link for a physical backup or a log backup.

### **Prerequisites**

Before you start, make sure that the instance meets all the following conditions.

-   **Storage type**: High-performance local disk.
    
-   **RAM permissions**: The RAM user must have permissions to download backup files. To grant permissions to a RAM user, see [Grant permissions to a read-only RAM user to download backup files](/help/en/rds/apsaradb-rds-for-mysql/grant-backup-file-download-permissions-to-a-ram-user-with-read-only-permissions#concept-qmt-zxm-cgb).
    

### **Procedure**

1.  **Navigate to the backup list**
    
    1.  Go to the [ApsaraDB RDS instance list](https://rds.console.alibabacloud.com/rdsList/basic), select the instance's region, and then click the instance ID.
        
    2.  In the navigation pane on the left, click **Backup and Restoration** > **Base Backup List**.
        
2.  **Obtain the download link**
    
    1.  Select the **Data Backup** or **Log Backup** tab.
        
    2.  Find the target backup file and click Download Instance Backup or Download in the Actions column.
        
    3.  In the dialog box that appears, you can directly copy the internal URL or the external URL.
        
        -   **Internal URL**: This is the recommended method. You must download the backup from an Alibaba Cloud ECS instance that is in the same region and VPC. This method is fast and free of charge. Cross-region downloads over the internal network are not supported.
            
        -   **External URL**: Use this to download from a local machine or another network environment.
            
3.  **Use a command-line tool to download the file**
    
    After you obtain the URL download link:
    
    -   Use a command-line tool such as wget or curl to download the file. This is the **recommended** method. For more information, see [Appendix 1: Download commands](#section-6wu-6y2-ds7).
        
    -   If the file is small, you can copy the external URL to your browser's address bar.
        

**Note**

-   The backup download link is valid for 1 hour. Download the file promptly to prevent the link from expiring. If the link expires, you must start a new download task to obtain a new link. A download task that has already started is not affected by the link's validity period.
    
-   A log backup is a copy of the binary logs. To retrieve binary logs, see [mysqlbinlog](/help/en/rds/apsaradb-rds-for-mysql/apsaradb-rds-for-mysql-remotely-obtains-and-parses-binlog-logs).
    
-   For high-availability series or three-node edition instances, both the primary and secondary instances generate log backups. You can view the IDs of the primary and secondary instances on the **Service Availability** page.
    
-   If you want to restore data to a self-managed database, the point in time of the data backup must be within the time range of the log backup. The log backup and data backup must be from the same instance, which means they must have the same instance ID.
    

## Appendix 1: Download commands

After you obtain the URL download link, use a command-line tool such as wget or curl to download the file. These tools support resumable downloads and help ensure stability.

**Note**

-   If the network download speed is too low (less than 64 KB/s), the download may be interrupted. Make sure you have a stable network connection during the download.
    
-   The **multipart\_size** parameter of ossfs has a default maximum file size of 100 GB. To download a backup set that is larger than 100 GB to an ossfs-mounted disk, you must increase the value of this parameter. Otherwise, the download will fail. For more information about ossfs and its parameter settings, see [ossfs](/help/en/oss/developer-reference/ossfs#concept-2407525) and [Mounting options](/help/en/oss/developer-reference/common-options#concept-2406341).
    
-   **Use the wget or curl commands provided in this topic to download backup sets.** If you use other third-party tools, the file may be downloaded repeatedly. This can result in the actual downloaded data size being larger than the backup set size, which incurs extra fees for the outbound traffic that exceeds the backup set size.
    

## wget

```
nohup wget -c -t 0 "Backup file download URL" -O Path_and_filename_to_save_the_downloaded_file > Download_process_monitoring_log &
```

Parameters:

**Parameter**

**Description**

**nohup**

Prevents the download from being interrupted if the terminal disconnects or if you accidentally perform a copy operation. The process automatically exits after the download is complete.

**\-t**

Number of retries. Set to **0** for infinite retries.

**\-c**

Supports resumable downloads.

**\-O**

The path and filename to save the downloaded file.

Example:

```
nohup wget -c -t 0 "https://dbs-****.aliyundoc.com/****.tar.gz****" -O /backup/examplebackup.tar.gz > /tmp/download.log &
```

## curl

```
nohup curl -C - --retry 10 "Backup file download URL" -o Path_and_filename_to_save_the_downloaded_file > Download_process_monitoring_log &
```

Parameters:

**Parameter**

**Description**

**nohup**

Prevents the download from being interrupted if the terminal disconnects or if you accidentally perform a copy operation. The process automatically exits after the download is complete.

**\--retry**

Number of retries if the task fails. Set to **10** to retry 10 times.

**\-C -**

Supports automatic resumable downloads.

**\-o**

The path and filename to save the downloaded file.

Example:

```
nohup curl -C - --retry 10 "https://dbs-****.aliyundoc.com/****.tar.gz****" -o examplebackup.tar.gz > /tmp/download.log &
```

## Appendix 2: **Scenarios**

**Scenario and purpose**

**Recommendation**

-   Migrate from an ApsaraDB RDS instance to another ApsaraDB RDS instance or a self-managed database
    
-   Restore an existing backup
    

Choose one of the following methods:

-   Restore from a backup. For more information, see [Restore to a new instance](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb), [Download a physical backup for restoration](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database#concept-41817-zh), or [Download a logical backup for restoration](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance#concept-zql-2c5-vfb).
    
-   [Migrate data using DTS](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh).
    
-   [Export data using DMS](/help/en/dms/export-data-1#task-1930847) and then import it to the destination instance.
    

-   Query data from a specific point in time
    
-   Query data within a backup
    

Choose one of the following methods:

-   Restore the backup to a pay-as-you-go or Serverless instance, query the data, and then release the instance. For more information, see [Restore full data](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance).
    
-   Follow the instructions in this topic to download the backup and restore it to a self-managed database for querying.
    

-   Save a local copy of a backup
    
-   Download a backup for auditing
    

Choose one of the following methods:

-   Download the backup as described in this topic.
    
-   [Export data using DMS](/help/en/dms/export-data-1#task-1930847).
    
-   [Use mysqldump for backup and restore](/help/en/rds/support/how-to-back-up-or-restore-the-databases-of-an-apsaradb-rds-for-mysql-instance).
    

Upload a backup to OSS

ApsaraDB RDS backups are stored in backup storage and do not occupy instance storage space. To store backups in OSS, you can choose one of the following methods:

-   For eligible instances that use cloud disks, you can create an Advanced Download task as described in this topic and choose to save the downloaded data directly to OSS during the task configuration. For other instances that use cloud disks or instances with high-performance local disks, you can first download the backup as described in this topic and then [upload it to OSS](/help/en/oss/how-to-upload-large-objects-to-oss).
    
-   [Use DBS to create a backup](/help/en/dms/rds-mysql-logical-backup-and-recovery/) and select User OSS as the storage type. You can then directly use Data Disaster Recovery to restore the backup data from OSS to ApsaraDB RDS.
    

Long-term backup retention

-   For more information, see [Long-term backup retention](/help/en/rds/apsaradb-rds-for-mysql/retain-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-for-a-long-period-of-time#concept-2043540).
    

Automatically download backups

-   [Use DBS to perform a logical backup](/help/en/dbs/user-guide/back-up-apsaradb-rds-for-mysql-or-self-managed-mysql-instances-by-using-logical-backup#task-1964148), and then [configure automatic backup downloads](/help/en/dbs/user-guide/configure-automatic-download-of-backup-sets#task-1995182).
    

Download binary logs

-   Instances that use cloud disks: After you enable the log backup feature (enabled by default), binary logs are uploaded (copied) to backup storage in real time, which creates log backups. You can download the log backup for the corresponding point in time. For more information, see [Download backups from a cloud disk instance](#5f597696394bg).
    
-   Instances with high-performance local disks: For more information, see [Download backups from an instance with high-performance local disks](#7c317611d4s9e).
    

## **Related documents**

-   If you use the backup download feature for an **instance that uses cloud disks** to download a **qb.xb (physical backup)** file using a **URL**, the downloaded file is in tar.gz or tar.zst format. Decompress the backup file as described in [Download and decompress a backup file](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-instance-by-using-a-csv-file-or-an-sql-file#e64bc8fe2568m). Then, restore the file to a self-managed database. For more information, see [Restore an RDS for MySQL physical backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database#ba29bb81cfqtr).
    
-   After you use the backup download feature to convert and export snapshot backup data from an **instance that uses cloud disks** to a CSV or SQL file, you can restore the file to a self-managed database. For more information, see [Restore an RDS for MySQL snapshot backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-instance-by-using-a-csv-file-or-an-sql-file#task-2221514).
    
-   To perform query and analysis on the data of an ApsaraDB RDS for MySQL **instance that uses cloud disks**, you can use the Advanced Download feature to download the data directly to your Alibaba Cloud OSS. Then, you can import the data from OSS to AnalyticDB for MySQL (ADB) for query and analysis. For more information, see [Import backup data from an instance that uses cloud disks to AnalyticDB for MySQL](/help/en/rds/apsaradb-rds-for-mysql/import-data-of-an-apsaradb-rds-for-mysql-instance-that-uses-standard-ssds-or-essds-to-an-analyticdb-for-mysql-instance#task-2240853).
    
-   You can use the backup download feature and the mysqldump tool to [restore ApsaraDB RDS for MySQL logical backup files to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance) for an **instance with high-performance local disks**.
    
-   You can use the backup download feature for an **instance with high-performance local disks** to [restore an ApsaraDB RDS for MySQL physical backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database#undefined).
    
-   You can also use API operations to download backups. The following API operations are available:
    
    -   [DescribeDownloadSupport - Query whether the current instance supports Advanced Download (for instances that use cloud disks)](/help/en/dms/developer-reference/api-dbs-2021-01-01-describedownloadsupport#main-107864)
        
    -   [CreateDownload - Create a download task (for instances that use cloud disks)](/help/en/dms/developer-reference/api-dbs-2021-01-01-createdownload)
        
    -   [DescribeDownloadTask - Query the list of download tasks (for instances that use cloud disks)](/help/en/dms/developer-reference/api-dbs-2021-01-01-describedownloadtask)
        
    -   [DescribeDownloadBackupSetStorageInfo - View the storage information of a downloaded backup set (for instances that use cloud disks)](/help/en/dms/developer-reference/api-dbs-2021-01-01-describedownloadbackupsetstorageinfo)
        
    -   [DescribeBackups - View the list of backup sets for an ApsaraDB RDS instance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describebackups-mysql)
        
    -   [DescribeBinlogFiles - View the binary log (Binglog) files of an ApsaraDB RDS instance](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describebinlogfiles-mysql)
        
-   To download backups for other database engines, see the following topics:
    
    -   [Download an ApsaraDB RDS for PostgreSQL backup](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb)
        
    -   [Download SQL Server backups](/help/en/rds/apsaradb-rds-for-sql-server/download-the-data-backup-files-and-log-backup-files-of-an-apsaradb-rds-for-sql-server-instance#concept-yjb-pn4-ydb)
        
    -   [Download a log backup for an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/download-the-log-backup-files-of-an-apsaradb-rds-for-mariadb-instance#concept-yjb-pn4-ydb)
        

## **FAQ**

Can ApsaraDB RDS database backups be uploaded to OSS?

Yes, they can. ApsaraDB RDS for MySQL instances that use cloud disks support creating Advanced Download tasks for a point in time or a specific backup set. You can also **save the downloaded data directly to your OSS**. For more information, see [Download backups from a cloud disk instance](#5f597696394bg) in this topic. You can also download backups from an ApsaraDB RDS for MySQL instance that uses cloud disks or high-performance local disks to a local machine and then [upload large files to OSS](/help/en/oss/how-to-upload-large-objects-to-oss).

Is there a bandwidth limit for downloading MySQL backups over the internet?

No, there is not. ApsaraDB RDS itself does not have a bandwidth limit. The speed of downloading backups over the internet depends on your server's bandwidth. If your server has limited bandwidth, the backup download speed may be restricted. In addition, when you download backup data using an external link, you must pay for outbound traffic that exceeds the free quota. For more information, see [Billing details](#section-p6l-jre-70e).

How do I use the downloaded data backups and log backups?

You can restore the backup files downloaded from an instance with high-performance local disks to a self-managed database. For more information, see [Restore an ApsaraDB RDS for MySQL physical backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database#concept-41817-zh) or [Restore an ApsaraDB RDS for MySQL logical backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance#concept-zql-2c5-vfb).

Can the default `qp.xb` backup format for physical backups of instances with high-performance local disks be converted to `.gz` format?

-   If the [Restore to database or table](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance) feature is enabled for the instance, the backup compression format must be `qp.xb`. The format cannot be converted.
    
-   If the [Restore to database or table](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance) feature is not enabled for the instance, you can use the [ModifyBackupPolicy](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-modifybackuppolicy-mysql) API operation to change the backup set compression format from qp.xb to tar.gz. This operation only changes the compression method of the backup set and does not affect the instance in any other way.
    

When I restore data downloaded from an instance that uses cloud disks to a local MySQL database, the error `ERROR 1148 (42000): The used command is not allowed with this MySQL version` is reported. How do I fix this?

On MySQL, run the query script `show variables like 'local_infile';`. If the result is \`OFF\`, run the following statement to enable file import: `set global local_infile = 1;`. Then, run the import script again.

Why is the backup size displayed in the console different from the actual size of the downloaded backup file?

The downloaded backup file is compressed and is generally smaller than the backup size displayed in the console. You can restore the file and check if the data is complete. For more information, see [Restore an ApsaraDB RDS for MySQL snapshot backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-instance-by-using-a-csv-file-or-an-sql-file#task-2221514).

Can a backup file downloaded from the ApsaraDB RDS console be directly restored to another Alibaba Cloud RDS instance?

You cannot use backup files downloaded from the RDS console to directly restore a new RDS instance. You can:

-   Restore the ApsaraDB RDS backup to a local database. For more information, see [Restore an ApsaraDB RDS for MySQL physical backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database#concept-41817-zh), [Restore an ApsaraDB RDS for MySQL logical backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance#concept-zql-2c5-vfb), or [Restore an ApsaraDB RDS for MySQL snapshot backup file to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-instance-by-using-a-csv-file-or-an-sql-file#task-2221514).
    
-   Use Data Transmission Service (DTS) to [migrate the local database to a new ApsaraDB RDS instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance#concept-268502), or use the [full backup import feature](/help/en/rds/apsaradb-rds-for-mysql/migrate-the-data-of-a-self-managed-mysql-5-7-or-mysql-8-0-instance-to-an-apsaradb-rds-for-mysql-instance#task-2082462) of ApsaraDB RDS for MySQL to import the MySQL backup data from OSS to ApsaraDB RDS and restore it to a new instance.
    

Can a backup download task in progress be canceled?

No, you cannot. You cannot cancel a backup download task after it starts.

What should I do if some data is missing from the backup list?

You can perform the following steps:

1.  [Restore the full data](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance) to a new instance.
    
2.  On the new instance, check and confirm which tables or data are missing.
    
3.  Export the missing tables or data from the original instance.
    
4.  Use DTS to synchronize the exported data from the original instance back to the restored new instance.
    

When I use an internal URL to download a backup, the error "ERROR 403: Forbidden." is reported. How do I fix this?

1.  Check if the instance meets the conditions for an internal network connection. Make sure that the ECS instance in the VPC can communicate with ApsaraDB RDS over the internal network.
    
2.  Check if the format of the [download command](#section-6wu-6y2-ds7) is correct. For example, check whether the download URL uses full-width double quotation marks.
    

If you still cannot access ApsaraDB RDS over the internal network, try using an external URL to download the backup.

How do I delete expired backup information from the backup download list?

Information in the backup download list cannot be deleted. This does not affect the use of the instance.

Can a downloaded backup file be directly imported into a self-managed database?

No, it cannot. A physical backup cannot be directly imported into a self-managed database. To import the backup, manually create a logical backup, download it to a local machine, and then import it.

When I use the wget command to download a backup, the error "ERROR 504:Gateway Time-out." is reported. How do I fix this?

When you use the wget command, add the `--read-timeout=300 --connect-timeout=300` parameter.

Does downloading a backup use the bandwidth of the current instance?

No, it does not.

Downloading over an internal network does not affect the instance's bandwidth. Downloading over the internet is only billed and depends only on your local network bandwidth.

Why is the file garbled after I use a download command to download a backup?

After the backup is downloaded to a local machine or an ECS instance, run the `tar -izxvf <compressed_package_filename>.tar.gz -C <path_to_decompressed_file>` command to decompress the file and view it in the corresponding folder.

How are the downloaded backup files named?

The backup files are named using the host ID and the timestamp of the instance.

When I download a backup file to OSS, the error "Unsupported bucket XXX's StorageClass is IA, Please Use bucket's StorageClass is Standard" is reported. How do I fix this?

When downloading a backup to OSS, the **storage class** of the target bucket must be **Standard**. If you want to save the backup to an OSS bucket that uses a different storage class, use one of the following methods:

-   Method 1: Download the backup to a bucket using **Standard** storage, and then [transform the storage class](/help/en/oss/user-guide/convert-storage-classes#concept-p13-zmz-5db).
    
-   Method 2: Download the backup to a local machine, and then upload it to the destination bucket.
    

**Why can't I find the backup download buttons in the console?**

-   If your instance is a primary instance, it must meet the [prerequisites for backup download](#5f597696394bg).
    
-   If your instance is a read-only instance, you must download the backup from its corresponding primary instance because read-only instances are not backed up.
    

Why am I charged even though I did not download any backups?

You were likely charged the [backup set conversion fee](#section-p6l-jre-70e). This fee is incurred when you use the Advanced Download feature to convert a snapshot backup of a disk instance into a CSV file (with or without a header), SQL file, or Parquet file. You can view the corresponding **Backup Conversion Traffic** in the **Backup Download List**.

For more information about downloading backups, see [FAQ about backup downloads](/help/en/rds/apsaradb-rds-for-mysql/how-do-i-troubleshoot-issues-about-backup-downloads-of-an-apsaradb-rds-instance).
