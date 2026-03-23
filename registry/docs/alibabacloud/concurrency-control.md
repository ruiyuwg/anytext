Alibaba Cloud provides SQL statement-based Concurrency Control (CCL) rules and the `DBMS_CCL` package to ensure the stability of PolarDB clusters by handling database traffic bursts, SQL statements with high resource consumption, and changes in SQL access models.

## Prerequisites

Your PolarDB cluster must be one of the following versions:

-   PolarDB for MySQL 8.0.
    
-   PolarDB for MySQL 5.7 with a minor engine version of 5.7.1.0.6 or later.
    
    **Note**
    
    If your cluster is PolarDB for MySQL 5.7 with a minor engine version of 5.7.1.0.27 or later, CCL is compatible with [Thread Pool](/help/en/polardb/polardb-for-mysql/user-guide/thread-pool#concept-2473266).
    
-   PolarDB for MySQL 5.6.
    

## Notes

You can modify CCL rules only on the primary node. The system automatically synchronizes these modifications to other nodes.

## Feature design

**Dimensions**

CCL matches SQL statements with rules based on the following five dimensions:

**Dimension**

**Description**

TYPE

The type of the SQL statement, such as SELECT, UPDATE, INSERT, DELETE, or DDL.

SCHEMA

The name of the database where the SQL operation is performed.

TABLE

The name of the table or view where the SQL operation is performed.

KEYWORD

A keyword in the SQL statement. You can configure multiple keywords in a CCL rule. Separate multiple keywords with semicolons (;).

DIGEST

The hash string generated from the SQL statement. For more information, see [STATEMENT\_DIGEST()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html#function_statement-digest).

**How SQL statements are matched with CCL rules**

-   If the DIGEST value in a CCL rule is empty, the following matching method is used:
    
    -   If the DIGEST value is empty and the TYPE, SCHEMA, and TABLE values are specified, the rule takes effect only if the TYPE, SCHEMA, and TABLE of the SQL statement match the corresponding values in the rule.
        
    -   If the DIGEST value is empty, the SCHEMA and TABLE values are empty, and the TYPE value is specified, the rule takes effect only if the TYPE of the SQL statement matches the TYPE in the rule.
        
    
    **Note**
    
    If the KEYWORD in the CCL rule is not empty, the keyword is also checked:
    
    -   If a single KEYWORD is specified in the CCL rule, a match occurs if the SQL statement contains that keyword.
        
    -   If multiple KEYWORDS are specified in the CCL rule, a match occurs only if the SQL statement contains all the specified keywords. The order of the keywords in the SQL statement does not affect the match.
        
    
-   If the DIGEST value in a CCL rule is not empty, the rule takes effect only if the SCHEMA and DIGEST value of the SQL statement match the corresponding values in the rule.
    
-   If the SCHEMA in a CCL rule is empty, the rule takes effect if the DIGEST value of the SQL statement matches the DIGEST value in the rule.
    

**Matching Order of SQL Statements and CCL Rules**

A single SQL statement can match only one CCL rule. If a statement matches multiple rules, the rule with the highest priority is used. Priority is determined in the following order. If multiple rules have the same priority level, the rule with the lower ID is matched first:

1.  Match by DIGEST value.
    
2.  Match by TYPE, SCHEMA, and TABLE.
    
3.  Match by TYPE only.
    

## Parameter description

You can modify the following parameters in the PolarDB console. For more information, see [Set cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).

**Parameter**

**Description**

loose\_ccl\_mode

The behavior of an SQL statement when the concurrency limit is exceeded. Valid values:

-   **WAIT** (default): The statement queues and waits. It is executed after other SQL statements are complete.
    
-   **REFUSE**: An error is reported.
    

**Note**

This parameter is supported only for PolarDB for MySQL 8.0. For versions 5.6 and 5.7, statements always queue and wait.

loose\_ccl\_max\_waiting\_count

When `loose_ccl_mode` is set to WAIT, this parameter specifies the maximum number of SQL statements that can be queued for a single CCL rule. If this number is exceeded, an error is reported.

Value range: 0 to 65536. Default value: 0.

**Note**

This parameter is supported only for PolarDB for MySQL 5.7 and 8.0.

## CCL rule table

PolarDB uses the `concurrency_control` system table to store CCL rules. This table is automatically created when the system starts. The \`CREATE TABLE\` statement for this system table is as follows:

```
CREATE TABLE concurrency_control (
  Id bigint AUTO_INCREMENT NOT NULL,
  Type varchar(64),
  Schema_name varchar(64),
  Table_name varchar(64),
  Concurrency_count bigint NOT NULL,
  Keywords text,
  State enum('N','Y') COLLATE utf8_general_ci DEFAULT 'Y' NOT NULL,
  Ordered enum('N','Y') COLLATE utf8_general_ci DEFAULT 'N' NOT NULL,
  Digest varchar(64),
  Digest_text longtext,
  Extra mediumtext,
  PRIMARY KEY Rule_id(id)
) Engine=InnoDB STATS_PERSISTENT=0 CHARACTER SET utf8 COLLATE utf8_bin
  COMMENT='Concurrency control' TABLESPACE=mysql;
```

The following table describes the parameters.

**Parameter**

**Description**

Id

The ID of the CCL rule.

Type

The type of the SQL statement, such as SELECT, UPDATE, INSERT, DELETE, or DDL.

Schema\_name

The database name.

Table\_name

The table name in the database.

Concurrency\_count

The concurrency count.

**Note**

You can set `Concurrency_count` to 0 to implement an SQL blacklist. This prohibits this type of query from being executed.

Keywords

Keywords. Separate multiple keywords with semicolons (;).

State

Specifies whether the rule is enabled. Valid values:

-   **Y** (default): The rule is enabled.
    
-   **N**: The rule is disabled.
    

Ordered

Specifies whether to match keywords in order when multiple keywords are configured in the Keywords field. Valid values:

-   **N** (default): The keywords in the Keywords field do not need to be matched in order.
    
-   **Y**: The keywords in the Keywords field must be matched in order.
    

Digest

The 64-byte hash string generated from the `Digest_text`. For more information, see [STATEMENT\_DIGEST()](https://dev.mysql.com/doc/refman/8.0/en/encryption-functions.html?spm=a2c4g.11186623.0.0.47852829DNleBt#function_statement-digest).

Digest\_text

SQL statement features.

Extra

Other information.

## Manage CCL rules

To help you manage CCL rules, PolarDB provides the following six local stored procedures in the `DBMS_CCL` package:

-   add\_ccl\_rule: Adds a CCL rule that matches by TYPE, SCHEMA, TABLE, and KEYWORD.
    
    **Syntax**
    
    ```
    dbms_ccl.add_ccl_rule('<Type>','<Schema_name>','<Table_name>',<Concurrency_count>,'<Keywords>');
    ```
    
    **Examples**
    
    -   Add a CCL rule for the SELECT type. If the concurrency count reaches 10, subsequent statements are queued to wait or an error is reported.
        
        ```
        CALL dbms_ccl.add_ccl_rule('SELECT', '', '', 10, '');
        ```
        
    -   Add a CCL rule for SELECT statements that contain the keyword \`key1\`. If the concurrency count reaches 20, subsequent statements are queued to wait or an error is reported.
        
        ```
        CALL dbms_ccl.add_ccl_rule('SELECT', '', '', 20, 'key1');
        ```
        
    -   Add a CCL rule for SELECT statements that contain the keywords \`key1\`, \`key2\`, and \`key3\`. If the concurrency count reaches 20, subsequent statements are queued to wait or an error is reported. The order of the keywords does not matter.
        
        ```
        CALL dbms_ccl.add_ccl_rule('SELECT', '', '', 20, 'key1;key2;key3');
        ```
        
    -   Add a CCL rule for SELECT statements with the SCHEMA set to `test` and the TABLE set to `t`. If the concurrency count for these SELECT statements reaches 10, subsequent statements are queued to wait or an error is reported.
        
        ```
        CALL dbms_ccl.add_ccl_rule('SELECT', 'test', 't', 10, '');
        ```
        
    
-   add\_ccl\_digest\_rule: Adds a CCL rule that matches by DIGEST value.
    
    **Note**
    
    The `add_ccl_digest_rule` stored procedure is supported on the following database engine versions:
    
    -   PolarDB for MySQL 8.0.1 with a minor engine version of 8.0.1.1.31 or later.
        
    -   PolarDB for MySQL 8.0.2 with a minor engine version of 8.0.2.2.12 or later.
        
    
    **Syntax**
    
    ```
    dbms_ccl.add_ccl_digest_rule('<Schema_name>', '<Query>', <Concurrency_count>);
    ```
    
    **Examples**
    
    -   Add a CCL rule that matches the SQL statement `SELECT * FROM t1`. If the concurrency count reaches 10, the statement is queued or an error is reported.
        
        ```
        CALL dbms_ccl.add_ccl_digest_rule("", "SELECT * FROM t1", 10);
        ```
        
    -   Add a CCL rule for the `test` schema that matches the SQL statement `SELECT * FROM t1`. If the concurrency count reaches 10, the statement is queued or an error is reported.
        
        ```
        CALL dbms_ccl.add_ccl_digest_rule("test", "SELECT * FROM t1", 10);
        ```
        
    -   Add a CCL rule that matches the SQL statement `SELECT * FROM t1 WHERE col1 = 1`. If the concurrency count reaches 10, the statement is queued or an error is reported.
        
        ```
        CALL dbms_ccl.add_ccl_digest_rule("", "SELECT * FROM t1 WHERE col1 = 1", 10);
        ```
        
        **Note**
        
        If an SQL statement contains a constant, the rule matches the statement even if the constant value is different. For example, the preceding CCL rule also matches the SQL statement `SELECT * FROM t1 WHERE col1 = 2`.
        
    
-   add\_ccl\_digest\_rule\_by\_hash: Adds a Concurrency Control (CCL) rule that matches a DIGEST value. This procedure uses a pre-calculated DIGEST value instead of an SQL statement.
    
    **Note**
    
    The `add_ccl_digest_rule_by_hash` stored procedure is supported only on PolarDB for MySQL 8.0.1 with a minor engine version of 8.0.1.1.31 or later.
    
    **Syntax**
    
    ```
    dbms_ccl.add_ccl_digest_rule_by_hash('<Schema_name>', '<Digest>', <Concurrency_count>);
    ```
    
    **Examples**
    
    -   Add a CCL rule that matches the DIGEST value `533c0a9cf0cf92d2c26e7fe8821735eb4a72c409aaca24f9f281d137427bfa9a`. If the concurrency count reaches 10, the statement is queued to wait or an error is reported.
        
        ```
        CALL dbms_ccl.add_ccl_digest_rule_by_hash('', '533c0a9cf0cf92d2c26e7fe8821735eb4a72c409aaca24f9f281d137427bfa9a', 10);
        ```
        
        The value `533c0a9cf0cf92d2c26e7fe8821735eb4a72c409aaca24f9f281d137427bfa9a` is the DIGEST value calculated for `SELECT * FROM t1`. You can calculate this value by running the `SELECT statement_digest("SELECT * FROM t1")` command or retrieve it from other modules.
        
    -   Add a CCL rule for the `test` schema that matches the DIGEST value `533c0a9cf0cf92d2c26e7fe8821735eb4a72c409aaca24f9f281d137427bfa9a`. If the concurrency count reaches 10, the statement is queued to wait or an error is reported.
        
        ```
        CALL dbms_ccl.add_ccl_digest_rule_by_hash('test', '533c0a9cf0cf92d2c26e7fe8821735eb4a72c409aaca24f9f281d137427bfa9a', 10);
        ```
        
    
-   del\_ccl\_rule: Deletes a specified CCL rule.
    
    **Syntax**
    
    ```
    dbms_ccl.del_ccl_rule(<Id>);
    ```
    
    **Example**
    
    Delete the CC rule with ID 15.
    
    ```
    CALL dbms_ccl.del_ccl_rule(15);
    ```
    
    If the specified rule does not exist, the system reports a warning. You can run the `SHOW WARNINGS;` command to view the warning. For example:
    
    1.  Delete the CC rule with ID 100.
        
        ```
        CALL dbms_ccl.del_ccl_rule(100);
        ```
        
        The following result is returned:
        
        ```
        Query OK, 0 rows affected, 2 warnings (0.00 sec)
        ```
        
    2.  Run the following command to view the warning.
        
        ```
        SHOW WARNINGS;
        ```
        
        The following is returned:
        
        ```
        +---------+------+----------------------------------------------------+
        | Level   | Code | Message                                            |
        +---------+------+----------------------------------------------------+
        | Warning | 7517 | Concurrency control rule 100 is not found in table |
        | Warning | 7517 | Concurrency control rule 100 is not found in cache |
        +---------+------+----------------------------------------------------+
        ```
        
    
    **Note**
    
    In the preceding example, PolarDB for MySQL 8.0 has a `Code` of `7517`, PolarDB for MySQL 5.7 has a `Code` of `3267`, and PolarDB for MySQL 5.6 has a `Code` of `3045`.
    
-   show\_ccl\_rule: Displays the enabled CCL rules in memory.
    
    **Syntax**
    
    ```
    dbms_ccl.show_ccl_rule();
    ```
    
    **Example**
    
    ```
    CALL dbms_ccl.show_ccl_rule();
    ```
    
    The following result is returned:
    
    ```
    +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
    | ID   | TYPE   | SCHEMA | TABLE | STATE | ORDER | CONCURRENCY_COUNT | MATCHED | RUNNING | WAITING  | KEYWORDS |
    +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
    |   17 | SELECT | test   | t     | Y     | N     |                30 |       0 |       0 |        0 |          |
    |   16 | SELECT |        |       | Y     | N     |                20 |       0 |       0 |        0 | key1     |
    |   18 | SELECT |        |       | Y     | N     |                10 |       0 |       0 |        0 |          |
    +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
    ```
    
    **Note**
    
    The following table describes the MATCHED, RUNNING, and WAITING parameters.
    
    -   MATCHED: The number of times the rule is matched.
        
    -   RUNNING: The number of threads concurrently running for this rule.
        
    -   WAITING: The number of threads waiting to run for this rule.
        
    
-   You can use the UPDATE statement to change the ID of a CCL rule to adjust its priority.
    
    **Syntax**
    
    ```
    UPDATE mysql.concurrency_control SET ID = xx WHERE ID = xx;
    ```
    
    **Example**
    
    1.  Run the following command to view the enabled CCL rules in memory.
        
        ```
        CALL dbms_ccl.show_ccl_rule();
        ```
        
        The following result is returned:
        
        ```
        +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
        | ID   | TYPE   | SCHEMA | TABLE | STATE | ORDER | CONCURRENCY_COUNT | MATCHED | RUNNING | WAITING  | KEYWORDS |
        +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
        |   17 | SELECT | test   | t     | Y     | N     |                30 |       0 |       0 |        0 |          |
        |   16 | SELECT |        |       | Y     | N     |                20 |       0 |       0 |        0 | key1     |
        |   18 | SELECT |        |       | Y     | N     |                10 |       0 |       0 |        0 |          |
        +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
        ```
        
    2.  Run the following command to adjust the priority of the CCL rule with ID 17 by changing its ID to 20.
        
        ```
        UPDATE mysql.concurrency_control SET ID = 20 WHERE ID = 17;
        ```
        
    3.  Run the following command to view the updated list of enabled CCL rules.
        
        ```
        CALL dbms_ccl.show_ccl_rule();
        ```
        
        The following result is returned:
        
        ```
        +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
        | ID   | TYPE   | SCHEMA | TABLE | STATE | ORDER | CONCURRENCY_COUNT | MATCHED | RUNNING | WAITING  | KEYWORDS |
        +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
        |   16 | SELECT |        |       | Y     | N     |                20 |       0 |       0 |        0 | key1     |
        |   18 | SELECT |        |       | Y     | N     |                10 |       0 |       0 |        0 |          |
        |   20 | SELECT | test   | t     | Y     | N     |                30 |       0 |       0 |        0 |          |
        +------+--------+--------+-------+-------+-------+-------------------+---------+---------+----------+----------+
        ```
        
    
-   flush\_ccl\_rule: If you modify a CCL rule by directly modifying the `concurrency_control` table, you must run the following command to apply the change.
    
    **Syntax**
    
    ```
    dbms_ccl.flush_ccl_rule();
    ```
    
    **Example**
    
    You can adjust the priority of a destination rule using an UPDATE statement to modify its CC rule ID.
    
    ```
    UPDATE mysql.concurrency_control SET CONCURRENCY_COUNT = 15 WHERE Id = 18;
    ```
    
    The following output is returned:
    
    ```
    Query OK, 1 row affected (0.00 sec)
    Rows matched: 1  Changed: 1  Warnings: 0
    ```
    
    Run the following command to apply the setting.
    
    ```
    CALL dbms_ccl.flush_ccl_rule();
    ```
    
    The following output is returned:
    
    ```
    Query OK, 0 rows affected (0.00 sec)​
    ```
    

## Functional testing

1.  Create CCL rules based on three different dimensions:
    
    ```
    CALL dbms_ccl.add_ccl_rule('SELECT', 'test', 'sbtest1', 3, '');  // Use a SELECT statement to operate on the sbtest1 table in the test database. The concurrency count is 3.
    CALL dbms_ccl.add_ccl_rule('SELECT', '', '', 2, 'sbtest2');       // The SELECT statement contains the keyword sbtest2. The concurrency count is 2.
    CALL dbms_ccl.add_ccl_rule('SELECT', '', '', 2, '');            // A SELECT statement. The concurrency count is 2.
    ```
    
2.  Test using Sysbench in the following scenario:
    
    -   64 threads
        
    -   4 tables
        
    -   select.lua
        
3.  View the concurrency count for the rules as follows:
    
    ```
    CALL dbms_ccl.show_ccl_rule();
    ```
    
    The following output is returned:
    
    ```
    +------+--------+--------+---------+-------+-------+-------------------+---------+---------+----------+----------+
    | ID   | TYPE   | SCHEMA | TABLE   | STATE | ORDER | CONCURRENCY_COUNT | MATCHED | RUNNING | WAITING  | KEYWORDS |
    +------+--------+--------+---------+-------+-------+-------------------+---------+---------+----------+----------+
    |   20 | SELECT | test   | sbtest1 | Y     | N     |                 3 |     389 |       3 |        9 |          |
    |   21 | SELECT |        |         | Y     | N     |                 2 |     375 |       2 |       14 | sbtest2  |
    |   22 | SELECT |        |         | Y     | N     |                 2 |     519 |       2 |       34 |          |
    +------+--------+--------+---------+-------+-------+-------------------+---------+---------+----------+----------+
    3 rows in set (0.00 sec)
    ```
    
    Check the RUNNING column to verify that the number of concurrent executions is as expected.
