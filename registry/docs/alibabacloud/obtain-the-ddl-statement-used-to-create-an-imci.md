You can call the `dbms_imci.columnar_advise()` stored procedure to obtain the DDL statement used to create an IMCI. When you execute the obtained DDL statement, you can set the IMCI valid for the columns for which the IMCI is originally invalid. Repeat this process until the IMCI is valid for all columns involved in the SQL statement.

## **Prerequisites**

-   The PolarDB cluster runs PolarDB for MySQL 8.0.1 and the revision version is 8.0.1.1.30 or later.
    
-   You have the read (**SELECT**) permissions on the specified table.
    

## **Syntax**

-   Obtain the DDL statement used to create an IMCI for a table.
    
    ```
    dbms_imci.columnar_advise('<query_string>');
    ```
    
-   Obtain the DDL statement used to create an IMCI for specified columns.
    
    ```
    dbms_imci.columnar_advise_by_columns('<query_string>');
    ```
    

## **Parameters**

**Parameter**

**Description**

query\_string

The SQL statement to be parsed.

**Note**

-   The SQL statement must be a valid **SELECT** statement. Other DML statements such as **INSERT**, **UPDATE**, or **DELETE** are not supported. If the **SELECT** statement contains errors (for example, a nonexistent column is involved), error messages are returned.
    
-   `query_string` must be a string and cannot be a variable value or a query result.
    

## **Precautions**

You can call the stored procedure to obtain only DDL statements but not execute DDL statements.

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
    
3.  Call the stored procedure to obtain the DDL statement.
    
    -   Obtain the DDL statement used to create an IMCI for a table.
        
        ```
        call dbms_imci.columnar_advise('select count(t1.a) from t1 inner join t2 on t1.a = t2.a group by t1.b');
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
        
        No IMCI is created for columns in the `t1` and `t2` tables involved in the **SELECT** statement. After you call the stored procedure to obtain the DDL statements used to create IMCIs. After the DDL statements are executed, IMCIs are added for all columns in the `t1` and `t2` tables.
        
    -   Obtain the DDL statement used to create an IMCI for specified columns.
        
        ```
        call dbms_imci.columnar_advise_by_columns('select count(t1.a) from t1 inner join t2 on t1.a = t2.a group by t1.b');
        ```
        
        Sample result:
        
        ```
        mysql> call dbms_imci.columnar_advise_by_columns('select count(t1.a) from t1 inner join t2 on t1.a = t2.a group by t1.b');
        +-------------------------------------------------------------------------------------------------------------------------------------------+
        | DDL_STATEMENT                                                                                                                             |
        +-------------------------------------------------------------------------------------------------------------------------------------------+
        | ALTER TABLE test.t1 MODIFY COLUMN a int(11) DEFAULT NULL COMMENT 'COLUMNAR=1', MODIFY COLUMN b int(11) DEFAULT NULL COMMENT 'COLUMNAR=1'; |
        | ALTER TABLE test.t2 MODIFY COLUMN a int(11) DEFAULT NULL COMMENT 'COLUMNAR=1';                                                            |
        +-------------------------------------------------------------------------------------------------------------------------------------------+
        2 rows in set (0.00 sec)
        ```
        
        Only the `t1.a`, `t1.b`, and `t2.a` columns are involved in the **SELECT** statement. You can call the `dbms_imci.columnar_advise_by_columns()` stored procedure to obtain the DDL statements used to create IMCIs for specified columns. Execute the DDL statements and ensure that IMCIs are valid for all columns involved in the **SELECT** statement.
