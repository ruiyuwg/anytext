When you no longer need to use a worker node, you can remove it from the node pool or cluster it belongs to in the Container Service for Kubernetes (ACK) console. This topic describes how to remove a node from a node pool or cluster and the relevant usage notes. We recommend that you do this during off-peak hours.

**Note**

Node removal operations only apply to nodes within cloud node pools and exclude worker nodes in self-managed Kubernetes clusters hosted in on-premises data centers.

## Prerequisites

-   An ACK One registered cluster is created and an external Kubernetes cluster deployed in a data center is connected to the ACK One registered cluster. For more information, see [Create an ACK One registered cluster](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-ack-one-registered-clusters).
    
-   A node pool is created and a custom script for the node pool is configured. For more information, see [Create a node pool](/help/en/ack/distributed-cloud-container-platform-for-kubernetes/user-guide/create-and-manage-node-pools#title-t4j-tgr-up1).
    

## **Usage notes**

-   When you remove a node, log on to the [Container Service console](https://cs.console.alibabacloud.com) and perform the steps described in this topic. Do not remove a node by running the `kubectl delete node` command.
    
-   Do not release or remove ECS instances in the ECS or Auto Scaling console, or by calling API operations. Renew subscription ECS instances before they expire. When an ECS instance expires or is released, the node deployed on it stops running and is removed from the ACK console.
    
    If a node pool has the Expected Nodes parameter configured, the node pool automatically scales to maintain the expected number of ECS instances.
    
-   When you remove a node, the pods on the node are migrated to other nodes, which may cause service interruptions. Unexpected risks may arise when you remove a node. Before doing so, we recommend that you back up the data on it.
    
-   When you remove a node, the system drains it. Make sure that other nodes in the cluster can provide sufficient resources to host the pods that are evicted from the one that you remove.
    
-   To ensure that the pods on the node that you want to remove can be successfully scheduled to other nodes, we recommend that you check whether the node affinity rules and scheduling policies of the pods meet the requirements.
    

## **Feature description**

You can remove one or more worker nodes from a node pool or cluster. If a node pool has the **Expected Nodes** parameter configured, the node pool automatically scales to maintain the expected number of ECS instances.

> After you remove a node from a cluster, you can re-add it. For more information, see [Automatically or manually add nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#e66638fe3ch4o).

When you remove a node in the ACK console, you can select or clear the Drain Node and Release ECS Instance check boxes. The Drain Node check box specifies whether to automatically drain the node (evict pods to other nodes). The Release ECS Instance check box specifies whether to release the ECS instance (including the data disks attached to it).

### **Drain Node**

If you select the **Drain Node** check box, the system drains the node to evict pods to other nodes. This prevents service interruptions. Before you drain it, make sure that other nodes in the cluster can provide sufficient resources to host the pods evicted from the node that you remove. Note the following items:

-   During node removal, the default graceful shutdown period (terminationGracePeriodSeconds) of pods is 30 minutes. If you set it to more than this time, the default takes precedence. If the pod is not gracefully shut down within 30 minutes, the draining process is stopped and considered failed. The system will not perform the subsequent node removal operations, and you must manually retry the draining process.
    
    If your business pods have high requirements for the graceful shutdown period, we recommend that you manually drain the node by running the `kubectl drain <nodeName> [options]` command and then remove the node. After all business pods are evicted from the node, clear **Drain Node** and then remove the node.
    
    **Click to view the command description**
    
    -   `<nodeName>`: Set the value in the `<your-region-name>.<node-id>` format.
        
        `<your-region-name>`: Set the value to the region name of your cluster. `<node-id>`: Set the value to the ECS instance ID of the node that you want to remove. Example: cn-hangzhou.i-i-bp1asavedmte377c3\*\*\*\*.
        
    -   `options`: This parameter is optional. Example: `--force --ignore-daemonsets --delete-local-data`. For more information about how to configure node draining, run the `kubectl drain --help` command.
        
    
-   [PodDisruptionBudget (PDB)](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets) configurations: During the draining process, ACK evicts pods from the node to other available nodes based on the PDBs that are configured for the pods. To prevent issues during the draining process, we recommend that you check and modify the PDBs based on actual needs.
    

### **Release ECS Instance**

When the **Release ECS Instance** option is selected, node removal will permanently terminate the ECS instance and all attached data disks. We recommend that you back up the data on the node before doing this. If deselected, the ECS instance will persist after node removal and continue accruing charges.

-   Only pay-as-you-go ECS instances and the data disks attached to them can be released when the corresponding nodes are removed. You are still charged for the ECS instances that are not released.
    
-   Subscription ECS instances are automatically released after the subscription expires. To release a subscription ECS instance before expiration, [request a refund](/help/en/ecs/refund-instructions) before the end of the subscription duration. You can also [change the billing method of the instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b) and then release it.
    

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  Click the name of the node pool that the node belongs to. On the **Nodes** tab, select the nodes that you want to remove and click **Batch Remove** in the lower part of the page.
    
4.  Select or clear **Drain Node** and **Release ECS Instance**. Read the usage notes and then follow the on-screen instructions to remove the nodes.
