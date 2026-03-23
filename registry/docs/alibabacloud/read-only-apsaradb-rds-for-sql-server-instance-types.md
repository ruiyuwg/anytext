This topic provides an overview of the instance types supported for read-only ApsaraDB RDS for SQL Server instances. The overview includes the most recent instance types and specifications for each instance type.

**Note**

-   Read-only ApsaraDB RDS for SQL Server instances support two billing methods: [subscription and pay-as-you-go](/help/en/rds/apsaradb-rds-for-sql-server/billing-1/) (Serverless is not supported yet). The actual prices are subject to the sales page.
    
-   ApsaraDB RDS for SQL Server instances with disk-based storage are built on Elastic Compute Service (ECS). Different instances may use different [ECS instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb), which may lead to performance differences.
    

## Read-only ApsaraDB RDS for SQL Server instances

**Note**

The **actual maximum IOPS and maximum I/O throughput** during runtime are determined by the storage class, storage capacity, and instance type. The final value is the **minimum** of the "instance type limit" and the "storage limit".

-   The **instance type limit**: The values listed in the following table only reflect the limits of maximum IOPS and maximum I/O throughput based on the instance type, which are preset based on the hardware performance of the instance type.
    
-   The **storage limit**: For the impact of storage on maximum IOPS and maximum I/O throughput, you can calculate using the [formula for calculating maximum IOPS](/help/en/rds/product-overview/read-only-apsaradb-rds-instance-types#section-uhl-xb9-n99) or the [formula for calculating maximum throughput](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#af0e23b6e5t6w).
    

**Instance version**

[**Instance type**](/help/en/rds/product-overview/instance-families)

**Instance type code**

**CPU and memory**

**Maximum connections**

**Maximum IOPS**

**Maximum I/O throughput (MB/S)**

**Storage capacity**

-   SQL Server 2022 EE (Always On)
    
-   SQL Server 2019 EE (Always On)
    
-   SQL Server 2017 EE (Always On)
    

General-purpose

rds.mssql.s2.large

2 cores, 4 GB memory

Unlimited

10000

128

20GB-32000GB

rds.mssql.s3.large

4 cores, 8 GB memory

20000

192

rds.mssql.c1.large

8 cores, 16 GB memory

25000

256

rds.mssql.s2.xlarge

2 cores, 8 GB memory

10000

128

rds.mssql.m1.medium

4 cores, 16 GB memory

20000

192

rds.mssql.c1.xlarge

8 cores, 32 GB memory

25000

256

rds.mssql.c2.xlarge

16 cores, 64 GB memory

40000

384

Dedicated

mssql.x4.medium.ro

2 cores, 8 GB memory

10000

128

mssql.x4.large.ro

4 cores, 16 GB memory

20000

192

mssql.x4.xlarge.ro

8 cores, 32 GB memory

25000

256

mssql.x4.2xlarge.ro

16 cores, 64 GB memory

40000

384

mssql.x4.4xlarge.ro

32 cores, 128 GB memory

60000

640

mssql.x4.8xlarge.ro

64 cores, 256 GB memory

120000

1280

mssql.x8.medium.ro

2 cores, 16 GB memory

10000

128

mssql.x8.large.ro

4 cores, 32 GB memory

20000

192

mssql.x8.xlarge.ro

8 cores, 64 GB memory

25000

256

mssql.x8.2xlarge.ro

16 cores, 128 GB memory

40000

384

mssql.x8.4xlarge.ro

32 cores, 256 GB memory

60000

640

mssql.x8.7xlarge.ro

56 cores, 480 GB memory

120000

1280

mssql.x8.8xlarge.ro

64 cores, 512 GB memory

120000

1280

## **References**

-   [Introduction to read-only ApsaraDB RDS for SQL Server instances](/help/en/rds/apsaradb-rds-for-sql-server/read-only-instances-and-read-write-splitting/)
    
-   [Create a read-only ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-read-only-apsaradb-rds-for-sql-server-instance)
