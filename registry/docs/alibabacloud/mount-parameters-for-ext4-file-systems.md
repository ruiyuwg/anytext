When you create Ext4 file systems in Linux, you can run `mount` commands with different options to mount the file systems based on your business requirements, including data security and performance requirements.

## Mount Ext4 file systems based on your data security and performance requirements

If you have data security and performance requirements for file systems, we recommend that you run the mount command without specifying mount options to mount the file systems.

```
sudo mount /dev/vdb /media/test
```

**Note**

By default, the mount command comes with the `defaults` option. The `defaults` option specifies the following default mount options: `rw`, `atime`, `suid`, `dev`, `exec`, `async`, `auto`, `nouser`, `delalloc`, `data=ordered`, `barrier`, and `nodiscard`. You do not need to specify additional mount options.

The mount command that has the defaults option enables features, such as write cache, read-write permissions control, and file system logging, to improve the performance and stability of file systems, protect data integrity, and ensure data security.

-   Advantages: This mount method helps ensure the data security and performance of file systems.
    
-   Disadvantages:
    
    -   Impacts on the data security of file systems: Data may be lost because some user data and file system metadata remain in memory and are not written to disks.
        
    -   Impacts on the performance of file systems:
        
        -   The access times to files are automatically updated, and the metadata operations that occur during data reads and writes are logged by file systems. This results in a large number of writes to the file systems.
            
        -   Blocks are allocated only when data is written from memory to disks. The data writes from memory to disks result in periodic large-block write operations and cause a delay in block allocation.
            

## Mount Ext4 file systems based on your data security requirements

If you attach importance to the data security of file systems, we recommend that you run the mount command with the following mount options to mount file systems: `rw`, `atime`, `sync`, `barrier`, and `data=journal`.

```
sudo mount -o rw,atime,sync,barrier,data=journal /dev/vdb /media/test
```

**Important**

If you use the `atime`, `sync`, `barrier`, and `data=journal` options, the performance of file systems is affected. Proceed with caution. How much the use of the mount options affects file system performance varies based on the instance type and business model. Examples:

-   Each I/O operation in I/O-intensive business involves a data write to a disk. Therefore, I/O-intensive business is more significantly affected than other business.
    
-   Due to the limits of hardware write speeds, the instances of HDD-based instance types (such as instance types that use local HDDs) are more significantly affected than the instances of SSD-based instance types (such as instance types that use standard SSDs and enhanced SSDs).
    

If software unexpectedly exits or hardware breaks down and you run the mount command without specifying mount options to mount file systems, data may be lost because some user data or file system metadata remain in memory and are not written to disks. If you use the mount options that are recommended in this section, all modifications to memory are synchronized to disks and all data is instantly written to file system logs in a sequential order. After file systems are restored, data may still be lost regardless of whether exceptions rarely occur.

-   Advantages: This mount method provides high data security and ensures that data in file systems is not lost after a system breakdown.
    
-   Disadvantages: This mount method causes the performance of file systems to degrade.
    

## Mount Ext4 file systems based on your performance requirements

If you attach importance to the performance of file systems, we recommend that you run the mount command with the following mount options to mount file systems: `defaults`, `noatime`, `nodiratime`, `nobarrier`, `nodelalloc`, and `data=writeback`.

```
sudo mount -o defaults,noatime,nodiratime,nobarrier,nodelalloc,data=writeback /dev/vdb /media/test
```

**Important**

If you use the `noatime`, `nodiratime`, `nobarrier`, and `data=writeback` options, data security decreases. Proceed with caution.

-   When you run the mount command without specifying mount options to mount file systems, each file operation is recorded. As a result, block allocation is delayed and performance is affected.
    
-   If you use the `sync` option to write data operations from memory to disks, file systems submit all logs at a time and allocate blocks, which may cause a periodic I/O glitch. For traditional HDD storage media, this method reduces the number of writes to disks, improves performance, and extends the lifetime of the storage media. For SSD storage media, this method does not significantly improve performance.
    

To improve file system performance, we recommend that you use this method to mount file systems and perform operations such as disabling delayed block allocation, disabling log-ordered writes to memory, and reducing writes to disks.

-   Advantages: This mount method helps improve file system performance (throughput and latency).
    
-   Disadvantages: This method cannot ensure data security, and data in file systems may be lost after a system breakdown.
    

**Note**

-   You can run the `cat /proc/fs/ext4/vdb/options` command to obtain all mount options that are used for a disk. You can run the `man mount` command to query the descriptions of mount options or see [fstab](https://wiki.debian.org/fstab) for the descriptions.
    
-   If you have other requirements, run the `mount` command with appropriate mount options.
