This topic describes how to upgrade the major version of an ApsaraDB RDS for PostgreSQL database using the blue-green deployment method.

## **Prerequisites**

-   The instance runs ApsaraDB RDS for PostgreSQL 16 or an earlier version.
    
-   The instance is not a [read-only instance](/help/en/rds/overview-of-read-only-apsaradb-rds-for-postgresql-instances#concept-rst-2z1-ygb) or a [dedicated cluster instance](/help/en/apsaradb-for-mybase/latest/what-is-apsaradb-for-mybase#concept-2319911).
    
-   Babelfish is not enabled for the instance. The minor engine version number does not end with `babelfish`.
    

## **Background information**

In a blue-green deployment, the source instance is restored to a new instance. Then, pg\_upgrade is used to upgrade the new instance to the target version. If you perform a cutover, the endpoint of the source instance is automatically switched to the new instance.

The ApsaraDB RDS for PostgreSQL console also supports upgrading the major database version using the [zero-downtime mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-zero-downtime-mode) and [local upgrade mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-local-upgrade-mode). For a comparison of the different modes, see [Introduction to major version upgrade solutions](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/#section-f2h-kij-wu9).

## **Upgrade fees**

When you upgrade a major version using blue-green deployment, the system creates a new instance based on the source instance. After the upgrade is complete:

-   The source instance and the new instance are both billed.
    
-   The billing method and fees for the source instance remain unchanged.
    
-   The billing method for the new instance may be different from that of the source instance.
    
    **Billing method of the source instance**
    
    **Billing method of the new instance**
    
    Subscription/Pay-as-you-go
    
    Pay-as-you-go
    
    Serverless
    
    Serverless
    
    **Note**
    
    To save costs, after the services on the new instance are running stably, we recommend that you convert the new instance to a [subscription](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-from-pay-as-you-go-to-subscription#concept-gtz-lbj-wdb) and [release or unsubscribe from](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance#section-ox6-tg3-ga8) the source instance. However, note the following:
    
    -   If your source instance is a subscription instance that has not expired, the new instance cannot inherit the remaining subscription duration. Releasing the source instance may result in a financial loss. For more information about unsubscription rules, see the [Refund policy](/help/en/rds/product-overview/refunds#task-2245279).
        
    -   The new instance does not inherit any discounts that were applied to the source instance. You can view the specific refund amount on the instance unsubscription page before you decide whether to upgrade.
        
    -   The refund amount and timing for a subscription instance are subject to the actual unsubscription bill. The refund is not processed in real time.
        
    

## Precautions

-   **Service impact:** When you upgrade using blue-green deployment with a cutover, the source instance is set to read-only during the cutover process. This causes a transient connection interruption that lasts for several minutes. We recommend that you perform the upgrade during off-peak hours. If you choose not to perform a cutover, your services are not affected.
    
    -   The duration for which the **source instance is read-only** depends on the number of database objects. The more database objects the instance has, the longer the read-only duration. If the number of database objects reaches millions, the read-only duration can be tens of minutes or even hours. You can run the `SELECT count(1) FROM pg_class;` command to view the number of database objects.
        
    -   The **transient connection interruption duration** as perceived by the client depends on the DNS cache refresh time. You can [switch the virtual switch](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch#task-2134447) and use the service interruption duration to estimate the client's DNS cache refresh time.
        
    -   **The duration of the upgrade process** depends on the number of database objects in the instance. The more database objects an instance has, the longer the upgrade takes. For major version upgrades, you can view the task progress in the [Task Hub](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2).
        
    -   For blue-green deployments, if you do not want the source instance to be set to read-only after the switchover, you must set the `rds_force_trans_ro_non_sup` parameter to `off` after the upgrade. For more information, see [Set instance parameters](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance).
        
-   **Cross-version upgrades**: ApsaraDB RDS for PostgreSQL 9.4 and 10 instances that use high-performance local disks can only be upgraded to instances that use cloud disks. You can upgrade them to a maximum version of ApsaraDB RDS for PostgreSQL 14. To upgrade to PostgreSQL 15 or a later version, you must first upgrade to an intermediate version (PostgreSQL 9.4 can be upgraded to 10, 11, 12, 13, or 14; PostgreSQL 10 can be upgraded to 11, 12, 13, or 14), and then upgrade to PostgreSQL 15 or a later version.
    
-   **Replication Slots**:
    
    -   If the source instance is a publisher with replication slots, the replication slots are lost after the upgrade.
        
    -   If the source instance is a replication slot subscriber, an upgrade may cause data synchronization issues due to replication slot preemption. To resolve this issue, see [How to prevent data inconsistency caused by replication slot preemption during an upgrade](#5e92a28355esm).
        
-   **Virtual IP:** For a blue-green deployment with a cutover, the virtual IP address of the new instance changes after the upgrade. You must check the network connectivity, such as firewall configurations.
    
    -   **Impact of virtual IP change**: If you have configured the virtual IP in your application, you must modify the application configuration to point to the new instance's virtual IP.
        
    -   **Recommendation:** To avoid the complexity of manual configuration, we recommend that you directly configure the connection address of the instance in your application. For more information about how to obtain the connection address, see [View or modify connection addresses and ports](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance#concept-fbd-ypv-ydb).
        
-   **Parameter changes**:
    
    -   If the source instance uses parameters that are not supported by the destination version, these parameters are automatically deleted in the destination version.
        
    -   If the value of a parameter in the source instance is outside the valid range for the corresponding parameter in the destination version, the parameter is set to the default value of the parameter template for the destination version.
        
    -   During the upgrade, the system temporarily changes the value of `statement_timeout` to 0 and restores it to the initial value after the upgrade is complete.
        
-   **DTS tasks**: If the instance to be upgraded is a source or destination instance for Data Transmission Service (DTS), you need to [recreate the DTS task](/help/en/dts/product-overview/what-is-dts#concept-26592-zh) after the upgrade.
    
-   **Plugin compatibility issues:** When you perform a major version upgrade, the system automatically updates to the latest minor engine version, and you may encounter [plugin compatibility issues](#ba14dc6411w0l).
    
-   A new instance does not inherit the **Instance Name**, [tags](/help/en/rds/apsaradb-rds-for-postgresql/add-tags-to-apsaradb-rds-instances-2#concept-dmq-yw4-ydb), [CloudMonitor alert rules](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance#concept-ir2-twp-wdb), or [backup data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance#concept-l1m-xgn-ydb) of the source instance.
    

## **Step 1: Pre-upgrade check**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  (Optional) If a read-only instance exists for the source instance, change the read-only instance endpoint in your application to the primary instance endpoint, and then delete the read-only instance.
    
    **Note**
    
    To ensure service stability, change the application endpoint during off-peak hours.
    
3.  In the navigation pane on the left, click **Major Version Upgrade**.
    
    **Note**
    
    If **Major Version Upgrade** is not displayed in the navigation pane on the left, check the version and configuration of your ApsaraDB RDS for PostgreSQL instance. For more information, see [Prerequisites](#ef29a19fc4i13).
    
4.  On the **Upgrade Check** tab, click **Create upgrade check report**.
    
5.  Select the upgrade version, set **Upgrade Mode** to **Blue-green Deployment**, and then click **OK**.
    
    The instance status changes to **Maintaining Instance**. After the pre-upgrade check is complete, the instance status changes to **Running**.
    
    If the result of the upgrade check report is **Success** or **Warning**, you can proceed with the major version upgrade. If the result is **Failed**, click **View Information**. Fix the abnormal items based on the report. Then, perform the pre-upgrade check **again**. For more information about common errors and their causes, see [Interpret an ApsaraDB RDS for PostgreSQL major version upgrade check report](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-the-check-report-of-a-major-engine-version-upgrade-for-an-apsaradb-rds-for-postgresql-instance#concept-2081110).
    
    **Important**
    
    -   To ensure a successful upgrade, if the check result is **Warning**, we recommend that you fix the abnormal items based on the report and perform the pre-upgrade check **again** until the result is **Success**.
        
    -   After the pre-upgrade check is successful, if you create a plugin on the primary instance, you must perform the check again.
        
    

## Step 2: Upgrade major version

1.  Click the **Upgrade Instance** tab, read the warning message, select a version under **Select upgrade version**, and then click **Create Upgrade Task**.
    
2.  In the dialog box that appears, read the message and click **OK**.
    
3.  In the **Create Major Engine Version Upgrade Task** section, **Upgrade Mode** is set to **Blue-green Deployment**. Configure the upgrade parameters. The following table describes only the key parameters.
    
    **Configuration**
    
    **Description**
    
    **Storage type**
    
    -   The new instance supports only enterprise SSDs (ESSDs) and premium performance disks. If you select ESSD, you can change the performance level (PL).
        
    -   The storage class of the new instance must be the same as that of the source instance.
        
        **Note**
        
        -   The minimum storage capacity of an ESSD varies based on the PL. When you change the PL, the minimum storage capacity of the instance is automatically adjusted based on the selected PL. Make sure that the new value meets the requirements.
            
        -   If the source instance uses a high-performance local disk, the new instance can only use ESSDs.
            
        
    
    **The Available Zone**
    
    The system lets you configure the new primary and secondary instances in different zones after the upgrade. Set these parameters as needed.
    
    **For Available Zone**
    
    **Primary Instance Switch**
    
    **Standby Instance Switch**
    
    **Cutover configuration**
    
    Select whether to switch traffic to the new instance based on your requirements.
    
    -   **No cutting**: The traffic is not automatically switched. This option is typically used to test the compatibility of your services with the new version before the official upgrade.
        
    -   **Cutover**: The traffic is automatically switched. This option is typically used for the official upgrade after you confirm that your services can run stably on the new version. After the cutover, your application is automatically connected to the new instance. You do not need to change the database endpoint in your application.
        
    
    **Note**
    
    -   You cannot roll back after a cutover. Select this option with caution.
        
    -   During the cutover, the source instance is set to read-only, which causes a transient connection that lasts for minutes. Perform the upgrade during off-peak hours. If you choose not to perform a cutover, your services are not affected.
        
    -   We recommend that you select **No cutting** for your first attempt. After you fully test and verify the application layer, [release the new instance](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance#concept-r1p-jgj-wdb), repeat the upgrade operation, and then select **Cutover** to begin the formal upgrade.
        
    
    **Storage space**
    
    Select the storage capacity for the new instance.
    
    When you upgrade the major version of an instance that uses a high-performance local disk, you can scale in the storage capacity.
    
    The minimum selectable storage capacity must meet the following conditions:
    
    -   The smaller of the following two values:
        
        -   Used storage of the source instance × 120%. If the result (in GB) is not a multiple of 5, it is rounded up to the nearest multiple of 5.
            
            **Note**
            
            You can view the used storage space of the source instance using the **Monitoring And Alarms** feature to check the **Disk Storage (MB)** metric. For more information, see [View Enhanced Monitoring](/help/en/rds/apsaradb-rds-for-postgresql/view-the-enhanced-monitoring-metrics-of-an-apsaradb-rds-for-postgresql-instance#task-2104561).
            
        -   Storage capacity of the source instance.
            
    -   Greater than or equal to the minimum purchasable storage capacity of an ESSD. If not, the following values are used as the minimum purchasable storage capacity:
        
        -   PL1 ESSD: 20 GB.
            
        -   PL2 ESSD: 500 GB.
            
        -   PL3 ESSD: 1500 GB.
            
    
    **Note**
    
    Examples:
    
    -   Your source instance has a storage capacity of 100 GB, and 70 GB is used. When you upgrade the major version, you select PL1 ESSD for the storage type.
        
        Calculation: 70 × 120% = 84. Rounded up to the nearest multiple of 5, the value is 85 GB. Therefore, the minimum purchasable storage capacity is 85 GB.
        
    -   Your source instance has a storage capacity of 700 GB, and 350 GB is used. When you upgrade the major version, you select PL2 ESSD for the storage type.
        
        Calculation: 350 × 120% = 420. 420 GB is less than the minimum purchasable storage capacity of a PL2 ESSD, which is 500 GB. Therefore, the minimum purchasable storage capacity is 500 GB.
        
    
    **Instance specification**
    
    Specify the instance type of the new instance. For more information, see [List of Primary Instance Types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    
4.  Click **Create now**.
    
    When the instance status changes to **Migration in Progress**, the upgrade task has started.
    
    The time required for an upgrade is closely related to the number of database objects in the instance. The more database objects there are, the longer the upgrade takes. During a major version upgrade, you can view the upgrade progress in the [Task Hub](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2).
    
    **Important**
    
    -   After an upgrade task is created, it **cannot be modified or deleted**.
        
    -   When the source instance is in the **Migration in Progress** state, you cannot perform O&M operations such as modifying parameters, restarting, or releasing the instance.
        
    -   If the **Insufficient Resources** message appears when you create the task, switch the **Target Primary Zone**.
        
    
5.  View the upgrade result.
    
    When the status of both the source and new instances is **Running**, the upgrade is successful.
    
    **Note**
    
    -   For **blue-green deployment with cutover**, traffic is **automatically switched** to the new (higher-version) instance after the upgrade.
        
    -   For **blue-green deployment without cutover**, traffic is **not switched** to the new (higher-version) instance after the upgrade.
        
    -   After the upgrade is complete, on the **Upgrade History** tab, click **View Information** in the **Upgrade Log** column for the target upgrade task. You can view the read-only duration of the instance and the detailed upgrade process. The read-only duration is the period between the **Cutover Time** and the **Cutover End Time**. This period does not include the time during which the instance is unreachable because the DNS cache is not refreshed.
        
    -   For **blue-green deployment without cutover**, the system also displays the **Cutover Time** and **Cutover End Time** for your reference and estimation in a cutover scenario.
        
    

## What to do next

1.  If you upgrade an instance using the **blue-green deployment (cutover)** pattern, promptly [release the source instance](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance#concept-r1p-jgj-wdb) after you confirm that your services are running stably on the new instance.
    
    We also recommend that you change the billing method for the new instance to [subscription](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-from-pay-as-you-go-to-subscription#concept-gtz-lbj-wdb) for cost savings.
    
    **Note**
    
    -   If you release a subscription instance before its expiration date, you may incur a loss.
        
    -   If you received a discount when you purchased the source instance, the new instance does not inherit this discount. The unsubscription of the source instance is subject to the actual unsubscription page.
        
    -   The refund amount and timing for a subscription instance are subject to the actual unsubscription bill. The refund is not processed in real time.
        
    
2.  (Optional) The new instance does not include read-only instances. If you deleted a read-only instance before the upgrade, perform the following steps:
    
    1.  On the new instance, [create a PostgreSQL read-only instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-read-only-apsaradb-rds-for-postgresql-instance#concept-gsm-zz1-ygb) again.
        
    2.  In your application, change the endpoint that you previously set to the primary instance endpoint back to the new read-only instance endpoint.
        

### **Upgrade result description**

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
    
-   [Perform a major version upgrade using the zero-downtime mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-zero-downtime-mode)
    
-   [Perform a major version upgrade using the in-place upgrade mode](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-major-engine-version-in-local-upgrade-mode)
    
-   [Interpret the ApsaraDB RDS for PostgreSQL major version upgrade check report](/help/en/rds/apsaradb-rds-for-postgresql/introduction-to-the-check-report-of-a-major-engine-version-upgrade-for-an-apsaradb-rds-for-postgresql-instance)
    

## **FAQ**

Can I modify the instance, for example, change the instance type, during a major version upgrade?

You cannot modify the instance during a major version upgrade. You can perform other operations only after the major version upgrade is complete.

Are automatic major version upgrades supported?

Automatic upgrades to major database versions are not supported.

**Are major version downgrades supported?**

Major version downgrades are **not supported** after an upgrade. To downgrade, you can purchase an instance that runs a lower version and use DTS to migrate the data to that instance.

After a major version upgrade, a raster\_overviews conflict error occurs when I create a raster\_overviews view in the new instance. How do I fix this?

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
        
    

How can I prevent data inconsistency caused by replication slot preemption during an upgrade?

-   To keep the subscription data on the source (lower-version) instance, make sure that the source instance does not fail due to an excessive payload during the upgrade. Otherwise, the replication slot may be preempted by the destination (higher-version) instance, which leads to data inconsistency.
    
    After the upgrade is complete, run the following SQL statement to disable the subscription on the database of the destination instance.
    
    ```
    \c your_database
    ALTER SUBSCRIPTION your_subscription_name DISABLE;
    ```
    
-   To preserve the subscription data on the destination instance, disable the subscription on the source instance before the major version upgrade. After the upgrade is complete, enable the subscription on the destination instance. The following are sample SQL statements:
    
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

-   For more information about change tracking with replication slots, see [Logical Subscription](/help/en/rds/apsaradb-rds-for-postgresql/logical-subscription) and [Change Tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/).
    
-   If you do not perform the preceding operations, your subscribed data may become inconsistent. For more information about how to resolve this issue, see [How do I handle inconsistent subscription data after an upgrade?](#c442bbca87coi).
    

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

After the upgrade, read-only nodes and replication slots remain on the source instance and are not automatically transferred to the new instance. Therefore, before you perform a major version upgrade, you must change the read-only instance endpoint in your application to the primary instance endpoint and delete the existing read-only instance. After the upgrade is complete, create and configure a new read-only instance.
