PolarDB-X is highly compatible with the MySQL protocol and the SQL syntax of MySQL. However, the architecture of a distributed database differs from that of a standalone database. Therefore, specific limits are imposed on the SQL statements used in PolarDB-X.

## Limits on common identifiers

**Identifier**

**Maximum length**

**Limits**

Database

32

The value can contain uppercase and lowercase letters, digits, and underscores (\_).

Sequence

128

The value can contain only characters that are encoded by using the Unicode standard.

Partition

16

Table

64

Column

Partition Key

View

Variables

Constraint

## Limits on resource usage

**Resource**

**Type**

**Quantity**

Logical resources

Database

Each cluster can contain a maximum of 32 databases.

Table

Each database can contain a maximum of 8,192 tables.

Partition

Each table can contain a maximum of 8,192 partitions.

Column

Each table can contain a maximum of 1,017 columns.

Sequence

Each database supports a maximum of 16,384 sequences.

View

Each database supports a maximum of 8,192 views.

Global Index

Each table supports a maximum of 32 global indexes.

User

Each database supports a maximum of 2,048 users. A username contains a maximum of 255 characters.

Physical resources

The maximum number of connections supported by a compute node in a database

By default, a compute node supports a maximum of 20,000 connections.

The maximum number of compute nodes that can be added to a database at a time

By default, you can add a maximum of 99 nodes at a time. If you want to add more nodes at a time, contact Alibaba Cloud technical support.

The maximum number of storage nodes that can be added to a database at a time

## Limits on SQL syntax

**Category**

**Operation**

**Limit**

Custom operations

User-defined function

Supported.

Custom data type

Not supported.

Stored procedure

Supported.

Trigger

Not supported.

Cursor

Supported.

View

Supported.

DDL

CREATE TABLE ... LIKE ...

Partitioned tables are not supported.

CREATE TABLE ... SELECT ...

Partitioned tables are not supported.

CREATE TABLE ... Generated Column ...

Supported.

RENAME TABLE

Supported.

ALTER TABLE

Supported.

MERGE, SPLIT, ADD and DROP statements on subpartition tables

Not supported.

MERGE, SPLIT, ADD and DROP statements on partitioned index tables

Not supported.

Foreign key

Supported.

DML

STRAIGHT\_JOIN

Not supported.

NATURAL JOIN

Not supported.

INSERT DELAYED

Not supported.

Variable references or operations, such as SET @c=1, @d=@c+1; SELECT @c, @d

Not supported.

LOAD XML

Not supported.

UPDATE

In a logical execution, the update behavior of a column that contains the `ON UPDATE CURRENT_TIMESTAMP` attribute is different from the default behavior in MySQL:

-   In PolarDB-X, each time a logical `UPDATE` is executed, the column is updated using `CURRENT_TIMESTAMP` regardless of whether other columns are updated.
    
-   In MySQL, the column is not updated if other columns are not updated.
    

DQL

Subqueries included in the HAVING clause.

Not supported.

Subqueries included in JOIN operations with the ON clause

Not supported.

The Subquery as Scalar Operand

Supported.

Database management

SHOW WARNINGS

The combination of LIMIT and COUNT is not supported for this statement.

SHOW ERRORS

The combination of LIMIT and COUNT is not supported for this statement.

HELP

Not supported.

Operator

:=

Not supported.

Function

Full-text search functions

Not supported.

XML functions

Not supported.

Functions used with global transaction identifiers

Not supported.

Type

Spatial data types, such as GEOMETRY and LINESTRING

Not supported.

JSON data types

Columns of JSON data types cannot be used as partition keys.

Keyword

MILLISECOND

Not supported.

MICROSECOND

Not supported.
