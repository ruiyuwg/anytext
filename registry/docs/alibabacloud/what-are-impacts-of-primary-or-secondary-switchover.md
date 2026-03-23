## Impacts of primary/secondary switchover

-   During the primary/secondary switchover, a transient connection occurs for about 30 seconds.
-   If you connect your application to a primary node, the read/write operations of your application are affected as a result of the primary/secondary switchover.

## Suggestions

-   We recommend that you ensure your application can be reconnected to an ApsaraDB for MongoDB instance after it is disconnected and handle exceptions to protect business continuity.
-   If your application runs in a production environment, we recommend that you use a connection string URI to connect your application to the instance. This way, a primary/secondary switchover can be performed to ensure that the read and write operations of your application remain available even if a node fails. For more information, see [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh) or [Connect to a sharded cluster instance](/help/en/mongodb/user-guide/connect-to-a-sharded-cluster-instance#concept-oq1-gx1-ffb).
