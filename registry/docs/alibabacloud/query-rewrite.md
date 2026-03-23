The query rewrite component converts SQL statements into more efficient forms based on relational model equivalence. This shortens the time that the optimizer spends finding the optimal execution plan and greatly improves query execution efficiency. Some of the most common query transformations, such as subquery optimization and condition pushdown, occur at this stage.

PolarDB for MySQL provides a wide range of cost-based query rewrite features that cover many scenarios. This cost-based approach allows PolarDB to determine the optimal query rewrite method.

In addition to the query rewrite features available in community MySQL, the following topics describe the new query rewrite features implemented in PolarDB for MySQL.

-   Column pruning for derived tables and views
    
-   Redundant DISTINCT elimination
    
-   OR/IN to UNION ALL transformation
    
-   [IN to JOIN transformation](/help/en/polardb/polardb-for-mysql/user-guide/in-predicate-conversion)
    
-   Subquery optimization
    
-   [Subquery folding](/help/en/polardb/polardb-for-mysql/user-guide/subquery-collapse)
    
-   [Subquery decorrelation](/help/en/polardb/polardb-for-mysql/user-guide/subquery-decorrelation)
    
-   Join elimination
    
-   [LEFT JOIN elimination](/help/en/polardb/polardb-for-mysql/user-guide/left-join-elimination)
    
-   [Cost-based query transformation](/help/en/polardb/polardb-for-mysql/user-guide/cost-based-query-transformation)
    
-   [Join condition pushdown](/help/en/polardb/polardb-for-mysql/user-guide/join-condition-pushdown)
    
-   Condition pushdown:
    
    -   [HAVING vs. WHERE](/help/en/polardb/polardb-for-mysql/user-guide/condition-pushdown)
        
    -   [WHERE condition pushdown to derived tables](/help/en/polardb/polardb-for-mysql/user-guide/where-to-derived-tables)
        
    -   [WHERE clause pushdown to IN subqueries](/help/en/polardb/polardb-for-mysql/user-guide/condition-pushdown-where-clause-pushdown-to-in-subquery)
        
    -   [Join condition pushdown to materialized derived tables](/help/en/polardb/polardb-for-mysql/user-guide/condition-pushdown-materialized-derived-tables)
        
    -   [Transitive predicate generation (enhanced condition pushdown)](/help/en/polardb/polardb-for-mysql/user-guide/predicate-derivation-condition-pushdown-enhancement)
