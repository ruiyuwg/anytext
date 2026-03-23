PolarDB for PostgreSQL (Compatible with Oracle) supports dedicated specifications for nodes. A node of dedicated specifications does not share CPU, memory, storage, and I/O resources with other nodes that are deployed on the same server. This improves the stability and reliability of the compute node.

The following table describes the compute node specifications supported by PolarDB for PostgreSQL (Compatible with Oracle) clusters.

## **Specifications of compute nodes**

**Node type**

**CPU and memory**

**Maximum storage capacity**

**Maximum number of connections**

**PSL4 maximum IOPS**

**PSL5 maximum IOPS**

polar.o.x4.medium

2 cores, 8 GB memory

50 TB

800

8,000

16,000

polar.o.x8.medium

2 cores, 16 GB memory

100 TB

1,600

8,000

16,000

polar.o.x4.large

4 cores, 16 GB memory

100 TB

1,600

32,000

64,000

polar.o.x8.large

4 cores, 32 GB memory

100 TB

3,200

32,000

64,000

polar.o.x4.xlarge

8 cores, 32 GB memory

100 TB

3,200

50,000

128,000

polar.o.x8.xlarge

8 cores, 64 GB memory

100 TB

3,200

50,000

160,000

polar.o.x4.2xlarge

16 cores, 64 GB memory

100 TB

3,200

64,000

256,000

polar.o.x8.2xlarge

16 cores, 128 GB memory

100 TB

12,800

64,000

256,000

polar.o.x4.4xlarge

32 cores, 128 GB memory

100 TB

12,800

80,000

256,000

polar.o.x8.4xlarge

32 cores, 256 GB memory

300 TB

25,600

80,000

384,000

polar.o.x4.6xlarge

48 cores, 192 GB memory

100 TB

12,800

100,000

256,000

polar.o.x8.6xlarge

48 Cores, 384 GB memory

300 TB

25,600

100,000

384,000

polar.o.x4.8xlarge

64 cores, 256 GB memory

300 TB

25,600

120,000

384,000

polar.o.x8.8xlarge

64 cores, 512 GB memory

500 TB

36,000

120,000

409,600

polar.o.x8.12xlarge

88 cores, 710 GB memory

500 TB

36,000

150,000

512,000

polar.o.x8.15xlarge

120 cores, 920 GB memory

500 TB

36,000

150,000

512,000

**Note**

-   Maximum number of connections: the limit on the number of connections. You can use the max\_connections parameter to specify the value. The actual number of connections supported by a compute node may vary based on the business requirements. For more information, see [Maximum number of connections](#title-l6b-m9q-23e).
    
-   The maximum IOPS and I/O bandwidth of an Enterprise Edition cluster **increase proportionally with the number of nodes**. For example, in an Enterprise Edition cluster that uses dedicated specifications, 8-core 32 GB compute nodes, and PSL5 storage, the maximum storage performance of the cluster is 4 × 96,000 IOPS and 4 × 8 Gbps I/O bandwidth if the cluster contains one read-write node and three read-only nodes.
    
-   The storage specification of each node of an Enterprise Edition cluste is independent from that of the other nodes. For example, for an Enterprise Edition cluster that contains one read-write node and three read-only nodes, if the storage specifications are 128,000 IOPS and 8 Gbps I/O bandwidth, the storage specifications of each node are 128,000 IOPS and 8 Gbps I/O bandwidth.
    
-   The IOPS provided by PSL4 is determined by the maximum IOPS of the computing specification and the storage IOPS. The following formula is used to calculate the IOPS of a compute node: `min{maximum IOPS of the computing specification, storage IOPS}`. The following formula is used to calculate the storage IOPS: `min{1,800+50×storage capacity, 50,000}`. Unit: GB.
    
    For example, in your cluster the compute node specification is polar.o.x8.xlarge and the maximum IOPS of the computing specification is 80,000. The storage capacity is 100 GB, which means the storage IOPS is min{1,800+50\*100, 50,000}=6,800. As a result, the IOPS of the compute node is min{80,000, 6,800}=6,800.
    
-   In minor version 1.1.7 that was released in December 2020, the maximum numbers of connections supported by some compute node specifications were changed. The preceding table contains the new specifications. The changes apply to all clusters that are created after minor version 1.1.7 was released. For existing clusters, you can change the maximum number of connections by changing cluster specifications.
    

## Maximum number of connections

-   When the number of concurrent connections to a PolarDB for PostgreSQL (Compatible with Oracle) cluster exceeds the specified maximum number of connections, subsequent connection attempts time out or fail.
    
    The memory consumption of each connection varies based on the business system. The actual number of connections supported by your cluster may differ from the specified maximum number of connections.
    
-   To query the specified maximum number of connections, execute the following statement:
    
    ```
    show max_connections;
    ```
    
-   To query the current number of connections, execute the following statement:
    
    ```
    select count(1) from pg_stat_activity;
    ```
    
-   We recommend that you monitor your business conditions and cluster status and make sure that the number of connections to the cluster does not exceed the recommended value. You can calculate the recommended value by using the following formula:
    
    `LEAST({DBInstanceClassMemory/11MB}, 5000)`.
    
-   If your application requires a higher number of connections, we recommend that you use a cluster with larger memory.
