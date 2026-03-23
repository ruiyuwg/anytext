This topic describes the primary instance specifications for RDS MySQL Standard Edition (formerly X86). It includes information about the latest and legacy specifications to help you understand the configuration of each instance type.

**Note**

-   For more information about the differences between the Yitian Edition and Standard Edition, see [Product types](/help/en/rds/product-overview/product-types).
    
-   Some instance types in this list may be discontinued. The purchase page displays the instance types that are currently available.
    
-   [Serverless ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-serverless#section-f8i-km1-1lc) use RDS Capacity Units (RCUs) to measure resources and do not have traditional CPU and memory specifications. However, to maintain compatibility with existing processes, they are assigned the following specification codes: `mysql.n2.serverless.1c` for the Basic Edition and `mysql.n2.serverless.2c` for the High-availability Edition.
    
-   Some RDS instances in this list no longer support standard SSDs. Higher-performance ESSDs are available instead. For more information, see [\[Discontinuation/Decommission\] Starting July 1, 2022, some RDS instances will no longer support standard SSDs](/help/en/rds/apsaradb-rds-for-mysql/end-of-sale-for-the-standard-ssd-storage-type-for-specific-database-engines-in-apsaradb-rds#concept-2079151).
    
-   The maximum connections listed indicates the maximum number of processes that can connect to an RDS for MySQL instance simultaneously.
    
-   If you cannot select a target instance type when you change specifications, it may be because supported instance types vary by region. The purchase page shows the available instance types.
    
-   RDS for MySQL does not support public bandwidth adjustments.
    

## ApsaraDB RDS for MySQL Basic Edition (with cloud disks)

**Important**

-   **Actual maximum IOPS:** The actual maximum input/output operations per second (IOPS) depends on the storage class, storage space, and instance type. For more information, see [Maximum IOPS formula](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-ire-dbl-kzm).
    
-   **Actual maximum throughput:** The actual maximum throughput depends on the storage class, storage space, and instance type. For more information, see [Maximum throughput formula](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-tao-ouh-382).
    

**Series**

**Family**

**Instance type code**

**CPU and memory**

**Default maximum connections**

**Storage**

**Maximum IOPS of the instance type**

**Maximum IO bandwidth of the instance type (MB/s)**

**Storage space**

Basic Edition

General-purpose

mysql.n2.medium.1

2-core 4 GB

4000

General-purpose instance types do not guarantee maximum IOPS or maximum IO bandwidth. If your business is sensitive to IOPS, select a Dedicated instance type of the High-availability Edition.

-   PL0 ESSD: 10 GB to 32000 GB
    
-   PL1 ESSD: 20 GB to 64000 GB
    
-   Premium ESSD: 10 GB to 64000 GB
    
-   Standard SSD: 20 GB to 6000 GB
    

mysql.n4.medium.1

2-core 8 GB

6000

mysql.n2.large.1

4-core 8 GB

6000

mysql.n4.large.1

4-core 16 GB

8000

mysql.n2.xlarge.1

8-core 16 GB

8000

mysql.n4.xlarge.1

8-core 32 GB

10000

## ApsaraDB RDS for MySQL High-availability Edition (with cloud disks)

**Important**

-   **Actual maximum IOPS:** The actual maximum input/output operations per second (IOPS) depends on the storage class, storage space, and instance type. For more information, see [Maximum IOPS formula](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-ire-dbl-kzm).
    
-   **Actual maximum throughput:** The actual maximum throughput depends on the storage class, storage space, and instance type. For more information, see [Maximum throughput formula](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-tao-ouh-382).
    

**Series**

**Family**

**Instance type code**

**CPU and memory**

**Default maximum connections**

**Storage**

**Maximum IOPS of the instance type**

**Maximum IO bandwidth of the instance type (MB/s)**

**Storage space**

high-availability series

General-purpose

mysql.n2.small.2c

1-core 2 GB

2000

General-purpose instance types do not guarantee maximum IOPS or maximum IO bandwidth. If your business is sensitive to IOPS, select a Dedicated instance type.

-   PL1 ESSD: 20 GB to 64000 GB
    
-   PL2 ESSD: 500 GB to 64000 GB
    
-   PL3 ESSD: 1500 GB to 64000 GB
    
-   Premium ESSD: 10 GB to 64000 GB
    
-   Standard SSD: 20 GB to 6000 GB
    

**Note**

ApsaraDB RDS for MySQL supports automatic storage scale-out when the storage usage reaches a threshold. For more information, see [Automatic storage/performance scaling](/help/en/rds/apsaradb-rds-for-mysql/automatic-expansion-of-cloud-disk/).

mysql.n2.medium.2c

2-core 4 GB

4000

Dedicated

mysql.x2.medium.2c

2-core 4 GB

4000

10000

125

mysql.x4.medium.2c

2-core 8 GB

6000

mysql.x8.medium.2c

2-core 16 GB

8000

mysql.x2.large.2c

4-core 8 GB

6000

20000

187.5

mysql.x4.large.2c

4-core 16 GB

8000

mysql.x8.large.2c

4-core 32 GB

12000

mysql.x2.xlarge.2c

8-core 16 GB

8000

25000

250

mysql.x4.xlarge.2c

8-core 32 GB

10000

mysql.x8.xlarge.2c

8-core 64 GB

16000

mysql.x2.3large.2c

12-core 24 GB

12000

30000

312.5

mysql.x4.3large.2c

12-core 48 GB

15000

mysql.x8.3large.2c

12-core 96 GB

24000

mysql.x2.2xlarge.2c

16-core 32 GB

16000

40000

375

mysql.x4.2xlarge.2c

16-core 64 GB

20000

mysql.x8.2xlarge.2c

16-core 128 GB

32000

mysql.x2.3xlarge.2c

24-core 48 GB

24000

50000

500

mysql.x4.3xlarge.2c

24-core 96 GB

30000

mysql.x8.3xlarge.2c

24-core 192 GB

48000

mysql.x2.4xlarge.2c

32-core 64 GB

32000

60000

625

mysql.x4.4xlarge.2c

32-core 128 GB

40000

mysql.x8.4xlarge.2c

32-core 256 GB

64000

mysql.x2.13large.2c

52-core 96 GB

52000

100000

1000

mysql.x4.13large.2c

52-core 192 GB

65000

mysql.x8.13large.2c

52-core 384 GB

104000

mysql.x2.8xlarge.2c

64-core 128 GB

64000

120000

1025

mysql.x4.8xlarge.2c

64-core 256 GB

80000

150000

mysql.x8.8xlarge.2c

64-core 512 GB

128000

150000

mysql.x2.13xlarge.2c

104-core 192 GB

104000

200000

2000

mysql.x4.13xlarge.2c

104-core 384 GB

130000

200000

2000

mysql.x8.13xlarge.2c

104-core 768 GB

208000

200000

2000

mysql.x4.16xlarge.2c

128-core 512 GB

128000

120000

2560

## ApsaraDB RDS for MySQL Cluster Edition (with cloud disks)

ApsaraDB RDS for MySQL Cluster Edition instances currently support versions 5.7 and 8.0.

**Important**

-   RDS Cluster Edition for ApsaraDB RDS for MySQL is available for purchase in some regions. The following table describes the regions where RDS Cluster Edition for ApsaraDB RDS for MySQL is supported and the estimated release date in other regions. The actual release date prevails.
    
-   **Actual maximum IOPS:** The actual maximum input/output operations per second (IOPS) depends on the storage class, storage space, and instance type. For more information, see [Maximum IOPS formula](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-ire-dbl-kzm).
    
-   **Actual maximum throughput:** The actual maximum throughput depends on the storage class, storage space, and instance type. For more information, see [Maximum throughput formula](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-tao-ouh-382).
    

**Series**

**Family**

**Instance type code**

**CPU and memory**

**Default maximum connections**

**Storage**

**Maximum IOPS of the instance type**

**Maximum IO bandwidth of the instance type (MB/s)**

**Storage space**

Cluster Edition

General-purpose

mysql.n2.medium.xc

2-core 4 GB

4000

General-purpose instance types do not guarantee maximum IOPS or maximum IO bandwidth. If your business is sensitive to IOPS, select a Dedicated instance type.

-   PL1 ESSD: 20 GB to 64000 GB
    
-   PL2 ESSD: 500 GB to 64000 GB
    
-   PL3 ESSD: 1500 GB to 64000 GB
    
-   Premium ESSD: 10 GB to 64,000 GB
    

**Note**

ApsaraDB RDS for MySQL supports automatic storage scale-out when the storage usage reaches a threshold. For more information, see [Automatic storage/performance scaling](/help/en/rds/apsaradb-rds-for-mysql/automatic-expansion-of-cloud-disk/).

mysql.n4.medium.xc

2-core 8 GB

6000

mysql.n8.medium.xc

2-core 16 GB

8000

mysql.n2.large.xc

4-core 8 GB

6000

mysql.n4.large.xc

4-core 16 GB

8000

mysql.n8.large.xc

4-core 32 GB

12000

mysql.n2.xlarge.xc

8-core 16 GB

12000

mysql.n4.xlarge.xc

8-core 32 GB

12000

mysql.n8.xlarge.xc

8-core 64 GB

16000

Dedicated

mysql.x2.medium.xc

2-core 4 GB

4000

10000

125

mysql.x4.medium.xc

2-core 8 GB

6000

mysql.x8.medium.xc

2-core 16 GB

8000

mysql.x2.large.xc

4-core 8 GB

6000

20000

187.5

mysql.x4.large.xc

4-core 16 GB

8000

mysql.x8.large.xc

4-core 32 GB

12000

mysql.x2.xlarge.xc

8-core 16 GB

12000

25000

250

mysql.x4.xlarge.xc

8-core 32 GB

12000

mysql.x8.xlarge.xc

8-core 64 GB

16000

mysql.x2.3large.xc

12-core 24 GB

12000

30000

312.5

mysql.x4.3large.xc

12-core 48 GB

15000

mysql.x8.3large.xc

12-core 96 GB

24000

mysql.x2.2xlarge.xc

16-core 32 GB

16000

40000

375

mysql.x4.2xlarge.xc

16-core 64 GB

20000

mysql.x8.2xlarge.xc

16-core 128 GB

32000

mysql.x2.3xlarge.xc

24-core 48 GB

24000

50000

500

mysql.x4.3xlarge.xc

24-core 96 GB

30000

mysql.x8.3xlarge.xc

24-core 192 GB

48000

mysql.x2.4xlarge.xc

32-core 64 GB

32000

60000

625

mysql.x4.4xlarge.xc

32-core 128 GB

40000

mysql.x8.4xlarge.xc

32-core 256 GB

64000

mysql.x2.13large.xc

52-core 96 GB

52000

100000

1000

mysql.x4.13large.xc

52-core 192 GB

65000

mysql.x8.13large.xc

52-core 384 GB

104000

mysql.x2.8xlarge.xc

64-core 128 GB

64000

120000

1025

mysql.x4.8xlarge.xc

64-core 256 GB

80000

150000

1025

mysql.x8.8xlarge.xc

64-core 512 GB

128000

150000

1000

mysql.x2.13xlarge.xc

104-core 192 GB

104000

200000

2000

mysql.x4.13xlarge.xc

104-core 384 GB

130000

mysql.x8.13xlarge.xc

104-core 768 GB

208000

## ApsaraDB RDS for MySQL High-availability Edition (with Premium Local SSDs)

Effective November 29, 2024, the maximum IOPS for ApsaraDB RDS for MySQL instances with Premium Local SSDs is increased to 150,000. For more information, see [\[Product/Feature Change\] Maximum IOPS increase for ApsaraDB RDS for MySQL instances with Premium Local SSDs](/help/en/rds/apsaradb-rds-for-mysql/the-maximum-iops-of-apsaradb-for-mysql-instances-with-local-disks-is-increased).

**Important**

If your RDS instance uses an instance type that provides 16 cores or more and you need a storage capacity of more than 8,000 GB, you can submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm) to apply for a quota. After your application is approved, the storage capacity of your RDS instance can reach up to 16,000 GB.

**Series**

**Family**

**Instance type code**

**CPU and memory**

**Default maximum connections**

**Storage**

**Maximum IOPS of the instance type**

**Storage space**

high-availability series

General-purpose

rds.mysql.t1.small

1-core 1 GB

300

1200

5 GB to 3000 GB

rds.mysql.s1.small

1-core 2 GB

600

2000

rds.mysql.s2.large

2-core 4 GB

1200

4000

rds.mysql.s2.xlarge

2-core 8 GB

2000

6000

rds.mysql.s3.large

4-core 8 GB

2000

8000

rds.mysql.m1.medium

4-core 16 GB

4000

14000

rds.mysql.c1.large

8-core 16 GB

4000

20000

5 GB to 4000 GB

rds.mysql.c1.xlarge

8-core 32 GB

8000

28000

rds.mysql.c2.xlarge

16-core 64 GB

16000

40000

20 GB to 8000 GB

rds.mysql.c2.xlp2

16-core 96 GB

24000

40000

Dedicated

mysql.x8.medium.2

2-core 16 GB

2500

15000

20 GB to 3000 GB

mysql.x4.large.2

4-core 16 GB

2500

30000

mysql.x8.large.2

4-core 32 GB

5000

40000

mysql.x4.xlarge.2

8-core 32 GB

5000

45000

20 GB to 4000 GB

mysql.x8.xlarge.2

8-core 64 GB

10000

50000

mysql.x4.2xlarge.2

16-core 64 GB

10000

60000

20 GB to 8000 GB

mysql.x8.2xlarge.2

16-core 128 GB

20000

60000

mysql.x4.4xlarge.2

32-core 128 GB

20000

80000

mysql.x8.4xlarge.2

32-core 256 GB

40000

100000

mysql.x4.8xlarge.2

64-core 256 GB

40000

150000

mysql.x8.8xlarge.2

64-core 512 GB

80000

150000

Dedicated host

rds.mysql.st.h43

60-core 470 GB

100000

150000

rds.mysql.st.v52

90-core 720 GB

150000

150000

## Phased-out ApsaraDB RDS for MySQL instance types

The following table lists phased-out ApsaraDB RDS for MySQL instance types. When you create an RDS instance, you cannot select a phased-out instance type. You can upgrade phased-out instance types to some available instance types. You cannot generate an order for an RDS instance that uses a phased-out instance type. For example, you cannot generate an order to change the storage capacity of an RDS instance that uses a phased-out instance type. We recommend that you use the most recent instance type. For more information about how to change the storage capacity of an RDS instance, see [Change instance configurations](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance).

**Note**

Phased-out instance types cannot support some new features. We recommend that you upgrade a phased-out instance type to the most recent instance type.

**Instance type**

**Number of CPU cores**

**Memory capacity**

**Maximum number of connections**

rds.mys2.small

2

240 MB

60

rds.mys2.mid

4

600 MB

150

rds.mys2.standard

6

1,200 MB

300

rds.mys2.large

8

2,400 MB

600

rds.mys2.xlarge

9

6,000 MB

1,500

rds.mys2.2xlarge

10

12,000 MB

2,000

rds.mys2.4xlarge

11

24,000 MB

2,000

rds.mys2.8xlarge

13

48,000 MB

2,000

rds.mysql.st.d13

30

220 GB

64,000

mysql.x8.medium.3

2

16 GB

2,500

mysql.x4.large.3

4

16 GB

2,500

mysql.x8.large.3

4

32 GB

5,000

mysql.x4.xlarge.3

8

32 GB

5,000

mysql.x8.xlarge.3

8

64 GB

10,000

mysql.x4.2xlarge.3

16

64 GB

10,000

mysql.x8.2xlarge.3

16

128 GB

20,000

mysql.x4.4xlarge.3

32

128 GB

20,000

mysql.x8.4xlarge.3

32

256 GB

40,000

mysql.st.8xlarge.3

60

470 GB

100,000

mysql.n2.2xlarge.1

16

32 GB

10,000

mysql.n4.2xlarge.1

16

64 GB

15,000

mysql.n8.2xlarge.1

16

128 GB

20,000

mysql.x2.3xlarge2c

24

48 GB

24,000

mysql.n4.4xlarge.1

32

128 GB

20,000

mysql.n8.4xlarge.1

32

256 GB

64,000

mysql.n4.8xlarge.1

56

224 GB

64,000

mysql.n8.8xlarge.1

56

480 GB

64,000

mysql.n1.micro.1

1

1 GB

2,000

mysql.n2.small.1

1

2 GB

2,000
