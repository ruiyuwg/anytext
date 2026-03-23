Before you use Data Transfer Service (DTS) to transfer data from or to an Oracle database, understand the supported features, limitations, and preparation steps to ensure a smooth data synchronization or migration.

## Database limitations

### **Self-managed Oracle as a source**

**Limitation**

**Description**

Supported versions

Versions 10g, 11g, 12c, 18c, and 19c are supported.

Supported architectures

-   Single-node and Real Application Clusters (RAC) architectures are supported.
    
    **Note**
    
    Do not add or remove nodes from an Oracle database in a RAC architecture. This can cause the DTS task to fail.
    
-   Container Database (CDB) and non-CDB architectures are supported for versions 12c and later.
    
    **Note**
    
    A single task can migrate only one Pluggable Database (PDB).
    

Supported data

-   Common tables, indexes (including function-based indexes), data types, and character sets are supported. For more information about supported data types and character sets, see [Appendix](#bb090cc85316y).
    
-   Cascade delete and update operations are supported.
    
-   Data Manipulation Language (DML) operations on partitions and subpartitions are supported. Data Definition Language (DDL) operations on partitioned tables are not supported, but the task will continue to run.
    
-   Parsing of distributed transaction logs is supported.
    
-   Full and partial transaction rollbacks are supported.
    
-   Synchronization and migration of objects with names longer than 30 bytes are supported.
    
-   Synchronization and migration of null objects, such as empty\_blob() and empty\_clob(), are supported.
    
-   Synchronization and migration of virtual columns are supported.
    
-   Synchronization and migration of data with Hybrid Columnar Compression (HCC) are supported.
    
-   Full migration tasks support invisible columns. Incremental synchronization tasks do not.
    
-   Case-sensitive mapping for attribute names, such as table and column names, is supported.
    

Network bandwidth

Must be 100 Mb/s or higher.

Business requirements

-   The peak log volume must be less than 1 TB. The average hourly log volume must be less than 50 GB. The peak traffic must be less than 15 MB/s.
    
    **Important**
    
    DTS pulls logs for the entire database instance by default. A high volume of data changes in objects that are not being synchronized or migrated can also cause task latency.
    
-   Batch data updates or large-scale changes to large object (LOB) data types, such as CLOB, BLOB, and LONG, can cause task latency. Run these operations in smaller batches or avoid them if possible.
    
-   Avoid frequent delete or update operations on tables without primary keys. This can cause task latency.
    
-   Reduce the frequency of DDL operations. Do not execute more than 10 DDL statements per second to avoid task latency.
    
-   Avoid large transactions where a single transaction generates more than 100 GB of logs. This can cause the task to fail.
    

Connection types

-   Connections using public network IP addresses and private IP addresses are supported.
    
-   For RAC architectures, connections using a Scan IP, a single-node VIP, or a physical IP address are supported.
    
-   Connections over leased lines are supported. Connections to a RAC node's Scan IP over a leased line are not supported.
    
-   Connections to primary and secondary databases in an ADG setup are supported.
    
    **Note**
    
    If the DTS connection is to an ADG secondary database and the online redo files are not archived, the DTS instance will experience latency.
    
-   Amazon RDS for Oracle is supported as a source database.
    

Other limitations

-   Before starting a data synchronization or migration task, evaluate the performance of the source and destination databases. Run the task during off-peak hours. During the full migration phase, DTS consumes some read resources on the source database, which can increase the database load. Typically, the impact is less than 2 CPU cores and 4 GB of memory. The actual load impact depends on the database status.
    
-   Tables to be synchronized or migrated must have a primary key or a UNIQUE constraint, and the fields must be unique. Otherwise, task latency or duplicate data in the destination database may occur.
    
-   When Oracle is the source, DTS supports scenarios where the write character set is different from the database character set.
    
    **Note**
    
    You must set the **Actual Write Code** parameter (source.column.encoding).
    
-   Do not run the `resetlogs` command while the task is running. This can cause the DTS task to fail.
    
-   DCL operations are not supported.
    
-   Incremental synchronization tasks do not support triggers. Disable triggers in the destination Oracle database.
    
-   Incremental synchronization tasks do not support data with foreign key constraints.
    
-   Incremental synchronization tasks do not support data imported into the source database using Oracle Data Pump.
    
-   During an incremental task, avoid partial rollbacks of large transactions and batch deletions in large transactions on the source database. This can lead to the loss of incremental `DELETE` statements.
    
-   When you synchronize or migrate data from tables without a primary key or unique key:
    
    -   The data write speed is slow, which can cause task latency.
        
    -   Data consistency cannot be guaranteed. Duplicate data may occur.
        
-   Synchronization and migration of objects with names longer than 30 bytes are not supported.
    
-   Consecutive \`RENAME TABLE\` operations are not supported. This can cause the task to fail.
    
-   Global temporary tables are not supported. The task will continue to run but will not migrate these tables.
    
-   Tables that contain functions in default values are not supported. This can cause data inconsistency.
    
-   Tables with expressions in default values are not supported.
    
-   Foreign tables are not supported.
    
-   Computed columns and encrypted columns are not supported.
    
-   VPD is not supported.
    
-   Jobs created by \`dbms\_scheduler\` and \`dbms\_job\` are not supported.
    
-   Changes to schema names are not supported.
    
-   Nested tables are not supported. This can cause the task to fail.
    
-   Materialized views are not supported.
    
-   DDL operations on attributes with names that contain keywords or special characters are not supported.
    
-   ROWID change operations, such as \`split partition\`, \`table move\`, \`table shrink\`, and \`move partition key\`, are not supported. This can cause data inconsistency or task failure.
    
-   SSL encryption is not supported for data transfer.
    
-   Oracle Label Security mode is not supported.
    
-   Oracle is a commercial, closed-source database. Its log format can present unavoidable issues during CDC and parsing by DTS due to known or unknown format characteristics. Before you enable incremental synchronization or migration from an Oracle source in a production environment, perform a comprehensive POC test. This test should cover all business change types, table schema adjustments, and peak-hour stress tests. Because of the unpredictable nature of Oracle log formats, ensure that the business logic in your production environment is identical to that in the POC phase. This is critical for the stable and efficient operation of DTS.
    

### Amazon RDS for Oracle as a source

**Limitation**

**Description**

Supported versions

Versions 10g, 11g, 12c, 18c, and 19c are supported.

Supported architectures

-   Single-node and RAC architectures are supported.
    
-   For versions 12c, 18c, and 19c, only non-CDB architectures are supported.
    

Supported data

-   Common tables, indexes (including function-based indexes), data types, and character sets are supported. For more information about supported data types and character sets, see [Appendix](#bb090cc85316y).
    
-   Cascade delete and update operations are supported.
    
-   Data Manipulation Language (DML) operations on partitions and subpartitions are supported. Data Definition Language (DDL) operations on partitioned tables are not supported, but the task will continue to run.
    
-   Parsing of distributed transaction logs is supported.
    
-   Full and partial transaction rollbacks are supported.
    
-   Synchronization and migration of objects with names longer than 30 bytes are supported.
    
-   Synchronization and migration of null objects, such as empty\_blob() and empty\_clob(), are supported.
    
-   Synchronization and migration of virtual columns are supported.
    
-   Synchronization and migration of data with Hybrid Columnar Compression (HCC) are supported.
    
-   Full migration tasks support invisible columns. Incremental synchronization tasks do not.
    
-   Case-sensitive mapping for attribute names, such as table and column names, is supported.
    

Network bandwidth

Must be 100 Mb/s or higher.

Business requirements

-   The peak log volume must be less than 1 TB. The average hourly log volume must be less than 50 GB. The peak traffic must be less than 15 MB/s.
    
    **Important**
    
    DTS pulls logs for the entire database instance by default. A high volume of data changes in objects that are not being synchronized or migrated can also cause task latency.
    
-   Batch data updates or large-scale changes to large object (LOB) data types, such as CLOB, BLOB, and LONG, can cause task latency. Run these operations in smaller batches or avoid them if possible.
    
-   Avoid frequent delete or update operations on tables without primary keys. This can cause task latency.
    
-   Reduce the frequency of DDL operations. Do not execute more than 10 DDL statements per second to avoid task latency.
    
-   Avoid large transactions where a single transaction generates more than 100 GB of logs. This can cause the task to fail.
    

Connection types

-   Connections using public network IP addresses and private IP addresses are supported.
    
-   For RAC architectures, connections using a Scan IP, a single-node VIP, or a physical IP address are supported.
    
-   Connections over leased lines are supported. Connections to a RAC node's Scan IP over a leased line are not supported.
    
-   Connections to primary and secondary databases in an ADG setup are supported.
    
    **Note**
    
    If the DTS connection is to an ADG secondary database and the online redo files are not archived, the DTS instance will experience latency.
    

Other limitations

-   Before starting a data synchronization or migration task, evaluate the performance of the source and destination databases. Run the task during off-peak hours. During the full migration phase, DTS consumes some read resources on the source database, which can increase the database load. Typically, the impact is less than 2 CPU cores and 4 GB of memory. The actual load impact depends on the database status.
    
-   Tables to be synchronized or migrated must have a primary key or a UNIQUE constraint, and the fields must be unique. Otherwise, task latency or duplicate data in the destination database may occur.
    
-   When Oracle is the source, DTS supports scenarios where the write character set is different from the database character set.
    
    **Note**
    
    You must set the **Actual Write Code** parameter (source.column.encoding).
    
-   Do not run the `resetlogs` command while the task is running. This can cause the DTS task to fail.
    
-   DCL operations are not supported.
    
-   Incremental synchronization tasks do not support triggers. Disable triggers in the destination Oracle database.
    
-   Incremental synchronization tasks do not support data with foreign key constraints.
    
-   Incremental synchronization tasks do not support data imported into the source database using Oracle Data Pump.
    
-   During an incremental task, avoid partial rollbacks of large transactions and batch deletions in large transactions on the source database. This can lead to the loss of incremental `DELETE` statements.
    
-   When you synchronize or migrate data from tables without a primary key or unique key:
    
    -   The data write speed is slow, which can cause task latency.
        
    -   Data consistency cannot be guaranteed. Duplicate data may occur.
        
-   Synchronization and migration of objects with names longer than 30 bytes are not supported.
    
-   Consecutive \`RENAME TABLE\` operations are not supported. This can cause the task to fail.
    
-   Global temporary tables are not supported. The task will continue to run but will not migrate these tables.
    
-   Tables that contain functions in default values are not supported. This can cause data inconsistency.
    
-   Tables with expressions in default values are not supported.
    
-   Foreign tables are not supported.
    
-   Computed columns and encrypted columns are not supported.
    
-   VPD is not supported.
    
-   Jobs created by \`dbms\_scheduler\` and \`dbms\_job\` are not supported.
    
-   Changes to schema names are not supported.
    
-   Nested tables are not supported. This can cause the task to fail.
    
-   Materialized views are not supported.
    
-   DDL operations on attributes with names that contain keywords or special characters are not supported.
    
-   ROWID change operations, such as \`split partition\`, \`table move\`, \`table shrink\`, and \`move partition key\`, are not supported. This can cause data inconsistency or task failure.
    
-   SSL encryption is not supported for data transfer.
    
-   Oracle Label Security mode is not supported.
    
-   Oracle is a commercial, closed-source database. Its log format can present unavoidable issues during CDC and parsing by DTS due to known or unknown format characteristics. Before you enable incremental synchronization or migration from an Oracle source in a production environment, perform a comprehensive POC test. This test should cover all business change types, table schema adjustments, and peak-hour stress tests. Because of the unpredictable nature of Oracle log formats, ensure that the business logic in your production environment is identical to that in the POC phase. This is critical for the stable and efficient operation of DTS.
    

### Oracle as a destination

**Limitation**

**Description**

Supported versions

Versions 10g, 11g, 12c, 18c, and 19c are supported.

Supported architectures

-   Single-node and Real Application Clusters (RAC) architectures are supported.
    
    **Note**
    
    Do not add or remove nodes from an Oracle database in a RAC architecture. This can cause the DTS task to fail.
    
-   Container Database (CDB) and non-CDB architectures are supported for versions 12c and later.
    
    **Note**
    
    A single task can migrate only one Pluggable Database (PDB).
    

Network bandwidth

Must be 100 Mb/s or higher.

Connection types

-   Connections using public network IP addresses and private IP addresses are supported.
    
-   For RAC architectures, connections using a Scan IP, a single-node VIP, or a physical IP address are supported.
    
-   Connections over leased lines are supported. Connections to a RAC node's Scan IP over a leased line are not supported.
    
-   Connections to primary and secondary databases in an ADG setup are supported.
    
    **Note**
    
    If the DTS connection is to an ADG secondary database and the online redo files are not archived, the DTS instance will experience latency.
    
-   Amazon RDS for Oracle is supported as a destination database.
    

Other limitations

-   Before starting a data synchronization or migration task, evaluate the performance of the destination database. Run the task during off-peak hours. During the full migration phase, DTS consumes some network and write resources on the destination database. This can increase the database load. For example, keep the CPU load on both the source and destination databases below 30%.
    
-   DTS performs concurrent \`INSERT\` operations during full data synchronization or migration. This can cause some table fragmentation in the destination database. As a result, the storage space used by the destination database will be larger than the source database after the task is complete.
    
-   Oracle treats empty strings of the \`VARCHAR\` or \`VARCHAR2\` type as \`NULL\`. If you are synchronizing or migrating data between heterogeneous databases with an Oracle destination, remove the NOT NULL constraints from \`VARCHAR\` and \`VARCHAR2\` fields in the Oracle database. Otherwise, the DTS instance may fail.
    
-   In Oracle, fields with character precision, such as \`VARCHAR\` and \`VARCHAR2\`, can store a maximum of 4000 bytes. If you are synchronizing or migrating data between heterogeneous databases with an Oracle destination and data fails to write to a \`VARCHAR\` or \`VARCHAR2\` field, change the field type to \`CLOB\` and restart the DTS instance.
    

## Database configuration

-   For a full task with an Oracle source, no special configuration is required on the source database.
    
-   For an incremental task with an Oracle source, you must complete the following configurations on the Oracle database to capture incremental changes by scraping and parsing the source logs.
    
-   For a full or incremental task with an Oracle destination, no special configuration is required on the destination database.
    

### **Self-managed Oracle as a source**

#### Enable ARCHIVELOG mode

1.  Check if ARCHIVELOG mode is enabled on the source database.
    
    ```
    archive log list;
    ```
    
    **Note**
    
    -   If the **Database log mode** is set to **Archive Mode**, ARCHIVELOG mode is already enabled. Proceed to [Enable supplemental logging](#57d95e3164msc).
        
    -   The retention period for archived logs must be at least 3 days.
        
    
2.  Restart the database.
    
    **Important**
    
    To avoid service disruptions, perform this operation during off-peak hours.
    
    ```
    shutdown immediate;
    startup mount;
    ```
    
3.  Enable ARCHIVELOG mode.
    
    ```
    alter database archivelog;
    alter database open;
    ```
    
4.  Verify that the ARCHIVELOG mode configuration is effective.
    
    ```
    archive log list;
    ```
    

#### **Enable supplemental logging**

DTS supports two modes for supplemental logging: database-level and table-level. You can choose a mode based on your requirements.

-   Database-level supplemental logging: This mode improves the stability of the DTS task.
    
-   Table-level supplemental logging: This mode saves disk space on the source Oracle database. However, if the migration granularity is at the database level, tables that are added using Data Definition Language (DDL) and do not have supplemental logging enabled are not migrated.
    

## Enable database-level supplemental logging

1.  Check if database-level supplemental logging is enabled.
    
    ```
    SELECT supplemental_log_data_min, supplemental_log_data_pk,supplemental_log_data_ui FROM v$database;
    ```
    
    If the output is as follows, database-level supplemental logging is enabled and you do not need to perform the subsequent steps.
    
    ```
    SUPPLEME SUP SUP
    -------- --- ---
    IMPLICIT YES YES
    ```
    
2.  Enable minimal supplemental logging for the database.
    
    ```
    alter database add supplemental log data;
    ```
    
3.  Enable supplemental logging for primary keys and unique keys at the database level.
    
    ```
    alter database add supplemental log data (primary key,unique index) columns;
    ```
    
4.  Verify that database-level supplemental logging is enabled.
    
    ```
    SELECT supplemental_log_data_min, supplemental_log_data_pk,supplemental_log_data_ui FROM v$database;
    ```
    

## Enable table-level supplemental logging

1.  Enable minimal supplemental logging.
    
    ```
    alter database add supplemental log data;
    ```
    
2.  Enable table-level supplemental logging. You can choose one of the following methods.
    
    -   Enable primary key supplemental logging for the table
        
        ```
        alter table <table_name> add supplemental log data (primary key) columns;
        ```
        
    -   Enable all-column supplemental logging for the table
        
        ```
        alter table <table_name> add supplemental log data (all) columns;
        ```
        

### Amazon RDS for Oracle as a source

#### Enable ARCHIVELOG mode

Run the following commands to view and set the retention period for archived logs.

```
exec rdsadmin.rdsadmin_util.show_configuration;
exec rdsadmin.rdsadmin_util.set_configuration('archivelog retention hours', 72);
```

#### Enable supplemental logging

DTS supports two modes for supplemental logging: database-level and table-level. You can choose a mode based on your requirements.

-   Database-level supplemental logging: This mode improves the stability of the DTS task.
    
-   Table-level supplemental logging: This mode saves disk space on the source Oracle database. However, if the migration granularity is at the database level, tables that are added using Data Definition Language (DDL) and do not have supplemental logging enabled are not migrated.
    

## Enable database-level supplemental logging

1.  Check if database-level supplemental logging is enabled.
    
    ```
    SELECT supplemental_log_data_min, supplemental_log_data_pk,supplemental_log_data_ui FROM v$database;
    ```
    
    If the output is as follows, database-level supplemental logging is enabled and you do not need to perform the subsequent steps.
    
    ```
    SUPPLEME SUP SUP
    -------- --- ---
    IMPLICIT YES YES
    ```
    
2.  Enable forced logging mode.
    
    ```
    exec rdsadmin.rdsadmin_util.force_logging(p_enable => true);
    ```
    
3.  Enable supplemental logging for primary keys and unique keys at the database level.
    
    ```
    exec rdsadmin.rdsadmin_util.alter_supplemental_logging('ADD', 'PRIMARY KEY');
    exec rdsadmin.rdsadmin_util.alter_supplemental_logging('ADD', 'UNIQUE');
    ```
    

## Enable table-level supplemental logging

1.  Enable all-column supplemental logging for the table.
    
    ```
    exec rdsadmin.rdsadmin_util.alter_supplemental_logging('ADD', 'ALL');
    ```
    
2.  Enable primary key supplemental logging for the table.
    
    ```
    exec rdsadmin.rdsadmin_util.alter_supplemental_logging('ADD', 'PRIMARY KEY');
    ```
    

### Oracle as a destination

No special configuration is required.

## Database account preparations

### Oracle as a source

When you use DTS to synchronize or migrate data from an Oracle source, you must create a database account for data collection and grant the required permissions to the account. The required permissions vary based on the task type:

-   For schema and full tasks, you can grant the DBA role or fine-grained permissions.
    
-   For incremental tasks, you must grant fine-grained permissions.
    
    **Important**
    
    For incremental tasks from a non-container database (non-CDB) Oracle source, you can also grant the DBA role to the data collection account.
    

#### **Grant the DBA role**

```
# Create a database account (for example, rdsdt_dtsacct) and grant permissions.
create user rdsdt_dtsacct identified by rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;

grant connect to rdsdt_dtsacct;
grant dba to rdsdt_dtsacct;

# Log on with the rdsdt_dtsacct account and check if the permissions are granted.
select * from user_tab_privs;
select granted_role from user_role_privs;
```

#### **Fine-grained permissions for schema and full tasks**

```
# Create a database account (for example, rdsdt_dtsacct) and grant permissions.
create user rdsdt_dtsacct identified by rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;

grant connect to rdsdt_dtsacct;
grant select_catalog_role to rdsdt_dtsacct;
grant select any table to rdsdt_dtsacct;

# Log on with the rdsdt_dtsacct account and check if the permissions are granted.
select * from user_role_privs;
select * from user_sys_privs;
```

#### **Fine-grained permissions for incremental tasks**

## Oracle 10g and 11g

```
# Create a database account (for example, rdsdt_dtsacct) and grant permissions.
create user rdsdt_dtsacct identified by rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;

grant connect to rdsdt_dtsacct;
grant select_catalog_role to rdsdt_dtsacct;

grant select any table to rdsdt_dtsacct;
grant select any transaction to rdsdt_dtsacct;

grant select on all_objects to rdsdt_dtsacct;
grant select on all_tab_cols to rdsdt_dtsacct;
grant select on dba_registry to rdsdt_dtsacct;
grant execute on sys.dbms_logmnr to rdsdt_dtsacct;

grant select on v_$log to rdsdt_dtsacct;
grant select on v_$logfile to rdsdt_dtsacct;
grant select on v_$standby_log to rdsdt_dtsacct;
-- Grant the v_$standby_log permission if the Oracle database is an ADG secondary database.
grant select on v_$archived_log to rdsdt_dtsacct;
grant select on v_$parameter to rdsdt_dtsacct;
grant select on v_$database to rdsdt_dtsacct;
grant select on v_$active_instances to rdsdt_dtsacct;
grant select on v_$instance to rdsdt_dtsacct;
grant select on v_$logmnr_contents to rdsdt_dtsacct;

grant select on sys.USER$ to rdsdt_dtsacct;
grant select on sys.OBJ$ to rdsdt_dtsacct;
grant select on sys.COL$ to rdsdt_dtsacct;
grant select on sys.IND$ to rdsdt_dtsacct;
grant select on sys.ICOL$ to rdsdt_dtsacct;
grant select on sys.CDEF$ to rdsdt_dtsacct;
grant select on sys.CCOL$ to rdsdt_dtsacct;
grant select on sys.TABPART$ to rdsdt_dtsacct;
grant select on sys.TABSUBPART$ to rdsdt_dtsacct;
grant select on sys.TABCOMPART$ to rdsdt_dtsacct;

# Log on with the rdsdt_dtsacct account and check if the permissions are granted.
select * from user_role_privs;
select * from user_sys_privs;
select * from user_tab_privs;
```

## Oracle 12c to 19c (non-CDB)

```
# Create a database account (for example, rdsdt_dtsacct) and grant permissions.
create user rdsdt_dtsacct IDENTIFIED BY rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;

grant connect to rdsdt_dtsacct;
grant select_catalog_role to rdsdt_dtsacct;
grant logmining to rdsdt_dtsacct;
grant execute_catalog_role to rdsdt_dtsacct;

grant select any table to rdsdt_dtsacct;
grant select any transaction to rdsdt_dtsacct;

grant select on all_objects to rdsdt_dtsacct;
grant select on all_tab_cols to rdsdt_dtsacct;
grant select on dba_registry to rdsdt_dtsacct;
grant execute on sys.dbms_logmnr to rdsdt_dtsacct;

grant select on v_$log to rdsdt_dtsacct;
grant select on v_$logfile to rdsdt_dtsacct;
grant select on v_$standby_log to rdsdt_dtsacct;
-- Grant the v_$standby_log permission if the Oracle database is an ADG secondary database.
grant select on v_$archived_log to rdsdt_dtsacct;
grant select on v_$parameter to rdsdt_dtsacct;
grant select on v_$database to rdsdt_dtsacct;
grant select on v_$active_instances to rdsdt_dtsacct;
grant select on v_$instance to rdsdt_dtsacct;
grant select on v_$logmnr_contents to rdsdt_dtsacct;

grant select on sys.USER$ to rdsdt_dtsacct;
grant select on sys.OBJ$ to rdsdt_dtsacct;
grant select on sys.COL$ to rdsdt_dtsacct;
grant select on sys.IND$ to rdsdt_dtsacct;
grant select on sys.ICOL$ to rdsdt_dtsacct;
grant select on sys.CDEF$ to rdsdt_dtsacct;
grant select on sys.CCOL$ to rdsdt_dtsacct;
grant select on sys.TABPART$ to rdsdt_dtsacct;
grant select on sys.TABSUBPART$ to rdsdt_dtsacct;
grant select on sys.TABCOMPART$ to rdsdt_dtsacct;

# Log on with the rdsdt_dtsacct account and check if the permissions are granted.
select * from user_role_privs;
select * from user_sys_privs;
select * from user_tab_privs;
```

## Oracle 12c to 19c (CDB)

**Important**

The account name that you create in the pluggable database (PDB) must be the same as the account name that you create in the CDB$ROOT container, excluding the C## prefix for common users.

```
# Switch to the PDB, create a database account (for example, rdsdt_dtsacct), and grant permissions.
alter session set container = ORCLPDB1;

create user rdsdt_dtsacct identified by rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;

grant connect to rdsdt_dtsacct;
grant select_catalog_role to rdsdt_dtsacct;
grant logmining TO rdsdt_dtsacct;
grant execute_catalog_role to rdsdt_dtsacct;

grant select any table to rdsdt_dtsacct;
grant select any transaction to rdsdt_dtsacct;

grant select on all_objects to rdsdt_dtsacct;
grant select on all_tab_cols to rdsdt_dtsacct;
grant select on dba_registry to rdsdt_dtsacct;
grant execute on sys.dbms_logmnr to rdsdt_dtsacct;

grant select on v_$pdbs to rdsdt_dtsacct;
grant select on v_$log to rdsdt_dtsacct;
grant select on v_$logfile to rdsdt_dtsacct;
grant select on v_$standby_log to rdsdt_dtsacct;
-- Grant the v_$standby_log permission if the Oracle database is an ADG secondary database.
grant select on v_$archived_log to rdsdt_dtsacct;
grant select on v_$parameter to rdsdt_dtsacct;
grant select on v_$database to rdsdt_dtsacct;
grant select on v_$active_instances to rdsdt_dtsacct;
grant select on v_$instance to rdsdt_dtsacct;
grant select on v_$logmnr_contents to rdsdt_dtsacct;

grant select on sys.USER$ to rdsdt_dtsacct;
grant select on sys.OBJ$ to rdsdt_dtsacct;
grant select on sys.COL$ to rdsdt_dtsacct;
grant select on sys.IND$ to rdsdt_dtsacct;
grant select on sys.ICOL$ to rdsdt_dtsacct;
grant select on sys.CDEF$ to rdsdt_dtsacct;
grant select on sys.CCOL$ to rdsdt_dtsacct;
grant select on sys.TABPART$ to rdsdt_dtsacct;
grant select on sys.TABSUBPART$ to rdsdt_dtsacct;
grant select on sys.TABCOMPART$ to rdsdt_dtsacct;

# Switch to CDB$ROOT, create the account, and grant permissions.
alter session set container = CDB$ROOT;

# Create a database account (for example, rdsdt_dtsacct) and grant permissions. If you use this method, you must modify the default parameters of the Oracle database.
alter session set "_ORACLE_SCRIPT"=true;
create user rdsdt_dtsacct identified by rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;
grant connect to rdsdt_dtsacct;
grant logmining to rdsdt_dtsacct;
grant execute_catalog_role to rdsdt_dtsacct;
grant select on v_$logmnr_contents to rdsdt_dtsacct;
grant execute on sys.dbms_logmnr to rdsdt_dtsacct;

# Log on with the rdsdt_dtsacct account and check if the permissions are granted.
select * from user_role_privs;
select * from user_sys_privs;
select * from user_tab_privs;
```

## Amazon RDS for Oracle (non-CDB)

**Note**

Use Oracle SQL Developer to grant permissions.

```
# Create a database account (for example, RDSDT_DTSACCT) and grant permissions.
create user rdsdt_dtsacct identified by rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;

grant connect to rdsdt_dtsacct;
grant logmining to rdsdt_dtsacct;
grant execute_catalog_role to rdsdt_dtsacct;

grant select any table to rdsdt_dtsacct;
grant select any transaction to rdsdt_dtsacct;

exec rdsadmin.rdsadmin_util.grant_sys_object('V_$LOGMNR_LOGS','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('ALL_OBJECTS','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('ALL_TAB_COLS','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('DBA_REGISTRY','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('V_$LOG','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('V_$LOGFILE','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('V_$ARCHIVED_LOG','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('V_$PARAMETER','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('V_$DATABASE','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('V_$ACTIVE_INSTANCES','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('V_$INSTANCE','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('V_$LOGMNR_CONTENTS','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('DBMS_LOGMNR','RDSDT_DTSACCT','EXECUTE');

exec rdsadmin.rdsadmin_util.grant_sys_object('USER$','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('OBJ$','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('COL$','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('IND$',  'RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('ICOL$','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('CDEF$','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('CCOL$','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('TABPART$','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('TABSUBPART$','RDSDT_DTSACCT','SELECT');
exec rdsadmin.rdsadmin_util.grant_sys_object('TABCOMPART$','RDSDT_DTSACCT','SELECT');

# Log on with the RDSDT_DTSACCT account and check if the permissions are granted.
select * from user_role_privs;
select * from user_sys_privs;
select * from user_tab_privs;
```

### Oracle as a destination

When you use DTS to synchronize or migrate data to an Oracle destination, you must create a database account for data replication and grant the required permissions to the account. The required permissions vary based on the task type:

-   For schema tasks, you must grant the DBA role.
    
-   For full and incremental tasks, you must grant the resource role.
    

#### Grant the DBA role

```
# Create a database account (for example, rdsdt_dtsacct) and grant permissions.
create user rdsdt_dtsacct identified by rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;

grant connect to rdsdt_dtsacct;
grant dba to rdsdt_dtsacct;

# Log on with the rdsdt_dtsacct account and check if the permissions are granted.
select * from user_tab_privs;
select granted_role from user_role_privs;
```

#### Grant the resource role

```
# Create a database account (for example, rdsdt_dtsacct) and grant permissions.
create user rdsdt_dtsacct identified by rdsdt_dtsacct;
grant create session to rdsdt_dtsacct;

grant connect to rdsdt_dtsacct;
grant resource to rdsdt_dtsacct;

# Log on with the rdsdt_dtsacct account and check if the permissions are granted.
select * from user_tab_privs;
select granted_role from user_role_privs;
```

## What to do next

Configure a task with an Oracle source or destination. For more information, see the relevant configuration topics in [Synchronization solutions](/help/en/dts/user-guide/data-synchronization-scenarios#concept-1732301) or [Migration solutions](/help/en/dts/user-guide/overview-of-data-migration-scenarios#concept-26618-zh).

## Appendix

The following tables list the Oracle data types and character sets that are supported by DTS tasks.

## Data types

**Supported**

**Not supported**

-   NUMBER
    
-   FLOAT
    
-   REAL
    
-   BINARY\_FLOAT
    
-   CHAR \[(size \[BYTE | CHAR\])\]
    
-   NCHAR\[(size)\]
    
-   VARCHAR2(size \[BYTE | CHAR\])
    
-   NVARCHAR2(size)
    
-   CLOB
    
-   NCLOB
    
-   LONG
    
-   DATE
    
-   XMLTYPE: Stored as Character Large Object (CLOB) is supported. Stored as Binary Large Object (BLOB) is not supported.
    
    **Note**
    
    Character Large Object (CLOB) storage mode is supported. Binary Large Object (BLOB) storage mode is not supported.
    
-   RAW(size)
    
-   LONG\_RAW
    
-   BLOB
    
-   TIMESTAMP\[fractional\_seconds\_precision\]
    
-   TIMESTAMP \[(fractional\_seconds\_precision)\] WITH TIME ZONE
    
-   TIMESTAMP \[(fractional\_seconds\_precision)\] WITH LOCAL TIME ZONE
    
-   INTERVAL YEAR \[(year\_precision)\] TO MONTH
    
-   INTERVAL DAY \[(day\_precision)\] TO SECOND \[(fractional\_seconds\_precision)\]
    

-   SDO\_GEOMETRY
    
-   SDO\_TOPO\_GEOMETRY
    
-   SDO\_GEORASTER
    
-   ROWID
    
-   UROWID
    
-   ANYTYPE
    
-   ANYDATA
    
-   ANYDATASET
    
-   VARRAY
    
-   User-defined types
    

## Character sets

**Supported**

**Not supported**

ASCII, ISO, UNICODE, US7ASCII, WE8HP, US8PC437, WE8EBCDIC285, WE8PC850, D7DEC, F7DEC, S7DEC, E7DEC, SF7ASCII, NDK7DEC, I7DEC, NL7DEC, CH7DEC, YUG7ASCII, SF7DEC, TR7DEC, IW7IS960, IN8ISCII, EE8ISO8859P2, SE8ISO8859P3, NEE8ISO8859P4, CL8ISO8859P5, AR8ISO8859P6, EL8ISO8859P7, IW8ISO8859P8, WE8ISO8859P9, NE8ISO8859P10, TH8TISASCII, BN8BSCII, VN8VN3, VN8MSWIN1258, WE8NEXTSTEP, AR8ASMO708PLUS, AR8EBCDICX, AR8XBASIC, EL8DEC, TR8DEC, WE8EBCDIC37, WE8EBCDIC37C, WE8EBCDIC500, WE8EBCDIC500C, WE8EBCDIC871, WE8EBCDIC284, EEC8EUROASCI, EEC8EUROPA3, LA8PASSPORT, BG8PC437S, EE8PC852, RU8PC866, RU8BESTA, IW8PC1507, RU8PC855, TR8PC857, CL8MACCYRILLIC, CL8MACCYRILLICS, WE8PC860, IS8PC861, EE8MSWIN1250, CL8MSWIN1251, ET8MSWIN923, BG8MSWIN, EL8MSWIN1253, IW8MSWIN1255, LT8MSWIN921, TR8MSWIN1254, WE8MSWIN1252, BLT8MSWIN1257, D8EBCDIC273, I8EBCDIC280, DK8EBCDIC277, S8EBCDIC278, F8EBCDIC297, IW8EBCDIC1086, N8PC865, BLT8CP921, LV8PC1117, LV8PC8LR, LV8RST104090, CL8KOI8R, BLT8PC775, F7SIEMENS9780X, E7SIEMENS9780X, S7SIEMENS9780X, DK7SIEMENS9780X, N7SIEMENS9780X, I7SIEMENS9780X, D7SIEMENS9780X, WE8GCOS7, EL8GCOS7, US8BS2000, D8BS2000, F8BS2000, E8BS2000, DK8BS2000, S8BS2000, WE8BS2000, WE8BS2000L5, CL8BS2000, WE8DG, WE8NCR4970, WE8ROMAN8, EE8MACCE, EE8MACCES, EE8MACCROATIAN, EE8MACCROATIANS, TR8MACTURKISH, TR8MACTURKISHS, IS8MACICELANDIC, IS8MACICELANDICS, EL8MACGREEK, EL8MACGREEKS, IW8MACHEBREW, IW8MACHEBREWS, US8ICL, WE8ICL, WE8ISOICLUK, WE8MACROMAN8, WE8MACROMAN8S, TH8MACTHAI, TH8MACTHAIS, HU8CWI2, EL8PC437S, EL8PC737, LT8PC772, LT8PC774, EL8PC869, EL8PC851, CDN8PC863, HU8ABMOD, AR8ASMO8X, AR8HPARABIC8T, AR8NAFITHA711, AR8NAFITHA711T, AR8SAKHR707, AR8SAKHR707T, AR8MUSSAD768, AR8MUSSAD768T, AR8ADOS710, AR8ADOS710T, AR8ADOS720, AR8ADOS720T, AR8APTEC715, AR8APTEC715T, AR8MSAWIN, AR8NAFITHA721, AR8NAFITHA721T, AR8SAKHR706, AR8ARABICMAC, AR8ARABICMACS, AR8ARABICMACT, LA8ISO6937, US8NOOP, WE8DEC, WE8DECTST, JA16VMS, JA16EUC, JA16EUCYEN, JA16EUCTILDE, JA16DBCS, JA16SJIS, JA16SJISTILDE, JA16SJISYEN, JA16EBCDIC930, JA16MACSJIS, KO16KSC5601, KO16DBCS, KO16KSCCS, KO16MSWIN949, ZHS16CGB231280, ZHS16MACCGB231280, ZHS16GBK, ZHS16DBCS, ZHS32GB18030, ZHT32EUC, ZHT32SOPS, ZHT16DBT, ZHT32TRIS, ZHT16DBCS, ZHT16BIG5, ZHT16CCDC, ZHT16MSWIN950, AL24UTFFSS, UTF8, UTFE, KO16TSTSET, JA16TSTSET2, JA16TSTSET, US16TSTFIXED, AL16UTF16LE, TH8TISEBCDIC, TH8TISEBCDICS, BLT8EBCDIC1112, BLT8EBCDIC1112S, CE8BS2000, CL8EBCDIC1025, CL8EBCDIC1025C, CL8EBCDIC1025R, CL8EBCDIC1025S, CL8EBCDIC1025X, CL8EBCDIC1158, CL8EBCDIC1158R, D8EBCDIC1141, DK8EBCDIC1142, EE8BS2000, EE8EBCDIC870, EE8EBCDIC870C, EE8EBCDIC870S, EL8EBCDIC423R, EL8EBCDIC875, EL8EBCDIC875S, EL8EBCDIC875R, F8EBCDIC1147, I8EBCDIC1144, WE8BS2000E, WE8EBCDIC1047, WE8EBCDIC1047E, WE8EBCDIC1140, WE8EBCDIC1140C, WE8EBCDIC1145, WE8EBCDIC1146, WE8EBCDIC1148, WE8EBCDIC1148C, AR8EBCDIC420S, IW8EBCDIC424, IW8EBCDIC424S, TR8EBCDIC1026, TR8EBCDIC1026S, ZHT16HKSCS, ZHT16HKSCS31, BLT8ISO8859P13, WE8ISO8859P1, WE8ISO8859P15, AR8MSWIN1256, S8EBCDIC1143, AZ8ISO8859P9E, CEL8ISO8859P14, CL8ISOIR111, CL8KOI8U, WE8PC858, WE8EBCDIC924, AL32UTF8, AL16UTF16

Other character sets
