Download data from NAS to on-premises storage using rsync, Robocopy, SFTP, or IIS FTP. Alternatively, sync data to OSS first, then download from OSS.

**Important**

Downloading data from a NAS file system consumes the public bandwidth of an ECS instance. To avoid impacting existing workloads, use a dedicated ECS instance for downloads. For more information, see [Use a new ECS instance as a transit node](/help/en/nas/user-guide/configure-an-intermediate-node-for-data-transfer#section-whl-71m-0wp).

## Select a migration method

Select a method based on your scenario:

**Scenario**

**Recommended method**

**Description**

Small number of files with cross-platform GUI

SFTP client

Graphical interface, supports Linux, macOS, and Windows.

Large datasets with metadata preservation

rsync

Incremental sync, preserves permissions and ownership.

Large datasets on Windows (SMB)

Robocopy

Windows built-in tool, creates mirror copies.

Small number of files on Windows (SMB)

IIS FTP

Graphical interface for SMB file systems.

Very large datasets or limited bandwidth

OSS transit

Sync to OSS first, then download from OSS.

## Use an SFTP client

### **Procedure**

1.  Install an SFTP client on your local operating system.
    
    Various SFTP clients are available. This topic uses FileZilla as an example. [Download and install an SFTP client](https://filezilla-project.org/download.php) that is compatible with your local operating system.
    
2.  Establish a connection between the SFTP client and the transit node ECS instance.
    
    1.  Open the FileZilla client, configure it as described below, and click **Quickconnect** to establish a connection.
        
        After a connection between the local client and the ECS instance is established, the local file system is displayed on the left and the file system of the ECS instance is displayed on the right.![U-D NFS0201](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1862258951/p133707.png)
        
        **Parameter**
        
        **Description**
        
        **Host**
        
        The public IP address of the transit node ECS instance. For example, 192.0.2.1.
        
        **Username**
        
        The username of the transit node ECS instance. The user must have read and write permissions on the NAS file system directory. For example, root.
        
        **Note**
        
        -   The default username of a Linux ECS instance is root or ecs-user.
            
        -   The default username of a Windows ECS instance is administrator.
            
        
        **Password**
        
        The login password of the transit node ECS instance. For example, the login password of the root user.
        
        **Note**
        
        To reset a forgotten login password, see [Reset the login password of an instance](/help/en/ecs/user-guide/reset-the-logon-password-of-an-instance).
        
        **Port**
        
        The SFTP port number. The default value is 22.
        
    2.  In the right pane, enter the mount path of the NAS file system, such as /mnt, in the **Remote site** field. Press Enter to view the files in the NAS file system.
        
        ![UD-NFS0202](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1862258951/p133726.png)
        
3.  Download data.
    
    Drag and drop one or more files or directories from the right pane to the left pane to download the data.
    

## Use rsync

### Benefits

-   Preserves file metadata, including owner and permission information.
    
-   Supports incremental data synchronization.
    
-   Supports crontab scheduling on Linux or macOS for automated backups.
    

### Procedure

1.  Install the rsync tool.
    
    #### **Linux**
    
    **Operating system**
    
    **Command**
    
    CentOS
    
    Use the yum package manager to install rsync.
    
    ```
    sudo yum install rsync
    ```
    
    Redhat
    
    Ubuntu
    
    Use the apt package manager to install rsync.
    
    ```
    sudo apt-get install rsync
    ```
    
    Debian
    
    **Note**
    
    If you are using a different version of Linux, use the corresponding package manager to install rsync.
    
    #### **macOS**
    
    Download and install the [Homebrew package manager](https://brew.sh/), and then run the following command to install rsync:
    
    ```
    brew install rsync
    ```
    
    #### **Windows**
    
    -   Download and install the [Cygwin simulation environment](https://cygwin.com/install.html). During installation, search for and install rsync. Alternatively, [download, compile, and install rsync](https://cygwin.com/packages/summary/rsync.html) manually.
        
        **Note**
        
        You must enable the SSH TCP port 22 for the security group of the associated virtual private cloud (VPC).
        
    
2.  Download data.
    
    Run the following command to download data from the NAS file system to a local directory:
    
    ```
    rsync -avP root@192.0.2.0:/mnt/DirToSync/ DirToSync/
    ```
    
    **Parameter**
    
    **Description**
    
    _192.0.2.0_
    
    The public IP address of the Linux or Windows ECS instance on which the NAS file system is mounted.
    
    /mnt/DirToSync
    
    The directory to export from NAS.
    
    DirToSync
    
    The local directory.
    
    **Note**
    
    The path in the rsync command must end with a forward slash (/). Otherwise, the paths do not match after the data is synchronized.
    

## Use Robocopy

### **Benefits**

Robocopy is a Windows directory copy command. It creates mirror copies with identical file structures without duplicating unchanged files, and preserves file information such as dates and timestamps.

For large-scale data migration, install Python on a Windows ECS instance and use the migration.py script. For more information, see [How do I accelerate data migration to an SMB file system?](/help/en/nas/user-guide/migrate-data-by-using-the-robocopy-tool#section-ik1-9m0-x9h)

### **Procedure**

1.  Log on to the Alibaba Cloud ECS instance that is used for data migration.
    
2.  Migrate the data.
    
    Run the following command to migrate data from the source file system (drive Z) to the destination file system (drive Y).
    
    ```
    robocopy Z:\ Y:\ /e /w:5 /z /mt:32
    ```
    
    **Note**
    
    Only the data in the specified folder is migrated. The folder itself is not migrated.
    
    The following table describes important fields. Modify the values as needed.
    
    **Parameter**
    
    **Description**
    
    **/mt**
    
    Sets the number of concurrent threads. The default value is 8.
    
    The value can be an integer from 1 to 128.
    
    In this example, 32 threads are used for multi-threaded replication.
    
    **/w**
    
    Sets the interval in seconds between retries.
    
    **/z**
    
    Enables resumable transfer.
    
    **/e**
    
    Copies all subdirectories, including empty ones.
    
    **/copyall**
    
    Copies all file information. This includes:
    
    -   Data
        
    -   Properties
        
    -   Timestamps
        
    -   Access control list (ACL)
        
    -   Owner information
        
    -   Auditing information
        
    
    **Note**
    
    To accelerate the migration of large amounts of data, such as hundreds of millions of small files that exceed 10 TB, install the latest Python program on a Windows ECS instance to perform the migration. For more information, see [How to accelerate data migration to an SMB file system](/help/en/nas/user-guide/migrate-data-by-using-the-robocopy-tool#section-ik1-9m0-x9h).
    
3.  Check the migration result.
    
    After the migration is complete, run the following Robocopy command to verify that the destination file system is consistent with the source file system.
    
    ```
    ROBOCOPY Z:\ Y:\ /e /l /ns /njs /njh /ndl /fp /log:reconcile.txt
    ```
    
    The following table describes important fields. Modify the values as needed.
    
    **Parameter**
    
    **Description**
    
    **/e**
    
    Lists only folders, including empty ones.
    
    **/l**
    
    Does not modify or copy files. It only records differences.
    
    **/fp**
    
    Includes the full path of files in the log. This is necessary only if you omit /ndl.
    
    **/ns**
    
    Does not include file sizes in the log.
    
    **/ndl**
    
    Does not include folders in the log.
    
    **/njs**
    
    Does not include the job summary.
    
    **/njh**
    
    Does not include the job header.
    
    **/log:reconcile.txt**
    
    Writes the migration result to the reconcile.txt log. If the log file already exists, it is overwritten.
    

## Use IIS FTP

### Procedure

For more information, see [Set up the Windows IIS web service](/help/en/nas/use-windows-iis-to-access-nas#section-b2b-jd1-zwn).

**Note**

-   You must open the corresponding FTP TCP port in the VPC security group.
    
-   Other FTP servers and clients can also be configured to upload and download data over the public network.
    
-   Inbound traffic to an Elastic IP Address (EIP) is free of charge, but outbound traffic is charged. This means that you are not charged for uploading data to NAS over the public network, but you are charged for downloading data from NAS. For more information about billing, see [Pay-as-you-go for EIPs](/help/en/eip/pay-as-you-go/#concept-rcd-sgl-vdb).
    

## Transfer via OSS

Sync data to OSS using ossutil or Data Transport, then download from OSS to local storage.

1.  Migrate data to OSS.
    
    -   Use ossutil to migrate data to OSS. For more information, see [Migrate data by using ossutil](/help/en/nas/user-guide/migrate-data-between-a-nas-file-system-and-an-oss-bucket#section-ezg-nra-swk).
        
    -   Use the Data Transport service to migrate data from NAS to OSS. For more information, see [Migrate data by using Data Transport](/help/en/nas/user-guide/migrate-data-between-a-nas-file-system-and-an-oss-bucket#section-0l6-iar-7b5).
        
2.  Download the data from OSS to local files. For more information, see [Simple download](/help/en/oss/user-guide/simple-download-1).
