PolarDB for MySQL provides the Partial Result Cache (PTRC) feature that caches and reuses intermediate result sets produced by specific operators in a query to improve query performance. This topic describes what PTRC is, how it works, and how the optimizer determines whether to use it.

## **Overview**

PTRC caches intermediate result sets produced by specific operators in a query, such as correlated subqueries and nested loop joins. The cached results will be reused if the same operator is executed again.

The result cache is "partial" in two aspects:

-   PTRC caches only intermediate result sets of specific operators in a query, not result sets of the entire query.
    
-   PTRC does not cache all the result sets of these specific operators, either. The scope of the cached result sets is subject to memory limits.
    

Compared with the traditional query cache mechanism, PTRC works for subqueries, not entire queries, and the life-cycle of PTRC starts and ends as queries start and end. As a result, PTRC is suitable for a wider variety of scenarios. PTRC works only for operators, so it does not cause data inconsistency when queries are executed across nodes. PTRC can be enabled as long as a single operator in a query meets specific requirements, as described in the following section. The query optimizer determines whether to use PTRC based on costs.

## **How PTRC works**

PTRC can be enabled for an operator if it meets the following requirements:

-   The operator depends on a correlated parameter and is executed multiple times within a query. Examples are nested loop joins and related subqueries.
    
-   The correlated parameter of the operator remains the same when the operator is repeatedly executed. For example, the operator cannot contain functions that cause changes to the results, such as Random, NOW, and UDF.
    

A correlated parameter is a parameter in the outer query on which the operator depends. For example, a query contains the following operation: `t1 JOIN t2 ON t1.a = t2.a`. In this operation, each row of `t1`, the driving table, is separately joined with a row of the `t2` table. `t1.a` is the correlated parameter of this nested loop join. If `t1` contains duplicate values that match `t1.a`, PTRC can reuse the results for these values. For another example, in a correlated subquery, every execution of the subquery depends on the result of the outer query, which is used as the driving parameter.

TPC-H Q17 is a typical example of queries that can benefit from PTRC.

```
select
        sum(l_extendedprice) / 7.0 as avg_yearly
from
        lineitem,
        part
where
        p_partkey = l_partkey
        and p_brand = 'Brand#34'
        and p_container = 'MED BOX'
        and l_quantity < (
                select
                        0.2 * avg(l_quantity)
                from
                        lineitem
                where
                        l_partkey = p_partkey
        );
```

PTRC caches the results in the key-value pair format, where the key is the correlated parameter of the operator and the value is the intermediate result. In this example, the key is p\_partkey and the value is true or false.

The following figure shows the execution process that involves PTRC.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9916375761/p542698.png)

Each time the subquery is executed, the system checks whether the `p_partkey` key exists in the cache of PTRC.

-   If it is not found, the subquery is executed. The result is then added to the cache.
    
-   If it is found, the system directly uses the cached result without executing the subquery.
    

In TPC-H Q17, the subquery is executed after `part` is joined with `lineitem`. The joined result contains a large number of identical values in `p_partkey`, the correlated parameter. The results for these `p_partkey` values can be reused by PTRC, which significantly improves performance.

In the execution plan returned for an `EXPLAIN` statement, an operator named Partial result cache is displayed before the subquery is executed, as shown in the following figure. This indicates that the PTRC feature is in effect.![PTRC execution plan](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9916375761/p542503.png)

## **Prerequisites**

