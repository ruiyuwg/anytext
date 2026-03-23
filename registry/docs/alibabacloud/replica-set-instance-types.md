This topic describes the instance types available for ApsaraDB for MongoDB replica set instances.

#### **Note**

-   The memory specified for an instance type includes memory used by MongoDB management services, database services, and the underlying operating system. This includes memory reserved for the BIOS, kernel, and hypervisor. Therefore, the available memory is less than the memory specified for the instance type.
    
-   Some instance types were upgraded on May 14, 2024. If the maximum connections for your instance does not match the value specified in this document, restart the instance to use the adjusted maximum connections. For more information, see [Notification: Upgrade to Maximum Connections for Some ApsaraDB for MongoDB Instance Types](/help/en/mongodb/product-overview/notice-the-maximum-number-of-connections-to-apsaradb-for-mongodb-instances-of-specific-specifications-is-increased).
    

**Important**

**A single collection file cannot exceed 16 TB. Otherwise, the instance becomes unavailable.**

## Cloud Disk Version

The following database versions are supported:

-   MongoDB 8.0
    
-   MongoDB 7.0
    
-   MongoDB 6.0
    
-   MongoDB 5.0
    
-   MongoDB 4.4
    

**Note**

For more information about the maximum IOPS and throughput of different disk types, see [ESSD disks](/help/en/ecs/user-guide/essds) and [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

**Instance type class**

**Specifications**

**Instance type code**

**Maximum connections**

**Maximum IOPS**

**Maximum throughput (MB/s)**

**Storage space**

Dedicated disk version

2-core 8 GB

mdb.shard.4x.large.d

5000

min{1800 + 50 × Storage space, 10000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 128, Maximum throughput of the selected disk type}

-   PL1 ESSD: 20 GB to 16000 GB, with a step size of 10 GB.
    
-   PL2 ESSD: 470 GB to 16000 GB, with a step size of 10 GB.
    
-   PL3 ESSD: 1270 GB to 16000 GB, with a step size of 10 GB.
    
-   ESSD AutoPL disk: 40 GB to 16000 GB, with a step size of 10 GB.
    

2-core 16 GB

mdb.shard.8x.large.d

8000

4-core 8 GB

mdb.shard.2x.xlarge.d

8000

min{1800 + 50 × Storage space, 20000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 192, Maximum throughput of the selected disk type}

4-core 16 GB

mdb.shard.4x.xlarge.d

8000

4-core 32 GB

mdb.shard.8x.xlarge.d

12000

8-core 16 GB

mdb.shard.2x.2xlarge.d

12000

min{1800 + 50 × Storage space, 25000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 256, Maximum throughput of the selected disk type}

8-core 32 GB

mdb.shard.4x.2xlarge.d

16000

8-core 64 GB

mdb.shard.8x.2xlarge.d

16000

16-core 32 GB

mdb.shard.2x.4xlarge.d

16000

min{1800 + 50 × Storage space, 40000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 384, Maximum throughput of the selected disk type}

16-core 64 GB

mdb.shard.4x.4xlarge.d

32000

16-core 128 GB

mdb.shard.8x.4xlarge.d

32000

32-core 64 GB

mdb.shard.2x.8xlarge.d

32000

min{1800 + 50 × Storage space, 60000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 640, Maximum throughput of the selected disk type}

32-core 128 GB

mdb.shard.4x.8xlarge.d

96000

32-core 256 GB

mdb.shard.8x.8xlarge.d

96000

64-core 128 GB

mdb.shard.2x.16xlarge.d

96000

min{1800 + 50 × Storage space, 300000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 2048, Maximum throughput of the selected disk type}

64-core 256 GB

mdb.shard.4x.16xlarge.d

128000

64-core 512 GB

mdb.shard.8x.16xlarge.d

128000

General-purpose disk version

2-core 4 GB

mdb.shard.2x.large.c

3000

min{1800 + 50 × Storage space, 10500, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 128, Maximum throughput of the selected disk type}

2-core 8 GB

mdb.shard.4x.large.c

3000

4-core 8 GB

mdb.shard.2x.xlarge.c

6000

min{1800 + 50 × Storage space, 21000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 192, Maximum throughput of the selected disk type}

4-core 16 GB

mdb.shard.4x.xlarge.c

6000

8-core 16 GB

mdb.shard.2x.2xlarge.c

12000

min{1800 + 50 × Storage space, 26250, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 256, Maximum throughput of the selected disk type}

8-core 32 GB

mdb.shard.4x.2xlarge.c

16000

16-core 32 GB

mdb.shard.2x.4xlarge.c

16000

min{1800 + 50 × Storage space, 42000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 384, Maximum throughput of the selected disk type}

16-core 64 GB

mdb.shard.4x.4xlarge.c

32000

32-core 64 GB

mdb.shard.2x.8xlarge.c

32000

min{1800 + 50 × Storage space, 50000, Maximum IOPS of the selected disk type}

min{120 + 0.5 × Storage space, 640, Maximum throughput of the selected disk type}

The 64-core 128 GB, 64-core 256 GB, and 64-core 512 GB Dedicated disk-based instance types are available only in Zones A, B, and C of the Singapore region.

General-purpose disk-based instance types are available in the following regions and zones:

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
    
-   General-purpose disk-based instance types do not support disk encryption.
    
-   **General-purpose disk-based instance types are not available in all regions.** If you cannot find the corresponding instance types in the console for a region, you can [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to request access.
    

## Local disk version

The following database versions are supported:

-   MongoDB 4.2
    
-   MongoDB 4.0
    
-   MongoDB 3.4 (discontinued)
    

**Specification Type**

**Specifications**

**Instance type code**

**Maximum connections**

**Maximum IOPS**

**Storage space**

General-purpose local disk version

1-core 2 GB

dds.mongo.mid

1000

8000

10 GB to 2000 GB, with a step size of 10 GB.

2-core 4 GB

dds.mongo.standard

3000

8000

4-core 8 GB

dds.mongo.large

6000

8000

8-core 16 GB

dds.mongo.xlarge

9000

8000

8-core 32 GB

dds.mongo.2xlarge

16000

14000

16-core 64 GB

dds.mongo.4xlarge

32000

16000

Dedicated local disk version

2-core 16 GB

mongo.x8.medium

8000

8000

10 GB to 3000 GB, with a step size of 10 GB.

4-core 32 GB

mongo.x8.large

8000

9000

8-core 64 GB

mongo.x8.xlarge

16000

18000

16-core 128 GB

mongo.x8.2xlarge

32000

36000

32-core 256 GB

mongo.x8.4xlarge

64000

72000

Dedicated physical server

60-core 440 GB

dds.mongo.2xmonopolize

100000

100000

2000 GB to 6000 GB, with a step size of 10 GB.

90-core 660 GB

dds.mongo.3xmonopolize

100000

100000

2000 GB to 6000 GB, with a step size of 10 GB.
