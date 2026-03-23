This topic describes how PolarDB for MySQL uses cost-based query transformation (CBQT) to improve the execution efficiency of complex queries.

## Prerequisites

-   **For the old version of query transformation**
    
    The cluster is of PolarDB for MySQL 8.0.2 and the revision version is 8.0.2.2.0 or later.
    
-   **For the new version of query transformation**
    
    The cluster is PolarDB for MySQL 8.0.2 and the revision version is 8.0.2.2.19 or later.
    

For information about how to check the version of your cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Background information

Query transformation refers to the process of transforming a query statement to another equivalent query statement. See the following sample query statement:

```
SELECT *
FROM d1
	JOIN f1 ON d1.c1 = f1.c1
	LEFT JOIN (
		SELECT d2.c2 AS d2_c2, f2.c3 AS f2_c3
		FROM d2, f2
		WHERE d2.c1 = f2.c1
	) derived
	ON derived.d2_c2 = d1.c2
		AND derived.f2_c3 = f1.c3;
```

The query statement can be changed to the following query statement based on the materialized table merging rules.

```
SELECT *
FROM d1
	JOIN f1 ON d1.c1 = f1.c1
	LEFT JOIN (d2
		JOIN f2 ON TRUE)
	ON d2.c1 = f2.c1
		AND f2.c3 = f1.c3
		AND d2.c2 = d1.c2;
```

MySQL Community Edition supports only rule-based query transformations, during which semantic transformations are performed. The preceding example is a typical query transformation that is performed by MySQL Community Edition. However, such transformations does not provide performance optimization in some cases. Take the preceding query statement for example, if the indexes of `d1`, `f1` and `d2`, `f2` are not correlated, each row in the output of the join operations for `d1` and `f1` requires an individual join operation for `d2` and `f2`. As a result, the execution efficiency is significantly reduced. Therefore, query transformations, especially complex transformations, should be performed based on the execution cost. Factors such as cardinality, access method, and join order may affect the execution cost. PolarDB for MySQL supports cost-based query transformation that can perform a certain type of transformation based on the execution cost.

For a complex query, CBQT combines all the possible transformation methods into a collection that is named state space. Then, CBQT selects the execution plan with the lowest costs for the query. The following figure describes the cost-based query transformation process. CBQT collects the transformation methods A and B and generates the following combinations in the state space: None (no transformation), A (transformation A only), B (transformation B only), and AB (both transformation A and B). The combinations in the state space each correspond to an execution plan. CBQT then selects the execution plan with the lowest costs. In this example, Plan 2 is selected, which corresponds to transformation A. In addition, the transformations that can save execution cost are defined as rule-based query transformations. Such transformations are performed if the query transformation rules are met.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5923549171/CAEQJxiBgMD83MvdghkiIGU0YTU4Y2UzNzU0NzRjYWE5MDQxODg5ZDk3MTFkNjY44425552_20240522163041.998.svg)

Take the preceding query statement as an example. The execution plan after the materialized table merging is shown in the following figure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5923549171/CAEQJxiBgMDj8vDcghkiIDE2NmEyZGFjY2M3YzQzMzQ5YWU3YjZhYzk4OTVkN2Qx4425552_20240522164947.242.svg)

The execution plan before the materialized table merging is shown in the following figure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5923549171/CAEQJxiBgIC29PDcghkiIDA0NjdlMGRmNzExNTRmODM4OGU1NGQyMDMyZjIyODU14425552_20240522165418.290.svg)

Which plan is optimal depends on whether the indexes of `d2`, `f2` and `d1`, `f1` are correlated, and the size of the join result set. If the indexes are correlated, the execution plan after the merging is optimal. Otherwise, the execution plan before the merging is optimal. The CBQT framework calculates and compares the costs of the execution plans before and after the table merging. The plan that is optimal in the current scenario is selected.

## **Terms**

**Nested query and nesting depth**

A nested query is a query block that is nested in another query. The query block is a subquery or inner query, and the external query is a parent query or outer query. The nesting depth is the number of nested layers of a query, and is mainly used to describe subqueries and materialized tables. Example:

```
SELECT * FROM t1 WHERE t1.a IN (SELECT t2.b FROM t2 WHERE t2.c=t1.b);
```

The nesting depth is 2. The parent query is the query statement that queries the `t1` table, and the subquery is the query statement that queries the `t2` table.

The UNION statement combines only SQL statements at the same layer. Example:

```
SELECT *
FROM t1
WHERE t1.a IN (
	SELECT dt.b
	FROM (
		SELECT b, c
		FROM t2
		UNION
		SELECT b, c
		FROM t3
	) dt
	WHERE dt.c = t1.b
);
```

The nesting depth of the preceding query statement is 3. The subquery in the `dt` table is a combination of SQL statements at the same layer by using the UNION statement.

**Transformation**

