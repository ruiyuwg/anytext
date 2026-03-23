Hologres progressively supports `INSERT OVERWRITE`: first via `hg_insert_overwrite` (V2.0), then natively (V3.1) for improved usability and efficiency. This topic describes how to use `INSERT OVERWRITE`.

## Feature comparison

The behavior of INSERT OVERWRITE depends on the table type and the method used. The following table provides a detailed comparison. Use these guidelines to select the appropriate method:

-   Non-partitioned tables: Both methods are supported.
    
-   Physical partitioned tables: The `hg_insert_overwrite` stored procedure is recommended.
    
-   Logical partitioned tables: The `hg_insert_overwrite` stored procedure is recommended, which internally calls the native INSERT OVERWRITE syntax.
    
-   Migrate physical partitioned tables to logical partitioned tables: See [Adapt data import nodes](/help/en/hologres/developer-reference/migrating-a-physical-partition-table-to-a-logical-partition-table#3a7eb57c97v6j).
    

**Table type**

**Comparison item**

**hg\_insert\_overwrite**

**Native** `**INSERT OVERWRITE**`

Non-partitioned table

Supported

Supported

Physical partitioned table

Import to a parent table

-   Import with or without child tables
    
-   Import to specific child tables
    

Not supported

Import to a child table

Supported (treated as a non-partitioned table)

Supported (treated as a non-partitioned table)

Logical partitioned table

Import to parent table (without specifying a child table)

Not supported

Not supported

Import to a parent table (with a specified child table)

Supported

Supported

**Note**

To use the `hg_insert_overwrite` stored procedure or the native `INSERT OVERWRITE` syntax, ensure your instance meets the version requirements. For details, see [Upgrade instance version](/help/en/hologres/user-guide/instance-upgrades). If you cannot upgrade your instance at this time, [use a temporary table to perform an INSERT OVERWRITE operation](#section-vye-qb3-4ow).

## Use native INSERT OVERWRITE

### **Features**

-   Native `INSERT OVERWRITE` syntax is supported starting from Hologres V3.1.
    
-   The native `INSERT OVERWRITE` syntax behaves differently for various table types:
    
    -   Non-partitioned tables.
        
    -   Child tables of physical partitioned tables (treated as non-partitioned tables).
        
    -   Logical partitioned tables, with a specified partition.
        

### **Important notes**

-   The native `INSERT OVERWRITE` syntax enables mixed DML transactions by default: `SET hg_experimental_enable_transaction = on;`. For information about transaction capabilities in Hologres, see [SQL transactions](/help/en/hologres/developer-reference/sql-transaction-capabilities).
    
    -   Mixing INSERT OVERWRITE and DDL statements within the same transaction is not supported.
        
    -   Within the same transaction, all DML statements are committed only when the transaction is completed, i.e., when a COMMIT is executed.
        
-   The native INSERT OVERWRITE syntax does not support binlog generation. You must disable binlog at the session level: `SET hg_experimental_generate_binlog = off;`.
    
-   By default, read atomicity is guaranteed during a native INSERT OVERWRITE execution. However, this incurs higher metadata overhead and can increase SQL latency. The DQL latency of a secondary virtual warehouse is more affected than that of a primary virtual warehouse. If an `INSERT OVERWRITE` operation on a target table is time-consuming, read operations on that table may fail with an error such as `Data version is inconsistent` or `Insert overwrite version not match`.
    
    -   If you do not require atomicity for data reads, disable the GUC for DQL tasks: `set hg_experimental_enable_check_data_version=off`. A DQL task might then scan a mix of data files from before and after the `INSERT OVERWRITE` operation.
        
    -   If you require read atomicity but need to reduce DQL latency, run the DQL tasks on the primary virtual warehouse.
        

### **Syntax**

```
INSERT OVERWRITE <target_table_name> 
  [ PARTITION (<partition_key> = '<partition_value>') [, ...]]
  VALUES ( <expression>  [, ...] ) [, ...] | <query>;
```

### **Parameters**

**Parameter**

**Required**

**Description**

`target_table_name`

Yes

The name of the target table.

`partition_key` and `partition_value`

No

The partition key and partition value. They are supported and required for logical partitioned tables.

`expression`

No

An expression or value to assign to the corresponding column in the target table.

`query`

No

A standard `SELECT` statement. The query result will overwrite the data in the `target_table_name` table.

**Note**

If `target_table_name` is a logical partitioned table and `partition_value` specifies a partition, only data belonging to that partition will be imported. Data outside the specified partition is ignored, and the partition will be cleared if no matching data is found.

### **Examples**

## **Import to a non-partitioned table**

```
-- Create table A as the target table.
CREATE TABLE public.tablea (
    cid INTEGER NOT NULL,
    cname TEXT,
    code INTEGER
    ,PRIMARY KEY (cid)
);

-- Create table B as the source.
CREATE TABLE public.tableb (
    cid INTEGER NOT NULL,
    cname TEXT,
    code INTEGER
    ,PRIMARY KEY (cid)
);

INSERT INTO public.tableb VALUES(1,'aaa',10001),(2,'bbb','10002');

-- Use the native INSERT OVERWRITE syntax to insert data from table B into table A.
INSERT OVERWRITE public.tablea SELECT * FROM public.tableb;
```

## Import to a logical partitioned table

```
-- Create table A as the target table.
CREATE TABLE public.tablea(
  a TEXT , 
  b INT, 
  c TIMESTAMP, 
  d TEXT,
  ds TEXT,
  PRIMARY KEY(ds,b)
  )
  LOGICAL PARTITION BY LIST(ds);

-- Create physical partitioned table B for the input.
BEGIN;
CREATE TABLE public.tableb(
  a TEXT, 
  b INT, 
  c TIMESTAMP, 
  d TEXT,
  ds TEXT,
  PRIMARY KEY(ds,b)
  )
  PARTITION BY LIST(ds);
CREATE TABLE public.holo_child_3a PARTITION OF public.tableb FOR VALUES IN('20201215');
CREATE TABLE public.holo_child_3b PARTITION OF public.tableb FOR VALUES IN('20201216');
CREATE TABLE public.holo_child_3c PARTITION OF public.tableb FOR VALUES IN('20201217');
COMMIT;

INSERT INTO public.holo_child_3a VALUES('a',1,'2034-10-19','a','20201215');
INSERT INTO public.holo_child_3b VALUES('b',2,'2034-10-20','b','20201216');
INSERT INTO public.holo_child_3c VALUES('c',3,'2034-10-21','c','20201217');

-- Use the native INSERT OVERWRITE syntax to insert data from table B into table A.
INSERT OVERWRITE public.tablea PARTITION (ds = '20201215') SELECT * FROM public.tableb WHERE ds='20201215';
```

## **Implement INSERT OVERWRITE via** `hg_insert_overwrite`

### **Introduction**

-   Starting from Hologres V3.1, `hg_insert_overwrite` supports logical partitioned tables, but you must explicitly specify the partition.
    
-   Hologres V3.0 enhances `hg_insert_overwrite` to support direct data import into parent tables.
    
-   Import to tables that have dependent views: For Hologres V2.0.15+, enable this feature by running: `set hg_experimental_hg_insert_overwrite_enable_view=on;`. Importing data into tables with a Materialized View dependency is not supported.
    
    For Hologres V3.0+, no explicit configuration is required; but importing to tables with Materialized View dependencies is still not supported.
    
-   If an import via `hg_insert_overwrite` fails, temporary tables must be manually cleaned up. Starting from Hologres V3.0, you can clean them up using the following SQL statement.
    
    ```
    -- Delete the temporary tables that were created by the system before the time specified by before_time.
    CALL hg_clean_insert_overwrite_tmp_tables(before_time::timestamptz); 
    ```
    

### **Important notes**

-   Importing a subset of fields requires them to be in the same order as in the source table.
    
-   `hg_insert_overwrite` requires table owner permission for temporary table creation, thus only superusers or table owners can execute it.
    
-   The target table's partition key supports INT, TEXT, or VARCHAR data types.
    
-   Since Hologres V3.0, `hg_insert_overwrite` cannot be used inside transactions, leading to an error.
    
    **Note**
    
    In earlier versions, using `hg_insert_overwrite` in a transaction could cause issues such as deadlocks or hangs in specific scenarios. Later versions enforce stricter rules to prevent this.
    
-   In Hologres V3.0 and later, the number and data types of columns specified in the `sql` of `hg_insert_overwrite` must exactly match the columns of `target_table`. Otherwise, an error such as `"error: table "hg_alias" has x columns available but x columns specified" or "error: column xx is of type xxx but expression is of type xxx"` is reported.
    

### **Behavior changes**

If only `target_table` (a parent table) and `sql` were provided:

Before V3.0, INSERT OVERWRITE would fail. Starting from V3.0, possible outcomes include:

-   If all child tables in the `sql` results exist, the operation succeeds.
    
-   If any child table does not exist, an error will occur.
    

### **Syntax**

```
-- Before V3.0
CALL hg_insert_overwrite('<target_table>' regclass, ['<partition_value>' TEXT], '<sql>' TEXT);

-- For Hologres V3.0 and later
CALL hg_insert_overwrite('<target_table>' regclass, ['<partition_value>' ARRAY], '<sql>' TEXT, ['<auto_create_partition>' BOOLEAN]);
```

### **Parameters**

**Note**

Since Hologres V3.0, `partition_value` for `hg_insert_overwrite` is now an `ARRAY` type, enabling writes to physical partitioned tables and specifying multiple child tables. Using `TEXT` for `partition_value` is still supported but limited to a single child table.

**Parameter**

**Description**

`target_table`

An existing Hologres internal table.

`partition_value`

The target partition.

-   Before V3.0: If `target_table` is a physical partitioned table, specifying a `partition_value` (TEXT type) is required. If the partition does not exist, it will be created automatically.
    
-   From V3.0 onwards: If `target_table` is a physical partitioned table, specifying `partition_value` (ARRAY or TEXT type) is optional. See the behavior table for details.
    
-   From V3.1 onwards: If `target_table` is a logical partitioned table, specifying a `partition_value` (ARRAY or TEXT type) is required.
    

`sql`

A standard `SELECT` statement.

It can be used to query MaxCompute or Hologres tables. If the SQL statement contains single quotation marks (''), use `$$sql$$` to automatically escape the single quotes.

-   Before V3.0: Ensure the results exactly equal to `partition_value`.
    
-   From V3.0 onwards: The above limitation is removed. See the behavior table for details.
    

`auto_create_partition`

Controls whether to automatically create non-existent partitions. Supported in V3.0+ and only for physical partitioned tables.

-   `TRUE`: Creates missing partitions automatically that are found in `sql` results.
    
-   `FALSE` (default): Does not create missing child tables found in SQL results.
    

Behavior varies based on `auto_create_partition` and `partition_value` settings. A partition is considered "relevant" if it appears in the SQL results.

-   `hg_insert_overwrite` behavior for physical partitioned tables
    
    **Parameter value**
    
    **auto\_create\_partition**
    
    **TRUE**
    
    **FALSE**
    
    `partition_value`
    
    Not specified
    
    -   Relevant partitions: Existing partitions are overwritten. Non-existent partitions are automatically created.
        
    -   Irrelevant partitions: Ignored.
        
    
    -   If all relevant partitions already exist:
        
        -   Relevant partitions are overwritten.
            
        -   Irrelevant partitions are ignored.
            
    -   If any relevant partition does not exist, an error is thrown; no overwrite operations occur on other partitions.
        
    
    Specified
    
    For specified partitions:
    
    -   Non-existent relevant partition is created automatically.
        
    -   Existing relevant partitions are overwritten.
        
    -   Irrelevant and existing partition data is cleared.
        
    
    For unspecified partitions:
    
    -   No effect.
        
    
    -   For specified partitions:
        
        -   If any relevant partition does not exist, an error is thrown; no overwrite operations occur on other partitions.
            
        -   Existing relevant partitions are overwritten.
            
        -   Existing and irrelevant partitions are cleared.
            
    -   For unspecified partitions:
        
        -   No effect.
            
    
-   `hg_insert_overwrite` behavior for logical partitioned table
    
    Logical partitioned tables do not support automatic partitioning, so the `auto_create_partition` parameter is ignored.
    
    **Parameter value**
    
    **Description**
    
    `partition_value`
    
    Not specified
    
    Not supported.
    
    Specified
    
    For specified partitions:
    
    -   Relevant partition data is overwritten.
        
    -   Irrelevant partitions are cleared.
        
    
    For unspecified partitions:
    
    -   None are affected.
        
    

### **Examples**

#### **Example 1: Import data to a non-partitioned table**

```
-- Create table A as the target table.
BEGIN;

CREATE TABLE public.tablea (
    cid INTEGER NOT NULL,
    cname TEXT,
    code INTEGER
    ,PRIMARY KEY (cid)
);

CALL set_table_property('public.tablea', 'orientation', 'column');
CALL set_table_property('public.tablea', 'storage_format', 'orc');
CALL set_table_property('public.tablea', 'bitmap_columns', 'cname');
CALL set_table_property('public.tablea', 'dictionary_encoding_columns', 'cname:auto');
CALL set_table_property('public.tablea', 'distribution_key', 'cid');
CALL set_table_property('public.tablea', 'time_to_live_in_seconds', '3153600000');
COMMIT;

-- Create table B for data input.
CREATE TABLE public.tableb (
    cid INTEGER NOT NULL,
    cname TEXT,
    code INTEGER
    ,PRIMARY KEY (cid)
);

INSERT INTO public.tableb VALUES(1,'aaa',10001),(2,'bbb','10002');

-- Insert data from table B into table A.
CALL hg_insert_overwrite('public.tablea' , 'SELECT * FROM public.tableb');
```

#### **Example 2: Import data to a partitioned table (physical and logical)**

```
-- Create the target table.
BEGIN;
CREATE TABLE public.tableA(
  a TEXT, 
  b INT, 
  c TIMESTAMP, 
  d TEXT,
  ds TEXT,
  PRIMARY KEY(ds,b)
  )
  PARTITION BY LIST(ds);
CALL set_table_property('public.tableA', 'orientation', 'column');
CREATE TABLE public.holo_child_1 PARTITION OF public.tableA FOR VALUES IN('20201215');
CREATE TABLE public.holo_child_2 PARTITION OF public.tableA FOR VALUES IN('20201216');
CREATE TABLE public.holo_child_3 PARTITION OF public.tableA FOR VALUES IN('20201217');
COMMIT;

-- Or, a logical partitioned table.
CREATE TABLE public.tableA_lp(
  a TEXT, 
  b INT, 
  c TIMESTAMP, 
  d TEXT,
  ds TEXT,
  PRIMARY KEY(ds,b)
  )
  LOGICAL PARTITION BY LIST(ds);

-- Create table B for input.
BEGIN;
CREATE TABLE public.tableB(
  a TEXT, 
  b INT, 
  c TIMESTAMP, 
  d TEXT,
  ds TEXT,
  PRIMARY KEY(ds,b)
  )
  PARTITION BY LIST(ds);
CALL set_table_property('public.tableB', 'orientation', 'column');
CREATE TABLE public.holo_child_3a PARTITION OF public.tableB FOR VALUES IN('20201215');
CREATE TABLE public.holo_child_3b PARTITION OF public.tableB FOR VALUES IN('20201216');
CREATE TABLE public.holo_child_3c PARTITION OF public.tableB FOR VALUES IN('20201217');
COMMIT;

INSERT INTO public.holo_child_3a VALUES('a',1,'2034-10-19','a','20201215');
INSERT INTO public.holo_child_3b VALUES('b',2,'2034-10-20','b','20201216');
INSERT INTO public.holo_child_3c VALUES('c',3,'2034-10-21','c','20201217');

-- Physical partitioned table
CALL hg_insert_overwrite('public.tableA' , '{20201215,20201216,20201217}'::text[],$$SELECT * FROM public.tableB$$);
-- Logical partitioned table
CALL hg_insert_overwrite('public.tableA_lp' , '{20201215,20201216,20201217}'::text[],$$SELECT * FROM public.tableB$$);
```

#### **Example 3: Import data from a MaxCompute non-partitioned table to a Hologres non-partitioned table**

```
-- Create a non-partitioned table in MaxCompute. This example uses data from the customer table in the public_data project, which is a public dataset in MaxCompute. The following code provides the DDL statement for the table.
CREATE TABLE IF NOT EXISTS public_data.customer(
  c_customer_sk BIGINT,
  c_customer_id STRING,
  c_current_cdemo_sk BIGINT,
  c_current_hdemo_sk BIGINT,
  c_current_addr_sk BIGINT,
  c_first_shipto_date_sk BIGINT,
  c_first_sales_date_sk BIGINT,
  c_salutation STRING,
  c_first_name STRING,
  c_last_name STRING,
  c_preferred_cust_flag STRING,
  c_birth_day BIGINT,
  c_birth_month BIGINT,
  c_birth_year BIGINT,
  c_birth_country STRING,
  c_login STRING,
  c_email_address STRING,
  c_last_review_date STRING,
  useless STRING);

-- Create a foreign table in Hologres to map to the source data table in MaxCompute.
CREATE FOREIGN TABLE customer (
    "c_customer_sk" INT8,
    "c_customer_id" TEXT,
    "c_current_cdemo_sk" INT8,
    "c_current_hdemo_sk" INT8,
    "c_current_addr_sk" INT8,
    "c_first_shipto_date_sk" INT8,
    "c_first_sales_date_sk" INT8,
    "c_salutation" TEXT,
    "c_first_name" TEXT,
    "c_last_name" TEXT,
    "c_preferred_cust_flag" TEXT,
    "c_birth_day" INT8,
    "c_birth_month" INT8,
    "c_birth_year" INT8,
    "c_birth_country" TEXT,
    "c_login" TEXT,
    "c_email_address" TEXT,
    "c_last_review_date" TEXT,
    "useless" TEXT
)
SERVER odps_server
OPTIONS (project_name 'public_data', table_name 'customer');

-- Create an internal table in Hologres, such as a column-oriented table, to receive data from the MaxCompute source table.
BEGIN;
CREATE TABLE public.holo_customer (
 "c_customer_sk" INT8,
 "c_customer_id" TEXT,
 "c_current_cdemo_sk" INT8,
 "c_current_hdemo_sk" INT8,
 "c_current_addr_sk" INT8,
 "c_first_shipto_date_sk" INT8,
 "c_first_sales_date_sk" INT8,
 "c_salutation" TEXT,
 "c_first_name" TEXT,
 "c_last_name" TEXT,
 "c_preferred_cust_flag" TEXT,
 "c_birth_day" INT8,
 "c_birth_month" INT8,
 "c_birth_year" INT8,
 "c_birth_country" TEXT,
 "c_login" TEXT,
 "c_email_address" TEXT,
 "c_last_review_date" TEXT,
 "useless" TEXT
);
COMMIT;

-- Import data into Hologres.
IMPORT FOREIGN SCHEMA <project_name> LIMIT TO
(customer) FROM server odps_server INTO PUBLIC options(if_table_exist 'update');-- Update the foreign table.
SELECT pg_sleep(30);-- Wait for some time before you import data to Hologres. This prevents synchronization failures that are caused by data inconsistency due to slow updates of the metadata cache in Hologres.

CALL  hg_insert_overwrite('holo_customer', 'SELECT * FROM customer where c_birth_year > 1980');

-- Query data from the MaxCompute source table in Hologres.
SELECT * FROM holo_customer limit 10;
```

#### **Example 4: Import data from a MaxCompute partitioned table into a Hologres physical partition**

```
-- Create a partitioned table in MaxCompute.
DROP TABLE IF EXISTS odps_sale_detail;

CREATE TABLE IF NOT EXISTS odps_sale_detail 
(
    shop_name STRING
    ,customer_id STRING
    ,total_price DOUBLE
)
PARTITIONED BY 
(
    sale_date STRING
)
;

-- Add the 20210815 partition to the source table.
ALTER TABLE odps_sale_detail ADD IF NOT EXISTS PARTITION(sale_date='20210815')
;

-- Write data to the partition.
INSERT OVERWRITE TABLE odps_sale_detail PARTITION(sale_date='20210815') VALUES 
('s1','c1',100.1),
('s2','c2',100.2),
('s3','c3',100.3)
;

-- Create a foreign table in Hologres to map to the source data table in MaxCompute.
DROP FOREIGN TABLE IF EXISTS odps_sale_detail;

-- Create a foreign table.
IMPORT FOREIGN SCHEMA <maxcompute_project> LIMIT TO
(
    odps_sale_detail
) 
FROM SERVER odps_server INTO public 
OPTIONS(if_table_exist 'error',if_unsupported_type 'error');

-- Create an internal table in Hologres to receive data from the MaxCompute source table.
DROP TABLE IF EXISTS holo_sale_detail;

-- Create a partitioned table (internal table) in Hologres.
BEGIN ;
CREATE TABLE IF NOT EXISTS holo_sale_detail
(
    shop_name TEXT
    ,customer_id TEXT 
    ,total_price FLOAT8
    ,sale_date TEXT
)
PARTITION BY LIST(sale_date);
COMMIT;

-- Import data into Hologres.
CALL hg_insert_overwrite('holo_sale_detail', '20210815', $$SELECT * FROM public.odps_sale_detail WHERE sale_date='20210815'$$);

-- Query data from the MaxCompute source table in Hologres.
SELECT * FROM holo_sale_detail;
```

#### **Example 5: Import data from a MaxCompute partitioned table to a Hologres physical partitioned table**

```
-- Create a partitioned table in MaxCompute.
DROP TABLE IF EXISTS odps_sale_detail;

CREATE TABLE IF NOT EXISTS odps_sale_detail 
(
    shop_name STRING
    ,customer_id STRING
    ,total_price DOUBLE
)
PARTITIONED BY 
(
    sale_date STRING
)
;

-- Add the 20210815 and 20210816 partitions to the source table.
ALTER TABLE odps_sale_detail ADD IF NOT EXISTS PARTITION(sale_date='20210815')
;
ALTER TABLE odps_sale_detail ADD IF NOT EXISTS PARTITION(sale_date='20210816')
;

-- Write data to the partitions.
INSERT OVERWRITE TABLE odps_sale_detail PARTITION(sale_date='20210815') VALUES 
('s1','c1',100.1),
('s2','c2',100.2),
('s3','c3',100.3)
;
INSERT OVERWRITE TABLE odps_sale_detail PARTITION(sale_date='20210816') VALUES 
('s1','c1',100.1),
('s2','c2',100.2),
('s3','c3',100.3)
;

-- Create a foreign table in Hologres to map to the source data table in MaxCompute.
DROP FOREIGN TABLE IF EXISTS odps_sale_detail;

-- Create a foreign table.
IMPORT FOREIGN SCHEMA <maxcompute_project> LIMIT TO
(
    odps_sale_detail
) 
FROM SERVER odps_server INTO public 
OPTIONS(if_table_exist 'error',if_unsupported_type 'error');

-- Create an internal table in Hologres to receive data from the MaxCompute source table.
DROP TABLE IF EXISTS holo_sale_detail;

-- Create a partitioned table (internal table) in Hologres.
BEGIN ;
CREATE TABLE IF NOT EXISTS holo_sale_detail
(
    shop_name TEXT
    ,customer_id TEXT 
    ,total_price FLOAT8
    ,sale_date TEXT
)
PARTITION BY LIST(sale_date);
COMMIT;

-- Import data into Hologres. Do not specify child partitions and set auto_create_partition to TRUE. The system automatically creates two child partitions and imports data.
CALL hg_insert_overwrite ('holo_sale_detail', $$SELECT * FROM public.odps_sale_detail$$, TRUE);

-- Query data in Hologres.
SELECT * FROM holo_sale_detail;
```

**Note**

`maxcompute_project`: The name of the project where the MaxCompute partitioned table is located.

## **Implement INSERT OVERWRITE via a temporary table**

### **Syntax**

You can use the following SQL statements to implement the INSERT OVERWRITE functionality.

```
BEGIN ;

-- Clear potential temporary tables.
DROP TABLE IF EXISTS <table_new>;

-- Create a temporary table.
SET hg_experimental_enable_create_table_like_properties=on;
CALL HG_CREATE_TABLE_LIKE ('<table_new>', 'select * from <table>');

COMMIT ;

-- Insert data into the temporary table.
INSERT INTO <table_new> [( <column> [, ...] )]
VALUES ( {<expression>}  [, ...] )
[, ...] | <query>}

ANALYZE <table_new>;

BEGIN ;

-- Delete the old table.
DROP TABLE IF EXISTS  <table>;

-- Rename the temporary table.
ALTER TABLE <table_new> RENAME TO <table>;

COMMIT ;
```

### **Parameters**

**Parameter**

**Description**

`table_new`

The name of the temporary table.

Supports the `Schema.Table` format.

`table`

The name of the existing table.

Supports the `Schema.Table` format

Temporary table DDL

There are two ways to create a temporary table:

-   Copying from an existing table:
    
    ```
    SET hg_experimental_enable_create_table_like_properties=on;
    CALL HG_CREATE_TABLE_LIKE ('<table_new>', 'select * from <table>');
    ```
    
-   Create from scratch:
    
    ```
    CREATE TABLE IF NOT EXISTS <table_new> ([
      {
       column_name column_type [column_constraints, [...]]
       | table_constraints
       [, ...]
      }
    ]);
    
    CALL set_table_property('<table_new>', property, value);
    ```
    

### **Examples of interacting with MaxCompute**

## **Import to Hologres (non-partitioned)**

Overwrite Hologres data with batch results from MaxCompute and use the Hologres table for online serving. This example shows how to completely overwrite Hologres table `region` using batch processing results from MaxCompute's `odps_region_10g`.

```
BEGIN ;

-- Clear the existing temporary table.
DROP TABLE IF EXISTS public.region_new;

-- Create a temporary table.
SET hg_experimental_enable_create_table_like_properties=on;
CALL HG_CREATE_TABLE_LIKE ('public.region_new', 'select * from public.region');
COMMIT ;

-- Insert data into the temporary table.
INSERT INTO public.region_new
SELECT *
FROM public.odps_region_10g;

ANALYZE public.region_new;

BEGIN ;

-- Drop the old table.
DROP TABLE IF EXISTS public.region;

-- Rename the temporary table.
ALTER TABLE IF EXISTS public.region_new RENAME TO region;

COMMIT ;
```

## **Import to Hologres (partitioned)**

Daily updates to a MaxCompute partitioned table can be used to overwrite a Hologres partitioned table. This ensures real-time data in Hologres is corrected with batch-processed MaxCompute data. The example below imports data from MaxCompute's `odps_lineitem_10g` (partitioned daily by `ds`) to Hologres' `lineitem` table, completely overwriting its content.

```
BEGIN ;

-- Clear potential temporary tables.
DROP TABLE IF EXISTS public.lineitem_new_20210101;

-- Create a temporary table.
SET hg_experimental_enable_create_table_like_properties=on;
CALL HG_CREATE_TABLE_LIKE ('public.lineitem_new_20210101', 'select * from public.lineitem');
COMMIT ;

-- Insert data into the temporary table.
INSERT INTO public.lineitem_new_20210101
SELECT *
FROM public.odps_lineitem_10g
WHERE DS = '20210101'

ANALYZE public.lineitem_new_20210101;

BEGIN ;

-- Delete the old partition.
DROP TABLE IF EXISTS public.lineitem_20210101;

-- Rename the temporary table.
ALTER TABLE public.lineitem_new_20210101 RENAME TO lineitem_20210101;

-- Attach the temporary table to the specified partitioned table.
ALTER TABLE public.lineitem ATTACH PARTITION lineitem_20210101 FOR VALUES IN ('20210101');

COMMIT ;
```

## **Import to MaxCompute (non-partitioned)**

To export data from Hologres (`holotable`) to MaxCompute's `mc_holotable`, write to a temporary table first, then rename it. This completely overwrites `mc_holotable`.

```
-- Create a temporary table for the sink table in MaxCompute.
CREATE  TABLE if not exists mc_holotable_temp(
    age INT,
    job STRING,
    name STRING
);

-- Create a mapping for the temporary table in Hologres.
CREATE FOREIGN TABLE "public"."mapping_holotable_temp" (
 "age" INT,
 "job" TEXT,
 "name" TEXT
)
SERVER odps_server
OPTIONS (project_name 'DLF_test',table_name 'mc_holotable_temp');
-- Update the source table in Hologres.
UPDATE holotable SET "job" = 'president' WHERE "name" = 'Lily';
-- Write the updated data to the mapping of the temporary table.
INSERT INTO mapping_holotable_temp SELECT * FROM holotable;

-- Delete the old sink table in MaxCompute.
DROP TABLE IF EXISTS mc_holotable;
-- Rename the temporary table to the sink table.
ALTER TABLE mc_holotable_temp RENAME TO mc_holotable;
```

Data import supports both partial and full import:

-   Exporting some fields:
    
    ```
    INSERT INTO mapping_holotable_temp
    SELECT x,x,x FROM holotable;  --You can replace x,x,x with the names of the fields that you want to export.
    ```
    
-   Exporting all fields:
    
    ```
    INSERT INTO mapping_holotable_temp
    SELECT * FROM holotable; 
    ```
