If you need to reset an Elastic Compute Service (ECS) instance or erase data from its system disk, you can re-initialize the disk to restore it to its initial state. This topic describes how to re-initialize a system disk.

## **Limitation**

You can continue to use an instance created from a custom image that was later deleted. However, you cannot re-initialize its system disk.

## Effects of re-initialization

**Before re-initializing the disk, make sure you understand the following effects.**

**Important**

Re-initializing a system disk erases all data on it. To prevent data loss, create a snapshot to back up the system disk data beforehand. For more information, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).

**Item**

**Description**

System disk effects

-   Re-initialization restores the system disk to its initial state, erasing all data.
    
    **Note**
    
    If you [replace the system disk (operating system) of an ECS instance](/help/en/ecs/user-guide/replace-the-operating-system-of-an-instance-1) before re-initialization, the operation applies to the new system disk.
    
-   If an automatic snapshot policy is configured for the system disk, the policy remains in effect after re-initialization. You do not need to reconfigure it.
    
-   Re-initializing the system disk does not change the IP address or the disk ID of the ECS instance.
    
-   Re-initializing the system disk does not delete any snapshots that were created from it.
    

Data disk effects

-   Re-initializing the system disk does not change or erase any data on attached data disks.
    
-   For Linux instances: Re-initialization deletes automatic mount configurations for data disks. You must re-mount the file systems.
    
-   For Windows instances: No further action is required for data disks.
    

## **Procedure**

### **Step 1:** Prepare for re-initialization

1.  Re-initializing a system disk erases all written data. To prevent data loss, back up the target disk first. For more information, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).
    
    **Note**
    
    Snapshots are a paid service. For more information, see [Snapshot billing](/help/en/ecs/snapshots-1).
    
2.  Make sure that the legacy instant access feature is not enabled for snapshots of ESSD disks. You cannot re-initialize a disk if its snapshots have the legacy instant access feature enabled. The new version of instant access is enabled by default and does not affect the re-initialization operation.
    
    Check the status of the instant access feature in the snapshot list to determine its version:
    
    -   **New version**: The status of instant access is displayed as **Enabled**.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7977357961/p726568.png)
        
    -   **Legacy version**: The status of instant access is displayed as an expiration date, such as: **Oct 20, 2023, 11:07:07 Remaining Before Expiration**.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8977357961/p726573.png)
        
    
    **Note**
    
    If you are using the legacy version of instant access, you can call the [ModifySnapshotAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifysnapshotattribute) operation and set the `DisableInstantAccess` parameter to `true` to disable it.
    
3.  **(For Linux instances only)** To use an SSH key pair for authentication after re-initialization, create or import one first. For more information, see [Create an SSH key pair](/help/en/ecs/user-guide/create-an-ssh-key-pair#concept-wy4-th1-ydb) and [Import an SSH key pair](/help/en/ecs/user-guide/import-an-ssh-key-pair#concept-hvw-wj1-ydb).
    
4.  **(For Linux instances only)** After you re-initialize the system disk, you must re-mount any data disks. To use the same mount points, run the following command beforehand to record the current mount information for your data disks.
    
    ```
    sudo mount |grep "<Data disk name>"
    ```
    
    For example, to view the mount information for the data disk `/dev/vdb`, run the command. The output shows that the data disk `/dev/vdb` has two partitions: `/dev/vdb1` is mounted to `/tmp`, and `/dev/vdb2` is mounted to `/mnt`.
    
    ```
    [ecs-user@ecs ~]$ sudo mount |grep "/dev/vdb"
    /dev/vdb1 on /tmp type ext4 (rw,relatime)
    /dev/vdb2 on /mnt type ext4 (rw,relatime)
    ```
    
5.  Stop the ECS instance. For more information, see [Stop an instance](/help/en/ecs/user-guide/stop-an-instance#task-1909833).
    
    **Important**
    
    If an ECS instance uses the pay-as-you-go billing method and resides in a VPC, you must enable the standard mode when you stop the instance. If you enable the economical mode, you may be unable to start the instance after you re-initialize the disks attached to the instance.
    

### **Step 2: Re-initialize the disk**

**Important**

Re-initializing a system disk erases all data on it. To prevent data loss, create a snapshot to back up the system disk data beforehand. For more information, see [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb).

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the instance whose system disk you want to re-initialize and click the instance ID to go to the **Instance Details** page.
    
4.  Click the **Block Storage** tab, find the system disk you want to re-initialize, and then click **Re-initialize Disk** in the **Actions** column.
    
    ![重新初始化系统盘](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1335156761/p552357.png)
    
5.  In the **Re-initialize Disk** dialog box, configure the parameters.
    
    ![配置参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2335156761/p552358.png)
    
    **Parameter**
    
    **Description**
    
    **Username**
    
    Select a username to log on to the operating system.
    
    **Logon Credentials**
    
    For a Windows instance, reset the logon password. You can reuse the old password or specify a new one.
    
    For a Linux instance, select **Key Pair** or **Password**.
    
    -   **Key Pair**: Bind an SSH key pair to the instance for logon.
        
    -   **Password**: Reset the logon password. You can reuse the old password or specify a new one.
        
    
    **Security Hardening**
    
    The **Enable for Free** option is selected by default. This option installs the free Security Agent on your instance to provide features like backdoor detection, unusual logon alerts, and brute-force attack prevention.
    
    **Instance Startup Policy**
    
    The **Start Instance After Re-initializing Disk** option is selected by default. The instance automatically starts after re-initialization is complete. If you clear this option, you must start the instance manually.
    
6.  Click **Confirm**. The disk status changes to **Initializing**.
    
    Re-initialization is complete when the disk status returns toe **In Use**.
    
7.  (Conditionally required) If you are re-initializing a Linux instance that has data disks attached, you must re-mount them. The re-initialization operation does not change or erase data on the data disks, but their mount information is lost. You must create new mount points and mount the file systems. For more information, see [How do I re-attach data disks after I re-initialize the system disk of a Linux instance?](/help/en/ecs/user-guide/faq-4/#section-vaw-x75-0rr)
    
    > For Windows instances, data disks automatically come online after re-initialization. No further action is needed.
    
8.  After the system disk is re-initialized, redeploy your applications and configurations to restore your services.
    

## FAQs

-   **Why do I receive the error message "The operation is not supported to the specified disk that have snapshots with InstantAccess enabled." when I try to re-initialize a disk?**
    
    This error occurs because the instant access feature is enabled for a snapshot of the disk. You cannot re-initialize a disk when this feature is enabled for its snapshots. To learn how to disable it, see [Disable the instant access feature](/help/en/ecs/user-guide/enable-or-disable-the-instant-access-feature#menucascade-gdi-xrk-w8o).
    
-   [What are the differences between a system disk re-initialization operation and a system disk (operating system) replacement operation?](/help/en/ecs/user-guide/faq-4/#section-lux-tt1-8vt)
    

## References

-   You can use system disk snapshots to create a data disk and attach it to the ECS instance to recover the original data. For more information, see [Create from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot#concept-yyn-11b-ydb) and [Attach data disk](/help/en/ecs/user-guide/attach-a-data-disk).
    
-   To re-initialize a system disk by using the API, see [ReInitDisk](/help/en/ecs/api-reinitdisk#doc-api-Ecs-ReInitDisk).
    
-   To re-initialize a data disk attached to an ECS instance, see [Re-initialize a data disk](/help/en/ecs/user-guide/re-initialize-a-data-disk#task-1340072).
