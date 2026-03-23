AliSQL provides the sequence engine feature. This feature allows you to use a Sequence engine on your RDS instance to generate sequence values in an efficient manner.

## Introduction

In most cases, unique sequence values that monotonically increase are required for primary keys in a single-node persistent database system, for globally unique identifiers (GUIDs) in a distributed persistent database system, and for idempotence among multiple persistent database systems. Each database engine uses a unique method to ensure that sequence values are unique. For example, MySQL provides the AUTO\_INCREMENT attribute, and Oracle and SQL Server provide the SEQUENCE attribute.

In MySQL databases, the process of using the AUTO\_INCREMENT attribute to encapsulate unique sequence values, such as dates and usernames, is time-consuming. The following methods can be used to generate unique sequence values in an efficient manner:

-   Use an application or a proxy to generate sequence values. A drawback of this method lies in that the statuses of the sequence values are sent to the application. This drawback makes scaling more complicated.
    
-   Use a simulated table to generate sequence values. This method requires you to install middleware. The middleware is used to encapsulate and simplify the logic that is used to obtain the generated sequence values.
    

A Sequence engine is compatible with various database engines and can help generate sequence values in a more efficient manner.

A Sequence engine is compatible with various storage engines that are used with MySQL. However, the underlying persistent data is still stored by using existing storage engines, such as InnoDB and MyISAM. This ensures compatibility with third-party tools, such as XtraBackup. Therefore, a Sequence engine is used only as a logical engine.

A Sequence engine uses Sequence Handler to access sequence objects. This way, you can increase the value of a sequence by using the NEXTVAL operator and manage the cached data. The data is sent to the underlying base table engine. You can access the data from the underlying base table engine based on your business requirements.

## Prerequisites

The RDS instance runs one of the following MySQL versions:

-   MySQL 8.0 in a minor engine version of 20190816 or later
    
-   MySQL 5.7 in a minor engine version of 20210430 or later
    
-   MySQL 5.6 in a minor engine version of 20170901 or later
    

**Note**

RDS instances that run RDS Enterprise Edition are not supported.

## Limits

-   A Sequence engine does not support subqueries or JOIN queries.
    
-   You can use the `SHOW CREATE TABLE` to access a sequence.
    
-   When you create a table, you cannot specify a Sequence engine. If you want to specify a Sequence engine for a table, you must execute the statement that is described in the [Create a sequence](#section-vtj-6nh-09h) section of this topic.
    

## Create a sequence

To create a sequence, execute the following statement:

```
CREATE SEQUENCE [IF NOT EXISTS] <Database name>.<Sequence name>
   [START WITH <constant>]
   [MINVALUE <constant>]
   [MAXVALUE <constant>]
   [INCREMENT BY <constant>]
   [CACHE <constant> | NOCACHE]
   [CYCLE | NOCYCLE]
  ;
```

**Note**

When you execute the preceding statement, you must configure the parameters that are enclosed in brackets (\[\]).

The following table describes the parameters.

**Parameter**

**Description**

START WITH

The start value of the sequence.

MINVALUE

The minimum value of the sequence.

MAXVALUE

The maximum value of the sequence.

**Note**

If the NOCYCLE option is specified for the sequence, the following error is reported when the maximum value is reached:

```
ERROR HY000: Sequence 'db.seq' has been run out.
```

INCREMENT BY

The increment at which the value of the sequence increases.

CACHE/NOCACHE

The size of the cache. You can specify a larger cache size to improve the performance of your RDS instance. If your RDS instance is restarted, the sequence values that are stored in the cache are lost.

CYCLE/NOCYCLE

Specifies whether the value of the sequence is reset to the minimum value that is specified by the MINVALUE parameter after the maximum value is reached. Valid values:

-   CYCLE: The value of the sequence is reset to the minimum value after the maximum value is reached.
    
-   NOCYCLE: The value of the sequence is not reset to the minimum value after the maximum value is reached.
    

Examples:

```
create sequence s
       start with 1
       minvalue 1
       maxvalue 9999999
       increment by 1
       cache 20
       cycle;
```

If you want to use the mysqldump extension to back up your RDS instance, you can create a sequence table and insert an initial row into the sequence table. Examples:

```
CREATE TABLE schema.sequence_name (  `currval` bigint(21) NOT NULL COMMENT 'current value',
  `nextval` bigint(21) NOT NULL COMMENT 'next value',
  `minvalue` bigint(21) NOT NULL COMMENT 'min value',
  `maxvalue` bigint(21) NOT NULL COMMENT 'max value',
  `start` bigint(21) NOT NULL COMMENT 'start value',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache` bigint(21) NOT NULL COMMENT 'cache size',
  `cycle` bigint(21) NOT NULL COMMENT 'cycle state',
  `round` bigint(21) NOT NULL COMMENT 'already how many round'
) ENGINE=Sequence DEFAULT CHARSET=latin1;

INSERT INTO schema.sequence_name VALUES(0,0,1,9223372036854775807,1,1,10000,1,0);
COMMIT;
```

## Introduction to sequence tables

Sequences are stored in the tables that are created by using the default storage engine. When you query sequences, the system returns the tables that are created by using the default storage engine. Examples:

```
SHOW CREATE TABLE schema.sequence_name;

CREATE TABLE schema.sequence_name (
  `currval` bigint(21) NOT NULL COMMENT 'current value',
  `nextval` bigint(21) NOT NULL COMMENT 'next value',
  `minvalue` bigint(21) NOT NULL COMMENT 'min value',
  `maxvalue` bigint(21) NOT NULL COMMENT 'max value',
  `start` bigint(21) NOT NULL COMMENT 'start value',
  `increment` bigint(21) NOT NULL COMMENT 'increment value',
  `cache` bigint(21) NOT NULL COMMENT 'cache size',
  `cycle` bigint(21) NOT NULL COMMENT 'cycle state',
  `round` bigint(21) NOT NULL COMMENT 'already how many round'
) ENGINE=Sequence DEFAULT CHARSET=latin1
```

## Query syntax

A Sequence engine supports the following syntax:

-   `SELECT nextval(<Sequence name>),currval(<Sequence name>) FROM <Sequence name>;`
    
    **Note**
    
    The syntax is supported for MySQL 8.0 and MySQL 5.7.
    
-   `SELECT <Sequence name>.currval, <Sequence name>.nextval FROM dual;`
    
    **Note**
    
    The syntax is supported for MySQL 8.0, MySQL 5.7, and MySQL 5.6.
    

Examples:

```
mysql> SELECT test.currval, test.nextval from dual;
+--------------+--------------+
| test.currval | test.nextval |
+--------------+--------------+
|           24 |           25 |
+--------------+--------------+
1 row in set (0.03 sec)
            
```

**Note**

Before you query the values of a new sequence, you must execute the following statement to call NEXTVAL for the sequence. Otherwise, the `Sequence 'xxx' is not yet defined in current session` error message is displayed.

Example:

`SELECT <Sequence name>.nextval FROM dual;`
