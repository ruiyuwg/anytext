This topic describes how to perform a major version upgrade for an ApsaraDB RDS for PostgreSQL instance with zero downtime.

## **Prerequisites**

-   The instance runs ApsaraDB RDS for PostgreSQL 16 or an earlier version.
    
-   The storage type of the instance is disk.
    
    **Note**
    
    If the instance uses high-performance local disks, you can only [perform a major version upgrade in blue-green deployment mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode).
    
-   The billing method of the instance is pay-as-you-go or subscription.
    
    **Note**
    
    If the instance is a serverless instance, you can only [perform a major version upgrade in blue-green deployment mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode).
    
-   The instance is not a [read-only instance](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances#concept-rst-2z1-ygb) or a [dedicated cluster instance](/help/en/apsaradb-for-mybase/latest/what-is-apsaradb-for-mybase#concept-2319911).
    
-   The `wal_level` parameter of the instance is set to `logical`. If it is not, [modify the instance parameters](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance).
    
-   Babelfish is not enabled for the instance. The minor engine version number does not end with `babelfish`.
    

## **Background information**

In zero-downtime mode, the system uses pg\_upgrade to upgrade the source instance to the destination version and implements incremental updates using native logical replication. You can perform an active switchover during the upgrade and verify the destination instance before the switchover. The instance can perform normal read and write operations from the start of the upgrade until the active switchover. During the switchover, the instance is in read-only mode for only a few seconds.

In the ApsaraDB RDS console, you can also upgrade the major version of a database in [blue-green deployment mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode) or [local upgrade mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-local-upgrade-mode). For a comparison of different modes, see [Introduction to major version upgrade solutions](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/#section-f2h-kij-wu9).

## **Upgrade fees**

**Free of charge**.

## Precautions

-   **Business impact**: The impact on your services is minimal. The downtime for the source instance is measured in seconds. The duration of the downtime depends on the number of sequences and large transaction writes on the instance.
    
-   **Replication slots**:
    
    -   If the source instance has a publishing end of a replication slot, the replication slot is lost after the upgrade.
        
    -   If the source instance has a subscribing end of a replication slot, the upgrade may cause data synchronization issues due to replication slot preemption. For a solution, see [How do I prevent data synchronization issues caused by replication slot preemption during an upgrade?](#5e92a28355esm)
        
-   **Parameter changes**:
    
    -   If the source instance uses parameters that are not supported by the destination version, these parameters are automatically deleted in the destination version.
        
    -   If the value of a parameter in the source instance is outside the valid range for the corresponding parameter in the destination version, the parameter is set to the default value of the parameter template for the destination version.
        
    -   During the upgrade, the system temporarily changes the value of `statement_timeout` to 0 and restores it to the initial value after the upgrade is complete.
        
-   **DTS tasks**: If the instance to be upgraded is a source or destination instance for Data Transmission Service (DTS), you need to [recreate the DTS task](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) after the upgrade.
    
-   **Plugin compatibility issues:** When you perform a major version upgrade, the system automatically updates the instance to the latest minor engine version. This may cause [plugin compatibility issues](#ba14dc6411w0l).
    
-   **Instance backup:** A full backup is performed on the instance before and after the upgrade. This allows for subsequent clone-based recovery.
    

## **Impact on the instance at different upgrade stages**

**Upgrade stage**

**Impact**

Start the major version upgrade

DDL operations are prohibited.

Create replication slots and publications

-   DDL operations are prohibited.
    
-   WAL logs start to accumulate.
    

Start the subscriber and establish a logical replication relationship

-   DDL operations are prohibited.
    
-   WAL logs start to be consumed and no longer accumulate.
    
-   Logical replication generates a certain resource payload. The payload is closely related to the number of databases and traffic.
    

Start the switchover

-   DDL operations are prohibited.
    
-   Logical replication generates a certain resource payload. The payload is closely related to the number of databases and traffic.
    
-   The instance is read-only. The read-only duration is related to the number of sequences.
    

Complete the switchover (upgrade complete)

-   The logical replication slot is deleted, and the resource payload generated by logical replication is eliminated.
    
-   The instance resumes normal read and write operations.
    

After the upgrade task starts, go to the **Upgrade History** tab. In the **Upgrade Log** column of the target upgrade task, click **View Information** to view the detailed upgrade process.

## **Step 1: Perform a pre-upgrade check**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Major Version Upgrade**.
    
    **Note**
    
    If **Major Version Upgrade** does not appear in the navigation pane on the left, check the version and configuration of your ApsaraDB RDS for PostgreSQL instance. For more information, see [Prerequisites](#ef29a19fc4i13).
    
3.  On the **Upgrade Check** tab, click **Create upgrade check report**.
    
4.  Select the destination version. Set **Upgrade Mode** to **Zero Downtime**. Then, click **OK**.
    
    The instance status changes to **Maintaining Instance**. After the pre-upgrade check is complete, the instance status changes to **Running**.
    
    If the result of the upgrade check report is **Success** or **Warning**, you can proceed with the major version upgrade. If the result is **Failed**, click **View Information**. Fix the abnormal items based on the report. Then, perform the pre-upgrade check **again**. For more information about common errors and their causes, see [Interpret an ApsaraDB RDS for PostgreSQL major version upgrade check report](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-the-check-report-of-a-major-engine-version-upgrade-for-an-apsaradb-rds-for-postgresql-instance#concept-2081110).
    
    **Important**
    
    -   To ensure a successful upgrade, if the check result is **Warning**, we recommend that you fix the abnormal items based on the report and perform the pre-upgrade check **again** until the result is **Success**.
        
    -   After the pre-upgrade check is successful, if you create a plugin on the primary instance, you must perform the check again.
        
    

## Step 2: Upgrade the major version

1.  Click the **Upgrade Instance** tab and read the warnings. Then, select a version from **Select The Destination Version** and click **Create Upgrade Task**.
    
2.  In the dialog box that appears, read the prompt and click **OK**.
    
3.  In the **Create Major Engine Version Upgrade Task** section, set **Upgrade Mode** to **Zero Downtime**.
    
4.  Click **Create**.
    
    When the instance status changes to **Migrating**, the upgrade task has started.
    
    The time required for the upgrade is closely related to the number of database objects in the instance. The more database objects there are, the longer the upgrade takes. During a major version upgrade, you can view the upgrade progress in the [Task Hub](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2).
    
    **Important**
    
    -   You **cannot modify or delete** an upgrade task after it is created.
        
    -   When the source instance is in the **Migrating** state, operations and maintenance (O&M) tasks such as modifying parameters, restarting the instance, or releasing the instance are not supported.
        
    

## **Step 3: Switch to the new version**

1.  Verify the destination instance.
    
    When the instance status changes from **Migrating** to **Migrating Data Out**, logical replication is set up and the upgrade task creation is complete. You can then verify the data on the destination instance.
    
    Go to the **Upgrade History** tab. Use the **Later Version Verification URL** from the target upgrade record to connect to the destination instance and verify the upgraded data.
    
    **Note**
    
    The destination instance is in read-only mode. You cannot perform write operations.
    
2.  Switch to the destination instance.
    
    After you confirm that the data on the destination instance meets your expectations and the **Upgrade Result** is **Synchronizing**, in the **Upgrade Log** column, click **Switchover** to switch your services to the destination instance.
    
    **Note**
    
    -   If the **Upgrade Result** is in another state, see [Upgrade result descriptions](#b24220250ap7p) for information about how to proceed.
        
    -   If you decide to abandon this upgrade, in the **Upgrade Log** column, click **Cancel**. This action deletes the logical replication slot, cancels the impact of logical replication on the source instance, and allows it to perform Data Definition Language (DDL) operations.
        
    
3.  In the **Switchover** dialog box, set **Write Downtime Tolerance** (in seconds) and click **OK**.
    
    When the **Upgrade Result** changes to **Read-only**, the switchover is in progress and the instance status is **Migrating**. On the **Upgrade History** tab of the **Major Version Upgrade** page, you can click the **Interrupted** button in the **Upgrade Log** column to cancel the switchover.
    
    **Note**
    
    You can set the **Write Downtime Tolerance** during the switchover to actively wait for the replication delay to be eliminated. This ensures data consistency. During this process, the **Upgrade Result** changes to **Read-only**. If the time limit is exceeded, the system returns to the **Synchronizing** state and removes the read-only restriction.
    
4.  View the switchover result.
    
    When the **Upgrade Result** changes to **Succeeded**, the switchover is successful. The instance status is **Running**.
    
    On the **Basic Information** page of the instance, you can view the current version information of the instance.
    
    **Note**
    
    After the upgrade is complete, go to the **Upgrade History** tab. In the **Upgrade Log** column of the target upgrade task, click **View Information** to view the read-only time of the instance and the detailed upgrade process. The read-only time is the period between the **Switching time** and the **Switching completion time**. This period does not include the time when the instance is unreachable because the DNS cache is not purged.
    

## **Upgrade result descriptions**

During the upgrade process, the upgrade record on the **Upgrade History** tab shows one of the following **Upgrade Result** values.

**Upgrade result**

**Instance status**

**Description**

**Available actions**

**Running**

**Migrating**

The upgrade task is running.

None.

**Synchronizing**

**Migrating Data Out**

Logical replication is normal.

-   Switch: Switch to the new version instance.
    
-   Cancel: Abandon this upgrade.
    

**Replication Interrupted**

**Migrating Data Out**

Logical replication is abnormal.

-   View the upgrade log to determine the cause of the replication failure.
    
-   Cancel: Abandon this upgrade.
    

**Read-only**

**Migrating**

The switchover is in progress. The instance is in read-only mode, and sequences are being synchronized.

Break: Cancel this switchover.

**Switchover**

**Migrating**

Sequence synchronization is complete. Finalizing the process.

None.

**Cancel**

**Running**

The upgrade task is canceled.

None.

**Succeeded**

**Running**

The upgrade task is successful.

None.

## **Related API operations**

**API operation**

**Description**

[UpgradeDBInstanceMajorVersionPrecheck](/help/en/rds/api-check-the-compatibility-between-a-new-major-engine-version-and-an-apsaradb-rds-for-postgresql-instance-before-an-upgrade#doc-api-Rds-UpgradeDBInstanceMajorVersionPrecheck)

Performs a pre-upgrade check for a major version upgrade of an ApsaraDB RDS for PostgreSQL instance.

[DescribeUpgradeMajorVersionPrecheckTask](/help/en/rds/api-query-the-check-report-for-a-major-engine-version-upgrade-to-an-apsaradb-rds-for-postgresql-instance#doc-api-Rds-DescribeUpgradeMajorVersionPrecheckTask)

Queries the pre-upgrade check report for a major version upgrade of an ApsaraDB RDS for PostgreSQL instance.

[UpgradeDBInstanceMajorVersion](/help/en/rds/api-upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance-2#doc-api-Rds-UpgradeDBInstanceMajorVersion)

Upgrades the major version of an ApsaraDB RDS for PostgreSQL instance.

[DescribeUpgradeMajorVersionTask](/help/en/rds/api-query-the-tasks-for-major-engine-version-upgrades#doc-api-Rds-DescribeUpgradeMajorVersionTasks)

Queries the historical tasks of major version upgrades for an ApsaraDB RDS for PostgreSQL instance.

## **References**

-   [Introduction to major version upgrade solutions](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)
    
-   [Perform a major version upgrade in blue-green deployment mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode)
    
-   [Perform a major version upgrade in local upgrade mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-local-upgrade-mode)
    
-   [Interpret an ApsaraDB RDS for PostgreSQL major version upgrade check report](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-the-check-report-of-a-major-engine-version-upgrade-for-an-apsaradb-rds-for-postgresql-instance)
    
-   [Best practices for zero-downtime major version upgrades](/help/en/rds/apsaradb-rds-for-postgresql/zero-downtime-major-engine-version-upgrade-for-apsaradb-rds-for-postgresql-instances)
    

## FAQ

Can I modify the instance, for example, change the instance type, during a major version upgrade?

You cannot modify the instance during a major version upgrade. You can perform other operations only after the major version upgrade is complete.

Are automatic major version upgrades supported?

Automatic upgrades to major database versions are not supported.

**Are major version downgrades supported?**

Major version downgrades are **not supported** after an upgrade. To downgrade, you can purchase an instance that runs a lower version and use DTS to migrate the data to that instance.

After a major version upgrade, a \`raster\_overviews\` conflict is reported when I create a \`raster\_overviews\` view in the destination instance. How do I handle this issue?

If the PostGIS version is earlier than 2.5.2 and the ApsaraDB RDS for PostgreSQL version is 10 or 11, you may encounter a \`raster\_overviews\` conflict when you create a \`raster\_overviews\` view in the destination instance after you upgrade the plugin and then upgrade the major database version to PostgreSQL 12.

Solution:

1.  Upgrade the PostGIS plugin version on the source instance.
    
    Run the following command twice to ensure success.
    
    ```
    SELECT PostGIS_Extensions_Upgrade();
    SELECT PostGIS_Extensions_Upgrade();
    ```
    
2.  Determine whether the PostGIS Raster plugin is used and select the appropriate upgrade method.
    
    ##### **The PostGIS Raster plugin is used**
    
    1.  Run the following command on the source instance to modify the \`raster\_overviews\` view.
        
        ```
        ALTER EXTENSION PostGIS_Raster DROP VIEW raster_overviews;
        CREATE OR REPLACE VIEW raster_overviews AS SELECT 1;
        ```
        
    2.  Perform a major version upgrade for the PostgreSQL instance to at least PostgreSQL 12.
        
    3.  After the upgrade is complete, recreate the view on the destination instance.
        
        ```
        CREATE 
        OR REPLACE VIEW raster_overviews AS 
        SELECT 
          current_database() AS o_table_catalog, 
          n.nspname AS o_table_schema, 
          c.relname AS o_table_name, 
          a.attname AS o_raster_column, 
          current_database() AS r_table_catalog, 
          split_part(
            split_part(s.consrc, '''::name', 1), 
            '''', 
            2
          ): :name AS r_table_schema, 
          split_part(
            split_part(s.consrc, '''::name', 2), 
            '''', 
            2
          ): :name AS r_table_name, 
          split_part(
            split_part(s.consrc, '''::name', 3), 
            '''', 
            2
          ): :name AS r_raster_column, 
          trim(
            both 
            from 
              split_part(s.consrc, ',', 2)
          ): :integer AS overview_factor 
        FROM 
          pg_class c, 
          pg_attribute a, 
          pg_type t, 
          pg_namespace n, 
          (
            SELECT 
              connamespace, 
              conrelid, 
              conkey, 
              pg_get_constraintdef(oid) As consrc 
            FROM 
              pg_constraint
          ) AS s 
        WHERE 
          t.typname = 'raster' : :name 
          AND a.attisdropped = false 
          AND a.atttypid = t.oid 
          AND a.attrelid = c.oid 
          AND c.relnamespace = n.oid 
          AND c.relkind = ANY(
            ARRAY[ 'r' : :char, 'v' : :char, 'm' : :char, 
            'f' : :char ]
          ) 
          AND s.connamespace = n.oid 
          AND s.conrelid = c.oid 
          AND s.consrc LIKE '%_overview_constraint(%' 
          AND NOT pg_is_other_temp_schema(c.relnamespace) 
          AND has_table_privilege(c.oid, 'SELECT' : :text); ALTER EXTENSION PostGIS_Raster 
        ADD 
          VIEW raster_overviews;
        ```
        
    
    ##### **The PostGIS Raster plugin is not used**
    
    1.  Run the following command on the source instance to delete the plugin.
        
        ```
        DROP EXTENSION PostGIS_Raster;
        ```
        
    2.  Perform a major version upgrade for the PostgreSQL instance to at least PostgreSQL 12.
        
    

How do I prevent data synchronization issues caused by replication slot preemption during an upgrade?

-   To keep the subscription data on the source instance (which runs a lower version), make sure that the source instance does not go down because of an excessive load during the upgrade. Otherwise, the replication slot may be preempted by the destination instance (which runs a higher version), which can cause data inconsistency.
    
    After the upgrade is complete, use the following SQL statement to disable the subscription on the destination database.
    
    ```
    \c your_database
    ALTER SUBSCRIPTION your_subscription_name DISABLE;
    ```
    
-   To save the subscription data on the destination instance, disable the subscription on the source instance before the major version upgrade. After the upgrade is complete, enable the subscription on the destination instance. The following SQL statements provide examples:
    
    -   Disable the subscription on the source instance.
        
        ```
        \c your_database
        ALTER SUBSCRIPTION your_subscription_name DISABLE;
        ```
        
    -   Enable the subscription on the destination instance.
        
        ```
        \c your_database
        ALTER SUBSCRIPTION your_subscription_name ENABLE;
        ```
        

**Note**

-   For more information about using replication slots for data subscription, see [Logical subscription](/help/en/rds/apsaradb-rds-for-postgresql/logical-subscription) and [Change tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/).
    
-   If you do not follow the preceding steps, your subscription data may become inconsistent. To ensure data consistency, see [How do I handle subscription data inconsistency after an upgrade?](#1a3caabf68r53)
    

How do I handle subscription data inconsistency after an upgrade?

1.  After the upgrade is successful, delete the table data on the destination instance (which runs a higher version). Then, recreate the subscription and set `copy_data=true`. For more information, see [ALTER SUBSCRIPTION](https://www.postgresql.org/docs/current/sql-altersubscription.html).
    
2.  Use the CONFLICT keyword to import the data consumed by the source instance (which runs a lower version) to the destination instance. The following code provides an example.
    
    ```
    CREATE TABLE my_tbl(id INT PRIMARY KEY, t TIMESTAMP, val TEXT);
    
    INSERT INTO my_tbl VALUES (1, CURRENT_TIMESTAMP, 'a');
    INSERT INTO my_tbl VALUES (2, CURRENT_TIMESTAMP, 'b');
    INSERT INTO my_tbl VALUES (3, CURRENT_TIMESTAMP, 'c');
    
    -- in case with newer timestamp: do update
    INSERT INTO my_tbl VALUES (1, CURRENT_TIMESTAMP, 'd') ON CONFLICT(id) DO UPDATE
    	SET t = excluded.t,
    		val = excluded.val
    	WHERE my_tbl.t < excluded.t;
    
    -- in case with older timestamp: do nothing
    INSERT INTO my_tbl VALUES (2, CURRENT_TIMESTAMP - '10 hours'::interval, 'e') ON CONFLICT(id) DO UPDATE
    	SET t = excluded.t,
    		val = excluded.val
    	WHERE my_tbl.t < excluded.t;
    
    -- in case with new val: just insert
    INSERT INTO my_tbl VALUES (5, CURRENT_TIMESTAMP - '10 hours'::interval, 'f') ON CONFLICT(id) DO UPDATE
    	SET t = excluded.t,
    		val = excluded.val
    	WHERE my_tbl.t < excluded.t;
    ```
