Object Storage Service (OSS) is a low-cost, massive shared storage service provided by Alibaba Cloud. It is suitable for storing data that is rarely modified after being written, such as images, audio, and video files, and other unstructured data. You can mount OSS buckets as volumes to pods in ACK to meet persistent storage requirements.

## **Introduction to OSS**

[Object Storage Service (OSS)](/help/en/oss/user-guide/what-is-oss) is a massive, secure, low-cost, and highly reliable cloud storage service with high data durability and data availability. OSS provides various storage classes, such as Standard, Infrequent Access, Archive, and Cold Archive, to cover data storage scenarios from hot to cold. You can select a storage class based on the billing method and data access frequency. For more information, see [Storage solution selection](/help/en/oss/user-guide/selection-guidance-selection-guidance) and [Storage classes](/help/en/oss/user-guide/overview-53/).

**Important**

For information about the billing methods of OSS, see [Billing overview](/help/en/oss/billing-overview#concept-n4t-mwg-tdb).

## Scenarios

OSS provides a huge, low-cost, and shared storage space. If you do not need to frequently modify written data, we recommend that you store the data in OSS volumes.

Common scenarios are as follows:

-   **Data sharing**
    
    OSS is a shared storage type. You can access data on OSS volumes from multiple pods at the same time. The data on OSS volumes is not deleted when the pod is deleted. OSS volumes can be used to share data between pods.
    
-   **Read-only configuration files of websites and applications**
    
    ossfs provides limited network performance and can be used to read small files.
    
-   **Read-only media files, such as images and audio and video files**
    
    OSS is suitable for storing unstructured data, such as images, audios, and videos.
    

**Note**

-   To perform write operations on OSS volumes, use ossfs 1.0 volumes and upgrade them to version 1.91 or later. For more information, see [New features and performance stress testing of ossfs 1.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above).
    
-   Improve data access performance in read/write splitting scenarios. For more information, see [Best practices for OSS read/write splitting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-read-and-write-splitting-of-oss-storage).
    

## **Client selection**

You can mount object storage locally as OSS volumes using a Filesystem in Userspace (FUSE) client or a virtual block device. Compared with traditional local storage and block storage, OSS volumes have certain limitations in Portable Operating System Interface (POSIX) operation compatibility.

The following clients are supported for OSS volumes. For more information, see [Client selection reference](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/client-selection-reference).

**Client**

**Type**

**Description**

**Required storage component version**

[ossfs 1.0 (default)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs1-0/)

FUSE

Supports most POSIX operations, including append writes, random writes, and setting user permissions. For more information, see [How it works](/help/en/oss/developer-reference/how-ossfs1-0-works/) and [Version updates and new features](/help/en/oss/developer-reference/ossfs-version-update-function-introduction/).

Always supported. For more information, see [ossfs 1.0 release notes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-release-notes).

[ossfs 2.0](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ossfs-2-0/)

FUSE

Supports full reads and sequential append writes. This client is suitable for read-heavy scenarios and significantly improves data read performance. For more information, see [Overview of ossfs 2.0](/help/en/oss/developer-reference/ossfs-2-0/).

CSI component version v1.33.1 or later.

[strmvol](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/strmvol/)

Virtual block device

The current version supports only read-only scenarios. It uses virtual block devices to resolve the performance bottlenecks of FUSE in read-only scenarios that involve many small files.

In addition to the CSI component, the strmvol-csi-driver component must also be deployed.

## Usage notes

-   To mount a subdirectory in an OSS bucket, set the `path` field of the persistent volume (PV) instead of using the `subpath` method. If you use the `subpath` or `subpathExpr` configuration, first read [An exception occurs when you mount an OSS volume using subpath or subpathExpr](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#455ea1d6f2659) to prevent mount exceptions that are caused by permission errors.
    
-   The `chmod` and `chown` operations are not supported on the root path of a mounted OSS volume. To perform these operations, modify the `mp_umask` configuration item. For more information, see [OSS volume mount permission issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-oss-volumes-1#section-x2l-anl-0qz).
    

## Precautions

**Note**

The following precautions apply mainly to general read/write scenarios that use ossfs 1.0. The ossfs 2.0 and strmvol clients are generally not affected because they support only some POSIX operations, mainly read operations.

Random or append write operations create a new file locally and then upload it to the OSS server. Due to the storage characteristics of OSS, note the following:

-   The rename operation for files and folders is not atomic.
    
-   Avoid concurrent write operations or direct compression and decompression operations in the mount path.
    
    **Important**
    
    In multiple-write scenarios, you must coordinate the behavior of each client. ACK does not guarantee the consistency of metadata and data that results from write operations.
    

In addition, note the following limitations:

-   Hard links are not supported.
    
-   Mounting buckets of the Archive Storage, Cold Archive, or Deep Cold Archive storage class is not supported.
    
-   By default, the readdir operation sends many headObject requests to retrieve extended information about all objects in the path. If the destination path contains many files, the overall performance of ossfs may be affected. If file permissions and other attributes are not critical in your read/write scenario, you can enable the `-o readdir_optimize` parameter for optimization. For more information, see [New readdir optimization feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/introduction-of-new-functions-and-performance-pressure-measurement-of-ossfs-version-1-91-and-above#b5f5ea625amyu).
    
-   If the CSI plug-in version is earlier than v1.20.7, it detects only local modifications and cannot detect external modifications from other clients or tools.
    
-   If the CSI version is earlier than 1.28, ossfs runs as a process directly on the node. The supported node operating systems are CentOS, Alibaba Cloud Linux, ContainerOS, and Anolis OS. If the node operating system is not supported, [upgrade the CSI component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
