An ApsaraDB for MongoDB sharded cluster instance provides the connection string for each mongos node. You can access the databases of the sharded cluster instance after connecting to a mongos node. However, you must use a correct method to connect to a sharded cluster instance to implement load balancing and high availability.

## Background information

![Architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842166951/p37678.png)

A MongoDB sharded cluster distributes and stores data on multiple shards to facilitate high scalability. When creating a sharded cluster, MongoDB uses a Configserver to store the metadata of the cluster and uses one or more mongos nodes to provide the entrance to the cluster for applications. The mongos nodes read routing information from the Configserver to route requests to corresponding shards at the backend.

-   When you connect to a mongos node, the mongos node can function as a mongod process.
    
-   All mongos nodes are equal. You can connect to one or more mongos nodes to access a sharded cluster instance.
    
-   Mongos nodes are stateless and can be scaled out as required. The service capability of a sharded cluster instance is subject to the smaller one between the total service capability of shards and that of mongos nodes.
    
-   When you access a sharded cluster instance, we recommend that you share the load of applications evenly among multiple mongos nodes.
    

## Connection string URIs

To correctly connect to a sharded cluster instance, you must understand the format of [connection string URIs](https://docs.mongodb.com/manual/reference/connection-string/) of MongoDB. All official MongoDB [drivers](https://docs.mongodb.com/manual/applications/drivers/) allow you to use a connection string URI to connect to MongoDB.

Example:

```
mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[database][?options]]
```

The parameters used in the connection string URI:

-   `mongodb://`: the prefix, indicating a connection string URI.
    
-   `username:password@`: the username and password used to log on to the database.
    
-   `hostX:portX`: the list of connection string used to connect to mongos nodes.
    
-   `/database`: the database corresponding to the username and password if authentication is enabled.
    
-   `options`: the additional options that are used to connect to the instance.
    

## Use a connection string URI to connect to a sharded cluster instance

You can use a connection string URI to connect to a sharded cluster instance to implement load balancing and high availability.

1.  Obtain the connection string URI of a sharded cluster instance. For more information, see [Connect to a sharded cluster instance](/help/en/mongodb/user-guide/connect-to-a-sharded-cluster-instance#concept-oq1-gx1-ffb).
    
2.  Use the obtained connection string URI to connect your applications to the instance. For more information, see [Connect to an ApsaraDB for MongoDB standalone instance by using program code](/help/en/mongodb/connect-to-an-apsaradb-for-mongodb-standalone-instance-by-using-program-code#concept-gy4-qsz-jfb).
    
    The following example is for the Java code. The database account is test and the database is admin.
    
    ```
    String user = "test";
    String password = "MongoDB****";
    String myURI = "mongodb://" + user + ":" + password + "@s-bp1c04c07823****.mongodb.rds.aliyuncs.com:3717,s-bp1500549e0b****.mongodb.rds.aliyuncs.com:3717/admin";
    MongoClient mongoClient = new MongoClient(new MongoClientURI(myURI));
    ```
    
    After you use the preceding method to connect to a sharded cluster instance, a client can automatically distribute requests to multiple mongos nodes to balance the load. If you have used a connection string URI to connect to two or more mongos nodes and a mongos node is faulty, the client can automatically skip this faulty node and distribute requests to the other normal mongos nodes.
    

If a large number of mongos nodes are used, you can group them by application. For example, you have application A, application B, and four mongos nodes. You can specify only the connection strings of mongos 1 and mongos 2 in the URI for application A, and specify only the connection strings of mongos 3 and mongos 4 in the URI for application B. In this way, you can isolate mongos nodes to provide separate entrance for different applications.

**Note**

Although applications are connected to mutually isolated mongos nodes, they share shards at the backend.

## Common connection options

-   Implement read/write splitting
    
    Add `readPreference=secondaryPreferred` in the options parameter to set read preference to secondary nodes.
    
    Example:
    
    The database account is test and the database is admin.
    
    ```
    mongodb://test:****@s-bp10fb1cf399****.mongodb.rds.aliyuncs.com:3717,s-bp10f49cdf5e****.mongodb.rds.aliyuncs.com:3717/admin?readPreference=secondaryPreferred
    ```
    
-   Limit connections
    
    Add `maxPoolSize=xx` in the options parameter to limit the maximum number of connections in the connection pool of a client to xx.
    
    The following example sets the maximum number of connections in a single client connection pool to 100. The database account is test and the database is admin.
    
    ```
    mongodb://test:****@s-bp10fb1cf399****.mongodb.rds.aliyuncs.com:3717,s-bp10f49cdf5e****.mongodb.rds.aliyuncs.com:3717/admin?readPreference=secondaryPreferred&maxpoolsize=100
    ```
    
-   Send an acknowledgment after data has been written to the majority of nodes
    
    Add `w= majority` in the options parameter to ensure that ApsaraDB for MongoDB sends an acknowledgment to a client after writing data to the majority of nodes for a write request.
    
    Example:
    
    The database account is test and the database is admin.
    
    ```
    mongodb://test:****@s-bp10fb1cf399****.mongodb.rds.aliyuncs.com:3717,s-bp10f49cdf5e****.mongodb.rds.aliyuncs.com:3717/admin?readPreference=secondaryPreferred&maxpoolsize=100&w=majority
    ```
