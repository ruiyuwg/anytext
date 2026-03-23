ossfs 2.0 is a client that provides high-performance access to Object Storage Service (OSS) by mounting it as a file system. It delivers excellent sequential read and write performance and fully utilizes the high bandwidth of OSS.

## **Performance improvements**

ossfs 2.0 delivers significant performance improvements over ossfs 1.0 in sequential reads and writes, and in highly concurrent reads of small files. For more information, see [Performance Testing](/help/en/oss/developer-reference/performance-test-of-ossfs-2-0#02672c6e56ppx).

-   **Sequential write performance**: In single-threaded, large-file sequential write scenarios, ossfs 2.0 provides nearly **18 times** the bandwidth of ossfs 1.0.
    
-   **Sequential read performance:** In single-threaded or multi-threaded (4 threads) large-file sequential read scenarios, ossfs 2.0 provides more than **3 times** the bandwidth of ossfs 1.0.
    
-   **Concurrent small-file read performance**: In high-concurrency (128 threads) small-file read scenarios, ossfs 2.0 provides more than **20 times** the bandwidth of ossfs 1.0.
    

## **Scenarios**

ossfs 2.0 is suitable for scenarios that require high-performance storage access, such as AI training, inference, big data processing, autonomous driving, and other compute-intensive workloads. These workloads primarily involve sequential and random reads and sequential (append-only) writes, and do not require full POSIX semantics.

## **Runtime environment**

ossfs 2.0 is built on Filesystem in Userspace (FUSE).

**Architecture**

**Operating system**

**Version**

**Download URL**

x86\_64

CentOS

CentOS 7, CentOS 8

[ossfs2\_2.0.6\_linux\_x86\_64.rpm](https://gosspublic.alicdn.com/ossfs/ossfs2_2.0.6_linux_x86_64.rpm)

Alibaba Cloud Linux

Alibaba Cloud Linux 2, Alibaba Cloud Linux 3

Ubuntu

Ubuntu 20.04 LTS and later LTS versions

[ossfs2\_2.0.6\_linux\_x86\_64.deb](https://gosspublic.alicdn.com/ossfs/ossfs2_2.0.6_linux_x86_64.deb)

Debian

Debian 11 and later

aarch64

Alibaba Cloud Linux

Alibaba Cloud Linux 3

[ossfs2\_2.0.6\_linux\_aarch64.rpm](https://gosspublic.alicdn.com/ossfs/ossfs2_2.0.6_linux_aarch64.rpm)

## **Limits**

-   **Permission requirements**: The AccessKey must have full permissions on the target bucket or prefix. Otherwise, the mount operation may fail or cause abnormal behavior.
    
-   **Storage class limitations**: You cannot mount buckets that use the Archive Storage, Cold Archive, or Deep Cold Archive storage classes.
    
-   **File name limitations**: File names are limited to 255 characters because of a Linux constraint. Files or folders in OSS with names that exceed this limit are not visible in the mount target.
    
-   **File read limitations**: ossfs uploads new files to OSS only after the corresponding file handles are closed. Reading a file before its handle is closed may cause an error.
    
-   **File write limitations**: Random writes and concurrent writes to the same file are not supported. The default part size is 8,388,608 bytes (8 MiB). Therefore, the maximum supported file size is 83,886,080,000 bytes (78.125 GiB). You can configure the part size using the [upload\_buffer\_size](/help/en/oss/developer-reference/description-of-mount-options#2d5d0d7ad2zw0) mount option.
    
-   **File rename operations (non-atomic)**
    
    -   File: Copies the file and then deletes the original remote file.
        
    -   Folders: This operation first copies all files and then deletes the source files in a bulk operation. By default, a folder rename operation is limited to 2 million descendant files. You can configure this limit using the [rename\_dir\_limit](/help/en/oss/developer-reference/description-of-mount-options#2d5d0d7ad2zw0) mount option.
        
-   **Concurrent write consistency**: When multiple clients mount the same bucket and write to the same file concurrently, data consistency cannot be guaranteed.
    
-   **POSIX API compatibility**: Partially compatible. For more information, see [Supported POSIX APIs](#42610ceb86ega).
    

## **Features**

### **Features**

-   Offers basic POSIX compatibility and focuses on maximizing the server-side read and write performance of OSS.
    
-   Delivers efficient sequential read and write performance for large files through end-to-end optimization of the read and write path.
    
-   Enables efficient concurrent loading of small files through optimized metadata management.
    
-   Enables automatic mounting of OSS buckets at startup by configuring fstab.
    

### **POSIX API support**

The following table compares the POSIX API support in [ossfs 1.0](/help/en/oss/developer-reference/ossfs-overview/#aaf28e7e07vt1) and ossfs 2.0.

**Categorization**

**Operation/Feature**

**ossfs 1.0**

**ossfs 2.0**

**Basic file operations**

`open`

Supported

Supported

`flush`

Supported

Supported

`close`

Supported

Supported

**File reads and writes**

`read`

Supported

Supported

`write`

Supports random writes (requires a disk cache)

Supports only sequential writes (no disk cache required)

`truncate`

Supported (File size is adjustable)

Only supports truncating a file to zero length

**File meta operations**

`create`

Supported

Supported

`unlink`

Supported

Supported

`rename`

Supported

Supported

**Folder operations**

`mkdir`

Supported

Supported

`readdir`

Supported

Supported

`rmdir`

Supported

Supported

**Permissions and properties**

`getattr`

Supported

Supported

`chmod`

Supported

Unsupported

`chown`

Supported

Unsupported

`utimes`

Supported

Supported

**Extended features**

`setxattr`

Supported

Unsupported

`symlink`

Supported

Unsupported

`lock`

Unsupported

Unsupported

## **References**

-   [Install ossfs 2.0](/help/en/oss/developer-reference/install-ossfs-2-0#1426bd60b2zqr)
    
-   [Configure ossfs 2.0](/help/en/oss/developer-reference/configure-ossfs-2-0#ed50989660a4u)
    
-   [Mount a bucket to a local file system using ossfs 2.0](/help/en/oss/developer-reference/mount-buckets-using-ossfs-2-0#d6ba04c253j4x)
    
-   [ossfs 2.0 mount options](/help/en/oss/developer-reference/description-of-mount-options#15c122bf47s6b)
    
-   [ossfs 2.0 Performance Testing](/help/en/oss/developer-reference/performance-test-of-ossfs-2-0#02672c6e56ppx)
    
-   [File and folder recognition mechanism](/help/en/oss/developer-reference/recognition-mechanism-of-ossfs2-0-for-objects-and-folders)
    
-   [Reduce OSS requests and improve mount target performance](/help/en/oss/developer-reference/optimise-metadata-requests-to-speed-up-file-loading)
    
-   [FAQ](/help/en/oss/developer-reference/ossfs-2-0-faq#71f17b6292241)
    
-   [Release notes](/help/en/oss/developer-reference/release-notes-of-ossfs-2-0#fa85552d20b4i)
