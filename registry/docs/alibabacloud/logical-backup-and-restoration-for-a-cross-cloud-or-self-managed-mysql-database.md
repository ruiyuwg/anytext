Data Disaster Recovery provides features such as geo-redundancy, long-term archiving, and single-table restoration for MySQL databases. This topic describes how to use Data Disaster Recovery to back up and restore a MySQL database hosted on a third-party cloud or a self-managed MySQL database.

## **Features**

**Feature**

**Description**

Incremental backup

Data Disaster Recovery uses incremental log streaming to retrieve binary log files in real time for incremental backup.

Full backup

Logical backups are stored in the Parquet format. Physical backups are stored in the gzip format.

Backup set download

Data Disaster Recovery allows you to download backup sets.

Geo-redundancy

Data Disaster Recovery supports cross-region backup for MySQL databases. Data Disaster Recovery allows you to restore the backup data to a cloud MySQL database or a self-managed MySQL database that is deployed in the source, destination, or another region.

Long-term archiving

Data Disaster Recovery can retain your backup data for up to 10 years. After the retention period expires, Data Disaster Recovery transfers backup sets to Archive Storage.

Fine-grained backup

Data Disaster Recovery allows you to back up multiple databases, a single database, or a single table.

Single-table restoration

Data Disaster Recovery allows you to restore a single table without the need to restore the entire database instance. This way, the restoration time is reduced. When you configure a restoration task, you can specify a table as the restoration object.

## Create a backup schedule

For more information, see [Create a backup schedule](/help/en/dms/create-a-backup-plan-dbs).

**Note**

-   When you purchase a backup schedule, set the Data Source Type parameter to **MySQL** and the Backup Method parameter to **Logical Backup**.
    
-   For information about the granularity based on which Data Disaster Recovery backs up and restores MySQL databases, see [Supported database types and features](/help/en/dms/product-overview/supported-database-types-and-features).
    

## Configure a backup schedule

1.  Log on to the [DMS console V5.0](https://dms.alibabacloud.com/new).
    
2.  In the top navigation bar, choose **Security and Specifications (DBS)** > **Disaster Recovery for Data (DBS)** > **Backup Plan**.
    
    **Note**
    
    If you use the DMS console in simple mode, move the pointer over the ![2023-01-28_15-57-17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6688322961/p674752.png) icon in the upper-left corner of the DMS console and choose **All Features** > **Security and Specifications (DBS)** > **Disaster Recovery for Data (DBS)** > **Backup Plan**.
    
3.  On the Backup Schedules page, find the backup schedule that you want to configure and click **Configure Backup Schedule** in the **Actions** column.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0584674071/p752582.png)
    
