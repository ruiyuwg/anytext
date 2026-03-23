Cloud Parallel File Storage (CPFS) General-purpose Edition is a fully managed and scalable parallel file system from Alibaba Cloud that is designed for high-performance computing (HPC) scenarios. CPFS General-purpose Edition provides a unified namespace that supports concurrent access from thousands of machines, and delivers tens of GB/s in throughput and millions of input/output operations per second (IOPS) with sub-millisecond latency.

## Benefits

CPFS General-purpose Edition provides the following benefits:

-   High throughput: The I/O bandwidth scales linearly with capacity. A single file system supports up to 20 GB/s.
    
-   High IOPS: The IOPS performance scales linearly with capacity. A single file system supports up to 10 million IOPS.
    
-   Low latency: CPFS provides stable I/O performance with sub-millisecond latency.
    
-   Massive file storage: A fully symmetric metadata server architecture supports up to 10 billion files in a single file system. It can process over 100,000 metadata operations per second.
    
-   Low cost: CPFS supports efficient dataflows with Object Storage Service (OSS) to reduce data storage costs. For more information, see [CPFS dataflows](/help/en/cpfs/cpfsonecs/user-guide/data-flow-overview/#task-2118921).
    
-   Multi-protocol access: CPFS supports both POSIX-based APIs and the NFS protocol. This allows different applications to access the same data. For more information, see [Protocol service](/help/en/cpfs/cpfsonecs/user-guide/protocol-service-overview/#task-2207687).
    
-   Data isolation: Within a unified namespace, the NFS protocol supports directory-level mount targets. This simplifies data scheduling and isolates data between different services. For more information, see [Manage export directories](/help/en/cpfs/cpfsonecs/user-guide/manage-export-directories#task-2207887).
    

## Key features

-   **Protocol Service**
    
    CPFS General-purpose Edition supports the NFSv3 protocol and is interoperable with traditional POSIX clients. The NFS protocol provides improved operating system compatibility and elasticity for compute resources, while delivering the high throughput of CPFS General-purpose Edition. For more information, see [Protocol service](/help/en/cpfs/cpfsonecs/user-guide/protocol-service-overview/#task-2207687).
    
-   **Dataflows**
    
    CPFS supports dataflows between CPFS and OSS. You can manage files in OSS buckets from the CPFS file system and access data in OSS using POSIX-based APIs. CPFS transparently loads data from OSS at the block level and caches the data in the CPFS file system to accelerate access. No application modifications are required. For more information, see [CPFS dataflows](/help/en/cpfs/cpfsonecs/user-guide/data-flow-overview/#task-2118921).
    
-   **NFSv4 ACLs**
    
    CPFS file systems support NFSv4 access control lists (ACLs). You can use NFSv4 ACLs to grant access permissions, such as read, write, and execute, to directories or files. For more information, see [NFSv4 ACLs](/help/en/cpfs/cpfsonecs/security-and-compliance/features-of-nfsv4-acls#concept-2220560).
    
-   **Data Monitoring**
    
    CPFS provides a monitoring feature that you can use to view real-time information about your CPFS file system. You can monitor metrics such as file system performance, NFS protocol performance, file system capacity, and fileset capacity. For more information, see [Data monitoring](/help/en/cpfs/cpfsonecs/user-guide/cpfs-monitoring-overview/#concept-2243178).
    

## Methods of use

You can create, manage, and release CPFS file systems using the following methods provided by Alibaba Cloud:

-   You can manage CPFS General-purpose Edition from the console.
    
    CPFS provides a web-based console. You can log on to the [CPFS console](https://nas.console.alibabacloud.com/overview) to manage your CPFS resources. For more information, see [Quick starts](/help/en/cpfs/cpfsonecs/getting-started/getting-started-1#task-2249710).
    
-   You can manage CPFS using [APIs](/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-overview-cpfs) or [SDKs](https://next.api.alibabacloud.com/api-tools/sdk/NAS?spm=a2c4g.11186623.0.0.7f68167bfu43Qo&version=2017-06-26&language=java-async-tea&tab=primer-doc). CPFS provides RESTful APIs and software development kits (SDKs) for various programming languages to facilitate custom development. For more information, see [Integration overview](/help/en/cpfs/cpfsonecs/developer-reference/integration-overview).
    

## **Deactivate the service**

-   After the service is enabled, it cannot be directly deactivated. If you only enable the service but do not create a file system, no fees are incurred.
    
-   If you no longer use this product and want to stop billing, see [How do I stop billing for the CPFS service?](/help/en/cpfs/cpfsonecs/product-overview/billing-faq#section-pto-p2y-f8q). Note that data cannot be recovered after a CPFS file system is deleted.
    
-   To view your billing details, see [Query bills](/help/en/cpfs/cpfsonecs/product-overview/query-bills) and [Query usage](/help/en/cpfs/cpfsonecs/product-overview/query-resource-usage).
    

## Supported regions

China (Hangzhou), China (Shanghai), and China (Beijing)
