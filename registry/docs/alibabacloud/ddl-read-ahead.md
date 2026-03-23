PolarDB provides the DDL read-ahead feature. It takes a very long time to execute DDL statements on large tables. You can use the DDL read-ahead feature to shorten the time required to execute DDL statements.

## Prerequisites

Your PolarDB cluster must meet one of the following requirements:

-   A cluster of PolarDB for MySQL 8.0 whose revision version is 8.0.1.1.28 or later.
    
-   A cluster of PolarDB for MySQL 5.7 whose revision version is 5.7.1.0.22 or later.
    
-   A cluster of PolarDB for MySQL 5.6 whose revision version is 5.6.1.0.34 or later.
    

For more information about how to check the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Precautions

After the DDL read-ahead feature is enabled, more I/O resources are occupied due to read-ahead threads. This may affect the execution of other SQL statements within the same period. Therefore, we recommend that you use the DDL read-ahead feature during off-peak hours.

## Usage

-   loose\_innodb\_polar\_ddl\_build\_index\_readahead
    
    You can enable the DDL read-ahead feature by using the loose\_innodb\_polar\_ddl\_build\_index\_readahead parameter.
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    loose\_innodb\_polar\_ddl\_build\_index\_readahead
    
    Global
    
    Specifies whether to enable the DDL read-ahead feature. Default value: OFF. Valid values:
    
    -   ON
        
    -   OFF
        
    
-   loose\_innodb\_polar\_ddl\_build\_index\_readahead\_page\_num
    
    You can set the data size to read ahead by using the loose\_innodb\_polar\_ddl\_build\_index\_readahead\_page\_num parameter.
    
    **Parameter**
    
    **Level**
    
    **Description**
    
    loose\_innodb\_polar\_ddl\_build\_index\_readahead\_page\_num
    
    Global
    
    The number of pages to read ahead. The data size of one page is 16K. Valid values: 32 to 256. Default value: 64.
    

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
    
    After data is inserted, you must restart PolarDB processes to ensure that no data is cached in the buffer\_pool memory. Test the improvement percentage of DDL execution efficiency by comparing time values before and after the DDL read-ahead feature is enabled.
    
    -   Compare the DDL execution efficiency by executing the `ALTER TABLE table_1 ADD INDEX name_index (seller_name);` statement:
        
        **DDL read-ahead feature**
        
        **Time consumed (seconds)**
        
        Disabled
        
        485
        
        Enabled
        
        (loose\_innodb\_polar\_ddl\_build\_index\_readahead\_page\_num is set to 256)
        
        412
        
    -   Compare the DDL execution efficiency by executing the `ALTER TABLE table_1 ADD COLUMN c1 varchar(100) after id;` statement:
        
        **DDL read-ahead feature**
        
        **Time consumed (seconds)**
        
        Disabled
        
        264
        
        Enabled
        
        (loose\_innodb\_polar\_ddl\_build\_index\_readahead\_page\_num is set to 256)
        
        159
        

## **Contact Us**

If you have any questions about DDL operations, please feel free to [Contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
