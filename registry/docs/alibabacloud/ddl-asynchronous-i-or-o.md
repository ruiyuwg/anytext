The DDL asynchronous I/O feature is added in PolarDB. It is time-consuming to create indexes in large tables by executing the DDL statement. You can use the DDL asynchronous I/O feature to shorten the time to create indexes.

## Prerequisites

Your PolarDB cluster must meet one of the following requirements:

-   A cluster of PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.6 or later.
    
-   A cluster of PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.29 or later.
    

For more information about how to check the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Precautions

The DDL asynchronous I/O feature is not supported for full-text indexes and spatial indexes.

## Usage

You can configure the DDL asynchronous I/O feature by using the innodb\_polar\_ddl\_async\_io parameter. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).

**Parameter**

**Level**

**Description**

innodb\_polar\_ddl\_async\_io

Global

Specifies whether to enable the DDL asynchronous I/O feature. Default value: OFF. Valid values:

-   ON
    
-   OFF
    

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
    
    After the table is populated with data, enable and disable the DDL asynchronous I/O feature. Execute the `alter table table_1 add index name_index (seller_name);` statement and compare the statement execution efficiency in two cases.
    
    **DDL asynchronous I/O**
    
    **Time consumed (seconds)**
    
    Enabled
    
    368
    
    Disabled
    
    485
    

## **Contact Us**

If you have any questions about DDL operations, please feel free to [Contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
