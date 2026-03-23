PostgreSQL that is compatible with Oracle provides pgbench that is a lightweight stress testing tool. pgbench can run benchmark tests on PostgreSQL. Benchmark tests are performed by repeatedly running the same sequence of SQL statements across multiple concurrent database sessions. This topic describes how to use pgbench to test the peak performance of PolarDB for PostgreSQL(Compatible with Oracle) clusters.

## Test environments

-   All tests must be conducted in the China (Qingdao) region. Your PolarDB cluster must be located in the same zone as your ECS instance.
-   ECS instance type: ecs.g5.16xlarge (64 vCPUs, 256 GiB)
-   ECS storage: 200 GiB local SSDs
-   Network type: virtual private cloud (VPC). Your PolarDB cluster and ECS instance are in the same VPC.
-   OS: 64-bit version of CentOS 7.6
-   Number of nodes in your PolarDB cluster: one primary node and one read-only node

**Note** CentOS 6 does not support PostgreSQL 11.

## Test metrics

-   Read-only queries per second (QPS)
    
    The number of SELECT statements executed per second when read-only operations are performed on the database.
    
-   Read and write QPS
    
    The number of SELECT, INSERT, and UPDATE statements executed per second when read/write operations are performed on the database.
    

## Before you begin

-   Install PostgreSQL 11.
    
    Run the following commands to install PostgreSQL 11 on your ECS instance.
    
    ```
    sudo yum install -y https://download.postgresql.org/pub/repos/yum/reporpms/EL-7-x86_64/pgdg-redhat-repo-latest.noarch.rpm
    sudo yum install -y postgresql11
    ```
    
