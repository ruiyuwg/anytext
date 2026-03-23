This topic describes how to use Percona XtraBackup to restore the data of an ApsaraDB RDS for MySQL instance from a physical backup file to a self-managed MySQL database.

## **Background information**

ApsaraDB RDS for MySQL allows you to restore the data of an RDS instance from backup files to a self-managed database. Various restoration methods, such as restoration from physical backup files and restoration from logical backup files, are supported. For more information about how to select a data restoration method, see [Restoration](/help/en/rds/apsaradb-rds-for-mysql/restoration-1/#66b768b6fc42u).

You can perform the following operations to check the backup method of your RDS instance: Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic) and go to the details page of your RDS instance. In the left-side navigation pane of the instance details page, click **Backup and Restoration**. On the page that appears, choose **Base Backups** > **Data Backup**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4912232861/p613240.png)

**Note**

If no physical backup files are created, you can manually create a physical backup file before you perform the operations that are described in this topic. For more information, see [Manually back up an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manually-back-up-an-apsaradb-rds-for-mysql-instance).

## **Scenarios**

If you do not want to use your RDS instance for a long period of time, or you have downloaded the physical backup file of a released RDS instance, you can restore the data of the RDS instance from the physical backup file to a self-managed MySQL database. This way, the data of your RDS instance can be retained.

## Prerequisites

