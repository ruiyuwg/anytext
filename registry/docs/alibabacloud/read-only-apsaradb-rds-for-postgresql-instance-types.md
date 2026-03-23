This topic describes the read-only instance types for ApsaraDB RDS for PostgreSQL and their configurations.

**Note**

ApsaraDB RDS for PostgreSQL read-only instances support two billing methods: subscription and pay-as-you-go. For more information, see [Read-only instance pricing](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#section-8h0-4ki-ap2). The prices that are displayed on the purchase page are final.

## **Specifications checklist**

**Important**

-   For more information about the differences between Standard Edition and Yitian Edition, see [Product types](/help/en/rds/product-overview/product-types).
    
-   Actual maximum IOPS: This value is affected by the storage class, storage capacity, and instance type. For more information, see [Maximum IOPS formula](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#1a3f94a77fpub).
    
-   Actual maximum throughput: This value is affected by the storage class, storage capacity, and instance type. For more information, see [Maximum throughput formula](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#1a3f94a77fpub).
    

### **Basic series instance types**

## Standard Edition instance types

#### **General-purpose**

**Instance type code**

**CPU and memory**

**Maximum connections**

**Maximum IOPS**

**Maximum I/O bandwidth**

**(MB/s)**

**Storage space**

pgro.n2.2c.1m

2 cores, 4 GB

400

The maximum IOPS and maximum I/O bandwidth cannot be guaranteed. If your business is sensitive to IOPS, select a Dedicated instance type.

-   PL1 ESSD: 20 GB to 64000 GB
    
-   PL2 ESSD: 500 GB to 64000 GB
    
-   PL3 ESSD: 1500 GB to 64000 GB
    
-   Premium performance disk: 10 GB to 64000 GB
    

pgro.n4.2c.1m

2 cores, 8 GB

800

pgro.n2.4c.1m

4 cores, 8 GB

800

pgro.n4.4c.1m

4 cores, 16 GB

1600

pgro.n2.8c.1m

8 cores, 16 GB

1600

pgro.n4.8c.1m

8 cores, 32 GB

3200

#### **Dedicated**

**Note**

Due to product optimization and resource planning adjustments, some instance types will be discontinued. For details, see \[Discontinued\] Some ApsaraDB RDS for PostgreSQL instance types will stop being sold starting February 28, 2026.

**Instance type code**

**CPU and memory**

**Maximum connections**

**Maximum IOPS**

**Maximum I/O bandwidth**

**(MB/s)**

**Storage space**

pgro.x2.medium.1c

2 cores, 4 GB

400

10000

128

-   PL1 ESSD: 20 GB to 64000 GB
    
-   PL2 ESSD: 500 GB to 64000 GB
    
-   PL3 ESSD: 1500 GB to 64000 GB
    
-   Premium performance disk: 10 GB to 64000 GB
    

pgro.x4.medium.1c

2 cores, 8 GB

800

10000

128

pgro.x8.medium.1c

2 cores, 16 GB

1600

10000

128

pgro.x2.large.1c

4 cores, 8 GB

800

20000

192

pgro.x4.large.1c

4 cores, 16 GB

1600

20000

192

pgro.x8.large.1c

4 cores, 32 GB

3200

20000

192

pgro.x2.xlarge.1c

8 cores, 16 GB

1600

25000

256

pgro.x4.xlarge.1c

8 cores, 32 GB

3200

25000

256

pgro.x8.xlarge.1c

8 cores, 64 GB

6400

25000

256

pgro.x2.3large.1c

12 cores, 24 GB

2400

30000

320

pgro.x4.3large.1c

12 cores, 48 GB

4800

30000

320

pgro.x8.3large.1c

12 cores, 96 GB

9600

30000

320

pgro.x2.2xlarge.1c

16 cores, 32 GB

3200

40000

384

pgro.x4.2xlarge.1c

16 cores, 64 GB

6400

40000

384

pgro.x8.2xlarge.1c

16 cores, 128 GB

12800

40000

384

pgro.x2.3xlarge.1c

24 cores, 48 GB

4800

50000

512

pgro.x4.3xlarge.1c

24 cores, 96 GB

9600

50000

512

pgro.x8.3xlarge.1c

24 cores, 192 GB

19200

50000

512

pgro.x2.4xlarge.1c

32 cores, 64 GB

6400

60000

640

pgro.x4.4xlarge.1c

32 cores, 128 GB

12800

60000

640

pgro.x8.4xlarge.1c

32 cores, 256 GB

25600

60000

640

pgro.x2.13large.1c

52 cores, 96 GB

9600

100000

1024

pgro.x4.13large.1c

52 cores, 192 GB

19200

100000

1024

pgro.x8.13large.1c

52 cores, 384 GB

38400

100000

1024

pgro.x2.8xlarge.1c

64 cores, 128 GB

12800

120000

1280

pgro.x4.8xlarge.1c

64 cores, 256 GB

25600

120000

1280

pgro.x8.8xlarge.1c

64 cores, 512 GB

51200

120000

1280

pgro.x2.12xlarge.1c

96 cores, 192 GB

19200

240000

2048

pgro.x4.12xlarge.1c

96 cores, 384 GB

38400

240000

2048

pgro.x8.12xlarge.1c

96 cores, 768 GB

76800

240000

2048

pgro.x2.13xlarge.1c

104 cores, 192 GB

19200

200000

2048

pgro.x4.13xlarge.1c

104 cores, 384 GB

38400

200000

2048

pgro.x8.13xlarge.1c

104 cores, 768 GB

76800

200000

2048

pgro.x2.16xlarge.1c

128 cores, 256 GB

25600

320000

2560

pgro.x4.16xlarge.1c

128 cores, 512 GB

51200

320000

2560

pgro.x8.16xlarge.1c

128 cores, 1024 GB

102400

320000

2560

pgro.x2.24xlarge.1c

192 cores, 384 GB

38400

500000

4096

pgro.x4.24xlarge.1c

192 cores, 768 GB

76800

500000

4096

pgro.x8.24xlarge.1c

192 cores, 1536 GB

153600

500000

4096

## Yitian Edition instance types

#### **General-purpose**

**Instance Type**

**CPU and memory**

**Maximum connections**

**Maximum IOPS**

**Maximum I/O bandwidth**

**(MB/s)**

**Storage space**

pgro.n2m.2c.1m

2 cores, 4 GB

400

The maximum IOPS and maximum I/O bandwidth cannot be guaranteed. If your business is sensitive to IOPS, select a Dedicated instance type.

-   PL1 ESSD: 20 GB to 64000 GB
    
-   PL2 ESSD: 500 GB to 64000 GB
    
-   PL3 ESSD: 1500 GB to 64000 GB
    
-   Premium performance disk: 10 GB to 64000 GB
    

pgro.n2m.4c.1m

4 cores, 8 GB

800

pgro.n2m.8c.1m

8 cores, 16 GB

1600

pgro.n4m.2c.1m

2 cores, 8 GB

800

pgro.n4m.4c.1m

4 cores, 16 GB

1600

pgro.n4m.8c.1m

8 cores, 32 GB

3200

#### **Dedicated**

**Instance type code**

**CPU and memory**

**Maximum connections**

**Maximum IOPS**

**Maximum I/O bandwidth**

**(MB/s)**

**Storage space**

pgro.x2m.medium.1c

2 cores, 4 GB

400

20000

192

-   PL1 ESSD: 20 GB to 64000 GB
    
-   PL2 ESSD: 500 GB to 64000 GB
    
-   PL3 ESSD: 1500 GB to 64000 GB
    
-   Premium performance disk: 10 GB to 64000 GB
    

pgro.x2m.large.1c

4 cores, 8 GB

800

40000

256

pgro.x2m.xlarge.1c

8 cores, 16 GB

1600

50000

384

pgro.x2m.2xlarge.1c

16 cores, 32 GB

3200

80000

640

pgro.x2m.4xlarge.1c

32 cores, 64 GB

6400

125000

1024

pgro.x2m.8xlarge.1c

64 cores, 128 GB

12800

250000

2048

pgro.x4m.medium.1c

2 cores, 8 GB

800

20000

192

pgro.x4m.large.1c

4 cores, 16 GB

1600

40000

256

pgro.x4m.xlarge.1c

8 cores, 32 GB

3200

50000

384

pgro.x4m.2xlarge.1c

16 cores, 64 GB

6400

80000

640

pgro.x4m.4xlarge.1c

32 cores, 128 GB

12800

125000

1024

pgro.x4m.8xlarge.1c

64 cores, 256 GB

25600

250000

2048

pgro.x8m.medium.1c

2 cores, 16 GB

1600

20000

192

pgro.x8m.large.1c

4 cores, 32 GB

3200

40000

256

pgro.x8m.xlarge.1c

8 cores, 64 GB

6400

50000

384

pgro.x8m.2xlarge.1c

16 cores, 128 GB

12800

80000

640

pgro.x8m.4xlarge.1c

32 cores, 256 GB

25600

125000

1024

pgro.x8m.8xlarge.1c

64 cores, 512 GB

51200

250000

2048

## Legacy ApsaraDB RDS for PostgreSQL read-only instance types

The following table lists the legacy read-only instance types for ApsaraDB RDS for PostgreSQL. You can no longer create instances of these types. We recommend that you use the latest instance types.

Specification history

**Specification Code**

**CPU**

**Memory**

**Maximum connections**

**Maximum IOPS**

pgro.n2.small.1c

1 core

2 GB

200

See [List of read-only instance types](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#section-uhl-xb9-n99)

pgro.n2.medium.1c

2 cores

4 GB

400

pg.x8.xlarge.2

8 cores

64 GB

10000

18000

pg.x8.2xlarge.2

16 cores

128 GB

12000

36000

pg.x4.xlarge.2

8 cores

32 GB

5000

9000

pg.x4.2xlarge.2

16 cores

64 GB

10000

18000

pg.x4.4xlarge.2

32 cores

128 GB

12000

36000

rds.pg.st.h43

60 cores

470 GB

4000

50000
