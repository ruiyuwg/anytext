When you no longer need to use a worker node, you can remove the node from the node pool or cluster to which it belongs in the Container Service for Kubernetes (ACK) console. This topic describes how to remove a node from a node pool or cluster and the relevant usage notes. We recommend that you remove nodes during off-peak hours.

## **Scenarios**

-   Free nodes exist in clusters created before the node pool feature was released. You may need to remove free nodes from your cluster. You may also need to re-add the free nodes to a node pool in your cluster. Node pools facilitate node management.
    
-   You want to replace an existing Elastic Compute Service (ECS) instance in your node pool with a newly purchased ECS instance.
    
-   You enable manual scale-out or auto scale-out for a node pool and want to remove specified ECS instances during scale-in activities to reduce costs.
    
-   You want to move a node from a node pool to another node pool. In this case, you need to remove the node from the original node pool and then add the node to another node pool.
    
-   You want to change the configurations of an ECS instance. In this case, you need to remove the node from the node pool, change the instance configurations in the ECS console, and then re-add the node to the node pool.
    
-   You want to change the billing method of an ECS instance. For example, you want to change the billing method of an ECS instance from pay-as-you-go to subscription. In this case, you need to remove the node from the node pool, change the billing method in the ECS console, and then re-add the node to the node pool.
    
-   You want to fix node exceptions. In this case, you need to remove the node from the cluster and then re-add the node to the cluster for initialization.
    
    > This operation is performed by resetting the node (replacing the system disk). Before you perform this operation, back up the data on the system disk.
    

## **Usage notes**

