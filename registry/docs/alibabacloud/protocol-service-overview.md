The General-purpose Edition of CPFS supports access using the Network File System (NFS) v3 protocol. If you want to access a CPFS file system only using the NFSv3 protocol, you do not need to create a Portable Operating System Interface (POSIX) mount target. This topic describes the benefits, types, limits, usage, and performance metrics of protocol services.

## Benefits

-   Protocol type
    
    Network File System (NFS) protocol services of CPFS support the NFSv3 protocol.
    
-   Multi-protocol access
    
    You can access a CPFS file system using both the CPFS-POSIX and CPFS-NFS clients. For example, if you create a file and modify the file content using the CPFS-POSIX client, you can view the modified file content using the CPFS-NFS client, and vice versa. For the CPFS-POSIX and CPFS-NFS clients, the same UGO permissions are used to control the access to the files in a CPFS file system. The so-called UGO refers to the first letter combination of the three words user (also called owner), group, and other.
    
-   Load balancing
    
    NFS protocol services are deployed as a cluster. The CPFS-NFS client connects to protocol nodes based on the specified load balancing policy to ensure load balancing.
    

## Protocol service types

Protocol services are available in two types: General-purpose and Cache-accelerated. Unlike the General-purpose type, the Cache-accelerated type provides caching for hot spot data. If a cache hit occurs, the bandwidth of a Cache-accelerated protocol service can exceed the bandwidth of the CPFS file system and reach the maximum bandwidth set for the protocol service.