-   Configure parameters for your PolarDB cluster.
    
    On your PolarDB cluster, configure the following parameters:
    
    ```
    log_statement = 'none'
    enable_hashjoin=off
    enable_mergejoin=off
    enable_bitmapscan=off
    ```
    
    **Note** You can configure only the log\_statement parameter in the PolarDB console. For more information about how to configure cluster parameters, see [Configure cluster parameters](/help/en/polardb/polardb-for-oracle/configure-cluster-parameters#task-1582301).
    
    After you configure the parameters, restart your PolarDB cluster for the configuration to take effect.
    

## Test methods

1.  Run the following commands to configure environment variables:
    
    ```
    export PGHOST=<The internal endpoint of your PolarDB cluster>
    export PGPORT=<The internal port number of your PolarDB cluster>
    export PGDATABASE=postgres
    export PGUSER=<The username used to log on to your PolarDB database>
    export PGPASSWORD=<The password of your PolarDB account>
    ```
    
    **Note** For more information about how to view the endpoints of PolarDB for PostgreSQL(Compatible with Oracle) clusters, see [View endpoints and ports](/help/en/polardb/polardb-for-oracle/view-or-apply-for-an-endpoint#section-5cl-22o-hob).
    
2.  Initialize test data based on the size of the database that you want to test.
    -   Run the following command to initialize 1 billion data records:
        
        ```
        /usr/pgsql-11/bin/pgbench -i -s 10000
        ```
        
    -   Run the following command to initialize 500 million data records:
        
        ```
        /usr/pgsql-11/bin/pgbench -i -s 5000
        ```
        
    -   Run the following command to initialize 100 million data records:
        
        ```
        /usr/pgsql-11/bin/pgbench -i -s 1000
        ```
        
3.  Create test scripts for read-only operations and read/write operations.
    -   Create a script to test read-only operations. Set the name of this script to ro.sql.
        1.  Run the `vim ro.sql` command.
        2.  Press the I key to enter the edit mode.
        3.  In the editor, specify the following content:
            
            ```
            \set aid random_gaussian(1, :range, 10.0)
            SELECT abalance FROM pgbench_accounts WHERE aid = :aid;
            ```
            
        4.  Press the Esc key to exit the edit mode, and enter `:wq` to save the file and exit the editor.
    -   Create a script to test read/write operations. Set the name of this script to rw.sql.
        1.  Run the `vim rw.sql` command.
        2.  Press the I key to enter the edit mode.
        3.  In the editor, specify the following content:
            
            ```
            \set aid random_gaussian(1, :range, 10.0)
            \set bid random(1, 1 * :scale)
            \set tid random(1, 10 * :scale)
            \set delta random(-5000, 5000)
            BEGIN;
            UPDATE pgbench_accounts SET abalance = abalance + :delta WHERE aid = :aid;
            SELECT abalance FROM pgbench_accounts WHERE aid = :aid;
            UPDATE pgbench_tellers SET tbalance = tbalance + :delta WHERE tid = :tid;
            UPDATE pgbench_branches SET bbalance = bbalance + :delta WHERE bid = :bid;
            INSERT INTO pgbench_history (tid, bid, aid, delta, mtime) VALUES (:tid, :bid, :aid, :delta, CURRENT_TIMESTAMP);
            END;
            ```
            
        4.  Press the Esc key to exit the edit mode, and enter `:wq` to save the file and exit the editor.
4.  Run the following commands to test operations:
    
    -   Run the following commands to test read-only operations:
        
        ```
        88C 710 GB(polar.o.x8.12xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./ro.sql -c 256 -j 128 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 256 -j 128 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 256 -j 128 -T 120 -D scale=10000 -D range=1000000000
        
        64C 512 GB(polar.o.x8.8xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./ro.sql -c 256 -j 128 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 256 -j 128 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 256 -j 128 -T 120 -D scale=10000 -D range=1000000000
        
        32C 256 GB(polar.o.x8.4xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./ro.sql -c 128 -j 128 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 128 -j 128 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 128 -j 128 -T 120 -D scale=10000 -D range=1000000000
        
        16cC 128 GB(polar.o.x8.2xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./ro.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=1000000000
        
        8C 64 GB(polar.o.x8.xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./ro.sql -c 64 -j 32 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 64 -j 32 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 64 -j 32 -T 120 -D scale=10000 -D range=1000000000
        
        8C 32 GB(polar.o.x4.xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./ro.sql -c 64 -j 32 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 64 -j 32 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 64 -j 32 -T 120 -D scale=10000 -D range=1000000000
        
        4C 16 GB(polar.o.x4.large)
        Total data volume: 500 million records, hot data: 50 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./ro.sql -c 32 -j 32 -T 120 -D scale=5000 -D range=50000000
        Total data volume: 500 million records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 32 -j 32 -T 120 -D scale=5000 -D range=100000000
        
        2C 4 GB(polar.o.x4.medium)
        Total data volume: 100 million records, hot data: 50 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./ro.sql -c 16 -j 32 -T 120 -D scale=1000 -D range=50000000
        Total data volume: 100 million records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./ro.sql -c 16 -j 32 -T 120 -D scale=1000 -D range=100000000
        ```
        
    -   Run the following commands to test read/write operations:
        
        ```
        88C 710 GB(polar.o.x8.12xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./rw.sql -c 256 -j 256 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 256 -j 256 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 256 -j 256 -T 120 -D scale=10000 -D range=1000000000
        
        64C 512 GB(polar.o.x8.8xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./rw.sql -c 256 -j 256 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 256 -j 256 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 256 -j 256 -T 120 -D scale=10000 -D range=1000000000
        
        32C 256 GB(polar.o.x8.4xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./rw.sql -c 128 -j 128 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 128 -j 128 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 128 -j 128 -T 120 -D scale=10000 -D range=1000000000
        
        16C 128 GB(polar.o.x8.2xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./rw.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=1000000000
        
        8C 64 GB(polar.o.x8.xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./rw.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 64 -j 64 -T 120 -D scale=10000 -D range=1000000000
        
        8C 32 GB(polar.o.x4.xlarge)
        Total data volume: 1 billion records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./rw.sql -c 32 -j 32 -T 120 -D scale=10000 -D range=100000000
        Total data volume: 1 billion records, hot data: 500 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 32 -j 32 -T 120 -D scale=10000 -D range=500000000
        Total data volume: 1 billion records, hot data: 1 billion records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 32 -j 32 -T 120 -D scale=10000 -D range=1000000000
        
        4C 16 GB(polar.o.x4.large)
        Total data volume: 500 million records, hot data: 50 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./rw.sql -c 16 -j 16 -T 120 -D scale=5000 -D range=50000000
        Total data volume: 500 million records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 16 -j 16 -T 120 -D scale=5000 -D range=100000000
        
        2C 8 GB(polar.o.x4.medium)
        Total data volume: 100 million records, hot data: 50 million records
        /usr/pgsql-11/bin/pgbench -M prepared -v -r -P 1 -f ./rw.sql -c 8 -j 8 -T 120 -D scale=1000 -D range=50000000
        Total data volume: 100 million records, hot data: 100 million records
        /usr/pgsql-11/bin/pgbench -M prepared -n -r -P 1 -f ./rw.sql -c 8 -j 8 -T 120 -D scale=1000 -D range=100000000
        ```
        
    
    **Note**
    
    -   scale: The value of scale multiplied by 100,000 indicates the number of test data records.
    -   range: specifies the number of hot data records.
    -   \-c: specifies the number of connections in the test. The value of this parameter does not indicate the maximum number of connections supported by this type of cluster. For more information, see [Specifications of compute nodes](/help/en/polardb/polardb-for-oracle/specifications-of-compute-nodes-2#concept-2035312).
    

## Test results

Specification code

Number of test data records

Number of hot (active) data records

Read-only QPS

Read and write QPS

polar.o.x8.12xlarge

88 cores, 710 GB

1 billion

100 million

630650.40

263746.37

500 million

601262.24

247352.76

1 billion

589405.79

218788.92

polar.o.x8.8xlarge

64 cores, 512 GB

1 billion

100 million

592064.65

227352.23

500 million

554777.11

213343.13

1 billion

508404.07

203331.35

polar.o.x8.4xlarge

32 cores, 256 GB

1 billion

100 million

522182.92

213212.34

500 million

509372.85

203322.34

1 billion

489349.72

198531.37

polar.o.x8.2xlarge

16 cores, 128 GB

1 billion

100 million

263893.72

152863.27

500 million

250221.62

129238.26

1 billion

239832.62

106212.82

polar.o.x8.xlarge

8 cores, 64 GB

1 billion

100 million

142836.56

69725.29

500 million

133931.69

55927.65

1 billion

124151.02

50786.21

polar.o.x4.xlarge

8 cores, 32 GB

1 billion

100 million

126748.07

59738.33

500 million

113432.32

48372.25

1 billion

104232.84

49763.64

polar.o.x4.large

4 cores, 16 GB

500 million

50 million

76238.89

47388.27

100 million

69892.83

43638.85

polar.o.x4.medium

2 cores, 8 GB

100 million

50 million

28320.70

18152.63

100 million

30792.19

19111.15

**Note**

-   Specification code: the code of PolarDB for PostgreSQL(Compatible with Oracle) specifications.
-   Number of test data records: the number of data records for the test.
-   Number of hot (active) data records: the number of records for querying and updating SQL commands in the test.
-   Read-only QPS: the number of read-only requests processed per second.
-   Read and write QPS: the number of read/write requests processed per second.

![2c8g](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9908231261/p266121.png)![4c16g](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9908231261/p266122.png)![8c32g](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9908231261/p266125.png)![8c64g](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9908231261/p266127.png)![16c128g](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0018231261/p266128.png)![32c256g](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0018231261/p266129.png)![64c512g](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0018231261/p266130.png)![88c710g](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0018231261/p266132.png)
