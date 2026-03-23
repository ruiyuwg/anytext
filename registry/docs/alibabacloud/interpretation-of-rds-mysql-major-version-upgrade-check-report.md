This topic describes the common error messages that are returned during a precheck for a major version upgrade of an ApsaraDB RDS for MySQL instance. This topic also describes the details of each check item, possible causes of errors, and solutions.

The following table describes common error messages. If you encounter other error messages, you can submit a ticket.

**Check item**

**Error message**

**Check content**

**Possible cause**

**Solution**

check\_ins\_major\_version

The current engine version does not support this operation.

Checks whether the current instance version meets the prerequisites for a major version upgrade.

The instance version is not MySQL 5.6 or MySQL 5.7. The upgrade path is not from MySQL 5.6 to MySQL 5.7 or from MySQL 5.7 to MySQL 8.0.

For more information, see [Prerequisites for a major version upgrade](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance).

check\_ins

The specified instance does not exist or is not supported.

Checks whether the current instance exists.

The instance does not exist or was deleted.

Verify that the instance exists. You must perform the check on an existing ApsaraDB RDS for MySQL instance.

check\_ins\_status

The current DB instance state does not support this operation.

Checks whether the instance is in the Running state.

The instance is not in the Running state because other operations, such as an instance restart or network connection creation, are in progress.

Wait for the current task to complete. After the instance status changes to Running, initiate the major version upgrade check again.

check\_master\_ins

The current DB instance type does not support this operation.

Checks whether the instance to be upgraded is a primary instance.

The instance to be upgraded is a disaster recovery instance or a read-only instance.

Ensure that the instance to be upgraded is a primary instance.

check\_ins\_locked\_state

The current DB instance lock mode does not support this operation.

Checks whether the instance is locked.

The instance is in the Locking state.

Unlock the instance. Wait until the instance status changes to Running, and then perform the upgrade check again. For more information, see [What do I do if my instance is in the Locking state?](/help/en/rds/apsaradb-rds-for-mysql/what-do-i-do-if-my-apsaradb-rds-instance-is-in-the-locking-state)

check\_maxscale\_kernel

The Maxscale version of the instance is too low. Upgrade the Maxscale version first.

Checks whether the minor version of the database proxy is supported.

The instance uses a proxy, and the minor version of the proxy is earlier than 1.13.41.

First, [upgrade the minor version of the proxy to a supported version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-dedicated-proxy-version-of-an-apsaradb-rds-for-mysql-instance), and then upgrade the database version.

check\_ins\_tde\_state

This instance is not configured with the specified TDE status.

Checks whether transparent data encryption (TDE) is enabled for the current instance.

TDE is enabled for the instance.

