PolarDB for MySQL supports multiple storage engine types such as InnoDB and X-Engine. To improve the query execution efficiency, PolarDB for MySQL introduces the computing pushdown feature at the execution layer to perform operations within the storage engine layer without returning them to the computing layer. This reduces overheads related to unnecessary function invocations and format conversions and greatly improves the execution efficiency of analytical queries.

-   [LIMIT OFFSET pushdown](/help/en/polardb/polardb-for-mysql/user-guide/limit-offset-pushdown)
    
-   [Full predicate pushdown](/help/en/polardb/polardb-for-mysql/user-guide/full-predicate-pushdown)
    
-   [Fast traverse](/help/en/polardb/polardb-for-mysql/user-guide/fast-traverse)
    
-   [Bloom filter pushdown](/help/en/polardb/polardb-for-mysql/user-guide/bloom-filter-pushdown)
