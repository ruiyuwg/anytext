The DDL multi-way merging and sorting feature is added in PolarDB. It is time-consuming to create indexes in large tables by executing the DDL statement. You can use the DDL merging and sorting feature to shorten the time for index sorting.

## Prerequisites

Your PolarDB cluster must meet one of the following requirements:

-   A cluster of PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.5 or later.
    
-   A cluster of PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.28 or later.
    
-   A cluster of PolarDB for MySQL 5.7 whose revision version is 5.7.1.0.23 or later.
    

For more information about how to check the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Precautions

-   The DDL multi-way merging and sorting feature is not supported for full-text indexes and spatial indexes.
    
-   The DDL multi-way merging and sorting feature slightly increases the memory usage of a cluster. If you activate N ways for merging and sorting, the occupied memory size of the cluster is `(N+1) × innodb_sort_buffer_size` bytes.
    

## Usage

You can specify the number of ways for merging and sorting by setting the innodb\_polar\_parallel\_merge\_ways parameter.

**Parameter**

**Level**

**Description**

innodb\_polar\_parallel\_merge\_ways

Session

The number of ways for merging and sorting. Valid values: 2 to 16. Default value: 2. Two-way merging and sorting is used by default. If you specify a value greater than 2, the multi-way merging and sorting feature is enabled.

## Performance test

-   Test environment
    
    -   A cluster of PolarDB for MySQL 8.0 that has 8 CPU cores and 32 GB memory.
        
    -   The storage capacity of the cluster is 50 TB.
        
-   Schema
    
    Execute the following statement to create a table that is named `table_1`:
    
    ```
    CREATE TABLE `table_1` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `seller_id` bigint(20) DEFAULT NULL,
    `seller_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
    `gmt_create` varchar(30) DEFAULT NULL,
    `update_time` varchar(30) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB;
    ```
    
-   Data
    
    Execute the following statement to generate test data:
    
    ```
    delimiter ||
    CREATE PROCEDURE populate_0(IN NUM INT)
    BEGIN
    DECLARE sid INT;
    DECLARE suffix_name INT;
    DECLARE i INT;
    SET sid=1000;
    SET suffix_name=10;
    SET i=1;
    START TRANSACTION;
    WHILE i <= NUM
    DO
    INSERT INTO table_1(seller_id,seller_name,gmt_create,update_time) VALUES(sid,CONCAT('sellername',suffix_name),NOW(),NOW());
    SET suffix_name=suffix_name+1;
    SET sid=sid+1;
    SET i=i+1;
    END WHILE;
    COMMIT;
    END ||
    delimiter ;
    CALL populate_0(100000000) ;
    ```
    
-   Test method and test results
    
    After the table is populated with data, specify two ways and eight ways for merging and sorting. Execute the `alter table table_1 add index name_index (seller_name);` statement and compare the statement execution efficiency in two cases.
    
    **Ways for merging and sorting**
    
    **Time consumed (seconds)**
    
    Eight-way merging and sorting
    
    353
    
    Two-way merging and sorting
    
    485
    

## **Contact Us**

If you have any questions about DDL operations, please feel free to [Contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
