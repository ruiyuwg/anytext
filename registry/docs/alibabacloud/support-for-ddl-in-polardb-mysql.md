This topic describes common Data Definition Language (DDL) operations in the cloud-native database PolarDB for MySQL. This guide helps you query and understand DDL behavior, assess operational risks, and reduce the impact on your business.

## **DDL operation overview**

In the MySQL ecosystem, DDL operations are complex. They include various types, such as index, primary key, column, table, foreign key, and generated column operations. DDL operations are time-consuming, resource-intensive, and involve table locking. If handled improperly, they can disrupt business operations and cause catastrophic failures.

The DDL module of PolarDB for MySQL has been significantly improved over years of development to enhance performance and lock stability. This topic describes the behavior of common DDL operations in different versions of PolarDB for MySQL based on the following aspects:

-   **Allows concurrent DML (non-locking)**: A non-locking DDL (Online DDL) statement requests an exclusive table lock only when modifying metadata. This lock typically lasts for less than one second. During schema evolution, you can read from and write to the target table. This improves response speed and availability in a production environment. In contrast, statements that do not support Online DDL lock the table for their entire duration and prevent concurrent write operations. If a DDL operation runs for a long time, it can significantly impact your business.
    
-   **Rebuilds the table (long running time)**: This type of DDL operation recreates the primary key and all secondary indexes based on the new table schema. This process usually takes a long time.
    
    **Note**
    
    PolarDB for MySQL supports parallel DDL. The performance of executing DDL using the kernel method is significantly better than using third-party tools such as gh-ost or pt-osc.
    
-   **Modifies only metadata (completes in seconds)**: This type of DDL operation modifies only metadata without changing table data. The running time of these operations does not increase with the table size and usually completes in seconds.
    
-   **Support for parallel DDL (multi-threaded acceleration)**: For operations on large tables, such as creating indexes or rebuilding tables, PolarDB supports parallel DDL. This feature uses multiple threads to improve DDL execution efficiency and can increase performance by up to 15 to 20 times. For more information, see [Parallel DDL](/help/en/polardb/polardb-for-mysql/user-guide/parallel-ddl).
    
-   **Performance impact (lockless change):** [Implementing lockless schema evolution using a lockless change ticket](/help/en/dms/perform-lock-free-ddl-operations) prevents transient connections and does not affect your business during off-peak hours.
    
    **Note**
    
    Perform this operation during off-peak hours. This operation may increase input/output operations per second (IOPS) and CPU usage.
    

## **DDL execution algorithms**

PolarDB for MySQL supports the following three DDL execution algorithms:

-   **INSTANT algorithm**: The INSTANT algorithm modifies only the metadata in the data dictionary. It does not modify or copy historical data, and does not rebuild the table. Therefore, the operation is independent of the table size and completes in seconds.
    
-   **INPLACE algorithm**: With the INPLACE algorithm, data replication and rebuilding are completed within the engine for faster execution. Most DDL operations that use the INPLACE algorithm allow concurrent read and write access, which minimizes the impact on your business. In addition, some DDL operations that use the INPLACE algorithm, such as **RENAME TABLE** and **ADD COMMENT**, modify only metadata without changing table data. These operations can be completed in seconds.
    
-   **COPY algorithm**: The COPY algorithm copies all data from the original table to a new table. During data replication, a shared-no-write (SNW) lock is held on the original table. Therefore, only read operations are supported during the DDL operation. Concurrent write operations are blocked, which significantly impacts your business.
    

DDL operations that allow concurrent read and write operations are collectively known as Online DDL. Online DDL has a minimal impact on your business. Usually, you do not need to manually specify the DDL algorithm. PolarDB automatically selects the optimal algorithm in the order of INSTANT, INPLACE, and then COPY. You can also use the ALGORITHM and LOCK clauses of the **ALTER TABLE** statement to manage DDL behavior with fine-grained control:

-   **ALGORITHM clause**: To execute a DDL statement using a specific algorithm, you can specify the ALGORITHM clause. The available values are DEFAULT, INSTANT, INPLACE, and COPY. If the DDL operation does not support the specified algorithm, an error is returned immediately.
    
-   **LOCK clause**: The LOCK clause adjusts concurrent access to the table during DDL execution. You can use this clause to control the level of concurrent read and write access while the table is being modified. The available options and their descriptions are as follows:
    
    -   **DEFAULT**: The kernel allows the maximum degree of concurrent reads and writes based on the DDL type.
        
    -   **NONE**: Allows concurrent reads and writes during DDL execution. If not supported, an error is returned.
        
    -   **SHARED**: Allows concurrent reads but blocks writes. If concurrent reads are not supported, an error is returned.
        
    -   **EXCLUSIVE**: Prohibits all concurrent read and write operations during the DDL operation.
        

To prevent the table from becoming inaccessible during an **ALTER TABLE** execution, you can specify the LOCK clause in the **ALTER TABLE** statement. If the lock behavior during DDL execution does not meet the specified requirement, the operation is stopped immediately.

## **Preview DDL execution behavior using the EXPLAIN DDL feature**

