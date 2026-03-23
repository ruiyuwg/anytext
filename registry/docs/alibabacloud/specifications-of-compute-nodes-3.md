This topic describes the compute node specifications for the PolarDB for MySQL Standard Edition.

## Product subseries

The compute node specifications for the Standard Edition are available in two subseries: General-purpose and Dedicated.

-   General-purpose: Different clusters on the same server share idle compute resources, such as CPU. This resource multiplexing provides economies of scale, making it a cost-effective option.
    
-   Dedicated: Each cluster exclusively uses its allocated compute resources, such as CPU. These resources are not shared with other clusters on the same server. This provides more stable and reliable performance.
    

## **Compute node specifications**

Some performance metrics for compute nodes vary based on the storage class.

## ESSD disks

**CPU architecture**

**Specification code**

**CPU and memory**

**Maximum storage capacity**

**Default maximum connections****1**

**Maximum file system inodes****2**

**Maximum file system blktags****3**

**Maximum IOPS and throughput****4**

X86 (General-purpose)

polar.mysql.g1.tiny.c

1 core 1 GB

64 TB

1,000

6,707,200

8,384,000

-   PL0 ESSD: 10,000 input/output operations per second (IOPS), 180 MB/s.
    
-   PL1 ESSD: 50,000 IOPS, 350 MB/s.
    
-   PL2 ESSD: 100,000 IOPS, 750 MB/s.
    
-   PL3 ESSD: 1,000,000 IOPS, 4,000 MB/s.
    
-   ESSD AutoPL disk: 100,000 IOPS, 1,131 MB/s.
    

polar.mysql.g1.small.c

1 core 2 GB

64 TB

2,000

6,707,200

8,384,000

polar.mysql.g2.small.c

2 cores 4 GB

64 TB

2,000

6,707,200

8,384,000

polar.mysql.g4.medium.c

2 cores 8 GB

64 TB

2,000

6,707,200

8,384,000

polar.mysql.g8.medium.c

2 cores 16 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.g2.large.c

4 cores 8 GB

64 TB

3,000

6,707,200

8,384,000

polar.mysql.g4.large.c

4 cores 16 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.g8.large.c

4 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.g2.xlarge.c

8 cores 16 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.g4.xlarge.c

8 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.g8.xlarge.c

8 cores 64 GB

64 TB

16,000

6,707,200

8,384,000

polar.mysql.g2.2xlarge.c

16 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.g4.2xlarge.c

16 cores 64 GB

64 TB

16,000

6,707,200

8,384,000

polar.mysql.g8.2xlarge.c

16 cores 128 GB

64 TB

16,000

6,707,200

8,384,000

X86 (Dedicated)

polar.mysql.x4.medium.c

2 cores 8 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.x8.medium.c

2 cores 16 GB

64 TB

8,000

6,707,200

8,384,000

polar.mysql.x2.large.c

4 cores 8 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.x4.large.c

4 cores 16 GB

64 TB

8,000

6,707,200

8,384,000

polar.mysql.x8.large.c

4 cores 32 GB

64 TB

8,000

6,707,200

8,384,000

polar.mysql.x2.xlarge.c

8 cores 16 GB

64 TB

8,000

6,707,200

8,384,000

polar.mysql.x4.xlarge.c

8 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.x8.xlarge.c

8 cores 64 GB

64 TB

16,000

6,707,200

8,384,000

polar.mysql.x2.2xlarge.c

16 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.x4.2xlarge.c

16 cores 64 GB

64 TB

32,000

6,707,200

8,384,000

polar.mysql.x8.2xlarge.c

16 cores 128 GB

64 TB

32,000

6,707,200

8,384,000

polar.mysql.x2.4xlarge.c

32 cores 64 GB

64 TB

32,000

6,707,200

8,384,000

polar.mysql.x4.4xlarge.c

32 cores 128 GB

64 TB

64,000

104,857,600

131,072,000

polar.mysql.x8.4xlarge.c

32 cores 256 GB

64 TB

64,000

104,857,600

131,072,000

polar.mysql.x4.8xlarge.c

64 cores 256 GB

64 TB

64,000

104,857,600

131,072,000

