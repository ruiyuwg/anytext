The DPI engine uses extract, transform, and load (ETL) SQL for real-time, table-level pre-computation. This feature functions as a real-time materialized view. This topic describes how to use ETL SQL to sync and pre-compute wide table data in real time.

## **Prerequisites**

-   You have [enabled the Stream DPI engine](/help/en/lindorm/activate-the-streaming-engine).
    
-   You have activated LindormTable.
    

## **Scenario 1: Real-time mirror table**

**Note**

You can sync source table data in real time. This is useful for various business scenarios, such as data sharing, data backup, read/write splitting, and heterogeneous indexing.

### **Data preparation**

1.  [Connect to LindormTable from the MySQL command line](/help/en/lindorm/user-guide/connect-and-use-the-wide-table-engine-from-the-mysql).
    
2.  Create a source table and a mirror table.
    
    ```
    -- Create the source table
    CREATE TABLE source(p1 INT, c1 DOUBLE, PRIMARY KEY(p1));
    
    -- Create the mirror table
    CREATE TABLE sink(p1 INT, c1 DOUBLE, PRIMARY KEY(p1));
    ```
    

### **Submit the ETL job**

1.  [Connect to the stream engine using the MySQL command line](/help/en/lindorm/user-guide/connect-to-the-streaming-engine-using-the-mysql-client).
    
2.  [Create an ETL](/help/en/lindorm/user-guide/create-etl).
    
    ```
    CREATE ETL sync_etl AS INSERT INTO sink SELECT * FROM source;
    ```
    

### **Data verification**

1.  [Connect to LindormTable from the MySQL command line](/help/en/lindorm/user-guide/connect-and-use-the-wide-table-engine-from-the-mysql).
    
2.  Insert data into the source table.
    
    ```
    INSERT INTO source(p1, c1) VALUES(0, 0.0);
    INSERT INTO source(p1, c1) VALUES(1, 1.0);
    INSERT INTO source(p1, c1) VALUES(2, 2.0);
    INSERT INTO source(p1, c1) VALUES(3, 3.0);
    INSERT INTO source(p1, c1) VALUES(4, 4.0);
    ```
    
3.  Query the data in the mirror table.
    
    ```
    SELECT * FROM sink;
    ```
    
    The following result is returned:
    
    ```
    +------+------+
    | p1   | c1   |
    +------+------+
    |    0 |  0.0 |
    |    1 |  1.0 |
    |    2 |  2.0 |
    |    3 |  3.0 |
    |    4 |  4.0 |
    +------+------+
    ```
    

## **Scenario 2: Real-time pre-computation**

**Note**

The DPI engine provides extensive pre-computation capabilities. This example shows how to perform a multi-table pre-join. A pre-join merges data from multiple tables in advance. This avoids running a JOIN operation for every query, which prevents long response times and high computational overhead.

### **Data preparation**

1.  [Connect to LindormTable from the MySQL command line](/help/en/lindorm/user-guide/connect-and-use-the-wide-table-engine-from-the-mysql).
    
2.  Create two source tables: `user_tbl` (user information) and `order_tbl` (user order information). Then, create a secondary index named `idx1` for the `order_tbl` table.
    
    ```
    -- Create source table 1: user_tbl
    CREATE TABLE `user_tbl` (
        `user_id` varchar NOT NULL,
        `user_name` varchar,
        `user_addr` varchar,
        PRIMARY KEY (`user_id`)
    );
    
    -- Create source table 2: order_tbl
    CREATE TABLE `order_tbl` (
        `order_id` varchar NOT NULL,
        `user_id` varchar,
        `product_name` varchar,
        `price` decimal(38, 20),
        PRIMARY KEY (`order_id`)
    );
    
    -- Create index idx1 for the source table order_tbl
    CREATE INDEX idx1 ON `order_tbl`(user_id desc) WITH (COMPRESSION='ZSTD');
    ```
    
3.  Create the sink table `user_order_tbl` to store the integrated data.
    
    ```
    CREATE TABLE `user_order_tbl` (
        `order_id` varchar NOT NULL,
        `user_id` varchar,
        `product_name` varchar,
        `price` decimal(38, 20),
        `user_name` varchar,
        `user_addr` varchar,
        `user_addr_code` varchar,
        PRIMARY KEY (`order_id`)
    ) WITH (MUTABILITY = 'MUTABLE_UDT');
    ```
    

