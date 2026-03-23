PolarDB supports nonblocking DDL statements that can prevent congestions caused by prolonged lock wait when DDL statements are executed. This topic describes nonblocking DDL statements.

## Background information

If a blocking DDL statement is submitted and the table it affects has uncommitted transactions or queries, the DDL statement keeps waiting for the MDL-X lock. While the DDL statement waits, transactions that operate data in the same table may still be submitted. However, because MDL-X locks have the highest priority, the new transactions must wait until this blocking DDL statement is completed. As a result, the connections are congested, which may cause the entire business system to fail. If this DDL statement is a nonblocking DDL statement, however, new transactions submitted can still be executed while the statement waits for the MDL-X lock.

## Prerequisites

Your PolarDB for MySQL cluster meets one of the following requirements:

-   A cluster of PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.29 or later.
    
-   A cluster of PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.12 or later.
    

For information about how to view the version of your cluster, see [Engine versions 5.6, 5.7, and 8.0](/help/en/polardb/polardb-for-mysql/engine-versions).

## Precautions

Nonblocking DDL statements have lower priorities and are subject to higher possibility of failure due to the lack of the MDL lock.

## Limits

-   A cluster of PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.29 or later, or a cluster of PolarDB for MySQL 8.0.2.2.12:
    
    -   Only the ALTER TABLE statement supports the nonblocking DDL feature. This feature is ideal for the following statement: `ALTER TABLE table_name ADD INDEX index_name ( 'column1', 'column2', 'column3')`.
        
    -   To defragment tables that are created in the InnoDB engine, you must execute the `ALTER TABLE table_name engine=innodb` statement instead of the `OPTIMIZE TABLE table_name` statement.
        
-   A PolarDB for MySQL 8.0.2 cluster whose revision version is 8.0.2.2.13 or later.
    
    The ALTER TABLE, OPTIMIZE TABLE, and TRUNCATE TABLE statements support the nonblocking DDL feature.
    

## Use nonblocking DDL statements

The following table describes the parameters for using nonblocking DDL statements. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).

**Parameter**

**Level**

**Description**

loose\_polar\_nonblock\_ddl\_mode

Session

Specifies whether to enable the nonblocking DDL feature. Default value: OFF. Valid values:

-   **ON**
    
-   **OFF**
    

loose\_polar\_nonblock\_ddl\_retry\_times

Session

The maximum number of retries allowed after attempts of the DDL statement to obtain MDL-X locks time out. Valid values: 0 to 31536000. Default value: 0. The default value is calculated based on the value of the `lock_wait_timeout` parameter.

**Note**

We recommend that you set the value of this parameter to 4194304.

loose\_polar\_nonblock\_ddl\_retry\_interval

Session

The interval at which the DDL statement retries to obtain MDL-X locks. Valid values: 1 to 31536000. Unit: seconds. Default value: 6.

loose\_polar\_nonblock\_ddl\_lock\_wait\_timeout

Session

The timeout period for attempts of the DDL statement to obtain MDL-X locks. Valid values: 1 to 31536000. Unit: seconds. Default value: 1.

## Performance test

In this section, the performance of using blocking DDL statements, using nonblocking statements, and using gh-ost to perform schema changes is compared.

**Test tool**

SysBench is a modular, cross-platform, and multi-threaded benchmark tool that can be used to evaluate the performance of a heavily loaded database system based on core metrics. SysBench allows you to quickly test the performance of a database without complex benchmark settings, even if you do not install the database. For information about how to use SysBench, see [OLTP performance test](/help/en/polardb/polardb-for-mysql/oltp-performance-test#task-1580301).

**Test environment**

A PolarDB for MySQL 8.0 cluster that has 8 CPU cores and 64 GB memory. The cluster runs the Cluster Edition.

**Test methods**

1.  Use SysBench to create a test table named `sbtest1` and insert 1 million rows of data to the table.
    
    ```
    ./oltp_read_write.lua --mysql-host="Cluster endpoint" --mysql-port="Port number" --mysql-user="Username" --mysql-password="Password" --mysql-db="sbtest" --tables=1 --table-size=1000000 --report-interval=1 --percentile=99 --threads=8 --time=6000 prepare
    ```
    
2.  Use the `oltp_read_write.lua` script to simulate user business.
    
    ```
    ./oltp_read_write.lua --mysql-host="Cluster endpoint" --mysql-port="Port number" --mysql-user="Username" --mysql-password="Password" --mysql-db="sbtest" --tables=1 --table-size=1000000 --report-interval=1 --percentile=99 --threads=8 --time=6000 run
    ```
    
3.  Start a transaction on the `sbtest1` table but do not commit the transaction, so that the transaction holds the MDL lock to the table.
    
    ```
    /* session 1 */
    begin;
    select * from sbtest1;
    ```
    
4.  In another session, add columns to the `sbtest1` table and monitor the TPS changes.
    
    ```
    /* session 2 */
    alter table sbtest1 add column d int;
    ```
    
5.  Use the gh-ost tool to add columns and monitor the TPS changes. Binary logs are used for performance monitoring. For more information, see [Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301).
    
    ```
    ./gh-ost --assume-rbr --user="Username" --password="Password" --host="Cluster endpoint" --port="Port number" --database="sbtest" --table="sbtest1"  --alter="ADD COLUMN d INT" --allow-on-master --aliyun-rds --initially-drop-old-table --initially-drop-ghost-table --execute;
    ```
    

**Test results**

-   When nonblocking DDL statements are disabled, the TPS decreases to zero and stays at zero for a long period of time. The business is severely affected. ![Disable nonblocking DDL statements](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3238260661/p449509.png)
    
-   When nonblocking DDL statements are enabled, the TPS decreases in a periodical manner, but never decreases to zero. The lock wait only slightly affects the business, and the stability of the system is ensured. ![Enable nonblocking DDL statements](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3238260661/p449511.png)
    
-   When gh-ost is used to modify the table schema, the TPS decreases to zero in a periodical manner. In this case, the business is severely affected, which is caused by the temporary table lock in the cut-over step. ![Use gh-ost to modify the table schema](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3238260661/p449515.png)
    

**Performance comparison between nonblocking DDL statements and the gh-ost tool**

In this section, columns are added to the table with 100 million rows of data by using nonblocking DDL statements, such as INSTANT, INPLACE, and COPY methods, and by using the gh-ost tool. The performance is compared.

-   When the table has no workloads, nonblocking DDL statements are faster than the gh-ost tool. ![Load-free](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9924160661/p459627.png)
    
-   When the oltp\_read\_write script of SysBench is used to simulate business workloads, nonblocking DDL statements are still faster than the gh-ost tool. ![read_write.](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9924160661/p459628.png)
    

**Conclusions**

Nonblocking DDL statements do not block new transactions and avoid zero TPS, which helps maximize system stability and improves the efficiency of DDL statements.

## Contact us

If you have any questions about DDL operations, [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
