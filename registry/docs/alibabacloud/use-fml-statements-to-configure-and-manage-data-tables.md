After you create a data table, you can use Script Mode to configure the table's Columns and partition information with FML statements. This topic describes how to use FML statements to configure a data table.

## Introduction

Fast Modeling Language (FML) is a SQL-like language used to quickly build data tables for dimensional modeling. Its syntax is based on standard SQL. In DataWorks, dimensional modeling decouples design from implementation. During the design phase, you do not need to consider the specific implementation details of various big data engines. The modeling engine uses the schema defined in FML to drive operations on the underlying engines. Only during materialization—the process of converting a logical table into a physical table—does the engine translate FML into SQL syntax that the target engine can recognize and then submit a node to execute the statements.

## Prerequisites

DataWorks does not currently support creating data tables using FML statements. You must first create a logical table in the visual interface. For more information, see the following topics:

-   [Create a logical model: dimension table](/help/en/dataworks/user-guide/create-a-dimension-table#task-2090825)
    
-   [Create a logical model: fact table](/help/en/dataworks/user-guide/create-a-fact-table#task-2090826)
    
-   [Create a logical model: aggregate table](/help/en/dataworks/user-guide/create-an-aggregate-table#task-2115818)
    
-   [Create a logical model: DWS table](/help/en/dataworks/user-guide/create-an-application-table)
    

## Limitations

-   You cannot create data tables or modify table names using FML. You can only edit existing data tables, such as by modifying Columns, configuring relationships, or setting up partitions.
    
-   You can only materialize data tables designed with FML to MaxCompute, Hologres, and Hive engines.
    
-   FML uses SQL keywords as reserved words. If your table or Column names are keywords, you must enclose them in backticks (` `` `) to avoid errors.
    

## Access the FML editor

1.  On the **Dimensional Modeling** page, double-click the name of the target table in the directory tree.
    
2.  On the **Field Management** page, click **Script Mode**.
    
    In the FML editor on the **Script Mode** tab, you can view the FML statement used to create the current table. You can also configure or modify the table's Columns. For more information, see [Configure a target data table](#section-u9u-flh-tux).![PixPin_2025-12-19_16-18-47](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1082736671/p1036636.png)
    

## Configure a target data table

For demonstration, this topic presents configuration examples using the full `CREATE TABLE` syntax. However, because DataWorks does not allow creating tables with FML, you should only use the clauses that define table content, such as Columns, constraints, and partitions. The following syntax shows how to define a target table.

```
-- Create a new table
      CREATE <table_type> TABLE
      IF NOT EXISTS
      -- Table name
      <table_name> [ALIAS <alias>]
      -- Define Column attributes
      <col_name> [ALIAS <alias>] <datatype> [<category>] [COMMENT <comment>] [WITH (<key>=<value>,....)]
      -- Define a constraint
      PRIMARY KEY (<col_name>),
      -- Dimension constraint
      CONSTRAINT <constraint_name> DIM KEY (<col_name>) REFERENCES <ref_table_name> (<ref_table_col_name>),
      -- Hierarchy constraint
      CONSTRAINT <constraint_name> LEVEL <col_name:(<col_name>)>, -- Column group constraint
      CONSTRAINT <constraint_name> COLUMN_GROUP(<col_name>,...), 
      -- Define comments
      COMMENT 'comment'
      -- Define partitions
      PARTITION BY (col DATATYPE COMMENT 'comment' WITH ('key'='value',...), ...)
      -- Define properties
      WITH ('key'='value', 'key1'='value1', ...)
      ;
      
tableType
    : dimDetailType? DIM
    | factDetailType? FACT
    | CODE
    | DWS
    ;
    
 dimDetailType
    : NORMAL
    | LEVEL
    | ENUM
    ;
    
 factDetailType
    : TRANSACTION
    | AGGREGATE
    | PERIODIC_SNAPSHOT
    | ACCUMULATING_SNAPSHOT
    | CONSOLIDATED
   ;
    
 
comment 
    : COMMENT 'comment'
    ;
  
```

**Parameter**

**Description**

**tableName**

The data table name. A valid name contains only letters, digits, and underscores (\_) and is no more than 128 characters long.

**if not exists**

If a table with the same name already exists in the target engine, the `CREATE TABLE` operation reports an error without the `if not exists` clause. With the `if not exists` clause, the operation succeeds regardless of whether a table with the same name already exists.

**alias**

An optional alias for a data table or Column, often used as a display name.

**tableType**

The table type. FML supports the following table types:

-   Dimension table
    
    -   Common dimension table (NORMAL): The default type when you create a dimension table.
        
    -   Hierarchy dimension table (LEVEL): Used to store data with hierarchical relationships, such as provinces, cities, and districts.
        
    -   Enumeration dimension table (ENUM): Used to store frequently used enumerated values, such as gender.
        
-   Fact table
    
    -   Transaction fact table (TRANSACTION): The default type when you create a fact table. It records facts at the transaction level and stores the most atomic data.
        
    -   Periodic snapshot fact table (PERIODIC\_SNAPSHOT): Stores fact records at regular, predictable intervals. It aggregates metrics over a period, such as year-to-date. Data in this type of table is typically updated incrementally.
        
    -   Accumulating snapshot fact table (ACCUMULATING\_SNAPSHOT): Stores snapshots of transaction data and is used to track the progress of events over an unpredictable lifecycle. For example, an order snapshot table can contain timestamps for payment, shipping, and delivery.
        
-   DWS table: A logical aggregate table used to combine specific metrics. The definition syntax is similar to that of dimension and fact tables.
    
-   Lookup table: Also known as a standard code table, it contains codes for industry-specific attributes. For example, in the utility industry, you might create standard codes for contract existence or power supply contract types.
    

**comment**

The table comment. The recommended maximum length is 1,024 characters.

**columnDefinition**

Defines a data table Column using the following parameters:

-   col\_name: The Column name. A valid name contains only letters, digits, and underscores (\_). Enclose the name in backticks (` `` `) if it is an FML keyword.
    
-   alias: An optional alias for the Column, often used as a display name.
    
-   dataType: The data type of the Column. Supported data types include BIGINT, STRING, VARCHAR, CHAR, DECIMAL, and DATETIME.
    
-   category: The Column category. In dimensional modeling, a Column can be categorized as an `ATTRIBUTE`, a `MEASUREMENT`, or a `CORRELATION`.
    

**Note**

Because FML separates design from materialization, you can define a table without specifying any Columns.

**constraint**

Defines table structure constraints. The following types are supported:

-   Primary key constraint (PrimaryConstraint): Syntax: `PRIMARY KEY(col1, col2)`. The `col1` and `col2` Columns must be defined in the table.
    
-   Dimension constraint (DimConstraint): Syntax: `DIM KEY(col1, col2) REFERENCES table_name(ref1, ref2)`.
    
-   Hierarchy constraint (LevelConstraint): Effective only in a hierarchy dimension table. It defines the different levels within the hierarchy.
    

**Partitioned BY**

Defines table partitions.

**WITH**

When you create a table, you can specify custom information in the `key=value` format. The `key` and `value` must be enclosed in single quotes to prevent conflicts with FML keywords. The extended properties in the `WITH` clause are parsed and processed by the engine that materializes the FML statement.