4.  In the **Configure Backup Source and Destination** step, configure the backup source and destination, and click **Next** in the lower-right corner of the page.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0584674071/p752587.png)
    
    Table 1. Parameters
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Schedule Name**
    
    The name of the backup schedule. Data Disaster Recovery automatically generates a backup schedule name. We recommend that you enter a descriptive name that is easy to identify. Backup schedule names do not need to be unique.
    
    **Backup Source Information**
    
    **Backup Mode**
    
    The method that is used to back up data. By default, the backup method that you selected when you purchased the backup schedule is used. In this example, **Logical Backup** is used.
    
    **Database Location**
    
    The location of the source database. Valid values:
    
    -   **No public network IP: Port's self-built database (accessed through the database gateway)**: backs up a self-managed database by using a database gateway. If you select this option, you must configure the **Gateway instance ID** parameter. Configure a database gateway for the database in advance.
        
    -   **User-Created Database with Public IP Address <IP Address:Port Number>**: backs up a self-managed database by using the public IP address of the database. If you select this option, you must also configure the Address and Port Number parameters.
        
    -   **ECS-Hosted Database**: backs up a database hosted on an Elastic Compute Service (ECS) instance. You must also configure the **ECS Instance ID** and Port Number parameters.
        
    -   **Express Connect DB/VPN Gateway/Intelligent Gateway**: backs up a self-managed database by using a virtual private cloud (VPC). If you select this option, you must configure the **Peer VPC** parameter. Configure a VPC for the database in advance.
        
    -   **PolarDB**: backs up a PolarDB for MySQL cluster. You must also configure the **PolarDB Instance ID** parameter.
        
    
    **Instance Region**
    
    The region in which the source database instance resides.
    
    **Note**
    
    This parameter is displayed only if you set the Database Location parameter to **RDS Instance**, **PolarDB**, **ECS-Hosted Database**, or **No public network IP: Port's self-built database (accessed through the database gateway)**.
    
    **PolarDB Cluster ID**
    
    The ID of the PolarDB cluster that you want to back up.
    
    **Database Type**
    
    The type of the source database. Default value: MySQL.
    
    **Note**
    
    This parameter is displayed only if you set the Database Location parameter to **User-Created Database with Public IP Address <IP Address:Port Number>**, **PolarDB**, **ECS-Hosted Database**, **Express Connect DB/VPN Gateway/Intelligent Gateway**, or **No public network IP: Port's self-built database (accessed through the database gateway)**.
    
    **Peer VPC**
    
    The VPC in which the source database resides.
    
    **Note**
    
    This parameter is displayed only if you set the **Database Location** parameter to **Express Connect DB/VPN Gateway/Intelligent Gateway**.
    
    **ECS Instance ID**
    
    The ID of the ECS instance in which the source database is deployed.
    
    **Note**
    
    This parameter is displayed only if you set the **Database Location** parameter to **ECS-Hosted Database**.
    
    **Gateway instance ID**
    
    The ID of the database gateway.
    
    **Note**
    
    This parameter is displayed only if you set the **Database Location** parameter to **No public network IP: Port's self-built database (accessed through the database gateway)**.
    
    **Address**
    
    The endpoint that is used to connect to the source database.
    
    **Note**
    
    -   If network security settings, such as firewall settings, are specified on the server where the instance is deployed, click **Set Whitelist** to obtain the CIDR blocks of Data Disaster Recovery, and then add the CIDR blocks to the whitelist of the server. This allows Data Disaster Recovery to access the server.
        
    -   This parameter is displayed only if you set the Database Location parameter to **No public network IP: Port's self-built database (accessed through the database gateway)**, **Express Connect DB/VPN Gateway/Intelligent Gateway**, or **User-Created Database with Public IP Address <IP Address:Port Number>**.
        
    
    **Port Number**
    
    The port number that is used to connect to the source database.
    
    **Note**
    
    This parameter is not displayed if you set the **Database Location** parameter to **ApsaraDB for MongoDB**.
    
    **Database Account**
    
    The username of the account that is used to connect to the source database. The account must have permissions to back up the database. For more information, see [Required permissions for different types of database accounts](/help/en/dms/support/faq-dbs-1#f35155dbbcwxj).
    
    **Note**
    
    For ApsaraDB RDS databases, read-only permissions are required for backup, and read and write permissions are required for backup and restoration.
    
    **Password**
    
    The password of the account that is used to connect to the source database.
    
    After you enter the username and password of the database account, click **Test Connection** next to the password to check whether the information about the source database is valid. If the specified parameters are valid, the Test Passed message is displayed. If the Test Failed message is displayed, click Check next to Test Failed. Modify the information about the source database based on the check results.
    
    **SSL Encryption**
    
    The connection method that is used to transmit the backup data. Valid values:
    
    -   **Non-encrypted**.
        
    -   **SSL-encrypted**: SSL encrypts network connections at the transport layer to improve the security and integrity of data in transit. However, SSL increases the network connection response time.
        
        **Note**
        
        If you want to select **SSL-encrypted**, you must enable SSL encryption for the ApsaraDB RDS instance before you configure the backup schedule. For more information, see the [Step 1: Enable the SSL encryption feature for an RDS instance](/help/en/rds/apsaradb-rds-for-mysql/configure-a-cloud-certificate-to-enable-ssl-encryption#section-hjf-z54-ydb) section of the "Configure the SSL encryption feature" topic.
        
    
    **Compliance warranty regarding cross-border data transfers**
    
    Read and agree to the compliance commitment by selecting the check box.
    
    **Backup Destination Information**
    
    **Backup Storage Type**
    
    The type of storage that is used to store the backup data. Valid values:
    
    -   **DBS Storage (recommended)**: Backup data is stored in Data Disaster Recovery without the need to create an Object Storage Service (OSS) bucket. You are charged based on the volume of your data that is stored in Data Disaster Recovery. For more information about the billing method, see [Storage fees](/help/en/dms/product-overview/billable-items-for-disaster-recovery/).
        
    -   **OSS For User**: You must create a bucket in the OSS console in advance. For more information, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb).
        
    
    **Note**
    
    -   In this example, **DBS Storage (recommended)** is selected. If you select **OSS For User**, you must configure the **OSS Bucket Name** parameter. Only the Standard storage class is supported.
        
    -   If you want to store a large amount of data, we recommend that you purchase a subscription storage plan to offset Data Disaster Recovery built-in storage fees. Storage plans are more cost-efficient than the pay-as-you-go billing method.
        
    
    **Storage Encryption**
    
    The method that is used to encrypt the stored data. Valid values:
    
    -   **Encrypted**: recommended. Data Disaster Recovery uses AES-256 to encrypt the stored data.
        
        The server-side encryption feature is used in OSS. When you upload an object to a bucket for which server-side encryption is enabled, OSS encrypts and stores the object. When you download the encrypted object from OSS, OSS decrypts the object and returns the decrypted object to you.
        
    -   **Non-encrypted**: The backup data is not encrypted.
        
    
5.  In the **Edit Backup Objects** step, find the database or table that you want to back up in the Available section. Click the rightwards arrow to add the selected database or table to the **Selected** section. Then, click **Next**.
    
    **Note**
    
    -   Data Disaster Recovery allows you to back up a single table, a single database, or multiple databases. You can click **Select All** in the lower-left corner of the Available section to select all databases. The supported backup objects vary based on the database types. For more information, see [Supported database types and features](/help/en/dms/product-overview/supported-database-types-and-features).
        
    -   By default, a backup schedule cannot be used to back up a database that is created after the backup schedule is created. To back up the database, you can add the database to the backup schedule on the Configure Task page of the backup schedule. For more information, see [Modify backup objects](/help/en/dms/modify-backup-objects-1).
        
    
6.  In the **Configure Backup Time** step, set the parameters that are described in the following table and click **Next**.
    
    **Parameter**
    
    **Description**
    
    **Full-scale Backup Frequency**
    
    The frequency of the backup schedule. Valid values: **Periodic Backup** and **Single Backup**.
    
    **Note**
    
    If you select **Periodic Backup**, you must configure the **Full Data Backup Recurrence** and **Start At** parameters.
    
    **Full Data Backup Recurrence**
    
    The days of the week on which Data Disaster Recovery runs the backup schedule. You can select one or more days of a week. Select at least one day of the week.
    
    **Start At**
    
    The start time of the backup. We recommend that you specify a point in time during off-peak hours. Example: **01:00**.
    
    **Note**
    
    If a previous full data backup is not finished at the start time of the next backup, Data Disaster Recovery skips the next backup.
    
    **Incremental Backup**
    
    Specifies whether to enable the incremental backup feature.
    
    **Note**
    
    Before you enable incremental backup, make sure that the binary logging feature is enabled for the database that you want to back up. By default, the binary logging feature is enabled for an ApsaraDB RDS for MySQL database. If you use a self-managed database, you must manually enable the binary logging feature.
    
    This parameter is displayed only if you set the **Full-scale Backup Frequency** parameter to **Periodic Backup**.
    
    **Maximum Concurrent Threads for Full Data Backup**
    
    The maximum number of concurrent threads that are available for a full backup. You can configure this parameter to adjust the backup speed. For example, you can reduce the number of backup threads to minimize impacts on the database.
    
    **Backup network speed limit**
    
    The limit on the network bandwidth. Unit: MB/s. You can set the limit based on your business requirements. The default value 0 indicates that the network bandwidth is unlimited.
    
7.  In the **Edit Lifecycle** step, configure the lifecycle for full backup data in the Configure Full Data Backup Lifecycle section.
    
    If you set the **Incremental Backup** parameter to Enable in Step 6, you must configure the lifecycle for incremental backup data. For more information about the lifecycle rules of backup data, see [How do I manage the lifecycle rules of backup sets?](/help/en/dms/support/faq-dbs-1#042b90528e2bc)
    
8.  After the preceding configurations are complete, click **Precheck** in the lower-right corner of the page.
    
9.  If the **Precheck Passed** message appears, click **Start Task**.
    
    **Note**
    
    -   If the **state** of the backup schedule changes to **Running**, the backup schedule takes effect.
        
    -   If an exception or error occurs when you start the backup schedule, troubleshoot the exception or error at the earliest opportunity. For more information, see [How do I fix errors for an abnormal backup schedule?](/help/en/dms/support/faq-dbs-1#683fb58c4beje) If your issue persists after you use the solution that is provided in the preceding topic, contact technical support in the DingTalk group (ID: 35585947).
        
    

## Restore backup data

Assume that the data is lost, damaged or maliciously tampered due to hardware failure, software error, human misoperation or natural disaster after you back up a database. In this case, you can restore the database from a logical backup to the most recent usable state.

### **Usage notes**

If you want to restore data to an existing database instance, make sure that the database account specified when you configure the restoration task has the permissions on the destination database. Otherwise, the restoration task may fail. For more information, see [Required permissions for different types of database accounts](/help/en/dms/support/faq-dbs-1#f35155dbbcwxj).

### **Procedure**

1.  On the Backup Schedules page, find the backup schedule that you want to manage and click **Manage** in the **Actions** column.
    
2.  On the **Configure Task** page, click **Restore Database** in the upper-right corner.
    
3.  In the **Set Time Restored To** step of the Create Restore Task wizard, configure the parameters that are described in the following table and click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7540061471/p882919.png)
    
    **Section**
    
    **Parameter**
    
    **Description**
    
    N/A
    
    **Task Name**
    
    The name of the task. Data Disaster Recovery automatically generates a task name. We recommend that you specify a name that is easy to identify. Task names do not need to be unique.
    
    **Set Time Restored To**
    
    **Time Range Available to Restore**
    
    The time range from the point in time when the first full backup set is created to the point in time when the latest full backup set is created. The source database can be restored to a point in time within the time range.
    
    **Restore To**
    
    The point in time to which you want to restore the backup data. The point in time must be within the time range that is specified by the **Time Range Available to Restore** parameter.
    
    **Note**
    
    -   If the incremental backup feature is enabled, Data Disaster Recovery allows you to restore the data to a point in time from the completion of the first full backup to the completion of the last incremental backup.
        
    -   If the incremental backup feature is disabled, Data Disaster Recovery allows you to restore the data to the point in time when a full backup is complete.
        
    
    **Configure Destination Database**
    
    **Target database instance type**
    
    The type of the database instance to which you want to restore data. Valid values: **New(Recommend)** and **Use Exists**.
    
    **Note**
    
    If you select **Use Exists**, make sure that the destination database is available when you perform the restore operation.
    
    **Database Location**
    
    -   If you set the **Target database instance type** parameter to **New(Recommend)**, select **RDS Instance**.
        
    -   If you set the **Target database instance type** parameter to **Use Exists**, you can select one of the following database locations:
        
        -   **No public network IP: Port's self-built database (accessed through the database gateway)**
            
        -   **User-Created Database with Public IP Address <IP Address:Port Number>**
            
        -   **ECS-Hosted Database**
            
        -   **RDS Instance**
            
        -   **Express Connect DB/VPN Gateway/Intelligent Gateway**
            
        -   **PolarDB**
            
    
    **Instance Region**
    
    The region in which the destination instance resides.
    
    **Note**
    
    This parameter is not displayed if the **Database Location** parameter is set to **User-Created Database with Public IP Address <IP Address:Port Number>**.
    
    **VPC**
    
    The VPC in which the new database instance resides.
    
    **Note**
    
    For information about how to create a VPC, see [Create and manage a VPC](/help/en/vpc/user-guide/create-and-manage-a-vpc).
    
    **DB InstanceClass**
    
    The type of the new database instance. Select an instance type from the available instance types that are displayed in the Data Disaster Recovery console.
    
    **Note**
    
    We recommend that you select the same instance type as that of the source database instance or an instance type with higher specifications.
    
    **Storage Space(GB)**
    
    The storage space of the new database instance. Select a size from the available storage space sizes that are displayed in the Data Disaster Recovery console.
    
    **Note**
    
    To ensure that the database instance has enough space for restoration, we recommend that you select a storage space size that is at least 1.3 times the size of the source database instance or five to six times the size of the full backup set. Data is compressed when Data Disaster Recovery performs backup.
    
    **Database Type**
    
    A MySQL database is used.
    
    **Note**
    
    This parameter is displayed only if you set the **Database Location** parameter to **No public network IP: Port's self-built database (accessed through the database gateway)**.
    
    **Gateway instance ID**
    
    The gateway of the server where the self-managed database resides. For more information about how to install a backup gateway, see [Install a backup gateway](/help/en/dms/install-backup-gateway).
    
    **Note**
    
    This parameter is displayed only if you set the **Database Location** parameter to **No public network IP: Port's self-built database (accessed through the database gateway)**.
    
    **Address**
    
    The public endpoint that is used to connect to the destination database.
    
    **Note**
    
    This parameter is displayed only if you set the **Database Location** parameter to **No public network IP: Port's self-built database (accessed through the database gateway)**, **User-Created Database with Public IP Address <IP Address:Port Number>**, **ECS-Hosted Database**, or **Express Connect DB/VPN Gateway/Intelligent Gateway**.
    
    **Port Number**
    
    The port number that is used to connect to the destination database.
    
    **Note**
    
    This parameter is displayed only if you set the **Database Location** parameter to **No public network IP: Port's self-built database (accessed through the database gateway)** or **User-Created Database with Public IP Address <IP Address:Port Number>**.
    
    **Database Account**
    
    The username of the account that is used to connect to the destination database. The account must have the write permissions on the database.
    
    **Password**
    
    The password of the account that is used to connect to the database that you want to back up.
    
    **Compliance warranty regarding cross-border data transfers**
    
    Read the statement of compliance and select I have read and agree to the preceding compliance commitment.
    
4.  In the **Configure Objects to Restore** step, configure the parameters that are described in the following table and click **Precheck**.
    
    **Parameter**
    
    **Description**
    
    **Conflict Handling**
    
    By default, **Rename Object with the Same Name** is selected for the **Conflict Handling** parameter. For example, if the `job_info` table to be restored shares the same name with a table in the destination database, the system renames the restored table in the following format: `job_info_dbs_<Restore task ID>_<Timestamp>`.
    
    **Objects to Restore**
    
    Select the database or table that you want to restore in the **Available** section and click the rightwards arrow to add it to the **Selected** section.
    
    **Note**
    
    Data Disaster Recovery allows you to restore some databases by database or table. This reduces the amount of data to be restored and shortens the recovery time objective (RTO). For more information about the supported restoration granularity, see [Supported database types and features](/help/en/dms/product-overview/supported-database-types-and-features).
    
5.  If the **Precheck Passed** message appears in the **Precheck** dialog box, click **Start Task**.
    
    To view the database restoration progress, click **Restore Tasks** in the left-side navigation pane.
    
    **Note**
    
    The amount of time required to restore a database depends on the specifications of the backup schedule and the size of the database. Higher specifications offer a higher restoration speed. For more information, see [Performance tests on logical backup and physical backup](/help/en/dms/getting-started/preparations-1#cd2b362acei2q).
    
    If you restore a database to a new ApsaraDB RDS instance, the system takes about 5 to 10 minutes to create the instance. After the database is restored, you can view the new ApsaraDB RDS instance in the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). Alternatively, perform the following operations to view the new ApsaraDB RDS instance: On the Restore Tasks page, click the ID of the restore task. On the page that appears, click the ID of the ApsaraDB RDS instance in the **Basic Information** section. You are navigated to the ApsaraDB RDS console.
    

## **Related operations**

-   You can call the CreateBackupPlan operation to create a backup schedule. You can also call the CreateAndStartBackupPlan operation to create, configure, and start a backup schedule. For more information, see [CreateBackupPlan](/help/en/dms/developer-reference/api-dbs-2019-03-06-createbackupplan) or [CreateAndStartBackupPlan](/help/en/dms/developer-reference/api-dbs-2019-03-06-createandstartbackupplan).
    
-   You can modify the backup source and backup objects of a backup schedule. You can also modify the backup strategies of a backup schedule such as the backup time and backup retention policy. For more information, see [Manage a backup schedule](/help/en/dms/manage-backup-plans-dms).
    
-   You can check the fees that may be charged for a backup schedule. For more information, see [Billing FAQ](/help/en/dms/support/faq-dbs-1#1b5b84516a6hu).
    
-   To reduce costs, you can pause a backup schedule that you do not need. For more information, see [Pause or start a backup schedule](/help/en/dms/pause-backup-schedule).
