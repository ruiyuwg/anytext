## Problem description

When data is written to a replica set instance, the following error message returned: `"errmsg": "not master", "code": 10107, "codeName": "NotMaster"`, `"errmsg": "not master", "code": 10107, "codeName": "NotWritablePrimary"`, or `Time out after 30000ms while waiting for a server that matches writableServerSelector.`.

## Causes

A primary/secondary switchover occurs on the replica set instance. The node roles change. If your business is connected to the endpoint of the primary node, the secondary node is actually connected after the primary/secondary switchover. Therefore, the data write fails.

**Note**

A primary/secondary switchover is triggered for many reasons. For more information, see [What causes the primary/secondary switchover for an instance?](/help/en/mongodb/what-causes-the-primary-secondary-switchover-for-an-instance#concept-2278758).

Each replica set instance contains one primary node, one or more secondary nodes, one hidden node, and optionally one or more read-only nodes. Each node has its own attribute information such as node role (primary, secondary, hidden, or read-only), node ID, node IP address, endpoint, and port. A primary/secondary switchover causes the node role to change, while other attributes of the node remain unchanged.

In the replica set instance, Node 1 is the primary node, and Node 2 is the secondary node. The endpoint of the primary node (Node 1) is connected before the primary/secondary switchover. The endpoint of the secondary node (Node 2) is actually connected after the primary/secondary switchover. Therefore, the data write fails.

## Solutions

-   Manually switch the node roles of the instance. The node whose endpoint is actually connected after the primary/secondary switchover serves as the primary node. For more information about how to switch node roles, see [Switch node roles](/help/en/mongodb/user-guide/switch-node-roles#concept-943865).
    
-   If your application runs in a production environment, we recommend that you use a connection string URI to connect your application to the instance. This way, a primary/secondary switchover can be performed to ensure that the read and write operations of your application remain available even if a node fails. For more information, see [Connect to a replica set instance](/help/en/mongodb/user-guide/connect-to-a-replica-set-instance#concept-44623-zh).
    
-   We recommend that you ensure your application can be reconnected to an ApsaraDB for MongoDB instance after it is disconnected and handle exceptions to protect business continuity.
