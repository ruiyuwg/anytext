When a query that involves a large amount of data is being executed, large amounts of compute resources are consumed as the SQL layer reads data from the storage engine layer and performs computation. To improve query performance, PolarDB for MySQL pushes bloom filters down to the storage engine layer. This topic describes the bloom filter pushdown feature.

## Prerequisites

-   The version of your PolarDB for MySQL cluster is 8.0, and the revision version is 8.0.2.2.3 or later. For more information about how to view the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).
-   The data is of the INT type.

## Background

Bloom filter is a proven method that can reduce data read from the storage engine and improve computing efficiency. PolarDB for MySQL accelerates hash joins by using bloom filters. When a hash table is created, the system creates bloom filters and pushes them down to the probe engine. The probe engine uses the bloom filters to filter out the data that is unnecessary for the query. This method can significantly improve query performance by reducing the amounts of data transmitted between the SQL layer and storage engine layer and reducing the computing workloads at the SQL layer.

## Use the bloom filter pushdown feature

You can use the loose\_bloom\_filter\_enabled parameter to enable bloom filters. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301 "After you create a cluster, you can modify the parameters of the cluster and its nodes in the console and export the modified parameters as templates. You can also apply templates to clusters that are deployed in the same region for easy parameter modification. This topic describes how to modify the parameters of a cluster and its nodes, export the modified parameters as templates, and apply the templates.").

  

Parameter

Level

Description

loose\_bloom\_filter\_enabled

Global and session

Specifies whether bloom filters are enabled. Default value: ON. Valid values:

-   ON
-   OFF

## Performance test

In this performance test, the TPC-H schema without primary keys and indexes is used. In the following section, the execution plans for Q3, Q11, and Q16 of TPC-H are described. The `hash join with bloom filter` of the `Extra` parameter indicates that bloom filters are used.

-   Q3
    
    ```
    EXPLAIN
    SELECT l_orderkey,
           SUM(l_extendedprice * (1 - l_discount)) AS revenue,
           o_orderdate,
           o_shippriority
    FROM customer,
         orders,
         lineitem
    WHERE c_mktsegment = 'MACHINERY'
      AND c_custkey = o_custkey
      AND l_orderkey = o_orderkey
      AND o_orderdate < '1995-03-10'
      AND l_shipdate > '1995-03-10'
    GROUP BY l_orderkey,
             o_orderdate,
             o_shippriority
    ORDER BY revenue DESC,
             o_orderdate
    LIMIT 10\G
    *************************** 1. row ***************************
               id: 1
      select_type: SIMPLE
            table: customer
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 148463
         filtered: 10.00
            Extra: Using where; Using temporary; Using filesort
    *************************** 2. row ***************************
               id: 1
      select_type: SIMPLE
            table: orders
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 1486962
         filtered: 3.33
            Extra: Using where; Using join buffer (hash join with bloom filter)
    *************************** 3. row ***************************
               id: 1
      select_type: SIMPLE
            table: lineitem
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 5948979
         filtered: 3.33
            Extra: Using where; Using join buffer (hash join with bloom filter)
    ```
    
-   Q11
    
    ```
    EXPLAIN
    SELECT ps_partkey,
           SUM(ps_supplycost * ps_availqty) AS value
    FROM partsupp,
         supplier,
         nation
    WHERE ps_suppkey = s_suppkey
      AND s_nationkey = n_nationkey
      AND n_name = 'INDIA'
    GROUP BY ps_partkey
    HAVING SUM(ps_supplycost * ps_availqty) >
      (SELECT SUM(ps_supplycost * ps_availqty) * 0.0001000000
       FROM partsupp,
            supplier,
            nation
       WHERE ps_suppkey = s_suppkey
         AND s_nationkey = n_nationkey
         AND n_name = 'INDIA' )
    ORDER BY value DESC\G
    *************************** 1. row ***************************
               id: 1
      select_type: PRIMARY
            table: nation
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 25
         filtered: 10.00
            Extra: Using where; Using temporary; Using filesort
    *************************** 2. row ***************************
               id: 1
      select_type: PRIMARY
            table: supplier
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 10000
         filtered: 10.00
            Extra: Using where; Using join buffer (hash join with bloom filter)
    *************************** 3. row ***************************
               id: 1
      select_type: PRIMARY
            table: partsupp
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 791815
         filtered: 10.00
            Extra: Using where; Using join buffer (hash join with bloom filter)
    *************************** 4. row ***************************
               id: 2
      select_type: SUBQUERY
            table: nation
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 25
         filtered: 10.00
            Extra: Using where
    *************************** 5. row ***************************
               id: 2
      select_type: SUBQUERY
            table: supplier
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 10000
         filtered: 10.00
            Extra: Using where; Using join buffer (hash join with bloom filter)
    *************************** 6. row ***************************
               id: 2
      select_type: SUBQUERY
            table: partsupp
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 791815
         filtered: 10.00
            Extra: Using where; Using join buffer (hash join with bloom filter)
    ```
    
-   Q16
    
    ```
    EXPLAIN SELECT p_brand,
           p_type,
           p_size,
           COUNT(DISTINCT ps_suppkey) AS supplier_cnt
    FROM partsupp,
         part
    WHERE p_partkey = ps_partkey
      AND p_brand <> 'Brand#33'
      AND p_type NOT LIKE 'PROMO POLISHED%'
      AND p_size IN (34,
                     45,
                     33,
                     42,
                     9,
                     24,
                     26,
                     7)
      AND ps_suppkey NOT IN
        (SELECT s_suppkey
         FROM supplier
         WHERE s_comment LIKE '%Customer%Complaints%' )
    GROUP BY p_brand,
             p_type,
             p_size
    ORDER BY supplier_cnt DESC,
             p_brand,
             p_type,
             p_size\G
    *************************** 1. row ***************************
               id: 1
      select_type: PRIMARY
            table: part
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 198116
         filtered: 40.00
            Extra: Using where; Using temporary; Using filesort
    *************************** 2. row ***************************
               id: 1
      select_type: PRIMARY
            table: partsupp
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 791815
         filtered: 10.00
            Extra: Using where; Using join buffer (hash join with bloom filter)
    *************************** 3. row ***************************
               id: 2
      select_type: SUBQUERY
            table: supplier
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 10000
         filtered: 11.11
            Extra: Using where
    ```
    

## Test results

The TPC-H test is performed with a scale factor of 1. The following figure shows the performance differences between enabling and disabling bloom filters.![Bloom Filter](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0947910661/p448660.png)
