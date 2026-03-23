Hologres supports full Data Definition Language (DDL) transactions and partial Data Manipulation Language (DML) transactions. By default, Hologres supports transactions for single SQL statements. This topic describes the transaction capabilities of Hologres.

## Transaction Support Scenarios

Hologres supports transactions in the following scenarios:

-   Transactions for multiple DDL statements
    
    You can create and roll back multiple tables within a transaction to ensure atomicity. The following is an example:
    
    ```
    BEGIN;
    DROP TABLE IF EXISTS ddl_test;
    CREATE TABLE ddl_test(
              uid   TEXT NOT NULL,
              name  TEXT NOT NULL);
    COMMIT;
    ```
    
-   Mixed DML transactions (Beta)
    
    Hologres V2.0 and later versions support mixed DML statements within the same transaction. This feature ensures the atomicity and consistency of mixed DML operations, especially for data writes. This makes Hologres suitable for light transactional processing (TP) scenarios. Note that if a transaction contains mixed DML statements, it cannot fully leverage the distributed capabilities of Hologres. Therefore, mixed DML statements do not support high Queries Per Second (QPS) scenarios.
    
    -   Scenarios: Use mixed DML statements in the same transaction to ensure consistency for data writes, updates, and deletions.
        
    -   Notes:
        
        -   Mixed DML transactions support only low QPS scenarios and are not suitable for high concurrency situations. To determine the specific QPS that is supported, you must perform tests as needed.
            
        -   If a transaction includes both write and query operations, the query performance is lower than when transactions are not used. The actual performance loss varies based on the scenario.
            
        -   In the same transaction, read, write, delete, and update operations all acquire table-level write locks. This causes multiple transactions on the same table to execute sequentially. For example:![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1651924861/p633498.png)
            
            **Important**
            
            Note: Locks are acquired not only on tables that are being written to, but also on tables that are being queried. For example:
            
            -   User A executes the following SQL:
                
                ```
                SET hg_experimental_enable_transaction = on;
                BEGIN;
                DELETE FROM dml_test;
                INSERT INTO dml_test SELECT * FROM base_tbl;
                COMMIT;
                ```
                
            -   User B executes the following SQL:
                
                ```
                SET hg_experimental_enable_transaction = on;
                BEGIN;
                DELETE FROM dml_test_2;
                INSERT INTO dml_test_2 SELECT * FROM base_tbl;
                COMMIT;
                ```
                
            
            In this case, \`base\_tbl\` is also locked. The SQL statement submitted by User B must wait for the SQL statement submitted by User A to complete before it can be executed. Therefore, after you enable transactions for multiple DML statements, the SQL running time significantly increases if conflicts occur. This may even result in errors due to timeout settings.
            
        
    -   Usage instructions
        
        Transactions for mixed DML statements are disabled by default. You can enable this feature using the following Grand Unified Configuration (GUC) parameter:
        
        ```
        SET hg_experimental_enable_transaction = on;
        ```
        
        After you enable this feature, a single transaction can include multiple DML statements:
        
        -   If a DML statement fails, the system automatically rolls back all other DML statements within the transaction.
            
        -   If a DML statement is executing as expected but you want to roll it back, you can roll back the entire transaction. This action automatically rolls back all DML statements in the transaction.
            
            ```
            SET hg_experimental_enable_transaction = on;
            BEGIN;
            DELETE FROM dml_test;
            INSERT INTO dml_test VALUES (1,'sss');
            ROLLBACK;
            ```
            
        
    
-   Transactions that contain both DDL and DML statements are not supported.
    
    The following example shows the error that is reported when DDL and DML statements are in the same transaction: `ERROR: INSERT in ddl transaction is not supported now`.
    
    ```
    BEGIN;
    DROP TABLE IF EXISTS dml_test;
    CREATE TABLE dml_test
    (
              uid   TEXT NOT NULL,
              name  TEXT NOT NULL);
    INSERT INTO dml_test VALUES('1','tom');
    COMMIT;
    ```
