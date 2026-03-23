In older ACK clusters created before the node pool feature was released, some worker nodes may not be managed by any node pool. If you no longer need these nodes, release their ECS instances directly. If you want to keep them, add them to a node pool for grouped management and automated operations and maintenance.

## Step 1: Create and scale out a node pool

Before migration, create a node pool and scale it out. Set the desired number of nodes to match the number of unmanaged nodes. Configure the node pool with the same specifications as the unmanaged nodes.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Nodes** > **Node Pools**.
    
3.  In the upper-right corner of the **Node Pools** page, click **Create Node Pool**. Configure the parameters and click **Confirm**.
    
    For details about configuration items, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool#task-2457443).
    

## Step 2: Remove unmanaged nodes

Remove unmanaged nodes from the ACK console. Clear the **Release ECS Instance** check box. For detailed steps, see [Remove nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node#task-tqk-v54-dgb).

## Step 3: Add existing nodes

After removing the nodes, add their ECS instances back to the node pool. For steps and important notes, see [Add existing nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#task-2548777).

## References

-   A managed node pool is an ACK node pool that supports automated operations and maintenance. It provides automatic fault recovery, automatic kubelet upgrades, and automatic CVE fixes. This reduces the operational burden of managing node pools. For more information, see [Managed node pool overview](/help/en/ack/overview-of-managed-node-pools).
    
-   Scale a node pool in or out by setting its desired number of nodes. This keeps the node count at the desired level and helps reduce costs. For more information, see [Manually scale node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool).
    
-   Compare runtimes supported by node pools, such as containerd and Docker. For more information, see [Compare containerd, sandboxed containers, and Docker runtimes](/help/en/doc-detail/2381087.html).
    
-   To avoid security and stability risks from outdated clusters, upgrade your ACK cluster to the latest version. For detailed steps, see [Manually upgrade a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   To release ECS instances, see [Release an instance](/help/en/ecs/user-guide/release-an-instance).