polar.mysql.x8.8xlarge.c

64 cores 512 GB

64 TB

64,000

104,857,600

131,072,000

YiTian ARM (General-purpose)

polar.mysql.g1m.tiny.c

1 core 1 GB

64 TB

1,000

6,707,200

8,384,000

polar.mysql.g1m.small.c

1 core 2 GB

64 TB

2,000

6,707,200

8,384,000

polar.mysql.g2m.small.c

2 cores 4 GB

64 TB

2,000

6,707,200

8,384,000

polar.mysql.g4m.medium.c

2 cores 8 GB

64 TB

2,000

6,707,200

8,384,000

polar.mysql.g8m.medium.c

2 cores 16 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.g2m.large.c

4 cores 8 GB

64 TB

3,000

6,707,200

8,384,000

polar.mysql.g4m.large.c

4 cores 16 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.g8m.large.c

4 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.g2m.xlarge.c

8 cores 16 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.g4m.xlarge.c

8 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.g8m.xlarge.c

8 cores 64 GB

64 TB

16,000

6,707,200

8,384,000

polar.mysql.g2m.2xlarge.c

16 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.g4m.2xlarge.c

16 cores 64 GB

64 TB

16,000

6,707,200

8,384,000

polar.mysql.g8m.2xlarge.c

16 cores 128 GB

64 TB

16,000

6,707,200

8,384,000

YiTian ARM (Dedicated)

polar.mysql.x4m.medium.c

2 cores 8 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.x8m.medium.c

2 cores 16 GB

64 TB

8,000

6,707,200

8,384,000

polar.mysql.x2m.large.c

4 cores 8 GB

64 TB

6,000

6,707,200

8,384,000

polar.mysql.x4m.large.c

4 cores 16 GB

64 TB

8,000

6,707,200

8,384,000

polar.mysql.x8m.large.c

4 cores 32 GB

64 TB

8,000

6,707,200

8,384,000

polar.mysql.x2m.xlarge.c

8 cores 16 GB

64 TB

8,000

6,707,200

8,384,000

polar.mysql.x4m.xlarge.c

8 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.x8m.xlarge.c

8 cores 64 GB

64 TB

16,000

6,707,200

8,384,000

polar.mysql.x2m.2xlarge.c

16 cores 32 GB

64 TB

10,000

6,707,200

8,384,000

polar.mysql.x4m.2xlarge.c

16 cores 64 GB

64 TB

32,000

6,707,200

8,384,000

polar.mysql.x8m.2xlarge.c

16 cores 128 GB

64 TB

32,000

6,707,200

8,384,000

polar.mysql.x2m.4xlarge.c

32 cores 64 GB

64 TB

32,000

6,707,200

8,384,000

polar.mysql.x4m.4xlarge.c

32 cores 128 GB

64 TB

64,000

6,707,200

8,384,000

polar.mysql.x8m.4xlarge.c

32 cores 256 GB

64 TB

64,000

6,707,200

8,384,000

**Default maximum connections****1**

The maximum connections listed in the table are default values. You can modify the `max_connections` parameter in the console to change the maximum connections for your cluster. The value of this parameter can range from 1 to 200,000. For more information, see [Set cluster parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).

**Maximum file system inodes****2** **and maximum file system blktags****3**

-   The storage layer of PolarDB Standard Edition uses ESSD disks. ESSD disks use the concepts of inodes and blktags. An inode corresponds to a file, and a blktag corresponds to a 4 MB logical space on the block storage. The number of inodes and blktags is linearly related to the disk capacity. For example, a 10 GB disk can have a maximum of 2,048 inodes and 2,560 blktags. If the capacity, number of inodes, or number of blktags reaches the specified upper limit, you must upgrade the disk specifications.
    
-   Capacity units are converted as follows:
    
    -   1 TB = 1,024 GB
        
    -   1 GB = 1,024 MB
        
    -   1 MB = 1,024 KB
        
    -   1 KB = 1,024 Bytes
        

**Maximum IOPS and throughput****4**

-   The maximum IOPS and throughput are theoretical maximums. Actual values are not guaranteed and are typically limited by the purchased disk space.
    
