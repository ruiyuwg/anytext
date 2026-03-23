This topic describes how to create and delete table-level In-Memory Column Indexes (IMCIs).

## **Version requirement**

Your cluster must meet the following version requirements:

-   PolarDB for MySQL 8.0.1 with revision version 8.0.1.1.45 or later.
    
-   PolarDB for MySQL 8.0.2 with revision version 8.0.2.2.27 or later.
    

## **Single-table simplified commands**

### **Create a table-level IMCI**

You can execute the CREATE COLUMNAR INDEX ON statement to create a table-level IMCI. Syntax:

```
CREATE COLUMNAR INDEX ON <db_name>.<table_name>;
```

```
CREATE COLUMNAR INDEX ON <table_name>;
```

The syntax for creating a table-level IMCI is similar to the syntax for creating a non-IMCI secondary index, except that you do not need to specify a name for the table-level IMCI or the columns included in the IMCI. The db\_name parameter specifies the database in the current session.

**Note**

-   You cannot configure custom IMCIs. For information about how to enable IMCI customization, see [Use the extended attributes of an IMCI to customize the IMCI](/help/en/polardb/polardb-for-mysql/user-guide/customizing-columnstore-indexes-using-extended-attributes).
    
-   If no table-level IMCI exists in the specified table in the DDL statement, an IMCI is directly created in the table after you execute the statement. To prevent an error when you execute the statement on a table in which a table-level IMCI exists, you can add the `IF NOT EXISTS` clause before the `ON` keyword.
    
-   By default, the CREATE COLUMNAR INDEX ON statement is equivalent to the following ALTER TABLE statement:
    
    ```
    ALTER TABLE <db_name>.<table_name> COMMENT 'COLUMNAR=1 <OLD_COMMENT>';
    ```
    
