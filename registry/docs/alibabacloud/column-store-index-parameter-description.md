This topic describes the parameters related to the In-Memory Column Index (IMCI) feature.

**Parameter**

**Description**

loose\_imci\_auto\_update\_statistic

Specifies whether the IMCI query optimizer re-collects statistics when the statistics are not the latest. Valid values:

-   **ASYNC** (default): The IMCI query optimizer uses asynchronous sampling and re-collects statistics when the statistics are not the latest.
    

-   **OFF**: The IMCI query optimizer does not re-collect statistics when the statistics are not the latest.
    
-   **SYNC**: The IMCI query optimizer uses synchronous sampling and re-collects statistics when the statistics are not the latest.
    

loose\_imci\_enable\_window\_function

Specifies whether the IMCI feature is supported for the SQL statements that contain window functions. Valid values:

-   **2** (default): The IMCI feature is supported for the SQL statements that contain window functions.
    
-   **1**: The IMCI feature is supported for the SQL statements that contain window functions without frames specified.
    
-   **0**: The IMCI feature is not supported for the SQL statements that contain window functions.
    

loose\_imci\_max\_enum\_join\_pairs

The number of equivalent execution plans that the IMCI query optimizer can retrieve when the IMCI and join reordering features are enabled.

Valid values: 0 to 4294967295. Default value: 2000.

loose\_imci\_min\_virtual\_memory

The minimum amount of memory occupied by an IMCI during a query.

Valid values: 1 to 9223372036854775807. Default value: DBNodeClassMemory\*3/20. Unit: bytes.

loose\_imci\_max\_virtual\_memory

The maximum amount of memory occupied by an IMCI during a query.

Valid values: 1 to 9223372036854775807. Default value: 9223372036854775807. Unit: bytes.

loose\_imci\_optimizer\_switch

Specifies whether to use a hybrid plan to accelerate wide-table queries that meet the conditions. Valid values:

-   **'force\_hybrid\_index\_search=OFF**' (default): does not force the use of a hybrid plan to accelerate wide-table queries. The optimizer automatically chooses the best plan.
    
-   **'force\_hybrid\_index\_search=ON**': forces the use of a hybrid plan to accelerate wide-table queries.
    

**Note**

If the table involved in the query statement does not have statistics or the cardinality estimation and cost calculation for IMCIs are not enabled, join reorder for IMCIs is not enabled even if this parameter is set to ON.

loose\_imci\_ap\_threshold

The threshold that determines whether SQL statements are distributed to column store nodes.

Valid values: 1 to 18446744073709551615. Default value: 50000.

**Note**

For example, when the default value is used, if the number of rows scanned by an SQL statement is estimated to be larger than 50,000, the statement is distributed to a column store node.

loose\_cost\_threshold\_for\_imci

The threshold that determines whether SQL statements are executed by using column store execution plans in column store nodes.

Valid values: 1 to 18446744073709551615. Default value: 50000.

**Note**

For example, when the default value is used, if the number of rows scanned by an SQL statement is estimated to be larger than 50,000, the statement is executed by using a column store execution plan. Otherwise, a row store execution plan is used.

loose\_imci\_enable\_query\_trace

Specifies whether to print kernel error logs during IMCI query optimization. Valid values:

-   **OFF** (default)
    
-   **ON**
    

loose\_polar\_enable\_implicit\_imci\_with\_create\_table

Specifies whether to add IMCIs that are valid entire tables to all new tables. Valid values:

-   **OFF** (default)
    
-   **ON**
    

loose\_imci\_columnar\_advise\_buffer\_size

The amount of memory available for the `dbms_imci.columnar_advise();` stored procedure.

Valid values: 0 to 18446744073709551615. Default value: 8388608. Unit: bytes.

loose\_etl\_from\_imci

Specifies whether to read data from read-only column store nodes. Valid values:

-   **OFF** (default)
    
-   **ON**
    

loose\_etl\_from\_imci\_compress

Specifies whether to compress files when data is read from read-only column store nodes. Valid values:

-   **OFF** (default)
    

-   **ON**
    

loose\_imci\_default\_pack\_shift

The row group size for IMCIs.

Valid values: 7 to 18. Default value: 14.

**Note**

For a cluster of PolarDB for MySQL 8.0.1.1.36 or later, the default value of this parameter is 16.

loose\_slow\_log\_record\_imci

Specifies whether to add IMCI information to slow query logs. Valid values:

-   **OFF** (default)
    
-   **ON**
    

loose\_imci\_default\_write\_policy

The write policy for IMCI data. Valid values:

-   **Tradeoff** (default): a policy optimized on the basis of Skip4K. When less than 1 MB data is to be written, it is equivalent to ForPerformance. When 1 MB data or more is to be written, try to split the data into multiple files.
    
-   **ForCapacity**: Storage space is prioritized. Data is split into multiple files and written across these files to minimize fragmentation. A maximum of one fragment of 4 KB is generated in each write.
    
-   **ForPerformance**: Performance is prioritized. A file with the optimal ExtentSize value is selected for each write. This policy ensures the best I/O performance, but results in the maximum fragmentation percentage and high space waste.
    
-   **Skip4K**: uses a data splitting logic that is similar to ForCapacity. When more than 4 KB data is to be written, the 4 KB extent is ignored. A maximum of one fragment of 16 KB is generated in each write.
