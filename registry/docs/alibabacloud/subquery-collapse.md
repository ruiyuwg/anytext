Subquery folding is a subquery optimization method that folds multiple subqueries in an SQL statement based on specific rules to reduce the number of subqueries in the SQL statement. This accelerates the execution of the SQL statement. This topic describes the background, principle, usage, and examples of subquery folding.

## **Background**

### **Subquery types**

The following table describes the subquery types supported by PolarDB for MySQL.

**Subquery type**

**Operator keyword**

**Comparison operator**

**Remarks**

EXISTS

`EXISTS` and `NOT EXISTS`

None

None

IN

`IN` and `NOT IN`

None

None

ANY

None

\=, !=, <, <=, <, >=

Example: `WHERE t.a > ANY(select t2.a ...)`

ALL

None

\=, !=, <, <=, <, >=

Example: `WHERE t.a > ANY(select t2.a ...)`

Single-row scalar subquery

Example: `WHERE t.a < (SELECT MIN(t2.a) ...)`. The subquery folding feature does not support this subquery type.

-   **Same-type subqueries:** Subqueries that have the same operator keyword are **same-type subqueries**. If two subqueries are both `EXISTS` or `> ANY`, the subqueries are same-type subqueries.
    
-   **Mutually exclusive subqueries:** Subqueries that have opposite operator keywords are **mutually exclusive subqueries**. For example, `EXISTS` and `NOT EXISTS` are mutually exclusive subqueries, and `IN` and `NOT IN` are mutually exclusive subqueries. The following table describes more mutually exclusive subqueries.
    
    **Subquery**
    
    **Mutually exclusive subquery**
    
    `EXISTS`
    
    `NOT EXISTS`
    
    `IN`
    
    `NOT IN`
    
    `= ANY`
    
    `!= ALL`
    
    `!= ANY`
    
    `= ALL`
    
    `< ANY`
    
    `>= ALL` or `> ALL`
    
    `<= ANY`
    
    `> ALL`
    
    `> ANY`
    
    `<= ALL` or `< ALL`
    
    `>= ANY`
    
    `< ALL`
    

### **Subquery inclusion relation**

The right side of a subquery is a set. Sets have three types of inclusion relation: **left subset**, **right subset**, and **equal**. If two sets have no inclusion relation, the sets are **uncomparable**. The following section uses **left subset** as an example.

**Left subset:** If the set on the left side of the subquery is a subset of the set on the right side, the set on the left side is a left subset. Example:

```
SELECT a
FROM t
WHERE EXISTS (
		SELECT /*+ subq1 */ t2.a
		FROM t2
		WHERE t2.a > 10
	)
	AND EXISTS (
		SELECT /*+ subq2 */ t2.a
		FROM t2
	)
```

In the preceding example, the `subq1` set on the left has a stricter condition and a smaller size, and is a subset of the `subq2` set on the right. Therefore, subq1 is a left subset.

## **Overview**

**Note**

The folded objects can appear in any position of the `WHERE`, `HAVING`, or `JOIN ON` condition, and the subquery appears under the `AND` and `OR` operators at the same time.

A subquery can be a `EXISTS`, `IN`, or `ALL` subquery. All operators are supported.

### **Same-type subqueries**

If the sets of two subqueries have an inclusion relation, one of the subqueries is removed. The following table describes the details.

**Operator between subqueries**

**Type of the left or right subquery**

**Subquery inclusion relation**

**Limit**

**Folding type**

**Description**

AND

The types both are EXISTS, IN, ANY, or ALL.

Left subset and equal

None

Remove

