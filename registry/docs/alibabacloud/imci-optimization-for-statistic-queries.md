During query execution, the pruner feature of the columnstore index filters out data blocks that do not need to be accessed, which improves SQL query performance. This topic describes pruner scenarios, considerations, syntax, and related parameters.

## Overview

Columnstore index data is stored in single-column data blocks, with a default granularity of 64,000 rows per block. You can estimate the number of data blocks using the formula: `total table rows / 64000`. All column packs for a set of rows form a row group. A data scan requires traversing all data blocks of a specified column to retrieve records that meet the filter condition. The scan overhead is high when you query large tables. The overhead increases if the table data cannot fit entirely in memory. In practice, you can use statistics information with specific filter conditions to skip unnecessary data blocks and accelerate queries. In PolarDB columnstore indexes, this method is called a pruner. Currently, four types of pruners are supported:

-   **Bloom filter**
    
    -   Uses a bit array to represent a set and determine whether an element belongs to that set.
        
    -   Prefix bloom filter: Builds a bloom filter based on string prefixes to reduce the performance and storage overhead caused by long strings. The supported versions are as follows:
        
        -   MySQL 8.0.1, revision version 8.0.1.1.42 or later.
            
        -   MySQL 8.0.2, revision version 8.0.2.2.25 or later.
            
-   **Minmax indexes**
    
    Stores the minimum and maximum values for each data block. The filter conditions are compared against these values to decide whether to scan the block.
    
-   **Token bloom filter**
    
    Filters strings by splitting them at non-alphanumeric characters. For example, "I am IMCI" becomes `I |am|IMCI`. This is suitable for **LIKE** fuzzy queries.
    
-   **N-gram bloom filter**
    
    Filters strings by splitting them into substrings of a specified length. For example, the string "storage" with an n-gram size of 3 becomes `sto|tor|ora|rag|age`. This is suitable for **LIKE** fuzzy queries.
    

## Scenarios

-   Bloom filter: Ideal for equivalent and IN conditions. It provides strong filtering when the equivalent condition has high selectivity, for example, when you filter by a string ID.
    
-   Minmax indexes: Effective when column data has good locality, especially for range and equivalent filters, such as WHERE clauses with date or sorted fields.
    
-   Token bloom filters and n-gram bloom filters quickly eliminate non-matching data blocks in **LIKE** fuzzy queries.
    

## Storage overhead

Enabling a pruner for string-type columns adds storage and memory overhead. You can choose which pruner type to build, such as bloom filter, minmax indexes, token bloom filter, or n-gram bloom filter, based on your scenario. The memory usage formulas are as follows:

-   **Bloom filter**, **token bloom filter**, or **n-gram bloom filter**
    
    -   With the default 64,000-row block size and a distinct value count that exceeds 3% of the total rows:
        
        Memory usage = 1.2 × number of columns with bloom filter × total table rows (bytes)
        
    -   With the default 64,000-row block size and a distinct value count that is less than or equal to 3% of the total rows:
        
        Memory usage = 1.2 × number of columns with bloom filter × number of distinct values (bytes)
        
        In this case, the effectiveness of the bloom filter depends on data locality. Performance is poor if the data is uniformly distributed.
        
-   **Minmax indexes**
    
    The memory usage formula is as follows:
    
    Memory usage = 2 × number of columns with minmax indexes × (total table rows / block size) × prefix length × character encoding length
    
    For example, a table with 2 billion rows, minmax indexes on 10 columns, a prefix length of 20, a block size of 64,000, and utf8mb4 encoding (4 bytes per character) uses approximately 46 MB of memory.
    

## Considerations

-   For clusters that run PolarDB MySQL version 8.0.1.1.32 or earlier, or 8.0.2.2.13 or earlier, a pruner is not built for data blocks that contain NULL values. Filtering with `IS NULL` or `IS NOT NULL` is not supported.
    
-   **For clusters that run PolarDB MySQL version 8.0.1.1.35 or later, or 8.0.2.2.16 or later, a pruner is automatically built for string-type columns when you create a columnstore index.** Bloom filters use a Least Recently Used (LRU) cache for memory management. If you upgrade from an older version, you must rebuild the columnstore index to enable the pruner for string columns.
    
