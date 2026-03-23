This topic describes the new features and optimizations of MongoDB 6.0 in ApsaraDB for MongoDB.

## Quick preview

MongoDB 6.0 provides the following new features and optimizations:

-   New features
    
    -   [Queryable encryption](#section-s21-yj0-efd)
        
    -   [Cluster-to-Cluster Sync](#section-ugk-6et-q2n)
        
-   Optimizations
    
    -   [Time series collections](#section-hvy-d22-stk)
        
    -   [Change streams](#section-oyn-usz-yf0)
        
    -   [Aggregation](#section-jni-etn-tvr)
        
    -   [Queries](#section-ygq-fx6-dqa)
        
    -   [Elasticity](#section-dlq-ka8-pr3)
        
    -   [Security](#section-7mr-zk0-q1g)
        

**Note**

For information about more new features and optimizations of MongoDB 6.0, see [Release Notes for MongoDB 6.0](https://www.mongodb.com/docs/v6.0/release-notes/6.0/).

## Queryable encryption

**Important**

Queryable encryption is available only for public preview. We recommend that you do not use it in the production environment. For information about the preview release, see [MongoDB Releases Queryable Encryption Preview](https://www.mongodb.com/blog/post/mongodb-releases-queryable-encryption-preview).

MongoDB 6.0 provides queryable encryption, which allows users to encrypt sensitive data from the client side, store the data as fully randomized encrypted data on the database server side, and then run expressive queries on the encrypted data.

Queryable encryption allows only the client to obtain the plaintext of sensitive data. After a query that contains an encryption key obtained from Key Management Service (KMS) is sent to the server, the server processes the query and returns a response in ciphertext. Then, the client decrypts the response by using the encryption key and displays the response in plaintext.

Queryable encryption provides the following features:

-   Encrypts sensitive data from the client side and allows only the client to obtain the encryption key.
    
-   Encrypts data throughout the entire data lifecycle, which includes data transmission, storage, usage, auditing, and backup.
    
-   Allows the client to run expressive queries on encrypted data, including equality, range, prefix, suffix, and substring queries.
    
-   Protects data. Only applications that are authorized to access the client and users who have the permissions to access the encryption key can obtain the data in plaintext.
    
-   Allows lightweight application development. Queryable encryption provides a comprehensive encryption solution that eliminates the concerns about data security and compliance for developers.
    
-   Reduces security concerns for Alibaba Cloud users who want to store sensitive data.
    

**Note**

For more information about queryable encryption, see [MongoDB Releases Queryable Encryption Preview](https://www.mongodb.com/blog/post/mongodb-releases-queryable-encryption-preview).

## Cluster-to-Cluster Sync

MongoDB supports homogeneous (between MongoDB databases) and heterogeneous (between other databases and MongoDB databases) synchronization by using tools such as mongoimport, mongoexport, mongodump, and mongorestore. However, these tools have limits.

The mongosync tool is introduced in MongoDB 6.0 to provide you with continuous and uni-directional data synchronization between ApsaraDB for MongoDB instances. The mongosync tool allows you to manage and monitor the synchronization process in real time. In the process, you can start, stop, resume, or reverse the synchronization task.

**Note**

For more information about mongosync, see the "MongoDB Cluster-to-Cluster Sync Download" section on the [Try MongoDB Tools Free](https://www.mongodb.com/try/download/mongosync) page.

## Time series collections

Time series collection is a new feature released in MongoDB 5.0. This feature is mainly used to perform time series data analytics. Since its release, the feature has been continuously updated. The following table describes the feature update records.

**Version**

**Description**

MongoDB 5.0

The feature is released for the first time.

MongoDB 5.1

Sharding is introduced to support data distribution.

MongoDB 5.2

Columnar compression is introduced to reduce storage usage.

MongoDB 5.3

Gap filling and densification are introduced to handle missing data points in time series data analytics.

MongoDB 6.0

Time series collections are enhanced in terms of indexing, query, and sorting.

-   Secondary and compound indexes can be used on time series collections to improve read performance.
    
-   Geospatial indexes can be added for time series data to support scenarios that involve distance and location.
    
    For example, you can track temperature changes in refrigerated trucks and monitor fuel consumption of cargo ships on a specific route.
    
-   `last point` queries on time series data are optimized. You no longer need to scan the entire collection to obtain the last data point.
    
-   Time series data can be sorted in a more efficient manner by using timestamps and creating clustered and secondary indexes on metadata fields.
    

## Change streams

Change stream is a core feature released in MongoDB 3.6 to support change data capture (CDC). Change streams allow database changes to be obtained in real time to create event-driven applications or systems without reliance on data synchronization middleware.

The following table describes the update records of the change stream feature.

**Version**

**Description**

MongoDB 3.6

-   The feature is released for the first time.
    
-   Change streams can be applied only on collections.
    
-   Only a limited number of `events` are supported.
    
-   Fault recovery is supported.
    
-   Post-images can be viewed.
    

MongoDB 4.0

-   Change streams can be applied only on databases and instances.
    
-   `drop`, `dropDatabase`, and `rename` events are supported.
    
-   The format of a `resumeToken` is changed from `BinData` to `Hex`.
    

MongoDB 4.2

-   More `pipeline` operators such as `$set` and `$unset` are supported.
    
-   The `startAfter` option is added to start a new change stream at a specific point in time.
    
-   An exception can be thrown by change streams if the `_id` field of an event is modified.
    
-   The dependency on `{readConcern: majority}` is removed.
    

MongoDB 5.1

-   `stages` are executed more efficiently in some aggregation frameworks.
    
-   Change streams are optimized to improve resource utilization efficiency.
    

MongoDB 5.3

Updates to orphaned documents are supported during chunk migration.

MongoDB 6.0

-   Pre-images can be viewed.
    
    **Note**
    
    Prior to MongoDB 6.0, only post-images can be viewed. Starting from MongoDB 6.0, pre-images can also be viewed. For more information about pre-images and post-images, see [Change Streams with Document Pre- and Post-Images](https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre--and-post-images).
    
-   DDL statements such as `create`, `createIndexes`, `modify`, and `shardCollection` are supported. For more information, see [Change Events](https://www.mongodb.com/docs/manual/reference/change-events/).
    
-   The `wallTime` field is added to change events. The timestamp used by the field supports multiple conversion operators (including `$toDate`, `$tsSeconds`, and `tsIncrement`) to facilitate consumption.
    

## Aggregation

The aggregation feature allows you to process multiple documents to return calculation results. You can use multiple operators in a single aggregation pipeline to create a complex data processing pipeline to retrieve and analyze data. MongoDB 6.0 provides the following optimizations to the aggregation feature:

-   Supports `$lookup` and `$graphLookup` for sharded cluster instances.
    
-   Improves the support of `$lookup` for joins.
    
-   Improves the support of `$graphLookup` for graph traversal.
    
-   Achieves up to a hundredfold improvement in the performance of `$lookup`.
    

**Note**

For more information about `$lookup` and `$graphLookup`, see [$lookup (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/) and [$graphLookup (aggregation)](https://www.mongodb.com/docs/manual/reference/operator/aggregation/graphLookup/).

## Queries

Operators such as `$maxN`, `$topN`, `$minN`, `$bottomN`, `$lastN`, and `$sortArray` are added. Operators allow you to use databases for computing to reduce the burden on business applications.

**Note**

For more information about the operators, see [Aggregation Pipeline Operators](https://www.mongodb.com/docs/v6.0/reference/operator/aggregation/).

## Elasticity

MongoDB 6.0 provides the following new features and optimizations to improve elasticity:

-   Updates the default size of a data chunk from 64 MB to 128 MB. This reduces data migration frequency and decreases networking and routing overheads.
    
-   Supports the `configureCollectionBalancing` command that provides the following features:
    
    -   Supports different chunk sizes for different sharded tables.
        
        For example, you can set the chunk size to 256 MB for ultra-large sharded tables and set the chunk size to 64 MB or 32 MB for small sharded tables that require even data distribution.
        
    -   Supports the automatic defragmentation of sharded collections.
        
        You can run the `configureCollectionBalancing` command to configure automatic defragmentation. After you complete configurations, you no longer need to run the `compact` command to manage disk fragments. This reduces disk space usage.
        
    
    **Note**
    
    For more information about the `configureCollectionBalancing` command, see [configureCollectionBalancing](https://www.mongodb.com/docs/v6.0/reference/command/configureCollectionBalancing/).
    

## Security

MongoDB 6.0 optimizes the Client-Side Field Level Encryption (CSFLE) feature. After the optimization, CSFLE is available for Key Management Interoperability Protocol (KMIP)-compliant key providers. In other words, in addition to local Keyfile-based key management services, MongoDB also supports third-party key management devices by using KMIP. This provides enhanced security.

**Note**

CSFLE has been widely used in the management of sensitive data, especially in data migration scenarios.
