Update your ApsaraDB for MongoDB instance to access new features, improved performance, and enhanced security.

## Precautions

-   **Protocol requirement:** To upgrade the major database version of a sharded cluster instance, the **Protocol Type** of the instance must be **MongoDB Protocol**.
    
-   **Upgrade method and impacts:**
    
    -   **Automatic restart:**  
        The upgrade is performed on each node sequentially. During the upgrade, the instance is automatically restarted 2–3 times. Perform the upgrade during off-peak hours and ensure that your application has a reconnection mechanism.
        
    -   **Performance impact (MongoDB 4.4 → 5.0):**  
        Starting from MongoDB 5.0, the default [write concern](https://www.mongodb.com/docs/manual/reference/mongodb-defaults/#default-write-concern) changes from `{w:1}` to `{w:majority}`. If you upgrade from version 4.4 to 5.0, you may experience increased write latency, reduced write throughput, and higher replication lag under write-heavy workloads.
        
        **Note**
        
        -   When you upgrade across major versions, the system upgrades incrementally. For example, to upgrade from version 3.0 to 4.2, the system upgrades through each intermediate version instead of directly to 4.2. A transient disconnection occurs with each incremental upgrade.
            
        -   Connect applications in your production environment to the database using a ConnectionStringURI.
            
            Using a ConnectionStringURI ensures that your application always connects to the primary node. This prevents a primary/secondary switch from affecting the application's read and write operations. For more information about how to connect to a database using a ConnectionStringURI, see [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh) or [Connect to a sharded cluster instance](/help/en/mongodb/user-guide/connect-to-a-sharded-cluster-instance#concept-oq1-gx1-ffb).
            
        
-   **Balancer status:** For sharded clusters, the balancer is automatically disabled during the upgrade and re-enabled after completion.
    
-   **Version rollback:** Major version upgrades cannot be rolled back. After you upgrade the major database version, you **cannot downgrade** it.
    
-   **Backup compatibility:** After a major version upgrade, you **cannot restore backups from a previous version to the ApsaraDB for MongoDB instance**. You can download the backup files and restore the data to a self-managed database. For more information about how to restore backup data to a self-managed database, see [Restore data from a cloud disk backup](/help/en/mongodb/user-guide/restore-data-of-an-apsaradb-for-mongodb-instance-to-a-self-managed-mongodb-database-by-using-logical-backup#task336) or [Restore data from a local disk backup](/help/en/mongodb/user-guide/restore-data-of-an-apsaradb-for-mongodb-instance-to-a-self-managed-mongodb-database-by-using-physical-backups#concept-lf5-qxp-5fb).
    
-   **Upgrade duration:** The time required for an upgrade depends on factors such as the data volume, the number of databases and collections, and the version span. The actual duration may vary.
    
    -   Cloud disk instances: The upgrade takes approximately 15 minutes.
        
    -   Local disk instances: The time required for an upgrade to the next major version is similar to the time required for an instance restart (typically several minutes).
        

## Supported major versions

## Upgrade Version Only

You can directly upgrade the major database version in the ApsaraDB for MongoDB console. However, the supported target versions vary based on the service architecture and current version of the instance.

**Architecture**

**Intance Type**

**Current version**

**Target version**

Standalone instance

General-purpose with cloud disk

MongoDB 4.0

No higher major database version is available for upgrade.

General-purpose with cloud disk

MongoDB 3.4

Major version upgrade is not supported.

To upgrade the major version, [create a new instance](/help/en/mongodb/create-a-standalone-instance#task-hwt-zlx-p2b) and replace the old instance with the new one.

Replica set architecture

-   General-purpose with cloud disk
    
-   Dedicated with cloud disk
    

MongoDB 8.0

No higher major database version is available for upgrade.

MongoDB 7.0

MongoDB 8.0

MongoDB 6.0

MongoDB 7.0

MongoDB 5.0

MongoDB 6.0

MongoDB 4.4

MongoDB 5.0

After an instance is upgraded from 4.4 to 5.0, write performance may degrade and write latency may increase. This is because the default [writeConcern](https://www.mongodb.com/docs/manual/reference/mongodb-defaults/#default-write-concern) changes from `{w:1}` to `{w:majority}`. Confirm the impact of this change before you perform a major version upgrade.

-   General-purpose with local disks
    
-   Dedicated with local disks
    
-   Dedicated Physical Server
    

MongoDB 4.2

Major version upgrade is not supported.

To upgrade the major version, [create a new instance](/help/en/mongodb/create-a-replica-set-instance-1#task-hwt-zlx-p2b) and use it to replace the old instance.

MongoDB 4.0

MongoDB 4.2

MongoDB 3.4

-   MongoDB 4.0
    
-   MongoDB 4.2
    

MongoDB 3.2

MongoDB 3.0

Sharded cluster architecture

Dedicated Cloud Disk Edition

MongoDB 8.0

No higher major database version is available for upgrade.

MongoDB 7.0

MongoDB 8.0

MongoDB 6.0

MongoDB 7.0

MongoDB 5.0

MongoDB 6.0

MongoDB 4.4

MongoDB 5.0

After an instance is upgraded from 4.4 to 5.0, write performance may degrade and write latency may increase. This is because the default [writeConcern](https://www.mongodb.com/docs/manual/reference/mongodb-defaults/#default-write-concern) changes from `{w:1}` to `{w:majority}`. Confirm the impact of this change before you perform a major version upgrade.

-   General-purpose with local disks
    
-   Dedicated with local disks
    
-   Dedicated Physical Server
    

MongoDB 4.2

Major version upgrade is not supported.

To upgrade the major version, [create a new instance](/help/en/mongodb/create-a-sharded-cluster-instance-1#task-g3q-hyq-w2b) and use it to replace the old instance.

MongoDB 4.0

MongoDB 4.2

MongoDB 3.4

-   MongoDB 4.0
    
-   MongoDB 4.2
    

MongoDB 3.2

MongoDB 3.0

## Upgrade with architecture change

To upgrade the major version of an instance across service architectures or storage classes, you can first [create a target instance with a higher version](/help/en/mongodb/user-guide/create-an-instance/). Then, use Data Transmission Service (DTS) to migrate data from the source instance to the new instance.

The following section describes how to migrate data:

-   [Fully migrate data from an ApsaraDB for MongoDB standalone instance to an ApsaraDB for MongoDB instance of any architecture](/help/en/dts/user-guide/migrate-data-from-a-standalone-apsaradb-for-mongodb-instance-to-another-apsaradb-for-mongodb-instance)
    
-   [Migrate data from an ApsaraDB for MongoDB replica set instance to an ApsaraDB for MongoDB replica set or sharded cluster instance](/help/en/dts/user-guide/migrate-data-from-an-apsaradb-for-mongodb-instance-to-another-apsaradb-for-mongodb-instance)
    
-   [Migrate data from a self-managed MongoDB sharded cluster to an ApsaraDB for MongoDB replica set or sharded cluster instance](/help/en/dts/user-guide/migrate-a-user-created-database-from-mongodb-sharded-cluster-architecture-to)
    

## Pre-upgrade compatibility testing (recommended)

Before you upgrade the major database version, perform the following steps to test compatibility.

1.  **Review breaking changes:**  
    Check the [MongoDB major version upgrade notes](/help/en/mongodb/product-overview/upgrades-of-mongodb-major-versions#concept-2175689) for compatibility issues between your current and target versions.
    
2.  **Test with a clone (optional but recommended):**  
    Test the compatibility between different major database versions using data restoration.
    
    **Important**
    
    Testing with a cloned instance incurs additional charges.
    
    a. Create a new instance by [restoring from backup](/help/en/mongodb/user-guide/data-restoration/#concept-d4y-fgr-3gb). The new instance runs the same major database version.  
    b. Upgrade the major database version of the new instance.  
    c. Run your application against the upgraded clone.  
    Monitor for compatibility issues. If issues occur, check and modify the client code based on error messages until all issues are resolved.  
    d. Delete the test instance when complete.
    

## Upgrade your instance

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**, based on the instance type.
    
3.  In the upper-left corner of the page, select the resource group and region where the instance is located.
    
4.  Click the instance ID, or click **Manage** in the **Actions** column.
    
5.  In the **Specification Information** section, hover over **Update Minor Version** and click the target major version from the dropdown.
    
    > If **Update Minor Version** is not visible, your instance may not support in-place major version upgrades. To upgrade, create a new instance with a higher major version and use Data Transmission Service (DTS) to migrate data.
    
6.  Choose upgrade timing:
    
    -   **Effective Immediately** – Starts upgrade now.
        
    -   **Effective Within Maintenance Window** – Starts during maintenance window (default: 02:00–06:00).
        
7.  Click **OK** to confirm.
