This FAQ covers common SQL errors in Hologres, organized by error category. Find the error code or message that matches your situation, then follow the recommended fix.

## Quick reference

**Error code**

**Common message**

**Section**

HG\_ERRCODE\_FDW\_ERROR / ERRCODE\_FDW\_ERROR

`failed to import foreign schema from odps`

[Foreign data wrapper (FDW) errors](#55f0d9c48bxve)

ERRCODE\_UNIQUE\_VIOLATION

`duplicate key value violates unique constraint`

[Unique constraint violations](#txwzt)

ERRCODE\_CHECK\_VIOLATION

`violates partition constraint`

[Partition constraint violations](#pApCi)

ERRCODE\_NOT\_NULL\_VIOLATION

`violates not-null constraint`

[NOT NULL constraint violations](#c5jiJ)

ERRCODE\_UNDEFINED\_TABLE

`Table not found`

[Undefined table errors](#E8kUE)

ERRCODE\_QUERY\_CANCELED

`canceling statement due to statement timeout`

[Query canceled errors](#yBxB9)

ERRCODE\_FEATURE\_NOT\_SUPPORTED

Various

[Unsupported feature errors](#T5Qbe)

ERRCODE\_UNDEFINED\_OBJECT

`does not exist`

[Undefined object errors](#dAnby)

ERRCODE\_INSUFFICIENT\_PRIVILEGE

`permission denied`

[Permission errors](#NmbEN)

ERRCODE\_OUT\_OF\_MEMORY

`exceeded memory limitation`

[Out-of-memory errors](#EGr7f)

ERRCODE\_DATATYPE\_MISMATCH

`Datasets has different schema`

[Data type mismatch errors](#CRFty)

ERRCODE\_DIVISION\_BY\_ZERO

Division by zero

[Division by zero errors](#52326b9ac8oa6)

ERRCODE\_STRING\_DATA\_RIGHT\_TRUNCATION

`value too long for type character varying`

[String truncation errors](#50efc7e3b5s90)

ERRCODE\_PROGRAM\_LIMIT\_EXCEEDED

`Exceeds the partition limitation of 512`

[Program limit errors](#GrgFW)

ERRCODE\_SYNTAX\_ERROR

`syntax error at or near`

[Syntax errors](#SgVqu)

ERRCODE\_UNDEFINED\_FUNCTION

`function xxx does not exist`

[Undefined function errors](#jfAGY)

ERRCODE\_DUPLICATE\_OBJECT

`already exists`

[Duplicate object errors](#vD5yC)

ERRCODE\_INVALID\_TEXT\_REPRESENTATION

`invalid input syntax`

[Invalid input errors](#aMxbj)

ERRCODE\_BAD\_COPY\_FILE\_FORMAT

`missing data for column`

[COPY format errors](#rm1fa)

ERRCODE\_UNDEFINED\_COLUMN

`INSERT has more expressions than target columns`

[Column count mismatch errors](#uijFV)

ERRCODE\_NUMERIC\_VALUE\_OUT\_OF\_RANGE

`out of range` / `numeric field overflow`

[Numeric range errors](#HhTxW)

ERRCODE\_INTERNAL\_ERROR

`internal error`

[Internal errors](#NhoyZ)

ERRCODE\_CHARACTER\_NOT\_IN\_REPERTOIRE / ERRCODE\_UNTRANSLATABLE\_CHARACTER

`invalid byte sequence for encoding "UTF8"`

[Character encoding errors](#Om9uC)

N/A

`column "xxx" must appear in the GROUP BY clause`

[Grouping errors](#vVCmD)

N/A

`relation "xxxx" already exists`

[Duplicate table errors](#FgGD8)

N/A

`SET_TABLE_PROPERTY and CREATE TABLE statement are not in the same transaction`

[Transaction state errors](#Q5G42)

N/A

`column reference "xxx" is ambiguous`

[Ambiguous column errors](#okBoA)

N/A

`column "xxx" specified more than once`

[Duplicate column errors](#h3UQl)

ERRCODE\_AMBIGUOUS\_FUNCTION

Ambiguous function call

[Ambiguous function errors](#81e6411026kj9)

N/A

`invalid definition of a numeric type`

[Invalid column definition errors](#i8CHx)

N/A

`cannot cast type date to integer`

[Type cast errors](#SnrTp)

N/A

`schema "xxxx" does not exist`

[Schema errors](#XndRB)

N/A

`remaining connection slots are reserved`

[Connection limit errors](#a2726199c0bqb)

N/A

`Column type: information_schema.sql_identifier`

[System table compatibility errors](#b0ac9f47dd7nr)

N/A

`query length xxxxx exceeded the maximum 102400`

[Query length errors](#GeI3a)

N/A

`Modify record by primary key is not on this table`

[Flink integration errors](#giutM)

N/A

`BinaryArray cannot contain more than 2147483646 bytes`

[Large field errors](#title-yd3-bjn-x9f)

N/A

`Sequence is used out`

[SERIAL type errors](#h2-0f7e8d62)

N/A

Field names starting with a digit

[Field names starting with a digit](#title-skh-rh2-mjx)

N/A

`cannot drop table because other objects depend on it`

[Table dependency errors](#22eac74bfdycg)

* * *

## Foreign data wrapper (FDW) errors

### `failed to import foreign schema from odps: Can't find file system factory`

Hologres does not support queries on MaxCompute external tables (accessed as foreign tables in Hologres). Create a MaxCompute internal table instead.

### `failed to import foreign schema from odps: Authorization Failed: xxx`

Your account lacks the required permissions on the MaxCompute table. Grant the necessary permissions to the account. For details, see [Manage user permissions by using commands](/help/en/maxcompute/user-guide/manage-user-permissions-by-using-commands).

### `failed to import foreign schema from odps: Table not found -xxx`

The table does not exist in MaxCompute. Verify that the table name and project are correct, then confirm the table exists in MaxCompute before querying it from Hologres.

* * *

## Unique constraint violations

### `Update row with Key (id)=(xxxx) multiple times` or `duplicate key value violates unique constraint`

Duplicate primary key values exist in the data during an UPDATE, INSERT ON CONFLICT, or INSERT operation. The fix depends on the context:

-   **INSERT operation:** Switch to `INSERT INTO xx ON CONFLICT` to deduplicate primary key values. For details, see [INSERT ON CONFLICT(UPSERT)](/help/en/hologres/developer-reference/insert-on-conflict#section-q0g-1ho-v48).
    
-   **INSERT ON CONFLICT operation:** The source data itself contains duplicates. Follow the troubleshooting steps in the "Errors and troubleshooting" section of [INSERT ON CONFLICT(UPSERT)](/help/en/hologres/developer-reference/insert-on-conflict#section-q0g-1ho-v48).
    
-   **TTL-related:** If time to live (TTL) is configured for the table and has expired but the data has not been deleted, use the `hg_remove_duplicated_pk` function to clean up. See the "Errors and troubleshooting" section in [INSERT ON CONFLICT(UPSERT)](/help/en/hologres/developer-reference/insert-on-conflict#section-q0g-1ho-v48).
    

* * *

## Partition constraint violations

### `ERROR: new row for relation violates partition constraint`

The partition key value of the incoming data does not match the partition key value defined for the child table. For example, the child table accepts `20240110`, but the query fetches records with other dates:

```
CREATE TABLE public.tbl_20240110 PARTITION OF public.tbl FOR VALUES IN('20240110');

INSERT INTO public.tbl_20240110 SELECT * FROM odps_tbl where sale_date >'20240110';

-- error: new row for relation "tbl_20240110" violates partition constraint
```

Filter the source data so only matching partition key values are written to each child table.

* * *

## NOT NULL constraint violations

### `null value in column "xxx" violates not-null constraint`

NULL values are being written to a column with a NOT NULL constraint. Remove or replace the NULL values in the source data before writing.

* * *

## Undefined table errors

### `Dispatch query failed: Table not found`

This typically happens when a table's metadata has not been updated, or when a TRUNCATE or DROP operation runs on the table during a query. Use the [Query Insight](/help/en/hologres/user-guide/query-insights) feature in HoloWeb to check whether a TRUNCATE or DROP ran during your query, then retry. Avoid running data definition language (DDL) statements that conflict with active queries.

* * *

## Query canceled errors

### `ERROR: canceling statement due to statement timeout`

A client-side timeout is configured and the query exceeded it. Either optimize the query to run faster or increase the timeout value. For timeout configuration, see [Manage queries](/help/en/hologres/user-guide/manage-queries).

### `ERROR: Query:[xxx] Get result failed: canceling statement due to user request`

The query was canceled, usually because a TRUNCATE or DROP ran on the table. Use the [Query Insight](/help/en/hologres/user-guide/query-insights) feature in HoloWeb to check for conflicting DDL statements. Avoid running DDL statements during active queries.

### `query is cancelled Cannot find index full ID:xxx (table id: x, index id: x) in storages or it is deleting`

A TRUNCATE or DROP changed the table ID while the query was running. Use [Query Insight](/help/en/hologres/user-guide/query-insights) to check whether a TRUNCATE or DROP ran during the query.

* * *

## Unsupported feature errors

### `Feature not supported: insert into parent table`

Data cannot be written directly to a parent partitioned table. Write to the specific child partitioned table instead. For details, see [CREATE PARTITION TABLE](/help/en/hologres/developer-reference/create-partition-table).

### `SELECT INTO is not supported now`

Hologres does not support `SELECT INTO`. Use `INSERT INTO SELECT` instead. For details, see [INSERT](/help/en/hologres/developer-reference/insert).

### `ALTER TABLE CHANGE OWNER is not supported in SLPM`

In the schema-level permission model (SLPM), table owner changes through ALTER TABLE are not allowed. SLPM grants owner permissions through user groups. To revoke a user's permissions, remove the user from the user group. See the "Remove a user from a user group" section in [Use the SLPM](/help/en/hologres/security-and-compliance/use-the-slpm#section-ke7-q4n-77e).

### `Feature not supported: INSERT ON CONFLICT RETURNING`

Hologres does not support `INSERT ON CONFLICT RETURNING`. Use `INSERT ON CONFLICT` without the RETURNING clause. For details, see [INSERT ON CONFLICT(UPSERT)](/help/en/hologres/developer-reference/insert-on-conflict#section-q0g-1ho-v48).

### `ERROR: INSERT in ddl transaction is not supported now`

INSERT operations are not supported inside DDL transactions. Either perform the INSERT outside the transaction, or start a transaction that supports DML statements. For details, see [SQL transaction capabilities](/help/en/hologres/developer-reference/sql-transaction-capabilities).

Example of the failing pattern:

```
BEGIN;
INSERT xxx
COMMIT;
-- ERROR: INSERT in ddl transaction is not supported now
```

### `Creating publication with table that without binlog is not supported now`

Publications subscribe to binary logs (binlog), so the table must have binary logging enabled before a publication can be created. Enable binary logging for the table first. For details, see [Use JDBC to consume Hologres binary logs](/help/en/hologres/user-guide/use-jdbc-to-consume-hologres-binary-logs).

### `Feature not supported: INSERT on conflict contains un-unique column`

The CONFLICT clause in the INSERT ON CONFLICT statement contains non-primary key columns. Only primary key columns are allowed in the CONFLICT clause.

### `Feature not supported: UPDATE with shard keys`

Hologres does not support UPDATE operations on primary keys or distribution keys (referred to as shard keys in some error messages). Rewrite the SQL statement to avoid updating these columns.

### `time before 1925 not supported`

Time-related functions support years from 1925 to 2282 by default. For dates outside this range when using functions like `to_char`, `to_date`, or `to_timestamp`, set the GUC parameter before your SQL statement:

```
SET hg_experimental_functions_use_pg_implementation = 'to_char,to_date,to_timestamp';
```

For details, see [Date and time functions](/help/en/hologres/developer-reference/date-and-time-functions).

### `Group by key is type of imprecise not supported`

The GROUP BY clause contains a field with an approximate numeric type such as FLOAT. Avoid using approximate numeric types in GROUP BY. Cast the field to a precise type or restructure the query.

### `CREATE TABLE is not supported for current instance`

This occurs on Hologres Shared Cluster instances or secondary instances. Shared Cluster instance endpoints start with `hgmc-` (for example, `hgmc-cn-xxwwwkkk`). Check the instance endpoint in the Hologres console.

-   **Shared Cluster instances** support creating foreign tables but not internal tables. To create a foreign table, see [CREATE FOREIGN TABLE](/help/en/hologres/developer-reference/create-foreign-table). For internal tables, use an exclusive Hologres instance.
    
-   **Secondary instances** support queries only. Create tables on the primary instance instead.
    

### `ALTER TABLE ALTER COLUMN SET TYPE is not supported now`

Hologres does not support changing column data types through ALTER TABLE. Create a new table with the desired column types, then migrate the data.

### `ERROR: Currently materialized view does not support aggregate on expressions, only support single column`

Single-table materialized views do not support expressions in aggregate functions. Use single column references only. For details, see [Manage materialized views by using SQL statements](/help/en/hologres/user-guide/real-time-materialized-view).

### `ERROR: SELECT rule's target list has too few entries`

Real-time materialized views do not support expressions. Remove expressions from the materialized view definition. For details, see [Manage materialized views by using SQL statements](/help/en/hologres/user-guide/real-time-materialized-view).

* * *

## Undefined object errors

### `column xxx does not exist`

The specified column does not exist in the table. Check the column name in your SQL statement for typos or case sensitivity issues.

### `Table group xxx does not exist`

The specified table group does not exist. Either specify an existing table group when creating the table, or create the table group first.

### `The specified partition does not exist`

The partition targeted by the write or update operation does not exist. Create the required partition before writing data.

### `create binlog reader failed: Fail to find any shards, please check if the table group is in current warehouse`

The table group is not loaded into the virtual warehouse. Check whether the table group is loaded to the warehouse, and load it if needed. For details, see [Manage data permissions](/help/en/hologres/user-guide/grant-permissions-on-table-groups-that-are-loaded-to-virtual-warehouses).

* * *

## Permission errors

For permission-related errors (ERRCODE\_INSUFFICIENT\_PRIVILEGE or "permission denied"), see these dedicated topics:

-   [Permissions granted to RAM users](/help/en/hologres/support/permissions-granted-to-ram-users)
    
-   [Permissions on Hologres instances](/help/en/hologres/support/permissions-on-hologres-instances)
    
-   [DataWorks permissions](/help/en/hologres/support/dataworks-permissions)
    
-   [Errors about permissions on MaxCompute](/help/en/hologres/support/common-errors-and-troubleshooting-of-integration-with-maxcompute#5810650182bie)
    

* * *

## Out-of-memory errors

### `Total memory used by all existing queries exceeded memory limitation`

An out-of-memory (OOM) error occurred during query processing. For causes and solutions, see [FAQ about OOM](/help/en/hologres/user-guide/faq-about-oom).

* * *

## Data type mismatch errors

### `internal error: Datasets has different schema`

The columns specified in the query do not match the columns in the table. Check the SQL statement to make sure the column names, count, and types align with the table schema.

* * *

## Division by zero errors

### ERRCODE\_DIVISION\_BY\_ZERO

A SQL statement contains a division by zero. Two options:

-   Use a `CASE WHEN` expression to guard against zero divisors:
    
    ```
      SELECT CASE WHEN divisor = 0 THEN NULL ELSE value / divisor END FROM table;
    ```
    
-   Create a MySQL-compatible extension that allows division by zero. For details, see [Migrate data from MySQL to Hologres](/help/en/hologres/user-guide/migrate-data-from-mysql-to-hologres).
    

* * *

## String truncation errors

### `value too long for type character varying(xxx)`

The value exceeds the maximum length defined for the VARCHAR column. Either trim the data to fit the column length, increase the VARCHAR limit, or change the column type to TEXT.

* * *

## Program limit errors

### `Exceeds the partition limitation of 512, current match xxx partitions`

The MaxCompute query scans more than 512 partitions. Either add partition filter conditions to narrow the scan, or increase the limit:

```
SET hg_foreign_table_max_partition_limit = <new_limit>;
```

For details, see [FAQ about integration with MaxCompute](/help/en/hologres/support/common-errors-and-troubleshooting-of-integration-with-maxcompute#section-itg-i6p-7tc).

### `Build desc failed: Exceeds the scan limitation of 200 GB, current scan xxx GB`

The MaxCompute query scans more than 200 GB of data. Two options:

-   Add filter conditions to reduce the scanned data volume.
    
-   Import the data into a Hologres internal table. Internal tables have no scan size limit.
    

* * *

## Syntax errors

### `syntax error at or near "xxxxx"`

The SQL statement contains invalid syntax. Review the statement for missing keywords, mismatched parentheses, or unsupported syntax, and correct it.

* * *

## Undefined function errors

### `DISTINCT is not implemented for window functions`

Hologres does not support the DISTINCT keyword inside window functions. Remove DISTINCT from the window function call.

### `ERROR: function xxx does not exist`

The function either requires an extension that has not been created, or the function syntax is incorrect. Verify that the required extension is installed and that the function call matches the Hologres documentation.

### `ERROR: function jsonb_set(json, text[], jsonb, boolean) does not exist`

The first parameter of `jsonb_set` must be JSONB, not JSON. Cast the value to JSONB:

```
SELECT jsonb_set(column_name::jsonb, '{key}', '"value"');
```

For details, see [JSON and JSONB data types](/help/en/hologres/developer-reference/json-and-jsonb-data-types).

* * *

## MaxCompute permission errors

### `You have NO privilege 'odps:Select' on xxx`

Your account lacks SELECT permissions on the MaxCompute table. Grant the required permissions in the MaxCompute console.

### `The sensitive label of column 'xxx' is 2, but your effective label is 0`

Your account has access to only specific columns in the MaxCompute table due to column-level security labels. Either grant broader permissions in the MaxCompute console, or query only the columns your account can access. For details, see [Manage user permissions by using commands](/help/en/maxcompute/user-guide/manage-user-permissions-by-using-commands).

* * *

## Duplicate object errors

### `extension "xxxxx" already exists`

The extension is already installed. No action is needed -- skip the CREATE EXTENSION statement.

* * *

## Invalid input errors

### `invalid input syntax for type numeric: ""`

The NUMERIC field contains invalid data (such as empty strings) that does not conform to the NUMERIC data type. Clean the source data before loading.

### `invalid input syntax for integer: xxx`

The INT field contains invalid data. Clean the source data to ensure all values conform to the INT type specification.

* * *

## COPY format errors

### `missing data for column "xxx". failed to query next`

The data being copied has a formatting issue. This usually happens when the source data contains the delimiter character (such as a space) specified in the COPY statement, causing a column count mismatch between source and destination. Clean the source data or choose a delimiter that does not appear in the data.

* * *

## Column count mismatch errors

### `ERROR: INSERT has more expressions than target columns`

The INSERT statement provides more values than there are columns in the destination table. Align the number of values in the INSERT statement with the number of columns in the table.

* * *

## Numeric range errors

### `bigint out of range`

The BIGINT value exceeds the valid range. Check the source data for values that overflow the BIGINT type and correct them.

### `numeric field overflow in function round`

The values in NUMERIC fields exceed the specified precision. Adjust the data or increase the precision defined for the NUMERIC column.

* * *

## Datetime errors

### `InsertOverwrite insert select table data failed: column a.unsign_type does not exist`

The referenced column does not exist, or a parameter value is invalid. Check and correct the column names and parameters in the SQL statement.

### `mismatched properties: table orientation is "column" but storage format is "sst"`

The table properties conflict: column-oriented storage was specified with SST storage format. Check and correct the table properties in the CREATE TABLE statement.

### `invalid value "" for "yyyy", Value must be an integer`

The data does not match the expected datetime format. The value for a date component (such as year) is empty or non-numeric. Clean the source data.

* * *

## Character encoding errors

### `invalid byte sequence for encoding "UTF8": 0xe9 0x80`

The data contains characters not supported by UTF-8 encoding. Identify and clean the invalid byte sequences in the source data.

### `character with byte sequence 0xe4 0x9e 0xab in encoding "UTF8" has no equivalent in encoding "GBK"`

A UTF-8 character has no equivalent in GBK encoding. Clean the data to remove or replace characters that cannot be converted between encodings.

* * *

## Duplicate table errors

### `relation "xxxx" already exists`

A table with this name already exists. Use a different name, or drop the existing table first if it is no longer needed.

* * *

## Grouping errors

### `column "xxx" must appear in the GROUP BY clause or be used in an aggregate function`

Every column in the SELECT list must either appear in the GROUP BY clause or be wrapped in an aggregate function (such as SUM, COUNT, or MAX). Add the column to the GROUP BY clause or apply an aggregate function.

* * *

## Transaction state errors

### `SET_TABLE_PROPERTY and CREATE TABLE statement are not in the same transaction for table`

The CREATE TABLE and `set_table_property` calls must be in the same transaction. Wrap them together:

```
BEGIN;
CREATE TABLE tbl (
  -- column definitions
);
CALL set_table_property('tbl', 'orientation', 'xx');
CALL set_table_property('tbl', 'distribution_key', 'xxx');
COMMIT;
```

### `current transaction is aborted, commands ignored until end of transaction block`

A previous transaction was not completed before new statements were issued. Run `ROLLBACK;` to terminate the current transaction and roll back uncommitted changes, then re-run your statements.

* * *

## Ambiguous column errors

### `column reference "xxx" is ambiguous`

A column name in the query exists in multiple joined tables, and the database cannot determine which one to use. Qualify the column with the table name or alias:

```
-- Instead of: SELECT id FROM t1 INNER JOIN t2 ON t1.id = t2.id
SELECT t1.id FROM t1 INNER JOIN t2 ON t1.id = t2.id
```

* * *

## Duplicate column errors

### `column "xxx" specified more than once`

A field is declared more than once in the table creation statement. Remove the duplicate column definition.

* * *

## Ambiguous function errors

### ERRCODE\_AMBIGUOUS\_FUNCTION

The function call is ambiguous because the function accepts multiple data types and the input parameter types are not explicitly defined. Cast the input parameters to the expected types.

* * *

## Invalid column definition errors

### `invalid definition of a numeric type`

No precision is specified for a NUMERIC or DECIMAL column in the CREATE TABLE statement. Specify the precision and scale:

```
CREATE TABLE example (
  amount NUMERIC(18, 2)
);
```

* * *

## Type cast errors

### `cannot cast type date to integer`

DATE values cannot be directly cast to INT. Use an appropriate conversion function, such as `EXTRACT(EPOCH FROM date_column)::int`, or restructure the query.

* * *

## Schema errors

### `schema "xxxx" does not exist`

The specified schema does not exist. Verify the schema name in your SQL statement and create the schema if needed.

* * *

## Internal errors

### `internal error: Connect timeout, err: std_exception: Connection refused`

This typically indicates a Hologres instance outage. Submit a support ticket to investigate the cause of the instance failure.

### `too many shards in this instance`

The shard count configured for the instance exceeds the upper limit. Reduce the shard count to within the allowed limit. For configuration details, see [Instance management](/help/en/hologres/user-guide/instance-management/).

### `internal error: Write is not allowed in readonly mode`

INSERT, UPDATE, and DELETE operations are not allowed on secondary instances. Perform write operations on the primary instance. Use secondary instances for SELECT queries only.

### `ERROR: commit ddl phase1 failed: DDLWrite is not allowed on replica`

IP address whitelists cannot be modified on secondary instances. Modify the IP address whitelist on the primary instance instead.

### `xxx for fe, should not be evaluated`

This occurs when a function is used to query a system table. Hologres system tables do not use the Hologres engine for computation, so certain functions are incompatible. Avoid using this function on Hologres system tables.

* * *

## Connection limit errors

### `remaining connection slots are reserved for non-replication superuser connections`

All connection slots are in use, and no more non-superuser connections can be created. Use the superuser account to release idle connections. For details, see [Manage connections](/help/en/hologres/user-guide/manage-connections#section-vip-dfv-vi9).

* * *

## System table compatibility errors

### `Build desc failed: Column type: information_schema.sql_identifier can not translate into hologres type`

Some system table column types are too complex for Hologres to handle. Avoid joining system tables that have complex data types with Hologres tables.

* * *

## Query length errors

### `query length xxxxx exceeded the maximum 102400`

The query exceeds the maximum length of 102,400 bytes. Break the query into smaller parts or simplify the SQL to stay within the limit.

* * *

## Flink integration errors

### `Modify record by primary key is not on this table`

Flink is configured to use update mode, but the destination Hologres table has no primary key. Add a primary key to the destination table. For details, see [Primary key](/help/en/hologres/user-guide/primary-key).

* * *

## Large field errors

### `BinaryArray cannot contain more than 2147483646 bytes`

The maximum field size in Hologres is 2 GB. If table statistics are stale, the query planner may generate a plan that causes a single field to exceed this limit during table joins. First, update the table statistics:

```
ANALYZE <tablename>;
```

If the error persists after updating statistics, the table may contain fields approaching the 2 GB limit. Add this setting before the query to reduce the data read per batch:

```
SET hg_experimental_query_batch_size = 1024;
```

### `Cannot reserve capacity larger than 2^31 - 1 for binary`

Same root cause as the error above. The field size exceeds 2 GB, or stale statistics caused a bad execution plan.

-   **Stale statistics:** Run `ANALYZE <tablename>;` to update.
    
-   **Oversized fields:** Set `hg_experimental_query_batch_size = 1024` before the query to reduce per-batch data volume.
    

* * *

## SERIAL type errors

### `internal error: Sequence is used out`

The SERIAL (auto-incrementing integer) field values have exceeded the valid range. Two options:

-   Create a new table using BIGSERIAL instead of SERIAL for a larger value range.
    
-   Avoid the SERIAL data type if possible. In Hologres, writing SERIAL data acquires a table lock, which can affect write performance.
    

* * *

## Field names starting with a digit

Hologres follows PostgreSQL syntax and does not support unquoted field names that start with a digit. Enclose such field names in double quotation marks:

```
SELECT bizdate, "1_day_active_users", "7_day_active_users" FROM t_active_users;
```

* * *

## Table dependency errors

### `cannot drop table because other objects depend on it`

Other objects (such as views) depend on this table. Drop the dependent objects first, then drop the table.
