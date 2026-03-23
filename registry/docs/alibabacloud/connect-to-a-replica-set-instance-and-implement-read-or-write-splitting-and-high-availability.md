ApsaraDB for MongoDB replica set instances provide high availability and support read/write splitting. To implement read/write splitting and high availability, you must use a proper manner to connect to replica set instances and make necessary settings.

## Background information

The primary node of a replica set instance is not fixed to a specific node. When the primary node fails, the system triggers a primary/secondary switchover. This way, the original primary node is degraded to a secondary node.

If you use the endpoint of the primary node in a replica set instance to connect to the instance, all read/write operations are completed on the node, which causes high loads on the node. In addition, after a primary/secondary switchover, the original primary node becomes a secondary node. In this case, the client that you use the endpoint of the original primary node to connect to the instance cannot perform write operations, which seriously affects your business.

## **High availability**

ApsaraDB for MongoDB provides a connection string URL for a replica set instance. The URI allows you to connect to all nodes in the instance. After a primary/secondary switchover, write requests are routed to the new primary node in the instance, which ensures normal write operations.

For more information about the endpoints of a replica set instance, see [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance).

**Note**

-   To ensure high availability, we recommend that you use a connection string URI to connect your application in a production environment to the instance.
    
-   All official MongoDB drivers support the use of a connection string URI for instance connection. For more information about MongoDB drivers, see [Start Developing with MongoDB](https://www.mongodb.com/docs/drivers/).
    

### **View the connection string URI of a replica set instance**

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) page. In the top navigation bar, select the region in which the instance resides. Then, find the instance that you want to manage and click the ID of the instance.
    
2.  In the left-side navigation pane of the instance details page, click **Database Connections**.
    
3.  View the connection string URI of the instance.![高可用地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0486482371/p849287.png)
    
    After you use the connection string URI to connect to the instance, your client automatically detects the relationship between the primary and secondary nodes. If the primary node changes, the client automatically switches over write operations to the new primary node to ensure high availability of ApsaraDB for MongoDB.
    

## Read/write splitting

A connection string URI contains the `readPreference` and `readPreferenceTags` parameters. The `readPreference` parameter implements read/write splitting and load balancing while the `readPreferenceTags` parameter specifies that the system preferentially sends read requests to the nodes corresponding to specified tags.

The different combinations of the `readPreference` and `readPreferenceTags` parameters can meet the requirements of various scenarios. The following table describes parameter combinations in different scenarios.

**Method used to process failed read requests**

**Node to receive read requests**

**Parameter combination solution**

Send failed read requests to the primary node

Preferentially read data from the primary node

`&readPreference=primaryPreferred`

Preferentially read data from secondary and read-only nodes

`&readPreference=secondaryPreferred`

Preferentially read data from secondary nodes (cloud disk-based instances only)

`&readPreference=secondaryPreferred&readPreferenceTags=role:electable`

Preferentially read data from read-only nodes

`&readPreference=secondaryPreferred&readPreferenceTags=role:readonly`

Do not send failed read requests to the primary node

Read data only from secondary and read-only nodes

`&readPreference=secondary`

Read data only from secondary nodes (cloud disk-based instances only)

`&readPreference=secondary&readPreferenceTags=role:electable`

Read data only from read-only nodes

`&readPreference=secondary&readPreferenceTags=role:readonly`

### **How to use the connection string URI of an instance to implement read/write splitting**

If you want to implement read/write splitting and have specific scenarios, add the `readPreference` and `readPreferenceTags` parameters after the connection string URI of an instance.

For example, if you want all write requests to be sent to the primary node in an instance and read requests to be sent only to read-only nodes in the instance, and if you do not want failed requests to be sent to the primary node. you need only to add `&readPreference=secondary&readPreferenceTags=role:readonly` after the connection string URI of the instance. Example:

```
mongodb://root:****@dds-bp19f409d7512****.mongodb.rds.aliyuncs.com:3717,dds-bp19f409d7512****.mongodb.rds.aliyuncs.com:3717/admin?replicaSet=mgset-6108****&readPreference=secondary&readPreferenceTags=role:readonly
```

**Note**

The following list describes the driver versions used in the test environment:

-   pymongo 3.11.4
    
-   mongodb-driver-sync 4.6.1 
    
-   mongosh 2.2.15
    

## **References**

-   [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance)
    
-   [Connection Strings](https://www.mongodb.com/docs/manual/reference/connection-string/)
    
-   [Connect to a replica set instance by using program code](/help/en/mongodb/connect-to-a-replica-set-instance-by-using-the-program-code)
