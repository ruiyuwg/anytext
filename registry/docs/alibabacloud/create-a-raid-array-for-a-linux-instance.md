RAID combines multiple disks into a disk array group. Compared with a single disk, a RAID array provides improved capacity, read/write bandwidth, reliability, and availability.

## Prerequisites

Multiple data disks of the same size and category are created and attached to an Elastic Compute Service (ECS) instance. For information about how to create and attach a data disk, see [Create an empty data disk](/help/en/ecs/user-guide/create-a-disk#concept-jx1-tx1-ydb) and [Attach data disk](/help/en/ecs/user-guide/attach-a-data-disk#concept-llz-b4c-ydb).

## Usage notes

### RAID levels

The following table describes the advantages, disadvantages, and use scenarios of several common RAID levels.

**Level**

**Advantage**

**Disadvantage**

**Scenario**

RAID 0 (Striping)

Provides data striping and parallel read/write operations for improved performance.

**Note**

Disk striping is the process of dividing data into blocks (stripes) that have a fixed size and allocating the data blocks across multiple disks.

Provides no redundancy. If one disk fails, all data in the RAID 0 array are lost.

Suitable for scenarios that require high performance but do not require data redundancy, such as temporary data storage and caching.

RAID 1 (Mirroring)

Provides higher data reliability by using mirrored data. All data is replicated to multiple disks. If one disk fails, the data is still available.

The cost is higher because RAID 1 requires at least twice the disk capacity to store mirrored data.

Suitable for applications that require high data protection and reliability, such as databases and file servers.

RAID 10

Combines RAID 1 and RAID 0, provides data redundancy and high performance, and has higher reliability and better read/write performance.

The cost is higher because RAID 10 requires twice the disk capacity to store mirrored data. At least four disks are required.

Suitable for applications that require high performance and redundancy.

When you select a RAID level, consider the data protection requirements, performance requirements, available disk capacity, and cost. We recommend that you evaluate the advantages and disadvantages of different RAID levels and select a RAID level based on your application requirements.

The following figure shows how RAID arrays of different RAID levels are used to store data blocks A, B, C, D, E, and F in sequence.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6162004771/CAEQGxiBgICth57u8hgiIDdmN2NhMmY2OWRiMDQ1YTJhMjhkNzZjYjU4ZGM4OWZk4037169_20231017155208.872.svg)

**Note**

If you use multiple disks to configure a RAID array to increase the disk capacity and read/write bandwidth, take note of the limits on disk bandwidth for the instance. For information about the disk bandwidth limits of different instance types, see [Instance family overview](/help/en/ecs/user-guide/overview-of-instance-families).

### RAID stripe size

An appropriate stripe size can help achieve optimal application practices. The most suitable stripe size varies based on environments and applications. Before you use a stripe size, we recommend that you perform tests and performance evaluations to determine the optimal stripe size.

Based on the workload type, I/O mode, and specific system requirements, the following stripe sizes are recommended:

-   For most general-purpose workloads, we recommend that you set the stripe size to 64 KB or 128 KB. In most cases, the two stripe sizes provide good performance such as balanced read/write performance.
    
-   For workloads that involve primarily sequential reads (such as large file transfers and video editing), a larger stripe size (such as 256 KB or 512 KB) may provide improved performance.
    
-   For workloads that involve primarily random reads (such as database applications), a smaller stripe size (such as 32 KB) may provide improved performance.
    

**Important**

The stripe size cannot be excessively small. If the stripe size is excessively small, the following issues may occur:

-   File fragmentation may occur on the disks. As a result, disk space is wasted.
    
-   The IOPS capacity of disks may reach the limit before the throughput bandwidth limit is reached. A larger stripe size indicates a higher throughput in sequential read workloads.
    

### Limits on disk snapshots

If you want to use snapshots to back up data on disks in a RAID array, make sure the consistency of the snapshots. Restoring a RAID array from multiple unsynchronized snapshots affects the integrity of the array.

In RAID scenarios, we recommend that you use snapshot-consistent groups. This way, data from multiple disks can be restored to the same point in time to ensure data consistency and reliability. For more information, see [Snapshot-consistent groups](/help/en/ecs/user-guide/snapshot-consistent-groups).

## Procedure

This section describes how to use the `mdadm` command built in Linux to create a RAID array named /dev/md0 for data disks attached to an ECS instance that runs Ubuntu 22.04.

1.  Connect to an ECS instance.
    
    For information about the connection methods, see [Connection method overview](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
2.  Run the following command to view the information of all disks on the instance:
    
    ```
    lsblk
    ```
    
    A command output similar to the following one is returned.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2365890171/p727811.png)
    
