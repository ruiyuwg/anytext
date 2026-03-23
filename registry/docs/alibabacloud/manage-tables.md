AnalyticDB for PostgreSQL tables are similar to tables in relational databases, except that table rows are distributed across compute nodes. The distribution of rows in a table is determined by the distribution policy of the table.

## Create a standard table

The CREATE TABLE statement can be used to create a table. When you create a table, you can define the following items:

-   Columns of the table and their [Data types](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/data-types#concept-263344)
    
-   [Define constraints](#section-vrw-rcq-rhb)
    
-   [Define table distribution](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/define-table-distribution#concept-320755)
    
-   [Storage model of the table](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/define-storage-models-for-tables#concept-263361)
    
-   [Partitioning strategy of the table](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/define-table-partitioning#concept-263404)
    

Execute the `CREATE TABLE` statement to create a table. The following syntax is used:

```
CREATE TABLE table_name ( 
[ { column_name data_type [ DEFAULT default_expr ]   -- Define a column for the table.
   [column_constraint [ ... ]                        -- Define a constraint for the column.
] 
   | table_constraint                                -- Define a constraint for the table.                            
   ])
   [ WITH ( storage_parameter=value [, ... ] )       -- Define the storage model for the table.
   [ DISTRIBUTED BY (column, [ ... ] ) | DISTRIBUTED RANDOMLY ]  -- Define a distribution key for the table.          
   [ partition clause]                               -- Define a partitioning strategy for the table.
                
```

**Example:**

In this example, **trans\_id** is used as the distribution key, and **date**\-based range partitioning is specified.

```
CREATE TABLE sales (
  trans_id int,
  date date, 
  amount decimal(9,2), 
  region text)
  DISTRIBUTED BY (trans_id)  
  PARTITION BY RANGE(date)    
  (start (date '2018-01-01') inclusive
   end (date '2019-01-01') exclusive every (interval '1 month'),
   default partition outlying_dates);
```

## Create a temporary table

Temporary tables are used to store temporary and intermediate data. They are automatically deleted at the end of a session or deleted at the end of the current transaction based on user-defined configurations. The following statement can be used to create a temporary table:

```
CREATE TEMPORARY TABLE table_name(...)
    [ON COMMIT {PRESERVE ROWS | DELETE ROWS | DROP}]
```

**Note**

You can use the ON COMMIT clause to determine the operation to be performed on a table at the end of the current transaction.

-   PRESERVE ROWS: Data is retained at the end of the current transaction. This is the default operation.
    
-   DELETE ROWS: All rows are deleted at the end of the current transaction.
    
-   DROP: Temporary tables are deleted at the end of the current transaction.
    

**Example:**

Create a temporary table that is to be deleted at the end of the current transaction.

```
CREATE TEMPORARY TABLE temp_foo (a int, b text) ON COMMIT DROP;
```

## Define constraints

You can define table or column constraints to restrict data in your tables. When you define constraints, take note of the following items:

-   CHECK constraints can reference only columns in the table on which the constraints are defined.
    
-   UNIQUE and PRIMARY KEY constraints must contain the distribution key. Such constraints are not allowed on append-optimized (AO) or column-oriented tables.
    
-   FOREIGN KEY constraints are allowed but not enforced.
    
-   Constraints that you define on one partition of a table are also used for the other partitions of the table. Constraint definitions cannot be limited to individual partitions.
    

The following syntax is used:

```
UNIQUE ( column_name [, ... ] )
   | PRIMARY KEY ( column_name [, ... ] ) 
   | CHECK ( expression )
   | FOREIGN KEY ( column_name [, ... ] )
            REFERENCES table_name [ ( column_name [, ... ] ) ]
            [ key_match_type ]
            [ key_action ]
            [ key_checking_mode ]
```

### CHECK constraints

You can use a CHECK constraint to specify a column that satisfies a Boolean expression. Example:

```
CREATE TABLE products
            ( product_no integer,
              name text,
              price numeric CHECK (price > 0) );
```

### NOT NULL constraints

You can use a NOT NULL constraint to specify a column that does not contain NULL values. Example:

```
CREATE TABLE products
       ( product_no integer NOT NULL,
         name text NOT NULL,
         price numeric );
```

### UNIQUE constraints

You can use a UNIQUE constraint to ensure that the data contained in a column or a group of columns in a table is unique among all the rows in the table. The table that contains a UNIQUE constraint must be hash-distributed, and the constraint columns must contain the distribution key. Example:

```
CREATE TABLE products
       ( product_no integer UNIQUE,
         name text,
         price numeric)
      DISTRIBUTED BY (product_no);
```

### PRIMARY KEY constraints

A PRIMARY KEY constraint consists of a UNIQUE constraint and a NOT NULL constraint. The table that contains a PRIMARY KEY constraint must be hash-distributed, and the constraint columns must contain the distribution key. By default, if a table has a primary key, the primary key column or columns are used as the distribution key of the table. Example:

```
CREATE TABLE products
       ( product_no integer PRIMARY KEY,
         name text,
         price numeric)
      DISTRIBUTED BY (product_no);
```
