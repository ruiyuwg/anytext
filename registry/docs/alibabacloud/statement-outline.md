In production environments, SQL statement execution plans often change, causing database instability. PolarDB stabilizes MySQL execution plans using optimizer hints and index hints. This method is called a Statement Outline. PolarDB also provides the `DBMS_OUTLN` package to help you quickly implement Statement Outlines. This topic explains how to use and manage Statement Outlines.

## Supported Versions

Your PolarDB cluster must run one of the following versions:

-   PolarDB for MySQL 5.6 with minor version 5.6.1.0.36 or later.
    
-   PolarDB for MySQL 5.7 with minor version 5.7.1.0.2 or later.
    
-   PolarDB for MySQL 8.0.1 with minor version 8.0.1.1.1 or later.
    
-   PolarDB for MySQL 8.0.2.
    

You can check your cluster version by [viewing the version number](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## **Quick Start**

### **Specify an Index Using an Optimizer Hint**

**Syntax**

**Note**

Version 5.6 does not support hints. To specify an index in this version, use an Index Outline instead.

```
/*+ INDEX(table_name idx) */
```

**Example**

```
CALL dbms_outln.add_optimizer_outline('test', '/*+ INDEX(t1 i_a) */', 'SELECT test.t1.a AS a FROM test.t1');
```

### **Specify an Index Using an Index Hint**

**Syntax**

**Note**

Use `USE` or `FORCE INDEX` to specify an index. This method works in version 5.6, which does not support hints.

```
CALL dbms_outln.add_index_outline('<Schema_name>','<Digest>',<Position>,'<Type>','<Hint>','<Scope>','<Query>');
```

**Parameter Description**

-   The `Position` parameter specifies the table that the outline affects. This parameter uses 1-based indexing and corresponds to the order of tables in the SQL text. The value of `Position` is the ordinal number of the table to which the `Hint` parameter applies.
    
-   For the `Digest` parameter, an empty string usually works. For more details, see [add\_index\_outline](#3236ed1fd84mr).
    

**Example**

```
CALL dbms_outln.add_index_outline('outline_db', '', 1, 'USE INDEX', 'ind_1', '',
                                  "SELECT * FROM t1 WHERE t1.col1 =1 AND t1.col2 ='xpchild'");
```

### **Specify Join Order**

**Syntax**

**Note**

This hint forces a specific join order. You do not need to list all tables. The listed tables join first. The optimizer chooses the order for the remaining tables.

```
/*+ JOIN_PREFIX(t1, t2, ...) */
```

**Example**

```
CALL dbms_outln.add_optimizer_outline('outline_db', '/*+ JOIN_PREFIX(it1, it2) */',
                                      'SELECT it3.id3, it2.i2, it1.id2
                                       FROM t3 it3, t1 it1, t2 it2
                                       WHERE it3.i3 = it1.id1
                                       AND it2.id2 = it1.id2
                                       GROUP BY it3.id3, it1.id2
                                       ) t, t2 ot
                                       WHERE ot.id2 = t.id2');
```

### **Set Variables for a Single Statement**

**Syntax**

**Note**

Set variable values that apply only to this statement.

```
/*+ SET_VAR(<var_name>=<var_value>) */
```

**Example**

```
CALL dbms_outln.add_optimizer_outline('test', '/*+ SET_VAR(max_execution_time=1) */',
                                      'SELECT * FROM t1 ');
```

### **Manually Specify Row Store or Column Store Execution**

In clusters with read-only nodes that support columnstore indexes, use an Outline to force a statement to run on either row-store read-only nodes or columnstore-index read-only nodes.

-   Hint format:
    
    ```
    # Force columnstore usage
    /*+ SET_VAR(cost_threshold_for_imci=0) */
    
    # Force row-store usage
    /*+ SET_VAR(use_imci_engine=OFF) */
    ```
    
-   Outline:
    
    ```
    # Force execution on columnstore-index read-only nodes
    CALL dbms_outln.add_optimizer_outline('test', '/*+ SET_VAR(cost_threshold_for_imci=0) */', 'SELECT test.t1.a AS a FROM test.t1');
    
    # Force execution on row-store read-only nodes
    CALL dbms_outln.add_optimizer_outline('test', '/*+ SET_VAR(use_imci_engine=OFF) */', 'SELECT test.t1.a AS a FROM test.t1');
    ```
    

## Feature Overview

Statement Outline supports all hint types in official MySQL 8.0. These fall into two categories:

-   Optimizer Hints
    
    These include table-level, index-level, and join-order optimizer hints. For details, see [Optimizer Hints](https://dev.mysql.com/doc/refman/8.0/en/optimizer-hints.html).
    
    **Note**
    
    PolarDB for MySQL 5.6 does not support optimizer hints.
    
-   Index Hints
    
    These are classified by type and scope. For details, see [Index Hints](https://dev.mysql.com/doc/refman/8.0/en/index-hints.html).
    

## **Parameter Description**

Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). On the Parameter Settings page, use [Set Parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters) to enable or disable Statement Outline or Sharding Outline.

**Parameter**

**Level**

**Description**

loose\_opt\_outline\_enabled

Global

Controls whether Statement Outline is enabled. Valid values:

-   **ON** (default): Enables Statement Outline.
    
-   **OFF**: Disables Statement Outline.
    

loose\_outline\_templated\_digest\_for\_sharding\_table

Session

[Table Sharding Outline](#581a5c5702oit) feature toggle. Valid values:

-   ON (default)
    
-   OFF
    

**Note**

This parameter applies only to the following versions:

-   PolarDB for MySQL 8.0.1 with minor version 8.0.1.1.54 or later.
    
-   PolarDB for MySQL 8.0.2 with minor version 8.0.2.2.33 or later.
    

## Manage Statement Outlines

**Note**

-   If the `Schema_name` is not empty, the `Schema_name` of your SQL statement and the `Digest` value of that statement must match both the `Schema_name` and the `Digest` value in the Statement Outline rule for the Statement Outline to take effect.
    
-   If `Schema_name` is empty, only the `Digest` of your SQL statement must match the `Digest` in the Statement Outline rule.
    

To manage Statement Outlines conveniently, PolarDB defines five local storage procedures in `DBMS_OUTLN`, as described below:

-   **add\_optimizer\_outline**: Add optimizer hints.
    
-   **add\_index\_outline**: Add index hints.
    
-   **preview\_outline**: Preview which statements match a Statement Outline. Use this to manually validate outlines.
    
-   **show\_outline**: View whether a Statement Outline is active in memory.
    
-   **del\_outline**: Delete a Statement Outline from memory and from the system table.
    

## add\_optimizer\_outline

**Syntax**

```
dbms_outln.add_optimizer_outline('<Schema_name>','<Hint>','<query>');
```

**Parameters**

**Parameter**

**Description**

**Schema\_name**

The database name.

**Hint**

In an Optimizer Hint, **Hint** is the complete hint string, such as **/\*+MAX\_EXECUTION\_TIME(1000) \*/**.

**Query**

The original SQL statement for which to add a Statement Outline.

**Note**

-   PolarDB for MySQL version 5.6 does not support add\_optimizer\_outline.
    
-   When the **Query** statement requires quotation marks, enclose the part that needs them in single quotation marks within the **Query** statement, and enclose the entire **Query** in double quotation marks.
    
-   When executing a Statement Outline created with single quotation marks in the **Query** statement, it successfully matches the Statement Outline regardless of whether you use single or double quotation marks.
    

**Example**

Original Query statement:

```
SELECT * FROM t1 WHERE name="Tom";
```

Modified Query statement:

```
SELECT * FROM t1 WHERE name='Tom';
```

Query statement to add an Outline:

```
CALL dbms_outln.add_optimizer_outline("", "/*+ max_execution_time(1000) */", "SELECT * FROM t1 WHERE name='Tom'");
```

## add\_index\_outline

**Syntax**

```
dbms_outln.add_index_outline('<Schema_name>','<Digest>',<Position>,'<Type>','<Hint>','<Scope>','<Query>');
```

**Note**

-   Query is the original SQL statement for which to add a Statement Outline.
    
-   Select either Digest or Query. If you select Query, DBMS\_OUTLN calculates Digest and Digest\_text.
    

**Parameters**

**Parameter**

**Description**

**Schema\_name**

The database name.

**Digest**

A 64-byte hash string obtained by hashing **Digest\_text**. For more information, see [STATEMENT\_DIGEST()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_statement-digest).

**Position**

**Position** indicates the table's position, starting from 1. If the hint applies to the Nth table, **Position** is N.

**Type**

In an Index Hint, the hint type can be USE INDEX, FORCE INDEX, or IGNORE INDEX.

**Hint**

In an Index Hint, **Hint** is a list of index names, such as **ind\_1,ind\_2**.

**Scope**

It includes the following three types:

-   **FOR GROUP BY**
    
-   **FOR ORDER BY**
    
-   **FOR JOIN**
    

**Note**

An empty string indicates all types of Index Hints.

**Query**

The original SQL statement for which to add a Statement Outline.

**Example**

```
CALL dbms_outln.add_index_outline('outline_db', '', 1, 'USE INDEX', 'ind_1', '', "SELECT * FROM t1 WHERE t1.col1 =1 AND t1.col2 ='xpchild'");
```

## preview\_outline

**Syntax**

```
dbms_outln.preview_outline('<Schema_name>','<Query>');
```

**Example**

```
mysql> CALL dbms_outln.preview_outline('outline_db', "SELECT * FROM t1 WHERE t1.col1 =1 AND t1.col2 ='xpchild'");
+------------+------------------------------------------------------------------+------------+------------+-------+---------------------+
| SCHEMA     | DIGEST                                                           | BLOCK_TYPE | BLOCK_NAME | BLOCK | HINT                |
+------------+------------------------------------------------------------------+------------+------------+-------+---------------------+
| outline_db | b4369611be7ab2d27c85897632576a04bc08f50b928a1d735b62d0a140628c4c | TABLE      | t1         |     1 | USE INDEX (`ind_1`) |
+------------+------------------------------------------------------------------+------------+------------+-------+---------------------+
1 row in set (0.01 sec)
```

## show\_outline

**Syntax**

```
dbms_outln.show_outline();
```

**Example**

```
CALL dbms_outln.show_outline();
+------+------------+------------------------------------------------------------------+-----------+-------+------+-------------------------------------------------------+------+----------+-------------------------------------------------------------------------------------+
| ID   | SCHEMA     | DIGEST                                                           | TYPE      | SCOPE | POS  | HINT                                                  | HIT  | OVERFLOW | DIGEST_TEXT                                                                         |
+------+------------+------------------------------------------------------------------+-----------+-------+------+-------------------------------------------------------+------+----------+-------------------------------------------------------------------------------------+
|   33 | outline_db | 36bebc61fce7e32b93926aec3fdd790dad5d895107e2d8d3848d1c60b74bcde6 | OPTIMIZER |       |    1 | /*+ SET_VAR(foreign_key_checks=OFF) */                |    1 |        0 | SELECT * FROM `t1` WHERE `id` = ?                                                   |
|   32 | outline_db | 36bebc61fce7e32b93926aec3fdd790dad5d895107e2d8d3848d1c60b74bcde6 | OPTIMIZER |       |    1 | /*+ MAX_EXECUTION_TIME(1000) */                       |    2 |        0 | SELECT * FROM `t1` WHERE `id` = ?                                                   |
|   34 | outline_db | d4dcef634a4a664518e5fb8a21c6ce9b79fccb44b773e86431eb67840975b649 | OPTIMIZER |       |    1 | /*+ BNL(t1,t2) */                                     |    1 |        0 | SELECT `t1` . `id` , `t2` . `id` FROM `t1` , `t2`                                   |
|   35 | outline_db | 5a726a609b6fbfb76bb8f9d2a24af913a2b9d07f015f2ee1f6f2d12dfad72e6f | OPTIMIZER |       |    2 |  /*+ QB_NAME(subq1) */                                |    2 |        0 | SELECT * FROM `t1` WHERE `t1` . `col1` IN ( SELECT `col1` FROM `t2` )               |
|   36 | outline_db | 5a726a609b6fbfb76bb8f9d2a24af913a2b9d07f015f2ee1f6f2d12dfad72e6f | OPTIMIZER |       |    1 | /*+ SEMIJOIN(@subq1 MATERIALIZATION, DUPSWEEDOUT) */  |    2 |        0 | SELECT * FROM `t1` WHERE `t1` . `col1` IN ( SELECT `col1` FROM `t2` )               |
|   30 | outline_db | b4369611be7ab2d27c85897632576a04bc08f50b928a1d735b62d0a140628c4c | USE INDEX |       |    1 | ind_1                                                 |    3 |        0 | SELECT * FROM `t1` WHERE `t1` . `col1` = ? AND `t1` . `col2` = ?                    |
|   31 | outline_db | 33c71541754093f78a1f2108795cfb45f8b15ec5d6bff76884f4461fb7f33419 | USE INDEX |       |    2 | ind_2                                                 |    1 |        0 | SELECT * FROM `t1` , `t2` WHERE `t1` . `col1` = `t2` . `col1` AND `t2` . `col2` = ? |
+------+------------+------------------------------------------------------------------+-----------+-------+------+-------------------------------------------------------+------+----------+-------------------------------------------------------------------------------------+
7 rows in set (0.00 sec)
```

Here, `HIT` indicates the number of times the Statement Outline was matched, and `OVERFLOW` indicates the number of times the Statement Outline did not find a query block or corresponding table.

## del\_outline

**Syntax**

```
dbms_outln.del_outline(<Id>);
```

**Example**

```
CALL dbms_outln.del_outline(32);
```

**Note**

If the rule to delete does not exist, the system reports a warning. Use `SHOW WARNINGS;` to view the warning content.

```
CALL dbms_outln.del_outline(1000);
Query OK, 0 rows affected, 2 warnings (0.00 sec)

SHOW WARNINGS;
+---------+------+----------------------------------------------+
| Level   | Code | Message                                      |
+---------+------+----------------------------------------------+
| Warning | 7521 | Statement outline 1000 is not found in table |
| Warning | 7521 | Statement outline 1000 is not found in cache |
+---------+------+----------------------------------------------+
2 rows in set (0.00 sec)
```

## **Sharding Outline**

In table sharding scenarios, you often create many physical tables that have the same structure but different numeric suffixes in their names, such as `t_001`, `t_002`, ..., and `t_999`. Traditional Statement Outlines require a separate rule for each specific table name. This leads to an enormous number of rules, high maintenance costs, and frequent omissions.

Sharding Outline automatically creates a template from the consecutive numbers at the end of table and column names. For example, it recognizes `t_1`, `t_2`, and `t_100` as the single pattern `t_?`. This allows a single Outline rule to match all sharded tables that follow the naming pattern. Configure the rule once to apply it to all matching tables.

**Comparison dimension**

**Standard Outline**

**Table Sharding Outline**

Table name matching

Strictly matches the full table name, such as `t_1`

Automatically templates trailing numbers, such as `t_?`

Scope

A single, specific table

Multiple sharded tables with a consistent naming pattern

Number of rules

A separate rule is required for each sharded table

A single rule covers all matching sharded tables

Maintenance complexity

High: Requires batch creation, updates, and deletions

Low: Unified management for creating, updating, and deleting rules ensures strong consistency

#### **Scope**

Your PolarDB cluster must be one of the following versions:

-   PolarDB for MySQL 8.0.1 with minor version 8.0.1.1.54 or later.
    
-   PolarDB for MySQL 8.0.2 with minor version 8.0.2.2.33 or later.
    

#### **Usage**

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/). On the Parameter Settings page, [set the loose\_outline\_templated\_digest\_for\_sharding\_table parameter](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters) to enable the Sharding Outline feature.
    
2.  Call the dedicated stored procedure `add_optimizer_outline_sharding`. Its parameter structure and semantics are identical to `add_optimizer_outline`. The only difference is its added capability for table sharding templating:
    
    ```
    CALL dbms_outln.add_optimizer_outline_sharding(
      'test',                          -- Schema_name
      '',                              -- Digest (Leave empty to let the system calculate it)
      1,                               -- Position (The 1-based position of the table. For a hint on the Nth table, set Position to N.)
      '/*+ MAX_EXECUTION_TIME(1000) */', -- Hint string
      "SELECT t_1.c_1 FROM t_1"        -- Original SQL (Can contain any sharded table name, such as t_1, t_2, or t_100)
    );
    ```
    
    After execution, the rule applies to all tables that match the `t_?` pattern, such as `t_1`, `t_2`, and `t_100`.
    

## **Demo example**

Use either of the following methods to validate the effect of a Statement Outline.

-   Preview the outline using [preview\_outline](#f8c80f0786pmt).
    
    -   The SQL command is as follows:
        
        ```
        CALL dbms_outln.preview_outline('outline_db', "SELECT * FROM t1 WHERE t1.col1 =1 AND t1.col2 ='xpchild'");
        ```
        
        The result is as follows:
        
        ```
        +------------+------------------------------------------------------------------+------------+------------+-------+---------------------+
        | SCHEMA     | DIGEST                                                           | BLOCK_TYPE | BLOCK_NAME | BLOCK | HINT                |
        +------------+------------------------------------------------------------------+------------+------------+-------+---------------------+
        | outline_db | b4369611be7ab2d27c85897632576a04bc08f50b928a1d735b62d0a140628c4c | TABLE      | t1         |     1 | USE INDEX (`ind_1`) |
        +------------+------------------------------------------------------------------+------------+------------+-------+---------------------+
        1 row in set (0.01 sec)
        ```
        
-   You can use EXPLAIN to view the execution plan.
    
    **Note**
    
    The value in the Extra column appears only in the following versions:
    
    -   PolarDB for MySQL 8.0.1 with minor version 8.0.1.0.34 or later.
        
    -   PolarDB for MySQL version 8.0.1, with a minor version of 8.0.2.2.27 or later.
        
    
    1.  The SQL command is as follows:
        
        ```
        EXPLAIN SELECT * FROM t1 WHERE t1.col1 =1 AND t1.col2 ='xpchild';
        ```
        
        The result is as follows:
        
        ```
        +----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+------------------------------+
        | id | select_type | table | partitions | type | possible_keys | key   | key_len | ref   | rows | filtered | Extra                        |
        +----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+------------------------------+
        |  1 | SIMPLE      | t1    | NULL       | ref  | ind_1         | ind_1 | 5       | const |    1 |   100.00 | Using where; Using outline 1 |
        +----+-------------+-------+------------+------+---------------+-------+---------+-------+------+----------+------------------------------+
        1 row in set, 1 warning (0.00 sec)
        ```
        
    2.  The SQL command is as follows:
        
        ```
        SHOW warnings;
        ```
        
        The result is as follows:
        
        ```
        +-------+------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
        | Level | Code | Message                                                                                                                                                                                                                                                 |
        +-------+------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
        | Note  | 1003 | /* select#1 */ SELECT `outline_db`.`t1`.`id` AS `id`,`outline_db`.`t1`.`col1` AS `col1`,`outline_db`.`t1`.`col2` AS `col2` FROM `outline_db`.`t1` USE INDEX (`ind_1`) WHERE ((`outline_db`.`t1`.`col1` = 1) AND (`outline_db`.`t1`.`col2` = 'xpchild')) |
        +-------+------+---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
        1 row in set (0.00 sec)
        ```
        

## **Appendix: Statement Outline Table**

PolarDB includes a system table named `outline` to store `Hint`s. The system automatically creates this table at startup; manual creation is not required. The creation statement for this system table is as follows:

```
CREATE TABLE `mysql`.`outline` (
  `Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `Schema_name` varchar(64) COLLATE utf8_bin DEFAULT NULL,
  `Digest` varchar(64) COLLATE utf8_bin NOT NULL,
  `Digest_text` longtext COLLATE utf8_bin,
  `Type` enum('IGNORE INDEX','USE INDEX','FORCE INDEX','OPTIMIZER') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Scope` enum('','FOR JOIN','FOR ORDER BY','FOR GROUP BY') CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT '',
  `State` enum('N','Y') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT 'Y',
  `Position` bigint(20) NOT NULL,
  `Hint` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`Id`)
) /*!50100 TABLESPACE `mysql` */ ENGINE=InnoDB
DEFAULT CHARSET=utf8 COLLATE=utf8_bin STATS_PERSISTENT=0 COMMENT='Statement outline'
```

Parameter descriptions are as follows:

**Parameter**

**Description**

Id

Outline ID.

Schema\_name

Database name.

Digest

The 64-byte hash string obtained by performing a hash calculation on Digest\_text. For more information, see [STATEMENT\_DIGEST()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_statement-digest).

Digest\_text

The feature of the SQL statement.

Type

-   For Optimizer Hints, the Hint type is **OPTIMIZER**.
    
-   For Index Hints, the Hint type is **USE INDEX**, **FORCE INDEX**, or **IGNORE INDEX**.
    

Scope

This parameter is required only for Index Hints. It includes the following three types:

-   **FOR GROUP BY**
    
-   **FOR ORDER BY**
    
-   **FOR JOIN**
    

**Note**

An empty string indicates all types of Index Hints.

State

Whether this rule is enabled. Valid values:

-   **N**
    
-   **Y** (Default)
    

Position

-   For Optimizer Hints, Position indicates the Query Block. All Optimizer Hints must apply to a Query Block. Position starts from 1. If the Hint applies to the Nth keyword in the statement, Position is N.
    
-   For Index Hints, Position indicates the table's position. It also starts from 1. If the Hint applies to the Nth table, Position is N.
    

Hint

-   For Optimizer Hints, Hint represents the complete Hint string, such as `/*+ MAX_EXECUTION_TIME(1000) */`.
    
-   For Index Hints, Hint represents a list of index names, such as `ind_1,ind_2`.