-   The preceding statements take effect only after you set the [allow\_implicit\_imci\_alter\_comment](#entry-xe7-m96-v91) parameter to OFF.
    

### **Delete a table-level IMCI**

DROP COLUMNAR INDEX ON syntax:

```
DROP COLUMNAR INDEX ON <db_name>.<table_name>;
```

```
DROP COLUMNAR INDEX ON <table_name>;
```

The syntax for deleting a table-level IMCI is similar to the syntax for deleting a non-IMCI secondary index, except that you do not need to specify the name of the table-level IMCI. The <db\_name> parameter specifies the database in the current session.

**Note**

-   If a table-level IMCI exists in the specified table in the statement, the IMCI is directly deleted from the table after you execute the statement. To prevent an error when you execute the statement on a table whose table-level IMCI is already deleted, you can add the `IF EXISTS` clause before the `ON` keyword.
    
-   The DROP COLUMNAR INDEX ON statement is equivalent to a combination of the following two ALTER TABLE statements:
    
    ```
    ALTER TABLE <db_name>.<table_name> COMMENT 'COLUMNAR=0 <OLD_COMMENT>';
    ALTER TABLE <db_name>.<table_name> COMMENT '<OLD_COMMENT>';
    ```
    

## **Batch create table-level IMCIs**

CREATE COLUMNAR FOR TABLES IN syntax:

```
CREATE COLUMNAR INDEX FOR TABLES IN <db_name>;
```

CREATE COLUMNAR FOR TABLES FROM syntax:

```
CREATE COLUMNAR INDEX FOR TABLES FROM <db_name>;
```

CALL syntax:

```
-- dbms_imci: the name of a database package that is used to manage IMCI-related operations.
-- add_columnar_index: the name of the stored procedure that you want to call. You can use the stored procedure to create IMCIs for a specific database.
CALL dbms_imci.add_columnar_index('<db_name>');
```

The set\_implicit parameter of the stored procedure is optional. If you set the set\_implicit parameter to 1, the system adds the `implicit_imci` marker to the database. Then, when you create a new table in the database, the system automatically creates an IMCI in the table.

**Note**

-   For all existing tables in the specified database `<db_name>`, a table-level IMCI is created if one does not already exist.
    
-   You cannot configure custom IMCIs. For information about how to enable IMCI customization, see [Use the extended attributes of an IMCI to customize the IMCI](/help/en/polardb/polardb-for-mysql/user-guide/customizing-columnstore-indexes-using-extended-attributes).
    
-   The syntax for creating a table-level IMCI is similar to the syntax for creating a non-IMCI secondary index, except that you do not need to specify a name for the table-level IMCI or the columns included in the IMCI.
    

Example:

```
mysql> SHOW tables IN tpch;
+--------------------+
| Tables_in_tpch |
+--------------------+
| customer           |
| lineitem           |
| nation             |
| orders             |
| part               |
| partsupp           |
| region             |
| revenue0           |
| supplier           |
+--------------------+
9 rows in set (0.01 sec)

mysql> SHOW imci indexes;
Empty set (0.02 sec)

mysql> CREATE COLUMNAR INDEX FOR TABLES IN tpch;
+------------+--------+
| Table_Name | Result |
+------------+--------+
| customer   | Ok     |
| lineitem   | Ok     |
| nation     | Ok     |
| orders     | Ok     |
| part       | Ok     |
| partsupp   | Ok     |
| region     | Ok     |
| supplier   | Ok     |
+------------+--------+
8 rows in set (0.56 sec)

-- If the value of the STATE field is COMMITTED, the IMCI is created. Otherwise, the IMCI is still being created.
mysql> SHOW imci indexes;
+----------+-------------+------------+----------+-----------+-----------+---------+------------------+---------------------+-----------------------------+--------------+
| TABLE_ID | SCHEMA_NAME | TABLE_NAME | NUM_COLS | NUM_PACKS | PACK_SIZE | ROW_ID  | STATE            | STATE_UPDATE_AT     | CHECKPOINT_DATADIR          | WRITE_POLICY |
+----------+-------------+------------+----------+-----------+-----------+---------+------------------+---------------------+-----------------------------+--------------+
| 1080     | tpch        | region     | 3        | 0         | 65536     | 0       | RECOVERING       | 2024-09-24 18:50:16 | ./imci_1/imci_chkp_1080_258 | Tradeoff     |
| 1081     | tpch        | nation     | 4        | 1         | 65536     | 65536   | COMMITTED        | 2024-09-24 18:50:16 | ./imci_1/imci_chkp_1081_254 | Tradeoff     |
| 1082     | tpch        | part       | 9        | 64        | 65536     | 4194304 | RECOVER_BUILDING | 2024-09-24 18:50:16 | ./imci_1/imci_chkp_1082_256 | Tradeoff     |
| 1083     | tpch        | supplier   | 7        | 0         | 65536     | 0       | RECOVERING       | 2024-09-24 18:50:16 | ./imci_1/imci_chkp_1083_259 | Tradeoff     |
| 1084     | tpch        | partsupp   | 5        | 0         | 65536     | 0       | RECOVERING       | 2024-09-24 18:50:16 | ./imci_1/imci_chkp_1084_257 | Tradeoff     |
| 1085     | tpch        | customer   | 8        | 64        | 65536     | 4194304 | RECOVER_BUILDING | 2024-09-24 18:50:15 | ./imci_1/imci_chkp_1085_252 | Tradeoff     |
| 1086     | tpch        | orders     | 9        | 0         | 65536     | 0       | RECOVER_BUILDING | 2024-09-24 18:50:16 | ./imci_1/imci_chkp_1086_255 | Tradeoff     |
| 1087     | tpch        | lineitem   | 15       | 0         | 65536     | 0       | RECOVER_BUILDING | 2024-09-24 18:50:15 | ./imci_1/imci_chkp_1087_253 | Tradeoff     |
+----------+-------------+------------+----------+-----------+-----------+---------+------------------+---------------------+-----------------------------+--------------+
8 rows in set, 1 warning (0.07 sec)
```

## **Delete In-Memory Column Indexes in batches**

DROP COLUMNAR INDEX FOR TABLES IN syntax:

```
DROP COLUMNAR INDEX FOR TABLES IN <db_name>;
```

DROP COLUMNAR INDEX FOR TABLES FROM syntax:

```
DROP COLUMNAR INDEX FOR TABLES FROM <db_name>;
```

CALL syntax:

```
-- dbms_imci: the name of a database package that is used to manage IMCI-related operations.
-- drop_columnar_index: the name of the stored procedure that you want to call. You can use the stored procedure to delete the table-level IMCIs in the specified database.
CALL dbms_imci.drop_columnar_index('<db_name>');
```

The reset\_implicit parameter of the stored procedure is optional. If you set the reset\_implicit parameter to 1, the system removes the `implicit_imci` marker from the database. In this case, table-level IMCIs are not automatically created in new tables created in the database.

**Note**

All existing table-level IMCIs are deleted from all tables in the specified database `<db_name>`.

```
mysql> SHOW imci indexes;
+----------+-------------+------------+----------+-----------+-----------+-----------+-----------+---------------------+-----------------------------+--------------+
| TABLE_ID | SCHEMA_NAME | TABLE_NAME | NUM_COLS | NUM_PACKS | PACK_SIZE | ROW_ID    | STATE     | STATE_UPDATE_AT     | CHECKPOINT_DATADIR          | WRITE_POLICY |
+----------+-------------+------------+----------+-----------+-----------+-----------+-----------+---------------------+-----------------------------+--------------+
| 1080     | tpch        | region     | 3        | 1         | 65536     | 65536     | COMMITTED | 2024-09-24 18:50:30 | ./imci_1/imci_chkp_1080_258 | Tradeoff     |
| 1081     | tpch        | nation     | 4        | 1         | 65536     | 65536     | COMMITTED | 2024-09-24 18:50:16 | ./imci_1/imci_chkp_1081_254 | Tradeoff     |
| 1082     | tpch        | part       | 9        | 306       | 65536     | 20054016  | COMMITTED | 2024-09-24 18:50:30 | ./imci_1/imci_chkp_1082_256 | Tradeoff     |
| 1083     | tpch        | supplier   | 7        | 16        | 65536     | 1048576   | COMMITTED | 2024-09-24 18:50:34 | ./imci_1/imci_chkp_1083_259 | Tradeoff     |
| 1084     | tpch        | partsupp   | 5        | 1221      | 65536     | 80019456  | COMMITTED | 2024-09-24 18:51:15 | ./imci_1/imci_chkp_1084_257 | Tradeoff     |
| 1085     | tpch        | customer   | 8        | 229       | 65536     | 15007744  | COMMITTED | 2024-09-24 18:50:28 | ./imci_1/imci_chkp_1085_252 | Tradeoff     |
| 1086     | tpch        | orders     | 9        | 2289      | 65536     | 150011904 | COMMITTED | 2024-09-24 18:51:23 | ./imci_1/imci_chkp_1086_255 | Tradeoff     |
| 1087     | tpch        | lineitem   | 15       | 9156      | 65536     | 600047616 | COMMITTED | 2024-09-24 18:54:16 | ./imci_1/imci_chkp_1087_253 | Tradeoff     |
+----------+-------------+------------+----------+-----------+-----------+-----------+-----------+---------------------+-----------------------------+--------------+
8 rows in set, 1 warning (1.09 sec)

mysql> CALL dbms_imci.drop_columnar_index('tpch');
+-------------+------------+--------+
| Object_Name | Operation  | Result |
+-------------+------------+--------+
| customer    | drop_index | Ok     |
| lineitem    | drop_index | Ok     |
| nation      | drop_index | Ok     |
| orders      | drop_index | Ok     |
| part        | drop_index | Ok     |
| partsupp    | drop_index | Ok     |
| region      | drop_index | Ok     |
| supplier    | drop_index | Ok     |
+-------------+------------+--------+
8 rows in set (0.33 sec)

mysql> SHOW imci indexes;
Empty set (0.27 sec)
```

## **Batch operation results**

The results of the above batch create and delete operations for table-level IMCIs are displayed in a tabular format. The Result column indicates the outcome of the operation for each table. The following table describes the possible result codes:

**Result code**

**Description**

Ok

The operation is complete. For example, the table-level IMCI is created or deleted.

Skip by unsupported

The operation is not supported.

Skip by no change

The target object already exists or the status already matches. For example, the system skips the create operation if the table-level IMCI already exists.

Skip by concurrent operation

A concurrent operation conflict exists. For example, the system cannot obtain the metadata lock (MDL) due to other DDL operations on the table.

Skip by not found

The target object does not exist.

Skip by ACL deny

The current account does not have the required permissions.

Failed

The operation failed.

## **Add a table-level IMCI without modifying table comments**

The table describes the parameter used to configure the implicit IMCI feature.

**Parameter**

**Level**

**Description**

allow\_implicit\_imci\_alter\_comment

Session

Specifies whether table-level comments can be modified. Valid values:

-   ON (default value): Allows you to modify comments.
    
-   OFF: Creates a columnstore index without modifying the comments.
    

**Note**

If you set the allow\_implicit\_imci\_alter\_comment parameter to `OFF`, you can create a table-level IMCI in a table without using a comment. This configuration is suitable for the following scenarios:

-   You execute the `CREATE TABLE` statement when the [loose\_polar\_enable\_implicit\_imci\_with\_create\_table](/help/en/polardb/polardb-for-mysql/user-guide/column-store-index-parameter-description#ecbdbe410e3bx) parameter is set to ON.
    
-   You execute the CREATE COLUMNAR INDEX ON <db>.<table> statement to dynamically create a table-level IMCI.
    
-   Columnstore indexes are created during the batch add operation.
    

Example 1:

```
SET allow_implicit_imci_alter_comment = OFF;
-- Create a table and create an IMCI in the table.
SET GLOBAL polar_enable_implicit_imci_with_create_table = ON;
CREATE TABLE t1 (id INT PRIMARY KEY, name VARCHAR(100));

SHOW CREATE TABLE t1 FULL;
/*
Table Create Table t1	
CREATE TABLE `t1` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  COLUMNAR INDEX (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/
```

Example 2:

```
CREATE TABLE t1 (id INT PRIMARY KEY, name VARCHAR(100));

SET allow_implicit_imci_alter_comment = OFF;
-- CREATE COLUMNAR INDEX ON table;
CREATE COLUMNAR INDEX ON test.t1;

SHOW CREATE TABLE t1 FULL;
/*
Table Create Table t1	
CREATE TABLE `t1` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  COLUMNAR INDEX (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/
```

Example 3:

```
*/
CREATE TABLE t1 (id INT PRIMARY KEY, name VARCHAR(100));
CREATE TABLE t2 (id INT PRIMARY KEY, code DOUBLE);

SET allow_implicit_imci_alter_comment = OFF;

-- CREATE COLUMNAR INDEX FOR TABLES IN db;
CREATE COLUMNAR INDEX FOR TABLES IN test;
/*
Table_Name	Result
t1	Ok
t2	Ok
*/

SHOW CREATE TABLE t1 FULL;
/*
Table Create Table t1	
CREATE TABLE `t1` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  COLUMNAR INDEX (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/

SHOW CREATE TABLE t2 FULL;
/*
Table Create Table t2	
CREATE TABLE `t2` (
  `id` int(11) NOT NULL,
  `code` double DEFAULT NULL,
  PRIMARY KEY (`id`),
  COLUMNAR INDEX (`id`,`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
*/
```

#### **Advantages**

You do not need to modify the comment of user tables. For example, in a SaaS business scenario, this configuration ensures that the user table information of a large tenant (a table-level IMCI is created) is consistent with the user table information of a small tenant (no table-level IMCI is created). This facilitates the validation process performed by using ecological tools.

#### **Disadvantages**

-   In scenarios in which you perform primary/secondary data synchronization by using binary logs, you cannot create IMCIs in the secondary database because the IMCI-related comment is missing. To create IMCIs in the secondary database, ensure that the related parameter settings of the secondary database are the same as the parameter settings of the primary database.
    
-   You cannot configure custom IMCIs. For information about how to enable IMCI customization, see [Use the extended attributes of an IMCI to customize the IMCI](/help/en/polardb/polardb-for-mysql/user-guide/customizing-columnstore-indexes-using-extended-attributes).