-   The initial IOPS of an ESSD AutoPL disk is 50,000. When you purchase the disk, you can configure the **Provisioned IOPS for AutoPL Disk** to increase the IOPS limit. The maximum total IOPS is 100,000.
    
-   For more information about the performance of ESSD disks, see [ESSD disks](/help/en/ecs/user-guide/essds#concept-727754) and [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).
    
-   The IOPS and throughput of an ESSD disk are **shared among multiple nodes**. For example, if a cluster has 8-core, 32 GB compute nodes, uses a PL1 ESSD, and contains one read/write node and three read-only nodes, these four nodes share the storage performance. This means the total IOPS of the four nodes cannot exceed the PL1 ESSD performance limit of 50,000 IOPS, and the total throughput cannot exceed 350 MB/s. In addition, whether the PL1 ESSD performance limit can be reached also depends on the purchased disk space.
    

## PSL4/PSL5

**Note**

The YiTian ARM architecture does not support the PSL4 or PSL5 storage class.

**CPU architecture**

**Specification code**

**CPU and memory**

**Maximum storage capacity**

**Default maximum connections****1**

**Maximum file system inodes****2**

**Maximum file system blktags****3**

**Maximum PSL4 IOPS****4**

**Maximum PSL5 IOPS****4**

**I/O bandwidth**

X86 (General-purpose)

polar.mysql.g1.tiny.c

1 core 1 GB

100 TB

1,000

20,971,520

26,214,400

1,500

3,000

1 Gbps

polar.mysql.g1.small.c

1 core 2 GB

100 TB

1,500

20,971,520

26,214,400

1,700

3,400

1 Gbps

polar.mysql.g2.small.c

2 cores 4 GB

100 TB

1,800

20,971,520

26,214,400

4,000

8,000

1 Gbps

polar.mysql.g4.medium.c

2 cores 8 GB

100 TB

2,000

20,971,520

26,214,400

8,000

16,000

1 Gbps

polar.mysql.g8.medium.c

2 cores 16 GB

100 TB

8,000

20,971,520

26,214,400

8,000

16,000

2 Gbps

polar.mysql.g2.large.c

4 cores 8 GB

100 TB

3,000

20,971,520

26,214,400

15,000

30,000

2 Gbps

polar.mysql.g4.large.c

4 cores 16 GB

100 TB

6,000

20,971,520

26,214,400

21,000

42,000

2 Gbps

polar.mysql.g8.large.c

4 cores 32 GB

100 TB

8,000

20,971,520

26,214,400

21,000

42,000

4 Gbps

polar.mysql.g2.xlarge.c

8 cores 16 GB

100 TB

6,000

20,971,520

26,214,400

24,000

48,000

2 Gbps

polar.mysql.g4.xlarge.c

8 cores 32 GB

100 TB

10,000

20,971,520

26,214,400

27,000

54,000

4 Gbps

polar.mysql.g8.xlarge.c

8 cores 64 GB

100 TB

16,000

20,971,520

26,214,400

27,000

54,000

10 Gbps

polar.mysql.g2.2xlarge.c

16 cores 32 GB

100 TB

16,000

20,971,520

26,214,400

31,500

63,000

4 Gbps

polar.mysql.g4.2xlarge.c

16 cores 64 GB

100 TB

16,000

20,971,520

26,214,400

31,500

63,000

4 Gbps

polar.mysql.g8.2xlarge.c

16 cores 128 GB

100 TB

16,000

20,971,520

26,214,400

31,500

63,000

8 Gbps

X86 (Dedicated)

polar.mysql.x4.medium.c

2 cores 8 GB

100 TB

6,000

20,971,520

26,214,400

8,000

16,000

1 Gbps

polar.mysql.x8.medium.c

2 cores 16 GB

100 TB

8,000

20,971,520

26,214,400

18,000

36,000

2 Gbps

polar.mysql.x2.large.c

4 cores 8 GB

100 TB

3,000

20,971,520

26,214,400

32,000

64,000

2 Gbps

polar.mysql.x4.large.c

4 cores 16 GB

100 TB

8,000

20,971,520

26,214,400

32,000

64,000

4 Gbps

polar.mysql.x8.large.c

4 cores 32 GB

100 TB

8,000

20,971,520

26,214,400

36,000

72,000

4 Gbps

polar.mysql.x2.xlarge.c

8 cores 16 GB

100 TB

6,000

20,971,520

26,214,400

48,000

96,000

2 Gbps

polar.mysql.x4.xlarge.c

8 cores 32 GB

100 TB

10,000

20,971,520

26,214,400

48,000

96,000

8 Gbps

polar.mysql.x8.xlarge.c

8 cores 64 GB

100 TB

16,000

20,971,520

26,214,400

50,000

108,000

10 Gbps

polar.mysql.x2.2xlarge.c

16 cores 32 GB

100 TB

16,000

20,971,520

26,214,400

50,000

192,000

4 Gbps

polar.mysql.x4.2xlarge.c

16 cores 64 GB

100 TB

32,000

20,971,520

26,214,400

50,000

192,000

16 Gbps

polar.mysql.x8.2xlarge.c

16 cores 128 GB

100 TB

32,000

20,971,520

26,214,400

50,000

192,000

16 Gbps

polar.mysql.x2.4xlarge.c

32 cores 64 GB

100 TB

32,000

20,971,520

26,214,400

80,000

288,000

16 Gbps

polar.mysql.x4.4xlarge.c

32 cores 128 GB

500 TB

64,000

104,857,600

131,072,000

80,000

288,000

20 Gbps

polar.mysql.x8.4xlarge.c

32 cores 256 GB

500 TB

64,000

104,857,600

131,072,000

80,000

288,000

24 Gbps

polar.mysql.x4.8xlarge.c

64 cores 256 GB

500 TB

64,000

104,857,600

131,072,000

100,000

288,000

24 Gbps

polar.mysql.x8.8xlarge.c

64 cores 512 GB

500 TB

100,000

104,857,600

131,072,000

100,000

288,000

24 Gbps

**Note**

-   For clusters that use the PSL4 or PSL5 storage class, the maximum IOPS and I/O bandwidth **increase proportionally with the number of nodes**. For example, if a cluster uses the Dedicated subseries, has 8-core, 32 GB compute nodes, uses the PSL5 storage class, and contains one read/write node and three read-only nodes, the total maximum storage performance for these four nodes is 4 × 96,000 IOPS and 4 × 8 Gbps.
    
-   For clusters that use the PSL4 or PSL5 storage class, each sub-cluster has independent storage specifications and does not interfere with other sub-clusters.
    
    For example, if you purchase a cluster with storage specifications of 96,000 IOPS and 8 Gbps bandwidth, and the cluster has four sub-clusters (one read/write node and three read-only nodes), each sub-cluster has 96,000 IOPS and 8 Gbps of bandwidth. The performance of one sub-cluster does not affect the others.
    
-   PolarStore (PSL4/PSL5) supports petabyte-level storage. If you require petabyte-level storage, [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us) to reserve the necessary resources.
    

**Default maximum connections****1**

The maximum connections listed in the table are default values. You can modify the max\_connections parameter in the console to change the maximum connections for your cluster. The value of this parameter can range from 1 to 200,000. For more information, see [Set cluster parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).

**Maximum file system inodes****2** **and maximum file system blktags****3**

-   PolarDB accesses the underlying storage through its self-developed distributed file system, PolarFileSystem (PolarFS). Similar to traditional file systems, PolarFS uses the concepts of inodes and blktags. An inode corresponds to a file, and a blktag corresponds to a 4 MB logical space on the block storage. The number of inodes and blktags is linearly related to the disk capacity. For example, a 10 GB disk can have a maximum of 2,048 inodes and 2,560 blktags. If the capacity, number of inodes, or number of blktags reaches the specified upper limit, you must upgrade the disk specifications.
    
-   Capacity unit conversions:
    
    -   1 TB = 1,024 GB
        
    -   1 GB = 1,024 MB
        
    -   1 MB = 1,024 KB
        
    -   1 KB = 1,024 Bytes
        

**Maximum IOPS****4**

The maximum IOPS is a theoretical maximum. The actual value is not guaranteed.
