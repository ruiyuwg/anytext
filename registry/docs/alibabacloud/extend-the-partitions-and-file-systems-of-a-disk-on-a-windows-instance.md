After resizing a disk capacity, you need to extend partitions and file systems to use the new space. Because disks cannot be shrunk, evaluate your capacity needs before proceeding.

## Step 1: Increase the disk capacity

### **Prerequisites**

Ensure one of the following conditions is met:

-   The disk is attached to a non-expired ECS instance that is in the **Running** or **Stopped** state.
    
-   The disk status is **Unattached** (Available).
    

### **Procedure**

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk/). In the top navigation bar, select the target region and resource group.
    
2.  In the **Actions** column for the target disk, click **Resize**.
    
3.  Create a snapshot to back up the disk data. This prevents data loss from incorrect operations during the expansion process. On the **Determine Disk and Read Notes** page, verify the information and click **create Snapshots**. Set a name and retention period for the snapshot, and then click **OK**.
    
    **Important**
    
    Using snapshots incurs [fees](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6077764671/p1030784.png)
    
4.  When the **Resizing Supported** column changes to **Yes**, click **I Understand Risks and Have Backed Up Data. Proceed**.
    
    > The snapshot creation time depends on factors such as data volume and bandwidth. You can access [ECS Console - Snapshots](https://ecs.console.alibabacloud.com/snapshot) to view the progress in the **Progress** column for the target snapshot.
    
5.  On the **Configure Resizing Method And New Size** page, set the expansion parameters, confirm the fee, and click **OK**.
    
    **Important**
    
    You are charged for the added capacity when you resize a disk.
    
    **Parameter**
    
    **Description**
    
    **New Disk Size**
    
    The capacity after expansion cannot be smaller than the current capacity.
    
    **Resizing Method**
    
    -   **Online Resizing** (Recommended): After you increase the capacity, you do not need to restart the instance. The new capacity takes effect immediately.
        
    -   **Offline Resizing**: The disk is in the **Unattached** state, the instance is in the **Stopped** state, or [some instance types](#b0cc109b1b8ji) support only offline expansion.
        
    
6.  (Conditionally required) If the disk is a subscription disk, wait for the 5-second countdown in the payment dialog box to finish. Click **Complete Payment**. After completing the payment, return to the expansion flow and click **Paid. Close the dialog box**.
    
    > If you click Paid but do not complete the payment, resizing will be blocked. To proceed, click **Pay for the order**, complete the payment, and then return to the resizing process.
    

## Step 2: Extend partitions and file systems

### **Prerequisites**

-   If the disk is in the **Unattached** (Available) state, [attach it to an ECS instance](/help/en/ecs/user-guide/attach-a-data-disk).
    
-   If you performed offline resizing for a disk attached to an instance, [restart](/help/en/ecs/user-guide/restart-instances#concept-yxw-dwm-xdb) or [start](/help/en/ecs/user-guide/start-an-instance) the instance first.
    
-   For unformatted data disks (no file system), refer to [Initialize a data disk](/help/en/ecs/user-guide/initialize-a-data-disk-up-to-2-tib-in-size-on-a-windows-instance) to complete the operation.
    

### **Procedure**

> This procedure uses Windows Server 2022 as an example.

1.  Determine whether to convert the partition.
    
    1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  Go to the details page of the target instance. Click **Connect** and select **Workbench**. Set the connection method to **Terminal** and enter your username and password to log on to the graphical terminal.
        
    3.  On the Windows Server desktop, right-click the ![开始图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8116265661/p467093.png) icon and select **Disk Management**.
        
    4.  In the **Disk Management** window, right-click the target disk and select **Properties** from the pop-up menu.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3090833571/p987880.png)
        
    5.  In the dialog box, click the **Volumes** tab and check the **Partition style**.
        
        > If the partition style is Master Boot Record (MBR) and the capacity after resizing is greater than 2 TiB, refer to [Convert the partition style of a data disk to GPT and re-partition the disk](/help/en/ecs/user-guide/convert-data-disk-mbr-partition-to-gpt-partition#title-6ml-ojy-33e) to complete the resizing.
        
2.  Extend partitions and file systems.
    
    #### **Use the increased capacity to extend an existing partition**
    
    1.  In the **Disk Management** dialog box, select **Action** > **Rescan Disks** to view the unallocated disk capacity.
        
    2.  Right-click the last partition on the disk and select **Extend Volume**.
        
        > Because disk partitions and file systems are independent, you can only extend the last partition on a disk. In the example, the unallocated space on Disk 1 can only be added to **New Volume (E:)**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3090833571/p987885.png)
        
    3.  Follow the default settings in the **Extend Volume Wizard**. After the extension, the new capacity is automatically added to the last partition. Check that the disk data and your applications are working correctly.
        
    
    #### **Use the increased capacity to create a new partition**
    
    1.  In the **Disk Management** dialog box, choose **Action** > **Rescan Disks** to view the unallocated disk capacity.
        
    2.  Right-click the unallocated space and select **New Simple Volume**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3090833571/p987893.png)
        
    3.  In the **New Simple Volume Wizard**, accept the default settings to complete the operation.
        
    

## Billing

When you resize a disk, you are charged for the added capacity. The billing method is the same as that of the original disk.

-   Subscription disk: You are charged immediately for the new capacity, but only for the time remaining in your current subscription period.
    
    Price difference = (Monthly price / 30 days) × Remaining duration × Added capacity.
    
    > The remaining duration is measured in days and is accurate to the second.
    
-   Pay-as-you-go disk: Billing immediately adjusts to the new capacity. Charges are calculated hourly, with the bill for the current hour generated in the next hour.
    

If you have purchased a [SCUs](/help/en/ecs/storage-capacity-units-1#concept-2150938), it can be automatically used to offset pay-as-you-go disk bills. For more information, see [Block storage billing](/help/en/ecs/block-storage-devices#concept-1937442).

## References

-   If a resizing operation fails due to an incorrect operation, you can [roll back the disk using a snapshot](/help/en/ecs/user-guide/roll-back-a-disk-by-using-a-snapshot-1#title-1ph-xey-y70) that you created before the resizing. This restores the disk data, but the increased capacity will not be rolled back.
    
-   Disks cannot be shrunk after resizing. To [shrink a disk](/help/en/ecs/user-guide/shrink-a-disk#concept-66372-zh), you can use Server Migration Center (SMC).
    
-   To resize a disk for a Linux instance, see [Resize a disk (Linux)](/help/en/ecs/user-guide/resize-linux-cloud-disks).
    

## FAQ

### **FAQ about resizing disks**

-   #### **Why is the** **I Understand Risks and Have Backed Up Data. Proceed** **button grayed out?**
    
    This happens if a snapshot is being created for the disk. Wait for the snapshot creation process to complete before resizing.
    
-   #### **I performed an offline resizing but do not want to restart the instance. What can I do?**
    
    An offline resizing requires an instance restart to take effect. If your business does not allow a restart, you can perform a small online resize (such as 1 GiB). This action will force both the original offline resize and the new online resize to take effect immediately without a restart. This is a secondary resizing and incurs additional fees. Proceed with caution.
    
-   #### **Instance types that support only offline resizing**
    
    -   ecs.ebmc4.8xlarge
        
    -   ecs.ebmhfg5.2xlarge
        
    -   ecs.ebmg5.24xlarge
        
    -   ecs.t1
        
    -   ecs.s1
        
    -   ecs.s2
        
    -   ecs.s3
        
    -   ecs.c1
        
    -   ecs.c2
        
    -   ecs.m1
        
    -   ecs.m2
        
-   #### **How do I resize a disk using the API?**
    
    1.  (Recommended) Back up data: Before resizing, call the [CreateSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsnapshot) operation to create a snapshot.
        
        > Using snapshots incurs [snapshot fees](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).
        
        **Important**
        
        Back up your data in advance to prevent data loss from incorrect operations during the resizing.
        
    2.  After the snapshot is created, call the [ResizeDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-resizedisk) operation to increase the disk capacity.
        
    3.  After resizing, you must also extend partitions and file systems.
        
        -   Call the [RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand) operation to send [commands](#dc4467202byaw) to the target instance.
            
        -   Call the [DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations) operation to query the command output.
            
        
        #### **Commands**
        
        1.  Check whether the partition type needs to be converted.
            
            ```
            Get-Disk 
            ```
            
            **Response Parameter**
            
            **Description**
            
            Number
            
            The ordinal number of the disk.
            
            Partition Style
            
            The partition format of the disk.
            
            If the `Partition Style` is MBR and the capacity after resizing is greater than 2 TiB, refer to [Convert the partition style to GPT and re-partition the disk](#6a02fb672alxf) to complete the resizing.
            
        2.  Extend partitions and file systems.
            
            #### **Use the increased capacity to extend an existing partition**
            
            1.  Determine the drive letter of the disk to extend. `<Number>` is the disk ordinal number that you obtained in the previous step.
                
                ```
                Get-Partition -DiskNumber <Number>
                ```
                
                In the response, DriveLetter is the drive letter of the partition to extend. If there are multiple partitions, you can only extend the last one.
                
            2.  Extend the partition and file system. `<DriveLetter>` is the drive letter that you obtained in the previous step.
                
                ```
                Resize-Partition -DriveLetter <DriveLetter> -Size (Get-PartitionSupportedSize -DriveLetter <DriveLetter>).sizeMax
                ```
                
            3.  Check the result of the partition and file system extension.
                
                Run `Get-Partition -DiskNumber <Number>` and check the `Size` field. If the partition size is as expected, the extension is successful.
                
            
            #### **Use the increased capacity to create a new partition**
            
            1.  Check the partition status of the disk to extend. `<Number>` is the disk ordinal number that you got in the previous step.
                
                ```
                Get-Partition -DiskNumber <Number>
                ```
                
                In the response, DriveLetter is the drive letter of the existing partition.
                
            2.  Create a new partition.
                
                **Command Parameter**
                
                **Description**
                
                \-DiskNumber
                
                Specifies the disk ordinal number. Replace `<Number>` with the disk ordinal number that you obtained in the first step.
                
                \-UseMaximumSize
                
                Indicates that the command uses the maximum available capacity.
                
                \-DriveLetter
                
                Replace `<DriveLetter>` with the drive letter for the new partition. It cannot be the same as the drive letter of the existing partition.
                
                ```
                New-Partition -DiskNumber <Number> -UseMaximumSize -DriveLetter <DriveLetter>
                ```
                
            3.  Initialize the new partition.
                
                **Command Parameter**
                
                **Description**
                
                \-DriveLetter
                
                Replace `<DriveLetter>` with the drive letter that you set in the previous step.
                
                \-FileSystem
                
                Replace `<FileSystem>` with the file system type, such as NTFS.
                
                \-Confirm:$false
                
                Skips the confirmation prompt.
                
                ```
                Format-Volume -DriveLetter <DriveLetter> -FileSystem <FileSystem> -Confirm:$false
                ```
                
            4.  View information about the new partition.
                
                Run `Get-Partition -DiskNumber <Number>` to view basic information about the new partition.
                
            

### **FAQ about extending partitions and file systems**

-   #### Unallocated space is not detected after I rescan for disks.
    
    For instances created before March 30, 2019, the virtio driver version may be earlier than 58011. You must restart the instance to detect the new space. You can run the following command in PowerShell to check the driver version. If necessary, you can [update the virtio driver for a Windows instance](/help/en/ecs/update-red-hat-virtio-drivers-of-windows-instances#concept-v4p-2xs-dhb).
    
    ```
    [System.Diagnostics.FileVersionInfo]::GetVersionInfo("C:\Windows\System32\drivers\viostor.sys")
    ```
    
-   #### Can the capacity of a data disk be used to extend another data disk or the system disk?
    
    Because disk partitions and file systems are independent, you can only extend the last partition on the same disk. You cannot allocate the capacity to other disks. Therefore, the capacity of a data disk cannot be used to extend another data disk or the system disk.
    
-   #### I receive the error message: "The volume cannot be extended because the number of clusters will exceed the maximum number of clusters supported by the file system."
    
    **Cause**: The **Allocation unit size** was set incorrectly when you initialized the disk. For more information about disk capacity limits, see [NTFS overview](https://learn.microsoft.com/en-us/windows-server/storage/file-server/ntfs-overview).
    
    **Allocation unit size**:
    
    -   To extend to a capacity from 16 TiB to 32 TiB (inclusive), make sure the allocation unit size was set to 8192 during initialization.
        
    -   To extend to a capacity from 32 TiB to 64 TiB (inclusive), make sure the allocation unit size was set to 16K during initialization.
        
    
    **Solution**:
    
    **Important**
    
    The **Allocation unit size** is set when the disk is initialized and cannot be changed afterward.
    
    1.  Check the **Allocation unit size** of the disk that you want to resize.
        
        Log on to the instance, open the PowerShell command-line interface, and run the following command to retrieve the **Allocation unit size**. The following example shows how to check drive D:
        
        > The **Bytes Per Cluster** in the output is the **Allocation unit size**.
        
        ```
        fsutil fsinfo ntfsinfo D:
        ```
        
    2.  Choose a solution based on your requirements.
        
        ##### **Create a new disk and copy data**
        
        1.  [Create an empty data disk](/help/en/ecs/user-guide/create-a-disk) with the target capacity for the current instance.
            
        2.  Select the correct allocation unit size when you [initialize the data disk](/help/en/ecs/user-guide/initialize-a-data-disk-up-to-2-tib-in-size-on-a-windows-instance).
            
        3.  Manually copy the data from the original disk to the new disk.
            
        4.  Verify that your services are restored. After the operation is complete, restart the relevant services and check that they are running correctly.
            
        5.  After you confirm that your services are running correctly, you can detach the original data disk and release it. For more information, see [Detach a data disk](/help/en/ecs/user-guide/detach-a-data-disk) and [Release a disk](/help/en/ecs/user-guide/release-a-disk).
            
        
        ##### **Use the increased capacity to create a new partition**
        
        1.  In the **Disk Management** dialog box, choose **Action** > **Rescan Disks** to view the unallocated disk capacity.
            
        2.  Right-click the unallocated space and select **New Simple Volume**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3090833571/p987893.png)
            
        3.  In the **New Simple Volume Wizard**, accept the default settings to complete the operation.
            
        
-   #### API commands to convert the partition style and re-partition the disk
    
    **Important**
    
    During the conversion, the disk data is unavailable, which may affect your services. Plan a downtime window. Stop your services first. After the conversion is complete and the data is restored, you can resume your services.
    
    ##### **Step 1: Convert the partition format and re-partition the disk**
    
    -   During partition conversion in Windows, you must delete the volume. Deleting a volume clears all data on it. Before you convert the partition, call the [CreateSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsnapshot) operation to create a snapshot to back up the disk data. After the partition is converted, you must restore the data from the snapshot.
        
    -   Call the [RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand) operation to send [commands](#48229b96b0eye) to the target instance.
        
    -   Call the [DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations) operation to query the command output.
        
    
    ###### **Commands**
    
    1.  Convert the partition format
        
        1.  Get the ordinal number (Number) and total capacity (Total Size) of the target disk.
            
            ```
            Get-Disk 
            ```
            
        2.  Determine the partition number (PartitionNumber) of the target disk. `<Number>` is the disk ordinal number that you got in the previous step.
            
            ```
            Get-Partition -DiskNumber <Number>
            ```
            
        3.  Delete the partition on the target disk.
            
            **Important**
            
            The **Delete Volume** operation permanently erases all data from the volume. Before you delete the volume, call the [CreateSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsnapshot) operation to create a backup snapshot.
            
            **Command Parameter**
            
            **Description**
            
            \-DiskNumber
            
            <Number> is the disk ordinal number that you obtained in the first step.
            
            \-PartitionNumber
            
            <PartitionNumber> is the partition number that you obtained in the previous step.
            
            \-Confirm:$false
            
            Skips the confirmation prompt.
            
            ```
            Remove-Partition -DiskNumber <Number> -PartitionNumber <PartitionNumber> -Confirm:$false
            ```
            
        4.  After you delete all partitions on the target disk, convert the partition style.
            
            1.  Enter the diskpart tool.
                
                ```
                diskpart
                ```
                
            2.  List information about all disks.
                
                ```
                list disk
                ```
                
            3.  Select the disk to convert.
                
                <Number> is the disk ordinal number that you got in the first step.
                
                ```
                select disk <Number>
                ```
                
            4.  Run the following command to convert the partition type to GPT.
                
                ```
                convert gpt
                ```
                
            5.  Run the following command to exit the diskpart tool.
                
                ```
                exit
                ```
                
        5.  Check whether the conversion is successful.
            
            Run the `Get-Disk` command. If the `Partition Style` of the destination disk is GPT, the partition type was successfully converted.
            
    2.  Repartition the disk
        
        1.  Run the following command to repartition the disk.
            
            **Command Parameter**
            
            **Description**
            
            \-DiskNumber
            
            <Number> is the disk ordinal number that you obtained in Step 1.
            
            \-Size
            
            <Size> is the custom size of the new partition, such as 40 GB.
            
            \-DriveLetter
            
            <DriveLetter> is the custom drive letter of the new partition.
            
            \-FileSystem
            
            <FileSystem> is the file system type of the new partition, such as NTFS.
            
            ```
            New-Partition -DiskNumber <Number> -Size <Size> -DriveLetter <DriveLetter> | Format-Volume -FileSystem <FileSystem>
            ```
            
        2.  Run the `Get-Partition -DiskNumber <Number>` command to view information about the new partition.
            
    
    ##### **Step 2: Recover disk data**
    
    -   Call the [CreateDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createdisk) API operation to create a data disk from the snapshot.
        
    -   Call the [AttachDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-attachdisk) API operation to attach the created data disk to the ECS instance to copy data. Do not roll back the snapshot. Otherwise, the disk may be reverted to the MBR format.
