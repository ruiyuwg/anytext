In a database, a lock is a mechanism that ensures transaction isolation during SQL execution. This guide describes the types of locks in Hologres and how to troubleshoot them.

## Background

When a query is initiated in Hologres, it follows the path shown in the figure below.![Query链路](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8869041071/p433122.png)The Frontend parses the query, the Query Engine generates an execution plan, and the Storage Engine reads the data. This process involves the following two types of locks.

-   Frontend (FE) locks
    
    The Frontend is the access layer and is compatible with the PostgreSQL protocol. Therefore, its locks are also compatible with some PostgreSQL locks. FE locks are primarily used to manage FE metadata.
    
-   Backend (BE) locks
    
    The BE refers to Query Engine and Fixed Plan. It uses Hologres's own locks, which are primarily used to manage the schema and data of the Storage Engine.
    

## **Lock behavior changes**

-   Starting from Hologres V2.0, a lock-free mechanism is enabled by default in the Frontend (FE). This means that if a conflict arises between a DDL statement and a DQL statement on the same table (e.g., a new query is submitted while a DDL operation on Table A is in progress), the new DQL request will fail immediately. To allow new DQL requests to wait for the lock to be released instead of failing immediately, disable the GUC parameter:
    
    ```
    ALTER database <db_name> SET hg_experimental_disable_pg_locks = off;
    ```
    
-   Starting from Hologres V2.1, bulk loading data into a table without a primary key has been optimized to acquire only a row-level lock instead of a table-level lock.
    

## Lock types

