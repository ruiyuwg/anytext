This topic describes the available instance types and specifications for read-only ApsaraDB RDS for MySQL instances based on the x86 architecture.

To create a read-only ApsaraDB RDS for MySQL instance, see [Create a read-only RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-read-only-apsaradb-rds-for-mysql-instance#concept-ghp-wq5-vdb).

**Note**

-   Read-only ApsaraDB RDS for MySQL instances are available with the subscription and pay-as-you-go billing methods. For more information, see [Read-only instance pricing](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#section-8h0-4ki-ap2). The prices on the official purchase page prevail.
    
-   The maximum connections value specifies the maximum number of concurrent connections to the RDS instance.
    
-   General-purpose instance families do not guarantee maximum IOPS or maximum I/O bandwidth. If your workload is sensitive to IOPS, choose a dedicated instance family.
    

## RDS Basic Edition instances with cloud disks

**Important**

**Actual maximum I/O bandwidth for cloud disks:** This value depends on the storage type, storage capacity, and instance type. For more information, see [Maximum throughput calculation formula](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#af0e23b6e5t6w).

**RDS edition**

**Instance family**

**Instance type**

**CPU and memory**

**Maximum connections**

**Storage**

**Maximum IOPS**

**Maximum I/O bandwidth (Mbit/s)**

**Storage capacity**

Basic Edition

General-purpose

mysqlro.n2.small.c

1 core, 2 GB

2,000

General-purpose instance families do not guarantee maximum IOPS or maximum I/O bandwidth. If your workload is sensitive to IOPS, choose a dedicated instance family.

-   PL1 ESSD: 20 GB to 64,000 GB
    
-   PL2 ESSD: 500 GB to 64,000 GB
    
-   PL3 ESSD: 1,500 GB to 64,000 GB
    
-   Premium ESSD: 10 GB to 64,000 GB
    
-   Standard SSD: 20 GB to 6,000 GB
    

mysqlro.n2.medium.c

2 cores, 4 GB

4,000

mysqlro.n4.medium.c

2 cores, 8 GB

6,000

mysqlro.n8.medium.c

2 cores, 16 GB

8,000

mysqlro.n2.large.c

4 cores, 8 GB

6,000

mysqlro.n4.large.c

4 cores, 16 GB

8,000

mysqlro.n8.large.c

4 cores, 32 GB

12,000

mysqlro.n2.xlarge.c

8 cores, 16 GB

8,000

mysqlro.n4.xlarge.c

8 cores, 32 GB

10,000

mysqlro.n8.xlarge.c

8 cores, 64 GB

16,000

## RDS High-availability Edition instances with Premium Local SSDs

**Important**

For instances with 16 or more cores, if you require more than 12,000 GB of storage capacity, you can submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm). After your request is approved, the storage capacity can be increased to a maximum of 16,000 GB.

**RDS edition**

**Major engine version**

**Instance family**

**Instance type**

**CPU and memory**

**Maximum connections**

**Maximum IOPS**

**Storage capacity**

High-availability Edition

8.0, 5.7, and 5.6

General-purpose

rds.mysql.t1.small

1 core, 1 GB

300

1,200

5 GB to 4,000 GB

rds.mysql.s1.small

1 core, 2 GB

600

2,000

rds.mysql.s2.large

2 cores, 4 GB

2000

4,000

rds.mysql.s2.xlarge

2 cores, 8 GB

2,000

6,000

rds.mysql.s3.large

4 cores, 8 GB

2,000

8,000

rds.mysql.m1.medium

4 cores, 16 GB

4,000

14,000

rds.mysql.c1.large

8 cores, 16 GB

4,000

20,000

5 GB to 5,000 GB

rds.mysql.c1.xlarge

8 cores, 32 GB

8,000

28,000

rds.mysql.c2.xlarge

16 cores, 64 GB

16,000

40,000

20 GB to 12,000 GB

rds.mysql.c2.xlp2

16 cores, 96 GB

24,000

40,000

Dedicated

mysqlro.x8.medium.1

2 cores, 16 GB

2,500

15,000

20 GB to 4,000 GB

mysqlro.x4.large.1

4 cores, 16 GB

2,500

30,000

mysqlro.x8.large.1

4 cores, 32 GB

5,000

40,000

mysqlro.x4.xlarge.1

8 cores, 32 GB

5,000

45,000

20 GB to 5,000 GB

mysqlro.x8.xlarge.1

8 cores, 64 GB

10,000

50,000

mysqlro.x4.2xlarge.1

16 cores, 64 GB

10,000

60,000

20 GB to 12,000 GB

mysqlro.x8.2xlarge.1

16 cores, 128 GB

20,000

60,000

mysqlro.x4.4xlarge.1

32 cores, 128 GB

20,000

80,000

-   RDS for MySQL 5.7 and 8.0 instances in Singapore and China (Hong Kong) regions: 20 GB to 16,000 GB
    
-   RDS for MySQL 5.7 and 8.0 instances in other regions: 20 GB to 24,000 GB
    
-   RDS for MySQL 5.6 instances: 20 GB to 16,000 GB
    

mysqlro.x8.4xlarge.1

32 cores, 256 GB

40,000

100,000

mysqlro.x4.8xlarge.1

64 cores, 256 GB

40,000

150,000

mysqlro.x8.8xlarge.1

64 cores, 512 GB

80,000

150,000

Dedicated host

rds.mysql.st.h43

60 cores, 470 GB

100,000

150,000

20 GB to 12,000 GB

rds.mysql.st.v52

90 cores, 720 GB

150,000

150,000

## RDS High-availability Edition instances with cloud disks

**Important**

-   **Actual maximum IOPS:** The actual maximum IOPS depends on the storage type, storage capacity, and instance type. For more information, see [Maximum IOPS](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-ire-dbl-kzm).
    
-   **Actual maximum I/O bandwidth:** The actual maximum I/O bandwidth depends on the storage type, storage capacity, and instance type. For more information, see [Maximum throughput](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-tao-ouh-382).
    

**RDS Edition**

**Major engine version**

**Instance family**

**Instance type**

**CPU and memory**

**Maximum connections**

**Storage**

**Maximum IOPS**

**Maximum I/O bandwidth(Mbit/s)**

**Storage capacity**

High-availability Edition

8.0, 5.7, and 5.6

General-purpose

mysqlro.n2.small.1c

1 core, 2 GB

2,000

General-purpose instance families do not guarantee maximum IOPS or maximum I/O bandwidth. If your workload is sensitive to IOPS, choose a dedicated instance family.

-   PL1 ESSD: 20 GB to 64,000 GB
    
-   PL2 ESSD: 500 GB to 64,000 GB
    
-   PL3 ESSD: 1,500 GB to 64,000 GB
    
-   Premium ESSD: 10 GB to 64,000 GB
    
-   Standard SSD: 20 GB to 6,000 GB
    

Dedicated

mysqlro.x2.medium.1c

2 cores, 4 GB

4,000

10,000

125

mysqlro.x4.medium.1c

2 cores, 8 GB

6,000

mysqlro.x8.medium.1c

2 cores, 16 GB

8,000

mysqlro.x2.large.1c

4 cores, 8 GB

6,000

20,000

187.5

mysqlro.x4.large.1c

4 cores, 16 GB

8,000

mysqlro.x8.large.1c

4 cores, 32 GB

12,000

mysqlro.x2.xlarge.1c

8 cores, 16 GB

8,000

25,000

250

mysqlro.x4.xlarge.1c

8 cores, 32 GB

10,000

mysqlro.x8.xlarge.1c

8 cores, 64 GB

16,000

mysqlro.x2.3large.1c

12 cores, 24 GB

12,000

30,000

312.5

mysqlro.x4.3large.1c

12 cores, 48 GB

30,000

mysqlro.x8.3large.1c

12 cores, 96 GB

24,000

mysqlro.x2.2xlarge.1c

16 cores, 32 GB

16,000

40,000

375

mysqlro.x4.2xlarge.1c

16 cores, 64 GB

20,000

mysqlro.x8.2xlarge.1c

16 cores, 128 GB

32,000

mysqlro.x2.3xlarge.1c

24 cores, 48 GB

24,000

50,000

500

mysqlro.x4.3xlarge.1c

24 cores, 96 GB

30,000

mysqlro.x8.3xlarge.1c

24 cores, 192 GB

48,000

mysqlro.x2.4xlarge.1c

32 cores, 64 GB

32,000

60,000

625

mysqlro.x4.4xlarge.1c

32 cores, 128 GB

40,000

mysqlro.x8.4xlarge.1c

32 cores, 256 GB

64,000

mysqlro.x2.13large.1c

52 cores, 96 GB

52,000

100,000

1,000

mysqlro.x4.13large.1c

52 cores, 192 GB

130,000

mysqlro.x8.13large.1c

52 cores, 384 GB

104,000

mysqlro.x8.8xlarge.1c

64 cores, 512 GB

128,000

150,000

1,000

mysqlro.x2.13xlarge.1c

104 cores, 192 GB

104,000

20,000

2,000

mysqlro.x4.13xlarge.1c

104 cores, 384 GB

130,000

mysqlro.x8.13xlarge.1c

104 cores, 768 GB

208,000

mysqlro.x4.16xlarge.1c

128 cores, 512 GB

128,000

300,000

2,560