-   For clusters that run PolarDB MySQL version 8.0.1.1.34 or earlier, or 8.0.2.2.15 or earlier, pruners remain in memory permanently. A pruner is not automatically built for string columns during columnstore index creation.
    
-   To build a pruner for a string-type column, you must ensure that the string does not contain '\\0', for example, 'polar\\0db'.
    
-   The system automatically builds minmax indexes for numeric types, such as INT, DECIMAL, and DATETIME.
    
-   Minmax indexes are not supported for JSON or GEOMETRY fields.
    
-   Bloom filters are not supported for numeric types such as INT, DECIMAL, and DATETIME, or for JSON, BLOB, and TEXT fields.
    

## Syntax reference

You can build a pruner when you create a table, or add or remove it from an existing table. To modify a pruner on an existing table, you must first drop the columnstore index and then recreate it. The syntax is as follows:

**Note**

-   You can use Data Definition Language (DDL) statements to modify the COMMENT attribute in the table schema to add or remove a pruner for string-type columns.
    
-   Column-level COMMENT attributes take precedence over table-level COMMENT attributes.
    
-   Newer versions support more pruner types and enable common ones by default, such as minmax indexes and bloom filters for strings. Before you add new pruners, check the existing pruner types on each column. For more information, see [Check if a Pruner Is Built on Table Columns](#1d682901cae6z).
    

### Build pruner when creating a table

-   **Build a pruner (bloom filter)**
    
    **Note**
    
    Clusters that run PolarDB MySQL 8.0 with revision 8.0.1.1.32 or later, or 8.0.2.2.13 or later, support the `PRUNER_BLOOM` attribute.
    
    -   Build a bloom filter for all supported columns. Example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10),
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1 PRUNER_BLOOM=1"; /* pruner_bloom attribute in comment */
        ```
        
    -   Build a bloom filter for a specific column. Example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10) "PRUNER_BLOOM=1", /* pruner_bloom attribute in comment */
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1";
        ```
        
-   **Build a pruner (minmax indexes)**
    
    For long string columns, the system compares a prefix of the string against the minimum and maximum values to reduce memory usage. The default prefix length is 20 characters, and the maximum is 255. You can use \`PRUNER\_MINMAX\` to enable string minmax indexes and \`PREFIX\_LEN\` to set the prefix length.
    
    **Note**
    
    -   A character count is based on the number of characters, not the encoding length. For example, the first 2 characters of "Alibaba Cloud PolarDB" are "Al", and the first 5 characters are "Aliba".
        
    -   Clusters that run PolarDB MySQL 8.0 with revision 8.0.1.1.32 or later, or 8.0.2.2.13 or later, support the `PRUNER_MINMAX` and `PREFIX_LEN` attributes.
        
    
    -   Build minmax indexes for all string columns. Example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10),
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1 PRUNER_MINMAX=1 PREFIX_LEN=30"; /* pruner_minmax attribute with 30-character prefix */
        ```
        
    -   Build minmax indexes for specific columns. Example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10) "PRUNER_MINMAX=1 PREFIX_LEN=30", /* pruner_minmax with 30-char prefix */
            str_col2 varchar(10) "PRUNER_MINMAX=1 PREFIX_LEN=10" /* pruner_minmax with 10-char prefix */
          ) ENGINE InnoDB COMMENT "COLUMNAR=1";
        ```
        
-   **Build a prefix bloom filter**
    
    **Note**
    
    Clusters that run PolarDB MySQL 8.0 with revision 8.0.1.1.42 or later, or 8.0.2.2.25 or later, support the `PRUNER_PREFIX_BLOOM` attribute.
    
    -   Build a prefix bloom filter for all supported columns. Example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10),
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1 PRUNER_PREFIX_BLOOM=1"; /* PRUNER_PREFIX_BLOOM in table comment */
        ```
        
    -   Build a prefix bloom filter for a specific column. Example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10) "PRUNER_PREFIX_BLOOM=1", /* PRUNER_PREFIX_BLOOM in column comment */
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1";
        ```
        
-   **Building a token bloom filter**
    
    **Note**
    
    The `PRUNER_TOKEN_BLOOM` attribute is supported on the following versions:
    
    -   PolarDB for MySQL 8.0.1, revision 8.0.1.1.39 or later.
        
    -   PolarDB for MySQL 8.0.2, revision 8.0.2.2.20 or later.
        
    
    -   You can build a token bloom filter for all supported columns. For example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10),
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1 PRUNER_TOKEN_BLOOM=1";
        ```
        
    -   You can build a token bloom filter for a specific column. For example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10) "PRUNER_TOKEN_BLOOM=1",
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1";
        ```
        
-   **Build an n-gram bloom filter**
    
    **Note**
    
    -   The `PRUNER_TOKEN_BLOOM` property is supported for cluster versions that meet the following conditions:
        
        -   PolarDB MySQL 8.0.1 with revision 8.0.1.1.39 or later.
            
        -   PolarDB MySQL 8.0.2 with revision 8.0.2.2.20 or later.
            
    -   `PRUNER_NGRAM_BLOOM=N`: N must be 2 or greater and sets the substring length. We recommend that you set N to a value less than or equal to the length of the string in `LIKE "%string%"`. If the string in `LIKE "%string%"` is shorter than N, the n-gram bloom filter cannot be used.
        
    
    -   Build an n-gram bloom filter for all supported columns. Example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10),
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1 PRUNER_NGRAM_BLOOM=2";
        ```
        
    -   Build an n-gram bloom filter for a specific column. Example:
        
        ```
        CREATE TABLE
          t1 (
            id INT PRIMARY KEY,
            str_col1 char(10) "PRUNER_NGRAM_BLOOM=3",
            str_col2 varchar(10)
          ) ENGINE InnoDB COMMENT "COLUMNAR=1";
        ```
        
    

