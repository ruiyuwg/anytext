This topic describes the compatibility and configuration change issues of ApsaraDB for MongoDB.

## What is the relationship between ApsaraDB for MongoDB and MongoDB?

ApsaraDB for MongoDB is a document database service compatible with the MongoDB protocol. It supports most MongoDB commands. Any client compatible with MongoDB can establish a connection with ApsaraDB for MongoDB for data storage and related operations.

To learn more about ApsaraDB for MongoDB and its advantages over self-managed databases, refer to the following topics:

-   [What is ApsaraDB for MongoDB?](/help/en/mongodb/product-overview/what-is-apsaradb-for-mongodb#concept-egq-tvn-tdb)
    
-   [Comparison between ApsaraDB for MongoDB and self-managed databases](/help/en/mongodb/product-overview/comparison-between-apsaradb-for-mongodb-and-self-managed-databases#concept-isb-1lr-n2b)
    

## Which database versions does ApsaraDB for MongoDB support?

ApsaraDB for MongoDB supports the following database versions: 8.0, 7.0, 6.0, 5.0, 4.4, 4.2, 4.0, and 3.4 (discontinued). We recommend that you use a client that corresponds to your database version. You can download clients for various programming languages from the [official website](https://docs.mongodb.org/ecosystem/drivers/).

-   For more information about differences between versions, see [MongoDB versions and storage engines](/help/en/mongodb/product-overview/mongodb-versions-and-storage-engines#concept-qg2-xcr-52b).
    
-   To view the database version of your instance, use one of the following methods:
    
    -   Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/). On the **Basic Information** page of the instance, view the database version in the **Specification Information** section.
        
    -   [Connect to an ApsaraDB for MongoDB replica set instance by using the mongo shell](/help/en/mongodb/connect-to-a-replica-set-instance-by-using-the-mongo-shell#concept-qgf-hv4-dgb) and run the `db.version()` command to view the database version.
        

## Does ApsaraDB for MongoDB support nesting?

Yes. In the following example, the content in the fields field is a nested document.

```
{
        "_id" : ObjectId("5cf0e51d8d1acb8a892ca65e"),
        "id" : "16399864",
        "timestamp" : "1453185620",
        "tablename" : "houseinfo",
        "dbname" : "corp_officebuilding",
        "primaryKeys" : "Id",
        "class" : "class com.uban.dts.bean.DtsLog",
        "dbType" : "MYSQL",
        "fieldCount" : "138",
        "opt" : "UPDATE",
        "fields" : {
                "Status" : {
                        "dest" : "0",
                        "orgi" : "1420041600"
                }
        }
}
```

## Which commands does ApsaraDB for MongoDB support and limit?

For more information about official MongoDB commands, see [Database Commands](http://docs.mongodb.org/master/reference/command/).

For more information about commands that ApsaraDB for MongoDB supports and limits, see [What commands are supported and not supported by ApsaraDB for MongoDB?](/help/en/mongodb/support/what-commands-are-supported-and-not-supported-by-apsaradb-for-mongodb)

## Does ApsaraDB for MongoDB support adding nodes?

-   Replica set instances
    
    Yes. By default, a replica set instance has three nodes. For more information, see [Change the configuration of a replica set instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-replica-set-instance#task-pwm-cfm-qfb).
    
-   Sharded cluster instances
    
    Yes. By default, a sharded cluster instance has two shards and two Mongos nodes. For more information, see [Change the configuration of a sharded cluster instance](/help/en/mongodb/user-guide/change-the-configurations-of-a-sharded-cluster-instance/#task-1580394).
    
-   Standalone instances
    
    No. a standalone instance does not support adding nodes due to its special architecture.
    

## Does ApsaraDB for MongoDB support Mongoose?

Yes. ApsaraDB for MongoDB is fully compatible with MongoDB Community Edition and supports Mongoose.

## What are the impacts of changing storage capacity on an instance?

For more information about how to change storage capacity and its impacts, see [Change the configuration of an instance](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/#concept-1580302).

**Note**

We recommend that you use an SRV connection string URI or a connection string URI to connect your application in a production environment to your instance. This prevents your application from being affected by primary/secondary switchovers. For more information, see [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh) and [Connect to a sharded cluster instance](/help/en/mongodb/user-guide/connect-to-a-sharded-cluster-instance).

## Why do I need to upgrade my instance to a later MongoDB version?

-   [New features and optimizations in the later versions](/help/en/mongodb/support/why-i-need-to-upgrade-my-instance-to-a-later-mongodb-version#6618e70959t0o): As the MongoDB community evolves, MongoDB provides more benefits such as enhanced performance, optimized security, and a wider range of features in the later versions.
    
-   [Risks in earlier versions](/help/en/mongodb/support/why-i-need-to-upgrade-my-instance-to-a-later-mongodb-version#271ea56a68doy): As the MongoDB community gradually stops support and maintenance for earlier MongoDB versions, you can face many challenges and may even encounter security and stability risks if continuing to use an earlier MongoDB version.
