This topic describes the check report of a major engine version upgrade for an ApsaraDB RDS for PostgreSQL instance. It also explains common errors in the report and provides solutions to these errors.

## **Related upgrade documents**

-   [Introduction to major engine version upgrades](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)
    
-   [Upgrade the major engine version in zero-downtime mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-zero-downtime-mode)
    
-   [Upgrade the major engine version in blue-green deployment mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode)
    
-   [Upgrade the major engine version in local upgrade mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-local-upgrade-mode)
    

## **Check items**

On the **Major Version Upgrade** page of the console, click the **Upgrade Check** tab, and then click **View Information** for the target check report to view its details.

The check modules and possible errors in the check report are as follows:

## Warnings

### **Check content**

During a major engine version upgrade of an RDS instance, the read-only time and the memory and disk resources of the RDS instance are affected by the number of its database objects. If the number of database objects is excessively large and the memory and disk resources are insufficient, the upgrade may fail. In this case, the system provides the recommended memory capacity, recommended minimum memory capacity, and recommended disk size on the Upgrade Check tab.

When you use the **zero-downtime** solution for an upgrade, the system also checks the number of Sequence tables.

-   **Recommended memory capacity**: During a major engine version upgrade, the system can provide concurrent upgrade capabilities for instances that contain multiple databases. If the memory capacity of an RDS instance is greater than or equal to the recommended memory capacity, the RDS instance is immediately upgraded to reduce the read-only time of the RDS instance.
    
-   **Recommended minimum memory capacity**: If the memory capacity of an RDS instance is greater than or equal to the recommended minimum memory capacity, the upgrade will not fail due to insufficient memory resources. However, the read-only time of the RDS instance may be extended because the system upgrades each database of the RDS instance in sequence.
    
-   **Recommended disk size**: During a major engine version upgrade, the system temporarily copies all object definitions, which doubles the consumption of inodes. During the upgrade, if the disk size is less than the recommended disk size, the upgrade may fail.
    
-   **Sequence table count check** (only for zero-downtime mode): During a zero-downtime major engine version upgrade, data is synchronized through logical replication. However, logical replication does not support the synchronization of Sequence tables. Therefore, a brief switchover time is required to complete the synchronization of Sequence tables. In a zero-downtime major engine version upgrade, the switchover time is determined by the number of Sequence tables.
    

### **Warnings and solutions**

#### **Disk warning**

-   **Warning format**: `Total disk space: {*} GB; Used disk: {*} GB; Used inodes: {*}; bytes-per-nodes: {*}; Minimum disk space required for upgrade: {*} GB`.
    
-   **Possible cause**: Too many objects require sufficient disk space.
    
-   **Solution**:
    
    -   In blue-green deployment mode, you must specify a storage capacity for the new RDS instance that is greater than or equal to the minimum disk size required for an upgrade.
        
    -   In local upgrade mode, you must expand the storage capacity of the RDS instance that you want to upgrade before the upgrade. The new storage capacity must be greater than or equal to the minimum disk size required for an upgrade. For more information, see [Change the configuration](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance).
        

#### **Memory warning**

-   **Warning format**: `Current memory: {*} GB; Recommended memory: {*} GB; Minimum memory: {*} GB`.
    
-   **Possible cause**: Too many objects require sufficient memory to minimize the read-only time of the instance during the upgrade.
    
-   **Solution**:
    
    -   For blue-green deployments, when you configure upgrade parameters, the memory in the new instance specification must be greater than or equal to the minimum memory requirement.
        
    -   In local upgrade mode, you must upgrade the specifications of the RDS instance if the memory capacity provided by the instance type is less than the recommended memory capacity. For more information, see [Change the configuration](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance).
        

#### **Subscription warning**

-   **Warning format**: `The instance has replication slot subscribers. To prevent subscription data inconsistency, see the Alibaba Cloud documentation`.
    
-   **Possible cause**: The instance has replication slot subscribers. You can check by executing `select * from pg_subscription;`.
    
