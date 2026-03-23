In some scenarios, you must create IMCIs for a service or a module, not just for columns involved in one or more **SELECT** statements. To avoid repeatedly creating IMCIs in this case, you can call the `dbms_imci.columnar_advise_begin()` stored procedure first, and then the `dbms_imci.columnar_advise()` stored procedure in batches. Finally, you can call the `dbms_imci.columnar_advise_show()` stored procedure to batch obtain the DDL statements.

## **Prerequisites**

-   The PolarDB cluster runs PolarDB for MySQL 8.0.1 and the revision version is 8.0.1.1.30 or later.
    
-   You have the read (**SELECT**) permissions on the specified table.
    

## **Syntax**

-   dbms\_imci.columnar\_advise\_begin()
    
    The `dbms_imci.columnar_advise_begin()` stored procedure is used to enable the method to batch obtain DDL statements. Then, the DDL statements are not immediately displayed when the `dbms_imci.columnar_advise()` stored procedure is called, but are cached in the memory. Duplicate table and column names are not recorded during the caching process. Finally, you can call the stored procedure `dbms_imci.columnar_advise_show()` or `dbms_imci.columnar_advise_show_by_columns()` to explicitly obtain the DDL statements.
    
    **Note**
    
    Calling the `dbms_imci.columnar_advise_begin()` and `dbms_imci.columnar_advise_by_columns()` stored procedures in sequence is equivalent to calling the `dbms_imci.columnar_advise()` stored procedure.
    
-   dbms\_imci.columnar\_advise\_show()
    
    Displays the DDL statements obtained by calling the `dbms_imci.columnar_advise()` stored procedure by table. Duplicate table names are not displayed.
    
-   dbms\_imci.columnar\_advise\_show\_by\_columns()
    
    Displays the DDL statements obtained by calling the `dbms_imci.columnar_advise()` stored procedure by column. Duplicate column names are not displayed.
    
-   dbms\_imci.columnar\_advise\_end()
    
    Terminates the method to batch obtain DDL statements and clears the cache. You can call the `dbms_imci.columnar_advise_show()` and `dbms_imci.columnar_advise_show_by_columns()` stored procedures repeatedly before you call the `dbms_imci.columnar_advise_end()` stored procedure. If you call the `dbms_imci.columnar_advise_show()` stored procedure after the `dbms_imci.columnar_advise_end()` stored procedure, an error message is returned.
    

## **Precautions**

-   The maximum memory used to cache `dbms_imci.columnar_advise()` intermediate results is determined by the `imci_columnar_advise_buffer_size` parameter. The default value is 8 MB, which typically can cache DDL statements for thousands of tables. If you want to cache more DDL statements, you can execute the **SET** statement to modify the `imci_columnar_advise_buffer_size` parameter. Example: `SET imci_columnar_advise_buffer_size = 16777216;`.
    
-   Even if the `dbms_imci.columnar_advise_end()` stored procedure is not called, the `dbms_imci.columnar_advise()` cache is cleared when the link is disconnected.
    

## **Examples**

The `t1` and `t2` tables are used in the following examples.

1.  Execute the following statement to switch to the `test` database:
    
    ```
    use test;
    ```
    
2.  Execute the following statements to create the `t1` and `t2` tables:
    
    ```
    create table t1 (a int, b int) engine = innodb;
    create table t2 (a int, b int) engine = innodb;
    ```
    
3.  Enable the method to batch obtain DDL statements.
    
    ```
    call dbms_imci.columnar_advise_begin();
    ```
    
4.  Batch execute the `dbms_imci.columnar_advise()` stored procedure.
    
    ```
    call dbms_imci.columnar_advise('select count(t1.a) from t1 inner join t2 on t1.a = t2.a group by t1.b');
    call dbms_imci.columnar_advise('select count(t1.a) from t1 inner join t2 on t1.a = t2.a group by t1.b');
    call dbms_imci.columnar_advise('select count(t1.a) from t1 inner join t2 on t1.a = t2.a group by t1.b');
    call dbms_imci.columnar_advise('select count(t1.a) from t1 inner join t2 on t1.a = t2.a group by t1.b');
    ```
    
5.  Explicitly obtain the DDL statements.
    
    -   Display the DDL statements obtained by calling the `dbms_imci.columnar_advise()` stored procedure by table.
        
        ```
        call dbms_imci.columnar_advise_show();
        ```
        
        Sample result:
        
        ```
        +-------------------------------------------+
        | DDL_STATEMENT                             |
        +-------------------------------------------+
        | ALTER TABLE test.t1 COMMENT='COLUMNAR=1'; |
        | ALTER TABLE test.t2 COMMENT='COLUMNAR=1'; |
        +-------------------------------------------+
        2 rows in set (0.00 sec)
        ```
        
    -   Display the DDL statements obtained by calling the `dbms_imci.columnar_advise()` stored procedure by table.
        
        ```
         call dbms_imci.columnar_advise_show_by_columns();
        ```
        
        Sample result:
        
        ```
        +-------------------------------------------------------------------------------------------------------------------------------------------+
        | DDL_STATEMENT                                                                                                                             |
        +-------------------------------------------------------------------------------------------------------------------------------------------+
        | ALTER TABLE test.t1 MODIFY COLUMN a int(11) DEFAULT NULL COMMENT 'COLUMNAR=1', MODIFY COLUMN b int(11) DEFAULT NULL COMMENT 'COLUMNAR=1'; |
        | ALTER TABLE test.t2 MODIFY COLUMN a int(11) DEFAULT NULL COMMENT 'COLUMNAR=1';                                                            |
        +-------------------------------------------------------------------------------------------------------------------------------------------+
        2 rows in set (0.00 sec)
        ```
        
6.  Terminate the method to batch obtain DDL statements and clear the cache.
    
    ```
    call dbms_imci.columnar_advise_end();
    ```
    
    Sample result:
    
    ```
    Query OK, 0 rows affected (0.11 sec)
    ```