-   General-purpose: This type provides NFS protocol access and [directory-level mount targets](/help/en/cpfs/cpfsonecs/user-guide/manage-export-directories#task-2207887) for General-purpose Edition CPFS file systems. You do not need to configure a POSIX client management cluster. This feature is free of charge.
    
-   In addition to all features of a general-purpose protocol service, a cache protocol service provides the server memory cache feature based on the least recently used (LRU) cache policy. CPFS provides higher internal bandwidth when data is cached in the memory. A cache protocol service is available in two types of specifications: cache type 1 and cache type 2. The two types of cache protocol services provide different internal bandwidth sizes and memory cache sizes.
    
    **Note**
    
    The Cache-accelerated protocol service is a paid feature and is available for invitational preview. For more information about the billing method, see [CPFS billing](/help/en/cpfs/cpfsonecs/product-overview/billable-items#concept-fxv-4jd-2hb). If you have any feedback or questions, you can join the DingTalk group (ID: 31045006299) to contact CPFS engineers.
    

## Limits

### Limit on file system versions

Only CPFS 2.3.0 and later support protocol services.

### Limits on specifications

**Limits**

**Threshold**

**Description**

Maximum number of protocol services that can be created for a CPFS file system

1

You can create only one protocol service for a CPFS file system.

Maximum number of virtual private clouds (VPCs) to which export directories can be published using a protocol service

2

You can use a protocol service to publish export directories to up to two VPCs.

Maximum number of export directories that can be created using a protocol service

10

You can use a protocol service to create an export directory for up to 10 filesets or directories.

Maximum number of compute nodes that can be mounted using a protocol service

10,000

You can mount up to 10,000 compute nodes using a protocol service.

Maximum number of files that can be opened using a protocol service at the same time

150,000

Exceeding this threshold prevents you from opening additional files.

### Other limits

-   A protocol service allows multiple clients to read and write files in a unified namespace in a shared manner. However, in scenarios in which multiple processes or clients concurrently write the same file such as a log file, the processes or clients maintain their own context information such as file descriptors and write locations, but the NFSv3 protocol itself does not support Atomic Append. In this case, write anomalies such as overwrite, crossover, and serialization may occur.
    
-   Network Lock Manager (NLM) is not supported.
    
-   NFSv4.x is not supported.
    

## Usage procedure

Create an NFS protocol service, and use the NFS protocol service to create an export directory for the specified fileset or directory in a CPFS file system. Install the CPFS-NFS client on a compute node, and then mount the CPFS file system to the compute node using an NFS mount target. This way, you can access the CPFS file system from the compute node.

1.  Create a protocol service.
    
    For more information, see the [Create a protocol service](/help/en/cpfs/manage-protocol-services#section-kxg-12c-uhh) section of the "Manage protocol services" topic.
    
2.  Create an export directory.
    
    For more information, see the [Create an export directory](/help/en/cpfs/cpfsonecs/user-guide/manage-export-directories#section-e1i-czu-hyn) section of the "Manage export directories" topic.
    
3.  Log on to the ECS instance. For more information, see [Methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance).
    
4.  Download and install the CPFS-NFS client.
    
    ### **Alibaba Cloud Linux**
    
    1.  Download the CPFS-NFS client.
        
        ```
        wget https://cpfs-hangzhou-nfs-client.oss-cn-hangzhou.aliyuncs.com/aliyun-alinas-utils-latest.al.noarch.rpm
        ```
        
    2.  Install the CPFS-NFS client.
        
        ```
        sudo yum install aliyun-alinas-utils-*.rpm
        ```
        
    
    ### **CentOS**
    
    1.  Download the CPFS-NFS client.
        
        ```
        wget https://cpfs-hangzhou-nfs-client.oss-cn-hangzhou.aliyuncs.com/aliyun-alinas-utils-latest.el.noarch.rpm
        ```
        
    2.  Install the CPFS-NFS client.
        
        ```
        sudo yum install aliyun-alinas-utils-*.rpm
        ```
        
    
    ### Ubuntu
    
    1.  Download the CPFS-NFS client.
        
        ```
        sudo wget https://cpfs-hangzhou-nfs-client.oss-cn-hangzhou.aliyuncs.com/aliyun-alinas-utils-latest.deb -O /tmp/aliyun-alinas-utils-latest.deb
        ```
        
    2.  Install the CPFS-NFS client.
        
        ```
        sudo apt-get update
        sudo apt-get install /tmp/aliyun-alinas-utils-latest.deb
        ```
        
    
    ### **Debian**
    
    1.  Download the CPFS-NFS client.
        
        ```
        sudo wget https://cpfs-hangzhou-nfs-client.oss-cn-hangzhou.aliyuncs.com/aliyun-alinas-utils-latest.deb -O /tmp/aliyun-alinas-utils-latest.deb
        ```
        
    2.  Install the CPFS-NFS client.
        
        ```
        sudo apt-get update
        sudo apt-get install /tmp/aliyun-alinas-utils-latest.deb
        ```
        
    
5.  Mount the file system.
    
    For more information, see [Mount a file system](/help/en/cpfs/cpfsonecs/user-guide/mount-a-file-system-by-using-the-cpfs-nfs-client-recommended#section-3ka-8t0-l3h).
    

## Performance metrics

The following table describes the performance metrics of general-purpose protocol services and cache protocol services.

**Protocol service type**

**Metric**

**100 MB/s/TiB baseline**

**200 MB/s/TiB baseline**

General-purpose

Throughput

The bandwidth of the CPFS file system, in MB/s. The minimum value can be calculated based on the following formula: 100 × Storage capacity (TiB). Compare this value with 20,000. Then, the smaller value is the minimum bandwidth.

The bandwidth of the CPFS file system, in MB/s. The minimum value can be calculated based on the following formula: 200 × Storage capacity (TiB). Compare this value with 20,000. Then, the smaller value is the minimum bandwidth.

IOPS

The minimum read/write IOPS can be calculated based on the following formula: 4,000 × Storage capacity (TiB). Compare this value with 960,000. Then, the smaller value is the minimum read/write IOPS.

The minimum read/write IOPS can be calculated based on the following formula: 8,000 × Storage capacity (TiB). Compare this value with 960,000. Then, the smaller value is the minimum read/write IOPS.

One-way latency

-   Read latency: 0.8 milliseconds.
    
-   Write latency: 0.8 milliseconds.
    

-   Read latency: 0.6 milliseconds.
    
-   Write latency: 0.6 milliseconds.
    

Maximum throughput of a single client

600 MB/s

600 MB/s

Maximum IOPS of a single client

-   Read IOPS: 80,000.
    
-   Write IOPS: 30,000.
    

-   Read IOPS: 80,000.
    
-   Write IOPS: 30,000.
    

Cache type

Throughput

The maximum read bandwidth that you specify when you create a cache protocol service. The maximum value is 100. Unit: GB/s.

The maximum read bandwidth that you specify when you create a cache protocol service. The maximum value is 100. Unit: GB/s.

IOPS

-   Read: min(7500 × protocol service bandwidth (GB/s), 15000 × storage capacity (TiB), 1,900,000)
    
-   The minimum write IOPS can be calculated based on the following formula: 4,000 × Storage capacity (TiB). Compare the value with 960,000. Then, the smaller value is the minimum write IOPS.
    

-   Read: min(7500 × protocol service bandwidth (GB/s), 30000 × storage capacity (TiB), 1,900,000)
    
-   min(8000 × storage capacity (TiB), 960000)
    

One-way latency

-   Read latency (cache hit): 0.2 milliseconds.
    
-   Read latency (cache miss): 0.8 milliseconds.
    
-   Write latency: 0.8 milliseconds.
    

-   Read latency (cache hit): 0.2 milliseconds.
    
-   Read latency (cache miss): 0.6 milliseconds.
    
-   Write latency: 0.6 milliseconds.
    

Maximum throughput of a single client

1.1 GB/s

1.1 GB/s

Maximum IOPS of a single client

-   Read IOPS: 90,000.
    
-   Write IOPS: 40,000.
    

-   Read IOPS: 90,000.
    
-   Write IOPS: 40,000.
