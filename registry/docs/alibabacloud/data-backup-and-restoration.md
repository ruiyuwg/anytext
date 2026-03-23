ApsaraDB for MongoDB provides a variety of solutions that allow you to back up or restore data in different scenarios. The following table describes the solutions provided by ApsaraDB for MongoDB in various scenarios.

## Overview

**Note**

The following table describes the backup and restoration solutions provided by ApsaraDB for MongoDB. The - symbol in the table indicates that the solution is not fixed to any specified scenarios. Select the solution that suits your business requirements and preferences.

**Operation**

**Solution**

**Supported instance architecture**

**Scenario**

Back up databases

[Configure automatic backup for an instance](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb)

-   Standalone instances
    
-   Replica set instances
    
-   Sharded cluster instances
    

\-

[Configure manual backup for an instance](/help/en/mongodb/user-guide/back-up-mongodb-data-manually#concept-e1s-szs-qgb)

-   Standalone instances
    
-   Replica set instances
    
-   Sharded cluster instances
    

Applicable to scenarios in the gaming industry, such as server maintenance before version releases. You can manually back up data before version releases.This way, you can quickly roll back to the original status after issues occur.

[Configure high-frequency backup for an instance](/help/en/mongodb/user-guide/high-frequency-backup#task-2242195)

-   Replica set instances that use cloud disks
    
-   Sharded cluster instances that use cloud disks
    

Applicable to scenarios in which the write loads are heavy. The main bottleneck of point-in-time restoration may exist in the incremental log playback phase. If you enable high-frequency backup, the restoration time can be significantly shortened.

[Configure cross-region backup for an instance](/help/en/mongodb/user-guide/cross-region-backup)

-   Replica set instances that use cloud disks
    
-   Sharded cluster instances that use cloud disks
    

Applicable to scenarios in which backup data is used for cross-region disaster recovery. When a region-level failure occurs, you can use the cross-region backup data to recover your services.

Restore backup data to ApsaraDB for MongoDB instances

[Restore the databases of an instance to the original instance](/help/en/mongodb/user-guide/restore-one-or-more-databases-of-an-apsaradb-for-mongodb-instance#0b5b8c1513tne)

-   Replica set instances that use cloud disks
    
-   Sharded cluster instances that use cloud disks
    

Applicable to scenarios in which one or more databases need to be quickly restored. For example, you can use this solution if you delete a collection or document by mistake.

[Restore the databases of an instance to a new instance](/help/en/mongodb/user-guide/restore-one-or-more-databases-of-an-apsaradb-for-mongodb-instance#11165d12bde9q)

Replica set instances that run MongoDB 4.2 or earlier and use local disks

[Restore backup data to a new instance by point in time](/help/en/mongodb/user-guide/restore-backup-data-to-a-new-apsaradb-for-mongodb-instance-by-point-in-time#task342)

-   Replica set instances
    
-   Sharded cluster instances
    

Applicable to scenarios in which data of multiple databases in an instance or data of the entire instance needs to be restored to a specific point in time.

[Restore backup data to a new instance by backup point](/help/en/mongodb/user-guide/restore-backup-data-to-a-new-apsaradb-for-mongodb-instance-by-backup-point#task-tll-y3b-kfb)

-   Standalone instances
    
-   Replica set instances
    

Applicable to scenarios in which an entire instance needs to be restored but data timeliness is not a key requirement.

[Restore the instance data to a different region](/help/en/mongodb/user-guide/restore-data-from-cross-region-backups)

-   Replica set instances that use cloud disks
    
-   Sharded cluster instances that use cloud disks
    

Applicable to scenarios in which data monitoring or disaster recovery is required. You can use cross-region backup files to restore the instance data to a new instance in the region where the backup files reside.

Restore backup data to self-managed databases

[Restore the instance data to a self-managed MongoDB database by using logical backup](/help/en/mongodb/user-guide/restore-data-of-an-apsaradb-for-mongodb-instance-to-a-self-managed-mongodb-database-by-using-logical-backup#task336)

-   Replica set instances that run MongoDB 4.2 or earlier and use local disks
    
-   Sharded cluster instances that run MongoDB 4.2 or earlier and use local disks
    

Applicable to scenarios such as business testing or data analysis.

**Note**

Before you restore backup data to self-managed databases, you must download backup files. For more information, see [Download a backup file](/help/en/mongodb/user-guide/download-backup-files#task-2112925).

[Restore the instance data to a self-managed MongoDB database by using physical backup](/help/en/mongodb/user-guide/restore-data-of-an-apsaradb-for-mongodb-instance-to-a-self-managed-mongodb-database-by-using-physical-backups#concept-lf5-qxp-5fb)

Replica set instances that run MongoDB 4.2 or earlier and use local disks

## FAQ

**How do I restore the instance data that is generated at an earlier time point?**

The time range to which the instance data can be restored depends on the specified retention period of the backup data. For more information about how to restore data generated at an earlier time point, see [Retain the backup files of an instance for a long period of time](/help/en/mongodb/user-guide/retain-backups-for-a-long-time).

**How do I restore the backup data to the original instance?**

For a sharded cluster instance that uses cloud disks, you can use the database and collection restoration feature to restore the instance data to the instance. For more information, see [Restore the databases of an instance](/help/en/mongodb/user-guide/restore-one-or-more-databases-of-an-apsaradb-for-mongodb-instance).

If the data of your instance fails to be restored to the instance by using the database and collection restoration feature, you can restore the backup data to a new instance and then modify the endpoint and port information of the original and new instances or use Data Transmission Service (DTS) to migrate data from the new instance to the original instance.

-   For more information about how to modify the endpoint and port information of an instance, see [Modify the endpoint and port of an instance](/help/en/mongodb/user-guide/change-the-endpoint-and-port-of-an-instance).
    
-   For more information about how to use DTS to migrate data, see [Migrate data from a self-managed MongoDB database or an ApsaraDB for MongoDB instance](/help/en/dts/user-guide/overview-of-data-migration-scenarios#section-2jl-kae-r9x).
    

**How do I restore a downloaded backup file to an instance?**

You cannot restore a downloaded backup file to an instance. To restore a downloaded backup file to an instance, restore the file to a self-managed database and then use DTS to migrate the file from the database to the instance. For more information about how to use DTS to migrate data, see [Migrate data from a self-managed MongoDB database or an ApsaraDB for MongoDB instance](/help/en/dts/user-guide/overview-of-data-migration-scenarios#section-2jl-kae-r9x).

**How do I restore the instance data to a self-managed database if the instance architecture does not allow I to download backup files?**

-   You can use DTS to migrate the instance data to a self-managed database. For more information, see [Migrate data from a self-managed MongoDB database or an ApsaraDB for MongoDB instance](/help/en/dts/user-guide/overview-of-data-migration-scenarios#section-2jl-kae-r9x).
    
-   You can back up and restore the instance by using [mongodump](https://www.mongodb.com/docs/database-tools/mongodump/) and [mongorestore](https://www.mongodb.com/docs/database-tools/mongorestore/) provided by ApsaraDB for MongoDB.
    

**What is the impact if I back up an instance?**

-   For an instance that uses local disks, backup is executed only on hidden nodes without degraded instance performance.
    
    However, if the instance runs a version earlier than MongoDB 4.2, a certain amount of disk space is inflated during full backup. If a primary/secondary switchover is triggered for your instance, an original hidden node becomes a secondary or the new primary node, which causes a disk utilization fluctuation. For more information about a primary/secondary switchover, see [Primary/secondary switchover](/help/en/mongodb/user-guide/primary-or-secondary-failover/). If such an situation is observed, analyze it in conjunction with the current backup operation and switchover records.
    
-   For an instance that uses cloud disks, backup has a small impact on instance performance.
    
    -   Backup execution node: Backup is executed only on secondary or hidden nodes and does not affect the performance of a primary node.
        
    -   Physical backup optimization: ApsaraDB for MongoDB optimizes physical backup to avoid expensive operations such as [fsync](https://www.mongodb.com/docs/manual/reference/command/fsync/) or writing new [checkpoint](https://www.mongodb.com/docs/manual/core/wiredtiger/#snapshots-and-checkpoints).
        
    -   Overhead of disk snapshots: The creation of disk snapshots has a low overhead. For more information about the principles and implementation details, see [Overview](/help/en/ecs/user-guide/snapshot-overview).
        

## **Related API operations**

**Operation**

**Description**

[DescribeBackups](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackups)

Queries the backup files of an ApsaraDB for MongoDB replica set instance.

[DescribeClusterBackups](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeclusterbackups)

Queries the backup sets of an ApsaraDB for MongoDB sharded cluster instance.

[ModifyBackupPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifybackuppolicy)

Modifies the backup policy of an ApsaraDB for MongoDB instance.

[DescribeBackupPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackuppolicy)

Queries the backup policy of an ApsaraDB for MongoDB instance.

[CreateDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createdbinstance)

Restores the data of an ApsaraDB for MongoDB instance to a new replica set instance.

[CreateShardingDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createshardingdbinstance)

Restores the instance data to a new sharded cluster instance.

[CheckRecoveryCondition](/help/en/mongodb/developer-reference/api-dds-2015-12-01-checkrecoverycondition)

Checks whether an ApsaraDB for MongoDB instance meets the data restoration conditions.
