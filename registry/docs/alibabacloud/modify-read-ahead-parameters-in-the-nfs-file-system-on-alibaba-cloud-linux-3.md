Reading files from a Network File System (NFS) using system calls such as `read` and `copy_file_range` may cause significant performance degradation on Alibaba Cloud Linux 3 compared to Alibaba Cloud Linux 2. This topic explains the cause of this performance issue on Elastic Compute Service (ECS) instances running Alibaba Cloud Linux 3 and provides solutions.

## Problem description

### **Symptom**

When you read files on an NFS file system in Alibaba Cloud Linux 3, you may experience lower-than-expected performance. Typical symptoms include:

-   Using system calls such as `read` and `copy_file_range` to read large files from an NFS file system takes an unusually long time.
    
-   The `dd` command takes longer to read data from a file on an NFS mount point in Alibaba Cloud Linux 3 than in Alibaba Cloud Linux 2. For example:
    
    ```
    dd if=<nfs_mntpoint>/<testfile> of=/dev/null bs=1M
    ```
    
    **Note**
    
    This command reads data from the `testfile` on the NFS mount point and sends it to `/dev/null`. After execution, `dd` outputs the total bytes read and time taken. You can use this output to calculate the data read rate and evaluate NFS performance.
    

### **Impact**

This issue primarily affects the following ECS instances:

-   Image: aliyun\_3\_x64\_20G\_alibase\_20210415.vhd and later.
    
-   Kernel: 5.10.23-4.al8.x86\_64 and later.
    
-   File system: Reading files from a mounted NFS file system.
    

## Cause

In the upstream Linux kernel, the `read_ahead_kb` parameter defines the size of the read-ahead window for a block device. The read-ahead technique is a performance optimization that allows the system to predict which data will be accessed next and load it into memory in advance. When that data is later requested, it can be read from memory, avoiding a slow disk I/O operation and thus reducing latency and improving read efficiency.

-   In Linux kernel versions earlier than 5.4, the read-ahead size for an NFS file system was typically based on the `rsize` parameter set during the mount operation. The `rsize` parameter specifies the size of each NFS read request. By default, the `read_ahead_kb` window size was set to 15 times the `rsize` value. The kernel version of Alibaba Cloud Linux 2 is 4.19, where the default `rsize` is 1,024 KB. Therefore, the default `read_ahead_kb` size is 15,360 KB.
    
-   However, a commit ([index : kernel/git/torvalds/linux.git](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=c128e575514ce93dced349417d136304a33b6f99)) introduced in Linux kernel 5.4 changed this behavior. The `read_ahead_kb` value is no longer based on the `rsize` parameter but is instead linked to the `VM_READAHEAD_PAGES` parameter. The kernel version of Alibaba Cloud Linux 3 is 5.10, and its default `read_ahead_kb` size is 128 KB.
    

This change results in lower file read performance on Alibaba Cloud Linux 3 compared to Alibaba Cloud Linux 2. To optimize file read efficiency in Alibaba Cloud Linux 3, you need to re-evaluate and adjust the read-ahead window size.

**Important**

For an NFS file system, a larger read-ahead window can improve performance for sequential reads of large files. However, if the window is too large, it can cause unnecessary data loading, especially in random read scenarios. We recommend evaluating your workload to determine the optimal `read_ahead_kb` value for your scenario.

## Solution

Use one of the following methods to modify the `read_ahead_kb` parameter.

## Modify with the echo command (for a single file system)

1.  Check the current read-ahead parameter for the target NFS device.
    
    ```
    cat /sys/class/bdi/$(mountpoint -d <nfs_mountpoint>)/read_ahead_kb
    ```
    
    Replace `<nfs_mountpoint>` with your NFS mount point path. To find this path, run the `cat /proc/self/mountinfo` command.
    
2.  Increase the read-ahead parameter for the device that backs the NFS file system.
    
    ```
    sudo sh -c 'echo <num> > /sys/class/bdi/<major>:<minor>/read_ahead_kb'
    ```
    
    Replace the following parameters:
    
    -   `<num>`: The read-ahead window size to set, in KB.
        
    -   `<major>:<minor>`: The major and minor device numbers of the NFS file system. You can obtain these numbers by running the `sudo mountpoint -d <nfs_mountpoint>` command.
        
    
    For example:
    
    ```
    sudo sh -c 'echo 15360 > /sys/class/bdi/0:422/read_ahead_kb'
    ```
    
    **Note**
    
    If you have multiple NFS file systems mounted, you must run this command for each device to modify its read-ahead parameter.
    

## Automatically modify with the udev mechanism (for multiple file systems)

You can use the udev mechanism to add a rule that automatically modifies the read-ahead parameter. This method applies the setting to all currently mounted devices and ensures that any future mounts automatically receive the same setting.

**Note**

The udev (user-space device manager) is a Linux subsystem that automates device management. Its daemon process listens for kernel events (uevents) to trigger actions, such as running scripts when a device is added.

1.  Open and edit the NFS udev rules file in the `/etc/udev/rules.d/` directory. If the file does not exist, create it. For example:
    
    ```
    sudo vim /etc/udev/rules.d/99-nfs.rules
    ```
    
2.  In the open file, add the following udev rule to automatically modify the read-ahead parameter.
    
    This example sets the `read_ahead_kb` value to 15,360 KB. You can change this value as needed.
    
    ```
    SUBSYSTEM=="bdi", ACTION=="add", PROGRAM="/bin/awk -v bdi=$kernel 'BEGIN{ret=1} {if ($4 == bdi) {ret=0}} END{exit ret}' /proc/fs/nfsfs/volumes", ATTR{read_ahead_kb}="15360"
    ```
    
3.  Save and close the file.
    
4.  To apply the new rule, reload the udev rules.
    
    ```
    sudo udevadm control --reload
    ```
    
5.  Trigger the rule for all existing devices to apply the new value.
    
    ```
    sudo udevadm trigger -c add -s bdi
    ```
    

## Modify the NFS configuration file (for nfs-utils 2.3.3-57.0.1.al8.1 or later)

If your Alibaba Cloud Linux 3 instance uses `nfs-utils` version 2.3.3-57.0.1.al8.1 or later, you can modify the `read_ahead_kb` parameter in the NFS configuration file (`/etc/nfs.conf`). To check your `nfs-utils` version, run the `rpm -qa | grep nfs-utils` command.

1.  Open and edit the NFS configuration file.
    
    ```
    sudo vim /etc/nfs.conf 
    ```
    
2.  Modify the default read-ahead values, then save and close the file.
    
    ```
    [nfsrahead]
    nfs=15000
    nfs4=16000
    ```
    
    Modify the value for your NFS version (NFSv3 or NFSv4). The `nfs` parameter is for NFS protocol version 3, and `nfs4` is for NFS protocol version 4. You can check the version by running the `mount -v | grep nfs` command.
    
3.  You must unmount and then remount any existing NFS mounts for the changes to take effect.
    
    ```
    sudo umount <nfs_mountpoint>
    sudo mount -t nfs -o vers=<NFS protocol version> <NFS server address> <nfs_mountpoint>
    ```
