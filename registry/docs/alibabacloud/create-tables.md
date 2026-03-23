Tables are the basic units in Hologres for storing and organizing data. Set storage modes, table indexes, and properties correctly to enable efficient real-time data processing and large-scale analytics.

## Quick start

### **Preparations**

-   [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance#task-1918224).
    
-   You have [created a database](/help/en/hologres/getting-started/create-a-database).
    
-   You have [connected to the target database in Hologres](/help/en/hologres/user-guide/connect-hologres-tools/). We recommend that you [connect to HoloWeb to execute queries](/help/en/hologres/getting-started/connect-to-holoweb).
    

### **Create a table**

We recommend that you use the `CREATE TABLE WITH` syntax, which is supported in Hologres V2.1 and later. This example shows how to create a **transaction details table** that uses a hierarchical naming convention, contains multiple fields, and includes comprehensive comments.

```
BEGIN;

-- Create a transaction details fact table (a standard table).
-- Explicitly specify the public schema and follow the hierarchical naming convention (dwd_xxx) for the table name.
CREATE TABLE IF NOT EXISTS public.dwd_trade_orders (
    order_id BIGINT NOT NULL,           -- The unique identifier of the order.
    shop_id INT NOT NULL,              -- The shop ID.
    user_id TEXT NOT NULL,             -- The user ID.
    order_amount NUMERIC(12, 2) DEFAULT 0.00,       -- The order amount.
    payment NUMERIC(12, 2) DEFAULT 0.00,         -- The actual amount paid.
    payment_type INT DEFAULT 0,                     -- The payment type (0: Unpaid, 1: Alipay, 2: WeChat Pay, 3: Credit Card).
    is_delivered BOOLEAN DEFAULT false,             -- Indicates whether the order is delivered.
    dt TEXT NOT NULL,                               -- The data timestamp.
    order_time TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP, -- The time when the order was placed.
    PRIMARY KEY (order_id)                          -- Set the primary key to ensure data uniqueness.
)
WITH (
    orientation = 'column',                         -- Set the storage mode to column-oriented. This is suitable for real-time analytics (OLAP) scenarios with large data volumes.
    distribution_key = 'order_id',                  -- Set the distribution key. Data is sharded by order_id.
    clustering_key = 'order_time:asc',              -- Set the clustering key. Data is sorted by time in ascending order within files.
    event_time_column = 'order_time',               -- Set the event time column. This enables fast filtering of time ranges using file-level clipping.
    bitmap_columns = 'shop_id,payment_type,is_delivered', -- Set the bitmap index. This accelerates equality filtering on low-cardinality columns.
    dictionary_encoding_columns = 'user_id:auto'    -- Set dictionary encoding. This accelerates aggregation and filtering on string columns.
);

-- Add metadata comments.
COMMENT ON TABLE public.dwd_trade_orders IS 'Base fact table for transaction order details.';
COMMENT ON COLUMN public.dwd_trade_orders.order_id IS 'The unique identifier of the order.';
COMMENT ON COLUMN public.dwd_trade_orders.shop_id IS 'The unique ID of the shop.';
COMMENT ON COLUMN public.dwd_trade_orders.user_id IS 'The ID of the buyer.';
COMMENT ON COLUMN public.dwd_trade_orders.dt IS 'The data timestamp, in YYYYMMDD format.';
COMMENT ON COLUMN public.dwd_trade_orders.order_time IS 'The precise timestamp when the order was created.';

COMMIT;
```

### Query the table schema

Run the following command to view the Data Definition Language (DDL) statement for the table:

```
SELECT hg_dump_script('public.dwd_trade_orders');
```

### **Insert data**

Hologres is compatible with the standard Data Manipulation Language (DML) syntax. The following statement inserts 10 rows of sample data that simulate a production environment.

```
INSERT INTO public.dwd_trade_orders (order_id, shop_id, user_id, order_amount, payment, payment_type, is_delivered, dt, order_time) VALUES 
(50001, 101, 'U678', 299.00, 280.00, 1, true,  '20231101', '2023-11-01 10:00:01+08'),
(50002, 102, 'U992', 59.00,  59.00,  2, false, '20231101', '2023-11-01 10:05:12+08'),
(50003, 101, 'U441', 150.00, 145.00, 1, true,  '20231101', '2023-11-01 10:10:45+08'),
(50004, 105, 'U219', 888.00, 888.00, 3, true,  '20231101', '2023-11-01 10:20:11+08'),
(50005, 102, 'U883', 35.00,  30.00,  1, false, '20231101', '2023-11-01 10:32:00+08'),
(50006, 110, 'U007', 120.50, 120.50, 2, true,  '20231101', '2023-11-01 10:45:33+08'),
(50007, 101, 'U321', 210.00, 210.00, 1, true,  '20231101', '2023-11-01 11:02:19+08'),
(50008, 108, 'U556', 45.00,  45.00,  2, false, '20231101', '2023-11-01 11:15:04+08'),
(50009, 101, 'U112', 300.00, 290.00, 3, true,  '20231101', '2023-11-01 11:25:55+08'),
(50010, 105, 'U449', 99.90,  99.90,  1, true,  '20231101', '2023-11-01 11:40:22+08');
```

### **Query data**

```
-- Calculate the total transaction amount for each shop and sort the results in descending order by amount.
SELECT 
    shop_id, 
    COUNT(1) AS total_orders, 
    SUM(payment) AS total_payment 
FROM public.dwd_trade_orders 
GROUP BY shop_id 
ORDER BY total_payment DESC;
```

Query result:

```
shop_id	total_orders	total_payment
105	2	987.90
101	4	925.00
110	1	120.50
102	1	59.00
108	1	45.00
```

## Syntax

### **CREATE TABLE syntax**

Hologres provides two syntaxes to set table properties and add comments:

-   **Standard syntax (recommended for Hologres V2.1 and later)**
    
    Use the `WITH` keyword to define properties. This syntax is more compact and offers better performance. The comment statements typically follow the CREATE TABLE statement. For a complete example, see [Create a table](#p-create-table-title).
    
    ```
    BEGIN;
    
    CREATE TABLE [ IF NOT EXISTS] [schema_name.]table_name ([
        { 
        column_name column_type [column_constraints, [...]]
        | table_constraints
        [,...]
        }
    ])
    [WITH (
        property = 'value',
        [, ...]
    )]
    ;
    [COMMENT ON COLUMN <[schema_name.]tablename.column> IS '<value>';]
    [COMMENT ON TABLE <[schema_name.]tablename> IS '<value>';]
    
    COMMIT;
    ```
    
-   **Compatible syntax (supported in all versions)**
    
    Use the `CALL` `set_table_property` statement to set properties and the `COMMENT` statement to add comments. These statements must be in the same transaction block (`BEGIN...COMMIT`) as the `CREATE TABLE` statement.
    
    ```
    BEGIN;
    
    CREATE TABLE [ IF NOT EXISTS] [schema_name.]table_name ([
        { 
        column_name column_type [column_constraints, [...]]
        | table_constraints
        [,...]
        }
    ]);
    
    CALL set_table_property('[schema_name.]<table_name>', '<property>', '<value>');
    COMMENT ON COLUMN <[schema_name.]tablename.column> IS '<value>';
    COMMENT ON TABLE <[schema_name.]tablename> IS '<value>';
    
    COMMIT;
    ```
    

### **Table properties**

**Parameter**

**Description**

**Column-oriented table**

**Row-oriented table**

**Row-column hybrid table**

**Recommended value**

**Modifiable after table creation**

orientation

Sets the storage format of the table. For more information, see [Storage modes: column-oriented, row-oriented, and row-column hybrid](/help/en/hologres/user-guide/storage-models-of-tables#task-2273270).

`column` (default)

For more information, see [Example: Real-time analytics for large datasets (fact table)](#p-scenario-olap-title).

`row`

For more information, see [Example: High-concurrency point queries (dimension table)](#p-scenario-point-title).

`row,column`

For more information, see [Example: Hybrid workload (row-column hybrid storage)](#p-scenario-hsap-title).

column

No. To modify this property, you must create a new table.

distribution\_key

Specifies the distribution key, which sets the data distribution policy for the table. For more information, see [Distribution key](/help/en/hologres/user-guide/distribution-key#task-2274830).

The primary key is used by default. You can modify it as needed.

The primary key is used by default.

The primary key is used by default.

A subset of the primary key. We recommend that you select only one column.

clustering\_key

Specifies the clustering key, which improves query performance. For more information, see [Clustering key](/help/en/hologres/user-guide/clustering-key#task-2274832).

Empty by default.

The primary key is used by default.

Empty by default.

We recommend that you select a maximum of one column. Only ascending order is supported.

event\_time\_column

Specifies the event time column, which improves query performance. For more information, see [Event time column (segment key)](/help/en/hologres/user-guide/segment-key#task-2274831).

The first non-null timestamp field is used by default.

Not supported.

The first non-null timestamp field is used by default.

We recommend that you use a timestamp field.

table\_group

A logical storage concept used to manage the shard count. For more information, see [Manage table groups and shard counts](/help/en/hologres/user-guide/user-guide-of-table-groups-and-shard-counts#concept-2069037).

The default is the `default table group`.

Use the default value.

No. To modify this property, you must create a new table or perform resharding.

bitmap\_columns

Specifies the bitmap index. For more information, see [Bitmap index](/help/en/hologres/user-guide/bitmap-index#task-2274833).

Use as needed.

Not supported.

Use as needed.

We recommend that you use this property for columns in equality comparisons. Do not use more than 10 columns.

Yes. For more information, see [ALTER TABLE](/help/en/hologres/developer-reference/alter-table#concept-2463316).

[dictionary\_encoding\_columns](#8694c66c17jkx)

Specifies dictionary encoding.

Use as needed.

Not supported.

Use as needed.

We recommend using low-cardinality columns, ideally no more than 10.

[time\_to\_live\_in\_seconds](#f7ad782b3dqyp)

Sets the Time to Live (TTL) for table data in seconds. The TTL is not an exact time. We do not recommend using TTL to manage the data lifecycle in production environments. Use partitioned tables instead. For more information, see [CREATE PARTITION TABLE](/help/en/hologres/developer-reference/create-partition-table#section-v07-tzl-3j9).

Use as needed.

Use the default value. You do not need to set this property.

storage\_mode

Specifies the storage mode.

Use as needed.

Use as needed. For more information, see [Tiered data storage](/help/en/hologres/user-guide/tiered-storage-of-hot-data-and-cold-data#title-n7u-zfm-vg9).

**dictionary\_encoding\_columns**

Sets dictionary encoding. The following command shows the syntax. Dictionary encoding builds a dictionary map for the values of a specified column. It converts string comparisons into numeric comparisons to accelerate queries that involve GROUP BY or FILTER operations. By default, all fields of the TEXT data type in a column-oriented table are set as dictionary encoding columns. In Hologres V0.9 and later, the system automatically determines whether to create a dictionary encoding based on data characteristics.

```
CALL set_table_property('table_name', 'dictionary_encoding_columns', '[columnName{:[on|off|auto]}[,...]]');
```

**time\_to\_live\_in\_seconds**

Sets the Time to Live (TTL) for table data in seconds. The following command shows the syntax.

-   The TTL starts from the time when data is written, not when it is updated. If you do not set a TTL, the default value is 100 years. In Hologres V1.3.24 and later, the minimum allowed TTL is one day (86,400 seconds). For more information about how to use TTL, see [SQL command list](/help/en/hologres/developer-reference/hologres-sql-commands#concept-1664115).
    
-   The TTL is not an exact time. After the TTL expires, data is deleted within a certain period, not at a precise time. Only the data is deleted, and the table remains. This may cause issues such as duplicate primary keys or inconsistent query results.
    

```
CALL set_table_property('table_name', 'time_to_live_in_seconds', '<non_negative_literal>');
```

**storage\_mode**

Specifies whether data is in hot storage or cold storage. In Hologres V1.3 and later, Hologres supports tiered storage of hot and cold data. You can use the storage\_mode property to specify the storage medium.

```
CREATE TABLE <table_name> (...) WITH (storage_mode = '[hot | cold]');

CALL set_table_property('table_name', 'storage_mode', 'hot');
CALL set_table_property('table_name', 'storage_mode', 'cold');
```

## Examples

### Example: Partitioned table based on a data timestamp

**Scenario description:** As your business grows, your daily order volume may reach tens or even hundreds of millions. If you continue to use the single-table structure (`dwd_trade_orders`) from the [Get started](#title-quick-start) section, the system load will be high during large-scale data deletion, such as purging historical data, or during queries for specific dates. This example upgrades a standard table to a partitioned table. It inherits all field definitions and index settings from the base table but uses `PARTITION BY` to physically isolate data by day. This approach not only enables you to clean up expired partitions in seconds using `DROP TABLE` but also achieves precise partition pruning during queries. This is the recommended solution for managing ultra-large-scale real-time data in production environments.

```
BEGIN;

-- Upgraded version: Create a partitioned parent table.
-- The structure is fully inherited from the quick start example, but the Primary Key must include the partition key dt.
CREATE TABLE IF NOT EXISTS public.dwd_trade_orders_partitioned (
    order_id BIGINT NOT NULL,
    shop_id INT NOT NULL,
    user_id TEXT NOT NULL,
    order_amount NUMERIC(12, 2) DEFAULT 0.00,
    payment NUMERIC(12, 2) DEFAULT 0.00,
    payment_type INT DEFAULT 0,
    is_delivered BOOLEAN DEFAULT false,
    dt TEXT NOT NULL,                               -- Partition key.
    order_time TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (order_id, dt)                      -- Composite primary key: includes the business primary key and the partition key.
) 
PARTITION BY LIST (dt)                              -- Enable list partitioning.
WITH (
    orientation = 'column',
    distribution_key = 'order_id',
    event_time_column = 'order_time',
    clustering_key = 'order_time:asc'
);

COMMIT;

-- 1. Create a child table to create physical storage for a specific date.
CREATE TABLE IF NOT EXISTS public.dwd_trade_orders_20231101 
PARTITION OF public.dwd_trade_orders_partitioned FOR VALUES IN ('20231101');

-- 2. Write data. The application logic is the same as for the base table. Data is automatically routed to the 20231101 child table.
INSERT INTO public.dwd_trade_orders_partitioned (order_id, shop_id, user_id, order_amount, payment, payment_type, is_delivered, dt, order_time) VALUES 
(50001, 101, 'U678', 299.00, 280.00, 1, true,  '20231101', '2023-11-01 10:00:01+08'),
(50002, 102, 'U992', 59.00,  59.00,  2, false, '20231101', '2023-11-01 10:05:12+08'),
(50003, 101, 'U441', 150.00, 145.00, 1, true,  '20231101', '2023-11-01 10:10:45+08'),
(50004, 105, 'U219', 888.00, 888.00, 3, true,  '20231101', '2023-11-01 10:20:11+08'),
(50005, 102, 'U883', 35.00,  30.00,  1, false, '20231101', '2023-11-01 10:32:00+08'),
(50006, 110, 'U007', 120.50, 120.50, 2, true,  '20231101', '2023-11-01 10:45:33+08'),
(50007, 101, 'U321', 210.00, 210.00, 1, true,  '20231101', '2023-11-01 11:02:19+08'),
(50008, 108, 'U556', 45.00,  45.00,  2, false, '20231101', '2023-11-01 11:15:04+08'),
(50009, 101, 'U112', 300.00, 290.00, 3, true,  '20231101', '2023-11-01 11:25:55+08'),
(50010, 105, 'U449', 99.90,  99.90,  1, true,  '20231101', '2023-11-01 11:40:22+08');

-- 3. Partition pruning. When querying, specify the dt condition. The system scans only the relevant child tables and avoids a full table scan.
SELECT COUNT(*) FROM public.dwd_trade_orders_partitioned WHERE dt = '20231101';

-- 4. Fast cleanup. To delete expired data, directly drop the child table to reclaim space in seconds.
-- DROP TABLE public.dwd_trade_orders_20231101; 
```

### **Example: Real-time analytics for large datasets (fact table)**

**Scenario description:** This scenario is for real-time dashboard summaries. These tables usually contain very large data volumes, and the core requirement is high performance for statistical aggregation, such as calculating Gross Merchandise Volume (GMV) and order volume.

```
BEGIN;

-- Explicitly specify the public schema.
CREATE TABLE IF NOT EXISTS public.dwd_order_summary (
    order_id BIGINT PRIMARY KEY,
    category_id INT NOT NULL,
    gmv NUMERIC(15, 2),
    order_time TIMESTAMPTZ NOT NULL
) WITH (
    orientation = 'column',             -- Storage mode: Column-oriented. This is the preferred choice for large-scale aggregation and analysis, providing a high compression ratio and efficient column scans.
    distribution_key = 'order_id',      -- Distribution key: Shard by order_id to ensure even data distribution. This enables local joins when joining with other order tables.
    event_time_column = 'order_time',   -- Event time column: Usually set to a time field. The system divides files into segments based on this field to accelerate filtering by time range.
    clustering_key = 'order_time:asc'   -- Clustering key: Physically sorts data in ascending order of time. This reduces disk I/O when you query data from the "last hour" or a "specific day".
);

-- Add metadata comments for future data governance.
COMMENT ON TABLE public.dwd_order_summary IS 'Fact table for order summary details.';
COMMENT ON COLUMN public.dwd_order_summary.order_id IS 'The unique order ID.';
COMMENT ON COLUMN public.dwd_order_summary.category_id IS 'The category ID.';
COMMENT ON COLUMN public.dwd_order_summary.gmv IS 'The gross merchandise volume.';
COMMENT ON COLUMN public.dwd_order_summary.order_time IS 'The time when the order was placed.';

COMMIT;
```

### **Example: High-concurrency point queries (dimension table)**

**Scenario description**: Retrieve a user persona by `user_id` in milliseconds. This type of table is optimized for extremely low-latency responses under high Queries Per Second (QPS).

```
BEGIN;

-- Explicitly specify the public schema.
CREATE TABLE IF NOT EXISTS public.dim_user_persona (
    user_id TEXT PRIMARY KEY,           -- Primary key: Core to point query scenarios. Must be set.
    user_level INT,
    persona_jsonb JSONB 
) WITH (
    orientation = 'row'                 -- Storage mode: Row-oriented. This is optimized for primary key-based point lookups, with response times in the millisecond range.
    -- Note: For row-oriented tables, the primary key is automatically set as the distribution key and clustering key. No extra settings are needed.
);

-- Add metadata comments.
COMMENT ON TABLE public.dim_user_persona IS 'Dimension table for user profiles.';
COMMENT ON COLUMN public.dim_user_persona.user_id IS 'The unique user ID.';
COMMENT ON COLUMN public.dim_user_persona.user_level IS 'The user level.';
COMMENT ON COLUMN public.dim_user_persona.persona_jsonb IS 'The user profile features in JSON format.';

COMMIT;
```

### **Example: Hybrid workload (row-column hybrid storage)**

**Scenario description**: This scenario is for a logistics and after-sales system. It requires both analytical summaries of logistics statuses (analytics) and instant retrieval of logistics details by order ID (point queries).

```
BEGIN;

-- Explicitly specify the public schema.
CREATE TABLE IF NOT EXISTS public.ads_shipping_info (
    order_id BIGINT PRIMARY KEY,
    shipping_status INT,
    receiver_address TEXT,
    update_time TIMESTAMPTZ
) WITH (
    orientation = 'row,column',         -- Storage mode: Row-column hybrid. This combines the millisecond-level point query capability of row-oriented storage with the efficient aggregation and analysis capability of column-oriented storage.
    distribution_key = 'order_id',      -- Distribution key: Determines the data distribution logic across shards.
    bitmap_columns = 'shipping_status'  -- Bitmap index: Set on low-cardinality columns such as status fields to greatly accelerate "status filtering" queries.
);

-- Add metadata comments.
COMMENT ON TABLE public.ads_shipping_info IS 'Application table for logistics status queries.';
COMMENT ON COLUMN public.ads_shipping_info.order_id IS 'The order ID.';
COMMENT ON COLUMN public.ads_shipping_info.shipping_status IS 'Logistics status (1: To be shipped, 2: In transit, 3: Delivered).';
COMMENT ON COLUMN public.ads_shipping_info.receiver_address IS 'The shipping address.';

COMMIT;
```

## Limits

### Primary key limits

-   Composite primary key: You can set multiple fields as the primary key. They must be `not nullable` and can only be set in a single statement.
    
    ```
    BEGIN;
    CREATE TABLE public.test (
     "id" TEXT NOT NULL,
     "ds" TEXT NOT NULL,
    PRIMARY KEY (id,ds)
    );
    CALL SET_TABLE_PROPERTY('public.test', 'orientation', 'column');
    COMMIT;
    ```
    
-   Type limit: The FLOAT, DOUBLE, NUMERIC, ARRAY, JSON, DATE, or other complex data types are not supported.
    
-   Modification limit: You cannot modify the primary key. You must recreate the table.
    
-   Storage dependency: Row-oriented and row-column hybrid tables must have a primary key. A primary key is optional for column-oriented tables.
    

### Constraint support

**Parameter**

**column\_constraints**

**table\_constraints**

primary key

Supported

Supported

not null

Supported

\-

null

Supported

\-

unique

Not supported

Not supported

check

Not supported

Not supported

default

Supported

Not supported

### Limits on keywords, case sensitivity, and escaping

-   Naming conventions: Column names cannot start with `hg_`. Schema names cannot start with `holo_`, `hg_`, or `pg_`.
    
-   Escaping scenarios: Keywords, reserved words, system fields (such as `ctid`), case-sensitive names, names with special characters, or names that start with a digit must be enclosed in double quotation marks ("").
    
-   Syntax optimization in Hologres V2.0:
    
    -   Switch to the old syntax:
        
        ```
        -- Enable the old syntax at the session level.
        SET hg_disable_parse_holo_property = on;
        -- Enable the old syntax at the database level.
        ALTER DATABASE <db_name> SET hg_disable_parse_holo_property = on;
        ```
        
    -   Examples of setting properties for escaped columns:
        
        ```
        CREATE TABLE "TBL" (a INT);
        SELECT relname FROM pg_class WHERE relname = 'TBL';
        INSERT INTO "TBL" VALUES (-1977);
        SELECT * FROM "TBL";
        ------------------------------------------------------------------
        -- Syntax for setting table properties for an escaped column in Hologres V2.0 and later
        BEGIN;
        CREATE TABLE tbl (c1 INT NOT NULL);
        CALL set_table_property('tbl', 'clustering_key', '"c1":asc'); 
        COMMIT;
        -- Syntax for setting table properties for an escaped column in versions earlier than Hologres V2.0
        BEGIN;
        CREATE TABLE tbl (c1 INT NOT NULL);
        CALL set_table_property('tbl', 'clustering_key', '"c1:asc"'); 
        COMMIT;
        ------------------------------------------------------------------
        -- Syntax for setting table properties for multiple columns (including an uppercase one) in Hologres V2.1 and later
        BEGIN;
        CREATE TABLE tbl ("C1" INT NOT NULL, c2 TEXT NOT NULL) WITH (clustering_key = '"C1",c2');
        COMMIT;
        -- Syntax for setting table properties for multiple columns (including an uppercase one) in Hologres V2.0 and later
        BEGIN;
        CREATE TABLE tbl ("C1" INT NOT NULL, c2 TEXT NOT NULL);
        CALL set_table_property('tbl', 'clustering_key', '"C1",c2'); 
        COMMIT;
        -- Syntax for setting table properties for multiple columns (including an uppercase one) in versions earlier than Hologres V2.0
        BEGIN;
        CREATE TABLE tbl ("C1" INT NOT NULL, c2 TEXT NOT NULL);
        CALL set_table_property('tbl', 'clustering_key', '"C1,c2"'); 
        COMMIT;
        ------------------------------------------------------------------
        CREATE TABLE "Tab_$A%*" (a INT);
        SELECT relname FROM pg_class WHERE relname = 'Tab_$A%*';
        INSERT INTO "Tab_$A%*" VALUES (-1977);
        SELECT * FROM "Tab_$A%*";
        ------------------------------------------------------------------
        CREATE TABLE tbl ("2c" INT NOT NULL);
        INSERT INTO tbl VALUES (3), (4);
        SELECT "2c" FROM tbl;
        ```
        

### **Table creation logic**

**Configuration**

**IF NOT EXISTS is specified**

**IF NOT EXISTS is not specified**

A table with the same name exists.

A NOTICE is returned, the step is skipped, and the operation succeeds.

An ERROR is returned.

No table with the same name exists.

The operation succeeds.

The operation succeeds.

### Modification limits

-   Length limit: A table name cannot exceed 127 bytes.
    
-   Unsupported modifications:
    
    -   Before Hologres V3.0, you cannot modify data types.
        
    -   You cannot change the column order.
        
    -   You cannot change the nullability constraint (from `not null` to `nullable` or vice versa).
        
    -   Storage layout properties: After a table is created, the `orientation`, `distribution_key`, `clustering_key`, or `event_time_column` properties cannot be changed.
        
-   Supported modifications:
    
    -   The `bitmap_columns` and `dictionary_encoding_columns` properties can be changed after the table is created.
        
    -   In Hologres V3.0 and later, you can modify some data types. For more information, see [Modify Data Types](/help/en/hologres/developer-reference/alter-table#b4b4089e57i36). In Hologres V3.1 and later, you can modify all data types using REBUILD. For more information, see [REBUILD](/help/en/hologres/developer-reference/holores-rebuild).
