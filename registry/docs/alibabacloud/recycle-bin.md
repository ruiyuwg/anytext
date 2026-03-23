Data definition language (DDL) operations cannot be rolled back. Data loss may occur due to user errors. For example, data may be lost when a user executes the DROP TABLE statement. Alibaba Cloud provides the recycle bin feature, which allows you to temporarily store the tables that are dropped in the recycle bin. You can specify a retention period within which you can retrieve the dropped tables. Alibaba Cloud also provides the DBMS\_RECYCLE package to help you manage the dropped tables in the recycle bin.

## Prerequisites

The RDS instance runs one of the following MySQL versions:

-   MySQL 8.0 with a minor engine version of 20191225 or later
    
-   MySQL 5.7 with a minor engine version of 20210430 or later
    

## Parameters

The following table describes the parameters that you can configure for the recycle bin feature.

**Parameter**

**Description**

loose\_recycle\_bin

Specifies whether to enable the recycle bin feature. You can enable this feature for your RDS instance or for a specific session. You can modify this parameter in the ApsaraDB RDS console. Default value: OFF

loose\_recycle\_bin\_retention

The period for which you want to retain tables in the recycle bin. Unit: seconds. Default value: 604800. The default value indicates seven days. You can modify this parameter in the ApsaraDB RDS console.

loose\_recycle\_scheduler

Specifies whether to enable the thread that is used to asynchronously clear the recycle bin. You can modify this parameter in the ApsaraDB RDS console. Default value: OFF

loose\_recycle\_scheduler\_interval

The polling interval followed by the thread that is used to asynchronously delete tables from the recycle bin. Unit: seconds. Default value: 30. This parameter is temporarily unavailable.

loose\_recycle\_scheduler\_purge\_table\_print

Specifies whether to record the logs that are generated when the system asynchronously clears the recycle bin. Default value: OFF This parameter is temporarily unavailable.

**Important**

To prevent disk space from being exhausted, we recommend that you set the loose\_recycle\_bin\_retention parameter to an optimal value and the loose\_recycle\_scheduler parameter to ON.

## Feature description

-   Recycling and deletion
    
    -   Recycling
        
        When you execute the `TRUNCATE TABLE` statement to truncate a table, the system moves the truncated table to the recycle bin. Then, the system creates a table that uses the same schema as the truncated table in the original directory of the truncated table.
        
        **Note**
        
        This mechanism is supported only for RDS instances that run MySQL 8.0 with a minor engine version of 20200331 or later.
        
        When you execute the `DROP TABLE or DROP DATABASE` statement to drop a table or a database, the system moves only the objects that are related to the dropped table to the recycle bin. The system deletes remaining objects based on the following policies:
        
        -   If objects are not related to the dropped table, the system determines whether to retain the objects based on the statement that you execute. These objects are not recycled.
            
        -   If objects are based on the dropped table and may cause modifications to the data in the table, the system deletes the objects. The objects include triggers and foreign keys. The system does not delete column statistics. These statistics are moved to the recycle bin with the dropped table.
            
    -   Deletion
        
        The recycle bin starts a background thread to asynchronously purge tables that are stored longer than the time period specified by the **recycle\_bin\_retention** parameter. For tables with a large amount of data, the system starts another background thread to asynchronously purge these tables.
        
-   Permission control
    
    When you start your RDS instance, a database named \_\_recycle\_bin\_\_ is created to store the data that is moved to the recycle bin. The \_\_recycle\_bin\_\_ database is a system database, which cannot be modified or deleted.
    
    You cannot execute the `DROP TABLE` statement to delete a table from the recycle bin. However, you can use the `call dbms_recycle.purge_table('<TABLE>');` method to delete a table from the recycle bin.
    
    **Note**
    
    The account that you use must have the permissions to execute DROP statements on both your RDS instance and the recycle bin.
    
