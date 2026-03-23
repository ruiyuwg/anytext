PolarDB for MySQL optimizes TRUNCATE TABLE and DROP TABLE operations by replacing the buffer pool full-scan mechanism used in MySQL Community Edition with a space-ID-based page lookup. This eliminates the full-scan bottleneck, reducing DDL execution time by up to 99% and improving stability on clusters with large memory or under high loads.

## How it works

In MySQL Community Edition, TRUNCATE TABLE and DROP TABLE trigger a full scan of the buffer pool to locate and remove all data pages belonging to the target table. On clusters with large buffer pools (tens or hundreds of GB), this scan can take several seconds or longer, blocking other operations.

PolarDB for MySQL avoids this full scan by directly identifying and removing only the pages associated with the target table's tablespace through a space-ID-based lookup. This makes TRUNCATE TABLE and DROP TABLE nearly instantaneous regardless of buffer pool size.

## Prerequisites

Your PolarDB for MySQL cluster must run one of the following versions:

-   MySQL 5.7, revision version 5.7.1.0.19 or later.
    
-   MySQL 8.0.1, revision version 8.0.1.1.50 or later.
    
-   MySQL 8.0.2, revision version 8.0.2.2.30.1 or later.
    

**Note**

To check the revision version of your cluster, see the [Version Guide](/help/en/doc-detail/423885.html#section-7p8-757-iyh) for PolarDB for MySQL.

## Enable the feature

Set the loose\_innodb\_flush\_pages\_using\_space\_id parameter to enable or disable this feature. For instructions on configuring parameters, see [Set cluster parameters and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).

**Parameter**

**Level**

**Description**

loose\_innodb\_flush\_pages\_using\_space\_id

Global

Controls the faster TRUNCATE/DROP TABLE feature. Valid values: **ON** (enable) and **OFF** (disable).

## Performance benchmarks

Enabling the feature significantly improves TRUNCATE TABLE performance across all cluster specifications. The improvement is most pronounced on clusters with larger buffer pools: on a 64-core, 512 GB cluster, TRUNCATE TABLE on the 2-million-row table completes in 0.11 seconds instead of 9.48 seconds, a **98.84% reduction**. Even on the smallest tested configuration (4 cores, 16 GB), the feature delivers a **65-87% improvement**.

The following results were measured on MySQL 5.7.

### Results

**Table t1 (8,192 rows)**

**Cluster specifications**

**Buffer pool (GB)**

**ON (seconds)**

**OFF (seconds)**

**Improvement**

64 cores, 512 GB

374

0.01

5.2

99.81%

32 cores, 256 GB

192

0.02

2.45

99.18%

16 cores, 128 GB

96

0.01

1.73

99.42%

8 cores, 64 GB

42

0.01

0.73

98.63%

4 cores, 32 GB

24

0.02

0.45

95.56%

4 cores, 16 GB

12

0.03

0.23

86.96%

**Table t2 (2,097,152 rows)**

**Cluster specifications**

**Buffer pool (GB)**

**ON (seconds)**

**OFF (seconds)**

**Improvement**

64 cores, 512 GB

374

0.11

9.48

98.84%

32 cores, 256 GB

192

0.1

2.65

96.23%

16 cores, 128 GB

96

0.12

1.86

93.55%

8 cores, 64 GB

42

0.12

0.79

84.81%

4 cores, 32 GB

24

0.13

0.53

75.47%

4 cores, 16 GB

12

0.12

0.35

65.71%

### Test method

1.  Fill the buffer pools on clusters with different specifications. This ensures that the buffer pool is full so that its size directly affects the TRUNCATE TABLE operation time.
    
    ```
    ip=<cluster_endpoint>
    user=<database_account>
    psw=<database_password>
    port=<database_port>
    MYSQL="mysql -h $ip -P $port -u$user -p$psw -vvv -e"
    $MYSQL "create database test;"
    $MYSQL "use test;create table if not exists t3 (a bigint,b char(250),c char(250),d char(250),e char(250)) charset=latin1;"
    $MYSQL "use test;insert into t3 values(1,repeat('x', 255),repeat('x', 255),repeat('x', 255),repeat('x', 255));"
    for ((i=1; i<=32; i+=1))
    do
       $MYSQL --host=$ip -p$psw --port=$port -u$user  -vvv -e "use test;insert into t3 select * from t3;"
    done
    $MYSQL  "use test; select count(*) from t3;"
    ```
    
2.  Create two test tables, `t1` and `t2`. Insert 8,192 rows of data into `t1` and 2,097,152 rows of data into `t2`.
    
    ```
    # Create the t1 table and insert 8,192 rows of data.
    row_num=13
    ip=<cluster_endpoint>
    user=<database_account>
    psw=<database_password>
    port=<database_port>
    MYSQL="mysql -h $ip -P $port -u$user -p$psw -vvv -e"
    $MYSQL "use test;create table if not exists t1 (a bigint,b char(250),c char(250),d char(250),e char(250)) charset=latin1;"
    $MYSQL "use test;insert into t1 values(1,repeat('x', 255),repeat('x', 255),repeat('x', 255),repeat('x', 255));"
    for ((i=1; i<=$row_num; i+=1))
    do
       $MYSQL "use test;insert into t1 select * from t1;"
    done
    ```
    
    ```
    # Create the t2 table and insert 2,097,152 rows of data.
    row_num=21
    ip=<cluster_endpoint>
    user=<database_account>
    psw=<database_password>
    port=<database_port>
    MYSQL="mysql -h $ip -P $port -u$user -p$psw -vvv -e"
    $MYSQL "use test;create table if not exists t2 (a bigint,b char(250),c char(250),d char(250),e char(250)) charset=latin1;"
    $MYSQL "use test;insert into t2 values(1,repeat('x', 255),repeat('x', 255),repeat('x', 255),repeat('x', 255));"
    for ((i=1; i<=$row_num; i+=1))
    do
       $MYSQL "use test;insert into t2 select * from t2;"
    done
    ```
    
3.  On clusters with different specifications, run the TRUNCATE TABLE operation on tables `t1` and `t2` with the feature enabled and disabled.
    

## Contact us

If you have any questions about DDL operations, please [contact technical support](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
