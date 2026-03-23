Hologres is compatible with PostgreSQL. This topic describes the SQL statements supported by Hologres.

**Note**

For more information about how to use the SQL statements that are compatible with PostgreSQL, see [official PostgreSQL documentation](https://www.postgresql.org/docs/11/index.html).

## **A**

**SQL statement**

**Description**

[ALTER TABLE](/help/en/hologres/developer-reference/alter-table#concept-2463316)

Modifies a table. Modifications to a parent partitioned table are automatically applied to the child partitioned tables. For information about how to modify partitioned tables and foreign tables, see the following topics:

-   [ALTER PARTITION TABLE](/help/en/hologres/developer-reference/alter-partition-table#concept-2463520)
    
-   [ALTER FOREIGN TABLE](/help/en/hologres/developer-reference/alter-foreign-table#concept-2463768)
    

[ALTER ROLE](https://www.postgresql.org/docs/11/sql-alterrole.html)

Modifies a database role.

[ANALYZE](/help/en/hologres/developer-reference/analyze-and-auto-analyze#section-fl2-m7d-16g)

Updates statistics.

[ALTER DATABASE](/help/en/hologres/developer-reference/alter-database)

Modifies a database.

[ALTER DEFAULT PRIVILEGES](https://www.postgresql.org/docs/11/sql-alterdefaultprivileges.html)

Defines default access privileges.

[ALTER FOREIGN DATA WRAPPER](https://www.postgresql.org/docs/11/sql-alterforeigndatawrapper.html)

Modifies a foreign data wrapper (FDW).

[ALTER FOREIGN TABLE](https://www.postgresql.org/docs/11/sql-alterforeigntable.html)

Modifies a foreign table.

[ALTER GROUP](https://www.postgresql.org/docs/11/sql-altergroup.html)

Modifies a group.

[ALTER LANGUAGE](https://www.postgresql.org/docs/11/sql-alterlanguage.html)

Changes the procedural language.

[ALTER SCHEMA](https://www.postgresql.org/docs/11/sql-alterschema.html)

Modifies a schema.

[ALTER SERVER](https://www.postgresql.org/docs/11/sql-alterserver.html)

Modifies an external server.

[ALTER USER](https://www.postgresql.org/docs/11/sql-alteruser.html)

Chanages a database role.

[ALTER USER MAPPING](https://www.postgresql.org/docs/11/sql-alterusermapping.html)

Modifies a user mapping.

[ALTER VIEW](https://www.postgresql.org/docs/11/sql-alterview.html)

Changes a view.

## **B**

**SQL statement**

**Description**

[BEGIN](https://www.postgresql.org/docs/11/sql-begin.html)

Starts a transaction. The `BEGIN` statement can be used with only data definition language (DDL) statements.

## **C**

**SQL statement**

**Description**

[CALL](https://www.postgresql.org/docs/16/sql-call.html)

Calls a stored procedure or function.

[COMMIT](https://www.postgresql.org/docs/11/sql-commit.html)

Commits a transaction. The `COMMIT` statement can be used with only DDL statements.

[CREATE DATABASE](/help/en/hologres/developer-reference/create-database)

Creates a database.

[CREATE EXTENSION](/help/en/hologres/developer-reference/extensions)

Creates an extension.

[CREATE FOREIGN DATA WRAPPER](https://www.postgresql.org/docs/11/sql-createforeigndatawrapper.html)

Creates an FDW.

[CREATE FOREIGN TABLE](/help/en/hologres/developer-reference/create-foreign-table)

Creates a foreign table. Hologres supports only foreign tables that are sourced from MaxCompute.

[CREATE GROUP](https://www.postgresql.org/docs/11/sql-creategroup.html)

Creates a user group.

[CREATE SERVER](https://www.postgresql.org/docs/11/sql-createserver.html)

Creates an external server.

[CREATE TABLE](/help/en/hologres/developer-reference/create-tables)

Creates a table. Hologres supports only specific features of the `CREATE TABLE` statement in PostgreSQL. The following features are not supported:

-   UNLOGGED
    
-   TEMP
    
-   IF NOT EXISTS
    
-   LIKE
    
-   CHECK
    
-   DEFAULT
    
-   GENERATED
    
-   UNIQUE
    
-   EXCLUDE
    
-   FOREIGN KEY
    
-   DEFERRABLE
    
-   WITH OIDS
    
-   GLOBAL
    
-   LOCAL
    

Hologres supports only list partitions. The partition fields that you specify in PARTITION BY LIST must be of the STRING type and contain unique values.

[CREATE VIEW](/help/en/hologres/developer-reference/view)

Creates a view.

[CREATE USER](https://www.postgresql.org/docs/16/sql-createuser.html)

Creates a user.

[CREATE USER MAPPING](https://www.postgresql.org/docs/11/sql-createusermapping.html)

Creates a user mapping.

[CLOSE](https://www.postgresql.org/docs/11/sql-close.html)

Disables a cursor.

[COMMENT](https://www.postgresql.org/docs/11/sql-comment.html)

Defines or modifies the comment of an object.

[CREATE LANGUAGE](https://www.postgresql.org/docs/11/sql-createlanguage.html)

Creates a procedural language.

[CREATE MATERIALIZED VIEW](https://www.postgresql.org/docs/11/sql-creatematerializedview.html)

Creates a materialized view.

[CREATE ROLE](https://www.postgresql.org/docs/11/sql-createrole.html)

Creates a database role.

[CREATE SCHEMA](https://www.postgresql.org/docs/11/sql-createschema.html)

Creates a schema.

[CREATE TABLE AS](https://www.postgresql.org/docs/11/sql-createtableas.html)

Creates a table from query results.

## **D**

**SQL statement**

**Description**

[DROP DATABASE](/help/en/hologres/developer-reference/drop-database)

Drops a database.

[DROP FOREIGN DATA WRAPPER](https://www.postgresql.org/docs/11/sql-dropforeigndatawrapper.html)

Drops an FDW.

[DROP FOREIGN TABLE](/help/en/hologres/developer-reference/drop-foreign-table)

Drops a foreign table.

[DROP GROUP](https://www.postgresql.org/docs/11/sql-dropgroup.html)

Drops a user group.

[DROP OWNED](https://www.postgresql.org/docs/11/sql-drop-owned.html)

Drops the database objects that are owned by a database role.

[DROP ROLE](https://www.postgresql.org/docs/11/sql-droprole.html)

Drops a role.

[DROP SERVER](https://www.postgresql.org/docs/11/sql-dropserver.html)

Drops an external server.

[DROP TABLE](/help/en/hologres/developer-reference/drop-table)

Drops a table.

[DROP USER](https://www.postgresql.org/docs/11/sql-dropuser.html)

Drops a user.

[DROP USER MAPPING](https://www.postgresql.org/docs/11/sql-dropusermapping.html)

Drops a user mapping.

[DEALLOCATE](https://www.postgresql.org/docs/11/sql-deallocate.html)

Releases a prepared statement.

[DELETE](https://www.postgresql.org/docs/11/sql-delete.html)

Deletes a row of data from a table.

[DISCARD](https://www.postgresql.org/docs/11/sql-discard.html)

Clears the previous session.

[DROP MATERIALIZED VIEW](https://www.postgresql.org/docs/11/sql-dropmaterializedview.html)

Drops a materialized view.

[DROP SCHEMA](https://www.postgresql.org/docs/11/sql-dropschema.html)

Drops a schema.

[DROP VIEW](https://www.postgresql.org/docs/11/sql-dropview.html)

Drops a view.

## **E**

**SQL statement**

**Description**

[END](https://www.postgresql.org/docs/11/sql-end.html)

Commits a transaction. The `END` statement can be used with only DDL statements.

[EXPLAIN](/help/en/hologres/developer-reference/explain-and-explain-analyze#3e21f320dfeyp)

Views an execution plan.

[EXECUTE](https://www.postgresql.org/docs/11/sql-execute.html)

Executes a prepared statement.

## F

**SQL statement**

**Description**

[FETCH](https://www.postgresql.org/docs/11/sql-fetch.html)

Uses a cursor to search for rows from a query.

## **G**

**SQL statement**

**Description**

[GRANT](https://www.postgresql.org/docs/11/sql-grant.html)

Defines access privileges.

## **I**

**SQL statement**

**Description**

[INSERT](/help/en/hologres/developer-reference/insert)

Inserts data into a table.

## **P**

**SQL statement**

**Description**

[PREPARE](https://www.postgresql.org/docs/11/sql-prepare.html)

Prepares a statement for execution.

## **R**

**SQL statement**

**Description**

[ROLLBACK](https://www.postgresql.org/docs/11/sql-rollback.html)

Rolls back a transaction.

[REASSIGN OWNED](https://www.postgresql.org/docs/11/sql-reassign-owned.html)

Changes the ownership of database objects that are owned by a database role.

[RELEASE SAVEPOINT](https://www.postgresql.org/docs/11/sql-release-savepoint.html)

Destroys a previously defined savepoint.

[RESET](https://www.postgresql.org/docs/11/sql-reset.html)

Sets runtime parameters to their default values.

[REVOKE](https://www.postgresql.org/docs/11/sql-revoke.html)

Revokes access privileges.

## **S**

**SQL statement**

**Description**

[SELECT](/help/en/hologres/developer-reference/select)

Queries data from a table. Hologres supports only specific features of the `SELECT` statement in PostgreSQL. The following features are not supported:

-   WITH RECURSIVE
    
-   TABLESAMPLE
    
-   LOCKING
    
-   ONLY
    

[SET](https://www.postgresql.org/docs/11/sql-set.html)

Configures Grand Unified Configuration (GUC) parameters. For more information, see [GUC parameters](/help/en/hologres/developer-reference/guc-parameters#task-2165646).

[SAVEPOINT](https://www.postgresql.org/docs/11/sql-savepoint.html)

Defines a new savepoint in the current transaction.

[SELECT INTO](https://www.postgresql.org/docs/11/sql-selectinto.html)

Defines a new table from query results.

[SET ROLE](https://www.postgresql.org/docs/11/sql-set-role.html)

Sets a session identifier for the current user.

[SET SESSION AUTHORIZATION](https://www.postgresql.org/docs/11/sql-set-session-authorization.html)

Sets a session user identifier and a current user identifier for the current session.

[SET TRANSACTION](https://www.postgresql.org/docs/11/sql-set-transaction.html)

Sets the characteristics of the current transaction.

[SHOW](https://www.postgresql.org/docs/11/sql-show.html)

Shows the value of a runtime parameter.

[START TRANSACTION](https://www.postgresql.org/docs/11/sql-start-transaction.html)

Starts a transaction block.

## T

**SQL statement**

**Description**

[TRUNCATE](https://www.postgresql.org/docs/11/sql-truncate.html)

Clears all data from a table or a group of tables.

## **U**

**SQL statement**

**Description**

[UPDATE](https://www.postgresql.org/docs/11/sql-update.html)

Updates a row in a table.

## **V**

**SQL statement**

**Description**

[VACUUM](https://www.postgresql.org/docs/11/sql-vacuum.html)

Collects garbage and optionally analyzes a database.

[VALUES](https://www.postgresql.org/docs/11/sql-values.html)

Calculates a set of rows.
