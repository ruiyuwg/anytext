This topic describes the cause of and solutions to the issue that the buffer I/O write performance of an Ext4 file system on an Elastic Compute Service (ECS) instance that runs Alibaba Cloud Linux 2 does not meet expectations.

## Problem description

Buffer I/O write operations may not be performed as expected in an Ext4 file system on an ECS instance with the following configurations:

-   Image version: from `aliyun-2.1903-x64-20G-alibase-20190327.vhd` (inclusive) to `aliyun_2_1903_x64_20G_alibase_20220525.vhd` (exclusive).
    
-   Kernel version: from `kernel-4.19.24-9.al7` (inclusive) to `kernel-4.19.91-26.al7.x86_64` (exclusive). You can run the `uname -r` command to check the kernel version.
    
-   Ext4 file system mounted with the `dioread_nolock` and `nodelalloc` options.
    
    **Note**
    
    -   Learn about [block storage performance](/help/en/ecs/user-guide/block-storage-performance).
        
    -   Perform the following steps:
        
        **Check the file system type and mount options**
        
        1.  Identify the disk partition where the target directory for write operations is located.
            
            Replace `<$DIR>` with the target directory for write operations.
            
            ```
            df <$DIR> | grep -v Filesystem | awk '{ print $1 }'
            ```
            
        2.  View the file system type and mount options of the disk partition.
            
            Replace `<$Partition>` with the disk partition name obtained in the previous step.
            
            ```
            mount | grep -w <$Partition> | grep ext4 | grep -w dioread_nolock | grep -w nodelalloc
            ```
            
        
    

An ECS instance with the preceding configurations may encounter the under-expectation write performance issue in the following scenarios:

**Scenario 1: Run the** `**cp**` **command to copy large files**

Run the following command to copy large files to an `Ext4` file system with the preceding configurations.

Replace `<$LargeFiles>` with the names of the on-premises large files you want to copy. To simulate the under-expectation write performance issue, use files larger than 2 GiB.

```
cp <$LargeFiles> /mnt/badfile
```

**Scenario 2: Run the** `**dd**` **command without synchronization flags to write files**

Run the following command without synchronization flags to write files to an `Ext4` file system with the preceding configurations:

```
dd if=/dev/zero of=/mnt/badfile bs=10M count=1000
```

When you run the `iostat -xm 1` command on the ECS instance in the preceding scenarios to check the write speeds, the following command output is returned. The value in the wMB/s column is approximately 30 MB/s, which is lower than the expected [block storage performance](/help/en/ecs/user-guide/block-storage-performance) of the ECS instance.

```
avg-cpu:  %user   %nice %system %iowait  %steal   %idle
           0.00    0.00   12.77    0.00    0.00   87.23

Device:         rrqm/s   wrqm/s     r/s     w/s    rMB/s    wMB/s avgrq-sz avgqu-sz   await r_await w_await  svctm  %util
vda               0.00     0.00    0.00    0.00     0.00     0.00     0.00     0.00    0.00    0.00    0.00   0.00   0.00
vdb               0.00  7194.00    0.00   57.00     0.00    28.05  1008.00     0.02   17.81    0.00   17.81   0.39   2.20
```

## Cause

When the `Ext4` file system is mounted with the `dioread_nolock` and `nodelalloc` options, a large number of 4-KB dirty pages called `unwritten extents` are generated in the kernel. Due to a defect in the Ext4 file system processing logic, these pages are not merged into huge pages before being written back and are processed as small pages. When you use the `Perf` tool to monitor the kernel's page cache writeback process, you will find that the process is performed by the `ext4_writepages` function of the `Ext4` file system. A significant amount of time is spent on searching for and mapping 4-KB dirty pages, resulting in extremely low file write performance.

## Solutions

### **Solution 1:** Remount the Ext4 file system without the `dioread_nolock` and `nodelalloc` options

1.  Remount the `Ext4` file system without the `dioread_nolock` and `nodelalloc` options.
    
    -   Replace `<$Device>` with the device name of the Ext4 file system. You can run the `lsblk` command to view the device name of the file system in the NAME column in the command output.
        
    -   Replace `<$MountPoint>` with your desired mount point for the `Ext4` file system. You can select an existing empty directory as the mount point or create one by running the `sudo mkdir -p <new directory>` command.
        
    
    ```
    sudo mount -o remount,delalloc <$Device> <$MountPoint>
    ```
    
2.  Remove the `nodelalloc` option for the `Ext` file system from the `/etc/fstab` file to ensure that the file system is automatically mounted on system startup. By default, the `delalloc` option is used for `Ext4` file systems.
    

### **Solution 2: Upgrade the** kernel version

**Warning**

-   Kernel upgrades may cause compatibility and stability issues. Review the kernel features in [release notes for Alibaba Cloud Linux 2](/help/en/alinux/product-overview/release-notes-for-alibaba-cloud-linux2) and exercise caution when you upgrade the kernel version.
    
-   The restart operation temporarily stops the instance, which may interrupt running services and lead to data loss. Therefore, back up critical instance data and then restart the instance during off-peak hours.
    

1.  Upgrade to the latest kernel version.
    
    ```
    sudo yum update kernel
    ```
    
2.  Restart the instance for the new kernel version to take effect.
    
    ```
    sudo reboot
    ```
