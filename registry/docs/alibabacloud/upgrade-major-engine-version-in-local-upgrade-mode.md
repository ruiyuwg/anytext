This topic describes how to upgrade the major version of an ApsaraDB RDS for PostgreSQL instance using the in-place upgrade method.

## **Prerequisites**

-   The instance runs ApsaraDB RDS for PostgreSQL 16 or an earlier version.
    
-   The storage type of the instance is cloud disk.
    
    **Note**
    
    If the instance uses high-performance local disks, you can only [upgrade the major version using the blue-green deployment method](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode).
    
-   The billing method of the instance is pay-as-you-go or subscription.
    
    **Note**
    
    If the instance is a serverless instance, you can only [upgrade the major version using the blue-green deployment method](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode).
    
-   The instance is not a [read-only instance](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances#concept-rst-2z1-ygb) or a [dedicated cluster instance](/help/en/apsaradb-for-mybase/latest/what-is-apsaradb-for-mybase#concept-2319911).
    
-   Babelfish is not enabled for the instance. The minor engine version number does not end with `babelfish`.
    

## **Background information**

The in-place upgrade method uses pg\_upgrade to upgrade the source instance to the destination version. All metadata, including the configuration and billing information of the source instance, is retained.

The ApsaraDB RDS console also supports major version upgrades using the [zero-downtime method](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-zero-downtime-mode) and the [blue-green deployment method](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode). For a comparison of the upgrade methods, see [Introduction to major version upgrade methods](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/#section-f2h-kij-wu9).

## **Upgrade fee**

**Free**.

## Precautions

-   **Service impact**: During the switchover, the instance is set to read-only, and a transient connection that lasts for several minutes may occur. We recommend that you perform the upgrade during off-peak hours.
    
    The duration of the read-only state depends on the number of database objects. The more database objects an instance has, the longer the read-only state lasts. If the number of database objects is in the millions, the read-only state may last for tens of minutes or even hours. You can run the `SELECT count(1) FROM pg_class;` command to view the number of database objects.
    
-   **Instance type**: If the instance type does not meet the recommended specifications during the upgrade, the system automatically attempts to upgrade the instance using the recommended instance type. This action places the instance in a **read-only** state for several minutes and causes an additional **transient connection that lasts for a few seconds**. Before you upgrade the major version, you must resolve the alerts about the instance type in the [major version upgrade check report](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-the-check-report-of-a-major-engine-version-upgrade-for-an-apsaradb-rds-for-postgresql-instance).
    
-   **Replication slots**:
    
    -   If the source instance is a publisher that has replication slots, the replication slots are lost after the upgrade.
        
    -   If the source instance is a subscriber that has replication slots, a replication slot preemption may occur during the upgrade and cause data inconsistency. For more information about how to resolve this issue, see [How do I prevent data inconsistency caused by replication slot preemption during an upgrade?](#5e92a28355esm)
        
-   **Parameter changes**:
    
    -   If the source instance uses parameters that are not supported by the destination version, these parameters are automatically deleted in the destination version.
        
    -   If the value of a parameter in the source instance is outside the valid range for the corresponding parameter in the destination version, the parameter is set to the default value of the parameter template for the destination version.
        
    -   During the upgrade, the system temporarily changes the value of `statement_timeout` to 0 and restores it to the initial value after the upgrade is complete.
        
-   **DTS tasks**: If the instance to be upgraded is a source or destination instance for Data Transmission Service (DTS), you need to [recreate the DTS task](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) after the upgrade.
    
-   **Plugin compatibility issues:** When you upgrade the major version, the system automatically updates the instance to the latest minor engine version. This may cause [plugin compatibility issues](#ba14dc6411w0l).
    
-   **Instance backup:** A full backup is performed on the instance before and after the upgrade. This allows for subsequent clone-based recovery.
    

## **Step 1: Perform a pre-upgrade check**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  (Optional) If read-only instances are created for the instance to be upgraded, change the endpoint of the read-only instances in your application to the endpoint of the primary instance, and then delete the read-only instances.
    
    **Note**
    
    To ensure service stability, we recommend that you change the application endpoint during off-peak hours.
    
3.  In the navigation pane on the left, click **Major Version Upgrade**.
    
    **Note**
    
    If **Major Version Upgrade** does not appear in the navigation pane on the left, check the version and configuration of your ApsaraDB RDS for PostgreSQL instance. For more information, see [Prerequisites](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode#ef29a19fc4i13).
    
4.  On the **Upgrade Check** tab, click **Create upgrade check report**.
    
5.  Select the destination version, set **Upgrade Mode** to **Local Upgrade**, and then click **OK**.
    
    The instance status changes to **Maintaining Instance**. After the pre-upgrade check is complete, the instance status changes to **Running**.
    
    If the result of the upgrade check report is **Success** or **Warning**, you can proceed with the major version upgrade. If the result is **Failed**, click **View Information**. Fix the abnormal items based on the report. Then, perform the pre-upgrade check **again**. For more information about common errors and their causes, see [Interpret an ApsaraDB RDS for PostgreSQL major version upgrade check report](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-the-check-report-of-a-major-engine-version-upgrade-for-an-apsaradb-rds-for-postgresql-instance#concept-2081110).
    
    **Important**
    
    -   To ensure a successful upgrade, if the check result is **Warning**, we recommend that you fix the abnormal items based on the report and perform the pre-upgrade check **again** until the result is **Success**.
        
    -   After the pre-upgrade check is successful, if you create a plugin on the primary instance, you must perform the check again.
        
    

## Step 2: Upgrade the major version

1.  Click the **Upgrade Instance** tab. Read the warnings, **Select upgrade version**, and then click **Create Upgrade Task**.
    
2.  In the dialog box that appears, read the prompt and click **OK**.
    
3.  In the **Create Major Engine Version Upgrade Task** section, set **Upgrade Mode** to **Local Upgrade** and configure the **Cutover time**. The switchover time is when your services are switched to the destination instance after the migration is complete.
    
    -   **immediately**: The switchover is performed immediately after the migration is complete.
        
    -   **Instance operation and maintenance time**: The switchover is performed within the specified [maintenance window](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance#concept-xqk-jcj-wdb).
        
4.  Click **Create now**.
    
    When the instance status changes to **Migration in Progress**, the upgrade task has started.
    
    The time required for the upgrade is closely related to the number of database objects in the instance. The more database objects there are, the longer the upgrade takes. During the major version upgrade, you can view the upgrade progress in the [Task Hub](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2).
    
    **Important**
    
    -   You **cannot modify or delete** an upgrade task after it is created.
        
    -   When the source instance is in the **Migration in Progress** state, you cannot perform operations and maintenance (O&M) on the instance, such as modifying parameters, restarting the instance, or releasing the instance.
        
    
5.  View the upgrade result.
    
    The instance is successfully upgraded when the status of both the source and destination instances is **Running**.
    
    **Note**
    
    After the upgrade is complete, on the **Upgrade History** tab, find the upgrade task and click **View Information** in the **Upgrade Log** column to view the read-only duration and detailed upgrade process. The read-only duration is the period between the **Cutover Time** and the **Cutover End Time**. This period does not include the time during which the instance is inaccessible because the DNS cache is not purged.
    

## What to do next

If you deleted read-only instances before the upgrade, perform the following steps:

1.  [Create ApsaraDB RDS for PostgreSQL read-only instances](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance#concept-gsm-zz1-ygb) on the destination instance.
    
2.  In your application, change the endpoint that you previously set to the primary instance endpoint to the new read-only instance endpoint.
    

## **Upgrade result description**

The **Upgrade Result** column on the **Upgrade History** tab displays one of the following statuses for the upgrade task.

**Upgrade result**

**Instance status**

**Meaning**

**Available actions**

**Running**

**Migration in Progress**

The upgrade task is running.

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

-   [Introduction to major version upgrades](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)
    
-   [Upgrade a major version using the zero-downtime method](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-zero-downtime-mode)
    
-   [Upgrade a major version using the blue-green deployment mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-blue-green-deployment-mode)
    
-   [Interpret the major version upgrade check report for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-the-check-report-of-a-major-engine-version-upgrade-for-an-apsaradb-rds-for-postgresql-instance)
    

## **FAQ**

Can I modify the instance, for example, change the instance type, during a major version upgrade?

You cannot modify the instance during a major version upgrade. You can perform other operations only after the major version upgrade is complete.

Are automatic major version upgrades supported?

Automatic upgrades to major database versions are not supported.

**Are major version downgrades supported?**

Major version downgrades are **not supported** after an upgrade. To downgrade, you can purchase an instance that runs a lower version and use DTS to migrate the data to that instance.

After I upgrade the major version, a \`raster\_overviews\` conflict error is reported when I create a \`raster\_overviews\` view on the destination instance. How do I fix this?

If the PostGIS version is earlier than 2.5.2 and the ApsaraDB RDS for PostgreSQL version is 10 or 11, you may encounter a \`raster\_overviews\` conflict when you create a \`raster\_overviews\` view in the destination instance after you upgrade the plugin and then upgrade the major database version to PostgreSQL 12.

Solution:

1.  Upgrade the PostGIS plugin version on the source instance.
    
    Run the following command twice to ensure success.
    
    ```
    SELECT PostGIS_Extensions_Upgrade();
    SELECT PostGIS_Extensions_Upgrade();
    ```
    
2.  Determine whether the PostGIS Raster plugin is used and select the appropriate upgrade method.
    
    ### **The PostGIS Raster plugin is used**
    
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
        
    
    ### **The PostGIS Raster plugin is not used**
    
    1.  Run the following command on the source instance to delete the plugin.
        
        ```
        DROP EXTENSION PostGIS_Raster;
        ```
        
    2.  Perform a major version upgrade for the PostgreSQL instance to at least PostgreSQL 12.
        
    

How do I prevent data inconsistency caused by replication slot preemption during an upgrade?

-   If you want to keep the subscription data on the source instance, make sure that the source instance does not go down due to an excessive payload during the upgrade. Otherwise, the replication slot may be preempted by the destination instance, which can cause data inconsistency.
    
    After the upgrade is complete, run the following SQL statement to disable the subscription on the destination database.
    
    ```
    \c your_database
    ALTER SUBSCRIPTION your_subscription_name DISABLE;
    ```
    
-   If you want to save the subscription data to the destination instance, disable the subscription on the source instance before the major version upgrade. After the upgrade is complete, enable the subscription on the destination instance. The following SQL statements provide an example:
    
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

-   For more information about how to use replication slots for data subscription, see [Logical subscription](/help/en/rds/apsaradb-rds-for-postgresql/logical-subscription) and [Change tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/).
    
-   If you do not perform the preceding operations, your subscription data may be inconsistent. To ensure data consistency, see [How do I fix subscription data inconsistency after an upgrade?](#c442bbca87coi)
    

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
    

Why do I need to delete read-only instances before a major version upgrade?

After the upgrade, the user-created read-only nodes and replication slots remain on the source instance and are not automatically transferred to the destination instance. Therefore, before you perform a major version upgrade, you must change the endpoint of the read-only instances in your application to the endpoint of the primary instance and then delete the existing read-only instances. After the upgrade is complete, you must purchase and configure new read-only instances.
