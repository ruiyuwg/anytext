The PolarDB for MySQL In-Memory Column Index (IMCI) feature is designed to significantly accelerate your analytical processing (AP) queries. To ensure that IMCI correctly accelerates your SQL queries and returns the expected results, review the scope and limits of this feature before you use it.

## General limits

Before you use an in-memory column index, ensure that your cluster environment and table schema meet the following requirements:

-   **Storage engine**: Columnstore indexes are supported only for tables that use the `InnoDB` storage engine.
    
-   **Temporary tables**: You cannot use IMCI to accelerate queries on temporary tables.
    
-   **Virtual columns**: You can create an in-memory column index on a virtual column if the following conditions are met:
    
    -   Set the `imci_enable_virtual_column` cluster parameter to `ON`.
        
        **Note**
        
        This is a SESSION-level parameter and cannot be modified in the console.
        
    -   The `order_key` is not specified when the in-memory column index is created.
        
-   **Virtual column type**: You cannot create an in-memory column index for virtual columns of the Spatial type.
    
-   For a [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/), you must first [change the cluster parameter](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters) `loose_polar_enable_imci_with_mm` to `ON`. You can then add a global read-only node for the in-memory column index and use the IMCI feature.
    

## **SELECT** statement **limits**

Columnstore indexes only accelerate `SELECT` queries. If a query statement contains any of the following structures, the query cannot be accelerated by the columnstore index and will degrade to row store execution:

-   `SELECT` statements that include locking reads, such as `SELECT ... FOR UPDATE` or `SELECT ... FOR SHARE`.
    
-   `SELECT` statements that contain a window function with a frame definition. For example, using `ROWS UNBOUNDED PRECEDING` in the `OVER()` clause.
    
    ```
    SELECT
        time,
        subject,
        val,
        SUM(val) OVER (
            PARTITION BY subject
            ORDER BY time
            ROWS UNBOUNDED PRECEDING  --- Frame definition in a window function, not supported by IMCI
        ) AS running_total
    FROM
        observations;
    ```
    
-   `SELECT` statements where a subquery appears in the `GROUP BY` clause. For example, `SELECT SUM(a) FROM t1 GROUP BY (SELECT ... FROM ...) as some_subquery;`
    
-   `SELECT` statements where a subquery appears in an `ORDER BY` expression. For example, `SELECT a FROM t1 ORDER BY (SELECT ... FROM ...) as some_subquery;`
    
-   `SELECT` statements where a correlated subquery appears in the `ON` condition of a `JOIN`. For example, `WHERE t1.a in (SELECT t2.a FROM t2 INNER JOIN t3 on t2.a = t3.a AND t2.b > t1.b);`
    
-   `SELECT` statements where a subquery contains a window function and its correlated item appears in the `HAVING` condition.
    
-   `SELECT` statements where a subquery contains a `UNION` and its correlated item appears in one of the subqueries of the `UNION`.
    

## Expression and function limits

If a `SELECT` statement contains any unsupported expressions or functions, the entire query falls back to the row store for execution.

### **Comparison expressions**

**Expression**

**Are columnstore indexes supported?**

**Notes**

`BETWEEN ... AND ...`

Supported

If the data types of `b` and `c` differ in `a BETWEEN b AND c`, a compatibility issue may occur. The query result might be inconsistent with the result from a query that does not use an in-memory column index.

`NOT BETWEEN ... AND ...`

Supported

If the data types of `b` and `c` differ in `a NOT BETWEEN b AND c`, a compatibility issue may occur. The query result might be inconsistent with the result from a query that does not use an in-memory column index.

`GREATEST()`

Supported

If the input parameters include both a `TIME` type and a string type, the comparison result may differ from the result of a query that does not use an in-memory column index.

`IN()`

Supported

If the data types of `expr0,expr1,...` differ in `IN(expr0, expr1, ...)`, a compatibility issue may occur. The query result might be inconsistent with the result from a query that does not use an in-memory column index.

`LEAST()`

Supported

If the input parameters include both a `TIME` type and a string type, the comparison result may differ from the result of a query that does not use an in-memory column index.

`SOUNDS LIKE`

Not supported

\-

### **String expressions**

**Expression**

**Are columnstore indexes supported?**

**Notes**

`SOUNDEX()`

Not supported

\-

`MATCH`

Supported

BOOLEAN MODE and NATURAL LANGUAGE MODE are supported.

`LOAD_FILE()`

Not supported

\-

`TIMESTAMP()`

Supported

When using IMCI, this function supports only one parameter. It does not support two parameters.

### Encryption and compression expressions

**Expression**

**Are columnstore indexes supported?**

`AES_DECRYPT()`

Not supported

`AES_ENCRYPT()`

Not supported

`COMPRESS()`

Not supported

`RANDOM_BYTES()`

Not supported

`STATEMENT_DIGEST()`

Not supported

`STATEMENT_DIGEST_TEXT()`

Not supported

`UNCOMPRESS()`

Not supported

`UNCOMPRESSED_LENGTH()`

Not supported

`VALIDATE_PASSWORD_STRENGTH()`

Not supported

### JSON functions

**Function**

**Support for Columnstore Indexes**

`JSON_ARRAY_INSERT()`

Not supported

`JSON_CONTAINS_PATH()`

Not supported

`JSON_INSERT()`

Not supported

`JSON_MERGE()`

Not supported

`JSON_MERGE_PATCH()`

Not supported

`JSON_MERGE_PRESERVE()`

Not supported

`JSON_REPLACE()`

Not supported

`JSON_SCHEMA_VALID()`

Not supported

`JSON_SCHEMA_VALIDATION_REPORT()`

Not supported

`JSON_SEARCH()`

Not supported

`JSON_SET()`

Not supported

`JSON_STORAGE_FREE()`

Not supported

`JSON_STORAGE_SIZE()`

Not supported

`JSON_VALUE()`

Not supported

`MEMBER OF()`

Not supported

### **Spatial functions**

**Function**

**Are columnstore indexes supported?**

`ST_AsGeoJSON()`

Not supported

`ST_Buffer()`

Not supported

`ST_Buffer_Strategy()`

Not supported

`ST_Centroid()`

Not supported

`ST_Collect()`

Not supported

`ST_ConvexHull()`

Not supported

`ST_EndPoint()`

Not supported

`ST_ExteriorRing()`

Not supported

`ST_FrechetDistance()`

Not supported

`ST_GeoHash()`

Not supported

`ST_GeometryN()`

Not supported

`ST_GeometryType()`

Not supported

`ST_GeomFromGeoJSON()`

Not supported

`ST_HausdorffDistance()`

Not supported

`ST_InteriorRingN()`

Not supported

`ST_Intersection()`

Not supported

`ST_IsClosed()`

Not supported

`ST_IsEmpty()`

Not supported

`ST_IsSimple()`

Not supported

`ST_IsValid()`

Not supported

`ST_LatFromGeoHash()`

Not supported

`ST_LineInterpolatePoint()`

Not supported

`ST_LineInterpolatePoints()`

Not supported

`ST_LongFromGeoHash()`

Not supported

`ST_NumGeometries()`

Not supported

`ST_NumInteriorRing()`

Not supported

`ST_NumInteriorRings()`

Not supported

`ST_NumPoints()`

Not supported

`ST_PointAtDistance()`

Not supported

`ST_PointFromGeoHash()`

Not supported

`ST_PointN()`

Not supported

`ST_StartPoint()`

Not supported

`ST_SwapXY()`

Not supported
