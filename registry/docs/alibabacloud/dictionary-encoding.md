If the cardinality of the fields in a table is relatively small, you can use dictionary encoding to improve the data compression ratio. This helps reduce the data storage size and improve query performance. Hologres supports dictionary encoding for specified fields. This topic describes the statements that are used to configure dictionary encoding in Hologres and related principles.

## Overview

Dictionary encoding can convert string comparisons to numeric comparisons to accelerate queries, such as the queries that involve GROUP BY and FILTER clauses. In addition, the data compression ratio is increased, and the storage space decreases. In Hologres, you can enable dictionary encoding for specific columns. This way, dictionary mappings are built for the values of specific columns. The following syntax is used to configure the dictionary encoding feature:

```
-- Syntax supported in Hologres V2.1 and later
CREATE TABLE <table_name> (...) WITH (dictionary_encoding_columns = '[<columnName>{:[on|off|auto]}[,...]]');

-- Syntax supported in all Hologres versions
CREATE TABLE <table_name> (...);
CALL set_table_property('table_name', 'dictionary_encoding_columns', '[<columnName>{:[on|off|auto]}[,...]]');
```

The following table describes parameters in the preceding syntax.

**Parameter**

**Description**

table\_name

The name of the table.

on

Enables dictionary encoding for the current column.

off

Disables dictionary encoding for the current column.

auto

Specifies that Hologres automatically determines whether to enable dictionary encoding or not. If you set the `auto` parameter for a column, Hologres automatically determines whether to perform dictionary encoding based on the repetition of values in the column. Dictionary encoding is more suitable for columns that have a high recurrence rate of values.

-   By default, Hologres V0.8 and earlier enable dictionary encoding for all columns of the TEXT data type.
    
-   In Hologres V0.9 and later, the `dictionary_encoding_columns` property is set to `auto` for all columns of the TEXT data type by default. When data is written to a column of a table, if the recurrence rate of the values in the column is greater than or equal to `90%`, Hologres enables dictionary encoding for the column.
    

## Suggestions

-   We recommend that you build dictionary mappings for columns with string comparisons and a high recurrence rate of values.
    
-   We recommend that you do not build dictionary mappings for all columns. Otherwise, extra encoding and decoding overheads are generated.
    
-   We recommend that you do not build dictionary mappings for columns in which JSON-formatted data is saved as the TEXT data type.
    
-   You can build dictionary mappings for specified columns by modifying the dictionary\_encoding\_columns property after a table is created. The modified columns do not immediately take effect. Dictionary mappings are asynchronously built or deleted at the backend. For more information, see [ALTER TABLE](/help/en/hologres/developer-reference/alter-table#concept-2463316).
    
-   We recommend that you do not disable dictionary encoding. If you disable dictionary encoding, the data compression ratio is small, and the storage space increases. We recommend that you set `dictionary_encoding_columns` to `auto`.
    

## Usage notes

-   Dictionary encoding can be enabled only for tables that use the column-oriented or row-column hybrid storage model.
    
-   The columns specified by the dictionary\_encoding\_columns property can be null.
    
-   We recommend that you build dictionary mappings only for columns with a few values. This can help reduce storage required.
    
-   In Hologres V0.8 and earlier, dictionary encoding is enabled for all columns of the TEXT data type by default. In Hologres V0.9 and later, the `dictionary_encoding_columns` property is set to `auto` for all columns of the TEXT data type by default. When data is written to a column of a table, if the recurrence rate of the values in the column is greater than or equal to `90%`, Hologres enables dictionary encoding for the column.
    

## How it works

Dictionary encoding is a data compression technique that enables Hologres to encode and store raw data as data of the NUMERIC type and maintain the corresponding encoding schema. During data reads, Hologres decodes data based on the encoding schema. Therefore, dictionary encoding can accelerate queries, such as the queries that include the GROUP BY and FILTER clauses on columns with string comparisons and especially on columns with a higher recurrence rate of values. By default, Hologres enables dictionary encoding for all columns of the TEXT data type. However, the decoding process results in extra computing overheads. For columns with a low recurrence rate of values (half of the values in a column are different) and columns used in join operations, dictionary encoding incurs more extra encoding and decoding overheads. Therefore, we recommend that you do not build dictionary mappings for all columns. The following figure shows the technical principles of dictionary encoding.![字典编码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5308526761/p531218.png)

## Examples

-   Syntax supported in Hologres V2.1 and later:
    
    ```
    CREATE TABLE tbl (
        a int NOT NULL,
        b text NOT NULL,
        c text NOT NULL
    )
    WITH (
        dictionary_encoding_columns = 'a:on,b:off,c:auto'
    );
    
    -- Modify dictionary mappings.
    ALTER TABLE tbl SET (dictionary_encoding_columns = 'a:off'); --The ALTER TABLE statement can be used to modify dictionary mappings only for all columns.
    ```
    
-   Syntax supported in all Hologres versions:
    
    ```
    -- Create a table named tbl and build dictionary mappings.
    begin;
    create table tbl (
      a int not null,
      b text not null,
      c text not null
    );
    call set_table_property('tbl', 'dictionary_encoding_columns', 'a:on,b:off,c:auto');
    commit;
    
    -- Modify dictionary mappings.
    call set_table_property('tbl', 'dictionary_encoding_columns', 'a:off');-- Modify the dictionary_encoding_columns property for all columns. Column b and Column c are the columns of the TEXT data type, and dictionary mappings are built for them by default.
    
    call update_table_property('tbl', 'dictionary_encoding_columns', 'c:off');-- Modify the dictionary_encoding_columns property only for Column c. Disable dictionary encoding for Column c.
    ```
    

## **References**

-   For more information about how to configure table properties based on business query scenarios, see [Guide on scenario-specific table creation and tuning](/help/en/hologres/user-guide/guide-on-scenario-specific-table-creation-and-tuning).
    
-   For more information about the DDL statements for Hologres internal tables, see the following topics:
    
    -   [CREATE TABLE](/help/en/hologres/developer-reference/create-tables)
        
    -   [CREATE TABLE AS](/help/en/hologres/developer-reference/create-table-as)
        
    -   [CREATE TABLE LIKE](/help/en/hologres/developer-reference/create-table-like)
        
    -   [ALTER TABLE](/help/en/hologres/developer-reference/alter-table)
        
    -   [DROP TABLE](/help/en/hologres/developer-reference/drop-table)
