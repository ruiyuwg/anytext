You can configure the system to automatically allocate read weights for read-only ApsaraDB RDS for SQL Server instances. You can also manually specify read weights for the read-only RDS instances. If you configure the system to automatically allocate read weights, the read weight that is allocated to a read-only RDS instance is fixed. This topic describes the default read weights of read-only RDS for SQL Server instances of different instance types.

**Note**

You can configure the rules of read weight allocation when you [enable the read/write splitting feature](/help/en/rds/apsaradb-rds-for-sql-server/enable-the-read-or-write-splitting-endpoint-for-an-apsaradb-rds-for-sql-server-instance). You can also [modify the read weight](/help/en/rds/apsaradb-rds-for-sql-server/modify-the-read-weight-of-an-apsaradb-rds-for-sql-server-instance) based on your business requirements.

Read-only RDS instances support the general-purpose instance family or the dedicated instance family. For more information about instance families, see [Instance families](/help/en/rds/product-overview/instance-families).

## General-purpose instance family

**Instance type**

**Number of CPU cores**

**Memory capacity**

**Default weight**

mssql.x4.medium.ro

2

8 GB

800

mssql.x4.large.ro

4

16 GB

1600

mssql.x4.xlarge.ro

8

32 GB

3200

mssql.x4.2xlarge.ro

16

64 GB

6400

mssql.x4.4xlarge.ro

32

128 GB

9900

mssql.x4.8xlarge.ro

64

256 GB

9900

mssql.x8.medium.ro

2

16 GB

1600

mssql.x8.large.ro

4

32 GB

3200

mssql.x8.xlarge.ro

8

64 GB

6400

mssql.x8.2xlarge.ro

16

128 GB

9900

mssql.x8.4xlarge.ro

32

256 GB

9900

mssql.x10.5xlarge.ro

40

384 GB

9900

mssql.x8.8xlarge.ro

64

512 GB

9900

## General-purpose instance family

**Instance type**

**Number of CPU cores**

**Memory capacity**

**Default weight**

rds.mssql.s3.large

4

8 GB

800

rds.mssql.c1.large

8

16 GB

1,600

rds.mssql.m1.medium

4

16 GB

1,600

rds.mssql.c1.xlarge

8

32 GB

3,200

rds.mssql.c2.xlarge

16

64 GB

6,400

rds.mssql.c4.xlarge

32

128 GB

9,900

rds.mssql.c4.2xlarge

32

256 GB

9,900
