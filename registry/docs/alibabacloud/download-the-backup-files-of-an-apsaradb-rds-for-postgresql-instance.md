This topic describes how to download the backup files of an ApsaraDB RDS for PostgreSQL instance. You can use the backup files in the scenarios such as long-term retention of backup files, backup queries, data migration, and audit.

## **Usage notes**

**The backup download task cannot be canceled after it is started.**

-   **The data of the backup files that you download cannot be used to directly restore data to your RDS instance.** For more information about to restore an RDS instance, see [Restoration](/help/en/rds/apsaradb-rds-for-postgresql/restoration-2/).
    
-   The manual backup files can be downloaded only after the manual backup task is complete. You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5177830471/p914707.png) icon in the upper-right corner of the required page to view the status of the manual backup task on the **Task Center** page.
    
-   The advanced download feature is not supported if the encryption feature is enabled for your RDS instance.
    

## Billing rules

If your RDS instance uses Premium Local SSDs and you download the backup files of the RDS instance, you are charged for the Internet traffic that you consume to download the backup files. If your RDS instance uses cloud disks and you download the backup files of the RDS instance, you are charged for the Internet traffic that you consume to download the backup files and backup file conversion.

### Traffic fee

-   Downloads over an internal network: You are not charged for the traffic that you consume.
    
-   Downloads over the Internet: After the free quota of 500 GB per instance-month is exhausted, you are charged for the excess traffic that you consume based on the pay-as-you-go billing method. Fees are deducted from your account on a daily basis. For more information, see [Network traffic fees](/help/en/dbs/product-overview/network-traffic-fees).
    

**Note**

-   You can download the backup files of an RDS instance over an internal network or the Internet regardless of the storage type of the RDS instance.
    
-   When you start a task to download the snapshot backup file of an RDS instance that uses cloud disks, the system converts the backup file and generates a download task. If the task is not complete, the download URL cannot be obtained. In this case, you are not charged for Internet traffic. In-progress tasks and failed tasks are considered not complete. After the task is complete, you are charged for the traffic generated when you download the backup file by using the URL.
    
-   When you download the physical backup file of an RDS instance that uses Premium Local SSDs, the system does not convert the backup file and directly provides you with the download URL. You are charged for the traffic generated when you download the backup file by using the URL.
    
-   To view the volume of traffic that you consumed to download backup files over the Internet, you can log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/cn-zhangjiakou/basic), find your RDS instance, and then click the ID of the instance to go to the **Basic Information** page of the RDS instance. Then, you can view the **Backup Downloads** parameter in the **Usage Statistics** section of the page.
    
