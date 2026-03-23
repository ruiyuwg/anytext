PolarDB supports the join condition pushdown feature. After the outer join conditions are pushed down into the derived table, the execution plan can use indexes more efficiently. This can greatly improve the performance of complex queries.

## **Prerequisites**

Your cluster runs PolarDB for MySQL 8.0 whose revision version is 8.0.2.2.10 or later.

## **Background**

Derived tables (or inline views) are widely used in complex analytical queries to simplify the construction of SQL statements and describe query semantics in a straightforward manner. In the native MySQL, if a derived table cannot be merged into the outer query (for example, if it includes operations such as GROUP BY and aggregate functions), the derived table must be executed using materialization. If an SQL statement involves enormous data (for example, a large amount of table data needs to be scanned), the execution efficiency can be excessively low. After the outer join conditions are pushed down into the derived table, the execution plan can use indexes more efficiently. This can greatly improve the performance of complex queries.

## **Scenarios**

-   In complex queries, derived tables and outer tables are joined in a nested loop manner. Joined columns are at the inner layer of the derived table. Therefore, indexes can be used to accelerate the materialization of the inner table. Accurate statistics are required to ensure that a large amount of data can be filtered out at the inner layer after join conditions are pushed down.
    
-   After join conditions are pushed down, if indexes can be effectively used and a large amount of data is filtered out, a more efficient execution plan is generated. The join condition pushdown feature depends on the cost calculation capability of the optimizer to intelligently determine whether to push down outer join conditions.
    

## **Usage**

You can use the `loose_polar_optimizer_switch` parameter to enable join condition pushdown, and use the `loose_join_predicate_pushdown_opt_mode` parameter to specify the nodes on which you want to enable join condition pushdown. For information about how to configure parameters, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).

**Parameter**

**Level**

**Description**

loose\_polar\_optimizer\_switch

Global and session

Specifies whether to enable join condition pushdown. Valid values:

-   **join\_predicate\_pushdown=ON (default)**: enables join condition pushdown.
    
-   **'join\_predicate\_pushdown=OFF'**: disables join condition pushdown.
    

loose\_join\_predicate\_pushdown\_opt\_mode

Global

Specifies the nodes on which you want to enable join condition pushdown. Valid values:

-   **REPLICA\_ON** (default): enables join condition pushdown only for read-only nodes.
    
-   **ON**: enables join condition pushdown for all nodes.
    
-   **OFF**: disables connection condition pushdown for all nodes.
    

## **Examples**

**Original query**

In the original query, the `os` derived table must be fully materialized and no filter conditions can provide a high selection rate. Therefore, a long period of time is required to materialize the `os` derived table. This query requires approximately 65 seconds to complete.

```
SELECT *
FROM (
  SELECT *
  FROM sample_table.tb_order
  WHERE create_date >= DATE_SUB(CAST('2022-12-05 15:12:05' AS datetime), INTERVAL 5 MINUTE)
    AND product_type IN (2, 4)
) o
  LEFT JOIN (
    SELECT *
    FROM sample_table.tb_order_detailed
    WHERE update_time >= DATE_SUB('2022-12-05 15:12:05', INTERVAL 50 MINUTE)
  ) od
  ON o.order_id = od.order_id
  LEFT JOIN (
    SELECT t.*, row_number() OVER (PARTITION BY detail_id ORDER BY update_date DESC) AS rn
    FROM sample_table.tb_order_sku t
    WHERE update_date >= DATE_SUB('2022-12-05 15:12:05', INTERVAL 50 MINUTE)
      AND coalesce(product_type, '0') <> '5'
  ) os
  ON od.id = os.detail_id;
```

**Optimized query**

The join condition `od.id = os.detail_id` between the `od` table and the `os` table is pushed down into the `os` table. In this case, the `os` table can use the `detail_id` index to filter out a large amount of data to improve the execution efficiency. The query requires approximately 0.5 seconds to complete.

```
SELECT *
FROM (
  SELECT *
  FROM db_order.tb_order
  WHERE create_date >= DATE_SUB(CAST('2022-12-05 15:12:05' AS datetime), INTERVAL 5 MINUTE)
    AND product_type IN (2, 4)
) o
  LEFT JOIN (
    SELECT *
    FROM db_order.tb_order_detailed
    WHERE update_time >= DATE_SUB('2022-12-05 15:12:05', INTERVAL 50 MINUTE)
  ) od
  ON o.order_id = od.order_id
  LEFT JOIN LATERAL((
    SELECT t.*, row_number() OVER (PARTITION BY detail_id ORDER BY update_date DESC) AS rn
    FROM db_order.tb_order_sku t
    WHERE update_date >= DATE_SUB('2022-12-05 15:12:05', INTERVAL 50 MINUTE)
      AND coalesce(product_type, '0') <> '5'
      AND od.id = detail_id
  )) os;
```