If TDE is enabled for an instance, you cannot directly upgrade the major version in the console. For more information, see [Upgrade the database version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance#title-0z1-r56-hqe).

check\_target\_ins\_level

The current DB instance class does not support this operation.

(Error code: `InvalidInstanceLevel.Malformed`)

Checks whether the current instance type is available for purchase.

The major version cannot be directly upgraded because the current instance type is a [phased-out instance type](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg).

You cannot directly upgrade the major version of an instance that uses a phased-out instance type. You must first [change the instance to a currently available instance type](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb), and then upgrade the database version.

check\_target\_read\_level

The read-only instance class is not supported in the target instance.

Checks whether the instance type of the current read-only instance is available for purchase.

The instance type of the read-only instance is phased out.

The instance uses local SSDs. You must change the current read-only instance to an available instance type, and then perform the check again.

-   For more information about how to upgrade the instance type, see [Change the instance configuration](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance).
    
-   To query available instance types, see [Instance types for standard read-only instances](/help/en/rds/apsaradb-rds-for-mysql/read-only-apsaradb-rds-for-mysql-instance-types) or [Instance types for Yitian read-only instances](/help/en/rds/apsaradb-rds-for-mysql/read-only-apsaradb-rds-for-mysql-instance-types-5).
    

check\_upgrade\_check\_task

The task already exists.

Checks whether a major version upgrade precheck task already exists for the current instance.

A major version upgrade precheck task is in progress for the current instance.

Wait for the precheck task to complete. After the instance status changes to Running, perform the check again.

check\_upgrade\_task

The task already exists.

Checks whether a major version upgrade task already exists for the current instance.

A major version upgrade task is in progress for the current instance.

Wait for the major version upgrade task to complete. After the instance status changes to Running, perform the check again.

check\_storage\_type

Standard SSDs do not support this operation. Please upgrade to ESSD.

Checks whether the current instance uses standard SSDs.

The current instance uses standard SSDs.

First, [upgrade the storage type to enterprise SSD (ESSD)](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-storage-type-of-an-apsaradb-rds-for-mysql-instance-from-standard-ssds-to-essds).

check\_source\_category

The specified source category is invalid.

Checks the current instance edition.

The current instance is not on the Basic Edition or High-availability Edition.

Upgrade checks are not supported for instances that are not on the High-availability Edition or Basic Edition.

check\_ins\_biz\_type

The specified business type is invalid.

Checks whether the current instance is a public cloud instance.

The current instance is not a public cloud instance.

Currently, upgrade checks are supported only for public cloud instances.

check\_ins\_tables\_number

Upgrade not allowed due to an excessive number of tables: more than 1,000,000.

or

Upgrade not allowed due to excessive number of tables: more than 1000,000.

Checks the number of data tables in the instance.

-   The number of data tables on an instance that uses local SSDs exceeds 1,000,000.
    
-   The number of data tables on an instance that uses cloud disks exceeds 1,000,000.
    

Delete redundant data tables before you perform the upgrade check.

check\_ins\_db\_engine

The instance contains tables that use the MyISAM, Memory, TokuDB, Sphinx, or RocksDB engine.

Checks whether the instance database contains tables that use the MyISAM, Memory, TokuDB, Sphinx, or RocksDB engine.

The database instance contains tables that use the MyISAM, Memory, TokuDB, Sphinx, or RocksDB engine. Upgrades are not supported for these engines.

First, convert the table engine to the InnoDB engine. If your database already uses the InnoDB engine but some tables still use other engines, run the `ALTER TABLE <table_name> engine=InnoDB;` command to convert the tables to the InnoDB engine before you upgrade.

check\_ins\_fts

The current instance has a full-text index, and its minor version is earlier than 20221130.

Checks whether the instance database has a full-text index and whether the minor version is earlier than 20221130.

-   In older MySQL versions, a full-text index might be created on the system tablespace. During a major version upgrade, these indexes can cause tablespace corruption. To prevent data corruption, you must handle these indexes before the upgrade.
    
-   This issue is fixed in RDS for MySQL 5.6 minor version 20221130, where the full-text index is created on a separate tablespace.
    

In RDS for MySQL 5.6, the full-text index is created on the system tablespace. Therefore, when you upgrade from RDS for MySQL 5.6 to RDS for MySQL 5.7, you must clear the full-text index from the system tablespace in advance. Make sure that the minor version of your RDS for MySQL 5.6 instance is 20221130 or later. If your version is earlier, first [upgrade to the latest RDS for MySQL 5.6 version](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance).

1.  Based on the table name in the prompt, delete the full-text index created on the system tablespace.
    
    ```
    ALTER TABLE $table_name DROP INDEX $fts_name;
    ```
    
2.  Recreate the full-text index.
    
    ```
    ALTER TABLE $table_name ADD FULLTEXT INDEX $fts_name;
    ```
    
3.  After the index is created, you can run the following SQL statement to check the full-text index of the current instance. The SQL statement returns the full-text index created on the system tablespace. If the query returns an empty result, the upgrade from RDS for MySQL 5.6 to RDS for MySQL 5.7 will not fail due to index issues.
    
    ```
    SELECT NAME FROM information_schema.INNODB_SYS_TABLES WHERE TABLE_ID IN ( SELECT CONV(SUBSTRING_INDEX(SUBSTRING_INDEX(NAME, '_', -4),'_', 1),16,10) FROM INNODB_SYS_TABLES WHERE NAME LIKE '%fts_00000000%' AND SPACE = 0);
    ```
    

check\_read\_ins\_number

The number of read-only instances cannot be greater than 8.

Checks that the number of read-only instances that use local SSDs is not greater than 8.

The number of read-only instances for the current instance that uses local SSDs is greater than 8.

Release the extra read-only instances. You can create them again after the upgrade is complete.

check\_slave\_state

The secondary node is unhealthy or has replication delays.

Checks the status and latency information of the secondary node.

The secondary node is in an abnormal state or has a replication delay.

You can view the Node Replication Thread Status (seconds) and Node Replication Latency (seconds) monitoring metrics in the console. Wait for the secondary node status to return to normal, and then perform the check again.

check\_account

The instance has an aliyun\_root account.

You can check the account.

A user manually created an aliyun\_root account in RDS for MySQL 5.6.

The aliyun\_root account is a default account in RDS for MySQL 5.7 and later. If you manually created an aliyun\_root account in version 5.6, a duplicate name error is reported during the upgrade to version 5.7. You must delete or modify the aliyun\_root account before the upgrade check. For more information, see [System accounts](/help/en/rds/apsaradb-rds-for-mysql/system-accounts-of-an-apsaradb-rds-for-mysql-instance).

check\_sys\_schema

The instance already has a sys database.

Checks whether the sys database exists in the instance.

The sys database exists by default in RDS for MySQL 5.7. If the sys database exists in RDS for MySQL 5.6, the upgrade from 5.6 to 5.7 fails.

If the sys database exists, you must rename it. Because MySQL does not support `RENAME DATABASE`, you must manually run `ALTER TABLE RENAME` for each table.

```
SELECT * FROM information_schema.SCHEMATA WHERE SCHEMA_NAME='sys';
```

check\_table\_discard

The instance contains discarded tables.

Checks whether discarded tables exist in the instance. These are tables on which the `ALTER TABLE discard TABLESPACE` operation was performed.

Discarded tables exist in the instance.

Query and delete the discarded tables.

```
SELECT space,name FROM INFORMATION_SCHEMA.INNODB_SYS_TABLESPACES WHERE FS_BLOCK_SIZE=0 AND FILE_SIZE=0 AND name NOT LIKE '%#sql%';
```

check\_table\_foreign\_key

A partitioned table contains foreign keys.

Checks whether partitioned tables in the instance contain foreign keys.

A partitioned table contains foreign keys or is referenced by a foreign key of another table.

Resolve the conflicts between foreign keys and partitioned tables.

1.  Query the partitioned tables that contain foreign keys.
    
    ```
    SELECT DISTINCT a.TABLE_SCHEMA, a.TABLE_NAME
    FROM information_schema.TABLE_CONSTRAINTS a, information_schema.PARTITIONS b
    WHERE a.CONSTRAINT_TYPE='FOREIGN KEY'
    AND a.TABLE_SCHEMA = b.TABLE_SCHEMA
    AND a.TABLE_NAME = b.TABLE_NAME
    AND (b.PARTITION_NAME IS NOT NULL OR b.SUBPARTITION_NAME IS NOT NULL);
    ```
    
2.  Query the partitioned tables that are referenced by foreign keys of other tables.
    
    ```
    SELECT DISTINCT a.TABLE_SCHEMA, a.TABLE_NAME, a.REFERENCED_TABLE_SCHEMA, a.REFERENCED_TABLE_NAME
    FROM information_schema.KEY_COLUMN_USAGE a, information_schema.PARTITIONS b
    WHERE a.REFERENCED_TABLE_SCHEMA = b.TABLE_SCHEMA
    AND a.REFERENCED_TABLE_NAME = b.TABLE_NAME
    AND (b.PARTITION_NAME IS NOT NULL OR b.SUBPARTITION_NAME IS NOT NULL);
    ```
    

check\_column\_length

One or more views have a column name with a length of 64 or more characters.

Checks for views that have a column name with a length of 64 or more characters.

One or more views have a column name with a length of 64 or more characters. This is not supported.

Query for the views and then delete them or modify the length of the column names.

```
SELECT TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME IN (SELECT TABLE_NAME FROM INFORMATION_SCHEMA.VIEWS) AND CHAR_LENGTH(COLUMN_NAME) >= 64;
```

check\_foreign\_key\_constraint

One or more tables have a foreign key constraint name with a length greater than 64 characters.

Checks for tables that have a foreign key constraint name with a length greater than 64 characters.

One or more tables have a foreign key constraint name with a length greater than 64 characters.

Query for the tables and then delete them or modify the length of the foreign key constraint names.

```
SELECT TABLE_SCHEMA, TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME IN (SELECT LEFT(SUBSTR(ID,INSTR(ID,'/')+1),INSTR(SUBSTR(ID,INSTR(ID,'/')+1),'_ibfk_')-1) FROM INFORMATION_SCHEMA.INNODB_SYS_FOREIGN WHERE CHAR_LENGTH(SUBSTR(ID,INSTR(ID,'/')+1))>64);
```

check\_dictionary\_table

The MySQL 5.7 system database contains tables with names that conflict with the MySQL 8.0 data dictionary.

Checks whether tables in the MySQL 5.7 system database have the same names as tables used by the MySQL 8.0 data dictionary.

Tables in the MySQL 5.7 system database have the same names as tables used by the MySQL 8.0 data dictionary.

Query for tables in the MySQL 5.7 system database that have the same names as tables used by the MySQL 8.0 data dictionary. Then, delete or rename the tables with the same names.

```
SELECT TABLE_SCHEMA, TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE LOWER(
TABLE_SCHEMA) = 'mysql' and LOWER(TABLE_NAME) IN
('catalogs', 'character_sets', 'check_constraints', 'collations',
'column_statistics', 'column_type_elements', 'columns',
'dd_properties', 'events', 'foreign_key_column_usage', 'foreign_keys',
'index_column_usage', 'index_partitions', 'index_stats',
'indexes', 'parameter_type_elements', 'parameters', 'resource_groups', 'routines',
'schemata', 'st_spatial_reference_systems',
'table_partition_values', 'table_partitions', 'table_stats', 'tables',
'tablespace_files', 'tablespaces', 'triggers', 'view_routine_usage',
'view_table_usage');
```

check\_ins\_health

The primary node of the instance is not available.

Checks whether the instance is available by testing its connectivity.

Resources such as CPU and disk are fully utilized.

You can use the [Monitoring and alerts](/help/en/rds/apsaradb-rds-for-mysql/monitoring-and-alerts-1/) feature in the console to check whether all monitoring metrics are normal.

check\_table\_index\_type

MySQL 8.0 does not support BTREE indexes on spatial data types.

When upgrading to RDS for MySQL 8.0, this item checks whether spatial data types in RDS for MySQL 5.7 contain BTREE indexes.

RDS for MySQL 8.0 does not support BTREE indexes on spatial data types.

Delete or modify the unsupported indexes.

```
SELECT DISTINCT s.* FROM INFORMATION_SCHEMA.STATISTICS s
INNER JOIN INFORMATION_SCHEMA.COLUMNS c
ON s.TABLE_SCHEMA = c.TABLE_SCHEMA
AND s.TABLE_NAME = c.TABLE_NAME
AND s.COLUMN_NAME = c.COLUMN_NAME
WHERE s.TABLE_SCHEMA NOT IN ('mysql', 'sys')
AND c.DATA_TYPE IN ('GEOMETRY', 'POINT', 'LINESTRING', 'POLYGON', 'MULTIPOINT', 
'MULTILINESTRING', 'MULTIPOLYGON', 'GEOMETRYCOLLECTION')
AND s.INDEX_TYPE = 'BTREE';
```