-   We recommend that you purchase a subscription network plan to offset the fee for the Internet traffic that is used to download the backup files. A large capacity of a network plan indicates a high discount. For more information, see [Use network plans](/help/en/dbs/getting-started/use-network-plans#task-1953491).
    

### Backup set conversion fee

If you use the advanced download feature, the snapshot backup files are converted into CSV files with or without headers, SQL, or Parquet files, and you are charged for conversions. No free quota is provided for backup set conversion. The following table describes the unit prices for backup set conversion in different regions.

**Region**

**Unit price (USD per GB)**

Public cloud

0.03125

**Note**

When you start a task to download the snapshot backup file of an RDS instance that uses cloud disks, the system generates a task to convert the backup file. If the conversion task fails, you are not charged for backup set conversion.

## Download methods

### RDS instances that use cloud disks

You can create an advanced download task by point in time or backup set based on the RDS edition and instance type of your RDS instance. You can set the Download Destination parameter to URL or directly upload the downloaded data to your Object Storage Service (OSS) bucket to facilitate data analysis and offline archiving.

**Prerequisites**

-   Your RDS instance meets the following requirements:
    
    -   The RDS instance runs PostgreSQL 10 or later. Serverless RDS instances are supported.
        
    -   The RDS instance uses Enterprise SSDs (ESSDs). Premium ESSDs are not supported.
        
    
    **Note**
    
    -   You can go to the **Basic Information** page of your RDS instance to obtain the preceding information.
        
    -   If your RDS instance uses Premium Local SSDs or standard SSDs and you want to use this feature, you can upgrade the major engine version of the RDS instance to upgrade the storage type to ESSD. For more information, see [Upgrade the major engine version](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/#task-2039768).
        
    
-   **Your RDS instance resides in one of the following regions**: China (Chengdu), China (Guangzhou), China (Qingdao), China (Beijing), China (Shanghai), China (Zhangjiakou), China (Hangzhou), China (Shenzhen), China (Hong Kong), Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), Singapore, and Germany (Frankfurt).
    
    **Note**
    
    The feature will be available in other regions soon.
    
-   You must go to the [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22DBS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunDBSDefaultRole%22%2C%22TemplateId%22%3A%22DefaultRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fdbs.console.aliyun.com%22%7D) page to authorize Data Disaster Recovery to access resources in your Alibaba Cloud account.
    

**Feature matrix**

**RDS edition**

**Instance type**

**Database engine**

**Download by backup set**

**Download by point in time**

RDS Cluster Edition

Dedicated instance type

PostgreSQL 14 or later with ESSDs

Supported

Supported

General-purpose instance type

Supported

Supported

RDS High-availability Edition

Dedicated instance type

PostgreSQL 10 or later with ESSDs

Supported

Supported

General-purpose instance type

Supported

Supported

RDS Basic Edition

New general-purpose instance type

Supported

Not supported

General-purpose instance type

Supported

Not supported

**Limits**

-   The following objects in schemas are involved:
    
    -   Supported: tables, indexes, user-defined data types, unique constraints, foreign key constraints, NOT NULL constraints, and table inheritance
        
    -   Not supported: CHECK constraints
        
-   The following data types are supported:
    
    Numeric, string, datetime, Boolean type, enumerated type, array, UUID, jsonb, and bytea
    
    **Note**
    
    Parquet files must be converted to strings.
    
-   The following types of primary keys are supported:
    
    `SMALLINT`, `Integer`, `BigInt`, `SMALLSERIAL`, `SERIAL`, `BIGSERIAL`, `CHAR`, `VARCHAR`, and composite primary key. In addition, tables that do not have primary keys are also supported.
    
-   The following system databases cannot be exported:
    
    `template1`, `template0`, and `rdsadmin`
    
-   The following system tables cannot be exported:
    
    `information_schema` and `pg_catalog`
    
-   If you set the Download Destination parameter to OSS, only the **Standard storage class** is supported. For more information about how to change the storage class, see [Convert storage classes](/help/en/oss/user-guide/convert-storage-classes#concept-p13-zmz-5db).
    

**Procedure**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane of the page that appears, click **Backup and Restoration**.
    
3.  On the page that appears, choose **Base Backups** > **Data Backup**, find the backup set that you want to download, and then click **Download Instance Backup** in the **Actions** column.
    
    **Note**
    
    By default, the ApsaraDB RDS console displays the backup files that were generated over the most recent eight days. If you want to view the backup files that were generated eight days ago, you must change the time range.
    
4.  In the **Point in Time and Backup Set** step of the wizard, select **Download by Point in Time** or **Download by Backup Set** and then click **Next**.
    
    **Note**
    
    The **Download by Point in Time** option is available only when the **log backup** feature is enabled for your RDS instance. For more information about how to enable the log backup feature, see [Use the log backup feature](/help/en/rds/support/use-the-log-backup-feature#section-ef1-rgo-xgy).
    
5.  In the **Instance, Database, and Table** step of the wizard, click **Next**.
    
    **Note**
    
    By default, **Instance Download** is selected.
    
6.  In the **Select Download Destination and Format** step of the wizard, configure the following parameters and click **Complete**.
    
    **Important**
    
    -   We recommend that you set the Download Destination parameter to OSS to ensure efficiency.
        
    -   If the Download Destination parameter is set to URL, internal and public URLs are generated after the download task is complete. You can select a URL to download the backup data based on your business requirements.
        
    -   The backup download task cannot be canceled after it is started.
        
    
    ## Set the Download Destination parameter to OSS (recommended)
    
    **Note**
    
    If you use this method, data is directly downloaded to your OSS bucket. You can use and delete the data based on your business requirements.
    
    1.  Configure the Select Bucket and Directory Prefix parameters.
        
    2.  Configure the **Download Format** parameter.
        
        **Note**
        
        -   You can download the backup files in the following **formats**: CSV without headers, CSV with headers, SQL, and Parquet.
            
        -   If you do not have the permissions to access OSS resources, follow the instructions in the console and click **Authorize** and then **Confirm Authorization Policy**. After the permissions are granted, configure the parameters for the advanced download task.
            
        
    3.  Read and select the required content. Then, click **Complete**.
        
    4.  Go to the **Backup Download** tab.
        
        If the **Status** parameter of the task changes from **Running** to **Finished**, the download is successful. You can view and use the downloaded file in the specified OSS bucket.
        
        **Important**
        
        -   Computing resources are competed to convert the downloaded backup sets. As a result, temporary resource allocation may fail, and the download task fails. The download task may also fail due to unsupported special data formats. If your download task fails, try again or contact Data Disaster Recovery technical support.
            
        -   No fees are generated for failed tasks.
            
        
    
    ## Set the Download Destination parameter to URL
    
    **Note**
    
    If you set the Download Destination parameter to URL, the downloaded data is stored in the built-in storage of DBS. In this case, **you are not charged for storage fees**. For more information, see [Built-in storage and OSS](/help/en/dbs/product-overview/built-in-storage-and-oss#concept-2431891).
    
    1.  Configure the **Download Format** parameter, read and select the required content, and then click **Complete**.
        
        **Note**
        
        You can download the backup files in the following **formats**: CSV without headers, CSV with headers, SQL, and Parquet.
        
    2.  Go to the **Backup Download** tab. Wait until the status of the download task changes to **Finished**.
        
        **Important**
        
        -   Computing resources are competed to convert the downloaded backup sets. As a result, temporary resource allocation may fail, and the download task fails. The download task may also fail due to unsupported special data formats. If your download task fails, try again or contact the technical support from the Data Disaster Recovery team.
            
        -   No fees are generated for failed tasks.
            
        
    3.  Click **Generate Link** in the **Download Destination** column.
        
    4.  In the Generate Link dialog box, configure the **Validity Period** parameter and click **Generate Link**. Then, you can download backup data by using the generated URL. For more information, see [Download methods](#section-j12-9ld-6i0).
        
        -   Internal URL: If your virtual private cloud (VPC)-type Elastic Compute Service (ECS) instance can communicate with the RDS instance over an internal network, you can log on to your ECS instance and use the internal URL to download the backup file. This method is faster and more secure.
            
        -   Public URL: If the RDS instance cannot be connected over an internal network, you can use the public URL to download the backup file.
            
        
        **Important**
        
        -   You can **obtain the download URL within three days** after the download task is complete. The validity period of the URL ranges from 5 minutes to one day. The default validity period is 2 hours.
            
            The download task and the download URL **expire three days later** after the download task is complete. After the expiration, the task data is automatically deleted within a specific period of time. If you want to use the data, you must initiate a new download task and obtain a new download URL.
            
        -   We recommend that you save the URL at the earliest opportunity and keep the URL confidential.
            
        -   If you use a third-party download tool to download the backup file, additional download traffic may be generated. As a result, you may be charged additional fees. Proceed with caution.
            
        -   When you perform an advanced download, backup file conversion fees and traffic fees are generated. For more information, see [Billing rules](#section-v2t-mbm-a3u).
            
        
    

### RDS instances that use Premium Local SSDs

**Prerequisites**

-   The RDS instance uses **Premium Local SSDs**.
    
    **Note**
    
    You can go to the Basic Information page to view the preceding information about the RDS instance.
    
-   The RAM user that you use to log on to your RDS instance is granted the permissions to download backup files. For more information about how to grant permissions to a RAM user, see [Grant backup file download permissions to a RAM user with read-only permissions](/help/en/rds/apsaradb-rds-for-mysql/grant-backup-file-download-permissions-to-a-ram-user-with-read-only-permissions#concept-qmt-zxm-cgb).
    

**Procedure**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  Click the required tab based on the type of backup data that you want to download.
    
    -   If you want to download a data backup file, choose **Base Backups** > **Data Backup**.
        
    -   If you want to download a log backup file, choose **Base Backups** > **Log backup**.
        
4.  Select a time range. This step is required if you want to view the backup files that are generated eight days ago. The default time range spans the most recent eight days.
    
5.  Find the backup file that you want to download and click **Download Instance Backup** in the **Actions** column.
    
    **Note**
    
    -   If **Download Instance Backup** is not displayed, check whether all prerequisites are met.
        
    -   If you want to download data backup file and use the backup file to restore data, we recommend that you select the data backup file that is created at the point in time closest to the point in time at which the required data exists.
        
    -   If you want to download an archived log backup file and use the file to restore data to an on-premises database, take note of the following items:
        
        -   The instance No. of the archived log backup file must be the same as that of the data backup file that is used with the archived log backup file.
            
        -   The start time of the log backup file must be later than the end time of the data backup file and earlier than the specified point in time for data restoration.
            
    
6.  In the dialog box that appears, click **Download** or copy the URL that you can use to download the backup file.
    
    -   **Copy Internal URL**: If your VPC-type Elastic Compute Service (ECS) instance can communicate with the RDS instance over an internal network, you can log on to your ECS instance and use the internal URL to download the log backup file. This method is faster and more secure.
        
    -   **Copy Public URL**: If the RDS instance cannot be connected over an internal network, you can use the public URL to download the log backup file.
        
    
    **Note**
    
    -   The download URLs are valid only for one hour after it is generated. If the download URL expires, you can refresh the page to obtain the latest download URL.
        
    -   If you use the internal URL to download the log backup file, make sure that the server to which you log on and the RDS instance reside in the same VPC. **If the server and the RDS instance reside in VPCs of different regions or if the server resides in the classic network while the RDS instance resides in a VPC**, you cannot download the log backup file by using the internal URL on the server.
        
    -   If you download the backup file over the Internet, you are charged for the Internet traffic that exceeds the free quota. For more information, see [Billing rules](#section-v2t-mbm-a3u).
        
    

## Appendix: Download commands

This section describes how to use commands such as wget and curl to obtain backup data by using the download URL.

**Note**

-   If the speed of a download is lower than 64 KB per second, the download may be interrupted. When you download a backup file, make ensure that the network status is optimal.
    
-   If you want to download a backup file to a disk that is attached by using ossfs, you must adjust the value of the **multipart\_size** parameter for ossfs. The maximum value of this parameter is 100 GB. If the size of the backup file that you want to download exceeds 100 GB, the download fails. For more information about ossfs and its parameter settings, see [ossfs](/help/en/oss/developer-reference/ossfs#concept-2407525) and [Common options](/help/en/oss/developer-reference/common-options#concept-2406341).
    
-   **We recommend that you use the commands, such as wget and curl, that are provided in this topic to download a data backup file.** If you use a third-party tool to download a backup file, the backup file may be downloaded multiple times. As a result, the amount of data that is downloaded is greater than the size of the backup file, and you may be charged for the traffic that is consumed to download the excess amount of data over the Internet.
    

## wget

```
nohup wget -c -t 0 "URL that is used to download the backup file" -O Path and name of the downloaded backup file > Name of file to which monitoring logs are saved &
```

The following table describes the parameter in the preceding command.

**Parameter**

**Description**

**nohup**

Prevents interruptions to the download and specifies that the process automatically exits after the download is complete. If you accidentally replicate data or disconnect your database client during the download, the download is interrupted.

**\-t**

Specifies the number of retries. If you set the value to **0**, no limits are imposed on the number of retries.

**\-c**

Enables resumable uploads.

**\-O**

Specifies the save path and name of the backup file that you want to download.

Example:

```
nohup wget -c -t 0 "https://dbs-****.aliyundoc.com/****.tar.gz****" -O /backup/examplebackup.tar.gz > /tmp/download.log &
```

## curl

```
nohup curl -C - --retry 10 "URL that is used to download the backup file" -o Path and name of the downloaded backup file > File to which the monitoring logs are saved &
```

The following table describes the parameter in the preceding command.

**Parameter**

**Description**

**nohup**

Prevents interruptions to the download and specifies that the process automatically exits after the download is complete. If you accidentally replicate data or disconnect your database client during the download, the download is interrupted.

**\--retry**

Specifies the number of retries when the task fails. If you set the value to **10**, 10 retries are allowed.

**\-C -**

Enables resumable uploads.

**\-o**

Specifies the save path and name of the backup file that you want to download.

Example:

```
nohup curl -C - --retry 10 "https://dbs-****.aliyundoc.com/****.tar.gz****" -o examplebackup.tar.gz > /tmp/download.log &
```

## **References**

-   You can use the advance download feature of ApsaraDB RDS for PostgreSQL to export the backup file of your RDS instance that uses cloud disks as a CSV file or an SQL file. Then, you can use the CSV file or SQL file to restore the data of the RDS instance to a self-managed PostgreSQL instance. For more information, see [Restore the data of an ApsaraDB RDS for PostgreSQL instance to a self-managed PostgreSQL instance by using a CSV file or an SQL file](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-postgresql-instance-by-using-a-csv-file-or-an-sql-file#task-2255417).
    
-   You can also call the following operations to create and manage download tasks.
    
    **Operation**
    
    **Description**
    
    [DescribeBackups](/help/en/rds/api-query-data-backup-files#doc-api-Rds-DescribeBackups)
    
    Queries data backup files.
    
    [DescribeDownloadSupport](/help/en/dms/developer-reference/api-dbs-2021-01-01-describedownloadsupport#main-107864)
    
    Queries whether an instance supports the advanced download feature.
    
    [CreateDownload](/help/en/dms/developer-reference/api-dbs-2021-01-01-createdownload#main-107864)
    
    Creates an advanced download task.
    
    [DescribeDownloadTask](/help/en/dms/developer-reference/api-dbs-2021-01-01-describedownloadtask#main-107864)
    
    Queries download tasks.
    
    [DescribeDownloadBackupSetStorageInfo](/help/en/dms/developer-reference/api-dbs-2021-01-01-describedownloadbackupsetstorageinfo#main-107864)
    
    Queries the storage information about a downloaded backup set.
