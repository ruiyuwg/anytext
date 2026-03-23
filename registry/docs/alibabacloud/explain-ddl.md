In MySQL, DDL operations can be complex and time-consuming. Any slight mistake can affect your business. PolarDB for MySQL introduces the EXPLAIN DDL feature, allowing you to understand the execution details beforehand to accurately assess the impact of DDL operations on your business.

## **Introduction**

DDL operations in the MySQL ecosystem are complex and take a long period of time to execute. They not only consume a large amount of hardware resources but also may lock tables. Inappropriate use may severely impact your business. Furthermore, the execution features may vary based on DDL operations. For example, adding a column does not require a table rebuild and can be completed in seconds. Modifying a column type, however, requires a full table rebuild and does not allow write operations during the process.

PolarDB for MySQL provides the EXPLAIN DDL feature to help you evaluate the execution features of a DDL operation, such as whether lock conflicts exist, or whether a table rebuild is required. Similar to EXPLAIN SQL, you can perform EXPLAIN on a DDL statement before execution to obtain detailed insights.

## **Supported versions**

Your PolarDB for MySQL cluster runs one of the following database engine versions:

-   PolarDB for MySQL 8.0.1 with a revision version of 8.0.1.1.49 or later.
    
-   PolarDB for MySQL 8.0.2 with a revision version of 8.0.2.2.27 or later.
    

## **Precautions**

-   The EXPLAIN DDL operation is supported only for tables using the InnoDB storage engine.
    
-   The EXPLAIN DDL operation does not modify any actual data.
    
-   The EXPLAIN DDL operation can be performed on both the primary node and read-only nodes. But the Possible blocked MDLs field only displays potential lock conflicts on the current node.
    

## **Usage**

### **Parameters**

Activate the EXPLAIN DDL feature by configuring the **loose\_polar\_enable\_explain\_ddl** parameter. Specify the number of potential MDL blocking threads to collect by configuring the **loose\_polar\_max\_collect\_thd\_num\_in\_explain\_ddl** parameter. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters). The following table describes the parameters:

**Parameter**

**Level**

**Description**

**loose\_polar\_enable\_explain\_ddl**

Global

Turns on or off the EXPLAIN DDL feature. Valid values:

-   **ON (default)**
    
-   **OFF**
    

**loose\_polar\_max\_collect\_thd\_num\_in\_explain\_ddl**

Global

Specifies the number of potential MDL blocking threads to collect.

Valid values: 1 to 512. The default value is 16.

### **Syntax**

```
{ EXPLAIN | DESCRIBE | DESC } 	ALTER TABLE ...
```

The following table describes the output fields:

**Field**

**Description**

**Valid values**

Error No

Error code.

-   **0**: successful execution.
    
-   **Other**: the error code.
    

Algorithm

The execution algorithm that the DDL operation uses.

-   **Unknown**
    
-   **INSTANT**
    
-   **INPLACE**
    
-   **COPY**
    

Metadata Only

Indicates whether the DDL operation modifies only metadata, not actual data in the table.

-   **Unknown**
    
-   **Yes**: modifies only metadata.
    
-   **No**: modifies both metadata and actual data in the table.
    

Rebuilt Table

Indicates whether the DDL operation requires a table rebuild.

-   **Unknown**
    
-   **Yes**
    
-   **No**
    

Parallel Support

Indicates whether the DDL operation supports parallel DDL for acceleration.

-   **Unknown**
    
-   **No**: Parallel DDL is not supported.
    
-   **Not Needed**: Parallel DDL is not needed because no data is modified.
    
-   **Yes**: Parallel DDL is enabled and is used for acceleration.
    
-   **Yes, But Not Enabled**: Parallel DDL is supported but not currently enabled.
    

Parallel Degree

The number of threads that the DDL operation uses.

-   **\-1**: unknown.
    
-   **\[1-128\]**: the number of parallel threads for DDL.
    

Concurrent DML

Indicates whether concurrent read and write are supported during the DDL operation.

-   **Unknown**
    
-   **Yes**
    
-   **No**
    

Possible Blocked MDLs

Transactions that may block the DDL operation, identified by the **Process ID** of the associated connection.

**A string of Process IDs, separated by commas.**

Error Msg

The error message associated with the **Error No** of the current DDL operation.

**A string.**

Suggest Info

Suggestions for optimizing the current DDL operation.

**A string.**

**Note**

**Suggestions may include, but is not limited to:**

-   **If the Possible blocked MDLs field contains entries, you are prompted to address potential lock conflicts.**
    
-   **If parallel DDL is supported, tuning parameters are provided to further accelerate the process.**
    

Statement

The current DDL statement.

**DDL statement.**

## **Examples**

### Query the execution features of a DDL operation

By analyzing the `Algorithm`, `Metadata Only`, `Rebuilt Table`, and `Concurrent DML` fields in the EXPLAIN DDL output, you can understand the execution features of a DDL operation.

-   A Yes value in the `Concurrent DML` field indicates that the DDL execution supports concurrent read and write operations. Business read and write requests are not blocked.
    
