When a query that involves a large amount of data is being executed, large amounts of compute resources are consumed as the SQL layer reads data from the storage engine layer and performs computation. To improve query performance, PolarDB for MySQL provides the fast traverse feature that pushes the optimizer down to the storage engine layer. This topic describes the fast traverse feature.

## Prerequisites

The version of your PolarDB for MySQL cluster is 8.0, and the revision version meets the following requirements:

-   8.0.1.1.5 or later
    
-   8.0.2.2.0 or later
    

For information about how to view the version of your cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Background

In MySQL Community Edition 8.0.13, `COUNT (*)` operations are not executed by the InnoDB engine, which causes heavy performance overheads. In MySQL Community Edition 8.0.18, the records on an InnoDB page can be traversed, but not according to the index selected by the optimizer. The primary key index is used instead.

PolarDB for MySQL provides the fast traverse feature that allows the records on a page to be traversed based on the index selected by the optimizer. This feature prevents prolonged page lock hold caused by indexes that obtain data from tables and version restoration by Multiversion Concurrency Control (MVCC).

## Use the fast traverse feature

The fast traverse feature is provided out-of-the box with supported PolarDB for MySQL clusters.

## Performance test

In this performance test, the TPC-H schema is used. Execute an EXPLAIN statement to view the execution plan of the TPC-H query.

```
mysql> EXPLAIN SELECT COUNT(*) FROM lineitem\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: lineitem
   partitions: NULL
         type: index
possible_keys: NULL
          key: i_l_shipdate
      key_len: 4
          ref: NULL
         rows: 59440464
     filtered: 100.00
        Extra: Using index
```

## Test results

The TPC-H test is performed with a scale factor of 10. PolarDB clusters, with the fast traverse feature enabled, deliver better performance than MySQL Community Edition 8.0.13 and 8.0.18, as shown in the following figure. The `innodb_parallel_read_threads` parameter is set to 1.![Performance of fast traverse](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7496910661/p460332.png)

## **FAQ**

What is the default value of `innodb_parallel_read_threads` in PolarDB for MySQL?

The default value of `innodb_parallel_read_threads` is 0. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).
