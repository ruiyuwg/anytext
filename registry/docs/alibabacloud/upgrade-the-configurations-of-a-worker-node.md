As the workload of your Kubernetes cluster increases or decreases, the resources of the cluster may become idle or insufficient. To improve resource utilization, Container Service for Kubernetes (ACK) allows you to change the configurations of worker nodes in a flexible manner.

**Important**

-   During the draining process, ACK drains a node and evicts pods from the node to other available nodes based on the [PodDisruptionBudgets (PDBs)](https://kubernetes.io/docs/concepts/workloads/pods/disruptions/#pod-disruption-budgets) that are configured for the pods. To ensure high service availability, we recommend that you use a multi-replica deployment strategy to distribute workloads across multiple nodes. You can also configure PDBs for key services to control the number of pods that are interrupted at the same time.
    
-   Unexpected risks may arise when you upgrade or downgrade the configurations of a worker node. We recommend that you back up the data on the node before you change the configurations of the worker node.
    
-   When you change the configurations of a worker node, the node remains in the Unschedulable state.
    
-   Before resizing a node pool that has [node scaling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/) enabled, you must first temporarily disable auto scaling by setting its **Scaling Mode** to ****Manual****. After the resize operation is complete, you can then re-enable auto scaling.
    

## Procedure

You can also change the configurations of multiple nodes that belong to the same node pool or different node pools in batches. Before you the configurations of a worker node, we recommend that you refer to [Suggestions on choosing ECS specifications for ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/select-ecs-instances-to-create-the-master-and-worker-nodes-of-an-ack-cluster) to select an appropriate instance specification for the node.

The following steps describe how to change the configurations of a subscription worker node. For more information about how to change node configurations, see [Overview of instance configuration changes](/help/en/ecs/user-guide/overview-of-instance-configuration-changes#concept-anb-bbf-5db).

### **Change the configurations of a node**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  On the **Nodes** page, find the node that you want to manage and choose **More** > **Drain** in the **Actions** column. In the Drain message, click **Confirm** to drain the node.
    
4.  After the node is drained, click the instance ID of the node to go to the instance details page. On the **Instance Details** tab, you can view the details of the instance, such as the instance type.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1477798471/p957696.png)
    
5.  In the **Configuration Information** section of the **Instance Details** tab, click **Change** on the right side of the instance type. The **Change Instance Type** dialog box appears.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1477798471/p956898.png)
    
6.  Select the new instance type that you want to use, confirm the estimated cost, and then click **Confirm Change and Pay**.
    
7.  In the **Stop Instance** dialog box, set the **Stopped By** parameter and click **OK**. For more information about how to stop an instance, see [Stop an instance](/help/en/ecs/user-guide/stop-an-instance).
    
8.  After you complete the configuration change, click **Start Instance and Return**. In the **Start Instance** dialog box, click **OK**. Wait until the node is re-added to the cluster and enters the **Ready** state. Choose \> **Schedulability Settings** in the **Actions** column and then set the node to schedulable.
    

### **Change the configurations of multiple nodes in batches**

You can perform the following steps to change the configurations of multiple nodes in batches:

-   When you change the configurations of multiple nodes that belong to different node pools in batches, the original Elastic Compute Service (ECS) instances are not replaced. In addition, the custom node configurations are retained.
    
-   When you change the configurations of multiple nodes that belong to the same node pool in batches, the original ECS instances are replaced by new ones. In addition, the custom node configurations are deleted.
    

#### Change the configurations of multiple nodes that belong to different node pools in batches

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  On the **Nodes** page, select the nodes that you want to manage and click Drain in the lower part of the page. In the Drain dialog box, click **OK** to drain the nodes.
    
4.  After the nodes are drained, log on to the [ECS console](https://ecs.console.alibabacloud.com). In the left-side navigation pane, choose **Instances & Images** > **Instances**.
    
5.  Select the ECS instances that you want to manage and choose **More** > **Upgrade/Downgrade** > **Change Instance Type** in the lower part of the page.
    
6.  Change the instance types.
    
    1.  Select the instance types to which the instances are to be upgraded.
        
        In the **Destination Instance Type** column, select a new instance type for each node and click **Next**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1477798471/p814329.png)
        
    2.  Check the instance status and click **Next**.
        
        -   If all the instances are in the **Stopped** state, click **Next**.
            
        -   If an instance is in the **Running** state, click **Stop All** and then click **Next**.
            
            **Important**
            
            -   When you stop a pay-as-you-go instance, we recommend that you set the **Stop Mode** parameter to **Standard Mode**. If you select **Economical Mode**, the computing resources (vCPUs and memory) of the instance are reclaimed. The instance may fail to be restarted due to insufficient computing resources.
                
            -   Service interruptions may occur when you stop instances. We recommend that you stop instances during off-peak hours.
                
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1477798471/p814337.png)
            
        
    3.  Confirm the cost and click **Confirm Change**.
        
7.  Start the instances and wait until the instances are re-added to the cluster and enter the **Ready** state. Then, select the nodes and click **Set Node Schedulability** in the lower part of the page to set the nodes to schedulable.
    

#### Change the configurations of multiple nodes that belong to the same node pool in batches

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster to manage and click its name. In the left navigation pane, choose **Nodes** > **Node Pools**.
    
3.  On the Node Pools page, find the node pool that you want to manage and click **Edit** in the **Actions** column. Change instance types in the **Instance Type** section based on your business requirements and click **Confirm**.
    
4.  After you change the instance types used by the node pool, [manually scale out the node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scale-a-node-pool) to add new nodes of the new instance types.
    
5.  After new nodes are added to the node pool and enter the **Ready** state, choose **Nodes** > **Nodes** in the left-side navigation pane.
    
6.  On the **Nodes** page, find the original nodes and choose **More** > **Drain** in the **Actions** column. In the Drain message, click **Confirm** to drain the original nodes.
    
7.  Confirm that the workloads run as expected on the new nodes and then [remove the original nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/remove-a-node-11).
    

## **References**

[Upgrade or downgrade the configurations of a master node in an ACK dedicated cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-the-configurations-of-a-master-node)
