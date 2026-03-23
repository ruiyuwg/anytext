You can use the `ROLLUP` syntax to calculate the statistical results and the overall value of all data after data is grouped in different dimensions by using only one query statement. This topic describes how to use the `ROLLUP` syntax.

## Prerequisites

Your cluster is of PolarDB for MySQL 8.0 and its revision version is 8.0.1.1.0 or later. For more information about how to query the version of a cluster, see [Query the engine cluster](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Syntax

The `ROLLUP` syntax can be regarded as an extension of the `GROUP BY` syntax. You only need to add `WITH ROLLUP` after the original column specified in `GROUP BY`. Example:

```
SELECT year, country, product, SUM(profit) AS profit
       FROM sales
       GROUP BY year, country, product WITH ROLLUP;
```

`ROLLUP` produces an aggregation result for each column specified in GROUP BY, and calculates a higher-level aggregation result from right to left until all data is aggregated. In the preceding example, the total revenue is calculated based on the following order of clauses: `GROUP BY year, country, product` (top priority) `GROUP BY year, country` (secondary priority), and `GROUP BY year` (lowest priority). Then, the total revenue is calculated for the entire sales table. During the calculation of the total revenue for the table, `GROUP BY` is ignored.

The ROLLUP option provides the following benefits:

-   ROLLUP facilitates multi-dimensional statistical analysis and reduces the complexity of SQL queries for multi-dimensional analysis.
    
-   ROLLUP improves the efficiency of processing queries.
    
-   `ROLLUP` enables the server to perform all the aggregation operations. The client can access data for only once to collect statistics. This reduces the processing loads and the network traffic on the client. If ROLLUP is not used, you must perform multiple queries to collect the same statistics.
    

## Test the performance of parallel queries after ROLLUP is used

PolarDB improves the capabilities of parallel queries by using `ROLLUP`. If ROLLUP is used, multiple threads can aggregate data in parallel and produce aggregation results. This improves the efficiency of executing statements.

TPC Benchmark H (TPC-H) is used for testing. In the following example, the first SQL query is used. In the following statement, `ROLLUP` is added in the GROUP BY clause.

**Note**

In this example, a test based on the TPC-H benchmark is implemented, but it does not meet all the requirements of the TPC-H benchmark test. Therefore, the test results may not match the published results of the TPC-H benchmark test.

```
select
    l_returnflag,
    l_linestatus,
    sum(l_quantity) as sum_qty,
    sum(l_extendedprice) as sum_base_price,
    sum(l_extendedprice * (1 - l_discount)) as sum_disc_price,
    sum(l_extendedprice * (1 - l_discount) * (1 + l_tax)) as sum_charge,
    avg(l_quantity) as avg_qty,
    avg(l_extendedprice) as avg_price,
    avg(l_discount) as avg_disc,
    count(*) as count_order
from
    lineitem
where
    l_shipdate <= date_sub('1998-12-01', interval ':1' day)
group by
    l_returnflag,
    l_linestatus
with rollup
order by
    l_returnflag,
    l_linestatus;
```

-   When parallel queries are disabled, 318.73s are consumed to execute the statement.![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2532729951/p134093.png)
    
-   After parallel queries are enabled, 22.30s are consumed to execute the statement. The efficiency of executing the statement is improved by more than 14 times.![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2532729951/p134094.png)
