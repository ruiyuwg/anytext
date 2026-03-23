This topic describes the online partition maintenance feature in PolarDB.

In MySQL Community Edition, data manipulation language (DML) operations and data definition language (DDL) operations cannot be performed simultaneously. Therefore, DDL operations can be performed only during off-peak hours to minimize their impact on DML operations. However, in actual use, partitions are created and deleted at a relatively high rate. The restriction on DDL operations compromises the availability of partitioned tables. The online partition maintenance feature enhances the parallel capabilities of DML operations and some DDL operations, particularly the DDL operations used to create and delete partitions. This helps improve the performance of roll-in and roll-out tasks on partitioned tables. The following figure illustrates the online partition maintenance feature.![Partition locking](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9582489461/p397810.png)

## Prerequisites

-   A cluster of PolarDB for MySQL 8.0 whose revision version is 8.0.2.2.0 or later. For more information about how to view the version of your cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).
    
-   The partition\_level\_mdl\_enabled parameter is set to ON. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    partition\_level\_mdl\_enabled
    
    Global
    
    Specifies whether to enable the partition-level metadata lock (MDL) feature. Valid values:
    
    -   ON: enables the partition-level MDL feature.
        
    -   OFF: disables the partition-level MDL feature.
        
    
    **Note**
    
    You must restart the cluster to validate the modification.
    
-   The global isolation level of the transaction\_isolation parameter must be set to **READ-COMMITTED**. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
    

## Limits

-   The online partition maintenance feature is applicable only to the ADD PARTITION operation for range partitioning and list partitioning, as well as DROP PARTITION, EXCHANGE PARTITION, REBUILD PARTITION, and REORGANIZE PARTITION operations. The online partition maintenance feature for other DDL operations will be available soon.
    
-   The isolation level can also be set to session. If transaction-isolation is set to REPEATABLE-READ or higher, the "`ERROR HY000: Table definition has changed, please retry transaction`" error message may be reported when DDL operations are concurrently performed. This is normal. The reason is that the new partition created by the DDL operation is accessed. You can execute the transaction again to solve the problem.
    

## Usage and examples

The online partition maintenance feature avoids and mitigates effects from partition maintenance on data access. You can perform partition maintenance any time you want. The following examples illustrate how the feature can be used.

```
# Display the structure of the tr table on client 1.
SHOW CREATE TABLE tr\G                                 
*************************** 1. row ***************************    
       Table: tr                                                  
Create Table: CREATE TABLE `tr` (                                  
  `id` int(11) DEFAULT NULL,                                       
  `name` varchar(50) DEFAULT NULL,                                 
  `purchased` date DEFAULT NULL                                    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 
/*!50100 PARTITION BY RANGE (year(`purchased`))                    
(PARTITION p0 VALUES LESS THAN (1990) ENGINE = InnoDB,             
 PARTITION p1 VALUES LESS THAN (1995) ENGINE = InnoDB,             
 PARTITION p2 VALUES LESS THAN (2000) ENGINE = InnoDB,             
 PARTITION p3 VALUES LESS THAN (2005) ENGINE = InnoDB,            
 PARTITION p4 VALUES LESS THAN (2010) ENGINE = InnoDB,            
 PARTITION p5 VALUES LESS THAN (2015) ENGINE = InnoDB) */         
1 row in set (0.00 sec)

# Enable the transaction on client 1.
BEGIN;                                                 
Query OK, 0 rows affected (0.01 sec)                               
                                                                  
SELECT * FROM tr WHERE purchased >= '2010-01-01';      
+------+----------------+------------+                            
| id   | name           | purchased  |                             
+------+----------------+------------+                             
|    5 | exercise bike  | 2014-05-09 |                         
|    7 | espresso maker | 2011-11-22 |                             
+------+----------------+------------+                             
2 rows in set (0.01 sec)                                          

# Create a new partition on client 2.
ALTER TABLE tr ADD PARTITION (PARTITION p6 VALUES LESS THAN (2020));
INSERT INTO tr VALUES (11, 'hope', '2017-11-04'), (12, 'carmen', '2018-06-08');

# In the same transaction, client 1 can access the data of the new partition.
SELECT * FROM tr WHERE purchased >= '2010-01-01';
+------+----------------+------------+                             
| id   | name           | purchased  |                            
+------+----------------+------------+                            
|    5 | exercise bike  | 2014-05-09 |                            
|    7 | espresso maker | 2011-11-22 |                             
|   11 | hope           | 2017-11-04 |                             
|   12 | carmen         | 2018-06-08 |                            
+------+----------------+------------+                            
4 rows in set (0.00 sec)

# Delete the old partition on client 2.
ALTER TABLE tr DROP PARTITION p0;

# Display the table definition on client 1. The result shows that the new partition p6 exists and the old partition p0 is deleted.
SHOW CREATE TABLE tr\G                                 
*************************** 1. row ***************************     
       Table: tr                                                   
Create Table: CREATE TABLE `tr` (                                 
  `id` int(11) DEFAULT NULL,                                       
  `name` varchar(50) DEFAULT NULL,                                 
  `purchased` date DEFAULT NULL                                    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 
/*!50100 PARTITION BY RANGE (year(`purchased`))                    
(PARTITION p1 VALUES LESS THAN (1995) ENGINE = InnoDB,             
 PARTITION p2 VALUES LESS THAN (2000) ENGINE = InnoDB,             
 PARTITION p3 VALUES LESS THAN (2005) ENGINE = InnoDB,             
 PARTITION p4 VALUES LESS THAN (2010) ENGINE = InnoDB,            
 PARTITION p5 VALUES LESS THAN (2015) ENGINE = InnoDB,             
 PARTITION p6 VALUES LESS THAN (2020) ENGINE = InnoDB) */         
1 row in set (0.00 sec)

# Commit the transaction on client 1.
COMMIT;
```

