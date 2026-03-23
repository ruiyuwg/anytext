PolarDB for MySQL supports the preemptive DDL feature. Preemptive DDL helps resolve DDL operation failures caused by large queries or long-running transactions on read-only nodes.

## **Symptom**

A metadata lock (MDL) synchronization failure appears when a DDL operation is performed on a PolarDB for MySQL cluster. Error message:

```
ERROR HY000: Fail to get MDL on replica during DDL synchronize
```

```
ERROR HY000: Fail to get table lock on replica; you can 'set polar_support_mdl_sync_preemption = ON' and try restarting transaction
```

## **Prerequisites**

Your PolarDB for MySQL cluster runs one of the following database engine versions:

-   PolarDB for MySQL 5.6 whose revision version is 5.6.1.0.43 or later.
    
-   PolarDB for MySQL 5.7 whose revision version is 5.7.1.0.34 or later.
    
-   PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.39 or later.
    
-   A PolarDB for MySQL 8.0.2 cluster whose revision version is 8.0.2.2.14 or later
    

For information about how to view the database engine version of a cluster, see [Query the engine version](/help/en/polardb/polardb-for-mysql/engine-versions#section-zpr-kam-8wb).

## Limits

The preemptive DDL feature is supported only for read-only nodes.

## Usage notes

-   If you enable the preemptive DDL feature, the connection to the current table on the read-only node may be interrupted or the SQL statements that have not been executed on the current table may be rolled back. Proceed with caution.
    
-   The preemptive DDL feature takes effect only when the value of the **loose\_replica\_lock\_wait\_timeout** parameter is greater than the sum of the value of the **loose\_polar\_mdl\_sync\_preempt\_after\_wait\_second** parameter plus 5.
    
-   To ensure that preemptive DDL takes effect when you rename a table in MySQL for PolarDB 8.0.1 or MySQL for PolarDB 8.0.2, use the `ALTER TABLE RENAME` statement instead of the RENAME statement.
    

## Background information

PolarDB for MySQL uses a shared storage architecture. When you perform a DDL operation, the system acquires an MDL-X lock on the primary node and then notifies read-only nodes of acquiring the MDL-X lock. If tables on the read-only nodes are being accessed, the MDL-X lock synchronization thread is blocked. If the read-only node cannot acquire the MDL-X lock within the specified timeout period, the client returns the following error code and error message: `ERROR 8007 (HY000): Fail to get MDL on replica during DDL synchronize`. This issue frequently occurs in a PolarDB for MySQL cluster that contains multiple read-only nodes. You can use the preemptive DDL feature to resolve the issue.

## Usage

You can set the **loose\_polar\_support\_mdl\_sync\_preemption** parameter to ON to enable the preemptive DDL feature and then configure the **loose\_polar\_mdl\_sync\_preempt\_after\_wait\_second** parameter to specify the timeout period within which the MDL synchronization must be completed. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters). The following table describes the parameters.

**Parameter**

**Level**

**Description**

**loose\_polar\_support\_mdl\_sync\_preemption**

Session

Specifies whether to enable the preemptive DDL feature. Valid values:

-   **ON**
    
-   **OFF** (default)
    

**loose\_polar\_mdl\_sync\_preempt\_after\_wait\_second**

Global

The timeout period within which the MDL synchronization must be completed. If the MDL lock is not synchronized when the specified timeout period ends, a preemption thread is initiated.

Valid values: 1 to 31536000. Unit: seconds. Default value: 10.

## **Examples**

### **Preemptive DDL disabled**

1.  Query the `test.t1` table on a read-only node.
    
    ```
    mysql> use test;
    Database changed
    # Execute a large query for 100 seconds.
    mysql> select sleep(100) from t1;
    ```
    
2.  Add columns on the primary node.
    
    ```
    mysql > alter table t1 add column c int;
    ERROR 8007 (HY000): Fail to get MDL on replica during DDL synchronize
    ```
    
    The preceding example shows that when the preemptive DDL feature is disabled, MDL synchronization fails and the DDL operation performed on the read-only node is blocked due to long-running transactions on the read-only node. This results in the failure of the DDL operation.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1548432071/p673395.png)
    

### **Preemptive DDL enabled**

1.  Query the `test.t1` table on a read-only node.
    
    ```
    mysql> use test;
    Database changed
    # Execute a large query for 100 seconds.
    mysql> select sleep(100) from t1;
    ```
    
2.  Add columns on the primary node.
    
    ```
    mysql> alter table t1 add column c int;
    Query OK, 0 rows affected (11.13 sec)
    Records: 0  Duplicates: 0  Warnings: 0
    ```
    
    The preceding example shows that when the preemptive DDL feature is enabled, MDL lock synchronization is blocked due to long-running transactions on the read-only node. After a specific period of time, a preemption thread is initiated, and the DDL operation succeeds.
    
    ![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0548432071/p673354.png)
    

## **Contact Us**

If you have any questions about DDL operations, please feel free to [Contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
