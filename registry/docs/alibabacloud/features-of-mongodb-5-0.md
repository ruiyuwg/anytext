This topic describes the key new features of MongoDB 5.0.

## Background information

MongoDB 5.0 marks a new release cycle to deliver new features to users faster than in the past. The combination of Versioned API and live resharding eliminates issues during database upgrades and business changes. The native time series platform enables MongoDB to support a wider range of workloads and business scenarios. The new Mongo Shell improves user experience.

## Native time series platform

MongoDB 5.0 natively supports the entire lifecycle of time series data, from ingestion, storage, query, real-time analysis, and visualization to online archival or automatic expiration as data ages. This streamlines the building and running of time series applications and lowers costs. In version 5.0, MongoDB has expanded the universal application data platform to make it easier for developers to process time series data. This further extends the application scenarios of MongoDB to areas such as IoT, financial analysis, and logistics.

MongoDB time series collections automatically store time series data in a highly optimized and compressed format, thus reducing storage size and I/O to deliver better performance on a larger scale. Time series collections also shorten the development cycle so that you can quickly build models optimized for the performance and analysis requirements of time series applications.

You can run the following command to create a time series data collection:

```
db.createCollection("collection_name",{ timeseries: { timeField: "timestamp" } } )
```

MongoDB seamlessly adjusts the acquisition frequency and automatically process out-of-order measurement values based on dynamically generated time partitions. Newly released MongoDB Connector for Apache Kafka implements local support for time series. You can directly create a time series collection from Kafka topic messages. This enables you to process and aggregate data during data collection, and then write them to a MongoDB time series collection.

The time series collection automatically creates a clustered index of data sorted by time to reduce data query latency. The MongoDB Query API also extends the window function so that you can run analytical queries (such as moving averages and cumulative sums). In relational database systems, analytical queries are usually referred to as SQL analysis functions and support windows defined in units of rows such as three-line moving averages. MongoDB adds powerful time series functions such as exponential moving average (EMA), derivative, and integral. This allows you to define a window in units of time such as a 15-minute moving average. Window functions can be used to query MongoDB time series and regular collections, which provides new analysis methods for multiple application types. Moreover, MongoDB 5.0 provides new time operators, including `$dateAdd`, `$dateSubstract`, `$dateDiff`, and `$dateTrunc`. This allows you to summarize and query data on a custom time window.

You can manage both MongoDB time series data and other data of your enterprise. Time series collections can be put together with regular MongoDB collections in the same database. You do not need to select a dedicated time series database that is unable to provide services for other types of applications, nor use complex integration to mix time series data and other data. MongoDB provides a unified platform that allows you to build high-performance and efficient time series applications, and also supports other use cases or workloads. This eliminates the cost and complexity of integrating and running multiple different databases.

## Live data resharding

**Configure the database version**

**Description**

**Implementation method**

Earlier versions of MongoDB

The resharding process is complex and requires manual operations.

-   Method 1: First dump the entire collection, and then reload the database into a new collection by using the new shard key.
    
    This process requires offline processing. Your application will remain in suspension for a long period of time while the reload is being completed. For example, the dumping and reloading of a collection that is larger than 10 TB on a three-shard cluster may take several days to complete.
    
-   Method 2: Create a new sharded cluster, configure shard keys for collections, and then perform custom migration to write the collection that you want to reshard from the existing sharded cluster to the new sharded cluster based on the configured shard keys.
    
    -   During this process, you must handle the query routing and migration logic and constantly check the migration progress to ensure that all data is migrated.
        
    -   Custom migration is a highly complex, labor-intensive, and time-consuming task that may incur risks. For example, one MongoDB user spent three months migrating 10 billion documents.
        

MongoDB 5.0

-   You can run the reshardCollection command to start resharding.
    
-   The resharding process is efficient.
    
    Instead of simply rebalancing data, the resharding process copies and rewrites all of the current collection data to the new collection in the background. During this process, new writes of the application are also synchronized.
    
-   The resharding process is fully automated.
    
    The period of time of resharding is shortened from weeks or months to minutes or hours, and lengthy and complex manual data migration is avoided.
    
-   By means of online resharding, you can easily evaluate the effect of different shard keys in a development or test environment. You can also modify the shard keys.
    

You can change the shard key for your collection on demand as your workload grows or evolves. No database downtime or complex migration within the dataset is required in this process. You can run the reshardCollection command in the MongoDB Shell to select the database and collection that you want to reshard and specify the new shard key.

```
reshardCollection: "<database>.<collection>", key: <shardkey>
```

**Note**

-   <database>: the name of the database that you want to reshard.
    
-   <collection>: the name of the collection that you want to reshard.
    
-   <shardkey>: the name of the shard key.
    
-   When you run the reshardCollection command on MongoDB, it clones an existing collection and then applies all operations logs in the existing collection to a new one. After applying all operations logs, MongoDB switches to the new collection and deletes the existing collection.
    

## Versioned API

-   Improves compatibility with applications
    
    The Versioned API feature of MongoDB 5.0 defines a set of commands and parameters that are most commonly used in applications. These commands remain unchanged for all database releases, including annual major releases and quarterly rapid releases. As a result, the application lifecycle is decoupled from the database lifecycle, which allows you to pin the driver to a specific version of the MongoDB API. This way, even after your database is upgraded, your application can continue to run for several years without the need to modify any code.
    
-   Allows you to flexibly add new features and improvements
    
    The Versioned API allows you to add new features to the database of each version with full backward compatibility. When you change an API, you can run a new version of the API on the same server at the same time as the existing version of the API. As new MongoDB versions are released at a faster pace, the Versioned API feature provides easier access to the features of the latest versions.
    