-   Your RDS instance meets the following requirements:
    
    -   The RDS instance runs MySQL 8.0, MySQL 5.7, MySQL 5.6, or MySQL 5.5.
        
    -   The RDS instance runs RDS High-availability Edition.
        
    -   The RDS instance uses Premium Local SSDs.
        
    
    **Note**
    
    -   You can go to the **Basic Information** page of your RDS instance to obtain the preceding information.
        
    -   Physical backup files can be downloaded only when RDS instances run RDS High-availability Edition. If your RDS instance runs RDS Basic Edition, you can restore the data of the RDS instance based on the instructions provided in [Other FAQ](#7540f2da4cawh).
        
    
-   Tables in the RDS instance are not encrypted by using Transparent Data Encryption (TDE). For more information, see [Configure TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#task-jrp-dw4-ydb).
    
    **Important**
    
    -   If some tables are encrypted by using TDE, errors occur during the restoration. Before you download the backup files of the RDS instance, you must decrypt the encrypted tables. For more information, see [Configure TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#section-0nx-bpi-ef8).
        
    -   You can perform the following operations to check whether TDE is enabled: Go the **Data Security** page of your RDS instance. Then, click the **TDE** tab.
        
    
-   The RAM user that you use to log on to your RDS instance is granted the permissions to download backup files. For more information about how to grant permissions to a RAM user, see [Authorize a RAM user with read-only permissions to download backup files](/help/en/rds/apsaradb-rds-for-mysql/grant-backup-file-download-permissions-to-a-ram-user-with-read-only-permissions#concept-qmt-zxm-cgb).
    

## **Limits**

-   **The restoration method described in this topic is suitable only for RDS instances that use local disks.** If you want to use the snapshot backup files to restore the data of an RDS instance that uses cloud disks, follow the instructions provided in [Restore the data of an ApsaraDB RDS for MySQL instance to a self-managed MySQL instance by using snapshot backup files](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-instance-by-using-a-csv-file-or-an-sql-file).
    
-   **The restoration method described in this topic restores full data in a backup file.** If you want to restore the data of only specific databases and tables, follow the instructions provided in [Restore the data of an ApsaraDB RDS for MySQL instance from a logical backup file to a self-managed MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance#concept-zql-2c5-vfb).
    
-   You can restore the data of an RDS instance from a physical backup file **only** to a self-managed MySQL database that runs on **Linux**.
    
-   This solution is not suitable for data restoration for RDS clusters that use the MySQL group replication (MGR) mode.
    

## **Impacts**

-   If other services are running in your self-managed MySQL database, the services become unavailable after you restore the data of your RDS instance from a physical backup file to the self-managed MySQL database.
    
-   The restoration method described in this topic is used to restore the data of your RDS instance to a new data directory in your self-managed MySQL database. This does not affect the original data in the self-managed database.
    

## **Implementation**

The sections describes the steps that you must perform to restore data from a physical backup file:

1.  Perform a full physical backup on your RDS instance.
    
2.  Download the physical backup file to your computer and use the `qpress` tool to decompress the file.
    
3.  Use `Percona XtraBackup` to restore the data to a data directory of your self-managed MySQL database from the decompressed backup file.
    
4.  Restart your self-managed MySQL database. Then, you can view the data of your RDS instance in the self-managed MySQL database.
    

## **Usage notes**

-   A download URL is valid only for 1 hour after it is generated. If a download URL expires, you can refresh the page to obtain the latest download URL.
    
-   Do not modify or delete a physical backup file. Otherwise, the file may be damaged and cannot be restored. If you need to modify a physical backup file of an RDS instance, restore the data of the RDS instance from the physical backup file to your self-managed MySQL database first and then modify the file.
    

## **Billing rules**

-   If you need to perform manual backups, take note of the backup storage that is used to store the manual backup files. If the backup storage usage exceeds the free quota, [you are charged for the excess backup storage that you use](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance).
    
-   If your self-managed MySQL database is deployed on your on-premises machine, you must download backup files over the Internet. If the traffic that is generated when you download the backup files exceeds the free quota, [you are charged for the excess Internet traffic](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#section-p6l-jre-70e).
    
    **Note**
    
    If your self-managed MySQL database is deployed on an **Elastic Compute Service (ECS)** instance that resides in the same region and virtual private cloud (VPC) as your RDS instance, you can download backup files over an internal network. In this case, no traffic fees are generated.
    

## **Preparations**

### Environment preparation

1.  In this example, `CentOS 7.9 64-bit` is used. If your self-managed MySQL database runs other Linux distributions, use the required commands.
    
2.  Deploy the self-managed MySQL database. The major engine version of the database **must be the same as** that of your RDS instance. For example, the self-managed MySQL database and the RDS instance both run MySQL 8.0.
    
    You can run the following command to query the major engine version of the self-managed MySQL database:
    
    ```
    mysql --version
    ```
    
3.  Query the **directory of the configuration file** of the self-managed MySQL database.
    
    The directory of the configuration file varies based on the major engine version of the self-managed MySQL database. In this example, the following directories are involved:
    
    -   MySQL 8.0 or MySQL 5.7: `/etc/my.cnf`.
        
    -   MySQL 5.6: `/usr/my.cnf`.
        
    -   MySQL 5.5: You must run the `echo "[mysqld]" | sudo tee /etc/my.cnf` command to create a directory.
        
    
    You can run the following command to query the directory of the configuration file of the self-managed MySQL database:
    
    ```
    sudo find / -name my.cnf
    ```
    
    **Note**
    
    If the query results are inconsistent with the listed directories, use the correct directory when you run subsequent commands.
    
4.  Create a **backup decompression directory** named `mysql_bkdata` to store the decompressed backup files.
    
    You can run the following commands to create a **backup decompression directory**:
    
    ```
    sudo mkdir /var/mysql_bkdata
    sudo chown -R $USER:$USER /var/mysql_bkdata
    ```
    
    **Note**
    
    The `$USER:$USER` parameter in the preceding command indicates the current user and user group. The value is obtained from environment variables. You do not need to change the value of the parameter.
    
5.  Create a **data directory** named `mysql_newdata` to which the data of the backup files is restored. The data in this directory is used when your database is started.
    
    You can run the following commands to create a **data directory**:
    
    ```
    sudo mkdir /var/mysql_newdata
    sudo chown -R $USER:$USER /var/mysql_newdata
    ```
    
    **Note**
    
    The `$USER:$USER` parameter in the preceding command indicates the current user and user group. The value is obtained from environment variables. You do not need to change the value of the parameter.
    

### Tool preparation

1.  Install Percona XtraBackup.
    
    ## MySQL 8.0
    
    If the RDS instance runs MySQL 8.0, download Percona XtraBackup based on the operating system (OS) of the host on which the instance resides. Then, upload the downloaded package to the server and install Percona XtraBackup. If you need to upload Percona XtraBackup to an ECS instance, refer to [Upload or download files](/help/en/ecs/user-guide/upload-a-file-from-on-premises-to-an-ecs-instance/).
    
    **Important**
    
    RDS instances that run MySQL 8.0 support redo log files. The open source Percona XtraBackup may have compatibility issues on these instances. We recommend that you use the XtraBackup tool provided by ApsaraDB RDS.
    
    **Host environment**
    
    **Install XtraBackup 8.0**
    
    **Example installation command**
    
    **Note**
    
    In this example, XtraBackup 8.0 is downloaded to the `/Xtrabackup8.0` directory. The actual installation command varies based on the download directory. **Adjust the installation command based on the actual download directory of XtraBackup 8.0.**
    
    Linux 6 (x86\_64)
    
    [RDS XtraBackup 8.0](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230825/rawi/t-rds-xtrabackup-80-8.0.31-20230817110455.alios6.x86_64 \(1\).rpm)
    
    ```
    sudo yum localinstall -y /XtraBackup8.0/t-rds-xtrabackup-80-8.0.31-20230817110455.alios6.x86_64
    ```
    
    Linux 7 (x86\_64)
    
    [RDS XtraBackup 8.0](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230825/kpof/t-rds-xtrabackup-80-8.0.31-20230817110455.alios7.x86_64.rpm)
    
    ```
    sudo yum localinstall -y /XtraBackup8.0/t-rds-xtrabackup-80-8.0.31-20230817110455.alios7.x86_64.rpm
    ```
    
    Linux 7 (ARM AArch64)
    
    [RDS XtraBackup 8.0](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230825/gtrm/t-rds-xtrabackup-80-8.0.31-20230817110455.alios7.aarch64.rpm)
    
    ```
    sudo yum localinstall -y /XtraBackup8.0/t-rds-xtrabackup-80-8.0.31-20230817110455.alios7.aarch64.rpm
    ```
    
    Linux 8 (ARM AArch64)
    
    [RDS XtraBackup 8.0](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230825/kngy/t-rds-xtrabackup-80-8.0.31-20230817110455.al8.aarch64.rpm)
    
    ```
    sudo yum localinstall -y /XtraBackup8.0/t-rds-xtrabackup-80-8.0.31-20230817110455.al8.aarch64.rpm
    ```
    
    **Note**
    
    After the installation, the executable file for Percona XtraBackup is stored in the `/u01/xtrabackup80/bin` directory, and the directory is not added to the `PATH` environment variable of the Linux system.
    
    If you want to run Percona XtraBackup-related commands in any directory, you can use the following methods:
    
    -   You can run the commands in which the full path is specified. In this topic, the full path is specified in multiple commands. Example: `/u01/xtrabackup80/bin/xtrabackup --xxxxxx`.
        
    -   You can manually add the `/u01/xtrabackup80/bin` directory to the `PATH` environment variable of the system.
        
    
    ## MySQL 5.7, MySQL 5.6, or MySQL 5.5
    
    If the RDS instance runs MySQL 5.7, MySQL 5.6, or MySQL 5.5, download and install [Percona XtraBackup 2.4](https://docs.percona.com/percona-xtrabackup/2.4/installation.html).
    
    In this example, `Percona XtraBackup 2.4.28` is installed. Sample commands:
    
    ```
    wget https://downloads.percona.com/downloads/Percona-XtraBackup-2.4/Percona-XtraBackup-2.4.28/binary/redhat/7/x86_64/percona-xtrabackup-24-2.4.28-1.el7.x86_64.rpm
    sudo yum localinstall -y percona-xtrabackup-24-2.4.28-1.el7.x86_64.rpm
    ```
    
2.  Install the qpress tool.
    
    ```
    ## Download the TAR package of the executable file.
    wget "https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20230406/flxd/qpress-11-linux-x64.tar"
    
    ## Decompress the downloaded TAR package.
    tar -xvf qpress-11-linux-x64.tar
    
    ## Configure execute permissions on the qpress file.
    sudo chmod 775 qpress
    
    ## Copy the qpress file to the /usr/bin directory to allow global access.
    sudo cp qpress /usr/bin
    ```
    

## **Step 1: Download a backup file**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Backup and Restoration**.
    
3.  On the page that appears, choose **Base Backups** > **Data Backup**. Find the physical backup file that you want to download and click **Download Instance Backup** in the **Actions** column.
    
    -   If no physical backup files are available, you can perform a manual backup to create a physical backup file. For more information, see [Manually back up an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manually-back-up-an-apsaradb-rds-for-mysql-instance).
        
    -   If the **Advanced Download** page appears, your RDS instance uses cloud disks, and you can restore the data of the RDS instance only based on the instructions provided in [Restore the data of an ApsaraDB RDS for MySQL instance to a self-managed MySQL instance by using snapshot backup files](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-instance-by-using-a-csv-file-or-an-sql-file).
        
4.  In the **Download Instance Backup Set** dialog box, click **Copy Internal URL** or **Copy Public URL**.
    
    **Important**
    
    -   If you use an internal URL to download the backup file, make sure that the server to which you log on and the RDS instance reside in the same VPC. If the server and the RDS instance reside in cross-region VPCs or if the server resides in the classic network and the RDS instance resides in a VPC, you cannot download the backup file by using the internal URL.
        
    -   If you use the external URL to download the backup file, you are charged for the excess Internet traffic that you consume. For more information, see [Billing rules](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#section-p6l-jre-70e).
        
    -   A download URL is valid only for 1 hour after it is generated. If a download URL expires, you can refresh the page to obtain the latest download URL.
        
    -   We recommend that you do not modify or delete the physical backup file. If you modify or delete the physical backup file, the file may be damaged and cannot be restored. If you need to modify the physical backup file, we recommend that you restore the data of the RDS instance from the physical backup file to the self-managed MySQL database and then modify the file.
        
    
5.  Log on to the Linux server on which your self-managed MySQL database resides and run the following command to download the physical backup file:
    
    ```
    wget -c 'https://****.bak.rds.aliyuncs.com/****_xb.qp?****' -O test_xb.qp
    ```
    
    **Note**
    
    -   Replace `https://****.bak.rds.aliyuncs.com/****_xb.qp?****` in the command with the download URL that you copied. After you download the backup file, save the file and keep it confidential.
        
    -   In the command,`test_xb.qp` specifies the new name of the file that you want to save. You can specify a custom file name, but **the file name extension must be the same as that specified in the download URL**.
        
        The name of a downloaded ApsaraDB RDS for MySQL backup file ends with the`_xb.qp` or `_qp.xb` extension. You can view the extension of a backup file in its download URL.
        
    -   If your RDS instance runs MySQL 5.5, the file name extension of the physical backup file is `tar.gz`.
        
    

### **FAQ about file downloads**

-   Why is an error reported when I download a data file?
    
    If you run the `wget -c 'https://****.bak.rds.aliyuncs.com/****_xb.qp?****' -O test_xb.qp` command to download a data file, you must use a pair of single quotation marks (') to enclose the download URL. This way, the application can identify the download URL.
    

## **Step 2: Decompress the backup file**

Use one of the following methods to decompress the downloaded backup file based on the extension of the file:

**Important**

Before you run the command, make sure that `Percona XtraBackup` and `qpress` are installed on the server on which your self-managed MySQL database resides. For more information, see [Preparations](#d8a0edc0ce8cv).

\_xb.qp

When you run the following command, replace `test_xb.qp` with the name of the backup file that you saved and replace `/var/mysql_bkdata/` with the backup decompression directory that you created.

```
### MySQL 8.0
qpress -do  test_xb.qp | /u01/xtrabackup80/bin/xbstream -x -v -C /var/mysql_bkdata/

### MySQL 5.5/5.6/5.7
qpress -do  test_xb.qp | xbstream -x -v -C /var/mysql_bkdata/
```

\_qp.xb

When you run the following commands, replace `test_qp.xb` with the name of the backup file that you saved and replace `/var/mysql_bkdata/` with the backup decompression directory that you created.

```
## Step 1: Parse the file.
cat test_qp.xb | xbstream -x -v -C /var/mysql_bkdata/

## Step 2: Decompress the file.
### MySQL 5.5/5.6/5.7
innobackupex --decompress --remove-original /var/mysql_bkdata/

### MySQL 8.0
/u01/xtrabackup80/bin/xtrabackup --decompress --remove-original --target-dir=/var/mysql_bkdata/
```

.tar.gz

When you run the following command, replace `test.tar.gz` with the name of the backup file that you saved and replace `/var/mysql_bkdata/` with the backup decompression directory that you created.

```
tar -izxvf test.tar.gz -C /var/mysql_bkdata/
```

.xb.gz

When you run the following command, replace `test.xb.gz` with the name of the backup file that you saved and replace `/var/mysql_bkdata/` with the backup decompression directory that you created.

```
### MySQL 8.0
gzip -d -c test.xb.gz | /u01/xtrabackup80/bin/xbstream -x -v -C /var/mysql_bkdata/

### MySQL 5.5/5.6/5.7
gzip -d -c test.xb.gz | xbstream -x -v -C /var/mysql_bkdata/
```

### **FAQ about decompression**

-   What do I do if the system reports an error when I decompress the backup file that I downloaded?
    
    Perform the following operations to identify the causes of the error and resolve the error:
    
    Check whether the backup file is a physical backup file.
    
    Check whether the backup file has one of the following valid file name extensions: `xb.qp`, `.tar.gz`, `.xb.gz`, and `_qp.xb`.
    
    The decompression commands vary based on the file name extension of the backup file.
    
    The following error messages may be displayed during the decompression:
    
    -   The `sh: qpress: command not found` error message is displayed.
        
        Solution: Check whether qpress is installed on the server on which your self-managed MySQL database resides. For more information, see [Prerequisites](#section-ooe-3fz-r97).
        
    -   An error message that indicates that innobackupex is not found is displayed. This error is reported if the file name extension of the backup file is \_qp.xb.
        
        Solution: Check whether Percona XtraBackup is installed on the server on which your self-managed MySQL database resides. For more information, see [Prerequisites](#section-ooe-3fz-r97).
        
    -   The `can't change to dir to xx( errorcode:no such file or directory)` error message is displayed when you run the preceding cat command. This error is reported if the file name extension of the backup file is \_qp.xb.
        
        Solution: Check whether the directory in which you want to store the decompressed file or the file name is correct.
        

## **Step 3: Restore data**

**Important**

Before you restore data to your self-managed MySQL database, stop the database.

You can run the `ps -ef | grep '[m]ysql'` command to check whether `MySQL`\-related processes exist. If MySQL-related processes exist, you can run the `sudo kill -9 <PID>` command to terminate the processes.

#### **Restore the data of an RDS instance that runs MySQL 8.0**

1.  Prepare for the restoration.
    
    ```
    /u01/xtrabackup80/bin/xtrabackup --defaults-file=/var/mysql_bkdata/backup-my.cnf  --prepare --target-dir=/var/mysql_bkdata/
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the configuration file that contains default MySQL settings.
    
    After the physical backup file is decompressed, a file named `backup-my.cnf` is obtained and is stored in the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example.
    
    \--prepare
    
    The command that is used to prepare Percona XtraBackup.
    
    \--target-dir
    
    The **backup decompression directory**, which is `/var/mysql_bkdata/` in this example.
    
2.  Modify the datadir parameter of the self-managed MySQL database.
    
    1.  Modify the configuration file of the database.
        
        ```
        sudo vim /etc/my.cnf
        ```
        
        For more information about how to query the directory of the configuration file, see [Preparations](#d8a0edc0ce8cv).
        
    2.  Press `i` to enter the insert mode and change the value of the **datadir** parameter to `/var/mysql_newdata`.
        
        ```
        datadir = /var/mysql_newdata
        ```
        
        `mysql_newdata` specifies the new data directory of your self-managed MySQL database. For more information, see [Preparations](#d8a0edc0ce8cv).
        
    3.  Change the ownership of the new data directory.
        
        ```
        chown -R mysql:mysql /var/mysql_newdata 
        ```
        
    4.  Press the `Esc` key to exit the edit mode, and enter `:wq` to save the file and exit.
        
3.  Restore data.
    
    ```
    sudo xtrabackup --defaults-file=/etc/my.cnf --copy-back --target-dir=/var/mysql_bkdata/
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the `my.cnf` file. You can obtain the data directory to which the data is restored from the **datadir** parameter in the configuration file.
    
    \--copy-back
    
    The restoration command that is run by Percona XtraBackup.
    
    \--target-dir
    
    The **backup decompression directory**, which is `/var/mysql_bkdata/` in this example. Percona XtraBackup restores the data in this directory to the **data directory** of the self-managed MySQL database.
    

#### **Restore the data of an RDS instance that runs MySQL 5.7**

1.  Prepare for the restoration.
    
    ```
    innobackupex --defaults-file=/var/mysql_bkdata/backup-my.cnf --apply-log /var/mysql_bkdata/
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the configuration file that contains default MySQL settings.
    
    After the physical backup file is decompressed, a file named `backup-my.cnf` is obtained and is stored in the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example.
    
    \--apply-log
    
    The command that is used to prepare Percona XtraBackup.
    
    This parameter is followed by the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example. The backup decompression directory stores the backup file.
    
2.  Modify the `my.cnf` configuration file of the self-managed MySQL database.
    
    1.  Modify the configuration file of the database.
        
        ```
        sudo vim /etc/my.cnf
        ```
        
        For more information about how to query the directory of the configuration file, see [Preparations](#d8a0edc0ce8cv).
        
    2.  Press `i` to enter the insert mode and change the value of the **datadir** parameter to `/var/mysql_newdata`.
        
        ```
        datadir = /var/mysql_newdata
        ```
        
        `mysql_newdata` specifies the new data directory of your self-managed MySQL database. For more information, see [Preparations](#d8a0edc0ce8cv).
        
    3.  Add the following content to the `my.cnf` file:
        
        ```
        innodb_undo_tablespaces=2
        innodb_undo_directory=/var/mysql_newdata
        ```
        
        **Important**
        
        The value of the **innodb\_undo\_tablespaces** parameter must be the same as the value in the `/var/mysql_bkdata/backup-my.cnf` file. You can run the `cat /var/mysql_bkdata/backup-my.cnf | grep innodb_undo_tablespaces` command to query the value.
        
    4.  Press the `Esc` key to exit the edit mode, and enter `:wq` to save the file and exit.
        
3.  Restore data.
    
    ```
    sudo innobackupex --defaults-file=/etc/my.cnf --copy-back /var/mysql_bkdata/
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the `my.cnf` file. You can obtain the data directory to which the data is restored from the **datadir** parameter in the configuration file.
    
    \--copy-back
    
    The restoration command that is run by Percona XtraBackup.
    
    This parameter is followed by the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example. Percona XtraBackup restores the data in the directory to the **data directory** of the self-managed MySQL database.
    

#### **Restore the data of an RDS instance that runs MySQL 5.6**

1.  Prepare for the restoration.
    
    ```
    innobackupex --defaults-file=/var/mysql_bkdata/backup-my.cnf --apply-log /var/mysql_bkdata/
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the configuration file that contains default MySQL settings.
    
    After the physical backup file is decompressed, a file named `backup-my.cnf` is obtained and is stored in the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example.
    
    \--apply-log
    
    The command that is used to prepare Percona XtraBackup.
    
    This parameter is followed by the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example. The backup decompression directory stores the backup file.
    
2.  Modify the datadir parameter of the self-managed MySQL database.
    
    1.  Modify the configuration file of the database.
        
        ```
        sudo vim /usr/my.cnf
        ```
        
        For more information about how to query the directory of the configuration file, see [Preparations](#d8a0edc0ce8cv).
        
    2.  Press `i` to enter the insert mode and add the **datadir** parameter setting.
        
        ```
        datadir = /var/mysql_newdata
        ```
        
        `mysql_newdata` specifies the new data directory of your self-managed MySQL database. For more information, see [Preparations](#d8a0edc0ce8cv).
        
    3.  Press the `Esc` key to exit the edit mode, and enter `:wq` to save the file and exit.
        
3.  Restore data.
    
    ```
    sudo innobackupex --defaults-file=/usr/my.cnf --copy-back /var/mysql_bkdata/
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the `my.cnf` file. You can obtain the data directory to which the data is restored from the **datadir** parameter in the configuration file.
    
    \--copy-back
    
    The restoration command that is run by Percona XtraBackup.
    
    This parameter is followed by the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example. Percona XtraBackup restores the data in the directory to the **data directory** of the self-managed MySQL database.
    

#### **Restore the data of an RDS instance that runs MySQL 5.5**

1.  Prepare for the restoration.
    
    ```
    innobackupex --defaults-file=/var/mysql_bkdata/backup-my.cnf --apply-log /var/mysql_bkdata/
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the configuration file that contains default MySQL settings.
    
    After the physical backup file is decompressed, a file named `backup-my.cnf` is obtained and is stored in the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example.
    
    \--apply-log
    
    The command that is used to prepare Percona XtraBackup.
    
    This parameter is followed by the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example. The backup decompression directory stores the backup file.
    
2.  Modify the `my.cnf` configuration file of the self-managed MySQL database.
    
    1.  Modify the configuration file of the database.
        
        ```
        sudo vim /etc/my.cnf
        ```
        
        For more information about how to query the directory of the configuration file, see [Preparations](#d8a0edc0ce8cv).
        
    2.  Press `i` to enter the insert mode and add the **datadir** parameter setting.
        
        ```
        datadir = /var/mysql_newdata
        ```
        
        `mysql_newdata` specifies the new data directory of your self-managed MySQL database. For more information, see [Preparations](#d8a0edc0ce8cv).
        
    3.  Add the following content to the `my.cnf` file:
        
        ```
        innodb_log_file_size=1048576000
        ```
        
        **Important**
        
        The value of the **innodb\_log\_file\_size** parameter must be the same as the value in the `/var/mysql_bkdata/backup-my.cnf` file. You can run the `cat /var/mysql_bkdata/backup-my.cnf | grep innodb_log_file_size` command to query the value.
        
    4.  Press the `Esc` key to exit the edit mode, and enter `:wq` to save the file and exit.
        
3.  Restore data.
    
    ```
    sudo innobackupex --defaults-file=/etc/my.cnf --copy-back /var/mysql_bkdata/
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the `my.cnf` file. You can obtain the data directory to which the data is restored from the **datadir** parameter in the configuration file.
    
    \--copy-back
    
    The restoration command that is run by Percona XtraBackup.
    
    This parameter is followed by the **backup decompression directory**, which is `/var/mysql_bkdata/` in this example. Percona XtraBackup restores the data in the directory to the **data directory** of the self-managed MySQL database.
    

### **FAQ about data restoration**

-   What do I do if the `xtrabackup: Unknown error 3613` error message is displayed?
    
    Update Percona XtraBackup to the latest version and try again.
    
-   What do I do if the `Original data directory /var/mysql_newdata is not empty!` error message is displayed?
    
    Run the `sudo rm -rf /var/mysql_newdata/*` command to clear the files in the folder. Then, perform the restoration operations again.
    
-   What do I do if the `InnodDB: Encryption information in datafile: ./xxx.ibd can't be decrypted, please check if a keyring plugin is loaded and initialized successfully.` error message is displayed?
    
    Check whether TDE is enabled for your RDS instance.
    
    -   If TDE is enabled, check whether a TDE-encrypted table exists. If a TDE-encrypted table exists, decrypt the table and then restore the data based on the instructions provided in this topic. For more information, see [Prerequisites](#section-ooe-3fz-r97) and [Configure TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#section-0nx-bpi-ef8).
        
    -   If TDE is disabled, make sure that the required version of Percona XtraBackup is installed. For more information, see [Preparations](#d8a0edc0ce8cv).
        
-   What do I do if a downloaded backup file contains TDE-encrypted data and an error occurs when I restore the data?
    
    You cannot use the downloaded backup file to restore data. If an encrypted table exists in an RDS instance, an error occurs when you restore data. To resolve the error, decrypt the table and then restore the data based on the instructions provided in this topic. For more information, see [Prerequisites](#section-ooe-3fz-r97) and [Configure TDE](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#section-0nx-bpi-ef8).
    
-   What do I do if the `innobackupex: File 'undo001' not found (Errcode: 2 - No Such file or directory)` error message is displayed during data restoration?
    
    The undo file is a system file. The file varies based on the database version. To resolve the issue, check whether the self-managed MySQL database runs the same database version as the RDS instance.
    

## **Step 4: Start the database**

#### **MySQL 8.0 or MySQL 5.7**

1.  Optional. Log on to the ApsaraDB RDS console and view the value of the **lower\_case\_table\_names** parameter based on the instructions provided in [View the parameters of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/view-the-parameters-of-an-apsaradb-rds-for-mysql-instance). If the value is `1`, you must modify the `my.cnf` configuration file of the self-managed MySQL database.
    
    1.  Modify the configuration file of the database.
        
        ```
        sudo vim /etc/my.cnf
        ```
        
        For more information about how to query the directory of the configuration file, see [Preparations](#d8a0edc0ce8cv).
        
    2.  Press `i` to enter the insert mode and add the following content to the file:
        
        ```
        lower_case_table_names=1
        ```
        
    3.  Press the `Esc` key to exit the edit mode, and enter `:wq` to save the file and exit.
        
2.  Grant permissions on the **data directory**.
    
    ```
    sudo chown -R mysql:mysql /var/mysql_newdata
    ```
    
3.  Run the following command to start the MySQL process:
    
    ```
    sudo mysqld --defaults-file=/etc/my.cnf --user=mysql --datadir=/var/mysql_newdata &
    ```
    
    Parameters
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the configuration file of the self-managed MySQL database. In this example, `/etc/my.cnf` is used. You can obtain the directory of the configuration file based on the [Preparations](#d8a0edc0ce8cv) section.
    
    \--user
    
    The user who started the database. The value is fixed as mysql.
    
    \--datadir
    
    The **data directory** that is used to start the database. In this example, `/var/mysql_newdata` is used. You can obtain the data directory based on the [Preparations](#d8a0edc0ce8cv) section.
    

#### **MySQL 5.6**

1.  Optional. Log on to the ApsaraDB RDS console and view the value of the **lower\_case\_table\_names** parameter based on the instructions provided in [View the parameters of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/view-the-parameters-of-an-apsaradb-rds-for-mysql-instance). If the value is `1`, you must modify the `my.cnf` configuration file of the self-managed MySQL database.
    
    1.  Modify the configuration file of the database.
        
        ```
        sudo vim /usr/my.cnf
        ```
        
        For more information about how to query the directory of the configuration file, see [Preparations](#d8a0edc0ce8cv).
        
    2.  Press `i` to enter the insert mode and add the following content to the file:
        
        ```
        lower_case_table_names=1
        ```
        
    3.  Press the `Esc` key to exit the edit mode, and enter `:wq` to save the file and exit.
        
2.  Grant permissions on the **data directory**.
    
    ```
    sudo chown -R mysql:mysql /var/mysql_newdata
    ```
    
3.  Run the following command to start the MySQL process:
    
    ```
    sudo mysqld --defaults-file=/usr/my.cnf --user=mysql --datadir=/var/mysql_newdata &
    ```
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the configuration file of the self-managed MySQL database. In this example, `/usr/my.cnf` is used. You can obtain the directory of the configuration file based on the [Preparations](#d8a0edc0ce8cv) section.
    
    \--user
    
    The user who started the database. The value is fixed as mysql.
    
    \--datadir
    
    The **data directory** that is used to start the database. In this example, `/var/mysql_newdata` is used. You can obtain the data directory based on the [Preparations](#d8a0edc0ce8cv) section.
    

#### MySQL 5.5

1.  Grant permissions on the **data directory**.
    
    ```
    sudo chown -R mysql:mysql /var/mysql_newdata
    ```
    
2.  Run the following command to start the MySQL process:
    
    ```
    sudo mysqld --defaults-file=/etc/my.cnf --user=mysql --datadir=/var/mysql_newdata &
    ```
    
    **Parameter**
    
    **Description**
    
    \--defaults-file
    
    The directory of the configuration file of the self-managed MySQL database. In this example, `/etc/my.cnf` is used. You can obtain the directory of the configuration file based on the [Preparations](#d8a0edc0ce8cv) section.
    
    \--user
    
    The user who started the database. The value is fixed as mysql.
    
    \--datadir
    
    The **data directory** that is used to start the database. In this example, `/var/mysql_newdata` is used. You can obtain the data directory based on the [Preparations](#d8a0edc0ce8cv) section.
    

### **FAQ about startup**

-   Why is the `mysqld: [ERROR] Failed to open required defaults file: /etc/my.cnf` error message displayed in an Ubuntu operating system? What do I do?
    
    The error occurs due to the security program AppArmor is provided in an Ubuntu operating system. If you use an Ubuntu operating system, the error message is displayed. In this case, you must run the `apt install -y apparmor-utils` and `aa-complain /usr/sbin/mysqld` commands to modify the settings of AppArmor.
    
-   After a restoration task is complete, what do I do if the `error 1105 Unknown error` error message is displayed when I use my self-managed MySQL database or if my self-managed MySQL database cannot be started?
    
    Execute the following SQL statements to change the storage engine:
    
    ```
    USE mysql;
    ALTER TABLE proc engine=myisam;
    ALTER TABLE event engine=myisam;
    ALTER TABLE func engine=myisam;
    ```
    
    **Note**
    
    If the `ERROR 1067 (42000): Invalid default value for 'modified'` error message is displayed when you execute the preceding statements, execute the `SET SQL_MODE='ALLOW_INVALID_DATES';` statement first.
    
-   What is the password of the root user after data is restored?
    
    You can use one of the following methods to obtain the password:
    
    -   If the RDS instance runs MySQL 5.7 or MySQL 8.0, the password of the root user of the RDS instance is the same as the password of the root user of the self-managed MySQL database.
        
    -   If the RDS instance runs MySQL 5.5 or MySQL 5.6, you must reset the password of the root user of the RDS instance. For more information, see [open source MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/resetting-permissions.html).
        
-   What do I do if the `InnodDB: Assertion failure in thread 140xxx in file page0zip.icne xxx` error message is displayed during startup?
    
    The error may occur due to insufficient disk space. You can resize the disk of the server on which the self-managed MySQL database resides and try again.
    
-   What do I do if the `[ERROR] Failed to open the relay log xxx`, `[ERROR] Slave: Failed to initialize the master info xxx`, and `[ERROR] Failed to create or recover replication info repositories.` error messages are displayed during startup?
    
    The RDS instance works in high availability (HA) mode, but the self-managed MySQL database does not involve the primary and secondary nodes. This does not affect the database startup. You can ignore the error messages.
    
-   What do I do if the `[ERROR] Data Dictionary initialization failed` error message is displayed during startup?
    
    The error may occur due to incompatible operating systems. RDS instances use Linux as the underlying operating system. Therefore, we recommend that you perform restoration in a Linux operating system to avoid compatibility issues.
    
-   What do I do if I fail to start the self-managed MySQL database by running the `sudo systemctl start mysqld` command?
    
    The possible cause of the failure is that the Security-Enhanced Linux (SELinux) runs in enforcing mode. You can run the `getenforce` command to query the SELinux mode.
    
    -   In a development or test environment, we recommend that you change the SELinux mode to permissive and then run the `sudo systemctl start mysqld` command to start the self-managed MySQL database.
        
    -   In a production environment, we recommend that you check SELinux logs to identify the cause of the failure and then modify the SELinux settings based on the cause.
        

## **Step 5: Connect to the database and verify the restoration**

1.  Run the following command to log on to the self-managed MySQL database and verify that MySQL is running:
    
    ```
    mysql -u<The username of the account that is used to connect to the RDS instance> -p<The password of the preceding account>
    ```
    
    **Note**
    
    -   The command is used to check whether the restoration is successful. If you only want to query data in a table, you can use an account that has permissions on the table to run the command.
        
    -   If you forget your account or password, add the `--skip-grant-tables` option to the command to ignore the permission check. This way, you can log on to the database without the need to input your account and password. You can reset your account and password after you log on to the database.
        
    
2.  Execute the following SQL statement to check whether a database in the RDS instance exists:
    
    ```
    SHOW DATABASES;
    ```
    

### **FAQ about connection and verification**

-   After I restore the data of my RDS instance from a physical backup file to a self-managed MySQL database, the time that is indicated by the time field of the data and the local time of the server on which the self-managed MySQL database resides belong to different time zones. Why? How do I make sure that the time that is indicated by the time field of the data and the local time belong to the same time zone?
    
    If the time zone of the self-managed MySQL database is different from the time zone of your RDS instance, you must modify the value of the time\_zone parameter for the self-managed MySQL database to ensure consistency with the value of the time\_zone parameter for your RDS instance. If the time\_zone parameter of your RDS instance is set to system, you must query the region in which the RDS instance resides and set the time\_zone parameter of the self-managed MySQL database to the time zone of the region.
    
-   What do I do if the `Access denied for user 'XXX'` error message is displayed when I connect to my self-managed MySQL database?
    
    Check whether the username and password of the account that is used to connect to the RDS instance is correct. The account must be created on the RDS instance.
    
-   What do I do if I forget the password when I connect to a self-managed MySQL database?
    
    If you forget the username or password of your account, configure the `--skip-grant-tables` parameter when you run the command to start the MySQL process. After the process starts, the permission check is ignored, and you can log on to the database in password-free mode. Note that security risk may occur if you use this method to log on to the database. We recommend that you change the username and password of the account immediately after you log on to the database.
    
-   What do I do if I can view only system databases or some databases after I connect to my self-managed database?
    
    Restart the self-managed database. Then, use the root account or the privileged account of the original RDS instance to connect to the self-managed database.
    

## What to do next

-   For more information about how to use the backup files of an RDS instance to restore the full data or individual databases and tables of the RDS instance to another RDS instance or a new RDS instance, see [Restore full data](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb) or [Restore individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb).
    
-   For more information about data restoration methods, see [Overview of data restoration methods](/help/en/doc-detail/157519.html).
    

## **Other FAQ**

Can I restore the data of my RDS instance from a data backup file that I downloaded to another RDS instance?

No, you cannot restore the data of your RDS instance to another RDS instance by using a downloaded backup file. You can use one of the following solutions to restore data from an RDS instance to another RDS instance:

-   Solution 1: Refer to this topic to restore the data of your RDS instance from a downloaded physical backup file to a self-managed database. Then, restore the data of the self-managed database to another RDS instance. For more information, see [Restore the backup data of a self-managed instance that runs MySQL 5.7 or MySQL 8.0 to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-a-self-managed-mysql-instance-to-an-apsaradb-rds-for-mysql-instance).
    
-   Solution 2: Use Data Transmission Service (DTS) to migrate data from your RDS instance to another RDS instance. For more information, see [Migrate data between ApsaraDB RDS for MySQL instances](/help/en/dts/user-guide/migrate-data-between-apsaradb-rds-for-mysql-instances).
    

How do I restore the data of my RDS instance over a specified time range to a self-managed MySQL database?

You can download the log backup file that is generated within the specific time range in the ApsaraDB RDS console. Then, you can use the log backup file to restore the data of your RDS instance to a self-managed MySQL database. For more information, see [Download backup files](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb) and [Restore data to a specific point in time](/help/en/rds/support/use-the-log-backup-feature#section-lhe-5ph-54w).

How do I restore the data of my RDS for MySQL instance to a self-managed MySQL database?

-   Method 1: Refer to this topic to restore the instance data from the downloaded backup files to the self-managed MySQL database.
    
-   Method 2: Use DTS to [migrate data from the RDS for MySQL instance to the self-managed MySQL database](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-database).
    

How do I restore or migrate the data of my RDS instance that runs RDS Basic Edition?

RDS instances that run RDS Basic Edition support only snapshot backups. If your RDS instance runs RDS Basic Edition, you can use one of the following methods to restore or migrate data:

-   [Use the mysqldump extension to migrate data from a self-managed MySQL instance to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-mysqldump-extension-to-migrate-data-from-a-self-managed-mysql-instance-to-an-apsaradb-rds-for-mysql-instance#concept-uyq-mn5-ydb).
    
-   Use DTS to export the data of your RDS instance to your computer.
    

Can I restore the data of multiple RDS instances from physical backup files to a self-managed MySQL database?

No, you cannot restore the data of multiple RDS instances from physical backup files to a self-managed MySQL database. You can restore the data of multiple RDS instances from physical backup files to different self-managed MySQL databases. Then, you can use DTS or mysqldump to migrate the data. For more information, see [Migrate data from a self-managed MySQL database to an ApsaraDB RDS for MySQL instance](/help/en/dts/user-guide/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance-1) or [Use the mysqldump extension to migrate data from a self-managed MySQL instance to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/use-the-mysqldump-extension-to-migrate-data-from-a-self-managed-mysql-instance-to-an-apsaradb-rds-for-mysql-instance).

I create a privileged account for my RDS instance in the background. After I create physical backups to back up the RDS instance to my computer, does the privileged account still have original permissions?

Yes, the privileged account still has original permissions. Account permissions are not affected by backups.
