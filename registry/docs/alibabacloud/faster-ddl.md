This topic describes the faster DDL feature that provides an optimized buffer pool management mechanism. This mechanism allows you to reduce the impact of data definition language (DDL) operations and increase the number of concurrent DDL operations that are allowed.

## Prerequisites

Your RDS instance runs one of the following MySQL versions:

-   MySQL 8.0 (with [a minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11 "supports both automatic updates and manual updates to the minor engine version of an ApsaraDB RDS for MySQL instance. These updates improve performance, introduce new features, or fix known issues.") of 20200630 or later.)
-   MySQL 5.7 (with [a minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11 "supports both automatic updates and manual updates to the minor engine version of an ApsaraDB RDS for MySQL instance. These updates improve performance, introduce new features, or fix known issues.") of 20200630 or later.)
-   MySQL 5.6 (with [a minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11 "supports both automatic updates and manual updates to the minor engine version of an ApsaraDB RDS for MySQL instance. These updates improve performance, introduce new features, or fix known issues.") of 20200630 or later.)

## Background information

DDL operations are common for RDS instances. When you use your RDS instance, you may encounter issues related to DDL operations. For example, you may encounter the following issues:

-   When you add indexes, why does a performance jitter occur and interrupt the read and write operations on your RDS instance?
-   Why does it require more than 10 minutes to perform a DDL operation on a table whose size is less than 1 GB?
-   When a connection that generates temporary tables is closed, why does a performance jitter occur?

The database engine team of ApsaraDB for RDS has performed in-depth analyses and intensive tests to locate these issues. Based on the analysis and test results, the team has identified defects in the cache maintenance logic that is used to manage DDL operations. To fix these issues, the team has developed the faster DDL feature. The optimized buffer pool management mechanism provided by this feature reduces competition for locks that are triggered by DDL operations. When your RDS instance processes a normal number of workloads, this allows you to ensure the performance of your RDS instance during DDL operations.

## Enable faster DDL

You can enable the faster DDL feature by setting the loose\_innodb\_rds\_faster\_ddl parameter to ON in the ApsaraDB for RDS console. For more information, see [Modify the parameters of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb "This topic describes how to modify the parameters of an ApsaraDB RDS for MySQL instance in the ApsaraDB RDS console or by using the ApsaraDB RDS API. This topic also describes how to view the parameter modification history in the ApsaraDB RDS console.").

## Test with DDL operations

-   Test scenario
    
    Use the in-place algorithm to perform online DDL operations by executing the following MySQL 8.0-supported statements: CREATE INDEX and OPTIMIZE TABLE. The CREATE INDEX statement creates an index on a table without the need to rebuild the table. The OPTIMIZE TABLE statement creates an index on a table with the need to rebuild the table.
    
         
    
    Operation
    
    Instant
    
    In-place
    
    Rebuilds table
    
    Permits concurrent DML operations
    
    Only modifies metadata
    
    CREATE INDEX
    
    No
    
    Yes
    
    No
    
    Yes
    
    No
    
    OPTIMIZE TABLE
    
    No
    
    Yes
    
    Yes
    
    Yes
    
    No
    
-   Test instance
    
    The RDS instance that is used for the test runs MySQL 8.0. It provides 8 CPU cores and 64 GB of memory. The size of the table on which you perform DDL operations is 600 MB.
    
-   Test procedure
    
    Use SysBench to perform a stress test. In this test, perform online DDL operations and compare the operation results.
    
-   Test result
    
       
    
    Operation
    
    Average execution duration (with faster DDL disabled)
    
    Average execution duration (with faster DDL enabled)
    
    Performance increase times
    
    CREATE INDEX
    
    56 seconds
    
    4.9 seconds
    
    11.4
    
    OPTIMIZE TABLE
    
    220 seconds
    
    17 seconds
    
    12.9
    
-   Test summary
    
    The faster DDL feature enables ApsaraDB RDS for MySQL with AliSQL to reduce the execution duration of a DDL operation by more than 90% compared with the MySQL Community Edition.
    

## Test with temporary tables

Temporary tables are common in MySQL. For example, the system creates temporary tables that are used to query tables from the information\_schema database or to expedite the execution of complex SQL statements. When a thread exits, all of the related temporary tables are deleted. This is known as a specific type of DDL operation that causes a performance jitter on your RDS instance. For more information, see [Temp ibt tablespace truncation at disconnection stuck InnoDB under large BP](https://bugs.mysql.com/bug.php?id=98869).

-   Test instance
    
    The RDS instance that is used for the test runs MySQL 8.0. It provides 8 CPU cores and 64 GB of memory.
    
-   Test procedure
    
    Use tpcc-mysql to perform a stress test. In this test, run queries to make sure that the buffer pool reaches near full capacity. Then, initiate single-threaded requests over short-lived connections to generate temporary tables.
    
-   Test result
    
       
    
    Comparison item
    
    DDL operations not included
    
    Faster DDL enabled
    
    Faster DDL disabled
    
    Transactions per second (TPS)
    
    42,000
    
    40,000
    
    < 10,000
    
    The following figure shows the second-level performance data that is obtained from the stress test. The red highlighted parts indicate the TPSs that are supported by the RDS instance when the faster DDL feature is disabled.
    
    ![TPS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9630749951/p130824.png)
-   Test summary
    
    Every time when a thread that generates temporary tables exits, the native MySQL causes a severe performance jitter. The jitter decreases the TPS by more than 70%. After the faster DDL feature is enabled, the TPS decrease is reduced to 5%.
    

## Optimization effect

The faster DDL feature supports MySQL 5.6, 5.7, and 8.0. However, the supported DDL operations can vary based on the selected MySQL version.

    

Category

DDL operation

MySQL 5.6

MySQL 5.7

MySQL 8.0

In-place DDL

For more information, see [MySQL 8.0 Online DDL Operations](https://dev.mysql.com/doc/refman/8.0/en/innodb-online-ddl-operations.html) and [MySQL 5.7 Online DDL Operations](https://dev.mysql.com/doc/refman/5.7/en/innodb-online-ddl-operations.html).

No

Yes

Yes

Tablespace management

Enables or disables tablespace encryption.

No

Yes

Yes

Releases or deletes a tablespace.

No

Yes

Yes

Discards a tablespace.

Yes

Yes

Yes

Table deletion

Releases or deletes a table.

Yes

Yes

Yes

Undo operation

Releases or deletes an undo tablespace.

No

No

Yes

Table refresh

Refreshes a table and its dirty pages.

Yes

Yes

Yes

## Defects fixed by faster DDL

The faster DDL feature fixes the following defects:

-   [Bug #95582: DDL using bulk load is very slow under long flush\_list](https://bugs.mysql.com/bug.php?id=95582)
-   [Bug #98869: Temp ibt tablespace truncation at disconnection stuck InnoDB under large BP](https://bugs.mysql.com/bug.php?id=98869)
-   [Bug #99021: BUF\_REMOVE\_ALL\_NO\_WRITE is not needed for undo tablespace](https://bugs.mysql.com/bug.php?id=99021)
-   [Bug #98974: InnoDB temp table could hurt InnoDB perf badly](https://bugs.mysql.com/bug.php?id=98974)
