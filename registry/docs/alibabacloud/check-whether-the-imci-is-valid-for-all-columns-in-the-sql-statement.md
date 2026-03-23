The `dbms_imci.check_columnar_index()` stored procedure can parse the SQL statement that you enter, obtain all columns used in the SQL statement, and check whether an In-Memory Column Index (IMCI) is valid for these columns.

-   If the columns for which the IMCI is invalid are involved in an SQL statement, the stored procedure returns the database names, table names, and names of the columns.
    
-   If the IMCI is valid for all columns in the SQL statement, the stored procedure returns an empty result set.
    

## **Prerequisites**

-   Your PolarDB cluster uses one of the following versions:
    
    -   A cluster of PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.30 or later.
        
    -   A cluster of PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.12 or later.
        
-   You have the read (**SELECT**) permissions on the specified table.
    

## **Syntax**

```
dbms_imci.check_columnar_index('<query_string>');
```

## **Parameters**

**Parameter**

**Description**

query\_string

The SQL statement to be parsed.

**Note**

-   The SQL statement must be a valid **SELECT** statement. Other DML statements such as **INSERT**, **UPDATE**, or **DELETE** are not supported. If the **SELECT** statement contains errors, error messages are returned. For example, a nonexistent column is involved.
    
-   The value of `query_string` must be a string and cannot be a variable value or a query result.
    

## **Usage notes**

-   The stored procedure is case-sensitive.
    
-   When you use the stored procedure to parse an SQL statement and add the database name before the table name in the SQL statement, the database name is used. If no database name is added before the table name in the SQL statement, you must execute the `use db_name` statement to switch to the database that contains the table in the SQL statement and then execute the stored procedure.
    
-   Although no length limit is set for SQL statements, the length of SQL statements that are sent from the client to the database is limited by the `thread_stack` parameter for parsing SQL statements and parameters such as `max_allowed_packet`.
    
-   If the IMCI does not support the data types of the columns in the SQL statement, an error message is returned when the stored procedure is called.
    
-   The **SELECT** statement can be the parameterized form of a prepared statement. However, the **PREPARE**... **FROM** keyword cannot be added.
    
-   If the SQL statement contains characters that need to be escaped, such as `'`or `"`, you must escape the characters based on MySQL syntax. Sample code:
    
    -   Replace `'` in the SQL statement with `''`.
        
        ```
        call dbms_imci.check_columnar_index('select t1.a from t1 where t1.b = ''some_string''');
        ```
        
    -   Replace `"` in the SQL statement with `""`.
        
        ```
        call dbms_imci.check_columnar_index("select t1.a from t1 where t1.b = ""some_string""");
        ```
        
    
    For more escape rules, see [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/string-literals.html).
    

## **Examples**

The `t1`, `t2`, and `t3` tables are used in the following examples. Call the stored procedure to check whether the IMCI is valid for all columns in the SQL statement.

1.  Execute the following statement to switch to the `test` database:
    
    ```
    use test;
    ```
    
2.  Execute the following statements to create the `t1`, `t2`, and `t3` tables. The IMCI is valid for all columns in the `t3` table.
    
    ```
    create table t1 (a int, b int) engine = innodb;
    create table t2 (a int, b int) engine = innodb;
    create table t3 (a int, b int) engine = innodb comment 'columnar=1';
    ```
    
3.  Call the stored procedure to check whether the IMCI is valid for all columns in the SQL statement.
    
    -   The SQL statement uses columns in the `t1` and `t2` tables.
        
        ```
        call dbms_imci.check_columnar_index('select count(t1.a) from t1 inner join t2 on t1.a = t2.a group by t1.b');
        ```
        
        Sample result:
        
        ```
        +--------------+------------+-------------+
        | TABLE_SCHEMA | TABLE_NAME | COLUMN_NAME |
        +--------------+------------+-------------+
        | test         | t1         | a           |
        | test         | t1         | b           |
        | test         | t2         | a           |
        +--------------+------------+-------------+
        3 rows in set (0.01 sec)
        ```
        
        The SQL statement uses the `t1.a`, `t1.b`, and `t2.a` columns, and the IMCI is invalid for the three columns. Therefore, the stored procedure returns the database names, table names, and names of the three columns.
        
    -   The columns in the SQL statement belong to the `t3` table.
        
        ```
        call dbms_imci.check_columnar_index('select a, b from t3');
        ```
        
        Sample result:
        
        ```
        Empty set (0.00 sec)
        ```
        
        The IMCI is valid for all columns in the `t3` table. Therefore, the stored procedure returns an empty result set.