## Performance comparison

The following sections describe the most common scenarios for the interaction of DML and DDL operations: blocked DDL operations by long-running transactions and time-consuming DDL operations. The performance is compared for the cases where the online partition maintenance feature is enabled and disabled.

-   Scenario 1: Blocked DDL operations by long-running transactions
    
    In this scenario, a DDL operation is performed on a partitioned table. The DDL operation is blocked because a long-running transaction is not yet committed. The blocked DDL operation blocks all new DML operations, causing the database traffic to drop to zero. ![Blocked DDL operations by long-running transactions](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9582489461/p401708.png)
    
    The preceding figure shows that the traffic of sysbench in the table quickly drops to zero, and the database is completely unavailable when the online partition maintenance feature is disabled and a DDL operation is performed. The database resumes only after you cancel the DDL operation or commit all long-running transactions. After the online partition maintenance feature is enabled, the following effects are observed:
    
    -   Under normal circumstances, the throughput of sysbench is exactly the same as that when the online partition maintenance function is disabled. This indicates that performance is not affected when the online partition maintenance feature is enabled.
        
    -   Uncommitted long transactions do not block the DDL operation. DML traffic on the database is stable and hardly affected.
        
    
-   Scenario 2: Time-consuming DDL operations
    
    In this scenario, although the DDL operation is not blocked by other SQL statements, the DML throughput is affected by the time-consuming DDL operation. ![Time-consuming DDL operations](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9582489461/p401723.png)
    
    In the preceding figure, when the online partition maintenance feature is disabled, the time-consuming DDL operation causes severe jittering of DML throughput. After the online partition maintenance feature is enabled, the time-consuming DDL operation has little impact on the DML throughput.
    

## View MDL status

The online partition maintenance feature uses partition-level MDLs to reduce the lock granularity during DML and DDL operations and therefore improve concurrency. When a DDL operation is performed, you can view the MDL status at the partition level from the `performance_schema.metadata_locks` table. The following sample code provides an example:

