Deleting documents from an ApsaraDB for MongoDB instance does not free disk space immediately. This topic describes three methods to reclaim unused disk space. You can use these methods independently or in combination.

# **Background**

ApsaraDB for MongoDB uses WiredTiger as the default storage engine starting from MongoDB 3.2. The `storage.directoryPerDB:true` parameter is enabled, so each database is stored as a separate folder on disk, and each collection is a separate file within that folder. For more information, see [storage.directoryPerDB](https://www.mongodb.com/docs/manual/reference/configuration-options/#mongodb-setting-storage.directoryPerDB).

When you run the [`delete`](https://www.mongodb.com/docs/manual/reference/command/delete/) command, WiredTiger marks the storage space as free for reuse instead of returning it to the operating system. This behavior is similar to how MySQL handles deleted rows. Disk usage does not decrease after document deletion.

To reclaim disk space, use one of the following methods.

# **Method 1: Drop unused indexes, collections, or databases**

Dropping an index, collection, or database deletes the underlying files immediately and frees disk space right away.

1.  Identify unused indexes, collections, or databases.
    
2.  Run the appropriate command:
    
    -   [`dropIndexes`](https://www.mongodb.com/docs/manual/reference/command/dropIndexes/) to remove unused indexes
        
    -   [`drop`](https://www.mongodb.com/docs/manual/reference/command/drop/) to remove unused collections
        
    -   [`dropDatabase`](https://www.mongodb.com/docs/manual/reference/command/dropDatabase/) to remove unused databases
        

Disk space is released as soon as the command completes.

# **Method 2: Compact collections to reclaim free space**

After deleting a large number of documents, run the [`compact`](https://www.mongodb.com/docs/manual/reference/command/compact/) command to reclaim the freed space within a collection. First, check how much free space exists.

## **Check free space**

Run the [`collStats`](https://www.mongodb.com/docs/manual/reference/command/collStats/) command and compare the `StorageSize` and `freeStorageSize` fields. A large `freeStorageSize` relative to `StorageSize` indicates significant reclaimable space.

## **Run the compact command**

Run the `compact` command on each collection that has significant free space. For detailed instructions, see [Defragment a disk to improve disk usage](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage).

**Important**

Run the `compact` command on each node separately. In a replica set, compact one node at a time. On a primary node, add `force: true` to the command, for example: `db.runCommand({compact: "collectionName", force: true})`.

**Warning**

In versions earlier than MongoDB 4.4, the `compact` command blocks all other operations. Proceed with caution.

# **Method 3: Copy documents to a new collection (offline only)**

Instead of running `compact`, copy all documents to a new collection and rename it. This approach works only in offline scenarios because it requires exclusive access to the data.

1.  Use the [`cursor.forEach`](https://www.mongodb.com/docs/manual/reference/method/cursor.forEach/) method to iterate through the source collection and insert each document into a new collection.
    
2.  Drop the original collection to free disk space.
    
3.  Rename the new collection to match the original collection name.
    

**Note**

This method requires application downtime. Use Method 2 (compact) for online scenarios.

# **See also**

-   [Defragment a disk to improve disk usage](/help/en/mongodb/use-cases/defragment-a-disk-to-improve-disk-usage)