### Build or delete pruner on an existing table

To add or remove a pruner on an existing table, you must rebuild the columnstore index by first dropping it and then recreating it. Before you rebuild the index, update or remove the pruner attribute in the COMMENT. The following section uses `PRUNER_MINMAX` as an example.

-   **Build a pruner**
    
    Assume that the original table structure is as follows:
    
    ```
           Table: t1
    Create Table: CREATE TABLE `t1` (
      `id` int(11) NOT NULL,
      `str_col1` char(10) DEFAULT NULL,
      `str_col2` varchar(10) DEFAULT NULL,
      PRIMARY KEY (`id`),
      COLUMNAR INDEX (`id`,`str_col1`,`str_col2`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='COLUMNAR=1'
    ```
    
    -   Build a minmax pruner for all string columns in table `t1`:
        
        1.  Drop the columnstore index on table `t1`.
            
            ```
            ALTER TABLE t1 COMMENT = "COLUMNAR=0";
            ```
            
        2.  Enable the minmax pruner for all string columns in table `t1`.
            
            ```
            ALTER TABLE t1 COMMENT = "COLUMNAR=1 PRUNER_MINMAX=1"; 
            ```
            
        3.  (Optional) View the updated table structure.
            
            ```
            SHOW CREATE TABLE t1 FULL \G
            ```
            
            Result:
            
            ```
            *************************** 1. row ***************************
                   Table: t1
            Create Table: CREATE TABLE `t1` (
              `id` int(11) NOT NULL,
              `str_col1` char(10) DEFAULT NULL,
              `str_col2` varchar(10) DEFAULT NULL,
              PRIMARY KEY (`id`),
              COLUMNAR INDEX (`id`,`str_col1`,`str_col2`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='COLUMNAR=1 PRUNER_MINMAX=1'
            ```
            
            The `t1` table now includes the `PRUNER_MINMAX` attribute.
            
    -   Build a minmax pruner for the `str_col1` column in table `t1`:
        
        1.  Add a pruner to the `str_col1` column.
            
            ```
            ALTER TABLE t1 MODIFY COLUMN str_col1 char(10) COMMENT 'PRUNER_MINMAX=1';
            ```
            
        2.  Execute the following commands in sequence to rebuild the columnstore index for table `t1`.
            
            ```
            ALTER TABLE t1 COMMENT = "COLUMNAR=0";
            ALTER TABLE t1 COMMENT = "COLUMNAR=1";
            ```
            
        3.  (Optional) View the updated table structure.
            
            ```
            SHOW CREATE TABLE t1 FULL \G
            ```
            
            Result:
            
            ```
            *************************** 1. row ***************************
                   Table: t1
            Create Table: CREATE TABLE `t1` (
              `id` int(11) NOT NULL,
              `str_col1` char(10) DEFAULT NULL COMMENT 'PRUNER_MINMAX=1',
              `str_col2` varchar(10) DEFAULT NULL,
              PRIMARY KEY (`id`),
              COLUMNAR INDEX (`id`,`str_col1`,`str_col2`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='COLUMNAR=1'
            ```
            
            The `str_col1` column now has the `PRUNER_MINMAX` attribute.
            