This topic lists the execution behavior of common DDL operations. However, because PolarDB is feature-rich, the actual DDL execution behavior may be affected by various factors. These factors include the structure of the target table, instance parameter configurations, and whether certain features are enabled.

To improve the security and predictability of schema evolution, you can use the `EXPLAIN DDL` feature to preview the execution behavior of a complex DDL operation before you perform it.

Use the following syntax to view the execution behavior of a DDL statement:

```
{ EXPLAIN | DESCRIBE | DESC } ALTER TABLE ...
```

Using `EXPLAIN DDL`, you can obtain the following key information:

-   Whether the current DDL operation can be successfully executed.
    
-   The algorithm type used by the current DDL operation. The value can be `INSTANT`, `INPLACE`, or `COPY`.
    
-   Whether the current DDL operation needs to rebuild the entire table data. Rebuilding a full table usually takes a long time.
    
-   Whether concurrent DML operations are allowed during the execution of the current DDL statement.
    
-   Whether the current DDL operation will be blocked by uncommitted transactions.
    
-   Whether the current DDL operation supports parallel DDL acceleration. If supported, the degree of parallelism for the current DDL operation is displayed.
    

By understanding this information in advance, you can more accurately assess the impact of DDL, choose an appropriate time for execution, and effectively avoid impacts on your online services, such as locked tables and excessively long running times. For more information, see [EXPLAIN DDL](/help/en/polardb/polardb-for-mysql/user-guide/explain-ddl#undefined).

## **DDL behavior**

### **Index operations**

## PolarDB for MySQL 8.0.2

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Create a secondary index

Yes

No

No

Supported

Delete a secondary index

Yes

No

Yes

Not applicable

Rename a secondary index

Yes

No

Yes

Not applicable

Add a full-text index (FULLTEXT)

No

No

**Note**

When you add the first full-text index to a table, an additional table rebuild operation is triggered if there is no user-defined FTS\_DOC\_ID column.

No

Not supported

Add a spatial index (SPATIAL)

No

No

No

Not supported

## PolarDB for MySQL 8.0.1

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Create a secondary index

Yes

No

No

Supported

Delete a secondary index

Yes

No

Yes

Not applicable

Rename a secondary index

Yes

No

Yes

Not applicable

Add a full-text index (FULLTEXT)

No

No

**Note**

When you add the first full-text index to a table, an additional table rebuild operation is triggered if there is no user-defined FTS\_DOC\_ID column.

No

Not supported

Add a spatial index (SPATIAL)

No

No

No

Not supported

## PolarDB for MySQL 5.7

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Create a secondary index

Yes

No

No

Supported

Delete a secondary index

Yes

No

Yes

Not applicable

Rename a secondary index

Yes

No

Yes

Not applicable

Add a full-text index (FULLTEXT)

No

No

**Note**

When you add the first full-text index to a table, an additional table rebuild operation is triggered if there is no user-defined FTS\_DOC\_ID column.

No

Not supported

Add a spatial index (SPATIAL)

No

No

No

Not supported

## PolarDB for MySQL 5.6

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Create a secondary index

Yes

No

No

Not supported

Delete a secondary index

Yes

No

Yes

Not applicable

Rename a secondary index

Yes

No

Yes

Not applicable

Add a full-text index (FULLTEXT)

No

No

**Note**

When you add the first full-text index to a table, an additional table rebuild operation is triggered if there is no user-defined FTS\_DOC\_ID column.

No

Not supported

Add a spatial index (SPATIAL)

No

No

No

Not supported

### **Primary key operations**

## PolarDB for MySQL 8.0.2

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a primary key

Yes

Yes

No

Supported

Delete a primary key

No

Yes

No

Not supported

Delete the original primary key and add a new one

Yes

Yes

No

Supported

## PolarDB for MySQL 8.0.1

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a primary key

Yes

Yes

No

Support

Delete a primary key

No

Yes

No

Not supported

Delete the original primary key and add a new one

Yes

Yes

No

Support

## PolarDB for MySQL 5.7

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a primary key

Yes

Yes

No

Supported

Delete a primary key

No

Yes

No

Not supported

Delete the original primary key and add a new one

Yes

Yes

No

Supported

## PolarDB for MySQL 5.6

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a primary key

Yes

Yes

No

Not supported

Delete a primary key

No

Yes

No

Not supported

Delete the original primary key and add a new one

Yes

Yes

No

Not supported

**Note**

In the following scenarios, concurrent DML is allowed only when the `sql_mode` cluster parameter includes `STRICT_TRANS_TABLES` or `STRICT_ALL_TABLES`:

-   **Add a primary key**
    
-   **Delete the original primary key and add a new one**
    

### **Column operations**

## PolarDB for MySQL 8.0.2

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a column

Yes

No¹

Yes¹

Supported¹

Delete a column

Yes

Yes

No

Supported

Rename a column

Yes

No

Yes

Not applicable

Reorder columns

Yes

Yes

No

Supported

Set a column's default value

Yes

No

Yes

Not applicable

Modify a column comment

Yes

No

Yes

Not applicable

Modify a column type

No

Yes

No

Not supported

Extend VARCHAR length

Yes²

No

Yes

Not applicable

Change the character set from UTF8mb3 to UTF8mb4

No

No³

Yes³

Not supported

Delete a column's default value

Yes

No

Yes

Not applicable

Modify the auto-increment value

Yes

No

Yes

Not applicable

Change a column to NULL

Yes

Yes

No

Support

Change a column to NOT NULL

No

Yes

No

Not supported

Modify the definition of an ENUM/SET column

Yes

No

Yes⁴

Not applicable

1.  The [instant ADD COLUMN](/help/en/polardb/polardb-for-mysql/user-guide/instant-add-column) feature supports adding columns only to the end of a table. If a table does not have a specified primary key, you must set the `implicit_primary_key` parameter to **OFF** to prevent the column addition operation from failing due to an implicit primary key column at the end of the table. The instant ADD COLUMN feature is not supported on compressed tables (ROW\_FORMAT=COMPRESSED), tables with full-text indexes, or temporary tables. If a cluster does not support the instant ADD COLUMN feature, the system adds a column using the INPLACE algorithm. This triggers a table rebuild. During the table rebuilding process, concurrent read and write operations are allowed. You can also use the parallel DDL feature to accelerate column addition.
    
2.  When you extend the length of a VARCHAR column, the number of bytes required to store the length must remain the same for fast column extension to be supported. Specifically, a VARCHAR column of 0 to 255 bytes requires one byte to store its length. A VARCHAR column of 256 bytes or more requires two bytes. The **ALTER TABLE** statement can modify only metadata if the extension of the VARCHAR column length is within a specific range, such as from 0 to 255 bytes or from 256 bytes to a larger size. If you change the length of a VARCHAR column from less than 256 bytes to 256 bytes or more, PolarDB uses Copy DDL by default. This locks the table for the entire duration. DML write operations are not supported, but read operations are.
    
    If you are unsure whether the range of your VARCHAR column modification meets the preceding conditions, you can use `ALGORITHM=INPLACE` to specify that the INPLACE algorithm is used for the current DDL operation. If fast column extension is not supported, an error is reported immediately. Example:
    
    ```
    ALTER TABLE table_name ALGORITHM=INPLACE, CHANGE COLUMN c1 c1 VARCHAR(256);
    
    ERROR 0A000: ALGORITHM=INPLACE is not supported. Reason: Cannot change column type INPLACE. Try ALGORITHM=COPY.
    ```
    
    VARCHAR is a variable-length storage class. Only the actual length is stored on the disk. Therefore, when you use a VARCHAR field, consider setting the maximum length to 256 bytes or more. This helps avoid the need to use the COPY algorithm when extending the field.
    
3.  When the following conditions are met, changing a column's character set from UTF8mb3 to UTF8mb4 modifies only metadata without changing the data. Otherwise, the COPY algorithm is used to rebuild the table. During the rebuild, the table is locked for the entire duration. You can only read from the target table. Write operations are blocked.
    
    -   The column type is CHAR, VARCHAR, ENUM, or TEXT.
        
    -   No index exists on the modified column.
        
    -   Before and after the character set conversion, the maximum storage length of the column is either less than 256 bytes or greater than 255 bytes.
        
    
    You can specify **ALGORITHM=INPLACE** to force the use of a non-rebuilding method to execute the DDL statement. If the COPY algorithm is required, an error is returned immediately. Example:
    
    ```
    ALTER TABLE test modify column b char(1) CHARACTER SET utf8mb4 default null,algorithm = inplace;
    ERROR 1846 (0A000): ALGORITHM=INPLACE is not supported. Reason: Cannot change column type INPLACE. Try ALGORITHM=COPY.
    ```
    
4.  You can modify only the metadata without rebuilding the entire table only when the storage size of the data type does not change and you append elements to the end of an ENUM or SET. Otherwise, the COPY algorithm is required to rebuild the table.
    

## PolarDB for MySQL 8.0.1

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a column

Yes

No¹

Yes¹

Supported¹

Delete a column

Yes

Yes

No

Support

Rename a column

Yes

No

Yes

Not applicable

Reorder columns

Yes

Yes

No

Supported

Set a column's default value

Yes

No

Yes

Not applicable

Modify a column comment

Yes

No

Yes

Not applicable

Modify a column type

No

Yes

No

Not supported

Extend VARCHAR length

Yes²

No

Yes

Not applicable

Change the character set from UTF8mb3 to UTF8mb4

No

No³

Yes³

Not supported

Delete a column's default value

Yes

No

Yes

Not applicable

Modify the auto-increment value

Yes

No

Yes

Not applicable

Change a column to NULL

Yes

Yes

No

Supported

Change a column to NOT NULL

No

Yes

No

Not supported

Modify the definition of an ENUM/SET column

Yes

No

Yes⁴

Not applicable

1.  The [instant add column](/help/en/polardb/polardb-for-mysql/user-guide/instant-add-column) feature supports adding columns only to the end of a table. If a table does not have a primary key, you must set the `implicit_primary_key` parameter to **OFF** to prevent the add column operation from failing due to the implicit primary key column at the end of the table. The instant add column feature is not supported on compressed tables (ROW\_FORMAT=COMPRESSED), tables with full-text indexes, or temporary tables. If a cluster does not support the instant add column feature, the system adds a column using the INPLACE algorithm. This triggers a full table rebuild. During the rebuild, concurrent read and write operations are allowed. You can also use the parallel DDL feature to accelerate the operation.
    
    In addition, if a table contains a columnstore index, the instant add column feature is not supported because adding a column requires the columnstore index to be rebuilt. You can set the `loose_imci_enable_add_column_instant_ddl` parameter to **ON** to enable the instant add column feature. In this case, PolarDB asynchronously rebuilds the columnstore index in the background. During the rebuild, the columnstore index is temporarily unavailable. For more information, see [DDL syntax for dynamically adding or deleting columnstore indexes](/help/en/polardb/polardb-for-mysql/user-guide/use-ddl-statements-to-dynamically-add-and-delete-an-imci).
    
2.  When you extend the length of a VARCHAR column, the number of bytes required to store the length must remain the same for fast column extension to be supported. Specifically, a VARCHAR column of 0 to 255 bytes requires one byte to store its length. A VARCHAR column of 256 bytes or more requires two bytes. The **ALTER TABLE** statement can modify only metadata if the extension of the VARCHAR column length is within a specific range, such as from 0 to 255 bytes or from 256 bytes to a larger size. If you change the length of a VARCHAR column from less than 256 bytes to 256 bytes or more, PolarDB uses Copy DDL by default. This locks the table for the entire duration. DML write operations are not supported, but read operations are.
    
    If you are unsure whether the range of your VARCHAR column modification meets the preceding conditions, you can use `ALGORITHM=INPLACE` to specify that the INPLACE algorithm is used for the current DDL operation. If fast column extension is not supported, an error is reported immediately. Example:
    
    ```
    ALTER TABLE table_name ALGORITHM=INPLACE, CHANGE COLUMN c1 c1 VARCHAR(256);
    
    ERROR 0A000: ALGORITHM=INPLACE is not supported. Reason: Cannot change column type INPLACE. Try ALGORITHM=COPY.
    ```
    
    VARCHAR is a variable-length storage class. Only the actual length is stored on the disk. Therefore, when you use a VARCHAR field, consider setting the maximum length to 256 bytes or more. This helps avoid the need to use the COPY algorithm when extending the field.
    
3.  When the `loose_innodb_support_instant_modify_charset` parameter is set to **ON** and the following conditions are met, changing a column's character set from UTF8mb3 to UTF8mb4 modifies only metadata without changing the data. Otherwise, the COPY algorithm is used to rebuild the table. During the rebuild, the table is locked for the entire duration. You can only read from the target table. Write operations are blocked.
    
    -   The column type is CHAR, VARCHAR, ENUM, or TEXT.
        
    -   No index exists on the modified column.
        
    -   Before and after the character set conversion, the maximum storage length of the column is either less than 256 bytes or greater than 255 bytes.
        
    
    You can specify **ALGORITHM=INPLACE** to force the use of a non-rebuilding method to execute the DDL statement. If the COPY algorithm is required, an error is returned immediately. Example:
    
    ```
    ALTER TABLE test modify column b char(1) CHARACTER SET utf8mb4 default null,algorithm = inplace;
    ERROR 1846 (0A000): ALGORITHM=INPLACE is not supported. Reason: Cannot change column type INPLACE. Try ALGORITHM=COPY.
    ```
    
4.  You can modify only the metadata without rebuilding the entire table only when the storage size of the data type does not change and you append elements to the end of an ENUM or SET. Otherwise, the COPY algorithm is required to rebuild the table.
    

## PolarDB for MySQL 5.7

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a column

Yes

No¹

Yes¹

Supported¹

Delete a column

Yes

Yes

No

Supported

Rename a column

Yes

No

Yes

Not applicable

Reorder columns

Yes

Yes

No

Supported

Set a column's default value

Yes

No

Yes

Not applicable

Modify a column comment

Yes

No

Yes

Not applicable

Modify a column type

No

Yes

No

Not supported

Extend VARCHAR length

Yes²

No

Yes

Not applicable

Change the character set from UTF8mb3 to UTF8mb4

No

Yes

No

Not supported

Delete a column's default value

Yes

No

Yes

Not applicable

Modify the auto-increment value

Yes

No

Yes

Not applicable

Change a column to NULL

Yes

Yes

No

Supported

Change a column to NOT NULL

No

Yes

No

Not supported

Modify the definition of an ENUM/SET column

Yes

No

Yes³

Not applicable

1.  To enable the [instant add column](/help/en/polardb/polardb-for-mysql/user-guide/instant-add-column) feature, you must set the `loose_innodb_support_instant_add_column` parameter to **ON**. This feature supports adding columns only to the end of a table. If a table does not have a primary key, you must set the `implicit_primary_key` parameter to **OFF** to prevent the operation from failing due to an implicit primary key column at the end of the table. The instant ADD COLUMN feature is also not supported on compressed tables (ROW\_FORMAT=COMPRESSED), tables with full-text indexes, or temporary tables. If a cluster does not support the instant ADD COLUMN feature, the system adds a column using the INPLACE algorithm. This process triggers a table rebuild and allows concurrent read and write operations. You can also use the parallel DDL feature to accelerate the operation.
    
2.  When you extend the length of a VARCHAR column, the number of bytes required to store the length must remain the same for fast column extension to be supported. Specifically, a VARCHAR column of 0 to 255 bytes requires one byte to store its length. A VARCHAR column of 256 bytes or more requires two bytes. The **ALTER TABLE** statement can modify only metadata if the extension of the VARCHAR column length is within a specific range, such as from 0 to 255 bytes or from 256 bytes to a larger size. If you change the length of a VARCHAR column from less than 256 bytes to 256 bytes or more, PolarDB uses Copy DDL by default. This locks the table for the entire duration. DML write operations are not supported, but read operations are.
    
    If you are unsure whether the range of your VARCHAR column modification meets the preceding conditions, you can use `ALGORITHM=INPLACE` to specify that the INPLACE algorithm is used for the current DDL operation. If fast column extension is not supported, an error is reported immediately. Example:
    
    ```
    ALTER TABLE table_name ALGORITHM=INPLACE, CHANGE COLUMN c1 c1 VARCHAR(256);
    
    ERROR 0A000: ALGORITHM=INPLACE is not supported. Reason: Cannot change column type INPLACE. Try ALGORITHM=COPY.
    ```
    
    VARCHAR is a variable-length storage class. Only the actual length is stored on the disk. Therefore, when you use a VARCHAR field, consider setting the maximum length to 256 bytes or more. This helps avoid the need to use the COPY algorithm when extending the field.
    
3.  You can modify only the metadata without rebuilding the entire table only when the storage size of the data type does not change and you append elements to the end of an ENUM or SET. Otherwise, the COPY algorithm is required to rebuild the table.
    

## PolarDB for MySQL 5.6

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a column

Yes

No¹

Yes¹

Not supported

Delete a column

Yes

Yes

No

Not supported

Rename a column

Yes

No

Yes

Not applicable

Reorder columns

Yes

Yes

No

Not supported

Set a column's default value

Yes

No

Yes

Not applicable

Modify a column comment

Yes

No

Yes

Not applicable

Modify a column type

No

Yes

No

Not supported

Extend VARCHAR length

No

Yes

No

Not supported

Change the character set from UTF8mb3 to UTF8mb4

No

Yes

No

Not supported

Delete a column's default value

Yes

No

Yes

Not applicable

Modify the auto-increment value

Yes

No

Yes

Not applicable

Change a column to NULL

Yes

Yes

No

Not supported

Change a column to NOT NULL

No

Yes

No

Not supported

Modify the definition of an ENUM/SET column

Yes

No

Yes²

Not applicable

1.  To enable the [instant ADD COLUMN](/help/en/polardb/polardb-for-mysql/user-guide/instant-add-column) feature, you must set the `loose_innodb_support_instant_add_column` parameter to **ON**. You can add columns only to the end of a table. If a table does not have a specified primary key, you must set the `implicit_primary_key` parameter to **OFF** to prevent the add column operation from failing due to an implicit primary key column at the end of the table. In addition, the instant ADD COLUMN feature is not supported on compressed tables (ROW\_FORMAT=COMPRESSED), tables with full-text indexes, temporary tables, or partitioned tables. If a cluster does not support the instant ADD COLUMN feature, the system adds a column using the INPLACE algorithm. This triggers a table rebuild. During the table rebuilding process, concurrent read and write operations are allowed.
    
    **Note**
    
    The instant add column feature for PolarDB for MySQL 5.6 is currently in canary release. To use this feature, go to [Quota Center](https://quotas.console.alibabacloud.com/white-list-products/polardb/quotas), find the quota name using the **Quota ID** `polardb_mysql_iac_56`, and click **Apply** in the Actions column to enable it.
    
2.  You can modify only the metadata without rebuilding the entire table only when the storage size of the data type does not change and you append elements to the end of an ENUM or SET. Otherwise, the COPY algorithm is required to rebuild the table.
    

### **Table operations**

## PolarDB for MySQL 8.0.2

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Modify ROW\_FORMAT

Yes

Yes

No

Support

Modify KEY\_BLOCK\_SIZE

Yes

Yes

No

Supported

Set persistent statistics information

Yes

No

Yes

Not applicable

Declare a character set

Yes

No

Yes

Not applicable

Convert a character set

No

Yes

No

Not supported

Optimize a table

Yes

Yes

**Note**

When you use `ALTER TABLE table_name ENGINE=InnoDB, ALGORITHM=INPLACE, LOCK=NONE` to defragment a table, the INPLACE algorithm is not supported for tables with full-text indexes.

No

Supported

Rebuild a table

Yes

Yes

No

Supported

Rename a table

Yes

No

Yes

Not applicable

Modify a table comment

Yes

No

Yes

Not applicable

## PolarDB for MySQL 8.0.1

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Modify ROW\_FORMAT

Yes

Yes

No

Supported

Modify KEY\_BLOCK\_SIZE

Yes

Yes

No

Supported

Set persistent statistics information

Yes

No

Yes

Not applicable

Declare a character set

Yes

No

Yes

Not applicable

Convert a character set

No

Yes

No

Not supported

Optimize a table

Yes

Yes

**Note**

When you use `ALTER TABLE table_name ENGINE=InnoDB, ALGORITHM=INPLACE, LOCK=NONE` to defragment a table, the INPLACE algorithm is not supported for tables with full-text indexes.

No

Supported

Rebuild a table

Yes

Yes

No

Supported

Rename a table

Yes

No

Yes

Not applicable

Modify a table comment

Yes

No

Yes

Not applicable

## PolarDB for MySQL 5.7

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Modify ROW\_FORMAT

Yes

Yes

No

Supported

Modify KEY\_BLOCK\_SIZE

Yes

Yes

No

Support

Set persistent statistics information

Yes

No

Yes

Not applicable

Declare a character set

Yes

No

Yes

Not applicable

Convert a character set

No

Yes

No

Not supported

Optimize a table

Yes

Yes

**Note**

When you use `ALTER TABLE table_name ENGINE=InnoDB, ALGORITHM=INPLACE, LOCK=NONE` to defragment a table, the INPLACE algorithm is not supported for tables with full-text indexes.

No

Supported

Rebuild a table

Yes

Yes

No

Supported

Rename a table

Yes

No

Yes

Not applicable

Modify a table comment

Yes

No

Yes

Not applicable

## PolarDB for MySQL 5.6

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Modify ROW\_FORMAT

Yes

Yes

No

Not supported

Modify KEY\_BLOCK\_SIZE

Yes

Yes

No

Not supported

Set persistent statistics information

Yes

No

Yes

Not applicable

Declare a character set

Yes

No

Yes

Not applicable

Convert a character set

No

Yes

No

Not supported

Optimize a table

Yes

Yes

**Note**

When you use `ALTER TABLE table_name ENGINE=InnoDB, ALGORITHM=INPLACE, LOCK=NONE` to defragment a table, the INPLACE algorithm is not supported for tables with full-text indexes.

No

Not supported

Rebuild a table

Yes

Yes

No

Not supported

Rename a table

Yes

No

Yes

Not applicable

Modify a table comment

Yes

No

Yes

Not applicable

### **Generated column operations**

## PolarDB for MySQL 8.0.2

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a STORED column

No

**Note**

Because adding a Stored Column expression involves the SQL/Server layer, Online DDL is not supported when adding a Stored Column.

Yes

No

Not supported

Change the order of a STORED column

No

Yes

No

Not supported

Delete a STORED column

Yes

Yes

No

Supported

Add a VIRTUAL column

Yes

No

Yes

Not applicable

Change the order of a VIRTUAL column

No

Yes

No

Not supported

Delete a VIRTUAL column

Yes

No

Yes

Not applicable

## PolarDB for MySQL 8.0.1

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a STORED column

No

**Note**

Because adding a Stored Column expression involves the SQL/Server layer, Online DDL is not supported when adding a Stored Column.

Yes

No

Not supported

Change the order of a STORED column

No

Yes

No

Not supported

Delete a STORED column

Yes

Yes

No

Supported

Add a VIRTUAL column

Yes

No

Yes

Not applicable

Change the order of a VIRTUAL column

No

Yes

No

Not supported

Delete a VIRTUAL column

Yes

No

Yes

Not applicable

## PolarDB for MySQL 5.7

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a STORED column

No

**Note**

Because adding a Stored Column expression involves the SQL/Server layer, Online DDL is not supported when adding a Stored Column.

Yes

No

Not supported

Change the order of a STORED column

No

Yes

No

Not supported

Delete a STORED column

Yes

Yes

No

Supported

Add a VIRTUAL column

Yes

No

Yes

Not applicable

Change the order of a VIRTUAL column

No

Yes

No

Not supported

Delete a VIRTUAL column

Yes

No

Yes

Not applicable

## PolarDB for MySQL 5.6

PolarDB for MySQL 5.6 does not support the Generated Column feature.

### **Foreign key operations**

## PolarDB for MySQL 8.0.2

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a foreign key

Yes¹

No¹

Yes¹

Not applicable

Delete a foreign key

Yes¹

No¹

Yes¹

Not applicable

## PolarDB for MySQL 8.0.1

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a foreign key

Yes¹

No¹

Yes¹

Not applicable

Delete a foreign key

Yes¹

No¹

Yes¹

Not applicable

## PolarDB for MySQL 5.7

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a foreign key

Yes¹

No¹

Yes¹

Not applicable

Delete a foreign key

Yes¹

No¹

Yes¹

Not applicable

## PolarDB for MySQL 5.6

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a foreign key

Yes¹

No¹

Yes¹

Not applicable

Delete a foreign key

Yes¹

No¹

Yes¹

Not applicable

INPLACE DDL is supported only when foreign\_key\_checks is disabled and only metadata is modified. Otherwise, only COPY DDL is supported, and the table is locked for the entire duration.

### **Partitioned table operations**

## PolarDB for MySQL 8.0.2

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a partition (ADD)

Yes¹

No²

Yes

Not supported

Delete a partition (DROP)

Yes¹

No²

No

Not supported

Discard a partition tablespace (DISCARD)

No

No

No

Not supported

Import a partition tablespace (IMPORT)

No

No

No

Not supported

Truncate a partition (TRUNCATE)

Yes

No

No

Not supported

Merge partitions (COALESCE)

No

Yes³

No

Not supported

Reorganize a partition (REORGANIZE)

Yes¹

No⁷

No

Not supported

Exchange a partition (EXCHANGE)

Yes¹

No

Yes

Not supported

Analyze a partition (ANALYZE)

Yes

No

No⁸

Not supported

Check a partition (CHECK)

Yes

No

No⁹

Not supported

Optimize a partition (OPTIMIZE)

Yes⁴

Yes⁴

No

Supported⁴

Rebuild a partition (REBUILD)

Yes¹

No⁷

No

Not supported

Repair a partition (REPAIR)

Yes

No¹⁰

No

Not supported

Convert a table to a partitioned table

No

Yes

Yes⁵

Not supported

Convert a partitioned table to a standard table

No

Yes

No

Not supported

Create a partial index

Yes

No⁶

No

Supported

1.  Partition-level metadata locks (MDL) ensure that after you set the `loose_partition_level_mdl_enabled` parameter to **true**, DDL operations do not affect DML on unaffected partitions. For more information, see [Online Partition Maintenance](/help/en/polardb/polardb-for-mysql/user-guide/online-partition-maintenance).
    
2.  Adding or deleting partitions for **RANGE** and **LIST** partitioned tables does not require a table rebuild. Adding partitions to **HASH** and **KEY** partitioned tables requires a table rebuild. Deleting partitions from **HASH** and **KEY** partitioned tables is not supported.
    
3.  Only **HASH** and **KEY** partitions are supported.
    
4.  When you execute the **OPTIMIZE PARTITION** operation on a table that uses the InnoDB engine, the entire partitioned table is rebuilt. Read and write operations are permitted on the target table during the rebuild. In this case, you can set the `innodb_parallel_build_primary_index` parameter to **ON** to use the [parallel DDL](/help/en/polardb/polardb-for-mysql/user-guide/parallel-ddl) feature to accelerate the rebuild.
    
5.  Instant conversion supports only [quickly converting a standard table into a range-partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/switch-a-common-table-to-a-range-partitioned-table).
    
6.  PolarDB for MySQL supports creating and deleting partition-level indexes. For more information, see [Partial Index](/help/en/polardb/polardb-for-mysql/user-guide/partial-indexes/).
    
7.  Reorganizing or rebuilding a partition only rebuilds the specified partitions that require data redistribution and rebuilding. Other partitions are not affected.
    
8.  Analyzing a partition only modifies statistics information, not the table's metadata or data.
    
9.  Checking a partition does not modify metadata or data.
    
10.  Repairing a partition only rebuilds the specified partitions that need to be repaired.
     

## PolarDB for MySQL 8.0.1

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a partition (ADD)

No

No¹

Yes

Not supported

Delete a partition (DROP)

No

No²

No

Not supported

Discard a partition tablespace (DISCARD)

No

No

No

Not supported

Import a partition tablespace (IMPORT)

No

No

No

Not supported

Truncate a partition (TRUNCATE)

Yes

No

No

Not supported

Merge partitions (COALESCE)

No

Yes

No

Not supported

Reorganize a partition (REORGANIZE)

No

No⁴

No

Not supported

Exchange a partition (EXCHANGE)

Yes

Yes

Yes

Not supported

Analyze a partition (ANALYZE)

Yes

Yes

No⁵

Not supported

Check a partition (CHECK)

Yes

No

No⁶

Not supported

Optimize a partition (OPTIMIZE)

Yes³

Yes³

No

Supported³

Rebuild a partition (REBUILD)

No

No⁴

No

Not supported

Repair a partition (REPAIR)

Yes

No⁴

No

Not supported

Convert a table to a partitioned table

No

Yes

No

Not supported

Convert a partitioned table to a standard table

No

Yes

No

Not supported

1.  Adding partitions to **RANGE** and **LIST** partitioned tables does not require a table rebuild. Adding partitions to **HASH** and **KEY** partitioned tables requires a table rebuild.
    
2.  Deleting partitions from **HASH** and **KEY** partitioned tables is not supported.
    
3.  When you execute the **OPTIMIZE PARTITION** operation on a table that uses the InnoDB engine, the entire partitioned table is rebuilt. Read and write operations are permitted on the target table during the rebuild. You can set the `innodb_parallel_build_primary_index` parameter to **ON** to use the [parallel DDL](/help/en/polardb/polardb-for-mysql/user-guide/parallel-ddl) feature to accelerate the rebuild.
    
4.  Reorganizing, rebuilding, and repairing a partition only rebuilds the specified partitions that require reorganization, rebuilding, or repair. Other partitions are not affected.
    
5.  Analyzing a partition only modifies statistics information, not the table's metadata or data.
    
6.  Checking a partition does not modify metadata or data.
    

## PolarDB for MySQL 5.7

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a partition (ADD)

No

No¹

Yes

Not supported

Delete a partition (DROP)

No

No¹

No

Not supported

Discard a partition tablespace (DISCARD)

No

No

No

Not supported

Import a partition tablespace (IMPORT)

No

No

No

Not supported

Truncate a partition (TRUNCATE)

Yes

No

No

Not supported

Merge partitions (COALESCE)

No

Yes

No

Not supported

Reorganize a partition (REORGANIZE)

No

No²

No

Not supported

Swap partition

Yes

No

Yes

Not supported

Analyze a partition (ANALYZE)

Yes

No

No³

Not supported

Check a partition (CHECK)

Yes

No

No⁴

Not supported

Optimize a partition (OPTIMIZE)

No

Yes

No

Not supported

Rebuild a partition (REBUILD)

No

No²

No

Not supported

Repair a partition (REPAIR)

Yes

No²

No

Not supported

Convert a table to a partitioned table

No

Yes

No

Not supported

Convert a partitioned table to a standard table

No

Yes

No

Not supported

1.  Adding or deleting partitions for **RANGE** and **LIST** partitioned tables does not require a table rebuild. Adding partitions to **HASH** and **KEY** partitioned tables requires a table rebuild. Deleting partitions from **HASH** and **KEY** partitioned tables is not supported.
    
2.  Reorganizing, rebuilding, and repairing a partition only rebuilds the specified partitions that require reorganization, rebuilding, or repair. Other partitions are not affected.
    
3.  Analyzing a partition only modifies statistics information, not the table's metadata or data.
    
4.  Checking a partition does not modify metadata or data.
    

## PolarDB for MySQL 5.6

**Operation**

**Allows concurrent DML**

**Rebuilds table**

**Modifies only metadata**

**Supports parallel DDL**

Add a partition (ADD)

No

No¹

Yes

Not supported

Delete a partition (DROP)

No

No¹

No

Not supported

Discard a partition tablespace (DISCARD)

No

No

No

Not supported

Import a partition tablespace (IMPORT)

No

No

No

Not supported

Truncate a partition (TRUNCATE)

Yes

No

No

Not supported

Merge partitions (COALESCE)

No

Yes

No

Not supported

Reorganize a partition (REORGANIZE)

No

No²

No

Not supported

Exchange a partition (EXCHANGE)

Yes

No

Yes

Not supported

Analyze a partition (ANALYZE)

Yes

No

No³

Not supported

Check a partition (CHECK)

Yes

No

No⁴

Not supported

Optimize a partition (OPTIMIZE)

No

Yes

No

Not supported

Rebuild a partition (REBUILD)

No

No²

No

Not supported

Repair a partition (REPAIR)

Yes

No²

No

Not supported

Convert a table to a partitioned table

No

Yes

No

Not supported

Convert a partitioned table to a standard table

No

Yes

No

Not supported

1.  Adding or deleting partitions for **RANGE** and **LIST** partitioned tables does not require a table rebuild. Adding partitions to **HASH** and **KEY** partitioned tables requires a table rebuild. Deleting partitions from **HASH** and **KEY** partitioned tables is not supported.
    
2.  Reorganizing, rebuilding, and repairing a partition only rebuilds the specified partitions that require reorganization, rebuilding, or repair. Other partitions are not affected.
    
3.  Analyzing a partition only modifies statistics information, not the table's metadata or data.
    
4.  Checking a partition does not modify metadata or data.
    

## **DDL execution methods**

-   When PolarDB for MySQL uses the **INPLACE** or **INSTANT** algorithm to execute a DDL operation, we recommend that you use the kernel method (Online DDL). This method is fast and stable.
    
-   When PolarDB for MySQL uses the **COPY** algorithm to execute a DDL operation, the table is locked for the entire duration. Read and write operations on the target table are blocked during the execution. In this case, you can use lock-free DDL in DMS or third-party tools such as gh-ost to execute the DDL statement. These third-party tools allow read and write operations during DDL execution, but they are usually slower. In large table or high concurrency scenarios, the operation may fail due to excessive incremental data.
    

The following table compares the differences between using the kernel method and third-party tools to execute DDL operations:

**Execution method**

**Allows concurrent reads and writes**

**Execution speed**

**Is binary logging required?**

**Parallel acceleration**

Kernel (Online DDL)

Yes

Fast

No

Supported

Third-party tools (such as lock-free DDL in DMS and gh-ost)

Yes

Slow

Yes

Not supported

**Note**

Even when you use third-party tools to perform DDL operations, an MDL-X lock is acquired during table switching (metadata modification), which temporarily locks the table. To work around this table locking issue, you can enable either the [nonblocking DDL](/help/en/polardb/polardb-for-mysql/user-guide/nonblocking-ddl-statements) feature or the [preemptive DDL](/help/en/polardb/polardb-for-mysql/user-guide/preemptible-ddl) feature, based on your requirements.

## Contact us

If you have any questions about DDL operations, please [contact technical support](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
