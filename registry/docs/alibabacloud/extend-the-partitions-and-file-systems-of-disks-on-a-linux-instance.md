After resizing a disk capacity, you need to extend partitions and file systems to use the extra capacity. Since disks cannot be shrunk, evaluate your storage needs carefully before proceeding.

## Resizing overview

Resizing a disk is a two-step process:

1.  Increase the disk capacity: First, you purchase more storage space for your disk in the Elastic Compute Service (ECS) console. Think of this as buying a larger hard drive. A successful payment completes this step, but the new space is not usable yet.
    
2.  Extend partitions and file systems: Next, you make the new space available within the server's operating system (OS). This is like formatting the new space on a hard drive so the computer can recognize and use it.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9239772771/CAEQTBiCgMC79ojbyhkiIDZhYmMyYzNjMjM0ZDQ1NGNiY2M1ZDM4NWEyZTY4MmNl5346252_20250701134951.407.svg)

## Step 1: Increase the disk capacity

### Prerequisites

Ensure one of the following conditions is met:

-   The disk is attached to an active ECS instance that is in the **Running** or **Stopped** state.
    
-   The disk is in the **Unattached** (Available) state.
    

### **Procedure**

1.  Go to [ECS console - Block Storage](https://ecs.console.alibabacloud.com/disk/). In the top navigation bar, select the target region and resource group.
    
2.  Find the disk you want to resize. Click **Resize** in the **Actions** column.
    
3.  To prevent data loss from accidental errors during resizing, create a snapshot to back up your data. On the **Determine Disk and Read Notes** page, verify the information and click **create snapshots**. Set a name and retention period for the snapshot, and then click **OK**.
    
    **Important**
    
    Using snapshots incurs [fees](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6077764671/p1030784.png)
    
4.  When the **Resizing Supported** column changes to **Yes**, click **I Understand Risks and Have Backed Up Data. Proceed**.
    
    > The time required to create a snapshot depends on factors such as data volume and bandwidth. You can go to [ECS console - Snapshots](https://ecs.console.alibabacloud.com/snapshot) to view the progress in the **Progress** column for the target snapshot.
    
5.  On the **Configure Resizing Method And New Size** page, set the parameters, confirm the fees, and then click **OK**.
    
    **Important**
    
    You are charged for the added capacity when you resize a disk.
    
    **Parameter**
    
    **Description**
    
    **New Disk Size**
    
    The new size cannot be smaller than the current size.
    
    **Resizing Method**
    
    -   **Online Resizing** (Recommended): The new capacity takes effect immediately without restarting the instance.
        
    -   **Offline Resizing**: Use this method if the disk is **Unattached**, the instance is **Stopped**, or you are using [certain instance types](#b0cc109b1b8ji) that only support offline resizing.
        
    
6.  (Conditional) For subscription-based disks, wait for the 5-second countdown in the payment dialog, then click **Complete Payment**. After returning to the resizing process, click **Paid. Close the dialog box**.
    
    > If you click **Paid** before you complete the payment, resizing will be blocked. Click **Pay for Order**, complete the payment, and then return to the resizing process.
    

## Step 2: Extend partitions and file systems

### Prerequisites

-   If the disk is **Unattached** (Available), [attach it to an ECS instance](/help/en/ecs/user-guide/attach-a-data-disk) first.
    
-   If you performed offline resizing for a disk attached to an instance, [restart](/help/en/ecs/user-guide/restart-instances#concept-yxw-dwm-xdb) or [start the instance](/help/en/ecs/user-guide/start-an-instance).
    
-   For unformatted data disks (no file system), refer to [Initialize a data disk](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance) to complete the setup.
    

### Procedure

After resizing the disk, you must extend its partitions and file systems to use the new capacity. You can do this in two ways:

-   Extend using the console (Recommended): Use Cloud Assistant directly from the console. This method is convenient and avoid manual commands entry.
    
-   Extend using the command line: Log on to the instance and run commands. This method offers more control and is widely applicable.
    

#### **Extend using the console (recommended)**

> If you accidentally close this page, you can [return to it](#c1e7d8566fv8q) from the Block Storage tab on the instance details page.

1.  In the **Pending Extension of Partitions and File Systems** section, click **Extend Partitions and File Systems**.
    
    > If you have not granted authorization to Cloud Assistant, you will be prompted to do so.
    
    > If the page displays a message indicating that the Cloud Assistant query failed or the OS version is not supported, [extend the disk using the command line](#89a4d9f466qbt).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6077764671/p1030788.png)
    
2.  In the **Expand partitions and file systems using Cloud Assistant** dialog box, click **Execute Now**. When the message ****Cloud Assistant successfully expanded the partitions and file systems**** appears, the scale-out is complete. Click **Close** to exit the dialog box.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6077764671/p1030786.png)
    

#### Extend **using the command line**

#### Extend **partitions**

**Important**

Check your OS version first. For CentOS 6 and earlier, OpenSUSE 42.3, or Debian 8 and earlier, you must follow [Offline resizing for partitions and file systems](/help/en/ecs/user-guide/offline-extend-partitions-and-file-systems-on-a-data-disk-of-a-linux-instance).

1.  Log on to the ECS instance.
    
    1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  Go to the instance's details page. Click **Connect** and select **Workbench** to open a terminal.
        
2.  Extend the partition.
    
    1.  Run `sudo lsblk` to identify the device name and partition number of the disk to be extended.
        
        ```
        $ sudo lsblk
        NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
        vda    253:0    0   50G  0 disk 
        ├─vda1 253:1    0    2M  0 part 
        ├─vda2 253:2    0  200M  0 part /boot/efi
        └─vda3 253:3    0 39.8G  0 part /
        vdb    253:16   0   40G  0 disk /data
        ```
        
        -   If the disk has no partitions (like `vdb` in this example ), you can skip this step and proceed directly to [extend file systems](#6215fc18fcf2p).
            
        -   If the disk's capacity is larger than the total size of its partitions, you need to extend a partition. In the example, the capacity of the system disk `vda` is 50 GiB but its three partitions has a total capacity of 40 GiB. You need to extend the last partition, `vda3`, which has partition number 3.
            
            **Important**
            
            You can only extend the last partition of a disk.
            
            Common device naming and partition formats are as follows:
            
            > If the sudo lsblk command returns a device name in the `vgx` format, your disk is managed by Logical Volume Manager (LVM). After you increase the disk capacity in the console, you must use LVM to [extend the logical volume](/help/en/ecs/user-guide/extend-an-lv-by-using-lvm#task-1797418).
            
            **Device type**
            
            **Device name**
            
            **Partition number**
            
            Disks that do not use the NVMe protocol
            
            Format: `vd[a-z]`, such as `vda` (system disk), `vdb`, and `vdc`.
            
            Format: `vd[a-z]<Partition number>`, such as `vda3`, where the partition number is 3.
            
            [NVMe protocol](/help/en/ecs/user-guide/nvme-protocol) disks
            
            Format: `nvmeXn1`, such as `nvme0n1`, `nvme1n1`, and `nvme2n1`.
            
            Format: `nvmeXn1p<Partition number>`, such as `nvme0n1p1`, where the partition number is 1.
            
    2.  Install the tools for extending partitions.
        
        ##### For Alibaba Cloud Linux, CentOS, and similar distributions
        
        ```
        type growpart || sudo yum install -y cloud-utils-growpart
        sudo yum update cloud-utils-growpart
        type sgdisk || sudo yum install -y gdisk
        ```
        
        ##### For Debian, Ubuntu, and similar distributions
        
        ```
        sudo apt-get update
        sudo apt-get install -y cloud-guest-utils
        type sgdisk || sudo apt-get install -y gdisk
        ```
        
    3.  Run the command to extend the partition.
        
        Replace `<Device_name>` and `<Partition_number>` in the command with the device name and partition number that you obtained in [step a](#000cbf61b0u86), and then execute the command.
        
        **Important**
        
        Note that there is a space between the device name and the partition number.
        
        ```
        sudo LC_ALL=en_US.UTF-8 growpart /dev/<Device_name> <Partition_number>
        ```
        
        If the response contains the keyword `CHANGED`, the command was executed successfully. If it fails, see [growpart command FAQ](#2d1ace597c8ss) for troubleshooting.
        
        > `LC_ALL=en_US.UTF-8` is an environment variable used to set the character encoding to prevent errors in non-English systems.
        
3.  Verify the partition extension.
    
    Run the `sudo lsblk` command again. The partition extension is complete if the partition size now matches the total device capacity. For example, the `vda` device and its partitions now both show 50 GiB. The next step is to [extend the file system](#6215fc18fcf2p).
    
    ```
    $ sudo lsblk
    NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
    vda    253:0    0   50G  0 disk 
    ├─vda1 253:1    0    2M  0 part 
    ├─vda2 253:2    0  200M  0 part /boot/efi
    └─vda3 253:3    0 49.8G  0 part /
    vdb    253:16   0   40G  0 disk /data
    ```
    

#### **Extend file systems**

1.  Run `sudo lsblk -f` to find the target device name, file system type, and mount point for the disk you are extending.
    
    ```
    $ sudo lsblk -f
    NAME   FSTYPE LABEL UUID                                 MOUNTPOINT
    vda                                                      
    ├─vda1                                                   
    ├─vda2 vfat         7938-FA03                            /boot/efi
    └─vda3 ext4   root  33b46ac5-7482-4aa5-8de0-60ab4c3a4c78 /
    vdb    ext4         3d7a3861-da22-484e-bbf4-b09375894b4f /data                                     
    ```
    
    -   If the device has partitions, the **target device name** is the name of the last partition. For the system disk `vda`, the target device name is `vda3`, the **file system type** is `ext4`, and the **mount point** is `/`.
        
    -   If the device has no partitions, the **target device name** is the same as the device name. For the data disk `vdb`, the target device name is `vdb`, the **file system type** is `ext4`, and the **mount point** is `/data`.
        
2.  Extend the file system.
    
    -   ext2/ext3/ext4 file systems
        
        Replace the variable `<Target device name>` with the name identified [the previous step](#8b8ef93861p8q), then run the command.
        
        ```
        sudo resize2fs /dev/<Target device name>
        ```
        
    -   xfs file systems
        
        Replace `<Mount point>` with the mount point obtained in [the previous step](#8b8ef93861p8q), then run the command.
        
        ```
        sudo xfs_growfs <Mount point>
        ```
        
3.  Check if the file system was extended successfully.
    
    Run `sudo df -Th` to verify that the file system size (the `Size` field in the output) matches the new disk capacity.
    
    > When a file system is created, it [reserves some capacity to store metadata](/help/en/ecs/run-the-df-command-on-a-linux-instance-to-check-that-the-disk-capacity-is-not-consistent-with-the-purchased-capacity#fcc009d0a7odi). Therefore, the file system size may be smaller than the total capacity shown in the console.
    

## Billing

When you resize a disk, you are charged for the added capacity. The billing method is the same as that of the original disk.

-   Subscription disk: You are charged immediately for the new capacity, but only for the time remaining in your current subscription period.
    
    Price difference = (Monthly price / 30 days) × Remaining duration × Added capacity.
    
    > The remaining duration is measured in days and is accurate to the second.
    
-   Pay-as-you-go disk: Billing immediately adjusts to the new capacity. Charges are calculated hourly, with the bill for the current hour generated in the next hour.
    

If you have purchased a [Storage Capacity Unit (SCU)](/help/en/ecs/storage-capacity-units-1#concept-2150938), it can be automatically used to offset pay-as-you-go disk bills. For more information, see [Block storage billing](/help/en/ecs/block-storage-devices#concept-1937442).

## FAQ

### FAQ about resizing disks

-   #### Why does the new capacity not take effect in the OS after resizing?
    
    After you resize a disk, the OS cannot automatically detect the new capacity. You must [manually extend](#89a4d9f466qbt) partitions and file systems to make the capacity usable.
    
-   #### How do I resize a disk using the API?
    
    1.  (Recommended) Back up data: Before resizing, call the [CreateSnapshot](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createsnapshot) operation to create a snapshot.
        
        > Snapshots incur [fees](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).
        
    2.  Resize capacity: After the snapshot is created, call the [ResizeDisk](/help/en/ecs/developer-reference/api-ecs-2014-05-26-resizedisk) operation to increase the disk capacity.
        
    3.  Extend partitions and file systems:
        
        After resizing, call the [RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand) operation to send commands to the target instance (see [Extend using the command line](#89a4d9f466qbt)). Use the [DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations) operation to check the command results.
        
-   #### **Why is the **I Understand Risks and Have Backed Up Data. Proceed** button grayed out?**
    
    This happens if a snapshot is being created for the disk. Wait for the snapshot creation process to complete before resizing.
    
-   #### I performed an offline resize but do not want to restart the instance. What should I do?
    
    An offline resizing requires an instance restart to take effect. If your business does not allow a restart, you can perform a small online resize (such as 1 GiB). This action will force both the original offline resize and the new online resize to take effect immediately without a restart. This is a secondary resizing and incurs additional fees. Proceed with caution.
    
-   #### Which instance types support only offline resizing?
    
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
        
-   #### How do I return to the Cloud Assistant page for extending partitions and file systems?
    
    This feature is in invitational preview and may not be visible for all customers or scenarios.
    
    1.  On the **Block Storage** tab of the instance details page, enable the Cloud Assistant Check feature.
        
        > If you do not see the **Cloud Assistant Check** feature, [extend partitions and file systems using the command line](#89a4d9f466qbt).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7230715571/p993148.png)
        
    2.  Hover over **2/3 Check Passed** under **In-System Status Check** for the target disk, and click **Extend Partitions And File Systems** to return to the extending page.
        
-   #### Why didn't the partition size update after the partition was extended?
    
    Run sudo lsblk and check the Size field. If the partition capacity is different from the device capacity, the extension has not taken effect. Extending a partition usually does not require a restart. This issue can happen on older OS versions that don't automatically recognize the change. In this case, you must restart the instance for the new partition size to be recognized.
    

### Common issues when running the `growpart` command

-   #### Error: `no tools available to resize disk with 'gpt'.FAILED: failed to get a resizer for id ''`.
    
    The `gdisk` tool is not installed on the OS. The `gdisk` tool is required to extend a GPT partition. Run the following command to install it for your OS:
    
    -   CentOS and similar OS types
        
        ```
        type sgdisk || sudo yum install -y gdisk
        ```
        
    -   Debian, Ubuntu, and similar OS types
        
        ```
        sudo apt-get update
        type sgdisk || sudo apt-get install -y gdisk
        ```
        
-   #### Error: `sudo: growpart: command not found`.
    
    The `growpart` tool is not installed on the OS. Run the following commands for your OS to install the `growpart` tool. The gdisk tool is also required to extend a GPT partition.
    
    -   CentOS and similar OS types
        
        ```
        type growpart || sudo yum install -y cloud-utils-growpart
        sudo yum update cloud-utils-growpart
        type sgdisk || sudo yum install -y gdisk
        ```
        
    -   Debian, Ubuntu, and similar OS types
        
        ```
        sudo apt-get update
        sudo apt-get install -y cloud-guest-utils
        type sgdisk || sudo apt-get install -y gdisk
        ```
        
-   #### Error: `unexpected output in sfdisk --version [sfdisk, from util-linux 2.23.2]`.
    
    **Cause**: The OS uses a character encoding type other than en\_US.UTF-8.
    
    **Solution**: 
    
    -   Run `locale` to check the current character encoding type. If it is not en\_US.UTF-8, change it.
        
        -   Switch the character encoding type.
            
            ```
            export LANG=en_US.UTF-8
            ```
            
        -   If the issue persists, switch the character encoding type.
            
            ```
            export LC_ALL=en_US.UTF-8
            ```
            
    -   If the issue still persists, try restarting the instance with `reboot`.
        
    
    **Important**
    
    Remember to revert to your original character encoding if needed after successfully extending the partition.
    
-   #### Error: `mkdir: cannot create directory ... No space left on device`.
    
    The disk has insufficient space, preventing the creation of a temporary directory. Free up disk space by deleting unnecessary files.
    
-   #### Error: `unexpected output in sfdisk --version [sfdisk (util-linux-ng 2.17.2)]`.
    
    Your fdisk version is not compatible with the growpart version. Downgrade the growpart version to 0.27.
    
-   #### Error: `FAILED: unable to determine partition type`.
    
    Your disk is not partitioned. You do not need to extend the partition. Directly [extend file systems](#6215fc18fcf2p).
    
-   #### Error: `WARNING: MBR/dos partitioned disk is larger than 2TB. Additional space will go unused`.
    
    The MBR partition format does not support disks larger than 2 TiB. [Convert the MBR partition to GPT partition](/help/en/ecs/user-guide/convert-data-disk-mbr-partition-to-gpt-partition#task-2262938) before you can extend it.
    
-   #### The partition **is extended to only 2 TiB** after you run `sudo lsblk`.
    
    The MBR partition type does not support disks larger than 2 TiB. First, [Convert a data disk from MBR to GPT](/help/en/ecs/user-guide/convert-data-disk-mbr-partition-to-gpt-partition#task-2262938). Then, extend the GPT partition.
    
-   #### Error (CentOS 6): `Error: Cannot retrieve repository metadata`.
    
    The CentOS 6 OS has reached its end of life (EOL), and its default repositories are no longer available. [Change CentOS 6 repository addresses](/help/en/ecs/user-guide/change-the-centos-6-source-address#task-2002199), and then install the tool.
    
-   #### Error: `NOCHANGE: partition 1 could only be grown by 2015 [fudge=2048]`.
    
    There is no available space to extend the partition. This typically happens when an instance was not restarted after an offline disk resizing in the console, so the OS has not yet detected the new disk capacity. After an offline resizing, you must [restart](/help/en/ecs/user-guide/restart-instances#concept-yxw-dwm-xdb) or [start the instance](/help/en/ecs/user-guide/start-an-instance) from the ECS console or via an API call. Running the `reboot` command inside the instance is ineffective.
    

### Common issues when running the `resize2fs` command

-   #### Error: `Couldn't find valid filesystem superblock.`  or `open: Is a directory while opening /mnt`.
    
    When extending a file system, you need to specify the disk partition name, not the device name or mount point.
    
-   #### Error: `The filesystem is already ... blocks long. Nothing to do!`
    
    **Cause**: The file system has no space to extend. This may be because the partition was not extended or the extension has not taken effect.
    
    **Solution**:
    
    1.  First, confirm that the partition has been successfully extended using growpart. If not, run the growpart command to extend the partition.
        
    2.  If you have successfully run the growpart command to extend the partition, it may be because you are using an older OS version that requires a restart to see the new partition size. Try restarting the instance and then running the `resize2fs` command again.
        
-   #### Error: `resize2fs: Permission denied to resize filesystem`.
    
    **Cause**: The operation failed due to an inconsistency or error in the file system itself.
    
    **Solution**:
    
    1.  Run the `dmesg -T | grep fs` command. If the output shows a message like `There are errors in the filesystem`, it confirms file system inconsistency.
        
    2.  [Create a snapshot manually](/help/en/ecs/user-guide/create-a-snapshot) to back up the disk data.
        
    3.  When it is safe to do so, run the `umount` command to unmount the relevant partition or disk.
        
        > If it is a system disk, you cannot unmount it while the system is running. You must [detach or attach the system disk to another instance](/help/en/ecs/user-guide/detach-or-attach-a-system-disk) to perform the repair.
        
    4.  Try to repair it using the `e2fsck` command.
        
-   #### Error: `inodes (4294967296) must be less than 4294967295`.
    
    **Cause**: `bytes-per-inode` was not set correctly during initialization.
    
    To extend to 64 TiB, you need to add `-i 65536` to the command when creating the file system.
    
    **Solution**: Create a new disk and copy the data.
    
    **Important**
    
    The `bytes-per-inode` cannot be changed after the disk is initialized.
    
    1.  [Create a new empty data disk](/help/en/ecs/user-guide/create-a-disk) with the desired capacity.
        
    2.  When you [initialize the data disk](/help/en/ecs/user-guide/initialize-a-data-disk-whose-size-does-not-exceed-2-tib-on-a-linux-instance) and create an ext4 file system, add `-i 65536` to the command.
        
    3.  Manually copy the data from the original disk to the new disk.
        
    4.  Verify that your applications are running correctly with the new disk. Restarting the relevant services is recommended.
        
    5.  Once confirmed, you can [detach](/help/en/ecs/user-guide/detach-a-data-disk) and [release](/help/en/ecs/user-guide/release-a-disk) the original data disk.
        
-   #### Why is the disk capacity in the OS different from what I purchased?
    
    When a file system is created, it [uses some capacity to store metadata](/help/en/ecs/run-the-df-command-on-a-linux-instance-to-check-that-the-disk-capacity-is-not-consistent-with-the-purchased-capacity#fcc009d0a7odi). Therefore, the file system size may be smaller than the capacity shown in the console.