-   **Delete a pruner**
    
    -   Delete the `PRUNER_MINMAX` attribute from the table.
        
        Assume that table `t1` has the following structure:
        
        ```
        SHOW CREATE TABLE t1 full \G
        *************************** 1. row ***************************
               Table: t1
        Create Table: CREATE TABLE `t1` (
          `id` int(11) NOT NULL,
          `str_col1` char(10) DEFAULT NULL,
          `str_col2` varchar(10) DEFAULT NULL,
          PRIMARY KEY (`id`),
          COLUMNAR INDEX (`id`,`str_col1`,`str_col2`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='COLUMNAR=1 PRUNER_MINMAX=1'
        ```
        
        To delete the `PRUNER_MINMAX` attribute from table `t1`:
        
        1.  Execute the following command to delete the columnstore index on table `t1`.
            
            ```
            ALTER TABLE t1 COMMENT = "COLUMNAR=0";
            ```
            
        2.  Set `PRUNER_MINMAX` to 0 and rebuild the index.
            
            ```
            ALTER TABLE t1 COMMENT = "COLUMNAR=1 PRUNER_MINMAX=0";
            ```
            
        3.  (Optional) View the updated table structure.
            
            ```
            SHOW CREATE TABLE t1 FULL \G
            ```
            
            Result:
            
            ```
            *************************** 1. row ***************************
                   Table: t1
            Create Table: CREATE TABLE `t1` (
              `id` int(11) NOT NULL,
              `str_col1` char(10) DEFAULT NULL,
              `str_col2` varchar(10) DEFAULT NULL,
              PRIMARY KEY (`id`),
              COLUMNAR INDEX (`id`,`str_col1`,`str_col2`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='COLUMNAR=1'
            ```
            
            The `t1` table no longer has the `PRUNER_MINMAX` attribute.
            
    -   Delete the `PRUNER` attribute from a column.
        
        Assume that the `str_col1` column in table `t1` has the `PRUNER_MINMAX` attribute. The table structure is as follows:
        
        ```
               Table: t1
        Create Table: CREATE TABLE `t1` (
          `id` int(11) NOT NULL,
          `str_col1` char(10) DEFAULT NULL COMMENT 'PRUNER_MINMAX=1',
          `str_col2` varchar(10) DEFAULT NULL,
          PRIMARY KEY (`id`),
          COLUMNAR INDEX (`id`,`str_col1`,`str_col2`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='COLUMNAR=1'
        ```
        
        To delete the `PRUNER_MINMAX` attribute from the `str_col1` column:
        
        1.  Remove the `PRUNER_MINMAX` attribute from the `str_col1` column.
            
            ```
            ALTER TABLE t1 MODIFY COLUMN str_col1 char(10) COMMENT 'PRUNER_MINMAX=0';
            ```
            
        2.  Rebuild the columnstore index.
            
            ```
            ALTER TABLE t1 COMMENT = "COLUMNAR=0";
            ALTER TABLE t1 COMMENT = "COLUMNAR=1";
            ```
            
        3.  (Optional) View the updated table structure.
            
            ```
            SHOW CREATE TABLE t1 FULL \G
            ```
            
            Result:
            
            ```
            *************************** 1. row ***************************
                   Table: t1
            Create Table: CREATE TABLE `t1` (
              `id` int(11) NOT NULL,
              `str_col1` char(10) DEFAULT NULL,
              `str_col2` varchar(10) DEFAULT NULL,
              PRIMARY KEY (`id`),
              COLUMNAR INDEX (`id`,`str_col1`,`str_col2`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='COLUMNAR=1'
            ```
            
            The `str_col1` column no longer has the `PRUNER_MINMAX` attribute.
            