-   **Solution**: See [Upgrade the database major version](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/#a28fa5614d313) for handling.
    

#### **Sequence warning**

-   **Warning format**: `Total Sequence tables: {0}. Too many Sequence tables will extend the switchover time for logical replication major version upgrade.`
    
-   **Possible cause**: The instance contains Sequence tables. You can view all Sequence tables in the database by executing `select * from pg_sequences;` .
    
-   **Solution**: If there are too many Sequence tables, we recommend that you clone the instance to test the switchover time to ensure it meets your requirements.
    

## Errors

### **Check content**

-   The system checks whether an unnecessary superuser account is created in the background or an invalid encryption method is configured for a standard account.
    
-   The system checks whether the upgrade check fails. If the upgrade check fails, the "pg\_upgrade error log" error message is included in the check report.
    
-   The system checks whether the pgcrypto extension is installed in the pg\_catalog schema.
    
-   (Only for zero-downtime mode) The system checks whether the minor engine version of the instance is 20250228 or later.
    
-   (Only for zero-downtime mode) The system checks for logical replication incompatibilities. Logical replication cannot synchronize certain database objects, so instances with these objects will not support zero-downtime major version upgrades. If incompatibilities exist, the check report will display the "Logical replication incompatibilities" item.
    

### Errors and solutions

#### **Account error**

-   **Error format**: `Invalid superuser account: {*}; Invalid account: {*}; Please see the Alibaba Cloud documentation`.
    
-   **Possible cause**: There are redundant superuser accounts or abnormal standard accounts.
    
-   **Solution**:
    
    -   For redundant superuser accounts, submit a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10) to contact after-sales service for deletion.
        
    -   Reset the passwords of the abnormal standard accounts.
        

#### **Pre-check error**

-   **Error format**: `pg_upgrade pre-check task failed, need to check [pg_upgrade error log] and [pg_upgrade-related files and errors]`.
    
-   **Possible cause**: Pre-check failed.
    
