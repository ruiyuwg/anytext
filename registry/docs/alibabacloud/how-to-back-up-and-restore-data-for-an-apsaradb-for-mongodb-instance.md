You can back up your ApsaraDB for MongoDB instance in either the automatic or manual mode, and restore the instance from backup files or to a point in time.

## Data backup

ApsaraDB for MongoDB stores its backup files in Object Storage Service (OSS) to reduce the storage usage of its instances. For more information about OSS, see [What is OSS?](/help/en/oss/user-guide/what-is-oss) You can automatically or manually back up your instance data in the ApsaraDB for MongoDB console based on your business requirements. For more information, see [Configure automatic backup for an instance](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb) or [Configure manual backup for an instance](/help/en/mongodb/user-guide/back-up-mongodb-data-manually#concept-e1s-szs-qgb).

**Note**

If you choose automatic backup, only physical backup is supported.

**Instance**

**Backup method**

**Impact**

Standalone instance

Snapshot backup

**Note**

A snapshot is a point-in-time backup of disk data.

Snapshots created in a standalone instance affect the I/O performance of the instance.

-   Replica set instance that runs MongoDB 4.2 or earlier and uses local disks
    
-   Sharded cluster instance that runs MongoDB 4.2 or earlier and uses local disks
    

Physical backup

**Note**

Physical data files of an instance are backed up.

Physical backup runs on the hidden nodes of an instance, which does not affect the read/write performance of the primary and secondary nodes in the instance. If your instance has a large amount of data, a backup may require a long period of time.

Logical backup

**Note**

mongodump is used to logically back up each database.

-   Replica set instance that runs MongoDB 4.2 or later and uses cloud disks
    
-   Sharded cluster instance that runs MongoDB 4.2 or later and uses cloud disks
    

Snapshot backup

Snapshot backup runs on the secondary and hidden nodes of an instance, which does not affect the read/write performance of the primary node in the instance.

## Data restoration

ApsaraDB for MongoDB provides different restoration solutions. For more information, see [Restoration solutions](/help/en/mongodb/user-guide/data-restoration/#concept-d4y-fgr-3gb).
