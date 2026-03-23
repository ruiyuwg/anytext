Unnesting is a common method to optimize queries that contain subqueries. This topic describes how to unnest subqueries by using window functions and GROUP BY clauses.

## Prerequisites

The version of the cluster is PolarDB for MySQL 8.0 and the revision version of the cluster is 8.0.2.2.1 or later. For information about how to view the version of your cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Background

Subqueries are widely used in analytic queries. More than one-third of the 22 queries in TPC-H contain subqueries. A subquery that is not unnested from its outer query is executed each time the outer query is performed on a row of data. If the outer query generates a large amount of data and the subquery is not associated with indexes, the execution of the subquery will be highly time-consuming. Subquery unnesting transforms the subquery into an equivalent JOIN statement. This can avoid executing the subquery for multiple times and allow the optimizer to further optimize the JOIN statement.

## Unnest queries by using a window function

**Overview**

The following figure illustrates the structure of a query that contains a subquery.![Query structure](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9987260661/p401470.png)T1, T2, and T3 each are a collection of one or more tables and views. T2 that is contained in a subquery is nested with T3, as indicated by the dotted line. T1 is contained in the outer query but is not nested with T2 in the subquery.

The outer query and subquery must meet the following requirements:

-   The scalar subquery does not contain a LIMIT or DISTINCT clause. The output is an aggregate function.
    
-   The table in the subquery is part of the table in the outer query.
    
-   The unnesting in the subquery is an equi join. The outer query contains join conditions with the same semantics as the subquery and contains filter conditions for common tables in the subquery.
    
-   The column in the unnesting condition of the subquery is a primary key column or a unique key column.
    
-   Neither the subquery nor the outer query contains custom functions or random functions.
    

The following figure illustrates the structure of the query after the subquery is unnested by using a window function.![Window Function](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9987260661/p401487.png)

**Use the subquery unnesting feature**

-   Use the loose\_polar\_optimizer\_switch parameter to enable subquery unnesting. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    loose\_polar\_optimizer\_switch
    
    Global and session
    
    Specifies whether to enable the query optimization features of PolarDB.
    
    -   unnest\_use\_window\_function: specifies whether to unnest subqueries by using window functions. Default value: ON. Valid values:
        
        -   ON
            
        -   OFF
            
    -   unnest\_use\_group\_by: specifies whether to unnest subqueries by using GROUP BY clauses. This subquery unnesting method is implemented based on cost-based query optimization. Default value: ON. Valid values:
        
        -   ON
            
        -   OFF
            
    -   derived\_merge\_cost\_based: specifies whether the derived merge feature is implemented based on cost-based query optimization. Default value: OFF. Valid values:
        
        -   ON
            
        -   OFF
            
    
    In the following example, Minimum Cost Supplier Query (Q2) in TPC-H is used to demonstrate the feature. The query is used to obtain the supplier that charges the lowest price out of all suppliers in a region who sell components of a specific type and size. In MySQL Community Edition, the outer query is first executed to obtain the information of the suppliers who sell components of a specific type and size. Then, the subquery is executed on each row of the data to obtain the supplier that sells the components at the lowest price. Finally, the price contained in the result of the outer query is compared with the price contained in the result of the subquery to determine whether the two values are consistent.
    
    ```
    SELECT s_acctbal, s_name, n_name, p_partkey, p_mfgr,
     s_address, s_phone, s_comment
    FROM part, supplier, partsupp, nation, region
    WHERE p_partkey = ps_partkey
       AND s_suppkey = ps_suppkey
       AND p_size = 30
       AND p_type LIKE '%STEEL'
       AND s_nationkey = n_nationkey
       AND n_regionkey = r_regionkey
       AND r_name = 'ASIA'
       AND ps_supplycost = (
           SELECT MIN(ps_supplycost)
           FROM partsupp, supplier, nation, region
           WHERE p_partkey = ps_partkey
               AND s_suppkey = ps_suppkey
               AND s_nationkey = n_nationkey
               AND n_regionkey = r_regionkey
               AND r_name = 'ASIA'
       )
    ORDER BY s_acctbal DESC, n_name, s_name, p_partkey
    LIMIT 100;
    ```
    
    Use a window function to execute the aggregate function in groups and add the results to the rows. For Q2 of TPC-H, the information of suppliers that are in a specific region and sell components of specific sizes and types is obtained. The suppliers are grouped based on the component information. The aggregate function uses the grouped information to obtain the lowest price. Then, the price in the row and the lowest price in that group are compared to determine the value to use. The preceding query is transformed into the following query:
    
    ```
    SELECT s_acctbal, s_name, n_name, p_partkey, p_mfgr,
      s_address, s_phone, s_comment
    FROM (
        SELECT MIN(ps_supplycost) OVER(PARTITION BY ps_partkey) as win_min,
          ps_partkey, ps_supplycost, s_acctbal, n_name, s_name, s_address,
          s_phone, s_comment
        FROM part, partsupp, supplier, nation, region
        WHERE p_partkey = ps_partkey
          AND s_suppkey = ps_suppkey
          AND s_nationkey = n_nationkey
          AND n_regionkey = r_regionkey
          AND p_size = 30
          AND p_type LIKE '%STEEL'
          AND r_name = 'ASIA') as derived
    WHERE ps_supplycost = derived.win_min
    ORDER BY s_acctbal DESC, n_name, s_name, p_partkey
    LIMIT 100;
    ```
    