-   **Solution**: Please refer to [pg\_upgrade error log](#b8ba5a25055iv) to resolve the log issues.
    

#### Pgcrypto **extension error**

-   **Error format**: `The pg_crypto extension is installed in schema: pg_catalog in database: {*}, please see the Alibaba Cloud documentation`.
    
-   **Possible cause**: Because pgcrypto creates functions in pg\_catalog that only exist in higher versions, it causes the major version upgrade to fail.
    
-   **Solution**: Delete the pgcrypto extension in each database, and then create the extension in a non-pg\_catalog schema.
    

#### **Minor version error**

-   Error format: `Zero-downtime major version upgrade requires minimum minor version 20250228`.
    
-   Possible cause: The instance's minor engine version is too low.
    
-   Solution: [Upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance).
    

## Pg\_upgrade error log

### **Check content**

The system checks whether extensions and keywords that are incompatible with the new major engine version exist.

### **Common errors**

A list of problem libraries is in the file: loadable\_libraries.txt

#### **Possible cause**

Extensions that are incompatible with the new major engine version exist, and the relevant extensions are recorded in the loadable\_libraries.txt file.

#### **Solution**

Check the extensions listed in the **loadable\_libraries.txt** report item. Determine whether to delete the extension based on your business requirements. If you want to delete the extension, we recommend that you delete the extension before an upgrade. Before you delete the extension, make sure that your RDS instance can run as expected without the extension. For a list of supported extensions for each version, see: [Supported extensions](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql#concept-2331628).

A list of tables with the problem is in the file: tables\_with\_oids.txt

#### **Possible cause**

Tables were created with the `WITH OIDS` declaration, which is not supported in PostgreSQL 12 or later versions. The relevant tables are recorded in the tables\_with\_oids.txt file.

#### **Solution**

-   Method 1 (recommended): Upgrade to PostgreSQL 11, which supports the `WITH OIDS` declaration.
    
-   Method 2: Check the tables listed in the **loadable\_libraries.txt** report item. Evaluate whether your business code depends on OIDs. After confirming that it will not affect your business, execute the following statement:
    
    ```
    ALTER TABLE {table_name} SET WITHOUT OIDS;
    ```
    

## Pg\_upgrade-related files and errors

### loadable\_libraries.txt

This file contains the libraries that are incompatible with the new major engine version. You can identify incompatible extensions based on these libraries.

The following information describes the common incompatible extensions and solutions to the incompatibility issues:

pgrouting extension

#### **Possible cause**

The pgrouting extension is incompatible with the new major engine version.

#### **Solution**

Determine whether to delete the extension based on your business requirements. If you want to delete the extension, we recommend that you delete the extension before an upgrade. Before you delete the extension, make sure that your RDS instance can run as expected without the extension. For a list of supported extensions for each version, see: [Supported extensions](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql#concept-2331628).

jsonbx extension

#### **Possible cause**

Some JSON data types are not supported in PostgreSQL 9.4. To support all JSON data types, you must enable the jsonbx extension. PostgreSQL 10 and later versions support all JSON data types. If your RDS instance runs PostgreSQL 10 or a later version, you do not need to enable the jsonbx extension.

#### **Solution**

Check the functions that are used by the jsonbx extension in the new major engine version and determine whether to delete the extension based on your business requirements. If you want to delete the extension, we recommend that you delete the extension before an upgrade. Before you delete the extension, make sure that your RDS instance can run as expected without the extension.

The usage of jsonbx plugin functions differs in the following ways:

**Function usage**

**PostgreSQL 9.4 execution result**

**PostgreSQL 10 or later version execution result**

select '{"a":1, "b":2, "c":3}'::jsonb - 2;

{"a": 1, "b": 2}

ERROR: cannot delete from object using integer index

select jsonb\_delete('{"a":1, "b":2, "c":3}'::jsonb, '{b}'::text\[\]);

{"a": 1, "c": 3}

ERROR: function jsonb\_delete(jsonb, text\[\]) does not exist

select '{"a":{"c":1, "d":2}, "b":3}'::jsonb - '{a, c}'::text\[\];

{"a": {"d": 2}, "b": 3}

{"b": 3}

PostGIS and postgis\_topology extensions

#### **Possible cause**

The version of the PostGIS extension that is used is outdated and is incompatible with the specified libraries in the new major engine version. As a result, your RDS instance failed the upgrade check.

#### **Solution**

**Important**

The PostGIS extension varies in different major engine versions. For example, this extension reports different parsing errors that are related to the well-known text (WKT) format in different major engine versions. Before you update this extension, we recommend that you clone your RDS instance. You can use the cloned RDS instance to test the compatibility of this extension with the new major engine version. After you verify that this extension is compatible with the new engine version, you can update this extension in your original RDS instance. For specific cloning operations, see [Back up PostgreSQL data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#concept-l1m-xgn-ydb) and [Restore PostgreSQL data](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance#concept-rxd-d5g-2fb).

1.  Upgrade the minor engine version. For more information, see [Upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#concept-gnx-vgj-wdb11).
    
2.  Update the PostGIS extension that reports errors. For more information, see [PostGIS extension upgrade](/help/en/rds/apsaradb-rds-for-postgresql/how-do-i-update-the-plug-ins-of-ganos#9b13325505bgq).
    
3.  Execute the `\dx` command to query the extension version, and ensure that the PostGIS extension version is at least 3.3.2.
    
4.  Perform an upgrade check again.
    
    **Important**
    
    If the PostGIS extension, postgis\_topology extension, or pgrouting extension is installed on your RDS instance, take note of the following limits:
    
    -   If your RDS instance runs PostgreSQL 9.4, you can upgrade the major engine version of your RDS instance only to PostgreSQL 10 or PostgreSQL 11.
        
    -   If your RDS instance runs PostgreSQL 10, you can upgrade the major engine version of your RDS instance only to PostgreSQL 11.
        
    -   If your RDS instance runs PostgreSQL 11, PostgreSQL 12, or PostgreSQL 13, you cannot upgrade the major engine version of your RDS instance.
        
    

### tables\_with\_oids.txt

This file displays a list of tables that were declared with `WITH OIDS`.

## **Logical replication incompatibilities**

### **Check content**

-   The system checks whether foreign tables exist.
    
-   The system checks whether tables without primary keys or unique keys exist.
    
-   The system checks whether materialized views exist.
    
-   The system checks whether large objects exist.
    
-   The system checks whether logical replication prohibited extensions exist.
    
-   The system checks whether the values of parameters related to logical replication meet the requirements.
    

### **Incompatibilities and solutions**

#### **Foreign table incompatibility**

-   **Error format**: `Foreign tables in database: {0}. Total databases: {1}`.
    
-   **Possible cause**: Foreign tables exist.
    
-   **Solution**: Delete the foreign tables.
    
    1.  Execute the following SQL statement in each database of the instance to obtain information about foreign tables.
        
        ```
        SELECT COUNT(*) AS count, relkind
        FROM pg_class WHERE relkind IN ('f') GROUP BY relkind;
        ```
        
    2.  Execute the following SQL statement to delete foreign tables.
        
        ```
        DROP FOREIGN TABLE [ IF EXISTS ] name [ CASCADE | RESTRICT ];
        ```
        
    
    For more information, see [Community documentation](https://www.postgresql.org/docs/current/sql-dropforeigntable.html).
    

#### **Table without unique key incompatibility**

-   **Error format**: `Tables without primary key or unique key in database: {0}. Total databases: {1}`.
    
-   **Possible cause**: Tables without primary keys or unique keys exist.
    
-   **Solution**: Add primary keys or unique keys to the tables.
    
    1.  Execute the following SQL statement in each database of the instance to obtain information about tables without primary keys or unique keys.
        
        ```
         SELECT COUNT(*) AS count
        FROM information_schema.tables t
        LEFT JOIN information_schema.table_constraints tc
            ON t.table_name = tc.table_name 
            AND t.table_schema = tc.table_schema
            AND (tc.constraint_type = 'PRIMARY KEY' OR tc.constraint_type = 'UNIQUE')
        JOIN pg_class c 
            ON t.table_name = c.relname
        JOIN pg_namespace ns 
            ON c.relnamespace = ns.oid 
            AND ns.nspname = t.table_schema
        WHERE t.table_type = 'BASE TABLE'
            AND tc.constraint_type IS NULL
            AND t.table_schema NOT IN ('pg_catalog', 'information_schema')
            AND c.relreplident != 'f';
        ```
        
    2.  Execute the following SQL statement to set the `REPLICA IDENTITY` of the target table to `FULL`.
        
        ```
        ALTER TABLE name REPLICA IDENTITY FULL;
        ```
        
    3.  Execute the following SQL statement to add a primary key or unique key to the target table.
        
        ```
        --Primary key constraint
        ALTER TABLE name
            ADD CONSTRAINT constrain_name PRIMARY KEY (column_name);
        --Unique key constraint
        ALTER TABLE name
            ADD CONSTRAINT constrain_name UNIQUE (column_name);
        ```
        
    
    For more information, see [Community documentation](https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-UNIQUE-CONSTRAINTS).
    

#### **Materialized view incompatibility**

-   **Error format**: `Materialized views in database: {0}. Total databases: {1}`.
    
-   **Possible cause**: Materialized views exist.
    
-   **Solution**: Delete the materialized views.
    
    1.  Execute the following SQL statement in each database of the instance to obtain materialized views.
        
        ```
        SELECT COUNT(*) AS count, relkind
        FROM pg_class
        WHERE relkind IN ('m')
        GROUP BY relkind;
        ```
        
    2.  Execute the following SQL statement to delete materialized views.
        
        ```
        DROP MATERIALIZED VIEW IF EXISTS name;
        ```
        

#### **Large object incompatibility**

-   **Error format**: `Large objects in database: {0}. Total databases: {1}`.
    
-   **Possible cause**: Large objects exist.
    
-   **Solution**: Delete the large objects.
    
    1.  Execute the following SQL statement in each database of the instance to obtain large objects.
        
        ```
        SELECT COUNT(*) AS count
        FROM pg_largeobject_metadata;
        ```
        
    2.  Execute the following SQL statement to delete large objects.
        
        ```
        SELECT lo_unlink(largeobject_oid);
        ```
        

#### **Extension incompatibility**

-   **Error format**: `Logical replication prohibited extensions in database: {0}. Total databases: {1}`.
    
-   **Possible cause**: The following four prohibited extensions are used: 'pg\_partman', 'pg\_cron', 'pg\_active', and 'pg\_logical'.
    
-   **Solution**: Temporarily delete incompatible extensions.
    
    1.  Execute the following SQL statement in each database of the instance to check whether incompatible extensions are installed.
        
        ```
        SELECT COUNT(*) AS count
        FROM pg_extension 
        WHERE extname IN ('pg_partman', 'pg_cron', 'pg_active', 'pglogical');
        ```
        
    2.  Temporarily delete incompatible extensions.
        
        ```
        DROP EXTENSION extension_name;
        ```
        

#### **Parameter incompatibility**

-   **Error format**: `Logical replication requires wal_level to be logical, max_wal_sender and max_replication_slots to be at least {0}, instance wal_level is: {1}, max_wal_sender is: {2}, max_replication_slots is: {3}`.
    
-   **Possible cause**: The values of the three parameters do not meet the requirements.
    
-   **Solution**: Modify the parameter values. Note that you may need to restart the instance for the changes to take effect. For more information, see [Set the parameters of an instance](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance).
    

## **Check report format description**

The check report is provided in Chinese and English.
