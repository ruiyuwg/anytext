When a system failure occurs, a PolarDB cluster can automatically fail over services from the primary node to a read-only node. You can specify a read-only node as the new primary node to fail over services from the primary node to the read-only node.

## Precautions

During an automatic failover or a manual failover, transient disconnections may occur. Each transient disconnection lasts 20s to 30s. Make sure that your applications can be automatically reconnected to the cluster.

## Automatic failover

PolarDB clusters use an active-active architecture that ensures high availability. If the primary node that supports reads and writes is faulty, services are automatically failed over to the read-only node that is elected by the system as the new primary node.

A failover priority is assigned by the system to each node in a cluster. During a failover, a node is elected as the primary node based on the probability that is determined by this priority. The probability of being elected as the primary node is the same for the nodes that are assigned the same failover priority.

The system performs the following steps to promote a read-only node to the primary node:

1.  Find all the read-only nodes that can be promoted to the primary node.
    
2.  Select one or more read-only nodes that have the highest failover priority.
    
3.  If the first node fails to be promoted to the primary node due to network or replication errors, the system attempts to promote the next available node. The system continues this process until the failover is successful.
    

## Manual failover

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
    
2.  In the upper-left corner, select the region in which the cluster is deployed.
    
3.  Find the cluster and click its ID.
    
4.  In the upper-right corner of the **Database Nodes** section on the **Basic Information** page, click the ![Failover](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0526572061/p132024.png) icon to switch the display mode.
    
5.  Click **Fail Over**.
    
6.  In the dialog box that appears, select a new primary node from the **New Primary Node** drop-down list and click **OK**.
    

## Related API operations

**API**

**Description**

[FailoverDBCluster](/help/en/polardb/polardb-for-oracle/api-failoverdbcluster-2#doc-api-polardb-FailoverDBCluster)

Performs a manual failover by promoting a read-only node to a new primary node in a PolarDB cluster.
