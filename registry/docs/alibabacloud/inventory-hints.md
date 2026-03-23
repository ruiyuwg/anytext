This topic describes the inventory hints feature that is provided by PolarDB. This feature can be used together with the statement queue feature. This allows you to quickly commit or roll back transactions.

## Supported versions

Your PolarDB cluster meets one of the following version requirements:

-   A cluster of PolarDB for MySQL 8.0 whose minor version of the kernel is 8.0.1.1.1 or later.
-   A PolarDB for MySQL 5.7 cluster whose engine minor version is 5.7.1.0.17 or later
-   A PolarDB for MySQL 5.6 cluster.

For information about how to view the version of your cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Background information

In scenarios such as flash sales, inventory reduction is a common task model that requires high concurrency and serialization. In this model, PolarDB uses queues and transactional hints to control concurrency and commit or roll back transactions. This increases the throughput of your business.

## Precautions

For a PolarDB for MySQL 8.0 cluster, the `COMMIT_ON_SUCCESS` and `ROLLBACK_ON_FAIL` hints cannot run in `autocommit` mode. Examples:

```
UPDATE /*+ ROLLBACK_ON_FAIL */ T
SET c = c - 1
WHERE id = 1
ERROR 7531 (HY000):Inventory transactinal hints didn't allowed in autocommit mode
```

## Syntax

The inventory hint feature provided by PolarDB supports the SELECT, UPDATE, INSERT, and DELETE statements.

The following inventory hints are used:

-   `COMMIT_ON_SUCCESS`: commits the transaction if the current statement is successfully executed.
    
    Examples:
    
    -   A PolarDB for MySQL 5.6 cluster
        
        ```
        UPDATE COMMIT_ON_SUCCESS T
        SET c = c - 1
        WHERE id = 1;
        ```
        
    -   A PolarDB for MySQL 5.7 or 8.0 cluster
        
        ```
        UPDATE /*+ COMMIT_ON_SUCCESS */ T
        SET c = c - 1
        WHERE id = 1;
        ```
        
-   `ROLLBACK_ON_FAIL`: rolls the transaction back if the current statement fails to be executed.
    
    Examples:
    
    -   A PolarDB for MySQL 5.6 cluster
        
        ```
        UPDATE ROLLBACK_ON_FAIL T
        SET c = c - 1
        WHERE id = 1;
        ```
        
    -   A PolarDB for MySQL 5.7 or 8.0 cluster
        
        ```
        UPDATE /*+ ROLLBACK_ON_FAIL */ T
        SET c = c - 1
        WHERE id = 1;
        ```
        
-   `TARGET_AFFECT_ROW number`: the execution succeeds if the number of rows affected by the current statement matches the specified number of rows. Otherwise, the execution fails.
    
    You can set Target Affect Row to 1. If the UPDATE statement hits at least one record, the update operation succeeds. If no record is updated, the update operation fails.
    
    Examples:
    
    -   A PolarDB for MySQL 5.6 cluster
        
        ```
        UPDATE TARGET_AFFECT_ROW 1  T
        SET c = c - 1
        WHERE id = 1;
        ERROR HY000: The affected row number does not match that of user specified.
        ```
        
    -   A PolarDB for MySQL 5.7 or 8.0 cluster
        
        ```
        UPDATE /*+ TARGET_AFFECT_ROW(1) */ T
        SET c = c - 1
        WHERE id = 1;
        ERROR HY000: The affected row number does not match that of user specified.
        ```
        
    

## Work with the statement queue feature

The `COMMIT_ON_SUCCESS`, `ROLLBACK_ON_FAIL`, and `TARGET_AFFECT_ROW number` hints in the UPDATE, INSERT, and DELETE statements can be used with [Statement queue](/help/en/polardb/polardb-for-mysql/user-guide/statement-queue#task-2315487 "The statement queue feature of allows you to queue statements that may conflict with each other in the same bucket. This reduces overheads from possible conflicts.") to queue statements.

The example of a PolarDB for MySQL 5.6 cluster:

```
UPDATE COMMIT_ON_SUCCESS POLARDB_STATEMENT_CONCURRENT_QUEUE id ROLLBACK_ON_FAIL TARGET_AFFECT_ROW 1 t
SET col1 = col1 + 1
WHERE id = 1;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

UPDATE COMMIT_ON_SUCCESS POLARDB_STATEMENT_CONCURRENT_QUEUE 1 ROLLBACK_ON_FAIL TARGET_AFFECT_ROW 1 t
SET col1 = col1 + 1
WHERE id = 1;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```

The example of a PolarDB for MySQL 5.7 or 8.0 cluster:

```
UPDATE /*+ COMMIT_ON_SUCCESS ROLLBACK_ON_FAIL TARGET_AFFECT_ROW(1) CCL_QUEUE_VALUE('id') */ t
SET col1 = col1 + 1
WHERE id = 1;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

UPDATE /*+ COMMIT_ON_SUCCESS ROLLBACK_ON_FAIL TARGET_AFFECT_ROW(1) CCL_QUEUE_VALUE(1) */ t
SET col1 = col1 + 1
WHERE id = 1;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```
