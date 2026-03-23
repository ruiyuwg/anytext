If a system failure occurs, a PolarDB cluster automatically performs a failover. You can also perform a manual switchover to designate a read-only node as the new primary node.

## **Scope**

PolarDB for PostgreSQL Distributed Edition clusters do not support automatic or manual primary/secondary switchovers.

> PolarDB for PostgreSQL Distributed Edition clusters do not support automatic or manual primary/secondary switchovers.

## Before you begin

-   Both automatic and manual switchovers can cause a transient disconnection of about 30 seconds. Make sure your application has a reconnection mechanism.
    
-   Use the cluster connection endpoint so that your application automatically connects to the new primary node after a switchover.
    

## How automatic failover works

If a system failure occurs, PolarDB automatically performs a failover to elect a new primary node from the read-only nodes.

### Failover priority

Each node in the cluster has a failover priority, which determines its probability of being elected as the primary node. If multiple nodes have the same priority, they have an equal probability of being elected.

### Node selection process

The system selects a new primary node as follows:

1.  Identifies all eligible read-only nodes.
    
2.  Selects one or more read-only nodes with the highest priority.
    
3.  If the switchover to the first selected node fails due to network issues or an abnormal replication state, attempts the next node until the operation succeeds.
    

## Perform a manual switchover

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/), click **Clusters** in the navigation pane on the left, select the **Region** where the cluster is deployed, and then click the cluster ID to open the cluster details page.
    
2.  On the **Basic Information** page, find the **Database Nodes** section. Click the switch view icon in the upper-right corner to switch the view.
    
3.  Click **Fail Over**.
    
4.  In the dialog box, select the destination node from the **New Primary Node** list and click ****OK****.
    

## API reference

**API**

**Description**

[FailoverDBCluster](/help/en/polardb/polardb-for-postgresql/api-failoverdbcluster-1#doc-api-polardb-FailoverDBCluster)

Performs a manual primary/secondary switchover for a PolarDB cluster. Specify a read-only node as the new primary node.
