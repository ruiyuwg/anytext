The storage space of the system disk attached to a simple application server may become insufficient as your business and application data grow. To meet increasing storage requirements, you can attach a data disk to the simple application server to extend the storage capacity of the server. This topic describes how to attach a data disk to a simple application server.

## Limits

-   You can attach only one data disk to a simple application server.
    
    If you attach a data disk when you create a simple application server, you can only extend the data disk after you create the server. For more information, see [Scale up a data disk](/help/en/simple-application-server/user-guide/scale-up-the-data-disk#task-2213163).
    
-   The data disk attached to a simple application server is bound to the server and cannot be detached from the server.
    

## **Billing**

-   A data disk that is attached to a simple application server supports only the subscription billing method. You are charged for the capacity (in GB) and subscription duration of the data disk. The fees are calculated by using the following formula: Data disk fees = Unit price of data disks × Capacity of the data disk × Subscription duration.
    
    The prices of disks may vary based on the region. You can go to the **Pricing** tab of the [Elastic Compute Service (ECS)](https://www.alibabacloud.com/product/ecs) product page and click the **Storage** tab to view the prices of disks in different regions.
    
-   The data disk and the simple application server to which the data disk is attached expire at the same time.
    
-   After a data disk is attached to a simple application server, the data disk must be renewed together with the simple application server.
    

## Procedure

### **Step 1: Attach a data disk**

**Note**

This section describes how to attach a data disk to a simple application server after you create the server. If you attached a data disk to a simple application server when you created the server, skip this section for the server.

1.  Go to the [Servers page](https://swas.console.alibabacloud.com/servers/) in the Simple Application Server console.
    
2.  Click the server ID in the card of the simple application server to which you want to attach a data disk.
    
3.  Click the **Disk** tab.
    
4.  In the upper-left corner of the Disk tab, click **Mount a data disk**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6464517271/p840764.png)
    
5.  In the **Precautions** dialog box, read and confirm the precautions and click **Data Disk Operation**.
    
6.  Check the current configurations and expiration date of the disk, and select a size for the data disk in the **Data Disk** section.
    
    **Note**
    
    Only one data disk can be attached to a simple application server.
    
7.  Select **I have read and agree to the Simple Application Server service terms** and **I have read and agree to the image usage terms**.
    
8.  Click **Buy Now**.
    
    Follow the on-screen instructions to complete the payment.
    

### **Step 2: Partition and format the data disk**

Data disks attached to simple application servers must be partitioned and formatted before the disks can be used. The operations for partitioning and formatting a data disk vary based on the operating system. You must partition and format a data disk based on the actual scenario of your simple application server.

**Important**

-   If a data disk is attached to a simple application server when you **create the server**:
    
    -   If the simple application server runs a Linux operating system, the data disk must be partitioned and formatted before the disk can be used.
        
    -   If the simple application server runs a Windows operating system, you do not need to partition or format the data disk. By default, data disks attached to Windows simple application servers are partitioned and formatted.
        
-   If you attach a data disk to a simple application server **after the server is created**, you must partition and format the data disk before the disk can be used, regardless of whether the operating system of the server is Linux or Windows.
    

#### Partition and format the data disk on a Linux server

The following example describes how to use the Parted and e2fsprogs utilities to partition and format the data disk on a Linux server. CentOS 7.6 64-bit is used in the example.

To partition and format the data disk on a Linux server, we recommend that you use the GUID Partition Table (GPT) partition format and the XFS or EXT4 file system.

1.  Connect to the Linux server and install Parted and e2fsprogs.
    
    1.  Connect to the simple application server.
        
        For more information, see [Connect to a Linux server](/help/en/simple-application-server/user-guide/connect-to-linux-server-remotely#section-x54-mw9-9hc).
        
    2.  Run the following commands to switch to the `root` user and go back to the root directory:
        
        ```
        sudo su root
        cd
        ```
        
    3.  Run the following commands in sequence to install Parted and e2fsprogs.
        
        -   Run the following command to install Parted:
            
            ```
            yum install -y parted
            ```
            
        -   Run the following command to install e2fsprogs:
            
            ```
            yum install -y e2fsprogs
            ```
            
        
2.  Run the following command to view the data disk on the Linux server:
    
    ```
    fdisk -l
    ```
    
    The information of the data disk is returned, as shown in the following figure.
    
    **Note**
    
    Each simple application server can have only one data disk attached. The device name of the data disk is `/dev/vdb`.
    
    ![fdisk](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1727383261/p275278.png)
    
3.  Use Parted to partition the data disk.
    
    1.  Run the following command to partition the data disk:
        
        ```
        parted /dev/vdb
        ```
        
    2.  Run the following command to set the partition format to GPT:
        
        ```
        mklabel gpt
        ```
        
        You are prompted that the partition format change will result in data loss on the disk. The data disk described in this topic is a new empty disk. Enter Yes at the prompt.
        
    3.  Run the following command to create a primary partition and specify the start and end sectors for the partition:
        
        ```
        mkpart primary 1 100%
        ```
        
    4.  Run the following command to check whether the partitions are aligned:
        
        ```
        align-check optimal 1
        ```
        
        The command output similar to the following one indicates that the partitions are aligned.![分区检查](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1727383261/p275293.png)
        
    5.  Run the following command to view the partition table:
        
        ```
        print
        ```
        
        The information of the partition is returned, as shown in the following figure.![磁盘信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1727383261/p275460.png)
        
    6.  Run the following command to exit Parted:
        
        ```
        quit
        ```
        
4.  Run the following command to re-read the partition table:
    
    ```
    partprobe
    ```
    
5.  Run one of the following commands to create a file system for the /dev/vdb1 partition.
    
    Run one of the following commands to create a file system.
    
    -   Run the following command to create an EXT4 file system:
        
        ```
        mkfs -t ext4 /dev/vdb1
        ```
        
    -   Run the following command to create an XFS file system:
        
        ```
        mkfs -t xfs /dev/vdb1
        ```
        
    
    In this example, an EXT4 file system is created.
    
6.  Write the information of the new partition to /etc/fstab to have the partition automatically mounted on server startup.
    
    1.  Run the following command to create a mount point named /test:
        
        ```
        mkdir /test
        ```
        
    2.  Run the following command to back up etc/fstab:
        
        ```
        cp /etc/fstab /etc/fstab.bak
        ```
        
    3.  Run the following command to write the information of the new partition to /etc/fstab:
        
        ```
        echo `blkid /dev/vdb1 | awk '{print $2}' | sed 's/\"//g'` /test ext4 defaults 0 0 >> /etc/fstab
        ```
        
        **Note**
        
        In this example, the _/dev/vdb1_ partition device name, the _/test_ mount point, and the _ext4_ file system are used. You can change these settings based on actual conditions.
        
    4.  Run the following command to check the information of /etc/fstab:
        
        ```
        cat /etc/fstab
        ```
        
        If the command output shows the information of the new partition, the information is written to /etc/fstab.![fstab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1727383261/p275309.png)
        
    5.  Run the following command to make the data disk mount entries in etc/fstab take effect:
        
        ```
        mount -a
        ```
        
7.  Run the following command to view the current disk space and usage:
    
    ```
    df -h
    ```
    
    If the command output shows the information of the new file system, the partition is mounted. You can use the new file system. ![df](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1727383261/p275302.png)
    

#### Partition and format the data disk on a Windows server

The interface varies based on the Windows version. The following example describes how to partition and format the data disk on a Windows server. The **Windows Server 2012 R2 64**\-bit operating system is used in the example.

1.  Connect to the Windows server.
    
    For more information, see [Connect to a Windows server](/help/en/simple-application-server/user-guide/connect-to-windows-server-remotely#task310).
    
2.  In the lower part of the desktop, **right-click** the ![4566](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0990103561/p438576.png) icon and then click **Disk Management**.
    
    ![磁盘管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1727383261/p275352.png)
    
3.  In the **Disk Management** window, find the data disk that you want to partition and format. In this example, **Disk 1** is to be partitioned and formatted. The disk is in the **Not Initialized** state.
    
4.  Right-click the blank area next to **Disk 1** and select **Initialize Disk**.
    
5.  In the **Initialize Disk** dialog box, select **Disk 1**, select **GPT (GUID Partition Table)**, and then click **OK**.
    
    In this example, the GPT partition format is selected. GPT and Master Boot Record (MBR) are different partition formats.
    
    -   GPT is a new partition format that cannot be recognized by early Windows versions. The maximum data disk size that GPT supports is determined based on the operating system and the file systems. In Windows, GPT supports up to 128 primary partitions on each disk.
        
    -   MBR is the most frequently used partition format. MBR supports data disks up to 2 TiB in size and a maximum of four primary partitions per disk. If you want to divide a disk into more than four partitions, you must use a primary partition as an extended partition and create logical partitions in the partition.
        
    
    ![3325](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1001941261/p231803.png)
    
6.  In the **Disk Management** window, right-click the **Unallocated** space of **Disk 1** and then select **New Simple Volume**.
    
    ![新建简单卷](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1727383261/p275389.png)
    
7.  In the **New Simple Volume** wizard, perform the following operations:
    
    1.  Click **Next**.
        
    2.  Specify the size of the simple volume.
        
        If you want to create only one primary partition, use the default value. Then, click **Next**. You can also divide **Disk 1** into multiple partitions.
        
    3.  Assign a driver letter and path.
        
        Select a driver letter. G is used in this example. Then, click **Next**.
        
    4.  Format the partitions.
        
        Configure formatting settings such as the file system, allocation unit size, and volume label, and then optionally select **Perform a quick format** and **Enable file and folder compression**. In this example, the default settings are used. Then, click **Next**.
        
    5.  When the dialog box indicates that the new simple volume is created, click **Finish**.
        
    
    Wait for the partitions to be formatted. When **Disk 1** is in the **Healthy** state in the **Disk Management** window as shown in the following figure, the partitions are formatted. ![w12](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1989660271/p231810.png)
    

## References

-   After you attach a data disk to a simple application server, you can view the mount point, capacity, and usage of the data disk in the Simple Application Server console. For more information, see [View data disk](/help/en/simple-application-server/user-guide/view-a-data-disk).
    
-   If the available space of the data disk on your simple application server is insufficient, you can extend the data disk based on your business requirements. For more information, see [Scale up a data disk](/help/en/simple-application-server/user-guide/scale-up-the-data-disk).
    
-   To ensure data security, we recommend that you create snapshots for disks on a regular basis to back up disk data. For more information, see the [Create a snapshot](/help/en/simple-application-server/user-guide/manage-snapshots#section-fup-p30-12b) section of the "Manage snapshots" topic.
    
-   If data loss occurs due to reasons such as accidental operations and ransom viruses, you can use a snapshot of a disk to roll back the disk. This way, the disk reverts to the state it was in when the snapshot was created. For more information, see [Roll back a disk based on a snapshot](/help/en/simple-application-server/user-guide/manage-snapshots#section-qgn-cpm-i29).
