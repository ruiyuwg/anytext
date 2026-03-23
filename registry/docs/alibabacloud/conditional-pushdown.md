PolarDB provides the condition pushdown feature to improve SQL query performance by pushing query conditions to earlier phases in data processing. This feature allows you to optimize the performance of queries in various scenarios, such as queries containing join conditions, queries containing HAVING clauses, and queries involving the Federated storage engine. The follow topics describe the usage of condition pushdown.

-   [Push down a condition from the HAVING clause to the WHERE clause](/help/en/polardb/polardb-for-mysql/user-guide/condition-pushdown)
    
-   [Push down a condition from the WHERE clause to derived tables](/help/en/polardb/polardb-for-mysql/user-guide/where-to-derived-tables)
    
-   [Push down WHERE clauses to IN subqueries](/help/en/polardb/polardb-for-mysql/user-guide/condition-pushdown-where-clause-pushdown-to-in-subquery)
    
-   [Push down join conditions to materialized derived tables](/help/en/polardb/polardb-for-mysql/user-guide/condition-pushdown-materialized-derived-tables)
    
-   [Transitive predicate generation (enhanced condition pushdown)](/help/en/polardb/polardb-for-mysql/user-guide/predicate-derivation-condition-pushdown-enhancement)