## Default majority write concern.

Starting from MongoDB 5.0, the default ranking of Write Concern is majority. A write operation is committed, and write success is passed back to the application only when the write operation is applied to the primary node and persisted to the logs of a majority of secondary nodes. This ensures that MongoDB 5.0 provides stronger data durability guarantees out of the box.

**Note**

The Write Concern is fully tunable. You can set the Write Concern to balance database performance and data durability.

## Optimization of connection management

By default, a client connection corresponds to a thread on the backend MongoDB server. In other words, net.serviceExecutor is set to `synchronous`. Large amounts of system resources are required for creating, switching, or destroying threads. When a large number of client connections exist, threads consume large amounts of resources

Situations where the number of connections is large or the creation of connections is out of control is referred to as a "connection storm". A connection storm may occur due to a variety of reasons. It often occurs when the services have already slowed down.

In response, MongoDB 5.0 takes following measures:

-   Limit the number of connections that the driver attempts to create, protecting the database server from being overloaded.
    
-   Reduce the frequency at which the driver checks connection pools, allowing unresponsive or overloaded server nodes to buffer and recover.
    
-   Allow the driver to switch to a faster server that has the healthiest connection pool rather than selecting an available server at random.
    

The preceding measures and the improvements made at the mongos query routing layer in previous versions further enhance the capabilities of MongoDB to handle high concurrency.

## Long-running snapshot queries.

Long-running snapshot queries improve the versatility and flexibility of applications. By default, snapshot queries executed by this feature have a duration of 5 minutes. The execution duration is customizable. In addition, this feature maintains strong consistency with snapshot isolation guarantees without affecting the performance of your live and transactional workloads, and allows you to execute snapshot queries on secondary nodes. This allows you to run different workloads in a single cluster and scale your workloads to different shards.

MongoDB implements long-running snapshot queries by means of a project called Durable history in the underlying storage engine. The project has been available since MongoDB 4.4. Durable history stores a snapshot of all field values that have changed since the outset of a query. Queries can use durable history to maintain snapshot isolation. If data is changed, durable history also helps alleviate the caching pressure of the storage engine and enables higher query throughput in high write load scenarios.

## New MongoDB Shell

For better user experience, the MongoDB Shell has been redesigned from the ground up to provide a modern command-line experience, enhanced usability features, and a powerful scripting environment. The new MongoDB Shell has become the default shell for MongoDB. The new MongoDB Shell introduces syntax highlighting, intelligent auto-complete, contextual help, and useful error messages to create a visualized and interactive experience.

-   Enhanced user experience
    
    -   Easier implementation of queries and aggregations, and improved readability
        
        The new MongoDB Shell supports syntax highlighting, which makes it easy for you to distinguish fields, values, and data types to avoid syntax errors. If errors persist, the new MongoDB Shell can pinpoint the issue and provide solutions.
        
    -   Faster query and command typing
        
        The new MongoDB Shell provides the intelligent auto-complete feature. The new MongoDB Shell can provide auto-complete prompts for methods, commands, and MQL expressions based on your MongoDB version.
        
        If you forget the syntax of a command, you can quickly search it in the MongoDB Shell. Sample syntax: ![Sample syntax](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1671557361/p328202.png)
        
-   Advanced scripting environment
    
    The scripting environment of the new MongoDB Shell is built on top of the Node.js REPL interactive interpreter. You can use all Node.js APIs and npm modules in your scripts. You can also load and run scripts from file systems. In the new MongoDB Shell, you can continue to use the load() method and eval() function to execute scripts in the same manner as you would in previous versions of MongoDB Shell.
    
-   Expandability and plug-ins
    
    The new MongoDB Shell can be easily expanded. This allows you to use all the features of MongoDB to boost productivity.
    
    The Snippets plug-in can be installed In the new MongoDB Shell. Snippets can be automatically loaded to the MongoDB Shell, and Snippets can use all Node.js APIs and npm packages. MongoDB maintains a Snippets repository that provides features such as analyzing plug-ins for specified collection patterns. You can also configure the MongoDB Shell to use specified plug-ins.
    
    **Note**
    
    The plug-in is currently an experimental feature of the MongoDB Shell.
    

## PyMongoArrow and data science

The new PyMongoArrow API allows you to implement complex analysis and machine learning tasks on MongoDB by using Python. PyMongoArrow can quickly convert simple MongoDB query results to prevalent data formats such as Pandas DataFrames and NumPy arrays to simplify your data science workflows.

## Schema validation improvements

Schema validation is a method used by MongoDB for data application management. In MongoDB 5.0, schema validation has become more simple and user-friendly. When an operation validation fails, a descriptive error message is generated to highlight documents that do not conform to the collection validation rules and for what reason. This way, you can quickly identify and correct the error code that affects the validation rules.

## Resumable index creation tasks

If an ongoing index creation task encounters a node restart, MongoDB 5.0 allows the task to automatically resume from where it left off. This reduces the impact of planned maintenance operations on business. For example, when database nodes are restarted or upgraded, you do not need to worry that the ongoing index creation tasks for large collections may fail.

## Version release adjustment

MongoDB supports various versions and platforms, and each version needs to be verified on more than 20 MongoDB-supported platforms. The heavy verification workload makes it slower to deliver new MongoDB features. To increase the delivery speed, starting with the 5.0 release, MongoDB is released as two different series: Major Releases and Rapid Releases. Rapid Releases are available for evaluation and development purposes. We recommend that you do not use Rapid Releases in a production environment.

## More features

For information about other features, see [Release Notes for MongoDB 5.0](https://docs.mongodb.com/v5.0/release-notes/5.0/).
