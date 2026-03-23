This topic describes the specifications of ApsaraDB for MongoDB sharded cluster instances.

**Note**

-   The memory specified for an instance type includes the memory used by MongoDB management services, database services, and the underlying operating system. This also includes memory reserved for the BIOS, kernel, and hypervisor. As a result, the available memory is less than the total memory defined for the instance type.
    
-   Some instance types were upgraded on May 14, 2024. If the maximum number of connections for your instance does not match the number in this document, restart the instance for the upgrade to take effect. For more information, see [Notification: Maximum connections upgraded for some ApsaraDB for MongoDB instance types](/help/en/mongodb/product-overview/notice-the-maximum-number-of-connections-to-apsaradb-for-mongodb-instances-of-specific-specifications-is-increased).
    
-   **A single collection file cannot exceed 16 TB. Otherwise, the instance becomes unavailable.**
    

## Disk-based instances

The following database versions are supported:

-   MongoDB 8.0
    
-   MongoDB 7.0
    
-   MongoDB 6.0
    
-   MongoDB 5.0
    
-   MongoDB 4.4
    

**Note**

For more information about the maximum input/output operations per second (IOPS) and throughput of different disk types, see [Enterprise SSDs (ESSDs)](/help/en/ecs/user-guide/essds) and [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

**Node type**

**Instance type family**

**Specifications**

**Specification Code**

**Maximum connections**

**Maximum IOPS**

**Maximum throughput (MB/s)**

**Storage space**

Mongos

Dedicated disk-based

2 vCPU, 8 GB

mdb.shard.4x.large.d

5000

N/A

N/A

N/A

2 vCPU, 16 GB

mdb.shard.8x.large.d

8000

4 vCPU, 8 GB

mdb.shard.2x.xlarge.d

8000

4 vCPU, 16 GB

mdb.shard.4x.xlarge.d

8000

4 vCPU, 32 GB

mdb.shard.8x.xlarge.d

12000

8 vCPU, 16 GB

mdb.shard.2x.2xlarge.d

12000

8 vCPU, 32 GB

mdb.shard.4x.2xlarge.d

16000

8 vCPU, 64 GB

mdb.shard.8x.2xlarge.d

16000

16 vCPU, 32 GB

mdb.shard.2x.4xlarge.d

16000

16 vCPU, 64 GB

mdb.shard.4x.4xlarge.d

32000

16 vCPU, 128 GB

mdb.shard.8x.4xlarge.d

32000

32 vCPU, 64 GB

mdb.shard.2x.8xlarge.d

32000

32 vCPU, 128 GB

mdb.shard.4x.8xlarge.d

96000

32 vCPU, 256 GB

mdb.shard.8x.8xlarge.d

96000

General-purpose disk-based

2 vCPU, 4 GB

mdb.shard.2x.large.c

3000

4 vCPU, 8 GB

mdb.shard.2x.xlarge.c

6000

8 vCPU, 16 GB

mdb.shard.2x.2xlarge.c

12000

16 vCPU, 32 GB

mdb.shard.2x.4xlarge.c

16000

32 vCPU, 64 GB

mdb.shard.2x.8xlarge.c

32000

Shard

Dedicated disk-based

2 vCPU, 8 GB

mdb.shard.4x.large.d

5000

min{1800 + 50 × Storage space, 10000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 128, Maximum throughput of the selected disk type}

-   PL1 ESSD: 20 GB to 16000 GB, with a step size of 10 GB.
    
-   PL2 ESSD: 470 GB to 16000 GB, with a step size of 10 GB.
    
-   PL3 ESSD: 1270 GB to 16000 GB, with a step size of 10 GB.
    
-   ESSD AutoPL disk: 40 GB to 16000 GB, with a step size of 10 GB.
    

2 vCPU, 16 GB

mdb.shard.8x.large.d

8000

4 vCPU, 8 GB

mdb.shard.2x.xlarge.d

8000

min{1800 + 50 × Storage space, 20000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 192, Maximum throughput of the selected disk type}

4 vCPU, 16 GB

mdb.shard.4x.xlarge.d

8000

4 vCPU, 32 GB

mdb.shard.8x.xlarge.d

12000

8 vCPU, 16 GB

mdb.shard.2x.2xlarge.d

12000

min{1800 + 50 × Storage space, 25000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 256, Maximum throughput of the selected disk type}

8 vCPU, 32 GB

mdb.shard.4x.2xlarge.d

16000

8 vCPU, 64 GB

mdb.shard.8x.2xlarge.d

16000

16 vCPU, 32 GB

mdb.shard.2x.4xlarge.d

16000

min{1800 + 50 × Storage space, 40000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 384, Maximum throughput of the selected disk type}

16 vCPU, 64 GB

mdb.shard.4x.4xlarge.d

32000

16 vCPU, 128 GB

mdb.shard.8x.4xlarge.d

32000

32 vCPU, 64 GB

mdb.shard.2x.8xlarge.d

32000

min{1800 + 50 × Storage space, 60000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 640, Maximum throughput of the selected disk type}

32 vCPU, 128 GB

mdb.shard.4x.8xlarge.d

96000

32 vCPU, 256 GB

mdb.shard.8x.8xlarge.d

96000

64 vCPU, 128 GB

mdb.shard.2x.16xlarge.d

96000

min{1800 + 50 × Storage space, 300000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 2048, Maximum throughput of the selected disk type}

64 vCPU, 256 GB

mdb.shard.4x.16xlarge.d

128000

64 vCPU, 512 GB

mdb.shard.8x.16xlarge.d

128000

General-purpose disk-based

2 vCPU, 4 GB

mdb.shard.2x.large.c

3000

min{1800 + 50 × Storage space, 10500, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 128, Maximum throughput of the selected disk type}

2 vCPU, 8 GB

mdb.shard.4x.large.c

3000

4 vCPU, 8 GB

mdb.shard.2x.xlarge.c

6000

min{1800 + 50 × Storage space, 21000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 192, Maximum throughput of the selected disk type}

4 vCPU, 16 GB

mdb.shard.4x.xlarge.c

6000

8 vCPU, 16 GB

mdb.shard.2x.2xlarge.c

12000

min{1800 + 50 × Storage space, 26250, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 256, Maximum throughput of the selected disk type}

8 vCPU, 32 GB

mdb.shard.4x.2xlarge.c

16000

16 vCPU, 32 GB

mdb.shard.2x.4xlarge.c

16000

min{1800 + 50 × Storage space, 42000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 384, Maximum throughput of the selected disk type}

16 vCPU, 64 GB

mdb.shard.4x.4xlarge.c

32000

32 vCPU, 64 GB

mdb.shard.2x.8xlarge.c

32000

min{1800 + 50 × Storage space, 50000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 640, Maximum throughput of the selected disk type}

ConfigServer

Dedicated disk-based

4 vCPU, 8 GB

mdb.shard.2x.xlarge.d

8000

min{1800 + 50 × Storage space, 20000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 192, Maximum throughput of the selected disk type}

-   PL1 ESSD: 20 GB to 16000 GB, with a step size of 10 GB.
    
-   PL2 ESSD: 470 GB to 16000 GB, with a step size of 10 GB.
    
-   PL3 ESSD: 1270 GB to 16000 GB, with a step size of 10 GB.
    
-   ESSD AutoPL disk: 40 GB to 16000 GB, with a step size of 10 GB.
    

General-purpose disk-based

2 vCPU, 4 GB

mdb.shard.2x.large.c

3000

min{1800 + 50 × Storage space, 10500, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 128, Maximum throughput of the selected disk type}

4 vCPU, 8 GB

mdb.shard.2x.xlarge.c

6000

min{1800 + 50 × Storage space, 21000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 192, Maximum throughput of the selected disk type}

The 64 vCPU/128 GB, 64 vCPU/256 GB, and 64 vCPU/512 GB Dedicated disk-based instance types for shard nodes are available only in Zones A, B, and C in the Singapore region.

General-purpose disk-based instances are available in the following regions and zones:

-   China (Hangzhou): Zones J.
    
-   China (Shanghai): Zones B, L, and N.
    
-   China (Beijing): Zones H, and K.
    
-   China (Shenzhen): Zone D
    
-   China (Hong Kong): Zones B and C.
    
-   Singapore: Zone A.
    
-   US (Silicon Valley): Zones A and B.
    
-   US (Virginia): Zones A and B.
    

**Note**

-   If you select multi-zone deployment when you create an instance, confirm that the destination region supports the selected instance type.
    
-   Disk encryption is not supported for General-purpose disk-based instance types.
    
-   **General-purpose disk-based instances are not available in all regions.** If you cannot find the required instance types in the console for a specific region, you can [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to request access.
    

## Local disk-based instances

The following database versions are supported:

-   MongoDB 4.2
    
-   MongoDB 4.0
    
-   MongoDB 3.4 (Discontinued)
    

**Node type**

**Instance type family**

**Specifications**

**Specification Code**

**Maximum connections**

**Maximum IOPS**

**Storage space**

Mongos

General-purpose local disk-based

1 vCPU, 2 GB

dds.mongos.mid

1000

N/A

N/A

2 vCPU, 4 GB

dds.mongos.standard

3000

4 vCPU, 8 GB

dds.mongos.large

6000

8 vCPU, 16 GB

dds.mongos.xlarge

9000

8 vCPU, 32 GB

dds.mongos.2xlarge

16000

16 vCPU, 64 GB

dds.mongos.4xlarge

32000

Shard

General-purpose local disk-based

1 vCPU, 2 GB

dds.shard.mid

8000

8000

10 GB to 2000 GB, with a step size of 10 GB.

2 vCPU, 4 GB

dds.shard.standard

4 vCPU, 8 GB

dds.shard.large

8 vCPU, 16 GB

dds.shard.xlarge

8 vCPU, 32 GB

dds.shard.2xlarge

16000

14000

16 vCPU, 64 GB

dds.shard.4xlarge

32000

16000

Dedicated local disk-based

2 vCPU, 16 GB

dds.shard.sn8.xlarge.3

8000

8000

10 GB to 250 GB, with a step size of 10 GB.

4 vCPU, 32 GB

dds.shard.sn8.2xlarge.3

8000

9000

10 GB to 500 GB, with a step size of 10 GB.

8 vCPU, 64 GB

dds.shard.sn8.4xlarge.3

16000

18000

10 GB to 1000 GB, with a step size of 10 GB.

16 vCPU, 128 GB

dds.shard.sn8.8xlarge.3

32000

36000

10 GB to 2000 GB, with a step size of 10 GB.

32 vCPU, 256 GB

dds.shard.sn8.16xlarge.3

64000

72000

10 GB to 3000 GB, with a step size of 10 GB.

ConfigServer

General-purpose local disk-based

1 vCPU, 2 GB

dds.cs.mid

8000

8000

20 GB to 1270 GB, with a step size of 10 GB.

**Note**

-   For more information about how to select storage space based on IOPS, see [Select storage space based on IOPS](/help/en/mongodb/product-overview/instance-types/#section-rn1-tso-lin).
    
-   The storage space of a shard component is the storage space allocated to each of its nodes. For example, if the storage space for a shard component is 20 GB, each primary and secondary node in that shard has 20 GB of storage.
