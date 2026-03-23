You can specify JOIN clauses in SQL statements to join multiple tables. Simple Log Service allows you to join data that is stored in different Logstores of the same project. You can also join data that is stored in a Logstore with data that is stored in a MySQL database or with data that is stored in an Object Storage Service (OSS) bucket. This topic describes the syntax of JOIN clauses and provides examples on how to use JOIN clauses.

## Syntax

```
SELECT table.key
FROM table1
INNER|LEFT|RIGHT|FULL OUTER JOIN table2
ON table1.key=table2.key
```

Simple Log Service allows you to use INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN clauses in SELECT statements. For more information, see [JOIN](https://dev.mysql.com/doc/refman/8.0/en/join.html).

**JOIN syntax**

**Description**

INNER JOIN

Returns only the matching rows of data that meets the conditions specified in the SELECT statement from two tables.

LEFT JOIN

Returns all rows of data that meets the conditions specified in the SELECT statement from the left table (table1) even if no matching rows exist in the right table (table2).

RIGHT JOIN

Returns all rows of data that meets the conditions specified in the SELECT statement from the right table (table2) even if no matching rows exist in the left table (table1).

FULL JOIN

Returns the rows of data that meets the conditions specified in the SELECT statement if a table contains a matching row.

## Parameters

**Parameter**

**Description**

_key_

A log field or an expression. The value of this parameter can be of an arbitrary data type.

_table_

_table1_ is a Logstore. _table2_ can be a Logstore, a MySQL database, or an OSS bucket. For more information, see [Associate Simple Log Service with a MySQL database](/help/en/sls/associate-log-service-with-a-mysql-database#concept-gbk-qrt-q2b) and [Associate Simple Log Service with an OSS bucket](/help/en/sls/associate-log-service-with-an-oss-bucket#concept-fgy-nrt-q2b).

## Examples

The internal-diagnostic\_log Logstore is used to record information such as the consumption latency, alerts, and log collection information for each Logstore in a project. The internal-operation\_log Logstore is used to record the operations that are performed on all resources in the project. You can use a JOIN clause to query log data from the two Logstores and obtain the information about the consumer groups, consumption latency, and request methods for each Logstore in the project.

### Example 1: INNER JOIN

-   Query statement
    
    ```
    * |
    SELECT
      "internal-diagnostic_log".consumer_group,
      "internal-diagnostic_log".logstore,
      "internal-operation_log".Latency,
      "internal-operation_log".Method
    FROM  "internal-diagnostic_log"
      INNER JOIN "internal-operation_log" ON "internal-diagnostic_log".logstore = "internal-operation_log".logstore
    LIMIT
      10000
    ```
    
-   Query and analysis results
    
    In this example, 1,328 rows of data that meets the specified conditions are returned.
    
    ![inner join](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5123358361/p336683.png)
    

### Example 2: LEFT JOIN

-   Query statement
    
    ```
    * |
    SELECT
      "internal-diagnostic_log".consumer_group,
      "internal-diagnostic_log".logstore,
      "internal-operation_log".Latency,
      "internal-operation_log".Method
    FROM  "internal-diagnostic_log"
      LEFT JOIN "internal-operation_log" ON "internal-diagnostic_log".logstore = "internal-operation_log".logstore
    LIMIT
      10000
    ```
    
-   Query and analysis results
    
    In this example, 1,328 rows of data in the internal-diagnostic\_log Logstore are returned.
    
    ![LEFT JOIN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3102398361/p336924.png)
    

### Example 3: RIGHT JOIN

-   Query statement
    
    ```
    * |
    SELECT
      "internal-diagnostic_log".consumer_group,
      "internal-diagnostic_log".logstore,
      "internal-operation_log".Latency,
      "internal-operation_log".Method
    FROM  "internal-diagnostic_log"
      RIGHT JOIN "internal-operation_log" ON "internal-diagnostic_log".logstore = "internal-operation_log".logstore
    LIMIT
      10000
    ```
    
-   Query and analysis results
    
    In this example, 1,757 rows of data in the internal-operation\_log Logstore are returned.
    
    ![RIGHT JOIN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3102398361/p336923.png)
    

### Example 4: FULL JOIN

-   Query statement
    
    ```
    * |
    SELECT
      "internal-diagnostic_log".consumer_group,
      "internal-diagnostic_log".logstore,
      "internal-operation_log".Latency,
      "internal-operation_log".Method
    FROM  "internal-diagnostic_log"
      FULL OUTER JOIN "internal-operation_log" ON "internal-diagnostic_log".logstore = "internal-operation_log".logstore
    LIMIT
      10000
    ```
    
-   Query and analysis results
    
    In this example, 1,757 rows of data that meets the specified conditions are returned.
    
    ![FULL OUTER JOIN](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3102398361/p336930.png)