-   FE locks
    
    The Hologres access layer, the Frontend, is compatible with PostgreSQL. Therefore, the locks at this layer are also compatible with PostgreSQL. PostgreSQL provides three lock modes to control concurrent data access: table-level locks, row-level locks, and advisory locks. Hologres is compatible with table-level locks and advisory locks.
    
    **Note**
    
    Hologres does not support explicit locking or UDFs related to advisory locks.
    
    -   Table-level locks
        
        -   Modes
            
            A table-level lock is a lock on an entire table. The modes are as follows.
            
            **Lock mode**
            
            **Description**
            
            **Note**
            
            ACCESS SHARE
            
            The `SELECT` command acquires a lock of this mode on referenced tables.
            
            N/A
            
            ROW SHARE
            
            Only the `SELECT FOR UPDATE` and `SELECT FOR SHARE` commands acquire this lock on the target table. Non-target tables (such as other tables in a JOIN) only acquire an ACCESS SHARE lock.
            
            Hologres does not support `SELECT FOR UPDATE` and `SELECT FOR SHARE` commands, so this lock mode is not applicable.
            
            ROW EXCLUSIVE
            
            DML commands that modify data, such as `UPDATE`, `DELETE`, and `INSERT`, acquire this lock.
            
            This needs to be considered in conjunction with BE locks.
            
            SHARE UPDATE EXCLUSIVE
            
            A lock that prevents conflicts between `VACUUM` and concurrent schema changes. The following commands acquire this lock.
            
            -   `lazy VACUUM` (not `Vacuum Full`).
                
            -   `ANALYZE`.
                
            -   `CREATE INDEX CONCURRENTLY`.
                
                **Note**
                
                When Hologres runs this command, it does not acquire a `SHARE UPDATE EXCLUSIVE` lock. Instead, it acquires a `SHARE` lock, similar to the non-concurrent `CREATE INDEX`.
                
            -   `CREATE STATISTICS` (not supported by Hologres).
                
            -   `COMMENT ON`.
                
            -   `ALTER TABLE VALIDATE CONSTRAINT` (not supported by Hologres).
                
            -   `ALTER TABLE SET/RESET (storage_parameter)`. Hologres only supports using this command to set its own extended properties and the native PostgreSQL `autovacuum_enabled` property. Setting these properties does not acquire any table locks. Modifying certain other built-in PostgreSQL storage parameters acquires this lock. For more information, see [ALTER TABLE](/help/en/hologres/developer-reference/alter-table#concept-2463316).
                
            -   `ALTER TABLE ALTER COLUMN SET/RESET options`.
                
            -   `ALTER TABLE SET STATISTICS` (not supported by Hologres).
                
            -   `ALTER TABLE CLUSTER ON` (not supported by Hologres).
                
            -   `ALTER TABLE SET WITHOUT CLUSTER` (not supported by Hologres).
                
            
            Focus on the `ANALYZE` command.
            
            SHARE
            
            Only a non-concurrent `CREATE INDEX` acquires this lock.
            
            **Note**
            
            In Hologres, creating a JSON index acquires this lock.
            
            Focus on the `CREATE INDEX` command (for creating JSON-related indexes).
            
            SHARE ROW EXCLUSIVE
            
            A lock that prevents concurrent data modifications. The following commands acquire this lock.
            
            -   `CREATE COLLATION` (not supported by Hologres).
                
            -   `CREATE TRIGGER` (not supported by Hologres).
                
            -   Some `ALTER TABLE` commands.
                
                -   `DISABLE/ENABLE [ REPLICA | ALWAYS ] TRIGGER` (not supported by Hologres).
                    
                -   `ADD table_constraint` (not supported by Hologres).
                    
            
            Hologres does not support commands that acquire this lock, so this lock mode is not applicable.
            
            EXCLUSIVE
            
            Only the `REFRESH MATERIALIZED VIEW CONCURRENTLY` command acquires this lock.
            
            Hologres does not support the `REFRESH MATERIALIZED VIEW CONCURRENTLY` command, so this lock mode is not applicable.
            
            ACCESS EXCLUSIVE
            
            A lock required for fully exclusive access, which conflicts with all other locks. The following commands acquire this lock.
            
            -   `DROP TABLE`
                
            -   `TRUNCATE TABLE`
                
            -   `REINDEX` (not supported by Hologres).
                
            -   `CLUSTER` (not supported by Hologres).
                
            -   `VACUUM FULL`
                
            -   `REFRESH MATERIALIZED VIEW (without CONCURRENTLY)` (not supported by Hologres).
                
            -   `LOCK`: the explicit LOCK command. If no specific lock type is specified, this lock is acquired by default. (not supported by Hologres).
                
            -   `ALTER TABLE`: Apart from the \`ALTER TABLE\` forms that acquire specific locks as mentioned above, other \`ALTER TABLE\` forms acquire this lock by default.
                
            
            This is a critical lock. DDL operations in Hologres acquire this lock, which conflicts with all other lock types.
            
        -   Timeout
            
            FE locks do not have a default timeout. You should explicitly set a timeout to prevent excessively long lock-wait times. See [Manage queries](/help/en/hologres/user-guide/manage-queries#concept-2058301).
            
        -   Conflict relationships
            
            The following table shows the conflict relationships between lock modes. A conflict means that one operation must wait for another to release its lock.
            
            **Note**
            
            Supported indicates no conflict. Not supported indicates a conflict.
            
            **Requested lock mode**
            
            **ACCESS SHARE**
            
            **ROW SHARE**
            
            **ROW EXCLUSIVE**
            
            **SHARE UPDATE EXCLUSIVE**
            
            **SHARE**
            
            **SHARE ROW EXCLUSIVE**
            
            **EXCLUSIVE**
            
            **ACCESS EXCLUSIVE**
            
            ACCESS SHARE
            
            Supported
            
            Supported
            
            Supported
            
            Supported
            
            Supported
            
            Supported
            
            Supported
            
            Not supported
            
            ROW SHARE
            
            Supported
            
            Supported
            
            Supported
            
            Supported
            
            Supported
            
            Supported
            
            Not supported
            
            Not supported
            
            ROW EXCLUSIVE
            
            Supported
            
            Supported
            
            Supported
            
            Supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            SHARE UPDATE EXCLUSIVE
            
            Supported
            
            Supported
            
            Supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            SHARE
            
            Supported
            
            Supported
            
            Not supported
            
            Not supported
            
            Supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            SHARE ROW EXCLUSIVE
            
            Supported
            
            Supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            EXCLUSIVE
            
            Supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            ACCESS EXCLUSIVE
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
            Not supported
            
    -   Advisory lock
        
        Advisory locks have application-defined meanings. In most business scenarios in Hologres, you do not need to pay extra attention to it.
        
-   BE locks
    
    -   Categories
        
        In Hologres, BE Locks are categorized as follows.
        
        **Lock category**
        
        **Introduction to locks**
        
        Exclusive(X)
        
        An exclusive lock (or a mutex lock) is acquired when a transactionneeds to modify data, such as with DML commands like `DELETE`, `INSERT`, or `UPDATE`. An exclusive lock is grantable if no other shared or exclusive locks are present on the resource. Once an exclusive lock is acquired, no further locks can be placed on that resource.
        
        Shared(S)
        
        A transaction requests a shared lock when it needs to read data, which prevents other transactions from modifying the data being read. Multiple shared locks can exist on the same resource, which means DQL commands can run concurrently because they do not change the resource itself.
        
        Intent(I)
        
        An intent lock signifies a hierarchical locking structure, allowing multiple intent locks to coexist on the same resource. Upon acquiring an intent lock, an exclusive lock can no longer be granted for that resource. For instance, when a transaction seeks an exclusive lock on a row, it also acquires an intent lock on the table, thereby preventing other transactions from obtaining an exclusive lock on the table itself.
        
    -   Timeout
        
        The default timeout for BE Locks is 5 minutes.
        
    -   Conflict relationship
        
        The conflict relationships for BE locks are as follows. A conflict means that one operation must wait for another to release its lock.
        
        **Note**
        
        Supported indicates no conflict. Not supported indicates a conflict.
        
        **Operation**
        
        **DROP**
        
        **ALTER**
        
        **SELECT**
        
        **UPDATE**
        
        **DELETE**
        
        **INSERT (including INSERT ON CONFLICT)**
        
        DROP
        
        Not supported
        
        Not supported
        
        Not supported
        
        Not supported
        
        Not supported
        
        Not supported
        
        ALTER
        
        Not supported
        
        Not supported
        
        Supported
        
        Not supported
        
        Not supported
        
        Not supported
        
        SELECT
        
        Not supported
        
        Supported
        
        Supported
        
        Supported
        
        Supported
        
        Supported
        
        UPDATE
        
        Not supported
        
        Not supported
        
        Supported
        
        Not supported
        
        Not supported
        
        Not supported
        
        DELETE
        
        Not supported
        
        Not supported
        
        Supported
        
        Not supported
        
        Not supported
        
        Not supported
        
        INSERT (including INSERT ON CONFLICT)
        
        Unsupported
        
        Not supported
        
        Supported
        
        Not supported
        
        Not supported
        
        Not supported
        

## Scopes of locks

The scope of a lock varies depending on its category.

-   FE locks
    
    FE locks affect only table objects and are unrelated to table data. A lock is either acquired or blocked. Being blocked indicates a lock conflict, and the operation is waiting for the lock.
    
-   BE locks
    
    BE locks affect either table data or schema. Their scope is categorized as follows:
    
    -   Table data locks: Acquires a lock on all data in a table. Concurrent acquisition by multiple tasks may cause delays due to lock waits.
        
    -   Row data lock: Locks an entire row, leading to higher execution efficiency. Queries accelerated by [Fixed Plan](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans#task-2183947) utilize either row data locks or table schema locks.
        
    -   Table schema lock: Locks the table's schema. Acquired by transactions needing to read or modify the table schema. Most transactions apply for a schema lock. Current schema lock types:
        
        -   SchX: Schema Exclusive Lock, used for DDL statements. Currently, it only supports the `DROP TABLE` command.
            
        -   SchU: Schema Update Lock, used for DDL statements that modify the table structure, including `ALTER TABLE` and `set_table_property` commands.
            
        -   SchE: Schema Existence Lock, used for DML and DQL statements to prevent a table from being dropped during read and write operations.
            
        
        **Note**
        
        -   SchU provides granular control for DDL locks, allowing DQL to run normally during `ALTER TABLE` operations without waiting. SchX is the coarsest-grained DDL exclusive lock, for which all DDL, DML, and DQL operations must wait.
            
        -   If a query takes a long time to start, it might be waiting for BE locks.
            
        
    

The lock scopes for common commands in Hologres are as follows. Supported indicates that the operation acquires the specified lock.

**Note**

-   Writes, updates, and deletes that do not use a Fixed Plan are considered Bulkload operations.
    
-   The `CREATE INDEX` command refers to creating JSON-related indexes.
    
-   DDL commands include `CREATE`, `DROP`, `ALTER`, and so on.
    

**Operation / Lock scope**

**Table-level lock**

**Table data lock**

**Row data lock**

**Table schema lock**

CREATE

Supported

N/A

DROP

Supported

**Note**

Once the `DROP` command acquires a lock, no other commands can be executed on that table. These commands will wait for the lock to be released. Upon detecting that the table has been deleted, they will fail.

N/A

N/A

Supported

**Note**

Conflicts with all other operations.

ALTER

Supported

**Note**

Same as the `DROP` command.

N/A

N/A

Supported

**Note**

You can execute `SELECT` commands on the table while it holds a Table Schema Lock.

SELECT

Supported

**Note**

While the table lock is held, `INSERT`, `UPDATE`, and `DELETE` commands can be executed on the table. It conflicts only with DDL locks.

N/A

N/A

Supported

**Note**

When a `SELECT` command is executing, all other operations can be performed except for the `DROP` command.

INSERT (including INSERT ON CONFLICT)

Supported

**Note**

The `INSERT` command conflicts with `CREATE INDEX` and DDL.

-   In Hologres V2.0 and earlier, bulkload acquires a table data lock.
    
-   Starting from Hologres V2.1, only bulkload on tables with a primary key acquires a table data lock.
    

**Note**

Bulkload conflicts with Fixed Plan.

If the operation is performed via Fixed Plan, a row data lock is acquired.

Starting from Hologres V2.1, bulkload for a table without a primary key also acquires only a row data lock.

**Note**

-   Hologres V2.0 and earlier do not support concurrent batch writes and Fixed Plan-accelerated real-time writes.
    
-   Starting from Hologres V2.1, concurrent batch writes and Fixed Plan-accelerated real-time writes are supported for tables without a primary key.
    

Supported

**Note**

Conflicts with DDL and DML.

UPDATE

Supported

**Note**

This lock conflicts with `CREATE INDEX` and DDL locks.

Supported

**Note**

Conflicts with DDL and DML.

DELETE

Supported

**Note**

This lock conflicts with `CREATE INDEX` and DDL locks.

Supported

**Note**

Conflicts with DDL and DML.

## **Transaction-related lock behavior**

Hologres currently supports explicit transactions for DDL only. It does not support pure DML transactions or mixed DDL and DML transactions.

-   Hologres does not support nested subtransactions.
    
-   Although pure DML transactions are syntactically accepted, they do not actually support atomic commits and rollbacks.
    
    In the following DML example, even if the `INSERT` is successful, the inserted data will not be rolled back if the subsequent `UPDATE` fails.
    
    ```
    begin;
    insert into t1(id, salary) values (1, 0);
    update t1 set salary = 0.1 where id = 1;
    commit;
    ```
    
-   Pure DDL transactions work as expected.
    
    If any DDL command in the transaction fails, the entire transaction is rolled back. For example, in the following code, if the `ALTER` command fails, the preceding `CREATE` and `DROP` operations are rolled back.
    
    ```
    begin;
    create table t1(i int);
    drop table if exists t2;
    alter table t1 add column n text;
    commit;
    ```
    
-   Transactions with a mix of DDL and DML commands are prohibited.
    
    In the following example, when a transaction contains both DDL and DML commands, the DML command reports an error.
    
    ```
    begin;
    create table t1(i int);
    update t1 set i = 1 where i = 1;
    -- DML statement error
    ERROR:  UPDATE in ddl transaction is not supported now.
    ```
    
-   Locks acquired by any command in an explicit transaction are released only when the entire transaction ends (by commit or rollback).
    
    In the following example, an `ALTER` operation on a parent table acquires `ACCESS EXCLUSIVE` locks on both the parent table (`login_history`) and the child table (`login_history_202001`). These locks are not released immediately after the command finishes. They are held until the final `COMMIT` is executed (regardless of success or failure). If the `COMMIT` is not executed, the locks are held indefinitely, and any other DDL operation on this table will be blocked and report an error.
    
    ```
     -- suppose we have three tables
    create table temp1(i int, t text);
    create table login_history(ds text, user_id bigint, ts timestamptz) partition by list (ds);
    create table login_history_202001 partition of login_history for values in ('202001');
    
    begin;
    alter table login_history_s1 add column user_id bigint;
    drop table temp1;
    create table tx2(i int);
    commit;
    ```
    

## Troubleshoot FE locks

Follow these steps to check for and resolve FE locks:

1.  If a query takes a long time, check the `wait_event_type` field to see if the query is waiting on a lock.
    
    In the following command example, if the `wait_event_type` field in the result is `Lock`, it indicates that the query is waiting on an FE lock.
    
    ```
    -- Hologres V2.0 and later:
    select query,state,query_id,transaction_id,pid,wait_event_type,wait_event,running_info,extend_info FROM hg_stat_activity where query_id = 200640xxxx;
    -- The following result is returned:
    ----------------+----------------------------------------------------------------
    query           | drop table test_order_table1;
    state           | active
    query_id        | 200640xxxx
    pid             | 123xx
    transaction_id  | 200640xxxx
    wait_event_type | Lock
    wait_event      | relation
    running_info    | {"current_stage":{"stage_duration_ms":47383,"stage_name":"PARSING"},"fe_id":1,"warehouse_id":0}+
                    |
    extend_info     | {}                                                                                                                                           +
    
    -- Hologres V1.3 and earlier:
    select datname, pid, application_name, wait_event_type, state,query_start, query from pg_stat_activity where backend_type in ('client backend');
    -- The following result is returned:
    ----------------+----------------------------------------------------------------
    datname           | holo_poc
    pid               | 321xxx
    application_name  | PostgreSQL JDBC Driver
    wait_event_type   | lock
    state             | active
    query_start       |2023-04-20 14:31:46.989+08
    query             | delete from xxx
    ```
    
2.  View the lock holder.
    
    Syntax:
    
    ```
    select * from pg_locks where pid = <pid>;
    ```
    
    Replace pid with the `pid` value that is returned in Step 1.
    
3.  Identify which process is holding the lock.
    
    If the result from Step 2 shows the current query is waiting for a lock, use the following command with the table's `oid` (Object ID) to find the process holding a lock on it. A value of `t` (true) in the `granted` column indicates a process is holding the lock.
    
    ```
    -- Query the process that holds the table lock.
    select pid from pg_locks where relation = <OID> and granted = 't';
    ```
    
4.  Identify the query holding the lock.
    
    Using the PID from the result of Step 3, run the following command to find the query holding the lock.
    
    ```
    select * from pg_stat_activity where pid = <PID>;
    ```
    
5.  Release the lock.
    
    Run the following command to terminate the query and release the lock.
    
    ```
    select pg_cancel_backend(<pid>);
    ```
    

## Troubleshoot BE locks

If the `be_lock_waiters` field in the `hg_stat_activity` view contains data, the query has a lock or is blocked by a BE loc. Troubleshoot it by following these steps.

**Note**

`hg_stat_activity` is supported only in Hologres V2.0 and later.

-   Scenario 1: The current query holds a lock, and other queries are waiting for it to be released.
    
    View the lock-holding query and blocked queries:
    
    ```
    select query_id, transaction_id, ((extend_info::json)->'be_lock_waiters'->>0)::text as be_lock_waiters 
    FROM hg_stat_activity as h where h.state = 'active' and ((extend_info::json)->'be_lock_waiters')::text != '';
    
    -- The following result is returned:
    ----------------+------------------
    query_id        | 10005xxx
    transaction_id  | 10005xxx
    be_lock_waiters | 13235xxx
    ```
    
-   Scenario 2: Check which query is blocking the current query.
    
    Find out which query is holding the lock that the current query is waiting for.
    
    ```
    select query_id, transaction_id, ((extend_info::json)->'be_lock_waiters')::text as be_lock_waiters 
    FROM hg_stat_activity as h where h.state = 'active' and ((extend_info::jsonb)->'be_lock_waiters')::jsonb ? '10005xxx';
    
    -[ RECORD 1 ]---+------------------------------------------
    query_id        | 200740017664xxxx
    transaction_id  | 200740017664xxxx
    be_lock_waiters | ["200640051468xxxx","200540035746xxxx"]
    ```
    

## Common errors and solutions

-   Error: `internal error: Cannot acquire lock in time, current owners: [(Transaction =302xxxx, Lock Mode = SchS|SchE|X)]`.
    
    -   **Possible cause:** This error means your query has timed out after 5 minutes of waiting for a BE lock. It is caused by another query holding a conflicting lock (in this case, a combination of a SchS, a SchE, and an Exclusive lock) on the same table.
        
    -   **Solution:** To fix this, find the blocking query and terminate it. The transaction ID from the error message, `Transaction =302xxxx`, is the blocking query ID. Look up this query ID in the [slow query log](/help/en/hologres/user-guide/query-and-analyze-slow-query-logs#concept-2069482) or [active queries](/help/en/hologres/user-guide/manage-queries#concept-2058301) view to identify and manage the process.
        
-   Error: `ERROR: The schema version update timed out because the server's current version (xxx) is older than the requested version (yyy)`.
    
    -   **Possible cause:** This timeout occurs when there is a delay in synchronizing a schema change between the FE and the Storage Engine. A DDL statement first updates the schema version on the FE. If a new query arrives before the Storage Engine has applied the change, it must wait. The query fails if this wait exceeds the 5-minute timeout.
        
    -   **Solution:**
        
        -   Terminate the DDL operation holding the lock, and re-run your query.
            
        -   If the problem persists, restart the instance to force synchronization.
            
-   Error: `The requested table name: xxx (id: 10, version: 26) mismatches the version of the table (id: 10, version: 28) from server`.
    
    -   **Possible cause:** This error happens when your query connects to an FE node that hasn't yet synchronized with the latest table version from the Storage Engine. After a DDL operation, the Storage Engine updates its version, but this change needs to be replicated across all FE nodes. A version mismatch occurs if your query hits an out-of-sync FE node.
        
    -   **Solution:**
        
        -   Retry the query several times. This often resolves the issue as you might connect to an updated FE node.
            
        -   If retrying does not work after a few minutes, restart the instance to clear the inconsistent state.
            
-   Error: `internal error: Cannot find index full ID: 86xxx (table id: 20yy, index id: 1) in storages or it is deleting!`.
    
    -   **Possible cause:** This error occurs when a DML operation (like `SELECT` or `DELETE`) tries to access a table while a `DROP TABLE` or `TRUNCATE TABLE` command is running on it. The DML query waits for the DDL lock to be released, but by the time it can execute, the table or its index has already been deleted.
        
    -   **Solution:** To prevent this, ensure that no other queries are running on a table when you execute `DROP` or `TRUNCATE` commands on it. Coordinate your DDL and DML operations to avoid simultaneous access.
