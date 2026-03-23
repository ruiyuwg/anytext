This topic describes the log deletion policy of ApsaraDB for MongoDB.

## Precautions

**Notice** The log deletion policy is triggered for an ApsaraDB for MongoDB instance when the oplogs of the instance occupy more than 10% of its disk space.

-   Before you perform high-risk operations such as modifying the configurations or data of an ApsaraDB for MongoDB instance, we recommend that you check the disaster recovery and fault tolerance capabilities of the instance to ensure data security.
-   Before you modify the configurations or data of an ApsaraDB for MongoDB instance, we recommend that you perform full data backup and enable log backup for the instance.
-   If you have granted permissions to users or submitted sensitive information such as logon usernames or passwords in the Alibaba Cloud Management console, we recommend that you modify the information at the earliest possibility.

Logs are automatically deleted when their size reaches a specific threshold. You can run the `db.runCommand({compact:'oplog.rs'})` command to delete oplogs for emergencies. For more information, see [Defragment the disk space to improve disk usage](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage#concept-ngj-sxl-sfb).

**Note**

-   You can run this command only on replica set instances.
-   Before you run the `compact` command, you must log on to the local database where the oplog.rs collection is stored.
-   The `db.repairDatabase` command is not allowed.