3.  Run the `mdadm` command to create the /dev/md0 RAID array.
    
    You can create a RAID array of the RAID 0, RAID 1, or RAID 10 level based on your business requirements.
    
    **Note**
    
    If you are prompted that the mdadm tool is not installed, run the `sudo apt-get install mdadm` command to install the mdadm tool.
    
    #### **RAID 0 level**
    
    ```
    sudo mdadm --create /dev/md0 --level=0 --raid-devices=5 --chunk=512 /dev/vd[bcdef]
    ```
    
    -   `--level=0`: specifies the RAID 0 level.
        
    -   `--raid-devices=5`: specifies that the RAID array consists of five disks.
        
    -   `--chunk=512`: specifies that the stripe size of the RAID array is 512 KB. Specify the stripe size based on your business requirements.
        
    -   `/dev/vd[bcdef]`: specifies the five disks in the RAID array: /dev/vdb, /dev/vdc, /dev/vdd, /dev/vde, and /dev/vdf.
        
    
    A command output similar to the following one is returned.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3775890171/p728905.png)
    
    #### **RAID 1 level**
    
    ```
    sudo mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/vd[bc]
    ```
    
    -   `--level=1`: specifies the RAID 1 level.
        
    -   `--raid-devices=2`: specifies that the RAID array consists of two disks.
        
    -   `/dev/vd[bc]`: specifies the two disks in the RAID array: /dev/vdb and /dev/vdc.
        
    
    #### **RAID 10 level**
    
    ```
    sudo mdadm --create /dev/md0 --level=10 --raid-devices=4 --chunk=512 /dev/vd[bcde]
    ```
    
    -   `--level=10`: specifies the RAID 10 level.
        
    -   `--raid-devices=4`: specifies that the RAID array consists of four disks.
        
    -   `--chunk=512`: specifies that the stripe size of the RAID array is 512 KB. Specify the stripe size based on your business requirements.
        
    -   `/dev/vd[bcde]`: specifies the four disks in the RAID array: /dev/vdb, /dev/vdc, /dev/vdd, and /dev/vde.
        
    
4.  Run the following command to view the information of the /dev/md0 RAID array:
    
    ```
    sudo mdadm --detail /dev/md0
    ```
    
    A command output similar to the following one is returned.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3775890171/p728902.png)
    
5.  Run the following command to create a file system on the RAID array. In this example, an ext4 file system is created.
    
    You can create a file system of a different type.
    
    ```
    sudo mkfs.ext4 /dev/md0
    ```
    
    A command output similar to the following one is returned.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3365890171/p727807.png)
    
6.  Run the following command to create a configuration file that contains the information of the RAID array and configure the RAID array to be automatically reassembled on instance boot:
    
    ```
    sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf
    ```
    
7.  Mount the file system.
    
    1.  (Optional) Run the following command to create a mount point. In this example, a mount point named /media/raid0 is created.
        
        ```
        sudo mkdir /media/raid0
        ```
        
        **Note**
        
        Alternatively, you can mount the file system on an existing directory, such as /mnt.
        
    2.  Mount the file system. In this example, the /dev/md0 file system is mounted on the /media/raid0 mount point.
        
        If you run the `mount` command to mount a file system, specify the corresponding mount parameters to meet your requirements for data security and performance of the file system. For more information, see [Mount Ext4 file systems with mount command options](/help/en/ecs/user-guide/mount-parameters-for-ext4-file-systems).
        
        -   (Recommend) If you have moderate requirements for data security and performance of the file system, do not specify the mount parameters:
            
            ```
            sudo mount /dev/md0 /media/raid0
            ```
            
        -   If you have high requirements for data security of the file system but low requirements for performance of the file system, specify the following mount parameters:
            
            ```
            sudo mount -o rw,atime,sync,barrier,data=journal /dev/md0 /media/raid0
            ```
            
        -   If you have high requirements for performance of the file system but low requirements for data security of the file system, specify the following mount parameters:
            
            ```
            sudo mount -o defaults,noatime,nodiratime,nobarrier,nodelalloc,data=writeback /dev/md0 /media/raid0
            ```
            
    3.  Run the following command to view the mount information of the RAID array:
        
        ```
        df -h
        ```
        
        The following command output indicates that the file system is mounted on the specified mount point.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3775890171/p727806.png)
        
8.  Configure the RAID array to mount automatically on system boot.
    
    To mount the RAID array on every system boot, add an entry for the RAID array to the `/etc/fstab` file.
    
    1.  Run the following command to add a mount entry for the RAID array to the /etc/fstab file:
        
        ```
        sudo sh -c "echo `blkid /dev/md0 | awk '{print $2}' | sed 's/\"//g'` /media/raid0 ext4 defaults 0 0 >> /etc/fstab"
        ```
        
        -   `/dev/md0`: specifies the name of the RAID array.
            
        -   `/media/raid0`: specifies the mount point. If you want to mount the RAID array on a different mount point, replace /media/raid0 with the mount point.
            
        -   `ext4`: specifies the file system type of the RAID array. Replace ext4 with the actual file system type.
            
        -   `defaults`: specifies the mount parameters of the file system. Specify the corresponding mount parameters to meet your requirements for data security and performance of the file system. For more information, see [Mount Ext4 file systems with mount command options](/help/en/ecs/user-guide/mount-parameters-for-ext4-file-systems).
            
        
        **Note**
        
        If you want to boot the instance without the RAID array mounted, add the `nofail` mount option. The `nofail` mount option allows the instance to boot even if an error occurs during disk installation. If your instance runs a Ubuntu operating system, you must also add the `nobootwait` mount option.
        
    2.  Run the following command to check whether the mount entry for the RAID array is added:
        
        ```
        cat /etc/fstab
        ```
        
        A command output similar to the following one is returned. If the mount entry is added to the `/etc/fstab` file, `/media/raid0` is displayed in the command output.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3365890171/p727801.png)
        
    3.  Run the following command to mount all file systems in the /etc/fstab file: If no errors are reported, the /etc/fstab file is OK and the file system of the RAID array will mount automatically on the next boot.
        
        ```
        sudo mount -a
        ```
        
    4.  Run the following command to check whether the file system is mounted as expected:
        
        ```
        df -Th
        ```
        
        A command output similar to the following one is returned. If the file system is mounted, the information of the file system is displayed.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3365890171/p727799.png)
