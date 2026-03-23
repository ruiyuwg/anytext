ossfs mounts an Alibaba Cloud Object Storage Service (OSS) bucket as a local file system. This lets you manage data in OSS in the same way that you manage local files.

## **Version upgrade**

You can use [ossfs 2.0](/help/en/oss/developer-reference/ossfs-2-0/#fbd0fa1fc1w0w) for workloads such as AI training, inference, and autonomous driving simulations if you prefer not to use OSS software development kits (SDKs) or [Accelerate model training using the OSS Connector for AI/ML](/help/en/oss/developer-reference/oss-connector-overview/#ea05a4d314inl).

The features of ossfs 2.0 are as follows:

-   Provides basic POSIX compatibility and focuses on using the server-side read and write capabilities of OSS.
    
-   Offers high-performance sequential read and write operations for large files through end-to-end read and write path optimization.
    
-   Delivers high-performance concurrent loading for small files through efficient metadata management.
    

## **Introduction to ossfs**

ossfs is a Filesystem in Userspace (FUSE) file system that lets you mount an OSS bucket as a local file system on Linux. It supports the following features:

-   Supports most features of the POSIX file protocol standard, such as uploading and downloading files and folders, and setting user permissions.
    
-   Uses the multipart upload and resumable upload features of OSS to upload files by default.
    
-   Supports MD5 validation to ensure data integrity.
    

## Runtime environment

ossfs is developed based on FUSE and can run only on machines that support FUSE. ossfs provides installer packages for Ubuntu, CentOS, and Alibaba Cloud Linux. To run ossfs in other environments, you must build the program from the source code.

-   Linux
    
    -   CentOS 7.0 or later.
        
    -   Ubuntu 20.04 or later.
        
    -   Anolis 7, Alibaba Cloud Linux 2, or later.
        
-   FUSE: Version 2.8.4 or later
    
    Run the `fusermount -V` command to check the FUSE version. If the returned version is 2.8.4 or later, for example, fusermount version: 2.9.2, your FUSE version meets the requirement.
    

## Limits

The following limits apply when you use ossfs to map data and features of a remote bucket to a local file system:

-   This is not suitable for high-concurrency mixed read/write scenarios.
    
    **Note**
    
    -   In the ossfs implementation, random reads and all writes must be written to disk. In high-concurrency mixed read and write scenarios, disk performance becomes a bottleneck.
        
    -   Concurrent read and write requests compete for resources, which affects bandwidth.
        
    
-   Hard links are not supported.
    
-   You cannot mount Archive Storage, Cold Archive, or Deep Cold Archive buckets.
    
-   Editing an uploaded file causes the file to be re-uploaded.
    
-   Metadata operations, such as `list directory`, have poor performance because they require remote access to the OSS server.
    
-   Renaming a file or folder may fail. If a rename operation fails, data inconsistency can occur.
    
-   Data consistency is not guaranteed if multiple clients mount the same OSS bucket and write to the same file simultaneously.
    
-   Ensure that your AccessKey pair has full permissions on the target bucket or on the resources under the target prefix. If you cannot grant full permissions, you must grant at least the `oss:GetObject`, `oss:ListObjects`, `oss:DeleteObject`, `oss:PutObject`, `oss:AbortMultipartUpload`, and `oss:ListMultipartUploads` permissions. Otherwise, the mount operation may fail or not function correctly.
    

## **What to do next**

Before you can use ossfs to mount an Object Storage Service bucket to a local Linux system, you must [install ossfs 1.0](/help/en/oss/developer-reference/install-ossfs-1-0#7574a6940abxi) and [configure ossfs 1.0](/help/en/oss/developer-reference/configurations-for-ossfs-1-0#b432e9050aya9). After the installation and configuration are complete, you can [mount a bucket to a local Linux system](/help/en/oss/developer-reference/advanced-configurations#title-3ly-yag-7qe).

## References

-   [Install ossfs 1.0](/help/en/oss/developer-reference/install-ossfs-1-0#7574a6940abxi)
    
-   [Configure ossfs 1.0](/help/en/oss/developer-reference/configurations-for-ossfs-1-0#b432e9050aya9)
    
-   [Mount a bucket to a local Linux system](/help/en/oss/developer-reference/advanced-configurations#title-3ly-yag-7qe)
    
-   [ossfs 1.0 mount options](/help/en/oss/developer-reference/common-options#title-vwo-030-jef)
    
-   [How ossfs 1.0 works](/help/en/oss/developer-reference/how-ossfs1-0-works/#5ebca26bfdtdy)
    
-   [Best practices](/help/en/oss/developer-reference/best-practices/#6f6c655310n4k)
    
-   [FAQ](/help/en/oss/developer-reference/ossfs-faq#title-m9i-gzo-o1e)
    
-   [Version update features](/help/en/oss/developer-reference/ossfs-version-update-function-introduction/#b62b207e9bn4w)
