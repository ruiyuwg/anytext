When a query that involves a large amount of data is being executed, large amounts of compute resources are consumed as the SQL layer reads data from the storage engine layer and performs computation. To improve query performance, PolarDB for MySQL pushes predicates down to the storage engine layer. This topic describes the predicate pushdown feature.

## Prerequisites

The version of your PolarDB for MySQL cluster is 8.0, and the revision version meets the following requirements:

-   8.0.1.1.5 or later
-   8.0.2.2.0 or later

For more information about how to view the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Background

In MySQL Community Edition, the range condition in an index can be used to determine the range of the data that is scanned by the storage engine layer. After the SQL layer obtains the data from the storage engine layer, the data is again filtered based on the range conditions. This process is unnecessary. It consumes compute resources and prevents specific computations from being pushed down to the storage engine layer. To resolve the issue, PolarDB for MySQL provides the full predicate pushdown feature that deletes range conditions after the conditions are used to scan data in the storage engine.

## Use the full predicate pushdown feature

Use the `detach_range_condition` variable of the loose\_optimizer\_switch parameter to enable the full predicate pushdown feature. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301 "After you create a cluster, you can modify the parameters of the cluster and its nodes in the console and export the modified parameters as templates. You can also apply templates to clusters that are deployed in the same region for easy parameter modification. This topic describes how to modify the parameters of a cluster and its nodes, export the modified parameters as templates, and apply the templates.").

## Performance test

In this performance test, the TPC-H schema is used. Execute an EXPLAIN statement to view the execution plan of Q2 when the full predicate pushdown feature is disabled. In this case, `Using where` is returned for the `Extra` parameter, which indicates that the range conditions are retained.

```
set @@optimizer_switch='detach_range_condition=off';
EXPLAIN SELECT * FROM lineitem WHERE l_orderkey > 10 AND l_orderkey < 60000000 LIMIT 10000000, 10\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: lineitem
   partitions: NULL
         type: range
possible_keys: PRIMARY,i_l_orderkey,i_l_orderkey_quantity
          key: PRIMARY
      key_len: 4
          ref: NULL
         rows: 29720232
     filtered: 100.00
        Extra: Using where
```

After `ignore_polar_optimizer_rule` is set to `ON`. The predicates that specify range conditions are deleted after they are used to scan data in the storage engine. In this example, Q5 and Q6 of TPC-H are used. Execute EXPLAIN statements to view the execution plans of Q5 and Q6 when the full predicate pushdown feature is enabled. `Using index` is returned for the `Extra` parameter.

-   Q5
    
    ```
    set @@ignore_polar_optimizer_rule=on;
    EXPLAIN SELECT COUNT(*) FROM lineitem WHERE l_suppkey > 10 AND l_suppkey < 50000\G
    *************************** 1. row ***************************
               id: 1
      select_type: SIMPLE
            table: lineitem
       partitions: NULL
             type: range
    possible_keys: i_l_suppkey_partkey,i_l_suppkey
              key: i_l_suppkey
          key_len: 5
              ref: NULL
             rows: 29720232
         filtered: 100.00
            Extra: Using index
    ```
    
-   Q6
    
    ```
    set @@ignore_polar_optimizer_rule=on;
    EXPLAIN SELECT COUNT(*) FROM LINEITEM WHERE l_receiptDATE > '1992-01-03' AND l_receiptDATE < '1994-12-31'\G
    *************************** 1. row ***************************
               id: 1
      select_type: SIMPLE
            table: LINEITEM
       partitions: NULL
             type: range
    possible_keys: i_l_receiptdate
              key: i_l_receiptdate
          key_len: 4
              ref: NULL
             rows: 29720232
         filtered: 100.00
            Extra: Using index
    ```
    

## Test results

The TPC-H test is performed with a scale factor of 10. Q5 and Q6 are used. The following figure shows the performance differences between enabling and disabling the full predicate pushdown feature.![Predicate pushdown](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3718910661/p448541.png)
