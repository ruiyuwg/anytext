This topic describes the permissions of privileged accounts and standard accounts in PolarDB.

## **Background information**

For the sake of security, you must manage and control account permissions in PolarDB. An account can only perform operations on which it is granted permissions. PolarDB adopted a role-based RAM model to manage account permissions. In this model, accounts are assigned different roles, each of which has specified permissions. Each account can perform operations on which it is granted permissions. This method can control account permissions and protect database security.

PolarDB provides two roles: privileged accounts and standard accounts.

-   Privileged accounts are used for management tasks, such as creating databases, granting basic permissions, and creating publications and subscriptions.
    
-   Standard accounts perform business logic operations.
    

PolarDB uses this permission system to build database operation types, implement the RAM model, and ensure permission security.

### **Permissions granted to a privileged account**

**Account**

**Permission**

Privileged account

Create a database. For more information, see [Create a database](/help/en/polardb/polardb-for-oracle/create-a-database).

Create an extension. For more information, see [Plug-ins](/help/en/polardb/polardb-for-oracle/supported-extensions).

Create an account which has lower or equal permissions**.** For more information, see [Create a user](/help/en/polardb/polardb-for-oracle/create-a-user).

Create and use an event trigger. For more information, see [Create a trigger](/help/en/polardb/polardb-for-oracle/create-a-trigger).

Create and modify a type. For more information, see [Create an object type](/help/en/polardb/polardb-for-oracle/create-an-object-type).

Invoke a garbage collection instruction. For more information, see [Garbage collection mechanism](/help/en/polardb/polardb-for-oracle/garbage-collection-mechanism).

Create and modify an external FDW. For more information, see [Read and write external data files by using oss\_fdw](/help/en/polardb/polardb-for-oracle/read-and-write-foreign-data-files-by-using-oss-fdw).

Modify the sequence used by ROWID. For more information, see [ALTER SEQUENCE](/help/en/polardb/polardb-for-oracle/alter-sequence).

Create publications and subscriptions. Example:

```
-- Create a publication.
CREATE PUBLICATION my_publication FOR TABLE test_t;

-- Create a subscription.
CREATE SUBSCRIPTION my_subscription
CONNECTION 'channel_name=XXXX dbname=XXXX user=XXXX password=XXXX'
PUBLICATION my_publication;
```

**Note**

A `channel` is required for creating a subscription. For information about how to create channels, see [Network channels](/help/en/polardb/polardb-for-postgresql/network-channel-polardb-postgresql/). If execeptions occur when you create a subscription using network channels, [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us) for assistance.

Create a system context. Example:

```
CREATE CONTEXT hr_context USING test_package;
```

Use two-phase transactions. Example:

```
-- session_1
begin;
insert into t values (1,'a');
prepare transaction 'test_1';

-- session_2
commit prepared 'test_1';
-- Or rollback.
rollback prepared 'test_1';
```

Send signals. Example:

```
-- 4300 is a non-superuser process
select pg_cancel_backend(4300);
select pg_terminate_backend(4300);
```

View the status of background processes. Example:

```
select * from pg_stat_activity;
```

Modify an object name. Example:

```
RENAME test_table TO new_test_table;
```

### Permissions not granted to privileged accounts or standard accounts

The following permissions are prohibited for the sake of database security.

**Account**

**Permission**

Privileged account and standard account

Create a folder.

Modify system parameters.

Create a tablespace.

Kill a superuser process.

Execute an untrusted language.

**Note**

Only PL/SQL is a trusted language. Other languages are untrusted and cannot be executed.

### **User group permissions**

PolarDB for PostgreSQL (Compatible with Oracle) is built on the PostgreSQL protocol and uses certain group permissions from PostgreSQL. The inheritance mechanism of these group permissions is detailed in the following table. These permissions have a union relationship with the permissions owned by privileged users. Specifically, the set of permissions is the sum of these two types of permissions.

**Permission**

**Ownership**

**Description**

pg\_read\_all\_stats & pg\_stat\_scan\_tables

Full

Reads related statistics.

pg\_signal\_backend

Full

Signals another backend to cancel a query or terminate its session.

pg\_polar\_superuser

Full

Contains a series of permissions of privileged users.

pg\_polar\_replication

Full

Provides the streaming replication permission.

pg\_monitor

Full

Reads/executes various monitoring views and functions. The read and write permissions on local files are denied.

pg\_read\_all\_data & pg\_write\_all\_data

Limited

Reads all user tables and most system tables and writes data to all user tables. Some system tables are set invisible for security reasons.

pg\_read\_all\_settings

Limited

Reads all configuration variables within granted permissions. Some variables are set invisible for security reasons.

pg\_read\_server\_files & pg\_write\_server\_files

Prohibited

Not allowed to read or write local files.

pg\_execute\_server\_program

Prohibited

Not allowed to execute binary commands.
