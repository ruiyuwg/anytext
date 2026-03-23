After creating and attaching a cloud disk to an instance, you must initialize the disk and mount a file system before using it.

## **Procedure**

Alibaba Cloud provides two methods to initialize a data disk:

-   **Initialize from the console (invitational preview):** Use Cloud Assistant in the console to initialize the disk and mount a file system. This convenient method does not require running commands manually.
    
-   **Initialize from the command line:** Log on to the instance and run commands to initialize the disk and mount a file system manually. This method offers greater control and is widely applicable.
    

### **Method 1:** Initialize a data disk from the console (invitational preview)

This invitational preview feature is available only to specific users and in certain scenarios.

1.  On the **Block Storage** tab of the instance details page, enable Cloud Assistant detection.
    
    > If Cloud Assistant detection is not available, you must [initialize the cloud disk from the command line.](#80a9d029c2kjr)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7230715571/p993148.png)
    
2.  Open the Cloud Assistant initialization wizard.
    
    -   If the cloud disk is not initialized: Hover over **0/3 Check Passed** under **In-system Status Check** for the target cloud disk and click **Initialize Data Disk**.
        
    -   If the cloud disk is initialized but not mounted: Hover over **1/3 Check Passed** under **In-system Status Check** for the target cloud disk and click **Mount File Systems**.
        
    
    #### If the disk is not initialized
    
    > To expand the disk to 64 TiB, or if the page displays an error message such as '**Cloud Assistant Query or Task Failure**' or '**Cloud Assistant Not Installed**', [initialize the cloud disk from the command line.](#80a9d029c2kjr)
    
    Cloud Assistant only supports creating GPT partitions and ext4 file systems.
    
    **Important**
    
    Creating a partition and a file system erases all data on the data disk. Make sure the cloud disk is empty before you proceed.
    
    1.  On the cloud disk status check page, configure the parameters, select the checkbox to acknowledge the risks, and then click **OK**.
        
        **Parameter**
        
        **Description**
        
        Partition size
        
        The total size of all partitions cannot exceed the capacity of the cloud disk.
        
        Mount Target
        
        This must be an empty path that starts with `/`. Each mount target must be unique. If the directory is not empty, its existing content will be hidden, which might affect your services.
        
        Add Partition
        
        You can click **Add Partition** to create multiple partitions as needed. You can add a maximum of 5 partitions per cloud disk.
        
    2.  When the page displays the message '**The disk check is complete and the disk can be used as expected.**', the disk is initialized and mounted.
        
        **Important**
        
        This mount is temporary and does not persist after a reboot. To ensure data remains accessible after a reboot, log in to the instance and [configure the partition to mount automatically on boot.](#7994e6b094nmq)
        
    
    #### If the disk is initialized
    
    > If the page displays an error message such as '**Cloud Assistant Query or Task Failure**' or '**Cloud Assistant Not Installed**', you must [initialize the cloud disk from the command line.](#80a9d029c2kjr)
    
    1.  On the cloud disk status check page, configure the mount target and then click **Manually Mount**.
        
        **Parameter**
        
        **Description**
        
        Mount Target
        
        This must be an empty path that starts with `/`. Each mount target must be unique. If the directory is not empty, its existing content will be hidden, which might affect your services.
        
    2.  When the page displays the message '**The disk check is complete and the disk can be used as expected.**', the file system is mounted.
        
        **Important**
        
        This mount is temporary and does not persist after a reboot. To ensure data remains accessible after a reboot, log in to the instance and [configure the partition to mount automatically on boot.](#7994e6b094nmq)
        
    

### **Method 2:** Initialize a data disk from the command line

#### **Step 1: Create a partition**

1.  Log on to the Elastic Compute Server (ECS) instance.
    
    1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
        
    2.  Go to the details page of the target instance, click **Connect**, and select **Workbench**. Follow the on-screen instructions to log in and open the terminal.
        
2.  Create a partition.
    
    Partitions provide logical isolation, letting you separate data for different purposes. This can prevent services from interfering with each other. If you do not need to create partitions, proceed directly to [Step 2: Create a file system.](#299215c9b2wdq)
    
    1.  Identify the device name of the cloud disk you want to initialize. `FSTYPE` indicates the file system type. If this column is empty, no file system exists.
        
        ```
        sudo lsblk -f
        ```
        
        ```
        NAME   FSTYPE LABEL UUID                                 MOUNTPOINT
        vda                                                      
        └─vda1 ext4   root  33b46ac5-7482-4aa5-8de0-60ab4c3a4c78 /
        vdb                                                      
        └─vdb1 ext4         f1645951-134f-4677-b5f4-c65c71f8f86d   
        vdc                                               
        ```
        
        -   If the target cloud disk already has a file system, you only need to [mount it.](#7a63866391j2m) For example, the data disk `vdb` has a partition `vdb1` with an ext4 file system. You can skip to [Step 3: Mount the file system.](#05d39b424550q)
            
        -   If the target cloud disk does not have a partition or a file system, you must initialize it. For example, the data disk `vdc` requires initialization.
            
    2.  Create a partition.
        
        The following steps show how to create a GPT partition. For MBR partitions, see [How do I create an MBR partition?](#d2000cb251bbu)
        
        > For more information about the differences between partition types, see [How do I choose a partition type and a file system type?](#e7bfb91577lxv)
        
        **Important**
        
        Creating a partition erases all data on the data disk. Make sure the cloud disk is empty or back up your data by creating a snapshot.
        
        1.  Install the Parted tool.
            
            -   For Alibaba Cloud Linux and CentOS:
                
                ```
                sudo yum install -y parted
                ```
                
            -   For Debian and Ubuntu:
                
                ```
                sudo apt-get install -y parted
                ```
                
        2.  Create the partition.
            
            **Important**
            
            Use binary units like MiB or GiB to set the start and end positions of the partition. Parted automatically aligns partitions to 4 KiB boundaries. If you do not use binary units, partitions may be misaligned, which degrades cloud disk performance.
            
            Replace `<device_name>` with the device name you identified in [Step 2.a.](#e5d470bed3oiu)
            
            ```
            sudo parted /dev/<device_name> --script mklabel gpt mkpart <partition_name> <start_position> <end_position>
            ```
            
            > **Single partition example:** To allocate the entire capacity of the cloud disk with the device name `vdc` to a single partition, run `sudo parted /dev/vdc --script mklabel gpt mkpart primary 1MiB 100%`.
            
            > **Multiple partitions example:** To divide the capacity of the cloud disk with the device name `vdc` into two partitions, with the first partition named `primary` being 20 GiB and the second partition named `secondary` using the remaining capacity, run `sudo parted /dev/vdc --script mklabel gpt mkpart primary 1MiB 20GiB mkpart secondary 20GiB 100%`.
            
        3.  Check if the partition is aligned.
            
            Misaligned partitions can degrade cloud disk performance.
            
            1.  View the partition number. Note the `Number` from the output, as you will need it to check for alignment.
                
                Replace `<device_name>` with the device name you previously identified in [Step 2.a.](#e5d470bed3oiu)
                
                ```
                sudo parted /dev/<device_name> print
                ```
                
            2.  Check for alignment.
                
                Replace `<device_name>` with the device name you identified and `<partition_number>` with the partition `Number` you noted in [Step 2.a.](#e5d470bed3oiu)
                
                ```
                sudo parted /dev/<device_name> align-check optimal <partition_number>
                ```
                
                The output `aligned` indicates that the partition is correctly aligned. [When I create a GPT partition, the system reports anot alignederror. How do I fix this?](#77dd9be1cfj24)
                
        4.  Refresh the disk partition table.
            
            Run `sudo partprobe` to inform the operating system of the partition table changes.
            
        5.  Verify that the partition was created.
            
            Run `sudo lsblk` to view the new partition information. If the output shows the correct partition information for the disk you are initializing, proceed to [Step 2: Create a file system.](#299215c9b2wdq)
            
            ```
            sudo lsblk
            ```
            
            ```
            NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
            vda    253:0    0   50G  0 disk 
            └─vda1 253:3    0 49.8G  0 part /
            vdb    253:16   0   40G  0 disk 
            └─vdb1 253:17   0   40G  0 part 
            vdc    253:23   0   40G  0 disk 
            └─vdc1 253:24   0   40G  0 part 
            ```
            
            In this example, the entire capacity of the target device `vdc` has been allocated to the `vdc1` partition.
            

#### **Step 2: Create a file system**

**Important**

Creating a file system deletes all data on the data disk. Make sure the cloud disk is empty or back up your data by [creating a snapshot.](/help/en/ecs/user-guide/create-a-snapshot)

1.  Identify the target device name for the cloud disk you want to initialize. You will need this name when you create the file system.
    
    ```
    sudo lsblk -f
    ```
    
    ```
    NAME   FSTYPE LABEL UUID                                 MOUNTPOINT
    vda                                                      
    └─vda1 ext4   root  33b46ac5-7482-4aa5-8de0-60ab4c3a4c78 /
    vdb                                                      
    └─vdb1 ext4         f1645951-134f-4677-b5f4-c65c71f8f86d   
    vdc  
    └─vdc1        
    vdd                                      
    ```
    
    -   If the device has a partition, the **target device name** is the partition name. In this example, for the data disk `vdc`, the **target device name** is `vdc1`.
        
    -   If the device does not have a partition, the **target device name** is the device name. In this example, for the data disk `vdd`, the **target device name** is `vdd`.
        
2.  Create a file system.
    
    #### **ext4**
    
    Replace `<target_device_name>` in the command with the target device name you identified in the [previous step](#7ed05bf16avpr) and then run the command.
    
    > If you need to expand the disk to 64 TiB in the future, add `-i 65536` to the command to specify a `bytes-per-inode` value of 65536.
    
    ```
    sudo mkfs -t ext4 /dev/<target_device_name>
    ```
    
    #### **xfs**
    
    1.  Install the xfsprogs tool.
        
        > For Debian or Ubuntu, use `sudo apt-get install -y <package_name>`.
        
        ```
        sudo yum install -y xfsprogs
        ```
        
    2.  Create an XFS file system.
        
        Replace `<target_device_name>` in the command with the target device name you identified in the [previous step](#7ed05bf16avpr) and then run the command.
        
        ```
        sudo mkfs -t xfs /dev/<target_device_name>
        ```
        
    
3.  Verify that the file system was created.
    
    Run `sudo lsblk -f`. If the `FSTYPE` column for the target device shows the file system you created, proceed to [Step 3: Mount the file system.](#7a63866391j2m)
    

#### **Step 3: Mount the file system**

1.  Create a directory and mount the file system.
    
    ```
    sudo mkdir <mount_directory> && sudo mount /dev/<target_device_name> <mount_directory>
    ```
    
    **Parameter**
    
    **Description**
    
    `<target_device_name>`
    
    Replace this with the [target device name](#7ed05bf16avpr) you identified when creating the file system.
    
    `<mount_directory>`
    
    Specify a custom `<mount_directory>`. This must be an empty path that starts with `/`. Each mount directory must be unique.
    
    **Important**
    
    If the directory is not empty, its existing content will be hidden, which may affect your services. Evaluate this carefully.
    
    For example, to mount the target device `vdc1` to a new directory named `/data`, run `sudo mkdir /data && sudo mount /dev/vdc1 /data`.
    
2.  Verify that the file system was mounted.
    
    Run the `sudo lsblk` command. If the output shows a mount directory (`MOUNTPOINT`) for the target device, the file system is mounted successfully.
    
    **Important**
    
    This mount is temporary and does not persist after a reboot. To ensure data remains accessible after a reboot, [configure the partition to mount automatically on boot.](#7994e6b094nmq)
    

## Configure the partition to mount automatically on boot

If you do not configure the partition to mount automatically on boot, the mount is lost on reboot. You must mount the disk manually to access its data.

1.  Back up the `/etc/fstab` file to prevent data loss from misconfiguration.
    
    ```
    sudo cp /etc/fstab /etc/fstab.bak
    ```
    
2.  Configure the mount information
    
    1.  Get information about the target data disk.
        
        Run the `sudo lsblk -f` command and note the target device name, mount directory, and file system type of the cloud disk to be configured. You will need this information to edit the mount entry.
        
        ```
        sudo lsblk -f
        ```
        
        ```
        NAME   FSTYPE LABEL UUID                                 MOUNTPOINT
        vda                                                      
        └─vda1 ext4   root  33b46ac5-7482-4aa5-8de0-60ab4c3a4c78 /
        vdb    ext4         3d7a3861-da22-484e-bbf4-b09375894b4f                                                         
        └─vdb1 ext4         f1645951-134f-4677-b5f4-c65c71f8f86d /mnt
        vdc    xfs          3d7a3861-da22-484e-bbf4-b09375894b4f /test
        ```
        
        -   If the device has a partition, the **target device name** is the partition name. In this example, for the data disk `vdb`, the **target device name** is `vdb1`, the **mount directory** is `/mnt`, and the **file system type** is `ext4`.
            
        -   If the device does not have a partition, the **target device name** is the device name itself. In this example, for the data disk `vdc`, the **target device name** is `vdc`, the **mount directory** is `/test`, and the **file system type** is `xfs`.
            
    2.  Append the mount information to `/etc/fstab`.
        
        Replace the variables `<target_device_name>`, `<mount_directory>`, and `<file_system_type>` in the command with the information you obtained in the [previous step](#754008013cecg) and then run the command.
        
        **Important**
        
        When the mount options are set to `defaults,nofail`, the instance can start normally even if the mount configuration is incorrect. However, because the system does not report an error, you must verify that the automatic mount was successful to prevent data from being written to the wrong device.
        
        ```
        sudo sh -c "echo `sudo blkid /dev/<target_device_name> | awk '{print \$2}' | sed 's/\"//g'` <mount_directory> <file_system_type> defaults 0 0 >> /etc/fstab"
        ```
        
        > For example, to configure a device with **target device name** `vdb1`, **mount directory** `/mnt`, and **file system type** `ext4`:
        
        > `sudo sh -c "echo` sudo blkid /dev/vdb1 | awk '{print $2}' | sed 's/"//g' `/mnt ext4 defaults 0 0 >> /etc/fstab"`
        
3.  Verify that the automatic mount configuration is effective.
    
    1.  Unmount the current mount point.
        
        Replace `<target_device_name>` with the target device name you identified in the [Step 3.a.](#754008013cecg)
        
        ```
        sudo umount /dev/<target_device_name>
        ```
        
    2.  Reload the `/etc/fstab` file.
        
        Mount all unmounted file systems defined in `/etc/fstab`.
        
        ```
        sudo mount -a
        ```
        
        If an error occurs, you can quickly restore the `/etc/fstab` file by running `sudo mv /etc/fstab.bak /etc/fstab`.
        
    3.  Check if the mount is effective.
        
        Run the `sudo lsblk` command. If the output shows a mount directory (`MOUNTPOINT`) for the target device, the configuration was successful.
        

## **References**

-   To resize an existing cloud disk, see [Resize a Linux cloud disk.](/help/en/ecs/user-guide/resize-linux-cloud-disks)
    
-   To initialize a data disk for a Windows instance, see [Initialize a data disk (Windows).](/help/en/ecs/user-guide/initialize-a-data-disk-up-to-2-tib-in-size-on-a-windows-instance)
    

## **FAQ**

-   #### **How** do I choose a partition type and a file system type?
    
    -   **Choose a partition format:** The MBR format does not support disks larger than 2 TiB. If your cloud disk is, or might become, larger than 2 TiB, use the GPT format.
        
        > Creating partitions helps with data management and logical isolation. If you do not need to create partitions, you can proceed directly to [choosing a file system type.](#e3537bde77xhq)
        
        **Partition format**
        
        **Max partition capacity**
        
        **Number of partitions**
        
        **Partition description**
        
        GPT (Recommended)
        
        18 EiB (1 EiB = 1,048,576 TiB)
        
        > The maximum capacity supported by Alibaba cloud disks is 64 TiB.
        
        128
        
        All partitions are primary partitions. There is no distinction between extended and logical partitions.
        
        MBR
        
        2 TiB
        
        MBR supports the following partition schemes:
        
        -   4 primary partitions
            
        -   3 primary partitions and 1 extended partition
            
        
        -   Partitions are categorized as primary, extended, and logical.
            
        -   An extended partition cannot be used directly. It must be divided into one or more logical partitions. There is no limit on the number of logical partitions.
            
        
    -   **Choose a file system type:** ext4 is better suited for handling small files than xfs.
        
        **File system type**
        
        **Max file size**
        
        **Use cases**
        
        ext4
        
        16 TiB
        
        Performs well with small files, making it suitable for scenarios with many small files, such as general-purpose servers and desktop systems, development and testing environments, small log servers, internal management systems, and small database servers.
        
        xfs
        
        8 EiB
        
        > The maximum capacity supported by Alibaba cloud disks is 64 TiB.
        
        Offers better performance for large-scale directories and large files. Suitable for large database servers (MySQL/PostgreSQL), high-performance computing (HPC), storage-intensive applications (such as video and image storage), high-concurrency write operations, and big data analytics platforms.
        
-   #### **How do I create an MBR partition?**
    
    **Important**
    
    MBR does not support capacities over 2 TiB. If your disk capacity exceeds 2 TiB, use the GPT partition format.
    
    1.  Log on to the ECS instance.
        
        1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region). In the top navigation bar, select the target region and resource group.
            
        2.  Go to the details page of the target instance, click **Connect**, and then select **Workbench**. Follow the on-screen instructions to log in and open the terminal.
            
    2.  Create an MBR partition.
        
        1.  Start the fdisk utility.
            
            Replace `<device_name>` with the device name you identified previously in [Step 2.a](#e5d470bed3oiu).
            
            ```
            sudo fdisk -u /dev/<device_name>
            ```
            
        2.  Enter `n` to create a new partition.
            
        3.  As an example, to create a primary partition, enter `p`.
            
            -   `p` stands for primary partition.
                
            -   `e` stands for extended partition.
                
        4.  Enter the partition number and press `Enter`.
            
            > The partition number for a primary partition can be from 1 to 4.
            
        5.  Enter the starting sector number and press `Enter`.
            
            > The first sector is the starting sector number of the partition. The system displays the available sector range. You can enter a custom value within this range or press Enter to use the default value.
            
        6.  Enter the last sector number and press `Enter`.
            
            > The last sector is the ending sector number of the partition. The system displays the available sector range. You can enter a custom value within this range or press Enter to use the default value. The last sector number must be greater than the first sector number.
            
        7.  Enter `p` to review the planned new partition, checking the `Device` field.
            
        8.  Enter `w` to write the partition table and exit.
            
            > If you make a mistake, enter `q` to exit fdisk without saving the changes. You can then restart the process.
            
    3.  Run `sudo lsblk` to view the new partition information. If the output shows the correct partition information for the disk, the partition was created successfully. In this example, device `vdb` has one partition, `vdb1`. Next, [create a file system](#299215c9b2wdq) to make the data disk usable.
        
        ```
        $ sudo lsblk
        NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
        vda    253:0    0   50G  0 disk 
        ├─vda1 253:1    0    2M  0 part 
        ├─vda2 253:2    0  200M  0 part /boot/efi
        └─vda3 253:3    0 49.8G  0 part /
        vdb    253:16   0   40G  0 disk 
        └─vdb1 253:17   0  40G  0 part
        ```
        
-   #### What should I do if the instance fails to start after an incorrect /etc/fstab configuration**?**
    
    You can follow the steps in [Troubleshoot boot failures caused by incorrect /etc/fstab configuration in Linux instances](/help/en/ecs/support/the-etc-fstab-file-of-the-linux-instance-is-incorrectly-configured-causing) to connect to the instance remotely using VNC and manually correct the incorrect mount information in emergency mode.
    
-   #### How do I fix a `"not aligned"` error when creating a GPT partition?
    
    1.  Run the following command to start partitioning again. This example uses the data disk `/dev/vdb`.
        
        ```
        sudo parted /dev/vdb
        ```
        
    2.  In the Parted interface, enter the following to delete the incorrect partition.
        
        You can find the `<incorrect_partition_number>` by using the `print` command.
        
        **Important**
        
        Before you delete a partition, make sure it contains no data or that the data has been backed up.
        
        ```
        rm <incorrect_partition_number>
        ```
        
    3.  Run the following command to re-create the partition, ensuring that the units for the start and end positions are MiB or GiB. This example uses MiB:
        
        ```
        mkpart data <start_capacity>MiB <end_capacity>MiB 
        ```
        
-   #### How do I fix a "device too big" error**?**
    
    Cause: If the data disk capacity is 16 TiB, you must use e2fsprogs version 1.42 or later to create an ext4 file system. Otherwise, the following error will occur:
    
    ```
    mkfs.ext4: Size of device /dev/vdb too big to be expressed in 32 bits using a blocksize of 4096.            
    ```
    
    Solution: Upgrade e2fsprogs to version 1.42.8 or later.
    
    1.  Check the current version of e2fsprogs.
        
        ```
        sudo rpm -qa | grep e2fsprogs
        ```
        
    2.  Download e2fsprogs version 1.42.8.
        
        > You can also find the latest package at [e2fsprogs](https://www.kernel.org/pub/linux/kernel/people/tytso/e2fsprogs/v1.42.8/?spm=a2c4g.11186623.2.14.Pb5baW).
        
        ```
        sudo wget https://www.kernel.org/pub/linux/kernel/people/tytso/e2fsprogs/v1.42.8/e2fsprogs-1.42.8.tar.gz --no-check-certificate
        ```
        
    3.  Compile the later version of the tool.
        
        1.  Decompress the package.
            
            ```
            sudo tar xvzf e2fsprogs-1.42.8.tar.gz
            ```
            
        2.  Navigate to the package directory.
            
            ```
            cd e2fsprogs-1.42.8
            ```
            
        3.  Generate the Makefile.
            
            ```
            sudo ./configure
            ```
            
        4.  Compile e2fsprogs.
            
            ```
            sudo make
            ```
            
        5.  Install e2fsprogs.
            
            ```
            sudo make install
            ```
            
    4.  Check if the version was successfully updated.
        
        ```
        sudo rpm -qa | grep e2fsprogs
        ```
        
    
-   #### **How do I initialize** a data disk by using an API?
    
    Call the [RunCommand](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runcommand) operation to send initialization commands to the target instance, and then call the [DescribeInvocations](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinvocations) operation to query the command output to initialize the disk and mount a file system.
    
-   #### **How** do I fix a "404 Not Found" error when installing an initialization tool?
    
    CentOS 6 and Debian 9/10/11 have reached their end-of-life (EOL). You must first switch the repository source addresses for [CentOS](/help/en/ecs/user-guide/options-for-dealing-with-centos-linux-end-of-life#9af60aea1c07i) or the [Debian 9/10/11](/help/en/ecs/user-guide/other-operating-systems#28cccd1868txd) before installing the tools.
