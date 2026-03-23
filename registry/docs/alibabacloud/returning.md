PolarDB provides the Returning feature. After you execute a DML statement, a resultset is returned. This topic describes how to use the PolarDB Returning feature.

## Prerequisites

The version of the PolarDB cluster is PolarDB for MySQL 5.7 and the revision version is 5.7.1.0.6 and later. For more information about how to check the version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Background information

Typically, OK or ERR messages are returned after you execute DML statements in MySQL. These messages include only the numbers of managed rows and scanned rows. A resultset of these data records is not returned. However, in most cases, after you execute DML statements such as INSERT, UPDATE, and DELETE, you must execute a SELECT statement to check the data records in case errors occur. This ensures the accuracy of the DML operations and data.

To reduce the number of interactions between the client and server and ensure compatibility with the MySQL syntax, PolarDB provides the Returning feature. After you execute a DML statement, a resultset is returned.

## Syntax

```
CALL DBMS_TRANS.RETURNING(Field_list=>, Statement=>);
```

**Note** The `CALL DBMS_TRANS.RETURNING()` statement is not a transactional statement. The statement inherits the context of the transaction based on the DML statement that you want to execute. You must commit or roll back the transaction.

The following table describes the parameters.

 

Parameter

Description

`Field_list`

The columns to be returned. Separate multiple columns with commas (,). The columns must meet the following requirements:

-   Only existing columns in tables or an asterisk (\*) that specifies all columns are supported.
-   Operations such as calculation or aggregation on columns are not supported.

`Statement`

The DML statement to be executed. The following statements are supported:

-   INSERT
-   UPDATE
-   DELETE

## Examples

The table `t` that is created by executing the following statement is used in the following examples. These examples describe how to use the Returning feature to return a resultset for a DML statement.

```
CREATE TABLE `t` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `col1` int(11) NOT NULL DEFAULT '1',
  `col2` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
```

-   INSERT
    
    **Note** When you use the Returning feature for INSERT statements, only the `insert values` statements are supported. Statements such as `create as` and `insert select` are not supported. For example, if you execute `CALL DBMS_TRANS.RETURNING("", "insert into t select * from t");`, an error such as `ERROR 7527 (HY000): Statement didn't support RETURNING clause` occurs.
    
    Execute the following statement to view the data records to be inserted by the INSERT statement:
    
    ```
    CALL DBMS_TRANS.RETURNING("*", "insert into t(id) values(NULL),(NULL)");
    ```
    
    The following result is returned:
    
    ```
    +----+------+---------------------+
    | id | col1 | col2                |
    +----+------+---------------------+
    |  1 |    1 | 2019-09-03 10:39:05 |
    |  2 |    1 | 2019-09-03 10:39:05 |
    +----+------+---------------------+
    2 rows in set (0.01 sec)
    ```
    
    If you set `Field_list` to an empty string, for example, you execute `call dbms_trans.returning("", "insert into t(id) values(NULL),(NULL)");` statement, only the OK or ERR message is returned. Examples:
    
    ```
    Query OK, 2 rows affected (0.01 sec)
    Records: 2  Duplicates: 0  Warnings: 0
    ```
    
    To view data records of the current table, execute the `select * from t;` statement. The following result is returned:
    
    ```
    +----+------+---------------------+
    | id | col1 | col2                |
    +----+------+---------------------+
    |  1 |    1 | 2019-09-03 10:40:55 |
    |  2 |    1 | 2019-09-03 10:40:55 |
    |  3 |    1 | 2019-09-03 10:41:06 |
    |  4 |    1 | 2019-09-03 10:41:06 |
    +----+------+---------------------+
    4 rows in set (0.00 sec)
    ```
    
-   UPDATE
    
    **Note** The Returning feature does not support UPDATE statements that are executed on multiple tables.
    
    Execute the following statement to view the records updated by the UPDATE statement:
    
    ```
    CALL DBMS_TRANS.RETURNING("id, col1, col2", "update t set col1 = 2 where id >2");
    ```
    
    The following result is returned:
    
    ```
    +----+------+---------------------+
    | id | col1 | col2                |
    +----+------+---------------------+
    |  3 |    2 | 2019-09-03 10:41:06 |
    |  4 |    2 | 2019-09-03 10:41:06 |
    +----+------+---------------------+
    2 rows in set (0.01 sec)
    ```
    
-   DELETE
    
    Execute the following statement to view the records deleted by the DELETE statement:
    
    ```
    CALL DBMS_TRANS.RETURNING("id, col1, col2", "delete from t where id < 3");
    ```
    
    The following result is returned:
    
    ```
    +----+------+---------------------+
    | id | col1 | col2                |
    +----+------+---------------------+
    |  1 |    1 | 2019-09-03 10:40:55 |
    |  2 |    1 | 2019-09-03 10:40:55 |
    +----+------+---------------------+
    2 rows in set (0.00 sec)
    ```
