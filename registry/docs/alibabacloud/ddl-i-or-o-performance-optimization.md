This topic describes I/O performance optimization of DDL statements.

PolarDB uses the compute and storage decoupled architecture. Compute nodes use high-performance RDMA to access distributed storage. However, the latency of distributed storage access is still significantly higher than that of local disk access. DDL operations on large tables trigger a large number of I/O operations. Therefore, the latency of distributed storage access affects the performance of DDL statements. To reduce I/O latency, PolarDB provides the following features:

-   [DDL read-ahead](/help/en/polardb/polardb-for-mysql/user-guide/ddl-read-ahead): enables read-ahead threads for the DDL statement to create indexes to reduce I/O read latency.
    
-   [DDL asynchronous I/O](/help/en/polardb/polardb-for-mysql/user-guide/ddl-asynchronous-i-or-o): enables background write threads during DDL writes to reduce I/O write latency.
    
-   [DDL multi-way merging and sorting](/help/en/polardb/polardb-for-mysql/user-guide/ddl-multi-way-merging-and-sorting): reduce I/O operations for DDL statements and I/O latency.
    

## **Performance test**

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
    
    Compare the DDL execution efficiency by executing the `ALTER TABLE table_1 ADD INDEX name_index (seller_name);` statement after you populate the table with data:
    
    **DDL read-ahead, DDL asynchronous I/O, and DDL multi-way merging and sorting**
    
    **Time consumed (seconds)**
    
    DDL read-ahead, DDL asynchronous I/O, and DDL multi-way merging and sorting enabled:
    
    -   loose\_innodb\_polar\_ddl\_build\_index\_readahead=ON
        
    -   loose\_innodb\_polar\_ddl\_build\_index\_readahead\_page\_num=256
        
    -   innodb\_polar\_ddl\_async\_io=ON
        
    -   innodb\_polar\_parallel\_merge\_ways=8
        
    
    252
    
    DDL read-ahead, DDL asynchronous I/O, and DDL multi-way merging and sorting disabled:
    
    -   loose\_innodb\_polar\_ddl\_build\_index\_readahead=OFF
        
    -   loose\_innodb\_polar\_ddl\_build\_index\_readahead\_page\_num=64
        
    -   innodb\_polar\_ddl\_async\_io=OFF
        
    -   innodb\_polar\_parallel\_merge\_ways=2
        
    
    485