## Check whether pruner is built on table columns

**Versions 8.0.1.1.42 or later, or 8.0.2.2.25 or later**

You can check the `information_schema.imci_secondary_indexes` table. The `INDEX_TYPE` field shows the pruner types for string columns. If a pruner exists, its type appears in this field.

**Note**

In versions 8.0.1.1.42 or later, or 8.0.2.2.25 or later, the `information_schema.imci_secondary_indexes` table is enhanced with more fields.

```
SELECT * FROM information_schema.imci_secondary_indexes \G
*************************** 1. row ***************************
         TABLE_ID: 1111
      SCHEMA_NAME: test_imci
       TABLE_NAME: lineitem
      COLUMN_NAME: l_returnflag -- column name
       INDEX_TYPE: MinMax,PrefixBloom -- pruner types: minmax and prefix bloom filter
  MINMAX_RE_PACKS: 0 -- cumulative skipped packs by minmax pruner
  MINMAX_AC_PACKS: 0 -- cumulative accepted packs (all records match; no per-row predicate needed)
MINMAX_TEST_PACKS: 0 -- cumulative minmax pruner evaluations
   BLOOM_RE_PACKS: 0 -- cumulative skipped packs by bloom filter
 BLOOM_TEST_PACKS: 0 -- cumulative bloom filter evaluations
```

**Versions earlier than 8.0.1.1.42 or 8.0.2.2.25**

You can check the `information_schema.imci_secondary_indexes` table. The `STR_BLOOM_PRUNER` and `STR_MINMAX_PRUNER` fields indicate the pruner status. A value of 1 indicates that a pruner is built.

```
SELECT * FROM information_schema.imci_secondary_indexes WHERE schema_name='test_tmp' AND table_name='t1'\G
*************************** 1. row ***************************
         TABLE_ID: 1091
      SCHEMA_NAME: test_tmp
       TABLE_NAME: t1
      COLUMN_NAME: str_col1
 STR_BLOOM_PRUNER: 1 -- bloom filter built for str_col1
STR_MINMAX_PRUNER: 1 -- minmax built for str_col1
    SINDEX_SWITCH: 0
*************************** 2. row ***************************
         TABLE_ID: 1091
      SCHEMA_NAME: test_tmp
       TABLE_NAME: t1
      COLUMN_NAME: str_col2
 STR_BLOOM_PRUNER: 1 -- bloom filter built for str_col2
STR_MINMAX_PRUNER: 1 -- minmax built for str_col2
    SINDEX_SWITCH: 0
```

The query results show that a status value of 1 for the `STR_BLOOM_PRUNER` field indicates that a bloom filter is built for `str_col1` and `str_col2`. A status value of 1 for the `STR_MINMAX_PRUNER` field indicates that minmax indexes are built for `str_col1` and `str_col2`**.**

### **Verify pruner effectiveness**

## Check using SHOW STATUS

Before and after you run a query, you can use `SHOW STATUS LIKE 'imci_pruner%'` to inspect data block filtering and confirm the pruner's impact. The values are cumulative pruner metrics for the current session. For multi-table queries, the results are summed across all tables. The status values are described as follows:

-   `imci_pruner_accepted`: The number of data blocks that fully satisfy the filter condition.
    
-   `imci_pruner_rejected`: The number of data blocks that fail the filter condition.
    

The total number of skipped blocks is the sum of accepted blocks and rejected blocks.

Accepted blocks skip per-record filtering, although materialization may still require access. Rejected blocks skip the scan process entirely, and no I/O occurs.

**Example**

Take table `t1` as an example to determine whether the pruner is effective for a search statement. The table schema of table `t1` is as follows:

```
       Table: t1
Create Table: CREATE TABLE `t1` (
  `id` int(11) NOT NULL,
  `str_col1` char(10) DEFAULT NULL,
  `str_col2` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  COLUMNAR INDEX (`id`,`str_col1`,`str_col2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='COLUMNAR=1 PRUNER=1'
