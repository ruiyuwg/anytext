If you no longer need a worker node, you can remove it from a node pool or a cluster in the Container Service for Kubernetes (ACK) console. To prevent service disruptions, perform this operation during off-peak hours and follow the precautions and feature descriptions in this topic.

## **Scenarios**

-   A cluster that was created before the node pool feature was introduced contains unmanaged worker nodes. You can remove an unmanaged node from the cluster. To use the node later, you can add it to an existing node pool to facilitate batch operations.
    
-   You want to replace an old Elastic Compute Service (ECS) instance in a node pool with a new one. To do this, you can add the new instance to the node pool and then remove the old one.
    
-   A node pool is configured with manual or automatic scaling. You can scale in the node pool by removing a specific ECS instance to save costs.
    
-   You need to migrate a node from one node pool to another. You can remove the node from the source node pool and add it to the destination node pool.
    
-   You need to upgrade or downgrade an ECS instance. You can remove the corresponding node, change the instance configuration in the ECS console, and then add the node back to the node pool.
    
-   You need to change the billing method of an ECS instance, for example, from pay-as-you-go to subscription. You can remove the corresponding node, change the billing method in the ECS console, and then add the node back to the node pool.
    
-   A node is abnormal. You can re-initialize the node by removing it from and then adding it back to the cluster.
    
    > This operation resets the node by replacing its system disk. Make sure to back up important data on the system disk.
    

## **Precautions**

