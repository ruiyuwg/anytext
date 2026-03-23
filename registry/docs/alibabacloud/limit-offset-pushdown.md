When a query that involves a large amount of data is being executed, large amounts of compute resources are consumed as the SQL layer reads data from the storage engine layer and performs computation. To improve query performance, PolarDB for MySQL pushes LIMIT OFFSET down to the storage engine layer. This topic describes the LIMIT OFFSET pushdown feature.

## Prerequisites

The version of your PolarDB for MySQL cluster is 8.0, and the revision version meets the following requirements:

-   8.0.1.1.16 or later
-   8.0.2.2.0 or later

For more information about how to view the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Background

In MySQL community, the LIMIT clause is executed at the SQL layer. The SQL layer reads data from the storage engine layer, processes the query, and returns the filtered results based on OFFSET. When secondary indexes are queried and columns in the primary table need to be accessed, the SQL layer must obtain column data from the tables. When no WHERE conditions are processed at the SQL layer, including when predicates are fully pushed down to the storage engine layer, data is filtered based on the LIMIT OFFSET clause without any computation. In this case, large amounts data are transmitted from the storage engine layer to the SQL layer. For a paged query, this causes longer response time as the number of pages increases. PolarDB for MySQL pushes LIMIT OFFSET clauses down to the storage engine, so that the data is filtered at the storage engine layer and not retrieved when secondary indexes are used.

## Limits

The OFFSET value must be larger than 512.

**Note** To disable this limit, set the ignore\_polar\_optimizer\_rule parameter to `ON`. For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301 "After you create a cluster, you can modify the parameters of the cluster and its nodes in the console and export the modified parameters as templates. You can also apply templates to clusters that are deployed in the same region for easy parameter modification. This topic describes how to modify the parameters of a cluster and its nodes, export the modified parameters as templates, and apply the templates.").

  

Parameter

Level

Description

ignore\_polar\_optimizer\_rule

Global and session

Species whether to disable the limit for the OFFSET value. Default value: OFF. Valid values:

-   ON: The limit is disabled.
-   OFF: The limit is enabled.

## Use the LIMIT OFFSET pushdown feature

You can use the limit\_offset\_pushdown variable of the `loose_optimizer_switch` parameter to enable the LIMIT OFFSET pushdown feature For more information, see [Specify cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301 "After you create a cluster, you can modify the parameters of the cluster and its nodes in the console and export the modified parameters as templates. You can also apply templates to clusters that are deployed in the same region for easy parameter modification. This topic describes how to modify the parameters of a cluster and its nodes, export the modified parameters as templates, and apply the templates.").

  

Parameter

Level

Description

loose\_optimizer\_switch

Global and session

Specifies whether to enable the query optimization features of PolarDB. Variables related to the LIMIT OFFSET pushdown feature:

-   limit\_offset\_pushdown: specifies whether to enable the LIMIT OFFSET pushdown feature. Default value: ON. Valid values:
    -   ON
    -   OFF
-   detach\_range\_condition: specifies whether to enable the predicate pushdown feature. Default value: ON. Valid values:
    -   ON
    -   OFF

## Performance test

In this performance test, the TPC-H schema is used. When the LIMIT OFFSET pushdown feature is enabled and you execute the EXPLAIN statement to view the execution plan, `Using limit-offset pushdown` is returned for the `Extra` parameter.

-   Common LIMIT OFFSET scenario
    
    In the following example, Q1 of the TPC-H test is used. The primary table is accessed and the statement contains not predicate conditions.
    
    ```
    EXPLAIN
    SELECT *
    FROM lineitem
    LIMIT 10000000,
          10\G
    *************************** 1. row ***************************
               id: 1
      select_type: SIMPLE
            table: lineitem
       partitions: NULL
             type: ALL
    possible_keys: NULL
              key: NULL
          key_len: NULL
              ref: NULL
             rows: 59440464
         filtered: 100.00
            Extra: Using limit-offset pushdown
    ```
    
-   LIMIT OFFSET scenario with predicate conditions
    
    For queries that contain predicate conditions, if the predicate conditions cover the range based on which the storage engine scans data, the predicate conditions are deleted by the full predicate pushdown feature. In this case, LIMIT OFFSET clauses can be pushed down.
    
    -   The execution plan of Q2 accesses the primary key and contains range conditions based on the primary key.
        
        ```
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
                Extra: Using limit-offset pushdown
        ```
        
    -   The execution plan of Q3 accesses the secondary index, contains range conditions based on the primary key, and must obtain data of other columns from the tables.
        
        ```
        EXPLAIN SELECT * FROM lineitem WHERE l_partkey > 10 AND l_partkey < 200000 LIMIT 5000000, 10\G
        *************************** 1. row ***************************
                   id: 1
          select_type: SIMPLE
                table: lineitem
           partitions: NULL
                 type: range
        possible_keys: i_l_partkey,i_l_suppkey_partkey
                  key: i_l_suppkey_partkey
              key_len: 5
                  ref: NULL
                 rows: 11123302
             filtered: 100.00
                Extra: Using limit-offset pushdown
        ```
        
    
-   LIMIT OFFSET scenario with ORDER BY clauses and ordering indexes
    
    In a standard paged query, ORDER BY is used to sort the query results. When indexes are used to accelerate the ORDER BY clause, the LIMIT OFFSET clause can be pushed down after the predicates are deleted at the SQL layer.
    
    ```
    EXPLAIN SELECT * FROM lineitem WHERE l_partkey > 10 AND l_partkey < 200000 ORDER BY l_partkey LIMIT 5000000, 10\G
    *************************** 1. row ***************************
               id: 1
      select_type: SIMPLE
            table: lineitem
       partitions: NULL
             type: range
    possible_keys: i_l_partkey,i_l_suppkey_partkey
              key: i_l_suppkey_partkey
          key_len: 5
              ref: NULL
             rows: 11123302
         filtered: 100.00
            Extra: Using limit-offset pushdown
    ```
    

## Performance improvements

The TPC-H test is performed with a scale factor of 10. Q1, Q2, and Q3 are used. The following figure shows the performance differences between enabling and disabling the LIMIT OFFSET pushdown feature.![Performance improvements](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9035160661/p448499.png)
