The statement queue feature of PolarDB allows you to queue statements that may conflict with each other in the same bucket. This reduces overheads from possible conflicts.

## Background information

During the execution of concurrent statements, the MySQL server and engine may conflict with each other in some serial operations. For example, transaction locks are common in Data Manipulation Language (DML) statements. In InnoDB, a row is the smallest unit that can be locked and the row-level locking is the minimum lock granularity in transaction locks. If statements are concurrently executed on the same row, conflicts may occur and the system throughput may decrease as the concurrency increases. The statement queue feature provided by PolarDB reduces overheads from these conflicts and increases the performance of your databases.

## Limits

-   One of the following PolarDB clusters must be used:
    
    -   A cluster of PolarDB for MySQL 8.0 whose minor engine version is 8.0.1.1.10 or later.
        
    -   A cluster of PolarDB for MySQL 5.7 whose minor engine version is 5.7.1.0.6 or later.
        
    -   A cluster of PolarDB for MySQL 5.6 whose minor engine version is 20200601 or later.
        
-   PolarDB for MySQL 5.6 and PolarDB for MySQL 5.7 and 8.0 use different syntax to implement the statement queue feature. If you use PolarDB for MySQL 5.7 and 8.0 clusters, statement queue can work with [Statement outline](/help/en/polardb/polardb-for-mysql/user-guide/statement-outline#concept-1664234) to support online management of the number of concurrent SQL statements.
    
-   After you enable the hot row optimization feature by setting hotspot to ON, the statement queue mechanism is invalid.
    

## Effect

In the scenario test where concurrent UPDATE statements are executed on a single row, the performance of PolarDB is about four times as that of native MySQL.

## Syntax

-   In PolarDB for MySQL 5.6, you can queue statements in buckets with a hash algorithm by using one of the following methods.
    
    **Note**
    
    You can use `POLARDB_STATEMENT_CONCURRENT_QUEUE` in SELECT, UPDATE, INSERT, and DELETE statements.
    
    -   Queue statements in buckets based on the INT or STRING value.
        
        -   Syntax:
            
            ```
            POLARDB_STATEMENT_CONCURRENT_QUEUE [int | string]
            ```
            
        -   Example:
            
            ```
            insert POLARDB_STATEMENT_CONCURRENT_QUEUE 1 into t values(1, 1, 'xpchild');
            update POLARDB_STATEMENT_CONCURRENT_QUEUE 1 t set c=c+1 where id = 1;
            update POLARDB_STATEMENT_CONCURRENT_QUEUE "xpchild" t set col1 = col1+1 where id =1;
            ```
            
    -   Queue statements in buckets based on the field value in the WHERE clause.
        
        -   Syntax:
            
            ```
            POLARDB_STATEMENT_CONCURRENT_QUEUE [field]
            ```
            
        -   Example:
            
            ```
            select POLARDB_STATEMENT_CONCURRENT_QUEUE id * from t where 3 = id;
            update POLARDB_STATEMENT_CONCURRENT_QUEUE id t set c=c+1 where id = 1 and name = 'xpchild';
            ```
            
            **Note**
            
            In the `POLARDB_STATEMENT_CONCURRENT_QUEUE [field]` syntax, only binary operations on original columns are supported in the WHERE clause. The value on the right side of the binary operation must be a number or a string. Functions or calculations cannot be used on these original columns.
            
-   In PolarDB for MySQL 5.7 and 8.0, you can queue statements in buckets by using one of the following methods with the hint syntax.
    
    **Note**
    
    You can use `ccl_queue_value` in SELECT, UPDATE, INSERT, and DELETE statements.
    
    -   Queue statements in buckets based on the INT or STRING value.
        
        -   Syntax:
            
            ```
            /*+ CCL_QUEUE_VALUE([INT | STRING)] */
            ```
            
        -   Example:
            
            ```
            update /*+ ccl_queue_value(1) */ t set c=c+1 where id = 1;
            
            update /*+ ccl_queue_value('xpchild') */ t set c=c+1 
                                                       where name = 'xpchild';
            ```
            
    -   Queue statements in buckets based on the field value in the WHERE clause.
        
        -   Syntax:
            
            ```
            /*+ CCL_QUEUE_FIELD(STRING) */
            ```
            
        -   Example:
            
            ```
             update /*+ ccl_queue_field("id") */ t set c=c+1
                                                  where id = 1 and name = 'xpchild';
            ```
            
            **Note**
            
            In the `/*+ CCL_QUEUE_FIELD(STRING) */` syntax, only binary operations on original columns are supported in the WHERE clause. The value on the right side of the binary operation must be a number or a string. Functions or calculations cannot be used on these original columns.
            

## Variable

PolarDB provides the following variables that are used to define the number of buckets and size of a statement queue.

**Variable**

**Description**

ccl\_queue\_bucket\_count

The number of buckets. Valid values: 1 to 64. Default value: 4.

ccl\_queue\_bucket\_size

The number of concurrent statements supported by a bucket. Valid values: 1 to 4096. Default value: 64.

## Operation

PolarDB provides the following functions that are used to query the status of a statement queue:

-   dbms\_ccl.show\_ccl\_queue()
    
    This function is used to query the status of the current statement queue.
    
    ```
    mysql> call dbms_ccl.show_ccl_queue();   
    +------+-------+-------------------+---------+---------+----------+
    | ID   | TYPE  | CONCURRENCY_COUNT | MATCHED | RUNNING | WAITTING |
    +------+-------+-------------------+---------+---------+----------+
    |    1 | QUEUE |                64 |       1 |       0 |        0 |
    |    2 | QUEUE |                64 |   40744 |      65 |        6 |
    |    3 | QUEUE |                64 |       0 |       0 |        0 |
    |    4 | QUEUE |                64 |       0 |       0 |        0 |
    +------+-------+-------------------+---------+---------+----------+
    4 rows in set (0.01 sec)
    ```
    
    **Note**
    
    The following table lists the CONCURRENCY\_COUNT, MATCHED, RUNNING, and WAITTING parameters:
    
    -   CONCURRENCY\_COUNT: the maximum number of concurrent statements.
        
    -   MATCHED: the total number of statements that match the rule.
        
    -   RUNNING: the number of concurrent running statements.
        
    -   WAITTING: the number of statements that are waiting in queue.
        
    
-   dbms\_ccl.flush\_ccl\_queue()
    
    This function is used to delete the data about a statement queue from the memory and query the status of the statement queue.
    
    ```
    mysql> call dbms_ccl.flush_ccl_queue();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Query OK, 0 rows affected (0.00 sec)
    
    mysql> call dbms_ccl.show_ccl_queue();
    +------+-------+-------------------+---------+---------+----------+
    | ID   | TYPE  | CONCURRENCY_COUNT | MATCHED | RUNNING | WAITTING |
    +------+-------+-------------------+---------+---------+----------+
    |    1 | QUEUE |                64 |       0 |       0 |        0 |
    |    2 | QUEUE |                64 |       0 |       0 |        0 |
    |    3 | QUEUE |                64 |       0 |       0 |        0 |
    |    4 | QUEUE |                64 |       0 |       0 |        0 |
    +------+-------+-------------------+---------+---------+----------+
    4 rows in set (0.00 sec)
    ```
    

## Work with statement outline to support online updates

In PolarDB for MySQL 5.7 and 8.0, statement queue can work with [Statement outline](/help/en/polardb/polardb-for-mysql/user-guide/statement-outline#concept-1664234) to support online management of the number of concurrent SQL statements. This minimizes changes to your application code. In the following example, Sysbench is used to execute the update\_non\_index.lua script.

**Note**

In PolarDB for MySQL 5.6, statement queue cannot work with [Statement outline](/help/en/polardb/polardb-for-mysql/user-guide/statement-outline#concept-1664234) because PolarDB for MySQL 5.6 uses a different syntax from that of PolarDB for MySQL 8.0.

-   Test environment
    
    -   Schema
        
        ```
        CREATE TABLE `sbtest1` (
          `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
          `k` int(10) unsigned NOT NULL DEFAULT '0',
          `c` char(120) NOT NULL DEFAULT '',
          `pad` char(60) NOT NULL DEFAULT '',
          PRIMARY KEY (`id`),
          KEY `k_1` (`k`)
        ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 MAX_ROWS=1000000;
        ```
        
    -   Statement
        
        ```
        UPDATE sbtest1 SET c='xpchild' WHERE id=0;
        ```
        
    -   Script
        
        ```
        ./sysbench 
        --mysql-host= {$ip}\
        --mysql-port= {$port}\
        --mysql-db=test\ 
        --test=./sysbench/share/sysbench/update_non_index.lua\ 
        --oltp-tables-count=1\ 
        --oltp_table_size=1\ 
        --num-threads=128\
        --mysql-user=u0\
        ```
        
-   Procedure
    
    1.  Create a statement outline in online mode.
        
        ```
        mysql> CALL DBMS_OUTLN.add_optimizer_outline('test', '', 1, 
                                                     ' /*+ ccl_queue_field("id") */ ',
                                 "UPDATE sbtest1 SET c='xpchild' WHERE id=0");
        Query OK, 0 rows affected (0.01 sec)
        ```
        
    2.  View the statement outline that you created.
        
        ```
        mysql> call dbms_outln.show_outline();
        +------+--------+------------------------------------------------------------------+-----------+-------+------+--------------------------------+------+----------+---------------------------------------------+
        | ID   | SCHEMA | DIGEST                                                           | TYPE      | SCOPE | POS  | HINT                           | HIT  | OVERFLOW | DIGEST_TEXT                                 |
        +------+--------+------------------------------------------------------------------+-----------+-------+------+--------------------------------+------+----------+---------------------------------------------+
        |    1 | test   | 7b945614749e541e0600753367884acff5df7e7ee2f5fb0af5ea58897910f023 | OPTIMIZER |       |    1 |  /*+ ccl_queue_field("id") */  |    0 |        0 | UPDATE `sbtest1` SET `c` = ? WHERE `id` = ? |
        +------+--------+------------------------------------------------------------------+-----------+-------+------+--------------------------------+------+----------+---------------------------------------------+
        1 row in set (0.00 sec)
        ```
        
    3.  Verify that the statement outline has taken effect.
        
        ```
        mysql> explain UPDATE sbtest1 SET c='xpchild' WHERE id=0;
        +----+-------------+---------+------------+-------+---------------+---------+---------+-------+------+----------+-------------+
        | id | select_type | table   | partitions | type  | possible_keys | key     | key_len | ref   | rows | filtered | Extra       |
        +----+-------------+---------+------------+-------+---------------+---------+---------+-------+------+----------+-------------+
        |  1 | UPDATE      | sbtest1 | NULL       | range | PRIMARY       | PRIMARY | 4       | const |    1 |   100.00 | Using where |
        +----+-------------+---------+------------+-------+---------------+---------+---------+-------+------+----------+-------------+
        1 row in set, 1 warning (0.00 sec)
        
        mysql> show warnings;
        +-------+------+-----------------------------------------------------------------------------------------------------------------------------+
        | Level | Code | Message                                                                                                                     |
        +-------+------+-----------------------------------------------------------------------------------------------------------------------------+
        | Note  | 1003 | update /*+ CCL_QUEUE_FIELD('id') */ `test`.`sbtest1` set `test`.`sbtest1`.`c` = 'xpchild' where (`test`.`sbtest1`.`id` = 0) |
        +-------+------+-----------------------------------------------------------------------------------------------------------------------------+
        1 row in set (0.00 sec)
        ```
        
    4.  Query the status of the statement queue that is used.
        
        ```
        mysql> call dbms_ccl.show_ccl_queue();
        +------+-------+-------------------+---------+---------+----------+
        | ID   | TYPE  | CONCURRENCY_COUNT | MATCHED | RUNNING | WAITTING |
        +------+-------+-------------------+---------+---------+----------+
        |    1 | QUEUE |                64 |       0 |       0 |        0 |
        |    2 | QUEUE |                64 |       0 |       0 |        0 |
        |    3 | QUEUE |                64 |       0 |       0 |        0 |
        |    4 | QUEUE |                64 |       0 |       0 |        0 |
        +------+-------+-------------------+---------+---------+----------+
        4 rows in set (0.00 sec)
        ```
        
    5.  Start the test.
        
        ```
        sysbench 
        --mysql-host= {$ip}\
        --mysql-port= {$port}\
        --mysql-db=test\ 
        --test=./sysbench/share/sysbench/update_non_index.lua\ 
        --oltp-tables-count=1\ 
        --oltp_table_size=1\ 
        --num-threads=128\
        --mysql-user=u0\
        ```
        
    6.  Verify the test result.
        
        ```
        mysql> call dbms_ccl.show_ccl_queue();
        +------+-------+-------------------+---------+---------+----------+
        | ID   | TYPE  | CONCURRENCY_COUNT | MATCHED | RUNNING | WAITTING |
        +------+-------+-------------------+---------+---------+----------+
        |    1 | QUEUE |                64 |   10996 |      63 |        4 |
        |    2 | QUEUE |                64 |       0 |       0 |        0 |
        |    3 | QUEUE |                64 |       0 |       0 |        0 |
        |    4 | QUEUE |                64 |       0 |       0 |        0 |
        +------+-------+-------------------+---------+---------+----------+
        4 rows in set (0.03 sec)
        
        mysql> call dbms_outln.show_outline();
        +------+--------+-----------+-----------+-------+------+--------------------------------+--------+----------+---------------------------------------------+
        | ID   | SCHEMA | DIGEST    | TYPE      | SCOPE | POS  | HINT                           | HIT    | OVERFLOW | DIGEST_TEXT                                 |
        +------+--------+-----------+-----------+-------+------+--------------------------------+--------+----------+---------------------------------------------+
        |    1 | test   | xxxxxxxxx | OPTIMIZER |       |    1 |  /*+ ccl_queue_field("id") */  | 115795 |        0 | UPDATE `sbtest1` SET `c` = ? WHERE `id` = ? |
        +------+--------+-----------+-----------+-------+------+--------------------------------+--------+----------+---------------------------------------------+
        1 row in set (0.00 sec)
        ```
        
        **Note**
        
        Based on the query results, a total of 115,795 statements hit the rules for the statement outline, a total of 10,996 statements hit the rules for the statement queue, a total of 63 statements are being concurrently executed, and four statements are waiting in queue.