The right subset is removed and the left subquery is retained. For more information, see [Example 1: Remove a subquery in an AND condition](#ac55d285a9fpk).

Right subset

None

Remove

The left subset is removed and the right subquery is retained.

The types both are NOT EXISTS, NOT IN, or != ALL.

Uncomparable

-   SPJ subqueries and subqueries that contain only SPJ and HAVING conditions are supported.
    
-   Subqueries that contain only the **WHERE** condition and subqueries whose **HAVING** conditions are inconsistent are supported.
    

Merge (not always optimal)

**Note**

Not always optimal means that the execution efficiency after folding may be worse than that before folding, and folding is not guaranteed to be a positive optimization. You need to use the Cost Based Query Transformation (CBQT) component to determine whether to apply the rule.

The **WHERE** or **HAVING** conditions of the two subqueries are merged into a new subquery. For more information, see [Example 1: Merge subqueries in an AND condition](#e0d1114595vg8).

OR

The types both are EXISTS, IN, ANY, or ALL.

Left subset and equal

None

Remove

The left subset is removed and the right subset is retained. For more information, see [Example 2: Remove a subquery in an OR condition](#09f6845d04zb2).

Right subset

None

Remove

The right subset is removed and the left subset is retained.

The types both are EXISTS, IN, or ANY.

Uncomparable

-   SPJ subqueries and subqueries that contain only SPJ and HAVING conditions are supported.
    
-   Subqueries that contain only the **WHERE** condition and subqueries whose **HAVING** conditions are inconsistent are supported.
    

Merge (not always optimal)

The **WHERE** or **HAVING** conditions of the two subqueries are merged into a new subquery. For more information, see [Example 2: Merge subqueries in an OR condition](#5a27d49287zt5).

### **Mutually exclusive subqueries**

If the sets of two subqueries have an inclusion relation, the subqueries can be rewritten as **TRUE** or **FALSE** based on the logical operation context, or the two subqueries can be merged into a new subquery. The following table describes the details.

**Operator between subqueries**

**Type of the left or right subquery**

**Subquery inclusion relation**

**Limit**

**Folding type**

**Description**

AND

-   EXISTS and NOT EXISTS
    
-   IN and NOT IN
    

Left subset and equal

None

Remove

The **AND** condition is rewritten to **FALSE**.

For more information, see [Example 1: EXISTS mutual exclusive type conflict](#5c2ff1bafcovd).

EXISTS and NOT EXISTS

Right subset

-   The query block of a subquery cannot be **UNION**.
    
-   Only the **WHERE** conditions are different.
    
-   Subqueries support nested subqueries.
    

Merge (not always optimal)

The sets are merged, and the `HAVING SUM(CASE WHEN extra_cond THEN 1 ELSE 0 END) ==0` condition is added.

For more information, see [Example 4: Merge EXISTS mutually exclusive subqueries](#00d6d0d53e1f1).

-   !=ANY and =ALL
    
-   <ANY and >=ALL or >ALL
    
-   <=ANY and >ALL
    
-   \>ANY and <=ALL or <ALL
    
-   \>=ANY and <ALL
    

Left subset and equal

None

Remove

The **AND** condition is rewritten to **FALSE**.

For more information, see [Example 2: ANY or ALL mutual exclusive type conflict](#7e3cf12ccbykx).

-   IN and NOT IN
    
-   \=ANY and !=ALL
    

Right subset

-   The query block of a subquery cannot be **UNION**.
    
-   Only the **WHERE** or **HAVING** conditions are different.
    
-   Subqueries support nested subqueries.
    

Merge (always optimal)

The sets are merged and the LNNVL operator is added.

Folding is always optimal and subqueries are folded by default.

For more information, see [Example 5: ANY or ALL mutual exclusive type conflict](#fc0afd2b91etk).

OR

EXISTS and NOT EXISTS

Right subset

None

Remove

The OR condition is rewritten to **TRUE**.

For more information, see [Example 3: Remove an EXISTS query in an OR condition](#6abff655aagmr).

## **Prerequisites**

The version of the cluster must be PolarDB for MySQL 8.0 and the revision version must be 8.0.2.2.23 or later. For information about how to view the cluster version, see [Engine versions 5.6, 5.7, and 8.0](/help/en/polardb/polardb-for-mysql/engine-versions#section-zpr-kam-8wb).

## **Usage**

You can set the `loose_polar_optimizer_switch` parameter to `coalesce_subquery=on` to enable subquery folding and the `force_coalesce_subquery` parameter to **ON** to enable subquery merging. For more information about how to configure the parameters, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters).

**Parameter**

**Level**

**Description**

loose\_polar\_optimizer\_switch

Global

Enables or disables the subquery folding feature. By default, subqueries are not merged.

Valid values:

-   `coalesce_subquery=on`: enables the subquery folding feature.
    
-   `coalesce_subquery=off`: disables the subquery folding feature.
    

force\_coalesce\_subquery

Global

Enables or disables the subquery merging feature. The **not always optimal** folding rule in the subquery folding rule table is enforced.

Valid values:

-   **OFF** (default): disables the subquery merging feature.
    
-   **ON**: enables the subquery merge feature.
    

**Note**

-   You can configure this parameter in a session. Example:
    
    ```
    SET force_coalesce_subquery=ON;
    ```
    
-   You can also use the HINT syntax to specify the subquery to be folded. Example:
    
    ```
    DESC SELECT /*+SUBQUERY_COALESCE(qb1, qb2) SUBQUERY_COALESCE(qb3, qb4) */  * FROM t1 LEFT JOIN t2 ON t1.a = any (SELECT  /*+ QB_NAME(qb1) */ a FROM t2 ) AND
    t1.a != ALL (SELECT  /*+ QB_NAME(qb2) */ a FROM t2 WHERE  a <100) HAVING  t1.b = ANY (SELECT  /*+ QB_NAME(qb3) */  b FROM t2 ) AND
    t1.b != ALL (SELECT  /*+ QB_NAME(qb4) */  b FROM t2 WHERE  b <1);
    ```
    

## **Examples**

### **Remove same-type subqueries**

#### **Example 1: Remove a subquery in an AND condition**

```
SELECT * FROM t1 WHERE EXISTS (SELECT 1 FROM t2 WHERE c2 = 0)  -- Subquery 1
	AND EXISTS (SELECT 1 FROM t2); 		              -- Subquery 2
```

Subquery 1 is a subset of subquery 2. Therefore, subquery 2 is removed. The SQL statement with subquery 2 removed:

```
SELECT * FROM t1 WHERE EXISTS (SELECT 1 FROM t2 WHERE c2 = 0);
```

#### **Example 2: Remove a subquery in an OR condition**

```
SELECT * FROM t1 WHERE EXISTS (SELECT 1 FROM t2 WHERE c2 = 0)  -- Subquery 1
	or EXISTS (SELECT 1 FROM t2);		               -- Subquery 2
```

Subquery 1 is removed, the **OR** condition is rewritten to `EXISTS (SELECT 1 FROM t2)`, and the larger set is retained. The SQL statement with subquery 1 removed:

```
SELECT * FROM t1 WHERE EXISTS (SELECT 1 FROM t2);
```

### **Merge same-type subqueries**

#### **Example 1: Merge subqueries in an AND condition**

```
SELECT * FROM t1 WHERE NOT EXISTS (SELECT t1.a AS f FROM t1 WHERE a >10 AND b < 10)
AND NOT EXISTS (SELECT a FROM t1 WHERE a > 10  AND c <3);
```

The SQL statement with the subqueries merged:

```
SELECT * FROM t1 WHERE NOT EXISTS (SELECT t1.a AS f FROM t1 WHERE a >10 AND (b < 10 OR c <3);
```

#### **Example 2: Merge subqueries in an OR condition**

```
SELECT * FROM t1 WHERE EXISTS (SELECT t1.a AS f FROM t1 WHERE a >10 AND b < 10)
OR EXISTS (SELECT a FROM t1 WHERE a > 10 AND c <3);
```

The SQL statement with the subqueries merged:

```
SELECT * FROM t1 WHERE EXISTS (SELECT t1.a AS f FROM t1 WHERE a >10 AND (b < 10 OR c <3);
```

### **Remove mutually exclusive subqueries**

#### **Example 1: EXISTS mutual exclusive type conflict**

**Scenarios:** **EXISTS** and **NOT EXISTS**, **IN** or **NOT IN**

```
SELECT * FROM t1 WHERE EXISTS (SELECT 1 FROM t2 WHERE c1 = 0)  -- Subquery 1
      AND NOT EXISTS (SELECT 1 FROM t2); 		-- Subquery 2
```

The **AND** condition is rewritten to **FALSE**. The SQL statement with the condition rewritten:

```
SELECT * FROM t1 WHERE false;
```

#### **Example 2: ANY or ALL mutual exclusive type conflict**

**Scenarios**

-   **\>ANY** and **<ALL**, **<=ALL**
    
-   **<ANY** and **\>ALL**, **\>=ALL**
    

```
SELECT * FROM t1 WHERE t1.c1 > ANY (SELECT c1 FROM t2 WHERE c1 > 10 AND c2 > 1)
                   AND t1.c1 < ALL (SELECT c1 FROM t2 WHERE  c1 > 10);
```

The **AND** condition is rewritten to **FALSE**. The SQL statement with the condition rewritten:

```
SELECT * FROM t1 WHERE false; //The ANY set is a subset of the ALL set.
```

#### **Example 3: Remove an EXISTS query in an OR condition**

```
SELECT * FROM t1 WHERE exists (SELECT 1 FROM t2 )  -- Subquery 1
      OR NOT exists (SELECT 1 FROM t2 WHERE c1 = 0);		-- Subquery 2
```

The OR condition is rewritten to **TRUE**. The SQL statement with the condition rewritten:

```
SELECT * FROM t1 WHERE true; // Subquery 2 is a subset of subquery 1.
```

#### **Example 4: Merge EXISTS mutually exclusive subqueries**

```
SELECT * FROM t1 WHERE EXIST (SELECT 1 FROM t2) -- Subquery 1
	 AND NOT EXIST (SELECT 1 FROM t2 WHERE c2 = 0); -- Subquery 2
```

The sets are merged, and the `HAVING SUM(CASE WHEN extra_cond THEN 1 ELSE 0 END) ==0` condition is added. The SQL statement with the sets merged:

```
SELECT * FROM t1 WHERE EXIST (SELECT 1 FROM t2 HAVING SUM (CASE WHEN extra_cond THEN 1 ELSE 0 END) ==0);
```

**Note**

Merging is not always optimal. You need to use the CBQT component to determine whether to fold subqueries. If you confirm that rewrite is optimal, you need to set the `force_coalesce_subquery` parameter to **ON** to enable the subquery merge feature.

Based on the hot data of TPCH Q21, the query duration before and after the subquery folding feature is enabled is as follows. A shorter duration indicates better rewriting:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1381086171/p775712.png)

#### **Example 5: ANY or ALL mutual exclusive type conflict**

**Scenarios**

-   **IN** and **NOT IN**. The **NOT IN** set is smaller and is a left subset.
    
-   **\=ANY** and **! =ALL**. The **ALL** set is smaller and is a left subset.
    

```
SELECT * FROM t1 WHERE t1.c1 = ANY (SELECT c1 FROM t2 WHERE c1 > 10) AND
t1.c1 != ALL (SELECT c1 FROM t2 WHERE  c1 > 100);
```

The sets are merged, and the LNNVL operator is added. The SQL statement with the sets merged:

```
SELECT * FROM t1 WHERE t1.c1 = 
ANY (SELECT c1 FROM t2 WHERE c1 > 10 AND LNNVL(c1 >100));
```