-   When you remove a node, log on to the [Container Service console](https://cs.console.alibabacloud.com) and perform the steps described in this topic. Do not remove a node by running the `kubectl delete node` command.
    
-   Do not release or remove ECS instances in the ECS or Auto Scaling console, or by calling API operations. Renew subscription ECS instances before they expire. When an ECS instance is released or expires, the node that is deployed on the instance stops running and is removed from the ACK console.
    
    If a node pool has the Expected Nodes parameter configured, the node pool automatically scales to maintain the expected number of ECS instances.
    
-   When you remove a node, the pods on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours. Unexpected risks may arise when you remove a node. Before you remove the node, we recommend that you back up the data on the node.
    
-   When you remove a node, the system drains the node. Make sure that other nodes in the cluster can provide sufficient resources to host the pods that are evicted from the node that you remove.
    
-   To ensure that the pods on the node that you want to remove can be successfully scheduled to other nodes, we recommend that you check whether the node affinity rules and scheduling policies of the pods meet the requirements.
    

## **Feature description**

You can remove one or more worker nodes from a node pool or cluster. If a node pool has the **Expected Nodes** parameter configured, the node pool automatically scales to maintain the expected number of ECS instances.

> After you remove a node from a cluster, you can re-add the node to the cluster. For more information, see [Automatically or manually add nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#e66638fe3ch4o).

When you remove a node in the ACK console, you can select or clear the Drain Node and Release ECS Instance check boxes. The Drain Node check box specifies whether to automatically drain the node (evict pods to other nodes). The Release ECS Instance check box specifies whether to release the ECS instance (release the instance and the data disks attached to the instance).

### **Drain Node**

If you select the Drain Node check box, the system drains the node to evict pods to other nodes. This prevents service interruptions. Before you drain the node, make sure that other nodes in the cluster can provide sufficient resources to host the pods that are evicted from the node that you remove. Take note of the following items:

-   Graceful shutdown period: During node removal, the default graceful shutdown period of pods is 30 minutes. If you set the graceful shutdown period (terminationGracePeriodSeconds) of a pod to a value larger than 30 minutes, such as 40 minutes, the default graceful shutdown period (30 minutes) takes precedence. If the pod is not gracefully shut down within 30 minutes, the draining process is stopped and considered failed. In this case, the system does not perform the subsequent node removal operations. You must manually retry the draining process.
    
    If your business pods have high requirements for the graceful shutdown period, we recommend that you manually drain the node by running the `kubectl drain <nodeName> [options]` command and then remove the node. After all business pods are evicted from the node, clear **Drain Node** and then remove the node.
    
    **Click to view the command description**
    
    -   `<nodeName>`_:_ Set the value in the `<your-region-name>.<node-id>` format.
        
        `<your-region-name>`: Set the value to the region name of your cluster. `<node-id>`: Set the value to the ECS instance ID of the node that you want to remove. Example: cn-hangzhou.i-i-bp1asavedmte377c3\*\*\*\*.
        
    -   `options`: This parameter is optional. Example: `--force --ignore-daemonsets --delete-local-data`. For more information about how to configure node draining, run the `kubectl drain --help` command.
        
    
-   [PodDisruptionBudget (PDB)](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets) configurations: During the draining process, ACK evicts pods from the node to other available nodes based on the PDBs that are configured for the pods. To prevent issues during the draining process, we recommend that you check and modify the PDBs based on actual needs.
    

### **Release ECS Instance**

If you select the Release ECS Instance check box, the ECS instance and the data disks attached to the instance are released when the node is removed. In this case, we recommend that you first back up the data on the node. If you clear the Release ECS Instance check box, the instance is still billed after you remove the node.

-   Only pas-as-you-go ECS instances and the data disks attached to the instances can be released when the corresponding nodes are removed. You are still charged for the ECS instances that are not released.
    
-   Subscription ECS instances are automatically released after the subscription expires. To release a subscription ECS instance before expiration, [request a refund](/help/en/ecs/refund-instructions) before the end of the subscription duration. You can also [change the billing method of the instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b) and then release the instance.
    

## Procedure

## **Remove nodes from a node pool**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  Click the name of the node pool to which the node belongs. On the **Nodes** tab, select the nodes that you want to remove and click **Batch Remove** in the lower part of the page.
    
4.  Select or clear **Drain Node** and **Release ECS Instance**. Read and understand the usage notes and then follow the on-screen instructions to remove the nodes.
    
    For more information about the **Drain Node** and **Release ECS Instance** dialog boxes, see [Feature description](#49a36f5812xsc).
    

## **Remove nodes from a cluster**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Nodes**.
    
3.  Select the nodes that you want to remove and click **Batch Remove** in the lower part of the page.
    
4.  Select or clear **Drain Node** and **Release ECS Instance**. Read and understand the usage notes and then follow the on-screen instructions to remove the nodes.
    
    For more information about the **Drain Node** and **Release ECS Instance** dialog boxes, see [Feature description](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11#49a36f5812xsc).
    

## FAQ

## **What do I do if I fail to remove a node?**

A node may fail to be removed due to the graceful shutdown period and PDB that are configured for a pod on the node. For more information, see [Feature description](#49a36f5812xsc). In this case, we recommend that you manually drain the node by running the `kubectl drain <nodeName> [options]` command and then remove the node. After all business pods are evicted from the node, remove the node.

-   `<nodeName>`_:_ Set the value in the `<your-region-name>.<node-id>` format.
    
    `<your-region-name>`: Set the value to the region name of your cluster. `<node-id>`: Set the value to the ECS instance ID of the node that you want to remove. Example: cn-hangzhou.i-i-bp1asavedmte377c3\*\*\*\*.
    
-   `options`: This parameter is optional. Example: `--force --ignore-daemonsets --delete-local-data`. For more information about how to configure node draining, run the `kubectl drain --help` command.
    

## References

-   For more information about how to remove nodes by calling API operations, see [RemoveNodePoolNodes](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-removenodepoolnodes) and [DeleteClusterNodes](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-deleteclusternodes).
    
-   For more information about how to add a free node to a node pool, see [Add free nodes to a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-free-nodes-to-a-node-pool).
    
-   ACK allows you to scale a node pool by modifying the **Expected Nodes** parameter of the node pool. For more information, see [Manually scale a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool#task-2285470).
    
-   To add an ECS instance as a worker node to an ACK cluster or re-add a worker node to the cluster, you can manually add the node in the ACK console or configure ACK to automatically add the node. For more information, see [Add existing ECS instances to an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#task-2548777)
    
-   For more information about how to reset an ECS instance or clear the data on the system disk of an ECS instance, see [Re-initialize a system disk (reset the operating system)](/help/en/ecs/user-guide/re-initialize-a-system-disk).