-   When you remove a node, perform the operation in the [ACK console](https://cs.console.alibabacloud.com). Do not manually remove a node by running the `kubectl delete node` command.
    
-   Do not release nodes or remove instances in the ECS or Auto Scaling (ESS) console or through their APIs. Do not allow subscription instances to be automatically released upon expiration. In these cases, the nodes are stopped and automatically removed from the ACK console.
    
    If a desired number of nodes is set for the node pool, the node pool automatically scales out to create new instances to maintain the specified number of nodes.
    
-   Removing a node involves pod migration, which may affect your services. Perform this operation during off-peak hours. To prevent unexpected risks, back up your data in advance.
    
-   When you remove a node, ACK drains the node. Make sure that other nodes in the cluster have sufficient resources to prevent application pods from failing to be scheduled.
    
-   Check the node affinity rules and scheduling policies for the pods on the node that you want to remove. This ensures that the pods can be scheduled to other nodes after the node is removed.
    
-   The lifecycles of the system disk and data disks are bound to the node. When a node is released upon removal, its disks are also released. All data on the disks is permanently lost and cannot be recovered. To protect your data, use a PersistentVolume (PV) to manage data that requires persistence. This decouples the data from the node lifecycle.
    

## **Feature description**

Removing a node means removing one or more worker nodes from a node pool or a cluster. If you set a **Expected Nodes** for the node pool, which is the total number of nodes that the node pool must maintain, the value is automatically adjusted.

> To add the instance back to the cluster after removal, see [Procedure](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#e66638fe3ch4o).

Before you remove a node, you can choose whether to automatically drain the node and whether to release the ECS instance. Draining a node safely evicts the pods on the node to other nodes. Releasing the ECS instance also releases its data disks.

#### **Drain Node**

Before a node is removed, it is drained to safely evict its pods to other nodes. This prevents service interruptions. Before you perform this operation, make sure that other nodes in the cluster have sufficient resources to prevent application pods from failing to be scheduled. Note the following points.

-   Graceful pod shutdown configuration: When you remove a node, the default timeout period for a graceful pod shutdown is 30 minutes. Even if a pod is configured with a longer \`terminationGracePeriodSeconds\` value, such as 40 minutes, the system still uses the 30-minute timeout period. If a pod fails to gracefully shut down within 30 minutes, the system forcibly terminates the pod. The drain operation fails and the node removal process stops. You must manually retry the operation.
    
    If your application pods require a long graceful termination period, you can first manually drain the node using the `kubectl drain <nodeName> [options]` command. After no application pods are running on the node, clear the **Drain Node** check box and then remove the node.
    
    **Click to view the command description**
    
    -   `<nodeName>`: The name of the node. Example: `cn-hangzhou.10.126.XX.XX`.
        
    -   `[options]`: Optional parameters. For example, you can set this parameter to `--force --ignore-daemonsets --delete-local-data`. For more information, run the `kubectl drain --help` command.
        
    
-   Pod Disruption Budget (PDB) configuration: The node drain operation evicts pods to other available nodes based on the [PDB](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets). Check and modify or delete the PDB rules to prevent drain failures.
    

#### **Release ECS Instance**

You can release the ECS instance and its data disks after the node is removed. Back up your data in advance. If you do not select this option, the ECS instance continues to be billed and you must manage its lifecycle.

-   Only pay-as-you-go ECS instances and their data disks can be released. If an ECS instance is not released, it continues to be billed.
    
-   Subscription ECS instances are automatically released after their subscription periods expire. Before a subscription ECS instance expires, you can [request a refund](/help/en/ecs/refund-instructions) to release it in advance. You can also [convert the billing method of the instance from subscription to pay-as-you-go](/help/en/ecs/change-the-billing-method-of-an-instance-from-subscription-to-pay-as-you-go-1#concept-hzg-ggr-l2b) and then release it.
    
-   For node pools in which smart hosting is enabled, the system automatically manages the node lifecycle. The system automatically adds or removes nodes based on workload requirements. When a node is removed, its underlying ECS resources are completely removed.
    

## Procedure

#### **Remove a node from a node pool**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  Click the name of the target node pool. On the **Nodes** tab, remove the node.
    
    -   **Remove a single node**: Find the target node and choose **More** > **Remove** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6804186471/p952334.png)
        
    -   **Remove multiple nodes**: Select the target nodes and click **Batch Remove** at the bottom of the page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6804186471/p952333.png)
        
4.  Select whether to select **Drain Node** and **Release ECS Instance**. Read the notes on the page and follow the on-screen instructions to complete the operation.
    
    For more information about the precautions for **Drain Node** and **Release ECS Instance**, see [Feature description](#49a36f5812xsc).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6804186471/p952351.png)
    

#### **Remove a node from a cluster**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  On the **Nodes** page, remove the node.
    
    -   **Remove a single node**: Find the target node and choose **More** > **Remove** in the **Actions** column.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6804186471/p952335.png)
        
    -   **Remove multiple nodes**: Select the target nodes and click **Batch Remove** at the bottom of the page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6804186471/p952336.png)
        
4.  Select whether to select **Drain Node** and **Release ECS Instance**. Read the notes on the page and follow the on-screen instructions to complete the operation.
    
    For more information about the precautions for **Drain Node** and **Release ECS Instance**, see [Feature description](#49a36f5812xsc).![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6804186471/p952351.png)
    

## FAQ

### **What do I do if a node fails to be removed?**

A node may fail to be removed for reasons such as the graceful shutdown period or PDB configuration. For more information, see [Feature description](#49a36f5812xsc). In this case, first manually drain the node by running the `kubectl drain <nodeName> [options]` command. After all application pods are evicted from the node, remove the node.

-   `<nodeName>`: The name of the node. Example: `cn-hangzhou.10.126.XX.XX`.
    
-   `[options]`: Optional parameters. For example, you can set this parameter to `--force --ignore-daemonsets --delete-local-data`. For more information, run the `kubectl drain --help` command.
    

## References

-   You can also remove nodes by calling API operations. For more information, see [RemoveNodePoolNodes](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-removenodepoolnodes) and [DeleteClusterNodes](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-deleteclusternodes).
    
-   To add unmanaged nodes to a node pool for management, see [Migrate unmanaged nodes to a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-free-nodes-to-a-node-pool).
    
-   ACK lets you manually scale a node pool by adjusting the **Expected Nodes** to maintain the specified number of nodes. For more information, see [Manually scale a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool#task-2285470).
    
-   If you purchase an ECS instance and want to add it to an ACK cluster as a worker node, or if you want to add a removed node back to a node pool, you can automatically or manually add the node in the ACK console. For more information, see [Add existing nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-existing-ecs-instances-to-an-ack-cluster#task-2548777).
    
-   To reset an ECS instance or clear data on its system disk, see [Re-initialize a system disk (reset an operating system)](/help/en/ecs/user-guide/re-initialize-a-system-disk).
