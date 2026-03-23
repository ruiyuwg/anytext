Local SSDs are previous-generation disks that are no longer available for purchase. This topic is intended for users who purchased and still use local SSDs.

**Important**

Local SSDs bring risks of single points of failure (SPOFs) because the disks are located on the physical machines that host the Elastic Compute Service (ECS) instances associated with the disks. We recommend that you implement data redundancy at the application layer to ensure the availability of data.

## Local SSDs

Local SSDs are located on the physical machines that host the ECS instances associated with the disks. Local SSDs provide block-level data access capabilities for the ECS instances and deliver low latency, high random IOPS, and high I/O throughput.

When you use local SSDs, take note of the following items:

-   Local SSDs bring risks of SPOFs because the disks are located on the physical machines that host the ECS instances associated with the disks. We recommend that you implement data redundancy at the application layer to ensure the availability of data.
    
-   After you purchase an ECS instance that uses local SSDs, you cannot upgrade or downgrade the configurations of the instance, such as the number of CPU cores, the memory size, and the specifications of the local SSDs.
    

## Parameters

**Parameter**

**Local SSD**

Maximum capacity

800 GB

Maximum IOPS

12,000

Maximum throughput

250 Mbit/s to 300 Mbit/s

Performance formula

N/A

Access latency

0.5 ms to 2 ms

Data durability

The durability of data stored on local disks varies based on the reliability of the associated physical machine. No service level agreement (SLA) compliance is guaranteed.

API parameter value

ephemeral\_ssd

Price

For more information, see the [Elastic Compute Service](https://www.alibabacloud.com/product/ecs) product page.

Use scenario

Distributed applications that require high reliability, low latency, and high storage I/O performance, such as Hadoop and NoSQL.

For more information about local disks, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance).

## Characteristics

Local SSDs are located on the physical machines that host the ECS instances associated with the disks and provide storage capacities for the instances. Local SSDs have the following characteristics:

-   Low latency: In most cases, local SSDs provide microsecond-level latency.
    
-   High random I/O: Local SSDs deliver up to 12,000 random IOPS.
    
-   High throughput: Local SSDs provide I/O throughput of up to 300 Mbit/s.
    
-   Limited data durability: The durability of data stored on local SSDs varies based on the reliability of the associated physical machine. In this case, risks of SPOFs may arise. We recommend that you implement data redundancy at the application layer to ensure the availability of data.
    
-   Storage capacity of up to 800 GB: A single local SSD can provide a storage capacity of up to 800 GB.
    
-   Local SSDs are located on physical machines and cannot be separately attached to or unattached from ECS instances.
    
-   After you purchase an ECS instance that uses local SSDs, you cannot upgrade or downgrade the configurations of the instance, such as the number of CPU cores, the memory size, and the specifications of the local SSDs.
    

## Use scenarios

Local SSDs provide low latency, high random I/O, and high throughput. Local SSDs are suitable for distributed and I/O-intensive applications that have redundancy capabilities in scenarios that do not require high data durability.

-   You can use local SSDs for distributed and I/O-intensive applications such as NoSQL databases, massively parallel processing (MPP) data warehouses, and distributed file systems. Data redundancy is implemented on the applications in a distributed manner. Local SSDs can provide low latency, high random I/O, and high I/O throughput for the applications.
    
-   You can use local SSDs to store the logs of large online applications. The applications can produce a large amount of log data and require high-performance storage. In addition, log data does not require highly reliable storage.
    
-   You can use local SSDs as swap partitions in ECS instances. When applications that run on a Linux instance require more memory but the amount of memory allocated to the applications is exhausted, you can enable the swap space. After you enable the swap space, the Linux operating system can frequently swap in-use memory pages from the physical memory to the swap spaces regardless of whether the swap spaces are dedicated partitions of the existing file systems or swap files. The Linux operating system can also free up space for memory pages that require high access speeds.
    

## **References**

For information about the new-generation local disks, see [Local disks](/help/en/ecs/user-guide/local-disks).