-   A Yes value in the `Rebuilt Table` field indicates that the DDL operation requires a complete table rebuild. For large tablespaces, this can be time-consuming. You can execute such DDL during off-peak hours.
    
-   A Yes value in the `Metadata Only` field indicates that the DDL operation does not modify data in the table. Such operations can complete in seconds regardless of table size, which causes minimal impact on database workload.
    

See the following sample DDL executions:

-   The test table structure:
    
    ```
    SHOW CREATE TABLE t1\G
    *************************** 1. row ***************************
           Table: t1
    Create Table: CREATE TABLE `t1` (
      `a` int(11) DEFAULT NULL,
      `b` char(1) DEFAULT NULL,
      `c` char(1) DEFAULT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8
    1 row in set (0.00 sec)
    ```
    
-   EXPLAIN the add column operation:
    
    ```
    EXPLAIN ALTER TABLE t1 ADD COLUMN d INT;
    ```
    
    Execution result:
    
    ```
    *************************** 1. row ***************************
                 Error No: 0
                Algorithm: INSTANT
            Metadata Only: Yes
            Rebuilt table: No
         Parallel Support: Not Need
          Parallel Degree: 1
           Concurrent DML: Yes
    Possible blocked MDLs:
                Error Msg:
             Suggest Info:
                Statement: EXPLAIN ALTER TABLE t1 ADD COLUMN d int
    1 row in set (0.00 sec)
    ```
    
    The result shows that the add column operation supports the INSTANT algorithm, modifies only metadata (does not require a table rebuild), and supports concurrent DML access. This DDL operation can be executed in seconds with minimal business impact.
    
-   EXPLAIN the table rename operation:
    
    ```
    EXPLAIN ALTER TABLE t1 rename t1_rn;
    ```
    
    Execution result:
    
    ```
    *************************** 1. row ***************************
                 Error No: 0
                Algorithm: INPLACE
            Metadata Only: Yes
            Rebuilt table: No
         Parallel Support: Not Need
          Parallel Degree: 1
           Concurrent DML: Yes
    Possible blocked MDLs:
                Error Msg:
             Suggest Info:
                Statement: EXPLAIN ALTER TABLE t1 rename t1_rn
    1 row in set (0.01 sec)
    ```
    
    The result shows that the table rename operation supports the INPLACE algorithm, modifies only metadata (does not require a table rebuild), and supports concurrent DML access. This DDL operation causes minimal impact on business because it does not modify data in the table.
    
-   EXPLAIN the modify column definition operation:
    
    ```
    EXPLAIN ALTER TABLE t1 modify COLUMN a char(1);
    ```
    
    Execution result:
    
    ```
    *************************** 1. row ***************************
                 Error No: 0
                Algorithm: COPY
            Metadata Only: No
            Rebuilt table: Yes
         Parallel Support: No
          Parallel Degree: 1
           Concurrent DML: No
    Possible blocked MDLs:
                Error Msg:
             Suggest Info:
                Statement: EXPLAIN ALTER TABLE t1 modify COLUMN a char(1)
    1 row in set (0.01 sec)
    ```
    
    The result shows that the modify column definition operation supports the COPY algorithm, requires a data rebuild, and does not support concurrent DML access. This DDL operation causes significant impact on business and must be executed with caution.
    
-   EXPLAIN the rebuild table operation:
    
    ```
    EXPLAIN ALTER TABLE t1 engine= innodb;
    ```
    
    Execution result:
    
    ```
    *************************** 1. row ***************************
                 Error No: 0
                Algorithm: INPLACE
            Metadata Only: No
            Rebuilt table: Yes
         Parallel Support: Yes But Not Enable
          Parallel Degree: 1
           Concurrent DML: Yes
    Possible blocked MDLs:
                Error Msg:
             Suggest Info: 1. This DDL operation could use Parallel DDL to speed up.
                Statement: EXPLAIN ALTER TABLE t1 engine= innodb
    ```
    
    The result shows that the rebuild table operation supports the INPLACE algorithm, requires a full table rebuild, and supports concurrent DML access. Although data access is allowed during execution, we recommend that you execute this DDL operation during off-peak hours because a full table rebuild consumes a large amount of database resources.
    

### Query whether the current DDL operation supports parallel DDL for acceleration

PolarDB for MySQL leverages the parallel DDL feature to accelerate DDL operations. By checking the Parallel Support and Parallel Degree fields in the EXPLAIN DDL output, you can determine if the current DDL operation supports parallel DDL for acceleration.

-   If the current DDL operation supports parallel DDL but the feature is not enabled for this cluster, the Suggest Info field displays the **This DDL operation could use Parallel DDL to speed up.** message. For more information about how to enable parallel DDL, see [Parallel DDL](/help/en/polardb/polardb-for-mysql/user-guide/parallel-ddl).
    
