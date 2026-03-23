You can replace the system disk of an Elastic Compute Service (ECS) instance to set up a new operating system (OS) environment. This approach supports a wider range of OS choices than OS migration, but it requires you to redeploy your applications on the new system. If you want to change the OS while retaining the data on the existing system disk, choose [OS migration](/help/en/ecs/user-guide/migrate-the-operating-system-of-an-ecs-instance) instead.

**Important**

Replacing the system disk releases the original disk, which causes a service interruption. All data on the disk is permanently deleted and cannot be recovered. Before you proceed, [create a snapshot](/help/en/ecs/user-guide/create-a-snapshot#concept-eps-gbl-xdb) to back up your data.

## Impacts

**Replacing the OS is a high-risk operation. Note the following:**

-   **System disk**
    
    -   **Data deletion**: The original system disk is released. All data and partition information are permanently deleted.
        
    -   **ID change**: A new system disk with a new ID is assigned.
        
    -   **Unchanged properties**: The disk category, instance IP address, and elastic network interface (ENI) MAC address remain unchanged.
        
-   **Data disks**
    
    -   **Same OS family**: If you replace the OS within the same family (Windows to Windows, or Linux to Linux), data disks are not affected. Simply re-attach them after the replacement.
        
    -   **Cross-OS family**: If you switch between Windows and Linux, the new OS cannot recognize the file system of the original data disks. See [What to do next](#177e5a0119g5m) to re-initialize the data disks or install software to read the data.
        
-   **Snapshots**
    
    -   Snapshots of the original system disk cannot be used to roll back the new system disk.
        
    -   Manually snapshots are retained.
        
    -   The retention of automatic snapshots depends on whether the automatic snapshot release feature is enabled for the disk.
        
        -   **Enabled**: Automatic snapshots are deleted.
            
        -   **Disabled**: Automatic snapshots are released at the end of their lifecycle.
            
    -   The automatic snapshot policy from the original system disk no longer applies to the new one. You must configure a new policy.
        
-   **Charges**
    
    Replacing the OS is free. However, new charges are incurred in the following cases:
    
    -   **Paid image**: If you select a paid image, you are charged the image price.
        
    -   **System disk extension**: If you increase the system disk capacity during the replacement, you are charged for the additional capacity.
        

## Limitations

-   **Region support**: Switching between Windows and Linux is supported only in regions in the Chinese mainland. In other regions, you can replace an OS only with one from the same family (for example, Linux to Linux or Windows to Windows).
    
-   **Hostname**: Before a cross-family OS replacement, make sure the instance hostname meets the requirements of the target OS. For example, a Windows hostname contains 2 to 15 characters.
    
-   **Non-I/O optimized instances**: You can check the instance type in the Other Information section at the bottom of the instance details page. If the instance is non-I/O optimized, you cannot use the console to replace the OS with Windows. You can only use the [ReplaceSystemDisk](/help/en/ecs/api-replacesystemdisk#doc-api-Ecs-ReplaceSystemDisk) API operation to switch to the following public Windows Server images.
    
    Public Windows Server images
    
    -   Windows Server 2012 R2 Datacenter Edition 64-bit (Chinese): win2012r2\_64\_dtc\_17196\_zh-cn\_40G\_alibase\_20170915.vhd
        
    -   Windows Server 2012 R2 Datacenter Edition 64-bit (English): win2012r2\_64\_dtc\_17196\_en-us\_40G\_alibase\_20170915.vhd
        
    -   Windows Server 2008 R2 Enterprise Edition 64-bit (Chinese): win2008r2\_64\_ent\_sp1\_zh-cn\_40G\_alibase\_20170915.vhd
        
    -   Windows Server 2008 R2 Enterprise Edition 64-bit (English): win2008r2\_64\_ent\_sp1\_en-us\_40G\_alibase\_20170915.vhd
        
    
-   **Target system disk capacity**: When replacing an OS with Windows, the system disk must have at least 1 GiB of free space. Otherwise, the instance will fail to start.
    
-   **Image limitations**: You cannot replace the OS on Alibaba Cloud Linux 3 Pro instances.
    

## Procedure

1.  Go to the [ECS console - Instance](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the resource group and region of the target resource.
    
2.  On the Instances page, click the ID of the target instance to go to its details page. In the upper-right corner, select **All Actions** > **Replace Operating System**.
    
3.  Set the OS replacement method.
    
    1.  Set **Replacement Method** to **Replace System Disk**. The system runs a precheck automatically. If the precheck fails, resolve the issues as prompted and try again.
        
    2.  Read the notes carefully and select **I am aware of the preceding risks and want to continue**. Click **Continue to Replace Operating System**.
        
4.  Configure the new OS and instance information.
    
    -   **Image**: Select an image type (such as Public Image or Custom Image) and an image version that are supported by the current instance type.
        
    -   **Logon Credentials**:
        
        **Option**
        
        **Description**
        
        **Key Pair**
        
        **(Linux instances only)** Select an existing key pair. If no key pairs are available, click **Create Key Pair** to create one.
        
        **Image Password Preset**
        
        **(Custom/Shared images only)** Use the password that is already set in the image as the logon credential. Make sure the selected image has a password configured.
        
        **Custom Password**
        
        Set a username and password for the new system. For Linux, the username can be `root` or `ecs-user` (recommended). For Windows, the default is `administrator`.
        
        **Configure After Replacement**
        
        Skip logon credential setup. After the OS replacement, [bind an SSH key pair](/help/en/ecs/user-guide/bind-an-ssh-key-pair-to-an-instance#concept-zzt-nl1-ydb) or [reset the instance logon password](/help/en/ecs/user-guide/reset-the-logon-password-of-an-instance#concept-qct-gfl-xdb) before you can log on to the instance.
        
    -   **System Disk** (Optional): Increase the system disk capacity or enable the [disk encryption](/help/en/ecs/user-guide/encryption-overview) as needed. The system disk type cannot be changed.
        
        > For information about charges for extending a system disk, see [Block storage billing](/help/en/ecs/block-storage-devices#concept-1937442).
        
5.  Confirm the configuration and fees, and then replace the OS.
    
6.  (Conditionally required) If the instance is in the **Running** state, stop it.
    
    -   Subscription: If you resize the system disk during the OS replacement, pay for the order as prompted. The replacement process starts after payment.
        
    -   Pay-as-you-go: We recommend you select **Standard Mode**. If you use Economical Mode, the instance may fail to start due to insufficient resources after the OS replacement.
        
7.  The replacement process takes about 10 minutes, and the instance restarts automatically. After completion, the instance status changes to **Running**, and the OS is updated to the one you selected.
    

## What to do next

-   **(Conditionally required) Manage data disks**
    
    -   **Same OS family**: For Linux-to-Linux OS replacements, data disks require a [manual mount](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance#85b1b5ca89k8v) after you log on to the new system.
        
    -   **Cross-OS family**:
        
        -   **Linux to Windows**: Windows does not natively recognize file systems such as ext4 or XFS. Use a third-party tool like `Ext2Fsd` to read the data disk. If the disk does not contain important data, [re-initialize the data disk](/help/en/ecs/user-guide/re-initialize-a-data-disk#task-1340072).
            
        -   **Windows to Linux**: Linux does not natively recognize the NTFS file system. You can [install the ntfs-3g tool to mount the data disk](/help/en/ecs/user-guide/how-do-i-move-an-ntfs-disk-between-a-linux-instance-and-a-windows-instance). If the disk does not contain important data, [re-initialize the data disk](/help/en/ecs/user-guide/re-initialize-a-data-disk#task-1340072).
            
-   **(Optional) Recover original system disk data**: If you need to recover data from the original system disk, [use a snapshot of the original system disk to restore data](/help/en/ecs/user-guide/use-a-snapshot-of-the-original-system-disk-to-restore-data-after-the-operating-system-of-an-ecs-instance-is-replaced). Create a new pay-as-you-go disk from the pre-replacement snapshot and attach it to the instance for data recovery. Release the disk promptly after recovery to avoid unnecessary charges.
    
-   **(Optional) Extend the system disk partition and file system**:
    
    When you resize a system disk by replacing the OS, the partition extension may time out and fail. For systems where the extension did not succeed, you must manually extend the partition. This action extends only the system disk partition and does not affect the OS version. For more information, see [Extend partitions and file systems of a disk (Linux)](/help/en/ecs/user-guide/resize-linux-cloud-disks#89a4d9f466qbt).
    
-   **Redeploy your business environment**
    
    Reinstall required software, configure environment variables, and migrate business code in the new OS.
    

## Related operations

-   [Configure an automatic snapshot policy for a cloud disk](/help/en/ecs/user-guide/enable-or-disable-an-automatic-snapshot-policy#concept-nyv-k3l-xdb) for periodic data backups.
    
-   After you confirm that the original system disk data is no longer needed, [delete snapshot](/help/en/ecs/user-guide/delete-a-snapshot-1#task-1478465) to save storage costs.
    
-   Use the public template [ACS-ECS-BulkyReplaceSystemDisk](/help/en/oos/user-guide/acs-ecs-bulkyreplacesystemdisk) to replace system disks for multiple ECS instances in bulk.
    
-   Use the [ReplaceSystemDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-replacesystemdisk) API operation to replace the OS.
    
-   [Which operating systems support visualization (graphical desktops)?](/help/en/ecs/faq-about-images-during-instance-creation/#75baa2e1cacwy)
    
-   [FAQ about replacing an operating system](/help/en/ecs/faq-about-replacing-the-operating-system-of-an-instance#concept-2271273).