### **Submit the ETL job**

1.  [Connect to the stream engine using the MySQL command line](/help/en/lindorm/user-guide/connect-to-the-streaming-engine-using-the-mysql-client).
    
2.  Create the ETL job and add the data integration logic.
    
    The logic is as follows:
    
    1.  Join the source tables `order_tbl` and `user_tbl` on the `user_id` field to associate user information with their order data.
        
    2.  Use the regular expression `REGEXP_EXTRACT` to extract the address code from the `user_addr` field.
        
    3.  Create an ETL job to insert the integrated data into the sink table `user_order_tbl`. This creates a single table that contains both user information and their order data.
        
    
    ```
    CREATE ETL join_etl AS
    INSERT INTO `lindorm_table`.`default`.`user_order_tbl` (
        order_id,
        user_id,
        product_name,
        price,
        user_name,
        user_addr,
        user_addr_code
    )
    SELECT
        o.order_id,
        o.user_id,
        o.product_name,
        o.price,
        u.user_name,
        u.user_addr,
        REGEXP_EXTRACT(u.user_addr, '#(.*?)$', 1) AS user_addr_code
    FROM
        `lindorm_table`.`default`.`order_tbl` o
        JOIN `lindorm_table`.`default`.`user_tbl` u
        ON o.user_id = u.user_id;
    ```
    

### **Data verification**

1.  [Connect to LindormTable from the MySQL command line](/help/en/lindorm/user-guide/connect-and-use-the-wide-table-engine-from-the-mysql).
    
2.  Insert data into the source tables.
    
    ```
    INSERT INTO user_tbl (user_id, user_name, user_addr) VALUES
    ('U001', 'Zhang San', 'Chaoyang District, Beijing#100000'),
    ('U002', 'Li Si', 'Pudong New Area, Shanghai#200000'),
    ('U003', 'Wang Wu', 'Tianhe District, Guangzhou#510000'),
    ('U004', 'Zhao Liu', 'Nanshan District, Shenzhen#518000');
    
    INSERT INTO order_tbl (order_id, user_id, product_name, price) VALUES
    ('O1001', 'U001', 'Laptop', 8999.00),
    ('O1002', 'U001', 'Wireless Mouse', 159.00),
    ('O1003', 'U002', 'Smartphone', 6999.00),
    ('O1004', 'U002', 'Bluetooth Headset', 299.00),
    ('O1005', 'U003', 'Tablet', 3499.00),
    ('O1006', 'U004', 'Mechanical Keyboard', 799.00),
    ('O1007', 'U004', 'Monitor', 1299.00);
    ```
    
3.  Query the sink table. The ETL job filters the data based on the integration logic and writes the results to the sink table in real time.
    
    ```
    SELECT * FROM user_order_tbl;
    ```
    
    The following result is returned:
    
    ```
    +----------+---------+-----------------------+---------------------------+-----------+------------------------------------+----------------+
    | order_id | user_id | product_name          | price                     | user_name | user_addr                          | user_addr_code |
    +----------+---------+-----------------------+---------------------------+-----------+------------------------------------+----------------+
    | O1001    | U001    | Laptop                | 8999.00000000000000000000 | Zhang San | Chaoyang District, Beijing#100000    | 100000         |
    | O1002    | U001    | Wireless Mouse        |  159.00000000000000000000 | Zhang San | Chaoyang District, Beijing#100000    | 100000         |
    | O1003    | U002    | Smartphone            | 6999.00000000000000000000 | Li Si     | Pudong New Area, Shanghai#200000   | 200000         |
    | O1004    | U002    | Bluetooth Headset     |  299.00000000000000000000 | Li Si     | Pudong New Area, Shanghai#200000   | 200000         |
    | O1005    | U003    | Tablet                | 3499.00000000000000000000 | Wang Wu   | Tianhe District, Guangzhou#510000  | 510000         |
    | O1006    | U004    | Mechanical Keyboard   |  799.00000000000000000000 | Zhao Liu  | Nanshan District, Shenzhen#518000  | 518000         |
    | O1007    | U004    | Monitor               | 1299.00000000000000000000 | Zhao Liu  | Nanshan District, Shenzhen#518000  | 518000         |
    +----------+---------+-----------------------+---------------------------+-----------+------------------------------------+----------------+
    ```
