This topic describes the inventory hint feature provided by AliSQL. You can use the feature together with the returning and statement queue features to commit and roll back transactions at a high speed. This increases the throughput of your application.

## Background information

In business scenarios such as flash sales, inventory reduction is a common task model that requires high concurrency and serialization. In this model, AliSQL uses queues and transactional hints to control concurrency and commit or roll back transactions. This increases the throughput of your application.

You can use the inventory hint feature to increase the performance of an ApsaraDB RDS for MySQL instance to up to 31,000 transactions per second (TPS) when you update hot data in a single row of a table. For more information, see [Test method and results of hot data updates on a single row](/help/en/rds/support/test-method-and-results-of-hot-data-updates-on-a-single-row#concept-2040011).

## Prerequisites

The RDS instance runs one of the following MySQL versions:

-   MySQL 8.0
    
-   MySQL 5.7
    
-   MySQL 5.6
    

## Syntax

The following hints are introduced and can be used in SELECT, UPDATE, INSERT, and DELETE statements:

-   MySQL 5.7 and MySQL 8.0
    
    -   The following transactional hints are introduced:
        
        -   COMMIT\_ON\_SUCCESS: A transaction is committed if the execution of the statement to which this hint is applied succeeds.
            
        -   ROLLBACK\_ON\_FAIL: A transaction is rolled back if the execution of the statement to which this hint is applied fails.
            
        
        Syntax:
        
        ```
        /*+ COMMIT_ON_SUCCESS */
        /*+ ROLLBACK_ON_FAIL */
        ```
        
        Example:
        
        ```
        UPDATE /*+ COMMIT_ON_SUCCESS ROLLBACK_ON_FAIL */ T
        SET c = c - 1
        WHERE id = 1;
        ```
        
    -   The conditional hint TARGET\_AFFECT\_ROW(NUMBER) is introduced.
        
        After you apply the conditional hint to the current statement, the execution of the statement succeeds only when the number of affected rows is the same as the number that is specified in this hint.
        
        Syntax:
        
        ```
        /*+ TARGET_AFFECT_ROW(NUMBER) */
        ```
        
        Example:
        
        ```
        UPDATE /*+ TARGET_AFFECT_ROW(1) */ T
        SET c = c - 1
        WHERE id = 1;
        ```
        
-   MySQL 5.6
    
    The syntax for the hints in MySQL 5.6 is similar to the syntax for the hints in [MySQL 5.7 and MySQL 8.0](#5debe111826og). The only difference is that you do not need to include the hints in MySQL 5.7 and MySQL 8.0 in comments.
    
    Example:
    
    ```
    UPDATE COMMIT_ON_SUCCESS ROLLBACK_ON_FAIL T
    SET c = c - 1
    WHERE id = 1;
    UPDATE TARGET_AFFECT_ROW(1) T
    SET c = c - 1
    WHERE id = 1;
    ```
    

## Usage notes

-   Hints must be followed by table names.
    
-   When a hint used in a transaction takes effect, it triggers an automatic commitment of the transaction. Therefore, place the hint in the last SQL statement of the transaction.
    
-   Transactional hints do not support the autocommit mode. If you use a transactional hint in a statement that is executed in autocommit mode, an error is reported. Example:
    
    ```
    mysql> UPDATE /*+ commit_on_success rollback_on_fail target_affect_row(1) */ t
        -> SET col1 = col1 + 1
        -> WHERE id = 1;
    ERROR 7531 (HY000): Inventory transactional hints didn't allowed in autocommit mode
    ```
    
-   Transactional hints cannot be used in substatements. If you use a transactional hint in a substatement, an error is reported. Example:
    
    ```
    mysql> CREATE TRIGGER tri_1
        -> BEFORE INSERT ON t
        -> FOR EACH ROW
        -> BEGIN
        -> INSERT /*+ commit_on_success */ INTO t1 VALUES (1);
        -> end//
    
    mysql> INSERT INTO t VALUES (2, 1);
    ERROR HY000: Inventory transactional hints didn't alllowed in stored procedure
    ```
    
-   Conditional hints cannot be used in a SELECT or EXPLAIN statement. If you use a conditional hint in a SELECT or EXPLAIN statement, an error is reported. Example:
    
    ```
    mysql> EXPLAIN UPDATE /*+ commit_on_success rollback_on_fail target_affect_row(1) */ t
        -> SET col1 = col1 + 1
        -> WHERE id = 1;
    ERROR 7532 (HY000): Inventory conditional hints didn't match with result
    ```
    
    **Note**
    
    You can specify an invalid number in TARGET\_AFFECT\_ROW and check whether the system reports errors:
    
    ```
    mysql> EXPLAIN UPDATE /*+ commit_on_success rollback_on_fail target_affect_row(-1) */ t
        -> SET col1 = col1 + 1
        -> WHERE id = 1;
    +----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------------+
    | id | select_type | table | partitions | type  | possible_keys | key     | key_len | ref   | rows | filtered | Extra       |
    +----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------------+
    |  1 | UPDATE      | t     | NULL       | range | PRIMARY       | PRIMARY | 4       | const |    1 |   100.00 | Using where |
    +----+-------------+-------+------------+-------+---------------+---------+---------+-------+------+----------+-------------+
    1 row in set, 2 warnings (0.00 sec)
    
    mysql> show warnings;
    +---------+------+-----------------------------------------------------------------------------------------------------------------------------------------+
    | Level   | Code | Message                                                                                                                                 |
    +---------+------+-----------------------------------------------------------------------------------------------------------------------------------------+
    | Warning | 1064 | Optimizer hint syntax error near '-1) */ t set col1=col1+1 where id =1' at line 1                                                       |
    | Note    | 1003 | update /*+ COMMIT_ON_SUCCESS ROLLBACK_ON_FAIL */ `test`.`t` set `test`.`t`.`col1` = (`test`.`t`.`col1` + 1) where (`test`.`t`.`id` = 1) |
    +---------+------+-----------------------------------------------------------------------------------------------------------------------------------------+
    2 rows in set (0.00 sec)
    ```
    

## Work with the returning feature

You can use the inventory hint feature together with the returning feature to allow the system to return real-time result sets. For more information, see [Returning](/help/en/rds/apsaradb-rds-for-mysql/returning#task-2315489). Example:

```
mysql> CALL dbms_trans.returning("*", "update /*+ commit_on_success rollback_on_fail target_affect_row(1) */ t
                                       set col1=col1+1 where id=1");
+----+------+
| id | col1 |
+----+------+
|  1 |   13 |
+----+------+
1 row in set (0.00 sec)

mysql> CALL dbms_trans.returning("*", "insert /*+ commit_on_success rollback_on_fail target_affect_row(1) */ into
                                       t values(10,10)");
+----+------+
| id | col1 |
+----+------+
| 10 |   10 |
+----+------+
1 row in set (0.01 sec)
            
```

## Work with the statement queue feature

You can use the inventory hint feature together with the statement queue feature for the system to queue statements. For more information, see [Statement queue](/help/en/rds/apsaradb-rds-for-mysql/statement-queue#task-2315487). Example:

```
mysql> UPDATE /*+ ccl_queue_field(id) commit_on_success rollback_on_fail target_affect_row(1) */ t
    -> SET col1 = col1 + 1
    -> WHERE id = 1;

Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> UPDATE /*+ ccl_queue_value(1) commit_on_success rollback_on_fail target_affect_row(1) */ t
    -> SET col1 = col1 + 1
    -> WHERE id = 1;
Query OK, 1 row affected (0.00 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```
