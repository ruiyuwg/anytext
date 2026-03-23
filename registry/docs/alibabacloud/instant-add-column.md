Traditional column addition requires rebuilding the entire table, which consumes significant system resources. PolarDB for MySQL clusters support instant column addition. You can add columns to tables of any size in seconds.

The instant column addition feature uses the [INSTANT algorithm](/help/en/polardb/polardb-for-mysql/user-guide/support-for-ddl-in-polardb-mysql#u805d45f2) to perform DDL operations. It modifies only metadata in the data dictionary. It does not modify or copy historical data, nor does it rebuild the table. Therefore, this process works regardless of table size. The entire DDL operation completes in seconds.

## Supported versions

Your cluster must run one of the following versions:

-   PolarDB for MySQL 5.6 with revision 5.6.1.0.43 or later.
    
    **Note**
    
    The instant column addition feature for PolarDB for MySQL 5.6 is in canary release. To use it, go to the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas?spm=a2c4g.11186623.0.0.24ce79616ECu36). Find the quota named `polardb_mysql_iac_56`, then click Request in the Actions column.
    
-   PolarDB for MySQL 5.7 with revision 5.7.1.0.6 or later.
    
    **Note**
    
    You must enable the loose\_innodb\_support\_instant\_add\_column parameter before you can use this feature on PolarDB for MySQL 5.7 clusters.
    
-   PolarDB for MySQL 8.0.
    
    **Note**
    
    PolarDB for MySQL 8.0 clusters support instant column addition by default. No parameter configuration is required.
    

You can check your cluster's revision number. For more information, see [checking the version number](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Limits

-   You can add a column only as the last column in the table.
    
-   Add a virtual column:
    
    -   PolarDB for MySQL 5.6 and 5.7: Not supported.
        
    -   PolarDB for MySQL 8.0: Supported.
        
-   Add fields to partitioned tables in seconds.
    
    -   PolarDB for MySQL 5.6: Not supported.
        
    -   PolarDB for MySQL 5.7 and 8.0: Supported.
        
        **Note**
        
        The instant column addition feature for partitioned tables in PolarDB for MySQL 5.7 is in canary release. To use it, go to the [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas?spm=a2c4g.11186623.0.0.79ce4eack5ih09). Find the quota named `polarM_57_iac_on_partition_table`, then click Request in the Actions column.
        
-   Full-text indexes are not supported for tables.
    
-   Tables with ROW\_FORMAT set to COMPRESSED are not supported.
    
-   You can add columns instantly to tables that have In-Memory Column Indexes (IMCI), but only if these conditions are met:
    
    -   For PolarDB for MySQL 8.0.1.1.42 and earlier, or 8.0.2.2.23 and earlier: Set the `imci_enable_add_column_instant_ddl` parameter to `ON`. When enabled, instant column addition triggers silent background rebuilding of IMCI. During rebuilding, IMCI is unavailable.
        
    -   For PolarDB for MySQL 8.0.1.1.42 and later, or 8.0.2.2.23 and later: Set the `imci_enable_add_column_instant_ddl` parameter to `OFF`.
        
-   Tables that have the `implicit_primary_key` option enabled require a custom primary key.
    
-   You cannot combine instant column addition with other DDL operations—such as adding an index—in the same SQL statement.
    

## How to use

### **Parameter settings**

-   **PolarDB for MySQL** **5.6 and 5.7 clusters**: Enable the loose\_innodb\_support\_instant\_add\_column parameter to use instant column addition. For instructions, see [Enable a parameter](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    loose\_innodb\_support\_instant\_add\_column
    
    Global
    
    Enables or disables instant column addition. Valid values:
    
    1.  **ON**: Enables instant column addition.
        
    2.  **OFF** (default): Disables instant column addition.
        
    
-   **PolarDB for MySQL** **8.0 clusters**: You can use instant column addition without configuring any parameters.
    

### **Syntax**

-   Force instant column addition by specifying `ALGORITHM=INSTANT`. Example:
    
    ```
    ALTER TABLE <table_name> ADD COLUMN <column_name> int, ALGORITHM=INSTANT;
    ```
    
    **Note**
    
    If this statement returns `ERROR 0A000: ALGORITHM=INSTANT is not supported for this operation. Try ALGORITHM=COPY/INPLACE.`, instant column addition is not supported for this operation. Check whether the loose\_innodb\_support\_instant\_add\_column parameter is enabled, then review the [Limits](#section-hkp-4lw-k7w).
    
-   Omit the `ALGORITHM` clause or specify `ALGORITHM=DEFAULT`. PolarDB automatically selects the fastest algorithm. Examples:
    
    ```
    ALTER TABLE <table_name> ADD COLUMN <column_name> int, ALGORITHM=DEFAULT;
    ALTER TABLE <table_name> ADD COLUMN <column_name> int;
    ```
    
    **Note**
    
    PolarDB chooses algorithms in this order: INSTANT > INPLACE > COPY.
    

### **View column information added using the INSTANT algorithm**

-   **PolarDB for MySQL** **5.6 and 5.7 clusters**: A new table named `INNODB_SYS_INSTANT_COLUMNS` appears in the `INFORMATION_SCHEMA` database. This table stores details about columns added using the INSTANT algorithm, such as column names, ordinal numbers, and default values (stored in binary format). You can run this statement to view the details:
    
    ```
    SELECT * FROM INFORMATION_SCHEMA.INNODB_SYS_INSTANT_COLUMNS;
    ```
    
    **Note**
    
    After you use the `INSTANT` algorithm to add columns to the target table, if you execute DDL operations that trigger table rebuilds (such as `OPTIMIZE TABLE`), the table is physically rebuilt. During this process, the original `INSTANT` columns are automatically converted to regular columns, and their data is fully retained in the new table. Because these columns no longer support the `INSTANT` algorithm, the corresponding records in the system table `INNODB_SYS_INSTANT_COLUMNS` are removed.
    
-   **PolarDB for MySQL** **8.0 clusters**: You can run this statement to view column details. If the `has_default` column shows 1, the column was added using the INSTANT algorithm.
    
    ```
    SELECT * FROM INFORMATION_SCHEMA.INNODB_COLUMNS WHERE TABLE_ID = (SELECT TABLE_ID FROM INFORMATION_SCHEMA.INNODB_TABLES WHERE NAME = "<database_name>/<table_name>");
    ```
    

## Contact us

If you have any questions about DDL operations, please [contact technical support](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