```

Assume that a table contains 10 data blocks, and the records that meet the condition `str_col1='polardb'` are concentrated in a single data block. You can perform the following steps to check whether the pruner takes effect on the `SELECT COUNT(1) FROM t1 WHERE str_col1='polardb'` search statement.

1.  Check the current pruner status.
    
    ```
    SHOW STATUS LIKE  'imci_pruner%';
    ```
    
    Result:
    
    ```
    +----------------------+-------+
    | Variable_name        | Value |
    +----------------------+-------+
    | imci_pruner_accepted | 0     |
    | imci_pruner_rejected | 0     |
    +----------------------+-------+
    2 rows in set (0.00 sec)
    ```
    
2.  Execute the following command to query the number of rows that meet the condition `str_col1='polardb'`.
    
    ```
    SELECT COUNT(1) FROM t1 WHERE str_col1='polardb';
    ```
    
    Result:
    
    ```
    +----------+
    | count(1) |
    +----------+
    |        1 |
    +----------+
    1 row in set (0.01 sec)
    ```
    
3.  Check the pruner status again.
    
    ```
    SHOW STATUS LIKE  'imci_pruner%';
    ```
    
    Result:
    
    ```
    +----------------------+-------+
    | Variable_name        | Value |
    +----------------------+-------+
    | imci_pruner_accepted | 0     |
    | imci_pruner_rejected | 9     |
    +----------------------+-------+
    2 rows in set (0.00 sec)
    ```
    
    The value of `imci_pruner_accepted` is 0 and the value of `imci_pruner_rejected` is 9. The query skipped 9 blocks, which confirms the effectiveness of the pruner.
    

## **Check using imci\_sql\_profiling**

**Note**

This feature is supported only in PolarDB MySQL 8.0 with revision 8.0.1.1.5 or later, or 8.0.2.2.29 or later.

You can query `information_schema.imci_sql_profiling` to view how many data packets the Table Scan operator filtered using the pruner in the execution plan. Unlike checking with [SHOW STATUS](#09a0c81aa3oof), this method shows table-level filtering that is directly tied to the query. The `SHOW STATUS` command is session-scoped and requires manual delta calculation. Therefore, this method is more intuitive.

1.  Enable columnstore index query profiling.
    
    ```
    SET imci_analyze_query=ON;
    ```
    
2.  Run a query, for example:
    
    ```
    SELECT count(*) from t1 WHERE v1 > 100;
    +--------------+
    | count(*)     |
    +--------------+
    | 600          |
    +--------------+
    ```
    
3.  Check the `imci_sql_profiling` table.
    
    ```
    SELECT `Operator`, `Extra Info` from INFORMATION_SCHEMA.IMCI_SQL_PROFILING;
    ```
    
    ```
    +----+------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+
    | ID | Operator                                                                     | Extra Info                                                                                                |
    +----+------------------------------------------------------------------------------+-----------------------------------------------------------------------------------------------------------+
    |  1 | Select Statement                                                             | IMCI Execution Plan (max_dop = 32, real_dop = 32, max_query_mem = unlimited, real_query_mem = unlimited)  |
    |  2 | └─Aggregation                                                                |                                                                                                           |
    |  3 |   └─Table Scan	Cond: (v1 > 100), Pruner Counter: [AC: 8, RE: 1, PA: 2]     |                                                                                                           |
    +----+------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------+
    ```
    
    `AC: 8` indicates that 8 packets were accepted. `RE: 1` indicates that 1 packet was rejected. `PA: 2` indicates that 2 packets were partially matched and required further filtering.
    

## Performance Testing

This section describes a test on a table with 120 million rows, which is approximately 1,800 data blocks, on a 2-core, 4 GB cluster. The string column `col` has 80 million distinct values. The test compares the query performance with and without a bloom filter using the following statement:

```
SELECT COUNT(1) FROM t1 WHERE col='xxx'
```

The query times are as follows:

**Building a Bloom filter**

**Without bloom filter**

0.15s

18.6s

The condition `col='xxx'` combined with the bloom filter eliminated most of the data blocks. Only a few blocks were scanned, which significantly improved performance.
