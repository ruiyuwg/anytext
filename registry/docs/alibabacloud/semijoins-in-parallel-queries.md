You can use semijoins to optimize subqueries, so as to reduce the number of queries and improve query performance. This topic provides basic information about semijoins and describes how to use semijoins in parallel queries.

## Prerequisites

Your cluster is of PolarDB for MySQL 8.0 and its revision version meets one of the following requirements:

-   8.0.1.0.5 or later.
    
-   8.0.2.2.7 or later.
    

For information about how to view the version of a cluster, see the [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh) section of the "Engine versions" topic.

## Background information

MySQL 5.6.5 and later versions support semijoins. A semijoin returns a row from an outer table if the row in the outer table matches at least one row in an inner table. If the row in the outer table matches more than one row in the inner table, the semijoin returns the row only once. For a query that contains subqueries and does not use semijoins, subqueries are performed for each tuple that matches the conditions in the outer table. This reduces query efficiency. You can use semijoins to reduce the number of subqueries and improve query performance. When semijoins are used, a subquery is converted to a join and the inner table is pulled out to the outer query. This way, the inner and outer tables are in parallel. After the system finds a tuple match between the inner table and the outer table, the system returns the result. This significantly improves query efficiency.

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0109900161/p133452.png)

## Strategies

The following semijoin strategies are used:

-   DuplicateWeedout Strategy
    
    The DuplicateWeedout strategy works by creating a temporary table and using the unique row IDs in the table to avoid the production of duplicates.
    
    ![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9245189461/p133901.png)
    
-   Materialization Strategy
    
    The Materialization strategy works by materializing `nested tables` into an indexed temporary table and using the temporary table to perform a join. The index is used to remove duplicates and can also be used later for lookups when the system joins the temporary table with the outer tables.
    
    ![3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9245189461/p133902.png)
    
-   Firstmatch Strategy
    
    The FirstMatch strategy works by executing the subquery and short-cutting its execution as soon as the first match is found to avoid the production of duplicates.
    
    ![4](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9245189461/p133903.png)
    
-   LooseScan Strategy
    
    The LooseScan strategy works by grouping data in the inner table based on its index, selecting one record from each value group of the subquery, and joining the record with the outer table to get a query result without duplicates.
    
    ![5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0345189461/p133904.png)
    

## Syntax

In most cases, a semijoin uses the IN or EXISTS clause as the join condition.

-   IN
    
    ```
    SELECT * FROM Employee WHERE DeptName IN (   SELECT DeptName   FROM Dept )
    ```
    
-   EXISTS
    
    ```
    SELECT * FROM Employee WHERE EXISTS (   SELECT 1   FROM Dept   WHERE Employee.DeptName = Dept.DeptName )
    ```
    

## Run semijoins in parallel to improve performance

PolarDB supports all semijoin strategies and accelerates the parallel queries that use semijoin strategies. In this way, each semijoin task is split into multiple subtasks and a multi-threading model is used to run the subtasks in parallel. In PolarDB 8.0.2.2.7 or later, multi-phase parallel query for semijoin materialization is supported. This further improves the query performance of semijoins. Q20 is used in the following example.

```
SELECT
   s_name,
   s_address 
FROM
   supplier,
   nation 
WHERE
   s_suppkey IN 
   (
      SELECT
         ps_suppkey 
      FROM
         partsupp 
      WHERE
         ps_partkey IN 
         (
            SELECT
               p_partkey 
            FROM
               part 
            WHERE
               p_name LIKE '[COLOR]%' 
         )
         AND ps_availqty > ( 
         SELECT
            0.5 * SUM(l_quantity) 
         FROM
            lineitem 
         WHERE
            l_partkey = ps_partkey 
            AND l_suppkey = ps_suppkey 
            AND l_shipdate >= date('[DATE]') 
            AND l_shipdate < date('[DATE]') + interval '1' year ) 
   )
   AND s_nationkey = n_nationkey 
   AND n_name = '[NATION]' 
ORDER BY
   s_name;
```

In this example, both subqueries and outer queries are parallel queries with DOP of 32. Subqueries first generate materialized tables in parallel, and then outer queries are processed in parallel. This takes full advantage of the processing power of CPUs and maximizes parallel query capabilities. The example shows the multi-phase parallel query capabilities after the elastic parallel query feature is enabled in a standard TPC-H hot data scenario where the scale is 100 GB.

**Note**

In this example, a test based on the TPC-H benchmark is implemented, but it does not meet all the requirements of the TPC-H benchmark test. Therefore, the test results may not match the published results of the TPC-H benchmark test.

The following elastic parallel query execution plan is used:

```
 -> Sort: <temporary>.s_name  (cost=5014616.15 rows=100942)
    -> Stream results
        -> Nested loop inner join  (cost=127689.96 rows=100942)
            -> Gather (slice: 2; workers: 64; nodes: 2)  (cost=6187.68 rows=100928)
                -> Nested loop inner join  (cost=1052.43 rows=1577)
                    -> Filter: (nation.N_NAME = 'KENYA')  (cost=2.29 rows=3)
                        -> Table scan on nation  (cost=2.29 rows=25)
                    -> Parallel index lookup on supplier using SUPPLIER_FK1 (S_NATIONKEY=nation.N_NATIONKEY), with index condition: (supplier.S_SUPPKEY is not null), with parallel partitions: 863  (cost=381.79 rows=631)
            -> Single-row index lookup on <subquery2> using <auto_distinct_key> (ps_suppkey=supplier.S_SUPPKEY)
                -> Materialize with deduplication
                    -> Gather (slice: 1; workers: 64; nodes: 2)  (cost=487376.70 rows=8142336)
                        -> Nested loop inner join  (cost=73888.70 rows=127224)
                            -> Filter: (part.P_NAME like 'lime%')  (cost=31271.54 rows=33159)
                                -> Parallel table scan on part, with parallel partitions: 6244  (cost=31271.54 rows=298459)
                            -> Filter: (partsupp.PS_AVAILQTY > (select #4))  (cost=0.94 rows=4)
                                -> Index lookup on partsupp using PRIMARY (PS_PARTKEY=part.P_PARTKEY)  (cost=0.94 rows=4)
                                -> Select #4 (subquery in condition; dependent)
                                    -> Aggregate: sum(lineitem.L_QUANTITY)
                                        -> Filter: ((lineitem.L_SHIPDATE >= DATE'1994-01-01') and (lineitem.L_SHIPDATE < <cache>((DATE'1994-01-01' + interval '1' year))))  (cost=4.05 rows=1)
                                            -> Index lookup on lineitem using LINEITEM_FK2 (L_PARTKEY=partsupp.PS_PARTKEY, L_SUPPKEY=partsupp.PS_SUPPKEY)  (cost=4.05 rows=7)
```

The execution time when multi-node elastic parallel query is enabled is:

![456789](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2064470171/p511873.png)

The result indicates that the execution time is reduced from 43.52 seconds to 2.29 seconds, and the query speed 19 times faster.