The PolarDB for MySQL cluster runs MySQL 8.0 and uses revision version 8.0.2.2.9 or later. For information about how to check the cluster version, see [Engine versions](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## **Parameters**

**Parameter**

**Level**

**Description**

partial\_result\_cache\_enabled

Global/Session

Specifies whether to enable the PTRC feature. Default value: ON. Valid values:

-   **ON**
    
-   **OFF**
    

partial\_result\_cache\_cost\_threshold

Global/Session

The cost threshold. PTRC is triggered only if the cost of the entire query exceeds this threshold value.

Value values: 0 to 18446744073709551615. Default value: 10000.

partial\_result\_cache\_check\_frequency

Global/Session

The number of cache misses after which the dynamic feedback mechanism is triggered.

Value values: 0 to 18446744073709551615. Default value: 200.

partial\_result\_cache\_low\_hit\_rate

Global/Session

The hit rate threshold that determines whether to use PTRC. The partial\_result\_cache\_low\_hit\_rate value is lower than the partial\_result\_cache\_high\_hit\_rate value. The system uses PTRC only if the estimated hit rate is higher than this value, and stops using PTRC if the actual hit rate becomes lower than this value during execution of the query.

Valid values: 0 to 100. Default value: 20.

partial\_result\_cache\_high\_hit\_rate

Global/Session

The hit rate threshold that determines whether to dump cache from memory to disks. The partial\_result\_cache\_high\_hit\_rate value is higher than the partial\_result\_cache\_low\_hit\_rate value. If the maximum amount of memory used by PTRC is reached, and the hit rate is higher than this value, the cached results are dumped from memory to disks, and new cache will be stored in disks.

Valid values: 0 to 100. Default value: 70.

partial\_result\_cache\_max\_mem\_size

Global/Session

The maximum amount of memory that can be used by PTRC for a single query.

Value values: 0 to 18446744073709551615. Unit: bytes. Default value: 67108864.

## **How the optimizer determines whether to use PTRC**

PTRC consumes system resources when it is in effect. For example, it checks the cached results each time the operator is executed, and the cached results occupy memory space. Therefore, PTRC may not be suitable for all queries.

It is up to the optimizer to determine whether to use PTRC for a query. The following parameters are taken into consideration:

-   `partial_result_cache_cost_threshold`
    
-   `partial_result_cache_low_hit_rate`
    

`partial_result_cache_cost_threshold` takes precedence.

-   If the overall cost of a query is lower than this threshold, the optimizer considers this query a short query that incurs trivial execution costs in itself. In this case, PTRC can only slightly improve the performance, or may even slow down the response speed due to cache checks.
    
-   If the overall cost of a query is higher than this threshold, the optimizer traverses all the operators to find the ones that meet PTRC requirements, and then estimates the hit rates of the qualified operators.
    
    ```
    hit_rate = (fanout - ndv)/fanout
    ```
    
    `fanout` indicates the total number of times an operator is executed. `ndv` indicates the number of unique values of the correlated parameter (the key).
    

When `hit_rate` is lower than the `partial_result_cache_low_hit_rate` value, PTRC is not used for the operator. However, the estimation may not always work. In MySQL, cost is estimated based on indexes or histograms. If the column of the correlated parameter does not have indexes or histograms, `ndv` cannot be accurately estimated. In this case, the optimizer enables PTRC for the query without estimating the cost. The dynamic feedback mechanism will determine, during the execution of the query, whether to continue using PTRC.

## **Dynamic feedback mechanism of PTRC**

During the execution of a query, the system monitors the hit rate and memory usage of PTRC and determines whether to continue using the feature. This is the dynamic feedback mechanism. When PTRC is enabled, the system collects information of each cache check, and periodically calculates the hit rate based on the information. If the hit rate becomes lower than the `partial_result_cache_low_hit_rate` value, the system disables PTRC for the rest of the execution to reduce performance overheads.

The `partial_result_cache_check_frequency` parameter specifies how often the hit rate is calculated. For example, if the default value 200 is used, the hit rate is calculated every 200 cache misses.

The system also calculates the hit rate when the amount of memory used by PTRC cache reaches a threshold value. In this case, the system may also delete the cache or dump the cache to disks.

Description of the mechanism when the memory limit is exceeded:

1.  When `hit_rate` is lower than `partial_result_cache_low_hit_rate`, PTRC is disabled.
    
2.  When `hit_rate` is higher than `partial_result_cache_high_hit_rate`, cache stored in memory is dumped to disks. The change of storage media does not sharply deteriorate the performance improvement.
    
3.  When `hit_rate` is between the two thresholds, a Least Recently Used (LRU) mechanism takes effect. The system deletes the cache that does not meet the hit rate requirement, and caches new data. If the new cache again causes excessive memory usage, the dynamic feedback mechanism is triggered again.
    

The memory limit is specified by the `partial_result_cache_max_mem_size` parameter. When the memory usage of PTRC in a query exceeds this limit, the dynamic feedback mechanism is triggered for all operators for which PTRC is enabled in the query.

## **Performance test**

The following factors affect the impact of PTRC:

-   The cost of the operators for which PTRC is used. The higher the cost, the larger the performance improvement. If the cost is low, PTRC delivers only slight performance improvement.
    
-   The cache hit rate. The higher the hit rate, the larger the performance improvement.
    

In this test, PTRC is used for the following subquery in TPC-H Q17. ![TPCH-Q17测试](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1269530961/p558363.png)

The execution plan of the query with PTRC enabled.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9916375761/p542649.png)

In TPCH-Q17, the cache hit rate is 96%. The performance is significantly improved by PTRC, as shown in the following figure. ![性能测试](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5107485761/p558345.png)

## **Summary**

PTRC is designed for queries with complex operators that depend on correlated parameters. It caches and reuses intermediate result sets to reduce repeated computing. If the hit rate is high, PTRC can bring significant performance improvement. Operators for which PTRC is suitable include correlated subqueries and nested loop joins (inner joins, outer joins, semi joins, and anti joins).