The process of transforming a query to another form based on equivalence rules, such as the materialized table merging that is described in the [Background information](#section-ppo-qi9-ojj) section.

**Transformation object**

The object to which the equivalence rules apply, such as the derived table from the materialized table merging in the [Background information](#section-ppo-qi9-ojj) section. Different transformation rules apply to different transformation objects. For example, the transformation object of a materialized table merging is the materialized table. The transformation object of a transformation from subquery to SEMI JOIN statement is the subquery.

**Iteration**

The number of times that transformation is performed. CBQT tries to perform all possible transformations on all objects. After the transformations are performed, it is possible that some query blocks can be transformed again. For example, after a subquery is transformed to a materialized table, the table can be transformed by using the materialized table merging rules. Therefore, it is necessary to perform transformations on new objects. This process is known as the iteration of CBQT. The number of iterations is the number of times the transformation process is repeatedly performed.

## Usage

PolarDB for MySQL provides two versions of CBQT. Configure the `cbqt_enabled` parameter to enable or disable the feature. Configure the `cbqt_version` parameter to specify the version of CBQT. When `cbqt_version` is set to 1, the old version is used. When `cbqt_version` is set to 2, the new version is used.

**Parameter**

**Level**

**Description**

cbqt\_enabled

Global and session

Enables or disables CBQT. The default value is ON. Valid values:

-   **ON**
    
-   **OFF**
    
-   **REPLICA\_ON**: enables CBQT on read-only nodes.
    

cbqt\_version

Global and session

Specifies the version of CBQT. Valid values:

-   **1**: uses the old version of CBQT. This is the default value.
    
-   **2**: uses the new version of CBQT.
    

See the following detailed description of the parameters of both versions.

## Old version of CBQT

CBQT may spend a long period of time selecting the optimal execution plan. To avoid impact on short-lived queries, you can use the `cbqt_cost_threshold` parameter to specify a threshold for triggering CBQT for a query. CBQT is triggered only when the cost of a query exceeds this parameter value. For subqueries that are provided by PolarDB but not by the MySQL Community Edition, decorrelation is performed by using the GROUP BY clauses based on CBQT. For transformations provided in the MySQL Community Edition, you can specify whether they are performed based on cost. The derived merge feature is controlled by the `derived_merge_cost_based` variable of the `polar_optimizer_switch` parameter.

**Parameter**

**Level**

**Description**

cbqt\_cost\_threshold

Global and session

The threshold for triggering CBQT for a query. CBQT is triggered only when the cost of a query exceeds this parameter value.

Valid values: 0 to 18446744073709551615. Default value: 100000.

cbqt\_timeout

Global and session

The timeout period for CBQT. If the time consumed for finding the optimal execution plan is longer than the specified period of time, CBQT stops looking for the optimal plan, and uses the best plan it has found to execute the query.

Valid values: 0 to 18446744073709551615. Default value: 200. Unit: millisecond.

**Note**

If you set the value to 0, no timeout period is specified.

polar\_optimizer\_switch

Global and session

Specifies whether to enable the query optimization features of PolarDB. Valid values:

-   **unnest\_use\_window\_function**: specifies whether to decorrelate subqueries by using window functions. Default value: ON. Valid values:
    
    -   **ON**
        
    -   **OFF**
        
-   **unnest\_use\_group\_by**: specifies whether to decorrelate subqueries by using GROUP BY clauses. This subquery decorrelation method is implemented based on CBQT. Default value: ON. Valid values:
    
    -   **ON**
        
    -   **OFF**
        
-   **derived\_merge\_cost\_based: specifies whether the derived merge feature is implemented based on CBQT. Default value: OFF. Valid values:**
    
    -   **OFF**
        
    -   **ON**
        

## New version of CBQT

CBQT may spend a long period of time performing iterations and selecting the optimal execution plan. You can configure the following parameters control the process.

**Parameter**

**Level**

**Description**

cbqt\_iteration\_limit

Global

The number of iterations of CBQT. A greater number of iterations indicates a higher possibility of selecting the optimal plan and more time consumption. A smaller number of iterations indicates a lower possibility of selecting the optimal plan and less time consumption.

Valid values: 1 to 10. Default value: 1.

cbqt\_max\_nested\_level

Global and session

The maximum nesting depth of query statements that CBQT can process. If the nesting depth of a query statement exceeds this value, CBQT is not implemented for the query statement.

Valid values: 1 to 64. Default value: 5.

cbqt\_search\_strategy

Global

The strategy for CBQT to select optimal plan. Valid values:

-   **auto**: adaptive search. This is the default value. PolarDB adaptively selects the linear or twoPass strategy based on the query that you want to transform.
    
-   **linear**: linear search. If this strategy is used, PolarDB compares execution costs before and after each query is transformed to different applications and selects a better execution plan.
    
-   **twoPass**: two-pass search. If this strategy is used, PolarDB compares execution costs when all queries are transformed to the same application or all queries are not transformed, and then selects a better execution plan.
    

cbqt\_rule\_switch

Global and session

Specifies whether to enable the query optimization feature and whether a query transformations is performed. Valid values:

-   **merge\_derived**: specifies whether to enable cost-based materialized table merging. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **subquery\_to\_derived**: specifies whether to enable cost-based transformation from subquery to materialized table. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **unnest\_subquery\_by\_groupby**: specifies whether to enable cost-based decorrelation by using GROUP BY clauses. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **unnest\_subquery\_by\_windows**: specifies whether to enable decorrelation by using window functions. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **derived\_projection\_pruning**: specifies whether to enable materialized table projection pruning. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **cond\_pushdown**: specifies whether to enable condition pushdown. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **heuristic\_merge\_derived**: specifies whether to enable heuristic materialized table merging. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **subquery\_to\_semijoin**: specifies whether to enable transfromation from subquery to SEMI JOIN. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **heuristic\_coalesce\_subquery**: specifies whether to enable heuristic subquery folding. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
        
-   **coalesce\_subquery**: specifies whether to enable cost-based subquery folding. Default value: ON.
    
    -   **ON**
        
    -   **OFF**
