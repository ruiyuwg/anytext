This topic describes RDS Enterprise Edition.

RDS Enterprise Edition is suitable for enterprises. In this edition, your database system consists of one primary RDS instance, one secondary RDS instance, and one logger RDS instance. Data can be synchronized from the primary RDS instance to the secondary RDS instance and the logger RDS instance in synchronous mode, ensuring strong data consistency and finance-grade reliability. ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3286454361/p54378.png)

RDS Enterprise Edition supports the following database engine versions and instance families:

-   Database engine versions: MySQL 5.7 and MySQL 8.0
-   Instance families: dedicated instance family, including the dedicated host instance types

## Limits

For performance purposes, you must deploy the three RDS instances of your database system in the same region.

## Benefits

-   High reliability
    -   RDS Enterprise Edition provides enterprise-grade reliability with a recovery point objective (RPO) of 0.
    -   The three RDS instances of your database system can be deployed in three different data centers of the same city to support cross-zone disaster recovery.
-   Comprehensive functionality
    
    RDS Enterprise Edition supports all the features that are provided by ApsaraDB RDS. These features include automatic scaling, backup and restoration, performance optimization, read/write splitting, and SQL Explorer. The SQL Explorer feature is used to log all the SQL statements that are executed within up to five years. Based on the SQL logs, you can trace database access behavior. This ensures the security of important data.
    
-   Strong consistency and high availability
    
    The following improvements are made to the database engines of ApsaraDB RDS to increase data consistency and service availability:
    
    -   **Raft, a distributed consensus algorithm**, is used to ensure the reliability and atomicity of switchovers among the RDS instances in your database system.
    -   Two data replicas and three log replicas are supported. Transaction logs are synchronized from the primary RDS instance to the secondary RDS instance and logger RDS instance. A transaction is committed only after the related logs are written to at least two of the three RDS instances in your database system.
    -   If you use MySQL 5.7 or MySQL 8.0, the Raft algorithm is used to control the commitment, rollback, and crash recovery of transactions. This ensures data consistency in your database system.
    -   The secondary RDS instance and the logger RDS instance replay only the transaction logs that have been written into a majority of the three RDS instances in your database system. In addition, parallel replication algorithms at various levels are used to increase replay efficiency. Therefore, you can reduce the recovery time objective (RTO) and ensure service availability. The supported levels are the database, table, logical clock, and WriteSet levels.

## Instance types

The following table describes the instance types that are supported by RDS Enterprise Edition.

## RDS instances on RDS Enterprise Edition (with local disks)

**RDS edition**

**Instance family**

**Instance type**

**Number of CPU cores and memory capacity**

**Maximum number of connections**

**Storage**

**Maximum IOPS**

**Storage capacity**

RDS Enterprise Edition

General-purpose

MySQL 5.7 and MySQL 8.0: mysql.n2.small.25

1 core, 2 GB

600

1,000

5 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.n2.medium.25

2 cores, 4 GB

1,200

2,000

5 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.n4.medium.25

2 cores, 8 GB

2,000

4,000

5 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.n2.large.25

4 cores, 8 GB

2,000

5,000

5 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.n4.large.25

4 cores, 16 GB

4,000

7,000

5 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.n2.xlarge.25

8 cores, 16 GB

4,000

8,000

5 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.n4.xlarge.25

8 cores, 32 GB

8,000

12,000

5 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.n4.2xlarge.25

16 cores, 64 GB

16,000

14,000

5 GB to 3,000 GB

MySQL 5.7 and MySQL 8.0: mysql.n8.2xlarge.25

16 cores, 128 GB

32,000

16,000

5 GB to 3,000 GB

Dedicated (with a large number of CPU cores)

MySQL 5.7 and MySQL 8.0: mysql.x4.large.25

4 cores, 16 GB

2,500

4,500

50 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.x4.xlarge.25

8 cores, 32 GB

5,000

9,000

500 GB to 3,000 GB

MySQL 5.7 and MySQL 8.0: mysql.x4.2xlarge.25

16 cores, 64 GB

10,000

18,000

500 GB to 3,000 GB

MySQL 5.7 and MySQL 8.0: mysql.x4.4xlarge.25

32 cores, 128 GB

20,000

36,000

1,000 GB to 6,000 GB

Dedicated (with a large memory capacity)

MySQL 5.7 and MySQL 8.0: mysql.x8.medium.25

2 cores, 16 GB

2,500

4,500

50 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.x8.large.25

4 cores, 32 GB

5,000

9,000

50 GB to 2,000 GB

MySQL 5.7 and MySQL 8.0: mysql.x8.xlarge.25

8 cores, 64 GB

10,000

18,000

500 GB to 3,000 GB

MySQL 5.7 and MySQL 8.0: mysql.x8.2xlarge.25

16 cores, 128 GB

20,000

36,000

500 GB to 3,000 GB

MySQL 5.7 and MySQL 8.0: mysql.x8.4xlarge.25

32 cores, 256 GB

40,000

72,000

1,000 GB to 6,000 GB

Dedicated host

MySQL 5.7 and MySQL 8.0: mysql.st.8xlarge.25

60 cores, 470 GB

100,000

120,000

3,000 GB, 4,000 GB, 5,000 GB, and 6,000 GB

MySQL 5.7 and MySQL 8.0: mysql.st.12xlarge.25

90 cores, 720 GB

150,000

140,000

1,000 GB to 6,000 GB

**Note**

If your RDS instance uses one of the following instance types and the pay-as-you-go billing method, the maximum storage capacity that is allowed for your RDS instance is increased to 3,000 GB in emergency situations.

-   mysql.x8.medium.25
    
-   mysql.x4.large.25
    
-   mysql.x8.large.25
    

If your RDS instance uses one of the preceding instance types and the used storage exceeds 2,000 GB, you cannot change the billing method from pay-as-you-go to subscription. You can change the billing method only when the used storage is less than 2,000 GB.

## FAQ

Is RDS Enterprise Edition supported for read-only RDS instances?

No, RDS Enterprise Edition is not supported for read-only RDS instances. You can create a read-only RDS instance for a primary RDS instance that runs RDS Enterprise Edition. However, the created read-only RDS instance is based on the high-availability architecture.
