PolarDB supports conversion from IN predicates to joins. For complex queries, the optimizer converts certain big IN predicates into joins.

## **Prerequisites**

-   A cluster of PolarDB for MySQL 8.0 whose revision version is 8.0.2.2.10 or later. For information about how to view the cluster version, see [Engine versions 5.6, 5.7, and 8.0](/help/en/polardb/polardb-for-mysql/engine-versions#section-zpr-kam-8wb).
    
-   The number of elements in the IN list reaches the number specified in the **loose\_in\_predicate\_conversion\_threshold** parameter.
    
-   The `[NOT]IN` condition is at the top level of the `WHERE` or `ON` clause.
    

## **Usage**

You can use the **loose\_in\_predicate\_conversion\_threshold** parameter to specify whether to enable the feature. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).

**Parameter**

**Level**

**Description**

**loose\_in\_predicate\_conversion\_threshold**

Global

Specifies whether to enable the feature. If the number of elements in the IN list of an SQL statement reaches the number specified in this parameter, the IN predicates in the SQL statement are converted into joins. Value values: 0 to 18446744073709551615. Default value: 5000.

**Note**

If this parameter is set to 0, the feature is disabled.

## **Examples**

**Original query:**

```
mysql> EXPLAIN  SELECT * FROM t WHERE a IN (1,2,3,5,5);
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
| id | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra       |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
|  1 | SIMPLE      | t     | NULL       | ALL  | NULL          | NULL | NULL    | NULL |  160 |    50.00 | Using where |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------------+
1 row in set, 1 warning (0.00 sec)
mysql> EXPLAIN format=tree SELECT * FROM t WHERE a IN (1,2,3,5,5);
+------------------------------------------------------------------------------------------------------+
| EXPLAIN                                                                                              |
+------------------------------------------------------------------------------------------------------+
| -> Filter: (t.a IN (1,2,3,5,5))  (cost=16.25 rows=80)
    -> TABLE scan ON t  (cost=16.25 rows=160)
 |
+------------------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)
```

**Converted query:**

```
mysql> SET in_predicate_conversion_threshold=5;
mysql> EXPLAIN  SELECT * FROM t WHERE a IN (1,2,3,5,5);
+----+-------------+------------+------------+--------+---------------------+---------------------+---------+----------+------+----------+--------------------------+
| id | select_type | table      | partitions | type   | possible_keys       | key                 | key_len | ref      | rows | filtered | Extra                    |
+----+-------------+------------+------------+--------+---------------------+---------------------+---------+----------+------+----------+--------------------------+
|  1 | PRIMARY     | t          | NULL       | ALL    | NULL                | NULL                | NULL    | NULL     |  160 |   100.00 | Using where              |
|  1 | PRIMARY     | <derived3> | NULL       | eq_ref | <auto_distinct_key> | <auto_distinct_key> | 8       | test.t.a |    1 |   100.00 | Using where; Using index |
|  3 | DERIVED     | NULL       | NULL       | NULL   | NULL                | NULL                | NULL    | NULL     | NULL |     NULL | IN-list Converted        |
+----+-------------+------------+------------+--------+---------------------+---------------------+---------+----------+------+----------+--------------------------+
mysql> EXPLAIN format=tree SELECT * FROM t1 WHERE a IN (1,2,3,5,5);
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| EXPLAIN                                                                                                                                                                                                                                                                                                    |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| -> Nested loop semijoin
    -> Filter: (t1.a IS NOT NULL)  (cost=0.55 rows=3)
        -> TABLE scan ON t1  (cost=0.55 rows=3)
    -> Filter: (t1.a = tvc_0._col_1)
        -> Index lookup ON tvc_0 using <auto_key0> (_col_1=t1.a)
            -> Materialize
                -> scan ON in-list: 5 rows
```
