PolarDB for MySQL supports the left join elimination feature. For complex queries, you can use this feature to transform SQL queries and remove unnecessary `left join` subqueries. This improves the performance of SQL queries.

## **Prerequisites**

A cluster of PolarDB for MySQL 8.0 whose revision version is:

-   8.0.1.1.32 or later
    
-   8.0.2.2.10 or later
    

## **Limits**

To use the left join elimination feature, the following requirements must be met:

-   For a row of data in the left table, only one row in the right table can meet the join condition.
    
-   Except for the `left join` subquery, no data in the right table is referenced in the current SQL statement.
    

## **Background information**

The left join is widely used in complex analytical queries and is the most time-consuming operator in SQL queries. A join operation combines the specified columns in left and right tables and joins the results with the outer query. This complicates the query. Eliminating unnecessary join operations can greatly improve the query performance.

## **Usage**

You can use the **loose\_join\_elimination\_mode** parameter to enable the left join elimination feature. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).

**Parameter**

**Level**

**Description**

**loose\_join\_elimination\_mode**

Global

Specifies whether to enable the left join elimination feature. Default value: REPLICA\_ON. Valid values:

-   ON: enables the left join elimination feature.
    
-   REPLICA\_ON: enables the left join elimination feature only for read-only nodes.
    
-   OFF: disables the left join elimination feature.
    

## **Examples**

**Original query**

In the original query, `table1`, `table2`, and `table3` are `left-joined`. The original query takes 7.5 seconds.

```
EXPLAIN
SELECT count(*)
FROM `table1` `sc`
  LEFT JOIN `table2` `ca` ON `sc`.`car_id` = `ca`.`id`
  LEFT JOIN `table3` `co` ON `sc`.`company_id` = `co`.`id`;

+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------------+------+----------+-------------+
| id | select_type | table | partitions | type   | possible_keys | key     | key_len | ref                   | rows | filtered | Extra       |
+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------------+------+----------+-------------+
|  1 | SIMPLE      | sc    | NULL       | ALL    | NULL          | NULL    | NULL    | NULL                  |    2 |   100.00 | NULL        |
|  1 | SIMPLE      | ca    | NULL       | eq_ref | PRIMARY       | PRIMARY | 4       | je_test.sc.car_id     |    1 |   100.00 | Using index |
|  1 | SIMPLE      | co    | NULL       | eq_ref | PRIMARY       | PRIMARY | 4       | je_test.sc.company_id |    1 |   100.00 | Using index |
+----+-------------+-------+------------+--------+---------------+---------+---------+-----------------------+------+----------+-------------+
```

The primary key of `table1` is used in the conditions for joining `table2` and `table3` to ensure unique rows in the query result. No column in `table2` or `table3` is referenced in the projection, so the `left join` can be eliminated.

**Optimized query**

```
EXPLAIN
SELECT count(*)
FROM `table1` `sc`

+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
| id | select_type | table | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
|  1 | SIMPLE      | sc    | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    2 |   100.00 | NULL  |
+----+-------------+-------+------------+------+---------------+------+---------+------+------+----------+-------+
```

The preceding query indicates that only the `table1` records are queried after joining `table2` and `table3` is eliminated. This greatly saves computing resources and improves execution efficiency. The optimized query takes 0.1 seconds, which is 1/75 of that for the original query.
