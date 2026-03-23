This topic describes the Network File System (NFS) protocol versions supported by File Storage NAS (NAS), the differences between NFSv3 and NFSv4, and the consistency models of NFS.

## What is NFS?

NFS is a distributed file system protocol that allows you to access files in a remote system in the same way as you access local files.

We recommend that you mount NFS file systems on Linux Elastic Compute Service (ECS) instances and containers. If you mount Server Message Block (SMB) file systems on Linux ECS instances and containers, compatibility issues may occur. For more information, see [Cross-mount compatibility FAQ](/help/en/nas/user-guide/cross-mount-compatibility-faq#task-2287129).

## Protocol versions

Three NFS versions are released: NFSv2, NFSv3, and NFSv4. NFSv4 has two minor versions: NFSv4.0 and NFSv4.1.

General-purpose NAS file systems support NFSv3 and NFSv4.0.

Extreme NAS file systems support NFSv3.

## Differences between NFSv3 and NFSv4.0

-   Features
    
    NFSv4.0 is a stateful protocol that implements the file locking feature and can obtain the root node of a file system.
    
    NFSv3 does not identify file locks. When a file system is mounted by using both NFSv3 and NFSv4.0, data written by using NFSv4.0 may be overwritten.
    
-   Security
    
    NFSv4.0 provides enhanced security and supports RPCSEC-GSS identity authentication.
    
-   Requests
    
    NFSv4.0 provides only two request types: NULL and COMPOUND. All operations are integrated into COMPOUND. A client can encapsulate multiple operations into one COMPOUND request based on actual requests to improve flexibility.
    
-   Namespace
    
    The namespace of NFSv4.0 file systems is changed. A root file system (fsid=0) must be set on the server, and other file systems are mounted on the root file system for export.
    

For more information about the limits on NFS file systems, see [Limits on protocols](/help/en/nas/product-overview/limits#section-cqh-0rs-x47).

## NFS cache application

In traditional disks, all data is cached into the page cache, and modified pages are asynchronously flushed back to the server. The latency of traditional disks is low. However, in an NFS file system, NFS does not cache newly created files or newly written content into the page cache, but flushes them back to the NAS server as soon as possible. Therefore, when multiple ECS instances share an NFS file system, all NAS operations cause one more overhead than disk operations. This overhead is generally between 100 us and 1 ms. To flush data back to the NAS server as soon as possible, NAS provides the following multi-node consistency models:

### Timeout-based eventual consistency model

NFS caches the attribute (FileAttr) of directories or files. The operating system determines whether a directory or file has been modified on other ECS instances based on whether FileAttr has changed. Besides, after FileAttr is loaded, the operating system considers the caches (for example, the content of a file or the file list in a directory) valid within time T. After time T, the operating system obtains FileAttr from the server again. If FileAttr remains unchanged, the operating system considers all the caches related to the file or directory valid.

**Note**

-   T is an adaptive value. Default value: 1s to 60s.
    
-   File content cache: caches the content of a file.
    
-   Subdirectory cache: caches which files exist in a directory and which files do not exist in the directory.
    

Example of a file content cache:

1.  ECS-1 reads 0 to 4 KB of file X: ECS-1 reads the file content for the first time and the content does not exist in the cache. ECS-1 reads the content from the server and caches it locally.
    
2.  ECS-2 updates 0 to 4 KB of file X: ECS-2 writes the data into the server and updates mtime in FileAttr.
    
3.  ECS-1 reads 0 to 4 KB of file X again: If the time interval between the second time ECS-1 reads 0 to 4 KB of file X and the first time ECS-1 reads 0 to 4 KB of file X is less than time T, FileAttr has not expired. In this case, ECS-1 directly reads the 0 to 4 KB of file X in the cache.
    
4.  ECS-1 reads 0 to 4 KB of file X for the third time: If the time interval between the third time ECS-1 reads 0 to 4 KB of file X and the first time ECS-1 reads 0 to 4 KB of file X is greater than time T, ECS-1 obtains the new FileAttr from the server and finds that mtime has changed. In this case, ECS-1 discards the data in the cache and reads data from the server.
    

Example of a subdirectory cache:

1.  ECS-1 attempts to find /a: ECS-1 finds that a does not exist upon the first search. ECS-1 then caches the information that a does not exist in the / directory.
    
2.  ECS-2 creates the /a subdirectory.
    
3.  ECS-1 attempts to find /a again: If the time interval between the second time ECS-1 searches for /a and the first time ECS-1 searches for /a is less than time T, ECS-1 directly uses the cache and notifies that the subdirectory does not exist.
    
4.  ECS-1 attempts to find /a for the third time: If the time interval between the third time ECS-1 searches for /a and the first time ECS-1 searches for /a is greater than time T, ECS-1 obtains the latest FileAttr of the / subdirectory and finds that mtime has changed. In this case, ECS-1 discards the data in the cache and searches for /a on the server.
    

For more information about the timeout-based eventual consistency model provided by NFS, see [NFS](https://linux.die.net/man/5/nfs).

### File-based close-to-open (CTO) consistency model

The timeout-based eventual consistency model cannot ensure that ECS-2 immediately reads the data written by ECS-1. Therefore, to improve consistency, NFS provides the file-based CTO consistency model. When two or more compute nodes concurrently read data from or write data to the same file, the changes made by ECS-1 may not be immediately read by ECS-2. However, once ECS-1 opens a file, writes data to the file, and then closes the file, reopening the file on any compute node ensures access to the newly written data.

For example, a producer ECS instance produces file X and then executes the close operation. Then, the producer ECS instance sends message X to Message Queue, stating that file X has been produced. A consumer ECS instance that has subscribed to Message Queue reads message X (file X has been produced). Then, the consumer ECS instance executes the open operation on the file and reads the file through fd returned by the open operation. This way, the consumer ECS instance can definitely read all the content of file X. Assume that the consumer ECS instance has executed the open operation on file X and obtained fd before the producer ECS instance completes the file production. In this case, the consumer ECS instance may not be able to read the latest file content by directly using the fd after receiving message X.

For information about how to resolve the latency in creating a file and writing data to a file, see [How do I resolve the latency in creating files in an NFS file system?](/help/en/nas/user-guide/cross-mount-compatibility-faq#section-al2-qzt-pd3) and [How do I resolve the latency in writing data to an NFS file system?](/help/en/nas/user-guide/cross-mount-compatibility-faq#section-bhg-7ne-fzs)
