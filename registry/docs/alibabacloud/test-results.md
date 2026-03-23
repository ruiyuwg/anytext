This topic provides the performance test results for general-purpose, high-availability ApsaraDB RDS for PostgreSQL instances.

**Note**

This topic provides test data for general-purpose, high-availability ApsaraDB RDS for PostgreSQL 14 instance types. This data is for reference only. For more information about ApsaraDB RDS for PostgreSQL, see [Performance optimization and diagnosis](/help/en/rds/apsaradb-rds-for-postgresql/performance-optimization-and-diagnosis-1/) and [Development and O&M recommendations](/help/en/rds/apsaradb-rds-for-postgresql/development-and-o-and-m-recommendations-for-apsaradb-rds-for-postgresql#concept-2091529).

**Specifications**

**Number of tables**

**Data volume in a single table**

**Sysbench threads**

**Sysbench reads**

**(count)**

**Sysbench writes**

**(count)**

**QPS**

**TPS**

2 cores, 8 GB of memory (pg.n4.2c.2m)

64

10,000,000

64

2,061,416

588,976

16,352

818

4 cores, 16 GB of memory (pg.n4.4c.2m)

64

10,000,000

64

4,305,728

1,230,208

34,162

1,708

6 cores, 24 GB of memory (pg.n4.6c.2m)

64

10,000,000

64

4,735,752

1,353,069

37,575

1,879

8 cores, 32 GB of memory (pg.n4.8c.2m)

64

10,000,000

64

5,084,926

1,452,836

40,339

2,017

12 cores, 48 GB of memory (pg.n4.12c.2m)

64

10,000,000

64

6,007,960

1,716,558

47,671

2,384

**Note**

In this example, the stress testing duration is 180 seconds.

![Test results for rds.pg.sth43](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5390009561/p35553.png)![Test results for pg.x8.xlarge.2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5390009561/p35554.png)
