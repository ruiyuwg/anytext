ApsaraDB RDS for MySQL provides two methods to upgrade the major database version. You can upgrade the database version directly in the console. You can also purchase a new ApsaraDB RDS for MySQL instance that runs a later version and use a Data Transmission Service (DTS) data migration task to migrate data from the original instance to the new one. This process indirectly upgrades the database version.

**Note**

**ApsaraDB RDS for MySQL does not support direct downgrades of the database version from the console.** You can purchase an RDS instance that runs an earlier version and use DTS to [migrate data from the instance with the later version to the instance with the earlier version](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances). After you verify that the migration is successful, you can [release the instance with the later version](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance).

## Select an upgrade method

Both [Method 1: Directly upgrade the database version in the console](#section-or5-ghj-wdb) and [Method 2: Upgrade the database version using DTS](#section-qu6-xfc-i8v) **support upgrades for all major MySQL versions**. This includes upgrades from MySQL 5.5 to 5.6, 5.6 to 5.7, and 5.7 to 8.0. Before you upgrade the database, select a suitable upgrade method based on the following information:

-   If your instance **belongs to one of the following four categories and its configuration meets the corresponding requirements**, use [Method 1: Directly upgrade the database version in the console](#section-or5-ghj-wdb).
    
    **Note**
    
    Serverless instances do not support direct upgrades from the console. You must use [Method 2: Upgrade the database version using DTS](#section-qu6-xfc-i8v).
    
    ## Cluster Edition (ESSD and premium performance disk)
    
    -   **Group replication restriction:** You cannot upgrade Cluster Edition instances that use [MySQL Group Replication (MGR)](/help/en/rds/apsaradb-rds-for-mysql/introduction-to-the-mgr-mode).
        
    -   **Database proxy restriction** (if applicable): The minor version of the database proxy must be 1.13.41 or later.
        
    -   **Instance status restriction**: The instance must be in the **Running** state. The primary and secondary nodes must be healthy and have no replication delay.
        
    -   **Engine restriction:** The database and all its tables must use the InnoDB storage engine.
        
    -   The instance must not use a [**phased-out instance type**](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg).
        
    
    ## High-availability Edition (ESSD and premium performance disk)
    
    -   **Database proxy restriction** (if applicable): The minor version of the database proxy must be 1.13.41 or later.
        
    -   **Instance status restriction**: The instance must be in the **Running** state. The primary and secondary nodes must be healthy and have no replication delay.
        
    -   **Engine restriction:** The database and all its tables must use the InnoDB storage engine.
        
    -   The instance must not use a [**phased-out instance type**](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg).
        
    
    ## High-availability Edition (premium performance local disk)
    
    -   **Encryption restriction**: The transparent data encryption (TDE) feature must be disabled. After TDE is enabled, it cannot be disabled. If TDE is enabled on your instance, you must use [Method 2: Upgrade the database version using DTS](#section-qu6-xfc-i8v).
        
    -   **Database proxy restriction** (if applicable): The minor version of the database proxy must be 1.13.41 or later.
        
    -   **Instance status restriction**: The instance must be in the **Running** state. The primary and secondary nodes must be healthy and have no replication delay.
        
    -   **Table quantity restriction**: The number of tables cannot exceed 1 million.
        
    -   **Engine restriction:** The database and all its tables must use the InnoDB storage engine.
        
    -   **Instance type restriction:** The database version after the upgrade must support the original instance types of the primary and read-only instances. The instances must not use a phased-out instance type. For more information, see [Primary ApsaraDB RDS for MySQL instance types](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg).
        
    
    ## Basic Edition (ESSD and premium performance disk)
    
    -   **Instance status restriction**: The instance must be in the **Running** state.
        
    -   **Engine restriction:** The database and all its tables must use the InnoDB storage engine.
        
    -   The instance must not use a [**phased-out instance type**](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg).
        
    

-   If your instance **does not belong to one of the preceding four categories** or if **TDE is enabled**, use [Method 2: Upgrade the database version using DTS](#section-qu6-xfc-i8v).
    
-   If your instance **belongs to one of the preceding four categories but its configuration does not meet the requirements**, you can modify the configuration as described in the following table. Then, you can use either [Method 1: Directly upgrade the database version in the console](#section-or5-ghj-wdb) or [Method 2: Upgrade the database version using DTS](#section-qu6-xfc-i8v).
    
    **Problem**
    
    **Solution**
    
    The instance is in a state other than Running, such as **Restarting**.
    
    Wait for the current task to complete before you upgrade the database version.
    
    The number of tables on a High-availability Edition instance with a premium performance local disk exceeds 1 million.
    
    Delete redundant tables before the upgrade.
    
    Some databases or tables do not use the InnoDB engine.
    
    Run the `ALTER TABLE <table_name> engine=InnoDB;` command to switch to the InnoDB engine.
    
    The instance uses a [phased-out instance type](/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#section-exw-oe8-kzg).
    
    Upgrade the instance type before you upgrade the database version. For more information, see [Change instance configurations](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
    
    The minor version of the database proxy does not meet the requirements.
    
    Upgrade the minor version of the database proxy to 1.13.41 or later. For more information, see [Upgrade the minor engine version of a database proxy](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-dedicated-proxy-version-of-an-apsaradb-rds-for-mysql-instance).
    
    The storage type of the instance is standard SSD.
    
    First, [upgrade the standard SSD to an enterprise SSD (ESSD)](/help/en/rds/apsaradb-rds-for-mysql/upgrade-the-storage-type-of-an-apsaradb-rds-for-mysql-instance-from-standard-ssds-to-essds), and then upgrade the database version.
    

To upgrade the major database version of other database engines, see the following topics:

-   [Upgrade the major database version of an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)
    
-   [Upgrade the major database version of an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/upgrade-the-major-engine-version-and-rds-edition-of-an-apsaradb-rds-for-sql-server-instance)
    

## Method 1: Directly upgrade the database version in the console

### **Preparations**

1.  **Understand the differences and benefits of the new version**
    
    -   **Upgrade from 5.6 to 5.7**: For information about feature differences, see [Appendix 4: Feature differences between MySQL 5.7 and MySQL 5.6](#section-qdh-c2y-jry). For information about the benefits of the upgrade, see [Appendix 2: Benefits of upgrading from MySQL 5.6 to MySQL 5.7](#section-pai-q76-3ry).
        
    -   **Upgrade from 5.7 to 8.0**: For information about feature differences, see [Appendix 3: Feature differences between MySQL 8.0 and MySQL 5.7](#section-s1x-hq5-wkh). For information about the benefits of the upgrade, see [Appendix 1: Benefits of upgrading from MySQL 5.7 to MySQL 8.0](#section-tzd-x2b-tp9).
        
2.  **Understand the upgrade process and its impact**
    
    -   **Version span restriction**: You cannot upgrade across major versions. By default, the instance is upgraded to the latest minor version of the target major version. For example, you cannot directly upgrade an instance from MySQL 5.6 to MySQL 8.0. You must first upgrade it to MySQL 5.7, and then to MySQL 8.0.
        
    -   **Downgrade restriction:** You cannot directly downgrade the version from the console. You can purchase an RDS instance that runs an earlier version and use DTS to [migrate data from the instance with the later version to the instance with the earlier version](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances). After you verify that the migration is successful, you can [release the instance with the later version](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance).
        
    -   **Upgrade process for instances with premium performance local disks**: The system first upgrades the secondary node. After the upgrade is complete, a primary/secondary failover occurs. Then, the system upgrades the original primary node. The upgrade process causes a service interruption of 15 seconds. We recommend that you perform the upgrade during off-peak hours.
        
    -   **Upgrade process for instances with ESSDs**: The system creates a new node and performs the upgrade on the new node. After the upgrade on the new node is complete, connections are switched to it. The upgrade process causes a service interruption of 15 seconds. We recommend that you perform the upgrade during off-peak hours.
        
3.  **Check the instance and database configurations**
    
    -   **Check for reserved keywords**: Check user-defined functions to make sure they do not use any [reserved keywords](/help/en/rds/apsaradb-rds-for-mysql/reserved-keywords-of-an-apsaradb-rds-for-mysql-instance#concept-2165661).
        
    -   **Check full backups**: Check whether a successful full data backup was created in the last week. If not, perform a full data backup.
        
    -   **Check the automatic reconnection mechanism**: During the database upgrade, RDS performs an instance switchover. We recommend that you perform the upgrade during off-peak hours or ensure that your application has an automatic reconnection mechanism. For more information about the impact of an instance switchover, see [Impact of an instance switchover](/help/en/rds/apsaradb-rds-for-mysql/untitled-document-1701914031929).
        
    -   **Check the available storage space**: Make sure you have enough free disk space before the upgrade. We recommend reserving at least 10 GB.
        
    -   **Adjust the log cleanup policy**: Increase the retention period and the maximum storage usage percentage for local logs. For more information, see [Modify the local log policy](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance).
        
    -   **Back up instance parameters**: To ensure the stability and performance of the new MySQL version, RDS deprecates some parameters from the old version. You can no longer view or modify these parameters after the upgrade. Before you perform a major version upgrade, back up the modification records of relevant parameters for future operations and audits.
        
    -   For upgrades from 5.6 to 5.7 or from 5.7 to 8.0, you must **perform the following additional checks**:
        
        ## Upgrade from 5.6 to 5.7
        
        **Check full-text indexes and version information**: For databases on RDS for MySQL 5.6 instances with a minor version earlier than 20221130, full-text indexes are created in the system tablespace. Upgrading to version 5.7 might damage the tablespace. If your instance runs an earlier minor version, first upgrade it to the latest minor version of RDS for MySQL 5.6, and then upgrade the major database version. For more information, see the [FAQ](#b380d91a1as43).
        
        ## Upgrade from 5.7 to 8.0
        
        -   **Check feature compatibility**: If the stored procedures, triggers, views, or functions in your database use [features that are not supported by MySQL 8.0](https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html), modify them before the upgrade. Otherwise, the upgrade will fail.
            
        -   **Check system table dependencies**: Check if your services depend on MySQL 5.7 system tables (tables in the sys, mysql, information\_schema, and performance\_schema databases). Some system tables in MySQL 5.7 are changed during the upgrade to 8.0. For example, tables might be removed, renamed, or have their schemas altered. If your services depend on these tables, they may encounter errors.
            
        -   **Check data type compatibility**: RDS for MySQL 8.0 no longer supports some data types from older versions. If a table contains fields with data types that are not supported in MySQL 8.0, you must resolve this issue by running `REPAIR TABLE` or by performing a logical export and import before the upgrade. For more information, see [Preparing Your Installation for Upgrade](https://dev.mysql.com/doc/refman/8.0/en/upgrade-prerequisites.html).
            
        -   **Check** `**comment**` **values**: Minor versions of MySQL 8.0 from 20221231 onward introduce the `loose_upgrade_clear_invalid_comment` parameter. When this parameter is set to `ON` (the default value), garbled characters in the comments of tables, fields, and indexes are automatically cleared during the upgrade to prevent failure. Therefore, before the upgrade, check if the `comment` values in your database tables contain garbled characters. If they do, the `comment` will be cleared.
            
        -   **Check stored procedures**: If the stored procedures or functions in your database contain garbled characters, correct them before the upgrade to prevent failure.
            
        -   **Check time data types from MySQL 5.5 and earlier**: If your database contains tables with time data types from MySQL 5.5 or earlier, rebuild the tables before upgrading to MySQL 8.0 to prevent failure.
            
            -   Run the following SQL statements to check if your database instance contains tables with time data types from MySQL 5.5 or earlier:
                
                ```
                # Show old time data types.
                SET SESSION show_old_temporals= ON;
                
                # Query for tables that contain old time data types.
                SELECT TABLE_NAME, COLUMN_NAME, COLUMN_TYPE FROM information_schema.columns WHERE COLUMN_TYPE IN ("time /* 5.5 binary format */ ", "timestamp /* 5.5 binary format */", "datetime /* 5.5 binary format */ ");
                ```
                
            -   If a table contains time data types from MySQL 5.5 or earlier, you can run the following command to rebuild the table schema:
                
                ```
                # Rebuild the table.
                ALTER TABLE <table_name> FORCE;
                ```
                
        
4.  **Pre-upgrade testing and simulation**
    
    -   **Syntax testing**: Before the upgrade, create a new RDS instance with the later version to test for syntax compatibility. This helps avoid issues where syntax or features from the earlier version are not supported after the upgrade.
        
    -   **Upgrade simulation**: Before the upgrade, clone the original instance and use the cloned instance to test the upgrade. After you confirm that all features work as expected, upgrade the original instance.
        
5.  **Post-upgrade notes**
    
    -   **Restore an instance to the old version:** You can use a **cloud disk backup from the old version** to restore an instance to that version. This is not supported for instances with premium performance local disks.
        
    -   **Restore an instance to the new version:** You cannot use backup sets from the old version to restore an instance to the new version. To perform a restoration, use a backup set created after the instance was upgraded.
        

### **Procedure**

**Select an upgrade method based on the upgrade scenario:**

**Upgrade method**

**Upgrade scenario**

**Perform a pre-check and then upgrade**

-   High-availability Edition (premium performance local disk): Upgrade from 5.6 to 5.7 or from 5.7 to 8.0.
    
-   High-availability Edition (ESSD or premium performance disk) and Cluster Edition (ESSD or premium performance disk): Upgrade from 5.7 to 8.0.
    

**Direct upgrade**

-   High-availability Edition with premium performance local disks: Upgrade from 5.5 to 5.6.
    
-   Basic Edition (ESSD or premium performance disk): Upgrade from 5.7 to 8.0.
    

## Perform a pre-check and then upgrade

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region where your instance is located. Then, click the instance ID.
    
2.  In the navigation pane on the left, click **Major Version Upgrade** to go to the **Upgrade Check** page.
    
3.  From the **Select upgrade version** drop-down list, select the target version number and click **Create upgrade check report**. For more information about the report, see [Description of the major version upgrade check report](/help/en/rds/apsaradb-rds-for-mysql/interpretation-of-rds-mysql-major-version-upgrade-check-report).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4511936371/p816505.png)
    
4.  After the check is complete and you confirm that there are no risks, switch to the **Upgrade Instance** tab.
    
5.  From the **Select upgrade version** drop-down list, select the target version number and click **Upgrade Instance**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4511936371/p816506.png)
    
6.  In the **Major Engine Version Upgrade** dialog box, confirm the target version, select a **Switching Time**, and click **Upgrade**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4511936371/p816510.png)
    

## Direct upgrade

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region where your instance is located. Then, click the instance ID.
    
2.  In the **Basic Information** > **Configuration Information** section, click **Upgrade Major Engine Version**.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4511936371/p3026.png)
    
    **Note**
    
    If this option is not available, check whether your instance meets the [upgrade requirements](#section-kee-g6u-o92).
    
3.  In the dialog box that appears, select **Switch Immediately** or **Switch Within Maintenance Window**, and then click **Yes**.
    
    -   **Switch Immediately**: Starts the upgrade immediately.
        
    -   **Switch Within Maintenance Window**: Performs the upgrade within the specified [maintenance window](/help/en/rds/apsaradb-rds-for-mysql/set-the-maintenance-window-of-an-apsaradb-rds-for-mysql-instance#concept-xqk-jcj-wdb). You can also click **Settings** next to **Maintenance Window** to quickly change the maintenance window.
        
    
    **Note**
    
    During the upgrade, the instance status is **Migrating Version**.
    

## Method 2: Upgrade the database version using DTS

For instances that do not support a direct upgrade from the console, you can create a new instance with a later database version. Then, use a DTS data migration task to migrate data from the original instance to the new one. This indirectly upgrades the database version. This process involves the following steps:

1.  [Create a new instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance#concept-wzp-ncf-vdb)
    
2.  [Migrate data to the new instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb)
    
3.  [Release the original instance](/help/en/rds/apsaradb-rds-for-mysql/release-or-unsubscribe-from-an-instance#concept-r1p-jgj-wdb)
    

**Example:** You have a MySQL 5.7 instance with TDE enabled, which cannot be directly upgraded from the console. In this case, you can create a new instance that runs MySQL 8.0, migrate the data from the original instance to the new one, and finally release the original instance. This indirectly upgrades the database version.

**Important**

After a cross-version data migration, test for compatibility and monitor the instance for a period of time. After you confirm that everything is normal, release the original instance.

## Appendix 1: Benefits of upgrading from MySQL 5.7 to MySQL 8.0

-   Improves security and provides greater flexibility in account management.
    
-   Supports the creation and management of resource groups.
    
-   Enhances the features of the InnoDB storage engine.
    
-   Adds support for new character sets, data types, syntax, new backup locks, and optimizer\_switch flags.
    
-   Enhances JSON and XML functionality.
    
-   Enhances the features of the optimizer.
    
-   Improves replication performance.
    
-   Supports the creation of multi-valued indexes and derived condition pushdown optimization.
    
-   Supports reading MySQL grant tables.
    
-   Supports resource allocation control.
    

## Appendix 2: Benefits of upgrading from MySQL 5.6 to MySQL 5.7

-   Adds features such as password management, account locking, and encrypted connections to improve database security.
    
-   Supports Online DDL operations, such as renaming an index using RENAME INDEX.
    
-   Improves the scalability of the InnoDB engine and the performance of temporary tables for faster data loading.
    
-   Supports JSON.
    
-   Supports Index Condition Pushdown (ICP) for partitioned tables and new InnoDB spatial indexes.
    
-   Optimizes most parsers, optimizers, and cost models to improve database maintainability, scalability, and performance.
    
-   Expands the range of supported character sets, including the GB18030 character set specified by the Chinese national standard.
    
-   Provides the ngram full-text parser plugin, which supports Chinese, Japanese, and Korean.
    
-   Optimizes source dump threads to reduce lock contention and increase source throughput.
    
-   Significantly reduces replication delay.
    
-   Adds the sys system database, which provides multiple metrics and reduces storage usage, significantly improving database usability.
    

## Appendix 3: Feature differences between MySQL 8.0 and MySQL 5.7

**Note**

The following table lists only some of the important differences between MySQL 8.0 and 5.7. For more information about other differences, see [MySQL Release Notes](https://dev.mysql.com/doc/relnotes/mysql/5.7/en/).

**Feature**

**5.7**

**8.0**

GRANT ... IDENTIFIED BY PASSWORD syntax

Supported

Not supported

PASSWORD() function

Supported

Not supported

FLUSH QUERY CACHE and RESET QUERY CACHE syntax

Supported

Not supported

Parameters for the SQL\_MODE system variable: DB2, MAXDB, MSSQL, MYSQL323, MYSQL40, ORACLE, POSTGRESQL, NO\_FIELD\_OPTIONS, NO\_KEY\_OPTIONS, NO\_TABLE\_OPTIONS

Supported

Not supported

Default automatic sorting for GROUP BY syntax

Support

Not supported

Syntax that contains the EXTENDED or PARTITIONS keyword

Supported

Not supported

Encryption functions such as ENCODE(), DECODE(), and ENCRYPT()

Supported

Not supported

Functions related to [spatial analysis](https://dev.mysql.com/worklog/task/?id=8157)

Supported

Not supported

Functions that previously accepted WKB string or geometry arguments but no longer accept geometry arguments

Supported

Not supported

Parsing \\N as NULL

Support

Not supported

PROCEDURE ANALYSE() function

Supported

Not supported

Creating partitioned tables using the NDB storage engine

Supported

Not supported

Compressing temporary tables using the InnoDB storage engine

Supported

Not supported

JSON\_APPEND() function

Supported

Not supported

Support for placing table partitions in a shared tablespace

Supported

Not supported

ALTER TABLE ... UPGRADE PARTITIONING syntax

Supported

Not supported

## Appendix 4: Feature differences between MySQL 5.7 and MySQL 5.6

**Note**

The following table lists only some of the important differences between MySQL 5.7 and 5.6. For more information about other differences, see [MySQL Release Notes](https://dev.mysql.com/doc/relnotes/mysql/5.7/en/).

**Feature**

**5.6**

**5.7**

CREATE...AS SELECT in GTID mode

Support

Not supported

Using temporary tables in transactions in GTID mode

Supported

Not supported

Specifying a partition key in a partitioned table

Supported

Not supported

ENGINE\_NO\_CACHE syntax

Supported

Not supported

Invisible Indexes

Support

Not supported

UPDATE non\_affected\_rows INSERT syntax

Supported

Not supported

Proxy-related commands

Uses the SET command method

Uses the Call Procedure mode

TokuDB, Sphinx, RocksDB, and Memory engines

Supported

Not supported

str\_ord() function

Supported

Not supported

raiseerror() function

Supported

Not supported

OPTIMIZE TABLE table ASYNC

Support

Not supported

ENGINE\_NO\_CACHE

Supported

Not supported

INFORMATION.TABLE\_UTILIZATION table

Support

Not supported

The requesting\_thd\_id and blocking\_thd\_id columns in the INFORMATION\_SCHEMA.INNODB\_LOCK\_WAITS table

Supported

Not supported

INFORMATION\_SCHEMA.INNODB\_RSEG table

Supported

Not supported

INFORMATION\_SCHEMA.INNODB\_IO\_STATUS table

Supported

Not supported

Column compression feature

Supported

Not supported

Query Plan Cache

Supported

Not supported

Limit + Union syntax

Parentheses are not required.

Parentheses are required.

SHOW FULL PROCESSLIST syntax

In MySQL 5.7, the memory and query\_memory columns are removed from the result.

max\_statement\_time and max\_execution\_time

In MySQL 5.7, max\_statement\_time is removed, and only max\_execution\_time is retained.

RDS\_SQL\_MAX\_AFFECTED syntax

In MySQL 5.7, you can no longer use RDS\_SQL\_MAX\_AFFECTED to limit the number of records affected by a single UPDATE or DELETE statement. Use the rds\_sql\_max\_affected\_rows variable instead.

Concurrency performance optimization adjustments

In MySQL 5.7, the following parameters are no longer supported for concurrency control:

-   innodb\_adaptive\_tickets\_algo
    
-   innodb\_min\_concurrency\_tickets
    
-   rds\_threads\_running\_ctl\_mode
    
-   rds\_threads\_running\_high\_watermark
    
-   rds\_filter\_key\_cmp\_in\_order
    
-   rds\_reset\_all\_filter
    
-   rds\_sql\_delete\_filter
    
-   rds\_sql\_select\_filter
    
-   rds\_sql\_update\_filter
    
-   rds\_strict\_concurrency
    
-   rds\_thread\_extra\_concurrency
    
-   rds\_strict\_trx\_idle\_timeout
    
-   rds\_sql\_buf\_read\_bandwidth
    
-   rds\_sql\_buf\_read\_threshold\_bytes
    
-   rds\_sql\_buf\_write\_bandwidth
    
-   rds\_sql\_buf\_write\_threshold\_bytes
    
-   rds\_sql\_max\_iops
    

Adjustments to connection count variables

The following variables are removed in MySQL 5.7:

-   extra\_max\_connections
    
-   rds\_root\_connections
    
-   rds\_sysinfo\_connections
    
-   rds\_sysinfo\_user\_list
    

Replication-related adjustments

-   MySQL 5.7 compatibility adjustments:
    
    -   Replication between GTID-enabled and non-GTID-enabled databases is no longer supported.
        
    -   sql\_slave\_skip\_counter can no longer be used with GTIDs.
        
    -   CREATE .... SELECT is no longer supported.
        
-   MySQL 5.7 slave-related adjustments:
    
    -   SHOW SLAVE LAG is no longer supported.
        
    -   SHOW SLAVE STATUS no longer supports timeouts.
        
    -   SHOW SLAVE STATUS displays less information.
        
    -   The slave's sql\_thread no longer supports execution timeouts.
        
    -   The slave's sql\_thread no longer supports skipping certain statements.
        
-   MySQL 5.7 binary log adjustments:
    
    -   Transmission speed adjustment is no longer supported.
        
    -   rds\_rpl\_receive\_buffer\_difftime is no longer supported.
        
    -   rds\_rpl\_receive\_buffer\_size is no longer supported.
        

Log-related adjustments

MySQL 5.7 error log adjustments:

-   The IP address, user, and I/O or network latency for SHUTDOWN are no longer recorded.
    
-   Displaying the table name for a duplicate key is no longer supported.
    

Old time data types ([`<u>TIME</u>`](https://dev.mysql.com/doc/refman/5.7/en/time.html), [`<u>DATETIME</u>`](https://dev.mysql.com/doc/refman/5.7/en/datetime.html), and [`<u>TIMESTAMP</u>`](https://dev.mysql.com/doc/refman/5.7/en/datetime.html))

Before version 5.6.4, old time data types did not support microseconds.

Time data types support microsecond precision.

**Important**

During an upgrade from 5.6 to 5.7, the system detects and rebuilds tables that contain fields with old time data types. This slows down the upgrade process.

## **Appendix 5: Feature differences between MySQL 5.5 and MySQL 5.6**

**Note**

The following table lists only some of the important differences between MySQL 5.5 and 5.6. For more information about other differences, see [MySQL 5.6 Reference Manual](https://downloads.mysql.com/docs/refman-5.6-en.pdf).

**Feature**

**MySQL 5.5**

**MySQL 5.6**

Full-text index

Not supported

Supported

InnoDB online DDL

Not supported

Partially supported

REDO

Supports a maximum of 4 GB

Supports a maximum of 512 GB

Dirty page flushing

Single-threaded

Uses a separate flushing thread

Purge

Single-threaded

Multi-threaded

EXCHANGE PARTITION

Not supported

Supported

Explicit partition selection in DML

Not supported

Supported

INFORMATION\_SCHEMA

MySQL 5.6 provides more information about the buffer pool and more metadata about tables, indexes, and fields.

PERFORMANCE\_SCHEMA

Performance Schema in MySQL 5.6 adds more monitoring information and viewing formats.

Replication

Replication enhancements and changes in MySQL 5.6 include the following:

-   Supports GTID-based replication. GTID-based replication is controlled by the gtid\_mode and enforce\_gtid\_consistency parameters.
    
-   Supports concurrent application of binary logs on the secondary database using multiple threads.
    
-   FLUSH MASTER and FLUSH SLAVE are changed to RESET MASTER and RESET SLAVE in MySQL 5.6.
    
-   SLAVE START and SLAVE STOP are changed to START SLAVE and STOP SLAVE in MySQL 5.6.
    

**Important**

After an RDS for MySQL instance is upgraded from 5.5 to 5.6, it automatically switches to GTID-based replication mode.

Optimizer

MySQL 5.6 enhances the optimizer with features including the following:

-   Multi-Range Read.
    
-   Index Condition Pushdown.
    
-   Support for Optimizer\_trace is available.
    

[Purge Large File Asynchronously](/help/en/rds/apsaradb-rds-for-mysql/purge-large-file-asynchronously#task-1942041)

Not supported

Supported

[Thread Pool](/help/en/rds/apsaradb-rds-for-mysql/thread-pool#concept-1697903)

Not supported

Supported

[Performance Agent](/help/en/rds/apsaradb-rds-for-mysql/performance-agent#concept-2426207)

Not supported

Supported

[Faster DDL](/help/en/rds/apsaradb-rds-for-mysql/faster-ddl#task-2558080)

Not supported

Supported

[Sequence Engine](/help/en/rds/apsaradb-rds-for-mysql/sequence-engine#concept-1697905)

Not supported

Supported

## FAQ

-   **Q: Why does an instance switchover occur during the upgrade? Are there other serious risks?**
    
    A: To ensure service stability, instances with premium performance local disks are upgraded by first upgrading the secondary node and then performing a switchover. Instances with ESSDs are upgraded by creating a new node and then performing a switchover. There are no other serious risks. For more information about the impact of a primary/secondary failover, see [Impact of a primary/secondary failover](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances#section-tzi-exd-qgm).
    
-   **Q: Are the primary and secondary nodes upgraded at the same time?**
    
    A: When you upgrade a high-performance local disk, the secondary instance is upgraded first, followed by the primary instance.
    
-   **Q: How do I upgrade a Basic Edition instance that runs MySQL 5.7 with standard SSDs?**
    
    A: You cannot directly upgrade this type of instance. To upgrade a Basic Edition instance that runs MySQL 5.7 with standard SSDs, you must first [change the storage type from standard SSD to ESSD](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance), and then [upgrade the database version](#70ec761c4fs0e).
    
-   **Q: Is the parameter template retained after the database version is upgraded?**
    
    A: It depends. If the instance uses a system parameter template before the upgrade, it is automatically switched to the corresponding system parameter template for the new version. For example, an instance using the MySQL\_InnoDB\_5.7\_High-availability\_Performance parameter template is switched to the MySQL\_InnoDB\_8.0\_High-availability\_Performance parameter template after an upgrade from MySQL 5.7 to 8.0. However, if the instance uses a custom parameter template, the parameter template is not retained after the upgrade.
    
-   **Q: Can I modify the instance during the database version upgrade?**
    
    A: No, you cannot. You can perform other operations on the instance only after the upgrade is complete.
    
-   **Q: Does the database version support automatic upgrades?**
    
    A: No, it does not. Automatic major version upgrades are not supported.
    
-   **Q: Can I downgrade the database version?**
    
    A: No, you cannot directly downgrade the version from the console. To downgrade, you can [purchase an instance with an earlier version](https://rdsbuy.console.alibabacloud.com/newCreate/rds/mysql?spm=a2c4g.11186623.0.0.3f21412cXtupYE) and use DTS to migrate data from the instance with the later version to the new instance. After the migration is complete, you can release the instance with the later version. For more information, see [Data migration between RDS instances](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances).
    
-   **Q: When I upgrade an RDS for MySQL instance from 5.6 to 5.7 or from 5.7 to 8.0, the upgrade fails. It shows the message "The current instance has a full-text index and its minor version is earlier than 20221130. Please upgrade the minor version before deleting and rebuilding the full-text index" or "The current instance contains a full-text index built in the system tablespace. Please delete and rebuild the corresponding full-text index before proceeding with the upgrade." What is the cause and solution?**
    
    A: The cause and solution are as follows:
    
    -   Cause
        
        Due to a historical issue in MySQL, when you create a full-text index on an early version of MySQL 5.6, it is built in the system tablespace. When you upgrade to version 5.7 or 8.0, a full-text index in the system tablespace might cause tablespace corruption. Therefore, you must resolve this issue before the upgrade to prevent data corruption and inaccessibility.
        
        **Note**
        
        This issue was fixed in RDS for MySQL 5.6 version 20221130. Full-text indexes are now built in a separate tablespace.
        
    -   Solution
        
        **Important**
        
        Full-text indexes on earlier versions of RDS for MySQL 5.6 are created in the system tablespace. Therefore, make sure that the version you are upgrading from is RDS for MySQL 5.6 20221130 or later before you upgrade to RDS for MySQL 5.7. If you are using an earlier version, upgrade to the latest version of RDS for MySQL 5.6 first.
        
        1.  Based on the table name in the prompt, delete the full-text index that was built in the system tablespace.
            
            ```
            # Delete the full-text index.
            ALTER TABLE $table_name DROP INDEX $fts_name;
            ```
            
        2.  Re-create the full-text index.
            
            ```
            # Re-create the full-text index.
            ALTER TABLE $table_name ADD FULLTEXT INDEX $fts_name;
            ```
            
        3.  After you create the index, you can run the following SQL statement to check the full-text indexes on the current instance. The statement returns any full-text indexes that are built in the system tablespace. If the query returns an empty result, the upgrade from RDS for MySQL 5.6 to RDS for MySQL 5.7 will not fail due to this issue.
            
            ```
            # Query for full-text indexes built in the system tablespace.
            SELECT NAME FROM information_schema.INNODB_SYS_TABLES WHERE TABLE_ID IN ( SELECT CONV(SUBSTRING_INDEX(SUBSTRING_INDEX(NAME, '_', -4),'_', 1),16,10) FROM INNODB_SYS_TABLES WHERE NAME LIKE '%fts_00000000%' AND SPACE = 0);
            ```
            
-   **Q: When I upgrade an RDS for MySQL instance from 5.7 to 8.0, the error** `**267 - Illegal mix of collations (utf8mb4_general_ci,IMPLICIT) and (utf8mb4_0900_ai_ci,IMPLICIT) for operation '='**` **is reported. How do I handle this?**
    
    A: Check the character set and collation in MySQL. If you are using utf8mb4\_general\_ci, run the following SQL statements to change it to utf8mb4\_0900\_ai\_ci.
    
    ```
    # Modify the character set and collation of the database.
    ALTER DATABASE database_name CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;
    # Modify the character set and collation of the table.
    ALTER TABLE table_name CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
    # Modify the character set and collation of the field.
    ALTER TABLE table_name CHANGE column_name column_name type CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
    ```
    
    If you create a table with the utf8mb4\_general\_ci collation in MySQL 5.7 and then upgrade to MySQL 8.0, the system uses utf8mb4\_0900\_ai\_ci as the default collation. If you run a query that compares a column that uses utf8mb4\_general\_ci with a column that uses utf8mb4\_0900\_ai\_ci, MySQL cannot process the two different collations, which results in an error.
    
-   **Q: Is the transient connection time during a major version upgrade always 15 seconds, regardless of whether there are read-only instances?**
    
    A: Yes, it is. We recommend that you perform the upgrade during off-peak hours.
    

## Related API operations

**API operation**

**Description**

[Upgrade the major version of an RDS MySQL database](/help/en/rds/api-upgrade-the-major-engine-version-of-an-apsaradb-rds-for-mysql-instance-1#doc-api-Rds-UpgradeDBInstanceEngineVersion)

Upgrades the major database version of an RDS instance.