-   Use hints to unnest subqueries through window functions
    
    The UNNEST hint can be used to control the unnesting. Format:
    
    ```
    UNNEST([@query_block_name] [strategy [, strategy] ...])   # Window functions or GROUP BY clauses are used to unnest subqueries, regardless of the polar_optimizer_switch value. 
    NO_UNNEST([@query_block_name] [strategy [, strategy] ...])  # Window functions or GROUP BY clauses are not used to unnest subqueries, regardless of the polar_optimizer_switch value. 
    ```
    
    `strategy` can be set to WINDOW\_FUNCTION or GROUP\_BY.
    
    Example:
    
    ```
    # Unnest subqueries through window functions.
    SELECT ... FROM ... WHERE ... = (SELECT /*+UNNEST(WINDOW_FUNCTION)*/ agg FROM ...)
    SELECT /*+UNNEST(@`select#2` WINDOW_FUNCTION)*/ ... FROM ... WHERE ... = (SELECT agg FROM ...)
    
    # Do not unnest subqueries through window functions.
    SELECT ... FROM ... WHERE ... = (SELECT /*+NO_UNNEST(WINDOW_FUNCTION)*/ agg FROM ...)
    SELECT /*+NO_UNNEST(@`select#2` WINDOW_FUNCTION)*/ ... FROM ... WHERE ... = (SELECT agg FROM ...)
    ```
    

**Performance improvement**

The TPC-H is executed at a scale factor of 10 to test the performance improvement of subquery unnesting based on a window function. For Q2, the performance is improved by 1.54 times, and for Q17, the performance is improved by 4.91 times. The following figure shows the test results.![Performance improvement](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9987260661/p412892.png)

## Use GROUP BY clauses to unnest subqueries

**Overview**

The following figure illustrates the structure of a query that contains a subquery.![Query transformation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9987260661/p401507.png)

The outer query and subquery must meet the following requirements:

-   The scalar subquery does not contain a GROUP BY or LIMIT clause. The output is an aggregate function.
    
-   The scalar subquery is contained in the JOIN, WHERE, or SELECT conditions.
    
-   The scalar subquery is nested with the outer query by equi join. The conditions are connected by AND.
    
-   The scalar subquery does not contain custom functions or random functions.
    

The following figure illustrates the structure of the query after the subquery is unnested by using a GROUP BY clause.![Group By Aggregation](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9987260661/p401593.png)

**Use the subquery unnesting feature**

-   Use the loose\_polar\_optimizer\_switch parameter to enable subquery unnesting. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    loose\_polar\_optimizer\_switch
    
    Global and session
    
    Specifies whether to enable the query optimization features of PolarDB.
    
    -   unnest\_use\_window\_function: specifies whether to unnest subqueries by using window functions. Default value: ON. Valid values:
        
        -   ON
            
        -   OFF
            
    -   unnest\_use\_group\_by: specifies whether to unnest subqueries by using GROUP BY clauses. This subquery unnesting method is implemented based on cost-based query optimization. Default value: ON. Valid values:
        
        -   ON
            
        -   OFF
            
    -   derived\_merge\_cost\_based: specifies whether the derived merge feature is implemented based on cost-based query optimization. Default value: OFF. Valid values:
        
        -   ON
            
        -   OFF
            
    
    In this example, the query is used to obtain details of the orders where the quantity is larger than 10% of the total amount.
    
    ```
    SELECT *
    FROM sale_lineitem sl
    WHERE sl.sl_quantity >
        (SELECT 0.1 * SUM(pl.pl_quantity)
         FROM purchase_lineitem pl
         WHERE pl.pl_objectkey = sl.sl_objectkey);
    ```
    
    If no query transformation is performed, each row of the `sale_lineitem` table is iterated to obtain the `sl_objectkey` value that is used by the subquery. Each time the value is obtained, the subquery is executed to calculate the result of 10% of the total amount and compare the total amount with the sales amount in that row. The number of times that the subquery is executed equals the number of rows in the `sale_lineitem` table. Even if the `pl_objectkey` column has an index, a large amount of replicate scanning and calculation is required on the `purchase_lineitem` table, because a large number of duplicate values typically exists in the `sl_objectkey` column. Such inefficient subqueries are unnested in PolarDB by using GROUP BY clauses. The preceding query is transformed into the following query:
    
    ```
    SELECT *
    FROM sale_lineitem sl
    LEFT JOIN
      (SELECT (0.1 * sum(pl.pl_quantity)) AS Name_exp_1,
              pl.pl_objectkey AS Name_exp_2
       FROM purchase_lineitem pl
       GROUP BY pl.pl_objectkey) derived ON derived.Name_exp_2 = sl.sl_objectkey
    WHERE sl.sl_quantity > derived.name_exp_1;
    ```
    
    The information of each product is calculated in groups and joined with the `sale_lineitem` table. In this case, the `purchase_lineitem` needs to be scanned only once. The query can be further unnested by changing the join order to improve execution efficiency.
    
-   Use hints to unnest subqueries through GROUP BY clauses
    
    The UNNEST hint can be used to control the unnesting. Format:
    
    ```
    UNNEST([@query_block_name] [strategy [, strategy] ...])   # Window functions or GROUP BY clauses are used to unnest subqueries, regardless of the polar_optimizer_switch value. 
    NO_UNNEST([@query_block_name] [strategy [, strategy] ...])  # Window functions or GROUP BY clauses are not used to unnest subqueries, regardless of the polar_optimizer_switch value. 
    ```
    
    `strategy` can be set to WINDOW\_FUNCTION or GROUP\_BY.
    
    Example:
    
    ```
    # Unnest subqueries through GROUP BY clauses
    SELECT ... FROM ... WHERE ... = (SELECT /*+UNNEST(GROUP_BY)*/ agg FROM ...)
    SELECT /*+UNNEST(@`select#2` GROUP_BY)*/ ... FROM ... WHERE ... = (SELECT agg FROM ...)
    
    # Do not unnest subqueries through GROUP BY clauses
    SELECT ... FROM ... WHERE ... = (SELECT /*+NO_UNNEST(GROUP_BY)*/ agg FROM ...)
    SELECT /*+NO_UNNEST(@`select#2` GROUP_BY)*/ ... FROM ... WHERE ... = (SELECT agg FROM ...)
    ```