-   If the current DDL operation supports parallel DDL and the feature is enabled for the cluster, EXPLAIN DDL suggests an optimal degree of parallelism based on the current cluster workload. The Suggest Info field displays the **This DDL operation can be accelerated by increasing the value of 'innodb\_polar\_parallel\_ddl\_threads'. The recommended value is 8.** message. You can adjust the `innodb_polar_parallel_ddl_threads` parameter as recommended to improve the acceleration effect.
    

See the following sample executions:

-   Disable parallel DDL and EXPLAIN the add secondary index operation:
    
    ```
    MySQL [test]> SHOW variables LIKE "%parallel_ddl_threads%";
    +----------------------------------------------------+-------+
    | Variable_name                                      | Value |
    +----------------------------------------------------+-------+
    | innodb_polar_innovate_default_parallel_ddl_threads | 1     |
    | innodb_polar_parallel_ddl_threads                  | 1     |
    +----------------------------------------------------+-------+
    2 rows in set (0.03 sec)
    ```
    
    The result shows that parallel DDL is not enabled. EXPLAIN the add secondary index operation:
    
    ```
    EXPLAIN ALTER TABLE t1 ADD index k_a(a);
    ```
    
    Execution result:
    
    ```
    *************************** 1. row ***************************
                 Error No: 0
                Algorithm: INPLACE
            Metadata Only: No
            Rebuilt table: No
         Parallel Support: Yes But Not Enable
          Parallel Degree: 1
           Concurrent DML: Yes
    Possible blocked MDLs:
                Error Msg:
             Suggest Info: 1. This DDL operation could use Parallel DDL to speed up.
                Statement: EXPLAIN ALTER TABLE t1 ADD index k_a(a)
    1 row in set (0.01 sec)
    ```
    
    The Yes But Not Enabled value of the Parallel Support field indicates that the current DDL operation can be accelerated by the parallel DDL feature, but the feature is not enabled for the cluster. As a result, this DDL operation does not use parallel DDL for acceleration. Additionally, the Suggest Info field offers a suggestion to enable parallel DDL.
    
-   Enable parallel DDL and EXPLAIN the add secondary index operation:
    
    Set the degree of parallelism to 2:
    
    ```
    MySQL [test]> SET innodb_polar_parallel_ddl_threads = 2 ;
    Query OK, 0 rows affected (0.00 sec)
    ```
    
    EXPLAIN the add secondary index operation:
    
    ```
    EXPLAIN ALTER TABLE t1 ADD index k_a(a);
    ```
    
    Execution result:
    
    ```
    *************************** 1. row ***************************
                 Error No: 0
                Algorithm: INPLACE
            Metadata Only: No
            Rebuilt table: No
         Parallel Support: Yes
          Parallel Degree: 2
           Concurrent DML: Yes
    Possible blocked MDLs:
                Error Msg:
             Suggest Info: 1. This DDL operation can be accelerated BY increasing the VALUE OF 'innodb_polar_parallel_ddl_threads'. The recommended VALUE IS 8.
                Statement: explain ALTER TABLE t1 ADD index k_a(a)
    1 row in set (0.01 sec)
    ```
    

The value of the Parallel Degree field is 2, indicating that the operation uses two threads. In addition, because the cluster workload is low, the Suggest Info field offers a suggestion to increase the degree of parallelism to 8 for better acceleration.

### Potential MDL blocking detection

DDL executions can be blocked by uncommitted transactions on the target table, which may cause active connection issues and crash your cluster in extreme cases. The Possible blocked MDLs field in the EXPLAIN DDL output helps you identify potential lock conflicts in advance. When potential lock conflicts exist, the field lists the Process ID of the connection with the uncommitted transaction. You can resolve the issue by running the KILL or KILL QUERY command to terminate the transaction and prevent the DDL operation from being blocked.

Here is a simple example: In connection 1, access the t1 table without committing the transaction. In connection 2, execute the EXPLAIN DDL operation on the t1 table. The Possible blocked MDLs field lists the Process ID of the connection with the uncommitted transaction, and the Suggest Info provides corresponding suggestions.

-   Connection 1:
    
    Access the t1 table without committing the transaction:
    
    ```
    MySQL [test]> begin;
    Query OK, 0 rows affected (0.00 sec)
    
    MySQL [test]> select * from t1;
    Empty set (0.00 sec)
    ```
    
-   Connection 2:
    
    Execute the EXPLAIN DDL operation on the t1 table:
    
    ```
    EXPLAIN ALTER TABLE t1 engine= innodb;
    *************************** 1. row ***************************
                 Error No: 0
                Algorithm: INPLACE
            Metadata Only: No
            Rebuilt table: Yes
         Parallel Support: Yes But Not Enable
          Parallel Degree: 1
           Concurrent DML: Yes
    Possible blocked MDLs: 18
                Error Msg:
             Suggest Info: 1. This DDL operation may be blocked BY the threads listed under 'Possible blocked MDLs'.
    2. This DDL operation could use Parallel DDL TO speed up.
                Statement: EXPLAIN ALTER TABLE t1 engine= innodb
    ```
