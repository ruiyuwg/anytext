This topic describes how to migrate the data of a self-managed MySQL instance to an ApsaraDB RDS for MySQL instance that runs the same MySQL version as the self-managed MySQL instance. You can perform a full backup on the self-managed MySQL instance, upload the full backup file to an Object Storage Service (OSS) bucket, import the full backup file from the OSS bucket to the ApsaraDB RDS console, and then restore the data from the full backup file to a new RDS instance.

## Prerequisites

-   The self-managed MySQL instance meets the cloud migration conditions. For more information, see [Appendix 4: Limits](#2c1a78fea7ly7).
    
-   An OSS bucket is created in the region in which the RDS instance resides. For more information about how to create a bucket, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb).
    
    **Note**
    
    The OSS bucket that you create must reside in the same region as the RDS instance.
    

## Migration process

The migration process consists of the following steps:

[Step 1: Install Percona XtraBackup](#section-osz-8kh-5kh)

[Step 2: Install MySQL Backup Helper](#section-u5k-yl1-dgz)

[Step 3: Back up the self-managed MySQL instance and migrate the backup data to the RDS instance](#section-3ki-wi8-b57)

## Environment

In this topic, the self-managed MySQL instance is deployed on an Elastic Compute Service (ECS) instance. The image that is used to create the self-managed MySQL instance runs CentOS Linux V8.3.2011. If the image runs other Linux distributions, you must use the required commands. For more information, see [Create an instance on the Custom Launch tab](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).

## Step 1: Install Percona XtraBackup

[Percona XtraBackup](https://docs.percona.com/percona-xtrabackup/) is developed by Percona to help you back up MySQL databases without impacting uptime. Percona XtraBackup is compatible with various storage engines. For more information about how to install Percona XtraBackup on Ubuntu, see [Appendix 1: Install XtraBackup on Ubuntu](#5cf944b298398).

You must select the version of Percona XtraBackup based on the MySQL version.

## MySQL 5.7

```
wget https://downloads.percona.com/downloads/Percona-XtraBackup-2.4/Percona-XtraBackup-2.4.29/binary/redhat/8/x86_64/percona-xtrabackup-24-2.4.29-1.el8.x86_64.rpm
yum localinstall percona-xtrabackup-24-2.4.29-1.el8.x86_64.rpm
```

## MySQL 8.0

```
wget https://downloads.percona.com/downloads/Percona-XtraBackup-8.0/Percona-XtraBackup-8.0.35-31/binary/redhat/8/x86_64/percona-xtrabackup-80-8.0.35-31.1.el8.x86_64.rpm
yum localinstall percona-xtrabackup-80-8.0.35-31.1.el8.x86_64.rpm
```

## Step 2: Install MySQL Backup Helper

#### Prerequisites

-   The Go programming language is installed. If Go is not installed, run the following command in the CLI to install Go:
    
    ```
    sudo yum install -y go
    ```
    
-   The Unzip utility is installed. If Unzip is not installed, run the following command in the CLI to install Unzip:
    
    ```
    sudo yum install -y unzip
    ```
    

**Note**

The preceding commands are supported only for CentOS. If you use Ubuntu, install the utility based on [Appendix 2: Install Go and Unzip in an Ubuntu operating system](#c990c78b2cv1s).

#### Procedure

1.  Download the source code package of MySQL Backup Helper.
    
    ```
    wget https://github.com/aliyun/mysql-backup-helper/archive/refs/heads/master.zip
    ```
    
    **Note**
    
    You can download the source code package of MySQL Backup Helper from the [mysql-backup-helper](https://github.com/aliyun/mysql-backup-helper) page.
    
2.  Decompress the source code package of MySQL Backup Helper.
    
    ```
    unzip master.zip
    ```
    
3.  Go to the mysql-backup-helper-master folder and compile the main.go file into an executable file named backup\_helper.
    
    ```
    cd mysql-backup-helper-master
    go build -a -o backup_helper main.go
    ```
    
4.  Go to the oss\_stream folder and compile the oss\_stream.go file into an executable file named oss\_stream.
    
    ```
    cd oss_stream
    go build -a -o oss_stream oss_stream.go
    ```
    

## Step 3: Back up the self-managed MySQL instance and migrate the backup data to the RDS instance

1.  Use MySQL Backup Helper to check whether the self-managed MySQL instance supports backups.
    
    ```
    cd ~/mysql-backup-helper-master && ./backup_helper -host <The IP address of the host in which the self-managed MySQL instance resides> -port <The port that is used to connect to the self-managed MySQL instance> -user <The username of the root account that is used to connect to the self-managed MySQL instance> --password <The password of the root account that is used to connect to the self-managed MySQL instance>
    ```
    
    ![backup_helper](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6891582371/p277277.png)
    
2.  If the self-managed MySQL instance supports backups, perform a full backup on the self-managed MySQL instance and upload the full backup file to your OSS bucket. If no OSS bucket is created, create one. For more information, see **Prerequisites**.
    
    You must select the command based on the MySQL version.
    
    ## MySQL 5.7
    
    ```
    innobackupex --backup --host=<The IP address of the host in which the self-managed MySQL instance resides> --port=<The port that is used to connect to the self-managed MySQL instance> --user=<The username of the root account that is used to connect to the self-managed MySQL instance> --password=<The password of the root account that is used to connect to the self-managed MySQL instance> --stream=xbstream --compress <The temporary directory that is used to store the full backup file> | ./mysql-backup-helper-master/oss_stream/oss_stream -accessKeyId <The AccessKey ID of your Alibaba Cloud account> -accessKeySecret <The AccessKey secret of your Alibaba Cloud account> -bucketName <The name of your OSS bucket> -endpoint <The endpoint that is used to connect to your OSS bucket> -objectName <The name of the full backup file>
    ```
    
    Example:
    
    ```
    innobackupex --backup --host=127.0.0.1 --port=3306 --user=root --password=Aa123456@ --stream=xbstream --compress /root/mysql/data | ./mysql-backup-helper-master/oss_stream/oss_stream -accessKeyId LTAI**************** -accessKeySecret ****** -bucketName test -endpoint oss-********.aliyuncs.com -objectName backup_qp.xb
    ```
    
    The amount of data in the self-managed MySQL instance also affects the time that is required to complete the full backup. A larger amount of data requires a longer period of time. If the self-managed MySQL instance has a large amount of data, we recommend that you run the nohup command to perform the full backup in the background. This way, you can prevent interruptions to the full backup in the event of unexpected logoffs. Sample command:
    
    ```
    nohup sh -c 'innobackupex --backup --host=127.0.0.1 --port=3306 --user=root --password=Aa123456@ --stream=xbstream --compress /root/mysql/data | ./mysql-backup-helper-master/oss_stream/oss_stream -accessKeyId LTAI**************** -accessKeySecret ****** -bucketName test -endpoint oss-ap-southeast-1.aliyuncs.com -objectName backup_qp.xb' &
    ```
    
    ## MySQL 8.0
    
    ```
    xtrabackup --backup --host=<The IP address of the host in which the self-managed MySQL instance resides> --port=<The port that is used to connect to the self-managed MySQL instance> --user=<The username of the root account that is used to connect to the self-managed MySQL instance> --password=<The password of the root account that is used to connect to the self-managed MySQL instance> --stream=xbstream --compress <The temporary directory that is used to store the full backup file> | ./mysql-backup-helper-master/oss_stream/oss_stream -accessKeyId <The AccessKey ID of your Alibaba Cloud account> -accessKeySecret <The AccessKey secret of your Alibaba Cloud account> -bucketName <The name of your OSS bucket> -endpoint <The endpoint that is used to connect to your OSS bucket> -objectName <The name of the full backup file>
    ```
    
    Example:
    
    ```
    xtrabackup --backup --host=127.0.0.1 --port=3306 --user=root --password=Aa123456@ --stream=xbstream --compress /root/mysql/data | ./mysql-backup-helper-master/oss_stream/oss_stream -accessKeyId LTAI**************** -accessKeySecret ******** -bucketName test -endpoint oss-****.aliyuncs.com -objectName backup_qp.xb
    ```
    
    The amount of data in the self-managed MySQL instance also affects the time that is required to complete the full backup. A larger amount of data requires a longer period of time. If the self-managed MySQL instance has a large amount of data, we recommend that you run the nohup command to perform the full backup in the background. This way, you can prevent interruptions to the full backup in the event of unexpected logoffs. Sample command:
    
    ```
    nohup sh -c 'xtrabackup --backup --host=127.0.0.1 --port=3306 --user=root --password=Aa123456@ --stream=xbstream  /root/mysql/data | ./mysql-backup-helper-master/oss_stream/oss_stream -accessKeyId LTAI**************** -accessKeySecret ****** -bucketName test -endpoint oss-ap-southeast-1.aliyuncs.com -objectName backup_qp.xb' &
    ```
    
    **Note**
    
    -   The status of the self-managed MySQL instance during the full backup affects the time that is required to complete the full backup. For example, if a large number of redo log records are generated from a large number of write operations or large transactions are run during the full backup, the time that is required increases. When the full backup is complete, the system displays the `completed OK !` message.
        
    -   If your OSS bucket is temporarily inaccessible, we recommend that you save the full backup file to your computer. When your OSS bucket runs as expected, you can upload the full backup file to your OSS bucket. For more information, see [Appendix 3: Perform a full backup, save the full backup file to your computer, and then upload the full backup file to your OSS bucket](#c6f1a625d31w2).
        
    -   After you upload the full backup file to your OSS bucket, you can log on to the [OSS console](https://oss.console.alibabacloud.com/bucket) to check whether the upload is successful. If the upload failed, you can repeat **this step**.
        
    
3.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the top navigation bar, select the region to which you want to restore the data of the self-managed MySQL instance. In the left-side navigation pane, click **Backups**.
    
4.  On the **User Backups** tab, click **Import Backup**.
    
5.  In the **Import Guide** wizard, read the messages that are displayed and click **Next** until you enter the **3\. Import Data** step.
    
    **Note**
    
    The Import Backup wizard walks you through the migration process. For more information, see [Appendix 3: Perform a full backup, save the full backup file to your computer, and then upload the full backup file to your OSS bucket](#c6f1a625d31w2).
    
    -   **1\. Back Up Source Database**: Perform a full backup on the self-managed MySQL instance.
        
    -   **2\. Upload Backup Files to OSS**: Upload the full backup file of the self-managed MySQL instance to your OSS bucket.
        
    
6.  In the **Step 3: Import the data** step, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **MySQL version**
    
    The value **5.7/8.0** is automatically displayed.
    
    **Note**
    
    You can import the data of a self-managed instance that runs MySQL 5.7 or MySQL 8.0.
    
    **Region**
    
    The region that you specified in [Step 1](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-a-self-managed-mysql-instance-to-an-apsaradb-rds-for-mysql-instance#step-eu6-mes-7ii). You must set this parameter to the region of the OSS bucket that stores the full backup file.
    
    **OSS Bucket**
    
    The OSS bucket that stores the full backup file of the self-managed MySQL instance. For more information about OSS buckets, see [Upload objects](/help/en/oss/upload-download-and-manage-objects-upload-objects#task-zx1-4p4-tdb).
    
    **OSS file name**
    
    The full backup file that is stored as an object in the OSS bucket. You can enter the name of the full backup file in the **OSS file name** field to search for the file. Fuzzy match and exact match are supported.
    
    **Note**
    
    The full backup file that is stored as an object in your OSS bucket must be in the `_QP.XB` format. Alternatively, you can compress the file in the `_QP.XB` format into a package in the `TAR.GZ` format and then store the package as an object in the OSS bucket. For more information, see [Appendix 5: Limits](#2c1a78fea7ly7).
    
    **Note**
    
    The description that helps you identify the full backup file.
    
    **Zone**
    
    The zone of the OSS bucket that stores the full backup file. After you select a zone, ApsaraDB RDS creates a snapshot in the zone in single-digit seconds. This greatly reduces the time that is required to import the full backup file into the OSS bucket.
    
    **Note**
    
    After the full backup file is imported, you can restore the data of the full backup file to a new RDS instance. The new RDS instance resides in the zone that you select.
    
    **Storage Capacity**
    
    The amount of storage that is required for the full backup file. Valid values: 20 to 6000: Unit: GB.
    
    **Note**
    
    By default, the amount of storage that is required is 3 times the size of the full backup file. If the file size multiplied by 3 does not exceed 20 GB, this parameter defaults to 20.
    
    **Note**
    
    -   If ApsaraDB RDS is not authorized to access OSS, click **Authorize** in the lower part of the **3\. Import Data** step. In the lower-left corner of the page that appears, click **Confirm Authorization Policy**.
        
    -   For more information, read the instructions on this page.
        
    
7.  The system creates a task to verify the full backup file on the **User Backups** tab. Wait until the **Status** parameter of the task changes from **Verifying** to **Completed**.
    
    **Important**
    
    The period of time that is required to verify the user backup file varies based on the status of the RDS instance when it is backed up. For example, a long period of time is required to verify the user backup file in the following scenarios: A large number of write operations are performed on the RDS instance during the instance backup and therefore a large number of redo logs are generated, or large transactions are executed on the RDS instance during the instance backup.
    
8.  Find the required full backup file and click **Restore** in the **Actions** column to the right of the **Backup ID/Name** column.
    
9.  Configure the following parameters and click **Next: Instance Configuration**.
    
    **Parameter**
    
    **Description**
    
    **Zone of Primary Node**
    
    The zone to which the primary RDS instance belongs.
    
    **Note**
    
    If you did not select a zone for the OSS bucket that stores the full backup file when you import the file, this parameter is displayed. If you selected a zone for the OSS bucket that stores the full backup file when you import the file, this parameter is not displayed.
    
    **Storage Type**
    
    -   **ESSD PL1**: a performance level 1 (PL1) Enterprise SSD (ESSD).
        
    -   **Standard SSD**: A standard SSD is an elastic block storage device that is designed based on the distributed storage architecture of Alibaba Cloud. You can store data on standard SSDs to separate computing from storage.
        
    
    **Note**
    
    For more information, see [Storage types](/help/en/rds/product-overview/storage-types#undefined).
    
    **Instance Type**
    
    **General-purpose (Entry-level)**: A general-purpose RDS instance exclusively occupies the allocated memory and I/O resources. However, it shares CPU cores and storage resources with the other general-purpose RDS instances that are deployed on the same host.
    
    **Note**
    
    Select the instance type. Each instance type supports a specific number of CPU cores, memory capacity, maximum number of connections, and maximum IOPS. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    
    **Storage Capacity**
    
    Configure the storage capacity for your RDS instance. The storage capacity is provisioned to store data files, system files, log files, and transaction files in the RDS instance. You can adjust the storage capacity at a step size of 5 GB.
    
10.  Configure the following parameters and click **Next: Confirm Order**.
     
     **Parameter**
     
     **Description**
     
     **Network Type**
     
     The network type of the RDS instance. Select **VPC**. A virtual private cloud (VPC) is an isolated network that provides higher security and better performance than the classic network. If you select the VPC network type, you must also configure the **VPC** and **vSwitch of Primary Node** parameters.
     
     **Note**
     
     The RDS instance and the ECS instance that you want to connect must reside in the same VPC. Otherwise, the RDS instance and the ECS instance cannot communicate over an internal network.
     
     **Parameter Template**
     
     The parameter template that is used by the RDS instance. You can select a system parameter template or a custom parameter template. For more information, see [Use a parameter template](/help/en/rds/apsaradb-rds-for-mysql/use-a-parameter-template-to-configure-the-parameters-of-apsaradb-rds-for-mysql-instances#task-1715439).
     
     **Time Zone**
     
     Select a time zone for your RDS instance.
     
     **Table Name Case Sensitivity**
     
     Specifies whether table names in the RDS instance are case-sensitive. If table names in the self-managed MySQL instance are case-sensitive, we recommend that you select **Case-sensitive** to facilitate data migration between the RDS instance and the self-managed MySQL instance.
     
11.  Confirm the configuration of the RDS instance in the **Parameters** section, configure the **Purchase Plan** parameter, read and select Terms of Service, and then click **Pay Now** to complete the payment.
     
     **Note**
     
     ApsaraDB RDS requires 1 to 5 minutes to create the RDS instance. Wait until the instance is created.
     

## What to do next

## Configure the retention period of the full backup file

By default, the full backup file is retained for three days after it is imported into ApsaraDB RDS. You can adjust the retention period based on your business requirements.

**Note**

If you no longer require a full backup file, you can delete the file.

1.  Log on to the [ApsaraDB RDS](https://rds.console.alibabacloud.com/rdsList/basic) console. In the top navigation bar, select a region. In the left-side navigation pane, click **Backups**.
    
2.  Find the required full backup file and click **Set Retention Period** in the **Expiration Time** column to the right of the **Backup ID/Name** column.
    
3.  In the dialog box that appears, select a retention period from the drop-down list provided by ApsaraDB RDS. Alternatively, select **Custom Retention Period** and then enter a number. You can click the upward arrow or the downward arrow to adjust the retention period.
    
    **Note**
    
    The **Expiration Time** column displays the expiration time of the full backup file. If the expiration time exceeds 2099, it is displayed as **Permanent**.
    
4.  Click **OK**.
    

## Add tags to the full backup file

After the full backup file is imported into ApsaraDB RDS, you can add tags to the file.

1.  Log on to the [ApsaraDB RDS](https://rds.console.alibabacloud.com/rdsList/basic) console. In the top navigation bar, select a region. In the left-side navigation pane, click **Backups**.
    
2.  Find the required full backup file and click **+Add** in the **Tags** column to the right of the **Backup ID/Name** column.
    
3.  In the dialog box that appears, click **Create a label**, specify the **Key** and **Value** fields of the tag, click **OK** to the right of the parameter to create the tag, and then click **OK** in the lower-right corner of the dialog box.
    
    **Note**
    
    If a tag exists, select the tag from the **Select the label** drop-down list to add the tag to the full backup file.
    
4.  If you want to change the tag of the full backup file, move the pointer over the tag and click **edit**. In the tooltip that appears, repeat **Step 3** to create or select a tag.
    

## Check log data of the full backup file

If data changes are made in the self-managed MySQL instance during the full backup, the generated full backup file contains log information that records the data changes. You can use the log information to restore the incremental data. For more information, see [Step 3: Back up the self-managed MySQL instance and migrate the backup data to the RDS instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-the-data-of-a-self-managed-mysql-5-7-or-mysql-8-0-instance-to-an-apsaradb-rds-for-mysql-instance#step-pce-rwz-d7d).

1.  Log on to the [ApsaraDB RDS](https://rds.console.alibabacloud.com/rdsList/basic) console. In the top navigation bar, select a region. In the left-side navigation pane, click **Backups**.
    
2.  Find the required full backup file and click **View Details** in the **Actions** column to the right of the **Backup ID/Name** column.
    
3.  In the message that appears, check the log data.
    
    **Note**
    
    The following list describes the log information:
    
    -   **Master\_Log\_File:**: the name of the first log file that stores incremental data.
        
    -   **Master\_Log\_Position:**: the first log entry that contains incremental data in the first log file.
        
    

## Delete the full backup file

If you no longer need the full backup file, you can delete the file to reduce costs.

1.  Log on to the [ApsaraDB RDS](https://rds.console.alibabacloud.com/rdsList/basic) console. In the top navigation bar, select a region. In the left-side navigation pane, click **Backups**.
    
2.  Find the required full backup file and click **Delete** in the **Actions** column to the right of the **Backup ID/Name** column.
    
3.  In the message that appears, click **OK**.
    

## Perform other operations

-   **Filter Columns**: You can click the icon to show or hide columns on the **User Backups** tab. By default, all columns are displayed.
    
    1.  Log on to the [ApsaraDB RDS](https://rds.console.alibabacloud.com/rdsList/basic) console. In the top navigation bar, select a region. In the left-side navigation pane, click **Backups**.
        
    2.  In the upper-right corner of the tab, click the ![自定义列表项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5662992361/p290881.png) icon. In the dialog box that appears, select the columns that you want to display or hide, and click the ![右](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5662992361/p290883.png) or ![左](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5662992361/p290884.png) icon to manage the columns.
        
        **Note**
        
        The columns in the left-side list are hidden, and the columns in the right-side list are displayed.
        
    3.  Click **OK**.
        
-   **Export Instance List**: You can click the icon to export the backup information as a CSV file.
    
    1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the top navigation bar, select a region. In the left-side navigation pane, click **Backups**.
        
    2.  In the upper-right corner of the tab, click the ![导出资源列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5662992361/p290890.png) icon to export the backup information.
        
-   **Refresh**: You can click the icon to refresh the User Backups tab.
    
    1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the top navigation bar, select a region. In the left-side navigation pane, click **Backups**.
        
    2.  Click the ![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5662992361/p290892.png) icon to refresh the User Backups tab.
        

## Appendix 1: Install Percona XtraBackup in an Ubuntu operating system

Select the Percona XtraBackup version to install based on the MySQL version.

## MySQL 5.7

1.  Install Percona XtraBackup.
    
    ```
    wget https://downloads.percona.com/downloads/Percona-XtraBackup-2.4/Percona-XtraBackup-2.4.29/binary/redhat/8/x86_64/percona-xtrabackup-24-2.4.29-1.el8.x86_64.rpm
    yum localinstall percona-xtrabackup-24-2.4.29-1.el8.x86_64.rpm
    ```
    
2.  Install the qpress tool.
    
    ```
    sudo apt-get install -y qpress
    ```
    
    **Note**
    
    qpress is used to unzip the backup files that are generated by Percona XtraBackup. If you are using an Ubuntu operating system, [Percona XtraBackup](https://docs.percona.com/percona-xtrabackup/) is not integrated with qpress and you must install qpress.
    

**Note**

If a message similar to `The following packages have unmet dependencies` is displayed when you perform any of the preceding steps, run the `apt-get -f install` command to install the required dependency packages. Then, perform the step again.

## MySQL 8.0

1.  Install Percona XtraBackup.
    
    ```
    wget https://downloads.percona.com/downloads/Percona-XtraBackup-8.0/Percona-XtraBackup-8.0.35-31/binary/redhat/8/x86_64/percona-xtrabackup-80-8.0.35-31.1.el8.x86_64.rpm
    yum localinstall percona-xtrabackup-80-8.0.35-31.1.el8.x86_64.rpm
    ```
    
2.  Install the qpress tool.
    
    ```
    sudo apt-get install -y qpress
    ```
    
    **Note**
    
    qpress is used to unzip the backup files that are generated by Percona XtraBackup. If you are using an Ubuntu operating system, [Percona XtraBackup](https://docs.percona.com/percona-xtrabackup/) is not integrated with qpress and you must install qpress.
    

**Note**

If a message similar to `The following packages have unmet dependencies` is displayed when you perform any of the preceding steps, run the `apt-get -f install` command to install the required dependency packages. Then, perform the step again.

## Appendix 2: Install Go and Unzip in an Ubuntu operating system

-   Install the Go programming language.
    
    ```
    sudo apt-get install -y software-properties-common
    sudo add-apt-repository ppa:longsleep/golang-backports
    sudo apt-get update
    sudo apt-get install -y golang-go
    ```
    
-   Install the Unzip utility.
    
    ```
    sudo apt-get -y install unzip
    ```
    

## Appendix 3: Perform a full backup, save the full backup file to your computer, and then upload the full backup file to your OSS bucket

1.  Back up all data of your self-managed MySQL instance to your on-premises machine.
    
    Select the command to run based on the MySQL version.
    
    ## MySQL 5.7
    
    ```
    innobackupex --backup --host=<The IP address of the host in which the self-managed MySQL instance resides> --port=<The port that is used to connect to the self-managed MySQL instance> --user=<The username of the root account that is used to connect to the self-managed MySQL instance> --password=<The password of the root account that is used to connect to the self-managed MySQL instance> --stream=xbstream --compress <The temporary directory that is used to store the full backup file> > /<The directory that is used to store the full backup file>/<The name of the full backup file>_qp.xb
    ```
    
    Example:
    
    ```
    innobackupex --backup --host=127.0.0.1 --port=3306 --user=root --password=Aa123456@ --stream=xbstream --compress /root/mysql/data > /root/backup_qp.xb
    ```
    
    ## MySQL 8.0
    
    ```
    xtrabackup --backup --host=<The IP address of the host in which the self-managed MySQL instance resides> --port=<The port that is used to connect to the self-managed MySQL instance> --user=<The username of the root account that is used to connect to the self-managed MySQL instance> --password=<The password of the root account that is used to connect to the self-managed MySQL instance> --stream=xbstream --compress <The temporary directory that is used to store the full backup file> > /<The directory that is used to store the full backup file>/<The name of the full backup file>_qp.xb
    ```
    
    Example:
    
    ```
    xtrabackup --backup --host=127.0.0.1 --port=3306 --user=root --password=Aa123456@ --stream=xbstream --compress /root/mysql/data > /root/backup_qp.xb
    ```
    
2.  Upload the full backup file to your OSS bucket by using OSS\_Stream.
    
    ```
    cat /<The directory that is used to store the full backup file>/<The name of the full backup file>_qp.xb | ./mysql-backup-helper-master/oss_stream/oss_stream -accessKeyId LTAI**************** -accessKeySecret ******** -bucketName test -endpoint oss-********.aliyuncs.com -objectName backup_qp.xb
    ```
    
    Example:
    
    ```
    cat /root/backup_qp.xb | ./mysql-backup-helper-master/oss_stream/oss_stream -accessKeyId ******** -accessKeySecret LTAI**************** -bucketName test -endpoint oss-********.aliyuncs.com -objectName backup_qp.xb
    ```
    

## Appendix 4: Limits

**Item**

**Description**

MySQL version

The self-managed MySQL instance must run one of the following MySQL versions:

-   MySQL 5.7.32 or earlier
    
-   MySQL 8.0.18 or earlier
    

**Note**

-   The self-managed MySQL instance must run the same MySQL version as the destination RDS instance. For example, the backup data of a self-managed MySQL instance that runs MySQL 5.7 can be restored only to an RDS instance that runs MySQL 5.7.
    
-   If the MySQL version does not meet the requirements, you can migrate the data based on the instructions provided in [Migrate data from a self-managed MySQL database to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance).
    

Self-managed MySQL instance

-   The data of the self-managed MySQL instance must be stored in the datadir directory on the host in which the instance resides. You can run the following command in the CLI to access the datadir directory: `mysqladmin -u<The username of the root account that is used to connect to the self-managed MySQL instance> -p<The password of the root account that is used to connect to the self-managed MySQL instance> variables | grep datadir`.
    
-   You must set the `innodb_data_file_path` parameter to the default value `ibdata1`.
    

Backup

-   After the full backup of the self-managed MySQL instance is complete, the incremental data that is generated in the self-managed instance is not included in the full backup file.
    
-   If the self-managed MySQL instance runs MySQL 5.7, you must use Percona XtraBackup 2.4 to back up the instance.
    
-   When you use Percona XtraBackup to back up the self-managed MySQL instance, you cannot configure the `--tables`, `--tables-exclude`, `--tables-file`, `--databases`, or `--databases-file` option.
    
-   You cannot read encrypted objects from OSS buckets. Therefore, you must set the **Encryption Method** parameter to **None** when you create an OSS bucket.
    
-   Differential backup files and log backup files are not supported.
    
-   The name of the full backup file cannot contain special characters. If the name of the full backup file contains special characters, the file cannot be imported into the destination RDS instance.
    
-   After you authorize the service account of ApsaraDB RDS to access OSS buckets, a RAM role named AliyunRDSImportRole is created in Resource Access Management (RAM). Do not modify or delete this RAM role. If you modify or delete this RAM role, ApsaraDB RDS cannot download objects from OSS buckets.
    
-   Before the migration is complete, do not delete the full backup file from the OSS bucket. If you delete the full backup file before the migration is complete, the migration fails.
    
-   The full backup file that is stored as an object in your OSS bucket must be in the `_QP.XB` format. Alternatively, you can compress the file in the `_QP.XB` format into a package in the `TAR.GZ` format and then store the package as an object in the OSS bucket.
    
    **Note**
    
    If the full backup file is in a format such as `.xbstream format` that does not meet format requirements, we recommend that you restore the full backup file to your self-managed MySQL instance, change the file format into `_QP.XB`, and then migrate data of the self-managed MySQL instance to an RDS instance. Alternatively, you can use other cloud migration solutions. For more information, see [Migrate data from a self-managed MySQL database to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance).
    

OSS

-   If you use the CLI to upload the full backup file as a set of parts to your OSS bucket, you must make sure that the size of the file does not exceed 16 TB. For more information, see [Limits](/help/en/oss/user-guide/limits#concept-pzk-crg-tdb).
    
-   Your OSS bucket must reside in the same region as the destination RDS instance.
    

Restoration

-   You can migrate the data of the self-managed MySQL instance only to a new RDS instance. This way, you can prevent data overwrites in an existing RDS instance due to unintended operations.
    
-   You cannot migrate the data of the self-managed MySQL instance to an RDS instance whose storage capacity is less than the amount of data in the self-managed MySQL instance. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    
-   When you import the full backup file from your OSS bucket into ApsaraDB RDS, ApsaraDB RDS creates a temporary RDS instance, imports the full backup file into the temporary RDS instance, and then restores the data from the temporary RDS instance to the destination RDS instance. The default storage capacity of the temporary RDS instance is five times the size of the full backup file. If the available storage on the temporary RDS instance is insufficient after the full backup file is imported, you can increase the storage capacity of the temporary RDS instance.
    
-   The accounts, custom functions, and stored procedures of the self-managed MySQL instance cannot be migrated to the destination RDS instance. You must record the accounts, custom functions, and stored procedures. After the migration is complete, you must manually add the accounts, custom functions, and stored procedures to the destination RDS instance.
    
-   The time zone information of the self-managed MySQL instance cannot be migrated to the destination RDS instance. You must record the time zone information. After the migration is complete, you must manually configure the time zone of the destination RDS instance.
    
-   The destination RDS instance must be a pay-as-you-go instance that runs MySQL 5.7 or MySQL 8.0 on RDS Basic Edition with standard SSDs.
    
    **Note**
    
    After the migration is complete, you can perform the following operations:
    
    -   [Upgrade of the major engine version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb)
        
    -   [Upgrade from RDS Basic Edition to RDS High-availability Edition](/help/en/rds/apsaradb-rds-for-mysql/upgrade-an-apsaradb-rds-for-mysql-instance-from-basic-edition-to-high-availability-edition#task-2326701)
        
    -   [Specification change](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb)
        
    -   [Change the billing method from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-mysql/change-the-billing-method-of-an-apsaradb-rds-for-mysql-instance-from-pay-as-you-go-to-subscription#concept-gtz-lbj-wdb)
        
    

Replication

-   Data can be replicated based only on global transaction identifiers (GTIDs). Therefore, you must enable GTID-based replication and set the gtid\_mode parameter and the enforce\_gtid\_consistency parameter to `ON` in the self-managed MySQL instance.
    
-   The default retention period of backup validation records is seven days. ApsaraDB RDS automatically deletes the backup validation records that are generated seven days ago and the snapshots of these records. Therefore, after the migration is complete, we recommend that you replicate the incremental data of the self-managed MySQL instance to the destination RDS instance at your earliest opportunity.