```
# Display the structure of the tr table on client 1.
SHOW CREATE TABLE tr\G                                 
*************************** 1. row ***************************    
       Table: tr                                                  
Create Table: CREATE TABLE `tr` (                                  
  `id` int(11) DEFAULT NULL,                                       
  `name` varchar(50) DEFAULT NULL,                                 
  `purchased` date DEFAULT NULL                                    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci 
/*!50100 PARTITION BY RANGE (year(`purchased`))                    
(PARTITION p0 VALUES LESS THAN (1990) ENGINE = InnoDB,             
 PARTITION p1 VALUES LESS THAN (1995) ENGINE = InnoDB,             
 PARTITION p2 VALUES LESS THAN (2000) ENGINE = InnoDB,             
 PARTITION p3 VALUES LESS THAN (2005) ENGINE = InnoDB,            
 PARTITION p4 VALUES LESS THAN (2010) ENGINE = InnoDB,            
 PARTITION p5 VALUES LESS THAN (2015) ENGINE = InnoDB) */         
1 row in set (0.00 sec)

# Enable the transaction on client 1.
BEGIN;                                                 
Query OK, 0 rows affected (0.01 sec)                               
                                                                  
SELECT * FROM tr WHERE purchased >= '2010-01-01';      
+------+----------------+------------+                            
| id   | name           | purchased  |                             
+------+----------------+------------+                             
|    5 | exercise bike  | 2014-05-09 |                         
|    7 | espresso maker | 2011-11-22 |                             
+------+----------------+------------+                             
2 rows in set (0.01 sec)

# View MDL status on client 1.
SELECT * FROM performance_schema.metadata_locks;
+-------------+--------------------+----------------+-------------+-----------------------+---------------------+---------------+-------------+-------------------+-----------------+----------------+
| OBJECT_TYPE | OBJECT_SCHEMA      | OBJECT_NAME    | COLUMN_NAME | OBJECT_INSTANCE_BEGIN | LOCK_TYPE           | LOCK_DURATION | LOCK_STATUS | SOURCE            | OWNER_THREAD_ID | OWNER_EVENT_ID |
+-------------+--------------------+----------------+-------------+-----------------------+---------------------+---------------+-------------+-------------------+-----------------+----------------+
| TABLE       | test               | tr             | NULL        |       140734887898944 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:6759 |              67 |             17 |
| PARTITION   | test               | tr             | p5          |       140734887896704 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:6502 |              67 |             17 |
| TABLE       | performance_schema | metadata_locks | NULL        |       140734879511488 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:6759 |              68 |              4 |
| SCHEMA      | performance_schema | NULL           | NULL        |       140734879511648 | INTENTION_EXCLUSIVE | TRANSACTION   | GRANTED     | dd_schema.cc:108  |              68 |              4 |
+-------------+--------------------+----------------+-------------+-----------------------+---------------------+---------------+-------------+-------------------+-----------------+----------------+
4 rows in set (0.02 sec)

# The result on client 1 shows that the SHARED_READ lock at the tr table level is obtained and the SHARED_READ lock at the p5 partition level is accessed after pruning. Then, try to delete the p5 partition on client 2.
ALTER TABLE tr DROP PARTITION p5;

# The preceding delete operation enters the waiting state because the p5 partition is being accessed by client 1. You can execute the following statement to check whether the thread is waiting for the partition-level MDL. 
SHOW PROCESSLIST;
+----+-----------------+-----------+------+---------+------+-------------------------------------+----------------------------------+
| Id | User            | Host      | db   | Command | Time | State                               | Info                             |
+----+-----------------+-----------+------+---------+------+-------------------------------------+----------------------------------+
|  4 | event_scheduler | localhost | NULL | Daemon  | 1550 | Waiting on empty queue              | NULL                             |
|  8 | root            | localhost | test | Sleep   |  426 |                                     | NULL                             |
|  9 | root            | localhost | NULL | Query   |    0 | starting                            | SHOW PROCESSLIST                 |
| 10 | root            | localhost | test | Query   |   10 | Waiting for partition metadata lock | ALTER TABLE tr DROP PARTITION p5 |
+----+-----------------+-----------+------+---------+------+-------------------------------------+----------------------------------+
4 rows in set (0.00 sec)

# The p5 partition is deleted from client 2 after the transaction is committed on client 1. 
```

## View the number of online partition maintenance tasks

You can use the STATUS parameter `Online_altered_partition` to view the number of online partition maintenance tasks. Example:

```
SHOW STATUS LIKE 'Online_altered_partition';
+--------------------------+-------+
| Variable_name            | Value |
+--------------------------+-------+
| Online_altered_partition | 2565  |
+--------------------------+-------+
1 row in set (0.00 sec)
```

## Operation Video