-   Table naming in the recycle bin
    
    Tables in the \_\_recycle\_bin\_\_ database originate from different databases and may have the same name. To ensure that each table has a unique name in the recycle bin, the system implements the following naming conventions:
    
    ```
    "__" + <Storage Engine> + <SE private id>
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Storage Engine
    
    The name of the storage engine.
    
    SE private id
    
    The unique value that is generated by the storage engine to identify a table. For example, the unique value that is used to identify an InnoDB table is the ID of the table.
    
-   Independent recycling
    
    The configurations of a recycle bin for an RDS instance apply only to that RDS instance. The configurations of the recycle bin for the primary RDS instance do not apply to the secondary, read-only, or disaster recovery RDS instances to which binary logs are replicated. For example, you can specify a 7-day retention period on your primary RDS instance and a 14-day retention period on the secondary RDS instances.
    
    **Note**
    
    The storage usage of an RDS instance varies based on the retention period that you specify on the instance.
    

## Usage notes

-   If the \_\_recycle\_bin\_\_ database and the table that you want to recycle reside in different file systems, the system may migrate the related data file from the tablespace that stores the table after you execute the `DROP TABLE` statement to drop the table. This process is time-consuming.
    
-   A general tablespace can store more than one table. If you execute the DROP TABLE statement to drop a table from a general tablespace, the system does not migrate the related data file from the general tablespace.
    

## Manage the recycle bin

AliSQL allows you to perform the following operations on the recycle bin:

-   View all tables that are temporarily stored in the recycle bin.
    
    Run the following command to call the required interface in DBMS\_RECYCLE to show all tables that are temporarily stored in the recycle bin:
    
    ```
    call dbms_recycle.show_tables();
    ```
    
    Example:
    
    ```
    mysql> call dbms_recycle.show_tables();
    +-----------------+---------------+---------------+--------------+---------------------+---------------------+
    | SCHEMA          | TABLE         | ORIGIN_SCHEMA | ORIGIN_TABLE | RECYCLED_TIME       | PURGE_TIME          |
    +-----------------+---------------+---------------+--------------+---------------------+---------------------+
    | __recycle_bin__ | __innodb_1063 | product_db    | t1           | 2019-08-08 11:01:46 | 2019-08-15 11:01:46 |
    | __recycle_bin__ | __innodb_1064 | product_db    | t2           | 2019-08-08 11:01:46 | 2019-08-15 11:01:46 |
    | __recycle_bin__ | __innodb_1065 | product_db    | parent       | 2019-08-08 11:01:46 | 2019-08-15 11:01:46 |
    | __recycle_bin__ | __innodb_1066 | product_db    | child        | 2019-08-08 11:01:46 | 2019-08-15 11:01:46 |
    +-----------------+---------------+---------------+--------------+---------------------+---------------------+
    4 rows in set (0.00 sec)
    ```
    
    **Parameter**
    
    **Description**
    
    SCHEMA
    
    The name of the database that stores the table after the table is moved to the recycle bin.
    
    TABLE
    
    The name of the table after the table is moved to the recycle bin.
    
    ORIGIN\_SCHEMA
    
    The name of the database that stores the table before the table is moved to the recycle bin.
    
    ORIGIN\_TABLE
    
    The name of the table before the table is moved to the recycle bin.
    
    RECYCLED\_TIME
    
    The time at which the table is moved to the recycle bin.
    
    PURGE\_TIME
    
    The time when the table is expected to be deleted from the recycle bin.
    
-   Purge a table from the recycle bin.
    
    Run the following command to call the required interface in DBMS\_RECYCLE to purge a table in the recycle bin:
    
    ```
    call dbms_recycle.purge_table('<TABLE>');
    ```
    
    **Note**
    
    -   The TABLE parameter specifies the name of the table after the table is moved to the recycle bin.
        
    -   The account that you use must have the permissions to execute DROP statements on both your RDS instance and the recycle bin.
        
    
    Example:
    
    ```
    call dbms_recycle.purge_table('__innodb_1063');
    ```
    
-   Restore a table from the recycle bin.
    
    -   Run the following command to call the required interface in DBMS\_RECYCLE to restore a table in the recycle bin:
        
        ```
        call dbms_recycle.restore_table('<RECYCLE_TABLE>','<DEST_DB>','<DEST_TABLE>');
        ```
        
        The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        RECYCLE\_TABLE
        
        The name of the table in the recycle bin.
        
        **Note**
        
        If you specify only this parameter, the data of the original table is restored.
        
        DEST\_DB
        
        The name of the destination database to which you want to restore the table.
        
        DEST\_TABLE
        
        The name of the destination table.
        
        **Note**
        
        Super-user credentials are required to run the restore\_table command. Therefore, you cannot run this command.
        
        Example:
        
        ```
        mysql> call dbms_recycle.restore_table('__innodb_1063','testDB','testTable');
        ```
        
    -   Execute the `INSERT ... SELECT` statement to restore a table in the recycle bin.
        
        Query the tables that are temporarily stored in the recycle bin. Then, check the name of the table that you want to restore in the `__recycle_bin__` database from the output of the SQL statement. Create a destination table that has the same schema as the source table and execute the `INSERT ... SELECT` statement to import data to the destination table. Sample code:
        
        ```
        mysql> call dbms_recycle.show_tables();
        +-----------------+---------------+---------------+--------------+---------------------+---------------------+
        | SCHEMA          | TABLE         | ORIGIN_SCHEMA | ORIGIN_TABLE | RECYCLED_TIME       | PURGE_TIME          |
        +-----------------+---------------+---------------+--------------+---------------------+---------------------+
        | __recycle_bin__ | __innodb_1132 | sbtest        | sbtest1      | 2024-07-31 15:08:56 | 2024-08-07 15:08:56 |
        +-----------------+---------------+---------------+--------------+---------------------+---------------------+
        1 row in set (0.00 sec)
        
        mysql> CREATE TABLE `db1`.`t1` (
            ->   `id` int NOT NULL AUTO_INCREMENT,
            ->   `k` int NOT NULL DEFAULT '0',
            ->   `c` char(120) NOT NULL DEFAULT '',
            ->   `pad` char(60) NOT NULL DEFAULT '',
            ->   PRIMARY KEY (`id`),
            ->   KEY `k_1` (`k`)
            -> ) ENGINE=InnoDB AUTO_INCREMENT=400001 DEFAULT CHARSET=utf8mb3;
        Query OK, 0 rows affected, 1 warning (0.01 sec)
        
        mysql> insert into `db1`.`t1` select * from `__recycle_bin__`.`__innodb_1132`;
        Query OK, 400000 rows affected (2.76 sec)
        Records: 400000  Duplicates: 0  Warnings: 0
        ```
