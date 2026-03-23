An ACK One registered cluster adjusts the expected number of nodes in the node pool to scale the node pool and maintain the number of nodes based on the expected number of nodes. The scale-out operation ensures that the number of nodes is sufficient to support business operations. The scale-in operation can save costs. Scale-out and scale-in operations can be automatically performed to improve O&M efficiency.

## Prerequisites

-   [An ACK One registered cluster is created](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-ack-one-registered-clusters) and an external Kubernetes cluster deployed in an on-premises data center is connected to the ACK One registered cluster.
    
-   A node pool is created and a custom script for the node pool is configured. For more information, see [Create a node pool](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-and-manage-node-pools#title-t4j-tgr-up1).
    

## Introduction to scaling node pools

The expected number of nodes refers to the number of nodes to be retained in a node pool. It indicates the number of nodes in the node pool when the node pool reaches the final state. After you specify the expected number of nodes in a node pool, the nodes in the node pool are automatically scaled to the specified number.

### **Scale-out node pools**

When the expected number of nodes is set to be greater than the current number of nodes in the node pool, the system triggers a scale-out operation. You can scale out the node pool by increasing the expected number of nodes. The system can automatically retry when it fails to add nodes to the node pool until the current number of nodes in the node pool meets the expected number of nodes.

During the scaling process of a node pool, billing is based on the actual specifications created and used. For example, if a node pool is configured with two types of instance specifications, the billing method is **pay-as-you-go**, and the **Scaling Policy** is set to **Priority**. Then, during this scaling operation, two nodes of type A are added in the zone of the first priority vSwitch. If the resources of node A are insufficient, three nodes of type B are added in the zone of the second priority vSwitch. The cost for one hour will be calculated as the unit price of the instance specification multiplied by the number of nodes and the billing duration, that is, (Node A unit price × 2 × 1) + (Node B unit price × 3 × 1).

The system performs the following steps to scale out a node pool.

1.  Create ECS instances: Auto Scaling, the underlying service used by ACK to scale node pools, automatically creates Elastic Compute Service (ECS) instances. After you modify the expected number of nodes, ACK automatically changes the expected number of instances in the scaling group of Auto Scaling to scale out the node pool based on node pool configurations. The status of the node pool changes to Expanding. After Auto Scaling creates ECS instances, the status of the node pool changes to Activated. For more information about the Expected Number of Instances feature, see [Expected number of instances](/help/en/auto-scaling/user-guide/expected-number-of-instances#concept-2356685).
    
    **Important**
    
    Instances of GPU-accelerated ECS Bare Metal Instance families ebmgn7 and ebmgn7e cannot automatically delete the Multi-Instance GPU (MIG) configuration. When ACK adds instances of the preceding instance families, ACK automatically resets the MIG configuration retained on the instances. The reset may be time-consuming. In this case, you may fail to add the instances to a cluster.
    
    -   For more information about how to troubleshoot the issue, see [What do I do if I fail to add ECS Bare Metal instances?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-faq#section-htv-zt0-oxz)
        
    -   For more information about the ebmgn7e instance family, see [GPU-accelerated compute-optimized instance families (gn, ebm, and scc series)](/help/en/egs/gpu-accelerated-compute-optimized-instance-families#section-dem-yjl-04w).
        
    
2.  Add the ECS instances to the cluster: After Auto Scaling creates ECS instances, the ECS instances automatically run the `cloud-init` script maintained by ACK to initialize the nodes and add the nodes to the node pool. The operational log is saved to the /var/log/messages file on each node. You can log on to a node and run the `grep cloud-init /var/log/messages` command to view the log.
    
    **Note**
    
    -   After a node is added to the node pool, the operational log in the /var/log/messages file is automatically deleted. Therefore, the log records only information about failures to add nodes to the node pool.
        
    -   If the system fails to add a node to the node pool, the relevant log data in the /var/log/messages file is synchronized to the task result. You can view the task details on the **Cluster Tasks** tab of the cluster details page.
        
    

### **Scale-in node pools**

When the expected number of nodes is set to be less than the current number of nodes in the node pool, the system triggers a scale-in operation and removes nodes.

-   When the system scales in a node pool:
    
    -   If the scaling policy is set to Priority, the system preferably removes the newly created ECS instances from the scaling group.
        
    -   If the scaling policy is set to Distribution Balancing, the system filters the zones where the ECS instances are deployed based on the policy. Then, the newly created ECS instances are preferably removed from the scaling group to ensure that the numbers of ECS instances in different zones of the scaling group are close or the same.
        
    -   If the scaling policy is set to Cost Optimization, the system removes ECS instances from the scaling group in the descending order of vCPU prices.
        
-   When scaling in nodes by changing the expected number of nodes, ACK can remove nodes without the need to drain the nodes. If you want to drain the nodes before they are removed, use the specified node removal method. For more information, see [Remove nodes from a node pool](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/remove-nodes).
    
-   When scaling in nodes, subscription ECS instances are not released. If you want to release subscription instances, log on to the [ECS console](https://ecs.console.alibabacloud.com), convert the subscription instances to pay-as-you-go nodes, and then release them. For more information about how to change subscription instances to pay-as-you-go instances, see [Change the billing method from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1).
    

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  Find the node pool that you want to scale out and click **Scale** in the **Actions** column.
    
4.  Set the **Expected Nodes** parameter and complete the configuration as prompted.
    
    > After you submit the change, the following information appears in the Status column in sequence: **Updating**, **Scaling Out**, and **Removing**.
    
    -   If the status of the node pool in the node pool list displays **Scaling Out**, the system is scaling out the node pool. If the status of the node pool changes to **Active**, the node pool has scaled out.
        
        **Important**
        
        If the security group of the cluster denies access to 100.64.0.0/10, new nodes cannot be added to the cluster.
        
    -   If the status of the node pool in the node pool list displays **Removing**, the system is scaling in the node pool. If the status of the node pool changes to **Active**, the node pool has scaled in.
        
    

## References

-   For more information about removing nodes from a cluster, see [Remove nodes from a node pool](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/remove-nodes).
    
-   For more information about best practices for node pools, such as using a deployment set to distribute your ECS instances to different physical servers to ensure high availability and preemptible instance-based node pools, see [Best practices for nodes and node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-nodes-and-node-pools/).
