PolarDB allows you to push down a condition from the HAVING clause of an SQL query to the WHERE clause. To improve query performance, you can transform complex SQL queries to push down conditions that are suitable for earlier filtering from the `HAVING` clause to the `WHERE` clause.

## Supported versions

You cluster runs one of the following database engine versions. For more information about how to view the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

-   MySQL 8.0.1 whose revision version is 8.0.1.1.42 or later.
    
-   MySQL 8.0.2 whose revision version is 8.0.2.2.10 or later.
    

## Limits

-   If a condition (or part of a condition) depends only on the fields used in the `GROUP BY` clause, or fields that are identical to the grouped fields, the condition can be pushed down from the `HAVING` clause to the `WHERE` clause.
    
-   Aggregate functions cannot be pushed down.
    

## Background

`HAVING` clauses are used in many complex queries to filter grouped results. In most cases, conditions in the `HAVING` clause are applied to the grouped data that results from the `GROUP BY` operation. You can push down conditions in the HAVING clause that are suitable for earlier filtering to the `WHERE` clause. This minimizes the amount of data processed in the later stages of the query and significantly improves the performance and efficiency of the query.

## Usage

You can use the `loose_polar_optimizer_switch` parameter to enable condition pushdown from the `HAVING` clause to the `WHERE` clause. You can use the loose\_having\_cond\_pushdown\_mode parameter to specify the nodes on which you want to enable the feature. For information about parameter configuration, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).

**Parameters**

**Parameter**

**Level**

**Description**

loose\_polar\_optimizer\_switch

Global and session

Specifies whether to enable condition pushdown from the HAVING clause to the WHERE clause. Valid values:

-   **having\_cond\_pushdown=ON** (default): enables condition pushdown from the HAVING clause to the WHERE clause.
    
-   **having\_cond\_pushdown=OFF**: disables condition pushdown from the HAVING clause to the WHERE clause.
    

loose\_having\_cond\_pushdown\_mode

Global

Specifies the type of nodes on which you want to enable condition pushdown from the HAVING clause to the WHERE clause. Valid values:

-   **REPLICA\_ON** (default): enables condition pushdown from the `HAVING` clause to the `WHERE` clause only on read-only nodes.
    

-   **ON**: enables condition pushdown from the `HAVING` clause to the `WHERE` clause on all nodes.
    
-   **OFF**: disables condition pushdown from the `HAVING` to the `WHERE` clause on all nodes.
    

## Examples

Push down a condition from the `HAVING` clause to the `WHERE` clause.

Example 1:

```
SELECT t1.a,MAX(t1.b)
FROM t1
GROUP BY t1.a
HAVING (t1.a>2) AND (MAX(c)>12);
```

Query syntax after transformation:

```
SELECT t1.a,MAX(t1.b)
FROM t1
WHERE (t1.a>2)
GROUP BY t1.a
HAVING (MAX(c)>12);
```

Example 2:

```
SELECT t1.a,MAX(t1.b),t1.c
FROM t1
GROUP BY t1.a
HAVING ((t1.a=t1.c) AND (t1.a>1)) OR ((t1.a<3) AND (t1.c>3));
```

Query syntax after transformation:

```
SELECT t1.a,MAX(t1.b),t1.c
FROM t1
WHERE ((t1.a=t1.c) AND (t1.a>1)) OR (t1.a<3)
GROUP BY t1.a
HAVING ((t1.a=t1.c) AND (t1.a>1)) OR ((t1.a<3) AND (t1.c>3));
```
