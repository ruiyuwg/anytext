After you attach a new data disk (empty data disk) to a Windows Elastic Compute Service (ECS) instance, you cannot directly use the disk to store data. To read data from or write data to the disk, you must partition the disk and mount file systems to partitions for the Windows operating system to recognize the disk. This topic describes how to initialize a data disk whose size is less than or equal to 2 TiB on a Windows ECS instance.

## Prerequisites

-   The empty data disk that you want to initialize is separately created. For more information, see [Create an empty data disk](/help/en/ecs/user-guide/create-a-disk).
    
    **Note**
    
    Data disks created together with a Windows ECS instance are automatically initialized. You do not need to perform the operations in this topic to initialize the data disks.
    
-   The data disk is attached to a Windows ECS instance and is in the In Use state. For more information, see [Attach data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).
    

## Background

The following table describes the sample configurations of an ECS instance and a data disk. Operations may vary based on the actual condition.

**Operating system**

**Resource**

**Description**

Windows

Image used by the instance

Windows Server 2016 64-bit

Data disk

-   Disk name: Disk 1
    
-   Disk capacity: 40 GiB
    

## Procedure

1.  Connect to the ECS instance.
    
    For more information, see [Connect to Windows](/help/en/ecs/user-guide/connect-to-a-windows-instance-through-workbench#task-2370976).
    
2.  On the Windows desktop, right-click the ![开始图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8116265661/p467093.png) icon and select **Disk Management**.
    
    ![磁盘管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p140800.png)
    
3.  Find the data disk in the **Offline** state that you want to initialize. In this example, **Disk 1** is used.
    
    ![脱机状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p515542.png)
    
4.  Right-click a blank area around **Disk 1** and select **Online**.
    
    When **Disk 1** comes online, the disk enters the **Not Initialized** state.![没有初始化](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3236858071/p515543.png)
    
5.  Right-click a blank area around **Disk 1** and select **Initialize Disk**.
    
6.  In the **Initialize Disk** dialog box, select the disk, select a disk partition format, and then click **OK**.
    
    **Important**
    
    The size of a disk that uses the master boot record (MBR) partition format is capped at 2 TiB. If your disk is larger than 2 TiB in size or the disk may be resized to larger than 2 TiB, use the GUID partition table (GPT) partition format.
    
    ![选择分区](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p524623.png)
    
7.  Right-click the **Unallocated** section of **Disk 1** and select **New Simple Volume**.
    
    ![新建简单卷](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p515546.png)
    
8.  In the **New Simple Volume Wizard** window, follow the wizard to perform initialization operations.
    
    1.  In the **Specify Volume Size** step, configure the **Simple volume size in MB** parameter and then click **Next**.
        
        If you want to create only a single primary partition on the disk, use the default value. You can also specify a simple volume size based on your business requirements to divide **Disk 1** into multiple partitions.![指定卷大小](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p515590.png)
        
    2.  In the **Assign Drive Letter or Path** step, select **Assign the following drive letter**, select a drive letter, and then click **Next**. In this example, the drive letter **D** is selected.
        
        ![分配驱动号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p515551.png)
        
    3.  In the **Format Partition** step, select **Format this volume with the following settings**, configure formatting settings, and then click **Next**.
        
        **Important**
        
        Choose the **Allocation unit size** carefully. This setting cannot be changed once it is set. For more information about disk capacity limits, see [NTFS overview](https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview).
        
        -   For disk sizes from 16 TiB to 32 TiB, select 8192.
            
        -   For disk sizes from 32 TiB to 64 TiB, select 16K.
            
        -   For all other cases, keep the default value.
            
        
        ![设置格式化信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p5101.png)
        
    4.  View the information about the new simple volume and click **Finish** to close the **New Simple Volume Wizard** window.
        

## Result

The following figure shows the state of **Disk 1** in the **Disk Management** window after the disk is initialized.![新磁盘状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p515547.png)

In **This PC**, you can find a new drive named **New Volume (D:)**. The data disk is ready for use. ![新建磁盘](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4236858071/p515548.png)

## **Reference**

If the storage space of a disk is insufficient, you can extend the capacity of the disk to increase the storage space. For more information, see [Overview](/help/en/ecs/user-guide/overview-19).
