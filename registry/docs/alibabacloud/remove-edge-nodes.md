To remove unnecessary nodes from a Container Service for Kubernetes (ACK) Edge cluster without affecting your business, you must perform valid operations on the node pool page in the ACK console. This topic describes how to remove edge nodes.

## Prerequisites

-   [An ACK Edge cluster is created](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1#task-skz-qwk-qfb).
    
-   [A kubectl client is connected to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb).
    

## Precautions

-   When you remove a node, the pods on the node are migrated to other nodes. This may cause service interruptions. We recommend that you remove nodes during off-peak hours and back up the data on the node before you remove it.
    
-   Nodes remain in the Unschedulable state when they are being removed.
    
-   You can remove only worker nodes. You cannot remove master nodes.
    
-   An ACK Edge cluster can contain two types of nodes: nodes in the cloud and edge nodes. You can remove both types of nodes at the same time.
    
-   You must retain at least one node in the cloud in an ACK Edge cluster.
    
-   We recommend that you remove nodes in the ACK console. If you want to run the `kubectl delete node` command to remove a cloud node, take note of the following limits:
    
    1.  The node cannot be added to other ACK clusters after it is removed.
        
    2.  The Elastic Compute Service (ECS) instance on which the node is deployed is released after the node is removed.
        

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side navigation pane, choose **Nodes** > **Node Pools**.
    
3.  Perform the following steps for an edge node pool or a node pool in the cloud based on your business requirements:
    
    ## Edge node pool
    
    1.  On the **Node Pools** page, click the name of the edge node pool that you want to remove.
        
    2.  In the lower part of the **Overview** tab, select the node that you want to remove and click **Remove Node**.
        
    3.  In the **Remove Node** panel, read the usage notes, select **I understand the above information and want to remove the node(s)**, and click **OK**.
        
        You cannot release ECS instances or automatically drain nodes when you remove edge nodes from an edge node pool.
        
    4.  To ensure that the Kubernetes components on the edge node that you have removed are uninstalled, run the `Reset` command in Edgeadm to reset the edge node.
        
        ```
        wget http://aliacs-k8s-[region].oss-[region].aliyuncs.com/public/pkg/run/attach/[clusterVersion]/[arch]/edgeadm -O edgeadm; chmod u+x edgeadm; ./edgeadm reset
        ```
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        region
        
        The region ID of the cluster.
        
        cn-hangzhou
        
        clusterVersion
        
        The Kubernetes version of the cluster.
        
        1.22.15-aliyunedge.1
        
        arch
        
        The CPU architecture of the edge node.
        
        amd64
        
    
    ## Node pool in the cloud
    
    1.  On the **Node Pools** page, click the name of the cloud node pool that you want to remove.
        
    2.  On the **Nodes** tab, select the nodes that you want to remove and click **Batch Remove** in the lower part of the page.
        
    3.  **Optional:** In the **Remove Node** dialog box, you can select **Release ECS Instance** and **Drain Node**.
        
        -   **Release ECS Instance**:
            
            -   Only pas-as-you-go ECS instances and the data disks on the instances are released. You are still charged for the ECS instances that are not released.
                
            -   Subscription ECS instances are automatically released after the subscriptions expire.
                
            -   If you do not select **Release ECS Instance**, you are still charged for the ECS instance where the node is deployed.
                
        -   **Drain Node**: Migrates pods that run on the nodes to be removed to other nodes in the cluster. If you select this option, make sure that other nodes in the cluster have sufficient resources to host these pods.
            
            You can also run the `kubectl drain node-name [options]` command to migrate pods that run on the nodes to other nodes in the cluster.
            
            **Note**
            
            -   _node-name_ must be in the _your-region-name_._node-id_ format.
                
                _your-region-name_ specifies the region where the cluster that you want to manage is deployed. _node-id_ specifies the ID of the ECS instance where the node to be removed is deployed. Example of node-name: cn-hangzhou.i-i-bp1asavedmte377c3\*\*\*\*.
                
            -   `options` specifies the optional parameters of the command. Example of options: `--force --ignore-daemonsets --delete-local-data`. You can run the `kubectl drain --help` command to view help information.
                
            
        
    

## Reference

For more information about how to add an edge node, see [Add an edge node](/help/en/ack/ack-edge/user-guide/add-an-edge-node#task-1478311).
