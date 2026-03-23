ApsaraDB for MongoDB uses high availability (HA) architecture. When an ApsaraDB for MongoDB instance detects that one of its nodes is unavailable, it triggers primary/ssecondary switchover. It also sends a Short Message Service (SMS) message or internal notice to inform you of the switchover.

## Internal notice

\[Alibaba Cloud\] Dear \*\*\*\*: Your ApsaraDB for MongoDB instance dds-bp\*\*\*\* (name: \*\*\*\*) has an error. A switchover is triggered to ensure stable running of your instance. We recommend that you check whether your application is still connected to your instance and configure your application to automatically reconnect to your instance.

## Why do I receive the internal notice?

ApsaraDB for MongoDB uses HA architecture. A replica set instance of ApsaraDB for MongoDB contains three nodes by default, and a sharded cluster instance of ApsaraDB for MongoDB has each of its shards contain three nodes. Primary and secondary nodes are used for you to connect your application, and hidden nodes are used for primary/secondary switchover, which ensures HA. For more information, see [Replica set instances](/help/en/mongodb/product-overview/replica-set-instances#concept-bnt-3zn-tdb) or [Sharded cluster instances](/help/en/mongodb/product-overview/sharded-cluster-instances#concept-rcj-dc4-tdb).

Common causes:

-   Node is unavailable: ApsaraDB for MongoDB supports node health monitoring. When the monitoring results show an unavailable node, primary/secondary switchover is triggered.
    
-   Host is offline: An exception occurs on the host where the primary node in the ApsaraDB for MongoDB instance is deployed. To avoid the case where ApsaraDB for MongoDB considers that the host is offline, primary/secondary switchover is triggered to ensure the high availability of the instance.
    

## Impacts of primary/secondary switchover

-   Primary/secondary switchover causes a transient connection of less than 30 seconds.
    
-   If you connect your application to a primary node, the read/write operations of your application are affected as a result of the primary/secondary switchover.
    

## Suggestions

-   We recommend that you configure your application to reconnect to an ApsaraDB for MongoDB instance after it is disconnected.
    
-   If your application runs in a production environment, we recommend that you use a connection string URI to connect your application to the instance. In this way, the read/write operations of your application remain available even if a node fails as a result of primary/secondary switchover. For more information, see [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh) or [Connect to a sharded cluster instance](/help/en/mongodb/user-guide/connect-to-a-sharded-cluster-instance#concept-oq1-gx1-ffb).
