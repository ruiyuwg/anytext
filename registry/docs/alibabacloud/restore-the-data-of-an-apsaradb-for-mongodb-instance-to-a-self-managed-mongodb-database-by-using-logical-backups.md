Use `mongorestore` to restore logical backup files from an ApsaraDB for MongoDB instance to a self-managed MongoDB database. Logical backups of ApsaraDB for MongoDB instances are generated with `mongodump`, and `mongorestore` restores data from `mongodump` output.

## Prerequisites

Before you begin, make sure that you have:

-   An ApsaraDB for MongoDB instance that uses local SSDs
    
-   A self-managed MongoDB database running the same version as the ApsaraDB for MongoDB instance
    
-   The same major version of MongoDB Database Tools installed on the self-managed database host (on-premises server or ECS instance). Download from [Install MongoDB](https://docs.mongodb.com/manual/installation/)
    

**Important**

Use a `mongorestore` version that is compatible with your MongoDB version. An earlier `mongorestore` version does not support a later MongoDB version. For the compatibility matrix, see [mongorestore Compatibility](https://www.mongodb.com/docs/database-tools/mongorestore/#compatibility).

## Sharded cluster considerations

### Restore to a sharded cluster self-managed database

If the self-managed MongoDB database uses a sharded cluster architecture:

-   Set `<hostname>` to the `mongos` endpoint. Do not point to an individual shard.
    
-   Add `--nsExclude="config.*"` to the `mongorestore` command. Without this flag, the restore may fail with errors related to the config database.
    

### Restore from a sharded cluster instance

When restoring data from an ApsaraDB for MongoDB sharded cluster instance:

-   Download the backup data for each shard separately and import each backup into the self-managed database.
    
-   Orphaned documents in the sharded cluster instance may produce dirty data in the self-managed database.
    
-   When restoring backup files from multiple shards to the same sharded cluster database, add `--drop` only for the first shard. Omit `--drop` for subsequent shards to avoid deleting previously restored data.
    

## Step 1: Create a logical backup

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances** based on the instance type.
    
3.  In the upper-left corner of the page, select the resource group and region of the instance.
    
4.  Click the instance ID, or click ![More icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7734103461/p349570.png) in the **Actions** column and select **Manage**.
    
5.  In the upper-right corner of the instance details page, click **Back up Instance**.
    
6.  In the **Back up Instance** panel, set **Backup Method** to **Logical Backup**.
    
7.  Click **OK** and wait for the backup to complete.
    

## Step 2: Download the backup file

1.  Download the backup file. For detailed instructions, see [Download backup files](/help/en/mongodb/user-guide/download-backup-files#task-2112925).
    
2.  Copy the downloaded backup file to the host where the self-managed MongoDB database and `mongorestore` tool are installed.
    

## Step 3: Run `mongorestore`

Run the following command to import the backup data into the self-managed MongoDB database:

```
mongorestore -h <hostname> --port <server port> -u <username> -p <password> --drop --gzip --archive=<backupfile> -vvvv --stopOnError
```

### Required parameters

**Parameter**

**Description**

`<hostname>`

Address of the self-managed MongoDB database host. Use `127.0.0.1` for localhost. For sharded cluster architectures, set this to the `mongos` endpoint.

`<server port>`

Port number of the self-managed MongoDB database. Default: `27017`.

`<username>`

Account with read and write permissions on all databases. Use the root account.

`<password>`

Password for the specified account.

`<backupfile>`

File name or path of the downloaded logical backup file.

### Optional parameters

**Parameter**

**Description**

`--drop`

Drops each collection before restoring it. When restoring multiple shards to the same sharded cluster database, add this parameter only for the first shard.

`--gzip`

Decompresses gzip-compressed backup data during restore. Supported from MongoDB 3.1.4. For details, see [mongo-tools changelog](https://github.com/mongodb/mongo-tools/commit/a135683e6eab6381f4d424d247ee2c14b6310020).

`-vvvv`

Sets verbosity to the highest level. Each additional `v` increases the detail in the output log.

`--stopOnError`

Stops the restore process immediately when an error occurs.

`--nsExclude`

Excludes matching namespaces from the restore. Example: `--nsExclude="config.*"`. Required for sharded cluster self-managed databases.

### Performance tuning

For large datasets, add these parameters to improve restore performance:

**Parameter**

**Description**

`--numParallelCollections`

Number of collections to restore in parallel. Default: `4`. Increase this value if the target host has sufficient CPU and I/O capacity.

`--numInsertionWorkersPerCollection`

Number of concurrent insert workers per collection. Default: `1`. For large imports, increase this value based on your server's available resources.

Example with parallelism:

```
mongorestore -h 127.0.0.1 --port 27017 -u root -p <password> \
  --drop --gzip --archive=<backupfile> \
  --numParallelCollections=4 \
  --numInsertionWorkersPerCollection=4 \
  -vvvv --stopOnError
```

### Example

```
mongorestore -h 127.0.0.1 --port 27017 -u root -p ******** --drop --gzip --archive=hins1111_data_20190710.ar -vvvv --stopOnError
```

## Verify the restored data

After the restore completes, verify that the data was imported correctly.

### Check document counts

Connect to the self-managed MongoDB database and compare document counts between the backup and the restored database:

```
// Connect to the self-managed database
use <database_name>

// Check the document count for each collection
db.getCollectionNames().forEach(function(c) {
    print(c + ": " + db.getCollection(c).countDocuments({}));
});
```

Compare the output against the document counts in the source ApsaraDB for MongoDB instance.

### Run sample queries

Run a few queries on the restored data to spot-check that documents, fields, and values are intact:

```
// Verify a specific document exists
db.<collection_name>.findOne({ _id: ObjectId("<known_id>") })
```

### Verify indexes

Confirm that indexes were restored correctly:

```
db.<collection_name>.getIndexes()
```

Compare the index list against the source instance to verify that all indexes are present.

## Post-restore checklist

After verification, complete the following steps:

-   \[ \] Document counts match between the source instance and the self-managed database
    
-   \[ \] Indexes are present and match the source instance
    
-   \[ \] Sample queries return expected results
    
-   \[ \] Application connectivity to the self-managed database is confirmed
    
-   \[ \] If a sharded cluster restore was performed, check for orphaned documents and clean up dirty data
